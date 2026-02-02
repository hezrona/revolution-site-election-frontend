import { candidate } from "../../data/candidate";

import "./listAction.css";

const actions = [
  {
    title: "Nos Vidéos",
    description: "",
    icon: "🎥",
    link: "#share-video",
  },
  {
    title: "Nos visuels pour les réseaux",
    description: "",
    icon: "🖼️",
  },
  {
    title: "Je partage le site",
    description: "",
    icon: "🔗",
  },
  {
    title: "Je signe la petition",
    description: "",
    icon: "✍️",
    link: "#sign-petition",
  },
  {
    title: "Je donne",
    description: "",
    icon: "💬",
    link: "#donate"
  },
  {
    title: "J'envoi un message",
    description: "",
    icon: "🖨️",
    link: "#print-tract",
  },
  {
    title: "J'imprime un flyer",
    description: "",
    icon: "💰",
    link: "#print-tract",
  },
  {
    title: `Je rejoins ${candidate.firstName}`,
    description: ``,
    icon: "✈️",
  },
];

export default function ListAction() {
  return (
    <section className="list-action" id="actions">
      <div className="container list-action-inner">
        <div className="list-action-panel">
          <h2>J'agis tout de suite</h2>
          <p>8 actions simples pour aider {candidate.fullName}</p>
          <div className="list-action-grid">
            {actions.map((action) => (
              <a
                href={action.link || "#"}
                className="list-action-card"
                key={action.title}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="list-action-icon" aria-hidden="true">
                  {action.icon}
                </div>
                <h3>{action.title}</h3>
                <p>{action.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

