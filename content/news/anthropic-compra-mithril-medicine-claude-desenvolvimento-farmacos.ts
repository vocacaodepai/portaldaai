import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-compra-mithril-medicine-claude-desenvolvimento-farmacos",
  title: "Anthropic compra a Mithril e começa a criar seus próprios remédios",
  summary:
    "A Anthropic comprou a Mithril Medicine, de uma só pessoa, e abre programas próprios contra distrofias raras. Seis parceiros relatam resultados iniciais.",
  author: "Bruno Danello",
  sourceName: "The Next Web, Anthropic",
  sourceUrl:
    "https://thenextweb.com/news/anthropic-mithril-acquisition-claude-drug-development",
  date: "2026-10-28",
  publishedAt: "2026-10-28T10:40:00-03:00",
  topic: "negocios",
  imageQuery: "Anthropic logo",
  content: `
    <p>A Anthropic, empresa que faz o Claude, anunciou na terça-feira, 27 de outubro de 2026, que comprou a Mithril Medicine, uma empresa de uma única pessoa que desenvolve tratamentos para duas formas raras de distrofia muscular. Junto com a compra, a empresa publicou os primeiros resultados de parcerias com seis organizações de medicamentos e disse que passa a tocar programas de descoberta de remédios por conta própria. O caso foi noticiado nesta quarta-feira, 28, pelo The Next Web, com base no texto da própria Anthropic.</p>

    <p>É um passo diferente do que costuma sair dos laboratórios de IA. Em vez de vender apenas o modelo para quem faz remédios, a Anthropic entra no processo, e faz isso poucos dias depois de protocolar o pedido de abertura de capital na Nasdaq. Segundo o The Information, citado pelo The Next Web, o documento do IPO lista o potencial de a IA descobrir novas curas entre os grandes benefícios esperados da empresa.</p>

    <h2>A compra da Mithril e o fundador que delegou tudo ao Claude</h2>
    <p>A Mithril tinha um único funcionário, o fundador Cody Tranbarger, que agora trabalha na Anthropic. Os termos financeiros do negócio não foram divulgados. O que a Anthropic conta é como a empresa funcionava: Tranbarger usou o Claude para organizar contratos, logística e experimentos com 11 laboratórios externos, e passou ao modelo muitas outras tarefas de operação do dia a dia.</p>

    <p>O foco principal é uma distrofia muscular congênita ligada ao gene LAMA2. Segundo a Anthropic, a Mithril levou um possível tratamento de uma ideia a resultados promissores em camundongos em menos de 18 meses. Em um relatório técnico, que ainda não passou por revisão de outros cientistas, camundongos tratados com um dos desenhos de anticorpo chegaram a cerca do dobro da força de preensão dos animais sem tratamento. Se os candidatos continuarem de pé, a empresa espera começar testes em humanos já no fim de 2028. Tranbarger pretende abrir vários programas novos.</p>

    <h2>Os seis parceiros e o que cada um relatou</h2>
    <p>A Anthropic diz que, ao longo de alguns meses, trabalhou de perto com seis organizações. Os resultados, segundo o texto da empresa, são iniciais:</p>

    <ul>
      <li><strong>Generate Biomedicines:</strong> seis cientistas usaram o Claude Code para propor novos desenhos de uma parte de uma terapia de células CAR-T contra câncer. Um dos desenhos ficou cerca de 70% menor que a versão padrão e, em testes de laboratório, fez as células imunes produzirem cerca de 10 vezes mais receptores e matarem tumores com mais eficiência.</li>
      <li><strong>Divergence Labs:</strong> na pesquisa de um tratamento para alergia alimentar, o Claude gerou cerca de 35 mil desenhos de anticorpos em aproximadamente um mês, de forma em grande parte autônoma. Três desenhos se ligaram ao IgE, a molécula ligada às reações alérgicas, e três dos que tentam soltá-lo das células imunes pareceram funcionar melhor que o remédio padrão.</li>
      <li><strong>BigHat Biosciences:</strong> o laboratório fez e testou cerca de 1.010 variantes em cerca de 10 semanas a partir de sugestões do Claude. As melhores versões se ligaram mais de 10 vezes mais forte que as originais.</li>
      <li><strong>Enveda:</strong> o Claude analisou 1.061 páginas de registros de fabricação e achou os 11 problemas que revisores humanos tinham visto, mais sete que eles não viram. O tempo de revisão caiu 89%, de mais de 25 horas para menos de três. Um rascunho de documento para os reguladores saiu em quatro horas, contra cerca de três meses à mão.</li>
      <li><strong>The Column Group:</strong> a gestora de investimentos está criando a Pleiades, empresa que usará o Claude para tocar muito mais programas de remédios do que uma equipe pequena costuma conseguir.</li>
      <li><strong>Bristol Myers Squibb:</strong> usa o Claude para avaliar planos de testes clínicos de um remédio em fase inicial e estimar a chance de sucesso. As duas empresas pretendem ampliar o trabalho em 2027.</li>
    </ul>

    <p>A Anthropic faz questão de dizer que quase tudo ainda é pré-clínico, ou seja, não chegou a testes em pessoas. Os números acima vêm de relatórios técnicos dos próprios parceiros e da empresa, e não de estudos independentes.</p>

    <h2>Uma aposta que vem sendo montada há meses</h2>
    <p>A compra não surge do nada. Segundo o The Next Web, a Anthropic pagou US$ 400 milhões pela Coefficient Bio em abril, lançou em junho o Claude Science, uma bancada de trabalho para pesquisadores, e disse em agosto que o Claude havia projetado moléculas que se ligam a proteínas de forma funcional. Aqui no portal já registramos peças dessa estratégia, como o <a href="/noticias/anthropic-claude-projeta-proteinas-contra-toxinas-escorpiao">uso do Claude para projetar proteínas contra toxinas de escorpião</a>, o <a href="/noticias/anthropic-laboratorio-fisico-life-sciences-verification-program">laboratório físico e o programa de verificação em ciências da vida</a> e a descoberta de um <a href="/noticias/claude-descobre-sistema-enzimatico-parecido-crispr">sistema enzimático parecido com o CRISPR</a>.</p>

    <p>O pano de fundo comercial também pesa. A empresa acabou de <a href="/noticias/anthropic-protocola-s-1-publico-nasdaq-ant-receita-16-bilhoes">abrir o S-1 público com a sigla ANT na Nasdaq</a>, e mostrar um caminho de receita além de chat e código ajuda a contar a história para investidores. Na própria frase da empresa, não existe um problema único a resolver: os gargalos estão distribuídos por todo o desenvolvimento de um remédio, da escolha do alvo à burocracia dos reguladores. Por isso a estratégia é pôr a IA em cada etapa e aprender com programas reais.</p>

    <h2>O que muda e o que continua incerto</h2>
    <p>Dois pontos merecem cautela. Primeiro, resultados em camundongos e em laboratório estão longe de um remédio aprovado; a própria Anthropic projeta testes em humanos só a partir do fim de 2028, e a maioria das moléculas que parece promissora nessa fase não chega ao mercado. Segundo, os dados vêm das empresas envolvidas, com interesse em mostrar boas notícias. Convém esperar a revisão por pares e testes com mais casos antes de tirar conclusões grandes.</p>

    <p>Mesmo assim, o que mais chama atenção é o ganho em tarefas pouco glamourosas. A economia de 89% no tempo de revisão da Enveda e as quatro horas contra três meses de um documento regulatório mostram que boa parte do valor da IA na saúde pode estar na papelada, não na descoberta da molécula. Esse tipo de ganho é mais fácil de repetir em outras áreas.</p>

    <h2>Por que isso importa para você</h2>
    <p>Você pode não trabalhar com remédios, mas a história da Mithril é um exemplo extremo de algo que já está ao alcance de pequenos negócios: uma pessoa só, com um agente de IA bem configurado, tocando contratos, logística e dezenas de fornecedores que antes exigiriam uma equipe. Se você é freelancer, dono de uma loja ou consultor, a lição prática é mapear quais tarefas repetitivas do seu dia, como organizar fornecedores, preparar documentos e conferir registros, podem ser entregues a um assistente com revisão humana no fim.</p>

    <p>Vale também notar o movimento do mercado. Quando uma empresa de IA deixa de só vender ferramenta e passa a operar no setor, ela mostra onde enxerga mais valor: em áreas com muito trabalho de documentação e muita informação espalhada, como saúde, jurídico e finanças. Quem atua nessas áreas deve esperar ferramentas de IA cada vez mais específicas para o seu ramo e já pode testar o uso com dados não sensíveis. E, como em qualquer uso de IA em trabalho sério, a regra que a Enveda segue é a mesma que vale para você: a máquina propõe e confere, a pessoa responsável decide.</p>

    <p>Este texto é análise nossa a partir da reportagem do The Next Web e da publicação da Anthropic de 27 de outubro de 2026. As informações sobre a compra e os resultados dos parceiros vêm dessas fontes, sem confirmação independente adicional.</p>
  `,
};
