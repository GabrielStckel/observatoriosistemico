const HybridSection = () => {
  return (
    <section className="section-white py-24 md:py-32">
      <div className="container max-w-2xl">
        <span className="label-section mb-3 block text-center">Do sistema híbrido</span>
        <div className="h-px w-8 bg-accent/30 mx-auto mb-12" />

        <div className="card-refined p-8 md:p-10">
          <h3 className="font-display text-lg font-medium text-foreground mb-5">
            O Observatório na versão híbrida.
          </h3>
          <p className="text-foreground text-[15px] leading-[1.85] font-body font-light">
            O ano III do Observatório trará a possibilidade de participação à distância dos encontros. Os encontros serão transmitidos ao vivo, possibilitando que os membros de fora de Rio Grande possam assistir e interagir. Ainda, todos os encontros ficarão gravados para posterior revisão por parte de todos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HybridSection;
