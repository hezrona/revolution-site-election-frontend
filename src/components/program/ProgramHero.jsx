export default function ProgramHero({ content, loading }) {
  const eyebrow = content?.eyebrow || "Program 2026";
  const title = content?.title || "Build the city we deserve";
  const description =
    content?.description ||
    "A structured plan grounded in safety, fairness, and action. Each pillar is measurable and reviewed with residents.";
  const buttons =
    content?.buttons && content.buttons.length
      ? content.buttons
      : [
          { label: "Download summary", variant: "accent" },
          { label: "Join the team", variant: "outline" },
        ];

  return (
    <section className="program-hero">
      <div className="program-hero-overlay" />
      <div className="container program-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="program-hero-actions">
          {buttons.map((button) => (
            <button
              key={button.label}
              className={`btn btn-${button.variant || "accent"}`}
              type="button"
              disabled={loading}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}