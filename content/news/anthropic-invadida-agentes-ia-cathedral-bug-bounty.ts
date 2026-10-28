import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-invadida-agentes-ia-cathedral-bug-bounty",
  title: "Agentes de IA de startup invadem sistemas de apoio da Anthropic",
  summary:
    "A Cathedral usou agentes de IA no programa de recompensas da Anthropic e entrou em sistemas de vendas, RH e TI. As duas empresas divergem sobre o tamanho do acesso.",
  author: "Bruno Danello",
  sourceName: "The Decoder, The Washington Post",
  sourceUrl:
    "https://the-decoder.com/ai-agents-hacked-anthropic-maker-of-arguably-the-most-capable-ai-models-for-cyberdefense/",
  date: "2026-10-28",
  publishedAt: "2026-10-28T08:35:00-03:00",
  topic: "seguranca",
  imageQuery: "Anthropic logo",
  content: `
    <p>Uma startup de segurança digital chamada Cathedral usou agentes de IA para invadir sistemas da Anthropic, a empresa que faz o Claude, dentro do programa de recompensas por falhas (o chamado bug bounty) da própria Anthropic. O caso foi noticiado pelo Washington Post em 26 de outubro de 2026 e detalhado nesta quarta-feira, 28, pelo The Decoder. A Anthropic afirma que conversas do Claude, código-fonte e pesos dos modelos nunca foram expostos, mas as duas partes discordam sobre quanto tempo o ataque levou e até onde o acesso chegou.</p>

    <p>O episódio chama atenção por uma ironia evidente: a Anthropic é apontada como dona de alguns dos modelos mais capazes do mundo para defesa cibernética, e ainda assim teve sistemas de apoio ao negócio acessados por agentes de IA de uma empresa externa. Para quem usa IA no trabalho ou depende de ferramentas de terceiros, a história traz lições práticas.</p>

    <h2>O que aconteceu</h2>
    <p>Segundo a reportagem, a Cathedral é uma empresa fundada por ex-integrantes do DOGE, o órgão americano de eficiência governamental, e vende ferramentas de segurança com IA para órgãos públicos e empresas. Seus pesquisadores colocaram agentes de IA, rodando modelos avançados, para procurar falhas na Anthropic como parte do programa de recompensas da própria empresa, que paga a quem encontra e relata vulnerabilidades.</p>

    <p>A entrada não se deu pelo núcleo da Anthropic. Os pesquisadores chegaram por programas externos de administração e de vendas, que são softwares comerciais de terceiros ligados à empresa. A Anthropic diz que a Cathedral passou dias testando os sistemas próprios antes de migrar o foco para esses softwares de fornecedores. Lá, a startup encontrou duas vulnerabilidades, mas relatou só uma. A Anthropic afirma ter descoberto e corrigido a segunda por conta própria.</p>

    <h2>O que foi acessado, segundo cada lado</h2>
    <p>Os números e o alcance mudam conforme quem conta. A Cathedral diz que seus agentes encontraram transcrições de reuniões, dados de salários, vagas de emprego e mensagens do Slack em menos de doze horas. A Anthropic fala em um conjunto limitado de sistemas de vendas, recursos humanos e tecnologia da informação, com dados de contato de alguns clientes e parceiros e informações básicas de contas de usuário.</p>

    <p>Houve ainda uma alegação mais grave. O ex-funcionário da OpenAI Will Depue afirmou, citando fontes que não nomeou, que a Cathedral teria obtido acesso total de administrador ao Slack da Anthropic, com possibilidade de ler todas as mensagens e entrar em qualquer conta de usuário. A Anthropic diz que essas fontes estavam erradas, mas não deu detalhes que permitam checar a versão.</p>

    <div class="callout-box">
      <span class="callout-label">Versões em disputa</span>
      <p>Duração: a Cathedral fala em menos de doze horas, a Anthropic em vários dias. Alcance: a Anthropic nega acesso a chats do Claude, código e pesos de modelos, e contesta a versão de acesso total ao Slack. Nenhuma das duas versões foi confirmada por terceiros independentes até agora.</p>
    </div>

    <h2>A resposta da Anthropic</h2>
    <p>A empresa afirma que desligou os pontos de acesso afetados no mesmo dia em que identificou a invasão, suspendeu os programas de terceiros até resolver o problema e avisou autoridades federais dos Estados Unidos. Também acusa a Cathedral de violar as regras do programa de recompensas por ter feito uma divulgação incompleta. Logan Graham, responsável por testes ofensivos (red team) na Anthropic, disse que atacar fornecedores terceirizados e extrair dados foi além da área de proteção legal do programa, embora tenha elogiado a descoberta da vulnerabilidade. A Cathedral sustenta que seguiu práticas padrão de pesquisa em segurança.</p>

    <p>Graham também fez um alerta que vale para qualquer empresa: segundo ele, atacantes já rodam agentes de IA o dia inteiro contra dependências externas, e modelos meia geração ou uma geração atrás da fronteira já são capazes o bastante para esse tipo de ataque. Ele disse que é preciso fazer testes de invasão contra si mesmo o tempo todo. A Anthropic afirma que pretende manter testes de invasão contínuos em casa e reconstruir software com verificação formal, técnica que prova matematicamente que um programa se comporta como deveria.</p>

    <h2>O que dizem os especialistas</h2>
    <p>Alex Stamos, diretor de segurança da Cognition, disse ao Washington Post que considerou as descobertas relevantes. Para ele, aplicativos de terceiros integrados aos sistemas internos são um problema grande em toda a indústria, e a Anthropic poderia ter protegido melhor seus serviços externos. Depue foi além e argumentou que o caso reflete o ritmo da corrida da IA, em que executivos priorizam velocidade em vez de segurança, e que tanto a Anthropic quanto a OpenAI guardam segredos de pesquisa no Slack.</p>

    <p>Há ainda um detalhe de contexto: o pesquisador Jacob Coxon deixou a Anthropic em setembro de 2026 e já havia criticado a empresa por conduzir pesquisas perigosas de IA em softwares de escritório como o Slack. A reportagem observa que Graham não explicou como a Cathedral conseguiu entrar tão fundo, dadas as capacidades de defesa da própria Anthropic.</p>

    <h2>Um padrão que se repete</h2>
    <p>O ponto central do caso, o elo fraco que fica fora do núcleo da empresa, aparece em vários incidentes recentes. O pós-morte do ataque ao LiteLLM mostrou que tudo começou com uma <a href="/noticias/litellm-ataque-comecou-chave-mestra-exposta-posmortem">chave mestra exposta</a>. Outro episódio envolveu a invasão da Railway, em que o alvo eram <a href="/noticias/railway-invasao-chaves-api-ia-100-mil-workspaces">chaves de API de IA de cem mil workspaces</a>. Em ambos, o problema não estava no modelo de IA em si, e sim nos serviços ao redor dele.</p>

    <p>A diferença agora é que o ataque foi conduzido por agentes autônomos, que trabalham sem cansar e testam muitas combinações rapidamente. O mesmo movimento aparece quando a Anthropic <a href="/noticias/anthropic-expande-programa-verificacao-ciberseguranca-ia">expande seu programa de verificação em cibersegurança com IA</a>: as ferramentas que protegem também servem a quem ataca, e a vantagem tende a ficar com quem automatiza primeiro.</p>

    <h2>Por que isso importa para você</h2>
    <p>Você provavelmente não tem um programa de recompensas, mas usa fornecedores: plataforma de e-mail, CRM, ferramenta de vendas, aplicativo de atendimento, gerenciador de tarefas. Cada um é uma porta para os dados do seu negócio, e o caso da Anthropic mostra que o elo mais fraco costuma ser o software auxiliar, não o sistema principal. Se uma empresa desse porte foi atingida por esse caminho, um pequeno negócio com dezenas de integrações soltas está ainda mais exposto.</p>

    <p>Algumas medidas simples reduzem o risco. Revise quais aplicativos de terceiros têm acesso à sua conta de e-mail, ao seu Slack ou ao seu CRM e remova os que não usa. Dê a cada integração só a permissão de que ela precisa. Ative a verificação em duas etapas em tudo e guarde as senhas em um gerenciador, como explicamos no guia de <a href="/artigos/gerenciador-de-senhas-como-escolher-comecar-e-usar-com-seguranca">gerenciador de senhas</a>. Se você usa agentes de IA com acesso às suas contas, vale o cuidado mostrado em <a href="/noticias/1password-for-agents-senhas-agentes-ia">1Password for Agents</a>, que busca dar aos agentes credenciais limitadas em vez de senhas completas.</p>

    <p>Quem contrata ferramentas de IA para a empresa também deve olhar a lista de fornecedores com mais critério. Nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA com segurança</a> ajuda a perguntar o que importa: onde ficam os dados, quem pode acessá-los e o que acontece em caso de incidente. E, para quem quer entender o que os modelos mais recentes já fazem em segurança, vale ler sobre o episódio em que o <a href="/noticias/anthropic-aisi-mythos-5-contas-falsas-mantenedor-github">Claude Mythos 5 usou contas falsas para pressionar um mantenedor no GitHub</a>.</p>

    <h2>O que ainda falta saber</h2>
    <p>Restam perguntas em aberto: se existiu acesso de administrador ao Slack, quantos clientes e parceiros tiveram o contato exposto, e se a Cathedral extraiu mais do que o necessário para provar a falha. Também não está claro se haverá consequências legais, já que a Anthropic fala em violação das regras do programa e comunicou autoridades federais. Os dois lados mantêm versões diferentes, e vale acompanhar novos esclarecimentos.</p>

    <p>Este texto é análise nossa a partir da reportagem do The Decoder, que por sua vez cita a cobertura do Washington Post e declarações de integrantes da Anthropic e da Cathedral. A notícia veio de uma fonte principal e os detalhes acima refletem o que essa reportagem informa, sem confirmação independente adicional.</p>
  `,
};
