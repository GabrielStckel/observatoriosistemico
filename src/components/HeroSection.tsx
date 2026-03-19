const HeroSection = () => {
  return (
    <section className="relative gradient-hero overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[65vh] px-6 py-24">
        <div className="animate-fade-up text-center">
          <div className="inline-block mb-8">
            <div className="w-px h-12 bg-accent/40 mx-auto mb-6" />
            <span className="font-body text-[11px] font-medium tracking-[0.35em] uppercase text-primary-foreground/50">
              Ano III · Mastermind
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground leading-[1.15] mb-6 tracking-tight">
            Observatório
            <br />
            <em className="font-normal">Sistêmico</em>
          </h1>

          <p className="font-body text-sm text-primary-foreground/40 max-w-md mx-auto leading-relaxed text-center">
            Ciência sistêmica aplicada à vida e ao trabalho.
            <br />
            Encontros presenciais e híbridos.
          </p>

          <div className="w-px h-12 bg-accent/40 mx-auto mt-8" />
        </div>
      </div>

      {/* Minimal decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />
    </section>
  );
};

export default HeroSection;
