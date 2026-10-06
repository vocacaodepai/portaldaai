import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-openai-retencao-dados-ia-soberana",
  title: "Disputa por retenção de dados leva empresas a trocar IA fechada por aberta",
  summary:
    "Receio de que dados corporativos virem combustível para os modelos levou empresas como Booz Allen e Paycom a restringir ou abandonar IA de fronteira por modelos abertos e soberanos.",
  author: "Bruno Danello",
  sourceName: "Fortune",
  sourceUrl:
    "https://fortune.com/2026/10/05/openai-and-anthropic-battle-over-zero-data-retention-zdr-data-privacy-companies-look-to-open-models-and-sovereign-ai/",
  date: "2026-10-05",
  publishedAt: "2026-10-06T06:30:00-03:00",
  imageQuery: "Satya Nadella portrait",
  topic: "negocios",
  content: `
    <p>Uma disputa pública sobre retenção de dados entre OpenAI e Anthropic está empurrando um número crescente de empresas a reconsiderar sua dependência de modelos de IA de fronteira, segundo reportagem publicada pela <a href="https://fortune.com/2026/10/05/openai-and-anthropic-battle-over-zero-data-retention-zdr-data-privacy-companies-look-to-open-models-and-sovereign-ai/" rel="noopener noreferrer nofollow" target="_blank">Fortune</a> nesta segunda-feira (5). No centro do caso está uma mudança de política da Anthropic em junho, que passou a reter por 30 dias, em servidores próprios, o tráfego de clientes dos modelos Fable e Mythos, mesmo para quem tinha contrato de retenção zero de dados.</p>

    <p>A reação de clientes corporativos foi, segundo uma fonte citada pela Fortune, "quase alérgica": empresas ficaram "bastante irritadas" com a mudança, que na prática significava que conversas e documentos enviados à Anthropic passavam a ficar armazenados por um mês inteiro em infraestrutura da própria empresa, independentemente do que o contrato original previa. A consultoria Booz Allen restringiu o uso do modelo Fable internamente logo depois do anúncio, e a Anthropic recuou: a partir de 1º de setembro, passou a oferecer retenção zero de dados (ZDR, na sigla em inglês) com armazenamento controlado pelo próprio cliente, em nuvem dele, mantendo só uma janela de 30 dias para investigações de segurança.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">O que é retenção zero de dados (ZDR)</span>
      <p>É um modelo de contrato em que o provedor de IA não guarda cópia do que o cliente envia (prompts, documentos, conversas) depois de processar a resposta. Sem ZDR, esse conteúdo pode ficar armazenado por dias ou semanas em servidores do próprio provedor, inclusive para fins de auditoria de segurança.</p>
    </div>

    <h2>A OpenAI aproveitou a brecha, mas a desconfiança já tinha se instalado</h2>
    <p>A OpenAI não demorou a reagir ao desconforto gerado pela concorrente. Em 19 de agosto, a empresa reiterou publicamente que já oferecia ZDR completo para clientes corporativos e anunciou um recurso novo, batizado de Private Safety Processing (PSP), prometendo mais controle sobre como dados sensíveis são tratados durante verificações de segurança. A manobra ajudou a OpenAI a capturar clientes insatisfeitos com a Anthropic, mas, segundo a Fortune, o episódio deixou uma marca mais profunda do que uma simples disputa comercial entre as duas empresas: acendeu um alerta geral sobre o quanto empresas dependem de decisões unilaterais de provedores de IA de fronteira sobre o próprio dado corporativo.</p>

    <p>Esse tipo de tensão já havia aparecido antes em outros contextos. A própria Anthropic enfrentou questionamentos de segurança em julho, quando <a href="/noticias/anthropic-falha-claude-code-api-fora-do-ar">uma falha de API tirou o Claude Code do ar</a> por horas, episódio que reforçou entre desenvolvedores a importância de ter plano B quando se depende de um único fornecedor de IA. A corrida por preço mais baixo entre as duas empresas, que o Portal da AI cobriu quando a <a href="/noticias/anthropic-openai-guerra-precos-opus-5-5-gpt-6-sol-luna">Anthropic lançou o Opus 5.5 e a OpenAI respondeu com o GPT-6 Sol e Luna</a>, mostra como a disputa entre as duas gigantes vem se espalhando por várias frentes ao mesmo tempo: preço, segurança e, agora, controle sobre dados corporativos.</p>

    <figure><img src="https://upload.wikimedia.org/wikipedia/commons/8/83/MS-Exec-Nadella-Satya-2017-08-31-22.jpg" alt="Satya Nadella, CEO da Microsoft" /><figcaption>Foto: Brian Smale / Wikimedia Commons (CC BY-SA 4.0)</figcaption></figure>

    <h2>Nadella e Karp avisam: o preço pode ser maior do que a mensalidade</h2>
    <p>O CEO da Microsoft, Satya Nadella, resumiu o risco em julho com uma frase que circulou amplamente entre executivos de tecnologia: "você essencialmente paga pela inteligência duas vezes, uma vez com dinheiro, e outra vez com algo ainda mais valioso", numa referência direta ao temor de que dados corporativos sensíveis sejam usados, de alguma forma, para treinar ou aperfeiçoar os próprios modelos que a empresa está contratando. Alex Karp, CEO da Palantir, fez advertência parecida sobre os riscos de depender de IA de fronteira para dados estratégicos.</p>

    <p>Na prática, esse receio já está mudando decisões de compra. A Paycom, empresa de folha de pagamento e RH, passou a rodar modelos de código aberto em GPUs próprias, mantendo todo o processamento dentro da própria infraestrutura, sem depender de nuvem de terceiros para tarefas sensíveis. É o mesmo tipo de lógica que motivou o Google a anunciar, em setembro, que passaria a <a href="/noticias/google-cloud-gemini-dados-brasil-outubro">processar dados do Gemini dentro do território brasileiro</a> a partir de outubro, movimento voltado justamente a bancos e órgãos públicos que exigem soberania de dados como pré-condição para usar IA em escala.</p>

    <h2>Por que isso importa para quem usa e vende IA no Brasil</h2>
    <p>Para empresas brasileiras que avaliam contratar IA generativa para tarefas que envolvem dados de clientes, contratos ou informações financeiras, o episódio é um lembrete prático de que a letra fina do contrato de retenção de dados pode mudar sem aviso prévio, mesmo depois de assinado. Antes de migrar processos sensíveis para qualquer provedor de IA, vale a pena perguntar explicitamente onde o dado fica armazenado, por quanto tempo, e se existe cláusula que permita ao fornecedor alterar essa política unilateralmente, como ocorreu com a Anthropic em junho.</p>

    <p>O caso também ajuda a explicar por que modelos abertos, que podem ser baixados e rodados em infraestrutura própria, vêm ganhando espaço mesmo entre empresas que não têm motivo ideológico para preferir código aberto: a opção elimina de vez a dúvida sobre o que acontece com o dado depois que ele sai da tela do usuário. Quem já pesquisa essa alternativa encontra um resumo prático no nosso guia sobre <a href="/artigos/ia-codigo-aberto-o-que-muda-para-quem-usa">o que muda para quem usa IA de código aberto</a>, e lançamentos recentes como o <a href="/noticias/reflection-ai-lanca-beam-modelo-aberto">Beam da Reflection AI</a> mostram que a oferta de modelos abertos competitivos cresce quase todo mês.</p>

    <h2>A ascensão da "IA soberana" como estratégia corporativa</h2>
    <p>A reportagem da Fortune batiza esse movimento mais amplo de "IA soberana": a ideia de que empresas e governos devem controlar toda a cadeia que sustenta sua inteligência artificial, dos chips à infraestrutura até os modelos de código aberto usados, em vez de terceirizar essa cadeia inteira para um único fornecedor fechado. Um sinal do tamanho dessa migração é o crescimento do Amazon Bedrock, serviço que roda modelos de terceiros isolando o dado do cliente do próprio provedor do modelo: a adoção cresceu 170% no primeiro trimestre de 2026, e quase 80% das empresas da lista Fortune 100 já usam o serviço de alguma forma.</p>

    <div class="callout-box callout-ok">
      <span class="callout-label">Para quem decide qual IA usar na empresa</span>
      <p>A escolha entre depender de um modelo fechado de ponta ou migrar para uma arquitetura soberana (modelo aberto, infraestrutura própria ou um intermediário como o Bedrock) é, no fim, uma troca entre acesso à capacidade mais avançada do mercado e controle total sobre o próprio dado. Não existe resposta certa única: depende de quão sensível é o dado que a empresa pretende processar.</p>
    </div>

    <p>Para pequenas e médias empresas brasileiras, que normalmente não têm equipe dedicada a montar infraestrutura própria de IA, o efeito prático tende a ser indireto: a pressão por soberania de dados empurra provedores de nuvem e grandes empresas de tecnologia a oferecer opções intermediárias, cada vez mais acessíveis, que combinam parte da capacidade de modelos de fronteira com garantias mais claras sobre onde o dado fica. Quem já usa IA para <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">reduzir custos operacionais no próprio negócio</a> deve ficar atento a esse tipo de anúncio nos próximos meses, já que fornecedores menores tendem a seguir o mesmo caminho aberto por Google, Amazon e, agora, por OpenAI e Anthropic.</p>
  `,
  faq: [
    {
      question: "O que mudou na política de retenção de dados da Anthropic em 2026?",
      answer:
        "Em junho de 2026, a Anthropic passou a reter por 30 dias, em servidores próprios, o tráfego de clientes dos modelos Fable e Mythos, mesmo para contratos de retenção zero de dados. Depois da reação negativa de clientes corporativos, a empresa recuou e, a partir de 1º de setembro, passou a oferecer retenção zero com armazenamento controlado pelo próprio cliente, mantendo só uma janela de 30 dias para investigações de segurança.",
    },
    {
      question: "O que é IA soberana?",
      answer:
        "É a estratégia de uma empresa ou governo controlar toda a cadeia que sustenta sua inteligência artificial — chips, infraestrutura e modelos, muitas vezes de código aberto — em vez de depender inteiramente de um provedor externo fechado, como forma de garantir mais controle sobre onde e como os próprios dados são usados.",
    },
    {
      question: "Vale a pena migrar de um modelo fechado para um modelo aberto por causa disso?",
      answer:
        "Depende do tipo de dado envolvido. Para tarefas com informações sensíveis de clientes, contratos ou dados financeiros, vale conferir com cuidado a política de retenção do fornecedor antes de decidir. Para a maioria dos usos do dia a dia, a troca de fornecedor costuma pesar mais em custo e complexidade técnica do que em risco real de exposição de dados.",
    },
  ],
};
