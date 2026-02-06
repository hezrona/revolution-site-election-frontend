import { candidate } from "../data/candidate";

export default function Quote({ content }) {
  const text = content?.text || "I am not here to guide sheep but to wake lions.";
  const author = content?.author || candidate.fullName;

  return (
    <section className="quote">
      <div className="container quote-inner">
        <p className="quote-title">{text}</p>
        <p className="quote-author">{author}</p>
      </div>
    </section>
  );
}