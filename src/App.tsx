import React, { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsShowcase from "./components/SkillsShowcase";
import PortfolioGallery from "./components/PortfolioGallery";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import CompanyLogos from "./components/CompanyLogos";
import TikTokShowcase from "./components/TikTokShowcase";

function App() {
  useEffect(() => {
    document.title = "Elbetel Ashenafi Tola | Portfolio";

    const style = document.createElement("style");
    style.textContent = `
      @keyframes blob {
        0% {
          transform: translate(0px, 0px) scale(1);
        }
        33% {
          transform: translate(30px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
          transform: translate(0px, 0px) scale(1);
        }
      }
      
      @keyframes skillFill {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(0);
        }
      }
      
      html {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <LoadingScreen />
      <Header />
      <main>
        <HeroSection />
        {/* <CompanyLogos /> */}
        <TikTokShowcase />
        <ExperienceTimeline />
        <SkillsShowcase />
        <PortfolioGallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
