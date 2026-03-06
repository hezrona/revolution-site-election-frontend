import { candidate } from "../data/candidate";

export default function Quote({ content }) {
  const text = content?.text || "Je ne suis pas ici pour guider les moutons mais pour réveiller les lions";
  const author = content?.author || `${candidate.fullName} (J.M)`;

  return (
    <section className="quote">
      <div className="container quote-inner">
        <p className="quote-title">{text}</p>
        <p className="quote-author">{author}</p>
      </div>
    </section>
  );
}