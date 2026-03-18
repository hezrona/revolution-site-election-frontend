const villes = [
  "Antananarivo",
  "Tamatave",
  "Mahajanga",
  "Toliara",
  "Fianarantsoa",
  "Antsiranana",
  "Autres",
];

const ACTION_URL = "https://script.google.com/macros/s/AKfycbxWNaYl4eEt7tPGVbWGOXoEUYMlUZ1zyzZlIk3YZod5nQBJN6NbRz15j9oAII0wbLde/exec";

export default function MiliteForm() {
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
    <section className="milite-form">
      <div className="container milite-form-inner">
        <div className="milite-form-box">
          Rejoignez nos équipes sur le terrain pour faire campagne et convaincre les Français de Madagascar !
        </div>
        <form className="milite-action-form" onSubmit={handleSubmit}>
          <div className="milite-form-grid">
            <label>
              Prénom
              <input type="text" name="firstName" required />
            </label>
            <label>
              Nom
              <input type="text" name="lastName" required />
            </label>
            <label>
              E-mail
              <input type="email" name="email" required />
            </label>
            <label>
              Téléphone
              <input type="tel" name="phone" placeholder="06 XX XX XX XX" />
            </label>
          </div>
          <label>
            Ville
            <select name="ville" required>
              <option value="">Sélectionnez votre ville</option>
              {villes.map((v) => (
                <option value={v} key={v}>{v}</option>
              ))}
            </select>
          </label>
          <button className="milite-btn" type="submit">
            Je rejoins l'équipe
          </button>
        </form>
      </div>
    </section>
  );
}