import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page introuvable – Mada Campaign</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <main style={{ textAlign: "center", padding: "6rem 1rem" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" style={{ color: "var(--color-pink)", fontWeight: 600 }}>
          ← Retour à l'accueil
        </Link>
      </main>
    </>
  );
}
