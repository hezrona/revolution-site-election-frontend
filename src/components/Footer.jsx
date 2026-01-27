export default function Footer() {
  return (
    <footer className="site-footer" id="shop">
      <section className="footer-engage">
        <div className="container footer-engage-inner">
          <div className="footer-engage-header">
            <h2>Je veux faire plus</h2>
            <p>5 facons de s'engager pour changer Paris</p>
          </div>
          <div className="footer-engage-grid">
            <div className="engage-card">
              <div className="engage-icon engage-icon-yellow">€</div>
              <h3>Je donne</h3>
              <p>Soutenez financierement la campagne pour un Paris heureux</p>
              <button className="btn btn-accent" type="button">
                En savoir plus →
              </button>
            </div>
            <div className="engage-card">
              <div className="engage-icon engage-icon-pink">✊</div>
              <h3>Je milite</h3>
              <p>Rejoignez nos equipes sur le terrain pour faire campagne</p>
              <button className="btn btn-solid" type="button">
                En savoir plus →
              </button>
            </div>
            <div className="engage-card">
              <div className="engage-icon engage-icon-pink">◎</div>
              <h3>Je convaincs</h3>
              <p>Recommandez un proche parisien, notre equipe suit</p>
              <button className="btn btn-solid" type="button">
                En savoir plus →
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="container footer-inner">
        <div>
          <h3>John Doe</h3>
          <p>Building a city that listens and acts.</p>
        </div>
        <div className="footer-links">
          <a href="#about">Who am I?</a>
          <a href="#program">Program</a>
          <a href="#cities">Open city</a>
          <a href="#shop">Shop</a>
        </div>
        <div className="footer-actions">
          <button className="btn btn-outline" type="button">Volunteer</button>
          <button className="btn btn-solid" type="button">Donate</button>
        </div>
      </div>
      <div className="footer-bottom">
        {/**<span>Paid for by citizens for change.</span>}**/}
        <span>Copyright 2026</span>
      </div>
    </footer>
  );
}
