import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "adnoc-openai-g42-agentes-frontier-petroleo-gas",
  title: "ADNOC fecha acordo com OpenAI e G42 para usar agentes de IA",
  summary:
    "A petroleira estatal de Abu Dhabi será a primeira do setor de energia a usar o OpenAI Frontier. A promessa: planos de campo que levam meses sairiam em horas.",
  author: "Bruno Danello",
  sourceName: "The Next Web, The National, OpenAI",
  sourceUrl: "https://thenextweb.com/news/adnoc-openai-g42-frontier-ai-deal",
  date: "2026-11-02",
  publishedAt: "2026-11-02T05:38:00-03:00",
  imageQuery: "Sultan Al Jaber ADNOC",
  coverImage: {
    url: "/images/covers/adnoc-openai-g42-agentes-frontier-petroleo-gas.webp",
    width: 1280,
    height: 601,
    credit: "Ministry of Petroleum and Natural Gas (GODL-India) / Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File%3ADharmendra%20Pradhan%20in%20a%20meeting%20with%20the%20Minister%20of%20State%20of%20UAE%20%26%20CEO%20Abu%20Dhabi%20National%20Oil%20Company%20(ADNOC)%20Group%2C%20Dr.%20Sultan%20Ahmed%20Al%20Jaber%2C%20in%20New%20Delhi.JPG",
  },
  topic: "negocios",
  content: `
    <p>A ADNOC, petroleira estatal de Abu Dhabi, assinou um acordo de vários anos com a OpenAI e a G42 para levar agentes de inteligência artificial para dentro das suas operações. O anúncio foi feito nesta segunda-feira (2 de novembro), durante uma visita do presidente-executivo da OpenAI, Sam Altman, aos Emirados Árabes Unidos, e foi relatado pelo The Next Web, que cita o jornal The National e um comunicado da própria OpenAI. A ADNOC será a primeira empresa de energia a usar o OpenAI Frontier, a plataforma lançada em fevereiro para empresas criarem e gerenciarem agentes de IA.</p>

    <p>Os valores do contrato e o calendário de implantação não foram divulgados. Mesmo assim, o acordo é um bom retrato de como a corrida da IA para empresas está se deslocando: sai o chatbot que responde perguntas e entra o agente que recebe uma tarefa grande, cruza dados internos e devolve um plano pronto para um especialista aprovar.</p>

    <h2>O que foi anunciado</h2>
    <p>Segundo o relato, os modelos da OpenAI serão combinados com os dados industriais da ADNOC para construir sistemas de IA em diferentes áreas da empresa. A infraestrutura de computação virá da G42, empresa de IA dos Emirados que também constrói o data center do projeto Stargate da OpenAI no país. A assinatura foi acompanhada pelo príncipe herdeiro Sheikh Khaled bin Mohamed bin Zayed, depois de uma reunião com Altman.</p>

    <p>A OpenAI informou que esse foi um de quatro acordos fechados com organizações de Abu Dhabi. O acerto com a ADNOC também inclui trabalho de segurança digital por meio do programa Daybreak Blue, da OpenAI, e treinamento para funcionários da petroleira. Sobre esse programa, o Portal da AI mostrou que a empresa pretende usar dados de sessões dele para treinar modelos, em <a href="/noticias/openai-treinara-modelos-com-dados-do-daybreak-blue-antes-protegidos">OpenAI treinará modelos com dados do Daybreak Blue antes protegidos</a>.</p>

    <h2>A primeira tarefa: planejar o desenvolvimento de campos</h2>
    <p>A primeira aplicação prevista é o planejamento do desenvolvimento de campos de petróleo e gás. A ADNOC diz que o sistema poderia produzir um plano completo em horas, num processo que hoje leva meses. A empresa faz questão de afirmar que especialistas humanos continuam responsáveis pelas decisões importantes. Ou seja, o agente monta a proposta e a pessoa decide.</p>

    <p>O plano seguinte é mais ambicioso. As empresas querem conectar as etapas da operação, da produção e do refino até as vendas e a negociação de produtos. Nesse desenho, agentes analisariam oferta, demanda, preços e margens de lucro antes mesmo de o petróleo ser extraído. É uma promessa, não um resultado medido: o relato não traz dados de desempenho nem prazo para que isso funcione de ponta a ponta.</p>

    <h2>Os números que a ADNOC já tem</h2>
    <p>O texto do The Next Web traz alguns números da própria ADNOC sobre o ponto de partida. O ChatGPT Enterprise já foi liberado para mais de 40 mil funcionários. A empresa afirma ter mais de 200 aplicações de IA e 70 projetos de robótica, entre os que já estão em uso e os que estão em desenvolvimento. São informações dadas pela companhia, sem verificação independente no relato.</p>

    <p>O presidente-executivo do grupo, Sultan Ahmed Al Jaber, que também é ministro da Indústria e Tecnologia Avançada dos Emirados, disse que a próxima fronteira da IA "não é simplesmente fazer as coisas mais rápido", mas tornar possível o que antes estava fora de alcance. Altman afirmou que uma IA mais capaz pode ajudar a enfrentar alguns dos problemas mais difíceis do mundo, em particular na área de energia. As frases foram traduzidas livremente.</p>

    <h2>Mais um passo da OpenAI no mercado corporativo</h2>
    <p>O acordo se encaixa na ofensiva da OpenAI para vender IA a grandes empresas, que o relato descreve como incluindo várias parcerias com consultorias este ano. Um exemplo recente é a Cognizant, que montou um grupo com mais de 25 mil pessoas para implantar produtos da OpenAI, como o Portal da AI contou em <a href="/noticias/cognizant-25-mil-funcionarios-openai-frontier-capability-group">Cognizant põe 25 mil funcionários para implantar Codex e ChatGPT</a>. A lógica é a mesma: vender o modelo é só parte do negócio, e o dinheiro maior está em plugar a IA nos dados e nos processos de cada cliente.</p>

    <p>Também há o lado da infraestrutura. A G42 construir o data center do Stargate nos Emirados mostra que a OpenAI está espalhando sua capacidade de computação por vários países, algo que enfrenta obstáculos reais em outros lugares, como o caso mostrado em <a href="/noticias/oracle-force-majeure-data-center-stargate-novo-mexico">Oracle declara força maior em data center do Stargate no Novo México</a>. Para uma petroleira que quer rodar dados sensíveis, ter a computação no próprio país também pesa na decisão.</p>

    <h2>O contexto de risco ao redor do evento</h2>
    <p>O anúncio saiu durante a ADIPEC, maior conferência de petróleo e gás dos Emirados. O texto lembra, citando a Reuters, que a ExxonMobil e a Chevron cancelaram o envio de executivos ao evento por questões de segurança, e que o temor de novos ataques dos Estados Unidos ao Irã tem abalado o mercado de petróleo. Isso não tem relação direta com a tecnologia, mas ajuda a entender que o acordo foi assinado num momento de tensão geopolítica na região.</p>

    <h2>O que ainda não está claro</h2>
    <p>Há várias lacunas. Não se sabe o valor do contrato nem quando o sistema entra em operação. A afirmação de que um plano de desenvolvimento de campo sairia em horas em vez de meses é uma expectativa declarada pela ADNOC, sem demonstração pública. Também não está explicado como serão tratados erros de agentes em decisões que envolvem investimentos enormes, nem que modelo específico da OpenAI vai rodar o sistema. O próprio fato de a fonte principal ser uma reportagem sobre um anúncio corporativo pede cautela: o que existe hoje é a promessa de duas empresas interessadas em divulgar o negócio.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo longe do petróleo, o caso mostra para onde o mercado de trabalho com IA está indo: tarefas que envolvem juntar muitos dados, comparar cenários e montar um plano deixam de ser feitas só por equipes e passam a ser rascunhadas por agentes, com revisão humana no fim. Quem trabalha com planejamento, finanças, logística ou análise tende a ser cobrado por saber conduzir e conferir esse tipo de sistema, e não apenas por montar planilhas na mão.</p>

    <p>Se você tem um negócio pequeno, a lição prática é começar por uma tarefa concreta e mensurável, como fez a ADNOC ao escolher o planejamento de campos como primeira aplicação, e manter uma pessoa responsável pela decisão final. O guia sobre <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o futuro do trabalho autônomo</a> explica como esses agentes funcionam e onde eles ajudam quem trabalha por conta própria. E para quem acompanha o preço da tecnologia, vale ver a movimentação recente da própria OpenAI em <a href="/noticias/openai-gpt-6-1-terra-modelo-uso-de-computador-metade-preco-sol">GPT-6.1 Terra, modelo que opera o computador por metade do preço</a>, que mostra como a empresa tenta baratear agentes para uso em escala.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Leia com cautela</span>
      <p>Esta notícia se baseia na reportagem do The Next Web, que cita o jornal The National, um comunicado da OpenAI e a Reuters. Os números de funcionários e de aplicações são da ADNOC e as promessas de ganho de tempo são expectativas das empresas, sem verificação independente.</p>
    </div>
  `,
  faq: [
    {
      question: "O que a ADNOC, a OpenAI e a G42 anunciaram?",
      answer:
        "Um acordo de vários anos para levar agentes de IA às operações da petroleira de Abu Dhabi. A ADNOC será a primeira empresa de energia a usar o OpenAI Frontier, com computação fornecida pela G42.",
    },
    {
      question: "Qual será o primeiro uso dos agentes?",
      answer:
        "O planejamento do desenvolvimento de campos de petróleo e gás. A ADNOC diz que um plano completo poderia sair em horas, em vez de meses, com especialistas humanos decidindo as questões importantes.",
    },
    {
      question: "Quanto vale o acordo?",
      answer:
        "Não foi divulgado. Também não há data confirmada para a implantação do sistema.",
    },
  ],
};
