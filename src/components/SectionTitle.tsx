interface SectionTitleProps {
  label: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle = ({ label, subtitle, light = false }: SectionTitleProps) => {
  return (
    <div className="mb-12 px-1">
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
