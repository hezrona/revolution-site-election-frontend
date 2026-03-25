import { useMemo, useState } from "react";
import { postDon } from "../../api/dons";

// ─── Constantes métier ────────────────────────────────────────────────────────
const AMOUNTS = [
  { value: 10_000_000, label: "10 000 000 Ar", badge: "Premier cercle" },
  { value: 1_000_000,  label: "1 000 000 Ar",  badge: "VIP" },
  { value: 100_000,    label: "100 000 Ar" },
  { value: 50_000,     label: "50 000 Ar" },
];

const PAYMENT_METHODS = [
  { id: "Mvola",  label: "Mvola",    icon: "🟠" },
  { id: "carte",  label: "Virement", icon: "💳" },
  { id: "cheque", label: "Chèque",   icon: "✉️" },
];

// ─── À personnaliser ──────────────────────────────────────────────────────────
// Mvola reste public. IBAN, BIC et adresse chèque sont retirés :
// l'admin les envoie par email après réception du don.
const YAS_NUMBER = "038 93 839 13";

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
      <div className="step-tag">Choisissez le montant de votre don</div>
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

// ─── Étape 2 : identité du donneur ───────────────────────────────────────────
function DonorForm({ donor, onChange }) {
  return (
    <div className="step-content">
      <div className="step-tag">Vos coordonnées</div>

      {["first_name", "last_name", "email"].map((field) => (
        <label key={field} className="amount-input">
          <span>
            {field === "first_name" ? "Prénom" :
             field === "last_name"  ? "Nom"    : "Email"}
          </span>
          <div className="amount-input-field">
            <input
              type={field === "email" ? "email" : "text"}
              placeholder={
                field === "first_name" ? "Jean" :
                field === "last_name"  ? "Dupont" : "jean@exemple.com"
              }
              value={donor[field]}
              onChange={(e) => onChange(field, e.target.value)}
            />
          </div>
        </label>
      ))}

      <p style={{ fontSize: "0.78rem", color: "rgba(31,63,91,0.6)", margin: 0 }}>
        Vos coordonnées nous permettent de vous envoyer les instructions
        de paiement et de confirmer la réception de votre don.
      </p>
    </div>
  );
}

// ─── Étape 3 : méthode de paiement ───────────────────────────────────────────
function PaymentMethodSelector({ finalAmount, selectedMethod, onSelectMethod }) {
  return (
    <div className="step-content">
      <div className="step-tag">Choisissez votre mode de paiement</div>
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

// ─── Étape 4 : instructions ───────────────────────────────────────────────────
// IBAN, BIC et adresse chèque sont retirés volontairement.
// Pour Mvola : le numéro Yas reste public, c'est un numéro de téléphone normal.
// Pour virement et chèque : l'admin envoie les coordonnées par email après réception.
function PaymentInstructions({ paymentMethod, finalAmount, donor, onBack, onConfirm, submitting, error }) {
  const method = PAYMENT_METHODS.find((m) => m.id === paymentMethod);

  return (
    <div className="step-content">
      <div className="step-tag">
        {method?.icon} {method?.label} — {formatAriary(finalAmount)}
      </div>

      {/* Mvola : numéro public */}
      {paymentMethod === "Mvola" && (
        <>
          <div className="donate-value-block">
            <div>
              <p className="donate-value-label">Numéro Yas</p>
              <p className="donate-value-text">{YAS_NUMBER}</p>
            </div>
            <CopyButton value={YAS_NUMBER} />
          </div>
          <ol className="donate-steps-list">
            <li>Ouvrez Yas&moi ou composez le <strong>#144#</strong>.</li>
            <li>Sélectionnez <strong>« Transfert d'argent »</strong> et entrez le numéro ci-dessus.</li>
            <li>Saisissez <strong>{formatAriary(finalAmount)}</strong> et indiquez <strong>« DON UFM »</strong> en motif.</li>
            <li>Confirmez avec votre code PIN et conservez le SMS.</li>
          </ol>
        </>
      )}

      {/* Virement : coordonnées envoyées par email */}
      {paymentMethod === "carte" && (
        <div className="donate-value-block">
          <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--color-navy)", lineHeight: 1.6 }}>
            Après confirmation, nous vous enverrons l'IBAN et le BIC à l'adresse{" "}
            <strong>{donor.email}</strong> afin que vous puissiez effectuer le virement.
          </p>
        </div>
      )}

      {/* Chèque : adresse envoyée par email */}
      {paymentMethod === "cheque" && (
        <div className="donate-value-block">
          <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--color-navy)", lineHeight: 1.6 }}>
            Après confirmation, nous vous enverrons notre adresse postale à{" "}
            <strong>{donor.email}</strong> pour l'envoi de votre chèque.
          </p>
        </div>
      )}

      {error && (
        <p style={{ color: "#dc2626", fontSize: "0.82rem", margin: 0 }}>{error}</p>
      )}

      <div className="step-actions">
        <button className="btn btn-outline" type="button" onClick={onBack} disabled={submitting}>
          ← Retour
        </button>
        <button className="btn btn-accent" type="button" onClick={onConfirm} disabled={submitting}>
          {submitting ? "Envoi…" : "J'ai envoyé mon don ✓"}
        </button>
      </div>
    </div>
  );
}

