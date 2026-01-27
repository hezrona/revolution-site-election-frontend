export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <span>John</span>
          <span className="logo-accent">Doe</span>
        </div>
        <nav className="nav">
          <a href="#about">Who am I?</a>
          <a href="#program-page">Program</a>
          <a href="#testify">Testify</a>
          <a className="nav_act" href="#take-action">I act</a>
          <a className="nav_donate" href="#donate">Donate</a>
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
