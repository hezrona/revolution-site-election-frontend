import { useState } from "react";
import { driveLinks } from "../../config/documents.js";
import "./administrationPage.css";

function toPreviewUrl(url) {
  return url.replace(/\/edit.*$/, "/preview");
}

const sections = [
  {
    id: "register", num: "Fiche 1", tabLabel: "1. Inscription registre",
    title: "Inscription au registre des Français établis hors de France",
    items: [
      { icon: "📋", tag: "Registre consulaire", title: "Inscription au registre des Français établis hors de France", key: "INSCRIPTION_REGISTRE" },
    ],
  },
  {
    id: "pratique", num: "Fiche 2", tabLabel: "2. Infos pratiques",
    title: "Informations pratiques",
    items: [
      { icon: "🏢", tag: "Infos pratiques", title: "Informations pratiques — Consulat de France à Antananarivo", key: "INFOS_PRATIQUES" },
    ],
  },
  {
    id: "etat-civil", num: "Fiche 3", tabLabel: "3. État civil",
    title: "État civil",
    items: [
      { icon: "👶", tag: "État civil", title: "Déclaration de naissance à l'étranger", key: "ETATCIVIL_NAISSANCE" },
      { icon: "💍", tag: "État civil", title: "Mariage de Français à Madagascar", key: "ETATCIVIL_MARIAGE" },
      { icon: "⚰️", tag: "État civil", title: "Décès d'un Français à Madagascar", key: "ETATCIVIL_DECES" },
      { icon: "🤝", tag: "État civil", title: "PACS à l'étranger", key: "ETATCIVIL_PACS" },
      { icon: "⚖️", tag: "État civil", title: "Divorce — Démarches consulaires", key: "ETATCIVIL_DIVORCE" },
      { icon: "✍️", tag: "État civil", title: "Changement de nom de famille", key: "ETATCIVIL_FAMILLE" },
      { icon: "🏷️", tag: "État civil", title: "Changement de prénom", key: "ETATCIVIL_PRENOM" },
      { icon: "👨‍👦", tag: "État civil", title: "Reconnaissance d'un enfant", key: "ETATCIVIL_RECONNAISSANCE" },
    ],
  },
  {
    id: "identite", num: "Fiche 4", tabLabel: "4. Identité & Nationalité",
    title: "Documents d'identité – Nationalité française",
    items: [
      { icon: "🛂", tag: "Identité", title: "Passeport français à Madagascar", key: "IDENTITE_PASSEPORT" },
      { icon: "🪪", tag: "Identité", title: "Carte Nationale d'Identité (CNI)", key: "IDENTITE_CNI" },
      { icon: "🚗", tag: "Identité", title: "Permis de conduire", key: "IDENTITE_PERMIS" },
      { icon: "📱", tag: "Identité", title: "Certification de l'identité numérique", key: "IDENTITE_NUMERIQUE" },
      { icon: "🏳️", tag: "Nationalité", title: "Acquisition et preuve de la nationalité française", key: "IDENTITE_NATIONALITE" },
    ],
  },
  {
    id: "citoyennete", num: "Fiche 5", tabLabel: "5. Citoyenneté & Élections",
    title: "Citoyenneté – Élections",
    items: [
      { icon: "🗳️", tag: "Élections", title: "Voter depuis Madagascar", key: "CITOYEN_VOTER" },
      { icon: "🏛️", tag: "Élections", title: "Élections consulaires des 30 et 31 mai 2026", key: "CITOYEN_ELECTIONS" },
      { icon: "📜", tag: "Citoyenneté", title: "Recensement citoyen & Journée Défense et Citoyenneté (JDC)", key: "CITOYEN_JDC" },
    ],
  },
  {
    id: "famille", num: "Fiche 6", tabLabel: "6. Famille & Scolarité",
    title: "Famille – Scolarité",
    items: [
      { icon: "🎓", tag: "Scolarité", title: "Bourses scolaires AEFE", key: "FAMILLE_BOURSES" },
      { icon: "♿", tag: "Scolarité", title: "Bourses AESH — Élèves en situation de handicap", key: "FAMILLE_AESH" },
      { icon: "❤️", tag: "Famille", title: "Adoption internationale", key: "FAMILLE_ADOPTION" },
      { icon: "✈️", tag: "Famille", title: "Circulation et protection des mineurs", key: "FAMILLE_MINEURS" },
      { icon: "📚", tag: "Formation", title: "Formations professionnelles", key: "FAMILLE_FORMATIONS" },
    ],
  },
  {
    id: "social", num: "Fiche 7", tabLabel: "7. Social & Santé",
    title: "Social – Santé",
    items: [
      { icon: "🏥", tag: "Santé", title: "Prise en charge des frais de santé", key: "SOCIAL_SANTE" },
      { icon: "🔢", tag: "Social", title: "Numéro de sécurité sociale pour les Français nés à l'étranger", key: "SOCIAL_SECU" },
      { icon: "🤝", tag: "Social", title: "Aides sociales pour les Français en difficulté", key: "SOCIAL_AIDES" },
    ],
  },
  {
    id: "notariat", num: "Fiche 8", tabLabel: "8. Certif. & Notariat",
    title: "Certificat – Copie – Légalisation – Notariat",
    items: [
      { icon: "📄", tag: "Légalisation", title: "Légalisation et apostille de documents", key: "NOTARIAT_APOSTILLE" },
      { icon: "🔏", tag: "Notariat", title: "Actes notariaux et authentification consulaire", key: "NOTARIAT_ACTES" },
      { icon: "📋", tag: "Certificats", title: "Certificat de vie (certificat d'existence)", key: "NOTARIAT_VIE" },
      { icon: "📜", tag: "Certificats", title: "Certificat de coutume", key: "NOTARIAT_COUTUME" },
      { icon: "🏠", tag: "Certificats", title: "Certificat de résidence", key: "NOTARIAT_RESIDENCE" },
      { icon: "💰", tag: "Certificats", title: "Certificat de détaxe", key: "NOTARIAT_DETAXE" },
      { icon: "✅", tag: "Légalisation", title: "Copie certifiée conforme à l'original", key: "NOTARIAT_COPIE" },
      { icon: "✍️", tag: "Légalisation", title: "Certification matérielle de signature", key: "NOTARIAT_LEGALISATION" },
    ],
  },
  {
    id: "urgence", num: "Fiche 9", tabLabel: "9. Urgence & Difficulté",
    title: "Urgence – Difficulté",
    items: [
      { icon: "🆘", tag: "Urgence", title: "Accident, hospitalisation et décès", key: "URGENCE_ACCIDENT" },
      { icon: "⚖️", tag: "Urgence", title: "Français arrêté ou détenu à Madagascar", key: "URGENCE_ARRESTATION" },
      { icon: "🔍", tag: "Urgence", title: "Disparitions inquiétantes", key: "URGENCE_DISPARITION" },
      { icon: "🛡️", tag: "Urgence", title: "Violences faites aux femmes françaises", key: "URGENCE_VIOLENCES" },
      { icon: "🪪", tag: "Urgence", title: "Perte ou vol de documents d'identité", key: "URGENCE_PERTE_DOCS" },
      { icon: "💑", tag: "Urgence", title: "Prévention des mariages forcés", key: "URGENCE_MARIAGES" },
      { icon: "📣", tag: "Difficulté", title: "Difficulté avec votre poste consulaire", key: "URGENCE_DEFENSEUR" },
    ],
  },
];

