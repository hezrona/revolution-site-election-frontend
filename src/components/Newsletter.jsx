export default function Newsletter({ content }) {
  const title = content?.title || "Stay informed";
  const description =
    content?.description ||
    "The full project will be revealed soon. Leave your email to be the first to know.";
  const finePrint = content?.finePrint || "No spam. Just updates and progress.";
  const buttonLabel = content?.buttonLabel || "Sign up";
  const placeholder = content?.placeholder || "Your email";

  return (
    <section className="newsletter" id="cities">
      <div className="container newsletter-inner">
        <h2>{title}</h2>
        <p>{description}</p>
        <form className="newsletter-form">
          <input
            type="email"
            name="email"
            placeholder={placeholder}
            aria-label="Email address"
          />
          <button className="btn btn-accent" type="submit">
            {buttonLabel}
          </button>
        </form>
        <p className="fine-print">{finePrint}</p>
      </div>
    </section>
  );
}