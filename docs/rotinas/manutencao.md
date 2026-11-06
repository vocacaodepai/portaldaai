# Rotina de manutenção de páginas antigas (diária, 15:43 de Brasília)

Leia antes `docs/rotinas/comum.md`, o `CLAUDE.md` e
`docs/padrao-editorial.md`.

## Escolha das páginas (5 a 8 por rodada)
1. URLs que o dono mandar da lista "rastreada, mas não indexada" do Search
   Console, ainda não tratadas. Atenção: URLs que terminam em
   `/opengraph-image` são imagens de compartilhamento e não precisam de nada.
2. Senão, as páginas mais fracas: texto mais curto, poucos links internos
   recebidos, antigas sem atualização ou com tema quase igual a outra.
   Priorize artigos recentes que ainda não recebem nenhum link interno.

## O que fazer em cada página (uma ação)
- Melhorar: aprofundar com fonte conferida, atualizar fatos, corrigir erros,
  3 a 6 links internos saindo e, principalmente, 2 a 4 páginas relacionadas
  passando a linkar para ela; ajustar title e meta fracos. Em artigo,
  `updated` com a data de hoje; em notícia, nunca mudar a data.
- Juntar: nunca apague nem redirecione; liste o par e sugira qual fica.
- Página sem salvação: nunca marque noindex; liste para o dono decidir.
- Em AI Indica, mantenha todas as regras de preço, botão e foto do
  `CLAUDE.md`.

## Registro
- Liste no relatório as páginas tratadas (slug e o que mudou) para que a
  próxima rodada não repita. Não dependa de arquivos em `/tmp`: eles somem
  quando o ambiente reinicia. Para saber o que já foi tratado, veja o
  histórico do git (`git log --since=... --grep=Manutenção`).
