import { useEffect, useMemo, useRef, useState } from "react";
import charlottePortrait from "../../assets/image/charlotte_ep1.png";
import "./verticalCarousel.css";

const defaultSlides = [
  {
    id: "ambition",
    panelTitle: "Être un relais institutionnel efficace",
    title: "Une ambition concrète",
    bullets: [
      "Les élus doivent être des facilitateurs. Ils peuvent agir en interface active avec l’Ambassade de France à Madagascar, les services consulaires, ainsi qu’avec des organismes comme Business France ou Bpifrance.",
      `Leur mission :
        - Clarifier les dispositifs d’appui existants.
        - Faire remonter les difficultés concrètes rencontrées sur le terrain.
        - Fluidifier les échanges lorsque des blocages administratifs apparaissent.
      `
    ],
    callout:
      "Un élu utile n’est pas un observateur. Il est un médiateur structurant, capable d’ouvrir des canaux de dialogue lorsque les entrepreneurs en ont besoin.",
    tone: "navy"
  },
  {
    id: "reseau",
    panelTitle: "Structurer un réseau entrepreneurial solide",
    title: "",
    // image: charlottePortrait,
    bullets: [
      "L’isolement est l’un des principaux risques de l’entrepreneuriat à l’étranger. Trop souvent, les expériences restent individuelles alors que les problématiques sont communes.",
      "Les élus peuvent impulser la création d’un réseau actif d’entrepreneurs français à Madagascar : rencontres sectorielles, groupes d’échange, retours d’expérience, mutualisation d’informations fiables sur la réglementation, la logistique ou le recrutement.",
      "Un tel réseau permet de :"
    ],
    chips: [
      "- Partager les bonnes pratiques",
      "- Renforcer la crédibilité collective",
      "- Créer des opportunités de coopération"
    ],
    callout: "Passer d’initiatives isolées à une dynamique collective structurée constitue un levier puissant de développement.",
    tone: "photo"
  },
  {
    id: "responsable",
    panelTitle: "Favoriser l’accès au financement",
    title: "Exemplarité et impact local",
    bullets: [
      "L’accès au crédit demeure un défi majeur, notamment pour les TPE et PME. Les élus peuvent plaider pour une meilleure adaptation des outils français aux réalités locales : garanties plus souples, dispositifs adaptés aux entrepreneurs expatriés, meilleure information sur les mécanismes existants.",
      "Ils peuvent également encourager la mise en relation avec des partenaires privés, investisseurs ou fonds régionaux, afin de diversifier les sources de financement."
    ],
    chips: [
      "Respect des normes sociales",
      "Valorisation des compétences locales",
      "Innovation responsable",
      "Inscription dans la durée"
    ],
    callout:
      "Faciliter l’investissement, c’est favoriser la croissance, l’emploi et la pérennité des entreprises françaises implantées à Madagascar.",
    tone: "navy"
  },
  {
    id: "competences",
    panelTitle: "Accompagner la montée en compétence",
    title: "Adapter normes et pratiques",
    bullets: [
      "Naviguer entre droit local, normes françaises et réalités de terrain.",
      "Organiser des ateliers sur fiscalité, obligations sociales, conformité et opportunités régionales."
    ],
    callout:
      "Renforcer les compétences, c’est renforcer la solidité et l’adaptabilité des entreprises.",
    tone: "navy"
  },
  {
    id: "securite",
    panelTitle: "Défendre la sécurité juridique",
    title: "Stabilité pour investir",
    bullets: [
      "Identifier les difficultés récurrentes et ouvrir le dialogue avec les autorités compétentes.",
      "Clarifier certaines interprétations administratives, signaler les dysfonctionnements et sécuriser l’investissement."
    ],
    callout:
      "La sécurité juridique conditionne l’investissement à long terme. Sans visibilité, pas de développement durable.",
    tone: "navy"
  },
  {
    id: "financement",
    panelTitle: "Favoriser l’accès au financement",
    title: "Adapter les outils aux réalités locales",
    bullets: [
      "Plaider pour des garanties plus souples et des dispositifs adaptés aux entrepreneurs expatriés.",
      "Mettre en relation avec partenaires privés, investisseurs ou fonds régionaux."
    ],
    callout:
      "Faciliter l’investissement, c’est soutenir croissance, emploi et pérennité des entreprises à Madagascar.",
    tone: "navy"
  }
];

