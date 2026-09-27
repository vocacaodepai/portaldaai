import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "ando-capta-20-milhoes-chat-equipe-agentes-de-ia",
  title: "Ando sai da toca com US$ 20 milhões para criar um chat de equipe onde agentes de IA participam como membros",
  author: "Bruno Danello",
  summary:
    "A startup construiu uma plataforma de mensagens do zero para humanos e agentes de IA trabalharem juntos, com agentes participando de canais, threads e conversas ao vivo com identidade, permissões e contexto compartilhado — já atendendo clientes em 15 países.",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/09/24/ando-eyes-slack-as-it-builds-team-messaging-platform-for-humans-and-agents-to-work-together/",
  date: "2026-09-24",
  content: `
    <p>A Ando saiu da toca depois de quase um ano de desenvolvimento com uma proposta ambiciosa: construir uma plataforma de mensagens de equipe pensada desde o início para humanos e agentes de IA trabalharem lado a lado. A empresa anunciou US$ 20 milhões em financiamento, liderado por Accel, Index Ventures e Emergence Capital.</p>

    <h2>Agentes como membros de verdade da equipe</h2>
    <p>Diferente de integrações que apenas conectam um bot a um canal existente, a Ando dá aos agentes identidade própria, permissões e contexto compartilhado, permitindo que participem de canais, threads e conversas ao vivo como qualquer outro membro da equipe. A plataforma é agnóstica em relação a qual agente é usado — times podem trazer o Codex, o Claude, o Grokbot ou outros agentes que já utilizam.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Como funciona na prática</span>
      <p>A Ando começa com recursos familiares de mensagens de equipe — canais, mensagens diretas e conversas em grupo — mas os agentes conseguem acompanhar o que acontece nas conversas de que participam, manter memória e contexto persistentes, contribuir de forma proativa quando fizer sentido, e participar em tempo real das "Jams", as conversas ao vivo da plataforma.</p>
    </div>

    <h2>Por que isso importa</h2>
    <p>A empresa já diz atender clientes em setores como software, imobiliário e finanças em 15 países, embora muitos desses times ainda sejam pequenos. O lançamento reforça uma tendência que já discutimos em nosso texto sobre <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">o futuro do trabalho autônomo com agentes de IA</a>: à medida que agentes ganham autonomia para executar tarefas complexas, a própria infraestrutura de comunicação das empresas — historicamente pensada só para humanos, como o Slack — também precisa ser repensada para incluir esses novos "colegas de trabalho" digitais.</p>
  `,
};
