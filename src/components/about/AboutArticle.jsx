import "./aboutArticle.css";

export default function AboutArticle() {
  return (
    <main className="about-article-page">
      <section className="about-article-hero">
        <div className="container about-article-hero-inner">
        <a href="#" className="about-article-back">← Retour à l'accueil</a>
        <span className="eyebrow">Notre vision</span>  {/* ← ligne séparée */}
        <h1>L'illusion de la représentation</h1>
        <p>Pourquoi il est temps de mettre fin à l'inutilité des conseillers consulaires</p>
        </div>
      </section>

      <section className="about-article-content">
        <div className="container about-article-card">

          <p>
            Depuis des années, on demande aux Français de Madagascar de se rendre
            aux urnes pour élire leurs conseillers. Pourtant, élection après élection,
            le constat est le même : un taux de participation dramatiquement bas.
            Ce désintérêt n'est pas de l'apathie ; c'est un diagnostic. Nos compatriotes
            ont compris ce que beaucoup d'élus tentent de cacher : dans sa forme actuelle,
            la fonction de conseiller des Français de l'étranger est une coquille vide.
          </p>

          <div className="about-article-section">
            <h2>Le décret de 2014 : le carcan de l'impuissance</h2>
            <p>
              Pour comprendre l'inefficacité du système, il faut revenir aux textes.
              Le décret de 2014, qui encadre les compétences des conseillers, est on
              ne peut plus clair. Leurs domaines d'intervention sont strictement délimités :
              l'action sociale, l'enseignement, la formation professionnelle et la sécurité.
            </p>
            <p>
              Mais le diable se cache dans les modalités : les conseillers sont
              « consultés pour avis ». En langage administratif, cela signifie qu'ils
              parlent, mais qu'ils ne décident de rien. Qu'il s'agisse de l'attribution
              d'une bourse scolaire, d'une aide sociale ou de choix stratégiques pour
              notre sécurité, toutes les décisions finales sont prises à Paris, par des
              fonctionnaires qui ne connaissent rien aux réalités de la vie à Antsirabe,
              Majunga ou Tuléar.
            </p>
          </div>

          <div className="about-article-section">
            <h2>Le mythe de l'influence sur les services consulaires</h2>
            <p>
              Le plus grave réside sans doute dans le double discours tenu par les élus
              sortants. Ils font croire à nos compatriotes qu'ils disposent d'un pouvoir
              d'influence occulte sur les services consulaires. C'est un mensonge.
            </p>
            <p>
              Soyons directs : le Consul n'a aucune obligation légale de suivre les
              demandes ou les préconisations d'un conseiller. Prétendre le contraire
              est une imposture électorale. Cette absence de pouvoir réel explique
              pourquoi les délais de visas restent insupportables et pourquoi tant de
              nos compatriotes se sentent abandonnés face à une machine administrative sourde.
            </p>
          </div>

          <div className="about-article-section">
            <h2>L'UFM : la fin de la figuration, le début de l'action</h2>
            <p>
              L'Union des Français de Madagascar (UFM) refuse de participer à cette
              mise en scène. Nous ne voulons pas de cette onction officielle pour
              simplement siéger deux fois par an dans des commissions stériles.
            </p>
            <p>
              Nous sommes disruptifs. Nous sommes innovants. Là où le système actuel
              propose de la figuration administrative, l'UFM propose une structure
              opérationnelle privée au service du bien commun. Si l'État ne peut ou
              ne veut plus protéger efficacement ses ressortissants à l'étranger,
              c'est à la communauté de s'organiser elle-même.
            </p>
          </div>

          <div className="about-article-section">
            <h2>Une équipe de spécialistes au service de la communauté</h2>
            <p>
              L'UFM, c'est une équipe de bénévoles spécialisés — chefs d'entreprise,
              juristes, médecins, cadres — qui mettent leur savoir-faire au service de tous.
              Nous avons créé des pôles de compétences précis :
            </p>
            <ul className="about-article-list">
              <li><strong>Santé et Sécurité</strong> — Pour ne plus laisser personne mourir d'un mauvais diagnostic.</li>
              <li><strong>Patrimoine et Fiscalité</strong> — Pour protéger vos biens et vos familles.</li>
              <li><strong>Entreprises</strong> — Pour créer enfin ce réseau économique qui manque tant aux 1 000 entreprises françaises de l'île.</li>
              <li><strong>Éducation et Aide Consulaire</strong> — Pour ne plus être une simple boîte aux lettres, mais un véritable appui technique.</li>
            </ul>
          </div>

          <div className="about-article-section">
            <h2>La modernité au cœur de la solidarité</h2>
            <p>
              L'UFM utilise les moyens de communication modernes pour briser la solitude.
              À travers nos groupes WhatsApp de proximité, notre site internet interactif
              et nos réseaux de réponse par mail, nous créons un lien constant. Chaque
              responsable de pôle anime un réseau de partenaires sélectionnés, tous engagés
              par une charte de qualité stricte.
            </p>
          </div>

          <div className="about-article-conclusion">
            <p>
              Le faible taux de participation aux élections consulaires est le cri de
              ralliement des déçus du système. En votant pour l'UFM, vous ne votez pas
              pour envoyer quelqu'un de plus faire de la figuration au consulat. Vous
              votez pour doter notre communauté d'une force d'action autonome,
              professionnelle et réactive.
            </p>
            <p><strong>Nous ne demandons pas la permission à Paris pour vous aider.
            Nous nous organisons ici, pour vous, maintenant.</strong></p>
            <p>Votez pour la révolution de la proximité. <strong>Votez UFM.</strong></p>
            <p className="about-article-slogan">Plus jamais seul avec l'UFM.</p>
          </div>

        </div>
      </section>
    </main>
  );
}