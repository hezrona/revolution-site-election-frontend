export default function ProgramSection({
  title,
  image,
  imageAlt,
  imageCaption,
  summaryTitle,
  summary,
  solutions = [],
}) {
  return (
    <article className="program-section">
      <header className="program-section-header">
        <h3 className="program-section-title">{title}</h3>
      </header>
      {image ? (
        <figure className="program-section-media">
          <img src={image} alt={imageAlt || "Program focus"} loading="lazy" />
          {imageCaption ? (
            <figcaption className="program-section-caption">
              {imageCaption}
            </figcaption>
          ) : null}
        </figure>
      ) : null}
      <div className="program-section-summary">
        <div className="summary-card">
          <p className="summary-title">{summaryTitle}</p>
          <p>{summary}</p>
        </div>
      </div>
      <div className="program-solutions">
        <p className="solutions-title">
          Our solutions ({solutions.length} measures)
        </p>
        <div className="solutions-list">
          {solutions.map((solution, index) => (
            <details
              className="program-solution"
              key={solution.title}
              open={index === 0}
            >
              <summary>
                <span className="solution-index">{index + 1}</span>
                <span>{solution.title}</span>
              </summary>
              <div className="solution-body">
                <p>{solution.content}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </article>
  );
}
