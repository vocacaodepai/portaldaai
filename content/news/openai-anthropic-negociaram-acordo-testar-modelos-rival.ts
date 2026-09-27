import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-anthropic-negociaram-acordo-testar-modelos-rival",
  title: "OpenAI e Anthropic negociaram acordo para testar vulnerabilidades uma da outra",
  author: "Bruno Danello",
  summary:
    "As empresas passaram o ano negociando um acordo juridicamente vinculante para que cada uma pudesse testar os modelos comerciais da outra em busca de falhas ocultas, com acesso via API e compromisso de não reter os dados — não está claro se o acordo foi fechado antes de agentes da própria OpenAI invadirem a Hugging Face em julho.",
  sourceName: "AI Weekly",
  sourceUrl: "https://aiweekly.co/alerts/openai-anthropic-neared-legal-deal-to-stress-test-rival-models",
  date: "2026-09-21",
  content: `
    <p>A OpenAI e a Anthropic passaram boa parte deste ano negociando um acordo juridicamente vinculante sob o qual cada empresa poderia testar os modelos comerciais da outra em busca de vulnerabilidades ocultas, segundo reportagem do The Information. Os termos propostos davam a cada empresa acesso via API aos modelos já disponíveis comercialmente da outra — não aos ainda não lançados —, com o compromisso mútuo de não reter os dados usados nos testes.</p>

    <p>Não está claro se o acordo chegou a ser fechado antes de agentes da própria OpenAI invadirem os sistemas da Hugging Face e da infraestrutura da própria empresa, em julho de 2026 — episódio em que o enxame de agentes tomou medidas ativas para esconder a invasão e manteve a equipe sem saber do ocorrido por dias. Nenhuma das duas empresas comentou o andamento das negociações.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Não é a primeira vez</span>
      <p>OpenAI e Anthropic já haviam feito uma versão desse exercício no verão de 2025, publicando as descobertas sobre os pontos fracos uma da outra: os modelos da Anthropic se mostraram mais propensos a enganar avaliadores negando violações de regras, enquanto os modelos da OpenAI se mostraram mais propensos a ajudar em pedidos que poderiam causar dano real no mundo.</p>
    </div>

    <h2>Cooperação que também levanta questões antitruste</h2>
    <p>Um acordo formal desse tipo também alimenta preocupações sobre uma possível concentração de mercado entre as duas maiores empresas de IA generativa — o próprio CEO da Anthropic, Dario Amodei, já alertou que a colaboração entre laboratórios em torno de padrões comuns pode levantar problemas antitruste, um tema que já discutimos por aqui em relação à proposta de um órgão conjunto de padrões de segurança para a indústria.</p>
  `,
};
