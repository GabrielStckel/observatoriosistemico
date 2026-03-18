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
    <section className="section-white py-24 md:py-32">
      <div className="container max-w-3xl">
        <span className="label-section mb-3 block text-center">Do Funcionamento</span>
        <p className="text-center text-foreground font-display text-lg md:text-xl mb-16">
          Encontros mensais ao vivo, presenciais e híbridos:
        </p>

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px timeline-line" />

          <div className="space-y-10">
            {months.map((item, i) => (
              <div key={i} className="relative pl-10 group">
                {/* Dot */}
                <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-border bg-surface group-hover:border-accent transition-colors duration-300" />

                <div>
                  <span className="label-section text-[10px] block mb-1">
                    {item.month}
                  </span>
                  <h3 className="text-foreground font-display text-base font-medium mb-1">
                    {item.theme}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
