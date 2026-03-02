import "./heritageSecurity.css";

export default function HeritageSecurity() {
  return (
    <main className="heritage-security-page">
      <section className="heritage-security-hero">
        <div className="container heritage-security-hero-inner">
          <span className="eyebrow">Patrimoine et securite</span>
          <h1>Sécurité patrimoniale des Français de l’étranger</h1>
          <p>
            Nous defendons un cadre de vie apaisé, une memoire preservée et des
            actions concretes pour une securite de proximite.
          </p>
        </div>
      </section>
      <section className="heritage-security-content">
        <div className="container heritage-security-card">
          <p>
              Protéger son patrimoine à l’étranger est une priorité pour de nombreuses familles françaises. 
              Entre les différences de législation, les risques juridiques locaux, la fiscalité internationale 
              et la transmission aux enfants, il est essentiel d’être bien informé et accompagné.
          </p>

          <p>
              Je m’engage à renforcer l’information et l’accompagnement des Français de notre circonscription 
              sur les questions de sécurité patrimoniale : protection des biens immobiliers, reconnaissance des 
              actes notariés, successions internationales, fiscalité, retraites et sécurisation de l’épargne.
          </p>

          <p>
              En lien avec les services consulaires, les experts juridiques et des organismes comme 
              <span class="highlight">Notaires de France ou de Madagascar</span>, ainsi la 
              <span class="highlight">Caisse des Français de l’Étranger</span>, 
              nous devons faciliter l’accès à des conseils fiables, accessibles et adaptés à notre réalité locale.
          </p>

          <p>
              Parce que vivre à l’étranger ne doit jamais fragiliser ce que l’on a construit, je défendrai 
              une protection renforcée du patrimoine des Français de Madagascar et de leurs familles.
          </p>
          <div className="heritage-security-signature">
            <span className="signature-label">Notre engagement</span>
            <span className="signature-value">
              protection, transmission et serenite.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
