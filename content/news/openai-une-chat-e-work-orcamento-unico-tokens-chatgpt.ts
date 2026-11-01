import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-une-chat-e-work-orcamento-unico-tokens-chatgpt",
  title: "ChatGPT vai unir Chat e Work e cobrar tudo de um orçamento único de tokens",
  summary:
    "Em dezembro, o ChatGPT junta Chat e Work e os planos Plus, Pro e Business passam a gastar de um só orçamento de tokens compartilhado com o Codex.",
  author: "Bruno Danello",
  sourceName: "The Decoder, OpenAI",
  sourceUrl: "https://the-decoder.com/openais-upcoming-chat-and-work-merger-in-chatgpt-signals-the-end-of-all-you-can-prompt-pricing/",
  date: "2026-11-01",
  publishedAt: "2026-11-01T07:40:00-03:00",
  topic: "lancamentos",
  imageQuery: "OpenAI logo",
  content: `
    <p>A OpenAI vai juntar os dois modos de uso do ChatGPT, Chat e Work, numa única interface a partir de dezembro, e vai mudar a forma de medir o uso dos planos pagos. Em vez de cotas separadas, os planos Plus, Pro e Business passarão a consumir de um orçamento único de tokens, compartilhado entre o ChatGPT e o Codex. A informação foi publicada neste domingo, 1º de novembro de 2026, pelo The Decoder, que se apoia na página de ajuda da OpenAI sobre os limites de uso e em um anúncio anterior da empresa sobre a fusão.</p>
    <p>Para o The Decoder, o movimento marca o fim do "tudo que você conseguir digitar" nos planos de assinatura. A leitura é do veículo, não uma declaração da OpenAI, mas os detalhes da mudança ajudam a entender por quê. A reportagem não traz preços de plano, preço de créditos extras nem o tamanho exato dos orçamentos de tokens, então esses números ainda precisam ser conferidos na página oficial quando a mudança entrar em vigor.</p>

    <h2>O que muda na prática</h2>
    <p>Hoje, quem usa o ChatGPT escolhe entre dois modos de operação e convive com 11 configurações de modelo, segundo o The Decoder. O Chat é a conversa tradicional. O Work é a parte agêntica, em que o ChatGPT executa tarefas mais longas, mexe em arquivos e conecta ferramentas. Na fusão, os recursos agênticos do Work passam para a interface principal, e a escolha entre dois modos deixa de existir.</p>
    <p>A segunda mudança é a de contabilidade. O consumo passa a ser medido em tokens, a unidade que mede quanto texto o modelo lê e gera. Modelos mais pesados e tarefas mais complexas gastam o orçamento mais depressa. Segundo a reportagem, as conversas com modelos da linha Instant não entram nessa conta. Na prática, o ChatGPT continua sendo um serviço de assinatura de valor fixo, mas apenas no papel, nas palavras do veículo, porque quem usa muito os modelos mais capazes e os agentes vai bater no teto mais cedo.</p>
    <p>A OpenAI também promete transparência: dentro das configurações, o usuário poderá ver quanto ainda tem de saldo e quando o orçamento será renovado. Quando o limite acaba, há três saídas: esperar a renovação, migrar para um plano maior ou comprar créditos adicionais.</p>

    <h2>Um orçamento só para ChatGPT e Codex</h2>
    <p>A parte que mais afeta quem programa é o compartilhamento. Com o orçamento único, uma tarde inteira de trabalho no Codex reduz o que sobra para conversar no ChatGPT, e o contrário também vale. Até aqui, como mostramos em <a href="/noticias/openai-dobra-limites-pro-100-500-codex-work">OpenAI dobra os limites de Codex e Work nos planos Pro 100 e Pro 500</a>, as cotas de Work e de Codex eram tratadas como medidas separadas. Agora elas viram uma só.</p>
    <p>O The Decoder interpreta o aumento recente de limites como uma preparação para essa fusão. A lógica é simples: antes de pedir que o cliente aceite um orçamento mais difícil de entender, a empresa deixa a cota mais folgada. É uma interpretação do veículo. A OpenAI não disse que as duas decisões estão ligadas, e a reportagem não traz o tamanho do orçamento final em relação às cotas antigas.</p>
    <p>Outro ponto é a simplificação. O ChatGPT acumulou botões, modos e modelos a ponto de a própria reportagem citar críticas à complexidade crescente. Juntar tudo numa interface é uma resposta a isso. A Anthropic fez algo parecido ao unir o Cowork e o chat do Claude, como descrevemos em <a href="/noticias/claude-unifica-cowork-chat-lanca-docs-slides">Anthropic unifica Cowork e chat num só Claude</a>. Os dois maiores laboratórios caminham para um único assistente que conversa e age no mesmo lugar.</p>

    <h2>Por que a medição por tokens incomoda</h2>
    <p>Quem paga assinatura gosta de previsibilidade. Contar mensagens é fácil de entender: são tantas por hora ou por dia. Contar tokens exige noção de quanto cada pedido consome, e isso varia muito. Um prompt curto a um modelo leve gasta quase nada. Um pedido longo, com arquivos anexos, a um modelo de raciocínio pesado e com várias etapas de agente pode gastar centenas de vezes mais.</p>
    <p>É por isso que o The Decoder fala em resultados de menor qualidade para quem usa muito nos planos mais baratos: com o teto de tokens, a tendência é o usuário trocar para um modelo mais leve para não ficar sem saldo. A empresa ganha previsibilidade de custo. O cliente ganha clareza de saldo, mas perde a sensação de uso ilimitado.</p>
    <p>Essa tensão não é exclusiva da OpenAI. As assinaturas de IA nasceram baratas e generosas para atrair usuários, enquanto o custo de rodar modelos e agentes continua alto. O caminho natural é aproximar a assinatura do consumo real, algo que já aparecia em decisões anteriores sobre planos e créditos de API. O que torna este caso relevante é o tamanho da base afetada, já que o ChatGPT é a porta de entrada de IA de grande parte dos usuários no mundo e no Brasil.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa o ChatGPT para trabalhar, a mudança só chega em dezembro, então há tempo para se preparar. O primeiro passo é descobrir o seu padrão de uso. Quem usa o ChatGPT principalmente para conversar, resumir e escrever, com os modelos mais leves, tende a sentir pouca diferença, já que o Instant fica fora da conta. Quem roda tarefas longas, anexa documentos grandes ou programa com o Codex deve ficar mais atento ao saldo.</p>
    <p>O segundo passo é decidir o plano com base em uso real, não em hábito. Nosso guia <a href="/artigos/chatgpt-plus-vale-a-pena-review-2026">ChatGPT Plus vale a pena?</a> ajuda a pensar nessa conta, e o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> mostra alternativas para quem sentir que o teto ficou apertado. Se você presta serviços com IA para clientes, revise o custo por entrega, porque um orçamento compartilhado muda a margem de quem usa o Codex e o ChatGPT na mesma assinatura.</p>
    <p>O terceiro passo é aproveitar o que dá para economizar. Usar o modelo mais leve para tarefas simples, reservar o modelo pesado para o que realmente exige raciocínio e evitar anexar arquivos enormes sem necessidade são hábitos que valem em qualquer plano com medição por tokens. Escrever pedidos claros também ajuda, porque reduz idas e vindas. Se quiser treinar isso, o texto <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">Prompt engineering: como escrever comandos que funcionam</a> traz um roteiro prático.</p>

    <h2>O que ainda não se sabe</h2>
    <p>A reportagem deixa lacunas importantes. Não há valores de plano, nem o tamanho do orçamento de tokens de cada nível, nem o preço dos créditos extras. Também não está claro como a OpenAI tratará, na transição, os assinantes que hoje têm cotas separadas de Work e Codex, nem se o orçamento único vai ser maior, igual ou menor do que a soma das cotas atuais. A data exata de dezembro também não foi informada.</p>
    <p>Vale acompanhar a página de ajuda da OpenAI sobre limites de uso e o aviso dentro do aplicativo. Se a empresa publicar os números, voltamos ao assunto com uma tabela comparando os planos. Até lá, o recado é planejar com cautela: confira quanto você realmente usa hoje e evite contratar um plano maior apenas por precaução antes de ver as regras finais.</p>
    <p>Nota de transparência: esta notícia se apoia principalmente em uma reportagem do The Decoder, que cita a página de ajuda da OpenAI e um anúncio anterior da empresa. Não conseguimos confirmar os detalhes numéricos diretamente com a OpenAI, e por isso eles não aparecem aqui. As interpretações sobre o fim do uso ilimitado são do veículo.</p>
  `,
  faq: [
    {
      question: "O que a OpenAI vai mudar no ChatGPT em dezembro?",
      answer: "Os modos Chat e Work serão unidos numa só interface, e os planos Plus, Pro e Business passarão a usar um orçamento único de tokens, compartilhado com o Codex, segundo o The Decoder.",
    },
    {
      question: "Todas as conversas vão gastar o orçamento de tokens?",
      answer: "Não. Segundo a reportagem, conversas com modelos da linha Instant não contam contra o orçamento. Modelos mais pesados e tarefas mais complexas gastam o saldo mais rápido.",
    },
    {
      question: "O que acontece quando o orçamento acaba?",
      answer: "O usuário pode esperar a renovação, migrar para um plano maior ou comprar créditos extras. O saldo e a data de renovação ficam visíveis nas configurações.",
    },
  ],
};
