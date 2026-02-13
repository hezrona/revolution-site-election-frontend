const fallbackStats = [
  { label: "Street lights upgraded", value: "18,000" },
  { label: "New green corridors", value: "120 km" },
  { label: "Jobs supported", value: "42,000" },
  { label: "Student support seats", value: "15,000" },
];

export default function ProgramStats({ content }) {
  const title = content?.title || "Impact in numbers";
  const description =
    content?.description ||
    "Targets we will publish and measure every 90 days with residents.";
  const stats = content?.items?.length ? content.items : fallbackStats;

  return (
    <section className="program-stats">
      <div className="container stats-grid">
        <div className="stats-card">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="stats-list">
          {stats.map((stat) => (
            <div className="stat-row" key={stat.label || stat.value}>
              <span>{stat.value}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}