import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "claude-sonnet-5-agente-escolhe-terapia-genica-opera-camundongo",
  title: "Agente no Claude Sonnet 5 escolhe terapia gênica e opera um camundongo",
  summary:
    "Um pesquisador de Oxford deixou um agente do Claude Sonnet 5 decidir o tratamento e conduzir a cirurgia num camundongo com epilepsia, sob supervisão veterinária.",
  author: "Bruno Danello",
  sourceName: "The Decoder",
  sourceUrl:
    "https://the-decoder.com/a-claude-model-autonomously-chose-a-gene-therapy-and-operated-on-a-mouse-brain-with-no-human-decision-making/",
  date: "2026-10-30",
  publishedAt: "2026-10-30T19:35:00-03:00",
  topic: "lancamentos",
  imageQuery: "laboratório de neurociência camundongo pesquisa",
  content: `
    <p>Um agente de IA baseado no Claude Sonnet 5 escolheu sozinho uma terapia gênica, definiu onde aplicá-la no cérebro de um camundongo com epilepsia e conduziu a cirurgia, com um médico-veterinário aprovando cada passo irreversível. O relato é de Gabriel Ocana-Santero, cofundador e presidente da Exin Therapeutics e doutorando na Universidade de Oxford, que descreveu o experimento numa sequência de posts na rede X. A história foi publicada em 30 de outubro de 2026 pelo The Decoder, e é essa a base desta notícia. Os resultados não passaram por revisão de pares e um relatório técnico ainda deve sair.</p>

    <p>Vale deixar claro desde o início o que isso é e o que não é. Não é um tratamento aprovado nem um estudo clínico. É uma demonstração, num único animal de laboratório, de até onde um agente de IA pode ir quando recebe acesso a equipamentos reais. Ainda assim, o caso diz muito sobre o rumo que os agentes estão tomando fora do mundo do software.</p>

    <h2>O que o agente recebeu e o que decidiu</h2>
    <p>O ponto de partida era simples. O agente ganhou uma lista com 19 terapias gênicas possíveis, acesso a um modelo de epilepsia em camundongo, no qual crises são induzidas para testar tratamentos, e um aparelho cirúrgico motorizado feito sob medida, com câmeras. A única instrução era reduzir as crises do animal.</p>

    <p>A partir daí, segundo o relato, o agente analisou como as crises surgem nesse modelo e propôs uma terapia que reforça uma via de sinalização inibitória, ou seja, uma das formas naturais do cérebro de frear a atividade excessiva dos neurônios. Escolheu uma estrutura cerebral que a literatura científica aponta como ponto de origem desse tipo de crise e descartou uma segunda região candidata, argumentando que os efeitos ali eram pouco confiáveis e que já tinham falhado num estudo com esse tipo de crise.</p>

    <p>Para chegar às coordenadas da injeção, o agente cruzou dados de três artigos científicos, conferiu pontos de referência e calculou uma média dos valores. Também definiu o volume a aplicar, a velocidade da injeção e os tempos de espera. O The Decoder observa que o texto não revela o nome da terapia, a região exata nem as coordenadas.</p>

    <h2>Durante a cirurgia</h2>
    <p>Na sala, o agente acompanhou o campo cirúrgico pelas câmeras. Fez 32 observações ao longo do procedimento, monitorou a injeção e foi informando o andamento, por exemplo que 15% do volume já tinha sido aplicado, além de dizer se via sangramento ou refluxo. Era um trabalho de acompanhamento contínuo, que normalmente exige atenção humana constante.</p>

    <p>Houve também um momento de tensão. Depois de uma queda de conexão, o agente percebeu que a posição-alvo que ele mesmo havia calculado estava fora do alcance físico do aparelho. Ele se recusou a continuar, inclusive depois de uma recalibração e de uma terceira tentativa. Segundo o The Decoder, o agente estava certo: ajustes manuais feitos durante uma pausa anterior tinham bagunçado o sistema de controle. Ocana-Santero não conseguiu convencê-lo a seguir e teve de corrigir o código à mão, com o animal ainda anestesiado sobre a mesa. O camundongo se recuperou bem, de acordo com o pesquisador.</p>

    <h2>As travas de segurança</h2>
    <p>O experimento não foi deixado solto. Um médico-veterinário habilitado aprovou cada etapa irreversível. Havia um botão físico de emergência capaz de cortar a energia de todos os motores na hora. E o aparelho tinha limites fixos, como um teto para o volume de injeção, que o agente estava explicitamente proibido de contornar. Ou seja, a autonomia era grande na parte de decidir e planejar, mas cercada de barreiras na parte de agir.</p>

    <h2>Só um modelo topou ir até o fim</h2>
    <p>Um detalhe chama atenção. De acordo com o relato, o Claude Sonnet 5 foi o único modelo disposto a conduzir o procedimento ao vivo do começo ao fim. O Claude Opus 5.5 e o Opus 5 recusaram. O Opus 5 explicou que não podia garantir a conclusão e que parar no meio, com uma agulha dentro do cérebro de um animal anestesiado, seria pior do que nem começar. É um tipo de raciocínio sobre risco que raramente aparece nas conversas sobre modelos de IA.</p>

    <p>Ocana-Santero afirma não conhecer caso anterior em que um agente tenha escolhido o tratamento e o alvo no cérebro e depois feito a aplicação num mamífero vivo. Até aqui, humanos escolhiam a cirurgia e robôs apenas a executavam. Ele chama a abordagem de laboratório in vivo com a IA no circuito, em que agentes ficam ligados de ponta a ponta às capacidades experimentais de um laboratório. Também descreveu a experiência como frustrante e reveladora sobre o quanto as pessoas podem passar a depender desses modelos, e o que acontece quando eles se recusam no meio de um procedimento.</p>

    <h2>O que ainda não sabemos</h2>
    <p>A principal ressalva é que tudo vem do relato do próprio pesquisador, que também tem interesse comercial no tema por liderar uma empresa de terapias. Não há artigo revisado por pares, o relatório técnico ainda não saiu e os detalhes científicos centrais não foram divulgados. Um único camundongo também não diz nada sobre eficácia: o que se demonstrou foi a capacidade de planejar e operar, não de curar. Quem cobrir o assunto precisa separar bem uma coisa da outra.</p>

    <p>Há ainda uma pergunta de fundo sobre responsabilidade. Quando o agente decide e o humano apenas aprova, quem responde por um erro? No experimento, a resposta foi desenhada de antemão: o veterinário assinava cada etapa sem volta e os limites físicos eram de máquina, não de conversa. Em empresas que começam a dar poder de ação a agentes, a mesma lógica vale. Quanto mais irreversível a ação, mais perto deve estar uma pessoa com autoridade para dizer sim ou não.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que você nunca chegue perto de um laboratório, o episódio mostra o padrão que está se espalhando: agentes que não só respondem perguntas, mas decidem, planejam e acionam ferramentas do mundo real. Para quem trabalha com IA, as lições práticas são bem concretas. Defina limites fixos que o agente não pode ultrapassar, mantenha uma pessoa aprovando as ações que não têm volta e tenha sempre um jeito rápido de desligar tudo. Foi exatamente isso que permitiu o experimento funcionar sem desastre.</p>

    <p>Também vale reparar que o agente soube dizer não quando o cálculo não fechava. Em tarefas de negócio, isso significa preferir ferramentas que expõem o raciocínio e pedem confirmação em vez de seguir adiante às cegas. Se você está montando fluxos com agentes para clientes, comece por <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">entender a diferença entre agente, chatbot e automação</a> e por <a href="/artigos/como-humanos-e-agentes-de-ia-vao-trabalhar-juntos-no-futuro">como humanos e agentes vão trabalhar juntos</a>, para saber onde a decisão final deve ficar com uma pessoa.</p>

    <p>O assunto se conecta a outras notícias recentes do Portal da AI: a Anthropic mostrou que <a href="/noticias/anthropic-estudo-especialistas-adotam-opiniao-agente-ia">especialistas adotam a opinião do agente sem perceber</a>, comprou a startup que quer <a href="/noticias/anthropic-compra-mithril-medicine-claude-desenvolvimento-farmacos">criar remédios com o Claude</a>, usou o modelo para <a href="/noticias/anthropic-claude-projeta-proteinas-contra-toxinas-escorpiao">projetar proteínas contra toxinas de escorpião</a> e o Claude Code ganhou uma opção que <a href="/noticias/claude-code-variavel-rm-sem-aprovacao-skip-permissions">deixa o agente apagar arquivos sem pedir</a>. Juntas, as histórias mostram o quanto a autonomia dos agentes avança e o quanto os controles humanos continuam decisivos.</p>

    <p>A notícia se apoia na reportagem do The Decoder, com base nos relatos de Gabriel Ocana-Santero. O texto é nosso, com análise própria.</p>
  `,
};
