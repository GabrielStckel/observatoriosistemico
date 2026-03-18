import SectionTitle from "./SectionTitle";

const objectives = [
  "Ampliar o alcance e a nitidez da percepção dos consteladores para melhor identificação das dinâmicas ocultas que envolvem a si próprios, suas famílias, bem como seus clientes;",
  "Aprofundar e ampliar a visão da aplicabilidade da ciência sistêmica como reveladora das soluções para quaisquer questões postas na vida, mergulhando na autoconstelação, constelação organizacional, pedagogia sistêmica, e direito sistêmico.",
  "Viabilizar a construção de uma comunidade sistêmica onde haja troca, integração e conexão, tanto no aspecto profissional quanto pessoal, elevando o pertencimento e impulsionando todos para o desempenho de suas funções no mundo.",
  "Movimentar o servir dos alunos e dos consteladores formados mediante as práticas no laboratório sistêmico onde será possível a aplicação da constelação a setores da população que assim necessitem, como forma de construção da prática supervisionada do profissional.",
  "Construir eventos fechados com convidados especiais para fomentar a multiplicidade de concepções e olhares para o movimento sistêmico.",
];

const SpecificObjectivesSection = () => {
  return (
    <section className="section-muted py-10 md:py-16">
      <div className="container max-w-4xl">
        <SectionTitle label="Objetivos específicos" />

        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-5 md:space-y-0">
          {objectives.map((text, i) => {
            const isLast = i === objectives.length - 1;
            return (
              <div
                key={i}
                className={`card-refined p-5 md:p-7 md:group relative overflow-hidden ${isLast ? "md:col-span-2 md:max-w-lg md:mx-auto" : ""}`}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left hidden md:block" />

                <div className="flex flex-col items-start">
                  <span
                    className="mb-2 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-body font-semibold text-accent/70 md:group-hover:text-accent-foreground md:group-hover:bg-accent transition-all duration-300"
                    style={{ border: "1.5px solid hsl(220 86% 56% / 0.2)" }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-foreground text-[14px] leading-[1.8] font-body font-light text-justify">
                    {text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecificObjectivesSection;
