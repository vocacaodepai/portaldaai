import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-agente-ia-transforma-correcoes-em-ataques-sem-humano",
  title: "Google flagra agente de IA que cria e dispara ataques sem ajuda humana",
  summary:
    "Relatório do Google mostra pela primeira vez um sistema de IA que lê correções de segurança, escreve o ataque e o executa sozinho, sem humano no processo.",
  author: "Bruno Danello",
  sourceName: "Google Threat Intelligence Group, SiliconANGLE",
  sourceUrl: "https://cloud.google.com/blog/topics/threat-intelligence/agentic-threat-activity-crosses-a-significant-threshold",
  date: "2026-11-16",
  publishedAt: "2026-11-16T16:11:00-03:00",
  topic: "seguranca",
  imageQuery: "Google Cloud logo",
  content: `
    <p>Um limite que os pesquisadores de segurança vinham prevendo foi cruzado. O Google Threat Intelligence Group (GTIG), a divisão de inteligência de ameaças do Google que trabalha com a Mandiant, publicou nesta segunda-feira, 16 de novembro, um relatório em que diz ter encontrado, pela primeira vez, um sistema de ataque que descobre e explora falhas de segurança de forma totalmente automática, "sem um humano no circuito", nas palavras do próprio relatório.</p>
    <p>O sistema, chamado pelos operadores de <strong>exploit_agent</strong>, estava num servidor de testes exposto na internet. Segundo o GTIG, ele comparava continuamente o código de aplicações web populares antes e depois de cada correção publicada, identificava o que a correção tinha consertado, escrevia um ataque para explorar a falha em quem ainda não tinha atualizado e executava esse ataque sozinho. Na edição anterior do mesmo relatório, dois meses atrás, o Google ainda não tinha visto nada assim em uso real.</p>

    <h2>O que se sabe</h2>
    <p>De acordo com o relatório, o exploit_agent era ligado a vários modelos de linguagem, tanto modelos de fronteira acessados por API quanto modelos rodando localmente. O mesmo servidor guardava dados roubados de vítimas, scripts de força bruta para adivinhar senhas, instaladores de webshell (um tipo de porta dos fundos em sites) e até scripts para apagar webshells deixados por grupos rivais. Os sinais de vítimas apontam para sites franceses de mídia, entretenimento e educação. Segundo o SiliconANGLE, um comentário em russo no arquivo de configuração pedia que as chaves de API dos modelos fossem coladas "aqui mesmo, não no chat".</p>
    <p>O GTIG cita como exemplo a análise de um plugin de WordPress com uma checagem de permissão mal feita, que deixava uma rota acessível sem login. O relatório também lembra o caso da PaperCut, software de gestão de impressão usado em empresas e escolas: duas falhas encadeadas foram exploradas em agosto, pesquisadores produziram ataques funcionais com ajuda de modelos de linguagem em menos de um dia após a divulgação e, segundo a GreyNoise, uma campanha contra centenas de organizações começou quatro dias depois. Em um dos casos, o invasor chegou ao controle total da rede da empresa em minutos.</p>
    <p>Os números gerais ajudam a dar escala. Segundo o Google, a divulgação de falhas e de ataques quase dobrou entre janeiro e agosto de 2026, e a média de falhas exploradas antes de existir correção (as chamadas zero-day) subiu de 8 por mês em 2025 para 11 por mês em 2026, com pico de 22 em agosto. A leitura do GTIG é que a IA torna mais eficiente atacar falhas já corrigidas, porque o material de partida (a correção, as notas de versão, as provas de conceito) é público e limitado.</p>
    <p>O relatório lista ainda outros usos ofensivos de agentes de IA. Ferramentas abertas de teste de invasão, como CAIRN, PentAGI e ARTEX, foram usadas por criminosos para automatizar etapas de ataques, inclusive contra o setor aeroespacial dos EUA. O <a href="/noticias/hackers-chineses-artex-ia-connectwise-2250-tenants-microsoft">ARTEX já apareceu aqui</a> no ataque a mais de 2.250 empresas. Um grupo suspeito de ligação com a Coreia do Norte, chamado pelo Google de MIDNIGHT NEPTUNE, alterou o arquivo <code>.claude/settings.json</code> em repositórios internos de vítimas para que, ao abrir o Claude Code, a máquina baixasse automaticamente uma porta dos fundos. E uma empresa terceirizada montou, com a API do Gemini e de outros provedores, uma plataforma para operar mais de 100 mil perfis falsos em redes sociais. O Google diz ter desativado as contas e recursos ligados ao uso indevido do Gemini.</p>
    <p>Há também a parte financeira. O relatório retoma o tema do roubo de credenciais de serviços de IA, que o Portal da AI já tratou quando o Google mostrou que <a href="/noticias/google-mandiant-llmjacking-chaves-api-ia-roubadas-1-milhao">chaves de IA roubadas geram contas de até US$ 1 milhão</a>. Em alguns casos atendidos pela Mandiant, as cobranças fraudulentas passaram de US$ 100 mil em um único dia.</p>

    <h2>O que ainda não está confirmado</h2>
    <p>O Google não diz quem opera o exploit_agent, nem quantos sites foram de fato invadidos por ele, nem quais modelos de IA específicos ele usava. O comentário em russo indica a língua de quem montou a ferramenta, mas não prova nacionalidade nem ligação com governo. O relatório também não informa se alguma vítima fora da França foi atingida, nem se o sistema chegou a mirar sites no Brasil.</p>
    <p>Outro ponto em aberto é o tamanho real da ameaça. O próprio GTIG ressalta que essas ferramentas "trocam discrição por velocidade": rodar ataques sem supervisão gera muito rastro e facilita a detecção. Também cita uma onda de provas de conceito geradas por IA que dizem funcionar e não funcionam. Ou seja, a automação aumenta o volume de tentativas, mas não garante que cada uma dê certo.</p>

    <h2>Por que isso importa para você</h2>
    <p>A consequência mais direta é sobre o tempo entre uma correção sair e o ataque chegar. Antes, uma empresa pequena podia levar semanas para atualizar o site ou o sistema e, na prática, escapava porque ninguém se dava ao trabalho de mirar nela. Com um agente que lê cada correção assim que ela é publicada e já testa o ataque, essa janela encolhe para dias ou horas. Quem tem loja virtual, blog em WordPress ou sistema de gestão exposto na internet precisa tratar atualização de segurança como urgência, não como tarefa para o fim do mês.</p>
    <p>Para quem programa com agentes de IA, o caso do Claude Code é um alerta concreto: arquivos de configuração de assistentes de código viraram alvo, do mesmo jeito que a <a href="/noticias/extensao-falsa-claude-code-marketplace-cursor-5-mil-usuarios">extensão falsa do Claude Code</a> que circulou no Cursor. Vale revisar o que muda nesses arquivos em cada alteração do repositório, como se fosse código.</p>
    <p>E para qualquer empresa que paga por API de IA, a lição é proteger as chaves como se fossem senha de banco: nada de chave em repositório público, limite de gasto configurado e alerta de consumo fora do normal. Um <a href="/artigos/gerenciador-de-senhas-como-escolher-comecar-e-usar-com-seguranca">gerenciador de senhas</a> ajuda no básico, e o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> ajuda a não abrir porta nova sem perceber.</p>
    <p>A análise do Portal da AI é que o relatório marca uma mudança de fase, mais do que uma surpresa técnica. Até aqui, a IA deixava o atacante mais rápido. Agora, em pelo menos um caso documentado, ela faz o ciclo inteiro sozinha. O lado bom é que a mesma tecnologia serve para defesa, e o Google cita ferramentas próprias como Big Sleep e CodeMender, voltadas a encontrar e corrigir falhas. O lado ruim é que quem não atualiza nada continua sendo o alvo mais fácil, e agora com muito menos tempo de folga.</p>
  `,
  faq: [
    {
      question: "O que é o exploit_agent descrito pelo Google?",
      answer:
        "É um sistema com vários agentes de IA que compara o código de aplicações web antes e depois de cada correção de segurança, escreve um ataque para a falha corrigida e o executa sozinho. Segundo o Google, é o primeiro caso visto em uso real sem nenhum humano no processo.",
    },
    {
      question: "Isso afeta sites e empresas no Brasil?",
      answer:
        "O relatório cita vítimas na França e não menciona o Brasil. Mas o método vale para qualquer site que demora a aplicar correções, por isso quem usa WordPress, loja virtual ou sistema exposto na internet deve atualizar o quanto antes.",
    },
    {
      question: "Qual a relação com o Claude Code?",
      answer:
        "Um grupo suspeito de ligação com a Coreia do Norte alterou o arquivo de configuração do Claude Code em repositórios internos das vítimas para que a ferramenta baixasse uma porta dos fundos ao ser aberta. O relatório descreve a alteração desses arquivos, não uma falha no Claude Code.",
    },
  ],
};
