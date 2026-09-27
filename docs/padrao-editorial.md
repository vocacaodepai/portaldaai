# Padrão editorial do Portal da AI

Vale para todo artigo em `content/articles/<slug>.ts`, novo ou reformado. O script
`npm run check:content` confere a parte mecânica; o resto é responsabilidade de quem escreve.

## 1. Voz e propósito

- O Portal da AI ajuda pessoas comuns (iniciantes, quem quer renda extra, donos de
  pequenos negócios, profissionais) a entender, usar e ganhar dinheiro com inteligência
  artificial. Nunca vira blog genérico de tecnologia.
- Assinatura: Bruno Danello. Tom de sócio experiente explicando pra um amigo: frases
  curtas, português do Brasil natural, zero jargão sem explicação, zero enrolação.
- Concreto sempre: valores em R$, prazos, nome da ferramenta e do plano, o que digitar,
  o que esperar. Cena real vale mais que adjetivo.
- Honestidade acima de tudo:
  - Nenhuma estatística sem link para a fonte na mesma frase ou parágrafo.
  - Nenhum preço sem "verificado em dd/mm/aaaa" ou "consulte a página oficial".
  - Nenhuma alegação de teste pessoal ("testei por 30 dias", "medi X segundos") que não
    tenha acontecido. Análises se apresentam como análises.
  - Nenhuma promessa de renda ("ganhe R$ 5 mil por mês"). Fale de faixas realistas e do
    que depende delas.
  - Nenhuma URL inventada. Todo link externo é verificado antes de publicar.

## 2. Proibições de estilo (o leitor percebe texto de máquina de longe)

- Travessão (—) nunca. Use dois-pontos, vírgula, parênteses ou ponto.
- Aberturas e fechos de assistente: "Claro!", "Em resumo", "É importante ressaltar",
  "Vale destacar", "Nesse sentido", "Dito isso", "Espero ter ajudado".
- Estrutura "não é apenas X, é Y". Adjetivos vazios: incrível, poderoso, essencial,
  fundamental, revolucionário.
- Frases-fórmula de link: "como já discutimos em", "já detalhamos em", "como já mostramos".
  Link entra na frase de forma natural: "o <a>guia de prompts</a> mostra cinco exemplos".
- Repetir a mesma seção final "Continue lendo" com lista de 3 links em todo artigo. O
  fechamento é um parágrafo com CTA e, no máximo, 2 links.
- Parágrafos com mais de 4 frases. Seções de um parágrafo só.

## 3. Estrutura do arquivo

```ts
import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "keyword-principal-3-a-7-palavras",
  title: "Título com a keyword no início (50 a 65 caracteres)",
  seoTitle: "Versão curta para o Google (até 60 caracteres)",
  excerpt: "Resumo com a keyword e um verbo de ação (140 a 158 caracteres).",
  metaDescription: "Pode ser igual ao excerpt ou uma variação (140 a 158 caracteres).",
  category: "iniciantes", // iniciantes | monetizacao | negocios | ferramentas | carreira | futuro
  date: "AAAA-MM-DD", // data de hoje em America/Sao_Paulo (nunca futura)
  updated: "AAAA-MM-DD", // só em artigos reformados
  readTime: 7, // Math.max(1, Math.round(palavras / 200))
  imageQuery: "three or four concrete english words", // ex.: "laptop spreadsheet finance desk"
  seed: 92, // inteiro sequencial, maior que todos os existentes
  kind: "guia", // ou "review" (aí o campo review é obrigatório)
  author: "Bruno Danello",
  keyPoints: ["Frase 1", "Frase 2", "Frase 3"],
  sources: [{ label: "Nome da fonte", url: "https://..." }],
  content: `...HTML...`,
  faq: [{ question: "Pergunta como a pessoa digita no Google?", answer: "40 a 80 palavras." }],
  quiz: [{ question: "...", options: ["a", "b", "c"], answer: 1, explanation: "..." }],
};
```

- `content` é um template literal: nada de crase nem `${}` dentro.
- Tags permitidas no HTML: p, h2, h3, h4, ul, ol, li, a, strong, em, b, i, br, hr,
  blockquote, code, pre, table, thead, tbody, tr, th, td, div, span, img, figure,
  figcaption, small, mark, sup, sub, dl, dt, dd, cite, abbr, kbd. Nada de `style=`,
  `<script>`, `<iframe>`, `<svg>`, handlers `on*=`.
