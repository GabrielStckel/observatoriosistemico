import { BookOpen } from "lucide-react";

const SupportSection = () => {
  return (
    <section className="section-blue py-20 md:py-28">
      <div className="container max-w-3xl">
        <div className="card-elevated p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-accent" />
            </div>
            <h2 className="font-display font-bold text-xl text-foreground">
              Hotseat e Clube de Estudos
            </h2>
          </div>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Encontros em grupo (online) de estudo guiado da literatura sistêmica, bem como discussão e elucidação de casos de atendimentos e processos internos ocorridos durante a trajetória dos membros.
            </p>
            <p className="text-muted-foreground text-sm">
              Na última quarta-feira de todo mês, a partir das 20h30min. (horário sugerido)
            </p>
            <p className="text-muted-foreground text-sm">
              Primeira obra: a definir
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
