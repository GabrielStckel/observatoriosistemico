import SectionTitle from "./SectionTitle";
import { FileArchive, Download, CalendarPlus } from "lucide-react";
import { useState } from "react";
import { trackActivity } from "@/hooks/useActivityTracker";

import materiaisEncontro1 from "@/assets/materiais-encontro-1.zip.asset.json";

const schedule = [
  { month: "Julho", dates: "08/07", start: "2025-07-08T22:30:00Z", end: "2025-07-09T01:00:00Z" },
  { month: "Agosto", dates: "05/08", start: "2025-08-05T22:30:00Z", end: "2025-08-06T01:00:00Z" },
  { month: "Setembro", dates: "09/09", start: "2025-09-09T22:30:00Z", end: "2025-09-10T01:00:00Z" },
  { month: "Outubro", dates: "07/10", start: "2025-10-07T22:30:00Z", end: "2025-10-08T01:00:00Z" },
  { month: "Novembro", dates: "04/11", start: "2025-11-04T22:30:00Z", end: "2025-11-05T01:00:00Z" },
  { month: "Dezembro", dates: "09/12", start: "2025-12-09T22:30:00Z", end: "2025-12-10T01:00:00Z" },
];

const eventTitle = "Hotseat e Clube de Estudos";
const eventDescription = "Encontro do Hotseat e Clube de Estudos";

function toGoogleCalendarUrl(item: typeof schedule[0]) {
  const startDate = item.start.replace(/[-:]/g, "");
  const endDate = item.end.replace(/[-:]/g, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: eventTitle,
    dates: `${startDate}/${endDate}`,
    details: eventDescription,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function downloadICS(item: typeof schedule[0]) {
  const ics = buildICSForItems([item]);
  triggerDownload(ics, `hotseat-clube-de-estudos-${item.month.toLowerCase()}.ics`);
}

function buildICSForItems(items: typeof schedule) {
  const events = items.map((item) => {
    const startDate = item.start.replace(/[-:]/g, "");
    const endDate = item.end.replace(/[-:]/g, "");
    return [
      "BEGIN:VEVENT",
      `DTSTART:${startDate}`,
      `DTEND:${endDate}`,
      `SUMMARY:${eventTitle} - ${item.month}`,
      `DESCRIPTION:${eventDescription}`,
      "END:VEVENT",
    ].join("\r\n");
  });

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Observatorio Sistemico//PT",
    ...events,
    "END:VCALENDAR",
  ].join("\r\n");
}

function triggerDownload(content: string, filename: string) {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}




const SupportSection = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  return (
    <section className="section-muted py-10 md:py-16">
      <div className="container max-w-2xl md:max-w-3xl">
        <SectionTitle label="Hotseat e Clube de Estudos" />
        <div className="card-refined p-5 md:p-10">
          <div className="space-y-4 font-body font-light text-[14px] md:text-[15px] leading-[1.85]">
            <p className="text-foreground text-justify">
              Encontros em grupo (online) de estudo guiado da literatura sistêmica, bem como discussão e elucidação de casos de atendimentos e processos internos ocorridos durante a trajetória dos membros.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-8">
          {schedule.map((item, i) => (
            <div
              key={i}
              className="bg-muted border border-border rounded-lg p-4 text-center group relative flex flex-col items-center"
            >
              <span className="block text-[10px] font-body font-semibold uppercase tracking-[0.12em] text-muted-foreground group-hover:text-foreground transition-colors mb-1">
                {item.month}
              </span>
              <span className="block text-foreground font-body text-sm font-semibold">
                {item.dates}
              </span>
              <span className="block text-muted-foreground font-body text-[11px] mt-0.5">
                19:30 às 22:00
              </span>

              <button
                onClick={() => setOpenMenu(openMenu === i ? null : i)}
                className="mt-2 flex items-center gap-1 text-[10px] font-body text-muted-foreground hover:text-accent transition-colors"
                aria-label={`Adicionar ${item.month} à agenda`}
              >
                <CalendarPlus size={13} />
                <span>Agendar</span>
              </button>

              {openMenu === i && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setOpenMenu(null)}
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-20 bg-surface border border-border rounded shadow-lg py-1 min-w-[160px]">
                    <a
                      href={toGoogleCalendarUrl(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-xs font-body text-foreground hover:bg-muted transition-colors text-left"
                      onClick={() => {
                        trackActivity("calendar_add", { month: item.month, type: "google", section: "hotseat" });
                        setOpenMenu(null);
                      }}
                    >
                      Google Agenda
                    </a>
                    <button
                      onClick={() => {
                        trackActivity("calendar_add", { month: item.month, type: "ics", section: "hotseat" });
                        downloadICS(item);
                        setOpenMenu(null);
                      }}
                      className="block w-full px-4 py-2 text-xs font-body text-foreground hover:bg-muted transition-colors text-left"
                    >
                      Apple / Outlook (.ics)
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <p className="font-display text-base md:text-lg font-medium text-foreground text-center mt-10 mb-4">
          Materiais de estudo para download
        </p>

        <a
          href={materiaisEncontro1.url}
          download
          onClick={() => trackActivity("study_download", { title: "materiais encontro 1" })}
          className="max-w-2xl mx-auto w-full bg-surface border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 group text-center sm:text-left"
        >
          <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
            <FileArchive className="w-8 h-8" />
          </div>

          <div className="flex-1 min-w-0">
            <p
              className="font-body text-base font-semibold text-foreground leading-snug sm:truncate"
              style={{ hyphens: "none" }}
            >
              Materiais Encontro 1
            </p>
          </div>

          <span className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap w-full sm:w-auto">
            <Download className="w-4 h-4" />
            Baixar tudo
          </span>
        </a>
      </div>
    </section>
  );
};

export default SupportSection;
