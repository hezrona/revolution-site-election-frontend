import "./dailyLife.css";

export default function DailyLife() {
  return (
    <main className="daily-life-page">
      <section className="daily-life-hero">
        <div className="container daily-life-hero-inner">
          <span className="eyebrow">Vie quotidienne</span>
          <h1>Plus jamais seul face aux défis du quotidien</h1>
          <p>
            Un réseau de partenaires de confiance, construit par et pour
            les Français de Madagascar.
          </p>
        </div>
      </section>

      <section className="daily-life-content">
        <div className="container daily-life-card">

          <p>
            Vous êtes Français à Madagascar. Combien de fois vous êtes-vous retrouvé
            démuni face à une situation banale ? Un tuyau qui éclate, une panne
            électrique, un écran d'ordinateur qui rend l'âme — et vous ne savez pas
            à qui faire confiance. <strong>Ce n'est pas une fatalité. C'est précisément
            ce que l'UFM veut changer.</strong>
          </p>

          <div className="daily-life-section">
            <h2>Un réseau construit sur la confiance, pas sur le hasard</h2>
            <p>
              Constituer, sous la responsabilité d'un bénévole dédié, un réseau de
              partenaires soigneusement sélectionnés couvrant tous les domaines
              essentiels de votre vie quotidienne. Entrer dans ce réseau ne s'improvise
              pas : chaque prestataire fera l'objet d'une <strong>sélection rigoureuse</strong> —
              vérification des références, du sérieux, de la réputation au sein de
              la communauté.
            </p>
            <div className="daily-life-highlight">
              <strong>La vraie garantie, c'est le regard permanent de la communauté.</strong> Après
              chaque intervention, le client évalue publiquement la prestation sur le site :
              qualité du travail, respect des délais, honnêteté du devis. Un prestataire
              dont les notes deviennent insuffisantes sera <strong>radié de la liste</strong> — sans
              passe-droit, sans deuxième chance indéfinie.
            </div>
          </div>

          {[
            {
              icon: "🏠",
              title: "La maison : enfin des artisans fiables",
              text: `Qui n'a jamais attendu trois semaines un plombier qui n'est jamais venu ? 
              Le pôle Maison du réseau UFM, c'est votre carnet d'adresses de confiance pour 
              tout ce qui touche à votre habitat.`,
              items: [
                "Plombiers, électriciens, peintres, maçons, menuisiers",
                "Réparateurs d'ordinateurs et de matériel électronique",
                "Jardiniers et prestataires de nettoyage",
              ],
            },
            {
              icon: "🏥",
              title: "La santé : un accompagnement structuré",
              text: `Savoir à quel médecin faire confiance, connaître la clinique adaptée, 
              comprendre comment activer votre couverture CFE — tout cela demande une 
              connaissance du terrain.`,
              items: [
                "Médecins et infirmiers référents identifiés dans chaque ville",
                "Tarifs de groupe négociés",
                "Information claire sur vos droits et options d'évacuation sanitaire",
              ],
            },
            {
              icon: "🌴",
              title: "La vie sociale : être ensemble, mieux",
              text: `Vivre à Madagascar, c'est profiter d'un cadre naturel magnifique et d'une 
              communauté française vivante. L'UFM veut devenir le lien naturel entre vous 
              et cet écosystème.`,
              items: [
                "Golf, tennis, sports nautiques, randonnée, bridge",
                "Associations culturelles et clubs de rencontre",
                "Mise en relation pour les nouveaux arrivants",
              ],
            },
          ].map((pole) => (
            <div className="daily-life-pole" key={pole.title}>
              <div className="daily-life-pole-icon">{pole.icon}</div>
              <div>
                <h2>{pole.title}</h2>
                <p>{pole.text}</p>
                <ul className="daily-life-list">
                  {pole.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="daily-life-section">
            <h2>Un bénévole engagé, une communauté qui s'organise</h2>
            <p>
              Le responsable du pôle Vie Quotidienne de l'UFM ne sera pas un
              fonctionnaire lointain. Ce sera <strong>l'un des vôtres</strong>, joignable sur
              WhatsApp, présent sur le terrain, animant le réseau avec exigence
              et bienveillance.
            </p>
          </div>

          <div className="daily-life-contact">
            <span className="daily-life-contact-label">Nous contacter</span>
            <div className="daily-life-contact-links">
              <a href="https://ufdm.vercel.app/" target="_blank" rel="noreferrer">
                🌐 ufdm.vercel.app
              </a>
              <a href="https://wa.me/261389383913" target="_blank" rel="noreferrer">
                💬 WhatsApp : 038 93 839 13
              </a>
            </div>
          </div>

          <div className="daily-life-signature">
            <span className="signature-label">Notre engagement</span>
            <span className="signature-value">
              Plus jamais seul à Madagascar.
            </span>
          </div>

        </div>
      </section>
    </main>
  );
}