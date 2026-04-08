import { useState, useEffect } from "react";
import { getThreads, getThread } from "../../api/forum.js";
import { deleteThread, deletePost, logout } from "../../api/auth.js";
import { getMilitants, deleteMilitant, getRecommendations, deleteRecommendation } from "../../api/campaign.js";
import { getDons, updateDonStatus, deleteDon } from "../../api/dons.js";
import { getArticles, createArticle, updateArticle, deleteArticle } from "../../api/blog.js";
import "./admin.css";

/* ── API helpers newsletter ───────────────────────────────── */
const BASE = "https://ufm-backend-production.up.railway.app";

const API = (token) => ({
  getSubscribers: () =>
    fetch(`${BASE}/api/newsletter/subscribers`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((r) => r.json()),

  deleteSubscriber: (id) =>
    fetch(`${BASE}/api/newsletter/subscribers/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }).then((r) => r.json()),

  sendEmail: (subject, html, recipients) =>
    fetch(`${BASE}/api/newsletter/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ subject, html, recipients }),
    }).then((r) => r.json()),
});

/* ── Sous-composant : onglet Newsletter ───────────────────── */
function NewsletterTab({ token }) {
  const api = API(token);

  const [subscribers, setSubscribers] = useState([]);
  const [loadingSubs, setLoadingSubs] = useState(true);

  const [subject,    setSubject]    = useState("");
  const [body,       setBody]       = useState("");
  const [recipient,  setRecipient]  = useState("all");
  const [sending,    setSending]    = useState(false);
  const [sendResult, setSendResult] = useState(null);

  useEffect(() => {
    api.getSubscribers()
      .then((data) => setSubscribers(Array.isArray(data) ? data : []))
      .finally(() => setLoadingSubs(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteSub = async (id, email) => {
    if (!confirm(`Désinscrire ${email} ?`)) return;
    await api.deleteSubscriber(id);
    setSubscribers((prev) => prev.filter((s) => s.id !== id));
  };

  const handleSend = async () => {
    if (!subject.trim() || !body.trim()) {
      setSendResult({ ok: false, message: "Sujet et contenu requis." });
      return;
    }
    setSending(true);
    setSendResult(null);

    const recipients = recipient === "all" ? [] : [recipient];
    const html = body.replace(/\n/g, "<br>");

    const data = await api.sendEmail(subject, html, recipients);
    setSendResult({ ok: !!data.success, message: data.message || data.error });
    setSending(false);

    if (data.success) {
      setSubject("");
      setBody("");
      setRecipient("all");
    }
  };

  return (
    <div className="nl-layout">
      <div className="nl-subscribers-col">
        <h2 className="nl-section-title">
          Abonnés <span className="nl-count">({subscribers.length})</span>
        </h2>
        {loadingSubs ? (
          <p className="admin-loading">Chargement…</p>
        ) : subscribers.length === 0 ? (
          <p className="admin-empty">Aucun abonné pour l'instant.</p>
        ) : (
          <ul className="nl-sub-list">
            {subscribers.map((s) => (
              <li key={s.id} className="nl-sub-row">
                <div className="nl-sub-info">
                  <span
                    className="nl-sub-email"
                    onClick={() => setRecipient(s.email)}
                    title="Cibler cet abonné"
                  >
                    {s.email}
                  </span>
                  <span className="nl-sub-date">
                    Inscrit le {new Date(s.subscribed_at).toLocaleDateString("fr-FR")}
                  </span>
                </div>
                <button
                  className="admin-btn-delete"
                  onClick={() => handleDeleteSub(s.id, s.email)}
                  title="Désinscrire"
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="nl-compose-col">
        <h2 className="nl-section-title">Envoyer un email</h2>
        <div className="nl-field">
          <label>Destinataire</label>
          <div className="nl-recipient-row">
            <select
              value={recipient === "all" ? "all" : "__custom"}
              onChange={(e) => {
                if (e.target.value === "all") setRecipient("all");
                else setRecipient("");
              }}
            >
              <option value="all">Tous les abonnés ({subscribers.length})</option>
              <option value="__custom">Adresse spécifique…</option>
            </select>
            {recipient !== "all" && (
              <input
                type="email"
                placeholder="email@exemple.com"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="nl-input-email"
              />
            )}
          </div>
          {recipient !== "all" && (
            <p className="nl-hint">
              💡 Cliquez sur un abonné dans la liste pour le sélectionner automatiquement.
            </p>
          )}
        </div>
        <div className="nl-field">
          <label>Sujet</label>
          <input
            type="text"
            placeholder="Objet de l'email"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="nl-field">
          <label>Message</label>
          <textarea
            rows={10}
            placeholder="Rédigez votre message ici…"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        {sendResult && (
          <div className={`nl-result ${sendResult.ok ? "ok" : "err"}`}>
            {sendResult.message}
          </div>
        )}
        <button className="nl-btn-send" onClick={handleSend} disabled={sending}>
          {sending ? "Envoi en cours…" : "✉️ Envoyer"}
        </button>
      </div>
    </div>
  );
}

/* ── Sous-composant : onglet Militants ────────────────────── */
function MilitantsTab({ token }) {
  const [militants, setMilitants] = useState([]);
  const [loading, setLoading]     = useState(true);

  useEffect(() => {
    getMilitants(token)
      .then((data) => setMilitants(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id, name) => {
    if (!confirm(`Supprimer ${name} ?`)) return;
    await deleteMilitant(id, token);
    setMilitants((prev) => prev.filter((m) => m.id !== id));
  };

  if (loading) return <p className="admin-loading">Chargement…</p>;
  if (militants.length === 0) return <p className="admin-empty">Aucun militant inscrit.</p>;

  return (
    <div className="admin-table-wrapper">
      <h2 className="admin-table-title">Militants ({militants.length})</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Ville</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {militants.map((m) => (
            <tr key={m.id}>
              <td>{m.first_name}</td>
              <td>{m.last_name}</td>
              <td>{m.email}</td>
              <td>{m.phone || "—"}</td>
              <td>{m.ville}</td>
              <td>{new Date(m.created_at).toLocaleDateString("fr-FR")}</td>
              <td>
                <button
                  className="admin-btn-delete"
                  onClick={() => handleDelete(m.id, `${m.first_name} ${m.last_name}`)}
                  title="Supprimer"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Sous-composant : onglet Recommandations ──────────────── */
function RecommendationsTab({ token }) {
  const [recs, setRecs]       = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecommendations(token)
      .then((data) => setRecs(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Supprimer cette recommandation ?")) return;
    await deleteRecommendation(id, token);
    setRecs((prev) => prev.filter((r) => r.id !== id));
  };

  if (loading) return <p className="admin-loading">Chargement…</p>;
  if (recs.length === 0) return <p className="admin-empty">Aucune recommandation.</p>;

  return (
    <div className="admin-table-wrapper">
      <h2 className="admin-table-title">Recommandations ({recs.length})</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Contact</th>
            <th>Téléphone</th>
            <th>Ville</th>
            <th>Sujet</th>
            <th>Recommandé par</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {recs.map((r) => (
            <tr key={r.id}>
              <td>{r.contact_first_name} {r.contact_last_name}</td>
              <td>{r.contact_phone}</td>
              <td>{r.contact_city}</td>
              <td>{r.contact_concern}</td>
              <td>
                {r.sender_first_name} {r.sender_last_name}
                <br />
                <small>{r.sender_email}</small>
              </td>
              <td>{new Date(r.created_at).toLocaleDateString("fr-FR")}</td>
              <td>
                <button
                  className="admin-btn-delete"
                  onClick={() => handleDelete(r.id)}
                  title="Supprimer"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Sous-composant : onglet Dons ─────────────────────────── */
const STATUS_LABELS = {
  pending:   { label: "En attente",  className: "don-status don-status--pending"   },
  contacted: { label: "Contacté",    className: "don-status don-status--contacted" },
  received:  { label: "Reçu",        className: "don-status don-status--received"  },
};

function DonsTab({ token }) {
  const [dons, setDons]       = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDons(token)
      .then((data) => setDons(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, []);

  const handleStatusChange = async (id, status) => {
    await updateDonStatus(id, status, token);
    setDons((prev) => prev.map((d) => d.id === id ? { ...d, status } : d));
  };

  const handleDelete = async (id, name) => {
    if (!confirm(`Supprimer le don de ${name} ?`)) return;
    await deleteDon(id, token);
    setDons((prev) => prev.filter((d) => d.id !== id));
  };

  const totalPending  = dons.filter((d) => d.status === "pending").length;
  const totalReceived = dons.filter((d) => d.status === "received").length;

  if (loading) return <p className="admin-loading">Chargement…</p>;
  if (dons.length === 0) return <p className="admin-empty">Aucun don enregistré.</p>;

  return (
    <div className="admin-table-wrapper">
      {/* Compteurs rapides */}
      <div className="don-stats">
        <div className="don-stat-card">
          <span className="don-stat-num">{dons.length}</span>
          <span className="don-stat-label">Total</span>
        </div>
        <div className="don-stat-card">
          <span className="don-stat-num don-stat-num--pending">{totalPending}</span>
          <span className="don-stat-label">En attente</span>
        </div>
        <div className="don-stat-card">
          <span className="don-stat-num don-stat-num--received">{totalReceived}</span>
          <span className="don-stat-label">Reçus</span>
        </div>
      </div>

      <h2 className="admin-table-title">Dons ({dons.length})</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Donneur</th>
            <th>Email</th>
            <th>Montant</th>
            <th>Mode</th>
            <th>Statut</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dons.map((d) => (
            <tr key={d.id}>
              <td>{d.first_name} {d.last_name}</td>
              <td>
                {/* Lien mailto pré-rempli pour envoyer l'IBAN/adresse facilement */}
                <a
                  href={`mailto:${d.email}?subject=Votre don UFM — Instructions de paiement&body=Bonjour ${d.first_name},%0A%0AMerci pour votre don de ${new Intl.NumberFormat("fr-MG").format(d.amount)} Ar.%0A%0AVoici les informations pour effectuer votre ${d.payment_method === "carte" ? "virement" : "envoi de chèque"} :%0A%0A[COMPLÉTER ICI]%0A%0ACordialement,%0AL'équipe UFM`}
                  className="don-email-link"
                  title="Envoyer les coordonnées de paiement"
                >
                  {d.email}
                </a>
              </td>
              <td style={{ fontWeight: 700 }}>
                {new Intl.NumberFormat("fr-MG").format(d.amount)} Ar
              </td>
              <td>
                {d.payment_method === "Mvola"  && "🟠 Mvola"}
                {d.payment_method === "carte"  && "💳 Virement"}
                {d.payment_method === "cheque" && "✉️ Chèque"}
              </td>
              <td>
                {/* Sélecteur de statut inline */}
                <select
                  className={`don-status-select don-status-select--${d.status}`}
                  value={d.status}
                  onChange={(e) => handleStatusChange(d.id, e.target.value)}
                >
                  <option value="pending">En attente</option>
                  <option value="contacted">Contacté</option>
                  <option value="received">Reçu</option>
                </select>
              </td>
              <td>{new Date(d.created_at).toLocaleDateString("fr-FR")}</td>
              <td>
                <button
                  className="admin-btn-delete"
                  onClick={() => handleDelete(d.id, `${d.first_name} ${d.last_name}`)}
                  title="Supprimer"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Sous-composant : onglet Blog ─────────────────────────── */
const BLOG_CATEGORIES = [
  "Vie pratique à Madagascar",
  "Actualités consulaires",
  "Communauté & événements",
  "Économie & entreprendre",
  "Culture & découvertes",
  "Éducation & formation",
  "Santé & bien-être",
  "Démarches administratives",
];

const EMPTY_FORM = {
  title: "",
  category: BLOG_CATEGORIES[0],
  published_at: new Date().toISOString().slice(0, 10),
  image_url: "",
  summary: "",
  content: "",
};

function BlogTab({ token }) {
  const [articles, setArticles]   = useState([]);
  const [loading, setLoading]     = useState(true);
  const [view, setView]           = useState("list"); // "list" | "form"
  const [editing, setEditing]     = useState(null);   // article en cours de modification
  const [form, setForm]           = useState(EMPTY_FORM);
  const [saving, setSaving]       = useState(false);
  const [saveMsg, setSaveMsg]     = useState(null);

  useEffect(() => {
    getArticles()
      .then((data) => setArticles(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, []);

  const openCreate = () => {
    setEditing(null);
    setForm(EMPTY_FORM);
    setSaveMsg(null);
    setView("form");
  };

  const openEdit = (article) => {
    setEditing(article);
    setForm({
      title:        article.title        || "",
      category:     article.category     || BLOG_CATEGORIES[0],
      published_at: article.published_at ? article.published_at.slice(0, 10) : "",
      image_url:    article.image_url    || "",
      summary:      article.summary      || "",
      content:      article.content      || "",
    });
    setSaveMsg(null);
    setView("form");
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`Supprimer l'article « ${title} » ?`)) return;
    await deleteArticle(id, token);
    setArticles((prev) => prev.filter((a) => a.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) { setSaveMsg({ ok: false, text: "Le titre est requis." }); return; }
    setSaving(true);
    setSaveMsg(null);
    try {
      if (editing) {
        const updated = await updateArticle(editing.id, form, token);
        setArticles((prev) => prev.map((a) => a.id === editing.id ? { ...a, ...updated } : a));
        setSaveMsg({ ok: true, text: "Article mis à jour." });
      } else {
        const created = await createArticle(form, token);
        setArticles((prev) => [created, ...prev]);
        setSaveMsg({ ok: true, text: "Article publié." });
        setForm(EMPTY_FORM);
        setEditing(null);
      }
    } catch {
      setSaveMsg({ ok: false, text: "Erreur lors de la sauvegarde." });
    } finally {
      setSaving(false);
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
            {editing ? "Modifier l'article" : "Nouvel article"}
          </span>
        </div>

        <form className="blog-admin-form" onSubmit={handleSubmit}>
          <div className="blog-form-row">
            <label htmlFor="ba-title">Titre *</label>
            <input
              id="ba-title"
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              placeholder="Titre de l'article"
              required
            />
          </div>

          <div className="blog-form-row-2col">
            <div className="blog-form-row">
              <label htmlFor="ba-category">Catégorie</label>
              <select id="ba-category" name="category" value={form.category} onChange={handleChange}>
                {BLOG_CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="blog-form-row">
              <label htmlFor="ba-date">Date de publication</label>
              <input
                id="ba-date"
                name="published_at"
                type="date"
                value={form.published_at}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="blog-form-row">
            <label htmlFor="ba-image">URL de l'image (optionnel)</label>
            <input
              id="ba-image"
              name="image_url"
              type="url"
              value={form.image_url}
              onChange={handleChange}
              placeholder="https://…"
            />
            {form.image_url && (
              <img
                src={form.image_url}
                alt="Aperçu"
                className="blog-form-img-preview"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            )}
          </div>

          <div className="blog-form-row">
            <label htmlFor="ba-summary">Résumé / Chapeau</label>
            <textarea
              id="ba-summary"
              name="summary"
              rows={3}
              value={form.summary}
              onChange={handleChange}
              placeholder="Texte affiché sur la carte (160 caractères max recommandé)"
            />
          </div>

          <div className="blog-form-row">
            <label htmlFor="ba-content">
              Contenu complet{" "}
              <span className="blog-form-hint">HTML supporté</span>
            </label>
            <textarea
              id="ba-content"
              name="content"
              rows={16}
              value={form.content}
              onChange={handleChange}
              placeholder="<p>Contenu de l'article…</p>"
              className="blog-form-content"
            />
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
            <button type="submit" className="blog-form-btn-save" disabled={saving}>
              {saving ? "Enregistrement…" : editing ? "Mettre à jour" : "Publier l'article"}
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
          {articles.length} article{articles.length !== 1 ? "s" : ""}
        </span>
        <button type="button" className="blog-admin-btn-new" onClick={openCreate}>
          + Nouvel article
        </button>
      </div>

      {articles.length === 0 ? (
        <p className="admin-empty" style={{ padding: 24 }}>Aucun article pour l'instant.</p>
      ) : (
        <div className="blog-admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: 60 }}>Image</th>
                <th>Titre</th>
                <th>Catégorie</th>
                <th>Date</th>
                <th style={{ width: 100 }}></th>
              </tr>
            </thead>
            <tbody>
              {articles.map((a) => (
                <tr key={a.id}>
                  <td>
                    {a.image_url ? (
                      <img
                        src={a.image_url}
                        alt={a.title}
                        className="blog-admin-thumb"
                      />
                    ) : (
                      <div className="blog-admin-thumb-placeholder" />
                    )}
                  </td>
                  <td style={{ fontWeight: 600 }}>{a.title}</td>
                  <td>
                    <span className="blog-admin-cat-badge">{a.category}</span>
                  </td>
                  <td style={{ whiteSpace: "nowrap" }}>
                    {a.published_at
                      ? new Date(a.published_at).toLocaleDateString("fr-FR")
                      : "—"}
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button
                        className="blog-admin-btn-edit"
                        onClick={() => openEdit(a)}
                        title="Modifier"
                      >
                        ✏️
                      </button>
                      <button
                        className="admin-btn-delete"
                        onClick={() => handleDelete(a.id, a.title)}
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

/* ── Composant principal ──────────────────────────────────── */
export default function AdminDashboard({ token, onLogout }) {
  const [activeTab, setActiveTab] = useState("forum");

  // ── Forum state ──
  const [threads, setThreads]           = useState([]);
  const [activeThread, setActiveThread] = useState(null);
  const [posts, setPosts]               = useState([]);
  const [loading, setLoading]           = useState(true);

  useEffect(() => {
    getThreads()
      .then((data) => setThreads(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, []);

  const handleOpenThread = async (thread) => {
    const data = await getThread(thread.id);
    setActiveThread(data);
    setPosts(data.posts || []);
  };

  const handleDeleteThread = async (id) => {
    if (!confirm("Supprimer ce sujet et tous ses messages ?")) return;
    await deleteThread(id, token);
    setThreads((prev) => prev.filter((t) => t.id !== id));
    if (activeThread?.id === id) { setActiveThread(null); setPosts([]); }
  };

  const handleDeletePost = async (id) => {
    if (!confirm("Supprimer ce message ?")) return;
    await deletePost(id, token);
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleLogout = async () => { await logout(); onLogout(); };

  async function safeFetch(fn) {
  const result = await fn();
  if (
    result?.error === "Token manquant." ||
    result?.error === "Token invalide ou expiré."
  ) {
    alert("Votre session a expiré. Veuillez vous reconnecter.");
    onLogout();
  }
  return result;
}

  return (
    <div className="admin-page">

      {/* Header */}
      <div className="admin-header">
        <div className="admin-header-left">
          <span className="admin-header-logo">⚙️</span>
          <h1>Tableau de bord — UFM</h1>
        </div>
        <button className="admin-btn-logout" onClick={handleLogout}>
          Déconnexion
        </button>
      </div>

      {/* Onglets */}
      <div className="admin-tabs">
        <button
          className={`admin-tab ${activeTab === "forum" ? "active" : ""}`}
          onClick={() => setActiveTab("forum")}
        >
          💬 Forum
        </button>
        <button
          className={`admin-tab ${activeTab === "newsletter" ? "active" : ""}`}
          onClick={() => setActiveTab("newsletter")}
        >
          ✉️ Newsletter
        </button>
        <button
          className={`admin-tab ${activeTab === "militants" ? "active" : ""}`}
          onClick={() => setActiveTab("militants")}
        >
          ✊ Militants
        </button>
        <button
          className={`admin-tab ${activeTab === "recommendations" ? "active" : ""}`}
          onClick={() => setActiveTab("recommendations")}
        >
          🤝 Convaincre
        </button>
        <button
          className={`admin-tab ${activeTab === "dons" ? "active" : ""}`}
          onClick={() => setActiveTab("dons")}
        >
          💛 Dons
        </button>
        <button
          className={`admin-tab ${activeTab === "blog" ? "active" : ""}`}
          onClick={() => setActiveTab("blog")}
        >
          📝 Blog
        </button>
      </div>

      {/* Contenu */}
      {activeTab === "forum" && (
        <div className="admin-layout">

          {/* Liste des sujets */}
          <div className="admin-threads-col">
            <h2>Sujets ({threads.length})</h2>
            {loading ? (
              <p className="admin-loading">Chargement…</p>
            ) : threads.length === 0 ? (
              <p className="admin-empty">Aucun sujet.</p>
            ) : (
              threads.map((thread) => (
                <div
                  key={thread.id}
                  className={`admin-thread-row ${activeThread?.id === thread.id ? "active" : ""}`}
                >
                  <div className="admin-thread-info" onClick={() => handleOpenThread(thread)}>
                    <span className="admin-thread-cat">{thread.cat}</span>
                    <span className="admin-thread-title">{thread.title}</span>
                    <span className="admin-thread-meta">
                      {thread.author} · {thread.reply_count || 0} msg
                    </span>
                  </div>
                  <button
                    className="admin-btn-delete"
                    onClick={() => handleDeleteThread(thread.id)}
                    title="Supprimer ce sujet"
                  >
                    🗑️
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Messages du sujet sélectionné */}
          <div className="admin-posts-col">
            {!activeThread ? (
              <div className="admin-posts-empty">
                ← Sélectionnez un sujet pour voir ses messages
              </div>
            ) : (
              <>
                <h2>{activeThread.title}</h2>
                {posts.map((post) => (
                  <div key={post.id} className="admin-post-row">
                    <div className="admin-post-info">
                      <span className="admin-post-author">{post.author}</span>
                      <span className="admin-post-date">
                        {new Date(post.created_at).toLocaleString("fr-FR")}
                      </span>
                      <p className="admin-post-body">{post.body.substring(0, 150)}…</p>
                    </div>
                    <button
                      className="admin-btn-delete"
                      onClick={() => handleDeletePost(post.id)}
                      title="Supprimer ce message"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      )}

      {activeTab === "newsletter"    && <NewsletterTab    token={token} />}
      {activeTab === "militants"     && <MilitantsTab     token={token} />}
      {activeTab === "recommendations" && <RecommendationsTab token={token} />}
      {activeTab === "dons"          && <DonsTab          token={token} />}
      {activeTab === "blog"          && <BlogTab          token={token} />}

    </div>
  );
}