import { candidate } from "../../data/candidate";

const fallbackMethodSteps = [
  "Identify the root cause and its deep drivers.",
  "Map the real levers available to the city leadership.",
  "Review what has worked elsewhere and what failed.",
  "Measure how technology will reshape the problem in the next cycle.",
  "Build solutions with experts and residents side by side.",
  "Quantify each measure, including costs and expected impact.",
];

const fallbackProjectSteps = [
  "Local consultation: issues, frictions, and priorities.",
  "Co-design the project with independent experts.",
  "Simulate impact on traffic, noise, and neighborhood life.",
  "Approve major projects through public referendum.",
  "Deliver with quarterly public progress reports.",
];

export default function ProgramMethod({ content }) {
  const title = content?.title || "My method";
  const subtitle = content?.subtitle || "How this program was built";
  const intro =
    content?.intro ||
    "Before sharing the full plan, I want to explain how it was built. I started by reading the numbers, then walking each neighborhood to understand what people live every day.";
  const intro2 =
    content?.intro2 ||
    "The approach is simple: no ideology, no shortcuts. Only what works, measured and improved with the people who live here.";
  const methodSteps = content?.methodSteps?.length
    ? content.methodSteps
    : fallbackMethodSteps;
  const projectSteps = content?.projectSteps?.length
    ? content.projectSteps
    : fallbackProjectSteps;
  const finalQuote =
    content?.finalDescription ||
    "A practical program, built for daily life and long-term results.";

  return (
    <section className="program-method">
      <div className="container program-method-inner">
        <div className="program-method-media">
          <img alt="Leader portrait" loading="lazy" />
        </div>
        <div className="program-method-content">
          <h2>{title}</h2>
          <p className="method-subtitle">{subtitle}</p>
          <div className="method-card">
            <p>{intro}</p>
            <p>{intro2}</p>
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
          <p className="method-quote">{finalQuote}</p>
          <p className="method-signature">{candidate.fullName}</p>
        </div>
      </div>
    </section>
  );
}