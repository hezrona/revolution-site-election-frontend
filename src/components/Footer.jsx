import { candidate } from "../data/candidate";
import { FaHandHoldingHeart, FaUsers, FaComments } from "react-icons/fa";

export default function Footer({ content }) {
  const engageTitle = content?.engageTitle || "Je veux faire plus";
  const engageSubtitle =
    content?.engageSubtitle || "3 facons de s'engager pour changer Paris";
  const engageCards =
    content?.engageCards && content.engageCards.length
      ? content.engageCards
      : [
          {
            icon: <FaHandHoldingHeart />,
            iconClass: "engage-icon-yellow",
            title: "Je donne",
            description: "Soutenir financièrement la campagne",
            buttonLabel: "En savoir plus ?",
            buttonClass: "btn-accent",
            href: "#donate",
          },
          {
            icon: <FaUsers />,
            iconClass: "engage-icon-pink",
            title: "Je milite",
            description: "Rejoignez nos equipes sur le terrain pour faire campagne",
            buttonLabel: "En savoir plus ?",
            buttonClass: "btn-solid",
            href: "#milite",
          },
          {
            icon: <FaComments />,
            iconClass: "engage-icon-pink",
            title: "Je convaincs",
            description: "Recommandez un autre Français de Madagascar",
            buttonLabel: "En savoir plus ?",
            buttonClass: "btn-solid",
            href: "#take-action",
          },
        ];

  const footerName = content?.name || candidate.fullName;
  const footerTagline =
    content?.tagline || "Plus jamais seul avec UFM.";
  const footerLinks =
    content?.links && content.links.length
      ? content.links
      : [
          { label: "Qui suis-je ?", href: "#team" },
          { label: "Programme", href: "#program" },
        ];
  const footerActions =
    content?.actions && content.actions.length
      ? content.actions
      : [
          { label: "Volunteer", variant: "outline" },
          { label: "Donate", variant: "solid" },
        ];
  const footerBottom = content?.bottom || "Copyright 2026";

  return (
    <footer className="site-footer" id="shop">
      <section className="footer-engage">
        <div className="container footer-engage-inner">
          <div className="footer-engage-header">
            <h2>{engageTitle}</h2>
            <p>{engageSubtitle}</p>
          </div>
          <div className="footer-engage-grid">
            {engageCards.map((card) => (
              <div className="engage-card" key={card.title}>
                <div className={`engage-icon ${card.iconClass || ""}`.trim()}>
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a
                  href={card.href || "#"}
                  className={`btn ${card.buttonClass || "btn-solid"}`}
                >
                  {card.buttonLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container footer-inner">
        <div>
          <h3>{footerName}</h3>
          <p>{footerTagline}</p>
        </div>
        <div className="footer-links">
          {footerLinks.map((link) => (
            <a key={`${link.label}-${link.href}`} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="footer-actions">
          {footerActions.map((action) => (
            <button
              key={action.label}
              className={`btn btn-${action.variant || "solid"}`}
              type="button"
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>{footerBottom}</span>
      </div>
    </footer>
  );
}