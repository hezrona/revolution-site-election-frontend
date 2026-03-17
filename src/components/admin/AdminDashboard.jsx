import { useState, useEffect } from "react";
import { getThreads, getThread } from "../../api/forum.js";
import { deleteThread, deletePost, logout } from "../../api/auth.js";
import "./admin.css";

export default function AdminDashboard({ token, onLogout }) {
  const [threads, setThreads]         = useState([]);
  const [activeThread, setActiveThread] = useState(null);
  const [posts, setPosts]             = useState([]);
  const [loading, setLoading]         = useState(true);

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
    if (activeThread?.id === id) {
      setActiveThread(null);
      setPosts([]);
    }
  };

  const handleDeletePost = async (id) => {
    if (!confirm("Supprimer ce message ?")) return;
    await deletePost(id, token);
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleLogout = async () => {
    await logout();
    onLogout();
  };

  return (
    <div className="admin-page">

      {/* Header admin */}
      <div className="admin-header">
        <div className="admin-header-left">
          <span className="admin-header-logo">⚙️</span>
          <h1>Tableau de bord — Forum UFDM</h1>
        </div>
        <button className="admin-btn-logout" onClick={handleLogout}>
          Déconnexion
        </button>
      </div>

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
                <div
                  className="admin-thread-info"
                  onClick={() => handleOpenThread(thread)}
                >
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
    </div>
  );
}