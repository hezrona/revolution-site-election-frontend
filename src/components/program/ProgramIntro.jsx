export default function ProgramIntro({ content }) {
  const tag = content?.tag || "Our mission";
  const title = content?.title || "Who we are building this with";
  const fallbackParagraphs = [
    "This program is co-written with residents, neighborhood leaders, and independent experts. Each initiative includes a public timeline and clear accountability milestones.",
    "We will publish progress dashboards every quarter and adjust with citizen feedback.",
  ];
  const rawDescription = content?.description || "";
  const paragraphs = rawDescription
    ? rawDescription.split(/\n\s*\n/).map((text) => text.trim()).filter(Boolean)
    : fallbackParagraphs;

  return (
    <section className="program-intro">
      <div className="container program-intro-inner">
        <div className="intro-card">
          <p className="intro-tag">{tag}</p>
          <h2>{title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={`${index}-${paragraph.slice(0, 16)}`}>{paragraph}</p>
          ))}
          {/* <button className="btn btn-solid" type="button">See the roadmap</button> */}
        </div>
        {/* <div className="intro-note">
          <h3>Key commitments</h3>
          <ul>
            <li>Transparent budget reporting</li>
            <li>Monthly neighborhood forums</li>
            <li>Focus on safety and dignity</li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}