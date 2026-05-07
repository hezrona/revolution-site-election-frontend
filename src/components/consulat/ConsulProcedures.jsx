// =============================================================================
// src/components/consulat/ConsulProcedures.jsx
// Page /consulat — assemble l'en-tête, le chat et l'avertissement.
// =============================================================================

import Chat          from "./Chat";
import Avertissement from "./Avertissement";
import styles        from "./consulat.module.css";

export default function ConsulProcedures() {
  return (
    <main className={styles.page}>

      <header className={styles.titre}>
        <h1>Consulat — Assistant administratif</h1>
        <p className={styles.sousTitre}>
          Aide à la compréhension des démarches consulaires et administratives
        </p>
      </header>

      <section className={styles.intro}>
        <p>
          Pour toutes vos questions portant sur les procédures administratives,
          posez votre question dans le cadre ci-dessous.
        </p>
      </section>

      <Chat />

      <Avertissement />

    </main>
  );
}