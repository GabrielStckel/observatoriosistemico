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
    <section className="section-blue py-20 md:py-28">
      <div className="container max-w-5xl">
        <h2 className="text-sm font-display font-semibold tracking-[0.2em] uppercase text-accent mb-4 text-center">
          Do Cronograma
        </h2>
        <p className="text-center text-foreground font-display font-semibold text-lg mb-14">
          Cronograma de encontros:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {schedule.map((item, i) => (
            <div
              key={i}
              className="card-elevated p-5 text-center group"
            >
              <span className="text-xs font-display font-semibold tracking-[0.15em] uppercase text-accent block mb-2">
                {item.month}
              </span>
              <span className="text-foreground font-display font-bold text-lg">
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
