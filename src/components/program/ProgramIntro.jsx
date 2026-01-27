export default function ProgramIntro() {
  return (
    <section className="program-intro">
      <div className="container program-intro-inner">
        <div className="intro-card">
          <p className="intro-tag">Our mission</p>
          <h2>Who we are building this with</h2>
          <p>
            This program is co-written with residents, neighborhood leaders, and
            independent experts. Each initiative includes a public timeline and
            clear accountability milestones.
          </p>
          <p>
            We will publish progress dashboards every quarter and adjust with
            citizen feedback.
          </p>
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
