import SectionTitle from "./SectionTitle";

const ObjectiveSection = () => {
  return (
    <section className="section-white py-10 md:py-16">
      <div className="container max-w-2xl">
        <SectionTitle label="Objetivo" />
        <p className="text-foreground text-[15px] md:text-base leading-[1.85] font-body font-light text-justify">
          Promover o aprimoramento, desenvolvimento e aprofundamento da ciência sistêmica na vida e no trabalho de cada um dos participantes do mastermind, possibilitando um ambiente singular onde se possa vivenciar e multiplicar o paradigma sistêmico, consolidando a busca das soluções internamente.
        </p>
      </div>
    </section>
  );
};

export default ObjectiveSection;
