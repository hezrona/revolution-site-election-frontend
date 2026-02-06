import { getStrapiMediaUrl } from "../api/strapi";

export default function About({ content }) {
  const title =
    content?.title || "Prêt à tourner la page des conseillers politisés et inutiles ?";
  const buttonLabel = content?.buttonLabel || "En savoir plus";
  const imagePath =
    content?.image?.data?.attributes?.url || content?.image?.url || "";
  const imageAlt = content?.image?.data?.attributes?.alternativeText ||
    content?.image?.alt ||
    "Portrait";
  const imageUrl = imagePath ? getStrapiMediaUrl(imagePath) : "";

  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-card">
          <div className="image-frame">
            {imageUrl ? <img src={imageUrl} alt={imageAlt} loading="lazy" /> : null}
          </div>
        </div>
        <div className="about-text">
          <p className="quote-mark">" "</p>
          <h2>{title}</h2>
          <button className="btn btn-accent" type="button">
            {buttonLabel}
          </button>
        </div>
      </div>
    </section>
  );
}