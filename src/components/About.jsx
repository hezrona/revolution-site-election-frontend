export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-card">
          <div className="image-frame" />
        </div>
        <div className="about-text">
          <p className="quote-mark">" "</p>
          <h2>Who am I?</h2>
          <p>
            Welcome. I am John Doe. I grew up in the suburbs, studied public
            policy, and spent years inside institutions. Today I work for a
            city that protects freedom, safety, and opportunity for every
            neighborhood.
          </p>
          <p>
            My energy is for defending your daily life, reducing waste, and
            giving power back to residents. I do not step back. Together we can
            win important victories.
          </p>
          <button className="btn btn-accent" type="button">Help John now</button>
        </div>
      </div>
    </section>
  );
}
