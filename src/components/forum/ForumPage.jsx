import { useState, useMemo, useEffect } from "react";
import { getThreads, createThread } from "../../api/forum.js";
import ForumList from "./ForumList.jsx";
import ForumThread from "./ForumThread.jsx";
import ForumModal from "./ForumModal.jsx";
import "./forumPage.css";

export default function ForumPage() {
  const [view, setView]           = useState("list");
  const [threads, setThreads]     = useState([]);
  const [activeId, setActiveId]   = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading]     = useState(true);

  useEffect(() => {
    getThreads()
      .then((data) => setThreads(Array.isArray(data) ? data : []))
      .catch(() => setThreads([]))
      .finally(() => setLoading(false));
  }, []);

  const activeThread = useMemo(
    () => threads.find((t) => t.id === activeId) ?? null,
    [threads, activeId]
  );

  const handleOpenThread = (id) => {
    setActiveId(id);
    setView("thread");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setView("list");
    setActiveId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewTopic = async (topicData) => {
    const newThread = await createThread({
      title:  topicData.title,
      author: topicData.author,
      cat:    topicData.cat,
      body:   topicData.firstPost.body,
    });
    if (newThread.id) {
      setThreads((prev) => [newThread, ...prev]);
    }
  };

  return (
    <main className="forum-page">

      <section className="forum-hero">
        <div className="forum-hero-inner">
          <div className="forum-hero-badge">💬 Espace communautaire UFDM</div>
          <h1>Le <em>Forum</em> des Français de Madagascar</h1>
          <p>Posez vos questions, partagez vos expériences, aidez les autres membres.</p>
          <button className="forum-btn-primary" onClick={() => setModalOpen(true)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Créer un nouveau sujet
          </button>
        </div>
      </section>

      <div className="forum-inner">
        <nav className="forum-breadcrumb" aria-label="Fil d'Ariane">
          <a href="#">Accueil</a>
          <span>›</span>
          {view === "thread" && activeThread ? (
            <>
              <button onClick={handleBack}>Forum</button>
              <span>›</span>
              <span>{activeThread.title}</span>
            </>
          ) : (
            <span>Forum</span>
          )}
        </nav>

        {loading ? (
          <div style={{ padding: "40px", textAlign: "center", color: "var(--color-slate)" }}>
            Chargement du forum…
          </div>
        ) : view === "list" ? (
          <ForumList
            threads={threads}
            onOpenThread={handleOpenThread}
            onNewTopic={() => setModalOpen(true)}
          />
        ) : (
          activeThread && (
            <ForumThread thread={activeThread} onBack={handleBack} />
          )
        )}
      </div>

      <ForumModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleNewTopic}
      />
    </main>
  );
}