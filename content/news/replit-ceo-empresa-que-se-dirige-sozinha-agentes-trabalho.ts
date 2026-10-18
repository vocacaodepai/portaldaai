import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "replit-ceo-empresa-que-se-dirige-sozinha-agentes-trabalho",
  title: "CEO da Replit descreve a empresa que se dirige sozinha com agentes de IA",
  summary:
    "Amjad Masad contou no TechCrunch Disrupt que agentes já fazem a triagem do suporte na Replit e por que, para ele, julgamento humano segue no centro.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/16/replits-ceo-says-the-future-of-work-is-the-self-driving-company/",
  date: "2026-10-18",
  publishedAt: "2026-10-18T07:25:00-03:00",
  imageQuery: "Amjad Masad Replit CEO",
  topic: "mercado-trabalho",
  content: `
    <p>O CEO e cofundador da Replit, Amjad Masad, apresentou no palco do TechCrunch Disrupt, em San Francisco, a ideia de uma "empresa que se dirige sozinha" (em inglês, "self-driving company"). Segundo a <a href="https://techcrunch.com/2026/10/16/replits-ceo-says-the-future-of-work-is-the-self-driving-company/" rel="noopener noreferrer nofollow">reportagem do TechCrunch</a>, o termo não tem relação com carros autônomos: descreve uma organização em que agentes de IA fazem boa parte do trabalho braçal, enquanto as pessoas passam a ser valorizadas pelo julgamento e pelo gosto.</p>

    <p>Masad disse que o trabalho de praticamente todo mundo na plateia mudou no último ano, mas que boa parte dos Estados Unidos e do mundo ainda não percebeu que a mudança está chegando e que isso vai surpreender muita gente. Ele afirmou que a própria equipe da Replit refletiu sobre o impacto da tecnologia no dia a dia, principalmente depois que os agentes de IA ficaram mais confiáveis, em algum momento deste ano.</p>

    <h2>Como funciona a empresa que se dirige sozinha na Replit</h2>
    <p>O exemplo concreto que Masad deu é o suporte ao cliente. Quando um chamado chega, um agente é o primeiro a examiná-lo e faz a triagem inicial, consultando os problemas abertos no GitHub, o código-fonte e os tickets do Linear. Quando o caso chega a uma pessoa, ela já recebe as informações adicionais necessárias para decidir o melhor caminho.</p>
    <p>Se a pessoa de suporte decide enviar uma correção, basta um clique para acionar outro agente que a aplica. Nas palavras do CEO, existe um ciclo inteiro em que os agentes fazem a maior parte do trabalho, mas com um ponto decisivo: há julgamento humano no meio, e a empresa não acredita que isso vá desaparecer tão cedo. "Você precisa de julgamento, você precisa de gosto", disse.</p>

    <table>
      <thead>
        <tr><th>Etapa do suporte</th><th>Quem faz, segundo Masad</th></tr>
      </thead>
      <tbody>
        <tr><td>Triagem inicial do chamado</td><td>Agente de IA, consultando GitHub, código e Linear</td></tr>
        <tr><td>Decisão sobre como tratar o caso</td><td>Pessoa da equipe, já com o contexto reunido</td></tr>
        <tr><td>Aplicação da correção</td><td>Outro agente, acionado com um clique</td></tr>
      </tbody>
    </table>

    <h2>O que muda no trabalho, na visão do CEO</h2>
    <p>A tese central de Masad é que os agentes não estão tirando empregos, e sim mudando em que as pessoas gastam o tempo. Ele disse que a equipe passa muito mais tempo descobrindo o que precisa ser feito, e contou que, ao circular pela empresa, vê mais discussões, mais quadros brancos e mais conversa sobre arquitetura e sobre como construir as coisas. Para ele, a ideia da empresa que se dirige sozinha é, no fundo, uma tentativa de descobrir o que a transformação por IA significa na prática.</p>
    <p>Masad também afirmou que, nas conversas com outras empresas, o assunto costuma ser como a IA pode tornar as pessoas mais produtivas e mais felizes no trabalho. A parte da felicidade, segundo ele, vem do fato de que os agentes tornam o trabalho menos chato e mais criativo. O CEO ainda disse que existe uma visão positiva do mundo que o Vale do Silício não está divulgando e que a Replit espera ajudar a espalhá-la.</p>

    <blockquote>É importante lembrar que se trata da visão de um executivo de uma empresa que vende ferramentas de IA para programar. A fala descreve a experiência interna da Replit e não é um estudo sobre o efeito da IA no emprego em geral.</blockquote>

    <h2>Contexto: a Replit vive o assunto de perto</h2>
    <p>A Replit é uma das plataformas de vibe coding mais usadas por fundadores e desenvolvedores, e por isso sua experiência interna é um termômetro curioso do que as empresas de software estão testando. Na mesma semana, o CEO também esteve no centro de outra notícia: a plataforma passou a usar modelos da OpenAI como padrão, assunto que cobrimos em <a href="/noticias/replit-openai-padrao-agent-anthropic-disrupt">Replit coloca modelos da OpenAI como padrão</a>.</p>
    <p>O debate sobre quem ocupa o lugar de quem também aparece em outros dados recentes. Um relatório da própria Anthropic sobre a sua força de trabalho, que resumimos em <a href="/noticias/anthropic-relatorio-forca-trabalho-menos-juniores-reunioes">Anthropic diz que a equipe ficou menos júnior e passa mais tempo em reuniões</a>, aponta na mesma direção: com agentes fazendo tarefas de entrada, sobra mais reunião e mais decisão para as pessoas. Já a pesquisa da Workday, que analisamos em <a href="/noticias/workday-relatorio-ia-nao-reduz-vagas-mas-muda-tudo">relatório da Workday sobre IA, vagas e mudança de funções</a>, sugere que o número de vagas pode não cair, mas o conteúdo delas muda bastante.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem trabalha ou empreende no Brasil, o ponto mais útil da fala de Masad é a divisão de tarefas. Triagem, coleta de contexto e aplicação de correções repetitivas são justamente o tipo de trabalho que um agente já consegue fazer razoavelmente bem. O que sobra para a pessoa é decidir o que vale a pena fazer, avaliar se o resultado está bom e escolher o rumo. Quem hoje gasta o dia em tarefas de triagem, organização de pedidos ou resposta padronizada tem aí um aviso: o valor profissional tende a migrar para a capacidade de julgar e priorizar.</p>
    <p>Para o dono de um pequeno negócio, o exemplo do suporte é replicável em escala bem menor. Um atendimento que recebe mensagens por WhatsApp ou e-mail pode usar um agente para separar o que é dúvida simples do que exige uma pessoa, reunir o histórico do cliente e só então passar o caso adiante. Esse desenho, com a decisão final sempre nas mãos de alguém, é mais seguro do que entregar o atendimento inteiro a uma automação sem supervisão. Vale conferir nosso guia de <a href="/artigos/como-humanos-e-agentes-de-ia-vao-trabalhar-juntos-no-futuro">como humanos e agentes de IA vão trabalhar juntos no futuro</a> para pensar essa divisão no seu caso.</p>
    <p>Para quem pensa em carreira, a lição é tratar o julgamento como habilidade a ser treinada, e não como talento natural. Isso inclui saber especificar bem o que se quer, revisar o trabalho de um agente com olhar crítico e entender o negócio o bastante para dizer quando a resposta está errada. Reunimos ideias nessa linha em <a href="/artigos/habilidades-humanas-que-a-ia-nao-substitui-no-trabalho">habilidades humanas que a IA não substitui no trabalho</a>, e quem quer entrar na área de software com ajuda de IA pode ler <a href="/artigos/vibe-coding-para-nao-programadores-carreira-e-riscos">vibe coding para quem não programa: carreira e riscos</a>.</p>

    <div class="callout-box">
      <span class="callout-label">Teste simples para o seu trabalho</span>
      <p>Liste as dez tarefas que você mais repete na semana e marque quais envolvem apenas reunir informação e quais envolvem decidir algo. As primeiras são candidatas a agente; as segundas são o seu diferencial. Comece automatizando uma só e acompanhe os resultados antes de ampliar.</p>
    </div>

    <h2>Os limites e o que observar daqui para a frente</h2>
    <p>A visão otimista de Masad merece cautela. Ele fala a partir de uma empresa de tecnologia, com equipe técnica, processos digitais e acesso direto a agentes de ponta. Negócios tradicionais, com processos em papel, sistemas antigos e equipes pequenas, dificilmente reproduzem o mesmo resultado no curto prazo. Além disso, a própria fala reconhece que muita gente ainda não percebeu a mudança, o que pode significar tanto uma oportunidade para quem se antecipa quanto um risco para quem fica parado.</p>
    <p>Há também uma pergunta em aberto sobre quem ocupa as vagas de entrada. Se os agentes assumem a triagem e as tarefas mais simples, que historicamente serviam de porta de entrada para profissionais juniores, o caminho para aprender a profissão precisa ser repensado. Esse é um dos temas que mais aparecem nos dados do mercado brasileiro de contratação, como mostramos em <a href="/noticias/brasil-contratacao-vagas-junior-ia-manpower-2026">contratação de vagas júnior e IA no Brasil</a>.</p>
    <p>Por fim, vale tratar a expressão "empresa que se dirige sozinha" como uma metáfora de marketing e uma hipótese de trabalho, não como um fato consolidado. O que a fonte entrega de verificável é o relato de como a Replit organizou o seu suporte e a declaração do CEO de que o julgamento humano continua no meio do processo. O resto é uma visão de futuro, e ela só se confirma se mais empresas, de portes e setores diferentes, mostrarem resultados parecidos.</p>
  `,
  faq: [
    {
      question: "O que é a empresa que se dirige sozinha, segundo o CEO da Replit?",
      answer:
        "É a ideia de uma empresa em que agentes de IA fazem boa parte do trabalho braçal, como triagem de chamados e aplicação de correções, enquanto as pessoas decidem o que fazer, usando julgamento e bom gosto.",
    },
    {
      question: "A Replit disse que a IA vai eliminar empregos?",
      answer:
        "Não. Masad afirmou que, em vez de tirar empregos, os agentes mudam no que as pessoas trabalham, com mais tempo para decidir o que fazer e para discutir arquitetura. É a visão do CEO, não um estudo geral sobre emprego.",
    },
    {
      question: "Um pequeno negócio brasileiro pode usar essa ideia?",
      answer:
        "Em escala menor, sim. Um agente pode separar dúvidas simples, reunir o histórico do cliente e passar o caso a uma pessoa, que mantém a decisão final.",
    },
  ],
};
