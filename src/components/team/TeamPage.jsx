import CarouselSection from "../carousel/CarouselSection.jsx";
import "./team.css";

const teamMembers = [
  {
    name: "Sarah Raho",
    role: "Coordinatrice nationale",
    tag: "Centre",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    description:
      "Pilote les actions nationales, assure la cohérence des initiatives locales et coordonne les relais sur le terrain. Sarah veille à la bonne circulation de l'information et à la mise en oeuvre des priorités, avec une attention particulière portée à l'innovation sociale et au dialogue citoyen.",
  },
  {
    name: "Rebecca Shiels",
    role: "Responsable communication",
    tag: "Nord",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    description:
      "Construit la stratégie de communication, valorise les initiatives de terrain et anime les temps forts de la campagne. Rebecca développe des contenus clairs et accessibles pour renforcer le lien avec les habitants et les partenaires.",
  },
  {
    name: "René-Paul Barthel",
    role: "Coordination terrain",
    tag: "Ouest",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    description:
      "Anime les équipes de terrain, organise les déplacements et s'assure du suivi des engagements locaux. René-Paul travaille au plus près des collectifs pour faire remonter les besoins et structurer les actions concrètes.",
  },
  {
    name: "Hélène Bouyer",
    role: "Relations institutionnelles",
    tag: "Sud",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
    description:
      "Porte la voix du projet auprès des partenaires institutionnels et développe des coopérations durables. Hélène favorise les synergies et veille à l'alignement des actions avec les priorités stratégiques.",
  },
  {
    name: "Arthur Paris",
    role: "Développement économique",
    tag: "Est",
    image:
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=600&q=80",
    description:
      "Accompagne les initiatives économiques locales, conseille les porteurs de projets et stimule la création de partenariats. Arthur met l'accent sur l'innovation et la montée en compétences des acteurs économiques.",
  },
  {
    name: "Marie Collin",
    role: "Engagement citoyen",
    tag: "Centre",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
    description:
      "Coordonne les actions de mobilisation, développe les réseaux de bénévoles et organise les rencontres participatives. Marie veille à l'inclusion de toutes les voix dans la construction du projet.",
  },
  {
    name: "Amine Chabert",
    role: "Jeunesse et formation",
    tag: "Nord",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    description:
      "Met en place des programmes pour l'insertion et la formation des jeunes. Amine développe des partenariats éducatifs et conçoit des parcours adaptés aux besoins du territoire.",
  },
  {
    name: "Denis Lapierre",
    role: "Finances et pilotage",
    tag: "Ouest",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    description:
      "Assure le suivi financier, la planification des budgets et la transparence des ressources. Denis apporte une lecture stratégique pour garantir la soutenabilité des actions engagées.",
  },
  {
    name: "Pierre Morat",
    role: "Logistique et opérations",
    tag: "Sud",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
    description:
      "Optimise la logistique des événements et coordonne les opérations sur le terrain. Pierre s'assure que chaque action dispose des moyens nécessaires pour être menée efficacement.",
  },
  {
    name: "Tannakh Trubtossaud",
    role: "Relations internationales",
    tag: "Est",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    description:
      "Développe les partenariats internationaux et favorise les échanges avec la diaspora. Tannakh veille à renforcer la visibilité et l'influence du projet à l'échelle régionale.",
  },
  {
    name: "Marion Bartos",
    role: "Coordination sociale",
    tag: "Centre",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    description:
      "Suit les actions sociales prioritaires et accompagne les associations partenaires. Marion veille à l'impact des mesures et à l'accompagnement des publics les plus fragiles.",
  },
  {
    name: "Louise Cohen",
    role: "Communication locale",
    tag: "Nord",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    description:
      "Coordonne les messages locaux et veille à la cohérence des prises de parole. Louise met en place des actions de proximité et anime les temps d'échange avec les habitants.",
  },
  {
    name: "Samuel Lafont",
    role: "Innovation et numérique",
    tag: "Ouest",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    description:
      "Conçoit les solutions numériques, optimise les outils internes et accompagne la transformation digitale. Samuel porte une attention particulière à l'accessibilité des services.",
  },
  {
    name: "Aurélie Assoumle",
    role: "Relations publiques",
    tag: "Sud",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
    description:
      "Gère les relations avec les médias et les partenaires publics. Aurélie veille à valoriser les initiatives et à construire une image cohérente et solide.",
  },
  {
    name: "Caroline Erbsard",
    role: "Événementiel",
    tag: "Est",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
    description:
      "Organise les événements phares et coordonne la logistique des rencontres publiques. Caroline veille à l'expérience des participants et à la qualité des échanges.",
  },
  {
    name: "Franck Serfati",
    role: "Porte-parole",
    tag: "Centre",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    description:
      "Incarne la parole du collectif et porte les messages clés. Franck prépare les interventions, clarifie les positions et assure la cohérence du discours public.",
  },
  {
    name: "Mourad Amelot",
    role: "Partenariats associatifs",
    tag: "Nord",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    description:
      "Développe les partenariats avec le tissu associatif et soutient les initiatives citoyennes. Mourad facilite la mise en relation des acteurs et la co-construction des projets.",
  },
];

const teamHero = {
  title: "Notre équipe",
  subtitle: "Une équipe engagée, proche du terrain et structurée par pôles.",
  image:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  badges: ["Centre", "Nord", "Ouest", "Sud", "Est"],
};

const colorBands = [
  "team-band-cream",
  "team-band-pink",
  "team-band-cream",
  "team-band-navy",
  "team-band-gold",
];

export default function TeamPage() {
  return (
    <main className="team-page">
      <section className="team-hero">
        <div className="team-hero-media">
          <img src={teamHero.image} alt="Équipe en réunion" />
        </div>
        <div className="container team-hero-content">
          <span className="team-eyebrow">Équipe</span>
          <h1>{teamHero.title}</h1>
          <p>{teamHero.subtitle}</p>
          <div className="team-badges">
            {teamHero.badges.map((badge) => (
              <span key={badge} className="team-badge">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CarouselSection content={{}} />

      <section className="team-list">
        {teamMembers.map((member, index) => (
          <article
            key={`${member.name}-${member.role}`}
            className={`team-row ${colorBands[index % colorBands.length]} ${
              index % 2 === 1 ? "team-row-reverse" : ""
            }`}
          >
            <div className="container team-row-inner">
              <div className="team-card">
                <span className="team-tag">{member.tag}</span>
                <h2>{member.name}</h2>
                <h3>{member.role}</h3>
                <p>{member.description}</p>
              </div>
              <div className="team-photo">
                <img src={member.image} alt={member.name} />
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
