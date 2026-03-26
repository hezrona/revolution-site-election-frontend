import { Link } from "react-router-dom";
import "./donate.css";
import DonateSteps from "./DonateSteps.jsx";

function DonateHero() {
  return (
    <section className="donate-hero">
      <div className="container donate-hero-inner">
        <Link className="donate-back" to="/">← Retour</Link>
        <h1>Je donne</h1>
        <p className="donate-hero-sub">Mvola • Virement bancaire • Chèque</p>
      </div>
    </section>
  );
}

export default function DonatePage() {
  return (
    <main className="donate-page">
      <DonateHero />
      <DonateSteps />
    </main>
  );
}