const concerns = [
  "Housing",
  "Safety",
  "Cleanliness",
  "Mobility",
  "Economy",
];

const ACTION_URL = "https://script.google.com/macros/s/AKfycbxWNaYl4eEt7tPGVbWGOXoEUYMlUZ1zyzZlIk3YZod5nQBJN6NbRz15j9oAII0wbLde/exec";

export default function TakeActionForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const url = new URL(ACTION_URL);

    for (const [key, value] of data.entries()) {
      url.searchParams.append(key, value);
    }

    fetch(url.toString(), {
      method: "GET",
      mode: "no-cors",
    }).then(() => {
      form.reset();
    });
  };

  return (
    <section className="take-action-form">
      <div className="container take-action-form-inner">
        <h2>Person to contact</h2>
        <form className="action-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              First name
              <input type="text" name="contactFirstName" />
            </label>
            <label>
              Last name
              <input type="text" name="contactLastName" />
            </label>
            <label>
              Phone
              <input type="tel" name="contactPhone" />
            </label>
            <label>
              City
              <input type="text" name="contactCity" />
            </label>
          </div>
          <label>
            Main concern
            <select name="contactConcern">
              <option value="">Select a topic</option>
              {concerns.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <h3>Your details</h3>
          <div className="form-grid">
            <label>
              Your first name
              <input type="text" name="senderFirstName" />
            </label>
            <label>
              Your last name
              <input type="text" name="senderLastName" />
            </label>
            <label>
              Your phone
              <input type="tel" name="senderPhone" />
            </label>
            <label>
              Your email
              <input type="email" name="senderEmail" />
            </label>
          </div>
          <label className="checkbox-row">
            <input type="checkbox" name="consent" />
            I agreed that I can be contacted by the campaign team.
          </label>
          <button className="btn btn-solid" type="submit">
            Recommend this contact
          </button>
          <p className="form-footnote">
            Data is handled respectfully. We will only contact the person you
            recommend.
          </p>
        </form>
      </div>
    </section>
  );
}
