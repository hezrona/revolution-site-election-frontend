import VerticalCarousel from "./VerticalCarousel.jsx";
import "./entrepreneurPage.css";

export default function EntrepreneurPage() {
  return (
    <main className="entrepreneur-page" id="entrepreneur-page">
      <section className="entrepreneur-hero">
        <div className="container entrepreneur-hero-inner">
          <a className="entrepreneur-back" href="#">
            ← Retour à l'accueil
          </a>
          <span className="entrepreneur-eyebrow">Entrepreneuriat</span>
          <h1>Soutenir les entrepreneurs français à Madagascar</h1>
          <p>
            Une page dédiée qui reprend les priorités, les engagements et les
            leviers d'action pour structurer un écosystème entrepreneurial
            solide et durable.
          </p>
        </div>
      </section>

      <section className="entrepreneur-intro">
        <div className="container entrepreneur-intro-inner">
          <div>
            <h2>Une ambition concrète et mesurable</h2>
            <p>
              À Madagascar, entreprendre en tant que Français de l’étranger est un acte d’engagement. C’est investir, créer de l’emploi, transférer des compétences, bâtir des ponts économiques entre deux pays liés par une histoire et une proximité humaine fortes.
            </p>
            <p>
              Mais entreprendre ici, c’est aussi faire face à des réalités spécifiques : complexité administrative, accès limité au financement, instabilité réglementaire, contraintes logistiques et infrastructures parfois fragiles. Dans ce contexte, les futurs élus des Français de l’étranger ont un rôle stratégique à jouer : créer un environnement plus lisible, plus protecteur et plus favorable à l’initiative.
            </p>
          </div>
          <div className="entrepreneur-card">
            <h3>Objectifs prioritaires</h3>
            <ul>
              <li>Être un relais institutionnel efficace</li>
              <li>Structurer un réseau entrepreneurial solide</li>
              <li>Favoriser l’accès au financement</li>
              <li>Défendre la sécurité juridique</li>
              <li>Accompagner la montée en compétence</li>
              <li>Porter une vision responsable et durable</li>
            </ul>
          </div>
        </div>
      </section>

      <VerticalCarousel />
    </main>
  );
}
