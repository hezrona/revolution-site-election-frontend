export default function ForumHero({ stats, onNewTopic }) {
  return (
    <section className="forum-hero">
      <div className="forum-hero-inner">
        <div className="forum-hero-text">
          <div className="forum-hero-badge">💬 Espace communautaire UFDM</div>
          <h1>
            Le <em>Forum</em> des Français de Madagascar
          </h1>
          <p>
            Posez vos questions, partagez vos expériences, aidez les autres membres.
            Ce forum est le lieu d'échange de la communauté française à Madagascar.
          </p>
          <button className="forum-btn-new" onClick={onNewTopic}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Créer un nouveau sujet
          </button>
        </div>

        <div className="forum-hero-stats">
          <div className="forum-stat-box">
            <div className="forum-stat-num">{stats.topics}</div>
            <div className="forum-stat-lbl">Sujets</div>
          </div>
          <div className="forum-stat-box">
            <div className="forum-stat-num">{stats.replies}</div>
            <div className="forum-stat-lbl">Réponses</div>
          </div>
          <div className="forum-stat-box">
            <div className="forum-stat-num">{stats.members}</div>
            <div className="forum-stat-lbl">Membres</div>
          </div>
          <div className="forum-stat-box">
            <div className="forum-stat-num">{stats.online}</div>
            <div className="forum-stat-lbl">En ligne</div>
          </div>
        </div>
      </div>
    </section>
  );
}