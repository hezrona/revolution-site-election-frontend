import { Link } from "react-router-dom";

export default function TakeActionHero() {
  return (
    <section className="take-action-hero">
      <div className="container take-action-hero-inner">
        <Link className="take-action-back" to="/">← Retour</Link>
        <div className="take-action-hero-box">
          <h1>Chaque conversation compte !</h1>
          <p>Recommandez-nous un proche, un ami ou un collègue : nous prendrons le relais.</p>
        </div>
        <div className="take-action-card">
          <ul>
            <li><strong>Impact direct</strong> — Une recommandation personnelle a plus de poids qu'un tract anonyme.</li>
            <li><strong>Approche adaptée</strong> — Nous adaptons notre discours aux préoccupations de votre contact.</li>
            <li><strong>Effet multiplicateur</strong> — Un convaincu en convainc d'autres.</li>
            <li><strong>Contact bienveillant</strong> — Notre équipe appelle avec respect et sans insistance.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}