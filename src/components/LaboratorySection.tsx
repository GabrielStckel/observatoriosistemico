import SectionTitle from "./SectionTitle";

const LaboratorySection = () => {
  return (
    <section className="gradient-hero py-10 md:py-16">
      <div className="container max-w-2xl">
        <SectionTitle label="Laboratório Sistêmico" light />
        <div className="border-l-2 border-accent/40 pl-5 md:pl-8">
          <p className="text-primary-foreground/70 text-[14px] md:text-[15px] leading-[1.85] font-body font-light">
            Centro integrado de atuação dos consteladores do Mastermind onde serão formados grupos mensais de atendimento à população necessitada (critérios a serem definidos dentro do campo no primeiro encontro do Mastermind) para estágio dos formados e supervisão dos formandos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LaboratorySection;
