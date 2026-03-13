import CarouselSection from "../carousel/CarouselSection.jsx";
import "./team.css";

import christianTibayrencImage from "../../assets/image/christian_tibayrenc.png";
import charlotteImage from "../../assets/image/charlotte.png";
import charlotteEntrprise1 from "../../assets/image/charlotte_ep1.png";
import charlotteEntrprise2 from "../../assets/image/charlotte_ep2.png";
import bardayImage from "../../assets/image/barday.png";
import dunogueImage from "../../assets/image/Dunogue.png";
import dominiqueImage from "../../assets/image/Dominique.png";
import michelLouvetImage from "../../assets/image/Michel_LOUVET_viollet.png";
import lancioCassimImage from "../../assets/image/Lancia_CASSIM.png";

const teamMembers = [
  {
    name: "CHRISTIAN TIBAYRENC",
    role: "",
    tag: "",
    image: christianTibayrencImage,
    description: `<section>
  <p>
    C’est avec beaucoup d’humilité, sincérité et détermination que je me présente comme tète de liste de 
    <strong>« l’Union des Français de Madagascar »</strong>.
  </p>

  <p>
    Depuis 12 ans que je connais Madagascar, j’y ai construit ma vie avec ma famille, 
    mon épouse étant Gasy, et notre fille allant a l’école Française.
  </p>
</section>

<section>
  <p>
    Mon parcours vous le connaissez, une carrière dans la finance, des responsabilités importantes comme benevole en France, 
    notamment comme vice-président de Mutuelle, trésorier General de Caisse de retraite des artisans commerçants, 
    juge aux Prudhommes, et au Tribunal de la Sécurité Sociale, ainsi que Président d’un Club de Rugby Pro.
  </p>
</section>

<section>
  <h2>Ce parcours, ce n’est pas un titre : c’est une méthode</h2>

  <p>Une méthode de rigueur, d’écoute, de décision.</p>

  <p>
    Aujourd’hui, je veux mettre cette expérience au service des Français de Madagascar.
  </p>
</section>

<section>
  <p>
    A titre personne je crois à une droite rassemblée, responsable, pragmatique.
  </p>
</section>

<section>
  <p>
    Autour de moi j’ai rassemblé des amis (ies) pour leurs compétences, leurs idées sociales et désintéressés.
  </p>
</section>

<section>
  <p>
    Je ne promets pas l’impossible, je promets d’être là, d’agir, d’obtenir des résultats.
  </p>
</section>

<section>
  <ul>
    <li>Je serais un conseiller présent pas un conseiller de passage</li>
    <li>Un conseiller utile, pas un conseiller silencieux</li>
    <li>Un conseiller engagé, pas un conseiller décoratif</li>
  </ul>
</section>

<section>
  <p>
    Depuis mon arrivée je suis présent au bureau de 
    <strong>« Ovalie Mora Mora »</strong> association qui vient en aide aux jeunes enfants de Madagascar, 
    dans la réinsertion a travers les valeurs du Rugby
  </p>
</section>`,
  },
  {
    name: "Charlotte de VALENCE",
    role: "",
    tag: "",
    image: charlotteImage,
    description: `<main class="charlotte-wrap">
  <section class="charlotte-intro">
    <p>
      Portée par une passion profonde pour l’entrepreneuriat social et l’innovation, je mets à profit 25 ans d’expérience dans le management, la relation client, la conduite du changement et l’amélioration continue pour accompagner des projets à fort impact social. Mon parcours dans des environnements exigeants m’a permis de diriger des équipes multiculturelles vers des objectifs ambitieux, en alignant compétences opérationnelles et priorités stratégiques.
    </p>

    <p class="charlotte-tagline">
      Deux vocations, une même vision : à la croisée de l’humain et de l’innovation sociale
    </p>
  </section>

  <section class="charlotte-block">
    <div class="charlotte-logo">
      <img src="${charlotteEntrprise1}" alt="CCsolution" />
    </div>

    <div class="charlotte-content">
      <p>
        <span class="charlotte-title">Consultante senior et développeuse de talents,</span> j’accompagne entreprises et particuliers dans le renforcement de leurs compétences. Mon approche, axée sur les résultats et la qualité, repose sur une solide expérience du management, notamment 18 ans passés à piloter des équipes en centres d’appels. J’interviens dans le développement des équipes, la gestion de projets et l’optimisation des organisations.
      </p>
    </div>
  </section>

  <section class="charlotte-block">
    <div class="charlotte-logo">
      <img src="${charlotteEntrprise2}" alt="HAPI Be" />
    </div>

    <div class="charlotte-content">
      <p>
        <span class="charlotte-title">Présidente de l’association Hapi Be Madagascar,</span> je mets en œuvre ces mêmes méthodes structurées pour faire émerger des initiatives sociales durables. Nous expérimentons des solutions concrètes à petite échelle pour identifier les modèles les plus efficaces, avec l’ambition de les déployer à plus large échelle. Grâce à l’engagement de nos donateurs, au soutien local et à une gestion rigoureuse, nous construisons une association innovante, agile et pérenne, capable d’apporter des réponses concrètes aux défis sociaux actuels.
      </p>
    </div>
  </section>
</main>`,
  },
  {
    name: "Nigar BARDAY",
    role: "",
    tag: "",
    image: bardayImage,
    description: `<main class="nigar-wrap">
  <section class="nigar-intro">
    <p>
      Après une vingtaine d’années en France consacrées à mes études et à mes premiers pas dans le monde professionnel, notamment dans le secteur des services, l’appel de mon pays natal m’a conduit à revenir là où je pouvais retrouver la valeur des relations, la passion et la conviction.
    </p>
  </section>

  <section class="nigar-section">
    <h3>Activités professionnelles :</h3>

    <div class="nigar-block">
      <div class="nigar-logo">
        <img src="sib.png" alt="SIB" />
      </div>
      <div class="nigar-content">
        <p><span class="nigar-title">SIB :</span> Société Industrielle BARDAY depuis 1947</p>
      </div>
    </div>

    <div class="nigar-block">
      <div class="nigar-logo">
        <img src="adnb.png" alt="ADNB" />
      </div>
      <div class="nigar-content">
        <p><span class="nigar-title">ADNB :</span> Activités sur le terrain avec la SIB dédiée à la préservation de l’environnement</p>
      </div>
    </div>

    <div class="nigar-block">
      <div class="nigar-logo">
        <img src="clair-de-lune.png" alt="Clair de Lune" />
      </div>
      <div class="nigar-content">
        <p><span class="nigar-title">Clair de Lune :</span> Artisanat au sein de l’atelier de céramique à Antananarivo</p>
      </div>
    </div>

    <div class="nigar-block">
      <div class="nigar-logo">
        <img src="pawane.png" alt="Pawane" />
      </div>
      <div class="nigar-content">
        <p><span class="nigar-title">Pawane :</span> Tourisme avec location de bungalow pieds dans l’eau</p>
      </div>
    </div>
  </section>

  <section class="nigar-section">
    <h3>Engagement personnel :</h3>
    <ul class="nigar-list">
      <li>Sensibilisation et préservation de l’environnement</li>
      <li>Représentante à Majunga du CNAM Madagascar</li>
      <li>Membre du Lions Club de Majunga</li>
    </ul>
  </section>

  <section class="nigar-quote">
    <p>
      " Native de Majunga, je crois en la force des initiatives locales pour construire ensemble un avenir durable et harmonieux. Mon engagement s’appuie sur des valeurs de solidarité, de responsabilité et de respect des différences. "
    </p>
  </section>
</main>`,
  },
  {
    name: "Christian Jean Marcel DUNOGUE",
    role: "",
    tag: "",
    image:
      dunogueImage,
    description:
      `<p>Né le 18 avril 1953 à Marseille<br>
      retraité<br>
      Resident à Majunga<br>  
      Tel 0323899394 Idem WhatsApp<br>
      Mail christianjeanmarceldunogue@gmail.com</p>

      <h2>Formation</h2>

      <p>Bac A1 en 1971<br>
      Capceg puis Capes et Agrégation<br>
      Diplome universitaire de gestion du commerce international<br>
      Professeur d'histoire et de géographie<br>
      professeur d'université en géopolitique<br>
      A Madagascar depuis 12 ans marié à une malgache<br>
      1 enfant</p>

      <h2>Engagement</h2>

      <p>Secrétaire général de l'UR CFTC<br>
      Membre du bureau national de la CFTC représentant les DOM TOM<br>
      Vice Président du CESR Reunion (comité économique et social régional)<br>
      Adhérent au RN depuis sa création<br>
      Résidant à Majunga</p>`,
  },
  {
    name: "Dominique LOUVET",
    role: "",
    tag: "",
    image:
      dominiqueImage,
    description:
      `
      <p><strong>Française installée à Madagascar depuis 30 ans</strong>, je suis orthoptiste diplômée de la faculté de médecine de Paris. J’ai exercé à l’<strong>Assistance Publique – Hôpitaux de Paris (AP-HP)</strong> et en cabinet libéral avant de rejoindre Tananarive.</p>

      <p>Au fil des décennies, j’ai été très impliquée dans le système de santé local : <strong>création du service d’orthoptie au Centre Hospitalier de Soavinandrina (ex-HOMI)</strong>, activité libérale maintenue, et contacts réguliers avec de nombreux professionnels de santé malgaches et français. Cette immersion m’a permis de connaître de près les réalités quotidiennes des Français de Madagascar en matière de santé : difficultés d’accès aux soins spécialisés, prise en charge des enfants (troubles visuels, handicaps), suivi des personnes âgées, urgences médicales, remboursements de la CFE, coordination avec les hôpitaux français en cas d’évacuation, ou encore accompagnement psychologique et rééducation. En tant que soignante « de terrain », j’ai accompagné, écouté et orienté de très nombreux compatriotes confrontés à ces défis.</p>

      <p><strong>C’est précisément ce vécu qui nourrit ma volonté de m’engager aujourd’hui pour les élections consulaires de 2026.</strong> Je souhaite mettre cette expertise au service de la communauté française, en étant une élue de proximité, pragmatique et à l’écoute.</p>

      <p><strong>Mon parcours paramédical s’est doublé d’un fort engagement bénévole et associatif :</strong></p>

      <ul>
          <li><strong>Cofondatrice il y a 20 ans de l’association FANARENANA</strong>, qui a créé un plateau technique pluridisciplinaire (orthoptie, kinésithérapie, ergothérapie, psychomotricité…) pour enfants malgaches défavorisés en situation de handicap moteur et/ou mental. Nous valorisons les potentiels de chaque enfant et maximisons leur autonomie.</li>
          <li><strong>Participation active à l’association EFM (Enfants Français de Madagascar)</strong> soutenir la réussite scolaire des enfants français boursiers ou dont les familles sont démunies.</li>
          <li><strong>Autres engagements :</strong> scoutisme, comité de lecture, formation de bibliothécaire, et création d’un circuit de lecteurs « Bibliothèque pour tous » à Tananarive.</li>
      </ul>

      <p>Ces expériences m’ont appris l’importance de l’entraide, de la pluridisciplinarité et de l’adaptation aux réalités locales – des valeurs que je veux porter au sein du conseil consulaire.</p>

      <p><strong>C’est pourquoi je rejoins avec enthousiasme l’équipe menée par Christian Tibayrenc, tête de liste pour ces élections.</strong> 
      Si notre liste est élue, je mettrai toute mon énergie et mes compétences dans le domaine de la santé pour défendre et améliorer concrètement la situation des Français de Madagascar : meilleure information sur les droits et dispositifs (CFE, protection sociale, évacuations sanitaires), plaidoyer pour des partenariats renforcés avec les structures de soins locales, accompagnement personnalisé des familles (enfants à besoins spécifiques, seniors, situations de handicap), et renforcement de l’entraide communautaire en cas de crise médicale.</p>

      <p><strong>Je suis convaincue que, ensemble, nous pouvons faire avancer ces dossiers essentiels pour notre quotidien.</strong></p>
        `,
    },

    {
    name: "Lancio CASSIM",
    role: "",
    tag: "",
    image: lancioCassimImage,
    description: `
  <h3>L'engagement de terrain et la force de l'expérience</h3>

  <p>Né à Madagascar en 1987, Lancio Cassim porte en lui la double culture qui fait la richesse de notre expatriation. Après un parcours académique à La Réunion (Baccalauréat ES et études supérieures en Management Économique et Social ainsi qu'en Langues), il a choisi de revenir s'établir sur sa terre natale — un choix d'engagement autant que de vie.</p>

  <p>Établi à Antalaha, dans la région de la SAVA, il vit au quotidien les défis que rencontrent les Français de province : l'éloignement des services administratifs, les enjeux de sécurité et la nécessité de maintenir un lien fort avec la France malgré la distance géographique.</p>

  <h3>Une expertise économique reconnue</h3>

  <p>Gérant de la société <strong>Excelia Madagascar</strong> depuis 2013, il a su naviguer dans les complexités du marché malgache pour bâtir une entreprise solide. De 2020 à 2024, il a présidé le <strong>SEVAM (Syndicat des Exportateurs de Vanille de Madagascar)</strong>, défendant les intérêts des exportateurs face aux régulations mouvantes et aux crises de la filière. Cette expérience lui a conféré une maîtrise rare des relations institutionnelles et une capacité à porter une voix forte auprès des autorités malgaches et françaises.</p>

  <h3>Ses priorités pour la communauté française</h3>
  <ul>
    <li><strong>L'accès aux services publics</strong> — Réduire la fracture entre Tananarive et les provinces pour que les démarches consulaires ne soient plus un fardeau logistique.</li>
    <li><strong>La sécurité et le patrimoine</strong> — Protéger nos biens et nos personnes dans un environnement parfois instable.</li>
    <li><strong>L'éducation</strong> — Soutenir l'accès à un enseignement français de qualité, pilier de l'avenir de nos enfants.</li>
    <li><strong>Le soutien à l'entrepreneuriat</strong> — Accompagner les porteurs de projets et les chefs d'entreprise français dans leurs démarches.</li>
  </ul>

  <blockquote>« J'ai pu mesurer, par mon parcours et mes échanges constants, les attentes et les difficultés de nos compatriotes. Notre représentation mérite une voix capable de défendre leurs intérêts avec constance. »</blockquote>

  <p><strong>Le 17 mai 2026, avec Lancio Cassim et l'équipe de Christian Tibayrenc, choisissez une représentation qui connaît votre terrain et défend votre avenir.</strong></p>
`,
  },

  {
    name: "Michel LOUVET",
    role: "",
    tag: "",
    image: michelLouvetImage,
    description: `
  <h3>L'engagement d'un homme de conviction, entre racines françaises et passion malgache.</h3>

  <h3>Un parcours d'excellence et de résilience</h3>
  <p>Né en France en 1948, Michel Louvet incarne cette génération de bâtisseurs qui ont su concilier une carrière de haut niveau dans l'Hexagone avec une aventure entrepreneuriale audacieuse sur la Grande Île. Ancien dirigeant de banque, il a piloté des structures complexes, acquérant une maîtrise rigoureuse des rouages financiers et administratifs — une expertise précieuse pour comprendre et défendre les dossiers économiques et sociaux de nos compatriotes.</p>

  <p>En 1998, Michel fait le choix de Madagascar. Accompagné de son épouse, père de cinq enfants répartis entre l'Europe et l'Afrique, il connaît intimement les défis de l'expatriation, la distance familiale et les questions liées à la mobilité internationale.</p>

  <h3>Un acteur économique ancré dans le territoire</h3>
  <p>À Manakara, il a développé une exploitation agricole exemplaire spécialisée dans la <strong>production d'épices et d'huiles essentielles</strong> destinées à l'exportation. Cette double culture bancaire et agricole lui confère une lecture unique des besoins de notre communauté : logistique, administration, sécurité et enjeux climatiques.</p>

  <h3>Une fidélité aux valeurs de la France</h3>
  <p>Fidèle depuis 1976 à une vision gaullienne de la France — souveraineté, responsabilité et service — Michel croit en une droite de conviction, capable de proposer des solutions pragmatiques tout en restant fière de son identité.</p>

  <h3>Ses priorités pour vous</h3>
  <ul>
    <li><strong>Une voix forte auprès du Consulat</strong> — Porter vos attentes avec autorité et pragmatisme auprès de l'administration.</li>
    <li><strong>Soutien au tissu associatif</strong> — Appuyer les initiatives qui créent du lien et de la solidarité, particulièrement pour les Français isolés en province.</li>
    <li><strong>Expertise et proximité</strong> — Conseiller et accompagner les résidents face aux complexités administratives et financières de la vie à Madagascar.</li>
  </ul>

  <blockquote>« Je souhaite mettre ma connaissance intime de ce pays et la rigueur de mon parcours de dirigeant au service de chacun d'entre vous. Nous avons besoin d'élus d'expérience qui agissent comme de véritables relais entre vos réalités de terrain et les instances nationales. »</blockquote>

  <p><strong>En 2026, faites le choix de l'expérience, de la fidélité et de la proximité.</strong></p>
`,
  },
];

