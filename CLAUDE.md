## Categorização editorial: Ferramentas vs. AI Indica

- **Ferramentas** (`category: "ferramentas"`): reviews e novidades sobre
  ferramentas de IA em si (softwares, apps, modelos), incluindo as
  atualizações mais recentes de cada uma. Sem link de compra/afiliado nem
  nota por critério no estilo produto físico.
- **AI Indica** (`category: "ai-indica"`): todo review que tem link direto
  de compra (afiliado Amazon ou outro), com nota por critério — produto
  físico ou não. É a categoria de "review com CTA de compra", não só
  eletrônico. Ver `kind: "review"` e o campo `review` em `lib/types.ts`.

Ao criar um artigo novo, decidir a categoria por essa regra: se tem link de
compra com afiliado, é AI Indica; se é sobre a ferramenta de IA e sua
evolução, é Ferramentas.

## Filtros de navegação (desde out/2026): cada aba filtra pelo próprio tema

Cada listagem tem o filtro certo pro que ela mostra, em vez do mesmo chip de
categoria do site inteiro repetido em toda aba:

- **`/artigos` e `/categoria/[slug]`** (exceto ferramentas e ai-indica):
  `ArticleCategoryChips` (`components/ArticleCategoryChips.tsx`), só com as
  categorias gerais (`articleFilterCategories` em `lib/articles.ts`:
  iniciantes, monetização, negócios, carreira, futuro). Ferramentas e AI
  Indica não aparecem aqui — cada uma tem a aba e o filtro próprios abaixo.
