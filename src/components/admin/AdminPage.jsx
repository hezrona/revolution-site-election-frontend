import { useState, useEffect, useCallback } from "react";
import AdminLogin from "./AdminLogin.jsx";
import AdminDashboard from "./AdminDashboard.jsx";
import { refreshAccessToken } from "../../api/auth.js";

export default function AdminPage() {
  const [token, setToken] = useState(
    sessionStorage.getItem("admin_token") || null
  );

  const handleLoginSuccess = (accessToken) => {
    sessionStorage.setItem("admin_token", accessToken);
    setToken(accessToken);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_token");
    setToken(null);
  };

  // Rafraîchit l'access token toutes les 14 minutes
  useEffect(() => {
    if (!token) return;

    const interval = setInterval(async () => {
      const newToken = await refreshAccessToken();
      if (newToken) {
        sessionStorage.setItem("admin_token", newToken);
        setToken(newToken);
      } else {
        alert("Votre session a expiré. Veuillez vous reconnecter.");
        handleLogout();
      }
    }, 14 * 60 * 1000);

    return () => clearInterval(interval);
  }, [token]);

  if (!token) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return <AdminDashboard token={token} onLogout={handleLogout} />;
}