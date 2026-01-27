import "./donate.css";
import DonateSteps from "./DonateSteps.jsx";

export default function DonatePage() {
  return (
    <main className="donate-page">
      <section className="donate-hero">
        <div className="container donate-hero-inner">
          <h1>Je donne</h1>
          <p>Soutenez financierement la campagne</p>
        </div>
      </section>
      <DonateSteps />
    </main>
  );
}
