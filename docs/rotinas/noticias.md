# Rotina de notícias (2 por dia: 09:21 e 17:21 de Brasília)

Leia antes `docs/rotinas/comum.md` e as seções de notícia do `CLAUDE.md`
(imagem, horário, crédito de fonte e política de fonte de 27/10).

## Quantidade e escolha
- EXATAMENTE 1 notícia por rodada: a de maior impacto nas últimas 24 horas
  para quem usa IA para trabalhar, empreender ou ganhar dinheiro no Brasil
  (lançamento ou preço relevante de OpenAI, Anthropic, Google, Meta,
  Microsoft, xAI, DeepSeek, Mistral; regulação no Brasil, EUA ou UE; mercado
  de trabalho; segurança e golpes; negócios grandes).
- Ligação com IA clara. Nada de nicho, contratação, rodada de investimento
  pequena ou empresa sem relevância para o leitor brasileiro.
- Sem pauta forte, não publique nada.
- A rodada das 17:21 não repete o assunto nem o `topic` da rodada das 09:21;
  a das 09:21 evita o `topic` da noite anterior.
- Antes de escolher, veja o que já existe: `ls -t content/news | head -60`,
  `grep -h "title:" content/news/*.ts | tail -80` e
  `grep -h sourceUrl content/news/*.ts | tail -80`. Nunca a mesma notícia ou
  a mesma fonte duas vezes.

## Escrever
- `npm run content:new -- noticia <slug>` cria o esqueleto.
- Campos: title (55 a 75 caracteres), summary (140 a 158), sourceName (os
  veículos, ex. "OpenAI, The Verge"), sourceUrl (https, a matéria aberta),
  author "Bruno Danello", `publishedAt` com a hora REAL de Brasília
  (ISO 8601 com -03:00), `topic` (lancamentos, regulacao, mercado-trabalho,
  seguranca ou negocios), `imageQuery` específico, content, faq opcional.
- content: no mínimo 900 palavras, 3 ou mais h2, incluindo "Por que isso
  importa para você", e 3 a 6 links internos para slugs reais.
- 1 ou 2 imagens no corpo do Wikimedia Commons (URL que a API devolveu,
  licença conferida, `figcaption` "Foto: autor / Wikimedia Commons
  (licença)"). Se a API falhar (429), publique sem imagem no corpo.
