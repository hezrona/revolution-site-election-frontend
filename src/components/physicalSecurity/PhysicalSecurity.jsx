import VerticalCarousel from "../entrepreneur/VerticalCarousel.jsx";
import "./physicalSecurity.css";

/* ── Slides sécurité physique pour le VerticalCarousel ── */
const securitySlides = [
  {
    id: "constat",
    panelTitle: "Face à l'affaiblissement des moyens publics",
    title: "D'une posture de constat à une stratégie active",
    bullets: [
      "Chaque année, entre 5 et 15 de nos compatriotes perdent la vie sur la Grande Île dans des circonstances tragiques. L'insécurité s'immisce également sous forme de vols, cambriolages et menaces sur les axes routiers.",
      "Les moyens alloués à notre administration consulaire s'amenuisent, laissant un sentiment d'abandon grandissant. Il est temps de passer d'une posture de simple constat à une stratégie de protection active.",
    ],
    callout:
      "Pour l'UFM, la sécurité est un pôle opérationnel structuré autour de solutions concrètes, immédiates et technologiques.",
    tone: "navy"
  },
  {
    id: "referent",
    panelTitle: "Un responsable sécurité dédié",
    title: "24h/24, 7j/7 — aucune alerte sans réponse",
    bullets: [
      "Un référent sécurité UFM joignable 24h/24 et 7j/7, véritable coordinateur de crise entre nos ressortissants, l'Officier de Sécurité de l'Ambassade et les autorités malgaches pour qu'aucune alerte ne reste lettre morte.",
    ],
    callout:
      "Un interlocuteur unique, disponible en permanence. La sécurité ne s'improvise pas.",
    tone: "navy"
  },
  {
    id: "whatsapp",
    panelTitle: "Le réseau WhatsApp d'urgence",
    title: "Briser l'isolement qui profite aux agresseurs",
    bullets: [
      "Un Groupe WhatsApp de Sécurité Communautaire permettant à chaque membre de lancer une alerte géolocalisée en cas d'agression ou de comportement suspect, pour briser l'isolement qui profite aux agresseurs.",
    ],
    chips: [
      "Alerte géolocalisée instantanée",
      "Réseau communautaire actif",
      "Coordination avec l'Ambassade",
      "Couverture nationale",
    ],
    callout:
      "La vigilance collective est l'ennemie du crime.",
    tone: "navy"
  },
  {
    id: "dispositif",
    panelTitle: "Partenariat sécurité & Voisins Vigilants",
    title: "Protection physique et surveillance mutuelle",
    bullets: [
      "Un partenariat privilégié avec une société de sécurité privée de référence pour des interventions rapides et des tarifs négociés : alarmes, gardiennage physique, systèmes de vidéosurveillance.",
      "Un système de surveillance mutuelle de quartier pour repérer les véhicules suspects, partager les informations sur les tentatives d'intrusion. La vigilance collective est l'ennemie du crime.",
    ],
    chips: [
      "Interventions rapides négociées",
      "Alarmes et vidéosurveillance",
      "Voisins Vigilants",
      "Tarifs de groupe",
    ],
    callout:
      "Votre sérénité, partout à Madagascar.",
    tone: "navy"
  },
];

/* ── Contenu header du carousel ── */
const securityCarouselContent = {
  eyebrow: "Sécurité physique",
  heading: "Un dispositif de protection concret pour chaque Français de Madagascar",
  description:
    "Référent dédié, réseau d'alerte, partenariat sécurité, voisins vigilants : quatre axes pour que votre protection ne soit plus une variable d'ajustement.",
  slides: securitySlides
};

export default function PhysicalSecurity() {
  return (
    <main className="physical-security-page">

      {/* ── HERO ── */}
      <section className="physical-security-hero">
        <div className="container physical-security-hero-inner">
          <span className="physical-security-eyebrow">Sécurité physique</span>
          <h1>Protéger nos compatriotes à Madagascar</h1>
          <p>
            Parce que la sécurité des Français ne peut plus être une variable
            d'ajustement, l'UFM fait de votre protection physique sa priorité absolue.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="physical-security-intro">
        <div className="container physical-security-intro-inner">
          <div>
            <h2>La sécurité comme priorité absolue</h2>
            <p>
              Vivre à Madagascar est une aventure humaine exceptionnelle, mais nous ne
              pouvons plus ignorer les zones d'ombre qui pèsent sur notre quotidien.
              Chaque année, entre <strong>5 et 15 de nos compatriotes perdent la vie</strong> sur
              la Grande Île dans des circonstances tragiques.
            </p>
            <p>
              Pour l'UFM, la sécurité est un <strong>pôle opérationnel structuré</strong> autour
              de solutions concrètes, immédiates et technologiques — pas un simple
              discours.
            </p>
          </div>
          <div className="physical-security-card">
            <h3>Notre dispositif de protection</h3>
            <ul>
              <li>Référent sécurité joignable 24h/24 et 7j/7</li>
              <li>Groupe WhatsApp d'alerte géolocalisée</li>
              <li>Partenariat avec société de sécurité privée de référence</li>
              <li>Tarifs négociés : alarmes, gardiennage, vidéosurveillance</li>
              <li>Système « Voisins Vigilants » de quartier</li>
              <li>Coordination directe avec l'Officier de Sécurité de l'Ambassade</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── CAROUSEL DES ENGAGEMENTS ── */}
      <VerticalCarousel content={securityCarouselContent} />

    </main>
  );
}