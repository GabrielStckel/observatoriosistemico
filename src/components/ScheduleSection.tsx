import SectionTitle from "./SectionTitle";

const schedule = [
  { month: "Março", dates: "14 e 15/03" },
  { month: "Abril", dates: "18 e 19/04" },
  { month: "Maio", dates: "23 e 24/05" },
  { month: "Junho", dates: "20 e 21/06" },
  { month: "Julho", dates: "18 e 19/07" },
  { month: "Agosto", dates: "15 e 16/08" },
  { month: "Setembro", dates: "05 e 06/09" },
  { month: "Outubro", dates: "17 e 18/10" },
  { month: "Novembro", dates: "21 e 22/11" },
  { month: "Dezembro", dates: "05 e 06/12" },
];

const ScheduleSection = () => {
  return (
    <section className="section-muted py-16 md:py-32">
      <div className="container max-w-3xl">
        <SectionTitle
          label="Do Cronograma"
          subtitle="Cronograma de encontros:"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {schedule.map((item, i) => (
            <div
              key={i}
              className="card-refined p-4 text-center group"
            >
              <span className="block text-[10px] font-body font-semibold uppercase tracking-[0.12em] text-accent/60 group-hover:text-accent transition-colors mb-1">
                {item.month}
              </span>
              <span className="text-foreground font-body text-sm font-semibold">
                {item.dates}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
