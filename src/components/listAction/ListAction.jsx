import { candidate } from "../../data/candidate";

import "./listAction.css";

const fallbackActions = [
  {
    title: "Santé",
    description: "",
    icon: "🎥",
    // link: "#share-video",
    link: "#",
  },
  {
    title: "Entreprises & Entrepreneurs",
    description: "",
    icon: "🖼️",
  },
  {
    title: "Vie Quotidienne",
    description: "",
    icon: "🔗",
  },
  {
    title: "Démarches Consulaires",
    description: "",
    icon: "✍️",
    link: "#sign-petition",
  },
  {
    title: "Sécurité physique",
    description: "",
    icon: "💬",
    // link: "#donate"
    link: "#"
  },
  {
    title: "Sécurité patrimoniale",
    description: "",
    icon: "🖨️",
    link: "#print-tract",
  },
  {
    title: "Famille & Education",
    description: "",
    icon: "💰",
    link: "#print-tract",
  }/*,
  {
    title: `Je rejoins ${candidate.firstName}`,
    description: ``,
    icon: "✈️",
  },*/
];

export default function ListAction({ content }) {
  const title = content?.title || "Nos pôles de compétence à votre service";
  const subtitle = content?.subtitle || ``;
  const actions = content?.items && content.items.length ? content.items : fallbackActions;

  return (
    <section className="list-action" id="actions">
      <div className="container list-action-inner">
        <div className="list-action-panel">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="list-action-grid">
            {actions.map((action) => (
              <a
                href={action.link || "#"}
                className="list-action-card"
                key={action.title}
                style={{ textDecoration: "none", color: "inherit" }}
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