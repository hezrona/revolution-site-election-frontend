import { useState, useEffect, useRef, useMemo } from "react";
import {
  getFiches,
  getFiche,
  createFiche,
  createFicheFromDocx,
  updateFiche,
  deleteFiche,
} from "../../api/fiches.js";

export default function FichesTab({ token }) {
  const [fiches,    setFiches]    = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [view,      setView]      = useState("list"); // "list" | "form"
  const [editing,   setEditing]   = useState(null);
  const [search,    setSearch]    = useState("");
  const [form,      setForm]      = useState({ nom: "", contenu: "" });
  const [saving,    setSaving]    = useState(false);
  const [saveMsg,   setSaveMsg]   = useState(null);
  const [importing, setImporting] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    getFiches(token)
      .then(data => setFiches(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return fiches;
    return fiches.filter(f => f.nom.toLowerCase().includes(q));
  }, [fiches, search]);

  const openCreate = () => {
    setEditing(null);
    setForm({ nom: "", contenu: "" });
    setSaveMsg(null);
    setView("form");
  };

  const openEdit = async (fiche) => {
    const full = await getFiche(fiche.id, token);
    setEditing(full);
    setForm({ nom: full.nom || "", contenu: full.contenu || "" });
    setSaveMsg(null);
    setView("form");
  };

  const handleDelete = async (id, nom) => {
    if (!confirm(`Supprimer la fiche « ${nom} » ?`)) return;
    await deleteFiche(id, token);
    setFiches(prev => prev.filter(f => f.id !== id));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.nom.trim()) { setSaveMsg({ ok: false, text: "Le nom est requis." }); return; }
    setSaving(true);
    setSaveMsg(null);
    try {
      if (editing) {
        const updated = await updateFiche(editing.id, form, token);
        setFiches(prev => prev.map(f => f.id === editing.id ? { ...f, ...updated } : f));
        setSaveMsg({ ok: true, text: "Fiche mise à jour." });
      } else {
        const created = await createFiche(form, token);
        setFiches(prev => [created, ...prev]);
        setSaveMsg({ ok: true, text: "Fiche créée." });
        setForm({ nom: "", contenu: "" });
      }
    } catch {
      setSaveMsg({ ok: false, text: "Erreur lors de la sauvegarde." });
    } finally {
      setSaving(false);
    }
  };

  const handleImport = async e => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = "";
    setImporting(true);
    try {
      const created = await createFicheFromDocx(file, null, token);
      if (created?.id) {
        setFiches(prev => [created, ...prev]);
      } else {
        alert(created?.error || "Erreur lors de l'importation.");
      }
    } catch {
      alert("Impossible d'importer le fichier.");
    } finally {
      setImporting(false);
    }
  };

  if (loading) return <p className="admin-loading" style={{ padding: 24 }}>Chargement…</p>;

  /* ── Vue formulaire ── */
  if (view === "form") {
    return (
      <div className="blog-admin-form-wrap">
        <div className="blog-admin-form-bar">
          <button
            type="button"
            className="blog-admin-back"
            onClick={() => setView("list")}
          >
            ← Retour à la liste
          </button>
          <span className="blog-admin-form-title">
            {editing ? editing.nom : "Nouvelle fiche"}
          </span>
        </div>

        <form className="blog-admin-form" onSubmit={handleSubmit}>
          <div className="blog-form-row">
            <label htmlFor="fi-nom">Nom *</label>
            <input
              id="fi-nom"
              name="nom"
              type="text"
              value={form.nom}
              onChange={handleChange}
              placeholder="Nom de la fiche"
              required
            />
          </div>

          <div className="blog-form-row">
            <label htmlFor="fi-contenu">
              Contenu{" "}
              <span className="blog-form-hint">(Markdown)</span>
            </label>
            <textarea
              id="fi-contenu"
              name="contenu"
              rows={20}
              className="blog-form-content"
              value={form.contenu}
              onChange={handleChange}
              placeholder="Rédigez le contenu de la fiche en Markdown…"
            />
            <p className="fiches-char-count">
              {form.contenu.length} caractère{form.contenu.length !== 1 ? "s" : ""}
            </p>
          </div>

          {saveMsg && (
            <div className={`nl-result ${saveMsg.ok ? "ok" : "err"}`}>
              {saveMsg.text}
            </div>
          )}

          <div className="blog-form-actions">
            <button
              type="button"
              className="blog-form-btn-cancel"
              onClick={() => setView("list")}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="blog-form-btn-save"
              disabled={saving}
            >
              {saving ? "Enregistrement…" : editing ? "Mettre à jour" : "Créer la fiche"}
            </button>
          </div>
        </form>
      </div>
    );
  }

  /* ── Vue liste ── */
  return (
    <div className="blog-admin-list-wrap">
      <div className="blog-admin-list-bar">
        <span className="blog-admin-list-count">
          {fiches.length} fiche{fiches.length !== 1 ? "s" : ""}
        </span>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            type="file"
            accept=".docx"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImport}
          />
          <button
            type="button"
            className="blog-admin-btn-cats"
            onClick={() => fileInputRef.current?.click()}
            disabled={importing}
          >
            {importing ? "Importation…" : "📎 Importer un .docx"}
          </button>
          <button
            type="button"
            className="blog-admin-btn-new"
            onClick={openCreate}
          >
            + Nouvelle fiche
          </button>
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <input
          type="search"
          className="fiches-search-input"
          placeholder="Rechercher par nom…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="admin-empty" style={{ padding: "24px 0" }}>
          {search ? "Aucun résultat pour cette recherche." : "Aucune fiche pour l'instant."}
        </p>
      ) : (
        <div className="blog-admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Aperçu du contenu</th>
                <th style={{ whiteSpace: "nowrap" }}>Dernière modif.</th>
                <th style={{ width: 80 }}></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(f => (
                <tr key={f.id}>
                  <td style={{ fontWeight: 600, minWidth: 160 }}>{f.nom}</td>
                  <td>
                    <small>Cliquez sur ✏️ pour voir le contenu complet</small>
                  </td>
                  <td style={{ whiteSpace: "nowrap" }}>
                    {f.updated_at
                      ? new Date(f.updated_at).toLocaleDateString("fr-FR")
                      : new Date(f.created_at).toLocaleDateString("fr-FR")}
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button
                        className="blog-admin-btn-edit"
                        onClick={() => openEdit(f)}
                        title="Modifier"
                      >
                        ✏️
                      </button>
                      <button
                        className="admin-btn-delete"
                        onClick={() => handleDelete(f.id, f.nom)}
                        title="Supprimer"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
