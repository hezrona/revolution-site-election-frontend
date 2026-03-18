import { useMemo, useState } from "react";

// ─── Constantes métier ────────────────────────────────────────────────────────
const AMOUNTS = [
  { value: 10_000_000, label: "10 000 000 Ar", badge: "Premier cercle" },
  { value: 1_000_000,  label: "1 000 000 Ar",  badge: "VIP" },
  { value: 100_000,    label: "100 000 Ar" },
  { value: 50_000,     label: "50 000 Ar" },
];

const PAYMENT_METHODS = [
  { id: "card",        label: "Carte bancaire",  icon: "💳" },
  { id: "orange",      label: "Orange Money",    icon: "🟠" },
  { id: "cheque",      label: "Chèque",          icon: "📄" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatAriary(value) {
  if (!value) return "--";
  return new Intl.NumberFormat("fr-MG").format(value) + " Ar";
}

// ─── Sous-composants étape 1 ──────────────────────────────────────────────────
function AmountSelector({ selectedAmount, customAmount, onSelectAmount, onCustomChange }) {
  return (
    <div className="step-content">
      <div className="step-tag">1. Montant du don</div>

      <div className="amount-grid">
        {AMOUNTS.map((amount) => (
          <button
            className={`amount-card ${selectedAmount === amount.value ? "selected" : ""}`}
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

// ─── Sous-composant étape 2 : choix méthode ───────────────────────────────────
function PaymentMethodSelector({ finalAmount, selectedMethod, onSelectMethod }) {
  return (
    <div className="step-content">
      <div className="step-tag">2. Mode de paiement</div>

      <div className="donate-info highlight">
        <p>Montant de votre don</p>
        <h3>{formatAriary(finalAmount)}</h3>
      </div>

      <div className="payment-method-grid">
        {PAYMENT_METHODS.map((method) => (
          <button
            key={method.id}
            type="button"
            className={`payment-method-card ${selectedMethod === method.id ? "selected" : ""}`}
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

// ─── Champs communs identité ──────────────────────────────────────────────────
function IdentityFields({ donor, onChange }) {
  return (
    <>
      <div className="payment-grid">
        <label>
          Prénom
          <input
            type="text"
            placeholder="Votre prénom"
            value={donor.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            required
          />
        </label>
        <label>
          Nom
          <input
            type="text"
            placeholder="Votre nom"
            value={donor.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            required
          />
        </label>
      </div>
      <label>
        Email
        <input
          type="email"
          placeholder="vous@email.fr"
          value={donor.email}
          onChange={(e) => onChange("email", e.target.value)}
          required
        />
      </label>
    </>
  );
}

// ─── Formulaires par méthode ──────────────────────────────────────────────────
function CardForm({ donor, onDonorChange }) {
  return (
    <>
      <IdentityFields donor={donor} onChange={onDonorChange} />
      <label>
        Nom sur la carte
        <input type="text" placeholder="Nom complet" required />
      </label>
      <label>
        Numéro de carte
        <input type="text" placeholder="0000 0000 0000 0000" maxLength={19} required />
      </label>
      <div className="payment-grid">
        <label>
          Expiration
          <input type="text" placeholder="MM/AA" maxLength={5} required />
        </label>
        <label>
          CVC
          <input type="text" placeholder="123" maxLength={3} required />
        </label>
      </div>
      <p className="payment-note">🔒 Paiement sécurisé</p>
    </>
  );
}

function OrangeMoneyForm({ donor, onDonorChange }) {
  return (
    <>
      <IdentityFields donor={donor} onChange={onDonorChange} />
      <label>
        Numéro Orange Money
        <input type="tel" placeholder="03X XX XXX XX" required />
      </label>
      <p className="payment-note">
        Un code de confirmation vous sera envoyé par SMS.
      </p>
    </>
  );
}

function ChequeForm({ donor, onDonorChange }) {
  return (
    <>
      <IdentityFields donor={donor} onChange={onDonorChange} />
      <div className="donate-info">
        <p>Veuillez libeller votre chèque à l'ordre de <strong>UFM</strong> et l'envoyer à :</p>
        <address style={{ marginTop: "10px", fontStyle: "normal", lineHeight: 1.8 }}>
          UFM – Service Dons<br />
          123 Avenue de l'Indépendance<br />
          Antananarivo 101, Madagascar
        </address>
      </div>
    </>
  );
}

// ─── Étape 3 : paiement ───────────────────────────────────────────────────────
function PaymentForm({ paymentMethod, finalAmount, donor, onDonorChange, onBack, onSubmit }) {
  const methodLabel = PAYMENT_METHODS.find((m) => m.id === paymentMethod)?.label;

  return (
    <div className="step-content">
      <div className="step-tag">3. Paiement — {methodLabel}</div>

      <form
        className="payment-form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        {paymentMethod === "card"   && <CardForm       donor={donor} onDonorChange={onDonorChange} />}
        {paymentMethod === "orange" && <OrangeMoneyForm donor={donor} onDonorChange={onDonorChange} />}
        {paymentMethod === "cheque" && <ChequeForm      donor={donor} onDonorChange={onDonorChange} />}

        <div className="step-actions">
          <button className="btn btn-outline" type="button" onClick={onBack}>
            ← Retour
          </button>
          <button className="btn btn-solid" type="submit">
            {paymentMethod === "cheque" ? "Confirmer l'envoi" : `Payer ${formatAriary(finalAmount)}`}
          </button>
        </div>
      </form>
    </div>
  );
}

// ─── Confirmation ─────────────────────────────────────────────────────────────
function ConfirmationStep({ finalAmount, paymentMethod, donor }) {
  const methodLabel = PAYMENT_METHODS.find((m) => m.id === paymentMethod)?.label;
  return (
    <div className="step-content" style={{ textAlign: "center" }}>
      <div className="step-tag" style={{ margin: "0 auto" }}>✅ Don enregistré</div>
      <div className="donate-info highlight">
        <p>Merci {donor.firstName} pour votre générosité !</p>
        <h3>{formatAriary(finalAmount)}</h3>
        <p>via {methodLabel}</p>
        <p style={{ marginTop: "8px", fontSize: "0.9rem" }}>
          Un email de confirmation a été envoyé à <strong>{donor.email}</strong>.
        </p>
      </div>
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────
export default function DonateSteps() {
  const [currentStep, setCurrentStep] = useState(1);

  // Étape 1
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount]     = useState("");

  // Étape 2
  const [paymentMethod, setPaymentMethod] = useState(null);

  // Étape 3 – données donateur (prêt pour le backend)
  const [donor, setDonor] = useState({ firstName: "", lastName: "", email: "" });

  const finalAmount = useMemo(() => {
    const numeric = Number(customAmount);
    return numeric > 0 ? numeric : selectedAmount;
  }, [customAmount, selectedAmount]);

  const isStep1Complete = Boolean(finalAmount && finalAmount > 0);
  const isStep2Complete = Boolean(paymentMethod);

  function handleDonorChange(field, value) {
    setDonor((prev) => ({ ...prev, [field]: value }));
  }

  function handleSelectAmount(value) {
    setSelectedAmount(value);
    setCustomAmount("");
  }

  /**
   * handleSubmit — point d'intégration backend.
   * Remplacer le console.log par un appel fetch/axios vers l'API.
   *
   * Payload attendu :
   * {
   *   amount: number,
   *   paymentMethod: "card" | "orange" | "cheque",
   *   donor: { firstName, lastName, email }
   * }
   */
  function handleSubmit() {
    const payload = {
      amount: finalAmount,
      paymentMethod,
      donor,
    };
    // TODO: await api.post("/donations", payload)
    console.info("[DonateSteps] payload prêt pour le backend :", payload);
    setCurrentStep(4);
  }

  const STEPS = [1, 2, 3];

  return (
    <section className="donate-steps">
      <div className="container donate-card">

        {/* ── Stepper ── */}
        <div className="stepper">
          {STEPS.map((step, i) => (
            <span key={step} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                className={`step ${
                  currentStep === step ? "active" : currentStep > step ? "done" : ""
                }`}
              >
                {currentStep > step ? "✓" : step}
              </span>
              {i < STEPS.length - 1 && <span className="step-line" />}
            </span>
          ))}
        </div>

        {/* ── Étape 1 : montant ── */}
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

        {/* ── Étape 2 : méthode ── */}
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

        {/* ── Étape 3 : formulaire paiement ── */}
        {currentStep === 3 && (
          <PaymentForm
            paymentMethod={paymentMethod}
            finalAmount={finalAmount}
            donor={donor}
            onDonorChange={handleDonorChange}
            onBack={() => setCurrentStep(2)}
            onSubmit={handleSubmit}
          />
        )}

        {/* ── Étape 4 : confirmation ── */}
        {currentStep === 4 && (
          <ConfirmationStep
            finalAmount={finalAmount}
            paymentMethod={paymentMethod}
            donor={donor}
          />
        )}
      </div>
    </section>
  );
}