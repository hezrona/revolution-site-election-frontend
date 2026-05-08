const BASE = import.meta.env.VITE_API_URL || "";

export const getFiches = (token) =>
  fetch(`${BASE}/api/fiches`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(r => r.json());

export const getFiche = (id, token) =>
  fetch(`${BASE}/api/fiches/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(r => r.json());

export const createFiche = (data, token) =>
  fetch(`${BASE}/api/fiches`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  }).then(r => r.json());

export async function createFicheFromDocx(formData, token) {
  const r = await fetch(`${BASE}/api/fiches/import`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  return r.json();
}

export const updateFiche = (id, data, token) =>
  fetch(`${BASE}/api/fiches/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  }).then(r => r.json());

export const deleteFiche = (id, token) =>
  fetch(`${BASE}/api/fiches/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  }).then(r => r.json());
