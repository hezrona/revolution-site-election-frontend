import { useEffect, useState } from "react";
import { fetchStrapi } from "../api/strapi";

const CACHE_KEY = "home_content_v1";

function buildHeroButtons(hero) {
  if (hero?.buttons && hero.buttons.length) {
    return hero.buttons;
  }

  const buttons = [];
  if (hero?.Bouton1) {
    buttons.push({ label: hero.Bouton1, variant: "solid" });
  }
  if (hero?.Bouton2) {
    buttons.push({ label: hero.Bouton2, variant: "outline" });
  }

  return buttons;
}

function buildActionItems(actions) {
  if (actions?.items && actions.items.length) {
    return actions.items;
  }

  const rawItems = [
    actions?.texte1,
    actions?.texte2,
    actions?.texte3,
    actions?.texte4,
    actions?.texte5,
    actions?.texte6,
    actions?.texte7,
    actions?.texte8,
  ].filter(Boolean);

  return rawItems.map((title) => ({
    title,
    description: "",
    icon: "*",
  }));
}

function normalizeHomeContent(json) {
  const root = json?.data?.attributes || json?.data || {};

  const heroSource = root.Hero || root.hero || {};
  const actionsSource = root.ListeAction || root.actions || {};
  const programSource = root.Bandeau1 || root.programPresentation || {};
  const aboutSource = root.BandeauInformation || root.about || {};
  const quoteSource = root.BandeauCitation || root.quote || {};
  const programBottomSource = root.BandeauProgramEnBas || root.program || {};
  const newsletterSource = root.ResterInformer || root.newsletter || {};

  return {
    title: root.Title || root.title || "",
    slug: root.Slug || root.slug || "",
    seoDescription: root.seoDescription || root.seo_description || "",
    hero: {
      teamLine: heroSource.SousTitre || heroSource.teamLine,
      subtitle: heroSource.SousTitre2 || heroSource.subtitle,
      eyebrow: heroSource.eyebrow,
      buttons: buildHeroButtons(heroSource),
      video: heroSource.Video || heroSource.video,
    },
    actions: {
      title: actionsSource.GrandTitre || actionsSource.title,
      subtitle: actionsSource.SousTitreAction || actionsSource.subtitle,
      items: buildActionItems(actionsSource),
    },
    programPresentation: {
      title: programSource.TitreProgramme || programSource.title,
      eyebrow: programSource.SousTitreProgramme || programSource.eyebrow,
      buttonLabel: programSource.BoutonProgramme || programSource.buttonLabel,
      image: programSource.image,
    },
    about: {
      title: aboutSource.TitrePresentationBandeau || aboutSource.title,
      buttonLabel: aboutSource.TexteBouton || aboutSource.buttonLabel,
      image: aboutSource.image,
    },
    quote: {
      text: quoteSource.Citation || quoteSource.text,
      author: quoteSource.ReferenceCitation || quoteSource.author,
    },
    program: {
      title: programBottomSource.GrandTitre || programBottomSource.title,
      description:
        programBottomSource.Description || programBottomSource.description,
      buttonLabel: programBottomSource.TexteBouton || programBottomSource.buttonLabel,
    },
    newsletter: {
      title: newsletterSource.GrandTitre || newsletterSource.title,
      description: newsletterSource.Description || newsletterSource.description,
      finePrint: newsletterSource.SousTitre || newsletterSource.finePrint,
    },
  };
}

export function useHomeContent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStrapi("/accueil?populate=*")
      .then((json) => {
        const normalized = normalizeHomeContent(json);
        setData({ content: normalized });
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ time: Date.now(), data: { content: normalized } })
        );
      })
      .catch((err) => {
        setError(err.message || "Failed to load content.");
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
