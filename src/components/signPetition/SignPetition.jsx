import { useState } from "react";
import { Link } from "react-router-dom";
import "./signPetition.css";

export default function SignPetition() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    postalCode: "",
    newsletter: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const currentSignatures = 11672;
  const targetSignatures = 20000;
  const progressPercentage = (currentSignatures / targetSignatures) * 100;

  if (isSubmitted) {
    return (
      <section className="sign-petition">
        <div className="container">
          <div className="success-container">
            <div className="success-message">
              <h2>Succès !</h2>
              <div className="cloudflare-badge">
                <img src="/api/placeholder/120/40" alt="Cloudflare" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="sign-petition">
      <div className="container">
        <div className="petition-header">
          <h1>Je signe la pétition</h1>
          <p className="petition-subtitle">
            Rejoignez les Parisiens qui veulent changer Paris
          </p>
        </div>

        <div className="progress-section">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="progress-text">
            <span className="current-signatures">{currentSignatures.toLocaleString()} signatures</span>
            <span className="target-signatures">Objectif: {targetSignatures.toLocaleString()} signatures</span>
          </div>
        </div>

        <div className="petition-points">
          <div className="points-section stop-section">
            <h3 className="points-title">STOP!</h3>
            <ul className="points-list">
              <li className="point-item negative">
                <span className="point-icon">✕</span>
                <span>Point négatif 1</span>
              </li>
              <li className="point-item negative">
                <span className="point-icon">✕</span>
                <span>Point négatif 2</span>
              </li>
              <li className="point-item negative">
                <span className="point-icon">✕</span>
                <span>Point négatif 3</span>
              </li>
            </ul>
          </div>

          <div className="points-section yes-section">
            <h3 className="points-title">OUI!</h3>
            <ul className="points-list">
              <li className="point-item positive">
                <span className="point-icon">✓</span>
                <span>Point positif 1</span>
              </li>
              <li className="point-item positive">
                <span className="point-icon">✓</span>
                <span>Point positif 2</span>
              </li>
              <li className="point-item positive">
                <span className="point-icon">✓</span>
                <span>Point positif 3</span>
              </li>
            </ul>
          </div>
        </div>

        <form className="petition-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label className="form-field">
              <span>Prénom *</span>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </label>

            <label className="form-field">
              <span>Nom *</span>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </label>

            <label className="form-field">
              <span>E-mail *</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>

            <label className="form-field">
              <span>Code postal *</span>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>

          <label className="checkbox-field">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleInputChange}
            />
            <span>Je souhaite recevoir les actualités de la campagne par email</span>
          </label>

          <button type="submit" className="submit-btn">
            Je signe la pétition
          </button>

          <p className="privacy-note">
            Vos données sont protégées et ne seront jamais partagées avec des tiers.
          </p>
        </form>

        <div className="back-link">
          <Link to="/">← Retour à l'accueil</Link>
        </div>
      </div>
    </section>
  );
}