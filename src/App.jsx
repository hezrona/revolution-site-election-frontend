import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ListAction from "./components/listAction/ListAction.jsx";
import About from "./components/About.jsx";
import Quote from "./components/Quote.jsx";
import Program from "./components/Program.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";
import ProgramPage from "./components/program/ProgramPage.jsx";
import TakeActionPage from "./components/takeAction/TakeActionPage.jsx";
import TestifyPage from "./components/toTesify/TestifyPage.jsx";
import DonatePage from "./components/donate/DonatePage.jsx";
import SignPetition from "./components/signPetition/SignPetition.jsx";
import TermsPage from "./components/termsCondition/TermsPage.jsx";
import PrintTract from "./components/printTract/PrintTract.jsx";
import ShareVideo from "./components/shareVideo/ShareVideo.jsx";

export default function App() {
  const [activeView, setActiveView] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setActiveView(window.location.hash);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="app">
      <Header />
      {activeView === "#program-page" ? (
        <ProgramPage />
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
      ) : (
        <main>
          <Hero />
          <ListAction />
          <About />
          <Quote />
          <Program />
          <Newsletter />
        </main>
      )}
      <Footer />
    </div>
  );
}
