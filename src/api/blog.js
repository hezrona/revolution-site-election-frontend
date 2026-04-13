const BASE = "https://ufm-backend-production-3fd7.up.railway.app";

export const getArticles = () =>
  fetch(`${BASE}/api/blog/articles`).then(r => r.json());

export const getArticle = (id) =>
  fetch(`${BASE}/api/blog/articles/${id}`).then(r => r.json());

export const createArticle = (data, token) =>
  fetch(`${BASE}/api/blog/articles`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  }).then(r => r.json());

export const updateArticle = (id, data, token) =>
  fetch(`${BASE}/api/blog/articles/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  }).then(r => r.json());

export const deleteArticle = (id, token) =>
  fetch(`${BASE}/api/blog/articles/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  }).then(r => r.json());