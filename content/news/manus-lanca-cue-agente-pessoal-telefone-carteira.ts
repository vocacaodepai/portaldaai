import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "manus-lanca-cue-agente-pessoal-telefone-carteira",
  title: "Manus lança Cue, agente pessoal com telefone e carteira próprios",
  summary:
    "O app permite que o agente de IA ligue, mande mensagem e pague contas dentro de um limite definido pelo usuário, entrando na disputa com o Muse da Meta.",
  author: "Bruno Danello",
  sourceName: "Bloomberg",
  sourceUrl: "https://www.bloomberg.com/news/articles/2026-09-28/manus-expands-ai-tools-in-renewed-push-into-agent-market",
  date: "2026-09-28",
  content: `
    <p>A Manus, startup de Singapura que se separou da Meta depois que Pequim bloqueou uma tentativa de aquisição de cerca de US$ 2 bilhões, lançou nesta segunda-feira (28) o Manus 2.0 e um aplicativo à parte chamado Cue. Segundo a <a href="https://www.bloomberg.com/news/articles/2026-09-28/manus-expands-ai-tools-in-renewed-push-into-agent-market" rel="noopener noreferrer nofollow">reportagem da Bloomberg</a>, o Cue dá a cada agente pessoal de IA um número de telefone, e-mail e carteira digital próprios, permitindo que ele faça ligações, envie mensagens de texto e realize pagamentos dentro de um limite definido pelo usuário.</p>
    <p>O Manus 2.0 roda sobre uma nova arquitetura chamada Cascade, que a empresa afirma usar 23% menos tokens, executar tarefas 28% mais rápido e custar 32% menos que a versão anterior. O Cue está em acesso antecipado para web e desktop, com a versão para iOS ainda em análise na App Store.</p>

    <h2>Contexto</h2>
    <p>O lançamento coloca a Manus em disputa direta com o Muse, da Meta, que <a href="/noticias/meta-muse-ultrapassa-chatgpt-app-mais-baixado-ios">chegou a ultrapassar o ChatGPT como app mais baixado no iOS</a>, mas também já cometeu falhas de autonomia, como quando <a href="/noticias/meta-muse-vaza-endereco-vende-errado-marketplace">vazou o endereço de um usuário e vendeu um item abaixo do combinado no Facebook Marketplace</a>. Dar a um agente acesso a telefone, e-mail e dinheiro próprio é um passo além do que a maioria dos assistentes de IA faz hoje, e amplia tanto a conveniência quanto o risco.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você pensa em usar um agente de IA pra tocar tarefas do dia a dia (ligar pra marcar consulta, negociar assinatura, pagar conta recorrente), o Cue mostra pra onde esse mercado está indo: agentes com identidade e dinheiro próprios, não só chat. Antes de dar autonomia financeira a qualquer agente, defina um limite de gasto claro e acompanhe de perto no início, do jeito que já recomendamos no <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">guia de como configurar seu primeiro assistente de IA pessoal</a>.</p>
    <p>Para quem empreende com automação, produtos como esse ampliam o que dá pra oferecer a cliente: um agente que liga, negocia e paga sozinho, dentro de regras claras, é um serviço com valor percebido bem maior do que um chatbot comum, como já discutimos no <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">guia sobre a diferença entre agente, chatbot e automação</a>.</p>
  `,
  faq: [
    {
      question: "O agente do Cue pode gastar dinheiro sem limite?",
      answer: "Não. Segundo a reportagem, os pagamentos ficam dentro de um limite de orçamento definido pelo próprio usuário.",
    },
  ],
};
