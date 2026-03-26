import { Link } from "react-router-dom";

export default function MiliteHero() {
  return (
    <section className="milite-hero">
      <div className="container milite-hero-inner">
        <Link className="milite-back" to="/">← Retour</Link>
        <h1>Je milite</h1>
        <p className="milite-hero-sub">Tractage • Collage • Boîtage • Porte-à-porte</p>
      </div>
    </section>
  );
}