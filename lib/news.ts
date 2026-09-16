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
  {
    slug: "google-lanca-gemini-3-8-flash",
    title: "Google lança o Gemini 3.8 Flash",
    summary:
      "É o terceiro lançamento da linha Flash em seis semanas, com melhorias em engenharia de software, tarefas de agente e raciocínio em várias etapas, chegando perto do desempenho de modelos mais caros. O preço de entrada segue igual ao da versão anterior, e há também uma variante voltada a cibersegurança para governos e parceiros de confiança.",
    sourceName: "Google",
    sourceUrl:
      "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/",
    date: "2026-09-02",
  },
  {
    slug: "meta-adquire-startup-sueca-stilla",
    title: "Meta compra a startup sueca Stilla.ai para reforçar IA de vendas",
    summary:
      "Apenas oito meses após seu lançamento público, a Stilla foi comprada pela Meta para acelerar o Meta Business Agent, assistente de IA que já viabiliza vendas para mais de um milhão de empresas no WhatsApp, Messenger e Instagram. Os termos financeiros não foram divulgados.",
    sourceName: "Axios",
    sourceUrl: "https://www.axios.com/2026/09/09/meta-acquires-swedish-ai-startup-stillaai",
    date: "2026-09-09",
  },
  {
    slug: "oracle-backlog-664-bilhoes-nuvem-ia",
    title: "Oracle bate recorde com backlog de US$ 664 bilhões em contratos de IA",
    summary:
      "Impulsionada pela demanda por poder computacional para inteligência artificial, a Oracle acumulou contratos ainda não entregues no valor de US$ 664 bilhões, alta de US$ 209 bilhões em um ano. A receita de infraestrutura de nuvem cresceu 121% no trimestre, e a empresa afirma que o backlog fora de contratos com a OpenAI mais que dobrou no período.",
    sourceName: "Reuters",
    sourceUrl:
      "https://www.investing.com/news/stock-market-news/oracle-shares-rise-as-ai-cloud-backlog-beats-estimates-4897401",
    date: "2026-09-11",
  },
  {
    slug: "sam-altman-openai-aberta-desacelerar-desenvolvimento",
    title: "Sam Altman diz que a OpenAI está aberta a desacelerar o desenvolvimento de IA",
    summary:
      "Em reunião interna, o CEO da OpenAI afirmou que a empresa consideraria reduzir o ritmo de lançamento de modelos de ponta caso as avaliações de segurança recomendem isso, e que espera que outros laboratórios façam o mesmo. A declaração vem após incidentes de segurança recentes e uma pausa de duas semanas nos treinamentos da empresa em agosto.",
    sourceName: "Bloomberg",
    sourceUrl:
      "https://www.bloomberg.com/news/articles/2026-09-11/openai-is-open-to-slowing-cutting-edge-ai-ceo-sam-altman-tells-staff",
    date: "2026-09-11",
  },
  {
    slug: "bernie-sanders-projeto-lei-banir-superinteligencia",
    title: "Bernie Sanders propõe lei para banir a 'superinteligência' artificial",
    summary:
      "O senador Bernie Sanders e o deputado Greg Casar apresentaram um projeto de lei que proíbe permanentemente o desenvolvimento de inteligência artificial superinteligente, pausa temporariamente o avanço de modelos de ponta até haver regras de segurança definidas e cria uma agência federal para monitorar sistemas de fronteira em IA.",
    sourceName: "Senado dos EUA",
    sourceUrl:
      "https://www.sanders.senate.gov/press-releases/news-sanders-casar-introduce-legislation-to-ban-artificial-superintelligence-and-temporarily-pause-advanced-ai-development/",
    date: "2026-09-04",
  },
  {
    slug: "amodei-altman-musk-pedem-desaceleracao-ia",
    title: "Amodei, Altman e Musk concordam: é preciso desacelerar a fronteira da IA",
    summary:
      "Em um ensaio, o CEO da Anthropic defendeu reduzir deliberadamente o ritmo de avanço dos modelos mais poderosos, propondo avaliadores independentes dentro dos laboratórios e padrões de segurança comuns entre países democráticos. No mesmo dia, os líderes da OpenAI, da xAI e do Google DeepMind manifestaram apoio à ideia — um alinhamento raro entre concorrentes diretos.",
    sourceName: "CoinDesk",
    sourceUrl:
      "https://www.coindesk.com/tech/2026/09/12/anthropic-ceo-calls-for-ai-race-to-slow-down-musk-and-openai-s-altman-agrees",
    date: "2026-09-12",
  },
  {
    slug: "ataque-agentes-ia-395-organizacoes-papercut",
    title: "Centenas de agentes de IA são usados para invadir 395 organizações",
    summary:
      "Um grupo de língua russa combinou centenas de agentes de IA construídos sobre o Codex da OpenAI e um modelo da DeepSeek para explorar falhas no software de impressão PaperCut, comprometendo mais de 440 servidores em 395 organizações de 48 países — a maioria delas do setor educacional. O ataque saiu do zero até o primeiro acesso remoto em menos de quatro horas.",
    sourceName: "BleepingComputer",
    sourceUrl:
      "https://www.bleepingcomputer.com/news/security/ai-powered-attack-exploited-papercut-flaws-to-hack-395-organizations/",
    date: "2026-09-10",
  },
  {
    slug: "pentagono-emprestimo-5-bilhoes-fluidstack",
    title: "Pentágono negocia empréstimo de US$ 5 bilhões para startup de nuvem de IA",
    summary:
      "O Departamento de Defesa dos EUA está em conversas para emprestar US$ 5 bilhões à Fluidstack, startup de infraestrutura de IA, para reforçar a cadeia de suprimentos de data centers americanos. Se confirmado, seria o maior empréstimo já concedido pelo escritório de capital estratégico do Pentágono desde sua criação.",
    sourceName: "Reuters",
    sourceUrl:
      "https://finance.yahoo.com/technology/ai/articles/pentagon-talks-lend-5-billion-215353279.html",
    date: "2026-09-11",
  },
  {
    slug: "anthropic-lanca-claude-fable-5-1-mythos-5-1",
    title: "Anthropic lança Claude Fable 5.1 e Mythos 5.1",
    summary:
      "Os novos modelos superam as versões anteriores em tarefas de programação, trabalho de conhecimento e problemas de longa duração, com destaque para uso de computador e tarefas de agente. O preço por token segue igual, mas a leitura de cache ficou 75% mais barata — e as salvaguardas de segurança passaram a gerar bem menos alertas falsos em perguntas benignas de biologia e cibersegurança.",
    sourceName: "Anthropic",
    sourceUrl: "https://www.anthropic.com/news/claude-opus-5",
    date: "2026-09-01",
  },
  {
    slug: "pesquisador-anthropic-pede-demissao-alerta-riscos",
    title: "Mais um pesquisador de segurança deixa a Anthropic e alerta sobre riscos",
    summary:
      "Joe Benton deixou a equipe de segurança da Anthropic e passou a defender publicamente mais transparência sobre incidentes de segurança em laboratórios de IA, citando o caso em que agentes da empresa acessaram a internet aberta sem autorização. É a segunda saída da equipe de segurança da Anthropic com alerta público em poucos dias.",
    sourceName: "NBC News",
    sourceUrl:
      "https://www.nbcnews.com/tech/security/two-ai-researchers-leave-anthropic-google-safety-concerns-rcna597086",
    date: "2026-09-12",
  },
  {
    slug: "microsoft-codigo-conduta-modelos-mai-nadella",
    title: "Microsoft publica Código de Conduta para seus próprios modelos de IA",
    summary:
      "Satya Nadella anunciou que a Microsoft vai abrir para consulta pública as regras de comportamento que orientam seus modelos próprios da linha MAI, defendendo uma 'pacing deliberada' no desenvolvimento de IA. Segundo ele, qualquer busca por superinteligência só faz sentido se a IA permanecer sob controle humano e a favor da humanidade.",
    sourceName: "Unite.AI",
    sourceUrl: "https://www.unite.ai/nadella-announces-public-consultation-on-microsofts-mai-model-rules/",
    date: "2026-09-13",
  },
  {
    slug: "salesforce-lanca-sete-agentes-ia-agentforce",
    title: "Salesforce lança sete agentes de IA com nome e função definida",
    summary:
      "A Salesforce apresentou sete agentes do Agentforce — Casey, Paige, Carter, Hunter, Marshall, Piper e Fin — cada um dedicado a uma função específica como atendimento, RH, vendas e cadeia de suprimentos. Seis já estão disponíveis de forma geral, enquanto o agente de vendas Hunter segue em piloto, com uma empresa relatando que 60% do seu pipeline comercial já é construído por ele.",
    sourceName: "Salesforce",
    sourceUrl: "https://www.salesforce.com/news/stories/agentforce-job-ready-ai-agents/",
    date: "2026-09-11",
  },
  {
    slug: "david-sacks-critica-pacto-desaceleracao-ia",
    title: "David Sacks critica pacto de desaceleração entre Anthropic e OpenAI",
    summary:
      "O presidente do conselho de ciência e tecnologia da Casa Branca disse que as duas empresas podem desacelerar seus próprios lançamentos se quiserem, mas acusou o pedido conjunto por avaliadores independentes de ser uma tentativa de driblar a lei antitruste e formar um 'cartel', questionando se a motivação é puramente de segurança.",
    sourceName: "Washington Examiner",
    sourceUrl:
      "https://www.washingtonexaminer.com/policy/technology/4725242/david-sacks-ai-pacing-anthropic-openai-regulations/",
    date: "2026-09-13",
  },
  {
    slug: "china-padroes-ia-corporificada",
    title: "China planeja padrões nacionais para 'IA corporificada' (robôs com IA)",
    summary:
      "O regulador de dados chinês anunciou que vai desenvolver normas técnicas para sistemas de inteligência artificial corporificada — robôs e dispositivos físicos controlados por IA — e orientar autoridades locais na aplicação dessas regras, num movimento para padronizar um setor que cresce rapidamente no país.",
    sourceName: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com/news/articles/2026-09-13/china-s-data-regulator-plans-standards-push-for-embodied-ai",
    date: "2026-09-13",
  },
  {
    slug: "amd-acoes-sobem-otimismo-chips-ia",
    title: "Ações da AMD sobem com otimismo sobre chips de IA",
    summary:
      "As ações da AMD subiram cerca de 2,5% no dia, acumulando alta de mais de 8% na semana, após analistas elevarem o preço-alvo do papel para US$ 600 citando o crescimento da receita de CPUs para data center e projeções ambiciosas de IA para o fim da década.",
    sourceName: "ad-hoc-news",
    sourceUrl:
      "https://www.ad-hoc-news.de/boerse/news/corporate-news/amd-stock-gains-as-analysts-lift-ai-expectations-and-price-targets/70095473",
    date: "2026-09-13",
  },
  {
    slug: "trump-chama-desaceleracao-ia-de-conspiracao",
    title: "Trump chama pedido de desaceleração da IA de 'conspiração doentia'",
    summary:
      "Depois que Amodei, Altman e Musk defenderam publicamente reduzir o ritmo de avanço da IA, o presidente dos EUA rejeitou a ideia, afirmando que existe uma 'conspiração doentia' contra a IA e os data centers americanos, e que o país que vencer a corrida por essa tecnologia é quem vai sair na frente.",
    sourceName: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/14/trump-ai-data-centers-anthropic-dario-amodei.html",
    date: "2026-09-14",
  },
  {
    slug: "openai-lanca-chatgpt-images-2-5",
    title: "OpenAI lança o ChatGPT Images 2.5",
    summary:
      "O novo modelo de geração de imagem da OpenAI promete iluminação mais natural, texturas mais ricas, melhor preservação de fotos de referência enviadas pelo usuário e até 50% menos tempo de geração em relação à versão anterior. A atualização também trouxe recursos como esboço à mão livre e comentários diretamente sobre partes específicas de uma imagem.",
    sourceName: "OpenAI",
    sourceUrl: "https://openai.com/index/introducing-chatgpt-images-2-5/",
    date: "2026-09-08",
  },
  {
    slug: "openai-pergunta-congresso-antitruste-desaceleracao",
    title: "OpenAI pergunta ao Congresso dos EUA se pode coordenar desaceleração com rivais",
    summary:
      "A empresa levou a membros do Congresso americano a dúvida se combinar com concorrentes como Anthropic e Google uma redução conjunta no ritmo de lançamento de modelos de ponta, por motivos de segurança, poderia violar a lei antitruste dos Estados Unidos — já que coordenação entre concorrentes para limitar lançamentos é historicamente tratada como prática restritiva de mercado.",
    sourceName: "TechRepublic",
    sourceUrl: "https://www.techrepublic.com/article/news-openai-ai-slowdown-antitrust-congress/",
    date: "2026-09-11",
  },
  {
    slug: "deepseek-v4-1-flash-mantem-v4-pro",
    title: "DeepSeek lança V4.1 Flash e recua de plano de aposentar o V4 Pro",
    summary:
      "A DeepSeek havia planejado migrar todo o tráfego do V4 Pro para o novo V4.1 Flash — menor, mas com desempenho superior na maioria dos testes — a partir de 14 de setembro. Diante da demanda dos usuários, a empresa recuou e vai manter os dois modelos disponíveis via API, com a cobrança do V4 Pro inalterada.",
    sourceName: "Bitrue",
    sourceUrl: "https://www.bitrue.com/blog/deepseek-v4-1-flash",
    date: "2026-09-14",
  },
  {
    slug: "tandem-health-100-milhoes-serie-b-ia-clinica",
    title: "Startup sueca de IA clínica Tandem Health capta US$ 100 milhões",
    summary:
      "A Tandem Health, de Estocolmo, levantou uma rodada Série B liderada pelo Scaleup Europe Fund, gerido pela EQT — a primeira empresa de IA para saúde apoiada pelo fundo. O dinheiro vai expandir a ferramenta de assistente médico por IA, hoje usada por 10 mil organizações de saúde em 14 países, para um sistema mais amplo de gestão de atendimento e agenda de pacientes.",
    sourceName: "Unite.AI",
    sourceUrl: "https://www.unite.ai/tandem-health-raises-100m-series-b-to-build-ai-clinic-operating-system/",
    date: "2026-09-14",
  },
  {
    slug: "cornelis-networks-205-milhoes-active-compute-fabric",
    title: "Cornelis Networks capta US$ 205 milhões para desafiar a Nvidia em redes de IA",
    summary:
      "A startup, derivada da Intel, lançou a Active Compute Fabric, uma arquitetura aberta de rede que processa dados enquanto os transmite, em vez de só conectar servidores — respondendo ao desperdício de tempo de GPU parada esperando dados chegarem. A empresa também anunciou colaboração com a Qualcomm em infraestrutura de IA em escala de rack.",
    sourceName: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2026/09/14/ai-infrastructure-company-cornelis-raises-205m-to-chip-away-at-nvidias-dominance/",
    date: "2026-09-14",
  },
  {
    slug: "euclyd-200-milhoes-chip-ia-samsung",
    title: "Startup holandesa Euclyd capta mais de € 200 milhões para chip de IA sem GPU",
    summary:
      "A Euclyd, de Eindhoven, fechou uma rodada Série A com participação da Samsung e outros investidores, tendo o ex-presidente da ASML Peter Wennink como novo presidente do conselho. A empresa desenvolve uma arquitetura de chip alternativa à GPU voltada especificamente para inferência de modelos de IA, com produtos físicos previstos para 2028.",
    sourceName: "Data Center Dynamics",
    sourceUrl: "https://www.datacenterdynamics.com/en/news/dutch-ai-chip-startup-euclyd-raises-231-million-in-funding-round-co-led-by-samsung/",
    date: "2026-09-15",
  },
  {
    slug: "tavus-lanca-phoenix-4-5-renderizacao-humana-tempo-real",
    title: "Tavus lança Phoenix-4.5, modelo de renderização humana em tempo real",
    summary:
      "O novo modelo gera corpo inteiro (não só o rosto) de um avatar digital com resposta emocional e movimento facial contínuo enquanto fala e escuta ao mesmo tempo, mantendo baixa latência entre áudio e vídeo. A empresa descreve o Phoenix-4.5 como o modelo de renderização humana em tempo real mais rápido e expressivo disponível atualmente.",
    sourceName: "Tavus",
    sourceUrl: "https://www.tavus.io/blog/phoenix-4-5",
    date: "2026-09-15",
  },
  {
    slug: "bytedance-lucro-cai-gastos-ia",
    title: "Lucro da ByteDance cai para US$ 20 bilhões no semestre com gastos em IA",
    summary:
      "O lucro líquido da ByteDance no primeiro semestre de 2026 caiu em torno de um dígito percentual, pressionado pelo investimento pesado em infraestrutura de inteligência artificial, mesmo com a receita crescendo cerca de 30%. A empresa avalia elevar o investimento em IA para até US$ 70 bilhões no ano, mais do que o dobro do nível de 2025.",
    sourceName: "The Information",
    sourceUrl: "https://www.theinformation.com/articles/bytedances-first-half-profit-drops-20-billion-weighed-ai-spending",
    date: "2026-09-15",
  },
  {
    slug: "altman-openai-nao-abre-capital-em-2026",
    title: "Sam Altman confirma que a OpenAI não vai abrir capital em 2026",
    summary:
      "Em entrevista à Fortune, o CEO disse que, dado tudo o que está acontecendo em torno da segurança da IA, seria 'um momento mal aconselhado' para um IPO, e que a empresa não sente pressão para isso agora. A declaração ocorre enquanto a Anthropic, rival direta, já protocolou pedido confidencial de abertura de capital nos EUA.",
    sourceName: "Fortune",
    sourceUrl: "https://fortune.com/2026/09/12/sam-altman-openai-ipo-delay-ill-advised-moment-safety-concerns/",
    date: "2026-09-12",
  },
];

export function sortedNews() {
  return [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
