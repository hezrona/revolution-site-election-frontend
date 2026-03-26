import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <main>
      <Hero content={content.hero} loading={loading} />
      <ListAction content={content.actions} />
      <ProgramPresentation content={content.programPresentation} />
      <About content={content.about} />
      <Quote content={content.quote} />
      <Program content={content.program} />
      <Newsletter content={content.newsletter} />
    </main>
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
        <Route path="/program" element={<ProgramAltPage />} />
        <Route path="/entrepreneur" element={<EntrepreneurPage />} />
        <Route path="/health" element={<HealthPage />} />
        <Route path="/take-action" element={<TakeActionPage />} />
        <Route path="/physical-security" element={<PhysicalSecurity />} />
        <Route path="/consular-procedures" element={<ConsularProcedures />} />
        <Route path="/daily-life" element={<DailyLife />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/testify" element={<TestifyPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/sign-petition" element={<SignPetition />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/print-tract" element={<PrintTract />} />
        <Route path="/share-video" element={<ShareVideo />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/our-value" element={<OurValue />} />
        <Route path="/heritage-security" element={<HeritageSecurity />} />
        <Route path="/family-education" element={<FamilyEducation />} />
        <Route path="/partner-article" element={<PartenaireArticle />} />
        <Route path="/administration" element={<AdministrationPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/milite" element={<MilitePage />} />
        <Route path="/about-article" element={<AboutArticle />} />
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