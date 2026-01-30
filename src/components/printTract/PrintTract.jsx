import "./printTract.css";

const tips = [
  "Imprimer en couleur pour plus d'impact",
  "Activer l'impression recto/verso",
  "Papier standard 80g suffisant",
];

export default function PrintTract() {
  return (
    <section className="print-tract">
      <div className="container print-tract-card">
        <div className="print-tract-header">
          <h2>J'imprime des tracts</h2>
          <p>
            Distribuez des tracts dans les boites aux lettres de vos voisins.
          </p>
        </div>

        <div className="print-tract-preview">
          <div className="preview-item">
            <p className="preview-label">RECTO</p>
            <div className="preview-thumb">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80"
                alt="Tract recto"
              />
            </div>
          </div>
          <div className="preview-item">
            <p className="preview-label">VERSO</p>
            <div className="preview-thumb">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80"
                alt="Tract verso"
              />
            </div>
          </div>
        </div>

        <p className="print-tract-note">
          Imprimez ce tract et distribuez-le dans les boites aux lettres de
          votre immeuble ou de votre quartier. Chaque tract compte !
        </p>

        <div className="print-tract-actions">
          <button className="btn btn-solid" type="button">
            Telecharger le tract (PDF)
          </button>
          <p className="print-tract-subnote">
            Fichier PDF recto-verso pret a imprimer
          </p>
        </div>

        <div className="print-tract-divider" />

        <div className="print-tract-actions">
          <p className="print-tract-subtitle">Telecharger les images separement :</p>
          <div className="print-tract-buttons">
            <button className="btn btn-outline" type="button">Recto (JPG)</button>
            <button className="btn btn-outline" type="button">Verso (JPG)</button>
          </div>
        </div>

        <div className="print-tract-divider" />

        <div className="print-tract-tips">
          <h3>Conseils d'impression</h3>
          <div className="tips-grid">
            {tips.map((tip) => (
              <div className="tip-card" key={tip}>
                <span>✓</span>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="print-tract-cta">
        <div className="container print-tract-cta-inner">
          <h3>Pas d'imprimante ?</h3>
          <p>Faites un micro-don pour financer l'impression et la distribution.</p>
          <button className="btn btn-accent" type="button">Je fais un micro-don</button>
        </div>
      </div>

      <div className="print-tract-back">
        <a href="#" onClick={(event) => event.preventDefault()}>
          ← Retour aux actions
        </a>
      </div>
    </section>
  );
}
