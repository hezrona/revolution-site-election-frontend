import { candidate } from "../data/candidate";

export default function Quote({ content }) {
  const textLine1 = content?.textLine1 || "Je ne suis pas ici pour guider les moutons";
  const textLine2 = content?.textLine2 || "mais pour réveiller les lions";
  const author = content?.author || `${candidate.fullName} (J.M)`;

  return (
    <section className="quote">
      <div className="container quote-inner">
        <p className="quote-title">
          {textLine1}
          <br />
          {textLine2}
        </p>
        <p className="quote-author">{author}</p>
      </div>
    </section>
  );
}