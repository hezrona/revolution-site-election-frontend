import VerticalCarousel from "../entrepreneur/VerticalCarousel.jsx";
import "./dailyLife.css";

/* ── Slides vie quotidienne pour le VerticalCarousel ── */
const dailyLifeSlides = [
  {
    id: "confiance",
    panelTitle: "Un réseau construit sur la confiance, pas sur le hasard",
    title: "Sélection rigoureuse des prestataires",
    bullets: [
      "Constituer, sous la responsabilité d'un bénévole dédié, un réseau de partenaires soigneusement sélectionnés couvrant tous les domaines essentiels de votre vie quotidienne. Entrer dans ce réseau ne s'improvise pas : chaque prestataire fera l'objet d'une sélection rigoureuse — vérification des références, du sérieux, de la réputation au sein de la communauté.",
      "La vraie garantie, c'est le regard permanent de la communauté. Après chaque intervention, le client évalue publiquement la prestation sur le site : qualité du travail, respect des délais, honnêteté du devis. Un prestataire dont les notes deviennent insuffisantes sera radié de la liste — sans passe-droit, sans deuxième chance indéfinie."
    ],
    callout:
      "La vraie garantie, c'est le regard permanent de la communauté.",
    tone: "navy"
  },
  {
    id: "maison",
    panelTitle: "La maison : enfin des artisans fiables",
    title: "Votre carnet d'adresses de confiance",
    bullets: [
      "Qui n'a jamais attendu trois semaines un plombier qui n'est jamais venu ? Le pôle Maison du réseau UFM, c'est votre carnet d'adresses de confiance pour tout ce qui touche à votre habitat.",
    ],
    chips: [
      "Plombiers, électriciens, peintres, maçons, menuisiers",
      "Réparateurs d'ordinateurs et de matériel électronique",
      "Jardiniers et prestataires de nettoyage",
    ],
    callout:
      "Un artisan recommandé par la communauté, c'est un artisan qui sait qu'il a quelque chose à perdre.",
    tone: "navy"
  },
  {
    id: "sante",
    panelTitle: "La santé : un accompagnement structuré",
    title: "Savoir à qui faire confiance",
    bullets: [
      "Savoir à quel médecin faire confiance, connaître la clinique adaptée, comprendre comment activer votre couverture CFE — tout cela demande une connaissance du terrain.",
    ],
    chips: [
      "Médecins et infirmiers référents identifiés dans chaque ville",
      "Tarifs de groupe négociés",
      "Information claire sur vos droits et options d'évacuation sanitaire",
    ],
    callout:
      "Un réseau médical de confiance, c'est la sécurité pour toute votre famille.",
    tone: "navy"
  },
  {
    id: "social",
    panelTitle: "La vie sociale : être ensemble, mieux",
    title: "Lien naturel avec l'écosystème local",
    bullets: [
      "Vivre à Madagascar, c'est profiter d'un cadre naturel magnifique et d'une communauté française vivante. L'UFM veut devenir le lien naturel entre vous et cet écosystème.",
    ],
    chips: [
      "Golf, tennis, sports nautiques, randonnée, bridge",
      "Associations culturelles et clubs de rencontre",
      "Mise en relation pour les nouveaux arrivants",
    ],
    callout:
      "S'intégrer, partager, s'épanouir — ensemble, c'est toujours mieux.",
    tone: "navy"
  },
  {
    id: "benevole",
    panelTitle: "Un bénévole engagé, une communauté qui s'organise",
    title: "L'un des vôtres, sur le terrain",
    bullets: [
      "Le responsable du pôle Vie Quotidienne de l'UFM ne sera pas un fonctionnaire lointain. Ce sera l'un des vôtres, joignable sur WhatsApp, présent sur le terrain, animant le réseau avec exigence et bienveillance.",
    ],
    callout:
      "Plus jamais seul à Madagascar.",
    tone: "navy"
  }
];

/* ── Contenu header du carousel ── */
const dailyLifeCarouselContent = {
  eyebrow: "Vie quotidienne",
  heading: "Un réseau de partenaires de confiance, pour chaque aspect de votre quotidien",
  description:
    "Maison, santé, vie sociale : trois pôles concrets pour que vous ne soyez plus jamais seul face aux défis du quotidien à Madagascar.",
  slides: dailyLifeSlides
};

export default function DailyLife() {
  return (
    <main className="daily-life-page">

      {/* ── HERO ── */}
      <section className="daily-life-hero">
        <div className="container daily-life-hero-inner">
          <span className="daily-life-eyebrow">Vie quotidienne</span>
          <h1>Plus jamais seul face aux défis du quotidien</h1>
          <p>
            Un réseau de partenaires de confiance, construit par et pour
            les Français de Madagascar.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="daily-life-intro">
        <div className="container daily-life-intro-inner">
          <div>
            <h2>Un réseau construit sur la confiance, pas sur le hasard</h2>
            <p>
              Vous êtes Français à Madagascar. Combien de fois vous êtes-vous retrouvé
              démuni face à une situation banale ? Un tuyau qui éclate, une panne
              électrique, un écran d'ordinateur qui rend l'âme — et vous ne savez pas
              à qui faire confiance. <strong>Ce n'est pas une fatalité. C'est précisément
              ce que l'UFM veut changer.</strong>
            </p>
            <p>
              Ces années m'ont permis de connaître de près les réalités quotidiennes de nos
              compatriotes : difficultés d'accès aux services fiables, suivi des demandes,
              complexité du bouche-à-oreille informel.
            </p>
          </div>
          <div className="daily-life-card">
            <h3>Les trois pôles du réseau</h3>
            <ul>
              <li>Plombiers, électriciens, artisans et prestataires du logement</li>
              <li>Médecins et infirmiers référents, tarifs négociés, droits CFE</li>
              <li>Clubs sportifs, associations culturelles, vie sociale</li>
              <li>Évaluation publique de chaque prestataire après intervention</li>
              <li>Radiation immédiate en cas de notes insuffisantes</li>
              <li>Un bénévole dédié, joignable sur WhatsApp, présent sur le terrain</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── CAROUSEL DES PÔLES ── */}
      <VerticalCarousel content={dailyLifeCarouselContent} />

    </main>
  );
}