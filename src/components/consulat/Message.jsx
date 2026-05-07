// =============================================================================
// src/components/consulat/Message.jsx
// Bulle d'affichage d'un message (utilisateur ou bot).
// Le texte est rendu en plain text avec CSS pre-wrap pour préserver
// les listes et sauts de ligne produits par Gemini.
// =============================================================================

import styles from "./consulat.module.css";

export default function Message({ role, texte, erreur = false, enAttente = false }) {
  const classeMessage = [
    styles.message,
    role === "user" ? styles.user : styles.bot,
    enAttente ? styles.attente : "",
    erreur    ? styles.erreur  : ""
  ].filter(Boolean).join(" ");

  return (
    <div className={classeMessage}>
      <div className={styles.bulle}>
        {texte}
      </div>
    </div>
  );
}