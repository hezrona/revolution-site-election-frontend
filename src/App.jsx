import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
            </Helmet>
            <AboutArticle />
          </>
        } />
      </Routes>
      <Footer content={content.footer} />
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