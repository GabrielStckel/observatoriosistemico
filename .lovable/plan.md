## Objetivo

Substituir os 6 cards individuais de download na seção "Hotseat e Clube de Estudos" por um único card que baixa um ZIP com todos os materiais, chamado **"materiais encontro 1"**.

## O que será feito

### 1. Gerar o arquivo ZIP
- Baixar os 6 assets atuais do CDN para `/tmp`.
- Compactar os 6 arquivos em um único ZIP chamado `materiais-encontro-1.zip`.
- Nome dos arquivos dentro do ZIP mantidos como estão no CDN.

### 2. Publicar o ZIP no CDN
- Fazer upload do ZIP via `lovable-assets create`.
- Criar o ponteiro `src/assets/materiais-encontro-1.zip.asset.json` com a URL do CDN.

### 3. Atualizar a seção de downloads
Em `src/components/SupportSection.tsx`:
- Importar o novo asset `materiais-encontro-1.zip.asset.json`.
- Remover o array de 6 cards individuais (`materials`).
- Adicionar um único card acima do texto "Materiais de estudo para download" (ou logo abaixo dele) com:
  - Título: **"materiais encontro 1"**.
  - Ícone de arquivo compactado (`FileArchive` ou similar do `lucide-react`).
  - Botão "Baixar tudo" apontando para o URL do ZIP.
  - Tracking via `trackActivity("study_download", { title: "materiais encontro 1" })`.
- Manter o mesmo estilo visual do card refinado (`card-refined`, borda accent, etc.).

## Resultado esperado
- Na seção "Materiais de estudo para download" aparece uma única caixa: **"materiais encontro 1"**.
- Um clique baixa o ZIP com os 6 arquivos originais dentro.

## Detalhes técnicos
- Os 6 `.asset.json` individuais permanecem no repositório (são a fonte dos arquivos dentro do ZIP).
- O download do ZIP será feito diretamente pelo link do CDN, sem lógica de cliente adicional.
- Após as alterações, rodar `bun run build` para validar TypeScript.