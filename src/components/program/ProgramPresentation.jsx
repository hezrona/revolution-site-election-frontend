import "./programPresentation.css";

export default function ProgramPresentation() {
    return (
        <section className="program-presentation">
        <div className="container program-presentation-inner">
            <div className="program-presentation-media">
            <img
                src=""
                alt="Panneau une ville heureuse"
                loading="lazy"
            />
            </div>
            <div className="program-presentation-content">
            <h2>
                Santé · Sécurité · Quotidien
            </h2>
            <p className="program-presentation-eyebrow">
                Vous ne serez plus jamais seul
            </p>
            <button className="btn program-presentation-btn" type="button">
                Notre programme
            </button>
            </div>
        </div>
        </section>
    );
}
