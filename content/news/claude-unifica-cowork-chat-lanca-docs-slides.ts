import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "claude-unifica-cowork-chat-lanca-docs-slides",
  title: "Anthropic unifica Cowork e chat num só Claude e lança o Claude Docs e o Claude Slides",
  author: "Bruno Danello",
  summary:
    "O Claude agora decide sozinho o quanto de trabalho uma solicitação exige, usando as capacidades antes exclusivas do Cowork diretamente numa conversa comum — o Claude Docs permite escrever documentos junto com a IA, e o Claude Slides gera apresentações editáveis, exportáveis como PowerPoint ou PDF.",
  sourceName: "Claude Blog",
  sourceUrl: "https://claude.com/blog/cowork-is-now-claude",
  date: "2026-09-16",
  content: `
    <p>A Anthropic anunciou a unificação do Claude Cowork e do chat tradicional numa única experiência do Claude, encerrando a separação entre os dois ambientes que confundia usuários sobre onde uma tarefa deveria começar. A partir de agora, o próprio Claude decide o quanto de trabalho uma solicitação exige e usa as capacidades antes exclusivas do Cowork diretamente numa conversa comum, mantendo o contexto, as skills e os conectores já configurados pelo usuário.</p>

    <h2>Novas ferramentas: Docs, Slides e Design dentro da conversa</h2>
    <p>Junto com a fusão, a empresa lançou o Claude Docs e o Claude Slides. Com o Docs, o usuário pede um documento e escreve o texto junto com o Claude, editando diretamente dentro da conversa. Com o Slides, basta pedir uma apresentação para que o Claude monte os slides, permitindo edição direta, apresentação sem sair do Claude ou exportação como PowerPoint ou PDF. O Claude Design, lançado anteriormente como ferramenta separada, também passou a funcionar integrado às conversas.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Rollout gradual</span>
      <p>A experiência unificada começa a chegar a assinantes dos planos Pro e Max no navegador, no aplicativo de desktop e no celular nas próximas semanas — os planos Team e Free devem receber a atualização depois. Administradores de contas Enterprise vão receber pelo menos 30 dias de aviso prévio antes da mudança chegar às suas organizações.</p>
    </div>

    <h2>Por que isso importa</h2>
    <p>A unificação resolve uma fonte comum de frustração: usuários não sabiam onde uma tarefa deveria começar, especialmente porque o trabalho iniciado num ambiente não necessariamente seguia para o outro. A mudança também aproxima o Claude de concorrentes como o ChatGPT e o Copilot da Microsoft, que já vêm consolidando chat, produtividade e capacidades agênticas numa única superfície — um movimento que já discutimos em nossa cobertura sobre o <a href="/noticias/microsoft-relanca-copilot-super-app-agentes-autopilot">relançamento do Copilot como "super app"</a>.</p>
  `,
};
