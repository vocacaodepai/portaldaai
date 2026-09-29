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
