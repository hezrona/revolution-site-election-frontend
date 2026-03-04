import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ListAction from "./components/listAction/ListAction.jsx";
import About from "./components/About.jsx";
import Quote from "./components/Quote.jsx";
import Program from "./components/Program.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";
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
import OurValue from "./components/ourValue/OurValue.jsx";
import HeritageSecurity from "./components/heritageSecurity/HeritageSecurity.jsx";
import PartenaireArticle from "./components/partenaire/PartenaireArticle.jsx";
import { useHomeContent } from "./hooks/useHomeContent.js";

export default function App() {
  const [activeView, setActiveView] = useState(window.location.hash);
  const { data, loading, error } = useHomeContent();
  const content = data?.content || {};

  useEffect(() => {
    const onHashChange = () => {
      setActiveView(window.location.hash);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="app">
      <Header content={content.header} />
      {activeView === "#program-page" || activeView === "#program-alt-page" ? (
        <ProgramAltPage />
      ) : activeView === "#entrepreneur" ? (
        <EntrepreneurPage />
      ) : activeView === "#take-action" ? (
        <TakeActionPage />
      ) : activeView === "#testify" ? (
        <TestifyPage />
      ) : activeView === "#donate" ? (
        <DonatePage />
      ) : activeView === "#sign-petition" ? (
        <SignPetition />
      ) : activeView === "#terms" ? (
        <TermsPage />
      ) : activeView === "#print-tract" ? (
        <PrintTract />
      ) : activeView === "#share-video" ? (
        <ShareVideo />
      ) : activeView === "#team" ? (
        <TeamPage />
      ) : activeView === "#our-value" ? (
        <OurValue />
      ) : activeView === "#heritage-security" ? (
        <HeritageSecurity />
      ) : activeView === "#partner-article" ? (
        <PartenaireArticle />
      ) : (
        <main>
          {/* {error ? (
            <div className="container" role="alert">
              {error}
            </div>
          ) : null} */}
          <Hero content={content.hero} loading={loading} />
          <ListAction content={content.actions} />
          <ProgramPresentation content={content.programPresentation} />
          <About content={content.about} />
          <Quote content={content.quote} />
          <Program content={content.program} />
          <Newsletter content={content.newsletter} />
        </main>
      )}
      <Footer content={content.footer} />
    </div>
  );
}
