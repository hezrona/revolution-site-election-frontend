import "./programPresentation.css";
import { getStrapiMediaUrl } from "../../api/strapi";

export default function ProgramPresentation({ content }) {
  const title = content?.title || "Santé · Sécurité · Quotidien";
  const eyebrow = content?.eyebrow || "Vous ne serez plus jamais seul";
  const buttonLabel = content?.buttonLabel || "Notre programme";
  const imagePath =
    content?.image?.data?.attributes?.url || content?.image?.url || "";
  const imageAlt = content?.image?.data?.attributes?.alternativeText ||
    content?.image?.alt ||
    "Panneau une ville heureuse";
  const imageUrl = imagePath ? getStrapiMediaUrl(imagePath) : "";

  return (
    <section className="program-presentation">
      <div className="container program-presentation-inner">
        <div className="program-presentation-media">
          {imageUrl ? (
            <img src={imageUrl} alt={imageAlt} loading="lazy" />
          ) : null}
        </div>
        <div className="program-presentation-content">
          <h2>{title}</h2>
          <p className="program-presentation-eyebrow">{eyebrow}</p>
          <button className="btn program-presentation-btn" type="button">
            {buttonLabel}
          </button>
        </div>
      </div>
    </section>
  );
}