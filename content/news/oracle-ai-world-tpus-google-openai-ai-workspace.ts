import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "oracle-ai-world-tpus-google-openai-ai-workspace",
  title: "Oracle levará os chips TPU do Google à nuvem e põe seus apps no ChatGPT",
  summary:
    "No Oracle AI World, a Oracle anunciou TPUs do Google na nuvem em 2027, plugins de seus apps no ChatGPT e um serviço de segurança com IA da OpenAI.",
  author: "Bruno Danello",
  sourceName: "The Register, Oracle",
  sourceUrl:
    "https://www.theregister.com/ai-and-ml/2026/10/27/big-red-gets-cozy-with-google-to-offer-tpus-to-ai-customers/5305846",
  date: "2026-10-28",
  publishedAt: "2026-10-28T04:40:00-03:00",
  topic: "negocios",
  imageQuery: "Oracle headquarters Austin",
  content: `
    <p>A Oracle usou o primeiro dia do seu evento anual Oracle AI World, em Las Vegas, na terça-feira, 27 de outubro de 2026, para despejar uma série de anúncios sobre inteligência artificial. Os três que mais interessam a quem acompanha o setor são a chegada dos chips TPU do Google à nuvem da Oracle, novos plugins que levam os sistemas da empresa para dentro do ChatGPT e um serviço de segurança que usa modelos de IA da OpenAI para caçar falhas. Segundo a cobertura do The Register, que detalhou os comunicados da própria Oracle, tudo isso reforça a estratégia de oferecer mais de um tipo de chip e mais de um parceiro de modelos.</p>

    <p>Este texto é análise nossa a partir da reportagem do The Register e dos comunicados da Oracle citados por ela. Vamos separar o que foi anunciado do que ainda é promessa e mostrar o que tende a mudar para quem usa IA no trabalho.</p>

    <h2>TPUs do Google dentro da nuvem da Oracle</h2>
    <p>O anúncio de maior peso estratégico é que a Oracle Cloud Infrastructure (OCI) vai oferecer as Tensor Processing Units, as TPUs, chips de IA criados pelo Google. Segundo a Oracle, ela será a primeira nuvem de grande porte, fora a do próprio Google, a vender esses chips. Eles ficarão disponíveis para escolha dentro da OCI a partir de 2027, com a capacidade crescendo ao longo de vários anos. A empresa não informou quantos chips pretende instalar no ano que vem nem depois.</p>

    <p>A justificativa veio de Mahesh Thiagarajan, presidente da OCI, que afirmou que cargas de trabalho de IA diferentes têm necessidades de computação diferentes, e que trazer as TPUs dá aos clientes a flexibilidade de escolher a infraestrutura certa para desempenho, vazão e custo de cada tarefa. Em palavras simples, a Oracle quer deixar de depender quase só da Nvidia, com quem fechou acordos que somam dezenas de bilhões de dólares para equipar seus data centers.</p>

    <h2>Plugins no ChatGPT e um serviço de segurança com IA da OpenAI</h2>
    <p>A Oracle também reafirmou a parceria com a OpenAI. O primeiro produto novo é o Oracle AI Workspace, descrito como uma experiência única que junta os modelos de ponta da OpenAI com aplicações, dados corporativos e serviços de nuvem da Oracle, por meio de plugins do ChatGPT. Na prática, os sistemas de negócio da Oracle viram recursos que o ChatGPT consegue acessar: a pessoa descreve um objetivo e os plugins reúnem as ferramentas e informações certas para cumpri-lo. A Oracle diz que isso deixa suas capacidades prontas para agentes.</p>

    <p>O segundo é o Oracle AI Security Mesh, uma plataforma gerenciada que combina modelos de IA de fronteira voltados à cibersegurança com a experiência da Oracle na área. De acordo com a reportagem, o serviço usará modelos de cibersegurança da OpenAI para encontrar vulnerabilidades, testar se elas podem ser exploradas e recomendar correções, apenas nas partes da infraestrutura da empresa cliente que ela autorizar. Já mostramos como esse tipo de ferramenta ganhou força com o <a href="/noticias/google-anthropic-openai-lancam-modelos-ia-ciberseguranca">lançamento de modelos de IA para cibersegurança por Google, Anthropic e OpenAI</a>.</p>

    <h2>Snowflake nativo e hardware novo da Nvidia</h2>
    <p>O evento teve ainda um acordo com a Snowflake para levar a plataforma de dados dela à OCI como serviço nativo. Quem já é cliente da Oracle poderá comprar e usar a Snowflake direto pela Oracle, que cuidará de preços, descontos e cobrança, e os créditos universais da Oracle poderão ser usados na Snowflake dentro da OCI. A ideia é facilitar que empresas rodem IA perto de onde seus dados já estão.</p>

    <p>A Nvidia também apareceu. A Oracle anunciou a disponibilidade geral dos sistemas Vera Rubin NVL72 e das CPUs Vera, além de planos para sistemas HGX Rubin NVL8, sem data definida. Ou seja, a diversificação não significa abandonar a Nvidia: significa ter mais opções na prateleira. Na terça-feira a Oracle também confirmou o acordo para <a href="/noticias/oracle-cerebras-nuvem-2027-inferencia-ia">oferecer os computadores de IA da Cerebras em 2027</a>, o que completa o desenho de uma nuvem com vários tipos de chip.</p>

    <h2>O contexto financeiro e as dúvidas</h2>
    <p>A Oracle registrou lucros recordes no trimestre encerrado em 31 de agosto, com receita 30% maior que um ano antes, impulsionada pelos investimentos em IA. Para dimensionar a aposta, vale lembrar o <a href="/noticias/oracle-backlog-664-bilhoes-nuvem-ia">backlog de US$ 664 bilhões em contratos de nuvem e IA</a> que a empresa chegou a acumular. A reportagem, porém, faz um contraponto: há pouca evidência de retorno equivalente fora do setor de tecnologia, e muitos dos anúncios envolvem gastos circulares entre os grandes nomes da IA, enquanto as empresas seguem esperando resultados. É uma leitura crítica do veículo, e não um fato apurado por nós.</p>

    <p>Também há lacunas importantes. Não foram divulgados preços das TPUs na OCI, a quantidade de chips, as regiões onde estarão disponíveis nem quais modelos rodarão neles. O Oracle AI Workspace e o AI Security Mesh foram apresentados como novos produtos, mas a reportagem não detalha prazos de chegada ao Brasil. Convém tratar tudo como direção estratégica até que haja preço e disponibilidade.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Para guardar</span>
      <p>O mercado de nuvem para IA está virando um balcão de vários chips e vários modelos. Quem constrói produtos em cima dessa infraestrutura ganha poder de negociação, mas precisa acompanhar preço e disponibilidade real antes de planejar qualquer migração.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>Você provavelmente nunca vai comprar uma TPU, mas paga por ela de forma indireta. O custo de rodar modelos entra no preço das APIs, dos planos de assistentes e das ferramentas de automação que freelancers e pequenos negócios usam todos os dias. Quando uma grande nuvem passa a oferecer mais de um tipo de chip, a concorrência por preço e velocidade tende a crescer. Alguns pontos práticos:</p>
    <ul>
      <li>Se você monta automações ou agentes para clientes, evite amarrar o produto a um único fornecedor de modelo ou de nuvem. Os próprios gigantes estão fazendo o contrário e diversificando.</li>
      <li>Se sua empresa já usa sistemas da Oracle, o AI Workspace indica um caminho em que o ChatGPT vira a porta de entrada para dados corporativos. Isso levanta perguntas de permissão e privacidade que valem ser feitas antes de ligar qualquer plugin.</li>
      <li>Se você trabalha com segurança ou presta serviço de TI, serviços gerenciados de caça a vulnerabilidades com IA mostram para onde o mercado caminha, e quem entende do assunto terá mais demanda.</li>
    </ul>

    <p>O movimento de plugins e conectores para agentes aparece em várias frentes ao mesmo tempo. A Apple, por exemplo, abriu o MCP nos seus apps de escritório, como contamos em <a href="/noticias/apple-assistente-ia-pages-keynote-numbers-mcp">assistente de IA no Pages, Keynote e Numbers</a>. Para entender como tirar proveito desse cenário sem depender de detalhe técnico de infraestrutura, vale ler <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o futuro do trabalho autônomo</a> e <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como ganhar dinheiro criando e vendendo agentes de IA personalizados</a>. Quanto mais barata e flexível a infraestrutura fica, mais espaço existe para quem constrói soluções em cima dela.</p>

    <p>Por fim, uma observação de método: os detalhes técnicos e as falas de executivos vêm do The Register, que por sua vez se baseia nos comunicados da Oracle. Esta é uma notícia de fonte única, e vamos atualizar quando houver preços, datas e disponibilidade confirmados.</p>
  `,
};