const teamHero = {
  title: "Notre équipe",
  subtitle: "Une équipe engagée, proche du terrain et structurée par pôles.",
  image:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  badges: [],
};

const colorBands = [
  "team-band-cream",
  "team-band-pink",
  "team-band-cream",
  "team-band-navy",
  "team-band-gold",
];

const toAnchorId = (value) =>
  `team-${String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")}`;

export default function TeamPage() {
  const createMarkup = (description) => ({
    __html: typeof description === "string" ? description : "",
  });

  return (
    <main className="team-page">
      <section className="team-hero">
        <div className="team-hero-media">
          <img src={teamHero.image} alt="Équipe en réunion" />
        </div>
        <div className="container team-hero-content">
          <span className="team-eyebrow">Équipe</span>
          <h1>{teamHero.title}</h1>
          <p>{teamHero.subtitle}</p>
          <div className="team-badges">
            {teamHero.badges.map((badge) => (
              <span key={badge} className="team-badge">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CarouselSection content={{}} />

      <section className="team-list">
        {teamMembers.map((member, index) => (
          <article
            key={`${member.name}-${member.role}`}
            id={toAnchorId(member.name)}
            className={`team-row ${colorBands[index % colorBands.length]} ${
              index % 2 === 1 ? "team-row-reverse" : ""
            }`}
          >
            <div className="container team-row-inner">
              <div className="team-card">
                <span className="team-tag">{member.tag}</span>
                <h2>{member.name}</h2>
                <h3>{member.role}</h3>
                <div
                  className="team-description"
                  dangerouslySetInnerHTML={createMarkup(member.description)}
                />
              </div>
              <div className="team-photo">
                <img src={member.image} alt={member.name} />
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}