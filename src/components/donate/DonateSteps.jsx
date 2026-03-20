import { useMemo, useState } from "react";

// ─── Constantes métier ────────────────────────────────────────────────────────
const AMOUNTS = [
  { value: 10_000_000, label: "10 000 000 Ar", badge: "Premier cercle" },
  { value: 1_000_000,  label: "1 000 000 Ar",  badge: "VIP" },
  { value: 100_000,    label: "100 000 Ar" },
  { value: 50_000,     label: "50 000 Ar" },
];

const PAYMENT_METHODS = [
  { id: "orange", label: "Orange Money",     icon: "🟠" },
  { id: "carte",  label: "Virement",         icon: "💳" },
  { id: "cheque", label: "Chèque",           icon: "✉️" },
];

// ─── À personnaliser ──────────────────────────────────────────────────────────
const ORANGE_NUMBER  = "034 XX XXX XX";
const IBAN           = "FR76 XXXX XXXX XXXX XXXX XXXX XXX";
const BIC            = "XXXXXXXX";
const CHEQUE_ADDRESS = [
  "UFM – Service Dons",
  "123 Avenue de l'Indépendance",
  "Antananarivo 101, Madagascar",
];

// ─── Helper ───────────────────────────────────────────────────────────────────
function formatAriary(value) {
  if (!value) return "--";
  return new Intl.NumberFormat("fr-MG").format(value) + " Ar";
}

// ─── Bouton copier ────────────────────────────────────────────────────────────
function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      type="button"
      className={`donate-copy-btn${copied ? " is-copied" : ""}`}
      onClick={handleCopy}
    >
      {copied ? "✓ Copié" : "Copier"}
    </button>
  );
}

