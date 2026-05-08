export const API = import.meta.env.VITE_API_URL
  || "https://ufm-backend-production-3fd7.up.railway.app";

export const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "";
export const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN || "";

export async function getPrompt(token) {
  const res = await fetch(`${API}/api/config/prompt`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error("Impossible de charger le prompt.");
  return res.json(); // { prompt, updated_at }
}

export async function updatePrompt(token, prompt) {
  const res = await fetch(`${API}/api/config/prompt`, {
    method:  "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization:  `Bearer ${token}`
    },
    body: JSON.stringify({ prompt })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Erreur lors de la sauvegarde.");
  }
  return res.json();
}