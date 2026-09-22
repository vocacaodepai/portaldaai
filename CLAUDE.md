## Deploy

O deploy de produção do Portal da AI é feito sempre pela Vercel (projeto
`portaldaai`, time `portal-da-ai`), com deploy automático a cada push na
branch `claude/portal-ai-blog-iujjht` (produção). Domínio principal:
`www.portaldaai.com.br` (com `portaldaai.com.br` redirecionando para ele).
O workflow do GitHub Pages (`.github/workflows/deploy-gh-pages.yml`) segue
existindo só como preview auxiliar, não é mais o deploy de referência.

@AGENTS.md
