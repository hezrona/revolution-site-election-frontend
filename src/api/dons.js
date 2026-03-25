import { API } from "./config";

export async function postDon(data) {
  const res = await fetch(`${API}/api/dons`, {
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

export async function getDons(token) {
  const res = await fetch(`${API}/api/dons`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function updateDonStatus(id, status, token) {
  const res = await fetch(`${API}/api/dons/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });
  return res.json();
}

export async function deleteDon(id, token) {
  const res = await fetch(`${API}/api/dons/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}