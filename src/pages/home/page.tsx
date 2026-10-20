import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import BackToTop from "@/components/feature/BackToTop";
import Hero from "@/pages/home/components/Hero";
import ProblemSection from "@/pages/home/components/ProblemSection";
import SolutionSection from "@/pages/home/components/SolutionSection";
import ControlSection from "@/pages/home/components/ControlSection";
import FeaturesSection from "@/pages/home/components/FeaturesSection";
import AppInsideSection from "@/pages/home/components/AppInsideSection";
import PrivacySection from "@/pages/home/components/PrivacySection";
import HowItWorksSection from "@/pages/home/components/HowItWorksSection";
import PricingSection from "@/pages/home/components/PricingSection";
import FaqSection from "@/pages/home/components/FaqSection";
import CtaSection from "@/pages/home/components/CtaSection";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background-50">
      <Navbar transparent />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ControlSection />
        <FeaturesSection />
        <AppInsideSection />
        <PrivacySection />
        <HowItWorksSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}