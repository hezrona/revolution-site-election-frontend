import { useEffect, useMemo, useState } from "react";
import christianTibayrenc from "../../assets/image/christian_tibayrenc.png";
import charlotteDeValence from "../../assets/image/charlotte.png";
import nigarBarday from "../../assets/image/barday.png";
import dunogue from "../../assets/image/Dunogue.png";
import "./carousel.css";

const defaultSlides = [
  {
    title: "CHRISTIAN TIBAYRENC",
    image: christianTibayrenc,
    description:
      `C’est avec beaucoup d’humilité, sincérité et détermination que je me présente comme tète de liste de « l’Union des Français de Madagascar ». Depuis 12 ans que je connais Madagascar, j’y ai construit ma vie avec ma famille, mon épouse étant Gasy, et notre fille allant a l’école Française.
Mon parcours vous le connaissez, une carrière dans la finance, des responsabilités importantes comme benevole en France, notamment comme vice-président de Mutuelle, trésorier General de Caisse de retraite des artisans commerçants, juge aux Prudhommes, et au Tribunal de la Sécurité Sociale, ainsi que Président d’un Club de  Rugby Pro.
`,
  },
  {
    title: "Charlotte de VALENCE",
    image: charlotteDeValence,
    description: `Portée par une passion profonde pour l’entrepreneuriat social et l’innovation, je mets à profit 25 ans d’expérience dans le management, la relation client, la conduite du changement et l’amélioration continue pour accompagner des projets à fort impact social. Mon parcours dans des environnements exigeants m’a permis de diriger des équipes multiculturelles vers des objectifs ambitieux, en alignant compétences opérationnelles et priorités stratégiques.`,
  },
  {
    title: "Nigar BARDAY",
    image: nigarBarday,
    description:
      "Après une vingtaine d’années en France consacrées à mes études et à mes premiers pas dans le monde professionnel, notamment dans le secteur des services, l’appel de mon pays natal m’a conduit à revenir là où je pouvais retrouver la valeur des relations, la passion et la conviction.",
  },
  {
    title: "Christian Jean Marcel DUNOGUE",
    image: dunogue,
    description: `Secrétaire général de l'UR CFTC
      Membre du bureau national de la CFTC représentant les DOM TOM
      Vice Président du CESR Reunion (comité économique et social régional)
      Adhérent au RN depuis sa création`,
  }
];

const defaultCv = {
  name: "Christian Tibayrenc",
  title: "Candidat engagé pour l'Union des Français de Madagascar",
  highlights: [
    "15+ ans d'expérience en gestion de projets publics",
    "Spécialiste des partenariats institutionnels",
    "Leadership d'équipes pluridisciplinaires",
    "Bilingue français-anglais, notions de malgache",
  ],
  full:
    "Diplômé en sciences politiques et en management public, Christian Tibayrenc a piloté des programmes de transformation territoriale et de coopération internationale. Il a développé des initiatives d'accompagnement pour les entrepreneurs, coordonné des dispositifs d'inclusion sociale et animé des réseaux d'acteurs locaux. Son parcours met l'accent sur la transparence, la proximité et l'efficacité dans l'action publique. Son ambition est de créer des solutions concrètes pour améliorer le quotidien et renforcer la cohésion des communautés.",
};

export default function CarouselSection({ content }) {
  const slides = useMemo(() => {
    if (content?.slides?.length) {
      return content.slides;
    }
    return defaultSlides;
  }, [content]);

  const cv = content?.cv || defaultCv;
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedSlide, setExpandedSlide] = useState(null);
  const [showFullCv, setShowFullCv] = useState(false);

  useEffect(() => {
    if (!slides.length) {
      return undefined;
    }

    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const goTo = (index) => {
    const total = slides.length;
    const nextIndex = (index + total) % total;
    setActiveIndex(nextIndex);
  };

  const toggleSlide = (index) => {
    setExpandedSlide((current) => (current === index ? null : index));
  };

  return (
    <section className="carousel-section" id="engagements">
      <div className="container carousel-inner">
        <div className="carousel-header">
          <span className="carousel-eyebrow">Priorités</span>
          <h2>Un engagement clair et structurant</h2>
          <p>
            Découvrez les priorités de terrain et l'approche stratégique qui
            guidera chaque action pour la communauté.
          </p>
        </div>

        <div className="carousel-shell" role="region" aria-roledescription="carousel">
          <button
            className="carousel-nav"
            type="button"
            aria-label="Voir l'élément précédent"
            onClick={() => goTo(activeIndex - 1)}
          >
            ‹
          </button>

          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {slides.map((slide, index) => {
                const isExpanded = expandedSlide === index;
                return (
                  <article
                    className="carousel-slide"
                    key={`${slide.title}-${index}`}
                    aria-hidden={activeIndex !== index}
                  >
                    <div className="carousel-slide-inner">
                      <div className="carousel-media">
                        <img src={slide.image} alt={slide.title} />
                      </div>
                      <div className="carousel-card">
                        <h3>{slide.title}</h3>
                        <p
                          id={`carousel-text-${index}`}
                          className={`carousel-text ${
                            isExpanded ? "is-expanded" : ""
                          }`}
                        >
                          {slide.description}
                        </p>
                        <button
                          className="btn btn-outline carousel-toggle"
                          type="button"
                          aria-expanded={isExpanded}
                          aria-controls={`carousel-text-${index}`}
                          onClick={() => toggleSlide(index)}
                        >
                          {isExpanded ? "Réduire" : "Lire la suite"}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <button
            className="carousel-nav"
            type="button"
            aria-label="Voir l'élément suivant"
            onClick={() => goTo(activeIndex + 1)}
          >
            ›
          </button>
        </div>

        <div className="carousel-dots" role="tablist" aria-label="Navigation">
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`Aller à l'élément ${index + 1}`}
              className={`carousel-dot ${
                activeIndex === index ? "is-active" : ""
              }`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>

        {/* <div className="cv-preview">
          <div className="cv-card">
            <div className="cv-grid">
              <div className="cv-identity">
                <span className="carousel-eyebrow">Aperçu CV</span>
                <h3>{cv.name}</h3>
                <p className="cv-title">{cv.title}</p>
              </div>
              <ul className="cv-highlights">
                {cv.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {showFullCv ? <p className="cv-full">{cv.full}</p> : null}
            <button
              className="btn btn-solid cv-toggle"
              type="button"
              aria-expanded={showFullCv}
              onClick={() => setShowFullCv((current) => !current)}
            >
              {showFullCv ? "Masquer le CV" : "Voir le CV complet"}
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}