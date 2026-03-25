const HeroSection = () => {
  return (
    <section className="relative gradient-hero overflow-hidden">
      {/* === ABDUCTION BEAM — central light cone === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main tractor beam */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[340px] md:w-[500px] h-full opacity-[0.18] animate-[beam-pulse_4s_ease-in-out_infinite]"
          style={{
            background:
              "linear-gradient(180deg, hsl(220 90% 70% / 0.6) 0%, hsl(220 86% 56% / 0.3) 40%, transparent 100%)",
            clipPath: "polygon(35% 0%, 65% 0%, 90% 100%, 10% 100%)",
          }}
        />
        {/* Inner bright core */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[120px] md:w-[180px] h-full opacity-[0.12] animate-[beam-pulse_4s_ease-in-out_infinite_0.5s]"
          style={{
            background:
              "linear-gradient(180deg, hsl(210 100% 85% / 0.9) 0%, hsl(220 86% 60% / 0.2) 50%, transparent 100%)",
            clipPath: "polygon(30% 0%, 70% 0%, 85% 100%, 15% 100%)",
          }}
        />

        {/* Sweeping horizontal rings */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[55%] w-[500px] md:w-[700px] h-[3px] rounded-full opacity-[0.15] animate-[ring-sweep_3s_ease-in-out_infinite]"
          style={{
            background:
              "radial-gradient(ellipse, hsl(220 90% 70% / 0.8) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[65%] w-[400px] md:w-[550px] h-[2px] rounded-full opacity-[0.1] animate-[ring-sweep_3s_ease-in-out_infinite_1s]"
          style={{
            background:
              "radial-gradient(ellipse, hsl(210 80% 75% / 0.7) 0%, transparent 70%)",
          }}
        />

        {/* Ascending particles — sucked upward */}
        {[
          { left: "30%", delay: "0s", dur: "3s", size: "3px", opacity: 0.5 },
          { left: "45%", delay: "0.8s", dur: "2.5s", size: "2px", opacity: 0.7 },
          { left: "55%", delay: "1.5s", dur: "3.2s", size: "4px", opacity: 0.4 },
          { left: "65%", delay: "0.3s", dur: "2.8s", size: "2px", opacity: 0.6 },
          { left: "38%", delay: "2s", dur: "3.5s", size: "3px", opacity: 0.35 },
          { left: "52%", delay: "1s", dur: "2.2s", size: "2px", opacity: 0.55 },
          { left: "70%", delay: "2.5s", dur: "3s", size: "3px", opacity: 0.3 },
          { left: "42%", delay: "0.5s", dur: "2.7s", size: "2px", opacity: 0.65 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-[float-up_var(--dur)_ease-in_infinite_var(--delay)]"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              bottom: "5%",
              opacity: p.opacity,
              background: "hsl(220 90% 80%)",
              boxShadow: "0 0 6px 2px hsl(220 90% 70% / 0.6)",
              ["--dur" as string]: p.dur,
              ["--delay" as string]: p.delay,
            }}
          />
        ))}

        {/* Falling light streaks */}
        {[
          { left: "20%", delay: "0s", dur: "8s", h: "180px", opacity: 0.09 },
          { left: "35%", delay: "2s", dur: "12s", h: "140px", opacity: 0.12 },
          { left: "50%", delay: "1s", dur: "10s", h: "200px", opacity: 0.08 },
          { left: "65%", delay: "3s", dur: "9s", h: "160px", opacity: 0.1 },
          { left: "78%", delay: "0.5s", dur: "11s", h: "120px", opacity: 0.07 },
        ].map((s, i) => (
          <div
            key={`streak-${i}`}
            className="absolute w-[2px] animate-[drift-down-1_var(--dur)_linear_infinite_var(--delay)]"
            style={{
              height: s.h,
              left: s.left,
              top: "-15%",
              opacity: s.opacity,
              background:
                "linear-gradient(180deg, transparent, hsl(220 86% 75%), hsl(210 80% 85%), transparent)",
              ["--dur" as string]: s.dur,
              ["--delay" as string]: s.delay,
            }}
          />
        ))}

        {/* Glow at bottom — "portal" */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[120px] opacity-[0.2] animate-[beam-pulse_5s_ease-in-out_infinite_1s]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, hsl(220 90% 60% / 0.6) 0%, hsl(220 80% 50% / 0.2) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[65vh] px-6 py-24">
        <div className="animate-fade-up text-center" style={{ textShadow: "0 2px 12px hsl(220 90% 10% / 0.6), 0 0 30px hsl(220 86% 56% / 0.15)" }}>
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

    </section>
  );
};

export default HeroSection;
