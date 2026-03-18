const months = [
  { month: "Março", num: "03", theme: "Pertencimento", desc: "comunicação, compreensão e conexão com a vida;" },
  { month: "Abril", num: "04", theme: "A ordem", desc: "a indisponibilidade pela ausência do limite. O bloqueio às soluções como fruto da indisponibilidade;" },
  { month: "Maio", num: "05", theme: "Equilíbrio", desc: "o sentido da vida nas relações. A desistência." },
  { month: "Junho", num: "06", theme: "Autoconstelação", desc: "os limites da percepção de si mesmo. A fusão entre observador e coisa observada. A arrogância. A responsabilidade como culpa." },
  { month: "Julho", num: "07", theme: "A fenomenologia na sua essência", desc: "As raízes da postura sistêmica." },
  { month: "Agosto", num: "08", theme: "A física da alma", desc: "A consciência sistêmica e o campo mórfico. A matriz de atuação de um constelador." },
  { month: "Setembro", num: "09", theme: "Os campos coletivos", desc: "e o sistema de crenças." },
  { month: "Outubro", num: "10", theme: "Psicoterapia e aconselhamento espiritual", desc: "a jornada do terapeuta para além do senso comum." },
  { month: "Novembro", num: "11", theme: "O paradigma sistêmico além da psicoterapia", desc: "a aplicação da Ciência Sistêmica no mundo." },
  { month: "Dezembro", num: "12", theme: "A neutralidade", desc: "A ruptura com a biografia dos pais e a rendição à vida." },
];

const JourneySection = () => {
  return (
    <section className="section-white py-24 md:py-32 overflow-hidden">
      <div className="container max-w-5xl">
        <span className="label-section mb-3 block text-center">Do Funcionamento</span>
        <p className="text-center text-foreground font-body font-semibold text-lg md:text-xl mb-20">
          Encontros mensais ao vivo, presenciais e híbridos:
        </p>

        {/* Desktop: alternating zigzag */}
        <div className="relative">
          {/* Central vertical line - desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-px"
            style={{ background: "linear-gradient(180deg, transparent 0%, hsl(220 86% 56% / 0.15) 5%, hsl(220 86% 56% / 0.25) 50%, hsl(220 86% 56% / 0.15) 95%, transparent 100%)" }}
          />

          <div className="space-y-6 md:space-y-0">
            {months.map((item, i) => {
              const isRight = i % 2 !== 0;

              return (
                <div key={i} className="relative md:flex md:items-center md:min-h-[120px]">
                  {/* Center node - desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full bg-surface border-2 border-border items-center justify-center transition-all duration-300 hover:border-accent hover:shadow-[0_0_16px_-4px_hsl(220_86%_56%_/_0.3)]">
                    <span className="text-accent font-body text-xs font-bold">{item.num}</span>
                  </div>

                  {/* Left side */}
                  <div className={`hidden md:flex md:w-1/2 md:pr-12 ${isRight ? "justify-end" : ""}`}>
                    {!isRight && (
                      <div className="max-w-sm ml-auto text-right group">
                        <span className="label-section text-[10px] block mb-1 opacity-60 group-hover:opacity-100 transition-opacity">
                          {item.month}
                        </span>
                        <h3 className="text-foreground font-body text-[15px] font-semibold mb-1 group-hover:text-accent transition-colors duration-300">
                          {item.theme}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right side */}
                  <div className={`hidden md:flex md:w-1/2 md:pl-12 ${!isRight ? "justify-start" : ""}`}>
                    {isRight && (
                      <div className="max-w-sm group">
                        <span className="label-section text-[10px] block mb-1 opacity-60 group-hover:opacity-100 transition-opacity">
                          {item.month}
                        </span>
                        <h3 className="text-foreground font-body text-[15px] font-semibold mb-1 group-hover:text-accent transition-colors duration-300">
                          {item.theme}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-4 group">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-surface border-2 border-border flex items-center justify-center group-hover:border-accent transition-colors duration-300">
                        <span className="text-accent font-body text-xs font-bold">{item.num}</span>
                      </div>
                      {i < months.length - 1 && (
                        <div className="w-px flex-1 mt-2 bg-border" />
                      )}
                    </div>
                    <div className="pb-8">
                      <span className="label-section text-[10px] block mb-1 opacity-60">
                        {item.month}
                      </span>
                      <h3 className="text-foreground font-body text-[15px] font-semibold mb-1">
                        {item.theme}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
