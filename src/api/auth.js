const API = "https://ufm-backend-production.up.railway.app";

export async function login(username, password) {
  const res = await fetch(`${API}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

export async function logout() {
  await fetch(`${API}/api/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
}

export async function deleteThread(id, token) {
  const res = await fetch(`${API}/api/threads/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function deletePost(id, token) {
  const res = await fetch(`${API}/api/posts/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}