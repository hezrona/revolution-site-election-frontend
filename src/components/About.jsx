import { Link } from "react-router-dom";
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
    "Christian Tibayrenc – candidat aux élections consulaires Madagascar 2026, tête de liste Union des Français de Madagascar (UFM)";

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
          <Link to="/about-article" className="btn btn-accent">
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}