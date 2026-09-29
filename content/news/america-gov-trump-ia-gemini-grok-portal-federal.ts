import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "america-gov-trump-ia-gemini-grok-portal-federal",
  title: "Governo dos EUA lança portal de IA com Gemini e Grok para achar serviço",
  summary:
    "O America.gov usa modelos do Google e da xAI para responder em linguagem simples sobre passaporte, aposentadoria e outros serviços federais dos EUA.",
  author: "Bruno Danello",
  sourceName: "CNBC",
  sourceUrl: "https://www.cnbc.com/2026/09/29/trump-ai-gemini-grok.html",
  date: "2026-09-29",
  content: `
    <p>O governo dos Estados Unidos lançou nesta terça-feira (29) o America.gov, um portal de inteligência artificial que promete ser a "porta única" de acesso a serviços federais. Segundo a <a href="https://www.cnbc.com/2026/09/29/trump-ai-gemini-grok.html" rel="noopener noreferrer nofollow">reportagem da CNBC</a>, a ferramenta responde em linguagem natural a perguntas como onde renovar passaporte, como substituir o cartão do seguro social ou reservar vaga em parque nacional, em vez de obrigar o cidadão a navegar por dezenas de sites de agências diferentes.</p>
    <p>O sistema roda sobre o Gemini, do Google, e o Grok, da xAI de Elon Musk, segundo Joe Gebbia, cofundador do Airbnb que hoje ocupa o cargo recém-criado de Chief Design Officer da Casa Branca. Gebbia descreveu o projeto como um "uso extraordinário de IA", treinado a partir de conteúdo oficial reunido de cerca de 29 mil sites do governo americano. O presidente Donald Trump assinou uma ordem executiva formalizando a criação do portal durante o evento de lançamento.</p>

    <h2>Como funciona e o que vem a seguir</h2>
    <p>Na versão atual, o America.gov funciona como um buscador conversacional: o usuário pergunta e o sistema aponta o caminho certo dentro da máquina pública, sem necessariamente completar o processo por ele. A promessa da administração é que, a partir de 2027, o portal passe a executar tarefas de ponta a ponta, como atualizar documentos após um casamento ou dar entrada em benefícios, direto pelo chat.</p>
    <p>O lançamento acontece num momento em que Trump tem defendido publicamente a autorregulação das empresas de IA e rejeitado pedidos de <a href="/noticias/trump-chama-desaceleracao-ia-de-conspiracao">desaceleração no desenvolvimento de modelos</a>, inclusive durante um jantar recente na Casa Branca com o CEO da Anthropic, Dario Amodei, registrado na <a href="/noticias/trump-amodei-jantar-casa-branca-desaceleracao-ia">notícia sobre o encontro</a>. Usar Gemini e Grok, e não um modelo desenvolvido internamente pelo governo, reforça a estratégia de apoiar-se na infraestrutura já pronta do setor privado em vez de construir algo do zero.</p>

    <h2>Por que isso importa para você</h2>
    <p>O caso é um retrato do que já está acontecendo em escala menor em prefeituras e órgãos públicos brasileiros: o <a href="/noticias/tse-lanca-chatvote-assistente-ia-eleicoes-2026">TSE lançou o ChatVote</a> para tirar dúvidas sobre as eleições de 2026, e outras iniciativas semelhantes devem se multiplicar à medida que a tecnologia fica mais barata e mais fácil de implantar. Para quem presta serviço para o setor público, seja como desenvolvedor, consultor de automação ou agência de tecnologia, esse é um sinal de que contratos envolvendo assistentes de IA para atendimento ao cidadão tendem a crescer, e vale acompanhar de perto como esses projetos são estruturados, quais fornecedores são escolhidos e que exigências de segurança e transparência acabam virando padrão.</p>
    <p>Do lado de quem usa serviços públicos, a tendência é positiva na teoria: menos tempo perdido navegando por sites confusos e formulários espalhados. Mas o próprio texto da CNBC aponta uma lacuna relevante, que também vale para qualquer projeto parecido no Brasil: não ficou claro como os modelos foram integrados aos dados do governo, nem que garantias existem sobre o que acontece com as informações pessoais digitadas no chat. É o tipo de pergunta que qualquer empresa ou órgão público deveria responder antes de colocar um assistente de IA na frente do cidadão, e que se conecta diretamente ao debate sobre a <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei de IA no Brasil e o que muda para quem usa</a> esse tipo de ferramenta.</p>

    <h2>Um movimento que não é só americano</h2>
    <p>A ideia de um "balcão único" de IA para serviços públicos não é exclusividade dos EUA. Bancos, operadoras de telefonia e órgãos de trânsito no Brasil já vêm testando chatbots para reduzir filas de atendimento, e a diferença nesse caso é a escala: um portal nacional cobrindo dezenas de milhares de páginas oficiais de uma só vez. Se o modelo funcionar nos EUA sem grandes escândalos de erro ou vazamento, é provável que sirva de referência para projetos parecidos em outros países, inclusive aqui, onde a discussão sobre regulação de IA aplicada a serviços públicos ainda está em andamento no Congresso.</p>
    <p>Para quem acompanha o mercado de trabalho em IA, vale também observar o cargo criado especialmente para tocar esse projeto: Chief Design Officer, ocupado por um empreendedor de tecnologia e não por um burocrata de carreira. É um indício de que a fronteira entre setor público e privado no desenvolvimento de produtos de IA está cada vez mais porosa, e de que profissionais com experiência em produto digital podem encontrar oportunidades também dentro de governos, montando equipes internas de tecnologia em vez de terceirizar tudo para grandes fornecedores.</p>

    <h2>O tamanho do desafio técnico por trás do anúncio</h2>
    <p>Unificar 29 mil sites de agências diferentes num só assistente de IA não é trivial. Cada agência federal americana tem seu próprio sistema, seu próprio jeito de organizar informação e, em muitos casos, décadas de conteúdo desatualizado misturado com regras vigentes. Treinar um modelo para navegar por essa bagunça sem inventar respostas erradas, o famoso problema da alucinação, exige um trabalho grande de curadoria de dados antes mesmo de qualquer linha de código de interface ser escrita. É um lembrete de que projetos de IA aplicados a atendimento, seja de governo ou de empresa privada, vivem ou morrem pela qualidade da base de conhecimento usada para treinar o sistema, não só pela sofisticação do modelo escolhido.</p>
    <p>Essa mesma lição vale para pequenos negócios brasileiros que estão montando seus primeiros assistentes de atendimento com IA: de nada adianta escolher o modelo mais avançado do mercado se a base de perguntas e respostas por trás dele estiver desatualizada ou incompleta. Antes de automatizar o atendimento ao cliente, vale organizar e revisar o conteúdo que vai alimentar o sistema, do mesmo jeito que o governo americano precisou fazer com seus 29 mil sites antes de colocar o America.gov no ar.</p>

    <div class="callout-box">
      <span class="callout-label">Resumo rápido</span>
      <p>O America.gov é um portal do governo americano que usa Gemini e Grok para responder perguntas sobre serviços federais em linguagem simples, reunindo dados de cerca de 29 mil sites oficiais. A versão atual só orienta o usuário; a promessa é que, a partir de 2027, ele também execute tarefas completas, como atualização de documentos.</p>
    </div>
  `,
  faq: [
    {
      question: "O America.gov substitui os sites oficiais do governo dos EUA?",
      answer:
        "Não. Por enquanto ele funciona como um buscador conversacional que direciona o usuário para o serviço certo, sem eliminar os sites das agências federais que continuam existindo.",
    },
    {
      question: "Quais modelos de IA são usados no America.gov?",
      answer:
        "O portal usa o Gemini, do Google, e o Grok, da xAI de Elon Musk, segundo o Chief Design Officer da Casa Branca, Joe Gebbia.",
    },
  ],
};