// ─── Étape 5 : confirmation ───────────────────────────────────────────────────
function ConfirmationStep({ finalAmount, paymentMethod, donor }) {
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
        {paymentMethod === "Mvola"
          ? "Notre équipe vérifiera la réception de votre don et vous contactera si nécessaire."
          : `Nous vous enverrons les instructions à ${donor.email} très prochainement.`}
        {" "}Merci de soutenir l'UFM et les Français de Madagascar.
      </p>
      <a href="#top" className="donate-btn-home">← Retour à l'accueil</a>
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────
export default function DonateSteps() {
  const [currentStep, setCurrentStep]       = useState(1);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount]     = useState("");
  const [donor, setDonor]                   = useState({ first_name: "", last_name: "", email: "" });
  const [paymentMethod, setPaymentMethod]   = useState(null);
  const [submitting, setSubmitting]         = useState(false);
  const [submitError, setSubmitError]       = useState(null);

  const finalAmount = useMemo(() => {
    const numeric = Number(customAmount);
    return numeric > 0 ? numeric : selectedAmount;
  }, [customAmount, selectedAmount]);

  const isStep1Complete = Boolean(finalAmount && finalAmount > 0);

  const isDonorComplete =
    donor.first_name.trim() &&
    donor.last_name.trim()  &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donor.email);

  const isStep3Complete = Boolean(paymentMethod);

  function handleSelectAmount(value) {
    setSelectedAmount(value);
    setCustomAmount("");
  }

  async function handleConfirm() {
    setSubmitting(true);
    setSubmitError(null);
    try {
      await postDon({
        first_name:     donor.first_name.trim(),
        last_name:      donor.last_name.trim(),
        email:          donor.email.trim(),
        amount:         finalAmount,
        payment_method: paymentMethod,
      });
      setCurrentStep(5);
    } catch (err) {
      setSubmitError(err.message || "Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  }

  // Stepper visuel : 4 étapes (la 5e est la confirmation, pas dans le stepper)
  const STEPS = [1, 2, 3, 4];

  return (
    <section className="donate-steps">
      <div className="donate-card">

        {/* Stepper — masqué sur la confirmation */}
        {currentStep < 5 && (
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
        )}

        {/* Étape 1 — Montant */}
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

        {/* Étape 2 — Identité */}
        {currentStep === 2 && (
          <>
            <DonorForm
              donor={donor}
              onChange={(f, v) => setDonor((p) => ({ ...p, [f]: v }))}
            />
            <div className="step-actions">
              <button className="btn btn-outline" type="button" onClick={() => setCurrentStep(1)}>
                ← Retour
              </button>
              <button
                className="btn btn-accent"
                type="button"
                disabled={!isDonorComplete}
                onClick={() => setCurrentStep(3)}
              >
                Continuer →
              </button>
            </div>
          </>
        )}

        {/* Étape 3 — Mode de paiement */}
        {currentStep === 3 && (
          <>
            <PaymentMethodSelector
              finalAmount={finalAmount}
              selectedMethod={paymentMethod}
              onSelectMethod={setPaymentMethod}
            />
            <div className="step-actions">
              <button className="btn btn-outline" type="button" onClick={() => setCurrentStep(2)}>
                ← Retour
              </button>
              <button
                className="btn btn-accent"
                type="button"
                disabled={!isStep3Complete}
                onClick={() => setCurrentStep(4)}
              >
                Continuer →
              </button>
            </div>
          </>
        )}

        {/* Étape 4 — Instructions + soumission API */}
        {currentStep === 4 && (
          <PaymentInstructions
            paymentMethod={paymentMethod}
            finalAmount={finalAmount}
            donor={donor}
            onBack={() => setCurrentStep(3)}
            onConfirm={handleConfirm}
            submitting={submitting}
            error={submitError}
          />
        )}

        {/* Étape 5 — Confirmation */}
        {currentStep === 5 && (
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