// ─── Étape 1 : montant ────────────────────────────────────────────────────────
function AmountSelector({ selectedAmount, customAmount, onSelectAmount, onCustomChange }) {
  return (
    <div className="step-content">
      <div className="step-tag">
        Choisissez le montant de votre don
      </div>
      <div className="amount-grid">
        {AMOUNTS.map((amount) => (
          <button
            className={`amount-card${selectedAmount === amount.value ? " selected" : ""}`}
            type="button"
            key={amount.value}
            onClick={() => onSelectAmount(amount.value)}
          >
            {amount.badge && <span className="amount-badge">{amount.badge}</span>}
            <strong>{amount.label}</strong>
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
            min="0"
            onChange={(e) => onCustomChange(e.target.value)}
          />
          <span>Ar</span>
        </div>
      </label>
    </div>
  );
}

// ─── Étape 2 : méthode ────────────────────────────────────────────────────────
function PaymentMethodSelector({ finalAmount, selectedMethod, onSelectMethod }) {
  return (
    <div className="step-content">
      <div className="step-tag">
        Choisissez votre mode de paiement
      </div>
      <div className="donate-info highlight">
        <p>Montant de votre don</p>
        <h3>{formatAriary(finalAmount)}</h3>
      </div>
      <div className="payment-method-grid">
        {PAYMENT_METHODS.map((method) => (
          <button
            key={method.id}
            type="button"
            className={`payment-method-card${selectedMethod === method.id ? " selected" : ""}`}
            onClick={() => onSelectMethod(method.id)}
          >
            <span className="method-icon">{method.icon}</span>
            <span>{method.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Étape 3 : instructions ───────────────────────────────────────────────────
function PaymentInstructions({ paymentMethod, finalAmount, onBack, onConfirm }) {
  const method = PAYMENT_METHODS.find((m) => m.id === paymentMethod);

  return (
    <div className="step-content">
      <div className="step-tag">
        {method?.icon} {method?.label} — {formatAriary(finalAmount)}
      </div>

      {/* Orange Money */}
      {paymentMethod === "orange" && (
        <>
          <div className="donate-value-block">
            <div>
              <p className="donate-value-label">Numéro Orange Money</p>
              <p className="donate-value-text">{ORANGE_NUMBER}</p>
            </div>
            <CopyButton value={ORANGE_NUMBER} />
          </div>
          <ol className="donate-steps-list">
            <li>Ouvrez Orange Money ou composez le <strong>#144#</strong>.</li>
            <li>Sélectionnez <strong>« Transfert d'argent »</strong> et entrez le numéro ci-dessus.</li>
            <li>Saisissez <strong>{formatAriary(finalAmount)}</strong> et indiquez <strong>« DON UFM »</strong> en motif.</li>
            <li>Confirmez avec votre code PIN et conservez le SMS.</li>
          </ol>
        </>
      )}

      {/* Virement */}
      {paymentMethod === "carte" && (
        <>
          <div className="donate-value-block">
            <div>
              <p className="donate-value-label">IBAN</p>
              <p className="donate-value-text">{IBAN}</p>
            </div>
            <CopyButton value={IBAN} />
          </div>
          <div className="donate-value-block">
            <div>
              <p className="donate-value-label">BIC</p>
              <p className="donate-value-text">{BIC}</p>
            </div>
            <CopyButton value={BIC} />
          </div>
          <ol className="donate-steps-list">
            <li>Connectez-vous à votre banque en ligne ou rendez-vous en agence.</li>
            <li>Créez un bénéficiaire avec l'IBAN ci-dessus.</li>
            <li>Effectuez un virement de <strong>{formatAriary(finalAmount)}</strong> avec le libellé <strong>« DON UFM »</strong>.</li>
            <li>Conservez votre justificatif de virement.</li>
          </ol>
        </>
      )}

      {/* Chèque */}
      {paymentMethod === "cheque" && (
        <>
          <div className="donate-address-block">
            <p className="donate-value-label">Adresse d'envoi</p>
            {CHEQUE_ADDRESS.map((line, i) => (
              <p key={i} className="donate-address-line">{line}</p>
            ))}
          </div>
          <ol className="donate-steps-list">
            <li>Rédigez un chèque de <strong>{formatAriary(finalAmount)}</strong> à l'ordre de <strong>« UFM »</strong>.</li>
            <li>Inscrivez vos nom et coordonnées au dos.</li>
            <li>Envoyez l'enveloppe à l'adresse ci-dessus.</li>
            <li>Comptez 5 à 10 jours ouvrés pour la réception.</li>
          </ol>
        </>
      )}

      <div className="step-actions">
        <button className="btn btn-outline" type="button" onClick={onBack}>
          ← Retour
        </button>
        <button className="btn btn-accent" type="button" onClick={onConfirm}>
          J'ai envoyé mon don ✓
        </button>
      </div>
    </div>
  );
}

// ─── Confirmation ─────────────────────────────────────────────────────────────
function ConfirmationStep({ finalAmount, paymentMethod }) {
  const method = PAYMENT_METHODS.find((m) => m.id === paymentMethod);
  return (
    <div className="step-content" style={{ textAlign: "center" }}>
      <div style={{ fontSize: "3rem" }}>🎉</div>
      <div className="step-tag">Merci pour votre soutien !</div>
      <div className="donate-info highlight">
        <p>Don confirmé</p>
        <h3>{formatAriary(finalAmount)}</h3>
        <p>via {method?.icon} {method?.label}</p>
      </div>
      <p style={{ color: "var(--color-navy)", fontSize: "0.93rem", lineHeight: 1.6, margin: 0 }}>
        Notre équipe vérifiera la réception de votre don et vous contactera si nécessaire.
        Merci de soutenir l'UFM et les Français de Madagascar.
      </p>
      <a href="#top" className="donate-btn-home">← Retour à l'accueil</a>
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────
export default function DonateSteps() {
  const [currentStep, setCurrentStep]     = useState(1);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount]     = useState("");
  const [paymentMethod, setPaymentMethod]   = useState(null);

  const finalAmount = useMemo(() => {
    const numeric = Number(customAmount);
    return numeric > 0 ? numeric : selectedAmount;
  }, [customAmount, selectedAmount]);

  const isStep1Complete = Boolean(finalAmount && finalAmount > 0);
  const isStep2Complete = Boolean(paymentMethod);

  function handleSelectAmount(value) {
    setSelectedAmount(value);
    setCustomAmount("");
  }

  const STEPS = [1, 2, 3];

  return (
    <section className="donate-steps">
      <div className="container donate-card">

        {/* Stepper */}
        <div className="stepper">
          {STEPS.map((step, i) => (
            <span key={step} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span className={`step${currentStep === step ? " active" : currentStep > step ? " done" : ""}`}>
                {currentStep > step ? "✓" : step}
              </span>
              {i < STEPS.length - 1 && <span className="step-line" />}
            </span>
          ))}
        </div>

        {/* Étape 1 */}
        {currentStep === 1 && (
          <>
            <AmountSelector
              selectedAmount={selectedAmount}
              customAmount={customAmount}
              onSelectAmount={handleSelectAmount}
              onCustomChange={(val) => { setCustomAmount(val); setSelectedAmount(null); }}
            />
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
          </>
        )}

        {/* Étape 2 */}
        {currentStep === 2 && (
          <>
            <PaymentMethodSelector
              finalAmount={finalAmount}
              selectedMethod={paymentMethod}
              onSelectMethod={setPaymentMethod}
            />
            <div className="step-actions">
              <button className="btn btn-outline" type="button" onClick={() => setCurrentStep(1)}>
                ← Retour
              </button>
              <button
                className="btn btn-accent"
                type="button"
                disabled={!isStep2Complete}
                onClick={() => setCurrentStep(3)}
              >
                Continuer →
              </button>
            </div>
          </>
        )}

        {/* Étape 3 */}
        {currentStep === 3 && (
          <PaymentInstructions
            paymentMethod={paymentMethod}
            finalAmount={finalAmount}
            onBack={() => setCurrentStep(2)}
            onConfirm={() => setCurrentStep(4)}
          />
        )}

        {/* Étape 4 */}
        {currentStep === 4 && (
          <ConfirmationStep
            finalAmount={finalAmount}
            paymentMethod={paymentMethod}
          />
        )}

      </div>
    </section>
  );
}