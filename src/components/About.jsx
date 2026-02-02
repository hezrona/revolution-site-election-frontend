import { candidate } from "../data/candidate";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-card">
          <div className="image-frame" />
        </div>
        <div className="about-text">
          <p className="quote-mark">" "</p>
          <h2>Prêt à tourner la page des conseillers politisés et inutiles ?</h2>
          <button className="btn btn-accent" type="button">En savoir plus</button>
        </div>
      </div>
    </section>
  );
}


