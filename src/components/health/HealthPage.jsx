import VerticalCarousel from "../entrepreneur/VerticalCarousel.jsx";
import "./health.css";

/* ── Slides santé pour le VerticalCarousel ── */
const healthSlides = [
  {
    id: "urgence",
    panelTitle: "L'urgence et le maillage territorial",
    title: "Une réponse structurée sur tout le territoire",
    bullets: [
      "L'urgence ne prévient pas. Que l'on vive à Tananarive ou en province, l'accès rapide à un plateau technique performant est une question de survie.",
      "Mon engagement : mettre en place des partenariats structurés pour la gestion des urgences sur tout le territoire, avec des protocoles de prise en charge prioritaire pour les Français, garantissant que chaque compatriote soit dirigé vers la structure la plus adaptée."
    ],
    callout:
      "Un élu de proximité ne gère pas l'urgence après coup — il construit les conditions pour qu'elle soit traitée avant que la situation ne devienne critique.",
    tone: "navy"
  },
  {
    id: "evasan",
    panelTitle: "Sécuriser les évacuations sanitaires (EVASAN)",
    title: "Moins de stress, plus de sécurité",
    bullets: [
      "L'évacuation sanitaire est souvent source d'un stress financier et logistique majeur. Ma connaissance des réseaux hospitaliers français et locaux me permettra de faciliter la coordination avec les établissements d'accueil.",
      "Nous travaillerons à identifier et négocier des solutions d'EVASAN à moindre coût, sans compromis sur la sécurité, pour que le prix d'un vol médicalisé ne soit plus un obstacle à la vie."
    ],
    callout:
      "Le coût d'une évacuation ne doit jamais être une raison de renoncer à se soigner. C'est un engagement de dignité.",
    tone: "navy"
  },
  {
    id: "solidarite",
    panelTitle: "Solidarité financière : ne laisser personne de côté",
    title: "CFE et fonds d'urgence",
    bullets: [
      "L'accès à la Caisse des Français de l'Étranger (CFE) est essentiel, mais le poids des cotisations reste parfois insurmontable. Il existe la possibilité de se faire financer par l'aide sociale de l'État une bonne partie de la cotisation CFE. Je vous aiderai à constituer ces dossiers et les défendrai devant le Conseil Consulaire.",
      "Je propose également la création d'un Fonds d'Urgence et de Solidarité avec les OLES de Madagascar, pour réagir immédiatement face aux situations de détresse médicale absolue que les circuits classiques ne couvrent pas."
    ],
    chips: [
      "Aide aux dossiers CFE",
      "Fonds d'urgence OLES",
      "Défense au Conseil Consulaire",
      "Zéro exclusion"
    ],
    callout:
      "La solidarité n'est pas une option. C'est le socle d'une communauté qui se respecte.",
    tone: "navy"
  },
  {
    id: "reseau",
    panelTitle: "Un réseau de confiance pour le quotidien et le handicap",
    title: "Partenaires médicaux de qualité",
    bullets: [
      "Co-fondatrice de l'association FANARENANA il y a 20 ans — plateau technique pluridisciplinaire pour enfants en situation de handicap — et participante active à l'association EFM (Enfants Français de Madagascar), je souhaite constituer un réseau de partenaires médicaux et paramédicaux de haute qualité.",
      "Généralistes, spécialistes, kinésithérapeutes, psychomotriciens : chaque compatriote doit pouvoir trouver rapidement le bon interlocuteur, en français, avec un niveau de confiance établi."
    ],
    callout:
      "Vingt ans de terrain et de réseau au service d'un objectif : que personne ne se retrouve seul face à un problème de santé à Madagascar.",
    tone: "navy"
  }
];

/* ── Contenu header du carousel ── */
const healthCarouselContent = {
  eyebrow: "Santé",
  heading: "Mes engagements pour la santé des Français de Madagascar",
  description:
    "Urgences, évacuations sanitaires, solidarité financière, réseau de soins : quatre axes concrets pour améliorer votre sécurité médicale au quotidien.",
  slides: healthSlides
};

export default function HealthPage() {
  return (
    <main className="health-page">

      {/* ── HERO ── */}
      <section className="health-hero">
        <div className="container health-hero-inner">
          <span className="health-eyebrow">Santé</span>
          <h1>La santé des Français de Madagascar</h1>
          <p>
            Une élue de proximité, pragmatique et à l'écoute, pour défendre
            votre accès aux soins et votre sécurité médicale.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="health-intro">
        <div className="container health-intro-inner">
          <div>
            <h2>Une expertise médicale au service de la communauté</h2>
            <p>
              <strong>Française installée à Madagascar depuis 30 ans</strong>, orthoptiste diplômée
              de la faculté de médecine de Paris, j'ai exercé à l'<strong>AP-HP</strong> avant de
              rejoindre Tananarive. Trois décennies d'immersion dans le système de santé local —
              création du service d'orthoptie au <strong>Centre Hospitalier de Soavinandrina</strong>,
              activité libérale, contacts réguliers avec des professionnels de santé malgaches et
              français.
            </p>
            <p>
              Ces années m'ont permis de connaître de près les réalités quotidiennes de nos
              compatriotes : difficultés d'accès aux soins, suivi des personnes âgées, urgences
              et complexité des remboursements CFE.
            </p>
          </div>
          <div className="health-card">
            <h3>Priorités d'action</h3>
            <ul>
              <li>Structurer la gestion des urgences sur tout le territoire</li>
              <li>Sécuriser et faciliter les évacuations sanitaires (EVASAN)</li>
              <li>Aider à l'accès à la CFE et défendre les dossiers d'aide sociale</li>
              <li>Créer un Fonds d'Urgence et de Solidarité avec les OLES</li>
              <li>Bâtir un réseau médical et paramédical de confiance</li>
              <li>Accompagner les familles d'enfants en situation de handicap</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── CAROUSEL DES ENGAGEMENTS ── */}
      <VerticalCarousel content={healthCarouselContent} />

    </main>
  );
}