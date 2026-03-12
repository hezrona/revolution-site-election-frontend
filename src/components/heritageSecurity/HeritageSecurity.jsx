import "./heritageSecurity.css";

export default function HeritageSecurity() {
  return (
    <main className="heritage-security-page">
      <section className="heritage-security-hero">
        <div className="container heritage-security-hero-inner">
          <span className="eyebrow">Patrimoine & Juridique</span>
          <h1>Sécurité patrimoniale et juridique</h1>
          <p>
            Protéger votre vie et vos proches à Madagascar — parce que
            l'expatriation ne doit jamais rimer avec vulnérabilité.
          </p>
        </div>
      </section>

      <section className="heritage-security-content">
        <div className="container heritage-security-card">

          <p>
            S'installer à Madagascar est une aventure d'une richesse incomparable.
            Pourtant, trop souvent, l'enthousiasme de la vie sur la Grande Île occulte
            une réalité juridique complexe : celle des <strong>conflits de lois entre la France
            et Madagascar</strong>. Notre liste s'engage à transformer l'incertitude administrative
            en une stratégie de protection robuste.
          </p>

          <div className="heritage-security-section">
            <h2>Le piège du droit successoral : le compte à rebours des 10 ans</h2>
            <p>
              Après <strong>dix années de résidence continue à Madagascar</strong>, c'est le droit
              successoral malgache qui s'applique à votre patrimoine. Or, ce droit est
              structurellement très différent du Code civil français — particulièrement
              défavorable au conjoint survivant, qui peut se retrouver évincé par d'autres
              membres de la famille.
            </p>
            <div className="heritage-security-highlight">
              <strong>Notre solution : la Professio Juris.</strong> Rédigez un testament
              authentique indiquant explicitement que votre succession sera régie par la
              loi française. Nous avons établi des partenariats avec des notaires malgaches
              et français pour que vos dispositions soient inattaquables dans les deux
              juridictions.
            </div>
          </div>

          <div className="heritage-security-section">
            <h2>État civil et mariage : verrouiller vos droits fondamentaux</h2>
            <p>
              Une transcription mal effectuée ou un régime matrimonial mal adapté peut
              paralyser la vente d'un bien ou la transmission d'un héritage. Nous agirons
              pour <strong>fluidifier vos relations avec les services consulaires</strong> et les
              autorités locales, en anticipant les blocages pour que chaque étape de votre
              vie civile soit juridiquement étanche en France comme à Madagascar.
            </p>
          </div>

          <div className="heritage-security-section">
            <h2>Expertise fiscale : maîtriser la convention franco-malgache</h2>
            <p>Vivre entre deux pays ne doit pas signifier subir une double imposition. Nous vous apportons un conseil de terrain sur :</p>
            <ul className="heritage-security-list">
              <li><strong>La résidence fiscale</strong> — Déterminer votre statut pour éviter les redressements arbitraires.</li>
              <li><strong>L'imposition des revenus</strong> — Retraites, dividendes et revenus fonciers taxés conformément aux traités.</li>
              <li><strong>La transmission</strong> — Optimiser la fiscalité de vos dons et legs pour protéger votre famille.</li>
            </ul>
          </div>

          <div className="heritage-security-section">
            <h2>Le combat pour le droit au compte</h2>
            <p>
              Des banques françaises ferment des comptes de non-résidents sans préavis,
              coupant le lien économique vital avec la France. Notre liste fera du
              <strong> droit au compte un axe de combat prioritaire</strong> auprès des instances
              représentatives, tout en vous orientant vers des partenaires financiers
              spécialisés dans l'expatriation.
            </p>
          </div>

          <div className="heritage-security-section">
            <h2>Gestion patrimoniale et placements : préparer l'avenir</h2>
            <p>Grâce à nos partenaires en gestion de patrimoine, nous vous aidons à bâtir des stratégies sur mesure :</p>
            <ul className="heritage-security-list">
              <li>Assurance-vie luxembourgeoise ou française pour non-résidents.</li>
              <li>Placements immobiliers sécurisés en France.</li>
              <li>Préparation de la retraite complémentaire hors du système de base.</li>
            </ul>
          </div>

          <div className="heritage-security-signature">
            <span className="signature-label">Notre engagement</span>
            <span className="signature-value">
              Protection, transmission et sérénité.
            </span>
          </div>

        </div>
      </section>
    </main>
  );
}