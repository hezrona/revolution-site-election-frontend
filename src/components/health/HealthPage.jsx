import "./health.css";

export default function HealthPage() {
  return (
    <main className="health-page">
      <section className="health-hero">
        <div className="container health-hero-inner">
          <span className="eyebrow">Santé</span>
          <h1>La santé des Français de Madagascar</h1>
          <p>
            Une élue de proximité, pragmatique et à l'écoute, pour défendre
            votre accès aux soins et votre sécurité médicale.
          </p>
        </div>
      </section>

      <section className="health-content">
        <div className="container health-card">

          <p>
            <strong>Française installée à Madagascar depuis 30 ans</strong>, orthoptiste diplômée
            de la faculté de médecine de Paris, j'ai exercé à l'<strong>AP-HP</strong> avant de
            rejoindre Tananarive. Trois décennies d'immersion dans le système de santé local —
            création du service d'orthoptie au <strong>Centre Hospitalier de Soavinandrina</strong>,
            activité libérale, contacts réguliers avec des professionnels de santé malgaches et
            français — m'ont permis de connaître de près les réalités quotidiennes de nos compatriotes :
            difficultés d'accès aux soins, suivi des personnes âgées, urgences et complexité
            des remboursements CFE.
          </p>

          <div className="health-section">
            <h2>L'urgence et le maillage territorial</h2>
            <p>
              L'urgence ne prévient pas. Que l'on vive à Tananarive ou en province, l'accès
              rapide à un plateau technique performant est une question de survie. Mon engagement :
              mettre en place des <strong>partenariats structurés pour la gestion des urgences</strong> sur
              tout le territoire, avec des protocoles de prise en charge prioritaire pour les Français,
              garantissant que chaque compatriote soit dirigé vers la structure la plus adaptée.
            </p>
          </div>

          <div className="health-section">
            <h2>Sécuriser les évacuations sanitaires (EVASAN)</h2>
            <p>
              L'évacuation sanitaire est souvent source d'un stress financier et logistique majeur.
              Ma connaissance des réseaux hospitaliers français et locaux me permettra de
              <strong> faciliter la coordination avec les établissements d'accueil</strong>. Nous travaillerons
              à identifier et négocier des <strong>solutions d'EVASAN à moindre coût</strong>, sans compromis
              sur la sécurité, pour que le prix d'un vol médicalisé ne soit plus un obstacle à la vie.
            </p>
          </div>

          <div className="health-section">
            <h2>Solidarité financière : ne laisser personne de côté</h2>
            <p>
              L'accès à la <strong>Caisse des Français de l'Étranger (CFE)</strong> est essentiel, mais
              le poids des cotisations reste parfois insurmontable. Il existe la possibilité de se faire
              financer par l'aide sociale de l'État une bonne partie de la cotisation CFE.
              <strong> Je vous aiderai à constituer ces dossiers</strong> et les défendrai devant le Conseil
              Consulaire.
            </p>
            <p>
              Je propose également la création d'un <strong>Fonds d'Urgence et de Solidarité</strong> avec
              les OLES de Madagascar, pour réagir immédiatement face aux situations de détresse médicale
              absolue que les circuits classiques ne couvrent pas.
            </p>
          </div>

          <div className="health-section">
            <h2>Un réseau de confiance pour le quotidien et le handicap</h2>
            <p>
              Co-fondatrice de l'association <strong>FANARENANA</strong> il y a 20 ans — plateau technique
              pluridisciplinaire pour enfants en situation de handicap — et participante active à
              l'association <strong>EFM (Enfants Français de Madagascar)</strong>, je souhaite constituer
              un réseau de partenaires médicaux et paramédicaux de haute qualité : généralistes,
              spécialistes, kinésithérapeutes, psychomotriciens.
            </p>
          </div>

          <div className="health-signature">
            <span className="signature-label">Candidate aux élections consulaires 2026</span>
            <span className="signature-value">Dominique Louvet</span>
          </div>

        </div>
      </section>
    </main>
  );
}