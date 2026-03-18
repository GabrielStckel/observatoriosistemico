const schedule = [
  { month: "Mar", dates: "14–15" },
  { month: "Abr", dates: "18–19" },
  { month: "Mai", dates: "23–24" },
  { month: "Jun", dates: "20–21" },
  { month: "Jul", dates: "18–19" },
  { month: "Ago", dates: "15–16" },
  { month: "Set", dates: "05–06" },
  { month: "Out", dates: "17–18" },
  { month: "Nov", dates: "21–22" },
  { month: "Dez", dates: "05–06" },
];

const ScheduleSection = () => {
  return (
    <section className="section-muted py-24 md:py-32">
      <div className="container max-w-3xl">
        <span className="label-section mb-3 block text-center">Do Cronograma</span>
        <p className="text-center text-foreground font-body font-semibold text-lg md:text-xl mb-16">
          Cronograma de encontros:
        </p>

        <div className="grid grid-cols-5 gap-px bg-border rounded overflow-hidden">
          {schedule.map((item, i) => (
            <div
              key={i}
              className="bg-surface p-5 text-center hover:bg-muted/50 transition-colors duration-200"
            >
              <span className="label-section text-[10px] block mb-2">
                {item.month}
              </span>
              <span className="text-foreground font-display text-base font-medium">
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
