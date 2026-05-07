import { useState, useEffect, useRef, useMemo } from "react";
import { getArticles, getArticle } from "../../api/blog.js";
import "./blog.css";

function processContent(html) {
  if (!html) return "";
  // Si le contenu contient des balises HTML, on le rend tel quel
  if (/<[a-z][\s\S]*>/i.test(html)) return html;
  // Sinon, on convertit les retours à la ligne en <br>
  return html.replace(/\n/g, "<br>");
}

function SkeletonGrid() {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: 6 }).map((_, i) => (
        <div className="skeleton-card" key={i}>
          <div className="skeleton-img" />
          <div className="skeleton-body">
            <div className="skeleton-line skeleton-line--title" />
            <div className="skeleton-line skeleton-line--date" />
            <div className="skeleton-line skeleton-line--text" />
            <div className="skeleton-line skeleton-line--text2" />
            <div className="skeleton-line skeleton-line--cta" />
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="blog-state--empty">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0
          2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
      <p>Aucun article dans cette catégorie pour l'instant.</p>
    </div>
  );
}

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

function ArticleModal({ article, loading, onClose }) {
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
          {loading ? (
            <p className="blog-state">Chargement du contenu…</p>
          ) : (
            <div
              className="blog-modal-body"
              dangerouslySetInnerHTML={{ __html: processContent(article.content || "") }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [articles, setArticles]         = useState([]);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState(null);
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selected, setSelected]         = useState(null);
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => {
    getArticles()
      .then((data) => setArticles(Array.isArray(data) ? data : []))
      .catch(() => setError("Impossible de charger les articles."))
      .finally(() => setLoading(false));
  }, []);

  // Catégories dérivées dynamiquement depuis les articles existants
  const categories = useMemo(() => {
    const cats = [...new Set(articles.map((a) => a.category).filter(Boolean))].sort();
    return ["Tous", ...cats];
  }, [articles]);

  const openArticle = (article) => {
    setSelected(article);
    setModalLoading(true);
    getArticle(article.id)
      .then((full) => setSelected(full))
      .catch(() => {/* garde l'article partiel si l'appel échoue */})
      .finally(() => setModalLoading(false));
  };

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
          {categories.map((cat) => (
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
          {loading && <SkeletonGrid />}
          {error    && <p className="blog-state blog-state--error">{error}</p>}
          {!loading && !error && filtered.length === 0 && <EmptyState />}
          {!loading && !error && filtered.length > 0 && (
            <div className="blog-grid">
              {filtered.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onClick={openArticle}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modale */}
      {selected && (
        <ArticleModal
          article={selected}
          loading={modalLoading}
          onClose={() => setSelected(null)}
        />
      )}
    </main>
  );
}