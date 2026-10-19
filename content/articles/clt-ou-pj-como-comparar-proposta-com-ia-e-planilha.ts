import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "clt-ou-pj-como-comparar-proposta-com-ia-e-planilha",
  title: "CLT ou PJ: como comparar a proposta com IA e uma planilha",
  seoTitle: "CLT ou PJ: como comparar proposta com IA e planilha",
  excerpt:
    "CLT ou PJ: aprenda a comparar uma proposta de emprego com planilha e IA, somando 13º, férias, FGTS, benefícios, imposto e contador, com um exemplo em reais.",
  metaDescription:
    "CLT ou PJ: veja como converter salário e proposta PJ para o mesmo critério anual, o que somar de 13º, férias e FGTS, o que descontar no PJ e prompts para a planilha.",
  category: "carreira",
  articleSubcategory: "trabalho-e-remuneracao",
  date: "2026-10-19",
  readTime: 8,
  imageQuery: "job offer contract laptop calculator desk",
  seed: 440,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Para comparar CLT e PJ, converta as duas propostas para o mesmo critério: ganho anual líquido de custos, incluindo 13º, férias com um terço, FGTS e benefícios do lado CLT e imposto, contador e meses sem receita do lado PJ.",
    "No exemplo da matéria, um salário CLT de R$ 6.000 equivale, com benefícios, a um PJ de cerca de R$ 9.500 por mês, mas os números são hipotéticos e dependem do seu caso.",
    "A IA monta a planilha e revisa as contas, mas imposto exato, risco de vínculo e cláusulas do contrato pedem contador e advogado trabalhista.",
  ],
  content: `
    <p>Para comparar CLT ou PJ, transforme as duas propostas em um mesmo número: quanto você realmente recebe em um ano, depois de somar os direitos do emprego formal e de descontar os custos de quem abre empresa. Só então o salário mensal da proposta PJ pode ser comparado com o do contracheque.</p>

    <p>Muita gente aceita um PJ de R$ 8.000 achando que ganhou um aumento sobre um CLT de R$ 6.000, e esquece de contar 13º, férias com adicional, FGTS, vale-refeição, plano de saúde, imposto e contador. Este guia mostra a conta passo a passo, com uma planilha e prompts de IA, um exemplo numérico claramente hipotético e os pontos em que você precisa de ajuda profissional. Se a conversa de proposta é o seu momento, leia também como <a href="/artigos/como-negociar-salario-melhor-sabendo-usar-ia">negociar salário sabendo usar IA</a>.</p>

    <h2>O que você ganha de verdade em cada modelo</h2>
    <p>Na CLT, o salário combinado é só uma parte. A lista de direitos básicos do trabalhador, reunida em <a href="https://prefeitura.sp.gov.br/web/desenvolvimento/w/dicas/direitos__trabalhador/625" target="_blank" rel="noopener noreferrer">página da Prefeitura de São Paulo</a> (conteúdo antigo, confirme valores e regras atuais), menciona férias anuais remuneradas com pelo menos um terço a mais do que o salário normal, 13º salário pago em duas parcelas, depósito de FGTS e aviso prévio. O <a href="https://www.fgts.gov.br/Paginas/sobre-o-fgts/regras.aspx" target="_blank" rel="noopener noreferrer">portal do FGTS</a> informa que o depósito equivale a 8% do salário e que quem recolhe é o empregador, até o dia 20 do mês seguinte, sem desconto no contracheque.</p>
    <p>No PJ, você emite nota fiscal e recebe o valor do contrato. Não há 13º, férias pagas, FGTS nem aviso prévio por padrão: o que for assim só existe se estiver no contrato. Por outro lado, o valor bruto mensal costuma ser maior justamente para compensar isso. Cabe a você descobrir se compensa de fato.</p>
    <p>Duas coisas ficam fora da conta simples deste texto: o INSS e o imposto de renda do empregado, que são descontados do salário CLT, e a tributação da pessoa jurídica, que varia com a atividade e o enquadramento. Por isso a comparação abaixo é uma aproximação bruta. A decisão final deve passar por um contador.</p>

    <h2>Como converter o CLT em ganho anual</h2>
    <p>Some tudo o que o emprego formal paga ou economiza em um ano:</p>
    <ul>
      <li>12 salários mensais.</li>
      <li>Um 13º salário.</li>
      <li>O terço de férias (um terço de um salário).</li>
      <li>O FGTS de 8% sobre o salário depositado pela empresa.</li>
      <li>Os benefícios que você usaria de qualquer forma, como vale-refeição, plano de saúde e auxílio-transporte, pelo valor que você pagaria do próprio bolso.</li>
    </ul>
    <p>Não conte benefício que você não usa: um plano de saúde que você dispensaria não vale nada na comparação. E lembre que o FGTS só vira dinheiro em situações previstas, como demissão sem justa causa. Quem pensa em sair logo pode dar menos peso a ele.</p>

    <h2>Como converter o PJ em ganho anual</h2>
    <p>Do lado PJ, comece pelo valor bruto de 12 meses e tire o que é custo e o que você não receberá:</p>
    <ul>
      <li>Meses sem receita: se tirar 30 dias de descanso, normalmente não há pagamento nesse período, a não ser que o contrato diga o contrário.</li>
      <li>Imposto sobre a nota. A <a href="https://www8.receita.fazenda.gov.br/SimplesNacional/Documentos/Pagina.aspx?id=3" target="_blank" rel="noopener noreferrer">Receita Federal explica o Simples Nacional</a>: o DAS reúne vários tributos e vence até o dia 20 do mês seguinte à receita. O percentual depende da atividade e da faixa.</li>
      <li>Contador, que na empresa não é opcional. O custo varia: peça orçamento.</li>
      <li>Plano de saúde, previdência e reserva de emergência por conta própria.</li>
      <li>Equipamento, internet e software, se a empresa contratante não fornecer.</li>
    </ul>
    <p>Quem pensa em trabalhar para clientes de fora do país deve ler também o guia de <a href="/artigos/trabalho-remoto-em-dolar-com-ia-candidatura-contrato-e-carne-leao">trabalho remoto em dólar</a>, que trata de contrato e tributação de renda do exterior.</p>

    <h2>Exemplo numérico hipotético: R$ 6.000 CLT contra R$ 8.000 PJ</h2>
    <p>Os valores abaixo são inventados para mostrar o método. Troque pelos seus números. O imposto do PJ foi fixado em 6% e o contador em R$ 300 por mês, apenas como hipótese.</p>
    <table>
      <thead>
        <tr><th>Item (por ano)</th><th>CLT R$ 6.000</th><th>PJ R$ 8.000</th></tr>
      </thead>
      <tbody>
        <tr><td>Salário ou nota (12 ou 11 meses)</td><td>R$ 72.000</td><td>R$ 88.000 (11 meses)</td></tr>
        <tr><td>13º salário</td><td>R$ 6.000</td><td>não há</td></tr>
        <tr><td>Terço de férias</td><td>R$ 2.000</td><td>não há</td></tr>
        <tr><td>FGTS de 8%</td><td>R$ 5.760</td><td>não há</td></tr>
        <tr><td>Benefícios usados (exemplo: R$ 800 por mês)</td><td>R$ 9.600</td><td>R$ 0</td></tr>
        <tr><td>Imposto hipotético de 6%</td><td>já descontado na folha, não calculado aqui</td><td>menos R$ 5.280</td></tr>
        <tr><td>Contador (R$ 300 por mês)</td><td>não há</td><td>menos R$ 3.600</td></tr>
        <tr><td><strong>Total aproximado</strong></td><td><strong>R$ 95.360</strong></td><td><strong>R$ 79.120</strong></td></tr>
      </tbody>
    </table>
    <p>Nesse exemplo, o PJ de R$ 8.000 por mês deixa cerca de R$ 16.000 por ano abaixo do CLT, mesmo parecendo maior no papel. Para empatar, o valor mensal do PJ precisaria ser perto de R$ 9.500, ou seja, cerca de 60% acima do salário CLT. Veja a conta: 11 meses de nota, menos 6% de imposto e menos R$ 3.600 de contador, precisam chegar a R$ 95.360. Isso dá aproximadamente R$ 9.570 por mês. A conta ignora INSS e imposto de renda do CLT e o imposto real do seu caso, então use só como bússola.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Percentuais de imposto e custos do exemplo são hipotéticos. Antes de decidir, peça uma simulação com os números reais a um contador.</p></div>

    <h2>Prompts para montar a planilha</h2>
    <p>A IA é boa para montar a estrutura e conferir fórmulas. Ela não conhece o seu contrato nem a sua tributação, então informe tudo e peça que não invente percentuais. O guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> detalha como aplicar fórmulas no Excel e no Google Planilhas.</p>
    <pre><code>Monte uma planilha para comparar uma proposta CLT e uma
proposta PJ por ganho anual. Coluna A: item. Coluna B: CLT.
Coluna C: PJ. Itens do CLT: 12 salários, 13º, terço de férias,
FGTS de 8%, benefícios que eu realmente uso. Itens do PJ:
meses de nota fiscal, imposto (percentual que eu informar),
contador, plano de saúde, equipamento. Use células de entrada
para eu trocar os números e fórmulas de soma. NÃO invente
percentuais de imposto: deixe em branco para eu preencher.</code></pre>
    <pre><code>Com os dados abaixo, diga quanto o PJ precisaria cobrar por
mês para empatar com o CLT, mostrando a conta passo a passo.
Dados: [cole os valores da planilha]. Liste também o que ficou
de fora da conta e o que eu devo perguntar a um contador.</code></pre>
    <p>Confira as contas na calculadora. Se o resultado parecer estranho, peça para a IA mostrar cada passo, como ensina o texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>, porque modelos de linguagem podem errar aritmética.</p>

    <h2>O que a planilha não mostra</h2>
    <p>Número não captura tudo. Pesam também a segurança de renda, o acesso a crédito, a aposentadoria, o plano de carreira e a liberdade de atender outros clientes. No emprego formal, a renda é previsível mesmo em mês fraco. No PJ, um contrato pode acabar com aviso curto. Faça uma pergunta direta: se esse cliente sumir, quantos meses de reserva você tem?</p>
    <p>Existe ainda o risco de a relação parecer um emprego disfarçado de PJ: horário fixo, subordinação direta, exclusividade e chefe dando ordens como a um empregado. Isso pode gerar discussão trabalhista, e o enquadramento correto é matéria para advogado trabalhista. Não dependa de IA para essa análise. O texto sobre <a href="/artigos/ia-para-contratos-revisar-documentos-juridicos-mais-rapido">IA para revisar contratos</a> mostra como usar a ferramenta para apontar cláusulas a perguntar, sem trocar o parecer.</p>

    <h2>Perguntas para fazer antes de aceitar</h2>
    <ol>
      <li>O PJ tem prazo e regra de rescisão por escrito? Quantos dias de aviso?</li>
      <li>Há reajuste anual previsto em contrato?</li>
      <li>Quem fornece equipamento e software?</li>
      <li>Existe exclusividade ou proibição de atender outros clientes?</li>
      <li>Os pagamentos têm data fixa e multa por atraso?</li>
      <li>No CLT, quais benefícios são pagos pela empresa e quais têm coparticipação?</li>
    </ol>
    <p>Se o PJ for um passo rumo a um negócio próprio, vale conhecer o caminho do MEI à microempresa em <a href="/artigos/de-mei-para-microempresa-quando-migrar-simples-nacional-e-contador">quando migrar e o que muda no Simples</a> e o limite anual de receita explicado em <a href="/artigos/limite-de-faturamento-do-mei-como-controlar-mes-a-mes">limite de faturamento do MEI</a>. Já para precificar o seu serviço como empresa, veja <a href="/artigos/como-precificar-servicos-usando-ia-no-trabalho">como precificar serviços usando IA</a>.</p>

    <h2>Quando o CLT costuma ser melhor, quando o PJ pode compensar</h2>
    <p>O CLT tende a ser mais interessante quando os benefícios são bons, a empresa é estável e você valoriza previsibilidade. O PJ pode compensar quando a diferença de valor é grande, o contrato é bem escrito, você tem outros clientes ou reserva financeira e aceita cuidar do próprio caixa. Quem tem renda variável pode aplicar a lógica do guia de <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">organização das finanças pessoais com IA</a> para criar um colchão. E se o objetivo for ter mais tempo, o texto sobre <a href="/artigos/como-usar-ia-para-trabalhar-menos-horas-sem-perder-renda">trabalhar menos horas sem perder renda</a> ajuda a repensar a jornada.</p>

    <h2>Erros comuns na comparação</h2>
    <ul>
      <li>Comparar o salário bruto CLT com o valor da nota PJ sem converter nada.</li>
      <li>Esquecer de contar 13º, terço de férias e FGTS no CLT.</li>
      <li>Esquecer do imposto, do contador e dos meses sem receita no PJ.</li>
      <li>Contar benefícios que você não usaria.</li>
      <li>Confiar na conta da IA sem recalcular.</li>
      <li>Assinar contrato PJ sem ler as cláusulas de rescisão e exclusividade.</li>
    </ul>

    <h2>Seu próximo passo</h2>
    <p>Abra uma planilha, preencha os dois lados com os números da sua proposta e peça a um contador para validar a coluna de impostos. Com o resultado, volte à mesa de negociação: se o PJ precisa de R$ 9.500 para empatar, é isso que você leva como contraproposta. Para planejar o que vem depois da decisão, use o <a href="/artigos/plano-de-carreira-com-ia-metas-de-90-dias">plano de carreira com IA</a> e o <a href="/artigos/mentor-de-carreira-com-ia-prompts-para-decidir-seu-proximo-passo">mentor de carreira com IA</a>, e siga explorando a categoria de carreira do Portal da AI.</p>
  `,
  faq: [
    {
      question: "CLT ou PJ: qual compensa mais?",
      answer:
        "Depende da conta. Some 13º, férias com um terço, FGTS e benefícios do CLT, e desconte imposto, contador e meses sem receita do PJ. Em geral, o PJ precisa pagar bem mais do que o salário CLT para empatar. A segurança de renda e o risco do contrato também entram na decisão.",
    },
    {
      question: "Quanto o PJ precisa ganhar para valer a pena?",
      answer:
        "Não existe percentual único. Calcule o ganho anual total do CLT e divida pelos meses em que você receberia como PJ, ajustando para imposto e custos. No exemplo hipotético do artigo, um CLT de R$ 6.000 pedia um PJ de cerca de R$ 9.500 por mês. Use os seus números e consulte um contador.",
    },
    {
      question: "O FGTS entra na comparação com o PJ?",
      answer:
        "Sim, como valor que a empresa deposita em seu nome. O portal do FGTS informa que o depósito é de 8% do salário e que o empregador recolhe, sem desconto no contracheque. O dinheiro só pode ser sacado em situações previstas, como demissão sem justa causa, então pese a sua utilidade real.",
    },
    {
      question: "A IA pode decidir por mim entre CLT e PJ?",
      answer:
        "Não. Ela monta a planilha, confere a lógica e sugere perguntas, mas não conhece o seu contrato nem o seu enquadramento tributário e pode errar contas. Use-a como apoio e valide os números com um contador. Para risco de vínculo e cláusulas, consulte um advogado trabalhista.",
    },
    {
      question: "Quais perguntas devo fazer antes de aceitar um contrato PJ?",
      answer:
        "Pergunte sobre prazo e aviso de rescisão, reajuste anual, exclusividade, quem fornece equipamento, data de pagamento e multa por atraso. Peça tudo por escrito. Se a rotina parecer a de um empregado, com horário fixo e chefe direto, converse com um advogado trabalhista antes de assinar.",
    },
  ],
};
