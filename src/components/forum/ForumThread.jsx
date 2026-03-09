import { useState } from "react";

function Post({ post }) {
  return (
    <div className="forum-post">
      <div className="forum-post-header">
        <div className="forum-post-avatar">
          {post.author[0].toUpperCase()}
        </div>
        <div className="forum-post-meta">
          <span className="forum-post-author">{post.author}</span>
          <span className="forum-post-date">{post.date}</span>
        </div>
      </div>
      <div className="forum-post-body">
        {post.body.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  );
}

export default function ForumThread({ thread, onBack }) {
  const [posts, setPosts] = useState(thread.posts);
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (!author.trim() || !body.trim()) {
      alert("Merci de renseigner votre prénom et votre message.");
      return;
    }
    const now = new Date();
    const date =
      now.toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" }) +
      " à " +
      now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });

    setPosts((prev) => [
      ...prev,
      { id: Date.now(), author: author.trim(), date, body: body.trim() },
    ]);
    setAuthor("");
    setBody("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <div className="forum-thread">

      {/* Retour */}
      <button className="forum-back-btn" onClick={onBack}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Retour à la liste
      </button>

      {/* Titre du fil */}
      <div className="forum-thread-header">
        <span className="forum-topic-cat">{thread.cat}</span>
        <h2>{thread.title}</h2>
        <div className="forum-thread-meta">
          Par <strong>{thread.author}</strong> · {thread.date} ·{" "}
          {posts.length - 1} réponse{posts.length - 1 > 1 ? "s" : ""}
        </div>
      </div>

      {/* Posts */}
      <div className="forum-posts-list">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      {/* Formulaire de réponse */}
      <div className="forum-reply-box">
        <h4>✏️ Répondre à ce sujet</h4>
        <div className="forum-form-row">
          <label htmlFor="reply-author">Votre prénom / pseudo *</label>
          <input
            id="reply-author"
            type="text"
            placeholder="Ex : Jean-Paul M."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="forum-form-row">
          <label htmlFor="reply-body">Votre message *</label>
          <textarea
            id="reply-body"
            placeholder="Rédigez votre réponse ici…"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button className="forum-btn-primary" onClick={handleSubmit}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22 11 13 2 9l20-7z" />
          </svg>
          Publier ma réponse
        </button>
        {success && (
          <div className="forum-success" role="status">
            🎉 Votre réponse a été publiée !
          </div>
        )}
      </div>

    </div>
  );
}