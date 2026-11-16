# Rotina de artigos gerais (1 por dia, 05:00 de Brasília; desde 16/11/2026)

Leia antes `docs/rotinas/comum.md`, a seção "Filtros de navegação" do
`CLAUDE.md` e `docs/padrao-editorial.md` (sem o campo `sources`).

## Categoria do dia (dia do mês no fuso de Brasília, resto da divisão por 6)
- 0: iniciantes · 1: monetizacao · 2: negocios · 3: ferramentas ·
  4: carreira · 5: futuro
- 1 artigo só, com mais profundidade. Antes de escrever, procure artigo com a
  mesma intenção de busca (`ls content/articles | grep <palavra>` e os
  títulos): se existir, não crie outro; relate e sugira melhorar o existente.

## Escolher a pauta
- Veja os últimos artigos de cada categoria do dia (data e
  `articleSubcategory`) e escolha um subtipo DIFERENTE do último.
- Intenção de busca real no Brasil (cauda longa, pergunta que as pessoas
  pesquisam), de preferência em alta agora, com fonte primária conferida.
- Rejeite a pauta se 3 ou mais palavras do slug novo já aparecem juntas num
  slug existente.

## Escrever
- `npm run content:new -- artigo <slug> <categoria>`.
- title 50 a 65 caracteres, seoTitle até 60, excerpt e metaDescription 140 a
  158, `imageQuery` com 3 ou 4 palavras concretas em inglês (sem
  `coverImage`), keyPoints (3), faq (4 a 6), quiz opcional, readTime.
- `articleSubcategory` obrigatório (exceto ferramentas).
- Corpo: 1.300 a 1.800 palavras, 5 a 8 h2, tabela ou checklist, exemplo
  brasileiro com números, prompts em `<pre><code>` quando couber, seção de
  erros comuns, fechamento com CTA, no máximo 3 callouts.
- 10 a 14 links internos para slugs reais e 2 a 4 externos para fontes
  primárias, cada um aberto e conferido. Preço só com "verificado em
  dd/mm/aaaa".
