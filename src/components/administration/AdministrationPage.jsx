import { useMemo, useState } from "react";
import "./administrationPage.css";

const sections = [
  {
    id: "register",
    num: "Fiche 1",
    tabLabel: "1. Inscription registre",
    title: "Inscription au registre des Français établis hors de France",
    cards: [
      {
        icon: "📋",
        tag: "Registre consulaire",
        title: "Pourquoi s'inscrire au registre consulaire ?",
        excerpt:
          "L'inscription au registre consulaire est recommandée à tous les Français résidant à Madagascar de façon habituelle. Elle vous permet d'accéder aux services consulaires, de recevoir les alertes en cas de crise, d'être pris en charge en urgence et de participer aux élections depuis l'étranger. L'inscription est gratuite et valable jusqu'à l'âge de 18 ans pour les mineurs. Elle doit être renouvelée tous les 5 ans…",
        link: "LIEN_DRIVE_FICHE_1A",
      },
      {
        icon: "📝",
        tag: "Registre consulaire",
        title: "Comment s'inscrire ? – Pièces à fournir",
        excerpt:
          "La demande d'inscription s'effectue en ligne via le portail « Mon Consulat » ou directement au Consulat de France à Antananarivo. Les pièces requises sont : une pièce d'identité française en cours de validité, un justificatif de domicile à Madagascar (facture, bail, attestation d'hébergement), ainsi qu'un formulaire de demande dûment rempli. Pour les enfants mineurs, le livret de famille est nécessaire…",
        link: "LIEN_DRIVE_FICHE_1B",
      },
      {
        icon: "🔄",
        tag: "Registre consulaire",
        title: "Renouvellement et mise à jour de l'inscription",
        excerpt:
          "Votre inscription consulaire doit être mise à jour à chaque changement de situation : déménagement, changement de situation familiale (mariage, naissance, divorce), ou changement de nationalité. Le renouvellement automatique est possible via l'espace personnel en ligne. En cas d'absence prolongée de Madagascar, il est conseillé de signaler votre retour en France pour éviter la radiation automatique du registre…",
        link: "LIEN_DRIVE_FICHE_1C",
      },
    ],
  },
  {
    id: "pratique",
    num: "Fiche 2",
    tabLabel: "2. Infos pratiques",
    title: "Informations pratiques",
    cards: [
      {
        icon: "🏢",
        tag: "Infos pratiques",
        title: "Coordonnées et horaires du Consulat de France",
        excerpt:
          "Le Consulat général de France à Antananarivo est ouvert du lundi au vendredi, de 8h30 à 12h30. La prise de rendez-vous est obligatoire pour la plupart des démarches. Les demandes urgentes (perte de documents, hospitalisation, décès) sont traitées en dehors des plages horaires habituelles. L'adresse est : 3 rue Jean Jaurès, Ambohidahy, Antananarivo 101…",
        link: "LIEN_DRIVE_FICHE_2A",
      },
      {
        icon: "💶",
        tag: "Infos pratiques",
        title: "Tarifs consulaires et modes de paiement",
        excerpt:
          "Les droits de chancellerie sont fixés par arrêté ministériel et actualisés chaque année. Ils sont payables en ariary malgache ou en euros selon les cas. Les tarifs incluent les passeports, les cartes nationales d'identité (CNI), les actes d'état civil, les légalisations et les visas. Le règlement s'effectue en espèces, par virement bancaire ou par carte bancaire selon les guichets disponibles…",
        link: "LIEN_DRIVE_FICHE_2B",
      },
      {
        icon: "🌐",
        tag: "Infos pratiques",
        title: "Services en ligne disponibles",
        excerpt:
          "De nombreuses démarches sont accessibles en ligne via France Consulaire, le portail Mon Consulat et le site Service-Public.fr. Vous pouvez y effectuer votre inscription consulaire, demander des documents d'état civil, suivre vos demandes en cours et prendre rendez-vous. Une connexion France Connect est requise pour accéder à la plupart des services sécurisés. L'UFDM vous accompagne dans ces démarches…",
        link: "LIEN_DRIVE_FICHE_2C",
      },
    ],
  },
  {
    id: "etat-civil",
    num: "Fiche 3",
    tabLabel: "3. État civil",
    title: "État civil",
    cards: [
      {
        icon: "👶",
        tag: "État civil",
        title: "Déclaration de naissance à l'étranger",
        excerpt:
          "Tout enfant né à Madagascar d'au moins un parent français doit être déclaré dans les 15 jours suivant la naissance à l'officier d'état civil local, puis une transcription peut être demandée auprès du Consulat. Les pièces requises sont : extrait d'acte de naissance local, pièces d'identité des parents, livret de famille et formulaire de demande. La transcription est ensuite envoyée au Service central d'état civil de Nantes…",
        link: "LIEN_DRIVE_FICHE_3A",
      },
      {
        icon: "💍",
        tag: "État civil",
        title: "Mariage de Français à Madagascar",
        excerpt:
          "Le mariage célébré à Madagascar peut être transcrit sur les registres consulaires français. Il est également possible de se marier devant le consul de France si les deux époux sont français. Les futurs conjoints doivent déposer un dossier complet au Consulat au moins 30 jours avant la cérémonie. Une publication de bans est affichée pendant 10 jours ouvrables au Consulat et à la mairie du domicile des époux en France…",
        link: "LIEN_DRIVE_FICHE_3B",
      },
      {
        icon: "⚰️",
        tag: "État civil",
        title: "Décès d'un Français à Madagascar",
        excerpt:
          "En cas de décès d'un ressortissant français sur le territoire malgache, la famille doit contacter le Consulat dans les plus brefs délais. Une déclaration de décès doit être faite auprès des autorités locales, puis une demande de transcription présentée au Consulat. Le rapatriement du corps en France nécessite des démarches spécifiques et l'obtention d'un laissez-passer mortuaire auprès des autorités des deux pays…",
        link: "LIEN_DRIVE_FICHE_3C",
      },
    ],
  },
  {
    id: "identite",
    num: "Fiche 4",
    tabLabel: "4. Identité & Nationalité",
    title: "Documents d'identité – Nationalité française",
    cards: [
      {
        icon: "🛂",
        tag: "Identité",
        title: "Passeport français à Madagascar",
        excerpt:
          "La demande de passeport se fait exclusivement sur rendez-vous au Consulat. Le passeport biométrique est valable 10 ans pour les adultes et 5 ans pour les mineurs. Le délai de fabrication est de 4 à 8 semaines en moyenne. Les pièces nécessaires comprennent une photo conforme, un justificatif d'identité, un justificatif de domicile et les droits de chancellerie. En cas d'urgence avérée, un passeport d'urgence peut être délivré…",
        link: "LIEN_DRIVE_FICHE_4A",
      },
      {
        icon: "🪪",
        tag: "Identité",
        title: "Carte Nationale d'Identité (CNI)",
        excerpt:
          "La carte nationale d'identité peut être demandée au Consulat pour les Français inscrits au registre consulaire. Gratuite et valable 10 ans pour les adultes (5 ans pour les mineurs), elle est un document officiel d'identité reconnu dans l'espace européen. La demande se fait en ligne puis en présentiel au Consulat pour la prise d'empreintes. Le délai de traitement est similaire à celui du passeport…",
        link: "LIEN_DRIVE_FICHE_4B",
      },
      {
        icon: "🏳️",
        tag: "Nationalité",
        title: "Acquisition et preuve de la nationalité française",
        excerpt:
          "La nationalité française peut s'acquérir par la naissance, la filiation, le mariage ou la naturalisation. Pour les personnes nées à l'étranger d'un parent français, une déclaration de nationalité peut être nécessaire. Le certificat de nationalité française (CNF) est délivré par le tribunal judiciaire compétent en France. Le Consulat peut vous orienter et vous aider à constituer votre dossier selon votre situation…",
        link: "LIEN_DRIVE_FICHE_4C",
      },
    ],
  },
  {
    id: "citoyennete",
    num: "Fiche 5",
    tabLabel: "5. Citoyenneté & Élections",
    title: "Citoyenneté – Élections",
    cards: [
      {
        icon: "🗳️",
        tag: "Élections",
        title: "Voter depuis Madagascar – Inscription sur les listes électorales",
        excerpt:
          "Les Français établis à l'étranger peuvent s'inscrire sur les listes électorales consulaires pour voter aux élections présidentielles, législatives et européennes. L'inscription doit être effectuée avant le 31 décembre de l'année précédant l'élection via le portail Mon Consulat ou directement au Consulat. Le bureau de vote est situé au Consulat. Les votes par procuration sont également possibles…",
        link: "LIEN_DRIVE_FICHE_5A",
      },
      {
        icon: "📜",
        tag: "Citoyenneté",
        title: "Procuration de vote",
        excerpt:
          "Si vous ne pouvez pas vous déplacer pour voter, vous pouvez donner procuration à un autre électeur français inscrit dans le même bureau de vote. La procuration se fait en ligne via le service Maprocuration ou auprès d'une autorité habilitée (commissariat, tribunal, Consulat). Le mandataire doit être inscrit sur les listes électorales du même bureau de vote que vous…",
        link: "LIEN_DRIVE_FICHE_5B",
      },
      {
        icon: "🏛️",
        tag: "Citoyenneté",
        title: "Élire ses représentants – Conseiller des Français de l'étranger",
        excerpt:
          "Les Français de l'étranger élisent des Conseillers des Français de l'étranger (CFE) tous les 6 ans pour défendre leurs intérêts. Ces élus siègent à l'Assemblée des Français de l'étranger (AFE). Ils peuvent également élire des sénateurs représentants les Français établis hors de France. L'UFDM vous tient informés des échéances électorales et des candidats de la circonscription Madagascar…",
        link: "LIEN_DRIVE_FICHE_5C",
      },
    ],
  },
  {
    id: "famille",
    num: "Fiche 6",
    tabLabel: "6. Famille & Scolarité",
    title: "Famille – Scolarité",
    cards: [
      {
        icon: "🏫",
        tag: "Scolarité",
        title: "Scolarisation des enfants français à Madagascar",
        excerpt:
          "Plusieurs établissements homologués par le Ministère de l'Éducation nationale dispensent un enseignement français à Madagascar : le Lycée Français de Tananarive (LFT), et plusieurs établissements partenaires de l'AEFE dans les grandes villes. Les frais de scolarité peuvent bénéficier de bourses scolaires attribuées par l'Agence pour l'enseignement français à l'étranger (AEFE) selon conditions de ressources…",
        link: "LIEN_DRIVE_FICHE_6A",
      },
      {
        icon: "💰",
        tag: "Famille",
        title: "Bourses scolaires – Comment en bénéficier ?",
        excerpt:
          "Les bourses scolaires de l'AEFE sont attribuées aux familles françaises à revenus modestes scolarisant leurs enfants dans un établissement du réseau. La demande se fait annuellement auprès du Consulat entre janvier et mars. L'instruction est réalisée par la commission des bourses. Les critères retenus sont les revenus familiaux, le nombre d'enfants à charge et les frais de scolarité de l'établissement fréquenté…",
        link: "LIEN_DRIVE_FICHE_6B",
      },
      {
        icon: "👪",
        tag: "Famille",
        title: "Autorité parentale et garde d'enfants à l'international",
        excerpt:
          "En cas de séparation ou divorce impliquant des enfants franco-malgaches, des règles spécifiques s'appliquent. La Convention de La Haye de 1980 sur l'enlèvement international d'enfants est en vigueur entre la France et Madagascar. Le Consulat peut vous orienter vers les autorités compétentes en cas de conflit parental. Des médiateurs familiaux spécialisés peuvent être sollicités pour faciliter le dialogue…",
        link: "LIEN_DRIVE_FICHE_6C",
      },
    ],
  },
  {
    id: "social",
    num: "Fiche 7",
    tabLabel: "7. Social & Santé",
    title: "Social – Santé",
    cards: [
      {
        icon: "🏥",
        tag: "Santé",
        title: "Couverture médicale à Madagascar – Que faire ?",
        excerpt:
          "Les Français établis à Madagascar ne bénéficient pas automatiquement de la Sécurité sociale française. Il est fortement conseillé de souscrire à la Caisse des Français de l'Étranger (CFE), qui offre une couverture maladie, maternité, accidents du travail et retraite. En complément, une assurance privée avec rapatriement sanitaire est recommandée. Le Consulat dispose d'une liste d'établissements médicaux de référence à Antananarivo…",
        link: "LIEN_DRIVE_FICHE_7A",
      },
      {
        icon: "👴",
        tag: "Social",
        title: "Retraite des Français de l'étranger",
        excerpt:
          "Les cotisations retraite peuvent être versées volontairement à la CFE pour les Français expatriés non salariés locaux. Les salariés d'entreprises françaises continuent de cotiser au régime général. La retraite est ensuite versée à l'étranger par virement bancaire. Un certificat de vie (certificat d'existence) est demandé annuellement par les caisses de retraite. Le Consulat peut l'apposer sur le formulaire fourni par votre caisse…",
        link: "LIEN_DRIVE_FICHE_7B",
      },
      {
        icon: "🤝",
        tag: "Social",
        title: "Aides sociales pour les Français en difficulté",
        excerpt:
          "Le Consulat dispose d'un service social qui peut apporter une aide d'urgence aux Français en grande difficulté à Madagascar : aide au rapatriement, avance sur pécule, aide alimentaire, assistance médicale d'urgence. Ces aides sont soumises à conditions de ressources et accordées après instruction du dossier. L'UFDM peut vous orienter et vous accompagner dans vos démarches auprès du service social consulaire…",
        link: "LIEN_DRIVE_FICHE_7C",
      },
    ],
  },
  {
    id: "notariat",
    num: "Fiche 8",
    tabLabel: "8. Certif. & Notariat",
    title: "Certificat – Copie – Légalisation – Notariat",
    cards: [
      {
        icon: "📄",
        tag: "Légalisation",
        title: "Légalisation et apostille de documents",
        excerpt:
          "La légalisation est la procédure qui authentifie la signature d'un document officiel étranger pour qu'il soit reconnu en France. Depuis l'adhésion de Madagascar à la Convention de La Haye, les documents malgaches destinés à la France peuvent bénéficier de l'apostille, délivrée par le Ministère des Affaires étrangères malgache. Les documents français destinés à Madagascar nécessitent une légalisation auprès du Consulat…",
        link: "LIEN_DRIVE_FICHE_8A",
      },
      {
        icon: "🔏",
        tag: "Notariat",
        title: "Actes notariaux et authentification consulaire",
        excerpt:
          "Le consul de France peut recevoir certains actes notariaux : procurations, testaments, reconnaissances de dettes, actes de sociétés. Ces actes ont la même valeur qu'un acte passé devant notaire en France. La prise de rendez-vous est obligatoire. Les droits de chancellerie varient selon la nature et la valeur de l'acte. Un projet de l'acte doit être transmis au Consulat avant la date du rendez-vous pour vérification…",
        link: "LIEN_DRIVE_FICHE_8B",
      },
      {
        icon: "📋",
        tag: "Certificats",
        title: "Certificats de vie, de célibat, de coutume…",
        excerpt:
          "Le Consulat peut délivrer différents certificats à la demande des Français inscrits : certificat de vie (ou d'existence), certificat de célibat, certificat de coutume, certificat de non-paiement de pension alimentaire, etc. Ces documents sont souvent réclamés par des administrations étrangères. Chaque demande nécessite un rendez-vous et la production des justificatifs correspondant à la nature du certificat souhaité…",
        link: "LIEN_DRIVE_FICHE_8C",
      },
    ],
  },
  {
    id: "urgence",
    num: "Fiche 9",
    tabLabel: "9. Urgence & Difficulté",
    title: "Urgence – Difficulté",
    cards: [
      {
        icon: "🆘",
        tag: "Urgence",
        title: "Que faire en cas d'urgence consulaire ?",
        excerpt:
          "Le Consulat dispose d'un numéro d'urgence disponible 24h/24 et 7j/7 pour les situations d'extrême urgence : accident grave, hospitalisation, arrestation, décès ou disparition d'un ressortissant français. En dehors des heures d'ouverture, un agent d'astreinte peut être contacté. Le Centre de Crise et de Soutien du Ministère des Affaires étrangères (+33 1 77 67 67 67) peut également être appelé depuis l'étranger…",
        link: "LIEN_DRIVE_FICHE_9A",
      },
      {
        icon: "⚖️",
        tag: "Difficulté",
        title: "Français arrêté ou détenu à Madagascar",
        excerpt:
          "En cas d'arrestation ou de détention d'un ressortissant français, les autorités malgaches ont l'obligation d'informer le Consulat dans les meilleurs délais. Le consul peut alors rendre visite à la personne détenue, s'assurer de ses conditions de détention et lui communiquer une liste d'avocats locaux. Le Consulat ne peut pas intervenir dans les procédures judiciaires malgaches, mais peut faciliter le contact avec la famille…",
        link: "LIEN_DRIVE_FICHE_9B",
      },
      {
        icon: "✈️",
        tag: "Urgence",
        title: "Rapatriement d'urgence en France",
        excerpt:
          "En cas de situation de crise grave (catastrophe naturelle, troubles civils, maladie grave), le Consulat peut organiser un rapatriement d'urgence. Ce rapatriement est en général payant et remboursable ultérieurement, sauf pour les Français en situation de dénuement total. Il est vivement conseillé de s'inscrire sur Ariane, le service d'enregistrement des Français voyageant ou résidant à l'étranger, pour faciliter votre prise en charge…",
        link: "LIEN_DRIVE_FICHE_9C",
      },
    ],
  },
];

