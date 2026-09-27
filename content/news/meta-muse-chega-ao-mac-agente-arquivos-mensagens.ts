import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "meta-muse-chega-ao-mac-agente-arquivos-mensagens",
  title: "Muse, assistente de IA da Meta, chega ao Mac e passa a agir diretamente em arquivos, mensagens e calendário",
  author: "Bruno Danello",
  summary:
    "O aplicativo para macOS permite pedir ao Muse para organizar pastas, preparar um resumo a partir de e-mails, conversas e notas, ou preencher um formulário usando arquivos já salvos no computador — o acesso é opt-in por recurso, e ações sensíveis como apagar arquivos ou enviar mensagens exigem aprovação prévia do usuário.",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/09/18/metas-muse-hits-mac-letting-the-ai-take-actions-on-your-computer/",
  date: "2026-09-18",
  content: `
    <p>A Meta lançou uma versão do Muse, seu assistente de IA de propósito geral, para Mac — dando ao agente capacidade de agir diretamente dentro de aplicativos nativos do macOS, como Arquivos, Mensagens, Calendário, Notas e Mail, em vez de apenas responder perguntas como um chatbot tradicional.</p>

    <h2>O que o Muse consegue fazer no computador</h2>
    <p>Com o app instalado, o usuário pode pedir ao Muse para organizar pastas bagunçadas, preparar um resumo com base em e-mails, conversas e notas recentes, ou usar arquivos já salvos no Mac para preencher um formulário pela metade — tarefas que antes exigiriam alternar manualmente entre vários aplicativos.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Controle de acesso e aprovação</span>
      <p>O acesso do Muse a cada tipo de dado no Mac é opt-in, configurado pelo próprio usuário, e ações sensíveis — como apagar um arquivo ou enviar uma mensagem — exigem aprovação explícita antes de serem executadas. Ainda assim, especialistas em segurança já alertaram que esse tipo de agente com permissão para agir diretamente no sistema amplia a superfície de ataque do computador, tema que já discutimos em nosso texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a>.</p>
    </div>

    <h2>Por que isso importa</h2>
    <p>O lançamento reforça uma tendência maior no setor: assistentes de IA deixando de ser apenas uma janela de chat para passar a atuar diretamente no sistema operacional do usuário, com permissão para tomar ações reais em nome dele — um movimento que já discutimos ao configurar assistentes pessoais de IA em nosso <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">guia de como configurar seu primeiro assistente de IA pessoal</a>. Para quem já usa esse tipo de ferramenta no dia a dia, o cuidado redobrado na hora de conceder permissões tende a se tornar ainda mais importante à medida que agentes ganham acesso a mais partes sensíveis do computador.</p>
  `,
};
