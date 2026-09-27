import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "amazon-bloqueia-agente-ia-muse-meta-compras",
  title: "Amazon bloqueia agente de IA Muse, da Meta, de fazer compras no site sem autorização",
  author: "Bruno Danello",
  summary:
    "Usuários do assistente Muse começaram a receber uma mensagem de erro ao tentar comprar na Amazon informando que o acesso do agente de IA não foi autorizado — a Amazon diz que a Meta nunca pediu permissão, que o agente não se identifica ao navegar e que chega a armazenar credenciais de clientes.",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/09/21/metas-ai-agent-has-been-blocked-from-using-amazon-com/",
  date: "2026-09-21",
  content: `
    <p>A Amazon bloqueou o acesso do Muse, assistente de IA de propósito geral lançado pela Meta em 8 de setembro, à sua loja online. Desde o fim de semana, usuários que tentam usar o Muse para comprar produtos na Amazon passaram a receber uma mensagem de erro informando que "o acesso contínuo por um agente de IA não autorizado viola os Termos de Uso da Amazon, aos quais nossos clientes concordaram".</p>

    <h2>A justificativa da Amazon</h2>
    <p>Segundo a Amazon, a empresa não foi avisada previamente de que o Muse acessaria sua loja e não autorizou a atividade. Um porta-voz da Amazon afirmou que aplicativos de terceiros que se oferecem para fazer compras em nome de clientes em outras lojas devem operar de forma transparente e respeitar as decisões de cada provedor de serviço sobre participar ou não. A empresa também alega que o agente da Meta não se identifica como tal ao navegar pelo site, que consegue acessar informações da conta do cliente, como histórico de pedidos, e que aparenta armazenar credenciais dos usuários.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Versão da Meta</span>
      <p>A Meta afirma que o Muse "não tem visibilidade sobre senhas ou meios de pagamento das pessoas" e que credenciais compartilhadas pelo usuário "vão para um armazenamento seguro, para que o Muse possa usá-las sem vê-las".</p>
    </div>

    <h2>Por que isso importa</h2>
    <p>O episódio expõe uma tensão que só deve crescer à medida que agentes de IA passam a fazer compras em nome dos usuários, tema que já exploramos em <a href="/artigos/agentes-de-ia-comprando-por-voce-comercio">agentes de IA comprando por você: o novo comércio</a>: sem um protocolo aberto e acordado entre plataformas, cada grande loja pode decidir, por conta própria, quais agentes de terceiros tem permissão para operar em seu site — o que pode fragmentar a experiência de compra assistida por IA em vez de padronizá-la entre os grandes varejistas.</p>
  `,
};
