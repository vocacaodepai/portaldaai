import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "grafico-de-caixa-no-google-planilhas-box-plot-quartis-e-outliers",
  title: "Gráfico de caixa no Google Planilhas: como ler quartis e outliers",
  seoTitle: "Gráfico de caixa no Google Planilhas: como usar",
  excerpt:
    "O Google Planilhas ganhou gráfico de caixa (box plot). Veja o que ele mostra, como criar, quando a liberação chega à sua conta e como ler mediana e outliers.",
  metaDescription:
    "Gráfico de caixa no Google Planilhas: o que é o box plot, como criar com dados brutos, como ler quartis e outliers e quando a liberação chega à sua conta.",
  category: "ferramentas",
  date: "2026-10-23",
  readTime: 7,
  imageQuery: "analyst spreadsheet statistics charts monitor",
  seed: 601,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Google Planilhas passou a oferecer gráfico de caixa (box and whisker), que calcula mínimo, quartis, mediana, máximo, média e outliers a partir de dados brutos, sem fórmulas auxiliares.",
    "A liberação começou em 22/10/2026 nos domínios de Versão Rápida e em 06/11/2026 nos de Versão Programada, pode levar até 15 dias para aparecer e não tem controle de administrador.",
    "Arquivos do Excel com esse gráfico agora mantêm referências, cálculos e formatação ao entrar no Planilhas, e os criados no Planilhas saem editáveis para o Excel.",
  ],
  content: `
    <p>O gráfico de caixa (box plot, ou box and whisker) do Google Planilhas mostra, em uma figura só, como um conjunto de números se distribui: o menor valor, o primeiro quartil, a mediana, o terceiro quartil, o maior valor e os pontos fora do padrão, chamados de outliers. A novidade é que o Planilhas calcula tudo isso a partir dos dados brutos, sem você montar tabela de quartis antes.</p>

    <p>Na prática, serve para responder perguntas comuns de quem tem uma loja, presta serviço ou compara fornecedores: o prazo de entrega é estável ou tem uns atrasos gigantes? O preço de um fornecedor varia mais do que o de outro? A média esconde algo? Este guia explica o anúncio, mostra como ler o gráfico com um exemplo numérico e aponta os limites do recurso.</p>

    <h2>O que mudou no Google Planilhas</h2>

    <p>O <a href="https://workspaceupdates.googleblog.com/2026/10/create-box-and-whisker-charts-in-google-sheets.html" target="_blank" rel="noopener noreferrer">anúncio no blog de atualizações do Google Workspace</a>, de 22/10/2026 e consultado no mesmo dia, informa que o Planilhas agora aceita gráficos de caixa de forma nativa. A partir de uma faixa de valores numéricos, ele calcula mínimo, primeiro quartil, mediana, terceiro quartil, máximo, média e outliers, sem fórmulas auxiliares. Dá para escolher o cálculo de quartil inclusivo ou exclusivo e mostrar ou esconder pontos internos, outliers, marcadores de média e linhas de média.</p>

    <p>O texto também traz informações de disponibilidade. O recurso vale para clientes do Google Workspace e para contas pessoais. Os domínios de Versão Rápida recebem a liberação gradual a partir de 22/10/2026, e os de Versão Programada, a partir de 06/11/2026. A visibilidade pode levar até 15 dias para aparecer, e o Google diz que não há controle de administrador para esse recurso.</p>

    <p>Se você abrir o Planilhas hoje e não encontrar a opção, é normal: a liberação é gradual. Volte em alguns dias antes de concluir que ela não existe na sua conta. Para quem usa o Planilhas no celular com IA, o guia de <a href="/artigos/gemini-no-google-planilhas-no-iphone-e-android-como-usar-e-limites">Gemini no Google Planilhas</a> trata de outro lado da ferramenta.</p>

    <h2>Como ler um gráfico de caixa</h2>

    <p>Ele parece estranho no começo, mas tem poucas peças. A caixa cobre a metade central dos dados, os fios (whiskers) esticam até os extremos considerados normais, e pontos soltos além dos fios são os outliers.</p>

    <table>
      <thead>
        <tr><th>Peça do gráfico</th><th>O que representa</th><th>Pergunta que responde</th></tr>
      </thead>
      <tbody>
        <tr><td>Linha dentro da caixa</td><td>Mediana: metade dos valores está abaixo, metade acima</td><td>Qual é o valor típico?</td></tr>
        <tr><td>Bordas da caixa</td><td>Primeiro e terceiro quartis (25% e 75% dos dados)</td><td>Onde está a maior parte dos casos?</td></tr>
        <tr><td>Altura da caixa</td><td>Distância entre quartis (IQR)</td><td>Os resultados são estáveis ou variam muito?</td></tr>
        <tr><td>Fios</td><td>Extremos dentro do padrão</td><td>Qual a faixa normal de variação?</td></tr>
        <tr><td>Pontos isolados</td><td>Outliers</td><td>Que casos fogem muito do normal?</td></tr>
        <tr><td>Marcador de média</td><td>Média aritmética</td><td>O quanto os extremos puxam a média?</td></tr>
      </tbody>
    </table>

    <p>A regra mais comum em estatística marca como outlier o valor que passa de 1,5 vez a distância entre quartis acima do terceiro quartil ou abaixo do primeiro. O anúncio não detalha qual critério o Planilhas aplica, então confira nas opções do gráfico antes de tirar conclusões firmes.</p>

    <h2>Como criar o gráfico, passo a passo</h2>

    <p>O anúncio não lista os cliques, e a página de ajuda do Google sobre gráficos, consultada em 23/10/2026, descreve o fluxo geral, que o novo tipo deve seguir quando chegar à sua conta. Abra uma planilha, selecione as células com os dados, vá em Inserir e escolha Gráfico. Depois, dê dois cliques no gráfico, abra Configuração no painel à direita e, em Tipo de gráfico, procure o de caixa na lista. A página de ajuda ainda não menciona o novo tipo, que depende da liberação gradual. Os nomes dos menus podem variar; consulte a <a href="https://support.google.com/docs/answer/63824" target="_blank" rel="noopener noreferrer">página de ajuda do Google sobre gráficos</a>.</p>

    <ol>
      <li>Coloque os dados brutos em colunas, uma por grupo que você quer comparar (por exemplo, uma coluna por transportadora), com o nome do grupo na primeira linha.</li>
      <li>Selecione a faixa inteira, incluindo os títulos.</li>
      <li>Insira o gráfico e troque o tipo para o de caixa.</li>
      <li>Escolha entre cálculo inclusivo e exclusivo de quartil e ligue ou desligue pontos, outliers e média.</li>
      <li>Dê um título que diga o que o gráfico mostra, como "Prazo de entrega por transportadora (dias)".</li>
    </ol>

    <p>Dados brutos significam um valor por linha, como cada entrega, cada venda ou cada atendimento. Se você já resumiu tudo em médias, o gráfico não tem o que calcular.</p>

    <h2>Exemplo: duas transportadoras, mesma média aparente</h2>

    <p>Os números abaixo são inventados para ilustrar. Uma loja online comparou 13 entregas de cada transportadora, em dias corridos.</p>

    <table>
      <thead>
        <tr><th>Medida</th><th>Transportadora A</th><th>Transportadora B</th></tr>
      </thead>
      <tbody>
        <tr><td>Mínimo</td><td>2</td><td>3</td></tr>
        <tr><td>1º quartil</td><td>3</td><td>5</td></tr>
        <tr><td>Mediana</td><td>4</td><td>6</td></tr>
        <tr><td>3º quartil</td><td>5</td><td>7</td></tr>
        <tr><td>Máximo</td><td>14</td><td>9</td></tr>
        <tr><td>Média</td><td>4,8</td><td>5,8</td></tr>
      </tbody>
    </table>

    <p>A transportadora A é mais rápida na maioria dos casos (mediana de 4 dias contra 6), mas tem uma entrega de 14 dias, que o gráfico mostra como ponto isolado. Sem o gráfico, você olharia só a média e concluiria que a diferença é de um dia. Com ele, a decisão fica mais completa: A vence no dia a dia, mas um atraso de 14 dias gera reclamação, reembolso e avaliação ruim. A pergunta passa a ser o que causou aquele caso, e se vale combinar uma garantia de prazo em contrato.</p>

    <p>Para conferir os quartis sem o gráfico, a função QUARTILE, descrita na <a href="https://support.google.com/docs/answer/3094041" target="_blank" rel="noopener noreferrer">ajuda do Google</a>, recebe o intervalo e um número de 0 a 4: 0 devolve o mínimo, 1 o primeiro quartil, 2 a mediana, 3 o terceiro quartil e 4 o máximo.</p>

    <h2>Onde usar no pequeno negócio e na carreira</h2>

    <p>O gráfico de caixa é uma das melhores formas de comparar grupos com poucos números. Alguns usos:</p>

    <ul>
      <li><strong>Fornecedores:</strong> compare o preço pago por item em cada fornecedor e veja quem é estável. Combina com o guia de <a href="/artigos/como-usar-ia-para-negociar-melhor-com-fornecedores">negociação com fornecedores</a>.</li>
      <li><strong>Prazos e atendimento:</strong> tempo de resposta no WhatsApp por atendente, ou prazo de entrega por região.</li>
      <li><strong>Vendas:</strong> ticket médio por dia da semana, para planejar escala e promoção; o texto sobre <a href="/artigos/como-fazer-previsao-de-vendas-planejamento-financeiro-com-ia">previsão de vendas com IA</a> mostra o passo seguinte.</li>
      <li><strong>Satisfação:</strong> notas de clientes por unidade, como em uma <a href="/artigos/pesquisa-de-satisfacao-com-ia-analisar-respostas-de-clientes">pesquisa de satisfação analisada com IA</a>.</li>
      <li><strong>Salário e propostas:</strong> dados de faixas de remuneração de vagas parecidas para negociar com argumentos, ligado ao texto sobre <a href="/artigos/como-negociar-salario-melhor-sabendo-usar-ia">negociar salário com IA</a> e a <a href="/artigos/clt-ou-pj-como-comparar-proposta-com-ia-e-planilha">comparação entre CLT e PJ</a>.</li>
    </ul>

    <p>Quem vende planilhas ou dashboards como serviço, como mostra o guia de <a href="/artigos/como-ganhar-dinheiro-vendendo-planilhas-automatizadas-com-ia">planilhas automatizadas com IA</a>, ganha um tipo de gráfico a mais para entregar, tema do guia sobre <a href="/artigos/dashboard-para-pequeno-negocio-com-ia-servico-pacotes-e-entrega">dashboard para pequeno negócio</a>. Já quem quer automatizar relatórios encontra ideias em <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> e, para o dinheiro que entra e sai, no guia de <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa com IA</a>.</p>

    <h2>Excel: o que muda na importação e na exportação</h2>

    <p>Segundo o anúncio, arquivos do Excel com gráfico de caixa perdiam o gráfico ao serem importados para o Planilhas. Agora eles mantêm as referências de dados, os cálculos e a formatação. No sentido contrário, os gráficos criados no Planilhas saem como gráficos de caixa editáveis no Excel.</p>

    <p>Isso importa para quem troca arquivos com contador, cliente ou fornecedor que usa o Excel. Teste com um arquivo pequeno antes de depender disso em uma entrega, porque a compatibilidade completa de formatação depende da versão do Excel do outro lado. E lembre que, na liberação gradual, a conta do seu cliente pode ainda não ter o recurso.</p>

    <h2>Limites e erros comuns</h2>

    <ul>
      <li><strong>Amostra pequena demais.</strong> Com 5 ou 6 valores, quartil quase não diz nada. Use pelo menos uma dúzia de pontos por grupo.</li>
      <li><strong>Misturar coisas diferentes na mesma coluna.</strong> Entrega expressa e econômica em uma coluna só produzem um outlier falso.</li>
      <li><strong>Apagar o outlier para o gráfico ficar bonito.</strong> O ponto isolado costuma ser a informação mais importante. Investigue antes de descartar.</li>
      <li><strong>Esquecer a unidade.</strong> Dias, reais ou pontos de nota: escreva no título.</li>
      <li><strong>Confiar na IA para a leitura.</strong> Peça a um assistente que explique o gráfico, mas confira os números, porque modelos erram conta, como lembra o texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>.</li>
    </ul>

    <p>Um prompt útil, com os dados resumidos na conversa (sem informações pessoais):</p>

    <pre><code>Tenho dois grupos de prazo de entrega em dias. Grupo A: 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 14. Grupo B: 3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 8, 9. Explique em linguagem simples a diferença entre os dois em mediana, variação e valores fora do padrão, e sugira duas perguntas que devo fazer à transportadora. Mostre as contas para eu conferir.</code></pre>

    <h2>Próximo passo</h2>

    <p>Pegue uma coluna de dados reais do seu negócio, como prazo de entrega ou ticket por venda, e monte o gráfico assim que a opção aparecer na sua conta. Enquanto isso, calcule os quartis com a função QUARTILE para treinar a leitura. Para outras novidades de ferramentas, volte à <a href="/categoria/ferramentas">categoria de ferramentas</a>.</p>
  `,
  faq: [
    {
      question: "O que é um gráfico de caixa (box plot)?",
      answer:
        "É um gráfico que resume como os números se distribuem: mínimo, primeiro quartil, mediana, terceiro quartil e máximo, além de pontos fora do padrão (outliers). A caixa mostra onde está a metade central dos dados, e a linha interna marca a mediana, o valor típico do grupo.",
    },
    {
      question: "Quando o gráfico de caixa chega ao meu Google Planilhas?",
      answer:
        "Segundo o Google, a liberação gradual começou em 22/10/2026 para domínios de Versão Rápida e começa em 06/11/2026 para os de Versão Programada. A visibilidade pode levar até 15 dias. Se a opção não aparece ainda, é esperado; tente de novo nos próximos dias.",
    },
    {
      question: "Preciso pagar o Google Workspace para usar?",
      answer:
        "O anúncio diz que o recurso está disponível para todos os clientes do Google Workspace e para usuários de contas pessoais do Google. Não menciona edições específicas. Por isso, a conta gratuita deve receber, respeitando o ritmo da liberação gradual.",
    },
    {
      question: "O gráfico de caixa funciona com arquivos do Excel?",
      answer:
        "Sim. Segundo o Google, arquivos do Excel com gráfico de caixa agora mantêm dados, cálculos e formatação ao serem importados para o Planilhas, e os gráficos criados no Planilhas exportam como gráficos de caixa editáveis para o Excel. Teste com um arquivo pequeno antes de uma entrega importante.",
    },
    {
      question: "Como calcular os quartis sem o gráfico?",
      answer:
        "Use a função QUARTILE: informe o intervalo e um número de 0 a 4. O 0 devolve o mínimo, o 1 o primeiro quartil, o 2 a mediana, o 3 o terceiro quartil e o 4 o máximo. Por exemplo, QUARTILE(A2:A100;3) devolve o valor próximo ao terceiro quartil.",
    },
  ],
};
