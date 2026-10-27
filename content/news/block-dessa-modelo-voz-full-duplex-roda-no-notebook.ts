import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "block-dessa-modelo-voz-full-duplex-roda-no-notebook",
  title: "Block apresenta o Dessa, modelo de voz que fala e ouve ao mesmo tempo",
  summary:
    "A empresa de Jack Dorsey mostrou um modelo de voz treinado só com fala humana, que roda em um MacBook Pro M4 Max e ainda não tem acesso público.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/",
  date: "2026-10-24",
  publishedAt: "2026-10-24T19:25:00-03:00",
  imageQuery: "Jack Dorsey portrait",
  topic: "lancamentos",
  content: `
    <p>A Block, empresa de pagamentos comandada por Jack Dorsey, apresentou neste sábado, 24 de outubro de 2026, o Dessa, um modelo de voz que ouve e fala ao mesmo tempo e que, segundo a empresa, foi treinado apenas com fala humana. A informação está na reportagem de Ivan Mehta no <a href="https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/" rel="noopener noreferrer nofollow">TechCrunch</a> e na <a href="https://block.xyz/dessa" rel="noopener noreferrer nofollow">página oficial do Dessa</a>, no site da Block. O modelo ainda não está aberto ao público: há lista de espera e acesso antecipado para um grupo pequeno de pesquisadores de segurança.</p>

    <h2>O que é o Dessa</h2>
    <p>Segundo a página da Block, o Dessa é um modelo de conversa por voz do tipo full-duplex, ou seja, recebe áudio e devolve áudio enquanto a pessoa ainda fala, sem a pausa de "sua vez, minha vez" dos assistentes de voz tradicionais. Ele faz pequenas interjeições, como "aham" e "entendi", e sabe a hora de interromper. O TechCrunch compara a ideia ao GPT-Live, da OpenAI, que também funciona nesse formato.</p>
    <p>A diferença que a Block destaca é a forma de treino. A maioria dos sistemas de voz depende de um grande modelo de linguagem para saber das coisas e usa a voz como uma camada por cima. A empresa afirma que o Dessa foi treinado do zero apenas com sons de conversas humanas, sem texto e sem modelos pré-treinados, e que seu conhecimento vem dos dados de conversa. A página diz que, até onde a equipe sabe, é o primeiro modelo treinado só com fala humana capaz de sustentar uma conversa realista ao vivo. É uma afirmação da própria empresa, que ainda não foi verificada por terceiros.</p>

    <h2>Emoção, risadas e suspiros</h2>
    <p>De acordo com a Block, o modelo percebe e produz emoção, sarcasmo, risadas, suspiros e mudanças de tom. Os pesquisadores publicaram demonstrações com vozes, ritmos e emoções diferentes. Em uma delas, segundo o TechCrunch, o robô disse estar cansado do trabalho e soou cansado. A página também afirma que o Dessa ajusta o volume quando alguém pede, algo que não teria sido ensinado de forma explícita.</p>
    <p>O TechCrunch observa que outros modelos de fala, como o ElevenLabs v4 e o Fish Audio Drama 3, passam texto por um pipeline e usam marcações de voz para indicar a emoção. A Block diz que, no Dessa, a emoção já vem embutida no modelo, mas a reportagem ressalta que não está claro se há alguma marcação guiando esse resultado.</p>

    <h2>Roda no seu computador</h2>
    <p>Um dos pontos mais citados é o tamanho. A Block informa que o Dessa foi treinado em um único rack Nvidia GB200 NVL72 e que roda localmente em um MacBook Pro M4 Max ou superior, mais rápido que o tempo real. A empresa não divulga o número de parâmetros nem a quantidade exata de palavras usadas no treino; diz apenas que o modelo aprendeu a linguagem com "centenas de vezes menos palavras" do que os grandes modelos de linguagem.</p>
    <p>Rodar no próprio aparelho tem consequências práticas: menos custo por uso, menos dependência de nuvem e mais privacidade, já que o áudio não precisa sair do computador. A Block afirma, segundo o TechCrunch, que um modelo de voz no dispositivo poderia sustentar mais experiências para empresas e consumidores a um custo menor. A Square, braço de pagamentos da empresa, já usa IA de voz em pedidos.</p>

    <h2>Quem está por trás</h2>
    <p>O Dessa vem de um pequeno laboratório de pesquisa dentro da Block, fundado por ex-integrantes da Dessa, uma startup de aprendizado profundo de Toronto. Segundo a página, o grupo constrói modelos desde 2012 e trabalha com modelos generativos de fala há mais de oito anos. O laboratório responde diretamente a Jack Dorsey, cofundador e presidente do conselho da Block. O líder é Ragavan Thurairatnam, que escreveu no X, conforme o TechCrunch, que este é "um momento GPT-3 para a fala". Dorsey chamou o Dessa de "o modelo de fala full-duplex mais autêntico já construído". São frases promocionais de quem fez o produto, não avaliações independentes.</p>

    <h2>Segurança e acesso</h2>
    <p>A Block não publicou data de lançamento, licença nem um código aberto. O acesso, por enquanto, é por lista de espera e formulário, e o acesso antecipado será para um grupo pequeno de pesquisadores de segurança de IA, que precisam usar e-mail institucional. O TechCrunch informa que a empresa pediu a esses pesquisadores que testem o modelo, principalmente em situações em que um agente de voz poderia enganar pessoas.</p>
    <p>O motivo é fácil de entender. Uma voz que ri, suspira e hesita de forma convincente é útil para atendimento, mas também facilita golpes. Já mostramos casos reais em <a href="/noticias/golpe-voz-ia-clonada-pix-compra-veiculo-familiar">o golpe com voz clonada por IA para forçar um Pix na compra de um veículo</a>. A Block diz que o argumento de segurança é um dos três motivos do projeto, junto com a curiosidade e a vontade de entender melhor a relação entre humanos e IA, e afirma que a IA de voz atual quase não detecta emoção na fala.</p>

    <h2>Onde isso se encaixa no mercado de voz</h2>
    <p>A corrida por voz em tempo real está acelerada. A ElevenLabs lançou modelos para agentes de voz, como contamos em <a href="/noticias/elevenlabs-lanca-eleven-realtime-agentes-de-voz">o Eleven Realtime</a>, e a Microsoft apresentou voz e transcrição em tempo real, tema de <a href="/noticias/microsoft-lanca-voz-ia-tempo-real-transcricao">nossa cobertura da voz de IA em tempo real da Microsoft</a>. Também analisamos o momento do setor em <a href="/noticias/voz-ia-sem-momento-chatgpt-polyai-otter-humanx">a reportagem sobre o momento da voz de IA</a>. O Dessa entra nessa disputa com uma proposta diferente: pequeno, local e treinado só com fala.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você atende clientes, vende serviços ou cria conteúdo, vozes de IA que conversam de forma natural vão baratear atendimento por telefone, agendamento, vendas por áudio e dublagem. Se esse tipo de modelo realmente rodar em um notebook, pequenas empresas poderão ter um atendente de voz sem pagar por minuto de uma API. Ao mesmo tempo, quem recebe ligações precisará desconfiar mais de vozes convincentes.</p>
    <p>Alguns cuidados e caminhos práticos desde já:</p>
    <ul>
      <li>Combine uma palavra de segurança com familiares e equipe para confirmar pedidos de dinheiro feitos por áudio ou ligação.</li>
      <li>Avise seus clientes quando uma voz for de IA; transparência evita problemas e constrói confiança.</li>
      <li>Teste as ferramentas de voz atuais antes de apostar em uma promessa: o Dessa ainda não está disponível e não há preço nem licença.</li>
      <li>Ao oferecer atendimento por voz como serviço, deixe sempre um caminho fácil para falar com uma pessoa.</li>
      <li>Guarde registro de consentimento antes de clonar ou imitar a voz de qualquer pessoa.</li>
    </ul>
    <p>Para começar com o que já existe, veja <a href="/artigos/assistente-de-voz-com-ia-como-usar-no-dia-a-dia">como usar um assistente de voz com IA no dia a dia</a>, a análise <a href="/artigos/elevenlabs-vale-a-pena-vozes-em-portugues-precos">se o ElevenLabs vale a pena, com vozes em português e preços</a> e o guia sobre <a href="/artigos/ganhar-dinheiro-com-clonagem-de-voz-usando-ia">como ganhar dinheiro com clonagem de voz usando IA</a>, que também explica os limites éticos do uso.</p>

    <h2>O que observar a seguir</h2>
    <p>Três pontos merecem acompanhamento. O primeiro é a data de abertura da lista de espera e se haverá um download ou licença para uso comercial. O segundo é o resultado dos testes dos pesquisadores de segurança, principalmente sobre enganar pessoas. O terceiro é se os testes independentes confirmam a promessa de conversa natural em um aparelho comum, sem nuvem. Até lá, o Dessa é uma demonstração promissora, com todas as qualidades e limites de uma apresentação feita pela própria empresa.</p>

  `,
  faq: [
    {
      question: "O que é o Dessa, da Block?",
      answer:
        "É um modelo de conversa por voz full-duplex, que ouve e fala ao mesmo tempo, treinado do zero apenas com fala humana, segundo a Block.",
    },
    {
      question: "Dá para usar o Dessa agora?",
      answer:
        "Ainda não. Há lista de espera e formulário de acesso, e o acesso antecipado é só para um grupo pequeno de pesquisadores de segurança de IA.",
    },
    {
      question: "O Dessa roda no meu computador?",
      answer:
        "Segundo a Block, ele roda localmente em um MacBook Pro M4 Max ou superior, mais rápido que o tempo real. Isso ainda não foi confirmado por testes independentes.",
    },
  ],
};
