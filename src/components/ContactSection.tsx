import SectionTitle from "./SectionTitle";
import { Instagram, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-muted py-10 md:py-16">
      <div className="container max-w-2xl">
        <SectionTitle label="Entre em contato" />
        <p className="text-foreground text-[14px] md:text-[15px] leading-[1.85] font-body font-light text-justify mb-6">
          Tem interesse em participar do Observatório Sistêmico ou deseja saber mais? Entre em contato conosco pelos canais abaixo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://www.instagram.com/jonas_peress/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-refined p-4 px-6 flex items-center gap-3 hover:border-accent/40 transition-colors w-full sm:w-auto justify-center"
          >
            <Instagram size={20} className="text-accent" />
            <span className="text-foreground text-sm font-body">@jonas_peress</span>
          </a>

          <a
            href="https://wa.me/5553999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="card-refined p-4 px-6 flex items-center gap-3 hover:border-accent/40 transition-colors w-full sm:w-auto justify-center"
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
