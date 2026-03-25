const HeroSection = () => {
  return (
    <section className="relative gradient-hero overflow-hidden">
      {/* === ABDUCTION BEAM — blurred light cone === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ filter: "blur(4px)" }}>
        {/* Main tractor beam */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[340px] md:w-[500px] h-full opacity-[0.20] animate-[beam-pulse_8s_ease-in-out_infinite]"
          style={{
            background:
              "linear-gradient(180deg, hsl(220 90% 70% / 0.5) 0%, hsl(220 86% 56% / 0.2) 40%, transparent 100%)",
            clipPath: "polygon(35% 0%, 65% 0%, 90% 100%, 10% 100%)",
          }}
        />
        {/* Inner bright core */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[120px] md:w-[180px] h-full opacity-[0.12] animate-[beam-pulse_8s_ease-in-out_infinite_1s]"
          style={{
            background:
              "linear-gradient(180deg, hsl(210 100% 85% / 0.7) 0%, hsl(220 86% 60% / 0.15) 50%, transparent 100%)",
            clipPath: "polygon(30% 0%, 70% 0%, 85% 100%, 15% 100%)",
          }}
        />
        {/* Glow at bottom — "portal" */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[120px] opacity-[0.15] animate-[beam-pulse_10s_ease-in-out_infinite_2s]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, hsl(220 90% 60% / 0.5) 0%, hsl(220 80% 50% / 0.15) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* === Particles — separate layer, NO blur === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { endX: "-30vw", delay: "0s", dur: "12s", size: "3px", opacity: 0.4 },
          { endX: "28vw", delay: "2s", dur: "11s", size: "3px", opacity: 0.45 },
          { endX: "-22vw", delay: "4s", dur: "14s", size: "4px", opacity: 0.35 },
          { endX: "18vw", delay: "1.5s", dur: "13s", size: "3px", opacity: 0.4 },
          { endX: "-35vw", delay: "5s", dur: "14s", size: "3px", opacity: 0.3 },
          { endX: "35vw", delay: "3s", dur: "11.5s", size: "3px", opacity: 0.45 },
          { endX: "-15vw", delay: "6s", dur: "13s", size: "3px", opacity: 0.3 },
          { endX: "25vw", delay: "1.5s", dur: "12s", size: "3px", opacity: 0.38 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: "50%",
              top: "-5%",
              opacity: 0,
              background: "hsl(220 90% 80%)",
              boxShadow: "0 0 8px 3px hsl(220 90% 70% / 0.4)",
              animation: `diagonal-fall ${p.dur} ease-out infinite ${p.delay}`,
              ["--end-x" as string]: p.endX,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[75vh] md:min-h-[80vh] px-6 py-32">
        <div className="animate-fade-up text-center" style={{ textShadow: "0 2px 12px hsl(220 90% 10% / 0.6), 0 0 30px hsl(220 86% 56% / 0.15)" }}>
          <div className="inline-block mb-8">
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

          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
