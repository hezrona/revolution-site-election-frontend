import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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


function HomePage() {
  const { data, loading, error } = useHomeContent();
  const content = data?.content || {};

  return (
    <>
      <Helmet>
        <title>Mada Campaign – Plateforme citoyenne pour Madagascar</title>
        <meta name="description" content="Mada Campaign est une plateforme citoyenne dédiée aux Malgaches. Rejoignez-nous pour agir, pétitionner et construire un meilleur avenir pour Madagascar." />
        <link rel="canonical" href="https://ufdm.vercel.app/" />
        <meta property="og:title" content="Mada Campaign – Plateforme citoyenne pour Madagascar" />
        <meta property="og:description" content="Mada Campaign est une plateforme citoyenne dédiée aux Malgaches. Rejoignez-nous pour agir, pétitionner et construire un meilleur avenir pour Madagascar." />
        <meta property="og:url" content="https://ufdm.vercel.app/" />
        <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mada Campaign – Plateforme citoyenne pour Madagascar" />
        <meta name="twitter:description" content="Mada Campaign est une plateforme citoyenne dédiée aux Malgaches. Rejoignez-nous pour agir, pétitionner et construire un meilleur avenir pour Madagascar." />
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
              <title>Programme – Mada Campaign</title>
              <meta name="description" content="Découvrez le programme de Mada Campaign pour le développement et le bien-être des citoyens malgaches." />
              <link rel="canonical" href="https://ufdm.vercel.app/program" />
              <meta property="og:title" content="Programme – Mada Campaign" />
              <meta property="og:description" content="Découvrez le programme de Mada Campaign pour le développement et le bien-être des citoyens malgaches." />
              <meta property="og:url" content="https://ufdm.vercel.app/program" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Programme – Mada Campaign" />
              <meta name="twitter:description" content="Découvrez le programme de Mada Campaign pour le développement et le bien-être des citoyens malgaches." />
            </Helmet>
            <ProgramAltPage />
          </>
        } />
        <Route path="/entrepreneur" element={
          <>
            <Helmet>
              <title>Entrepreneuriat – Mada Campaign</title>
              <meta name="description" content="Soutenez l'entrepreneuriat à Madagascar avec Mada Campaign. Ressources et actions pour les entrepreneurs malgaches." />
              <link rel="canonical" href="https://ufdm.vercel.app/entrepreneur" />
              <meta property="og:title" content="Entrepreneuriat – Mada Campaign" />
              <meta property="og:description" content="Soutenez l'entrepreneuriat à Madagascar avec Mada Campaign. Ressources et actions pour les entrepreneurs malgaches." />
              <meta property="og:url" content="https://ufdm.vercel.app/entrepreneur" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Entrepreneuriat – Mada Campaign" />
              <meta name="twitter:description" content="Soutenez l'entrepreneuriat à Madagascar avec Mada Campaign. Ressources et actions pour les entrepreneurs malgaches." />
            </Helmet>
            <EntrepreneurPage />
          </>
        } />
        <Route path="/health" element={
          <>
            <Helmet>
              <title>Santé – Mada Campaign</title>
              <meta name="description" content="Informations et actions sur la santé des citoyens malgaches avec Mada Campaign." />
              <link rel="canonical" href="https://ufdm.vercel.app/health" />
              <meta property="og:title" content="Santé – Mada Campaign" />
              <meta property="og:description" content="Informations et actions sur la santé des citoyens malgaches avec Mada Campaign." />
              <meta property="og:url" content="https://ufdm.vercel.app/health" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Santé – Mada Campaign" />
              <meta name="twitter:description" content="Informations et actions sur la santé des citoyens malgaches avec Mada Campaign." />
            </Helmet>
            <HealthPage />
          </>
        } />
        <Route path="/take-action" element={
          <>
            <Helmet>
              <title>Agir – Mada Campaign</title>
              <meta name="description" content="Passez à l'action avec Mada Campaign. Rejoignez la communauté citoyenne et participez au changement à Madagascar." />
              <link rel="canonical" href="https://ufdm.vercel.app/take-action" />
              <meta property="og:title" content="Agir – Mada Campaign" />
              <meta property="og:description" content="Passez à l'action avec Mada Campaign. Rejoignez la communauté citoyenne et participez au changement à Madagascar." />
              <meta property="og:url" content="https://ufdm.vercel.app/take-action" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Agir – Mada Campaign" />
              <meta name="twitter:description" content="Passez à l'action avec Mada Campaign. Rejoignez la communauté citoyenne et participez au changement à Madagascar." />
            </Helmet>
            <TakeActionPage />
          </>
        } />
        <Route path="/physical-security" element={
          <>
            <Helmet>
              <title>Sécurité Physique – Mada Campaign</title>
              <meta name="description" content="Informations et actions pour la sécurité physique des citoyens malgaches avec Mada Campaign." />
              <link rel="canonical" href="https://ufdm.vercel.app/physical-security" />
              <meta property="og:title" content="Sécurité Physique – Mada Campaign" />
              <meta property="og:description" content="Informations et actions pour la sécurité physique des citoyens malgaches avec Mada Campaign." />
              <meta property="og:url" content="https://ufdm.vercel.app/physical-security" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Sécurité Physique – Mada Campaign" />
              <meta name="twitter:description" content="Informations et actions pour la sécurité physique des citoyens malgaches avec Mada Campaign." />
            </Helmet>
            <PhysicalSecurity />
          </>
        } />
        <Route path="/consular-procedures" element={
          <>
            <Helmet>
              <title>Procédures Consulaires – Mada Campaign</title>
              <meta name="description" content="Guide des procédures consulaires pour les Malgaches avec Mada Campaign." />
              <link rel="canonical" href="https://ufdm.vercel.app/consular-procedures" />
              <meta property="og:title" content="Procédures Consulaires – Mada Campaign" />
              <meta property="og:description" content="Guide des procédures consulaires pour les Malgaches avec Mada Campaign." />
              <meta property="og:url" content="https://ufdm.vercel.app/consular-procedures" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Procédures Consulaires – Mada Campaign" />
              <meta name="twitter:description" content="Guide des procédures consulaires pour les Malgaches avec Mada Campaign." />
            </Helmet>
            <ConsularProcedures />
          </>
        } />
        <Route path="/daily-life" element={
          <>
            <Helmet>
              <title>Vie Quotidienne – Mada Campaign</title>
              <meta name="description" content="Améliorez votre vie quotidienne avec les initiatives et ressources de Mada Campaign pour les Malgaches." />
              <link rel="canonical" href="https://ufdm.vercel.app/daily-life" />
              <meta property="og:title" content="Vie Quotidienne – Mada Campaign" />
              <meta property="og:description" content="Améliorez votre vie quotidienne avec les initiatives et ressources de Mada Campaign pour les Malgaches." />
              <meta property="og:url" content="https://ufdm.vercel.app/daily-life" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Vie Quotidienne – Mada Campaign" />
              <meta name="twitter:description" content="Améliorez votre vie quotidienne avec les initiatives et ressources de Mada Campaign pour les Malgaches." />
            </Helmet>
            <DailyLife />
          </>
        } />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/testify" element={<TestifyPage />} />
        <Route path="/donate" element={
          <>
            <Helmet>
              <title>Faire un Don – Mada Campaign</title>
              <meta name="description" content="Soutenez Mada Campaign avec un don et contribuez au développement de Madagascar." />
              <link rel="canonical" href="https://ufdm.vercel.app/donate" />
              <meta property="og:title" content="Faire un Don – Mada Campaign" />
              <meta property="og:description" content="Soutenez Mada Campaign avec un don et contribuez au développement de Madagascar." />
              <meta property="og:url" content="https://ufdm.vercel.app/donate" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Faire un Don – Mada Campaign" />
              <meta name="twitter:description" content="Soutenez Mada Campaign avec un don et contribuez au développement de Madagascar." />
            </Helmet>
            <DonatePage />
          </>
        } />
        <Route path="/sign-petition" element={
          <>
            <Helmet>
              <title>Signer la Pétition – Mada Campaign</title>
              <meta name="description" content="Signez la pétition de Mada Campaign et faites entendre votre voix pour un Madagascar meilleur." />
              <link rel="canonical" href="https://ufdm.vercel.app/sign-petition" />
              <meta property="og:title" content="Signer la Pétition – Mada Campaign" />
              <meta property="og:description" content="Signez la pétition de Mada Campaign et faites entendre votre voix pour un Madagascar meilleur." />
              <meta property="og:url" content="https://ufdm.vercel.app/sign-petition" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Signer la Pétition – Mada Campaign" />
              <meta name="twitter:description" content="Signez la pétition de Mada Campaign et faites entendre votre voix pour un Madagascar meilleur." />
            </Helmet>
            <SignPetition />
          </>
        } />
        <Route path="/terms" element={
          <>
            <Helmet>
              <title>Conditions d'utilisation – Mada Campaign</title>
              <meta name="description" content="Consultez les conditions d'utilisation de Mada Campaign." />
              <link rel="canonical" href="https://ufdm.vercel.app/terms" />
              <meta property="og:title" content="Conditions d'utilisation – Mada Campaign" />
              <meta property="og:description" content="Consultez les conditions d'utilisation de Mada Campaign." />
              <meta property="og:url" content="https://ufdm.vercel.app/terms" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Conditions d'utilisation – Mada Campaign" />
              <meta name="twitter:description" content="Consultez les conditions d'utilisation de Mada Campaign." />
            </Helmet>
            <TermsPage />
          </>
        } />
        <Route path="/print-tract" element={<PrintTract />} />
        <Route path="/share-video" element={<ShareVideo />} />
        <Route path="/team" element={
          <>
            <Helmet>
              <title>Notre Équipe – Mada Campaign</title>
              <meta name="description" content="Rencontrez l'équipe engagée derrière Mada Campaign, dédiée à l'amélioration de la vie des Malgaches." />
              <link rel="canonical" href="https://ufdm.vercel.app/team" />
              <meta property="og:title" content="Notre Équipe – Mada Campaign" />
              <meta property="og:description" content="Rencontrez l'équipe engagée derrière Mada Campaign, dédiée à l'amélioration de la vie des Malgaches." />
              <meta property="og:url" content="https://ufdm.vercel.app/team" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Notre Équipe – Mada Campaign" />
              <meta name="twitter:description" content="Rencontrez l'équipe engagée derrière Mada Campaign, dédiée à l'amélioration de la vie des Malgaches." />
            </Helmet>
            <TeamPage />
          </>
        } />
        <Route path="/our-value" element={
          <>
            <Helmet>
              <title>Nos Valeurs – Mada Campaign</title>
              <meta name="description" content="Découvrez les valeurs fondatrices de Mada Campaign pour un Madagascar meilleur." />
              <link rel="canonical" href="https://ufdm.vercel.app/our-value" />
              <meta property="og:title" content="Nos Valeurs – Mada Campaign" />
              <meta property="og:description" content="Découvrez les valeurs fondatrices de Mada Campaign pour un Madagascar meilleur." />
              <meta property="og:url" content="https://ufdm.vercel.app/our-value" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Nos Valeurs – Mada Campaign" />
              <meta name="twitter:description" content="Découvrez les valeurs fondatrices de Mada Campaign pour un Madagascar meilleur." />
            </Helmet>
            <OurValue />
          </>
        } />
        <Route path="/heritage-security" element={
          <>
            <Helmet>
              <title>Sécurité du Patrimoine – Mada Campaign</title>
              <meta name="description" content="Protégez votre patrimoine avec Mada Campaign. Ressources et conseils pour les citoyens malgaches." />
              <link rel="canonical" href="https://ufdm.vercel.app/heritage-security" />
              <meta property="og:title" content="Sécurité du Patrimoine – Mada Campaign" />
              <meta property="og:description" content="Protégez votre patrimoine avec Mada Campaign. Ressources et conseils pour les citoyens malgaches." />
              <meta property="og:url" content="https://ufdm.vercel.app/heritage-security" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Sécurité du Patrimoine – Mada Campaign" />
              <meta name="twitter:description" content="Protégez votre patrimoine avec Mada Campaign. Ressources et conseils pour les citoyens malgaches." />
            </Helmet>
            <HeritageSecurity />
          </>
        } />
        <Route path="/family-education" element={
          <>
            <Helmet>
              <title>Éducation Familiale – Mada Campaign</title>
              <meta name="description" content="Ressources et actions pour l'éducation familiale à Madagascar avec Mada Campaign." />
              <link rel="canonical" href="https://ufdm.vercel.app/family-education" />
              <meta property="og:title" content="Éducation Familiale – Mada Campaign" />
              <meta property="og:description" content="Ressources et actions pour l'éducation familiale à Madagascar avec Mada Campaign." />
              <meta property="og:url" content="https://ufdm.vercel.app/family-education" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Éducation Familiale – Mada Campaign" />
              <meta name="twitter:description" content="Ressources et actions pour l'éducation familiale à Madagascar avec Mada Campaign." />
            </Helmet>
            <FamilyEducation />
          </>
        } />
        <Route path="/partner-article" element={
          <>
            <Helmet>
              <title>Articles Partenaires – Mada Campaign</title>
              <meta name="description" content="Découvrez les articles et contributions de nos partenaires sur Mada Campaign." />
              <link rel="canonical" href="https://ufdm.vercel.app/partner-article" />
              <meta property="og:title" content="Articles Partenaires – Mada Campaign" />
              <meta property="og:description" content="Découvrez les articles et contributions de nos partenaires sur Mada Campaign." />
              <meta property="og:url" content="https://ufdm.vercel.app/partner-article" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Articles Partenaires – Mada Campaign" />
              <meta name="twitter:description" content="Découvrez les articles et contributions de nos partenaires sur Mada Campaign." />
            </Helmet>
            <PartenaireArticle />
          </>
        } />
        <Route path="/administration" element={<AdministrationPage />} />
        <Route path="/forum" element={
          <>
            <Helmet>
              <title>Forum – Mada Campaign</title>
              <meta name="description" content="Rejoignez le forum de Mada Campaign et échangez avec la communauté citoyenne malgache." />
              <link rel="canonical" href="https://ufdm.vercel.app/forum" />
              <meta property="og:title" content="Forum – Mada Campaign" />
              <meta property="og:description" content="Rejoignez le forum de Mada Campaign et échangez avec la communauté citoyenne malgache." />
              <meta property="og:url" content="https://ufdm.vercel.app/forum" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Forum – Mada Campaign" />
              <meta name="twitter:description" content="Rejoignez le forum de Mada Campaign et échangez avec la communauté citoyenne malgache." />
            </Helmet>
            <ForumPage />
          </>
        } />
        <Route path="/milite" element={
          <>
            <Helmet>
              <title>Militer – Mada Campaign</title>
              <meta name="description" content="Rejoignez les militants de Mada Campaign et agissez sur le terrain pour Madagascar." />
              <link rel="canonical" href="https://ufdm.vercel.app/milite" />
              <meta property="og:title" content="Militer – Mada Campaign" />
              <meta property="og:description" content="Rejoignez les militants de Mada Campaign et agissez sur le terrain pour Madagascar." />
              <meta property="og:url" content="https://ufdm.vercel.app/milite" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Militer – Mada Campaign" />
              <meta name="twitter:description" content="Rejoignez les militants de Mada Campaign et agissez sur le terrain pour Madagascar." />
            </Helmet>
            <MilitePage />
          </>
        } />
        <Route path="/about-article" element={
          <>
            <Helmet>
              <title>À Propos – Mada Campaign</title>
              <meta name="description" content="En savoir plus sur Mada Campaign, sa mission et son engagement pour les citoyens malgaches." />
              <link rel="canonical" href="https://ufdm.vercel.app/about-article" />
              <meta property="og:title" content="À Propos – Mada Campaign" />
              <meta property="og:description" content="En savoir plus sur Mada Campaign, sa mission et son engagement pour les citoyens malgaches." />
              <meta property="og:url" content="https://ufdm.vercel.app/about-article" />
              <meta property="og:image" content="https://ufdm.vercel.app/og-image.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="À Propos – Mada Campaign" />
              <meta name="twitter:description" content="En savoir plus sur Mada Campaign, sa mission et son engagement pour les citoyens malgaches." />
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
      <AppLayout />
    </BrowserRouter>
  );
}