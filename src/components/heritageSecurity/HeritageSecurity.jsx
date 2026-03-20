import VerticalCarousel from "../entrepreneur/VerticalCarousel.jsx";
import "./heritageSecurity.css";

/* ── Slides patrimoine & juridique pour le VerticalCarousel ── */
const heritageSlides = [
  {
    id: "successoral",
    panelTitle: "Le piège du droit successoral : le compte à rebours des 10 ans",
    title: "La Professio Juris : votre bouclier successoral",
    bullets: [
      "Après dix années de résidence continue à Madagascar, c'est le droit successoral malgache qui s'applique à votre patrimoine. Or, ce droit est structurellement très différent du Code civil français — particulièrement défavorable au conjoint survivant, qui peut se retrouver évincé par d'autres membres de la famille.",
      "Notre solution : la Professio Juris. Rédigez un testament authentique indiquant explicitement que votre succession sera régie par la loi française. Nous avons établi des partenariats avec des notaires malgaches et français pour que vos dispositions soient inattaquables dans les deux juridictions.",
    ],
    callout:
      "Dix ans, c'est le délai à ne pas laisser passer. Un acte notarié aujourd'hui, c'est la sérénité de votre famille demain.",
    tone: "navy"
  },
  {
    id: "etatcivil",
    panelTitle: "État civil et mariage : verrouiller vos droits fondamentaux",
    title: "Chaque étape civile juridiquement étanche",
    bullets: [
      "Une transcription mal effectuée ou un régime matrimonial mal adapté peut paralyser la vente d'un bien ou la transmission d'un héritage. Nous agirons pour fluidifier vos relations avec les services consulaires et les autorités locales, en anticipant les blocages pour que chaque étape de votre vie civile soit juridiquement étanche en France comme à Madagascar.",
    ],
    callout:
      "L'anticipation juridique, c'est la liberté de vivre sereinement entre deux pays.",
    tone: "navy"
  },
  {
    id: "fiscal",
    panelTitle: "Expertise fiscale : maîtriser la convention franco-malgache",
    title: "Vivre entre deux pays sans double imposition",
    bullets: [
      "Vivre entre deux pays ne doit pas signifier subir une double imposition. Nous vous apportons un conseil de terrain sur les trois piliers de votre situation fiscale.",
    ],
    chips: [
      "Résidence fiscale — éviter les redressements arbitraires",
      "Revenus (retraites, dividendes, foncier) — conformes aux traités",
      "Transmission — optimiser dons et legs",
    ],
    callout:
      "La convention franco-malgache protège ceux qui la connaissent. Nous vous aidons à en tirer pleinement parti.",
    tone: "navy"
  },
  {
    id: "compte",
    panelTitle: "Le combat pour le droit au compte",
    title: "Ne plus être coupé de la France du jour au lendemain",
    bullets: [
      "Des banques françaises ferment des comptes de non-résidents sans préavis, coupant le lien économique vital avec la France. Notre liste fera du droit au compte un axe de combat prioritaire auprès des instances représentatives, tout en vous orientant vers des partenaires financiers spécialisés dans l'expatriation.",
    ],
    callout:
      "Un compte bancaire fermé sans préavis, c'est une vie entière paralysée. Ce combat, nous le mènerons pour vous.",
    tone: "navy"
  },
  {
    id: "patrimoine",
    panelTitle: "Gestion patrimoniale et placements : préparer l'avenir",
    title: "Des stratégies sur mesure pour non-résidents",
    bullets: [
      "Grâce à nos partenaires en gestion de patrimoine, nous vous aidons à bâtir des stratégies adaptées à votre double vie franco-malgache.",
    ],
    chips: [
      "Assurance-vie luxembourgeoise ou française",
      "Immobilier sécurisé en France",
      "Retraite complémentaire hors système de base",
    ],
    callout:
      "Protection, transmission et sérénité.",
    tone: "navy"
  },
];

/* ── Contenu header du carousel ── */
const heritageCarouselContent = {
  eyebrow: "Patrimoine & Juridique",
  heading: "Nos engagements pour votre sécurité patrimoniale et juridique",
  description:
    "Succession, état civil, fiscalité, droit au compte, placements : cinq axes pour que l'expatriation ne rime jamais avec vulnérabilité.",
  slides: heritageSlides
};

export default function HeritageSecurity() {
  return (
    <main className="heritage-security-page">

      {/* ── HERO ── */}
      <section className="heritage-security-hero">
        <div className="container heritage-security-hero-inner">
          <span className="heritage-security-eyebrow">Patrimoine & Juridique</span>
          <h1>Sécurité patrimoniale et juridique</h1>
          <p>
            Protéger votre vie et vos proches à Madagascar — parce que
            l'expatriation ne doit jamais rimer avec vulnérabilité.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="heritage-security-intro">
        <div className="container heritage-security-intro-inner">
          <div>
            <h2>Transformer l'incertitude en stratégie de protection</h2>
            <p>
              S'installer à Madagascar est une aventure d'une richesse incomparable.
              Pourtant, trop souvent, l'enthousiasme de la vie sur la Grande Île occulte
              une réalité juridique complexe : celle des <strong>conflits de lois entre la France
              et Madagascar</strong>.
            </p>
            <p>
              Notre liste s'engage à transformer l'incertitude administrative en une
              <strong> stratégie de protection robuste</strong> — pour votre patrimoine, votre famille
              et votre avenir.
            </p>
          </div>
          <div className="heritage-security-card">
            <h3>Nos domaines d'intervention</h3>
            <ul>
              <li>Droit successoral — Professio Juris et testament authentique</li>
              <li>État civil et régime matrimonial sécurisés</li>
              <li>Fiscalité — convention franco-malgache et résidence fiscale</li>
              <li>Droit au compte pour non-résidents</li>
              <li>Assurance-vie et placements adaptés à l'expatriation</li>
              <li>Préparation de la retraite complémentaire</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── CAROUSEL DES ENGAGEMENTS ── */}
      <VerticalCarousel content={heritageCarouselContent} />

    </main>
  );
}