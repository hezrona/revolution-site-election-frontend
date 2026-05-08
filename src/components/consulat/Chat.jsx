// =============================================================================
// src/components/consulat/Chat.jsx
// Gère la saisie, l'historique d'affichage et l'appel vers le backend Express.
// L'URL de l'API est lue depuis la variable d'environnement VITE_API_URL.
// =============================================================================

import { useState, useRef, useEffect, useCallback } from "react";
import Message from "./Message";
import styles  from "./consulat.module.css";

const QUESTION_MAX_LENGTH = 1000;

const MESSAGE_INITIAL = {
  role:  "bot",
  texte: "Bonjour. Je peux vous renseigner sur les démarches administratives couvertes par les fiches du service. Quelle est votre question ?"
};

// URL du backend — définie dans .env du frontend : VITE_API_URL=https://votre-backend.railway.app
const API_URL = `${import.meta.env.VITE_API_URL}/api/consulat`;

export default function Chat() {
  const [messages,   setMessages]   = useState([MESSAGE_INITIAL]);
  const [question,   setQuestion]   = useState("");
  const [enAttente,  setEnAttente]  = useState(false);

  const textareaRef    = useRef(null);
  const messagesEndRef = useRef(null);

  // Auto-scroll vers le dernier message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, enAttente]);

  // Auto-resize de la textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 120) + "px";
  }, [question]);

  const envoyer = useCallback(async () => {
    const q = question.trim();
    if (!q || enAttente) return;

    setMessages(prev => [...prev, { role: "user", texte: q }]);
    setQuestion("");
    setEnAttente(true);

    try {
      const reponse = await fetch(API_URL, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          question: q,
          historique: messages
            .filter(m => !m.erreur && m.texte !== MESSAGE_INITIAL.texte)
            .slice(-12)
            .map(m => ({
              role:  m.role === "user" ? "user" : "model",
              texte: m.texte
            }))
        })
      });

      const data = await reponse.json().catch(() => ({}));

      if (!reponse.ok) {
        const msg = data?.error || "Une erreur est survenue.";
        setMessages(prev => [...prev, { role: "bot", texte: msg, erreur: true }]);
      } else if (data?.answer) {
        setMessages(prev => [...prev, { role: "bot", texte: data.answer }]);
      } else {
        setMessages(prev => [...prev, {
          role:   "bot",
          texte:  "Réponse vide. Veuillez reformuler votre question.",
          erreur: true
        }]);
      }
    } catch (err) {
      console.error("[Chat] Erreur réseau :", err);
      setMessages(prev => [...prev, {
        role:   "bot",
        texte:  "Impossible de joindre le service. Vérifiez votre connexion et réessayez.",
        erreur: true
      }]);
    } finally {
      setEnAttente(false);
    }
  }, [question, enAttente]);

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      envoyer();
    }
  };

  return (
    <section className={styles.chat} aria-label="Zone de conversation avec l'assistant">

      <div className={styles.messages} role="log" aria-live="polite" aria-atomic="false">
        {messages.map((m, i) => (
          <Message key={i} role={m.role} texte={m.texte} erreur={m.erreur} />
        ))}

        {enAttente && (
          <Message role="bot" texte="Recherche dans les fiches…" enAttente />
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className={styles.saisie}>
        <textarea
          ref={textareaRef}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Saisissez votre question ici…"
          maxLength={QUESTION_MAX_LENGTH}
          rows={1}
          disabled={enAttente}
          aria-label="Votre question"
        />
        <button
          type="button"
          onClick={envoyer}
          disabled={enAttente || !question.trim()}
          className={styles.envoyer}
        >
          {enAttente ? "…" : "Envoyer"}
        </button>
      </div>

      <div className={styles.compteur}>
        {question.length} / {QUESTION_MAX_LENGTH}
      </div>

    </section>
  );
}