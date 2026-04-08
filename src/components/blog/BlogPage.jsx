import { useState, useEffect, useRef } from "react";
import { getArticles } from "../../api/blog.js";
import "./blog.css";

const CATEGORIES = [
  "Tous",
  "Vie pratique à Madagascar",
  "Actualités consulaires",
  "Communauté & événements",
  "Économie & entreprendre",
  "Culture & découvertes",
  "Éducation & formation",
  "Santé & bien-être",
  "Démarches administratives",
];

function ArticleCard({ article, onClick }) {
  const date = article.published_at
    ? new Date(article.published_at).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <article className="blog-card" onClick={() => onClick(article)}>
      <div className="blog-card-img-wrap">
        {article.image_url ? (
          <img
            src={article.image_url}
            alt={article.title}
            className="blog-card-img"
            loading="lazy"
          />
        ) : (
          <div className="blog-card-img-placeholder" aria-hidden="true" />
        )}
        <span className="blog-card-cat">{article.category}</span>
      </div>
      <div className="blog-card-body">
        <h2 className="blog-card-title">{article.title}</h2>
        {date && <time className="blog-card-date" dateTime={article.published_at}>{date}</time>}
        {article.summary && <p className="blog-card-excerpt">{article.summary}</p>}
        <span className="blog-card-cta">Lire la suite →</span>
      </div>
    </article>
  );
}

function ArticleModal({ article, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const date = article.published_at
    ? new Date(article.published_at).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <div
      className="blog-modal-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={article.title}
    >
      <div className="blog-modal">
        <button
          className="blog-modal-close"
          onClick={onClose}
          aria-label="Fermer l'article"
          type="button"
        >
          ✕
        </button>

        {article.image_url && (
          <div className="blog-modal-hero">
            <img src={article.image_url} alt={article.title} />
          </div>
        )}

        <div className="blog-modal-content">
          <span className="blog-modal-cat">{article.category}</span>
          <h1 className="blog-modal-title">{article.title}</h1>
          {date && (
            <time className="blog-modal-date" dateTime={article.published_at}>
              {date}
            </time>
          )}
          {article.summary && (
            <p className="blog-modal-summary">{article.summary}</p>
          )}
          <div
            className="blog-modal-body"
            dangerouslySetInnerHTML={{ __html: article.content || "" }}
          />
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [articles, setArticles]       = useState([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState(null);
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selected, setSelected]       = useState(null);

  useEffect(() => {
    getArticles()
      .then((data) => setArticles(Array.isArray(data) ? data : []))
      .catch(() => setError("Impossible de charger les articles."))
      .finally(() => setLoading(false));
  }, []);

  const filtered =
    activeFilter === "Tous"
      ? articles
      : articles.filter((a) => a.category === activeFilter);

  return (
    <main className="blog-page">
      {/* Hero */}
      <section className="blog-hero">
        <div className="container blog-hero-inner">
          <span className="blog-hero-eyebrow">UFM · Blog</span>
          <h1 className="blog-hero-title">Le Blog UFM</h1>
          <p className="blog-hero-sub">
            Actualités, conseils pratiques et vie de la communauté des Français de Madagascar.
          </p>
        </div>
      </section>

      {/* Filtres sticky */}
      <div className="blog-filters-bar">
        <div className="blog-filters-inner">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`blog-filter-btn${activeFilter === cat ? " active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grille */}
      <section className="blog-grid-section">
        <div className="container">
          {loading && <p className="blog-state">Chargement des articles…</p>}
          {error   && <p className="blog-state blog-state--error">{error}</p>}
          {!loading && !error && filtered.length === 0 && (
            <p className="blog-state">Aucun article dans cette catégorie pour l'instant.</p>
          )}
          {!loading && !error && filtered.length > 0 && (
            <div className="blog-grid">
              {filtered.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onClick={setSelected}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modale */}
      {selected && (
        <ArticleModal article={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}
