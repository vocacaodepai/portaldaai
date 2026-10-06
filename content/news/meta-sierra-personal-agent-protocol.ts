import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "meta-sierra-personal-agent-protocol",
  title: "Meta e Walmart lançam padrão para agentes de IA fazerem compras",
  summary:
    "O Personal Agent Protocol, liderado pela Sierra com Meta e outras empresas, resolve como negócios autenticam agentes de IA que compram em nome de clientes.",
  author: "Bruno Danello",
  sourceName: "CNBC",
  sourceUrl:
    "https://www.cnbc.com/2026/10/06/meta-joins-companies-to-tame-chaos-of-doing-business-with-ai-bots.html",
  date: "2026-10-06",
  publishedAt: "2026-10-06T20:55:00-03:00",
  topic: "negocios",
  imageQuery: "online shopping checkout laptop",
  content: `
    <p>A Meta, a Walmart, a Stripe e a startup de IA empresarial Sierra publicaram nesta terça-feira (6 de outubro) um padrão aberto batizado de Personal Agent Protocol, criado para organizar como agentes de inteligência artificial interagem com sites e sistemas de empresas em nome de clientes. Segundo <a href="https://www.cnbc.com/2026/10/06/meta-joins-companies-to-tame-chaos-of-doing-business-with-ai-bots.html" rel="noopener noreferrer nofollow">reportagem da CNBC</a>, o esforço é liderado por Bret Taylor, cofundador da Sierra e presidente do conselho da OpenAI, e conta também com Genesys, Instinct, Rocket, Shopify e outras empresas no desenvolvimento.</p>
    <p>Taylor afirmou à CNBC que o padrão resolve um problema que já incomoda qualquer empresa com presença digital: hoje, um site não tem como saber com confiança se quem está acessando é uma pessoa de verdade ou um agente de IA agindo por ela. O Personal Agent Protocol tenta resolver isso autenticando o agente e definindo, de forma explícita, quanto acesso ele recebe a dados pessoais e de pagamento do cliente que ele representa.</p>

    <h2>Como funciona: sessões com OAuth e níveis de permissão</h2>
    <p>O protocolo usa sessões construídas sobre OAuth, o mesmo padrão já usado para login social em diversos aplicativos. Um agente pode começar como visitante, só para checar estoque de um produto ou a política de devolução de uma loja, sem precisar de nenhuma autenticação. A partir do momento em que o cliente faz login, ele decide se o agente recebe acesso só de leitura ou também de escrita, ou seja, se ele pode apenas consultar informação ou também executar ações como finalizar uma compra. Cada empresa continua no controle de como quer receber esses agentes: pelo próprio site, por APIs usando padrões já conhecidos como MCP e OpenAPI, ou por um agente próprio que conversa diretamente com o agente do cliente.</p>
    <p>A primeira versão da especificação, a v0.1, deve ser publicada ainda em outubro de 2026, e o protocolo é aberto para qualquer empresa implementar, sem custo de licenciamento. Isso o aproxima de outras iniciativas recentes de comércio agêntico que cobrimos aqui no Portal da AI, como o <a href="/noticias/worldline-protocolo-comercio-universal-pagamentos-agentes-ia">protocolo de pagamentos iniciados por agentes que a Worldline passou a aceitar na Europa</a>. A diferença central é o foco: enquanto protocolos como o da Worldline tratam do pagamento em si, o Personal Agent Protocol trata da camada anterior, a de autenticação e permissão, que precisa existir antes de qualquer pagamento acontecer.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você vende qualquer coisa online, seja um produto físico, um curso digital ou um serviço de assinatura, esse tipo de padrão é o que vai determinar, nos próximos anos, se agentes de IA conseguem comprar na sua loja sem fricção ou se cada visita de um agente vira uma dor de cabeça de segurança. Já exploramos esse cenário no artigo sobre <a href="/artigos/agentes-de-ia-comprando-por-voce-comercio">como agentes de IA comprando por você vão mudar o comércio</a>: a tendência é que uma fatia crescente de compras online passe a ser decidida e executada por um agente, não diretamente por uma pessoa navegando manualmente pelo site.</p>
    <p>Para pequenos negócios e lojas virtuais brasileiras, a lição prática é dupla. Primeiro, vale acompanhar se plataformas de e-commerce usadas no Brasil, como a própria Shopify, vão adotar esse padrão (ou outro concorrente) por padrão para todas as lojas, como a Shopify já fez com suas Agentic Storefronts. Segundo, entender que autenticação de agente vai se tornar um critério de segurança tão relevante quanto autenticação de usuário humano: uma loja que não sabe diferenciar um agente autorizado de um bot mal-intencionado corre o risco de liberar acesso indevido a dados de pagamento de clientes reais.</p>

    <h2>Um mercado de padrões concorrentes ainda em disputa</h2>
    <p>O Personal Agent Protocol entra em um terreno já disputado por outros padrões de comércio agêntico lançados nos últimos meses. A OpenAI e a Stripe desenvolveram o Agentic Commerce Protocol, hoje usado por mais de um milhão de lojistas na Shopify. O Google lançou, em janeiro deste ano, o Universal Commerce Protocol, desenvolvido com Shopify, Etsy, Wayfair, Target e Walmart. Já a Visa, em parceria com a Cloudflare, lançou o Trusted Agent Protocol, focado em deixar agentes aprovados passarem informação crítica de forma segura para o lojista. A presença da Walmart e da Shopify em mais de um desses padrões ao mesmo tempo mostra que grandes varejistas ainda estão testando qual abordagem vai prevalecer, em vez de apostar todas as fichas em um único protocolo.</p>
    <p>Essa fragmentação tende a se resolver de duas formas possíveis nos próximos meses: ou um dos padrões se torna dominante e os demais são descontinuados ou absorvidos, ou as grandes plataformas de e-commerce passam a suportar vários protocolos simultaneamente, como camadas de compatibilidade. Para quem desenvolve ou vende tecnologia para lojistas, vale acompanhar qual padrão a Shopify, maior plataforma de e-commerce do mundo, decide priorizar daqui para frente, porque essa escolha tende a influenciar fortemente qual protocolo os demais players do mercado também adotam.</p>

    <h2>O papel da Meta, que já aposta pesado em agentes de compra</h2>
    <p>A participação da Meta no Personal Agent Protocol não surge isolada. A empresa já havia integrado seu assistente pessoal Muse a redes como Walmart, Gap e Best Buy, permitindo que o agente faça compras diretamente nessas lojas em nome do usuário, e também firmou parcerias de infraestrutura de pagamento com Shopify e PayPal para sustentar esse tipo de transação. Ao entrar agora como um dos nomes centrais de um padrão aberto de autenticação, a Meta sinaliza que não quer depender de integrações individuais, negociadas loja a loja, para fazer o Muse funcionar: prefere um protocolo comum que qualquer site possa adotar de uma vez, reduzindo o trabalho de engenharia necessário para expandir a cobertura do agente para novos varejistas.</p>
    <p>Isso ajuda a explicar por que concorrentes diretos do Muse em compras assistidas por IA, como o próprio ChatGPT e o Gemini, também têm interesse em protocolos parecidos: quanto mais padronizada for a forma como um agente se apresenta e pede permissão a uma loja, menor o custo de fazer esse agente funcionar em milhares de sites diferentes, e maior a pressão sobre lojistas que ainda não têm nenhum tipo de suporte a agentes para se adaptar.</p>

    <h2>O que isso muda para quem vende online no Brasil</h2>
    <p>Mesmo que o Personal Agent Protocol comece pelos Estados Unidos e por parceiros como Walmart e Shopify, a tendência histórica de padrões abertos de comércio digital é se espalhar rápido para outros mercados, inclusive o brasileiro, puxados pelas mesmas plataformas de e-commerce usadas aqui. Lojistas que vendem por Shopify, por exemplo, já foram migrados automaticamente para as Agentic Storefronts da plataforma, o que significa que parte da infraestrutura para receber agentes de IA pode chegar ao catálogo de um pequeno negócio brasileiro antes mesmo de uma decisão consciente do lojista sobre o assunto. Vale, então, acompanhar as atualizações de política das plataformas de e-commerce usadas no Brasil para entender quando e como esse tipo de acesso agêntico passa a valer também por aqui.</p>
  `,
  faq: [
    {
      question: "O que é o Personal Agent Protocol?",
      answer:
        "Um padrão aberto, liderado pela Sierra com Meta, Walmart, Stripe e outras empresas, que define como agentes de IA se autenticam e recebem permissão para acessar dados pessoais e de pagamento ao interagir com negócios em nome de um cliente.",
    },
    {
      question: "Como o protocolo diferencia um agente de IA de uma pessoa comum?",
      answer:
        "Usando sessões baseadas em OAuth: o agente pode começar como visitante sem autenticação, e, quando o cliente faz login, decide se o agente recebe acesso só de leitura ou também de escrita, como para finalizar compras.",
    },
    {
      question: "Esse é o único protocolo de comércio feito por agentes de IA?",
      answer:
        "Não. Já existem o Agentic Commerce Protocol (OpenAI e Stripe), o Universal Commerce Protocol (Google, com Shopify, Etsy, Wayfair, Target e Walmart) e o Trusted Agent Protocol (Visa e Cloudflare), ainda em disputa por qual vai prevalecer no mercado.",
    },
  ],
};
