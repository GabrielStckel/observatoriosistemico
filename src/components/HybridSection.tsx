import SectionTitle from "./SectionTitle";

const HybridSection = () => {
  return (
    <section className="section-white py-12 md:py-24">
      <div className="container max-w-2xl md:max-w-3xl">
        <SectionTitle label="O Observatório na versão híbrida" />
        <p className="text-foreground text-[14px] md:text-[16px] leading-[1.85] md:leading-[2] font-body font-light text-justify">
          O ano III do Observatório trará a possibilidade de participação à distância dos encontros. Os encontros serão transmitidos ao vivo, possibilitando que os membros de fora de Rio Grande possam assistir e interagir. Ainda, todos os encontros ficarão gravados para posterior revisão por parte de todos.
        </p>
      </div>
    </section>
  );
};

export default HybridSection;
