import "./shareVideo.css";

const videoSets = [
  {
    id: 1,
    landscape: {
      title: "Format Paysage (16:9)",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    },
    story: {
      title: "Format Story (9:16)",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: 2,
    landscape: {
      title: "Format Paysage (16:9)",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    story: {
      title: "Format Story (9:16)",
      image:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: 3,
    landscape: {
      title: "Format Paysage (16:9)",
      image:
        "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?auto=format&fit=crop&w=1200&q=80",
    },
    story: {
      title: "Format Story (9:16)",
      image:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
    },
  },
];

export default function ShareVideo() {
  return (
    <section className="share-video">
      <div className="container share-video-inner">
        <h2>Je partage la video</h2>
        <p>Diffusez cette video autour de vous !</p>

        <div className="share-video-grid">
          {videoSets.map((set) => (
            <div className="share-video-card" key={set.id}>
              <div className="share-video-columns">
                <div className="video-column">
                  <p className="video-label">{set.landscape.title}</p>
                  <div className="video-thumb">
                    <img src={set.landscape.image} alt="Video paysage" />
                  </div>
                  <button className="btn btn-solid" type="button">
                    Telecharger
                  </button>
                </div>
                <div className="video-column">
                  <p className="video-label">{set.story.title}</p>
                  <div className="video-thumb story">
                    <img src={set.story.image} alt="Video story" />
                  </div>
                  <button className="btn btn-solid" type="button">
                    Telecharger
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="share-video-panel">
          <h3>Ou partagez le lien YouTube</h3>
          <div className="share-video-buttons">
            <button className="btn btn-outline" type="button">WhatsApp</button>
            <button className="btn btn-outline" type="button">Telegram</button>
            <button className="btn btn-outline" type="button">X (Twitter)</button>
            <button className="btn btn-outline" type="button">Facebook</button>
          </div>
          <h3>Ou copiez le message</h3>
          <div className="share-video-message">
            <p>
              Sarah Knafo est candidate a la mairie de Paris pour en faire une
              ville heureuse.
            </p>
            <p>Ensemble, tournons la page d'Anne Hidalgo !</p>
            <p>https://youtube.com/example</p>
          </div>
          <button className="btn btn-solid" type="button">
            Copier le message
          </button>
        </div>
      </div>
    </section>
  );
}
