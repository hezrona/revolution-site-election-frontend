import "./testify.css";
import TestifyForm from "./TestifyForm.jsx";

export default function TestifyPage() {
  return (
    <main className="testify-page">
      <section className="testify-hero">
        <div className="container testify-hero-inner">
          <h1>Share your testimony</h1>
          <p>In 30 seconds, make your voice heard.</p>
        </div>
      </section>
      <TestifyForm />
    </main>
  );
}
