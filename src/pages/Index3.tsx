import { lazy, Suspense, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import { Instagram } from "lucide-react";
import { trackActivity } from "@/hooks/useActivityTracker";
import ProfileMenu from "@/components/ProfileMenu";

const ObjectiveSection = lazy(() => import("@/components/ObjectiveSection"));
const SpecificObjectivesSection = lazy(() => import("@/components/SpecificObjectivesSection"));
const JourneySection = lazy(() => import("@/components/JourneySection"));
const SupportSection = lazy(() => import("@/components/SupportSection"));
const LaboratorySection = lazy(() => import("@/components/LaboratorySection"));
const MeetingSummariesSection = lazy(() => import("@/components/MeetingSummariesSection"));
const SystemicStudiesSection = lazy(() => import("@/components/SystemicStudiesSection"));
const ScheduleSection = lazy(() => import("@/components/ScheduleSection"));


const SectionFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-5 h-5 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
  </div>
);

const Index3 = () => {
  useEffect(() => {
    trackActivity("page_view", { page: "/informacoes" });
  }, []);

  return (
    <main className="min-h-screen theme-blue overflow-x-hidden">
      <ProfileMenu />

      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <ObjectiveSection />
        <SpecificObjectivesSection />
        <JourneySection />
        <SupportSection />
        <LaboratorySection />
        <MeetingSummariesSection />
        <ScheduleSection />
        
      </Suspense>

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
          <p className="text-primary-foreground/40 text-xs font-body text-center" style={{ hyphens: 'none' }}>
            © {new Date().getFullYear()} Observatório Sistêmico. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index3;
