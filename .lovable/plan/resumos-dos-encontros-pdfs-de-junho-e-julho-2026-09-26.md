# Resumos dos Encontros — PDFs de Junho e Julho

Adicionar os dois PDFs enviados à seção "Resumos dos Encontros" (páginas /ano3 e /informacoes, que compartilham a mesma seção):

1. Copiar os arquivos enviados para `public/resumos/`:
   - `Observatório_Sistêmico_Módulo_III.pdf` → `public/resumos/ObservatorioSistemico_2026-06.pdf` (Junho)
   - `Observatório_Sistêmico_Módulo_IV.pdf` → `public/resumos/ObservatorioSistemico_2026-07.pdf` (Julho)
2. Em `src/components/MeetingSummariesSection.tsx`, preencher a `url` dos cards de Junho e Julho apontando para esses PDFs (padrão já usado por Abril e Maio).
3. Cards de Junho e Julho passam a mostrar "Baixar PDF" com destaque azul; os demais continuam "Em breve".

Sem alterações em outras seções.
