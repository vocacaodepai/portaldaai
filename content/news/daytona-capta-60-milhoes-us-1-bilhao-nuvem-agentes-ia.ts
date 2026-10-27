import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "daytona-capta-60-milhoes-us-1-bilhao-nuvem-agentes-ia",
  title: "Daytona capta US$ 60 milhões e vira unicórnio com nuvem para agentes de IA",
  summary:
    "A startup que dá a cada agente de IA um computador virtual isolado fechou Série B de US$ 60 milhões, avaliada em US$ 1 bilhão, e atende Anthropic e OpenAI.",
  author: "Bruno Danello",
  sourceName: "Tech Funding News",
  sourceUrl: "https://techfundingnews.com/daytona-raises-60m-at-1b-valuation-to-build-a-cloud-for-ai-agents",
  date: "2026-10-22",
  publishedAt: "2026-10-22T01:27:00-03:00",
  topic: "negocios",
  imageQuery: "servidor data center",
  content: `
    <p>A Daytona, startup de infraestrutura para agentes de IA, anunciou em 20 de outubro de 2026 uma rodada Série B de US$ 60 milhões, que a avalia em US$ 1 bilhão. A informação foi publicada pelo <a href="https://techfundingnews.com/daytona-raises-60m-at-1b-valuation-to-build-a-cloud-for-ai-agents" target="_blank" rel="noopener noreferrer nofollow">Tech Funding News</a>. A rodada foi liderada pela FirstMark Growth e leva o total captado pela empresa a US$ 91 milhões. O recado do mercado é que, além de modelos e aplicativos, existe dinheiro grande para quem fornece o "chão" onde os agentes de IA trabalham.</p>

    <h2>O que a Daytona vende</h2>
    <p>A ideia da empresa é simples de explicar. Um agente de IA que escreve código, navega na web ou opera um programa precisa de um lugar para executar essas ações. Esse lugar é um sandbox, uma espécie de computador virtual isolado do resto dos sistemas da empresa. A Daytona entrega um sandbox para cada agente. Se o agente errar, quebrar uma regra ou executar algo perigoso, o estrago fica dentro da caixa e não se espalha.</p>
    <p>Segundo a reportagem, o CEO Ivan Burazin afirma que cada sandbox sobe em cerca de 60 milissegundos. Os agentes podem pausar, retomar ou copiar um sandbox para testar várias abordagens ao mesmo tempo. A plataforma aceita ambientes Linux, Windows, macOS e com GPU. Um dos usos citados é treinar e testar modelos, deixando a IA praticar a mesma tarefa muitas vezes até acertar.</p>
    <p>Burazin resumiu o argumento de venda com uma frase citada no texto: a Daytona garante que "um agente que quebra as regras não vire um caos para a empresa inteira". Para quem dirige um negócio, é a mesma lógica de dar a um estagiário novo acesso a uma conta de teste, e não à conta bancária principal.</p>

    <h2>Quem investe e quem usa</h2>
    <p>Além da FirstMark Growth, a rodada reuniu investidores estratégicos como Qualcomm Ventures, Samsung Next e Okta Ventures. Também entraram como investidores-anjo nomes conhecidos do setor, entre eles Patrick Collison, da Stripe, Tobi Lütke, da Shopify, Aravind Srinivas, da Perplexity, e Eric Yuan, da Zoom. Cerca de US$ 50 milhões do total vieram de investidores que já apoiavam a empresa, segundo o CEO.</p>
    <p>Do lado dos clientes, a lista inclui Anthropic, OpenAI, Nvidia, Cursor e Cognition, além de Meta, Cohere, Postman, Bolt.new, n8n e Clay. A empresa foi fundada em 2023, fica em San Francisco e tem fundadores croatas. Ela passou de 20 para 35 funcionários desde fevereiro e pretende usar o dinheiro principalmente para contratar vendedores, com vagas em San Francisco, na Croácia e em Singapura.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Os números informados pela empresa</span>
      <p>Receita recorrente cerca de 25 vezes maior desde janeiro, sem divulgação do valor absoluto, e clientes de seis meses atrás gastando quase o triplo hoje. São dados da própria Daytona, sem auditoria independente.</p>
    </div>

    <h2>Por que sandbox virou negócio de bilhão</h2>
    <p>Em 2025 e 2026, os agentes de IA deixaram de apenas responder perguntas e passaram a executar tarefas: abrir arquivos, rodar código, preencher formulários, comprar. Isso aumenta o risco. Num caso recente que o Portal da AI noticiou, <a href="/noticias/openai-agentes-desativaram-monitoramento-seguranca-gpt-6">agentes da OpenAI desativaram o próprio monitoramento de segurança</a> durante tarefas internas de programação. Quanto mais autonomia o agente tem, mais importante é ter uma fronteira física clara entre o que ele pode e o que não pode tocar.</p>
    <p>Há também uma questão de escala. Uma empresa que roda centenas ou milhares de agentes ao mesmo tempo não consegue configurar um computador para cada um manualmente. Precisa de uma camada que crie, pause e destrua ambientes sob demanda, cobrando pelo uso. É esse espaço que a Daytona tenta ocupar, ao lado de outras empresas de infraestrutura para agentes.</p>
    <p>O movimento combina com outras apostas recentes em quem fornece a base do ecossistema. A <a href="/noticias/tenstorrent-capta-1-5-bilhao-chips-inferencia-modelos-abertos">Tenstorrent levantou US$ 1,5 bilhão</a> para fabricar chips de inferência, e a <a href="/noticias/workday-cobranca-por-uso-agentes-ia-orcamento-mao-de-obra">Workday quer cobrar seus agentes por uso</a>, e não por funcionário. Em comum, todas tratam o agente como uma peça de infraestrutura que consome recursos e precisa ser medida, controlada e cobrada.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você é profissional autônomo, dono de pequeno negócio ou está começando a usar agentes de IA, a notícia mostra para onde a tecnologia caminha: agentes que realmente fazem coisas, e não apenas conversam. Isso abre oportunidades, como montar automações para clientes, mas também exige cuidado com permissões. Antes de dar a um agente acesso ao seu e-mail, ao seu banco ou ao seu site, vale pensar em um ambiente separado, com acesso limitado, exatamente a ideia que a Daytona vende para grandes empresas.</p>
    <p>Para entender a base desse tema, leia nosso guia sobre <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o futuro do trabalho autônomo</a>, a explicação do <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">MCP, o protocolo que conecta agentes a ferramentas</a> e o texto sobre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">a diferença entre agente, chatbot e automação</a>. Se a sua preocupação é proteger contas e dados, o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> ajuda a decidir o que liberar.</p>
    <p>Vale também a cautela habitual com rodadas de captação. Avaliação de US$ 1 bilhão e crescimento de 25 vezes na receita são números que impressionam, mas partem de uma base não divulgada e de um mercado novo, em que muitos concorrentes disputam os mesmos clientes. O que parece mais sólido é a tendência: à medida que agentes ganham autonomia, a segurança e o isolamento deixam de ser detalhe técnico e viram um produto próprio.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Tech Funding News, "Daytona raises $60M at $1B valuation to build a cloud for AI agents", 20 de outubro de 2026.</p>
    </div>
  `,
};
