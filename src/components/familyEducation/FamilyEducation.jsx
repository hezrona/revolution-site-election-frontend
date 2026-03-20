import VerticalCarousel from "../entrepreneur/VerticalCarousel.jsx";
import "./familyEducation.css";

/* ── Slides famille & éducation pour le VerticalCarousel ── */
const familySlides = [
  {
    id: "bourses",
    panelTitle: "Défendre les familles dans les commissions de bourses",
    title: "Chaque dossier défendu avec humanité",
    bullets: [
      "Défendre chaque dossier avec humanité, en tenant compte des réalités économiques locales. Expliciter aux familles les règles, critères et justificatifs nécessaires.",
      "Aider les parents à constituer ou renforcer leurs dossiers, notamment pour les cas complexes. Veiller à l'équité entre les familles et dénoncer les situations manifestement injustes.",
    ],
    chips: [
      "Suivi des recours",
      "Accompagnement urgences",
      "Équité de traitement",
      "Transparence des critères",
    ],
    callout:
      "Lutter pour un doublement du budget national des bourses — en conditionnant notre soutien aux candidats sénatoriaux qui s'y engagent.",
    tone: "navy"
  },
  {
    id: "etablissements",
    panelTitle: "Accompagner les familles dans le choix des établissements",
    title: "S'y retrouver dans un réseau complexe",
    bullets: [
      "Présenter les différences entre établissements homologués, partenaires ou gestion directe. Aider à comprendre les politiques de frais, projets pédagogiques et résultats académiques.",
      "Alerter sur les établissements en difficulté ou dont la gestion impose une vigilance particulière. Assurer un rôle de médiation entre parents et directions en cas de litige.",
    ],
    callout:
      "Participer aux comités de gestion : exiger la transparence budgétaire, veiller à la cohérence entre frais et qualité, intervenir contre les hausses injustifiées.",
    tone: "navy"
  },
  {
    id: "ape",
    panelTitle: "Soutenir directement les APE",
    title: "Les associations de parents, levier de gouvernance",
    bullets: [
      "Renforcer leur rôle dans la gouvernance des établissements. Les aider à obtenir des informations et à se faire entendre.",
      "Faciliter l'organisation de soutien scolaire, de tutorat et d'activités périscolaires. Promouvoir des consultations régulières entre APE, enseignants, élus et direction.",
    ],
    callout:
      "Des APE fortes, c'est une communauté scolaire qui se défend elle-même.",
    tone: "navy"
  },
  {
    id: "oles",
    panelTitle: "Travailler avec les OLES & développer le soutien scolaire",
    title: "Coordonner les aides, amplifier l'impact",
    bullets: [
      "Soutenir financièrement ou logistiquement les actions des OLES en faveur des enfants. Mettre en place des distributions ciblées : matériel scolaire, aide alimentaire, activités périscolaires.",
      "Coordonner les aides entre bourses scolaires, aides sociales consulaires et soutien des OLES. Encourager la création d'associations de tutorat ou de soutien scolaire bénévole.",
    ],
    chips: [
      "Matériel scolaire",
      "Tutorat bénévole",
      "Classes vertes & sport",
      "Sorties culturelles",
    ],
    callout:
      "Chercher des financements locaux pour réduire le coût des activités périscolaires pour les familles.",
    tone: "navy"
  },
  {
    id: "mediation",
    panelTitle: "Être un médiateur permanent et rendre transparent",
    title: "Informer, résoudre, rendre compte",
    bullets: [
      "Résoudre les conflits avant qu'ils ne dégénèrent. Travailler avec le consulat pour accélérer les démarches urgentes. Soutenir les familles face à des décisions incomprises ou mal expliquées.",
      "Organiser des réunions d'information annuelles sur les bourses, frais et politiques scolaires. Publier des comptes rendus de réunions scolaires et communiquer régulièrement sur les problèmes rencontrés et les solutions trouvées.",
    ],
    callout:
      "Un conseiller consulaire peut agir puissamment, non pas en légiférant, mais en défendant les familles avec détermination, chaque jour, au plus près des réalités locales.",
    tone: "navy"
  },
];

/* ── Contenu header du carousel ── */
const familyCarouselContent = {
  eyebrow: "Famille & Éducation",
  heading: "Nos engagements pour l'éducation des enfants français à Madagascar",
  description:
    "Bourses, choix des établissements, APE, OLES, médiation : cinq axes concrets pour que l'excellence scolaire reste accessible à toutes les familles.",
  slides: familySlides
};

export default function FamilyEducation() {
  return (
    <main className="family-education-page">

      {/* ── HERO ── */}
      <section className="family-education-hero">
        <div className="container family-education-hero-inner">
          <span className="family-education-eyebrow">Famille & Éducation</span>
          <h1>L'éducation des enfants français à Madagascar</h1>
          <p>
            Défendre chaque famille, accompagner chaque enfant — parce que
            l'excellence scolaire doit rester accessible à tous.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="family-education-intro">
        <div className="container family-education-intro-inner">
          <div>
            <h2>Un rôle essentiel sur le terrain</h2>
            <p>
              L'éducation des enfants français à l'étranger traverse une période
              d'instabilité profonde : <strong>hausse continue des frais de scolarité</strong>,
              fragilisation des familles, manque de transparence et crise structurelle
              du réseau AEFE.
            </p>
            <p>
              Les conseillers consulaires disposent d'un <strong>rôle essentiel sur le
              terrain</strong> : défense des familles, accompagnement des élèves, soutien
              aux associations et participation aux comités de gestion.
            </p>
          </div>
          <div className="family-education-card">
            <h3>Nos neuf axes d'action</h3>
            <ul>
              <li>Défendre les familles en commission de bourses</li>
              <li>Lutter pour l'augmentation nationale du budget des bourses</li>
              <li>Accompagner le choix des établissements</li>
              <li>Participer aux comités de gestion</li>
              <li>Soutenir les APE</li>
              <li>Travailler avec les OLES</li>
              <li>Développer le soutien scolaire et périscolaire</li>
              <li>Être un médiateur permanent</li>
              <li>Informer, expliquer, rendre transparent</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── CAROUSEL DES ENGAGEMENTS ── */}
      <VerticalCarousel content={familyCarouselContent} />

    </main>
  );
}