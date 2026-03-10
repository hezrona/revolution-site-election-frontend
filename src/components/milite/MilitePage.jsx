import "./milite.css";
import MiliteHero from "./MiliteHero.jsx";
import MiliteForm from "./MiliteForm.jsx";

export default function MilitePage() {
  return (
    <main className="milite-page">
      <MiliteHero />
      <MiliteForm />
    </main>
  );
}