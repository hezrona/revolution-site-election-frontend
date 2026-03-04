import "./partenaireArticle.css";

export default function PartenaireArticle() {
  return (
    <main className="partner-article-page">
      <header className="partner-topbar">
        <div className="container partner-topbar-inner">
          <a className="partner-brand" href="#">
            <span className="partner-brand-badge">U</span>
            <span>UFM</span>
          </a>
          <nav className="partner-menu">
            <a href="#">Accueil</a>
            <a href="#program-alt-page">Programme</a>
            <a href="#team">Partenaires</a>
            <a className="active" href="#partner-article">
              Blog
            </a>
            <a href="#take-action">Contact</a>
          </nav>
          <a className="partner-btn" href="#team">
            ← Retour
          </a>
        </div>
      </header>

      <section className="container partner-article">
        <article className="partner-profile">
          <span className="partner-badge">Santé</span>
          <h1>Bien préparer une urgence santé : checklist</h1>
          <p className="partner-meta">Publié le 02 fév 2026 • 8 min</p>

          <div className="partner-section">
            <h2>Checklist rapide</h2>
            <ul>
              <li>Contacts d’urgence enregistrés (famille + consulat + médecin).</li>
              <li>Documents : passeport, carte CFE, assurance, groupe sanguin.</li>
              <li>Procédure EVASAN : qui appeler, quels documents, quels délais.</li>
              <li>Budget/avance : moyens de paiement de secours.</li>
            </ul>
          </div>

          <div className="partner-section">
            <h2>Partenaires utiles</h2>
            <p>
              Retrouve la rubrique{" "}
              <a className="partner-link" href="#partner-health">
                Santé / EVASAN →
              </a>
              pour des contacts utiles et avis.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
