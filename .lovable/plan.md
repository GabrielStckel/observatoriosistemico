## Objetivo

Reorganizar conteúdo das seções, removendo "Estudos Sistêmicos" e trazendo as datas do Laboratório Sistêmico para a seção Hotseat e Clube de Estudos.

## O que será feito

### 1. Remover a seção "Estudos Sistêmicos"
- Remover o componente `SystemicStudiesSection` da página `Index3.tsx` (import + uso). Vale para as rotas `/ano3` e `/informacoes`, que usam a mesma página.

### 2. Seção Hotseat e Clube de Estudos (`SupportSection.tsx`)
- Remover os dois parágrafos:
  - "Na última quarta-feira de todo mês, a partir das 20h30min. (horário sugerido)"
  - "Primeira obra: a definir"
- Adicionar, **acima dos downloads**, o grid de datas (mesmas 6 datas do Laboratório Sistêmico), com o mesmo recurso de agendar: horário "19:30 às 22:00", botão "Agendar" com opções Google Agenda e Apple/Outlook (.ics) — idêntico ao Laboratório.
- Acima do grid de downloads, adicionar o texto/título **"Materiais de estudo para download"**.

Ordem final da seção:
```text
Hotseat e Clube de Estudos (título)
  → parágrafo de descrição (mantido)
  → grid de datas com botão Agendar
  → "Materiais de estudo para download"
  → grid de 6 downloads
```

### 3. Laboratório Sistêmico (`LaboratorySection.tsx`)
- Remover o grid de datas/agendamento (as datas foram movidas para o Hotseat). A seção mantém apenas o título e o parágrafo descritivo.

## Detalhes técnicos
- Mover a lógica de calendário (`labSchedule`, `toGoogleCalendarUrl`, `downloadICS`, `buildICSForItems`, `triggerDownload`) de `LaboratorySection` para `SupportSection`.
- O evento de calendário gerado passará a se chamar "Hotseat e Clube de Estudos" (já que as datas agora pertencem a essa seção).
- Manter o mesmo layout responsivo das caixas (desktop: 4 em cima e 2 embaixo) e tokens semânticos do design system.
