import { candidate } from "../data/candidate";

export default function Footer({ content }) {
  const engageTitle = content?.engageTitle || "Je veux faire plus";
  const engageSubtitle =
    content?.engageSubtitle || "5 facons de s'engager pour changer Paris";
  const engageCards =
    content?.engageCards && content.engageCards.length
      ? content.engageCards
      : [
          {
            icon: "€",
            iconClass: "engage-icon-yellow",
            title: "Je donne",
            description: "Soutenez financierement la campagne pour un Paris heureux",
            buttonLabel: "En savoir plus ?",
            buttonClass: "btn-accent",
          },
          {
            icon: "?",
            iconClass: "engage-icon-pink",
            title: "Je milite",
            description: "Rejoignez nos equipes sur le terrain pour faire campagne",
            buttonLabel: "En savoir plus ?",
            buttonClass: "btn-solid",
          },
          {
            icon: "?",
            iconClass: "engage-icon-pink",
            title: "Je convaincs",
            description: "Recommandez un proche parisien, notre equipe suit",
            buttonLabel: "En savoir plus ?",
            buttonClass: "btn-solid",
          },
        ];

  const footerName = content?.name || candidate.fullName;
  const footerTagline =
    content?.tagline || "Building a city that listens and acts.";
  const footerLinks =
    content?.links && content.links.length
      ? content.links
      : [
          { label: "Who am I?", href: "#about" },
          { label: "Program", href: "#program" },
          { label: "Open city", href: "#cities" },
          { label: "Shop", href: "#shop" },
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
                <button className={`btn ${card.buttonClass || "btn-solid"}`} type="button">
                  {card.buttonLabel}
                </button>
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
        {/**<span>Paid for by citizens for change.</span>}**/}
        <span>{footerBottom}</span>
      </div>
    </footer>
  );
}