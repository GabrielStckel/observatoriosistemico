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

      <footer className="gradient-hero py-8">
        <div className="container max-w-2xl flex flex-col items-center gap-4">
          <p className="font-display text-base font-medium text-primary-foreground tracking-wide">
            Observatório Sistêmico
          </p>
          <a
            href="https://www.instagram.com/jonas_peress/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <Instagram size={22} />
          </a>
          <p className="text-primary-foreground/40 text-xs font-body">
            © {new Date().getFullYear()} Observatório Sistêmico. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
