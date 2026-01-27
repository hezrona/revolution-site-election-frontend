const methodSteps = [
  "Identify the root cause and its deep drivers.",
  "Map the real levers available to the city leadership.",
  "Review what has worked elsewhere and what failed.",
  "Measure how technology will reshape the problem in the next cycle.",
  "Build solutions with experts and residents side by side.",
  "Quantify each measure, including costs and expected impact.",
];

const projectSteps = [
  "Local consultation: issues, frictions, and priorities.",
  "Co-design the project with independent experts.",
  "Simulate impact on traffic, noise, and neighborhood life.",
  "Approve major projects through public referendum.",
  "Deliver with quarterly public progress reports.",
];

export default function ProgramMethod() {
  return (
    <section className="program-method">
      <div className="container program-method-inner">
        <div className="program-method-media">
          <img
            // src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
            // src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
            alt="Leader portrait"
            loading="lazy"
          />
        </div>
        <div className="program-method-content">
          <h2>My method</h2>
          <p className="method-subtitle">How this program was built</p>
          <div className="method-card">
            <p>
              Before sharing the full plan, I want to explain how it was built.
              I started by reading the numbers, then walking each neighborhood
              to understand what people live every day.
            </p>
            <p>
              The approach is simple: no ideology, no shortcuts. Only what
              works, measured and improved with the people who live here.
            </p>
          </div>
          <div className="method-list">
            <p className="method-title">The working method</p>
            <ul>
              {methodSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
          <div className="method-list">
            <p className="method-title">How city projects are decided</p>
            <ol>
              {projectSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <p className="method-quote">
            A practical program, built for daily life and long-term results.
          </p>
          <p className="method-signature">John Doe</p>
        </div>
      </div>
    </section>
  );
}
