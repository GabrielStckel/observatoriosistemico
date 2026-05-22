import SectionTitle from "./SectionTitle";
import { CalendarPlus } from "lucide-react";
import { useState } from "react";
import { trackActivity } from "@/hooks/useActivityTracker";

const schedule = [
  { month: "Março", dates: "14 e 15/03", start: "2025-03-14", end: "2025-03-16" },
  { month: "Abril", dates: "18 e 19/04", start: "2025-04-18", end: "2025-04-20" },
  { month: "Maio", dates: "23 e 24/05", start: "2025-05-23", end: "2025-05-25" },
  { month: "Junho", dates: "20 e 21/06", start: "2025-06-20", end: "2025-06-22" },
  { month: "Julho", dates: "18 e 19/07", start: "2025-07-18", end: "2025-07-20" },
  { month: "Agosto", dates: "15 e 16/08", start: "2025-08-15", end: "2025-08-17" },
  { month: "Setembro", dates: "05 e 06/09", start: "2025-09-05", end: "2025-09-07" },
  { month: "Outubro", dates: "17 e 18/10", start: "2025-10-17", end: "2025-10-19" },
  { month: "Novembro", dates: "21 e 22/11", start: "2025-11-21", end: "2025-11-23" },
  { month: "Dezembro", dates: "05 e 06/12", start: "2025-12-05", end: "2025-12-07" },
];

const eventTitle = "Observatório Sistêmico";
const eventDescription = "Encontro do Observatório Sistêmico";

function toGoogleCalendarUrl(item: typeof schedule[0]) {
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

function downloadICS(item: typeof schedule[0]) {
  const ics = buildICSForItems([item]);
  triggerDownload(ics, `observatorio-${item.month.toLowerCase()}.ics`);
}

function downloadAllICS() {
  const ics = buildICSForItems(schedule);
  triggerDownload(ics, "observatorio-todos-encontros.ics");
}

function buildICSForItems(items: typeof schedule) {
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

const ScheduleSection = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  return (
    <section className="section-muted pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="container max-w-3xl">
        <SectionTitle label="Cronograma de encontros" />
        <p className="text-muted-foreground text-xs font-body text-center -mt-2 mb-6">
          Clique em "Agendar" para adicionar o encontro diretamente à sua agenda.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {schedule.map((item, i) => (
            <div
              key={i}
              className="card-refined p-4 text-center group relative flex flex-col items-center"
            >
              <span className="block text-[10px] font-body font-semibold uppercase tracking-[0.12em] text-accent/60 group-hover:text-accent transition-colors mb-1">
                {item.month}
              </span>
              <span className="block text-foreground font-body text-sm font-semibold">
                {item.dates}
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
                        trackActivity("calendar_add", { month: item.month, type: "google" });
                        setOpenMenu(null);
                      }}
                    >
                      Google Agenda
                    </a>
                    <button
                      onClick={() => {
                        trackActivity("calendar_add", { month: item.month, type: "ics" });
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

export default ScheduleSection;
