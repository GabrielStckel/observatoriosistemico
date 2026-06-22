import SectionTitle from "./SectionTitle";
import { CalendarPlus } from "lucide-react";
import { useState } from "react";
import { trackActivity } from "@/hooks/useActivityTracker";

const labSchedule = [
  { month: "Julho", dates: "08/07", start: "2025-07-08", end: "2025-07-09" },
  { month: "Agosto", dates: "05/08", start: "2025-08-05", end: "2025-08-06" },
  { month: "Setembro", dates: "09/09", start: "2025-09-09", end: "2025-09-10" },
  { month: "Outubro", dates: "07/10", start: "2025-10-07", end: "2025-10-08" },
  { month: "Novembro", dates: "04/11", start: "2025-11-04", end: "2025-11-05" },
  { month: "Dezembro", dates: "09/12", start: "2025-12-09", end: "2025-12-10" },
];

const eventTitle = "Laboratório Sistêmico";
const eventDescription = "Encontro do Laboratório Sistêmico";

function toGoogleCalendarUrl(item: typeof labSchedule[0]) {
  const startDate = item.start.replace(/-/g, "");
  const endDate = item.end.replace(/-/g, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: eventTitle,
    dates: `${startDate}/${endDate}`,
    details: eventDescription,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function downloadICS(item: typeof labSchedule[0]) {
  const ics = buildICSForItems([item]);
  triggerDownload(ics, `laboratorio-sistemico-${item.month.toLowerCase()}.ics`);
}

function buildICSForItems(items: typeof labSchedule) {
  const events = items.map((item) => {
    const startDate = item.start.replace(/-/g, "");
    const endDate = item.end.replace(/-/g, "");
    return [
      "BEGIN:VEVENT",
      `DTSTART;VALUE=DATE:${startDate}`,
      `DTEND;VALUE=DATE:${endDate}`,
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

const LaboratorySection = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  return (
    <section className="gradient-hero py-12 md:py-24">
      <div className="container max-w-2xl md:max-w-3xl">
        <SectionTitle label="Laboratório Sistêmico" light />
        <p className="text-primary-foreground/70 text-[14px] md:text-[16px] leading-[1.85] md:leading-[2] font-body font-light text-justify" style={{ textWrap: 'pretty' }}>
          Centro integrado de atuação dos consteladores do Mastermind onde serão formados grupos mensais de atendimento à população necessitada (critérios a serem definidos dentro do campo no primeiro encontro do Mastermind) para estágio dos formados e supervisão dos formandos.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-8">
          {labSchedule.map((item, i) => (
            <div
              key={i}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-4 text-center group relative flex flex-col items-center"
            >
              <span className="block text-[10px] font-body font-semibold uppercase tracking-[0.12em] text-primary-foreground/60 group-hover:text-primary-foreground transition-colors mb-1">
                {item.month}
              </span>
              <span className="block text-primary-foreground font-body text-sm font-semibold">
                {item.dates}
              </span>

              <button
                onClick={() => setOpenMenu(openMenu === i ? null : i)}
                className="mt-2 flex items-center gap-1 text-[10px] font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors"
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
                        trackActivity("calendar_add", { month: item.month, type: "google", section: "laboratorio" });
                        setOpenMenu(null);
                      }}
                    >
                      Google Agenda
                    </a>
                    <button
                      onClick={() => {
                        trackActivity("calendar_add", { month: item.month, type: "ics", section: "laboratorio" });
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
      </div>
    </section>
  );
};

export default LaboratorySection;
