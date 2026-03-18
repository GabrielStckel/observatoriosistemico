import SectionTitle from "./SectionTitle";

const HybridSection = () => {
  return (
    <section className="section-white py-10 md:py-16">
      <div className="container max-w-2xl">
        <SectionTitle label="O Observatório na versão híbrida" />
        <div className="card-refined p-5 md:p-10">
          <p className="text-foreground text-[14px] md:text-[15px] leading-[1.85] font-body font-light">
            O ano III do Observatório trará a possibilidade de participação à distância dos encontros. Os encontros serão transmitidos ao vivo, possibilitando que os membros de fora de Rio Grande possam assistir e interagir. Ainda, todos os encontros ficarão gravados para posterior revisão por parte de todos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HybridSection;
