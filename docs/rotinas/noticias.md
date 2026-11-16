# Rotina "radar de notícias" (de hora em hora, 07:00 às 23:00 de Brasília; desde 16/11/2026)

Leia antes `docs/rotinas/comum.md` e as seções de notícia do `CLAUDE.md`
(imagem, horário, crédito de fonte e política de fonte de 27/10).

O Portal da AI é um hub de notícias de IA e precisa ser rápido. Por isso a
rotina antiga (1 notícia por dia, 09:21) virou um radar: uma rodada por hora,
das 07:00 às 23:00 de Brasília.

## Quantidade e escolha
- Cada rodada publica no máximo 1 notícia nova, e só se houver fato forte e
  novo de IA nas últimas horas: o de maior impacto para quem usa IA para
  trabalhar, empreender ou ganhar dinheiro no Brasil (lançamento ou preço
  relevante de OpenAI, Anthropic, Google, Meta, Microsoft, xAI, DeepSeek,
  Mistral; regulação no Brasil, EUA ou UE; mercado de trabalho; segurança e
  golpes; negócios grandes).
- Teto de 4 notícias novas por dia (somando rodadas e pedidos urgentes do
  dono). Conte antes de começar:
  `grep -l 'date: "<AAAA-MM-DD de hoje>"' content/news/*.ts | wc -l`.
  Chegou a 4, a rodada só pode atualizar notícia existente.
- Ligação com IA clara. Nada de nicho, contratação, rodada de investimento
  pequena ou empresa sem relevância para o leitor brasileiro.
- Sem pauta forte, a rodada termina em silêncio: não publica nada e não abre
  PR.
- Evite repetir o `topic` da notícia anterior do dia quando houver pauta
  forte equivalente, e nunca repita um assunto já coberto sem fato novo de
  verdade.
- Antes de escolher, veja o que já existe: `ls -t content/news | head -60`,
  `grep -h "title:" content/news/*.ts | tail -80` e
  `grep -h sourceUrl content/news/*.ts | tail -80`. Nunca a mesma notícia ou
  a mesma fonte duas vezes.

## URL nova ou atualização
- Desdobramento pequeno do mesmo caso (nova declaração, novo número, reação
  de mercado) = atualização da notícia existente, nunca URL nova.
- URL nova só para fato novo de verdade (ex.: investigação aberta e, dias
  depois, renúncia do executivo).
- Atualizar: acrescente no topo do corpo uma seção
  `<h2>Atualização (HH:MM)</h2>` com o fato novo, a fonte e o que muda, e
  preencha `updatedAt` (campo de `NewsItem`, ISO 8601 com -03:00) com a hora
  REAL de Brasília. `date` e `publishedAt` nunca mudam. Se o campo
  `updatedAt` ainda não existir em `lib/types.ts`, acrescente só a seção
  "Atualização (HH:MM)" e relate.
- A atualização não conta no teto de 4 notícias novas.

## Notícia de última hora
- Pode sair com no mínimo ~500 palavras, desde que tenha as seções
  "O que se sabe", "O que ainda não está confirmado" e "Por que isso importa
  para você", com fonte aberta e conferida.
- Nas rodadas seguintes, quando houver fato novo, aprofunde a MESMA URL
  (seção "Atualização (HH:MM)" e `updatedAt`, como acima).

## Pedido urgente do dono
- Fora das rodadas, o dono pode pedir no chat uma notícia urgente: ela é
  publicada na hora, com as mesmas regras de fonte e texto, e conta no teto
  do dia.

## Escrever
- `npm run content:new -- noticia <slug>` cria o esqueleto.
- Campos: title (55 a 75 caracteres), summary (140 a 158), sourceName (os
  veículos, ex. "OpenAI, The Verge"), sourceUrl (https, a matéria aberta),
  author "Bruno Danello", `publishedAt` com a hora REAL de Brasília
  (ISO 8601 com -03:00), `topic` (lancamentos, regulacao, mercado-trabalho,
  seguranca ou negocios), `imageQuery` específico, content, faq opcional.
- content: no mínimo ~900 palavras (ou ~500 na notícia de última hora, com
  as três seções acima), 3 ou mais h2, incluindo "Por que isso importa para
  você", e 3 a 6 links internos para slugs reais.
- Texto com análise própria do Portal da AI: nunca reescrever matéria de
  outro veículo sem análise própria e sempre creditar a fonte (regras do
  `CLAUDE.md`). Acusação a pessoa real só com atribuição clara
  ("segundo a CNBC...") e sem adjetivos.
- 1 ou 2 imagens no corpo do Wikimedia Commons (URL que a API devolveu,
  licença conferida, `figcaption` "Foto: autor / Wikimedia Commons
  (licença)"). Se a API falhar (429), publique sem imagem no corpo.
