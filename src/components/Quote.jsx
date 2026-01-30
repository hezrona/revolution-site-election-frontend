import { candidate } from "../data/candidate";

export default function Quote() {
  return (
    <section className="quote">
      <div className="container quote-inner">
        <p className="quote-title">
          I am not here to guide sheep but to wake lions.
        </p>
        <p className="quote-author">{candidate.fullName}</p>
      </div>
    </section>
  );
}

