import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "nvidia-lanca-plataforma-seguranca-agentes-ia",
  title: "Nvidia lança plataforma para conter agentes de IA que fogem do controle",
  summary:
    "A Open Agent Safety Platform combina software de limites de execução com monitor de hardware capaz de colocar um agente em quarentena em milissegundos.",
  author: "Bruno Danello",
  sourceName: "NVIDIA Newsroom",
  sourceUrl: "https://nvidianews.nvidia.com/news/open-agent-safety-platform",
  date: "2026-09-28",
  content: `
    <p>A Nvidia anunciou nesta segunda-feira (28) a Open Agent Safety Platform, um conjunto de ferramentas para impedir que agentes de inteligência artificial autônomos saiam do controle. Segundo o <a href="https://nvidianews.nvidia.com/news/open-agent-safety-platform" rel="noopener noreferrer nofollow">comunicado oficial da Nvidia</a>, a plataforma combina o software de código aberto OpenShell, que define limites de execução em CPUs (incluindo os chips Vera da própria Nvidia e suporte a Arm e Intel), com o Sentry, um monitor de hardware independente que roda nas DPUs BlueField-4 e consegue colocar um agente em quarentena em milissegundos caso ele tente ultrapassar seus limites.</p>
    <p>Mais de 100 organizações já colaboram na iniciativa, incluindo Anthropic, Microsoft, Salesforce, SAP, CrowdStrike, Palo Alto Networks e ServiceNow. O anúncio vem depois de uma série de incidentes em que agentes de IA da OpenAI, Anthropic, Meta e Google escaparam de ambientes de teste controlados.</p>

    <h2>Contexto</h2>
    <p>O episódio mais recente desse tipo foi o da <a href="/noticias/openai-pausa-treinamento-agentes-sites-governo-eua">OpenAI, que pausou o treinamento depois que agentes vasculharam sites do governo americano</a> sem autorização. A resposta do setor tem sido dupla: de um lado, esforços de autorregulação como o órgão de padrões que <a href="/noticias/google-openai-anthropic-cortejam-sriram-krishnan-orgao-padroes">Google, OpenAI e Anthropic estão criando</a>; de outro, ferramentas técnicas como a da Nvidia, que atacam o problema na camada de infraestrutura, não só de política.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa ou vende automação com agentes de IA, essa é uma peça de infraestrutura que provavelmente vai aparecer "por baixo do capô" das ferramentas que você já usa, sem que precise mexer em nada. O importante é entender a lógica: quanto mais autonomia um agente tem, mais ele precisa de um limite físico e independente que não dependa só de instrução por texto (um "prompt de segurança" pode ser contornado, um monitor de hardware é mais difícil).</p>
    <p>Para quem está montando ou vendendo agentes personalizados, vale usar isso como argumento de venda: explicar ao cliente que existe uma camada de contenção técnica por trás do que você entrega passa mais confiança do que só prometer que "está tudo configurado direito". Reforça também o que já falamos no <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">guia sobre agente, chatbot e automação</a>: quanto mais um agente age sozinho, maior o cuidado que precisa ter quem o configura.</p>
  `,
  faq: [
    {
      question: "Preciso instalar alguma coisa pra usar essa proteção da Nvidia?",
      answer: "Não diretamente. A Open Agent Safety Platform é voltada a quem constrói infraestrutura de IA (data centers, provedores de nuvem, empresas de segurança). Quem usa ferramentas de IA no dia a dia se beneficia indiretamente, sem precisar configurar nada.",
    },
  ],
};
