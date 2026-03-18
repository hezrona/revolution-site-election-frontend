import { useState } from "react";
import { login } from "../../api/auth.js";
import "./admin.css";

export default function AdminLogin({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async () => {
    if (!username.trim() || !password.trim()) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    setLoading(true);
    setError("");
    const data = await login(username, password);
    setLoading(false);

    if (data.accessToken) {
      onLoginSuccess(data.accessToken);
    } else {
      setError(data.error || "Identifiants incorrects.");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-box">
        <div className="admin-login-logo">🔐</div>
        <h1>Administration UFM</h1>
        <p>Connectez-vous pour gérer le forum</p>

        {error && (
          <div className="admin-error">{error}</div>
        )}

        <div className="admin-form-row">
          <label>Identifiant</label>
          <input
            type="text"
            placeholder="admin"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
        </div>

        <div className="admin-form-row">
          <label>Mot de passe</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
        </div>

        <button
          className="admin-btn-login"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Connexion…" : "Se connecter"}
        </button>
      </div>
    </div>
  );
}