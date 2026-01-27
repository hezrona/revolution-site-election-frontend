const themes = [
  "Housing",
  "Safety",
  "Cleanliness",
  "Mobility",
  "Economy",
  "Environment",
];

const districts = [
  "1st arrondissement",
  "2nd arrondissement",
  "3rd arrondissement",
  "4th arrondissement",
  "5th arrondissement",
  "6th arrondissement",
];

export default function TestifyForm() {
  return (
    <section className="testify-form">
      <div className="container testify-form-inner">
        <h2>Type of contribution *</h2>
        <div className="contribution-grid">
          <label className="contribution-card">
            <input type="radio" name="contribution" value="idea" defaultChecked />
            <span className="card-icon">💡</span>
            <span className="card-title">Idea</span>
            <span className="card-subtitle">A proposal</span>
          </label>
          <label className="contribution-card">
            <input type="radio" name="contribution" value="problem" />
            <span className="card-icon">⚠️</span>
            <span className="card-title">Problem</span>
            <span className="card-subtitle">An observation</span>
          </label>
        </div>
        <form className="testify-fields">
          <label>
            Theme *
            <select name="theme" required>
              <option value="">Select a theme</option>
              {themes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label>
            Your idea for Paris *
            <textarea name="idea" rows="4" required />
            <button className="mic-button" type="button" aria-label="Record">
              🎤
            </button>
          </label>
          <label>
            District *
            <div className="field-with-action">
              <select name="district" required>
                <option value="">Select your district</option>
                {districts.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <button className="pin-button" type="button" aria-label="Locate">
                ⌖
              </button>
            </div>
          </label>
          <label>
            Email *
            <input type="email" name="email" required />
          </label>
          <label>
            Phone (optional)
            <input type="tel" name="phone" />
            <span className="field-help">For campaign follow-up</span>
          </label>
          <label>
            Name or nickname *
            <input type="text" name="name" required />
          </label>
          <div className="checkboxes">
            <label className="checkbox-row">
              <input type="checkbox" name="anonymous" />
              I want to stay anonymous
            </label>
            <label className="checkbox-row">
              <input type="checkbox" name="newsletter" />
              Send me solutions updates by email
            </label>
            <label className="checkbox-row">
              <input type="checkbox" name="terms" required />
              I accept the Terms of Use and Privacy Policy *
            </label>
            <label className="checkbox-row">
              <input type="checkbox" name="contact" required />
              I authorize the team to contact me *
            </label>
          </div>
          <div className="captcha-placeholder">Success!</div>
          <button className="btn btn-solid submit-button" type="submit">
            Send my contribution →
          </button>
        </form>
      </div>
    </section>
  );
}
