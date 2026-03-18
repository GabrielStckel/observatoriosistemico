import { Eye, Compass, Users, Beaker, CalendarHeart } from "lucide-react";

const objectives = [
  {
    icon: Eye,
    text: "Ampliar o alcance e a nitidez da percepção dos consteladores para melhor identificação das dinâmicas ocultas que envolvem a si próprios, suas famílias, bem como seus clientes;",
  },
  {
    icon: Compass,
    text: "Aprofundar e ampliar a visão da aplicabilidade da ciência sistêmica como reveladora das soluções para quaisquer questões postas na vida, mergulhando na autoconstelação, constelação organizacional, pedagogia sistêmica, e direito sistêmico.",
  },
  {
    icon: Users,
    text: "Viabilizar a construção de uma comunidade sistêmica onde haja troca, integração e conexão, tanto no aspecto profissional quanto pessoal, elevando o pertencimento e impulsionando todos para o desempenho de suas funções no mundo.",
  },
  {
    icon: Beaker,
    text: "Movimentar o servir dos alunos e dos consteladores formados mediante as práticas no laboratório sistêmico onde será possível a aplicação da constelação a setores da população que assim necessitem, como forma de construção da prática supervisionada do profissional.",
  },
  {
    icon: CalendarHeart,
    text: "Construir eventos fechados com convidados especiais para fomentar a multiplicidade de concepções e olhares para o movimento sistêmico.",
  },
];

const SpecificObjectivesSection = () => {
  return (
    <section className="section-blue py-20 md:py-28">
      <div className="container max-w-5xl">
        <h2 className="text-sm font-display font-semibold tracking-[0.2em] uppercase text-accent mb-4 text-center">
          Objetivos específicos
        </h2>
        <div className="w-12 h-0.5 bg-accent mx-auto mb-14 rounded-full" />

        <div className="grid md:grid-cols-2 gap-6">
          {objectives.map((obj, i) => {
            const Icon = obj.icon;
            return (
              <div
                key={i}
                className="card-elevated p-8 flex gap-5"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mt-1">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-foreground leading-relaxed text-[15px]">
                  {obj.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecificObjectivesSection;
