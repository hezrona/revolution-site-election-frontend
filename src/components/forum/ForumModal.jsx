import { useState, useEffect } from "react";

const CATEGORIES = ["Général", "Administration", "Santé", "Vie pratique", "Scolarité", "Emploi & Business", "Urgences"];

export default function ForumModal({ isOpen, onClose, onSubmit }) {
  const [author, setAuthor] = useState("");
  const [cat, setCat] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") handleClose(); };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const handleClose = () => {
    setAuthor(""); setCat(""); setTitle(""); setBody("");
    onClose();
  };

  const handleSubmit = () => {
    if (!author.trim() || !cat || !title.trim() || !body.trim()) {
      alert("Merci de remplir tous les champs obligatoires (*).");
      return;
    }
    const now = new Date();
    const date = now.toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
    const dateTime = date + " à " + now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });

    onSubmit({
      title: title.trim(),
      author: author.trim(),
      date,
      cat,
      excerpt: body.trim().substring(0, 120) + "…",
      firstPost: {
        id: 1,
        author: author.trim(),
        date: dateTime,
        body: body.trim(),
      },
    });
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="forum-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div className="forum-modal">

        <div className="forum-modal-head">
          <h3 id="modal-title">✏️ Créer un nouveau sujet</h3>
          <button className="forum-modal-close" onClick={handleClose} aria-label="Fermer">✕</button>
        </div>

        <div className="forum-modal-body">

          <div className="forum-modal-2col">
            <div className="forum-form-row">
              <label htmlFor="new-author">Votre prénom / pseudo *</label>
              <input
                id="new-author" type="text" placeholder="Ex : Marie D."
                value={author} onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="forum-form-row">
              <label htmlFor="new-cat">Catégorie *</label>
              <select id="new-cat" value={cat} onChange={(e) => setCat(e.target.value)}>
                <option value="">-- Choisir --</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="forum-form-row">
            <label htmlFor="new-title">Titre du sujet *</label>
            <input
              id="new-title" type="text" maxLength={80}
              placeholder="Ex : Renouvellement passeport – délai actuel ?"
              value={title} onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="forum-form-row">
            <label htmlFor="new-body">Votre message *</label>
            <textarea
              id="new-body" maxLength={2000}
              placeholder="Décrivez votre question en détail…"
              value={body} onChange={(e) => setBody(e.target.value)}
            />
          </div>

        </div>

        <div className="forum-modal-footer">
          <button className="forum-btn-primary" onClick={handleSubmit}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/>
            </svg>
            Publier le sujet
          </button>
          <button className="forum-btn-secondary" onClick={handleClose}>Annuler</button>
        </div>

      </div>
    </div>
  );
}