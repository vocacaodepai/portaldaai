# Portal da AI

Blog sobre inteligência artificial focado em ajudar pessoas a entender, usar
e **monetizar** IA no dia a dia — para todas as idades e níveis de
conhecimento. Construído para publicação diária de artigos e já preparado
para o Google AdSense.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, TypeScript)
- Tailwind CSS 4
- Conteúdo estático em `lib/articles.ts` (10 artigos já publicados)
- Capas de imagem via [Pexels API](https://www.pexels.com/api/), com
  fallback ilustrado gerado localmente quando a chave não está configurada

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Imagens do Pexels

Copie `.env.example` para `.env.local` e informe sua chave:

```
PEXELS_API_KEY=sua_chave_aqui
```

Sem a chave, cada artigo exibe uma capa ilustrada (gradiente + padrão
geométrico) gerada localmente — o site funciona normalmente, só sem fotos
reais.

## Estrutura de conteúdo

- `lib/articles.ts` — todos os artigos, categorias e metadados do site
- `lib/pexels.ts` — integração com a API do Pexels
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
(Vercel, Netlify, etc.). Lembre-se de configurar a variável de ambiente
`PEXELS_API_KEY` no ambiente de produção.