export default function AdministrationPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeDoc, setActiveDoc] = useState(null); // { title, url, driveUrl }

  const activeSection = sections[activeIndex];

  const handleTab = (index) => {
    setActiveIndex(index);
    setActiveDoc(null);
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  const handleItemClick = (item) => {
    const raw = driveLinks[item.key];
    if (!raw) return;
    // Toggle : cliquer deux fois ferme le viewer
    if (activeDoc?.key === item.key) {
      setActiveDoc(null);
    } else {
      setActiveDoc({ key: item.key, title: item.title, url: toPreviewUrl(raw), driveUrl: raw });
    }
  };

  return (
    <main className="admin-page">
      {/* Hero */}
      <section className="admin-hero">
        <div className="admin-hero-inner">
          <div className="admin-hero-badge">🏛️ Services consulaires & administratifs</div>
          <h1>Espace Administration</h1>
          <p>
            Retrouvez toutes les démarches administratives pour les Français établis à Madagascar :
            inscription consulaire, documents d'identité, état civil, aides sociales et plus encore.
          </p>
        </div>
      </section>

      <div className="admin-main">
        {/* Breadcrumb */}
        <div className="admin-breadcrumb">
          <a href="#">Accueil</a>
          <span className="sep">›</span>
          <span>Administration › {activeSection.title}</span>
        </div>

        {/* Onglets */}
        <div className="admin-tabs">
          {sections.map((section, index) => (
            <button
              key={section.id}
              type="button"
              className={`admin-tab${index === activeIndex ? " active" : ""}`}
              onClick={() => handleTab(index)}
            >
              {section.tabLabel}
            </button>
          ))}
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <section
            key={section.id}
            className={`admin-section${index === activeIndex ? " active" : ""}`}
          >
            <header className="admin-section-head">
              <span className="admin-section-num">{section.num}</span>
              <h2>{section.title}</h2>
            </header>

            {/* Liste des fiches */}
            <ul className="admin-fiche-list">
              {section.items.map((item) => {
                const isActive = activeDoc?.key === item.key;
                return (
                  <li key={item.key}>
                    <button
                      type="button"
                      className={`admin-fiche-row${isActive ? " is-active" : ""}`}
                      onClick={() => handleItemClick(item)}
                    >
                      <span className="admin-fiche-icon">{item.icon}</span>
                      <span className="admin-fiche-tag">{item.tag}</span>
                      <span className="admin-fiche-title">{item.title}</span>
                      <span className="admin-fiche-cta">
                        {isActive ? "Fermer ✕" : "Voir la fiche →"}
                      </span>
                    </button>

                    {/* Iframe inline sous la ligne */}
                    {isActive && (
                      <div className="admin-fiche-viewer">
                        <div className="admin-fiche-viewer-bar">
                          <span>📄 {item.title}</span>
                        </div>
                        <iframe
                          src={activeDoc.url}
                          title={item.title}
                          className="admin-fiche-iframe"
                          allowFullScreen
                        />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}