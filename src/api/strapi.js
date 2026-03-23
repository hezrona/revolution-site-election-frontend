import { STRAPI_URL, STRAPI_TOKEN } from "./config"; 

if (!STRAPI_URL) {
  console.warn("VITE_STRAPI_URL is not set. Strapi fetches will fail.");
}

export async function fetchStrapi(path) {
  const res = await fetch(`${STRAPI_URL}${path}`, {
    headers: {
      ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Strapi ${res.status}: ${text}`);
  }

  return res.json();
}

export function getStrapiMediaUrl(path) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${STRAPI_URL}${path}`;
}