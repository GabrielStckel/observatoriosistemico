import HeroSection from "@/components/HeroSection";
import ObjectiveSection from "@/components/ObjectiveSection";
import SpecificObjectivesSection from "@/components/SpecificObjectivesSection";
import JourneySection from "@/components/JourneySection";
import SupportSection from "@/components/SupportSection";
import LaboratorySection from "@/components/LaboratorySection";
import HybridSection from "@/components/HybridSection";
import ScheduleSection from "@/components/ScheduleSection";
import ContactSection from "@/components/ContactSection";
import { Instagram } from "lucide-react";

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
      <ContactSection />

      <footer className="gradient-hero py-10">
        <div className="container text-center">
          <p className="font-body text-sm font-semibold text-primary-foreground tracking-wide">
            Observatório Sistêmico
          </p>
          <a
            href="https://www.instagram.com/jonas_peress/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <Instagram size={18} />
            <span className="text-sm font-body">@jonas_peress</span>
          </a>
          <p className="text-primary-foreground/50 text-xs mt-4 font-body">
            © {new Date().getFullYear()} Observatório Sistêmico. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
