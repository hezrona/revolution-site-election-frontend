import { useState, useEffect } from "react";
import "./cookieConsent.css";

const CONSENT_KEY = "cookie_consent";
const GTM_ID = "GTM-NKJFH49H";

function loadGTM() {
  if (window.__gtmLoaded) return;
  window.__gtmLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    } else if (consent === "accepted") {
      loadGTM();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
    loadGTM();
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Consentement aux cookies">
      <p>
        Ce site utilise des cookies analytiques pour mesurer l'audience.{" "}
        <a href="/terms">En savoir plus</a>
      </p>
      <div className="cookie-actions">
        <button className="cookie-btn cookie-btn--accept" onClick={handleAccept}>
          Accepter
        </button>
        <button className="cookie-btn cookie-btn--decline" onClick={handleDecline}>
          Refuser
        </button>
      </div>
    </div>
  );
}
