import { useEffect, useMemo, useState } from "react";
import christianTibayrenc from "../../assets/image/christian_tibayrenc.png";
import charlotteDeValence from "../../assets/image/charlotte.png";
import nigarBarday from "../../assets/image/barday.png";
import dunogue from "../../assets/image/Dunogue.png";
import dominiqueImage from "../../assets/image/Dominique.png";
import michelLouvet from "../../assets/image/Michel_LOUVET_viollet.png";
import lancioCassim from "../../assets/image/Lancia_CASSIM.png";
import "./carousel.css";

const defaultSlides = [
  {
    title: "Christian TIBAYRENC",
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
    description: `
      Christian Jean Marcel DUNOGUE </br>
      Né le 18 avril 1953 à Marseille </br>
      retraité </br>
      Resident à Majunga</br>
      Tel 0323899394 Idem WhatsApp </br>
      Mail  christianjeanmarceldunogue@gmail.com </br>

      Formation</br>
      Bac A1 en 1971</br>
      Capceg  puis  Capes et Agrégation </br>
      Diplome universitaire de gestion du commerce international </br>

      Professeur d'histoire et de géographie </br>
      professeur d'université en géopolitique </br>

      A Madagascar depuis 12 ans marié à une malgache </br>
      1 enfant </br>

      Engagement</br>
      Secrétaire général de l'UR CFTC</br>
      Membre du bureau national de la CFTC représentant les DOM TOM</br>
      Vice Président du CESR Reunion (comité économique et social régional)</br>
      Adhérent au RN depuis sa création </br>

      Résidant à Majunga
    `,
  },
  {
    title: "Dominique LOUVET",
    image: dominiqueImage,
    description:
      "Française installée à Madagascar depuis 30 ans, je suis orthoptiste diplômée de la faculté de médecine de Paris. J’ai exercé à l’Assistance Publique – Hôpitaux de Paris (AP-HP) et en cabinet libéral avant de rejoindre Tananarive.",
  },
  {
    title: "Lancio CASSIM",
    image: lancioCassim,
    description: `Né à Madagascar en 1987, Lancio Cassim porte en lui la double culture qui fait la richesse de notre expatriation. Après un parcours académique à La Réunion, il a choisi de revenir s'établir sur sa terre natale — un choix d'engagement autant que de vie.

Établi à Antalaha, dans la région de la SAVA, il vit au quotidien les défis des Français de province : l'éloignement des services administratifs, les enjeux de sécurité et la nécessité de maintenir un lien fort avec la France malgré la distance.

Gérant de la société Excelia Madagascar depuis 2013, il a présidé le SEVAM (Syndicat des Exportateurs de Vanille de Madagascar) de 2020 à 2024, défendant les intérêts des exportateurs face aux régulations mouvantes et aux crises de la filière. Ses priorités : améliorer l'accès aux services consulaires en province, soutenir l'entrepreneuriat français, protéger les biens et les personnes, et garantir un enseignement français de qualité pour nos enfants.`,
  },
  {
  title: "Michel LOUVET",
  image: michelLouvet,
  description: `Né en France en 1948, ancien dirigeant de banque, Michel Louvet allie maîtrise des rouages financiers et aventure entrepreneuriale à Madagascar depuis 1998. Père de cinq enfants, il connaît intimement les défis de l'expatriation et de la mobilité internationale.

  Installé à Manakara, il dirige une exploitation agricole spécialisée dans la production d'épices et d'huiles essentielles destinées à l'exportation. Cette double culture bancaire et agricole lui confère une lecture unique des besoins de notre communauté.

  Fidèle depuis 1976 à une vision gaullienne de la France, il rejoint la liste UFM avec des priorités claires : porter vos attentes auprès du Consulat, soutenir le tissu associatif, et accompagner les résidents face aux complexités administratives et financières de la vie à Madagascar.`,
  },
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

const toAnchorId = (value) =>
  `team-${String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")}`;

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
    }, 25000);

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

  const handleReadMore = (event, title, index) => {
    event.preventDefault();
    toggleSlide(index);

    if (window.location.hash !== "#team") {
      window.location.hash = "#team";
    }

    const targetId = toAnchorId(title);
    requestAnimationFrame(() => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  const renderDescription = (description) => {
    if (typeof description !== "string") {
      return description;
    }

    if (description.includes("<")) {
      return <span dangerouslySetInnerHTML={{ __html: description }} />;
    }

    return description;
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
                          {renderDescription(slide.description)}
                        </p>
                        <a
                          className="btn btn-outline carousel-toggle"
                          href="#team"
                          aria-expanded={isExpanded}
                          aria-controls={`carousel-text-${index}`}
                          onClick={(event) =>
                            handleReadMore(event, slide.title, index)
                          }
                        >
                          {isExpanded ? "Réduire" : "Lire la suite"}
                        </a>
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