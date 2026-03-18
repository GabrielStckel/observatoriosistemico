import SectionTitle from "./SectionTitle";
import { MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-muted py-10 md:py-16">
      <div className="container max-w-2xl">
        <SectionTitle label="Entre em contato" />
        <p className="text-foreground text-[14px] md:text-[15px] leading-[1.85] font-body font-light text-center" style={{ hyphens: "none", textAlign: "center" }}>
          Tem interesse em participar do Observatório Sistêmico ou deseja saber mais? Entre em contato conosco.
        </p>

        <div className="flex justify-center mt-6">
          <a
            href="https://wa.me/5553999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-body font-medium text-sm text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg bg-secondary"
          >
            <MessageCircle size={20} fill="white" stroke="none" />
            Conversar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
