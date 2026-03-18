interface SectionTitleProps {
  label: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle = ({ label, subtitle, light = false }: SectionTitleProps) => {
  return (
    <div className="mb-12 px-1">
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{
            background: light ? "hsl(220 86% 56% / 0.5)" : "hsl(220 86% 56%)",
          }}
        />
        <div
          className="h-px flex-1"
          style={{
            background: light
              ? "linear-gradient(90deg, hsl(220 86% 56% / 0.3), transparent)"
              : "linear-gradient(90deg, hsl(220 86% 56% / 0.4), transparent 70%)",
          }}
        />
      </div>
      <h2
        className={`font-body font-bold text-xl tracking-tight ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {label}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-sm mt-2 font-normal ${
            light ? "text-primary-foreground/60" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
