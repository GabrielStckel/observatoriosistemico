import SectionTitle from "./SectionTitle";
import { FileText, Download } from "lucide-react";
import { trackActivity } from "@/hooks/useActivityTracker";

interface SummaryPDF {
  month: string;
  title: string;
  url?: string; // URL do PDF quando disponível
}

const summaries: SummaryPDF[] = [
  { month: "Março", title: "Resumo — Encontro de Março" },
  { month: "Abril", title: "Resumo — Encontro de Abril", url: "/resumos/ObservatorioSistemico_2026-04.pdf" },
  { month: "Maio", title: "Resumo — Encontro de Maio" },
  { month: "Junho", title: "Resumo — Encontro de Junho" },
  { month: "Julho", title: "Resumo — Encontro de Julho" },
  { month: "Agosto", title: "Resumo — Encontro de Agosto" },
  { month: "Setembro", title: "Resumo — Encontro de Setembro" },
  { month: "Outubro", title: "Resumo — Encontro de Outubro" },
  { month: "Novembro", title: "Resumo — Encontro de Novembro" },
  { month: "Dezembro", title: "Resumo — Encontro de Dezembro" },
];

const MeetingSummariesSection = () => {
  return (
    <section className="section-white pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="container max-w-3xl">
        <SectionTitle label="Resumos dos Encontros" subtitle="PDFs com o resumo de cada encontro para download" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {summaries.map((item, i) => {
            const available = !!item.url;
            return (
              <div
                key={i}
                className={`card-refined p-4 text-center flex flex-col items-center gap-2 ${
                  !available ? "opacity-50" : ""
                }`}
              >
                <FileText size={20} className="text-accent/60" />
                <span className="block text-[10px] font-body font-semibold uppercase tracking-[0.12em] text-accent/60">
                  {item.month}
                </span>
                {available ? (
                  <a
                    href={item.url}
                    download
                    onClick={() => trackActivity("pdf_download", { month: item.month })}
                    className="flex items-center gap-1 text-[10px] font-body text-muted-foreground hover:text-accent transition-colors mt-auto"
                  >
                    <Download size={12} />
                    <span>Baixar PDF</span>
                  </a>
                ) : (
                  <span className="text-[10px] font-body text-muted-foreground/60 mt-auto">
                    Em breve
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MeetingSummariesSection;
