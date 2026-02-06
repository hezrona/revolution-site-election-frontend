const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

if (!STRAPI_URL) {
  // eslint-disable-next-line no-console
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
