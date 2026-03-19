import { API } from "./config";
export async function getThreads() {
  const res = await fetch(`${API}/api/threads`);
  return res.json();
}

export async function getThread(id) {
  const res = await fetch(`${API}/api/threads/${id}`);
  return res.json();
}

export async function createThread({ title, author, cat, body }) {
  const res = await fetch(`${API}/api/threads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, author, cat, body }),
  });
  return res.json();
}

export async function createPost(threadId, { author, body }) {
  const res = await fetch(`${API}/api/threads/${threadId}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ author, body }),
  });
  return res.json();
}