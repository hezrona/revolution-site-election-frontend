import { FaArrowDown } from "react-icons/fa";
import { candidate } from "../data/candidate";
import heroVideo from "../assets/video/main_site.mp4";
import { getStrapiMediaUrl } from "../api/strapi";

export default function Hero({ content, loading }) {
  const firstName = content?.firstName || candidate.firstName;
  const lastName = content?.lastName || candidate.lastName;
  const teamLine = content?.teamLine || "et son équipe";
  const subtitle =
    content?.subtitle || "Candidat aux éléctions Consulaires Madagascar 2026";
  const eyebrow = content?.eyebrow || "";
  const buttons =
    content?.buttons && content.buttons.length
      ? content.buttons
      : [
          { label: "Rejoignez les soutiens actifs", variant: "solid" },
          { label: "Proposer une idée", variant: "outline" },
        ];

  const videoPath =
    content?.video?.data?.attributes?.url || content?.video?.url || "";
  const videoSrc = videoPath ? getStrapiMediaUrl(videoPath) : heroVideo;
  const handleScrollDown = () => {
    const heroSection = document.querySelector(".hero");
    const nextSection = heroSection?.nextElementSibling;

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="hero" id="top">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload={loading ? "none" : "auto"}
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="container hero-content">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>
          {firstName} <span>{lastName}</span>
        </h1>
        <div align="center">{teamLine}</div>
        <p className="subtitle">
          <b>{subtitle}</b>
        </p>
        <div className="hero-actions">
          {buttons.map((button) => (
            <button
              key={button.label}
              className={`btn btn-${button.variant || "solid"}`}
              type="button"
            >
              {button.label}
            </button>
          ))}
        </div>
        <div align="center">
          <button
            className="scroll-indicator"
            type="button"
            onClick={handleScrollDown}
            aria-label="Descendre"
          >
            <FaArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
}
