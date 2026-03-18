import { useState, useEffect } from "react";
import { getThreads, getThread } from "../../api/forum.js";
import { deleteThread, deletePost, logout } from "../../api/auth.js";
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

  // Formulaire d'envoi
  const [subject,    setSubject]    = useState("");
  const [body,       setBody]       = useState("");
  const [recipient,  setRecipient]  = useState("all"); // "all" | email string
  const [sending,    setSending]    = useState(false);
  const [sendResult, setSendResult] = useState(null); // { ok, message }

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
    // Convertit le body en HTML simple (sauts de ligne → <br>)
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

      {/* ── Colonne gauche : abonnés ── */}
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

      {/* ── Colonne droite : composer un email ── */}
      <div className="nl-compose-col">
        <h2 className="nl-section-title">Envoyer un email</h2>

        {/* Destinataire */}
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

        {/* Sujet */}
        <div className="nl-field">
          <label>Sujet</label>
          <input
            type="text"
            placeholder="Objet de l'email"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        {/* Corps */}
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

        <button
          className="nl-btn-send"
          onClick={handleSend}
          disabled={sending}
        >
          {sending ? "Envoi en cours…" : "✉️ Envoyer"}
        </button>
      </div>
    </div>
  );
}

/* ── Composant principal ──────────────────────────────────── */
export default function AdminDashboard({ token, onLogout }) {
  const [activeTab, setActiveTab] = useState("forum"); // "forum" | "newsletter"

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
      </div>

      {/* Contenu */}
      {activeTab === "forum" ? (
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
      ) : (
        <NewsletterTab token={token} />
      )}
    </div>
  );
}