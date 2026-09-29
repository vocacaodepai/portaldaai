import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-se-tornar-referencia-em-ia-na-empresa-sem-ser-do-ti",
  title: "Referência em IA na empresa: como virar essa pessoa sem ser do TI",
  seoTitle: "Como virar referência em IA na empresa sem ser do TI",
  excerpt:
    "Referência em IA na empresa não é cargo de TI: é quem resolve problema real com a ferramenta e ensina o time. Veja o plano de 90 dias, prompts e erros a evitar.",
  metaDescription:
    "Como se tornar referência em IA na empresa sem ser do TI: plano de 90 dias, formatos para compartilhar o que aprendeu, prompts prontos e os erros que queimam a reputação.",
  category: "carreira",
  date: "2026-09-17",
  updated: "2026-09-27",
  readTime: 8,
  imageQuery: "office colleague mentor teaching",
  seed: 44,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Virar referência em IA na empresa depende de resolver um problema real do seu setor com a ferramenta, documentar o resultado e ensinar o time, não de saber programar.",
    "Um plano de 90 dias funciona: 30 dias aplicando em silêncio, 30 dias mostrando resultado com número, 30 dias criando um formato de troca recorrente.",
    "Os erros que mais queimam essa reputação são prometer o que a ferramenta não entrega, colar dado sigiloso em conta pessoal e falar de IA sem exemplo do trabalho de quem ouve.",
  ],
  content: `
    <p>Ser a referência em IA na empresa não exige crachá de TI, curso de programação nem cargo novo. Exige três coisas: resolver um problema real do seu setor com a ferramenta, mostrar o resultado com número e ensinar quem senta do lado. Quem faz isso por 90 dias vira a pessoa que todo mundo procura quando o assunto aparece.</p>

    <p>Este guia é o plano para chegar lá sem parecer vendedor de novidade. Você vai ver o que essa posição significa na prática, por que ela pesa na carreira, um passo a passo em três fases, um cenário brasileiro com valores, prompts prontos e os erros que derrubam essa reputação mais rápido do que ela sobe.</p>

    <h2>O que é ser referência em IA na empresa (e o que não é)</h2>
    <p>Referência interna é a pessoa que o colega procura com uma pergunta concreta: "como você fez aquela planilha se preencher sozinha?", "que ferramenta você usou para resumir a reunião?". Não é quem manda link de notícia no grupo nem quem repete que "a IA vai mudar tudo". É quem já testou no contexto da empresa e sabe dizer o que funciona, o que não funciona e por quê.</p>
    <p>Também não é sinônimo de especialista técnico. O time de TI cuida de segurança, integração e contrato com fornecedor. A referência de negócio cuida de outra coisa: traduzir a ferramenta para a rotina de vendas, RH, financeiro ou atendimento. As duas funções se complementam, e a segunda costuma ficar vaga em empresas pequenas e médias, porque ninguém foi designado para ela.</p>
    <p>Se a sensação de que precisa dominar tudo antes de abrir a boca te trava, o texto sobre <a href="/artigos/como-lidar-pressao-de-ter-que-saber-tudo-de-ia-no-trabalho">a pressão de ter que saber tudo de IA no trabalho</a> ajuda a separar o que importa do que é ruído. A referência interna sabe uma fatia pequena muito bem: a fatia que resolve o trabalho do próprio setor.</p>

    <h2>Por que essa posição pesa mais do que parece</h2>
    <p>Os números mostram um vácuo. No <a href="https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part" rel="noopener noreferrer">Work Trend Index 2024 da Microsoft e do LinkedIn</a>, pesquisa com 31 mil pessoas em 31 países, 75% dos trabalhadores do conhecimento já usavam IA generativa no trabalho, e 78% deles levavam a própria ferramenta para o serviço, sem orientação da empresa. Ou seja: o uso já existe, mas ninguém está organizando.</p>
    <p>Do lado das empresas, o <a href="https://hai.stanford.edu/ai-index/2025-ai-index-report/economy" rel="noopener noreferrer">AI Index 2025 da Universidade Stanford</a> registra que 78% das organizações pesquisadas reportaram uso de IA em 2024, contra 55% no ano anterior, e o uso de IA generativa em pelo menos uma função do negócio saltou de 33% para 71%. Uma <a href="/noticias/microsoft-ia-generativa-atinge-17-8-por-cento-populacao-ativa">medição mais recente da Microsoft</a> coloca o uso de IA generativa em 17,8% da população mundial em idade ativa.</p>
    <p>Quando muita gente usa e pouca gente organiza, quem organiza ganha visibilidade. É esse o argumento que aparece também em <a href="/artigos/como-negociar-salario-melhor-sabendo-usar-ia">como negociar um salário melhor sabendo usar IA</a>: a habilidade vale mais quando está ligada a um resultado que a chefia consegue enxergar. A posição de referência é justamente a vitrine desse resultado.</p>

    <h2>Passo a passo: o plano de 90 dias</h2>
    <p>O plano abaixo funciona para qualquer área. A lógica é simples: primeiro você prova para si mesmo, depois prova para o time, depois cria um hábito coletivo.</p>

    <h3>Dias 1 a 30: aplique em silêncio</h3>
    <ol>
      <li>Escolha uma tarefa repetitiva que toma pelo menos 2 horas por semana (relatório, resposta padrão a cliente, ata de reunião, triagem de currículo).</li>
      <li>Escolha uma ferramenta só. O comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> resolve essa dúvida em dez minutos.</li>
      <li>Anote o antes e o depois: quanto tempo levava, quanto leva agora, o que precisou de correção manual.</li>
      <li>Guarde os prompts que funcionaram num documento simples.</li>
    </ol>

    <h3>Dias 31 a 60: mostre com número</h3>
    <p>Leve o resultado para a reunião de time em dois minutos: "esse relatório levava 3 horas, agora leva 40 minutos, e o que eu ainda reviso é isto". Ofereça mostrar o processo para quem quiser, sem convocar ninguém. Duas ou três pessoas vão pedir. Essas pessoas são o começo da sua reputação.</p>

    <h3>Dias 61 a 90: crie um formato recorrente</h3>
    <p>Pode ser um canal no chat da empresa, um documento vivo de prompts do setor ou 20 minutos quinzenais de "o que testei". O guia de <a href="/artigos/como-usar-ia-para-identificar-fechar-lacunas-de-habilidades">como usar IA para identificar e fechar lacunas de habilidades</a> serve para decidir o que aprender em seguida, porque a partir daqui as perguntas do time vão puxar o seu estudo.</p>

    <h2>Cenário brasileiro: a analista de RH que virou a pessoa da IA</h2>
    <p>Um cenário realista, montado a partir do que esse plano costuma produzir. Uma analista de RH numa empresa de 120 funcionários em Campinas gasta 6 horas por semana triando currículos e escrevendo devolutivas. Ela assina o ChatGPT Plus por conta própria (consulte a página oficial para o preço atual) e passa o primeiro mês montando um prompt que resume cada currículo em cinco linhas contra a descrição da vaga, sem colar nome nem CPF.</p>
    <p>No segundo mês, a triagem cai para 2 horas semanais. Ela apresenta o antes e o depois em uma reunião de gestores e recebe dois pedidos: adaptar o método para o time comercial e ajudar o financeiro a resumir contratos. No terceiro mês, a diretoria aprova um plano Team para 10 pessoas. No <a href="https://claude.com/pricing" rel="noopener noreferrer">Claude Team</a>, por exemplo, o assento custa entre US$ 20 e US$ 25 por mês (verificado em 27/09/2026), e o plano não treina modelos com o conteúdo da empresa por padrão.</p>
    <p>Repare no que aconteceu: ninguém a promoveu. Ela ganhou um projeto, um orçamento e uma cadeira em reunião que antes não frequentava. Esse caminho é o mesmo que descrevemos em <a href="/artigos/como-migrar-de-carreira-para-area-de-ia">como migrar de carreira para a área de IA</a>: a ponte se constrói dentro da função atual, não fora dela.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Dica</span>
      <p>Antes de mostrar qualquer resultado, pergunte ao gestor qual métrica ele acompanha (horas, retrabalho, prazo, reclamações). Apresente o ganho nessa métrica, não em "produtividade" genérica.</p>
    </div>

    <h2>Como compartilhar sem virar a pessoa chata da IA</h2>
    <p>A forma de compartilhar define se você vira referência ou spam. A tabela compara os formatos mais comuns pelo esforço que exigem e pelo efeito que costumam ter em times pequenos.</p>
    <table>
      <thead>
        <tr>
          <th>Formato</th>
          <th>Esforço</th>
          <th>Efeito na reputação</th>
          <th>Quando usar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Link de notícia no grupo</td>
          <td>Baixo</td>
          <td>Quase nulo, às vezes negativo</td>
          <td>Só se vier com "e isso muda X aqui"</td>
        </tr>
        <tr>
          <td>Demonstração de 15 minutos</td>
          <td>Médio</td>
          <td>Alto</td>
          <td>Quando já tem resultado medido</td>
        </tr>
        <tr>
          <td>Documento de prompts do setor</td>
          <td>Médio</td>
          <td>Alto e duradouro</td>
          <td>Depois de 3 ou 4 prompts testados</td>
        </tr>
        <tr>
          <td>Ajuda individual na mesa do colega</td>
          <td>Baixo</td>
          <td>Muito alto</td>
          <td>Sempre que alguém pedir</td>
        </tr>
        <tr>
          <td>Encontro quinzenal "o que testei"</td>
          <td>Alto</td>
          <td>Alto, cria comunidade</td>
          <td>A partir do terceiro mês</td>
        </tr>
      </tbody>
    </table>
    <p>Os melhores casos para compartilhar são os operacionais: <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">ata automática de reunião</a>, <a href="/artigos/ia-para-email-organizar-caixa-de-entrada-responder-mais-rapido">triagem de e-mail</a>, primeira versão de proposta. São tarefas que todo mundo faz e odeia, então o ganho é imediato e visível. Quem quiser levar essa presença para fora da empresa encontra o caminho em <a href="/artigos/como-construir-autoridade-em-ia-no-linkedin-sem-ser-tecnico">como construir autoridade em IA no LinkedIn sem ser técnico</a>.</p>

    <h2>Prompts prontos para os primeiros 30 dias</h2>
    <p>Os três prompts abaixo cobrem o começo do plano. Ajuste o setor e a tarefa; o formato é o que importa. O guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> explica por que contexto, formato de saída e critério de qualidade fazem a diferença.</p>
    <p>Para mapear onde a IA entra no seu trabalho:</p>
    <pre><code>Sou analista de [setor] numa empresa de [n] funcionários. Minhas tarefas semanais são: [liste 6 a 10 tarefas com o tempo gasto em cada uma]. Classifique cada tarefa em: (a) IA resolve quase sozinha, (b) IA acelera mas preciso revisar, (c) melhor não usar IA. Justifique em uma linha e sugira por onde começar.</code></pre>
    <p>Para transformar um resultado em apresentação de dois minutos:</p>
    <pre><code>Tenho estes dados: tarefa [nome], tempo antes [x horas/semana], tempo depois [y horas/semana], o que ainda reviso manualmente [descreva]. Escreva um roteiro falado de 2 minutos para apresentar isso ao meu time, em tom direto, sem exagero, terminando com um convite para quem quiser ver o processo.</code></pre>
    <p>Para montar o documento de prompts do setor:</p>
    <pre><code>Organize os prompts abaixo num documento para colegas de [setor] que nunca usaram IA. Para cada prompt: título de 5 palavras, quando usar, o texto do prompt com campos entre colchetes, e um aviso sobre que tipo de dado não pode ser colado. Prompts: [cole aqui].</code></pre>

    <h2>Erros comuns de quem tenta virar referência</h2>
    <p>Alguns erros derrubam a reputação em uma semana. O primeiro é prometer o que a ferramenta não entrega: dizer que "a IA faz o relatório sozinha" e o colega descobrir que precisa revisar metade. Apresente sempre o que ainda exige revisão. O segundo é falar de IA em abstrato, sem exemplo do trabalho de quem está ouvindo. A lista de <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">erros de quem está começando com IA</a> vale ser lida antes de ensinar qualquer pessoa.</p>
    <p>O terceiro erro é o mais caro: colar dados de cliente, folha de pagamento ou contrato em uma conta pessoal gratuita. O <a href="https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-overview" rel="noopener noreferrer">Microsoft Learn</a> explica que o Copilot Chat com conta corporativa roda sob a proteção de dados empresarial, enquanto contas pessoais seguem outras regras. Antes de qualquer demonstração com dado real, confira o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança para escolher ferramenta de IA</a> e o que você <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">entrega sem perceber ao usar essas ferramentas</a>.</p>
    <div class="callout-box callout-bad">
      <span class="callout-label">Nunca faça</span>
      <p>Nunca cole dado pessoal de cliente ou funcionário (nome, CPF, salário, diagnóstico) em ferramenta gratuita com conta pessoal. Anonimize antes ou use conta corporativa com contrato que impeça o treinamento com seus dados.</p>
    </div>
    <p>O quarto erro é guardar o conhecimento para se proteger. Parece estratégico, mas produz o oposto: referência é quem multiplica, não quem retém. Se aparecer o receio de que usar IA diminui o seu mérito, leia sobre a <a href="/artigos/sindrome-do-impostor-usar-ia-nao-te-torna-menos-capaz">síndrome do impostor na era da IA</a>.</p>

    <h2>Quando não vale assumir esse papel</h2>
    <p>Há situações em que forçar a posição de referência é um erro. Se a empresa proibiu formalmente o uso de IA e você está usando por conta, o caminho é conversar com o gestor sobre um piloto, não virar a pessoa que burla a regra. Se o seu setor lida com dado sensível sob sigilo legal (saúde, jurídico, folha) e não há ferramenta corporativa contratada, o melhor movimento é pedir a contratação, com o argumento de custo por assento e de proteção de dados em mãos.</p>
    <p>Também não vale se você não gosta de ensinar. A posição consome tempo respondendo pergunta repetida, e sem gosto por isso vira fardo. Nesse caso, use a IA para o seu próprio trabalho e deixe a função de multiplicador para quem tem perfil. Vale lembrar que o cenário muda rápido: a discussão sobre <a href="/artigos/como-humanos-e-agentes-de-ia-vao-trabalhar-juntos-no-futuro">como humanos e agentes de IA vão trabalhar juntos</a> mostra que a referência de hoje precisará atualizar o próprio papel em pouco tempo.</p>

    <p>Comece pela tarefa de 2 horas semanais que você mais odeia, meça o antes e o depois e mostre para o time em dois minutos. Em 90 dias, a pergunta "quem entende de IA aqui?" vai ter o seu nome como resposta. Quando chegar lá, o passo seguinte é registrar isso no currículo: o guia de <a href="/artigos/como-colocar-habilidades-de-ia-no-curriculo">como colocar habilidades de IA no currículo</a> mostra como transformar esses 90 dias em argumento de contratação e promoção.</p>
  `,
  faq: [
    {
      question: "Preciso saber programar para ser referência em IA na empresa?",
      answer:
        "Não. A referência de negócio traduz a ferramenta para a rotina do setor: vendas, RH, financeiro, atendimento. O que conta é ter aplicado em uma tarefa real, medido o resultado e conseguir ensinar o colega. Programação fica com o time de TI, que cuida de segurança, integração e contratos. As duas funções se complementam e raramente a segunda tem dono em empresas menores.",
    },
    {
      question: "Quanto tempo leva para ser reconhecido como referência em IA no trabalho?",
      answer:
        "Com um plano disciplinado, cerca de 90 dias: 30 dias aplicando em uma tarefa própria, 30 dias mostrando o resultado com número e 30 dias criando um formato recorrente de troca com o time. O reconhecimento vem quando duas ou três pessoas passam a procurar você com perguntas concretas, o que costuma acontecer logo depois da primeira demonstração.",
    },
    {
      question: "Posso usar ChatGPT gratuito com dados da empresa?",
      answer:
        "Evite. Contas pessoais gratuitas seguem regras diferentes das corporativas quanto ao uso dos dados. Anonimize qualquer informação antes de colar, nunca inclua nome, CPF, salário ou dado de cliente, e proponha à empresa um plano corporativo. Planos Team e Enterprise das principais ferramentas não treinam modelos com o conteúdo da empresa por padrão, segundo as páginas oficiais.",
    },
    {
      question: "Ser referência em IA ajuda a ganhar promoção ou aumento?",
      answer:
        "Ajuda quando o ganho aparece em uma métrica que a chefia acompanha: horas economizadas, retrabalho reduzido, prazo cumprido. A posição dá visibilidade, projetos-piloto e cadeira em reuniões, o que constrói argumento para negociação. Não é garantia automática, e depende de você documentar os resultados e apresentá-los no momento certo.",
    },
    {
      question: "O que fazer se a empresa proíbe o uso de IA?",
      answer:
        "Não use por conta própria. Converse com o gestor e proponha um piloto pequeno, com uma tarefa definida, dados anonimizados e uma ferramenta corporativa. Leve o custo por assento e a política de proteção de dados do fornecedor. Burlar a regra destrói a credibilidade que você quer construir e pode gerar problema legal para a empresa.",
    },
  ],
  quiz: [
    {
      question: "Qual é o primeiro passo do plano de 90 dias para virar referência em IA na empresa?",
      options: [
        "Mandar notícias sobre IA no grupo do time",
        "Aplicar IA em uma tarefa repetitiva do próprio trabalho e medir o antes e o depois",
        "Pedir para o TI contratar uma ferramenta",
      ],
      answer: 1,
      explanation:
        "A reputação nasce de um resultado próprio e medido. Só depois faz sentido mostrar para o time e propor ferramentas.",
    },
    {
      question: "O que nunca deve ser feito em uma demonstração de IA no trabalho?",
      options: [
        "Mostrar o que ainda precisa de revisão manual",
        "Usar um prompt com campos entre colchetes",
        "Colar dados pessoais de clientes ou funcionários em conta gratuita pessoal",
      ],
      answer: 2,
      explanation:
        "Dados pessoais e sigilosos só entram em ferramenta corporativa com contrato adequado, e mesmo assim depois de anonimizar o que for possível.",
    },
  ],
};
