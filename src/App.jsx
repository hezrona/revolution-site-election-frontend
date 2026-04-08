import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import CookieConsent from "./components/cookieConsent/CookieConsent.jsx";
import NotFound from "./components/NotFound.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import ListAction from "./components/listAction/ListAction.jsx";
import About from "./components/About.jsx";
import Quote from "./components/Quote.jsx";
import Program from "./components/Program.jsx";
import Newsletter from "./components/Newsletter.jsx";
import VerticalCarousel from "./components/entrepreneur/VerticalCarousel.jsx";
import ProgramAltPage from "./components/program/ProgramAltPage.jsx";
import TakeActionPage from "./components/takeAction/TakeActionPage.jsx";
import TestifyPage from "./components/toTesify/TestifyPage.jsx";
import DonatePage from "./components/donate/DonatePage.jsx";
import SignPetition from "./components/signPetition/SignPetition.jsx";
import TermsPage from "./components/termsCondition/TermsPage.jsx";
import PrintTract from "./components/printTract/PrintTract.jsx";
import ShareVideo from "./components/shareVideo/ShareVideo.jsx";
import ProgramPresentation from "./components/program/ProgramPresentation.jsx";
import TeamPage from "./components/team/TeamPage.jsx";
import EntrepreneurPage from "./components/entrepreneur/EntrepreneurPage.jsx";
import HealthPage from "./components/health/HealthPage.jsx";
import OurValue from "./components/ourValue/OurValue.jsx";
import HeritageSecurity from "./components/heritageSecurity/HeritageSecurity.jsx";
import PartenaireArticle from "./components/partenaire/PartenaireArticle.jsx";
import AdministrationPage from "./components/administration/AdministrationPage.jsx";
import ForumPage from "./components/forum/ForumPage.jsx";
import MilitePage from "./components/milite/MilitePage.jsx";
import PhysicalSecurity from "./components/physicalSecurity/PhysicalSecurity.jsx";
import FamilyEducation from "./components/familyEducation/FamilyEducation.jsx";
import ConsularProcedures from "./components/consularProcedures/ConsularProcedures.jsx";
import DailyLife from "./components/dailyLife/DailyLife.jsx";
import AboutArticle from "./components/about/AboutArticle.jsx";
import AdminPage from "./components/admin/AdminPage.jsx";
import { useHomeContent } from "./hooks/useHomeContent.js";
import ScrollToTop from "./components/ScrollToTop.jsx";


function PageTracker() {
  const location = useLocation();
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page_path: location.pathname + location.search,
    });
  }, [location]);
  return null;
}

function HomePage() {
  const { data, loading, error } = useHomeContent();
  const content = data?.content || {};

  return (
    <>
      <Helmet>
        <title>Christian Tibayrenc – Liste UFM | Élections Consulaires Madagascar 2026</title>
        <meta name="description" content="Découvrez le programme de Christian Tibayrenc, tête de liste de l'Union des Français de Madagascar (UFM), candidat aux élections consulaires Madagascar du 17 mai 2026." />
        <link rel="canonical" href="https://ufdm.vercel.app/" />
        <meta property="og:title" content="Christian Tibayrenc – Liste UFM | Élections Consulaires Madagascar 2026" />
        <meta property="og:description" content="Découvrez le programme de Christian Tibayrenc, tête de liste de l'Union des Français de Madagascar (UFM), candidat aux élections consulaires Madagascar du 17 mai 2026." />
        <meta property="og:url" content="https://ufdm.vercel.app/" />
        <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Christian Tibayrenc – Liste UFM | Élections Consulaires Madagascar 2026" />
        <meta name="twitter:description" content="Découvrez le programme de Christian Tibayrenc, tête de liste de l'Union des Français de Madagascar (UFM), candidat aux élections consulaires Madagascar du 17 mai 2026." />
      </Helmet>
      <main>
        <Hero content={content.hero} loading={loading} />
        <ListAction content={content.actions} />
        <ProgramPresentation content={content.programPresentation} />
        <About content={content.about} />
        <Quote content={content.quote} />
        <Program content={content.program} />
        <Newsletter content={content.newsletter} />
      </main>
    </>
  );
}

