import { Link } from "react-router-dom";
import { getStrapiMediaUrl } from "../../api/strapi";
import "./listAction.css";
import { FaHeartbeat, FaBriefcase, FaHome, FaPassport, FaShieldAlt, FaLock, FaGraduationCap } from "react-icons/fa";

const fallbackActions = [
  { title: "Santé",                       description: "", icon: <FaHeartbeat />,    link: "/health" },
  { title: "Entreprise et entrepreneurs", description: "", icon: <FaBriefcase />,    link: "/entrepreneur" },
  { title: "Vie Quotidienne",             description: "", icon: <FaHome />,         link: "/daily-life" },
  { title: "Démarches Consulaires",       description: "", icon: <FaPassport />,     link: "/consular-procedures" },
  { title: "Sécurité physique",           description: "", icon: <FaShieldAlt />,    link: "/physical-security" },
  { title: "Sécurité patrimoniale",       description: "", icon: <FaLock />,         link: "/heritage-security" },
  { title: "Famille & Education",         description: "", icon: <FaGraduationCap />,link: "/family-education" },
];

export default function ListAction({ content }) {
  const title = content?.title || "Nos pôles de compétence à votre service";
  const subtitle = content?.subtitle || "";
  const actions = content?.items?.length ? content.items : fallbackActions;

  const normalizeTitle = (value) =>
    (value || "").toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const getActionLink = (action) => {
    const t = normalizeTitle(action?.title);

    if (t.includes("programme"))                                    return "/program";
    if (t.includes("entrepreneur"))                                 return "/entrepreneur";
    if (t.includes("soutien") || t.includes("soutenir") || t.includes("agir")) return "/take-action";
    if (t.includes("temoign") || t.includes("valeur"))             return "/testify";
    if (t.includes("don"))                                          return "/donate";
    if (t.includes("petition"))                                     return "/sign-petition";
    if (t.includes("condition") || t.includes("terms"))            return "/terms";
    if (t.includes("tract") || t.includes("imprimer"))             return "/print-tract";
    if (t.includes("patrimoine") || t.includes("patrimonial"))     return "/heritage-security";
    if (t.includes("video") || t.includes("partager"))             return "/share-video";
    if (t.includes("equipe") || t.includes("team"))                return "/team";
    if (t.includes("sante") || t.includes("santé"))                return "/health";
    if (t.includes("quotidien"))                                    return "/daily-life";
    if (t.includes("consulaire"))                                   return "/consular-procedures";
    if (t.includes("physique"))                                     return "/physical-security";
    if (t.includes("famille"))                                      return "/family-education";

    return action?.link || "/";
  };

  return (
    <section className="list-action" id="actions">
      <div className="container list-action-inner">
        <div className="list-action-panel">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="list-action-grid">
            {actions.map((action) => (
              <Link
                to={getActionLink(action)}
                className="list-action-card"
                key={action.title}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="list-action-icon" aria-hidden="true">
                  {action.icon}
                </div>
                <h3>{action.title}</h3>
                <p>{action.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}