import { useState } from "react";
import { postRecommendation } from "../../api/campaign";
import { Link } from "react-router-dom";


const concerns = [
  "Santé",
  "Sécurité physique",
  "Sécurité patrimoniale",
  "Famille & Education",
  "Démarches consulaires",
  "Entrepreneurs",
  "Vie quotidienne",
];

const ACTION_URL = "https://script.google.com/macros/s/AKfycbxWNaYl4eEt7tPGVbWGOXoEUYMlUZ1zyzZlIk3YZod5nQBJN6NbRz15j9oAII0wbLde/exec";

export default function TakeActionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [senderFirstName, setSenderFirstName] = useState("");
  const [contactFirstName, setContactFirstName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const data = new FormData(event.currentTarget);
    const payload = Object.fromEntries(data.entries());

    setSenderFirstName(payload.senderFirstName || "");
    setContactFirstName(payload.contactFirstName || "");

    try {
      await postRecommendation(payload);
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ── Écran de confirmation ──────────────────────────────────────────────────
  if (submitted) {
    return (
      <section className="take-action-form">
        <div className="take-action-form-inner" style={{ textAlign: "center", display: "grid", gap: "20px" }}>
          <div style={{ fontSize: "3rem" }}>🤝</div>
          <h2 style={{ color: "var(--color-navy)", margin: 0, fontFamily: "var(--font-display)", fontSize: "1.8rem" }}>
            Merci{senderFirstName ? `, ${senderFirstName}` : ""} !
          </h2>
          <div
            style={{
              background: "var(--color-navy)",
              color: "var(--color-white)",
              borderRadius: "16px",
              padding: "20px 24px",
              fontWeight: 700,
              lineHeight: 1.6,
            }}
          >
            Votre recommandation{contactFirstName ? ` pour ${contactFirstName}` : ""} a bien été transmise à notre équipe. Nous prendrons contact avec cette personne dans les meilleurs délais.
          </div>
          <ul style={{ textAlign: "left", color: "var(--color-navy)", display: "grid", gap: "10px", padding: "0 0 0 18px", margin: 0 }}>
            <li>Notre équipe contacte votre proche sous 48h</li>
            <li>Approche discrète et bienveillante, sans insistance</li>
            <li>Vous pouvez recommander d'autres contacts à tout moment</li>
          </ul>
          
          <Link
            to="/"
            style={{
              background: "var(--color-mustard)",
              color: "var(--color-navy)",
              border: "none",
              borderRadius: "999px",
              padding: "16px 24px",
              fontSize: "1.05rem",
              fontWeight: 700,
              fontFamily: "var(--font-display)",
              cursor: "pointer",
              textDecoration: "none",
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(244, 193, 68, 0.4)",
            }}
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </section>
    );
  }

  // ── Formulaire ─────────────────────────────────────────────────────────────
  return (
    <section className="take-action-form">
      <div className="take-action-form-inner">
        <h2>Personne à recommander</h2>
        <form className="action-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              Prénom
              <input type="text" name="contactFirstName" />
            </label>
            <label>
              Nom
              <input type="text" name="contactLastName" />
            </label>
            <label>
              Téléphone
              <input type="tel" name="contactPhone" placeholder="034 XX XXX XX" />
            </label>
            <label>
              Ville de résidence
              <input type="text" name="contactCity" placeholder="Antananarivo, Tamatave..." />
            </label>
          </div>
          <label>
            Sujet de préoccupation principal
            <select name="contactConcern">
              <option value="">Sélectionnez un sujet</option>
              {concerns.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <h3>Vos coordonnées</h3>
          <div className="form-grid">
            <label>
              Votre prénom
              <input type="text" name="senderFirstName" />
            </label>
            <label>
              Votre nom
              <input type="text" name="senderLastName" />
            </label>
            <label>
              Votre téléphone
              <input type="tel" name="senderPhone" />
            </label>
            <label>
              Votre email
              <input type="email" name="senderEmail" />
            </label>
          </div>

          {error && (
            <p style={{ color: "red", fontWeight: 600, margin: 0 }}>{error}</p>
          )}

          <button className="btn btn-solid" type="submit" disabled={loading}>
            {loading ? "Envoi en cours..." : "Je recommande ce contact"}
          </button>
          <p style={{ fontSize: "0.82rem", color: "rgba(31,63,91,0.7)", textAlign: "center", margin: 0 }}>
            Vos données sont traitées conformément au RGPD et ne seront jamais cédées à des tiers.
          </p>
        </form>
      </div>
    </section>
  );
}