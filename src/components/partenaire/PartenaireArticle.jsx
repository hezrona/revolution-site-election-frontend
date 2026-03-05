import { useMemo, useState } from "react";
import "./partenaireArticle.css";

const categories = [
  {
    id: "loisirs",
    label: "Loisirs",
    icon: "🎭",
    partners: [
      {
        id: "L1",
        name: "Club Sport Mada",
        activity: "Sport & Tennis",
        logo: "🎾",
        website: "https://www.sportsclub-mada.mg",
        phone: "+261 32 00 000 01",
        email: "contact@sportsclub-mada.mg",
        location: "Ivandry, Antananarivo",
        description:
          "Le Club Sport Mada est le complexe sportif de référence pour les expatriés français à Antananarivo. Avec 8 courts de tennis, une piscine olympique, des courts de padel et une salle de fitness ultramoderne, il offre un cadre exceptionnel pour pratiquer votre sport favori. Des cours collectifs et individuels sont dispensés par des coachs diplômés d'État, francophones. Le club organise régulièrement des tournois et des compétitions amicaux entre membres de la communauté…",
        readMore: "LIEN_DRIVE_L1",
        rating: 4.2,
        reviews: 18,
        highlights: [
          "Accueil",
          "Qualité",
          "Rapport qualité/prix",
          "Localisation",
          "Horaires",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Marie" },
          { label: "Date de la visite", type: "month", placeholder: "" },
        ],
        recommendLabel: "Recommanderiez-vous ce partenaire ?",
      },
      {
        id: "L2",
        name: "Galerie Zoma Art",
        activity: "Art & Culture",
        logo: "🎨",
        website: "https://www.zomaart.mg",
        phone: "+261 33 00 000 02",
        email: "info@zomaart.mg",
        location: "Analakely, Antananarivo",
        description:
          "La Galerie Zoma Art est un espace culturel unique dédié à l'art contemporain malgache et à la création franco-malgache. Elle propose des expositions temporaires, des ateliers de peinture, sculpture et photographie ouverts à tous les niveaux. Les cours hebdomadaires pour enfants et adultes sont animés par des artistes reconnus. La galerie accueille également des vernissages et soirées culturelles bilingues, véritables moments de rencontre entre les deux communautés.",
        rating: 4.9,
        reviews: 34,
        highlights: [
          "Accueil",
          "Qualité",
          "Rapport qualité/prix",
          "Localisation",
          "Ambiance",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Jean" },
          { label: "Date de la visite", type: "month", placeholder: "" },
        ],
        recommendLabel: "Recommanderiez-vous ce partenaire ?",
      },
      {
        id: "L3",
        name: "Aqua Loisirs Madagascar",
        activity: "Piscine & Bien-être",
        logo: "🏊",
        website: "https://www.aqualoisirs.mg",
        phone: "+261 34 00 000 03",
        email: "aqua@loisirs.mg",
        location: "Ambohijatovo, Tana",
        description:
          "Aqua Loisirs Madagascar propose un complexe aquatique avec piscine chauffée, cours de natation pour enfants et adultes, aquagym et espaces de relaxation. Les cours sont dispensés par des maîtres nageurs certifiés, et les séances peuvent être réservées en ligne. Un accès journalier est disponible sans abonnement. L'établissement dispose également d'un espace sauna et hammam ainsi qu'un snack-bar pour se restaurer après la baignade…",
        readMore: "LIEN_DRIVE_L3",
        rating: 3.8,
        reviews: 9,
        highlights: [
          "Accueil",
          "Propreté",
          "Rapport qualité/prix",
          "Sécurité",
          "Horaires",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Sophie" },
          { label: "Date de la visite", type: "month", placeholder: "" },
        ],
        recommendLabel: "Recommanderiez-vous ce partenaire ?",
      },
    ],
  },
  {
    id: "famille",
    label: "Famille",
    icon: "👨‍👩‍👧",
    partners: [
      {
        id: "F1",
        name: "Petite Tribu Madagascar",
        activity: "Garde d'enfants",
        logo: "👶",
        website: "https://www.petitetribu.mg",
        phone: "+261 32 00 000 10",
        email: "bonjour@petitetribu.mg",
        location: "Tana, livraison nationale",
        description:
          "Petite Tribu Madagascar est une agence spécialisée dans la garde d'enfants à domicile et la crèche familiale bilingue français-malgache. L'équipe de nounous et baby-sitters est sélectionnée avec soin, formée aux premiers secours et francophone. Des solutions à la carte sont proposées : garde régulière, occasionnelle, nuit ou week-end. Un service de mise en relation avec des familles partageant les mêmes valeurs est également disponible pour créer des groupes de jeux réguliers…",
        readMore: "LIEN_DRIVE_F1",
        rating: 4.8,
        reviews: 22,
        highlights: ["Sécurité", "Accueil", "Ponctualité", "Tarifs", "Sérieux"],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Claire" },
          { label: "Date de la visite", type: "month", placeholder: "" },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
      {
        id: "F2",
        name: "VétoMada",
        activity: "Vétérinaire",
        logo: "🐾",
        website: "https://www.vetomada.mg",
        phone: "+261 33 00 000 11",
        email: "urgence@vetomada.mg",
        location: "Andohalo, Antananarivo",
        description:
          "VétoMada est une clinique vétérinaire moderne, recommandée par la communauté française, spécialisée dans les soins aux chiens, chats et NAC (nouveaux animaux de compagnie). Le cabinet dispose d'un service de consultation, de chirurgie, de radiographie et d'analyses. Un service de garde et d'urgence est disponible 7j/7. L'équipe accompagne également les expatriés dans les démarches de rapatriement d'animaux vers la France : certificats, vaccins, passeport vétérinaire européen.",
        rating: 4.3,
        reviews: 15,
        highlights: [
          "Compétence",
          "Tarifs",
          "Rapidité",
          "Accueil",
          "Équipement",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Paul" },
          { label: "Date de la visite", type: "month", placeholder: "" },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
    ],
  },
  {
    id: "ecoles",
    label: "Écoles",
    icon: "🏫",
    partners: [
      {
        id: "E1",
        name: "École Bilingue Les Baobabs",
        activity: "École primaire bilingue",
        logo: "📚",
        website: "https://www.ecolesbaobabs.mg",
        phone: "+261 32 00 000 20",
        email: "inscription@ecolesbaobabs.mg",
        location: "Ambohidratrimo, Tana",
        description:
          "L'École Bilingue Les Baobabs dispense un enseignement en français et en malgache, conforme aux programmes de l'Éducation nationale française. L'établissement accueille les enfants de la maternelle (3 ans) au CM2. Les effectifs réduits (15 élèves par classe maximum) garantissent un suivi individualisé. Des activités extrascolaires enrichissantes sont proposées : musique, arts plastiques, code, jardinage pédagogique. Une cantine biologique est disponible sur place…",
        readMore: "LIEN_DRIVE_E1",
        rating: 4.7,
        reviews: 41,
        highlights: [
          "Pédagogie",
          "Encadrement",
          "Locaux",
          "Activités extra",
          "Communication",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Anne" },
          {
            label: "Niveau de votre enfant",
            type: "text",
            placeholder: "Ex: CP",
          },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
      {
        id: "E2",
        name: "Institut Français de Madagascar",
        activity: "Cours de langue & Culture",
        logo: "🎓",
        website: "https://www.institutfrancais-madagascar.com",
        phone: "+261 20 00 000 21",
        email: "contact@ifm.mg",
        location: "Analakely, Antananarivo",
        description:
          "L'Institut Français de Madagascar (IFM) est le principal opérateur culturel de la France à Madagascar. Il propose des cours de français pour tous les niveaux (A1 à C2), des certifications DELF/DALF reconnues internationalement, une médiathèque riche de plus de 20 000 ouvrages et une programmation culturelle dense. Des cours de malgache sont également organisés pour les expatriés souhaitant s'intégrer localement. L'IFM est partenaire privilégié de l'UFDM pour les événements culturels franco-malgaches.",
        rating: 4.4,
        reviews: 56,
        highlights: ["Enseignants", "Médiathèque", "Programmation", "Tarifs"],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Marc" },
          { label: "Date de la visite", type: "month", placeholder: "" },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
    ],
  },
  {
    id: "maison",
    label: "Maison",
    icon: "🏠",
    partners: [
      {
        id: "M1",
        name: "Mada Services & Travaux",
        activity: "Rénovation & Maintenance",
        logo: "🔧",
        website: "https://www.madaservices.mg",
        phone: "+261 32 00 000 30",
        email: "devis@madaservices.mg",
        location: "Toutes zones, Antananarivo",
        description:
          "Mada Services & Travaux est une entreprise générale du bâtiment au service des expatriés depuis 2010. Elle intervient dans les domaines de la plomberie, électricité, menuiserie, peinture, carrelage et rénovation complète d'appartements ou de villas. Les devis sont gratuits et remis sous 48h. L'équipe est francophone, ponctuelle et dispose de garanties décennales. Un service de conciergerie mensuelle est disponible pour les locations gérées à distance depuis la France…",
        readMore: "LIEN_DRIVE_M1",
        rating: 4.1,
        reviews: 27,
        highlights: [
          "Ponctualité",
          "Qualité",
          "Tarifs",
          "Propreté",
          "Communication",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Luc" },
          {
            label: "Type de travaux",
            type: "text",
            placeholder: "Ex: plomberie",
          },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
      {
        id: "M2",
        name: "Immo Tana Premium",
        activity: "Agence immobilière",
        logo: "🏡",
        website: "https://www.immotana.mg",
        phone: "+261 33 00 000 31",
        email: "location@immotana.mg",
        location: "Ivandry & centre-ville, Tana",
        description:
          "Immo Tana Premium est une agence immobilière spécialisée dans les expatriés et les familles françaises à la recherche de logements de qualité à Antananarivo. Le portefeuille comprend des villas sécurisées, des appartements meublés et des maisons de standing dans les quartiers prisés (Ivandry, Ambohijatovo, Ankadivato). Les contrats de bail sont rédigés en français, et l'agence assure la gestion locative pour les propriétaires résidant en France.",
        rating: 4.5,
        reviews: 19,
        highlights: [
          "Réactivité",
          "Honnêteté",
          "Qualité des biens",
          "Tarifs",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Nathalie" },
          {
            label: "Type de bien",
            type: "text",
            placeholder: "Villa, appart…",
          },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
    ],
  },
  {
    id: "voyages",
    label: "Voyages",
    icon: "✈️",
    partners: [
      {
        id: "V1",
        name: "Mada Évasion Tours",
        activity: "Agence de voyages",
        logo: "🌿",
        website: "https://www.madaevasion.mg",
        phone: "+261 32 00 000 40",
        email: "tours@madaevasion.mg",
        location: "Antananarivo & tout Madagascar",
        description:
          "Mada Évasion Tours est l'agence de référence pour les Français souhaitant découvrir Madagascar en profondeur. Circuits sur mesure, randonnées dans le parc de l'Isalo, plongée à Nosy Be, observation des lémuriens à Andasibe : l'équipe de guides francophones certifiés vous accompagne dans toute l'île. Des forfaits familles avec activités adaptées aux enfants sont disponibles. L'agence assure également les transferts aéroport et les réservations d'hôtel pour les nouveaux arrivants…",
        readMore: "LIEN_DRIVE_V1",
        rating: 4.9,
        reviews: 63,
        highlights: [
          "Organisation",
          "Guides",
          "Rapport qualité/prix",
          "Flexibilité",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Julie" },
          {
            label: "Destination visitée",
            type: "text",
            placeholder: "Ex: Nosy Be",
          },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
      {
        id: "V2",
        name: "TransfertTana",
        activity: "Transport & Location de véhicules",
        logo: "🚐",
        website: "https://www.transferttana.mg",
        phone: "+261 33 00 000 41",
        email: "resa@transferttana.mg",
        location: "Aéroport Ivato & tout Tana",
        description:
          "TransfertTana propose des services de VTC, transferts aéroport, mise à disposition de véhicule avec chauffeur et location de 4x4 avec ou sans chauffeur pour les excursions hors de la capitale. La flotte comprend des berlines confortables, des minivans pour les groupes et des 4x4 tout-terrain pour les routes difficiles de l'intérieur. Les chauffeurs sont formés, ponctuels, et disposent de notions de français. Réservation possible par WhatsApp 24h/24.",
        rating: 4.2,
        reviews: 38,
        highlights: ["Ponctualité", "Confort", "Tarifs", "Amabilité"],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Pierre" },
          {
            label: "Type de service",
            type: "text",
            placeholder: "Ex: transfert aéroport",
          },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
    ],
  },
  {
    id: "sorties",
    label: "Sorties",
    icon: "🌆",
    partners: [
      {
        id: "S1",
        name: "Le Jardin du Roy",
        activity: "Restaurant français",
        logo: "🍽️",
        website: "https://www.jardinduroyMadagascar.com",
        phone: "+261 32 00 000 50",
        email: "reservation@jardinduroyMada.com",
        location: "Ankadivato, Antananarivo",
        description:
          "Le Jardin du Roy est l'adresse gastronomique incontournable de la communauté française à Antananarivo. Le chef, formé en France, propose une cuisine bistronomique aux accents franco-malgaches : foie gras, zebu cuisiné à la française, desserts maison. La carte des vins importés est soignée. En terrasse, sous les bougainvilliers, l'ambiance est celle d'un petit restaurant de province française. Fermé le lundi. Réservation conseillée le week-end…",
        readMore: "LIEN_DRIVE_S1",
        rating: 4.8,
        reviews: 72,
        highlights: [
          "Cuisine",
          "Service",
          "Cadre",
          "Carte des vins",
          "Rapport qualité/prix",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Isabelle" },
          {
            label: "Occasion",
            type: "text",
            placeholder: "Dîner, anniversaire…",
          },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
      {
        id: "S2",
        name: "CinéMada",
        activity: "Cinéma & Événements culturels",
        logo: "🎬",
        website: "https://www.cinemada.mg",
        phone: "+261 33 00 000 51",
        email: "billetterie@cinemada.mg",
        location: "Isoraka, Antananarivo",
        description:
          "CinéMada est le seul cinéma de la capitale proposant une programmation de films français en version originale sous-titrée. Deux salles climatisées accueillent jusqu'à 200 spectateurs. En partenariat avec l'Institut Français de Madagascar, CinéMada organise des avant-premières, des cycles thématiques et des ciné-débats mensuels. Des soirées spéciales « Cinéma & Gastronomie » alliant projection et dîner sont organisées le premier vendredi de chaque mois.",
        rating: 4.3,
        reviews: 29,
        highlights: ["Programmation", "Confort", "Son & image", "Ambiance"],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Thomas" },
          {
            label: "Film / événement",
            type: "text",
            placeholder: "Ex: ciné-débat mars",
          },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
    ],
  },
  {
    id: "urgences",
    label: "Urgences",
    icon: "🚨",
    partners: [
      {
        id: "U1",
        name: "Clinique des Urgences Ivandry",
        activity: "Urgences médicales 24h/24",
        logo: "🏥",
        website: "https://www.urgences-ivandry.mg",
        phone: "+261 32 00 000 60 (urgences)",
        email: "urgences@clinique-ivandry.mg",
        location: "Ivandry, Antananarivo",
        description:
          "La Clinique des Urgences d'Ivandry est l'établissement de référence pour les soins d'urgence à Antananarivo, recommandé par le Consulat de France. Ouverte 24h/24 et 7j/7, elle dispose d'un service des urgences, d'un bloc opératoire, d'un service de réanimation et d'une unité de soins intensifs. Le personnel médical est francophone et habitué à prendre en charge les expatriés. Des conventions avec les principales assurances internationales (AXA, Allianz, BUPA) permettent une prise en charge directe sans avance de frais…",
        readMore: "LIEN_DRIVE_U1",
        rating: 4.2,
        reviews: 31,
        highlights: [
          "Rapidité de prise en charge",
          "Compétence médicale",
          "Accueil",
          "Équipement",
          "Gestion assurance",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Prénom" },
          { label: "Date de la visite", type: "month", placeholder: "" },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
      {
        id: "U2",
        name: "SAMU Mada – Ambulances Express",
        activity: "Ambulances & Rapatriement sanitaire",
        logo: "🚑",
        website: "https://www.samumada.mg",
        phone: "+261 34 00 000 61 (24h/24)",
        email: "dispatch@samumada.mg",
        location: "Couverture nationale",
        description:
          "SAMU Mada est le service d'ambulances médicalisées de référence à Madagascar, disponible 24h/24 pour les transports d'urgence, les transferts inter-établissements et les rapatriements sanitaires vers la France ou La Réunion. Les véhicules sont équipés de matériel de réanimation et accompagnés d'infirmiers diplômés. En lien avec les assurances rapatriement, l'équipe coordonne les évacuations aériennes médicalisées en cas de nécessité absolue.",
        rating: 4.7,
        reviews: 14,
        highlights: [
          "Délai d'intervention",
          "Personnel qualifié",
          "Matériel",
          "Coordination assurance",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Prénom" },
          { label: "Date de la visite", type: "month", placeholder: "" },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
    ],
  },
  {
    id: "medecin",
    label: "Médecin",
    icon: "🩺",
    partners: [
      {
        id: "D1",
        name: "Dr. Martin – Médecine générale",
        activity: "Médecin généraliste francophone",
        logo: "👨‍⚕️",
        website: "https://www.drmartin-tana.mg",
        phone: "+261 32 00 000 70",
        email: "cabinet@drmartin-tana.mg",
        location: "Ambohidahy, Antananarivo",
        description:
          "Le Dr. Martin, médecin généraliste diplômé de la faculté de médecine de Lyon, exerce à Antananarivo depuis 2015. Son cabinet accueille prioritairement la communauté française et les expatriés. Consultations sur rendez-vous du lundi au samedi matin. Il assure le suivi médical complet : médecine préventive, prise en charge des maladies tropicales (paludisme, typhoïde), vaccinations, médecine du voyageur et certificats médicaux. Téléconsultation disponible pour les patients installés en province…",
        readMore: "LIEN_DRIVE_D1",
        rating: 4.9,
        reviews: 44,
        highlights: [
          "Écoute",
          "Compétence",
          "Disponibilité",
          "Délai RDV",
          "Tarifs",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Prénom" },
          {
            label: "Type de consultation",
            type: "text",
            placeholder: "Ex: suivi, urgence…",
          },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
      {
        id: "D2",
        name: "Cabinet Dentaire Smile Mada",
        activity: "Dentiste & Implantologie",
        logo: "🦷",
        website: "https://www.smilemada.mg",
        phone: "+261 33 00 000 71",
        email: "rdv@smilemada.mg",
        location: "Analakely, Antananarivo",
        description:
          "Le Cabinet Dentaire Smile Mada est tenu par une équipe de chirurgiens-dentistes formés en Europe, parfaitement francophones. L'établissement est équipé de matériel moderne : radiologie numérique, fauteuils ergonomiques, stérilisation certifiée. Les soins proposés incluent : soins conservateurs, prothèses (couronnes, bridges), implants, orthodontie adulte et blanchiment. Les tarifs, très compétitifs par rapport à la France, permettent aux expatriés de réaliser leurs soins à moindre coût pendant leur séjour.",
        rating: 4.4,
        reviews: 27,
        highlights: [
          "Indolore",
          "Hygiène",
          "Tarifs",
          "Qualité des soins",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Prénom" },
          {
            label: "Soin effectué",
            type: "text",
            placeholder: "Ex: couronne, détartrage…",
          },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
    ],
  },
  {
    id: "paramedical",
    label: "Paramédical",
    icon: "💊",
    partners: [
      {
        id: "P1",
        name: "Kiné & Bien-être Tana",
        activity: "Kinésithérapeute & Ostéopathe",
        logo: "🧘",
        website: "https://www.kine-tana.mg",
        phone: "+261 32 00 000 80",
        email: "rdv@kine-tana.mg",
        location: "Ivandry, Antananarivo",
        description:
          "Le cabinet Kiné & Bien-être Tana regroupe des kinésithérapeutes et un ostéopathe diplômés d'État, formés en France. Les spécialités couvertes incluent : rééducation post-opératoire, traitement des lombalgies et cervicalgies, rééducation neurologique, kinésithérapie respiratoire et drainage lymphatique. Un service de kinésithérapie à domicile est disponible pour les patients à mobilité réduite. Le cabinet accueille également les enfants pour la rééducation pédiatrique…",
        readMore: "LIEN_DRIVE_P1",
        rating: 4.8,
        reviews: 33,
        highlights: [
          "Efficacité",
          "Douceur",
          "Écoute",
          "Délai RDV",
          "Tarifs",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Prénom" },
          { label: "Type de soin", type: "text", placeholder: "Ex: ostéo, kiné…" },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
      {
        id: "P2",
        name: "Laboratoire Analyses Mada",
        activity: "Analyses médicales & Biologie",
        logo: "💉",
        website: "https://www.labo-mada.mg",
        phone: "+261 33 00 000 81",
        email: "contact@labo-mada.mg",
        location: "Ampefiloha, Antananarivo",
        description:
          "Le Laboratoire Analyses Mada est un centre d'analyses biologiques agréé, équipé d'automates modernes garantissant la fiabilité des résultats. Il réalise l'ensemble des analyses courantes et spécialisées : bilan sanguin complet, sérologies tropicales (paludisme, dengue, bilharziose), tests PCR, analyses urinaires, bactériologie. Les résultats sont transmis par email sous 24h à 48h. Un service de prélèvement à domicile est disponible sur Antananarivo pour les patients à mobilité réduite.",
        rating: 4.3,
        reviews: 21,
        highlights: [
          "Rapidité des résultats",
          "Fiabilité",
          "Accueil",
          "Tarifs",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Prénom" },
          {
            label: "Type d'analyse",
            type: "text",
            placeholder: "Ex: bilan sanguin…",
          },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
    ],
  },
  {
    id: "avocat",
    label: "Avocat",
    icon: "⚖️",
    partners: [
      {
        id: "A1",
        name: "Maître Dupont & Associés",
        activity: "Cabinet d'avocats franco-malgache",
        logo: "⚖️",
        website: "https://www.dupont-avocats-mada.mg",
        phone: "+261 32 00 000 90",
        email: "cabinet@dupont-avocats.mg",
        location: "Antaninarenina, Antananarivo",
        description:
          "Le cabinet Dupont & Associés est spécialisé dans l'accompagnement juridique des expatriés et des entreprises françaises à Madagascar. Les domaines de compétence incluent : droit des affaires et des investissements, droit du travail franco-malgache, droit immobilier, droit de la famille internationale (divorce, succession, garde d'enfants), et contentieux civils. Maître Dupont, avocat inscrit au barreau de Paris et reconnu à Madagascar, offre des consultations en français, y compris à distance par visioconférence…",
        readMore: "LIEN_DRIVE_A1",
        rating: 4.8,
        reviews: 17,
        highlights: [
          "Expertise",
          "Réactivité",
          "Clarté des explications",
          "Tarifs",
          "Disponibilité",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Prénom" },
          {
            label: "Domaine juridique",
            type: "text",
            placeholder: "Ex: droit du travail…",
          },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
      {
        id: "A2",
        name: "Cabinet Rakotondrabe Legal",
        activity: "Droit malgache & international",
        logo: "🏛️",
        website: "https://www.rakotondrabelaw.mg",
        phone: "+261 33 00 000 91",
        email: "info@rakotondrabelaw.mg",
        location: "Analakely, Antananarivo",
        description:
          "Le cabinet Rakotondrabe Legal est un cabinet malgache de premier plan, francophone, spécialisé dans l'accompagnement des investisseurs étrangers, la création de sociétés à Madagascar, les contrats commerciaux, le droit foncier malgache et les litiges avec l'administration locale. Fort de 20 ans d'expérience, le cabinet conseille régulièrement des entreprises françaises et des particuliers expatriés dans leurs projets immobiliers et entrepreneuriaux sur l'île.",
        rating: 4.5,
        reviews: 23,
        highlights: [
          "Connaissance locale",
          "Expertise",
          "Réactivité",
          "Tarifs",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Prénom" },
          {
            label: "Domaine juridique",
            type: "text",
            placeholder: "Ex: création société…",
          },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
    ],
  },
  {
    id: "expert-comptable",
    label: "Expert comptable",
    icon: "📊",
    partners: [
      {
        id: "EC1",
        name: "Fiduciaire Franco-Malgache",
        activity: "Expertise comptable & Fiscalité",
        logo: "📊",
        website: "https://www.ffm-expertise.mg",
        phone: "+261 32 00 000 100",
        email: "contact@ffm-expertise.mg",
        location: "Ambohidahy, Antananarivo",
        description:
          "La Fiduciaire Franco-Malgache accompagne les entrepreneurs et expatriés français dans toutes leurs obligations comptables et fiscales à Madagascar. Services proposés : tenue de comptabilité, établissement des bilans, déclarations fiscales (IR, IS, TVA), optimisation fiscale franco-malgache, assistance lors des contrôles fiscaux, et gestion de la paie. Le cabinet conseille également les porteurs de projets sur les structures juridiques les plus adaptées à leur activité (SARL, SA, EI)…",
        readMore: "LIEN_DRIVE_EC1",
        rating: 4.7,
        reviews: 19,
        highlights: [
          "Rigueur",
          "Réactivité",
          "Conseils fiscaux",
          "Tarifs",
          "Bilinguisme",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Prénom" },
          {
            label: "Type de mission",
            type: "text",
            placeholder: "Ex: bilan, fiscalité…",
          },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
      {
        id: "EC2",
        name: "Audit & Gestion Madagascar",
        activity: "Audit, RH & Paie",
        logo: "🧾",
        website: "https://www.agm-audit.mg",
        phone: "+261 33 00 000 101",
        email: "info@agm-audit.mg",
        location: "Analakely, Antananarivo",
        description:
          "Audit & Gestion Madagascar est un cabinet d'expertise comptable et d'audit reconnu, membre d'un réseau international. Il s'adresse principalement aux PME françaises et filiales de groupes internationaux installées à Madagascar. Prestations : commissariat aux comptes, audit légal et contractuel, gestion externalisée des ressources humaines, établissement des bulletins de paie selon la législation malgache, et formation comptable des équipes locales.",
        rating: 4.2,
        reviews: 11,
        highlights: [
          "Professionnalisme",
          "Fiabilité",
          "Tarifs",
          "Délais respectés",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Prénom" },
          {
            label: "Type de mission",
            type: "text",
            placeholder: "Ex: audit, paie…",
          },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
    ],
  },
  {
    id: "consultant",
    label: "Consultant",
    icon: "💼",
    partners: [
      {
        id: "C1",
        name: "Mada Business Consulting",
        activity: "Conseil en développement d'affaires",
        logo: "🌍",
        website: "https://www.madabusiness.mg",
        phone: "+261 32 00 000 110",
        email: "hello@madabusiness.mg",
        location: "Ivandry, Antananarivo",
        description:
          "Mada Business Consulting accompagne les entrepreneurs et investisseurs français dans leurs projets à Madagascar : étude de marché, analyse de faisabilité, recherche de partenaires locaux, accompagnement à la création d'entreprise, stratégie commerciale et marketing. Le cabinet dispose d'un réseau de contacts institutionnels et privés solide à travers tout Madagascar. Une première consultation de 30 minutes est offerte pour évaluer votre projet et définir ensemble les besoins d'accompagnement…",
        readMore: "LIEN_DRIVE_C1",
        rating: 4.9,
        reviews: 12,
        highlights: [
          "Expertise locale",
          "Réseau",
          "Écoute",
          "Résultats concrets",
          "Tarifs",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Prénom" },
          {
            label: "Type de mission",
            type: "text",
            placeholder: "Ex: étude de marché…",
          },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
      {
        id: "C2",
        name: "Digital Mada Solutions",
        activity: "Consultant IT & Transformation digitale",
        logo: "🖥️",
        website: "https://www.digitalmada.mg",
        phone: "+261 33 00 000 111",
        email: "projects@digitalmada.mg",
        location: "Antananarivo & full remote",
        description:
          "Digital Mada Solutions est un cabinet de conseil en transformation numérique fondé par des ingénieurs franco-malgaches. Il accompagne les TPE/PME et associations dans leur digitalisation : création de sites web, développement d'applications mobiles, mise en place de CRM et ERP, cybersécurité, formation des équipes aux outils numériques. L'équipe travaille en français, livre des projets dans les délais et propose un support post-livraison réactif. Références disponibles sur demande.",
        rating: 4.6,
        reviews: 8,
        highlights: [
          "Compétence technique",
          "Respect des délais",
          "Communication",
          "Tarifs compétitifs",
        ],
        formFields: [
          { label: "Votre prénom *", type: "text", placeholder: "Prénom" },
          {
            label: "Type de projet",
            type: "text",
            placeholder: "Ex: site web, appli…",
          },
        ],
        recommendLabel: "Recommanderiez-vous ?",
      },
    ],
  },
];

const ratingStars = (value) => {
  const fullStars = Math.floor(value);
  return Array.from({ length: 5 }, (_, idx) => idx < fullStars);
};

export default function PartenaireArticle() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openEval, setOpenEval] = useState({});
  const [ratings, setRatings] = useState({});
  const [submitted, setSubmitted] = useState({});

  const sections = useMemo(() => categories, []);
  const activeSection = sections[activeIndex];

  const handleTab = (index) => {
    setActiveIndex(index);
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  const toggleEval = (key) => {
    setOpenEval((current) => ({ ...current, [key]: !current[key] }));
  };

  const setRating = (key, value) => {
    setRatings((current) => ({ ...current, [key]: value }));
  };

  const submitEval = (key) => {
    if (!ratings[key]) {
      window.alert("Veuillez attribuer une note en cliquant sur les étoiles.");
      return;
    }
    setSubmitted((current) => ({ ...current, [key]: true }));
  };

  return (
    <main className="partner-hub">
      <section className="partner-hero">
        <div className="partner-hero-inner">
          <span className="partner-hero-badge">UFDM · Partenaires</span>
          <h1>
            Un réseau de partenaires utiles pour la vie quotidienne à Madagascar.
          </h1>
          <p>
            Retrouvez des professionnels de confiance, recommandés par la
            communauté française, pour répondre à vos besoins essentiels.
          </p>
        </div>
      </section>

      <div className="partner-main">
        <div className="partner-tabs">
          {sections.map((section, index) => (
            <button
              key={section.id}
              type="button"
              className={`partner-tab ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleTab(index)}
            >
              <span className="partner-tab-icon">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>

        <section className="partner-section">
          <header className="partner-section-head">
            <span className="partner-section-icon">{activeSection.icon}</span>
            <h2>{activeSection.label}</h2>
            <span className="partner-count">
              {activeSection.partners.length} partenaires
            </span>
          </header>

          <div className="partner-grid">
            {activeSection.partners.map((partner) => {
              const key = `${activeSection.id}-${partner.id}`;
              const currentRating = ratings[key] || 0;
              const isOpen = openEval[key];
              const isSubmitted = submitted[key];

              return (
                <article key={key} className="partner-card">
                  <div className="partner-card-header">
                    <div className="partner-logo">{partner.logo}</div>
                    <div className="partner-info">
                      <h3>{partner.name}</h3>
                      <span className="partner-activity">
                        {partner.activity}
                      </span>
                      <div className="partner-meta">
                        <a href={partner.website} target="_blank" rel="noreferrer">
                          🌐 {partner.website.replace("https://", "")}
                        </a>
                        <a href={`tel:${partner.phone}`}>📞 {partner.phone}</a>
                        <a href={`mailto:${partner.email}`}>✉️ {partner.email}</a>
                        <span>📍 {partner.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="partner-card-body">
                    <p>{partner.description}</p>
                    {partner.readMore ? (
                      <a
                        className="partner-read-more"
                        href={partner.readMore}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Lire la suite…
                        <span aria-hidden>→</span>
                      </a>
                    ) : null}

                    <div className="partner-rating">
                      <div className="partner-stars" aria-hidden>
                        {ratingStars(partner.rating).map((filled, idx) => (
                          <span
                            key={`${key}-star-${idx}`}
                            className={`partner-star ${filled ? "filled" : ""}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span>{partner.rating.toFixed(1)} / 5</span>
                      <span className="partner-rating-count">
                        ({partner.reviews} avis)
                      </span>
                    </div>

                    <button
                      type="button"
                      className="partner-eval-toggle"
                      onClick={() => toggleEval(key)}
                    >
                      {isOpen ? "✖ Fermer l'évaluation" : "Donner mon avis"}
                    </button>

                    <div className={`partner-eval ${isOpen ? "open" : ""}`}>
                      <div className="partner-eval-title">
                        ⭐ Évaluer ce partenaire
                      </div>
                      <div className="partner-eval-stars">
                        <span>Note globale :</span>
                        <div className="partner-eval-star-row">
                          {[1, 2, 3, 4, 5].map((value) => (
                            <button
                              key={`${key}-rate-${value}`}
                              type="button"
                              className={`partner-eval-star ${
                                currentRating >= value ? "selected" : ""
                              }`}
                              onClick={() => setRating(key, value)}
                            >
                              ★
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="partner-eval-grid">
                        {partner.formFields.map((field) => (
                          <label key={`${key}-${field.label}`}>
                            {field.label}
                            <input
                              type={field.type}
                              placeholder={field.placeholder}
                            />
                          </label>
                        ))}
                      </div>

                      <div className="partner-eval-options">
                        <span>Points forts</span>
                        <div className="partner-checks">
                          {partner.highlights.map((item) => (
                            <label key={`${key}-${item}`}>
                              <input type="checkbox" />
                              {item}
                            </label>
                          ))}
                        </div>
                      </div>

                      <label>
                        Votre commentaire *
                        <textarea placeholder="Décrivez votre expérience…" />
                      </label>

                      <label>
                        {partner.recommendLabel}
                        <select>
                          <option value="">-- Choisir --</option>
                          <option>Oui, absolument</option>
                          <option>Oui, probablement</option>
                          <option>Non, je ne pense pas</option>
                          <option>Non, certainement pas</option>
                        </select>
                      </label>

                      <button
                        type="button"
                        className="partner-submit"
                        onClick={() => submitEval(key)}
                      >
                        ✅ Envoyer mon évaluation
                      </button>

                      <div
                        className={`partner-success ${
                          isSubmitted ? "show" : ""
                        }`}
                      >
                        🎉 Merci pour votre avis ! Il sera publié après
                        modération.
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
