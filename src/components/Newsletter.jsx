export default function Newsletter({ content }) {
  const title = content?.title || "Rester informé";
  const buttonLabel = content?.buttonLabel || "S'inscrire";
  const placeholder = content?.placeholder || "Votre email";

  return (
    <section className="newsletter" id="cities">
      <div className="container newsletter-inner">
        <h2>{title}</h2>
        <form className="newsletter-form">
          <input
            type="email"
            name="email"
            placeholder={placeholder}
            aria-label="Adresse email"
          />
          <button className="btn btn-accent" type="submit">
            {buttonLabel}
          </button>
        </form>
      </div>
    </section>
  );
}