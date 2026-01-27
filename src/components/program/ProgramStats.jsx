const stats = [
  { label: "Street lights upgraded", value: "18,000" },
  { label: "New green corridors", value: "120 km" },
  { label: "Jobs supported", value: "42,000" },
  { label: "Student support seats", value: "15,000" },
];

export default function ProgramStats() {
  return (
    <section className="program-stats">
      <div className="container stats-grid">
        <div className="stats-card">
          <h2>Impact in numbers</h2>
          <p>
            Targets we will publish and measure every 90 days with residents.
          </p>
        </div>
        <div className="stats-list">
          {stats.map((stat) => (
            <div className="stat-row" key={stat.label}>
              <span>{stat.value}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
