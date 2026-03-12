import "./physicalSecurity.css";

export default function PhysicalSecurity() {
  return (
    <main className="physical-security-page">
      <section className="physical-security-hero">
        <div className="container physical-security-hero-inner">
          <span className="eyebrow">Sécurité physique</span>
          <h1>Protéger nos compatriotes à Madagascar</h1>
          <p>
            Parce que la sécurité des Français ne peut plus être une variable
            d'ajustement, l'UFM fait de votre protection physique sa priorité absolue.
          </p>
        </div>
      </section>

      <section className="physical-security-content">
        <div className="container physical-security-card">

          <p>
            Vivre à Madagascar est une aventure humaine exceptionnelle, mais nous ne
            pouvons plus ignorer les zones d'ombre qui pèsent sur notre quotidien.
            Chaque année, entre <strong>5 et 15 de nos compatriotes perdent la vie</strong> sur
            la Grande Île dans des circonstances tragiques. L'insécurité s'immisce
            également sous forme de vols, cambriolages et menaces sur les axes routiers.
          </p>

          <div className="physical-security-section">
            <h2>Face à l'affaiblissement des moyens publics</h2>
            <p>
              Les moyens alloués à notre administration consulaire s'amenuisent,
              laissant un sentiment d'abandon grandissant. Il est temps de passer
              d'une posture de simple constat à une <strong>stratégie de protection active</strong>.
              Pour l'UFM, la sécurité est un pôle opérationnel structuré autour de
              solutions concrètes, immédiates et technologiques.
            </p>
          </div>

          <div className="physical-security-section">
            <h2>Nos solutions : un dispositif de protection 24h/24</h2>

            <div className="physical-security-measure">
              <div className="physical-security-number">1</div>
              <div>
                <h3>Un responsable sécurité dédié</h3>
                <p>
                  Un référent sécurité UFM joignable <strong>24h/24 et 7j/7</strong>, véritable
                  coordinateur de crise entre nos ressortissants, l'Officier de Sécurité
                  de l'Ambassade et les autorités malgaches pour qu'aucune alerte ne
                  reste lettre morte.
                </p>
              </div>
            </div>

            <div className="physical-security-measure">
              <div className="physical-security-number">2</div>
              <div>
                <h3>Le réseau WhatsApp d'urgence</h3>
                <p>
                  Un <strong>Groupe WhatsApp de Sécurité Communautaire</strong> permettant à chaque
                  membre de lancer une alerte géolocalisée en cas d'agression ou de
                  comportement suspect, pour briser l'isolement qui profite aux agresseurs.
                </p>
              </div>
            </div>

            <div className="physical-security-measure">
              <div className="physical-security-number">3</div>
              <div>
                <h3>Partenariat avec une société de sécurité</h3>
                <p>
                  Un partenariat privilégié avec une société de sécurité privée de référence
                  pour des <strong>interventions rapides et des tarifs négociés</strong> : alarmes,
                  gardiennage physique, systèmes de vidéosurveillance.
                </p>
              </div>
            </div>

            <div className="physical-security-measure">
              <div className="physical-security-number">4</div>
              <div>
                <h3>« Voisins Vigilants »</h3>
                <p>
                  Un système de <strong>surveillance mutuelle de quartier</strong> pour repérer
                  les véhicules suspects, partager les informations sur les tentatives
                  d'intrusion. La vigilance collective est l'ennemie du crime.
                </p>
              </div>
            </div>
          </div>

          <div className="physical-security-signature">
            <span className="signature-label">Notre engagement</span>
            <span className="signature-value">
              Votre sérénité, partout à Madagascar.
            </span>
          </div>

        </div>
      </section>
    </main>
  );
}