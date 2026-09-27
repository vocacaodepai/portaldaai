import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "empregos-que-a-ia-vai-transformar-como-se-preparar",
  title: "Empregos que a IA vai transformar: como se preparar em 2026",
  seoTitle: "Empregos que a IA vai transformar e como se preparar",
  excerpt:
    "Empregos que a IA vai transformar: o que dizem Stanford e OIT, quais tarefas mudam em cada profissão e um plano de 90 dias para se preparar sem voltar do zero.",
  metaDescription:
    "Veja os empregos que a IA vai transformar segundo Stanford e OIT, quais tarefas mudam em atendimento, administrativo, conteúdo e vendas, e um plano de 90 dias para se preparar.",
  category: "futuro",
  date: "2026-09-06",
  updated: "2026-09-27",
  readTime: 8,
  imageQuery: "future of work office people",
  seed: 8,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA transforma tarefas dentro das profissões antes de eliminar profissões inteiras: a OIT estima que um em cada quatro trabalhadores no mundo está em ocupação com alguma exposição à IA generativa.",
    "As tarefas mais afetadas são repetitivas e baseadas em texto ou dados; julgamento, relacionamento e responsabilidade por decisões seguem com as pessoas.",
    "Um plano de 90 dias (mapear tarefas, dominar uma ferramenta na sua área, documentar resultados) é o que separa quem supervisiona a IA de quem compete com ela.",
  ],
  sources: [
    { label: "Stanford HAI: AI Index Report 2025", url: "https://hai.stanford.edu/ai-index/2025-ai-index-report" },
    { label: "OIT: Generative AI and Jobs, índice global de exposição ocupacional", url: "https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure" },
    { label: "Microsoft: Work Trend Index 2026", url: "https://www.microsoft.com/en-us/worklab/work-trend-index" },
    { label: "Ministério do Trabalho e Emprego: Novo Caged", url: "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/novo-caged" },
  ],
  content: `
    <p>Os empregos que a IA vai transformar não são só os de tecnologia. Atendimento, administrativo, contabilidade, redação, vendas e programação já têm tarefas inteiras sendo feitas por assistentes de IA. O que os dados mostram até agora é que a IA muda o conteúdo do trabalho antes de eliminar o cargo, e quem entende essa diferença consegue se preparar com um plano, não com medo.</p>

    <p>Este guia reúne o que dizem Stanford e a Organização Internacional do Trabalho, mostra profissão por profissão quais tarefas mudam e o que fica com a pessoa, traz um exemplo brasileiro com números e termina com um plano de 90 dias e os erros mais comuns de quem tenta "se proteger" da IA do jeito errado.</p>

    <h2>O que os dados dizem sobre os empregos que a IA vai transformar</h2>
    <p>Dois números ajudam a dimensionar. O <a href="https://hai.stanford.edu/ai-index/2025-ai-index-report" rel="noopener noreferrer">AI Index 2025, da Universidade Stanford</a>, registra que 78% das organizações declararam usar IA em 2024, contra 55% no ano anterior. Ou seja, a adoção nas empresas deixou de ser exceção. E o mesmo relatório aponta que, nos estudos analisados, a IA aumenta a produtividade e, na maioria dos casos, reduz a distância entre trabalhadores mais e menos experientes.</p>
    <p>Do lado dos empregos, o <a href="https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure" rel="noopener noreferrer">índice de exposição ocupacional da OIT</a> estima que um em cada quatro trabalhadores no mundo está em uma ocupação com alguma exposição à IA generativa, mas só 3,3% do emprego global está na faixa de exposição mais alta, aquela em que a maior parte das tarefas pode ser automatizada. A exposição também é desigual: 34% do emprego em países de alta renda contra 11% nos de baixa renda, e mulheres estão mais representadas na faixa mais alta (4,7% contra 2,4% dos homens), por causa da concentração em funções administrativas.</p>
    <p>Traduzindo: a maioria dos empregos vai mudar, poucos vão sumir de vez, e o impacto chega primeiro onde há muita tarefa de escritório repetitiva. O Brasil, com um mercado grande de serviços e administrativo, está no meio dessa curva. Para acompanhar o emprego formal mês a mês, o <a href="https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/novo-caged" rel="noopener noreferrer">Novo Caged, do Ministério do Trabalho</a>, publica admissões, desligamentos e saldo por setor.</p>

    <h2>Tarefas, não profissões: como a mudança acontece na prática</h2>
    <p>Nenhuma dessas profissões acaba amanhã. O que acontece é que uma fatia das horas de trabalho migra para a IA e a pessoa passa a revisar, decidir e se relacionar. A tabela resume o que já se vê no dia a dia de empresas brasileiras que adotaram assistentes de IA.</p>
    <table>
      <thead>
        <tr><th>Profissão</th><th>Tarefas que a IA absorve</th><th>O que fica com a pessoa</th></tr>
      </thead>
      <tbody>
        <tr><td>Atendimento ao cliente</td><td>Perguntas frequentes, triagem, status de pedido</td><td>Reclamação, negociação, casos fora do padrão</td></tr>
        <tr><td>Assistente administrativo</td><td>Planilhas, relatórios simples, agendamento, atas</td><td>Priorização, relacionamento com fornecedores, decisão</td></tr>
        <tr><td>Redator e social media</td><td>Primeira versão de textos, variações, legendas</td><td>Ângulo, apuração, voz da marca, aprovação</td></tr>
        <tr><td>Contador e analista financeiro</td><td>Conferência de lançamentos, classificação, resumo de extratos</td><td>Planejamento tributário, orientação ao cliente, responsabilidade legal</td></tr>
        <tr><td>Vendedor</td><td>Prospecção inicial, e-mails de follow-up, propostas padrão</td><td>Fechamento, relacionamento, leitura do cliente</td></tr>
        <tr><td>Programador</td><td>Código repetitivo, testes, documentação</td><td>Arquitetura, decisão de produto, revisão do que a IA escreveu</td></tr>
      </tbody>
    </table>
    <p>Atendimento é o caso mais visível, e <a href="/artigos/como-ia-esta-mudando-atendimento-ao-cliente">como a IA está mudando o atendimento ao cliente</a> mostra onde a máquina entra e onde a pessoa continua indispensável. No administrativo, o ganho começa em <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">automatizar relatórios no Excel e no Sheets</a>, e quem faz isso primeiro na equipe costuma virar referência.</p>

    <h2>Agentes de IA: o próximo degrau da transformação</h2>
    <p>Até 2024, a IA respondia perguntas. A partir de 2025, ela passou a executar tarefas de ponta a ponta: abrir sistemas, preencher formulários, disparar e-mails, gerar o relatório e enviar. O <a href="https://www.microsoft.com/en-us/worklab/work-trend-index" rel="noopener noreferrer">Work Trend Index 2026, da Microsoft</a>, descreve exatamente esse movimento: agentes assumindo a execução, e a pergunta passando a ser se as empresas estão organizadas para aproveitar isso.</p>
    <p>Para o trabalhador, o ponto é que a tarefa de "executar" perde valor e a de "definir o que executar e conferir o resultado" ganha. O guia <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA explicados de forma simples</a> mostra como eles funcionam, e <a href="/artigos/como-humanos-e-agentes-de-ia-vao-trabalhar-juntos-no-futuro">como humanos e agentes vão trabalhar juntos</a> detalha o novo papel de supervisão que está aparecendo em várias funções.</p>
    <p>Há um efeito colateral positivo: times pequenos passam a fazer o que antes exigia departamento. <a href="/artigos/como-times-pequenos-competem-com-grandes-empresas-usando-ia">Como times pequenos competem com grandes empresas usando IA</a> traz casos disso, e é aí que surgem funções novas, listadas em <a href="/artigos/profissoes-que-vao-surgir-por-causa-da-ia">profissões que vão surgir por causa da IA</a>. Um estudo da OpenAI, coberto em <a href="/noticias/openai-pesquisa-trabalhadores-novas-formas-de-trabalhar">trabalhadores expandindo funções com apoio de IA</a>, observou profissionais assumindo tarefas fora do próprio cargo com ajuda do ChatGPT e incorporando essas tarefas à rotina.</p>

    <h2>Exemplo brasileiro: a assistente administrativa que virou analista</h2>
    <p>Pense em uma assistente administrativa de uma distribuidora em Goiânia, salário de R$ 2.800, que passa metade do dia montando relatórios de vendas no Excel e respondendo e-mails de representantes. A empresa contrata um plano do Microsoft 365 com Copilot e avisa que "a IA vai ajudar". Ela tem duas escolhas: esperar ver o que acontece ou aprender a ferramenta antes de todo mundo.</p>
    <p>Um caminho realista de 90 dias: no primeiro mês, ela usa o Copilot para montar os relatórios que já fazia, anotando quanto tempo economizou (de quatro horas para uma por dia, em um cenário conservador). No segundo, usa as três horas livres para cruzar dados que ninguém olhava, como produtos com queda de venda por região, e leva a análise ao gerente. No terceiro, documenta o processo para os colegas e propõe assumir a rotina de relatórios da equipe comercial inteira.</p>
    <p>O que muda no fim: a função dela passa de "quem monta a planilha" para "quem explica o que a planilha diz". Isso costuma vir com renegociação de cargo e salário, mas não é garantia; depende da empresa, do setor e de como ela apresenta o resultado. O guia sobre <a href="/artigos/como-negociar-salario-melhor-sabendo-usar-ia">negociar salário melhor sabendo usar IA</a> mostra como transformar horas economizadas em argumento, e <a href="/artigos/como-se-tornar-referencia-em-ia-na-empresa-sem-ser-do-ti">virar referência em IA na empresa sem ser do TI</a> descreve o mesmo movimento em outras funções.</p>

    <h2>Plano de 90 dias para se preparar</h2>
    <ul class="checklist">
      <li>Semanas 1 e 2: liste todas as tarefas da sua semana e marque as repetitivas e baseadas em texto ou dados. Essas são as primeiras que a IA vai pegar. Use o prompt abaixo para acelerar.</li>
      <li>Semanas 3 a 6: escolha uma ferramenta que a sua área já usa (Copilot, Gemini, ChatGPT) e aplique em uma tarefa por semana. Anote tempo antes e depois.</li>
      <li>Semanas 7 a 10: aprenda o que não se automatiza no seu cargo: negociação, apresentação de resultado, decisão com dados incompletos. Peça feedback de alguém sênior.</li>
      <li>Semanas 11 a 13: documente os resultados em números e atualize currículo e LinkedIn. <a href="/artigos/como-colocar-habilidades-de-ia-no-curriculo">Colocar habilidades de IA no currículo</a> mostra como escrever isso sem parecer modismo.</li>
    </ul>
    <p>O prompt para a primeira etapa, em qualquer assistente:</p>
    <pre><code>Sou [cargo] em uma empresa de [setor] no Brasil. Vou listar minhas tarefas semanais com o tempo médio de cada uma. Classifique cada tarefa em três grupos: (1) a IA já faz bem hoje com supervisão, (2) a IA ajuda mas exige revisão pesada, (3) depende de julgamento humano ou relacionamento. Para o grupo 1, sugira uma ferramenta acessível e o primeiro passo prático. Não invente ferramentas.

Tarefas:
[cole aqui]</code></pre>
    <p>Depois do mapeamento, use este segundo prompt para montar um plano de estudo curto:</p>
    <pre><code>Com base na lista anterior, monte um plano de 6 semanas para eu dominar as tarefas do grupo 1 usando [ferramenta]. Uma tarefa por semana, com: o que fazer, quanto tempo reservar (máximo 3 horas por semana), como medir o ganho e um risco a evitar. Linguagem simples, sem jargão.</code></pre>
    <p>Quem quer estruturar isso melhor encontra método em <a href="/artigos/como-usar-ia-para-identificar-fechar-lacunas-de-habilidades">identificar e fechar lacunas de habilidades com IA</a>.</p>

    <h2>Erros comuns de quem tenta se proteger da IA</h2>
    <p>O primeiro erro é fazer curso genérico de "IA para todos" e não aplicar nada no trabalho. Certificado sem resultado não protege ninguém; o que conta é a tarefa que você passou a fazer em um terço do tempo. O segundo é tentar aprender tudo: <a href="/artigos/como-lidar-pressao-de-ter-que-saber-tudo-de-ia-no-trabalho">a pressão de ter que saber tudo de IA</a> paralisa mais do que ajuda, e uma ferramenta bem dominada vale mais que dez conhecidas de vista.</p>
    <p>O terceiro erro é ignorar o que não se automatiza. Muita gente corre para aprender prompt e esquece que negociação, apresentação e relacionamento são o que segura a cadeira quando a execução vira commodity. O quarto é achar que mudar de área resolve: <a href="/artigos/como-migrar-de-carreira-para-area-de-ia">migrar de carreira para a área de IA</a> faz sentido para alguns, mas na maioria dos casos a vantagem está em ser a pessoa da sua área que domina IA, e o debate entre <a href="/artigos/especialista-em-nicho-de-ia-ou-generalista-o-que-vale-mais">especialista em nicho ou generalista</a> ajuda a decidir.</p>
    <p>E se a mudança já aconteceu com você, o caminho existe: <a href="/artigos/como-se-recolocar-no-mercado-depois-de-ser-substituido-por-automacao">se recolocar depois de ser substituído por automação</a> trata do que fazer nos primeiros 60 dias, sem romantizar.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Desconfie de quem promete que "a IA vai acabar com 40% dos empregos até 2030" ou, no outro extremo, que "nada vai mudar". Os dados da OIT e de Stanford citados acima mostram exposição ampla e eliminação concentrada. Planeje para o cenário do meio.</p></div>

    <h2>Sinais para acompanhar nos próximos anos</h2>
    <p>Três indicadores dizem mais do que manchete. O saldo de empregos por setor no Novo Caged, para ver se administrativo e atendimento perdem vagas ou apenas mudam de perfil. As descrições de vaga na sua área: quando "uso de ferramentas de IA" aparecer como requisito, e não como diferencial, o relógio acelerou. E a adoção pelas pessoas: um relatório da Microsoft indicou que <a href="/noticias/microsoft-ia-generativa-atinge-17-8-por-cento-populacao-ativa">17,8% da população mundial em idade ativa já usava IA generativa</a> no primeiro trimestre de 2026.</p>
    <p>O padrão histórico também ajuda: toda grande tecnologia eliminou algumas funções e criou outras que não existiam. A diferença desta vez é a velocidade. Quem se atualiza cedo tende a estar do lado das novas funções; quem espera "ver como fica" costuma descobrir tarde. Não é motivo para pânico, é motivo para começar o plano de 90 dias nesta semana.</p>

    <p>Escolha uma tarefa repetitiva da sua semana, rode o primeiro prompt deste artigo e reserve três horas para aplicar o que sair. A categoria <a href="/categoria/futuro">Futuro do Trabalho</a> acompanha as próximas mudanças, e a de <a href="/categoria/carreira">Carreira</a> mostra como transformar isso em posição melhor no mercado.</p>
  `,
  faq: [
    {
      question: "Quais empregos a IA vai substituir primeiro?",
      answer:
        "Os dados da OIT apontam que a exposição mais alta está em funções administrativas e de escritório com muita tarefa repetitiva baseada em texto e dados: atendimento de primeiro nível, digitação e conferência, relatórios padronizados, redação de primeira versão. Mesmo nesses casos, só 3,3% do emprego global está na faixa em que a maior parte das tarefas pode ser automatizada. O mais comum é a função mudar de conteúdo.",
    },
    {
      question: "A IA vai acabar com os empregos no Brasil?",
      answer:
        "Não há evidência disso nos dados disponíveis. A OIT estima que um em cada quatro trabalhadores no mundo está em ocupação com alguma exposição à IA generativa, mas a eliminação total é concentrada em poucas funções. No Brasil, o impacto tende a chegar primeiro em administrativo e atendimento. Para acompanhar, o Novo Caged do Ministério do Trabalho publica o saldo de empregos formais por setor todo mês.",
    },
    {
      question: "Quais profissões são mais seguras contra a IA?",
      answer:
        "As que dependem de presença física, julgamento em situações imprevisíveis e relacionamento: saúde, cuidados, obras e manutenção, vendas consultivas, gestão de pessoas, ensino presencial. Mesmo nelas, a parte administrativa do trabalho vai mudar. Segurança de verdade vem de combinar a habilidade central da sua área com fluência nas ferramentas de IA que a área adota.",
    },
    {
      question: "Como me preparar para a IA no trabalho sem ser da área de tecnologia?",
      answer:
        "Mapeie as tarefas repetitivas da sua semana, escolha a ferramenta que sua empresa já usa (Copilot, Gemini ou ChatGPT) e aplique em uma tarefa por semana durante seis semanas, anotando o tempo economizado. Depois invista no que não se automatiza: apresentar resultado, negociar, decidir com dados incompletos. Documente os ganhos em números e leve para o currículo e para a conversa com o gestor.",
    },
    {
      question: "Vale a pena mudar de carreira por causa da IA?",
      answer:
        "Para a maioria, não é necessário. A vantagem mais acessível está em ser a pessoa da sua área que domina IA, porque você já tem o conhecimento do negócio que a ferramenta não tem. Mudar faz sentido se a sua função está na faixa de exposição mais alta e você não gosta do que resta dela. Nesse caso, migre para uma área vizinha, aproveitando o que já sabe, em vez de recomeçar do zero.",
    },
  ],
  quiz: [
    {
      question: "Segundo o índice da OIT citado no artigo, qual parcela do emprego global está na faixa de exposição mais alta à IA generativa?",
      options: ["Cerca de 25%", "Cerca de 3,3%", "Cerca de 78%"],
      answer: 1,
      explanation:
        "Um em cada quatro trabalhadores está em ocupação com alguma exposição, mas só 3,3% do emprego global está na faixa mais alta. Os 78% se referem às organizações que declararam usar IA em 2024, segundo o AI Index de Stanford.",
    },
    {
      question: "Qual é o primeiro passo do plano de 90 dias proposto no artigo?",
      options: [
        "Fazer um curso genérico de IA e tirar certificado",
        "Listar as tarefas da semana e marcar as repetitivas baseadas em texto ou dados",
        "Mudar de área para tecnologia",
      ],
      answer: 1,
      explanation:
        "O plano começa por mapear as tarefas, porque são as repetitivas e baseadas em texto ou dados que a IA absorve primeiro. Curso sem aplicação e mudança de área aparecem no artigo como erros comuns.",
    },
  ],
};
