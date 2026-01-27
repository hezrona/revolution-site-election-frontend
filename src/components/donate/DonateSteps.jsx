import { useMemo, useState } from "react";

const amounts = [
  { value: 7500, note: "soit 2550 € apres impot", badge: "Premier cercle" },
  { value: 1500, note: "soit 510 € apres impot", badge: "VIP" },
  { value: 150, note: "soit 51 € apres impot" },
  { value: 80, note: "soit 27 € apres impot" },
];

function formatEuro(value) {
  if (!value) {
    return "--";
  }
  return new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export default function DonateSteps() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const finalAmount = useMemo(() => {
    const numericCustom = Number(customAmount);
    if (numericCustom > 0) {
      return numericCustom;
    }
    return selectedAmount;
  }, [customAmount, selectedAmount]);

  const afterTaxAmount = useMemo(() => {
    if (!finalAmount) {
      return null;
    }
    return finalAmount * 0.34;
  }, [finalAmount]);

  const isStep1Complete = Boolean(finalAmount && finalAmount > 0 && termsAccepted);

  return (
    <section className="donate-steps">
      <div className="container donate-card">
        <div className="stepper">
          <span
            className={`step ${
              currentStep === 1 ? "active" : currentStep > 1 ? "done" : ""
            }`}
          >
            1
          </span>
          <span className="step-line" />
          <span
            className={`step ${
              currentStep === 2 ? "active" : currentStep > 2 ? "done" : ""
            }`}
          >
            2
          </span>
          <span className="step-line" />
          <span className={`step ${currentStep === 3 ? "active" : ""}`}>3</span>
        </div>

        {currentStep === 1 ? (
          <div className="step-content">
            <div className="step-tag">1. Montant du don</div>
            <div className="donate-info">
              <h3>Cercle des Ambassadeurs - A partir de 1 000 €</h3>
              <ul>
                <li>Deux soirees privees avec Sarah Knafo</li>
                <li>Acces prioritaire aux evenements</li>
              </ul>
            </div>
            <div className="amount-grid">
              {amounts.map((amount) => (
                <button
                  className={`amount-card ${
                    selectedAmount === amount.value ? "selected" : ""
                  }`}
                  type="button"
                  key={amount.value}
                  onClick={() => {
                    setSelectedAmount(amount.value);
                    setCustomAmount("");
                  }}
                >
                  {amount.badge ? (
                    <span className="amount-badge">{amount.badge}</span>
                  ) : null}
                  <strong>{amount.value} €</strong>
                  <span>{amount.note}</span>
                </button>
              ))}
            </div>
            <label className="amount-input">
              <span>Autre montant</span>
              <div className="amount-input-field">
                <input
                  type="number"
                  placeholder="Montant"
                  value={customAmount}
                  onChange={(event) => {
                    setCustomAmount(event.target.value);
                    setSelectedAmount(null);
                  }}
                />
                <span>€</span>
              </div>
            </label>
            <p className="tax-note">
              Cout reel apres reduction : {formatEuro(afterTaxAmount)} €
            </p>
            <label className="checkbox-row terms-row">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(event) => setTermsAccepted(event.target.checked)}
              />
              J'ai lu et j'accepte les{" "}
              <a href="#terms">CGU & Politique de confidentialite</a>.
            </label>
            <div className="step-actions">
              <button
                className="btn btn-accent"
                type="button"
                disabled={!isStep1Complete}
                onClick={() => setCurrentStep(2)}
              >
                Continuer →
              </button>
            </div>
          </div>
        ) : null}

        {currentStep === 2 ? (
          <div className="step-content">
            <div className="step-tag">2. Le saviez-vous ?</div>
            <div className="donate-info highlight">
              <p>Avec la reduction d'impot de 66%, votre don ne vous coutera que</p>
              <h3>{formatEuro(afterTaxAmount)} €</h3>
              <p>Pour un don de {finalAmount} €</p>
            </div>
            <div className="step-actions">
              <button
                className="btn btn-outline"
                type="button"
                onClick={() => setCurrentStep(1)}
              >
                ← Retour
              </button>
              <button
                className="btn btn-accent"
                type="button"
                onClick={() => setCurrentStep(3)}
              >
                Continuer →
              </button>
            </div>
          </div>
        ) : null}

        {currentStep === 3 ? (
          <div className="step-content">
            <div className="step-tag">3. Paiement</div>
            <form className="payment-form">
              <label>
                Nom sur la carte
                <input type="text" placeholder="Nom complet" />
              </label>
              <label>
                Numero de carte
                <input type="text" placeholder="0000 0000 0000 0000" />
              </label>
              <div className="payment-grid">
                <label>
                  Expiration
                  <input type="text" placeholder="MM/AA" />
                </label>
                <label>
                  CVC
                  <input type="text" placeholder="123" />
                </label>
              </div>
              <label>
                Email
                <input type="email" placeholder="vous@email.fr" />
              </label>
              <div className="step-actions">
                <button
                  className="btn btn-outline"
                  type="button"
                  onClick={() => setCurrentStep(2)}
                >
                  ← Retour
                </button>
                <button className="btn btn-solid" type="submit">
                  Payer par carte
                </button>
              </div>
              <p className="payment-note">Paiement securise par Stripe</p>
            </form>
          </div>
        ) : null}
      </div>
    </section>
  );
}
