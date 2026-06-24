# Plano: ajustar o card de download no mobile

No mobile o card horizontal fica apertado e o título "materiais encontro 1" aparece cortado como "mate...". O desktop está bom e será mantido.

### O que será feito (em `src/components/SupportSection.tsx`)

1. Tornar o card responsivo: empilhar verticalmente no mobile (`flex-col`) e voltar ao horizontal a partir de `sm` (`sm:flex-row sm:items-center`).
2. No mobile, centralizar ícone, texto e botão; alinhar à esquerda/linha a partir de `sm`.
3. Remover o `truncate` do título no mobile (deixar o nome completo aparecer), mantendo o comportamento no desktop.
4. Fazer o botão "Baixar tudo" ocupar largura total no mobile (`w-full sm:w-auto`) para um toque mais confortável.

### Resultado esperado

No celular o card mostra ícone, nome completo, metadados e um botão largo, empilhados e legíveis; no desktop permanece igual ao layout horizontal já aprovado.