import SectionTitle from "./SectionTitle";

const ObjectiveSection = () => {
  return (
    <section className="section-white py-16 md:py-32">
      <div className="container max-w-2xl">
        <SectionTitle label="Objetivo" />
        <div className="border-accent-left pl-5 md:pl-8">
          <p className="text-foreground text-[15px] md:text-base leading-[1.85] font-body font-light">
            Promover o aprimoramento, desenvolvimento e aprofundamento da ciência sistêmica na vida e no trabalho de cada um dos participantes do mastermind, possibilitando um ambiente singular onde se possa vivenciar e multiplicar o paradigma sistêmico, consolidando a busca das soluções internamente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;
