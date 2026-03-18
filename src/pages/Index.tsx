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

      <footer className="section-white py-16 border-t border-border">
        <div className="container text-center">
          <p className="font-body text-sm font-semibold text-foreground tracking-wide">
            Observatório Sistêmico
          </p>
          <p className="text-muted-foreground text-xs mt-2 font-body">
            Ciência Sistêmica · Constelação · Comunidade
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
