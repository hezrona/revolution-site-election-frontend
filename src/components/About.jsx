import { getStrapiMediaUrl } from "../api/strapi";
import representationImg from "../assets/image/representation.png";

export default function About({ content }) {
  const title =
    content?.title || "Tourner la page des conseillers inutiles, dont le seul but est de se faire élire sénateur";
  const buttonLabel = content?.buttonLabel || "Lire la suite";
  const imagePath =
    content?.image?.data?.attributes?.url || content?.image?.url || "";
  const imageAlt =
    content?.image?.data?.attributes?.alternativeText ||
    content?.image?.alt ||
    "Portrait";

  const imageUrl = imagePath ? getStrapiMediaUrl(imagePath) : representationImg;

  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-card">
          <div className="image-frame">
            <img src={imageUrl} alt={imageAlt} loading="lazy" />
          </div>
        </div>
        <div className="about-text">
          <h2>{title}</h2>
          <a href="#about-article" className="btn btn-accent">
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}