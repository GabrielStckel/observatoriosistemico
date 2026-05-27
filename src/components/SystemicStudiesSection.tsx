import SectionTitle from "./SectionTitle";
import { FileText, Link as LinkIcon, ExternalLink, Download } from "lucide-react";
import { trackActivity } from "@/hooks/useActivityTracker";

interface StudyItem {
  title: string;
  description?: string;
  type: "document" | "link";
  url?: string;
}

const studies: StudyItem[] = [
  // Adicione documentos e links aqui. Exemplo:
  // { title: "Texto introdutório à teoria sistêmica", type: "document", url: "/estudos/intro.pdf" },
  // { title: "Artigo — Pensamento Sistêmico", type: "link", url: "https://exemplo.com" },
];

const SystemicStudiesSection = () => {
  return (
    <section className="section-muted pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="container max-w-3xl">
        <SectionTitle
          label="Estudos Sistêmicos"
          subtitle="Documentos e links para aprofundamento."
        />

        {studies.length === 0 ? (
          <p
            className="text-center text-sm font-body text-muted-foreground"
            style={{ textAlign: "center", hyphens: "none" }}
          >
            Em breve, novos materiais serão disponibilizados.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {studies.map((item, i) => {
              const isDoc = item.type === "document";
              const Icon = isDoc ? FileText : LinkIcon;
              const ActionIcon = isDoc ? Download : ExternalLink;
              const actionLabel = isDoc ? "Baixar" : "Acessar";

              return (
                <a
                  key={i}
                  href={item.url}
                  target={isDoc ? undefined : "_blank"}
                  rel={isDoc ? undefined : "noopener noreferrer"}
                  download={isDoc || undefined}
                  onClick={() =>
                    trackActivity(isDoc ? "study_download" : "study_link_click", {
                      title: item.title,
                    })
                  }
                  className="card-refined p-4 flex items-start gap-3 border-accent/40 hover:border-accent transition-colors"
                >
                  <Icon size={20} className="text-accent mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-body text-sm font-semibold text-foreground"
                      style={{ textAlign: "left", hyphens: "none" }}
                    >
                      {item.title}
                    </p>
                    {item.description && (
                      <p
                        className="font-body text-xs text-muted-foreground mt-1"
                        style={{ textAlign: "left", hyphens: "none" }}
                      >
                        {item.description}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-xs font-body font-bold text-accent mt-2">
                      <ActionIcon size={14} />
                      {actionLabel}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default SystemicStudiesSection;
