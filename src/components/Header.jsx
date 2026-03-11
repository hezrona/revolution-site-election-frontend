export default function Header({ content }) {
  const logoFirst = content?.logo?.firstName || "Union des Français";
  const logoLast = content?.logo?.lastName || "de Madagascar";
  const links =
    content?.links && content.links.length
      ? content.links
      : [
          { label: "Programme", href: "#program-alt-page" },
          { label: "Valeurs", href: "#our-value" },
          // TODO: move menu "je soutiens" vers une autre page
          // { label: "Je soutiens", href: "#take-action", className: "nav_act" },
          {
            label: "Administration",
            href: "#administration",
            // className: "nav_donatess",
          },
          {
            label: "Partenaires",
            href: "#partner-article"
          },
          {
            label: "Forum",
            href: "#forum"
          }
        ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="logo" aria-label="Retour à l'accueil">
          <div className="logo-text">
            <span>{logoFirst}</span>
            <span className="logo-accent">{logoLast}</span>
          </div>
        </a>
        <nav className="nav">
          <a key="equipe-team" href="#team" className="nav-alt-pink">
            &Eacute;quipe
          </a>
          {links.map((link, index) => (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              className={index % 2 === 0 ? "nav-alt-yellow" : "nav-alt-pink"}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button className="nav-toggle" aria-label="Open menu" type="button">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
