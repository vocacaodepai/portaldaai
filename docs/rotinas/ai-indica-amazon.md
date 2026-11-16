# Rotina AI Indica com Amazon (1 por dia, 06:07 de Brasília; desde 16/11/2026)

Leia antes `docs/rotinas/comum.md` e, no `CLAUDE.md`, as seções
Categorização editorial, Nota (0-10), Filtros de navegação, Imagens de
produto, Botão de compra, Transparência Amazon, Título variado, Preços
(faixa de mercado) e Botão espalhado.

## Quantidade
- 1 artigo por dia: dia do mês par = comparativo (`kind: "guia"`, 2 ou 3
  produtos reais da mesma categoria); dia ímpar = review de produto único
  (`kind: "review"`, com o campo `review` completo).
- Só tecnologia e eletrônicos ligados ao tema do site: informática, áudio e
  vídeo, casa inteligente, segurança eletrônica, celulares e acessórios,
  eletrônicos de cozinha com recurso inteligente. Nada de alimento, higiene,
  cosmético, papelaria, roupa, brinquedo ou artigo esportivo.
- Nunca "testamos"/"testei" sem uso real: o texto diz que a análise parte da
  ficha técnica e das avaliações de compradores.
- Não repita produto nem categoria já publicados (Amazon ou Shopee): confira
  com `grep -rl 'category: "ai-indica"' content/articles/` e os títulos.

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
