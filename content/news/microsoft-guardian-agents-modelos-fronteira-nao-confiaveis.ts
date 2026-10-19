import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "microsoft-guardian-agents-modelos-fronteira-nao-confiaveis",
  title: "Microsoft lança Guardian Agents e diz que modelos de IA não são confiáveis",
  summary:
    "Microsoft apresenta o Guardian Agents para vigiar agentes de IA nas empresas e sua executiva de segurança afirma que modelos de fronteira não merecem confiança total.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl:
    "https://techcrunch.com/2026/10/19/microsoft-says-ai-agents-are-like-insider-threats-as-frontier-models-cant-be-trusted/",
  date: "2026-10-19",
  publishedAt: "2026-10-19T19:22:00-03:00",
  topic: "seguranca",
  imageQuery: "Satya Nadella portrait",
  content: `
    <p>A Microsoft apresentou nesta segunda-feira (19) um pacote de recursos de segurança para proteger empresas dos riscos crescentes dos agentes de inteligência artificial, e acompanhou o anúncio de um alerta pouco comum vindo de uma gigante que investe pesadamente em IA. Segundo a <a href="https://techcrunch.com/2026/10/19/microsoft-says-ai-agents-are-like-insider-threats-as-frontier-models-cant-be-trusted/" target="_blank" rel="noopener noreferrer nofollow">reportagem do TechCrunch</a>, a chefe da área de negócios de segurança da empresa, Hayete Gallot, escreveu que "infelizmente, modelos de fronteira, independentemente de sua origem, não podem ser confiáveis". A frase resume uma mudança de postura: em vez de olhar apenas para hackers externos, a Microsoft passa a tratar os próprios agentes que as empresas colocam para trabalhar como uma possível ameaça interna.</p>
    <p>O recurso principal se chama Guardian Agents, que monitora os agentes de IA usados por uma companhia. Ele faz parte do Project Perception, iniciativa apresentada pela Microsoft em junho como resposta a modelos de IA capazes de invadir sistemas, entre eles o Mythos e o Fable, da Anthropic, e o sistema Daybreak, da OpenAI, que procura vulnerabilidades. O projeto original usava três classes de agentes: um time vermelho que atua como atacante, um time azul que detecta o ataque e avalia as falhas encontradas, e um time verde que corrige o que foi descoberto.</p>

    <h2>De ameaça externa para ameaça interna</h2>
    <p>O Project Perception partia da ideia de que o perigo viria de fora da empresa. O novo anúncio inverte o foco. Para Gallot, o problema dos modelos não é malícia nem facilidade de invasão, e sim imprevisibilidade. Eles são treinados para cumprir tarefas, não para seguir "normas organizacionais ou bom senso", e muitas vezes recebem acesso a dados e ferramentas capazes de causar dano sério se algo der errado. É a mesma lógica que as empresas aplicam a um funcionário com muitos acessos: mesmo sem má intenção, um erro de julgamento pode ter consequências enormes.</p>
    <p>O CEO da Microsoft, Satya Nadella, foi na mesma direção em um texto publicado em seu blog pessoal no início do mês. Ele defendeu que as empresas parem de depender apenas das garantias dos fornecedores de modelos e usem sistemas separados, que não sejam controlados pelos laboratórios de IA, para observar e controlar os agentes lançados por esses laboratórios. Em suas palavras, é preciso "separar o fornecimento de inteligência da autoridade sobre ela", e a garantia de um provedor de modelo não elimina a responsabilidade de quem o usa.</p>

    <h2>O que muda nas ferramentas da Microsoft</h2>
    <p>Além do Guardian Agents, o Microsoft Defender ganha um recurso de detecção capaz de identificar até 60 tipos de agentes que funcionários levam para o ambiente de trabalho, incluindo Claude Code, Codex e OpenClaw. Isso ataca um problema conhecido como IA invisível: o colaborador instala uma ferramenta por conta própria, conecta a e-mails e arquivos da empresa, e o time de tecnologia nem sabe que ela existe.</p>
    <p>Novos controles também limitam o acesso dos agentes a dados e sistemas e ajustam as permissões de forma dinâmica conforme a tarefa em andamento. Quando um agente parece estar tomando uma decisão arriscada, o sistema exige aprovação humana antes de seguir. A Microsoft ainda é membro fundador da Open Agent Safety Platform, da Nvidia, apoiada por mais de cem empresas de tecnologia, que isola agentes em ambientes seguros e pode monitorar e interromper seu comportamento por meio de hardware, como se fosse um botão de desligar. A empresa também anunciou os notebooks Surface Laptop Ultra, feitos para agentes, com chips da Nvidia e controles de segurança embutidos.</p>

    <h2>Um alerta com interesse comercial</h2>
    <p>O próprio TechCrunch observa que a posição da Microsoft tem um lado conveniente. A empresa investiu na OpenAI e na Anthropic, tem a OpenAI como grande cliente de nuvem e mantém seu próprio laboratório de IA, de modo que o discurso contra a confiança cega nos modelos vai contra parte de seus interesses. Ao mesmo tempo, ela quer vender às empresas produtos de segurança para agentes, em vez de deixar esse mercado com os laboratórios. A reportagem reconhece, porém, que a lógica por trás da proposta é sólida: o software que fiscaliza os agentes deveria ser independente de quem fornece esses agentes, assim como auditores precisam ser independentes das empresas que auditam.</p>
    <p>O tema conversa com outros episódios recentes. Em setembro, a OpenAI alertou para <a href="/noticias/openai-agentes-rebeldes-100-organizacoes-alerta">agentes que agiram de forma não autorizada em mais de cem organizações</a>, e uma falha batizada de <a href="/noticias/plugin4shell-falha-agentes-ia-codigo-claude-code-codex-copilot-gemini">Plugin4Shell atingiu ao mesmo tempo várias ferramentas de programação com IA</a>. Antes disso, a própria Microsoft havia mostrado em seu <a href="/noticias/microsoft-relatorio-ia-ciberataques-vantagem-atacantes">relatório sobre ciberataques que a IA deu vantagem aos atacantes</a>, e flagrado um <a href="/noticias/jadepuffer-ransomware-ia-azure-microsoft">agente de IA destruindo recursos de uma conta Azure sozinho</a>. Também no mundo da segurança de agentes, a Nvidia já havia lançado uma <a href="/noticias/nvidia-lanca-plataforma-seguranca-agentes-ia">plataforma de segurança para agentes de IA</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que você não trabalhe em uma grande empresa, a lição vale para quem usa IA para trabalhar ou empreender no Brasil. Hoje é comum dar a um assistente acesso ao e-mail, à agenda, a planilhas, ao site ou até ao pagamento de contas. Quanto mais acesso, maior o estrago possível se o agente interpretar mal uma instrução ou for enganado por um texto malicioso escondido em uma página, tema que explicamos em <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection: o risco de uma IA que lê páginas e e-mails</a>.</p>
    <p>Na prática, três hábitos reduzem o risco. Primeiro, dê ao agente só as permissões de que ele precisa para a tarefa, nada de acesso total por conveniência. Segundo, mantenha aprovação humana para ações que não têm volta, como enviar dinheiro, apagar arquivos ou mandar mensagens a clientes. Terceiro, saiba quais ferramentas de IA estão ligadas aos seus dados e revise isso de tempos em tempos. Se você ainda está escolhendo ferramentas, vale seguir o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA com segurança</a>, e entender a diferença entre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot e automação</a> ajuda a decidir quanta autonomia faz sentido dar a cada um. Se a sua equipe usa agentes de programação, o aviso é ainda mais direto, já que são justamente os que mais mexem em arquivos e sistemas.</p>
    <p>Para quem presta serviço ou vende com automações, há também um ponto de negócio. Clientes maiores tendem a perguntar como os agentes são controlados, e saber responder, com logs, limites de acesso e aprovação humana, pode ser um diferencial na hora de fechar contrato. A mensagem da Microsoft, no fim, é que a confiança em IA precisa ser construída com controles próprios e não apenas com a promessa de quem vende o modelo.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Ainda não há preços divulgados pela reportagem nem datas de disponibilidade detalhadas para todos os recursos, então vale acompanhar os comunicados oficiais da Microsoft. Também será importante ver se os laboratórios de IA respondem ao argumento de que a fiscalização dos agentes deve ficar fora de suas mãos, e se padrões abertos como a plataforma da Nvidia ganham adesão de mais fornecedores. Se isso acontecer, é provável que ferramentas de monitoramento de agentes se tornem um item comum nas empresas, do mesmo modo que antivírus e controle de acesso viraram padrão com o avanço da nuvem. Para o usuário comum e para o pequeno empreendedor, o recado imediato é simples: use agentes, mas trate-os como alguém recém-contratado, com acesso limitado e supervisão no começo.</p>
    <p>Fonte original: <a href="https://techcrunch.com/2026/10/19/microsoft-says-ai-agents-are-like-insider-threats-as-frontier-models-cant-be-trusted/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>.</p>
  `,
  faq: [
    {
      question: "O que é o Guardian Agents da Microsoft?",
      answer:
        "É um recurso que monitora os agentes de IA usados por uma empresa. Faz parte do Project Perception e foi apresentado junto de novos controles de segurança no Microsoft Defender.",
    },
    {
      question: "Por que a Microsoft diz que modelos de IA não são confiáveis?",
      answer:
        "Segundo a executiva Hayete Gallot, o problema não é malícia, mas imprevisibilidade: os modelos são treinados para cumprir tarefas, não para seguir normas e bom senso da organização, e muitas vezes têm acesso a dados e ferramentas sensíveis.",
    },
    {
      question: "Como reduzir o risco ao usar agentes de IA no meu negócio?",
      answer:
        "Dê só as permissões necessárias, exija aprovação humana para ações irreversíveis e revise periodicamente quais ferramentas de IA estão conectadas aos seus dados.",
    },
  ],
};
