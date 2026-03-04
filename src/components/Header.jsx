export default function Header({ content }) {
  const logoFirst = content?.logo?.firstName || "Union des Français";
  const logoLast = content?.logo?.lastName || "de Madagascar";
  const links =
    content?.links && content.links.length
      ? content.links
      : [
          { label: "L'équipe", href: "#team" },
          { label: "Le Programme", href: "#program-alt-page" },
          { label: "Nos valeurs", href: "#our-value" },
          { label: "Je soutiens", href: "#take-action", className: "nav_act" },
          { label: "Fiches techniques", href: "#donate", className: "nav_donate" },
          {
            label: "Les partenaires",
            href: "#partner-article",
            className: "nav_donate",
          },
        ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="logo" aria-label="Retour à l'accueil">
          <span>{logoFirst}</span>
          <span className="logo-accent">{logoLast}</span>
        </a>
        <nav className="nav">
          {links.map((link) => (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              className={link.className}
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
