import "./familyEducation.css";

export default function FamilyEducation() {
  return (
    <main className="family-education-page">
      <section className="family-education-hero">
        <div className="container family-education-hero-inner">
          <span className="eyebrow">Famille & Éducation</span>
          <h1>L'éducation des enfants français à Madagascar</h1>
          <p>
            Défendre chaque famille, accompagner chaque enfant — parce que
            l'excellence scolaire doit rester accessible à tous.
          </p>
        </div>
      </section>

      <section className="family-education-content">
        <div className="container family-education-card">

          <p>
            L'éducation des enfants français à l'étranger traverse une période
            d'instabilité profonde : <strong>hausse continue des frais de scolarité</strong>,
            fragilisation des familles, manque de transparence et crise structurelle
            du réseau AEFE. Pour beaucoup de parents, la scolarité est devenue un
            poids financier écrasant, alors même que l'exigence d'excellence devrait
            être la norme.
          </p>

          <p>
            Les conseillers consulaires n'ont pas de pouvoir législatif direct, mais
            disposent d'un <strong>rôle essentiel sur le terrain</strong> : défense des familles,
            accompagnement des élèves, soutien aux associations et participation aux
            comités de gestion. Voici ce qu'un conseiller peut réellement faire.
          </p>

          {[
            {
              number: "1",
              title: "Défendre les familles dans les commissions de bourses",
              items: [
                "Défendre chaque dossier avec humanité, en tenant compte des réalités économiques locales.",
                "Expliciter aux familles les règles, critères et justificatifs nécessaires.",
                "Aider les parents à constituer ou renforcer leurs dossiers, notamment pour les cas complexes.",
                "Veiller à l'équité entre les familles et dénoncer les situations manifestement injustes.",
                "Suivre les recours et accompagner les familles dans les situations d'urgence.",
              ],
            },
            {
              number: "2",
              title: "Lutter pour l'augmentation nationale du budget des bourses",
              items: [
                "Conditionner son soutien aux candidats sénatoriaux qui s'engagent pour un doublement du budget.",
                "Mobiliser les familles, les APE et les élus locaux pour soutenir ce combat.",
                "Produire des rapports et statistiques locales pour appuyer la demande d'augmentation.",
              ],
            },
            {
              number: "3",
              title: "Accompagner les familles dans le choix des établissements",
              items: [
                "Présenter les différences entre établissements homologués, partenaires ou gestion directe.",
                "Aider à comprendre les politiques de frais, projets pédagogiques et résultats académiques.",
                "Alerter sur les établissements en difficulté ou dont la gestion impose une vigilance particulière.",
                "Assurer un rôle de médiation entre parents et directions en cas de litige.",
              ],
            },
            {
              number: "4",
              title: "Participer aux comités de gestion des établissements",
              items: [
                "Exiger la transparence budgétaire : comptes détaillés, investissements, politique salariale.",
                "Veiller à la cohérence entre frais de scolarité et qualité des services rendus.",
                "Intervenir pour éviter des hausses injustifiées ou mal expliquées.",
                "Suivre les travaux d'infrastructure, de maintenance et de sécurité.",
              ],
            },
            {
              number: "5",
              title: "Soutenir directement les APE",
              items: [
                "Renforcer leur rôle dans la gouvernance des établissements.",
                "Les aider à obtenir des informations et à se faire entendre.",
                "Faciliter l'organisation de soutien scolaire, de tutorat et d'activités périscolaires.",
                "Promouvoir des consultations régulières entre APE, enseignants, élus et direction.",
              ],
            },
            {
              number: "6",
              title: "Travailler avec les OLES",
              items: [
                "Soutenir financièrement ou logistiquement leurs actions en faveur des enfants.",
                "Mettre en place des distributions ciblées : matériel scolaire, aide alimentaire, activités périscolaires.",
                "Coordonner les aides entre bourses scolaires, aides sociales consulaires et soutien des OLES.",
              ],
            },
            {
              number: "7",
              title: "Développer le soutien scolaire et les activités éducatives",
              items: [
                "Encourager la création d'associations de tutorat ou de soutien scolaire bénévole.",
                "Promouvoir les activités périscolaires : classes vertes, sports, arts, sorties culturelles.",
                "Chercher des financements locaux pour réduire le coût pour les familles.",
              ],
            },
            {
              number: "8",
              title: "Être un médiateur permanent",
              items: [
                "Résoudre les conflits avant qu'ils ne dégénèrent.",
                "Travailler avec le consulat pour accélérer les démarches urgentes.",
                "Soutenir les familles face à des décisions incomprises ou mal expliquées.",
              ],
            },
            {
              number: "9",
              title: "Informer, expliquer, rendre transparent",
              items: [
                "Organiser des réunions d'information annuelles sur les bourses, frais et politiques scolaires.",
                "Publier des comptes rendus de réunions scolaires.",
                "Communiquer régulièrement sur les problèmes rencontrés et les solutions trouvées.",
              ],
            },
          ].map((section) => (
            <div className="family-education-section" key={section.number}>
              <div className="family-education-section-header">
                <div className="family-education-number">{section.number}</div>
                <h2>{section.title}</h2>
              </div>
              <ul className="family-education-list">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="family-education-conclusion">
            <p>
              Un conseiller consulaire peut agir puissamment, non pas en légiférant,
              mais en <strong>défendant les familles avec détermination</strong>, en influençant
              les décisions nationales via l'élection des sénateurs, et surtout en
              travaillant chaque jour au plus près des réalités locales.
            </p>
          </div>

          <div className="family-education-signature">
            <span className="signature-label">Notre engagement</span>
            <span className="signature-value">
              Chaque enfant mérite l'excellence.
            </span>
          </div>

        </div>
      </section>
    </main>
  );
}