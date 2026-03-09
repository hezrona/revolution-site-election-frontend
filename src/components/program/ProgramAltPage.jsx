import "./programAltPage.css";
import programVideo from "../../assets/video/program_hero.mp4";

export default function ProgramAltPage() {
  return (
    <main className="program-alt-page">
      <div className="program-alt-shell">
        <section className="program-alt-hero">
          <video className="program-alt-hero-video" autoPlay muted loop playsInline aria-hidden="true">
            <source src={programVideo} type="video/mp4" />
          </video>

          <div className="program-alt-hero-overlay" />

          <div className="program-alt-hero-content">
            <div className="program-alt-badge">
              <span className="program-alt-dot" />
              Programme – Union des Français de Madagascar
            </div>
            <h1>Du concret. Du suivi. Une présence.</h1>
            <p className="program-alt-lead">
              Notre engagement : être accessibles, présents et efficaces, avec
              pragmatisme et transparence.
            </p>
            <div className="program-alt-cta">
              <a className="program-alt-btn ghost" href="#moyens">
                Nos moyens
              </a>
            </div>
          </div>
        </section>

        <section id="programme" className="program-alt-grid">
          <aside className="program-alt-side">
            <p className="program-alt-side-title">Navigation</p>
            <nav className="program-alt-nav">
              <a href="#sante">Sécurité santé</a>
              <a href="#patrimoine">Sécurité patrimoniale & financière</a>
              <a href="#securite">Sécurité physique & personnelle</a>
              <a href="#familles">Familles, éducation & jeunesse</a>
              <a href="#consulaire">Démarches consulaires</a>
              <a href="#entrepreneurs">Entrepreneurs, emploi & EFE</a>
              <a href="#quotidien">Vie quotidienne</a>
              <a href="#methode">Une méthode différente</a>
              <a href="#moyens">Moyens mis en œuvre</a>
            </nav>
            <p className="program-alt-side-hint">
              Astuce : clique pour aller directement à une thématique.
            </p>
          </aside>

          <div className="program-alt-main">
            <article id="sante" className="program-alt-card">
              <h2>Sécurité santé</h2>
              <div className="program-alt-pills">
                <span className="program-alt-pill">CFE</span>
                <span className="program-alt-pill">Urgences</span>
                <span className="program-alt-pill">EVASAN</span>
              </div>
              <details open className="program-alt-details">
                <summary>Objectifs</summary>
                <ul>
                  <li>Sécuriser les parcours de soins</li>
                  <li>Réduire l’incertitude face aux urgences et aux EVASAN</li>
                  <li>Améliorer information et prévention sanitaire</li>
                  <li>Aucun Français ne doit être laissé sans soins vitaux</li>
                </ul>
              </details>
              <details className="program-alt-details">
                <summary>Actions concrètes</summary>
                <ul>
                  <li>Guide santé France–Madagascar</li>
                  <li>Réunions d’information santé (présentiel/visio)</li>
                  <li>Relais CFE pour situations complexes</li>
                  <li>Négociation de tarifs de groupe</li>
                  <li>Contacts médicaux fiables (Tana + provinces)</li>
                </ul>
              </details>
            </article>

            <article id="patrimoine" className="program-alt-card">
              <h2>Sécurité patrimoniale & financière</h2>
              <div className="program-alt-pills">
                <span className="program-alt-pill">Fiscalité</span>
                <span className="program-alt-pill">Retraite</span>
                <span className="program-alt-pill">Anti-arnaques</span>
              </div>
              <details open className="program-alt-details">
                <summary>Objectifs</summary>
                <ul>
                  <li>Protéger contre les risques financiers et patrimoniaux</li>
                  <li>Sécuriser investissements et revenus</li>
                  <li>Mieux comprendre la fiscalité France–Madagascar</li>
                </ul>
              </details>
              <details className="program-alt-details">
                <summary>Actions concrètes</summary>
                <ul>
                  <li>Partenariats encadrés avec des professionnels reconnus</li>
                  <li>Ateliers (fiscalité, retraite, investissement)</li>
                  <li>Fiches pratiques & alertes préventives</li>
                  <li>Orientation vers des interlocuteurs fiables</li>
                </ul>
              </details>
            </article>

            <article id="securite" className="program-alt-card">
              <h2>Sécurité physique & personnelle</h2>
              <div className="program-alt-pills">
                <span className="program-alt-pill">Prévention</span>
                <span className="program-alt-pill">Crise</span>
                <span className="program-alt-pill">WhatsApp</span>
              </div>
              <details open className="program-alt-details">
                <summary>Objectifs</summary>
                <ul>
                  <li>Protéger contre les risques physiques et personnels</li>
                  <li>Renforcer la prévention sans alarmisme</li>
                  <li>Sécuriser le quotidien</li>
                  <li>Améliorer la gestion de l’information en cas de crise</li>
                </ul>
              </details>
              <details open className="program-alt-details">
                <summary>Actions concrètes</summary>
                <ul>
                  <li>Relais rapide des consignes officielles</li>
                  <li>Chaîne d’info communautaire fiable (WhatsApp)</li>
                  <li>Sensibilisation aux bonnes pratiques</li>
                  <li>Coopération (autorités/consulat – Voisins Vigilants)</li>
                  <li>Appui aux victimes (information, orientation)</li>
                </ul>
              </details>
            </article>

            <article id="familles" className="program-alt-card">
              <h2>Familles, éducation & jeunesse</h2>
              <div className="program-alt-pills">
                <span className="program-alt-pill">Bourses</span>
                <span className="program-alt-pill">Écoles</span>
                <span className="program-alt-pill">CNED</span>
              </div>
              <details open className="program-alt-details">
                <summary>Objectifs</summary>
                <ul>
                  <li>Soutenir l’accès aux écoles françaises et homologuées</li>
                  <li>Défendre une attribution plus juste des bourses</li>
                  <li>Accompagner les familles (CNED / distance)</li>
                </ul>
              </details>
              <details open className="program-alt-details">
                <summary>Actions concrètes</summary>
                <ul>
                  <li>Défense de l’accès et des capacités des établissements</li>
                  <li>Veille sur l’équité et la transparence des bourses scolaires</li>
                  <li>Accompagnement des familles dans les solutions éducatives alternatives</li>
                  <li>Information claire sur les dispositifs existants</li>
                </ul>
              </details>
            </article>

            <article id="consulaire" className="program-alt-card">
              <h2>Démarches consulaires</h2>
              <div className="program-alt-pills">
                <span className="program-alt-pill">Passeport/CNI</span>
                <span className="program-alt-pill">RDV</span>
                <span className="program-alt-pill">Permanences</span>
              </div>
              <details open className="program-alt-details">
                <summary>Objectifs</summary>
                <ul>
                  <li>Intervenir sur les dossiers bloqués (passeports, CNI, état civil)</li>
                  <li>Défendre une amélioration de l’accès aux rendez-vous consulaires</li>
                  <li>Mettre en place des permanences d’information régulières</li>
                  <li>Renforcer la coopération avec les consuls honoraires afin d’améliorer l’efficacité administrative</li>
                </ul>
              </details>
              <details open className="program-alt-details">
                <summary>Actions concrètes</summary>
                <ul>
                  <li>Intervention sur dossiers bloqués</li>
                  <li>Plaidoyer sur la prise de rendez-vous</li>
                  <li>Permanences consulaires régulières</li>
                  <li>Coordination avec les consuls honoraires</li>
                </ul>
              </details>
            </article>

            <article id="entrepreneurs" className="program-alt-card">
              <h2>Entrepreneurs, emploi & EFE</h2>
              <div className="program-alt-pills">
                <span className="program-alt-pill">Réseau</span>
                <span className="program-alt-pill">Rencontres</span>
                <span className="program-alt-pill">EFE</span>
              </div>
              <details open className="program-alt-details">
                <summary>Objectifs</summary>
                <ul>
                  <li>Soutenir les entrepreneurs français et les EFE</li>
                  <li>Favoriser le dialogue avec les autorités locales et l’ambassade</li>
                  <li>Créer et renforcer un réseau d’entraide professionnelle entre Français</li>
                </ul>
              </details>
              <details open className="program-alt-details">
                <summary>Actions concrètes</summary>
                <ul>
                  <li>Adhésion au réseau EFE</li>
                  <li>Réseau d’entraide professionnelle</li>
                  <li>Mise en relation institutionnelle/économique</li>
                  <li>Rencontres économiques et professionnelles</li>
                </ul>
              </details>
            </article>

            <article id="quotidien" className="program-alt-card">
              <h2>Vie quotidienne</h2>
              <div className="program-alt-pills">
                <span className="program-alt-pill">Bons plans</span>
                <span className="program-alt-pill">Prestataires</span>
                <span className="program-alt-pill">Province</span>
              </div>
              <details open className="program-alt-details">
                <summary>Objectifs</summary>
                <ul>
                  <li>Faciliter la vie quotidienne des Français établis à Madagascar</li>
                  <li>Rompre l’isolement, notamment en dehors de la capitale</li>
                  <li>Favoriser l’entraide, la convivialité et l’accès à des services fiables</li>
                </ul>
              </details>
              <details open className="program-alt-details">
                <summary>Actions concrètes</summary>
                <ul>
                  <li>Recensement de prestataires fiables par ville</li>
                  <li>Recommandations issues de la communauté</li>
                  <li>Réseaux locaux d’entraide</li>
                  <li>Fiches pratiques</li>
                </ul>
              </details>
            </article>

            <article id="methode" className="program-alt-card">
              <h2>Une méthode différente</h2>
              <details open className="program-alt-details">
                <summary>Objectifs</summary>
                <ul>
                  <li>Restaurer la confiance entre élus et communauté</li>
                  <li>Assurer une présence réelle, continue et accessible</li>
                  <li>Travailler sans logique partisane</li>
                </ul>
              </details>
              <details open className="program-alt-details">
                <summary>Ce qu’on fait différemment</summary>
                <ul>
                  <li>Permanences physiques et numériques</li>
                  <li>Communication régulière (WhatsApp, réseaux)</li>
                  <li>Comptes rendus de mandat accessibles</li>
                  <li>Travail en équipe, esprit constructif et apolitique</li>
                </ul>
              </details>
            </article>

            <div id="moyens" className="program-alt-footer">
              <h2>Moyens mis en œuvre</h2>
              <p className="program-alt-sub">Une présence de proximité, partout.</p>
              <ul>
                <li>Une équipe de bénévoles + un représentant par ville</li>
                <li>Groupes WhatsApp par ville</li>
                <li>Un site dédié (blog, forum, fiches pratiques)</li>
              </ul>
              <div className="program-alt-cta">
                <a className="program-alt-btn" href="/contact">
                  Nous contacter
                </a>
                <a className="program-alt-btn ghost" href="#team">
                  Voir l’équipe
                </a>
              </div>
            </div>

            <p className="program-alt-small">
              Contenu synthétisé depuis le programme fourni (version longue).
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}