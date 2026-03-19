const API = "https://ufm-backend-production.up.railway.app";

export async function postRecommendation(data) {
  const res = await fetch(`${API}/api/campaign/recommend`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const json = await res.json().catch(() => ({}));
    throw new Error(json.error || "Erreur serveur.");
  }
  return res.json();
}

export async function postMilite(data) {
  const res = await fetch(`${API}/api/campaign/milite`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const json = await res.json().catch(() => ({}));
    throw new Error(json.error || "Erreur serveur.");
  }
  return res.json();
}

export async function getMilitants(token) {
  const res = await fetch(`${API}/api/campaign/militants`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function deleteMilitant(id, token) {
  const res = await fetch(`${API}/api/campaign/militants/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function getRecommendations(token) {
  const res = await fetch(`${API}/api/campaign/recommendations`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function deleteRecommendation(id, token) {
  const res = await fetch(`${API}/api/campaign/recommendations/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}