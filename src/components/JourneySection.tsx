import SectionTitle from "./SectionTitle";

const months = [
  { month: "Março", theme: "Pertencimento", desc: "comunicação, compreensão e conexão com a vida;" },
  { month: "Abril", theme: "A ordem", desc: "a indisponibilidade pela ausência do limite. O bloqueio às soluções como fruto da indisponibilidade;" },
  { month: "Maio", theme: "Equilíbrio", desc: "o sentido da vida nas relações. A desistência." },
  { month: "Junho", theme: "Autoconstelação", desc: "os limites da percepção de si mesmo. A fusão entre observador e coisa observada. A arrogância. A responsabilidade como culpa." },
  { month: "Julho", theme: "A fenomenologia na sua essência", desc: "As raízes da postura sistêmica." },
  { month: "Agosto", theme: "A física da alma", desc: "A consciência sistêmica e o campo mórfico. A matriz de atuação de um constelador." },
  { month: "Setembro", theme: "Os campos coletivos", desc: "e o sistema de crenças." },
  { month: "Outubro", theme: "Psicoterapia e aconselhamento espiritual", desc: "a jornada do terapeuta para além do senso comum." },
  { month: "Novembro", theme: "O paradigma sistêmico além da psicoterapia", desc: "a aplicação da Ciência Sistêmica no mundo." },
  { month: "Dezembro", theme: "A neutralidade", desc: "A ruptura com a biografia dos pais e a rendição à vida." },
];

const JourneySection = () => {
  return (
    <section className="section-white py-16 md:py-32 overflow-hidden">
      <div className="container max-w-3xl">
        <SectionTitle
          label="Funcionamento"
          subtitle="Encontros mensais ao vivo, presenciais e híbridos:"
        />

        <div className="relative mt-8">
          {/* Progressive bar — only visual element that intensifies */}
          <div
            className="absolute left-[11px] md:left-[19px] top-0 bottom-0 w-[2px] rounded-full"
            style={{
              background: "linear-gradient(180deg, hsl(214 20% 88%) 0%, hsl(220 86% 56% / 0.4) 30%, hsl(220 86% 56%) 70%, hsl(220 70% 45%) 100%)",
            }}
          />

          <div className="space-y-0">
            {months.map((item, i) => {
              const progress = i / (months.length - 1);
              const dotSize = 6 + progress * 8;
              const bgOpacity = 0.12 + progress * 0.88;
              const borderWidth = progress > 0.7 ? 0 : 2;
              const glowSize = progress * 20;

              return (
                <div key={i} className="relative flex gap-4 md:gap-7 pb-8 last:pb-0 group">
                  {/* Dot — progressive */}
                  <div className="relative flex-shrink-0 w-[24px] md:w-[40px] flex justify-center pt-[6px]">
                    <div
                      className="rounded-full transition-transform duration-300 group-hover:scale-125"
                      style={{
                        width: `${dotSize}px`,
                        height: `${dotSize}px`,
                        background: `hsl(220 86% 56% / ${bgOpacity})`,
                        border: borderWidth > 0 ? `${borderWidth}px solid hsl(220 86% 56% / 0.3)` : "none",
                        boxShadow: glowSize > 0 ? `0 0 ${glowSize}px ${glowSize * 0.4}px hsl(220 86% 56% / ${progress * 0.25})` : "none",
                      }}
                    />
                  </div>

                  {/* Content — uniform styling */}
                  <div className="flex-1 min-w-0">
                    <span
                      className="block mb-0.5 font-body uppercase tracking-[0.15em] text-[10px] transition-colors duration-300"
                      style={{
                        color: `hsl(220 86% ${50 - progress * 12}%)`,
                        opacity: 0.65 + progress * 0.35,
                      }}
                    >
                      {item.month}
                    </span>
                    <h3 className="font-body text-[14px] font-semibold text-foreground mb-0.5">
                      {item.theme}
                    </h3>
                    <p className="text-muted-foreground text-[13px] leading-relaxed font-light">
                      {item.desc}
                    </p>
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
