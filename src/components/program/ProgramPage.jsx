import "./program.css";
import ProgramHero from "./ProgramHero.jsx";
import ProgramHighlights from "./ProgramHighlights.jsx";
import ProgramIntro from "./ProgramIntro.jsx";
import ProgramMethod from "./ProgramMethod.jsx";
import ProgramSection from "./ProgramSection.jsx";
import ProgramStats from "./ProgramStats.jsx";
import ProgramCTA from "./ProgramCTA.jsx";
import { useProgramContent } from "../../hooks/useProgramContent.js";

const programSections = [
  {
    id: "housing",
    title: "A city where people can live",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Residents reviewing housing options",
    imageCaption: "Move the city forward with dignified housing.",
    summaryTitle: "The situation",
    summary:
      "Housing costs keep rising while supply stays tight. The city must act on affordability, quality, and access for families.",
    solutions: [
      {
        title: "Reset rent controls with transparency",
        content:
          "Create a public rent dashboard that tracks real market conditions and prevents hidden fees. The goal is to protect tenants and keep investors accountable.",
      },
      {
        title: "Launch a citywide ownership plan",
        content:
          "Make first-time ownership possible through targeted grants, shared equity options, and a clear application pathway supported by local counselors.",
      },
      {
        title: "Simplify access to social housing",
        content:
          "Deploy one streamlined application, published timelines, and automatic status updates so residents know exactly where they stand.",
      },
      {
        title: "Prioritize family-focused housing",
        content:
          "Allocate more three-bedroom units and ensure every renovated block includes childcare access within walking distance.",
      },
      {
        title: "Guarantee safety in housing communities",
        content:
          "Partner with residents and security teams to maintain safe shared spaces and to respond rapidly to disruptions.",
      },
    ],
  },
  {
    id: "safety",
    title: "Safe streets, calm neighborhoods",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "City street at dusk",
    imageCaption: "Every street deserves attention.",
    summaryTitle: "The situation",
    summary:
      "Residents want consistent presence and faster response. Safety is built with smart planning, not just reaction.",
    solutions: [
      {
        title: "Neighborhood patrols with local partners",
        content:
          "Coordinate patrol routes with local councils so coverage reflects real neighborhood needs.",
      },
      {
        title: "Lighting upgrades at priority zones",
        content:
          "Target stations, parks, and schools first, with quarterly published progress reports.",
      },
      {
        title: "Rapid response mediation teams",
        content:
          "Create small teams that resolve disputes and reduce repeated incidents before they escalate.",
      },
    ],
  },
  {
    id: "clean",
    title: "A cleaner, healthier city",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Clean urban street",
    imageCaption: "Cleanliness is daily care, not a campaign.",
    summaryTitle: "The situation",
    summary:
      "Waste collection and maintenance need consistency. Residents want visible results every week.",
    solutions: [
      {
        title: "Smarter waste collection routes",
        content:
          "Use data to reduce overflow and increase pickup at high-traffic areas.",
      },
      {
        title: "Neighborhood recycling hubs",
        content:
          "Install compact recycling centers in every district and promote weekly drop-off events.",
      },
      {
        title: "City response line for vandalism",
        content:
          "One hotline for broken furniture and graffiti removal with 48-hour targets.",
      },
    ],
  },
  {
    id: "mobility",
    title: "Move easily across the city",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=70",
    imageAlt: "Public transport in the city",
    imageCaption: "Reliable mobility for everyone.",
    summaryTitle: "The situation",
    summary:
      "Commutes should be predictable and safe. We need better flow for buses, bikes, and cars.",
    solutions: [
      {
        title: "Priority bus corridors",
        content:
          "Expand dedicated lanes that link outer districts to job centers.",
      },
      {
        title: "Protected cycling intersections",
        content:
          "Redesign key junctions to reduce conflict points and improve visibility.",
      },
      {
        title: "Parking reform for essential services",
        content:
          "Reserve short-term zones for delivery and medical vehicles to reduce congestion.",
      },
    ],
  },
  {
    id: "economy",
    title: "A local economy that thrives",
    image:
      "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Local market",
    imageCaption: "Support the shops that give neighborhoods life.",
    summaryTitle: "The situation",
    summary:
      "Small businesses are the heartbeat of the city. They need simpler processes and more foot traffic.",
    solutions: [
      {
        title: "One-stop permit portal",
        content:
          "Reduce paperwork and give merchants clear timelines for approvals.",
      },
      {
        title: "Weekend artisan markets",
        content:
          "Rotate curated markets across districts to boost local revenue.",
      },
      {
        title: "Tax relief for renovations",
        content:
          "Incentivize storefront upgrades that improve safety and visibility.",
      },
    ],
  },
];

export default function ProgramPage() {
  const { data, loading, error } = useProgramContent();
  const content = data?.content || {};
  const sections =
    content.sections && content.sections.length ? content.sections : programSections;

  return (
    <main className="program-page" id="program-page">
      <ProgramHero content={content.hero} loading={loading} />
      <ProgramHighlights content={content.highlights} />
      <ProgramIntro content={content.intro} />
      <ProgramMethod content={content.method} />
      <section className="program-sections">
        <div className="container">
          {sections.map((section) => (
            <ProgramSection key={section.id} {...section} />
          ))}
        </div>
      </section>
      <ProgramStats content={content.stats} />
      <ProgramCTA content={content.cta} />
    </main>
  );
}
