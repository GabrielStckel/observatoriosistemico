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
          className={`font-body font-bold text-xl tracking-tight px-3 py-1.5 rounded-md ${
            light
              ? "text-primary-foreground bg-white/10"
              : "text-primary bg-primary/8"
          }`}
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
