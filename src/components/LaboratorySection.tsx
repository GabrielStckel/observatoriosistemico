import { FlaskConical } from "lucide-react";

const LaboratorySection = () => {
  return (
    <section className="py-20 md:py-28" style={{ background: "linear-gradient(135deg, hsl(210 33% 97%), hsl(220 86% 56% / 0.06))" }}>
      <div className="container max-w-3xl">
        <div className="border-accent-left pl-8 md:pl-12">
          <div className="flex items-center gap-3 mb-6">
            <FlaskConical className="w-6 h-6 text-accent" />
            <h2 className="font-display font-bold text-xl text-foreground">
              Laboratório Sistêmico
            </h2>
          </div>
          <p className="text-foreground leading-relaxed text-lg">
            Centro integrado de atuação dos consteladores do Mastermind onde serão formados grupos mensais de atendimento à população necessitada (critérios a serem definidos dentro do campo no primeiro encontro do Mastermind) para estágio dos formados e supervisão dos formandos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LaboratorySection;
