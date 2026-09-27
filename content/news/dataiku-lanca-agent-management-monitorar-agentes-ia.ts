import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "dataiku-lanca-agent-management-monitorar-agentes-ia",
  title: "Dataiku lança produto para inventariar e monitorar agentes de IA espalhados por diferentes plataformas",
  author: "Bruno Danello",
  summary:
    "O Agent Management se conecta a agentes criados em Microsoft Copilot Studio, Azure Foundry, Salesforce Agentforce, AWS Bedrock, Google Vertex, Databricks, Snowflake Cortex e outras plataformas, classificando cada um por nível de risco — resposta a uma lacuna em que menos de uma em cada cinco empresas mantém um inventário completo de seus sistemas de IA.",
  sourceName: "SiliconANGLE",
  sourceUrl: "https://siliconangle.com/2026/09/24/dataiku-debuts-cross-platform-agent-management-expands-cobuild-building-agent/",
  date: "2026-09-24",
  content: `
    <p>A Dataiku anunciou o Agent Management, produto independente que promete inventariar todos os agentes de IA em uso numa empresa, não importa em qual plataforma foram criados, além de acompanhar indicadores de negócio e desempenho técnico e classificar cada agente por nível de risco. A disponibilidade geral está prevista para outubro.</p>

    <h2>Um problema de visibilidade, não só de governança</h2>
    <p>Segundo a Dataiku, grandes empresas já mantêm inventários detalhados de todo software que rodam — quem é o dono, quanto custa, quando renova — mas quase nenhuma consegue dizer o mesmo sobre os agentes de IA que já estão em produção. Uma pesquisa da IBM citada pela empresa mostra que menos de uma em cada cinco organizações mantém um inventário completo e atualizado de seus sistemas de IA, apesar do ritmo acelerado de criação e adoção desses agentes.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Compatibilidade ampla</span>
      <p>O produto se conecta a agentes construídos em plataformas concorrentes como Microsoft Copilot Studio, Azure Foundry, Salesforce Agentforce, AWS Bedrock, Google Vertex, Databricks e Snowflake Cortex, além dos próprios agentes criados na Dataiku — uma aposta de que empresas preferem uma camada de governança única e independente de plataforma a soluções nativas fragmentadas.</p>
    </div>

    <h2>Por que isso importa para quem usa agentes de IA no trabalho</h2>
    <p>O lançamento reflete uma preocupação crescente que já discutimos em nosso texto sobre <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">o futuro do trabalho autônomo com agentes de IA</a>: à medida que empresas adotam agentes de diferentes fornecedores para tarefas cada vez mais críticas, a falta de um inventário central e de métricas de risco consistentes vira um ponto cego real — não muito diferente do problema de segurança de dados que motivou soluções como a Baselayer para agentes que fazem transações financeiras.</p>
  `,
};
