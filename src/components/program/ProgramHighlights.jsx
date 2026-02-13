const fallbackHighlights = [
  {
    title: "A livable city",
    cta: "Discover",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path
          d="M8 30.5 32 12l24 18.5V54a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M24 54V38a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v16"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "A safe city",
    cta: "Discover",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path
          d="M32 10 52 18v18c0 14-9.5 24-20 28-10.5-4-20-14-20-28V18Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="m24 34 6 6 10-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "An admired city",
    cta: "Discover",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path
          d="M32 10c8.5 0 16 6.5 16 16 0 9-7 18-16 28-9-10-16-19-16-28 0-9.5 7.5-16 16-16Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M24 26h16"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "A prosperous city",
    cta: "Discover",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path
          d="M20 20h24a6 6 0 0 1 6 6v16a12 12 0 0 1-12 12H26a12 12 0 0 1-12-12V26a6 6 0 0 1 6-6Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M32 26v16M26 32h12"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function ProgramHighlights({ content }) {
  const title =
    content?.title ||
    "What should we expect for our city? What can we demand for ourselves and for our children?";
  const description =
    content?.description ||
    "The time has come to imagine a happy city together. We choose realism, method, and measurable action to get there.";
  const items = content?.items && content.items.length ? content.items : fallbackHighlights;

  return (
    <section className="program-highlights">
      <div className="container highlights-inner">
        <div className="highlights-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="highlights-grid">
          {items.map((item, index) => {
            const fallback = fallbackHighlights[index % fallbackHighlights.length];
            const icon = item.icon || fallback.icon;
            const cta = item.cta || fallback.cta || "Discover";
            return (
              <div className="highlight-card" key={`${item.title}-${index}`}>
                <div className="highlight-icon">{icon}</div>
                <h3>{item.title || fallback.title}</h3>
                <button className="btn btn-solid" type="button">
                  {cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}