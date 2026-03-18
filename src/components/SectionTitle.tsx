interface SectionTitleProps {
  label: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle = ({ label, subtitle, light = false }: SectionTitleProps) => {
  return (
    <div className="mb-12 px-1">
      <h2 className="inline-block">
        <span
          className="font-body font-bold text-xl tracking-tight px-3 py-1.5 rounded-md"
          style={{
            color: light ? "hsl(var(--primary-foreground))" : "hsl(220 86% 45%)",
            backgroundColor: light ? "hsla(0, 0%, 100%, 0.1)" : "hsl(220 86% 56% / 0.08)",
          }}
        >
          {label}
        </span>
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
