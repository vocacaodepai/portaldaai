# Rotina de qualidade e poda (diária, 15:43 de Brasília; desde 16/11/2026)

Leia antes `docs/rotinas/comum.md`, o `CLAUDE.md` e
`docs/padrao-editorial.md`. Esta rotina faz parte do plano de recuperação do
Search Console aprovado pelo dono em 16/11/2026: o objetivo não é mexer em
muitas páginas, é ter menos páginas fracas e mais páginas fortes.

## Inventário
- `node scripts/inventario-conteudo.mjs` gera `docs/inventario/inventario.csv`
  com todas as URLs (tipo, categoria, data, palavras, links internos
  recebidos, sinal de fraqueza). Rode no começo de cada rodada.
- Quando o dono mandar o CSV de Desempenho do Search Console (página,
  cliques, impressões), salve em `docs/inventario/gsc-<data>.csv` e o script
  passa a cruzar os dados.

## O que fazer por rodada (3 a 5 páginas, uma ação cada)
1. **Reforçar** páginas que já têm impressões no Search Console mas poucos
   cliques: melhorar título e meta, aprofundar com fonte conferida, corrigir
   fatos, e 2 a 4 páginas relacionadas passando a linkar para ela.
2. **Juntar** páginas que disputam a mesma intenção de busca: o conteúdo útil
   vai para a melhor, e a outra vira redirecionamento 301 (em
   `next.config.ts`, `redirects`). Só com dados do Search Console mostrando
   qual das duas tem mais impressões; sem dados, liste o par no relatório.
3. **Propor noindex** para páginas fracas (notícia curta e antiga sem
   cliques, review fora do tema do site, conteúdo duplicado): liste no
   relatório. Aplicar só depois que o dono enviar os dados do Search Console
   e o plano de poda for aprovado em lote.

## Regras
- `updated` só muda quando a página ganhou texto novo relevante. Trocar ou
  acrescentar links internos não muda a data. Em notícia, nunca mudar a data.
- Em AI Indica, mantenha todas as regras de preço, botão e foto do
  `CLAUDE.md`. Nunca remova link de afiliado de página que continua no ar.
- Nunca "testamos"/"testei" sem uso real.

## Registro
- Liste no relatório as páginas tratadas (slug e ação) e as propostas de
  junção e noindex. Para saber o que já foi tratado, veja o histórico do git
  (`git log --since=... --grep="Qualidade\|Manutenção"`).
