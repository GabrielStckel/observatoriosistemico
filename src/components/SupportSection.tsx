import SectionTitle from "./SectionTitle";
import { FileText, Download } from "lucide-react";
import { trackActivity } from "@/hooks/useActivityTracker";

import veraBassoi from "@/assets/vera-bassoi.pdf.asset.json";
import oHomemHolistico from "@/assets/o-homem-holistico.pdf.asset.json";
import teoriaHoloinformacional from "@/assets/teoria-holoinformacional.docx.asset.json";
import cienciaConscienciaEspiritualidade from "@/assets/ciencia-consciencia-espiritualidade.pdf.asset.json";
import autoOrganizacaoConsciencia from "@/assets/auto-organizacao-consciencia.docx.asset.json";
import dezCartografias from "@/assets/10-cartografias.pdf.asset.json";

const materials = [
  { title: "Vera Bassoi", url: veraBassoi.url },
  { title: "O Homem Holístico", url: oHomemHolistico.url },
  { title: "Teoria Holoinformacional da Consciência", url: teoriaHoloinformacional.url },
  { title: "Ciência, Consciência e Espiritualidade", url: cienciaConscienciaEspiritualidade.url },
  { title: "Auto-Organização e Consciência", url: autoOrganizacaoConsciencia.url },
  { title: "10 Cartografias", url: dezCartografias.url },
];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          {materials.map((item, i) => (
            <a
              key={i}
              href={item.url}
              download
              onClick={() => trackActivity("study_download", { title: item.title })}
              className="card-refined p-4 flex items-start gap-3 border-accent/40 hover:border-accent transition-colors"
            >
              <FileText size={20} className="text-accent mt-0.5 shrink-0" />
              <div className="flex-1 min-w-0">
                <p
                  className="font-body text-sm font-semibold text-foreground"
                  style={{ textAlign: "left", hyphens: "none" }}
                >
                  {item.title}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-body font-bold text-accent mt-2">
                  <Download size={14} />
                  Baixar
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
