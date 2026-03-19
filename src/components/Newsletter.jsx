import { useState } from "react";

import { API } from "../api/config";

export default function Newsletter({ content }) {
  const title       = content?.title       || "Rester informé";
  const buttonLabel = content?.buttonLabel || "S'inscrire";
  const placeholder = content?.placeholder || "Votre email";

  const [email,   setEmail]   = useState("");
  const [status,  setStatus]  = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setStatus(null);
    setMessage("");
    try {
      const res  = await fetch(`${API}/api/newsletter/subscribe`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message || "Inscription confirmée !");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Une erreur est survenue.");
      }
    } catch {
      setStatus("error");
      setMessage("Impossible de contacter le serveur.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="newsletter" id="cities">
      <div className="container newsletter-inner">
        <h2>{title}</h2>
        {status === "success" ? (
          <p className="newsletter-success">{message}</p>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder={placeholder}
              aria-label="Adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
            <button className="btn btn-accent" type="submit" disabled={loading}>
              {loading ? "..." : buttonLabel}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="newsletter-error">{message}</p>
        )}
      </div>
    </section>
  );
}