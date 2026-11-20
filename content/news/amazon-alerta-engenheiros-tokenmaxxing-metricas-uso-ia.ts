import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "amazon-alerta-engenheiros-tokenmaxxing-metricas-uso-ia",
  title: "Amazon avisa engenheiros: usar mais IA não prova que você trabalha mais",
  summary:
    "Memorando interno da Amazon diz que contar tokens e uso de IA é medida falha de produtividade, mas insiste que quem não adota a tecnologia fica para trás.",
  author: "Bruno Danello",
  sourceName: "The Next Web, CNBC, Business Insider",
  sourceUrl: "https://thenextweb.com/news/amazon-tokenmaxxing-memo-engineers-ai-metrics",
  date: "2026-10-28",
  publishedAt: "2026-10-28T09:50:00-03:00",
  topic: "mercado-trabalho",
  imageQuery: "Amazon headquarters Seattle",
  coverImage: {
    url: "/images/news/tokenmaxxing-uso-de-ia-nao-e-produtividade.jpg",
    width: 1600,
    height: 900,
    credit: "Arte original do Portal da AI",
    creditUrl: "https://www.portaldaai.com.br",
  },
  content: `
    <p>A Amazon publicou um memorando que manda um recado direto aos seus engenheiros de software: usar o máximo possível de inteligência artificial, sem olhar para o resultado, não é sinal de bom trabalho. O texto, divulgado em 27 de outubro de 2026 junto com uma atualização das diretrizes para engenheiros de desenvolvimento de software, foi assinado por Terk Terkowitz, vice-presidente e engenheiro de destaque da área de lojas da empresa. Segundo a cobertura do The Next Web, que cita a CNBC, a mensagem já circulava internamente desde setembro.</p>

    <p>O assunto tem um nome que virou gíria no setor: "tokenmaxxing". Token é a unidade em que os modelos de IA contam texto, e o termo descreve a prática de gastar o máximo de tokens possível, às vezes só para subir em um ranking interno de uso de IA. O alerta da Amazon é um dos sinais mais claros de que grandes empresas estão revendo a forma de medir o trabalho feito com ajuda de IA.</p>

    <h2>O que diz o memorando</h2>
    <p>De acordo com a reportagem, o documento classifica como "profundamente falhas" as medidas baseadas em consumo de tokens, adoção de ferramentas de IA e contagem de alterações e revisões de código. O argumento é que, quando essas métricas de entrada viram meta, e não apenas um indicador, os custos e a complexidade tendem a subir sem que o resultado melhore.</p>

    <p>O texto usa os princípios de liderança da própria Amazon para reforçar o ponto. Segundo ele, o tokenmaxxing vai contra a frugalidade, e medir linhas de código contraria a ideia de inventar e simplificar. Ao mesmo tempo, o memorando não manda abandonar os números. Diz que eles se relacionam bem com resultados que importam e devem ser usados "com cuidado e bom senso".</p>

    <h2>Um recado duplo: use IA, mas com propósito</h2>
    <p>Quem lê o memorando como um freio no uso de IA entendeu só metade. O mesmo texto afirma que as equipes que a Amazon chama de "equipes de fronteira", as que mais adotaram IA, mostram produtividade e entrega maiores, e que pessoas e times que não adotam a tecnologia estão ficando para trás. Os gestores devem estudar os 10% de equipes com menor adoção para entender o motivo e conferir se os 10% do topo entregam mais em troca.</p>

    <p>Os líderes, por sua vez, devem usar as ferramentas de IA em trabalho de produção e saber descrever uma tarefa em que a IA ajudou e outra em que não ajudou. Terkowitz escreveu que, se o trabalho de alguém não se beneficia das ferramentas atuais, isso é "uma constatação, não uma falha". O memorando ainda diz que, quaisquer que sejam as melhores práticas do futuro, a IA estará "no centro" da engenharia de software.</p>

    <h2>O histórico dos rankings internos</h2>
    <p>A reportagem lembra que a Amazon encerrou em maio um ranking interno de tokenmaxxing, depois de descobrir que funcionários gastavam tokens apenas para subir de posição, segundo a CNBC. O Business Insider já havia relatado que a empresa acompanhava o uso de IA, o consumo de tokens e as linhas de código dos engenheiros, e que os rankings causavam atrito entre parte dos funcionários.</p>

    <p>Uma porta-voz da Amazon disse à CNBC que a empresa não impôs limite ao uso de tokens pelos funcionários. Marc Brooker, vice-presidente e engenheiro de destaque da AWS, afirmou que a empresa olha para a "velocidade de entrega de funcionalidades", ou seja, quantos lançamentos as equipes fazem e quantas mudanças bem-sucedidas chegam à produção, e que não quer ver esforço desperdiçado em problemas que não importam.</p>

    <h2>O contexto: empresas de olho na conta da IA</h2>
    <p>O memorando chega em um momento em que o custo do uso de IA entrou na pauta das diretorias. A reportagem cita que a Microsoft definiu orçamentos de IA por divisão em agosto, que o diretor de tecnologia da Uber disse que a era do tokenmaxxing está acabando, e que a Accenture limitou em outubro o gasto de seus funcionários com Claude a US$ 29 por mês, segundo o 404 Media. Já tratamos desse último caso na nossa cobertura sobre o <a href="/noticias/accenture-limita-gasto-claude-29-dolares-por-funcionario">limite de US$ 29 por funcionário</a>.</p>

    <p>Outros sinais apontam na mesma direção. A previsão da Gartner de que o <a href="/noticias/gartner-custo-agentes-ia-quintuplica-2028">custo dos agentes de IA pode quintuplicar até 2028</a> e a decisão da Workday de adotar <a href="/noticias/workday-cobranca-por-uso-agentes-ia-orcamento-mao-de-obra">cobrança por uso de agentes de IA</a> mostram que a fase de liberar tudo e medir depois está sendo substituída por controle de gasto e busca de retorno. Mesmo a <a href="/noticias/uber-chatgpt-work-30-mil-funcionarios">adoção em massa do ChatGPT na Uber</a> vem acompanhada de perguntas sobre o que, de fato, melhora.</p>

    <h2>O que a reportagem não resolve</h2>
    <p>Vale separar o que é fato do que é interpretação. O memorando é de uma empresa específica e fala de engenheiros de software, não de todo trabalhador que usa IA. Ele não traz um número novo de produtividade nem diz qual métrica deve substituir a contagem de tokens, apenas lista a velocidade de entrega como exemplo. A conclusão de que as equipes mais engajadas com IA entregam mais é afirmação da própria Amazon, relatada pela imprensa, sem verificação independente.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo longe de uma big tech, a lição vale para qualquer pessoa ou pequeno negócio que usa IA: o que conta é o resultado, não a quantidade de uso. Medir quantas vezes você abriu o ChatGPT, quantas mensagens enviou ou quantas horas passou com um agente trabalhando diz pouco. Perguntas melhores são quanto tempo a tarefa levava antes e leva agora, se a qualidade do que você entrega subiu e quanto você paga por isso.</p>

    <p>Se você paga por assinaturas, créditos de API ou ferramentas por uso, vale revisar uma vez por mês o que realmente trouxe retorno e cortar o que virou hábito sem benefício. Nosso guia sobre <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">como usar IA para reduzir custos operacionais em pequenos negócios</a> traz um caminho prático, e o texto sobre <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto</a> explica por que prompts longos e conversas enormes custam mais do que parece. Escolher o <a href="/artigos/modelo-pequeno-ou-grande-de-ia-velocidade-custo-e-qualidade-para-quem-usa">modelo pequeno ou grande</a> certo para cada tarefa costuma ser a economia mais fácil.</p>

    <p>Para quem é empregado, o recado do memorando também é útil. Em muitas empresas, o uso de IA começa a ser observado, e é provável que gestores comecem a perguntar não só "você usa?", mas "o que melhorou?". Registrar exemplos concretos, como um relatório que ficou pronto em uma hora em vez de quatro, vale mais do que um número de uso. E, como o próprio texto da Amazon admite, se a sua função não ganha com as ferramentas de hoje, isso pode ser só uma característica do trabalho, não um defeito seu.</p>

    <p>Este texto é análise nossa a partir da reportagem do The Next Web, que cita a CNBC, o Business Insider e declarações de executivos da Amazon. A notícia veio de uma fonte principal e os detalhes acima refletem o que essa reportagem informa, sem confirmação independente adicional.</p>
  `,
};
