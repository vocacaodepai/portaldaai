# Portal da AI

Blog sobre inteligência artificial focado em ajudar pessoas a entender, usar
e **monetizar** IA no dia a dia — para todas as idades e níveis de
conhecimento. Construído para publicação diária de artigos e já preparado
para o Google AdSense.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, TypeScript)
- Tailwind CSS 4
- Conteúdo estático em `lib/articles.ts`, atualizado diariamente
- Capas de imagem via [Pexels API](https://www.pexels.com/api/) (principal) e
  [Pixabay API](https://pixabay.com/api/docs/) (segunda opção), com fallback
  ilustrado gerado localmente quando nenhuma chave está configurada

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Imagens (Pexels e Pixabay)

Copie `.env.example` para `.env.local` e informe suas chaves:

```
PEXELS_API_KEY=sua_chave_aqui
PIXABAY_API_KEY=sua_chave_aqui
```

O Pexels é tentado primeiro; se não retornar resultado, o Pixabay é usado
em seguida. Sem nenhuma das duas chaves, cada artigo exibe uma capa
ilustrada (gradiente suave) gerada localmente — o site funciona
normalmente, só sem fotos reais.

## Estrutura de conteúdo

- `lib/articles.ts` — todos os artigos, categorias e metadados do site
- `lib/news.ts` — notícias reais do mercado de IA exibidas em `/noticias`
- `lib/pexels.ts` / `lib/pixabay.ts` — integração com os bancos de imagem
- `app/artigos/[slug]` — página de artigo individual
- `app/categoria/[slug]` — listagem por categoria

Para publicar um novo artigo, adicione um novo objeto ao array `articles`
em `lib/articles.ts`.

## Páginas institucionais (AdSense)

O site já inclui Sobre, Contato, Política de Privacidade e Termos de Uso —
pré-requisitos comuns para aprovação no Google AdSense — além de
`sitemap.xml` e `robots.txt` gerados automaticamente.

## Deploy

Projeto pronto para deploy em qualquer plataforma compatível com Next.js
(Vercel, Netlify, etc.), além de um build 100% estático para o GitHub
Pages (`npm run build:gh-pages`, ver `.github/workflows/deploy-gh-pages.yml`).
Lembre-se de configurar `PEXELS_API_KEY` e `PIXABAY_API_KEY` no ambiente
de produção (ou como secrets do GitHub Actions).
