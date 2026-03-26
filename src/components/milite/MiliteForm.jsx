import { useState } from "react";
import { postMilite } from "../../api/campaign";
import { Link } from "react-router-dom";

const villes = [
  "Antananarivo",
  "Tamatave",
  "Mahajanga",
  "Toliara",
  "Fianarantsoa",
  "Antsiranana",
  "Autres",
];

const ACTION_URL = "https://script.google.com/macros/s/AKfycbxWNaYl4eEt7tPGVbWGOXoEUYMlUZ1zyzZlIk3YZod5nQBJN6NbRz15j9oAII0wbLde/exec";

export default function MiliteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [firstName, setFirstName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const data = new FormData(event.currentTarget);
    const payload = Object.fromEntries(data.entries());

    setFirstName(payload.firstName || "");

    try {
      await postMilite(payload);
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
      <section className="milite-form">
        <div className="container milite-form-inner" style={{ textAlign: "center", gap: "20px", display: "grid" }}>
          <div style={{ fontSize: "3rem" }}>🎉</div>
          <h2 style={{ color: "var(--color-navy)", margin: 0, fontFamily: "var(--font-display)", fontSize: "1.8rem" }}>
            Bienvenue dans l'équipe{firstName ? `, ${firstName}` : ""} !
          </h2>
          <div className="milite-form-box" style={{ marginBottom: 0 }}>
            Merci de rejoindre notre campagne. Un membre de l'équipe vous contactera très prochainement pour vous donner les prochaines étapes.
          </div>
          <ul style={{ textAlign: "left", color: "var(--color-navy)", display: "grid", gap: "10px", padding: "0 0 0 18px", margin: 0 }}>
            <li> Restez disponible — nous vous appelons sous 48h</li>
            <li> Rejoignez notre groupe WhatsApp de votre ville</li>
            <li> Consultez le calendrier des actions à venir</li>
          </ul>
          <Link
            to="/"
            className="milite-btn"
            style={{ display: "block", textDecoration: "none", textAlign: "center" }}
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </section>
    );
  }

  // ── Formulaire ─────────────────────────────────────────────────────────────
  return (
    <section className="milite-form">
      <div className="container milite-form-inner">
        <div className="milite-form-box">
          Rejoignez nos équipes sur le terrain pour faire campagne et convaincre les Français de Madagascar !
        </div>
        <form className="milite-action-form" onSubmit={handleSubmit}>
          <div className="milite-form-grid">
            <label>
              Prénom
              <input type="text" name="firstName" required />
            </label>
            <label>
              Nom
              <input type="text" name="lastName" required />
            </label>
            <label>
              E-mail
              <input type="email" name="email" required />
            </label>
            <label>
              Téléphone
              <input type="tel" name="phone" placeholder="034 XX XXX XX" />
            </label>
          </div>
          <label>
            Ville
            <select name="ville" required>
              <option value="">Sélectionnez votre ville</option>
              {villes.map((v) => (
                <option value={v} key={v}>{v}</option>
              ))}
            </select>
          </label>

          {error && (
            <p style={{ color: "red", fontWeight: 600, margin: 0 }}>{error}</p>
          )}

          <button className="milite-btn" type="submit" disabled={loading}>
            {loading ? "Envoi en cours..." : "Je rejoins l'équipe"}
          </button>
        </form>
      </div>
    </section>
  );
}