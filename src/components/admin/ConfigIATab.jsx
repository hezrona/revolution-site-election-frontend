import { useState, useEffect } from "react";
import { getPrompt, updatePrompt } from "../../api/config.js";

export default function ConfigIATab({ token }) {
  const [prompt,   setPrompt]   = useState("");
  const [savedAt,  setSavedAt]  = useState(null);
  const [loading,  setLoading]  = useState(true);
  const [saving,   setSaving]   = useState(false);
  const [message,  setMessage]  = useState(null); // { ok: bool, text: string }

  const load = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const data = await getPrompt(token);
      setPrompt(data.prompt ?? "");
      setSavedAt(data.updated_at ?? null);
    } catch (err) {
      setMessage({ ok: false, text: err.message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    try {
      await updatePrompt(token, prompt);
      setSavedAt(new Date().toISOString());
      setMessage({ ok: true, text: "Prompt sauvegardé avec succès." });
    } catch (err) {
      setMessage({ ok: false, text: err.message });
    } finally {
      setSaving(false);
    }
  };

  const isInvalid = prompt.trim().length === 0 || prompt.length > 10000;

  if (loading) {
    return <p style={{ padding: 32, color: "#555" }}>Chargement du prompt…</p>;
  }

  return (
    <div style={{ padding: 32, maxWidth: 820 }}>
      <h2 style={{ marginBottom: 6, color: "#1a3a6b" }}>Configuration IA — Prompt système</h2>
      <p style={{ color: "#666", fontSize: "0.88rem", marginBottom: 24 }}>
        Ce prompt est transmis au modèle d'IA à chaque conversation lancée depuis le consulat.
        Modifiez-le avec soin.
      </p>

      {savedAt && (
        <p style={{ fontSize: "0.78rem", color: "#888", marginBottom: 10 }}>
          Dernière modification : {new Date(savedAt).toLocaleString("fr-FR")}
        </p>
      )}

      <textarea
        value={prompt}
        onChange={(e) => { setPrompt(e.target.value); setMessage(null); }}
        rows={20}
        style={{
          width: "100%",
          fontFamily: "ui-monospace, 'Cascadia Mono', 'SF Mono', monospace",
          fontSize: "0.84rem",
          lineHeight: 1.6,
          padding: "14px 16px",
          border: "1.5px solid #ccc",
          resize: "vertical",
          whiteSpace: "pre-wrap",
          boxSizing: "border-box",
          color: "#1a3a6b",
          background: "#fafafa",
        }}
      />

      <p style={{
        fontSize: "0.75rem",
        color: prompt.length > 10000 ? "#c0392b" : "#888",
        marginTop: 4,
        marginBottom: 16,
      }}>
        {prompt.length} / 10 000 caractères
      </p>

      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={handleSave}
          disabled={isInvalid || saving}
          style={{
            background: isInvalid || saving ? "#aaa" : "#1a3a6b",
            color: "#fff",
            border: "none",
            padding: "10px 24px",
            fontFamily: "inherit",
            fontWeight: 600,
            fontSize: "0.88rem",
            cursor: isInvalid || saving ? "not-allowed" : "pointer",
          }}
        >
          {saving ? "Sauvegarde…" : "Sauvegarder"}
        </button>
        <button
          onClick={load}
          disabled={saving}
          style={{
            background: "none",
            color: "#555",
            border: "1px solid #ccc",
            padding: "10px 20px",
            fontFamily: "inherit",
            fontSize: "0.88rem",
            cursor: saving ? "not-allowed" : "pointer",
          }}
        >
          Annuler
        </button>
      </div>

      {message && (
        <div style={{
          marginTop: 14,
          padding: "10px 16px",
          background: message.ok ? "#eafaf1" : "#fdecea",
          color:      message.ok ? "#1e8449" : "#c0392b",
          border:     `1px solid ${message.ok ? "#a9dfbf" : "#f5b7b1"}`,
          fontSize:   "0.85rem",
        }}>
          {message.text}
        </div>
      )}
    </div>
  );
}
