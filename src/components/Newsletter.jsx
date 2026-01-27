export default function Newsletter() {
  return (
    <section className="newsletter" id="cities">
      <div className="container newsletter-inner">
        <h2>Stay informed</h2>
        <p>
          The full project will be revealed soon. Leave your email to be the
          first to know.
        </p>
        <form className="newsletter-form">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            aria-label="Email address"
          />
          <button className="btn btn-accent" type="submit">Sign up</button>
        </form>
        <p className="fine-print">No spam. Just updates and progress.</p>
      </div>
    </section>
  );
}
