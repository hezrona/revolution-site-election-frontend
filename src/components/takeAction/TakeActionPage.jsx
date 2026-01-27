import "./takeAction.css";
import TakeActionHero from "./TakeActionHero.jsx";
import TakeActionForm from "./TakeActionForm.jsx";

export default function TakeActionPage() {
  return (
    <main className="take-action-page">
      <TakeActionHero />
      <TakeActionForm />
    </main>
  );
}
