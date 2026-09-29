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

## Deploy

O deploy de produção do Portal da AI é feito sempre pela Vercel (projeto
`portaldaai`, time `portal-da-ai`), com deploy automático a cada push na
branch `claude/portal-ai-blog-iujjht` (produção). Domínio principal:
`www.portaldaai.com.br` (com `portaldaai.com.br` redirecionando para ele).
O workflow do GitHub Pages (`.github/workflows/deploy-gh-pages.yml`) segue
existindo só como preview auxiliar, não é mais o deploy de referência.

@AGENTS.md
