import { candidate } from "../data/candidate";
import heroVideo from "../assets/video/main_site.mp4";
import { getStrapiMediaUrl } from "../api/strapi";

export default function Hero({ content, loading }) {
  const firstName = content?.firstName || candidate.firstName;
  const lastName  = content?.lastName  || candidate.lastName;
  const teamLine  = content?.teamLine  || "et son équipe";
  const subtitle  =
    content?.subtitle || "Candidats aux élections Consulaires Madagascar 2026";
  const eyebrow   = content?.eyebrow   || "";
  const sloganLine1 = content?.sloganLine1 || "PLUUS JAMAIS";
  const sloganLine2 = content?.sloganLine2 || "SEUL";
  const sloganSub   = content?.sloganSub   || "AVEC L'UFM";

  const videoPath =
    content?.video?.data?.attributes?.url || content?.video?.url || "";
  const videoSrc = videoPath ? getStrapiMediaUrl(videoPath) : heroVideo;

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

      <div className="hero-split">
        {/* Colonne gauche — nom du candidat */}
        <div className="container hero-content">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>
            {firstName} <span>{lastName}</span>
          </h1>
          <p className="hero-team">{teamLine}</p>
          <p className="subtitle">
            <b>{subtitle}</b>
          </p>
        </div>

        {/* Colonne droite — slogan oblique */}
        <div className="hero-slogan" aria-hidden="false">
          <span className="hero-slogan-main">{sloganLine1}</span>
          <span className="hero-slogan-main">{sloganLine2}</span>
          <span className="hero-slogan-sub">{sloganSub}</span>
        </div>
      </div>
    </section>
  );
}