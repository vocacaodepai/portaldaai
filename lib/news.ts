export type NewsItem = {
  slug: string;
  title: string;
  summary: string;
  sourceName: string;
  sourceUrl: string;
  date: string; // ISO
};

// Notícias curtas sobre o mercado de IA, com resumo próprio e link para a
// fonte original. Adicionadas diariamente pela rotina automática do blog.
export const news: NewsItem[] = [
  {
    slug: "openai-lanca-agents-api-beta-publico",
    title: "OpenAI lança a Agents API em beta público",
    summary:
      "A OpenAI abriu para todos os desenvolvedores o mesmo motor que roda o Codex: sessões de agente de longa duração, uso de ferramentas e subagentes, e execução em sandbox hospedado pela própria OpenAI ou em infraestrutura própria do desenvolvedor. Não há taxa separada — o uso é cobrado pelos modelos e ferramentas consumidos.",
    sourceName: "OpenAI",
    sourceUrl: "https://openai.com/index/introducing-the-agents-api/",
    date: "2026-09-10",
  },
  {
    slug: "anthropic-relatorio-ameacas-setembro-2026",
    title: "Anthropic publica relatório sobre uso malicioso de IA",
    summary:
      "A Anthropic detalhou casos de uso indevido do Claude entre dezembro de 2025 e agosto de 2026, incluindo uma campanha de espionagem estatal russa contra alvos ucranianos e europeus, tentativas de empresas chinesas de replicar o modelo e o uso de IA para reduzir a barreira técnica de ataques cibernéticos antes restritos a grupos bem financiados.",
    sourceName: "Anthropic",
    sourceUrl: "https://www.anthropic.com/threat-intelligence-report-september-2026",
    date: "2026-09-11",
  },
  {
    slug: "microsoft-triplica-capacidade-data-centers-ia",
    title: "Microsoft planeja triplicar capacidade de data centers até 2032",
    summary:
      "Diante da falta de capacidade que já forçou a empresa a recusar clientes de nuvem e IA, a Microsoft pretende sair de 12 gigawatts para mais de 38 gigawatts de capacidade global até 2032 — cerca de um terço dedicado especificamente a cargas de inteligência artificial.",
    sourceName: "Data Center Dynamics",
    sourceUrl:
      "https://www.datacenterdynamics.com/en/news/microsoft-targets-38gw-of-data-center-capacity-in-2032-report/",
    date: "2026-09-11",
  },
  {
    slug: "anthropic-ipo-confidencial-965-bilhoes",
    title: "Anthropic apresenta pedido confidencial de IPO avaliado em US$ 965 bilhões",
    summary:
      "A Anthropic protocolou de forma confidencial os documentos para abrir capital na bolsa americana, após uma rodada de investimento de US$ 65 bilhões que avaliou a empresa em US$ 965 bilhões — superando, pela primeira vez, a avaliação de mercado da OpenAI.",
    sourceName: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/06/01/anthropic-ipo-s1-prospectus.html",
    date: "2026-06-01",
  },
  {
    slug: "microsoft-google-modelos-codificacao-ia",
    title: "Microsoft e Google se unem em modelos de codificação por IA",
    summary:
      "As duas gigantes de nuvem estão combinando forças em modelos de IA voltados a programação, numa resposta direta ao avanço de Anthropic e OpenAI nesse mercado — que hoje concentra boa parte da receita e da disputa por desenvolvedores no setor de inteligência artificial.",
    sourceName: "CNBC",
    sourceUrl:
      "https://www.cnbc.com/2026/06/01/microsoft-and-google-take-on-anthropic-and-openai-in-ai-coding-models.html",
    date: "2026-06-01",
  },
];

export function sortedNews() {
  return [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
