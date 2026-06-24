import SectionTitle from "./SectionTitle";

const LaboratorySection = () => {
  return (
    <section className="gradient-hero py-12 md:py-24">
      <div className="container max-w-2xl md:max-w-3xl">
        <SectionTitle label="Laboratório Sistêmico" light />
        <p className="text-primary-foreground/70 text-[14px] md:text-[16px] leading-[1.85] md:leading-[2] font-body font-light text-justify" style={{ textWrap: 'pretty' }}>
          Centro integrado de atuação dos consteladores do Mastermind onde serão formados grupos mensais de atendimento à população necessitada (critérios a serem definidos dentro do campo no primeiro encontro do Mastermind) para estágio dos formados e supervisão dos formandos.
        </p>
      </div>
    </section>
  );
};

export default LaboratorySection;
