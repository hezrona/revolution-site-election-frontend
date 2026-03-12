import { useState, useEffect } from "react";

export default function Header({ content }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const logoFirst = content?.logo?.firstName || "Union des Français";
  const logoLast = content?.logo?.lastName || "de Madagascar";
  const links =
    content?.links && content.links.length
      ? content.links
      : [
          { label: "Programme", href: "#program-alt-page" },
          { label: "Valeurs", href: "#our-value" },
          { label: "Administration", href: "#administration" },
          { label: "Partenaires", href: "#partner-article" },
          { label: "Forum", href: "#forum" },
        ];

  // Close menu on resize to desktopss
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const allLinks = [{ label: "Équipe", href: "#team" }, ...links];

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="logo" aria-label="Retour à l'accueil">
            <div className="logo-text">
              <span>{logoFirst}</span>
              <span className="logo-accent">{logoLast}</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="nav" aria-label="Navigation principale">
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

          {/* Hamburger */}
          <button
            className="nav-toggle"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            type="button"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu mobile"
      >
        <button
          className="mobile-menu-close"
          aria-label="Fermer le menu"
          type="button"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        {allLinks.map((link) => (
          <a
            key={`mobile-${link.label}-${link.href}`}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}