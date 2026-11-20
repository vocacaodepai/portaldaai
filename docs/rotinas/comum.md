# Regras comuns a todas as rotinas do Portal da AI

Estas regras valem para toda rotina automática (notícias, artigos, AI Indica
com Amazon e com Shopee, manutenção). Leia também o `CLAUDE.md` da raiz e o
`docs/padrao-editorial.md` (o campo `sources` citado nele está desatualizado e
NUNCA deve ser usado: ele não existe no tipo `Article`).

## Ambiente
- Trabalhe sempre num clone próprio e isolado em `/tmp` (ex.:
  `git clone --branch claude/portal-ai-blog-iujjht https://github.com/vocacaodepai/portaldaai.git /tmp/<rotina>-$(date +%s)`),
  nunca em `/home/user/portaldaai`. Apague só o seu clone no fim, com o
  caminho literal. Nunca apague clones de outras rotinas.
- Não crie lembretes, tarefas agendadas nem triggers.
- Não use `sed -i` em arquivos `.ts`: use Edit/Write ou Python com troca exata.
- O Next.js deste projeto não é o padrão (ver `AGENTS.md`); as rotinas só
  mexem em `content/`, `public/images/` e, quando preciso, `lib/types.ts`
  (subcategoria nova).

## Validação
- `npm run check:content` (zero ERRO), `npm run lint` e `npm run build`. Se o
  Turbopack falhar por causa do Google Fonts sem rede, use
  `npx next build --webpack`.
- `git diff --stat` só com os arquivos permitidos da rotina; nenhum segredo.

## Git e publicação
- Commit em português, sem citar modelo ou IA no texto, terminando com as
  linhas de atribuição da sessão.
- Push de uma branch própria, PR para `claude/portal-ai-blog-iujjht` (corpo
  termina com a linha "Generated with Claude Code" e a URL da sessão).
- Espere a Vercel ficar Ready (status do commit "Deployment has completed")
  e mescle por squash com `expectedHeadSha` de 40 caracteres. Se vier
  "Deployment rate limited", não mescle: relate a PR aberta.
- Conflito em `content/*/index.ts` ou `lib/types.ts`: merge da base, mantenha
  os dois lados e rode `npm run check:content` para regenerar.

## Texto
- Nunca invente fato, número, citação, URL, ASIN ou link. Nunca alegue teste
  pessoal. Sem travessão (—), sem "Em resumo", sem crase nem `${}` dentro do
  `content`, atributos HTML sempre com aspas duplas.
- Fonte externa só entra depois de aberta e conferida (WebFetch ou curl).
- O relatório final é em português, sem travessão.
