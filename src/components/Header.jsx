export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <span>Christian</span>
          <span className="logo-accent">Tibayrenc</span>
        </div>
        <nav className="nav">
          <a href="#about">L'équipe</a>
          <a href="#program-page">Le Programme</a>
          <a href="#testify">Nos valeurs</a>
          <a className="nav_act" href="#take-action">Je soutiens</a>
          <a className="nav_donate" href="#donate">Le blog</a>
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
