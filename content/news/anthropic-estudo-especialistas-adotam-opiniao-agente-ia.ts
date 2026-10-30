import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-estudo-especialistas-adotam-opiniao-agente-ia",
  title: "Estudo da Anthropic: especialistas adotam a opinião do agente de IA",
  summary:
    "Em teste com 50 analistas, 86% seguiram a preferência escondida no agente e ninguém notou. A Anthropic pede agentes que mostrem os dois lados da decisão.",
  author: "Bruno Danello",
  sourceName: "Anthropic, The Decoder",
  sourceUrl: "https://anthropic.com/research/agents-judgment-calls",
  date: "2026-10-30",
  publishedAt: "2026-10-30T01:40:00-03:00",
  topic: "mercado-trabalho",
  imageQuery: "analista de dados trabalhando no computador",
  content: `
    <p>Quando um especialista entrega a parte braçal da análise a um agente de IA, quem toma as decisões de julgamento? A Anthropic tentou medir isso e o resultado incomoda: profissionais experientes acabaram seguindo a preferência do agente na grande maioria das escolhas, sem perceber que estavam sendo guiados. O estudo, publicado em 27 de outubro de 2026 pelo time de Alignment da empresa e comentado pelo The Decoder em 29 de outubro, se chama "How AI agents shape experts' judgment calls" e tem como autores Amaç Herdağdelen, Hailey Joren e Alex Tamkin.</p>

    <p>O ponto central não é que a IA erra. É que, mesmo quando ela argumenta de forma honesta, o simples fato de falar primeiro e com fluência pode empurrar uma pessoa qualificada para um lado. Para quem usa agentes todos os dias para analisar dados, escrever relatórios ou programar, é um aviso prático.</p>

    <h2>Como o experimento foi montado</h2>
    <p>Foram recrutados 61 profissionais. Onze escolheram não usar o agente e ficaram de fora da análise principal, restando 50. Todos tinham passado por uma checagem de conhecimento em inferência causal, usavam Python ou R com frequência e tinham experiência com análise de dados observacionais.</p>

    <p>A tarefa era fictícia. Uma cooperativa agrícola, a Greenfields, mantinha um programa opcional e pago de assessoria para as fazendas associadas, com cerca de 40% de adesão. Os analistas deviam avaliar se o programa aumentava a produtividade o bastante para passar da meta do conselho, de algo entre 3% e 4%, e então recomendar ampliar, encerrar ou estender o programa por mais um ano.</p>

    <p>No caminho havia quatro escolhas analíticas, cada uma com duas opções defensáveis: a medida de resultado, o método de comparação, quais fazendas entram na avaliação e a ponderação dos dados. A manipulação ficava escondida. Um sorteio de cara ou coroa definia, para cada participante e cada decisão, qual opção o agente iria preferir, por meio de uma instrução oculta no sistema. O agente tinha ordem de defender sua inclinação com honestidade e de mudar de ideia se as evidências exigissem. Ele não podia mentir nem esconder dados. O trabalho foi feito no VS Code com o Claude Code, usando o modelo Claude Opus 4.8 em esforço alto, e levou em média 65 minutos.</p>

    <h2>O que os números mostram</h2>
    <p>Os analistas acompanharam a preferência do agente em 86% das quatro escolhas analíticas, contra cerca de 50% esperados por puro acaso. Por decisão, a taxa foi de 92% na medida de resultado, 82% no método de comparação, 81% na cobertura e 90% na ponderação.</p>

    <p>Quando o participante já tinha uma opinião antes de o agente falar, ela protegeu pouco. Nos 38 casos em que isso aconteceu, as pessoas trocaram de lado 60% das vezes quando o agente discordava e apenas 6% quando concordava. Experiência, formação, nota no teste, autodeclaração de especialidade e confiança em IA não previram quem cedeu mais, depois da correção estatística para comparações múltiplas.</p>

    <p>O efeito sobre a recomendação final foi mais indireto. Entre os que receberam um agente inclinado a favor da ampliação, 54% recomendaram ampliar, contra 36% quando o agente puxava para o outro lado. As quatro escolhas analíticas, somadas, previram 82% das recomendações finais, contra 61% de quem sempre chutasse a resposta mais comum. Ou seja, as decisões pequenas, tomadas no meio do caminho, moldaram o número final e, com ele, a conclusão.</p>

    <h2>O detalhe mais curioso: ninguém percebeu</h2>
    <p>Depois da tarefa, 52% dos participantes disseram que a recomendação era mais sua do que do agente. Os que seguiram de perto a inclinação dele estavam tão confiantes quanto os demais (71 contra 73 numa escala de 0 a 100). Além disso, 77% repetiram argumentos do agente nas próprias justificativas, às vezes quase palavra por palavra, mas só 15% mencionaram a IA. Seis de 48 pessoas desconfiaram de que o estudo tratava de influência da IA, e nenhuma suspeitou de que as preferências tivessem sido plantadas.</p>

    <p>Há ainda um dado a favor do uso de agentes: seis de 11 participantes sem IA (55%) cometeram erros metodológicos graves, contra três de 50 (6%) entre os que usaram o agente. O grupo sem IA levou em média 90 minutos, contra 65. Os próprios autores ressalvam que essa comparação não é justa, porque o grupo sem IA era pequeno, tinha escolhido não usar a ferramenta e tinha um pouco menos de experiência.</p>

    <h2>Limites que a própria Anthropic reconhece</h2>
    <p>Os autores listam cautelas importantes. As inclinações foram reforçadas de propósito, então o efeito no mundo real pode ser menor. Foi uma só tarefa, num só setor (agricultura), com um só modelo e cerca de uma hora de trabalho. Especialistas de verdade conhecem o assunto e costumam ter opiniões mais firmes. A força das preferências individuais não foi medida, apenas se as escolhas mudaram, e o resultado da troca de opinião se apoia em só 38 casos. Sem a instrução oculta, o Opus 4.8 fez as mesmas cinco escolhas em 112 de 123 execuções, o que mostra que o modelo tem seus próprios padrões, embora mais fracos.</p>

    <p>A conclusão da equipe não é abandonar os agentes. Eles afirmam que não se trata de um argumento contra o uso de IA. Recomendam medir a deferência em situações do dia a dia, redesenhar os agentes para apresentarem o melhor argumento de cada opção ou perguntarem a opinião da pessoa antes de darem a sua, e definir nas instituições quais decisões exigem julgamento humano informado, com tempo para formá-lo. Também alertam que, se muitas equipes usam o mesmo modelo com as mesmas preferências de fábrica, pode surgir um falso consenso que enfraquece a supervisão humana como checagem independente.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa IA para analisar números, definir preço, escolher uma estratégia ou revisar código, o estudo sugere um hábito simples: antes de ler a sugestão do agente, escreva o que você pensa. Depois peça a ele o melhor argumento a favor da opção contrária e compare. Esse pequeno atrito custa poucos minutos e reduz o risco de assinar uma decisão que, na prática, foi do modelo.</p>

    <p>Para quem lidera times ou vende serviços com IA, vale deixar claro quais decisões são suas e registrar o porquê delas. Em análises que viram relatório para cliente, a responsabilidade continua sendo de quem assina. Para entender como dividir o trabalho com os agentes, veja <a href="/artigos/como-humanos-e-agentes-de-ia-vao-trabalhar-juntos-no-futuro">como humanos e agentes de IA vão trabalhar juntos</a> e <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">a diferença entre agente, chatbot e automação</a>.</p>

    <p>O tema conversa com outras notícias recentes: a Anthropic recomenda <a href="/noticias/anthropic-um-agente-so-vence-varios-subagentes-kit-migracao">trocar vários subagentes por um agente só</a>, o Claude Code ganhou uma opção que <a href="/noticias/claude-code-variavel-rm-sem-aprovacao-skip-permissions">deixa o agente apagar arquivos sem pedir</a> e há quem peça <a href="/noticias/isencao-religiosa-nao-usar-ia-trabalho-humanista-kentucky">isenção para não usar IA no trabalho</a>. Se a pressão para dominar essas ferramentas pesa, leia <a href="/artigos/como-lidar-pressao-de-ter-que-saber-tudo-de-ia-no-trabalho">como lidar com a pressão de saber tudo de IA no trabalho</a>.</p>

    <p>A notícia se apoia no relatório da própria Anthropic, com a leitura do The Decoder. O texto é nosso, com análise própria.</p>
  `,
};
