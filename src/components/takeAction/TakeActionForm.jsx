const concerns = [
  "Santé",
  "Sécurité physique",
  "Sécurité patrimoniale",
  "Famille & Education",
  "Démarches consulaires",
  "Entrepreneurs",
  "Vie quotidienne",
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
      <div className="take-action-form-inner">
        <h2>Personne à recommander</h2>
        <form className="action-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              Prénom
              <input type="text" name="contactFirstName" />
            </label>
            <label>
              Nom
              <input type="text" name="contactLastName" />
            </label>
            <label>
              Téléphone
              <input type="tel" name="contactPhone" placeholder="06 XX XX XX XX" />
            </label>
            <label>
              Ville de résidence
              <input type="text" name="contactCity" placeholder="Antananarivo, Tamatave..." />
            </label>
          </div>
          <label>
            Sujet de préoccupation principal
            <select name="contactConcern">
              <option value="">Sélectionnez un sujet</option>
              {concerns.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <h3>Vos coordonnées</h3>
          <div className="form-grid">
            <label>
              Votre prénom
              <input type="text" name="senderFirstName" />
            </label>
            <label>
              Votre nom
              <input type="text" name="senderLastName" />
            </label>
            <label>
              Votre téléphone
              <input type="tel" name="senderPhone" />
            </label>
            <label>
              Votre email
              <input type="email" name="senderEmail" />
            </label>
          </div>
          <label className="checkbox-row">
            <input type="checkbox" name="consent" />
            J'accepte d'être contacté(e) par l'équipe de campagne.
          </label>
          <button className="btn btn-solid" type="submit">
            Je recommande ce contact
          </button>
          <p className="form-footnote">
            Vos données sont traitées conformément au RGPD et ne seront jamais cédées à des tiers.
          </p>
        </form>
      </div>
    </section>
  );
}