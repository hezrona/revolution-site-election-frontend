import { useState } from "react";
import AdminLogin from "./AdminLogin.jsx";
import AdminDashboard from "./AdminDashboard.jsx";

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

  if (!token) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return <AdminDashboard token={token} onLogout={handleLogout} />;
}