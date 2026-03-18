import { useEffect } from "react";
import "./takeAction.css";
import TakeActionHero from "./TakeActionHero.jsx";
import TakeActionForm from "./TakeActionForm.jsx";

export default function TakeActionPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="take-action-page">
      <TakeActionHero />
      <TakeActionForm />
    </main>
  );
}