export default function VerticalCarousel({ content }) {
  const slides = useMemo(() => {
    if (Array.isArray(content?.slides) && content.slides.length) {
      return content.slides;
    }
    return defaultSlides;
  }, [content]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const viewportRef = useRef(null);
  const [slideHeight, setSlideHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (viewportRef.current) {
        setSlideHeight(viewportRef.current.clientHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    if (!slides.length || paused) return undefined;
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5500);
    return () => clearInterval(intervalId);
  }, [slides.length, paused]);

  const goTo = (nextIndex) => {
    const total = slides.length;
    setActiveIndex(((nextIndex % total) + total) % total);
  };

  return (
    <section
      className="vertical-carousel"
      id="entrepreneur-carousel"
      aria-roledescription="carousel"
      aria-label="Engagements pour les entrepreneurs"
    >
      <div className="container">
        <header className="vc-header">
          <span className="vc-eyebrow">
            {content?.eyebrow ?? "Entrepreneuriat"}
          </span>
          <h2>
            {content?.heading ?? "Soutenir les entrepreneurs français à Madagascar : une ambition concrète"}
          </h2>
          <p>
            {content?.description ?? "Chaque écran reprend la structure fournie : bloc visuel à gauche, texte à droite, message de synthèse en bas. Le défilement est automatique et peut être contrôlé manuellement."}
          </p>
        </header>

        <div
          className="vc-shell"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            className="vc-arrow vc-arrow--prev"
            aria-label="Diapositive précédente"
            onClick={() => goTo(activeIndex - 1)}
          >
            ↑
          </button>
          <div className="vc-viewport" ref={viewportRef}>
            <div
              className="vc-track"
              style={{
                transform: slideHeight
                  ? `translateY(-${activeIndex * slideHeight}px)`
                  : `translateY(-${activeIndex * 100}%)`
              }}
            >
              {slides.map((slide, index) => (
                <article
                  key={slide.id || index}
                  className="vc-slide"
                  aria-hidden={activeIndex !== index}
                >
                  <div
                    className={`vc-panel vc-panel--${slide.tone || "navy"}`}
                  >
                    <div className="vc-panel-backdrop" />
                    {slide.image ? (
                      <img src={slide.image} alt="" className="vc-panel-photo" />
                    ) : null}
                    <h3>{slide.panelTitle}</h3>
                  </div>

                  <div className="vc-content">
                    <div className="vc-content-header">
                      <span className="vc-kicker">Focus</span>
                      <h4>{slide.title}</h4>
                    </div>

                    {Array.isArray(slide.bullets) && slide.bullets.length ? (
                      <ul className="vc-bullets">
                        {slide.bullets.map((item, bulletIndex) => (
                          <li key={`${slide.id || index}-b-${bulletIndex}`}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {Array.isArray(slide.chips) && slide.chips.length ? (
                      <div className="vc-chips">
                        {slide.chips.map((chip) => (
                          <span key={chip} className="vc-chip">
                            {chip}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    {slide.callout ? (
                      <div className="vc-callout">{slide.callout}</div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="vc-arrow vc-arrow--next"
            aria-label="Diapositive suivante"
            onClick={() => goTo(activeIndex + 1)}
          >
            ↓
          </button>

          <div className="vc-dots" role="tablist" aria-label="Pagination">
            {slides.map((_, index) => (
              <button
                key={`vc-dot-${index}`}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                className={`vc-dot ${activeIndex === index ? "is-active" : ""}`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}