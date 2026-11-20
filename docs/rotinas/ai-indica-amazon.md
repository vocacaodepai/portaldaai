# Rotina AI Indica com Amazon (1 por dia, 06:07 de Brasília; regras de 16/11/2026)

Leia antes `docs/rotinas/comum.md` e, no `CLAUDE.md`, as seções
Categorização editorial, Nota (0-10), Filtros de navegação, Imagens de
produto, Botão de compra, Transparência Amazon, Título variado, Preços
(faixa de mercado) e Botão espalhado.

## Quantidade
- 1 artigo por dia. A AI Indica publica 2 por dia (este da Amazon e 1 da
  Shopee, 07:37), e em cada dia um é comparativo e o outro é review:
  - dia do mês par (fuso de Brasília): Amazon = comparativo (`kind: "guia"`,
    2 ou 3 produtos reais da mesma categoria); Shopee = review.
  - dia ímpar: Amazon = review de produto único (`kind: "review"`, com o
    campo `review` completo); Shopee = comparativo.
- Qualquer categoria de produto existente na Amazon Brasil (a AI Indica
  indica de tudo, não só tecnologia): casa, cozinha, pet, bebê, esporte,
  ferramentas, automotivo, escritório, beleza e cuidados, viagem,
  eletrônicos etc. Varie as categorias ao longo da semana.
- Não repita a mesma `productSubcategory` em 15 dias, somando Amazon e
  Shopee: confira com
  `grep -l 'category: "ai-indica"' content/articles/*.ts | xargs ls -t | head -40`
  e `grep -h productSubcategory` nesses arquivos. Também não repita produto
  já publicado.
- Nunca mamadeira, bico ou chupeta (Lei 11.265/2006).
- Nunca "testamos"/"testei" sem uso real: o texto diz que a análise parte da
  ficha técnica e das avaliações de compradores.

## Produto e link
- Produto real vendido na Amazon Brasil, ASIN conferido na página do produto
  (WebFetch; se der 503, `curl -sL https://www.amazon.com.br/dp/<ASIN>` sem
  mudar o User-Agent, conferindo o `<title>`).
- Link `https://www.amazon.com.br/dp/<ASIN>?tag=portaldaai-20`, com
  `rel="sponsored noopener noreferrer"` e `target="_blank"`.
- Foto oficial do fabricante (nunca da Amazon, nunca gerada por IA); capa com
  `scripts/build-comparativo-cover.mjs` ou `scripts/build-product-cover.mjs`.

## Texto
- `productCategory` e `productSubcategory` (subcategoria nova em
  `lib/types.ts` se preciso), `productScore` no comparativo ou `review.score`.
- Seção "Variação de preço" com faixa de mercado e a observação padrão.
- Botão "Comprar agora na Amazon ↗" no mínimo 5 vezes; callout de
  transparência só no comparativo; título em formato variado.
- 1.200 a 1.800 palavras, 5 a 8 h2, 8 a 12 links internos reais.
