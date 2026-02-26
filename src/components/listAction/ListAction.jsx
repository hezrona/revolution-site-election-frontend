import { candidate } from "../../data/candidate";

import { getStrapiMediaUrl } from "../../api/strapi";
import "./listAction.css";
import consulImage from "../../assets/image/consul.png";
import familleEtEducationImage from "../../assets/image/famille_et_education.png";

const fallbackActions = [
  {
    title: "Santé",
    description: "",
    icon: "🎥",
    // link: "#share-video",
    link: "#",
  },
  {
    title: "Soutenir les entrepreneurs français à Madagascar : une ambition concrète",
    description: "",
    icon: "🖼️",
    link: "#entrepreneur",
  },
  {
    title: "Vie Quotidienne",
    description: "",
    icon: "🔗",
  },
  {
    title: "Démarches Consulaires",
    description: "",
    icon: consulImage,
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
    icon: familleEtEducationImage,
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

  const normalizeTitle = (value) =>
    (value || "")
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const getActionHref = (action) => {
    const normalizedTitle = normalizeTitle(action?.title);

    return normalizedTitle.includes("programme")
      ? "#program-page"
      : normalizedTitle.includes("entrepreneur")
      ? "#entrepreneur"
      : normalizedTitle.includes("soutien") ||
        normalizedTitle.includes("soutenir") ||
        normalizedTitle.includes("agir")
      ? "#take-action"
      : normalizedTitle.includes("temoign") || normalizedTitle.includes("valeur")
      ? "#testify"
      : normalizedTitle.includes("don")
      ? "#donate"
      : normalizedTitle.includes("petition")
      ? "#sign-petition"
      : normalizedTitle.includes("condition") || normalizedTitle.includes("terms")
      ? "#terms"
      : normalizedTitle.includes("tract") || normalizedTitle.includes("imprimer")
      ? "#print-tract"
      : normalizedTitle.includes("video") || normalizedTitle.includes("partager")
      ? "#share-video"
      : normalizedTitle.includes("equipe") || normalizedTitle.includes("team")
      ? "#team"
      : action?.link || "#";
  };

  const resolveIconSrc = (icon) => {
    if (!icon) return "";

    if (typeof icon === "string") {
      const trimmed = icon.trim();
      const isImagePath =
        /^https?:\/\//i.test(trimmed) ||
        /^\/?uploads\//i.test(trimmed) ||
        /\.(png|jpe?g|gif|webp|svg)$/i.test(trimmed);
      return isImagePath ? getStrapiMediaUrl(trimmed) : "";
    }

    const iconUrl = icon?.data?.attributes?.url || icon?.url || "";
    return getStrapiMediaUrl(iconUrl);
  };

  const renderIcon = (action) => {
    const iconSrc = resolveIconSrc(action?.icon);
    if (iconSrc) {
      return (
        <img
          src={iconSrc}
          alt={action?.title || "Action"}
          className="list-action-icon-image"
          loading="lazy"
        />
      );
    }
    return action?.icon;
  };

  return (
    <section className="list-action" id="actions">
      <div className="container list-action-inner">
        <div className="list-action-panel">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="list-action-grid">
            {actions.map((action) => (
              <a
                href={getActionHref(action)}
                className="list-action-card"
                key={action.title}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="list-action-icon" aria-hidden="true">
                  {renderIcon(action.icon)}
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
