import VerticalCarousel from "../entrepreneur/VerticalCarousel.jsx";
import "./consularProcedures.css";

/* ── Slides démarches consulaires pour le VerticalCarousel ── */
const consularSlides = [
  {
    id: "etatcivil",
    panelTitle: "État civil et mariage : en finir avec l'incertitude",
    title: "Des délais inacceptables, une solution concrète",
    bullets: [
      "La situation actuelle du CCAM est révélatrice : des promesses de transcriptions en deux mois, mais une réalité qui impose souvent huit mois ou davantage. Un dossier incomplet, c'est l'assurance d'un retour à la case départ.",
      "L'argumentation sur les projets de vie du couple est devenue une pièce maîtresse du dossier. Il ne suffit plus de fournir des papiers : il faut prouver la sincérité de l'union. Nos colistiers s'engagent à vérifier vos dossiers en amont et à jouer un rôle de contrôleur rigoureux pour garantir une équité de traitement.",
    ],
    callout:
      "Vos dossiers vérifiés en amont. Un contrôle rigoureux pour garantir une équité de traitement.",
    tone: "navy"
  },
  {
    id: "naissance",
    panelTitle: "Naissance et nationalité : sécuriser l'avenir de vos enfants",
    title: "30 jours pour sécuriser tous vos droits",
    bullets: [
      "Nous conseillons impérativement aux parents de se rendre à Tananarive dans les 30 jours suivant la naissance. C'est la seule garantie d'obtenir l'acte de naissance le jour même, permettant d'enchaîner dès le lendemain sur les demandes de passeport et de CNI.",
      "Vigilance sur le lieu de reconnaissance : il doit impérativement correspondre au lieu de résidence du parent français. Une erreur peut engendrer des complications juridiques inextricables.",
    ],
    callout:
      "30 jours, c'est le délai à ne pas dépasser. Nous vous accompagnons pour ne rien laisser au hasard.",
    tone: "navy"
  },
  {
    id: "visas",
    panelTitle: "Le défi des visas : briser le mur du silence",
    title: "Agir là où d'autres se taisent",
    bullets: [
      "Les refus tombent massivement, souvent sans explications, laissant des familles dans la détresse. Une communication quasi nulle et un manque de courtoisie flagrant sont inacceptables.",
    ],
    chips: [
      "Signaler les dysfonctionnements à Paris",
      "Saisine directe de la Consule Générale",
      "Accompagnement visas long séjour",
      "Zéro silence sur les refus injustifiés",
    ],
    callout:
      "Étudier les dossiers litigieux pour les soumettre directement à la Consule Générale et obtenir des arbitrages justes.",
    tone: "navy"
  },
  {
    id: "reseau",
    panelTitle: "Créer un réseau de confiance et de proximité",
    title: "L'isolement est votre pire ennemi",
    bullets: [
      "Face à la complexité, l'isolement est votre pire ennemi. Nous structurons un réseau d'entraide et de coaching pour les démarches administratives : informations fiables, coûts officiels et accompagnement humain.",
      "Qu'il s'agisse d'obtenir un acte de naissance ou de monter un dossier de visa, notre réseau est là pour vous former et vous épauler.",
    ],
    callout:
      "Les transcriptions de décès sont les seules démarches extrêmement rapides. Nous voulons que cette efficacité devienne la norme pour la vie, les mariages et les projets de nos compatriotes.",
    tone: "navy"
  },
];

/* ── Contenu header du carousel ── */
const consularCarouselContent = {
  eyebrow: "Démarches consulaires",
  heading: "Nos engagements pour restaurer l'efficacité et la transparence",
  description:
    "État civil, naissance, visas, réseau d'entraide : quatre axes concrets pour que le Consulat redevienne la Maison des Français.",
  slides: consularSlides
};

export default function ConsularProcedures() {
  return (
    <main className="consular-page">

      {/* ── HERO ── */}
      <section className="consular-hero">
        <div className="container consular-hero-inner">
          <span className="consular-eyebrow">Démarches consulaires</span>
          <h1>Restaurer l'efficacité et la transparence</h1>
          <p>
            Pour que le Consulat redevienne la "Maison des Français" —
            des élus qui connaissent les rouages et n'ont pas peur de dénoncer les abus.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="consular-intro">
        <div className="container consular-intro-inner">
          <div>
            <h2>Un organe de contrôle et d'accompagnement</h2>
            <p>
              Pour un Français vivant à Madagascar, le Consulat est le lien vital avec
              la République. Pourtant, entre <strong>délais interminables</strong>, manque de
              professionnalisme et opacité des décisions, les démarches quotidiennes
              sont devenues un parcours du combattant.
            </p>
            <p>
              Notre liste s'engage à agir comme un véritable <strong>organe de contrôle
              et d'accompagnement</strong> — des élus, pas des spectateurs.
            </p>
          </div>
          <div className="consular-card">
            <h3>Nos axes d'action</h3>
            <ul>
              <li>Vérification des dossiers d'état civil et de mariage en amont</li>
              <li>Accompagnement naissance et nationalité dans les 30 jours</li>
              <li>Signalement systématique des dysfonctionnements à Paris</li>
              <li>Saisine directe de la Consule Générale sur les dossiers litigieux</li>
              <li>Réseau d'entraide et de coaching administratif</li>
              <li>Défense des visas long séjour et cartes de résident</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── CAROUSEL DES ENGAGEMENTS ── */}
      <VerticalCarousel content={consularCarouselContent} />

    </main>
  );
}