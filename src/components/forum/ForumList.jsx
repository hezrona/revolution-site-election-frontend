import { RULES } from "./forumData.js";

function TopicRow({ thread, onClick }) {
  const replyCount = thread.reply_count
    ? Math.max(0, thread.reply_count - 1)
    : 0;

  const date = thread.created_at
    ? new Date(thread.created_at).toLocaleDateString("fr-FR", {
        day: "numeric", month: "short", year: "numeric",
      })
    : thread.date;

  return (
    <article
      className="forum-topic-row"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className="forum-topic-main">
        <span className="forum-topic-cat">{thread.cat}</span>
        <h3 className="forum-topic-title">{thread.title}</h3>
        <p className="forum-topic-excerpt">{thread.excerpt}</p>
        <div className="forum-topic-meta">
          <span>{thread.author}</span>
          <span>·</span>
          <span>{date}</span>
          <span>·</span>
          <span>{replyCount} réponse{replyCount > 1 ? "s" : ""}</span>
        </div>
      </div>
      <div className="forum-topic-arrow">→</div>
    </article>
  );
}

export default function ForumList({ threads, onOpenThread, onNewTopic }) {
  return (
    <div className="forum-layout">
      <div className="forum-main-col">
        <div className="forum-topics-list">
          {threads.length === 0 ? (
            <div style={{ padding: "40px", textAlign: "center", color: "var(--color-slate)" }}>
              Aucun sujet pour l'instant. Soyez le premier à poster !
            </div>
          ) : (
            threads.map((thread) => (
              <TopicRow
                key={thread.id}
                thread={thread}
                onClick={() => onOpenThread(thread.id)}
              />
            ))
          )}
        </div>
      </div>

      <aside className="forum-sidebar">
        <div className="forum-sidebar-cta">
          <p>Vous avez une question ou une info à partager avec la communauté ?</p>
          <button className="forum-btn-primary forum-btn-primary--full" onClick={onNewTopic}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Nouveau sujet
          </button>
        </div>

        <div className="forum-sidebar-card">
          <div className="forum-sidebar-head">📋 Règles du forum</div>
          <div className="forum-sidebar-body">
            <ol className="forum-rules-list">
              {RULES.map((rule, i) => (
                <li key={i} className="forum-rule-item">
                  <span className="forum-rule-num">{i + 1}.</span>
                  {rule}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </aside>
    </div>
  );
}