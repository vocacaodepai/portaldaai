import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ia-machine-learning-e-deep-learning-qual-a-diferenca-e-onde-entra-a-generativa",
  title: "IA, machine learning e deep learning: qual a diferença",
  seoTitle: "IA, machine learning e deep learning: diferença",
  excerpt:
    "Entenda em linguagem simples a diferença entre IA, machine learning, deep learning e IA generativa, com exemplos do dia a dia e uma tabela para nunca mais confundir.",
  metaDescription:
    "IA, machine learning, deep learning e IA generativa: o que cada termo significa, como um se encaixa no outro, exemplos do dia a dia e quando isso importa na prática.",
  category: "iniciantes",
  articleSubcategory: "conceitos",
  date: "2026-10-22",
  readTime: 7,
  imageQuery: "nested circles diagram neural network abstract",
  seed: 537,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Inteligência artificial é o guarda-chuva: machine learning é um jeito de fazer IA aprendendo com dados, e deep learning é um tipo de machine learning que usa redes neurais com muitas camadas.",
    "IA generativa, como os chatbots e os geradores de imagem, é a parte da IA que cria conteúdo novo, e costuma usar deep learning por baixo.",
    "Saber a diferença ajuda a entender o que cada ferramenta faz, por que erra e que tipo de dado ela precisa, sem cair em promessas vagas de marketing.",
  ],
  content: `
    <p>Inteligência artificial é o campo mais amplo, que reúne máquinas capazes de imitar tarefas humanas como aprender e resolver problemas. Machine learning é uma parte dela, em que o computador aprende com exemplos em vez de seguir regras escritas à mão. Deep learning é um tipo de machine learning que usa redes neurais profundas.</p>
    <p>Na prática, os quatro termos aparecem misturados em notícias, propagandas e conversas, e quase sempre como se fossem sinônimos. Não são. Este guia explica cada um com exemplos de celular, banco e redes sociais, mostra como se encaixam, onde a IA generativa entra e por que essa diferença ajuda você a escolher e a desconfiar melhor das ferramentas. Se você está começando, vale ter à mão o <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">guia completo do que é inteligência artificial</a>.</p>

    <h2>O que é inteligência artificial</h2>
    <p>A IBM, em seu <a href="https://www.ibm.com/think/topics/ai-vs-machine-learning-vs-deep-learning-vs-neural-networks" target="_blank" rel="noopener noreferrer">texto sobre as diferenças entre IA, machine learning, deep learning e redes neurais</a>, descreve a IA como o termo mais amplo, usado para classificar máquinas que imitam a inteligência humana e funções cognitivas como resolver problemas e aprender. Os quatro conceitos funcionam como camadas, uma dentro da outra.</p>
    <p>Repare que a definição não diz "máquina pensante" nem "robô consciente". Ela fala de tarefas: reconhecer uma voz, recomendar um filme, traduzir uma frase, detectar uma fraude. Quase toda IA que você usa hoje é do tipo estreito, feita para uma tarefa ou um conjunto de tarefas, e não uma inteligência geral como a dos filmes. Um assistente que organiza sua agenda não sabe jogar xadrez, e um jogador de xadrez artificial não sabe escrever e-mail.</p>
    <p>Existe ainda IA que não aprende nada com dados. Um sistema de regras antigo, como um robô de atendimento que responde "digite 1 para segunda via", também é uma forma simples de IA no sentido amplo, mas não aprende. É aí que entra o machine learning.</p>

    <h2>O que é machine learning (aprendizado de máquina)</h2>
    <p>Segundo o <a href="https://developers.google.com/machine-learning/intro-to-ml/what-is-ml" target="_blank" rel="noopener noreferrer">curso introdutório de machine learning do Google</a>, ML é o treinamento de um software, chamado modelo, para fazer previsões ou gerar conteúdo a partir de dados. Em vez de um programador escrever todas as regras, o modelo aprende relações a partir de exemplos.</p>
    <p>O Google descreve os principais tipos de aprendizado:</p>
    <ul>
      <li><strong>Supervisionado:</strong> o modelo aprende com dados já rotulados, com a resposta certa. Serve para classificar (este e-mail é spam ou não?) e para prever números (quanto vale este imóvel?).</li>
      <li><strong>Não supervisionado:</strong> o modelo procura padrões em dados sem rótulo, geralmente agrupando itens parecidos. As pessoas decidem o que cada grupo significa.</li>
      <li><strong>Por reforço:</strong> o modelo aprende por recompensas e punições dentro de um ambiente, como em robôs e jogos.</li>
      <li><strong>Generativo:</strong> o modelo cria conteúdo novo, como texto, imagem, áudio ou vídeo, aprendendo padrões de dados existentes.</li>
    </ul>
    <p>Um exemplo cotidiano é o filtro de spam do seu e-mail: milhões de mensagens marcadas como lixo ou não lixo ensinaram o modelo a reconhecer sinais. A explicação de como esse treino acontece e por que ele erra está em <a href="/artigos/como-uma-ia-aprende-treinamento-ajuste-fino-e-por-que-erra">como uma IA aprende</a>.</p>

    <h2>O que é deep learning (aprendizado profundo)</h2>
    <p>Deep learning é um subcampo do machine learning que usa redes neurais, estruturas de camadas de "nós" conectados, inspiradas de forma livre no jeito como neurônios se comunicam. Pela IBM, o "profundo" se refere à quantidade de camadas da rede, e uma rede com mais de três camadas, contando a de entrada e a de saída, já é tratada como deep learning.</p>
    <p>A diferença prática está no esforço humano. No machine learning clássico, especialistas costumam escolher quais características dos dados o modelo deve olhar, como o valor de uma compra e o horário para detectar fraude. No deep learning, a própria rede extrai boa parte dessas características de dados brutos, como pixels de foto ou ondas de som. O preço é que ela costuma precisar de bem mais dados e de mais poder de computação.</p>
    <p>É por isso que reconhecimento de voz, tradução e identificação de rostos deram um salto com o deep learning. Quando você usa o <a href="/artigos/google-tradutor-no-celular-camera-conversa-e-modo-offline">Google Tradutor com a câmera</a>, há redes neurais trabalhando.</p>

    <h2>Onde entra a IA generativa</h2>
    <p>A IA generativa é o tipo de IA que cria conteúdo novo: textos, imagens, músicas, vídeos. Pela definição do Google, ela aprende padrões de dados existentes, geralmente treinada primeiro de forma não supervisionada e depois refinada com aprendizado supervisionado ou por reforço. A IBM acrescenta que ela usa modelos de base treinados com enorme quantidade de dados sem rótulo, que podem ser adaptados a novos usos.</p>
    <p>Os chatbots que você conhece e os geradores de imagem são exemplos. Eles pertencem à família do deep learning, que pertence ao machine learning, que pertence à IA. Dá para visualizar assim:</p>
    <table>
      <thead>
        <tr><th>Termo</th><th>O que é</th><th>Exemplo do dia a dia</th></tr>
      </thead>
      <tbody>
        <tr><td>Inteligência artificial</td><td>Guarda-chuva: máquinas que imitam tarefas humanas</td><td>Assistente de voz, recomendação de filmes</td></tr>
        <tr><td>Machine learning</td><td>Aprender a partir de dados, sem regras escritas à mão</td><td>Filtro de spam, análise de risco de crédito</td></tr>
        <tr><td>Deep learning</td><td>ML com redes neurais de muitas camadas</td><td>Reconhecimento de voz, tradução por câmera</td></tr>
        <tr><td>IA generativa</td><td>Cria conteúdo novo a partir de padrões</td><td>Chatbot que escreve, gerador de imagem</td></tr>
      </tbody>
    </table>
    <p>Para ver como o texto vira números dentro desses modelos, o guia sobre <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto</a> é o passo seguinte, e a evolução para modelos que veem e ouvem está em <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA multimodal</a>.</p>

    <h2>Por que essa diferença importa para você</h2>
    <p>Saber onde cada ferramenta se encaixa ajuda a prever limites. Um modelo de machine learning clássico, como o de crédito de um banco, decide sobre dados em tabela e é treinado para uma tarefa. Um modelo generativo responde a quase qualquer pedido em linguagem natural, mas pode inventar fatos, fenômeno explicado em <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>. E qualquer modelo treinado com dados enviesados reproduz o viés, tema de <a href="/artigos/vies-em-ia-o-que-e-exemplos-e-como-perceber-na-pratica">viés em IA</a>.</p>
    <p>Também ajuda a decodificar o marketing. Quando uma empresa diz "tem IA", pergunte qual tipo: regras, aprendizado de máquina, deep learning ou generativa? Um sistema que apenas segue um roteiro fixo é diferente de um modelo que aprende com dados. Para comparar os assistentes mais populares sem se perder em termos, use o guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">qual IA escolher</a>.</p>
    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Se uma ferramenta promete "IA" sem explicar o que ela aprende nem com quais dados, trate a promessa com cautela. O guia de <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher ferramenta de IA com segurança</a> traz perguntas para fazer antes de contratar.</p></div>

    <h2>Termos vizinhos que aparecem junto</h2>
    <p>Quatro palavras surgem sempre ao lado desses conceitos. <strong>Modelo</strong> é o programa treinado, o "cérebro" depois do estudo. <strong>Treinamento</strong> é a fase em que ele aprende. <strong>Inferência</strong> é quando ele já pronto responde a você. <strong>Prompt</strong> é o pedido que você escreve. Para tirar mais dos modelos generativos, vale aprender a pedir bem, como ensina o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">comandos que funcionam</a>.</p>
    <p>Outros conceitos mais avançados ficam para depois: <a href="/artigos/rag-na-ia-como-chatbot-responde-com-base-nos-seus-documentos">RAG</a>, que liga o chatbot aos seus documentos, os <a href="/artigos/modos-de-raciocinio-em-ia-quando-ligar-o-pensar-e-quando-nao-vale">modos de raciocínio</a>, os <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agentes de IA</a> e os modelos de <a href="/artigos/ia-codigo-aberto-o-que-muda-para-quem-usa">código aberto</a>. Para consulta rápida, use o <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de inteligência artificial</a>.</p>

    <h2>Erros comuns de quem está começando</h2>
    <ul class="checklist">
      <li>Usar "IA" e "ChatGPT" como sinônimos: o chatbot é um exemplo de IA generativa, não a IA inteira.</li>
      <li>Achar que todo sistema com IA aprende sozinho enquanto você usa: muitos são treinados antes e ficam fixos.</li>
      <li>Imaginar que mais camadas significa sempre mais inteligente: a profundidade ajuda em certas tarefas e custa mais dados e energia.</li>
      <li>Confiar cegamente na saída do modelo, sem checar fatos importantes.</li>
      <li>Ignorar a privacidade ao mandar dados pessoais para qualquer ferramenta, ponto que os <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">erros comuns de quem começa</a> reforçam.</li>
    </ul>

    <h2>Para guardar</h2>
    <p>Pense em bonecas russas: a maior é a IA, dentro dela está o machine learning, dentro dele o deep learning, e a IA generativa é a família de modelos que cria conteúdo e costuma morar nas camadas mais fundas. Com isso na cabeça, notícias e propagandas ficam bem mais fáceis de decifrar.</p>
    <p>Quer praticar? Abra um chatbot, peça que ele explique esses quatro termos com um exemplo da sua profissão e compare com este texto. Depois, continue na categoria <a href="/categoria/iniciantes">IA para iniciantes</a> e veja como ilustrar ideias com o guia de <a href="/artigos/como-criar-imagens-com-ia-guia-passo-a-passo">criar imagens com IA</a>.</p>
  `,
  faq: [
    {
      question: "Qual é a diferença entre IA e machine learning?",
      answer:
        "IA é o campo amplo de máquinas que imitam tarefas humanas. Machine learning é uma parte dela, em que o modelo aprende a partir de dados em vez de seguir regras escritas por uma pessoa. Todo machine learning é IA, mas nem toda IA usa machine learning.",
    },
    {
      question: "Deep learning é o mesmo que machine learning?",
      answer:
        "Não. Deep learning é um tipo de machine learning que usa redes neurais com muitas camadas e extrai sozinho boa parte das características dos dados brutos. Segundo a IBM, uma rede com mais de três camadas, contando entrada e saída, é tratada como deep learning.",
    },
    {
      question: "ChatGPT é machine learning ou IA generativa?",
      answer:
        "É IA generativa, que pertence à família do machine learning e costuma usar deep learning por baixo. Os termos não competem entre si: descrevem camadas do mesmo campo, da mais ampla (IA) até a que cria conteúdo novo, como texto e imagem.",
    },
    {
      question: "Preciso saber programar para entender esses conceitos?",
      answer:
        "Não. Para usar as ferramentas e escolher bem, basta entender a ideia: aprender com exemplos, camadas de rede neural e criação de conteúdo. A programação só é necessária para quem quer construir ou treinar os próprios modelos.",
    },
    {
      question: "IA generativa aprende com o que eu digito?",
      answer:
        "Depende da ferramenta e das configurações. Alguns serviços podem usar conversas para melhorar modelos, outros oferecem opção de desligar. Leia a política de privacidade, evite dados sensíveis e use chat temporário quando houver essa opção.",
    },
  ],
  quiz: [
    {
      question: "Qual termo é o mais amplo dos quatro?",
      options: ["Deep learning", "Inteligência artificial", "IA generativa"],
      answer: 1,
      explanation:
        "A inteligência artificial é o guarda-chuva. Machine learning está dentro dela, deep learning dentro do machine learning, e a IA generativa usa essas técnicas para criar conteúdo.",
    },
    {
      question: "O que o filtro de spam do e-mail é um exemplo de?",
      options: ["Aprendizado supervisionado", "Geração de imagem", "Computação quântica"],
      answer: 0,
      explanation:
        "O filtro aprende com mensagens já marcadas como spam ou não spam, o que é aprendizado supervisionado de classificação.",
    },
  ],
};
