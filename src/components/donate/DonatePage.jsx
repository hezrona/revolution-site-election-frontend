import { useEffect } from "react";
import "./donate.css";
import DonateSteps from "./DonateSteps.jsx";

function DonateHero() {
  return (
    <section className="donate-hero">
      <div className="container donate-hero-inner">
        <a className="donate-back" href="#top">← Retour</a>
        <h1>Je donne</h1>
        <p className="donate-hero-sub">Orange Money • Virement bancaire • Chèque</p>
      </div>
    </section>
  );
}

export default function DonatePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="donate-page">
      <DonateHero />
      <DonateSteps />
    </main>
  );
}