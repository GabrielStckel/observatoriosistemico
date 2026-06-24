## Objetivo

Na seção **Hotseat e Clube de Estudos** (`SupportSection.tsx`), adicionar um grid com 6 caixas, cada uma com o nome do material e um botão para download do respectivo arquivo (4 PDFs e 2 DOCX).

## Arquivos e nomes propostos nas caixas

| Arquivo | Nome exibido na caixa |
|---|---|
| vera-bassoi.pdf | Vera Bassoi |
| o-homem-holistico.pdf | O Homem Holístico |
| TeoriaHoloinformacionaldaConscincia.docx | Teoria Holoinformacional da Consciência |
| Ciencia_consciencia_e_espiritualidade.pdf | Ciência, Consciência e Espiritualidade |
| Auto-OrganizacaoeConsciencia.docx | Auto-Organização e Consciência |
| 10+cartografias.pdf | 10 Cartografias |

(Os nomes podem ser ajustados — me avise se quiser outros títulos.)

## O que será feito

1. Subir os 6 arquivos para o CDN de assets (mantém o repositório leve), gerando os ponteiros `.asset.json`.
2. Adicionar à seção `SupportSection.tsx`, abaixo do texto existente, um grid responsivo de cards seguindo o mesmo padrão visual já usado em `SystemicStudiesSection` (ícone de documento, título e botão "Baixar").
3. Cada card terá `<a download>` apontando para a URL do asset, com rastreamento de download via `trackActivity` (igual aos outros downloads do site).
4. O texto atual da seção (encontros, horário, primeira obra) será mantido acima do grid.

## Detalhes técnicos

- Upload via `lovable-assets create --file /mnt/user-uploads/<arquivo>` → escrever o JSON em `src/assets/<arquivo>.asset.json`.
- Importar os ponteiros no componente e usar `asset.url` no `href`.
- Aplicar tokens semânticos do design system (sem cores hardcoded), respeitando a estética institucional/editorial do projeto.
- Layout: `grid grid-cols-1 sm:grid-cols-2` com `gap-3`, dentro do `card-refined` ou cards individuais.
