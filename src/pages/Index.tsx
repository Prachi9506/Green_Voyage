import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CarbonCalculator from "@/components/CarbonCalculator";
import EcoTips from "@/components/EcoTips";
import TripPlanner from "@/components/TripPlanner";
import Collaborations from "@/components/Collaborations";
import Blog from "@/components/Blog";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const renderSection = () => {
    switch (activeSection) {
      case "calculator":
        return <CarbonCalculator />;
      case "tips":
        return <EcoTips />;
      case "planner":
        return <TripPlanner />;
      case "collaborations":
        return <Collaborations />;
      case "blog":
        return <Blog />;
      default:
        return <HeroSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {activeSection !== "hero" && (
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      )}
      
      {activeSection === "hero" ? (
        <>
          <HeroSection setActiveSection={setActiveSection} />
          <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        </>
      ) : (
        <main className="container mx-auto px-4 py-8">
          {renderSection()}
        </main>
      )}
      
      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="text-forest-green">🌱</span>
              <span className="font-semibold">EcoVoyage</span>
              <span className="text-forest-green">🌍</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering sustainable travel choices for a greener planet
            </p>
            <p className="text-xs text-muted-foreground">
              © 2024 EcoVoyage. All rights reserved. Travel responsibly. 🌿
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
