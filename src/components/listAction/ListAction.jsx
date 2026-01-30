import "./listAction.css";

const actions = [
  {
    title: "Je partage la video",
    description: "1 video a diffuser autour de vous",
    icon: "🎥",
    link: "#share-video",
  },
  {
    title: "Je partage le visuel",
    description: "1 visuel a partager sur vos reseaux",
    icon: "🖼️",
  },
  {
    title: "Je partage le site",
    description: "Partagez ce site sur vos reseaux",
    icon: "🔗",
  },
  {
    title: "Je signe la petition",
    description: "STOP insecurite, salete, gaspillage !",
    icon: "✍️",
    link: "#sign-petition",
  },
  {
    title: "J'envoie un message",
    description: "1 message a 5 proches parisiens",
    icon: "💬",
  },
  {
    title: "J'imprime des tracts",
    description: "Telechargez nos visuels et tracts",
    icon: "🖨️",
    link: "#print-tract",
  },
  {
    title: "Je fais un micro-don",
    description: "Soutenez la campagne avec un petit don",
    icon: "💰",
    link: "#donate",
  },
  {
    title: "Je rejoins John",
    description: "Le canal Telegram John pour Paris",
    icon: "✈️",
  },
];

export default function ListAction() {
  return (
    <section className="list-action" id="actions">
      <div className="container list-action-inner">
        <div className="list-action-panel">
          <h2>J'agis tout de suite</h2>
          <p>8 actions simples pour aider John Knafo</p>
          <div className="list-action-grid">
            {actions.map((action) => (
              <a
                href={action.link || "#"}
                className="list-action-card"
                key={action.title}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="list-action-icon" aria-hidden="true">
                  {action.icon}
                </div>
                <h3>{action.title}</h3>
                <p>{action.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
