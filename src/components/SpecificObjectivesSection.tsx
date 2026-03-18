const objectives = [
  "Ampliar o alcance e a nitidez da percepção dos consteladores para melhor identificação das dinâmicas ocultas que envolvem a si próprios, suas famílias, bem como seus clientes;",
  "Aprofundar e ampliar a visão da aplicabilidade da ciência sistêmica como reveladora das soluções para quaisquer questões postas na vida, mergulhando na autoconstelação, constelação organizacional, pedagogia sistêmica, e direito sistêmico.",
  "Viabilizar a construção de uma comunidade sistêmica onde haja troca, integração e conexão, tanto no aspecto profissional quanto pessoal, elevando o pertencimento e impulsionando todos para o desempenho de suas funções no mundo.",
  "Movimentar o servir dos alunos e dos consteladores formados mediante as práticas no laboratório sistêmico onde será possível a aplicação da constelação a setores da população que assim necessitem, como forma de construção da prática supervisionada do profissional.",
  "Construir eventos fechados com convidados especiais para fomentar a multiplicidade de concepções e olhares para o movimento sistêmico.",
];

const SpecificObjectivesSection = () => {
  return (
    <section className="section-muted py-24 md:py-32">
      <div className="container max-w-3xl">
        <span className="label-section mb-12 block text-center">Objetivos específicos</span>

        <div className="space-y-0 divide-y divide-border">
          {objectives.map((text, i) => (
            <div key={i} className="py-7 first:pt-0 last:pb-0 flex gap-5">
              <span className="text-accent font-display text-lg font-medium leading-none mt-0.5 select-none">
                {i + 1}
              </span>
              <p className="text-foreground text-[15px] leading-[1.85] font-body font-light">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecificObjectivesSection;
