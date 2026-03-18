const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center gradient-hero gradient-mesh overflow-hidden">
      {/* Subtle connection lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1" fill="hsl(220 86% 56%)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <line x1="10%" y1="20%" x2="40%" y2="50%" stroke="hsl(220 86% 56%)" strokeWidth="0.5" />
        <line x1="60%" y1="15%" x2="90%" y2="45%" stroke="hsl(220 86% 56%)" strokeWidth="0.5" />
        <line x1="30%" y1="60%" x2="70%" y2="80%" stroke="hsl(220 86% 56%)" strokeWidth="0.5" />
        <line x1="20%" y1="40%" x2="50%" y2="20%" stroke="hsl(220 86% 56%)" strokeWidth="0.5" />
        <line x1="50%" y1="70%" x2="85%" y2="35%" stroke="hsl(220 86% 56%)" strokeWidth="0.5" />
        <circle cx="10%" cy="20%" r="3" fill="none" stroke="hsl(220 86% 56%)" strokeWidth="0.5" />
        <circle cx="40%" cy="50%" r="3" fill="none" stroke="hsl(220 86% 56%)" strokeWidth="0.5" />
        <circle cx="60%" cy="15%" r="3" fill="none" stroke="hsl(220 86% 56%)" strokeWidth="0.5" />
        <circle cx="90%" cy="45%" r="3" fill="none" stroke="hsl(220 86% 56%)" strokeWidth="0.5" />
        <circle cx="30%" cy="60%" r="3" fill="none" stroke="hsl(220 86% 56%)" strokeWidth="0.5" />
        <circle cx="70%" cy="80%" r="3" fill="none" stroke="hsl(220 86% 56%)" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 text-center px-6 animate-fade-up">
        <p className="text-accent font-display text-sm font-medium tracking-[0.3em] uppercase mb-6">
          Mastermind Sistêmico
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gradient leading-tight mb-6">
          Observatório
          <br />
          Sistêmico
        </h1>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;
