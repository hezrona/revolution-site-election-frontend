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
        <p className="eyebrow">Candidate for city hall</p>
        <h1>
          {candidate.firstName} <span>{candidate.lastName}</span>
        </h1>
        <p className="subtitle">
          European deputy, former magistrate, now on a mission to rebuild the
          city with courage and care.
        </p>
        <div className="hero-actions">
          <button className="btn btn-solid" type="button">Join the movement</button>
          <button className="btn btn-outline" type="button">Read the vision</button>
        </div>
        <div className="scroll-indicator" aria-hidden="true">
          <FaArrowDown />
        </div>
      </div>
    </section>
  );
}
