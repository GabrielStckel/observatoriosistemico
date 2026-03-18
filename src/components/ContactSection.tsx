import SectionTitle from "./SectionTitle";
import { Phone } from "lucide-react";

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
            className="card-refined p-4 px-6 flex items-center gap-3 hover:border-accent/40 transition-colors"
          >
            <Phone size={20} className="text-accent" />
            <span className="text-foreground text-sm font-body">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
