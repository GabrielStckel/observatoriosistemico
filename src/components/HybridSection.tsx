import { Monitor } from "lucide-react";

const HybridSection = () => {
  return (
    <section className="section-white py-20 md:py-28">
      <div className="container max-w-3xl">
        <h2 className="text-sm font-display font-semibold tracking-[0.2em] uppercase text-accent mb-4 text-center">
          Do sistema híbrido
        </h2>
        <div className="w-12 h-0.5 bg-accent mx-auto mb-10 rounded-full" />

        <div className="card-elevated p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Monitor className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-lg text-foreground">
              O Observatório na versão híbrida.
            </h3>
          </div>
          <p className="text-foreground leading-relaxed">
            O ano III do Observatório trará a possibilidade de participação à distância dos encontros. Os encontros serão transmitidos ao vivo, possibilitando que os membros de fora de Rio Grande possam assistir e interagir. Ainda, todos os encontros ficarão gravados para posterior revisão por parte de todos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HybridSection;
