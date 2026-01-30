import { FaArrowDown } from "react-icons/fa";
import { candidate } from "../data/candidate";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-content">
        <p className="eyebrow">Candidate for city hall</p>
        <h1>
          {candidate.firstName} <span>{candidate.lastName}</span><br />
        </h1>
        <div align="center">et son équipe</div>
        <p className="subtitle">
          <b>
            Candidat aux éléctions Consulaires Madagascar 2026
          </b>
        </p>
        <div className="hero-actions">
          <button className="btn btn-solid" type="button">Rejoignez les soutiens actifs</button>
          <button className="btn btn-outline" type="button">Proposer une idée</button>
        </div>
        <div className="scroll-indicator" aria-hidden="true">
          <FaArrowDown />
        </div>
      </div>
    </section>
  );
}