function AppLayout() {
  const { data } = useHomeContent();
  const content = data?.content || {};

  return (
    <div className="app">
      <Header content={content.header} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/program" element={
          <>
            <Helmet>
              <title>Programme Electoral – Union des Français de Madagascar | UFM 2026</title>
              <meta name="description" content="Le programme complet de la liste Union des Français de Madagascar (UFM), menée par Christian Tibayrenc, pour les élections consulaires Madagascar du 17 mai 2026." />
              <link rel="canonical" href="https://ufdm.vercel.app/program" />
              <meta property="og:title" content="Programme Electoral – Union des Français de Madagascar | UFM 2026" />
              <meta property="og:description" content="Le programme complet de la liste Union des Français de Madagascar (UFM), menée par Christian Tibayrenc, pour les élections consulaires Madagascar du 17 mai 2026." />
              <meta property="og:url" content="https://ufdm.vercel.app/program" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Programme Electoral – Union des Français de Madagascar | UFM 2026" />
              <meta name="twitter:description" content="Le programme complet de la liste Union des Français de Madagascar (UFM), menée par Christian Tibayrenc, pour les élections consulaires Madagascar du 17 mai 2026." />
            </Helmet>
            <ProgramAltPage />
          </>
        } />
        <Route path="/entrepreneur" element={
          <>
            <Helmet>
              <title>Soutenir les Entrepreneurs Français à Madagascar – UFM | Élections Consulaires 2026</title>
              <meta name="description" content="L'Union des Français de Madagascar (UFM) s'engage pour les entrepreneurs français à Madagascar. Découvrez les propositions de Christian Tibayrenc pour les élections consulaires 2026." />
              <link rel="canonical" href="https://ufdm.vercel.app/entrepreneur" />
              <meta property="og:title" content="Soutenir les Entrepreneurs Français à Madagascar – UFM | Élections Consulaires 2026" />
              <meta property="og:description" content="L'Union des Français de Madagascar (UFM) s'engage pour les entrepreneurs français à Madagascar. Découvrez les propositions de Christian Tibayrenc pour les élections consulaires 2026." />
              <meta property="og:url" content="https://ufdm.vercel.app/entrepreneur" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Soutenir les Entrepreneurs Français à Madagascar – UFM | Élections Consulaires 2026" />
              <meta name="twitter:description" content="L'Union des Français de Madagascar (UFM) s'engage pour les entrepreneurs français à Madagascar. Découvrez les propositions de Christian Tibayrenc pour les élections consulaires 2026." />
            </Helmet>
            <EntrepreneurPage />
          </>
        } />
        <Route path="/health" element={
          <>
            <Helmet>
              <title>Santé des Français de Madagascar – UFM | Élections Consulaires 2026</title>
              <meta name="description" content="L'Union des Français de Madagascar (UFM) propose des solutions concrètes pour la santé des Français résidant à Madagascar. Programme de Christian Tibayrenc pour les élections consulaires 2026." />
              <link rel="canonical" href="https://ufdm.vercel.app/health" />
              <meta property="og:title" content="Santé des Français de Madagascar – UFM | Élections Consulaires 2026" />
              <meta property="og:description" content="L'Union des Français de Madagascar (UFM) propose des solutions concrètes pour la santé des Français résidant à Madagascar. Programme de Christian Tibayrenc pour les élections consulaires 2026." />
              <meta property="og:url" content="https://ufdm.vercel.app/health" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Santé des Français de Madagascar – UFM | Élections Consulaires 2026" />
              <meta name="twitter:description" content="L'Union des Français de Madagascar (UFM) propose des solutions concrètes pour la santé des Français résidant à Madagascar. Programme de Christian Tibayrenc pour les élections consulaires 2026." />
            </Helmet>
            <HealthPage />
          </>
        } />
        <Route path="/take-action" element={
          <>
            <Helmet>
              <title>Agir pour les Français de Madagascar – UFM | Élections Consulaires 2026</title>
              <meta name="description" content="Rejoignez l'action de l'Union des Français de Madagascar (UFM). Soutenez Christian Tibayrenc et participez à la campagne pour les élections consulaires Madagascar 2026." />
              <link rel="canonical" href="https://ufdm.vercel.app/take-action" />
              <meta property="og:title" content="Agir pour les Français de Madagascar – UFM | Élections Consulaires 2026" />
              <meta property="og:description" content="Rejoignez l'action de l'Union des Français de Madagascar (UFM). Soutenez Christian Tibayrenc et participez à la campagne pour les élections consulaires Madagascar 2026." />
              <meta property="og:url" content="https://ufdm.vercel.app/take-action" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Agir pour les Français de Madagascar – UFM | Élections Consulaires 2026" />
              <meta name="twitter:description" content="Rejoignez l'action de l'Union des Français de Madagascar (UFM). Soutenez Christian Tibayrenc et participez à la campagne pour les élections consulaires Madagascar 2026." />
            </Helmet>
            <TakeActionPage />
          </>
        } />
        <Route path="/physical-security" element={
          <>
            <Helmet>
              <title>Sécurité Physique des Français à Madagascar – UFM | Élections Consulaires 2026</title>
              <meta name="description" content="L'Union des Français de Madagascar (UFM) s'engage pour la sécurité physique des Français résidant à Madagascar. Propositions de Christian Tibayrenc pour les élections consulaires 2026." />
              <link rel="canonical" href="https://ufdm.vercel.app/physical-security" />
              <meta property="og:title" content="Sécurité Physique des Français à Madagascar – UFM | Élections Consulaires 2026" />
              <meta property="og:description" content="L'Union des Français de Madagascar (UFM) s'engage pour la sécurité physique des Français résidant à Madagascar. Propositions de Christian Tibayrenc pour les élections consulaires 2026." />
              <meta property="og:url" content="https://ufdm.vercel.app/physical-security" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Sécurité Physique des Français à Madagascar – UFM | Élections Consulaires 2026" />
              <meta name="twitter:description" content="L'Union des Français de Madagascar (UFM) s'engage pour la sécurité physique des Français résidant à Madagascar. Propositions de Christian Tibayrenc pour les élections consulaires 2026." />
            </Helmet>
            <PhysicalSecurity />
          </>
        } />
        <Route path="/consular-procedures" element={
          <>
            <Helmet>
              <title>Procédures Consulaires – UFM | Union des Français de Madagascar 2026</title>
              <meta name="description" content="L'Union des Français de Madagascar (UFM) œuvre pour améliorer les procédures consulaires. Découvrez les engagements de Christian Tibayrenc pour les élections consulaires Madagascar 2026." />
              <link rel="canonical" href="https://ufdm.vercel.app/consular-procedures" />
              <meta property="og:title" content="Procédures Consulaires – UFM | Union des Français de Madagascar 2026" />
              <meta property="og:description" content="L'Union des Français de Madagascar (UFM) œuvre pour améliorer les procédures consulaires. Découvrez les engagements de Christian Tibayrenc pour les élections consulaires Madagascar 2026." />
              <meta property="og:url" content="https://ufdm.vercel.app/consular-procedures" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Procédures Consulaires – UFM | Union des Français de Madagascar 2026" />
              <meta name="twitter:description" content="L'Union des Français de Madagascar (UFM) œuvre pour améliorer les procédures consulaires. Découvrez les engagements de Christian Tibayrenc pour les élections consulaires Madagascar 2026." />
            </Helmet>
            <ConsularProcedures />
          </>
        } />
        <Route path="/daily-life" element={
          <>
            <Helmet>
              <title>Vie Quotidienne des Français à Madagascar – UFM | Élections Consulaires 2026</title>
              <meta name="description" content="L'Union des Français de Madagascar (UFM) s'engage pour améliorer le quotidien des Français résidant à Madagascar. Propositions concrètes de Christian Tibayrenc pour les élections consulaires 2026." />
              <link rel="canonical" href="https://ufdm.vercel.app/daily-life" />
              <meta property="og:title" content="Vie Quotidienne des Français à Madagascar – UFM | Élections Consulaires 2026" />
              <meta property="og:description" content="L'Union des Français de Madagascar (UFM) s'engage pour améliorer le quotidien des Français résidant à Madagascar. Propositions concrètes de Christian Tibayrenc pour les élections consulaires 2026." />
              <meta property="og:url" content="https://ufdm.vercel.app/daily-life" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Vie Quotidienne des Français à Madagascar – UFM | Élections Consulaires 2026" />
              <meta name="twitter:description" content="L'Union des Français de Madagascar (UFM) s'engage pour améliorer le quotidien des Français résidant à Madagascar. Propositions concrètes de Christian Tibayrenc pour les élections consulaires 2026." />
            </Helmet>
            <DailyLife />
          </>
        } />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/testify" element={<TestifyPage />} />
        <Route path="/donate" element={
          <>
            <Helmet>
              <title>Soutenir la Campagne UFM – Union des Français de Madagascar 2026</title>
              <meta name="description" content="Soutenez la campagne de l'Union des Français de Madagascar (UFM), menée par Christian Tibayrenc, pour les élections consulaires Madagascar 2026." />
              <link rel="canonical" href="https://ufdm.vercel.app/donate" />
              <meta property="og:title" content="Soutenir la Campagne UFM – Union des Français de Madagascar 2026" />
              <meta property="og:description" content="Soutenez la campagne de l'Union des Français de Madagascar (UFM), menée par Christian Tibayrenc, pour les élections consulaires Madagascar 2026." />
              <meta property="og:url" content="https://ufdm.vercel.app/donate" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Soutenir la Campagne UFM – Union des Français de Madagascar 2026" />
              <meta name="twitter:description" content="Soutenez la campagne de l'Union des Français de Madagascar (UFM), menée par Christian Tibayrenc, pour les élections consulaires Madagascar 2026." />
            </Helmet>
            <DonatePage />
          </>
        } />
        <Route path="/sign-petition" element={
          <>
            <Helmet>
              <title>Pétition – Union des Français de Madagascar | Christian Tibayrenc 2026</title>
              <meta name="description" content="Signez la pétition de l'Union des Français de Madagascar (UFM) et soutenez Christian Tibayrenc pour les élections consulaires Madagascar du 17 mai 2026." />
              <link rel="canonical" href="https://ufdm.vercel.app/sign-petition" />
              <meta property="og:title" content="Pétition – Union des Français de Madagascar | Christian Tibayrenc 2026" />
              <meta property="og:description" content="Signez la pétition de l'Union des Français de Madagascar (UFM) et soutenez Christian Tibayrenc pour les élections consulaires Madagascar du 17 mai 2026." />
              <meta property="og:url" content="https://ufdm.vercel.app/sign-petition" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Pétition – Union des Français de Madagascar | Christian Tibayrenc 2026" />
              <meta name="twitter:description" content="Signez la pétition de l'Union des Français de Madagascar (UFM) et soutenez Christian Tibayrenc pour les élections consulaires Madagascar du 17 mai 2026." />
            </Helmet>
            <SignPetition />
          </>
        } />
        <Route path="/terms" element={
          <>
            <Helmet>
              <title>Conditions d'utilisation – UFM | Union des Français de Madagascar</title>
              <meta name="description" content="Consultez les conditions d'utilisation du site de l'Union des Français de Madagascar (UFM), liste de Christian Tibayrenc pour les élections consulaires 2026." />
              <link rel="canonical" href="https://ufdm.vercel.app/terms" />
              <meta property="og:title" content="Conditions d'utilisation – UFM | Union des Français de Madagascar" />
              <meta property="og:description" content="Consultez les conditions d'utilisation du site de l'Union des Français de Madagascar (UFM), liste de Christian Tibayrenc pour les élections consulaires 2026." />
              <meta property="og:url" content="https://ufdm.vercel.app/terms" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Conditions d'utilisation – UFM | Union des Français de Madagascar" />
              <meta name="twitter:description" content="Consultez les conditions d'utilisation du site de l'Union des Français de Madagascar (UFM), liste de Christian Tibayrenc pour les élections consulaires 2026." />
            </Helmet>
            <TermsPage />
          </>
        } />
        <Route path="/print-tract" element={<PrintTract />} />
        <Route path="/share-video" element={<ShareVideo />} />
        <Route path="/team" element={
          <>
            <Helmet>
              <title>Notre Équipe – Christian Tibayrenc & la Liste UFM | Élections Consulaires 2026</title>
              <meta name="description" content="Rencontrez Christian Tibayrenc et les candidats de la liste Union des Français de Madagascar (UFM) pour les élections consulaires Madagascar du 17 mai 2026." />
              <link rel="canonical" href="https://ufdm.vercel.app/team" />
              <meta property="og:title" content="Notre Équipe – Christian Tibayrenc & la Liste UFM | Élections Consulaires 2026" />
              <meta property="og:description" content="Rencontrez Christian Tibayrenc et les candidats de la liste Union des Français de Madagascar (UFM) pour les élections consulaires Madagascar du 17 mai 2026." />
              <meta property="og:url" content="https://ufdm.vercel.app/team" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Notre Équipe – Christian Tibayrenc & la Liste UFM | Élections Consulaires 2026" />
              <meta name="twitter:description" content="Rencontrez Christian Tibayrenc et les candidats de la liste Union des Français de Madagascar (UFM) pour les élections consulaires Madagascar du 17 mai 2026." />
            </Helmet>
            <TeamPage />
          </>
        } />
        <Route path="/our-value" element={
          <>
            <Helmet>
              <title>Nos Valeurs – UFM | Union des Français de Madagascar | Élections 2026</title>
              <meta name="description" content="Les valeurs qui guident l'Union des Français de Madagascar (UFM) et la liste menée par Christian Tibayrenc pour les élections consulaires Madagascar 2026." />
              <link rel="canonical" href="https://ufdm.vercel.app/our-value" />
              <meta property="og:title" content="Nos Valeurs – UFM | Union des Français de Madagascar | Élections 2026" />
              <meta property="og:description" content="Les valeurs qui guident l'Union des Français de Madagascar (UFM) et la liste menée par Christian Tibayrenc pour les élections consulaires Madagascar 2026." />
              <meta property="og:url" content="https://ufdm.vercel.app/our-value" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Nos Valeurs – UFM | Union des Français de Madagascar | Élections 2026" />
              <meta name="twitter:description" content="Les valeurs qui guident l'Union des Français de Madagascar (UFM) et la liste menée par Christian Tibayrenc pour les élections consulaires Madagascar 2026." />
            </Helmet>
            <OurValue />
          </>
        } />
        <Route path="/heritage-security" element={
          <>
            <Helmet>
              <title>Sécurité Patrimoniale des Français à Madagascar – UFM | Élections 2026</title>
              <meta name="description" content="L'Union des Français de Madagascar (UFM) protège le patrimoine des Français résidant à Madagascar. Engagements de Christian Tibayrenc pour les élections consulaires 2026." />
              <link rel="canonical" href="https://ufdm.vercel.app/heritage-security" />
              <meta property="og:title" content="Sécurité Patrimoniale des Français à Madagascar – UFM | Élections 2026" />
              <meta property="og:description" content="L'Union des Français de Madagascar (UFM) protège le patrimoine des Français résidant à Madagascar. Engagements de Christian Tibayrenc pour les élections consulaires 2026." />
              <meta property="og:url" content="https://ufdm.vercel.app/heritage-security" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Sécurité Patrimoniale des Français à Madagascar – UFM | Élections 2026" />
              <meta name="twitter:description" content="L'Union des Français de Madagascar (UFM) protège le patrimoine des Français résidant à Madagascar. Engagements de Christian Tibayrenc pour les élections consulaires 2026." />
            </Helmet>
            <HeritageSecurity />
          </>
        } />
        <Route path="/family-education" element={
          <>
            <Helmet>
              <title>Éducation & Famille des Français à Madagascar – UFM | Élections 2026</title>
              <meta name="description" content="L'Union des Français de Madagascar (UFM) soutient l'éducation et les familles françaises à Madagascar. Propositions de Christian Tibayrenc pour les élections consulaires 2026." />
              <link rel="canonical" href="https://ufdm.vercel.app/family-education" />
              <meta property="og:title" content="Éducation & Famille des Français à Madagascar – UFM | Élections 2026" />
              <meta property="og:description" content="L'Union des Français de Madagascar (UFM) soutient l'éducation et les familles françaises à Madagascar. Propositions de Christian Tibayrenc pour les élections consulaires 2026." />
              <meta property="og:url" content="https://ufdm.vercel.app/family-education" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Éducation & Famille des Français à Madagascar – UFM | Élections 2026" />
              <meta name="twitter:description" content="L'Union des Français de Madagascar (UFM) soutient l'éducation et les familles françaises à Madagascar. Propositions de Christian Tibayrenc pour les élections consulaires 2026." />
            </Helmet>
            <FamilyEducation />
          </>
        } />
        <Route path="/partner-article" element={
          <>
            <Helmet>
              <title>Articles Partenaires – UFM | Union des Français de Madagascar 2026</title>
              <meta name="description" content="Articles et contributions des partenaires de l'Union des Français de Madagascar (UFM), la liste de Christian Tibayrenc pour les élections consulaires Madagascar 2026." />
              <link rel="canonical" href="https://ufdm.vercel.app/partner-article" />
              <meta property="og:title" content="Articles Partenaires – UFM | Union des Français de Madagascar 2026" />
              <meta property="og:description" content="Articles et contributions des partenaires de l'Union des Français de Madagascar (UFM), la liste de Christian Tibayrenc pour les élections consulaires Madagascar 2026." />
              <meta property="og:url" content="https://ufdm.vercel.app/partner-article" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Articles Partenaires – UFM | Union des Français de Madagascar 2026" />
              <meta name="twitter:description" content="Articles et contributions des partenaires de l'Union des Français de Madagascar (UFM), la liste de Christian Tibayrenc pour les élections consulaires Madagascar 2026." />
            </Helmet>
            <PartenaireArticle />
          </>
        } />
        <Route path="/administration" element={<AdministrationPage />} />
        <Route path="/forum" element={
          <>
            <Helmet>
              <title>Forum des Français de Madagascar – UFM | Élections Consulaires 2026</title>
              <meta name="description" content="Échangez sur le forum de l'Union des Français de Madagascar (UFM). Partagez vos questions sur les élections consulaires 2026 et les enjeux de la communauté française à Madagascar." />
              <link rel="canonical" href="https://ufdm.vercel.app/forum" />
              <meta property="og:title" content="Forum des Français de Madagascar – UFM | Élections Consulaires 2026" />
              <meta property="og:description" content="Échangez sur le forum de l'Union des Français de Madagascar (UFM). Partagez vos questions sur les élections consulaires 2026 et les enjeux de la communauté française à Madagascar." />
              <meta property="og:url" content="https://ufdm.vercel.app/forum" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Forum des Français de Madagascar – UFM | Élections Consulaires 2026" />
              <meta name="twitter:description" content="Échangez sur le forum de l'Union des Français de Madagascar (UFM). Partagez vos questions sur les élections consulaires 2026 et les enjeux de la communauté française à Madagascar." />
            </Helmet>
            <ForumPage />
          </>
        } />
        <Route path="/milite" element={
          <>
            <Helmet>
              <title>Rejoindre l'UFM – Militer | Union des Français de Madagascar 2026</title>
              <meta name="description" content="Rejoignez les militants de l'Union des Français de Madagascar (UFM) et soutenez Christian Tibayrenc sur le terrain pour les élections consulaires Madagascar 2026." />
              <link rel="canonical" href="https://ufdm.vercel.app/milite" />
              <meta property="og:title" content="Rejoindre l'UFM – Militer | Union des Français de Madagascar 2026" />
              <meta property="og:description" content="Rejoignez les militants de l'Union des Français de Madagascar (UFM) et soutenez Christian Tibayrenc sur le terrain pour les élections consulaires Madagascar 2026." />
              <meta property="og:url" content="https://ufdm.vercel.app/milite" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Rejoindre l'UFM – Militer | Union des Français de Madagascar 2026" />
              <meta name="twitter:description" content="Rejoignez les militants de l'Union des Français de Madagascar (UFM) et soutenez Christian Tibayrenc sur le terrain pour les élections consulaires Madagascar 2026." />
            </Helmet>
            <MilitePage />
          </>
        } />
        <Route path="/about-article" element={
          <>
            <Helmet>
              <title>À Propos de l'UFM – Christian Tibayrenc | Union des Français de Madagascar</title>
              <meta name="description" content="Découvrez l'Union des Français de Madagascar (UFM) et le parcours de Christian Tibayrenc, tête de liste pour les élections consulaires Madagascar 2026." />
              <link rel="canonical" href="https://ufdm.vercel.app/about-article" />
              <meta property="og:title" content="À Propos de l'UFM – Christian Tibayrenc | Union des Français de Madagascar" />
              <meta property="og:description" content="Découvrez l'Union des Français de Madagascar (UFM) et le parcours de Christian Tibayrenc, tête de liste pour les élections consulaires Madagascar 2026." />
              <meta property="og:url" content="https://ufdm.vercel.app/about-article" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="À Propos de l'UFM – Christian Tibayrenc | Union des Français de Madagascar" />
              <meta name="twitter:description" content="Découvrez l'Union des Français de Madagascar (UFM) et le parcours de Christian Tibayrenc, tête de liste pour les élections consulaires Madagascar 2026." />
            </Helmet>
            <AboutArticle />
          </>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer content={content.footer} />
      <CookieConsent />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageTracker />
      <AppLayout />
    </BrowserRouter>
  );
}