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
    <section className="section-white py-20 md:py-28">
      <div className="container max-w-4xl">
        <h2 className="text-sm font-display font-semibold tracking-[0.2em] uppercase text-accent mb-4 text-center">
          Do Funcionamento
        </h2>
        <p className="text-center text-foreground font-display font-semibold text-lg mb-14">
          Encontros mensais ao vivo, presenciais e híbridos:
        </p>

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line md:-translate-x-px" />

          <div className="space-y-8">
            {months.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-accent border-2 border-surface -translate-x-1.5 mt-2 z-10 shadow-sm shadow-accent/30" />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="card-elevated p-6">
                      <span className="text-xs font-display font-semibold tracking-[0.15em] uppercase text-accent">
                        {item.month}
                      </span>
                      <h3 className="text-foreground font-display font-semibold mt-1 mb-1">
                        {item.theme}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-1/2" />
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
