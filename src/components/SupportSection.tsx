import SectionTitle from "./SectionTitle";

const SupportSection = () => {
  return (
    <section className="section-muted py-10 md:py-16">
      <div className="container max-w-2xl">
        <SectionTitle label="Hotseat e Clube de Estudos" />
        <div className="card-refined p-5 md:p-10">
          <div className="space-y-4 font-body font-light text-[14px] md:text-[15px] leading-[1.85]">
            <p className="text-foreground text-justify">
              Encontros em grupo (online) de estudo guiado da literatura sistêmica, bem como discussão e elucidação de casos de atendimentos e processos internos ocorridos durante a trajetória dos membros.
            </p>
            <p className="text-foreground text-justify">
              Na última quarta-feira de todo mês, a partir das 20h30min. (horário sugerido)
            </p>
            <p className="text-foreground text-justify">
              Primeira obra: a definir
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
