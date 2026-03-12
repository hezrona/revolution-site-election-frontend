import "./consularProcedures.css";

export default function ConsularProcedures() {
  return (
    <main className="consular-page">
      <section className="consular-hero">
        <div className="container consular-hero-inner">
          <span className="eyebrow">Démarches consulaires</span>
          <h1>Restaurer l'efficacité et la transparence</h1>
          <p>
            Pour que le Consulat redevienne la "Maison des Français" —
            des élus qui connaissent les rouages et n'ont pas peur de dénoncer les abus.
          </p>
        </div>
      </section>

      <section className="consular-content">
        <div className="container consular-card">

          <p>
            Pour un Français vivant à Madagascar, le Consulat est le lien vital avec
            la République. Pourtant, entre <strong>délais interminables</strong>, manque de
            professionnalisme et opacité des décisions, les démarches quotidiennes
            sont devenues un parcours du combattant. Notre liste s'engage à agir
            comme un véritable <strong>organe de contrôle et d'accompagnement</strong>.
          </p>

          <div className="consular-section">
            <h2>État civil et mariage : en finir avec l'incertitude</h2>
            <p>
              La situation actuelle du CCAM est révélatrice : des promesses de
              transcriptions en deux mois, mais une réalité qui impose souvent
              <strong> huit mois ou davantage</strong>. Un dossier incomplet, c'est l'assurance
              d'un retour à la case départ.
            </p>
            <div className="consular-highlight">
              <strong>L'argumentation sur les projets de vie du couple</strong> est devenue
              une pièce maîtresse du dossier. Il ne suffit plus de fournir des papiers :
              il faut prouver la sincérité de l'union. Nos colistiers s'engagent à
              vérifier vos dossiers en amont et à jouer un rôle de contrôleur rigoureux
              pour garantir une équité de traitement.
            </div>
          </div>

          <div className="consular-section">
            <h2>Naissance et nationalité : sécuriser l'avenir de vos enfants</h2>
            <p>
              Nous conseillons impérativement aux parents de se rendre à Tananarive
              dans les <strong>30 jours suivant la naissance</strong>. C'est la seule garantie
              d'obtenir l'acte de naissance le jour même, permettant d'enchaîner
              dès le lendemain sur les demandes de passeport et de CNI.
            </p>
            <div className="consular-highlight">
              <strong>Vigilance sur le lieu de reconnaissance :</strong> il doit
              impérativement correspondre au lieu de résidence du parent français.
              Une erreur peut engendrer des complications juridiques inextricables.
            </div>
          </div>

          <div className="consular-section">
            <h2>Le défi des visas : briser le mur du silence</h2>
            <p>
              Les refus tombent massivement, souvent sans explications, laissant
              des familles dans la détresse. Une communication quasi nulle et un
              manque de courtoisie flagrant sont inacceptables. Notre plan d'action :
            </p>
            <div className="consular-measures">
              {[
                {
                  number: "1",
                  title: "Remonter l'information",
                  text: "Signaler systématiquement les dysfonctionnements et l'incompétence aux instances supérieures à Paris.",
                },
                {
                  number: "2",
                  title: "Saisie directe",
                  text: "Étudier les dossiers litigieux pour les soumettre directement à la Consule Générale afin d'obtenir des arbitrages justes.",
                },
                {
                  number: "3",
                  title: "Accompagnement long séjour",
                  text: "Porter la voix des Français face aux coûts croissants et aux difficultés de renouvellement des visas long séjour et cartes de résident.",
                },
              ].map((item) => (
                <div className="consular-measure" key={item.number}>
                  <div className="consular-number">{item.number}</div>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="consular-section">
            <h2>Créer un réseau de confiance et de proximité</h2>
            <p>
              Face à la complexité, l'isolement est votre pire ennemi. Nous structurons
              un réseau d'entraide et de coaching pour les démarches administratives :
              informations fiables, coûts officiels et <strong>accompagnement humain</strong>.
              Qu'il s'agisse d'obtenir un acte de naissance ou de monter un dossier
              de visa, notre réseau est là pour vous former et vous épauler.
            </p>
          </div>

          <div className="consular-conclusion">
            <p>
              Les transcriptions de décès sont les seules démarches extrêmement rapides.
              <strong> Nous voulons que cette efficacité devienne la norme</strong> pour la vie,
              les mariages et les projets de nos compatriotes.
            </p>
          </div>

          <div className="consular-signature">
            <span className="signature-label">Notre engagement</span>
            <span className="signature-value">
              Des élus, pas des spectateurs.
            </span>
          </div>

        </div>
      </section>
    </main>
  );
}