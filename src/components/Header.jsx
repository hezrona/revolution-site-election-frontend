import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ content }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const logoFirst = content?.logo?.firstName || "Union des Français";
  const logoLast = content?.logo?.lastName || "de Madagascar";
  const links =
    content?.links && content.links.length
      ? content.links
      : [
          { label: "Programme", href: "/program" },
          { label: "Valeurs", href: "/our-value" },
          { label: "Administration", href: "/administration" },
          { label: "Partenaires", href: "/partner-article" },
          { label: "Forum", href: "/forum" },
        ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const allLinks = [{ label: "Équipe", href: "/team" }, ...links];

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="logo" aria-label="Retour à l'accueil">
            <div className="logo-text">
              <span>{logoFirst}</span>
              <span className="logo-accent">{logoLast}</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="nav" aria-label="Navigation principale">
            <Link to="/team" className="nav-alt-pink">
              Équipe
            </Link>
            {links.map((link, index) => (
              <Link
                key={`${link.label}-${link.href}`}
                to={link.href}
                className={index % 2 === 0 ? "nav-alt-yellow" : "nav-alt-pink"}
              >
                {link.label}
              </Link>
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
          <Link
            key={`mobile-${link.label}-${link.href}`}
            to={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}