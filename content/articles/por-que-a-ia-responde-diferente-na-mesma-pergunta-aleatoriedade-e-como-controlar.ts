import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "por-que-a-ia-responde-diferente-na-mesma-pergunta-aleatoriedade-e-como-controlar",
  title: "Por que a IA responde diferente à mesma pergunta e como controlar",
  seoTitle: "Por que a IA responde diferente à mesma pergunta",
  excerpt:
    "Entenda por que a IA dá respostas diferentes à mesma pergunta: aleatoriedade, temperatura e contexto. Veja o que você controla e prompts para respostas mais estáveis.",
  metaDescription:
    "Por que a IA responde diferente à mesma pergunta? Entenda a aleatoriedade na escolha das palavras, o papel da temperatura e como obter respostas mais estáveis na prática.",
  category: "iniciantes",
  articleSubcategory: "conceitos",
  date: "2026-10-25",
  readTime: 6,
  imageQuery: "dice rolling table closeup",
  seed: 715,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA responde diferente porque escolhe cada palavra com base em probabilidades, e parte dessa escolha tem sorteio embutido, não porque esteja confusa ou mudando de opinião.",
    "A temperatura é o ajuste que controla esse sorteio: valor baixo deixa a resposta mais previsível, valor alto abre espaço para variação, mas nos chats comuns você não mexe nele.",
    "Quem não tem acesso ao ajuste consegue respostas mais estáveis com um prompt específico, com formato definido, exemplos e pedido de checagem.",
  ],
  content: `
    <p>A IA responde diferente à mesma pergunta porque escolhe cada palavra da resposta por probabilidade, e essa escolha inclui um sorteio controlado. Ao perguntar duas vezes, o ponto de partida é igual, mas o caminho pode se separar já na primeira palavra. Isso não indica defeito nem mudança de opinião.</p>

    <p>Quem usa chat de IA no dia a dia já passou por isso: pede uma legenda, gosta, pede de novo e vem outra bem diferente. Ou faz uma pergunta de cálculo e recebe duas respostas. Este guia explica o motivo em linguagem simples, mostra o que você controla e quando a variação é útil ou perigosa.</p>

    <h2>Como a IA escolhe cada palavra</h2>

    <p>Um modelo de linguagem não guarda respostas prontas. Ele gera o texto aos poucos, em pedaços chamados tokens, e a cada passo calcula uma lista de próximos tokens possíveis com a probabilidade de cada um. A página do Google sobre <a href="https://developers.google.com/machine-learning/crash-course/llm/transformers" target="_blank" rel="noopener noreferrer">modelos de linguagem grandes</a> descreve justamente essa ideia: o modelo prevê um token ou sequência de tokens e consegue gerar probabilidades para o que vem a seguir.</p>

    <p>Se a frase é "O céu está", "azul" tem probabilidade alta e "nublado" tem uma menor. Escolher sempre o primeiro da lista deixaria o texto repetitivo. Por isso os sistemas sorteiam entre as opções mais prováveis. Para entender o que é um token, veja o guia de <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto</a>.</p>

    <p>Uma escolha diferente logo no início muda tudo o que vem depois, porque cada palavra nova entra como contexto para a próxima. É assim que duas respostas partem da mesma pergunta e chegam a lugares diferentes.</p>

    <h2>O que é temperatura e o que ela muda</h2>

    <p>Temperatura é o nome do ajuste que regula o tamanho desse sorteio. A <a href="https://ai.google.dev/gemini-api/docs/prompting-strategies" target="_blank" rel="noopener noreferrer">documentação do Gemini para desenvolvedores</a> (consultada em 25/10/2026) define que a temperatura controla o grau de aleatoriedade na escolha dos tokens. Valores baixos servem para prompts que pedem resposta mais determinística, e valores altos podem trazer resultados mais diversos ou criativos. Com temperatura 0, o texto escolhe sempre o token de maior probabilidade.</p>

    <table>
      <thead><tr><th>Temperatura</th><th>Efeito</th><th>Bom para</th></tr></thead>
      <tbody>
        <tr><td>Baixa (perto de 0)</td><td>Respostas parecidas a cada tentativa</td><td>Extrair dados, classificar, responder FAQ</td></tr>
        <tr><td>Média</td><td>Equilíbrio entre clareza e variedade</td><td>E-mails, resumos, explicações</td></tr>
        <tr><td>Alta</td><td>Respostas mais variadas e imprevisíveis</td><td>Ideias, nomes, legendas, brainstorm</td></tr>
      </tbody>
    </table>

    <p>Vale um aviso: a mesma documentação informa que modelos mais novos, como o Gemini 4 e versões a partir da 3.6, ignoram valores personalizados de temperatura e recomenda removê-los da configuração. Ou seja, em parte dos modelos atuais o ajuste nem está mais disponível para quem programa. Em produtos de chat para o público, ele costuma ficar escondido.</p>

    <h2>Outros motivos para a resposta mudar</h2>

    <p>A temperatura não é a única explicação. Quatro outros fatores fazem a resposta variar mesmo quando a sua pergunta parece idêntica.</p>

    <ul>
      <li>Contexto da conversa: o que você escreveu antes entra na conta. A mesma pergunta no meio de um chat longo e num chat novo gera respostas diferentes. Veja como isso funciona na <a href="/artigos/memoria-longa-em-ia-assistente-que-lembra-de-voce">memória longa em IA</a>.</li>
      <li>Versão do modelo: o fornecedor atualiza o modelo, e a resposta de hoje pode não bater com a de três meses atrás.</li>
      <li>Ferramentas ativas: se a IA pesquisou na web ou leu um arquivo, a resposta depende do que encontrou naquele momento.</li>
      <li>Modo de raciocínio: modelos que "pensam" antes de responder fazem caminhos diferentes. O guia de <a href="/artigos/modos-de-raciocinio-em-ia-quando-ligar-o-pensar-e-quando-nao-vale">modos de raciocínio</a> explica quando vale ligar.</li>
    </ul>

    <p>Por isso, mesmo com temperatura 0, a igualdade perfeita nem sempre aparece. O esperado é uma resposta mais parecida, não um clone.</p>

    <h2>Quando a variação ajuda e quando atrapalha</h2>

    <p>Variar é ótimo para criar. Se você pede dez nomes para uma loja de bolos, quer dez nomes diferentes, e refazer a pergunta rende mais opções. Quem trabalha com redes sociais usa isso a favor, como no caso das <a href="/artigos/instagram-para-pequeno-negocio-com-ia-calendario-reels-e-legendas">legendas e reels do Instagram</a>.</p>

    <p>Atrapalha quando o assunto é fato, número ou regra. Imagine uma contadora de Belo Horizonte que pergunta duas vezes sobre o prazo de uma obrigação e recebe duas datas. Uma das respostas está errada, e nenhuma das duas vem com aviso. Nesse tipo de tarefa, a divergência entre respostas é um alerta: use-a como sinal para conferir na fonte oficial. O <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">guia sobre alucinação de IA</a> traz um passo a passo de checagem.</p>

    <p>Uma regra prática: se a tarefa tem uma única resposta certa, desconfie de qualquer resposta que mude entre tentativas. Se a tarefa aceita várias respostas boas, a variação é parte do serviço.</p>

    <h2>Como conseguir respostas mais estáveis sem mexer na temperatura</h2>

    <p>Mesmo sem acesso ao ajuste, você reduz a variação com prompts melhores. Quanto menos espaço o pedido deixa para interpretação, menos caminhos a IA tem para seguir. O <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">guia de prompt engineering</a> aprofunda cada técnica abaixo.</p>

    <h3>Defina o formato da resposta</h3>

    <pre><code>Responda em uma tabela com três colunas: item, valor em reais e observação. Não escreva nada fora da tabela.</code></pre>

    <h3>Dê um exemplo do que você espera</h3>

    <pre><code>Classifique cada mensagem como "dúvida", "reclamação" ou "elogio". Exemplo: "Meu pedido não chegou" = reclamação. Agora classifique: "Vocês entregam aos domingos?"</code></pre>

    <h3>Peça a fonte ou a conferência</h3>

    <pre><code>Responda apenas com o que estiver no texto abaixo. Se a informação não estiver lá, escreva "não consta no texto". Texto: [cole aqui]</code></pre>

    <p>A terceira técnica é a mais forte para trabalho com documentos, porque limita a IA ao material que você forneceu. É o princípio por trás do <a href="/artigos/rag-na-ia-como-chatbot-responde-com-base-nos-seus-documentos">RAG</a>, em que o chatbot responde com base nos seus arquivos.</p>

    <h2>Exemplo: o mesmo pedido em dois usos diferentes</h2>

    <p>Considere o pedido "escreva uma mensagem de cobrança educada para um cliente atrasado". Rodando três vezes, você recebe três textos: um mais curto, um mais formal e um mais caloroso. Para quem atende um negócio, isso é uma vantagem, porque dá escolha e permite combinar o melhor de cada versão.</p>

    <p>Agora considere "qual alíquota se aplica a este serviço no meu município?". Rodando três vezes, as respostas podem divergir, e nenhuma delas substitui a consulta ao contador ou à prefeitura. Aqui a variação mostra que o modelo não tem certeza, e o caminho é buscar a fonte, não decidir por sorteio.</p>

    <p>O mesmo vale para quem estuda: ao pedir um resumo de matéria, a divergência entre duas versões pode indicar um ponto que o texto original deixa ambíguo. Comparar as duas respostas com o material de aula é um bom exercício, e transforma a variação em ferramenta de estudo em vez de problema. Só não trate nenhuma das duas como gabarito.</p>

    <h2>Erros comuns ao lidar com respostas diferentes</h2>

    <ol>
      <li>Refazer a pergunta até sair a resposta que você queria e tratar essa como a verdade.</li>
      <li>Achar que a IA "mentiu" porque mudou de resposta. Ela não tem memória da resposta anterior em um chat novo.</li>
      <li>Comparar duas ferramentas diferentes e concluir que uma está errada, sem checar a fonte. A escolha entre elas está no guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a>.</li>
      <li>Usar um detector de texto de IA como prova. O artigo sobre <a href="/artigos/detector-de-texto-de-ia-funciona-ou-nao-como-saber-se-foi-escrito-por-ia">detectores de IA</a> mostra por que eles erram.</li>
      <li>Deixar dados sensíveis num chat só para testar a variação. Se precisar, apague depois: veja como em <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">apagar histórico e usar chat temporário</a>.</li>
    </ol>

    <p>Quer ir além do básico? A diferença entre os tipos de sistema está em <a href="/artigos/ia-machine-learning-e-deep-learning-qual-a-diferenca-e-onde-entra-a-generativa">IA, machine learning e deep learning</a>, e o caso das imagens é parecido, como mostra o texto sobre <a href="/artigos/como-a-ia-gera-imagens-do-ruido-ao-pixel-e-por-que-erra-maos-e-textos">como a IA gera imagens</a>. Na próxima vez que a resposta mudar, pergunte-se se a tarefa aceita variação e ajuste o prompt de acordo.</p>
  `,
  faq: [
    {
      question: "Por que o ChatGPT dá respostas diferentes para a mesma pergunta?",
      answer:
        "Porque modelos de linguagem escolhem cada palavra por probabilidade e usam um sorteio entre as opções mais prováveis. Além disso, o contexto da conversa, a versão do modelo e o uso de ferramentas como pesquisa na web também mudam o resultado. A diferença é esperada e não indica erro por si só.",
    },
    {
      question: "O que é temperatura na inteligência artificial?",
      answer:
        "É o ajuste que controla o grau de aleatoriedade na escolha das palavras. Segundo a documentação do Gemini, valores baixos geram respostas mais previsíveis e valores altos permitem resultados mais diversos ou criativos. Em chats para o público, esse ajuste costuma não aparecer para o usuário.",
    },
    {
      question: "Dá para fazer a IA responder sempre igual?",
      answer:
        "Nem sempre. Com temperatura 0 a escolha tende a ser a mais provável, mas mudanças no contexto, na versão do modelo ou nas ferramentas ativas ainda podem alterar o texto. Para ficar mais perto disso, defina formato, dê exemplos e peça que responda só com base em um texto fornecido.",
    },
    {
      question: "Resposta diferente significa que a IA errou?",
      answer:
        "Não necessariamente. Em tarefas criativas, várias respostas podem estar boas. Em tarefas com uma resposta certa, como prazo, valor ou regra, a divergência entre tentativas é sinal para conferir em uma fonte oficial, porque pelo menos uma das respostas está errada.",
    },
    {
      question: "Posso mudar a temperatura no Gemini ou no ChatGPT?",
      answer:
        "Nos aplicativos de chat comuns, em geral não há esse controle. Desenvolvedores que usam a API às vezes têm o parâmetro, mas a documentação do Gemini informa que modelos mais novos ignoram valores personalizados. Confira sempre a documentação do modelo que você usa.",
    },
  ],
  quiz: [
    {
      question: "Qual a melhor reação quando a IA dá duas datas diferentes para um prazo legal?",
      options: [
        "Escolher a mais recente",
        "Conferir na fonte oficial",
        "Perguntar de novo até repetir uma",
      ],
      answer: 1,
      explanation:
        "Quando a tarefa tem uma única resposta certa, a divergência é sinal de alerta. A conferência na fonte oficial é o único jeito seguro de decidir.",
    },
    {
      question: "Qual ajuste deixa a resposta mais previsível?",
      options: ["Temperatura baixa", "Temperatura alta", "Pergunta mais longa"],
      answer: 0,
      explanation:
        "Temperatura baixa reduz o sorteio na escolha das palavras, e o texto tende a ficar mais parecido entre tentativas.",
    },
  ],
};
