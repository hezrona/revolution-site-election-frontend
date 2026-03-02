import "./ourValue.css";

export default function OurValue() {
    return (
        <main className="our-value-page">
        <section className="our-value-hero">
            <div className="container our-value-hero-inner">
            <span className="eyebrow">Nos valeurs</span>
            <h1>Une vision claire, des gestes simples.</h1>
            <p>
                Nous avançons avec respect, proximité et sincérité pour construire
                une ville plus juste et plus humaine.
            </p>
            </div>
        </section>
        <section className="our-value-content">
            <div className="container our-value-card">
            <p>Mes valeurs sont simples, mais elles guident chacun de mes engagements.</p>

            <p>
                Je crois d’abord en <strong>l’intégrité</strong> : dire ce que l’on fait et faire ce que l’on dit.
                Je crois aussi au <strong>respect</strong>, de chaque personne, de chaque culture, de chaque parcours,
                car notre diversité est une richesse, jamais un obstacle.
            </p>

            <p>
                La <strong>solidarité</strong> est pour moi essentielle : personne ne doit être laissé de côté, surtout les plus fragiles.
                Je suis attaché au <strong>sens du devoir</strong> et au <strong>travail bien fait</strong>, avec humilité et constance.
            </p>

            <p>
                Enfin, je crois profondément au <strong>rassemblement</strong> : au-delà de nos différences,
                c’est en étant unis que nous avançons et que nous construisons un avenir plus juste pour tous.
            </p>
            <div className="our-value-signature">
                <span className="signature-label">Nous croyons en</span>
                <span className="signature-value">
                l'écoute, la solidarité et l'action durable.
                </span>
            </div>
            </div>
        </section>
        </main>
    );
}