- Caixas de destaque: `<div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>...</p></div>`
  com `callout-ok` (confirmado/positivo), `callout-warn` (atenção), `callout-bad`
  (nunca faça), `callout-tip` (dica). Máximo 3 por artigo.
- Checklist: `<ul class="checklist"><li>...</li></ul>`.
- Prompts prontos: `<pre><code>texto do prompt</code></pre>`.

## 4. Estrutura do corpo

1. Abertura de 2 parágrafos, sem título. O primeiro (40 a 60 palavras) responde direto a
   intenção de busca e contém a keyword exata.
2. 5 a 8 seções `<h2>` com 150 a 250 palavras cada. O primeiro h2 é uma pergunta ou
   "O que é X". Use `<h3>` dentro de seções longas (passos, cenários, ferramentas).
3. Pelo menos um destes: tabela comparativa (`<table>` com `<thead>`), checklist ou
   passo a passo numerado.
4. Um exemplo brasileiro concreto com números (R$, prazo, ferramenta e plano).
5. Quando o tema envolve IA generativa: 2 a 3 prompts reais em `<pre><code>`.
6. Uma seção "Erros comuns" ou "Quando não usar" (ou equivalente).
7. Preços e limites de ferramentas citadas com data de verificação.
8. Fechamento: um parágrafo de reforço com CTA para a categoria ou um artigo pilar.

Tamanho: 1.200 a 1.800 palavras de texto real (sem contar tags). Reviews: 1.400 a 1.900.

## 5. Links

- 10 a 14 links internos distintos (`/artigos/<slug>` ou `/noticias/<slug>`), só para slugs
  que existem (`ls content/articles content/news`). Espalhados pelo corpo, não só no fim.
  Texto-âncora natural com a ideia do destino, nunca "clique aqui" nem a mesma URL 2x.
- 2 a 4 links externos para fontes primárias (documentação oficial da OpenAI, Anthropic,
  Google, Microsoft; Sebrae, gov.br, IBGE, Receita Federal; Stanford AI Index, McKinsey,
  Reuters, Folha, Estadão etc.), sempre `https`, com `rel="noopener noreferrer"`. Link de
  afiliado leva `rel="sponsored noopener"` e aviso visível. Toda URL externa é aberta e
  conferida (WebFetch) antes de entrar no artigo; se não abrir, não entra.
- `sources` lista as mesmas fontes externas do corpo (2 a 5).

## 6. SEO on-page (checado pelo script quando possível)

- 1 keyword principal + 2 ou 3 secundárias definidas antes de escrever. Keyword no
  título, no slug, no primeiro parágrafo, em pelo menos um h2 e no excerpt.
- Variar o formato do título: "X: guia completo", "Melhores X para Y", "X vale a pena?",
  "X ou Y: qual escolher", "Como fazer X" (não usar "Como" em mais da metade dos artigos).
- `faq`: 4 a 6 perguntas no formato de busca real ("X é gratuito?", "X funciona em
  português?", "quanto custa X?", "X ou Y?"), respostas de 40 a 80 palavras.
- `keyPoints`: 3 frases completas que resumem o artigo (aparecem no topo, "Em 3 pontos").
- `quiz`: opcional, 2 a 3 perguntas, só quando ajuda a fixar (iniciantes, carreira).

## 7. Reviews (`kind: "review"`)

- Só de ferramentas que o leitor do blog realmente consideraria (não ferramentas de
  desenvolvedor). Campo `review` completo: tool, score (0 a 10, uma casa decimal, média
  ponderada dos critérios), criteria (facilidade para iniciantes, qualidade em português,
  recursos, custo-benefício em reais, privacidade e controle), pros, cons, price, bestFor,
  url oficial, affiliate (true só se houver link de afiliado), testedDays só se houve teste.
- Corpo segue o modelo: veredito em 30 segundos, transparência, o que é, como avaliamos,
  o que entrega na prática, prós e contras, preço em reais, para quem vale, alternativas
  (com opção gratuita), privacidade, nota final, FAQ.

## 8. Antes de publicar

1. `npm run check:content` sem nenhum ERRO (avisos de artigos antigos são aceitáveis).
2. Reler o artigo como leitor: responde a pergunta do título? tem algo que só esse texto
   dá? alguém pagaria pelo conselho?
3. Sem travessão, sem frases-fórmula, sem número sem fonte.
