import { ReactNode } from "react";

interface SectionTitleProps {
  label: ReactNode;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle = ({ label, subtitle, light = false }: SectionTitleProps) => {
  return (
    <div className="mb-8 px-1 text-center">
      <h2
        className={`font-display text-2xl md:text-3xl font-medium tracking-tight ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {label}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-sm mt-2 font-normal text-center ${
            light ? "text-primary-foreground/60" : "text-muted-foreground"
          }`}
          style={{ textAlign: "center", hyphens: "none" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
