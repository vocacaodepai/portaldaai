import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-lanca-gpt-6-sol-luna-corta-precos-pela-metade",
  title: "OpenAI lança GPT-6 Sol e GPT-6 Luna e corta preços pela metade, minutos após novo Claude Opus 5.5",
  author: "Bruno Danello",
  summary:
    "A OpenAI reduziu os preços de API em cerca de 50% com os novos modelos GPT-6 Sol e GPT-6 Luna, lançados quase ao mesmo tempo que o Claude Opus 5.5 da Anthropic — um sinal claro de que a guerra de preços entre os grandes laboratórios de IA está longe de esfriar.",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/09/22/openai-launches-gpt-6-sol-and-luna/",
  date: "2026-09-22",
  content: `
    <p>A OpenAI lançou em 22 de setembro dois novos modelos, GPT-6 Sol e GPT-6 Luna, com preços de API cerca de 50% mais baratos que os das versões anteriores. O GPT-6 Sol passa a custar US$ 2 por milhão de tokens de entrada e US$ 10 de saída, ante US$ 4 e US$ 20 do GPT-5.6 Sol; já o GPT-6 Luna cai para US$ 0,10 e US$ 0,50, contra US$ 0,20 e US$ 1,20 do modelo anterior.</p>

    <p>O momento do anúncio chamou atenção: os novos modelos foram lançados poucos minutos depois de a Anthropic anunciar o Claude Opus 5.5, também com corte de preço. Segundo a OpenAI, o Sol usou técnicas de treinamento parecidas com as do GPT-6 Astra, com ganhos relatados em raciocínio, confiabilidade factual, programação, uso de computador e alinhamento.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Dois modelos, dois usos diferentes</span>
      <p>O Sol é voltado para tarefas complexas como programação e agentes; o Luna, mais barato, mira trabalho de alto volume e objetivo claro — resumir documentos, extrair informação ou responder perguntas rápidas.</p>
    </div>

    <h2>Uma guerra de preços que já dura meses</h2>
    <p>Segundo analistas do mercado, as duas empresas disputam em duas frentes: lançando modelos mais baratos e cortando o preço dos modelos mais caros já existentes. Com o corte, o GPT-6 Sol fica cerca de 50% mais barato que o Claude Opus 5.5 em preço de entrada e saída, e o Luna passa a custar menos até que a versão econômica do DeepSeek V4.1 Flash — pressionando a vantagem de custo que sustentava a escolha por modelos de peso aberto.</p>

    <h2>Por que isso importa para quem usa IA no trabalho</h2>
    <p>Para quem monta ferramentas ou automações em cima de modelos de IA, como já detalhamos no <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de termos essenciais de IA</a>, esse tipo de corte de preço muda diretamente a conta de qual modelo vale mais a pena para cada tarefa — e reforça que apostar em um único fornecedor fixo, sem acompanhar o mercado, pode custar caro a médio prazo, como já discutimos em nosso texto sobre <a href="/artigos/especialista-em-nicho-de-ia-ou-generalista-o-que-vale-mais">ser especialista de nicho ou generalista em IA</a>.</p>
  `,
};
