import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "o-que-e-inteligencia-artificial-guia-completo",
  title: "O que é inteligência artificial: guia completo para iniciantes",
  seoTitle: "O que é inteligência artificial: guia para iniciantes",
  excerpt:
    "O que é inteligência artificial, explicado sem jargão: como a IA aprende, os tipos que você já usa, onde ela erra e como começar hoje com uma conta gratuita.",
  metaDescription:
    "Entenda o que é inteligência artificial em linguagem simples: como funciona, exemplos do dia a dia, limites, prompts prontos e um passo a passo para começar.",
  category: "iniciantes",
  articleSubcategory: "conceitos",
  date: "2026-08-29",
  updated: "2026-09-27",
  readTime: 8,
  imageQuery: "artificial intelligence technology brain",
  seed: 0,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Inteligência artificial é um programa que aprende padrões a partir de muitos exemplos e usa esses padrões para escrever, resumir, reconhecer imagens ou prever algo, em vez de seguir regras escritas uma a uma.",
    "Você já usa IA todo dia sem perceber: recomendação da Netflix, filtro de spam, análise de fraude do banco e corretor do teclado; a IA generativa (ChatGPT, Claude, Gemini) é só a parte que conversa.",
    "Ela erra com confiança, não sabe o que não sabe e guarda o que você digita; por isso o caminho é começar com tarefas de baixo risco, no plano gratuito, e revisar tudo antes de usar.",
  ],
  content: `
    <p>Inteligência artificial é a capacidade de um programa de computador fazer tarefas que antes exigiam uma pessoa: escrever um texto, resumir um documento, traduzir, reconhecer o que há numa foto, responder uma pergunta. Ela aprende padrões a partir de muitos exemplos, em vez de seguir regras escritas uma a uma. Este guia explica o que é inteligência artificial sem jargão e mostra como começar a usar hoje.</p>

    <p>Você não precisa entender matemática nem programação para aproveitar. Precisa entender três coisas: como a IA aprende, o que ela faz bem e onde ela erra. Segundo o <a href="https://hai.stanford.edu/ai-index/2026-ai-index-report" rel="noopener noreferrer">AI Index 2026, da Universidade Stanford</a>, 88% das organizações pesquisadas já usam IA e quatro em cada cinco universitários usam IA generativa. Quem entende o básico agora conversa de igual para igual com essa realidade.</p>

    <h2>O que é inteligência artificial, afinal?</h2>

    <p>A definição mais usada é a da <a href="https://www.ibm.com/think/topics/artificial-intelligence" rel="noopener noreferrer">IBM</a>: tecnologia que permite a computadores simular capacidades humanas como aprender, compreender, resolver problemas, decidir e criar. A palavra-chave é simular. A máquina não pensa como você; ela calcula qual resposta tem mais chance de estar certa, com base no que viu durante o treino.</p>

    <p>Dentro desse guarda-chuva existem camadas, uma dentro da outra. Machine learning (aprendizado de máquina) é o método em que o programa aprende com dados em vez de receber regras prontas. Deep learning é um tipo de machine learning que usa redes neurais com muitas camadas, e é o que fez a área explodir a partir de 2012. IA generativa é o deep learning aplicado a criar conteúdo novo: texto, imagem, áudio e vídeo. ChatGPT, Claude e Gemini estão nessa última camada.</p>

    <p>Um exemplo caseiro ajuda. O filtro de spam do seu e-mail não tem uma lista de palavras proibidas escrita por alguém. Ele viu milhões de mensagens marcadas como spam e aprendeu o que elas têm em comum. Quando chega uma nova, calcula a probabilidade. Se o termo "rede neural" ou "modelo" ainda assusta, o <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de inteligência artificial</a> explica cada um em uma frase.</p>

    <h2>Como a IA aprende: treino, padrões e previsão</h2>

    <h3>O treino</h3>
    <p>Um modelo de linguagem como o que roda por trás do ChatGPT é treinado com uma quantidade enorme de texto: livros, sites, artigos, código. Durante o treino, o programa faz um único exercício bilhões de vezes: dado um trecho, adivinhe a próxima palavra. Cada erro ajusta um pouco os números internos. No fim, ele fica bom em continuar qualquer texto de forma coerente, e é isso que parece "entender" a sua pergunta.</p>

    <h3>Por que ela erra com tanta confiança</h3>
    <p>Como o modelo prevê a continuação mais provável, ele pode inventar um dado, uma lei ou um livro que soam certos e não existem. Isso tem nome, alucinação, e não é defeito raro: é consequência direta de como a coisa funciona. Por isso a regra número um de quem começa é revisar tudo que envolva nome, número, data e fonte. O artigo sobre os <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">5 erros de quem está começando a usar IA</a> mostra os tropeços mais comuns dessa fase.</p>

    <p>A boa notícia: a qualidade da resposta depende muito do que você pede. Contexto, formato e limite de tamanho mudam o resultado, e isso se aprende em uma tarde. O guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> mostra a diferença entre um pedido vago e um pedido que funciona.</p>

    <h2>Tipos de IA que você já usa sem perceber</h2>

    <p>A IA que conversa é a mais visível, mas é a mais nova. A tabela abaixo mostra onde a inteligência artificial já estava na sua rotina antes de qualquer chat.</p>

    <table>
      <thead>
        <tr><th>Tipo</th><th>Onde aparece</th><th>O que faz</th></tr>
      </thead>
      <tbody>
        <tr><td>Recomendação</td><td>Netflix, YouTube, Instagram, Mercado Livre</td><td>Prevê o que você tende a assistir ou comprar</td></tr>
        <tr><td>Reconhecimento de voz</td><td>Alexa, Siri, Google Assistente, ditado do celular</td><td>Transforma fala em texto e comando</td></tr>
        <tr><td>Visão computacional</td><td>Desbloqueio por rosto, câmera do carro, álbum de fotos</td><td>Identifica rostos, placas e objetos</td></tr>
        <tr><td>Detecção de fraude</td><td>Banco, cartão, Pix</td><td>Bloqueia uma compra fora do seu padrão em segundos</td></tr>
        <tr><td>Tradução automática</td><td>Google Tradutor, legendas do YouTube</td><td>Traduz texto e fala em tempo real</td></tr>
        <tr><td>IA generativa</td><td>ChatGPT, Claude, Gemini, Canva</td><td>Cria texto, imagem, áudio e vídeo a partir de um pedido</td></tr>
      </tbody>
    </table>

    <p>Dentro da IA generativa há ainda uma distinção que confunde muita gente: chatbot, automação e agente não são a mesma coisa. Chatbot conversa com roteiro; automação executa regra fixa; agente decide o próximo passo sozinho. A explicação completa está em <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot ou automação</a>. E os modelos mais novos já veem, ouvem e falam ao mesmo tempo, o que o artigo sobre <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA multimodal</a> mostra com exemplos.</p>

    <h2>IA generativa na prática: ChatGPT, Claude e Gemini</h2>

    <p>Os três assistentes mais usados no Brasil funcionam do mesmo jeito: você escreve um pedido em português, ele responde em segundos. Todos têm plano gratuito com limite de mensagens por período. O <a href="https://claude.com/pricing" rel="noopener noreferrer">Claude Pro custa US$ 20 por mês</a> (US$ 17 no plano anual), verificado em 27/09/2026; para ChatGPT Plus e Gemini, consulte a página oficial. Para começar, o gratuito basta, e o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> ajuda a escolher pelo seu uso.</p>

    <p>Os três prompts abaixo são um bom primeiro contato. Cole no assistente, troque o que está entre colchetes e veja o que sai.</p>

    <pre><code>Explique o que é inteligência artificial para uma pessoa de 60 anos que nunca usou, em 5 frases curtas, em português do Brasil, usando uma comparação com algo do dia a dia (cozinha, trânsito ou jardim). Sem termos técnicos.</code></pre>

    <pre><code>Resuma o texto abaixo em 3 tópicos de uma frase cada, no tom de quem explica para um colega de trabalho. Depois, liste 2 perguntas que o texto deixa sem resposta. Texto: [cole aqui um e-mail ou notícia]</code></pre>

    <pre><code>Monte um cardápio de segunda a sexta para 2 adultos, almoço e jantar, com orçamento de R$ 250 na semana, usando arroz, feijão, frango, ovos e legumes da estação. Entregue em tabela e, no fim, a lista de compras agrupada por seção do mercado.</code></pre>

    <p>O terceiro prompt é a porta de entrada mais comum para quem não trabalha com computador: o guia de <a href="/artigos/como-usar-ia-para-planejar-refeicoes-e-economizar-no-mercado">planejamento de refeições com IA</a> mostra como refinar o cardápio semana a semana. Antes de assinar qualquer plano, o artigo <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a> explica quando o gratuito deixa de bastar.</p>

    <h2>Exemplo brasileiro: a padaria que respondia 40 mensagens por dia</h2>

    <p>Cena realista. Marta, 52 anos, dona de uma padaria em Contagem (MG), recebia cerca de 40 mensagens por dia no WhatsApp com as mesmas perguntas: horário, se tem bolo de aniversário, preço do pão de queijo por quilo. Gastava uma hora por dia respondendo, entre uma fornada e outra. Um sobrinho abriu uma conta gratuita do Claude no celular dela e montou um texto padrão de respostas, salvo nas respostas rápidas do WhatsApp Business.</p>

    <p>Na segunda semana, ela passou a usar o assistente para três tarefas: escrever o cardápio de encomendas do mês, redigir o aviso de feriado e montar a lista de compras a partir das vendas anotadas no caderno. Custo: zero. Tempo com mensagens: de 60 para uns 15 minutos por dia. Não virou automação, não teve robô; foi uma pessoa usando IA generativa em tarefas repetitivas. O Sebrae RN, num <a href="https://blog.rn.sebrae.com.br/inteligencia-artificial-pequenos-negocios/" rel="noopener noreferrer">guia sobre IA em pequenos negócios</a>, estima que até 30% das tarefas de atendimento podem ser automatizadas, e o caso da Marta mostra o primeiro degrau dessa escada.</p>

    <h2>O que a IA não faz (e onde ela erra)</h2>

    <p>Inteligência artificial não sabe o que não sabe. Se você pergunta a data de uma lei e ela não tem a informação, pode responder uma data plausível em vez de dizer "não sei". Não tem acesso ao seu contexto além do que você escreve. E não guarda opinião própria: responde de acordo com o padrão do treino, que carrega os vieses dos textos de origem.</p>

    <p>Há também a questão do que você entrega. Tudo que você digita pode ser armazenado e, em alguns planos, usado para treinar o modelo. Contrato, CPF de cliente, exame médico e senha não entram numa conversa sem antes desligar essa opção. O guia sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> mostra onde fica cada ajuste. O AI Index 2026 registrou 362 incidentes documentados envolvendo IA em 2025, contra 233 no ano anterior, e uma <a href="/noticias/pesquisa-reuters-ipsos-73-por-cento-desconfia-ia">pesquisa Reuters/Ipsos</a> mostra que 73% dos americanos acham que as empresas de IA não fazem o suficiente para evitar danos. Desconfiança, nesse caso, é método.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Use IA para rascunho, resumo, ideia e organização. Não use para decisão médica, jurídica ou financeira sem um profissional revisando. Se a resposta traz nome, número, data ou lei, confira na fonte antes de repassar.</p></div>

    <h2>Como começar a usar IA hoje: passo a passo em 15 minutos</h2>

    <ol>
      <li><strong>Crie uma conta gratuita</strong> no ChatGPT, no Claude ou no Gemini, pelo celular ou pelo computador. Não instale nada além do aplicativo oficial.</li>
      <li><strong>Peça uma coisa que você já ia fazer hoje:</strong> responder um e-mail chato, resumir um texto longo, montar a lista do mercado. Tarefa real, baixo risco.</li>
      <li><strong>Refaça o pedido com contexto:</strong> quem você é, para quem é o texto, tamanho e tom. Compare as duas respostas. É aqui que a maioria entende o que muda.</li>
      <li><strong>Desligue o uso das conversas para treino</strong> nas configurações e nunca cole dado pessoal de terceiros.</li>
      <li><strong>Escolha um uso fixo por semana</strong> e repita até virar hábito. O guia para <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">configurar seu primeiro assistente de IA</a> mostra como montar instruções permanentes, e a lista dos <a href="/artigos/7-aplicativos-de-ia-que-toda-pessoa-deveria-conhecer">7 aplicativos de IA para conhecer</a> indica por onde ampliar depois.</li>
    </ol>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Trate o assistente como um estagiário rápido e bem-lido: dá o contexto, pede o formato, revisa o resultado. Quem pede "me ajuda" recebe genérico; quem pede "escreva 3 frases para um cliente que atrasou o pagamento, tom cordial" recebe algo pronto para usar.</p></div>

    <p>Entender o que é inteligência artificial é o primeiro degrau; o segundo é usar toda semana em algo que importa para você. A categoria <a href="/categoria/iniciantes">Para Iniciantes</a> segue essa ordem, do primeiro pedido às tarefas do dia a dia, e quando quiser transformar isso em renda o guia das <a href="/artigos/10-formas-de-ganhar-dinheiro-com-inteligencia-artificial">10 formas de ganhar dinheiro com IA</a> mostra os caminhos mais realistas.</p>
  `,
  faq: [
    {
      question: "O que é inteligência artificial em palavras simples?",
      answer:
        "É um programa de computador que aprende padrões a partir de muitos exemplos e usa esses padrões para fazer tarefas que antes exigiam uma pessoa: escrever, resumir, traduzir, reconhecer uma imagem ou prever algo. Ele não pensa como um humano; calcula a resposta mais provável com base no que viu no treino. O filtro de spam do e-mail e a recomendação da Netflix são IA.",
    },
    {
      question: "Inteligência artificial é gratuita para usar?",
      answer:
        "Para começar, sim. ChatGPT, Claude e Gemini têm planos gratuitos com limite de mensagens por período, suficientes para resumo, rascunho de e-mail, lista de compras e estudo. O plano pago faz sentido quando você bate no limite com frequência ou precisa enviar arquivos grandes. O Claude Pro custa US$ 20 por mês, verificado em 27/09/2026; para os outros, consulte a página oficial.",
    },
    {
      question: "Qual a diferença entre inteligência artificial e IA generativa?",
      answer:
        "Inteligência artificial é o campo inteiro: recomendação, reconhecimento de voz, detecção de fraude, tradução. IA generativa é a parte que cria conteúdo novo (texto, imagem, áudio, vídeo) a partir de um pedido, como ChatGPT, Claude e Gemini. Toda IA generativa é inteligência artificial, mas a maior parte da IA que você usa no banco ou no celular não é generativa.",
    },
    {
      question: "A inteligência artificial pode errar?",
      answer:
        "Pode, e erra com confiança. Como o modelo prevê a resposta mais provável, ele pode inventar um dado, uma lei ou uma citação que parecem reais. Isso se chama alucinação e faz parte do funcionamento, não é falha rara. Por isso qualquer nome, número, data ou fonte que a IA entregar precisa ser conferido antes de ser usado ou repassado.",
    },
    {
      question: "Preciso saber programar para usar inteligência artificial?",
      answer:
        "Não. Os assistentes atuais funcionam em português, por texto ou voz, e a única habilidade necessária é descrever bem o que você quer: contexto, formato, tamanho e tom. Quem trabalha com atendimento, vendas, ensino ou administração costuma tirar mais proveito do que programador, porque já sabe qual tarefa repetitiva vale a pena entregar para a ferramenta.",
    },
    {
      question: "É seguro colocar meus dados em uma inteligência artificial?",
      answer:
        "Depende do que você coloca e de como a conta está configurada. Em alguns planos, as conversas podem ser usadas para treinar o modelo; desligue essa opção nas configurações. Nunca cole CPF, senha, contrato ou dado de saúde de terceiros. Para uso pessoal com informação genérica, o risco é baixo; para dado de cliente, use conta com histórico de treinamento desligado.",
    },
  ],
  quiz: [
    {
      question: "Por que uma IA generativa às vezes inventa uma informação que não existe?",
      options: [
        "Porque foi programada para enganar o usuário",
        "Porque ela prevê a continuação mais provável do texto, e não consulta uma base de fatos",
        "Porque a conexão com a internet caiu",
      ],
      answer: 1,
      explanation:
        "O modelo aprende a continuar textos de forma coerente. Quando não tem a informação, produz algo plausível. Isso se chama alucinação e é o motivo de revisar nome, número, data e fonte.",
    },
    {
      question: "Qual destas opções NÃO é um exemplo de inteligência artificial?",
      options: [
        "A recomendação de filmes da Netflix",
        "O bloqueio automático de uma compra suspeita no cartão",
        "Uma planilha que soma uma coluna de valores",
      ],
      answer: 2,
      explanation:
        "Somar uma coluna é regra fixa escrita por alguém. Recomendação e detecção de fraude aprendem padrões a partir de exemplos, que é a marca da IA.",
    },
  ],
};
