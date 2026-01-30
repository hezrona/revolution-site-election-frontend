import { FaArrowDown } from "react-icons/fa";
import { candidate } from "../data/candidate";
import heroVideo from "../assets/video/main_site.mp4";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="container hero-content">
        {/* <p className="eyebrow">Candidat aux éléctions Consulaires Madagascar 2026</p> */}
        <h1>
          {candidate.firstName} <span>{candidate.lastName}</span>
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
