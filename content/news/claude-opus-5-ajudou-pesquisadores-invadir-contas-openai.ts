import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "claude-opus-5-ajudou-pesquisadores-invadir-contas-openai",
  title: "Pesquisadores usam Claude Opus 5 para invadir contas de funcionários da OpenAI e provar falha de segurança",
  author: "Bruno Danello",
  summary:
    "Uma equipe da empresa de segurança Hacktron encadeou uma falha no fórum público de ajuda da OpenAI com uma brecha no sistema de login único da empresa, usando o Claude Opus 5 para conduzir o ataque — chegando a um repositório interno de código em menos de 72 horas. A OpenAI corrigiu a falha em 14 horas e pagou US$ 6.500 de recompensa.",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/09/18/researchers-used-anthropics-claude-to-hack-into-openai/",
  date: "2026-09-18",
  content: `
    <p>Três pesquisadores da empresa de segurança Hacktron usaram o Claude Opus 5, da Anthropic, para encadear duas falhas de segurança e tomar controle de contas de funcionários da OpenAI no ChatGPT e no Codex — chegando, na sequência, a um repositório interno de código da própria OpenAI. O caso foi tratado como pesquisa de segurança responsável, não como ataque real, e terminou com a falha corrigida e uma recompensa paga pela OpenAI.</p>

    <h2>Como o ataque funcionou</h2>
    <p>A cadeia começou com uma vulnerabilidade de execução remota de código no processamento de imagens do Discourse, software que roda o fórum público de ajuda da OpenAI, e seguiu por uma fragilidade no sistema de login único (SSO) da empresa. Isso mostra como uma falha num serviço periférico, aparentemente de baixo risco, pode atravessar fronteiras de identidade e chegar a ambientes de desenvolvimento de alto valor.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">A velocidade importa</span>
      <p>Da primeira descoberta até o acesso interno confirmado, o processo levou menos de 72 horas. A OpenAI confirmou a correção da falha cerca de 14 horas depois de receber o relato — um tempo de resposta rápido, mas que ainda assim deixa uma janela real de exposição quando uma vulnerabilidade em cadeia é descoberta.</p>
    </div>

    <h2>Uma pesquisa responsável, não um ataque real</h2>
    <p>A equipe da Hacktron reportou as falhas à OpenAI, comprovou o acesso conseguido através de um pull request inofensivo, e parou por ali — sem explorar o acesso além do necessário para demonstrar o problema. Em 1º de setembro, a OpenAI pagou US$ 6.500 de recompensa (bug bounty) pela descoberta.</p>

    <h2>Por que isso importa mesmo fora do universo técnico</h2>
    <p>O episódio reforça um ponto que já tratamos em nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">guia sobre escolher ferramentas de IA com segurança</a>: até empresas com times de segurança robustos como a OpenAI enfrentam falhas em cadeia difíceis de prever, e agentes de IA cada vez mais capazes — como o próprio Claude Opus 5, usado aqui para o bem — também tornam mais rápido tanto encontrar quanto explorar esse tipo de vulnerabilidade, para o lado bom e para o lado ruim.</p>
  `,
};
