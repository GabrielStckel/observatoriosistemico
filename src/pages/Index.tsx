import HeroSection from "@/components/HeroSection";
import ObjectiveSection from "@/components/ObjectiveSection";
import SpecificObjectivesSection from "@/components/SpecificObjectivesSection";
import JourneySection from "@/components/JourneySection";
import SupportSection from "@/components/SupportSection";
import LaboratorySection from "@/components/LaboratorySection";
import HybridSection from "@/components/HybridSection";
import ScheduleSection from "@/components/ScheduleSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ObjectiveSection />
      <SpecificObjectivesSection />
      <JourneySection />
      <SupportSection />
      <LaboratorySection />
      <HybridSection />
      <ScheduleSection />

      {/* Footer */}
      <footer className="section-white py-12 border-t border-border">
        <div className="container text-center">
          <p className="font-display font-semibold text-foreground text-lg mb-2">
            Observatório Sistêmico
          </p>
          <p className="text-muted-foreground text-sm">
            Ciência Sistêmica · Constelação · Comunidade
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
