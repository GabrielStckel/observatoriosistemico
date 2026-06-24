# Plano: melhorar o card de download "materiais encontro 1"

A caixa atual de download na seção **Materiais de estudo para download** foi considerada muito larga e muito simples. Você escolheu a direção **Card horizontal polido**.

### O que será feito

1. Substituir o card de download atual em `src/components/SupportSection.tsx` por um card horizontal mais refinado.
2. Aplicar os tokens semânticos do projeto (cor institucional, tipografia Inter, sombras suaves) mantendo a consistência visual.
3. Deixar o card centralizado e menos largo (`max-w-2xl`), com:
   - Ícone de arquivo maior em um quadrado com fundo translúcido (`bg-accent/10`).
   - Título e uma linha de metadados ("ZIP • 6 arquivos").
   - Botão de ação sólido e visível com ícone de download.
4. Preservar o link de download, o atributo `download` e o `trackActivity("study_download", ...)` existentes.
5. Rodar a verificação de build TypeScript para garantir que não há erros.

### Resultado esperado

O card ficará mais compacto, com hierarquia visual clara e botão de download proeminente, sem perder a identidade institucional do Observatório Sistêmico.