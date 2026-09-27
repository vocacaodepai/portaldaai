import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "base-labs-parceria-seguranca-modelos-pesos-abertos",
  title: "Base Labs, braço de pesquisa da Baseten, lança parceria de segurança para modelos de pesos abertos com Hugging Face e Goodfire",
  author: "Bruno Danello",
  summary:
    "A iniciativa quer criar um padrão de segurança para modelos de pesos abertos, hoje vulneráveis à técnica de 'abliteração' que remove salvaguardas — a Hugging Face já lista mais de 6 mil modelos abliterados. A Goodfire cuida da interpretabilidade, a Hugging Face da distribuição e a Baseten promete monitoramento em tempo real na própria infraestrutura de deploy.",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/09/17/base-labs-launches-an-open-weight-ai-safety-partnership-with-hugging-face-and-goodfire/",
  date: "2026-09-17",
  content: `
    <p>A Baseten lançou a Base Labs, seu novo braço de pesquisa dedicado a segurança de modelos de pesos abertos, em parceria com a Hugging Face e a startup de interpretabilidade Goodfire. A iniciativa nasce de um problema concreto: modelos abertos podem ter suas salvaguardas removidas por uma técnica chamada "abliteração", e a própria Hugging Face já hospeda mais de 6 mil versões abliteradas de modelos populares.</p>

    <h2>Como as três empresas dividem o trabalho</h2>
    <p>Cada parceiro contribui com uma peça diferente do problema. A Goodfire, especializada em abrir a "caixa-preta" dos modelos para explicar como eles tomam decisões, vai desenvolver os métodos de análise. A Hugging Face entra com a infraestrutura de hospedagem e distribuição necessária para escalar esses padrões para toda a comunidade de desenvolvedores que publica e baixa modelos na plataforma. Já a Baseten planeja integrar os resultados da pesquisa diretamente em sua infraestrutura de deploy, permitindo monitoramento de modelos em tempo real durante o uso.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Um padrão, não um remendo</span>
      <p>A Base Labs descreve o objetivo como um "padrão" para modelos abertos que seja transparente e esteja embutido em como os modelos são treinados e implantados — em vez de uma camada de segurança adicionada depois, como acontece hoje na maioria dos casos.</p>
    </div>

    <h2>Por que isso importa para quem usa modelos abertos</h2>
    <p>O tema conecta diretamente com o que já exploramos em <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">nosso guia sobre escolher ferramentas de IA com segurança</a>: modelos de pesos abertos oferecem flexibilidade e custo menor, mas colocam a responsabilidade pela segurança nas mãos de quem os implanta. Um padrão de indústria como o proposto pela Base Labs, se ganhar adesão, pode facilitar a vida de empresas menores que hoje não têm recursos para auditar sozinhas a segurança dos modelos abertos que usam.</p>
  `,
};
