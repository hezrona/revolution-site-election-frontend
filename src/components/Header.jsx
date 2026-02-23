export default function Header({ content }) {
  const logoFirst = content?.logo?.firstName || "Union des Français";
  const logoLast = content?.logo?.lastName || "de Madagascar";
  const links =
    content?.links && content.links.length
      ? content.links
      : [
          { label: "L'équipe", href: "#about" },
          { label: "Le Programme", href: "#program-page" },
          { label: "Nos valeurs", href: "#testify" },
          { label: "Je soutiens", href: "#take-action", className: "nav_act" },
          { label: "Le blog", href: "#donate", className: "nav_donate" },
        ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <span>{logoFirst}</span>
          <span className="logo-accent">{logoLast}</span>
        </div>
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