const HeroSection = () => {
  return (
    <section className="relative gradient-hero overflow-hidden">
      {/* Animated floating elements moving downward */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Slow drifting circles */}
        <div
          className="absolute w-[300px] h-[300px] rounded-full opacity-[0.04] animate-[drift-down-1_18s_linear_infinite]"
          style={{
            background: "radial-gradient(circle, hsl(220 86% 70%) 0%, transparent 70%)",
            left: "10%",
            top: "-15%",
          }}
        />
        <div
          className="absolute w-[200px] h-[200px] rounded-full opacity-[0.05] animate-[drift-down-2_22s_linear_infinite]"
          style={{
            background: "radial-gradient(circle, hsl(220 86% 80%) 0%, transparent 70%)",
            right: "15%",
            top: "-10%",
          }}
        />
        <div
          className="absolute w-[150px] h-[150px] rounded-full opacity-[0.03] animate-[drift-down-3_15s_linear_infinite]"
          style={{
            background: "radial-gradient(circle, hsl(220 60% 90%) 0%, transparent 70%)",
            left: "50%",
            top: "-8%",
          }}
        />

        {/* Thin falling lines */}
        <div
          className="absolute w-px h-[120px] opacity-[0.06] animate-[drift-down-1_12s_linear_infinite]"
          style={{
            background: "linear-gradient(180deg, transparent, hsl(220 86% 70%), transparent)",
            left: "25%",
            top: "-10%",
          }}
        />
        <div
          className="absolute w-px h-[80px] opacity-[0.08] animate-[drift-down-2_16s_linear_infinite]"
          style={{
            background: "linear-gradient(180deg, transparent, hsl(220 86% 80%), transparent)",
            right: "30%",
            top: "-5%",
          }}
        />
        <div
          className="absolute w-px h-[100px] opacity-[0.05] animate-[drift-down-3_20s_linear_infinite]"
          style={{
            background: "linear-gradient(180deg, transparent, hsl(220 60% 75%), transparent)",
            left: "70%",
            top: "-8%",
          }}
        />

        {/* Small particles */}
        <div
          className="absolute w-1 h-1 rounded-full opacity-[0.1] animate-[drift-down-2_10s_linear_infinite]"
          style={{ background: "hsl(220 86% 80%)", left: "40%", top: "-2%" }}
        />
        <div
          className="absolute w-1.5 h-1.5 rounded-full opacity-[0.07] animate-[drift-down-1_14s_linear_infinite]"
          style={{ background: "hsl(220 86% 75%)", left: "60%", top: "-3%" }}
        />
        <div
          className="absolute w-1 h-1 rounded-full opacity-[0.08] animate-[drift-down-3_11s_linear_infinite]"
          style={{ background: "hsl(220 60% 85%)", left: "80%", top: "-1%" }}
        />
      </div>

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
