// =============================================================================
// src/components/consulat/Avertissement.jsx
// =============================================================================

import styles from "./consulat.module.css";

export default function Avertissement() {
  return (
    <aside className={styles.avertissement} role="note">
      <h2>Avertissement</h2>
      <p>
        Les informations fournies par cet assistant sont communiquées{" "}
        <strong>à titre indicatif</strong>. Elles ne se substituent pas aux actes
        officiels et n'engagent pas la responsabilité de l'UFDM ou des autorités
        consulaires. Avant toute démarche, vérifiez auprès des services compétents
        (consulat, France Diplomatie, service-public.fr).
      </p>
      <p>
        Cet outil utilise une intelligence artificielle&nbsp;: des erreurs sont possibles.{" "}
        <strong>Ne communiquez aucune donnée personnelle sensible</strong> (pièce
        d'identité, NIR, coordonnées bancaires).
      </p>
    </aside>
  );
}