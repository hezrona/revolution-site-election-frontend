import { useEffect } from "react";
import "./milite.css";
import MiliteHero from "./MiliteHero.jsx";
import MiliteForm from "./MiliteForm.jsx";

export default function MilitePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="milite-page">
      <MiliteHero />
      <MiliteForm />
    </main>
  );
}