- **`/reviews`**: só reviews de ferramenta de IA (`category: "ferramentas"`
  **e** `kind: "review"` — `getReviews()` em `lib/articles.ts`). Reviews de
  produto físico (`category: "ai-indica"`) não aparecem mais aqui, têm o
  filtro próprio em `/categoria/ai-indica`. O filtro é `ReviewToolChips`
  (`components/ReviewToolChips.tsx`), por `review.tool` (ex.: "ChatGPT
  Plus", "Claude Pro") — fica escondido sozinho enquanto só existir 1
  ferramenta revisada.
- **`/categoria/ai-indica`**: filtro de duas camadas por categoria de
  produto (`ProductCategoryFilter`, `components/ProductCategoryFilter.tsx`),
  não pela categoria de artigo. Todo artigo de AI Indica (comparativo ou
  review de produto único) precisa ter `productCategory` e
  `productSubcategory` (`lib/types.ts`: `productCategories`/
  `productSubcategories`) — ex.: `productCategory: "cozinha"`,
  `productSubcategory: "air-fryer"`. Sem esses dois campos o artigo some do
  filtro (continua listado em "Todos", só não aparece ao filtrar por
  categoria/subcategoria específica). Essa página mostra todos os artigos
  de ai-indica numa página só (sem paginar), porque o filtro só funciona
  dentro dos cards que já estão na página.
- **`/categoria/ferramentas`** continua existindo (link antigo, SEO), mas
  sem chip de filtro extra — o conteúdo de ferramenta agora vive
  conceitualmente em `/reviews` (quando é review) e nos artigos gerais
  (quando é guia).
- A home (`/`) e a página 404 continuam usando o `CategoryChips` original
  (site inteiro: todas as categorias + Reviews + Notícias) — ali faz
  sentido mostrar tudo, é navegação geral, não filtro de uma listagem.

Taxonomia de produto hoje (`lib/types.ts`): Cozinha, Casa Inteligente,
Segurança, Áudio e Vídeo, Informática e Acessórios, Saúde e Bem-estar, cada
uma com suas subcategorias. Ao cobrir um tipo de produto novo que não se
encaixa em nenhuma subcategoria existente, adicionar a subcategoria nova
(e, se precisar, a categoria nova) em `lib/types.ts` antes de publicar.

## Imagens de pessoas e empresas reais (artigos e notícias, qualquer categoria)

Quando o texto fala de uma pessoa real (ex.: Elon Musk, Sam Altman) ou de uma
empresa específica, a capa deve ser uma foto real dessa pessoa/empresa, não
uma ilustração genérica de banco de imagem. Isso já é automático: o
`imageQuery` (texto livre descrevendo a foto desejada, ex.: `"Elon Musk
portrait"`, `"OpenAI logo"`) passa primeiro pela cascata abaixo antes de cair
em Pexels/Pixabay. Em artigo é campo de sempre; em notícia (`NewsItem`, ver
"Padrão de imagem em notícias" abaixo) é opcional e novo — sem ele, a notícia
simplesmente não mostra capa, como sempre foi.

- **Wikimedia Commons** (`lib/wikimedia.ts`) é a primeira fonte: só fotos sob
  Creative Commons ou domínio público, com crédito e licença sempre visíveis
  no site. Não precisa de chave de API.
- **Google Custom Search** (`lib/google-cse.ts`, variáveis
  `GOOGLE_CUSTOM_SEARCH_API_KEY` e `GOOGLE_CUSTOM_SEARCH_ENGINE_ID`) entra só
  como localizador dentro do próprio Wikimedia Commons
  (`site:commons.wikimedia.org`), quando a busca direta na API do Commons não
  acha nada com aquela frase. Nunca usar para baixar imagem de outro domínio
  ou de resultado de busca genérico: o fato de uma foto aparecer em vários
  sites não significa que ela tem licença para reuso (fotos de agência/
  imprensa de uma pessoa pública costumam ser protegidas por direito de autor
  mesmo quando circulam bastante), e isso vale tanto para risco de direitos de
  autor quanto para direito de imagem da pessoa retratada.
- **Pexels/Pixabay** seguem como último recurso, só para temas abstratos sem
  pessoa/empresa real identificável (ex.: "inteligência artificial
  conceitual").
- Para **produto físico** (categoria AI Indica), a regra já existente abaixo
  continua valendo e tem prioridade sobre toda essa cascata: foto oficial do
  fabricante, baixada manualmente, nunca Wikimedia/banco de imagem.

## Padrão de imagem em notícias (desde out/2026)

Toda notícia nova deve, a partir de agora, ter:

- **`imageQuery`** (campo opcional em `NewsItem`, `lib/types.ts`): texto livre
  descrevendo a capa, igual ao de artigo (ex.: `"Dario Amodei portrait"`,
  `"OpenAI logo"`). Passa pela mesma cascata Wikimedia-primeiro da seção
  acima. Sem pessoa/empresa identificável no fato (ex.: um lançamento de
  modelo), descreva o tema mesmo assim (ex.: `"servidor data center"`) — a
  cascata cai em Pexels/Pixabay sozinha quando o Wikimedia não acha nada.
- **`topic`** (campo opcional em `NewsItem`): um dos slugs de `newsTopics`
  (`lib/types.ts`): `lancamentos`, `regulacao`, `mercado-trabalho`,
  `seguranca`, `negocios`. Alimenta o filtro em `/noticias`
  (`components/NewsTopicFilter.tsx`), que é diferente do `CategoryChips` de
  artigo (iniciantes, monetização...) — não usar esse último em notícia.
- **1 ou 2 imagens no corpo**, nas notícias com pelo menos 900 palavras, pra
  não ficar só texto corrido. Mesmo esquema de `<figure><img><figcaption>`
  dos comparativos de produto (ver seção abaixo), mas aqui a foto vem direto
  de uma URL real do Wikimedia Commons (`https://upload.wikimedia.org/...`),
  igual ao processo de busca da cascata: buscar na API do Commons
  (`action=query&generator=search&gsrsearch=<termo> filetype:bitmap...`),
  confirmar a licença (`extmetadata.LicenseShortName`) e usar o `url`/
  `thumburl` retornado, com `<figcaption>Foto: <autor> / Wikimedia Commons
  (<licença>)</figcaption>`. `scripts/check-content.mjs` já libera
  `upload.wikimedia.org` como domínio permitido em `<img src>` de notícia.
  Nunca inventar uma URL de imagem: só usar a que a própria API retornou.

Notícia sem `imageQuery` continua publicando normalmente (sem capa, como
sempre foi) — isso é só o padrão daqui pra frente, não uma obrigação
retroativa nas ~380 notícias antigas.

## Imagens de produto (categoria AI Indica)

Nunca usar gerador de imagem por IA (ElevenLabs ou qualquer outro) para criar
ou compor capa/imagem de review de produto. Já testamos: a IA erra marca e
logo dos produtos reais (ex.: escreveu "JBL" num produto que era Xiaomi),
o que é inaceitável numa página que promete foto oficial do fabricante.

Em vez disso, sempre montar as imagens localmente com `sharp` (biblioteca já
usada no projeto, sem custo e sem inventar nenhum pixel do produto):

- **Foto real do produto**: baixar do site oficial do fabricante (nunca
  capturar da página da Amazon), salvar em `public/images/products/`, e
  referenciar via `coverImage` no `Article` (ver `lib/types.ts` e
  `components/CoverImage.tsx`). O componente usa `object-contain` para nunca
  esticar nem cortar a foto real.
- **Comparativo com várias fotos**: montar um card branco com sombra suave
  para cada produto, com o nome do modelo escrito por nós (não gerado por
  IA) embaixo, sobre um fundo com leve gradiente. Ver
  `scripts/build-product-cover.mjs` como referência do estilo (mesma paleta
  clara e mesma técnica de composição local).
- **Produto único com foto só vertical** (o que deixa espaço vazio nas
  laterais da capa 16:9): rodar
  `node scripts/build-product-cover.mjs <foto-de-entrada> <arquivo-de-saida>`
  antes de usar a foto como `coverImage`. O script amostra a cor real de
  fundo da própria foto (mediana dos pixels da borda, pra não pegar o
  produto por engano) e preenche o resto do quadro 16:9 com essa cor sólida,
  em vez de blur ou espaço vazio, mantendo o produto nítido e centralizado
  por cima. Sem blur: cor chapada igual à da foto original, sem inventar
  nada.

Essas fotos de produto, quando usadas dentro do corpo do comparativo em
`<figure><img></figure>` (uma por seção, uma por produto), já saem com
tamanho padronizado automaticamente: `.prose-article figure img` em
`app/globals.css` força a mesma caixa (proporção 4:3, `object-fit: contain`,
fundo neutro) pra toda foto de produto, não importa a resolução original do
fabricante. Não precisa editar a foto nem adicionar `width`/`height` manual
no HTML pra igualar o tamanho entre produtos — isso é só CSS, automático.

## Botão de compra (categoria AI Indica)

Todo artigo de AI Indica precisa converter, não só linkar. Além dos links
normais no texto, usar o botão de destaque `buy-btn` (classe liberada em
`lib/html.ts` e estilizada em `app/globals.css`):

```html
<div class="buy-btn">
  <a href="https://www.amazon.com.br/dp/<ASIN>?tag=portaldaai-20" rel="sponsored noopener noreferrer" target="_blank">Comprar <Nome do produto> agora ↗</a>
</div>
```

- Sempre um `buy-btn` logo abaixo da foto de cada produto (`<figure>`) num
  comparativo, um por produto.
- Em review de produto único, pelo menos um `buy-btn` no meio do corpo
  (além do botão que já existe no topo, no bloco de veredito), por exemplo
  depois da seção "para quem vale a pena".
- `href` sempre com o link de afiliado real (`tag=portaldaai-20`), nunca um
  link genérico de busca. `rel="sponsored noopener noreferrer"` e
  `target="_blank"` sempre presentes.

## Continue lendo (categoria AI Indica)

A seção "Continue lendo" ao fim de todo artigo (`app/artigos/[slug]/page.tsx`,
via `getRelatedArticles`) já prioriza artigos da mesma categoria antes de
completar com outras categorias (`lib/articles.ts`). Isso já mantém quem lê
um AI Indica dentro do fluxo de outros comparativos e reviews de produto:
não precisa de nenhuma seção nova, só continuar publicando AI Indica
suficiente pra essa seção ter o que mostrar.

## Rotina editorial diária: 10 artigos por dia

O Portal da AI publica 10 artigos por dia, em duas rotinas automáticas
separadas (dois triggers agendados):

- **5 artigos gerais** (rotina "Portal da AI — 5 artigos por dia", 05:00
  Brasília): um por categoria entre iniciantes, monetização, negócios,
  ferramentas, carreira/futuro. Sem link de afiliado.
- **5 artigos AI Indica** (rotina "Portal da AI — 5 AI Indica por dia",
  06:00 Brasília): sempre `category: "ai-indica"`, sempre com produto real
  vendido na Amazon Brasil e link de afiliado `tag=portaldaai-20`. Dividido
  todo dia em:
  - **3 comparativos** (`kind: "guia"`, tipo `melhor-fone-bluetooth-barato-comparativo-2026`):
    2 ou 3 produtos reais da mesma categoria (celular, carregador,
    fone, mouse etc.) comparados lado a lado, com tabela e nota por
    critério, pra indicar qual compensa mais.
  - **2 reviews de produto único** (`kind: "review"`, tipo
    `soundcore-p20i-anker-vale-a-pena`): um produto só, com o campo
    `review` completo (nota, critérios, prós, contras, preço, `url` de
    afiliado).

Todo artigo de AI Indica segue as regras de imagem da seção acima (foto
real oficial do fabricante, nunca gerador de IA, `build-product-cover.mjs`
para foto vertical de produto único, composição em cards pra comparativo) e
nunca alega teste físico pessoal que não aconteceu: é análise a partir da
ficha técnica oficial e das avaliações reais de compradores na Amazon.

## Deploy

O deploy de produção do Portal da AI é feito sempre pela Vercel (projeto
`portaldaai`, time `portal-da-ai`), com deploy automático a cada push na
branch `claude/portal-ai-blog-iujjht` (produção). Domínio principal:
`www.portaldaai.com.br` (com `portaldaai.com.br` redirecionando para ele).
O workflow do GitHub Pages (`.github/workflows/deploy-gh-pages.yml`) segue
existindo só como preview auxiliar, não é mais o deploy de referência.

@AGENTS.md
