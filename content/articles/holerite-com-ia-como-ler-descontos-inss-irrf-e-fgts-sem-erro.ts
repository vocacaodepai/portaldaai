import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "holerite-com-ia-como-ler-descontos-inss-irrf-e-fgts-sem-erro",
  title: "Holerite com IA: como ler descontos, INSS, IR e FGTS sem erro",
  seoTitle: "Holerite com IA: entenda cada desconto e o FGTS",
  excerpt:
    "Holerite com IA: aprenda a ler proventos e descontos, conferir INSS e IR com a tabela oficial de 2026 e usar o assistente sem entregar seus dados pessoais.",
  metaDescription:
    "Holerite com IA: entenda proventos, descontos, INSS, imposto de renda e FGTS com um exemplo de R$ 3.000, as tabelas oficiais de 2026 e prompts que protegem seus dados.",
  category: "iniciantes",
  articleSubcategory: "vida-pratica",
  date: "2026-10-25",
  readTime: 7,
  imageQuery: "person reviewing payslip paper calculator desk",
  seed: 705,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O holerite se divide em proventos (o que entra), descontos (o que sai) e informações (como o FGTS, que o empregador deposita e não sai do seu salário), e a IA ajuda a traduzir cada linha, mas a conferência final é sua.",
    "INSS e imposto de renda seguem tabelas oficiais de 2026: no exemplo fictício de R$ 3.000, o INSS dá R$ 248,60 e o imposto de renda fica zerado pela redução para quem ganha até R$ 5.000.",
    "Antes de colar um holerite num assistente, apague nome, CPF, matrícula e empresa, e troque os valores por números aproximados quando só quiser aprender como funciona.",
  ],
  content: `
    <p>Para ler o holerite com IA, divida o papel em três blocos: proventos (o que você recebe), descontos (o que sai do salário) e informações de base, como o FGTS. Peça ao assistente que explique cada linha em português simples, e confira os valores de INSS e imposto de renda nas tabelas oficiais, porque a IA explica bem, mas pode errar conta.</p>

    <p>Muita gente recebe o contracheque todo mês e só olha o valor líquido. Isso funciona até o dia em que falta uma hora extra, aparece um desconto estranho ou o valor do FGTS não bate. Este guia mostra o que cada linha significa, traz um exemplo fictício com números de 2026, ensina a perguntar à IA sem expor seus dados e lista os erros mais comuns de leitura.</p>

    <h2>O que é o holerite e o que cada bloco mostra</h2>

    <p>Holerite, contracheque e recibo de pagamento são nomes para o mesmo documento: o demonstrativo que o empregador entrega com o cálculo do salário do mês. Ele costuma ter três partes.</p>

    <ul>
      <li><strong>Proventos:</strong> tudo que soma, como salário base, horas extras, adicional noturno, comissões e férias quando houver.</li>
      <li><strong>Descontos:</strong> tudo que subtrai, como INSS, imposto de renda retido na fonte, vale-transporte, coparticipação do plano de saúde e adiantamentos.</li>
      <li><strong>Bases e informações:</strong> valores usados no cálculo, como a base do INSS, a base do FGTS e o valor depositado do FGTS.</li>
    </ul>

    <p>O líquido é a conta simples: total de proventos menos total de descontos. O que confunde é que alguns itens aparecem no documento sem sair do seu bolso. O principal é o FGTS: segundo a <a href="https://www.gov.br/trabalho-e-emprego/pt-br/servicos/trabalhador/fgts" target="_blank" rel="noopener noreferrer">página do Ministério do Trabalho sobre FGTS</a> (consultada em 25/10/2026), o empregador deposita 8% do salário pago ao empregado, e para o jovem aprendiz o percentual é de 2%. Esse depósito é um valor a mais, na sua conta vinculada, e não um desconto.</p>

    <h2>Exemplo com números: salário de R$ 3.000</h2>

    <p>Os valores abaixo são fictícios, só para treinar a leitura. Imagine um trabalhador CLT com salário de R$ 3.000 por mês, sem horas extras, que optou pelo vale-transporte.</p>

    <table>
      <thead>
        <tr><th>Linha</th><th>Tipo</th><th>Valor (R$)</th></tr>
      </thead>
      <tbody>
        <tr><td>Salário base</td><td>Provento</td><td>3.000,00</td></tr>
        <tr><td>INSS</td><td>Desconto</td><td>248,60</td></tr>
        <tr><td>Imposto de renda (IRRF)</td><td>Desconto</td><td>0,00</td></tr>
        <tr><td>Vale-transporte (6% do salário)</td><td>Desconto</td><td>180,00</td></tr>
        <tr><td><strong>Líquido</strong></td><td>Resultado</td><td><strong>2.571,40</strong></td></tr>
        <tr><td>FGTS depositado (8%)</td><td>Informação</td><td>240,00</td></tr>
      </tbody>
    </table>

    <p>O desconto de vale-transporte costuma ser de até 6% do salário base, mas confirme no seu contrato e na política da empresa. Já o FGTS de R$ 240,00 (8% de R$ 3.000) não entra na conta do líquido. Se você somar o FGTS ao que cai na conta, vai achar que falta dinheiro, e não falta.</p>

    <h2>Como conferir o INSS pela tabela oficial</h2>

    <p>O INSS do empregado é calculado por faixas, não por uma alíquota única sobre o total. A <a href="https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal" target="_blank" rel="noopener noreferrer">tabela de contribuição do INSS</a> (verificada em 25/10/2026, vale desde a competência de janeiro de 2026) traz quatro faixas: 7,5% até R$ 1.621,00; 9% de R$ 1.621,01 a R$ 2.902,84; 12% de R$ 2.902,85 a R$ 4.354,27; e 14% de R$ 4.354,28 a R$ 8.475,55, que é o teto.</p>

    <p>Cada faixa se aplica só à parte do salário que cai nela. No exemplo de R$ 3.000:</p>

    <ol>
      <li>7,5% de R$ 1.621,00 = R$ 121,58</li>
      <li>9% da parte entre R$ 1.621,00 e R$ 2.902,84 (R$ 1.281,84) = R$ 115,37</li>
      <li>12% do que passa de R$ 2.902,84 até R$ 3.000 (R$ 97,16) = R$ 11,66</li>
      <li>Soma dos três valores antes de arredondar: R$ 248,60 (as linhas acima aparecem arredondadas)</li>
    </ol>

    <p>Se o seu holerite mostra um valor muito diferente, não conclua que há erro: pode haver mais de um vínculo (as remunerações se somam para definir a faixa), 13º salário (calculado em separado) ou outros proventos na base. Leve a dúvida ao RH com a linha exata em mãos.</p>

    <h2>Como conferir o imposto de renda na fonte</h2>

    <p>O imposto retido segue a <a href="https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026" target="_blank" rel="noopener noreferrer">tabela mensal da Receita Federal para 2026</a> (verificada em 25/10/2026). Ela tem faixa de isenção até R$ 2.428,80 e alíquotas de 7,5%, 15%, 22,5% e 27,5% acima disso, cada uma com sua parcela a deduzir. A página também informa a dedução de R$ 189,59 por dependente e uma redução mensal, a partir de janeiro de 2026: para rendimentos tributáveis de até R$ 5.000,00, a redução é de R$ 312,89, de modo que o imposto devido seja zero.</p>

    <p>No exemplo, a base é R$ 3.000,00 menos o INSS de R$ 248,60, ou R$ 2.751,40. Na tabela, isso cai na faixa de 7,5%: R$ 2.751,40 x 7,5% = R$ 206,36, menos a parcela a deduzir de R$ 182,16, resulta em R$ 24,20. Como o rendimento está abaixo de R$ 5.000, a redução zera esse valor, e o IRRF do holerite fica em R$ 0,00. Para quem ganha acima de R$ 5.000, a conta muda, e a página da Receita traz a fórmula da faixa até R$ 7.350,00.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Tabelas mudam por lei. Antes de confiar em qualquer número deste texto, abra a página oficial e confira a data de vigência. O mesmo vale para a resposta de um assistente: modelos podem citar tabela de anos anteriores.</p></div>

    <h2>Como usar a IA sem entregar seus dados</h2>

    <p>O holerite tem nome completo, CPF, matrícula, cargo, salário e o nome da empresa. É informação sensível, e o guia sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> mostra como esses dados podem parar onde você não imagina. Faça assim:</p>

    <ul class="checklist">
      <li>Cubra ou apague nome, CPF, matrícula, endereço e empresa antes de enviar foto ou texto.</li>
      <li>Para aprender, troque os valores por números redondos parecidos com os seus.</li>
      <li>Desative o uso da conversa para treino, se o aplicativo oferecer essa opção.</li>
      <li>Se o holerite for de uma empresa que tem regras de uso de IA, siga-as (veja o que o funcionário pode fazer em <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">colar dados da empresa no ChatGPT</a>).</li>
    </ul>

    <p>Dois prompts que funcionam bem:</p>

    <pre><code>Vou colar as linhas de um holerite fictício, sem dados pessoais. Explique em português simples o que significa cada linha, diga se é provento, desconto ou informação, e aponte o que eu devo perguntar ao RH se parecer estranho.</code></pre>

    <pre><code>Monte um passo a passo para eu conferir o INSS de um salário de R$ 3.000 usando as faixas que eu vou colar da tabela oficial. Mostre cada multiplicação e peça para eu confirmar os números antes de somar.</code></pre>

    <p>Note que o segundo prompt manda você colar a tabela oficial. Assim a IA calcula com o dado certo, em vez de lembrar de memória. Para entender por que ela erra conta, veja o guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>.</p>

    <h2>Transformar o holerite numa planilha de controle</h2>

    <p>Uma boa prática é copiar os valores de cada mês para uma planilha simples: salário, descontos, líquido e FGTS. Depois de três ou quatro meses, qualquer variação aparece. Se você ainda está pegando o jeito, o roteiro de <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">aprender planilhas do zero com IA</a> cobre soma e comparação, e o assistente do <a href="/artigos/gemini-no-google-planilhas-no-iphone-e-android-como-usar-e-limites">Gemini no Google Planilhas</a> ajuda a montar o gráfico.</p>

    <p>Guarde também o PDF do holerite. O guia de <a href="/artigos/escanear-documentos-no-celular-recibos-garantias-e-contas-com-ia">escanear documentos no celular</a> mostra como organizar tudo numa pasta por ano. E, para ligar o contracheque ao orçamento da casa, o texto sobre <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">organizar finanças pessoais com IA</a> serve de próximo passo.</p>

    <h2>Erros comuns ao ler o holerite</h2>

    <ul>
      <li><strong>Confundir bruto com líquido</strong> ao comparar propostas. Em uma oferta de emprego, compare o mesmo tipo de valor. O guia <a href="/artigos/clt-ou-pj-como-comparar-proposta-com-ia-e-planilha">CLT ou PJ</a> detalha a comparação.</li>
      <li><strong>Achar que o FGTS é desconto.</strong> É depósito do empregador.</li>
      <li><strong>Não conferir horas extras e adicionais.</strong> Compare com seu registro de ponto.</li>
      <li><strong>Aceitar a resposta da IA sem tabela.</strong> Alíquotas mudam todo ano.</li>
      <li><strong>Mandar o documento inteiro para o chat.</strong> Sempre oculte os dados pessoais.</li>
    </ul>

    <p>Se encontrar algo errado, anote o mês, a linha e o valor esperado, e leve ao RH por escrito. Antes de uma conversa sobre reajuste, o roteiro de <a href="/artigos/pedir-promocao-ou-aumento-com-ia-dossie-de-resultados-e-roteiro-da-conversa">pedir promoção ou aumento com IA</a> ajuda a organizar os argumentos, e o guia de <a href="/artigos/como-negociar-salario-melhor-sabendo-usar-ia">negociar salário</a> mostra como falar de números.</p>

    <p>Para continuar, passe pela categoria de iniciantes do Portal da AI e escolha um tema do seu dia a dia para praticar.</p>
  `,
  faq: [
    {
      question: "O que é holerite e para que serve?",
      answer:
        "Holerite, ou contracheque, é o demonstrativo mensal do pagamento. Mostra proventos, descontos, o valor líquido e as bases de cálculo do INSS, do FGTS e do imposto de renda. Serve para conferir se o salário está correto e como comprovante de renda.",
    },
    {
      question: "O FGTS é descontado do meu salário?",
      answer:
        "Não. O depósito do FGTS é feito pelo empregador, de 8% do salário pago ao empregado, segundo o Ministério do Trabalho e Emprego. Ele aparece no holerite como informação e vai para a sua conta vinculada, sem reduzir o valor líquido que você recebe.",
    },
    {
      question: "A IA pode calcular meu INSS e meu imposto de renda?",
      answer:
        "Pode ajudar a montar a conta, mas confira com a tabela oficial do INSS e da Receita Federal, porque assistentes podem usar valores de anos anteriores e errar multiplicações. Cole a tabela vigente no pedido e valide cada passo antes de aceitar o resultado.",
    },
    {
      question: "Posso enviar a foto do meu holerite para um chatbot?",
      answer:
        "Evite enviar o documento completo. Ele traz nome, CPF, matrícula e salário. Se precisar da ajuda, cubra os dados pessoais ou digite só as linhas de valores com números aproximados. Confira também as configurações de privacidade do aplicativo antes de usar.",
    },
    {
      question: "Por que meu INSS não bate com o cálculo por faixas?",
      answer:
        "Pode haver mais de um vínculo, 13º salário calculado em separado, proventos extras na base ou ajustes do mês. Anote a linha divergente e peça ao RH o demonstrativo da base de cálculo. Só depois disso conclua que houve erro na folha.",
    },
  ],
  quiz: [
    {
      question: "No holerite, o FGTS de 8% é um desconto do salário?",
      options: [
        "Sim, sai do líquido",
        "Não, é um depósito feito pelo empregador",
        "Só para quem ganha acima de R$ 5.000",
      ],
      answer: 1,
      explanation:
        "O FGTS é depositado pelo empregador na conta vinculada do trabalhador e não reduz o valor líquido do salário.",
    },
    {
      question: "O que fazer antes de mandar um holerite para um assistente de IA?",
      options: [
        "Enviar tudo para ele ter contexto",
        "Ocultar nome, CPF, matrícula e empresa",
        "Pedir para a IA adivinhar a tabela de impostos",
      ],
      answer: 1,
      explanation:
        "Dados pessoais devem ser ocultados. Para aprender, use valores aproximados e cole a tabela oficial no pedido.",
    },
  ],
};
