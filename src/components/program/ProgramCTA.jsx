export default function ProgramCTA({ content }) {
  const title = content?.title || "Ready to build this city together?";
  const description =
    content?.description || "Join the volunteer network and bring the plan to life.";
  const buttons =
    content?.buttons && content.buttons.length
      ? content.buttons
      : [
          { label: "Volunteer", variant: "accent" },
          { label: "Donate", variant: "outline" },
        ];

  return (
    <section className="program-cta">
      <div className="container program-cta-inner">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="program-cta-actions">
          {buttons.map((button) => (
            <button
              className={`btn btn-${button.variant || "accent"}`}
              type="button"
              key={button.label}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}