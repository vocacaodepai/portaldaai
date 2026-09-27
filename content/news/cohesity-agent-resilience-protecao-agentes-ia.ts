import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "cohesity-agent-resilience-protecao-agentes-ia",
  title: "Cohesity lança ferramenta para proteger e recuperar agentes de IA corporativos após falhas ou ataques",
  author: "Bruno Danello",
  summary:
    "O Cohesity Agent Resilience usa a mesma arquitetura de snapshots e backups imutáveis já aplicada a dados sensíveis para proteger a memória e a configuração de agentes de IA, permitindo restaurá-los a um estado conhecido após corrupção de memória, configuração incorreta ou atividade maliciosa — pesquisa da própria empresa mostra que 56% das organizações não se sentem preparadas para lidar com ações não intencionais de agentes de IA.",
  sourceName: "Cohesity",
  sourceUrl: "https://www.cohesity.com/newsroom/press/cohesity-introduces-agent-resilience-to-protect-ai-agent-infrastructure/",
  date: "2026-09-16",
  content: `
    <p>A Cohesity lançou o Agent Resilience, uma nova capacidade do Cohesity Data Cloud voltada a descobrir, proteger e recuperar a infraestrutura por trás de agentes de IA corporativos. A ferramenta chega num momento em que empresas ampliam rapidamente o uso de agentes autônomos, mas ainda têm pouca visibilidade sobre como recuperar esses sistemas quando algo dá errado.</p>

    <h2>Como funciona a proteção</h2>
    <p>No lançamento, o Agent Resilience protege a memória e a configuração dos agentes usando a mesma arquitetura de snapshots, backups imutáveis e recuperação em ambiente isolado que os clientes da Cohesity já usam para proteger dados sensíveis on-premises, na nuvem e em aplicações SaaS. A capacidade de recuperação em ponto específico no tempo permite restaurar um agente a um estado conhecido como seguro depois de corrupção de memória, configuração incorreta ou atividade maliciosa.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">O problema que motivou o lançamento</span>
      <p>Segundo pesquisa da própria Cohesity, 56% das organizações não se sentem bem preparadas para se recuperar de ações não intencionais tomadas por agentes de IA — um dado que reforça como a infraestrutura de segurança para agentes autônomos ainda está atrás da velocidade de adoção dessas ferramentas nas empresas.</p>
    </div>

    <h2>Por que isso importa</h2>
    <p>No lançamento, o Agent Resilience já é compatível com o Amazon Bedrock AgentCore e o Amazon Bedrock Agents, com suporte a plataformas de agentes da Microsoft e do Google planejado para os próximos meses. O produto reforça uma tendência mais ampla no mercado de segurança: à medida que agentes de IA ganham autonomia para executar ações reais dentro de sistemas corporativos, cresce também a demanda por ferramentas específicas de proteção e recuperação desses agentes — um mercado até pouco tempo inexistente, hoje tratado como extensão natural da segurança de dados tradicional.</p>
  `,
};
