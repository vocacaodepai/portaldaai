import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "limite-de-faturamento-do-mei-como-controlar-mes-a-mes",
  title: "Limite de faturamento do MEI: controle mensal com planilha e IA",
  seoTitle: "Limite de faturamento do MEI: como controlar com IA",
  excerpt:
    "Limite de faturamento do MEI de R$ 81 mil por ano: veja como controlar mês a mês com planilha e IA, evitar o desenquadramento e preencher o relatório mensal.",
  metaDescription:
    "Limite de faturamento do MEI: entenda o teto de R$ 81 mil, a tolerância de 20%, o relatório mensal e monte uma planilha com IA para não estourar o teto.",
  category: "negocios",
  articleSubcategory: "financas-e-precificacao",
  date: "2026-10-14",
  readTime: 8,
  imageQuery: "calculator receipts desk small shop",
  seed: 285,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O teto do MEI é de R$ 81 mil de receita bruta por ano (R$ 6.750 por mês em média), e passar disso muda o enquadramento: até 20% de excesso tem um tratamento, acima de 20% tem outro, retroativo.",
    "A obrigação oficial é manter o Relatório Mensal de Receitas Brutas com as notas fiscais anexadas; o gov.br indica preenchê-lo até o dia 20 do mês seguinte.",
    "Uma planilha simples com ajuda de IA para organizar lançamentos e projetar o ano avisa com meses de antecedência quando o limite se aproxima, mas quem confere os números é você.",
  ],
  content: `
    <p>O limite de faturamento do MEI é de R$ 81.000 de receita bruta por ano, o que dá uma média de R$ 6.750 por mês. Quem abre o CNPJ no meio do ano tem limite proporcional: R$ 6.750 multiplicados pelos meses de atividade no ano. Ultrapassar o teto obriga a comunicar o desenquadramento, com regras diferentes conforme o tamanho do excesso.</p>

    <p>A maioria dos problemas de MEI com o limite não vem de má-fé, e sim de falta de controle: o dinheiro entra por Pix, cartão e dinheiro vivo, e ninguém soma. Este guia mostra o que as regras oficiais dizem, como montar um controle mensal em uma planilha, como usar IA para organizar os lançamentos e projetar o ano, e quais erros evitar. Se você ainda está montando a rotina do negócio, o guia de <a href="/artigos/ia-para-mei-tarefas-que-voce-pode-automatizar">tarefas do MEI que você pode automatizar com IA</a> é um bom complemento.</p>

    <h2>O que as regras oficiais dizem sobre o limite</h2>

    <p>As informações abaixo vêm do manual de perguntas e respostas sobre MEI e Simei da Receita Federal, conferido em 14/10/2026 no documento <a href="https://www8.receita.fazenda.gov.br/simplesnacional/arquivos/manual/perguntaomei.pdf" target="_blank" rel="noopener noreferrer">Perguntas e Respostas MEI e Simei</a>. O limite geral é de R$ 81.000,00 por ano. No ano de início da atividade, vale o limite proporcional: R$ 6.750,00 multiplicados pelo número de meses entre a abertura e o fim do ano-calendário.</p>

    <p>O manual separa dois cenários de excesso. Se a receita bruta passar do limite em até 20%, o empresário precisa comunicar o desenquadramento até o último dia útil do mês seguinte ao do excesso, e o efeito começa em 1º de janeiro do ano seguinte; a diferença gera um DAS de excesso, calculado na declaração anual. Se passar de 20%, o efeito é retroativo a 1º de janeiro do ano em que o excesso ocorreu. Com 20% de tolerância, o número de referência é R$ 97.200 (81.000 multiplicados por 1,2), mas o que vale é o texto oficial, e as regras podem ser alteradas por lei. Confirme sempre no <a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei" target="_blank" rel="noopener noreferrer">Portal do Empreendedor</a>.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Este texto não substitui um contador. Se o seu faturamento está perto do teto, converse com um profissional antes de decidir se segue como MEI, migra para microempresa ou muda a forma de cobrar.</p></div>

    <h2>Relatório Mensal de Receitas Brutas: a base do controle</h2>

    <p>Toda a conta do MEI parte do Relatório Mensal de Receitas Brutas. O manual da Receita diz que a obrigação é manter o relatório, com as notas fiscais de compras e de serviços tomados, e as notas de vendas ou serviços emitidas, anexadas. Ele só precisa ser apresentado quando o Fisco pedir. O serviço do gov.br <a href="https://www.gov.br/pt-br/servicos/baixar-relatorio-mensal-de-receitas-brutas" target="_blank" rel="noopener noreferrer">Baixar Relatório Mensal de Receitas Brutas</a> orienta preencher o faturamento bruto de cada mês até o dia 20 do mês seguinte, e o documento serve também para acompanhar o limite anual e comprovar renda em pedidos de crédito.</p>

    <p>Na prática, o relatório é o seu extrato fiscal do mês. A DASN-Simei, a declaração anual, usa a soma dos 12 meses. Se o relatório estiver em dia, a declaração leva poucos minutos. Se não estiver, vira uma investigação de extrato bancário em maio. O mesmo raciocínio vale para quem controla o <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa com IA</a>: sem lançamento diário, o número do mês é um palpite.</p>

    <h2>Monte a planilha de controle em 15 minutos</h2>

    <p>Você não precisa de sistema. Uma planilha no Google Planilhas ou no Excel com as colunas abaixo resolve. Crie uma aba chamada "Lançamentos" e outra chamada "Resumo".</p>

    <table>
      <thead>
        <tr><th>Coluna</th><th>O que colocar</th></tr>
      </thead>
      <tbody>
        <tr><td>Data</td><td>Dia em que o dinheiro entrou ou em que a nota foi emitida</td></tr>
        <tr><td>Cliente</td><td>Nome ou apelido</td></tr>
        <tr><td>Descrição</td><td>Serviço ou produto vendido</td></tr>
        <tr><td>Valor bruto (R$)</td><td>Quanto foi cobrado, antes de taxas de maquininha</td></tr>
        <tr><td>Forma de recebimento</td><td>Pix, cartão, dinheiro, boleto</td></tr>
        <tr><td>Nota fiscal</td><td>Número, ou "não exigida"</td></tr>
      </tbody>
    </table>

    <p>Na aba "Resumo", crie uma linha por mês com a soma dos lançamentos, o acumulado do ano e a diferença para o limite. A fórmula do acumulado é uma soma simples. Se você tem dificuldade com fórmulas, o guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> mostra como pedir cada uma à ferramenta.</p>

    <h2>Onde a IA ajuda (e onde não)</h2>

    <p>A IA é boa para organizar e projetar, e ruim para decidir sobre imposto. Três usos que funcionam bem:</p>

    <p><strong>Limpar lançamentos.</strong> Se você tem um extrato com descrições bagunçadas, cole as linhas (sem CPF, sem número de conta) e peça para separar o que é receita do negócio do que é transferência pessoal. Ela erra, então revise linha por linha. O guia de <a href="/artigos/conciliacao-bancaria-com-ia-pequeno-negocio-guia">conciliação bancária com IA</a> traz o método completo.</p>

    <p><strong>Projetar o ano.</strong> Com a média dos últimos meses, a IA monta uma projeção simples do faturamento até dezembro. É uma conta de ritmo, não uma previsão, e o texto sobre <a href="/artigos/como-fazer-previsao-de-vendas-planejamento-financeiro-com-ia">previsão de vendas</a> explica como lidar com sazonalidade.</p>

    <p><strong>Criar alertas.</strong> Peça fórmulas para a planilha mudar de cor quando o acumulado passar de 70% e de 90% do limite.</p>

    <pre><code>Tenho uma planilha de MEI com os faturamentos mensais abaixo (valores brutos em R$). O limite anual é de R$ 81.000. Calcule: 1) o acumulado mês a mês; 2) a média mensal até agora; 3) o faturamento projetado até dezembro se a média se mantiver; 4) em que mês eu cruzo R$ 81.000 se o ritmo continuar. Mostre as contas e não invente valores.

Jan: 5200
Fev: 6100
Mar: 7300
Abr: 6900
Mai: 7800
Jun: 8100</code></pre>

    <p>Com esses números, a soma de janeiro a junho dá R$ 41.400, a média é de R$ 6.900 por mês, e a projeção para o ano é de R$ 82.800, acima do teto. O alerta apareceria em meados do segundo semestre, a tempo de decidir entre segurar vendas, trocar de enquadramento ou procurar um contador.</p>

    <h2>Exemplo prático: uma designer que passou do ritmo</h2>

    <p>Uma designer MEI fatura R$ 5.200 em janeiro e vai subindo com clientes novos. Em junho já está em R$ 8.100. Se ela só olhasse o faturamento do mês, tudo pareceria ótimo. Quando olha o acumulado (R$ 41.400 em seis meses, mais da metade do limite) e a projeção (R$ 82.800), percebe que vai estourar o teto em cerca de R$ 1.800 em dezembro. Esse excesso está dentro da faixa de 20%, mas gera comunicação de desenquadramento e DAS de excesso. Ela decide levar o número ao contador em julho, em vez de descobrir em maio do ano seguinte.</p>

    <p>Esse tipo de decisão também mexe no preço. Se o negócio cresce, a conta muda: o guia de <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">como precificar produtos e serviços com IA</a> ajuda a calcular se vale cobrar mais por menos clientes, em vez de cobrar pouco de muitos.</p>

    <h2>Quando o limite aperta: opções a conversar com o contador</h2>

    <p>Passar do teto não é o fim do negócio. As alternativas normalmente envolvem migrar para microempresa no Simples Nacional, o que muda impostos, obrigações e custos de contabilidade. Antes disso, vale olhar o lado das despesas: o texto sobre <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">como reduzir custos operacionais</a> mostra cortes que melhoram a margem sem aumentar a receita. E se parte do problema é cliente que paga atrasado, bagunçando o caixa, o guia de <a href="/artigos/ia-para-cobranca-e-inadimplencia-pequeno-negocio">cobrança e inadimplência</a> ajuda.</p>

    <p>O ponto central: a escolha entre ficar no teto, crescer e mudar de regime ou dividir a atividade depende de margem, tipo de cliente e atividade, e não tem resposta única. Use a planilha para chegar à reunião com números prontos. Um contador cobra por hora; quanto melhor organizado você chegar, menos paga.</p>

    <h2>Erros comuns no controle do limite</h2>

    <ul>
      <li><strong>Contar o lucro em vez da receita bruta.</strong> O limite é sobre o que entra, não sobre o que sobra.</li>
      <li><strong>Esquecer entradas fora da nota.</strong> Pix e dinheiro vivo também contam como receita.</li>
      <li><strong>Misturar conta pessoal e do negócio.</strong> Dificulta o relatório e a conciliação.</li>
      <li><strong>Usar a média sem olhar a sazonalidade.</strong> Dezembro costuma vender mais para quem trabalha com presentes.</li>
      <li><strong>Colar dados sensíveis na IA.</strong> Não envie CPF, CNPJ, conta bancária ou senhas. O guia de <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade em IA</a> explica por quê.</li>
      <li><strong>Confiar cegamente na conta da IA.</strong> Refaça a soma na planilha e veja a lição do guia de <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>.</li>
    </ul>

    <h2>Rotina de 10 minutos por semana</h2>

    <p>O controle só funciona se virar hábito. Sugestão de rotina: toda sexta, 10 minutos para lançar as entradas da semana, conferir se bate com o extrato do banco e olhar o acumulado. No começo do mês, 20 minutos para fechar o mês anterior, preencher o relatório e anexar as notas. Documentar isso como passo a passo, nos moldes do guia de <a href="/artigos/procedimento-operacional-padrao-com-ia-como-documentar-processos">procedimento operacional padrão com IA</a>, garante que a rotina sobreviva a uma semana corrida.</p>

    <p>Se você domina planilhas e vê que outros MEIs sofrem com o mesmo problema, há ainda uma oportunidade de renda em montar modelos prontos, tema de <a href="/artigos/como-ganhar-dinheiro-vendendo-planilhas-automatizadas-com-ia">vender planilhas automatizadas com IA</a>. Mas antes de vender, controle a sua.</p>

    <p>Controlar o limite de faturamento do MEI é uma tarefa pequena, feita toda semana, que evita uma surpresa grande no fim do ano. Monte a planilha hoje, rode o prompt com os seus meses e leve a projeção para o contador se o resultado passar de 90% do teto. Para ampliar a organização financeira do negócio, siga para o guia de <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">finanças pessoais com IA</a>, que ajuda a separar o dinheiro da pessoa do dinheiro do CNPJ.</p>
  `,
  faq: [
    {
      question: "Qual é o limite de faturamento do MEI?",
      answer:
        "O limite é de R$ 81.000 de receita bruta por ano, em média R$ 6.750 por mês, segundo o manual da Receita Federal conferido em 14/10/2026. No ano de abertura, o limite é proporcional: R$ 6.750 multiplicados pelos meses de atividade. As regras podem mudar por lei, então confirme no Portal do Empreendedor.",
    },
    {
      question: "O que acontece se o MEI passar do limite de faturamento?",
      answer:
        "O MEI precisa comunicar o desenquadramento até o último dia útil do mês seguinte ao do excesso. Se o excesso for de até 20%, o efeito vale a partir de 1º de janeiro do ano seguinte e há DAS sobre a diferença. Acima de 20%, o efeito é retroativo a 1º de janeiro do ano do excesso.",
    },
    {
      question: "O que é o Relatório Mensal de Receitas Brutas?",
      answer:
        "É o documento em que o MEI registra o faturamento bruto de cada mês, com as notas fiscais anexadas. Ele só precisa ser apresentado se o Fisco pedir, mas serve de base para a declaração anual. O gov.br orienta preencher o mês até o dia 20 do mês seguinte.",
    },
    {
      question: "A IA pode controlar o faturamento do MEI?",
      answer:
        "Ela ajuda a organizar lançamentos, calcular acumulados e projetar o ano, mas não substitui a conferência. Revise as contas na planilha, não envie CPF, CNPJ nem dados bancários ao assistente e leve as decisões sobre enquadramento e imposto para um contador.",
    },
    {
      question: "Quando devo procurar um contador sendo MEI?",
      answer:
        "Quando o acumulado passar de uns 70% a 90% do limite antes do fim do ano, quando você quiser contratar funcionário, ou se pensa em mudar de regime. Levar a planilha de faturamento pronta reduz o tempo de consulta e ajuda o profissional a orientar com números reais.",
    },
  ],
};
