import { useEffect, useState } from "react";
import { fetchStrapi } from "../api/strapi";

const CACHE_KEY = "program_content_v1";

function buildButtons(source) {
  if (source?.buttons && source.buttons.length) {
    return source.buttons;
  }

  const buttons = [];
  if (source?.Bouton1) {
    buttons.push({ label: source.Bouton1, variant: "accent" });
  }
  if (source?.Bouton2 || source?.Boutn2) {
    buttons.push({ label: source.Bouton2 || source.Boutn2, variant: "outline" });
  }

  return buttons;
}

function normalizeProgramContent(json) {
  const root = json?.data?.attributes || json?.data || {};

  const heroSource = root.HeroProgramme || root.hero || {};
  const descriptionSource = root.DescriptionProgramme || root.highlights || {};
  const missionSource = root.NotreMission || root.intro || {};
  const methodSource = root.MaMethode || root.method || {};
  const solutionsSource = root.Solutions || root.solutions || [];
  const impactSource = root.BandeauImpacteProgramme || root.stats || {};
  const ctaSource = root.ProgrammeCTAEnBas || root.CTASection || root.cta || {};

  const highlightItems = Array.isArray(solutionsSource)
    ? solutionsSource.map((item) => ({
        title: item?.TitreListeSolution || item?.title || "",
        cta: item?.cta,
      }))
    : [];

  return {
    hero: {
      eyebrow: heroSource.PetitTitreHaut || heroSource.eyebrow,
      title: heroSource.GrandTitreMilieu || heroSource.title,
      description: heroSource.Description || heroSource.description,
      buttons: buildButtons(heroSource),
    },
    highlights: {
      title:
        descriptionSource.DescriptionPrincipale ||
        descriptionSource.title ||
        "",
      description:
        descriptionSource.PetiteDescription ||
        descriptionSource.description ||
        "",
      items: highlightItems,
    },
    intro: {
      tag: missionSource.Titre1 || missionSource.tag,
      title: missionSource.Titre2 || missionSource.title,
      description: missionSource.Description || missionSource.description,
    },
    method: {
      title: methodSource.TitreMethod || methodSource.title,
      finalDescription: methodSource.FinalDescription || methodSource.finalDescription,
    },
    stats: {
      title: impactSource.ResumeImpactNombreTitre || impactSource.title,
      description: impactSource.DescriptiotnImpacte || impactSource.description,
      items: impactSource.items || [],
    },
    cta: {
      title: ctaSource.TitreCTA || ctaSource.GrandTitre || ctaSource.title,
      description: ctaSource.DescriptionCTA || ctaSource.Description || ctaSource.description,
      buttons: buildButtons(ctaSource),
    },
    sections: root.Sections || root.sections || [],
  };
}

export function useProgramContent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStrapi("/programme?populate=*")
      .then((json) => {
        const normalized = normalizeProgramContent(json);
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
