import "./terms.css";

export default function TermsPage() {
  return (
    <main className="terms-page">
      <section className="terms-hero">
        <div className="container terms-hero-inner">
          <h1>CGU & Politique de confidentialite</h1>
          <p>Conditions generales d'utilisation et protection des donnees.</p>
        </div>
      </section>
      <section className="terms-content">
        <div className="container terms-card">
          <h2>1. Objet</h2>
          <p>
            Ce site permet de soutenir la campagne, de partager des temoignages
            et de contacter l'equipe. En utilisant ce service, vous acceptez les
            conditions ci-dessous.
          </p>
          <h2>2. Donnees personnelles</h2>
          <p>
            Les informations recueillies sont traitees uniquement pour la
            communication de campagne et ne sont jamais revendues.
          </p>
          <h2>3. Consentement</h2>
          <p>
            Vous pouvez demander la suppression de vos donnees a tout moment en
            contactant l'equipe.
          </p>
          <h2>4. Cookies</h2>
          <p>
            Des cookies peuvent etre utilises pour ameliorer l'experience
            utilisateur et mesurer l'audience.
          </p>
          <h2>5. Contact</h2>
          <p>
            Pour toute question, ecrivez-nous a contact@exemple.fr.
          </p>
        </div>
      </section>
    </main>
  );
}