export default function AdministrationPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = useMemo(() => sections, []);
  const activeSection = items[activeIndex];
  const handleTab = (index) => {
    setActiveIndex(index);
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  return (
    <main className="admin-page">
      <section className="admin-hero">
        <div className="admin-hero-inner">
          <div className="admin-hero-badge">
            🏛️ Services consulaires & administratifs
          </div>
          <h1>Espace Administration</h1>
          <p>
            Retrouvez toutes les démarches administratives pour les Français
            établis à Madagascar : inscription consulaire, documents d'identité,
            état civil, aides sociales et plus encore.
          </p>
        </div>
      </section>

      <div className="admin-main">
        <div className="admin-breadcrumb">
          <a href="#">Accueil</a>
          <span className="sep">›</span>
          <span>Administration › {activeSection.title}</span>
        </div>

        <div className="admin-tabs">
          {items.map((section, index) => (
            <button
              key={section.id}
              type="button"
              className={`admin-tab ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleTab(index)}
            >
              {section.tabLabel}
            </button>
          ))}
        </div>

        {items.map((section, index) => (
          <section
            key={section.id}
            className={`admin-section ${index === activeIndex ? "active" : ""}`}
          >
            <header className="admin-section-head">
              <span className="admin-section-num">{section.num}</span>
              <h2>{section.title}</h2>
            </header>

            <div className="admin-cards">
              {section.cards.map((card) => (
                <article key={`${section.id}-${card.title}`} className="admin-card">
                  <div className="admin-card-media">{card.icon}</div>
                  <div className="admin-card-body">
                    <span className="admin-card-tag">{card.tag}</span>
                    <h3>{card.title}</h3>
                    <p>
                      {card.excerpt}
                    </p>
                    <a href={card.link} target="_blank" rel="noreferrer">
                      Lire la suite…
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
