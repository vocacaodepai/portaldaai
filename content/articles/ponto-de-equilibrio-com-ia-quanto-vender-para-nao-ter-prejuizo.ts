import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ponto-de-equilibrio-com-ia-quanto-vender-para-nao-ter-prejuizo",
  title: "Ponto de equilíbrio com IA: quanto vender para não ter prejuízo",
  seoTitle: "Ponto de equilíbrio com IA: quanto vender no mês",
  excerpt:
    "Ponto de equilíbrio com IA: calcule quanto o seu pequeno negócio precisa vender por mês, com margem de contribuição, exemplo em reais e prompts prontos.",
  metaDescription:
    "Ponto de equilíbrio com IA: veja a fórmula, a margem de contribuição e um exemplo de doceria com números em reais para saber quanto vender e não fechar no vermelho.",
  category: "negocios",
  articleSubcategory: "financas-e-precificacao",
  date: "2026-10-20",
  readTime: 7,
  imageQuery: "calculator notebook small shop finances",
  seed: 480,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O ponto de equilíbrio é o faturamento mínimo em que a receita cobre todos os custos e despesas: custos fixos divididos pelo índice de margem de contribuição.",
    "A IA ajuda a organizar os custos, montar a planilha e testar cenários, mas os números de custo e preço precisam vir do seu caixa real.",
    "Calcular também o ponto de equilíbrio econômico, com a retirada que você quer fazer, evita a armadilha de empatar as contas e ficar sem pagar a si mesmo.",
  ],
  content: `
    <p>O ponto de equilíbrio é o faturamento mensal em que as vendas pagam todos os custos e despesas, sem lucro e sem prejuízo. Para calcular, divida os custos fixos pelo índice de margem de contribuição, que é a parte de cada venda que sobra depois dos custos variáveis. Abaixo disso, você perde dinheiro; acima, começa a sobrar.</p>

    <p>Muita gente abre o negócio olhando só o preço do concorrente e descobre no fim do mês que vendeu bastante e mesmo assim não sobrou nada. A conta do ponto de equilíbrio responde a pergunta mais útil de quem vende: quantas unidades, por mês e por dia, eu preciso vender para não pagar para trabalhar? A IA entra como ajudante de planilha e de simulação, e este guia mostra o caminho com números em reais.</p>

    <h2>O que é ponto de equilíbrio e por que ele importa</h2>

    <p>Segundo o <a href="https://www.claro.com.br/blog/empresas/ponto-de-equilibrio" target="_blank" rel="noopener noreferrer">blog de empresas da Claro</a>, conferido em 20/10/2026, o ponto de equilíbrio é calculado dividindo os custos fixos totais pelo percentual de margem de contribuição. O mesmo texto diferencia três versões: contábil (lucro zero), econômico (inclui o retorno que o dono quer ter) e financeiro (considera só os custos fixos que saem do caixa, sem itens como depreciação).</p>

    <p>Para um pequeno negócio, o contábil mostra o mínimo para sobreviver, e o econômico mostra o mínimo para valer a pena. Quem já organiza o caixa com o guia de <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa com IA</a> tem metade do caminho pronto, porque os custos fixos e variáveis já estão listados.</p>

    <h2>Custo fixo, custo variável e margem de contribuição</h2>

    <p>Custos fixos não mudam com a quantidade vendida: aluguel, internet, salário de funcionário, contador, sistema de gestão. Custos e despesas variáveis crescem junto com as vendas: ingrediente, embalagem, frete, comissão, imposto sobre a venda e taxa da maquininha. A <a href="https://contaazul.com/blog/como-calcular-margem-de-contribuicao/" target="_blank" rel="noopener noreferrer">Conta Azul</a> define a margem de contribuição unitária como preço de venda menos custos e despesas variáveis, e o índice como essa margem dividida pelo preço.</p>

    <p>O exemplo do próprio texto ajuda: um produto de R$ 100 com R$ 55 de custos variáveis (R$ 40 do produto, R$ 10 de impostos e R$ 5 de taxa de pagamento) deixa R$ 45 por unidade, ou 45%. Com custos fixos de R$ 9.000, o equilíbrio fica em 200 unidades ou R$ 20.000 de faturamento. Se você ainda não sabe o preço certo, comece pelo guia de <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">como precificar produtos e serviços com IA</a>.</p>

    <h2>Exemplo: uma doceria de bolo de pote em casa</h2>

    <p>Imagine uma microempreendedora que vende bolo de pote por R$ 12. Os custos variáveis por unidade são R$ 4,80 de ingredientes, R$ 1,20 de embalagem e R$ 0,40 de taxa da maquininha, total de R$ 6,40. A margem de contribuição unitária é R$ 5,60, ou 46,7% do preço. Os custos fixos mensais somam R$ 4.800, entre aluguel da cozinha compartilhada, gás, internet, ajudante por diária e contador. Os valores são ilustrativos: troque pelos seus.</p>

    <table>
      <thead>
        <tr><th>Item</th><th>Conta</th><th>Resultado</th></tr>
      </thead>
      <tbody>
        <tr><td>Margem unitária</td><td>R$ 12,00 - R$ 6,40</td><td>R$ 5,60</td></tr>
        <tr><td>Índice de margem</td><td>R$ 5,60 / R$ 12,00</td><td>46,7%</td></tr>
        <tr><td>Equilíbrio contábil em unidades</td><td>R$ 4.800 / R$ 5,60</td><td>858 potes por mês</td></tr>
        <tr><td>Equilíbrio contábil em faturamento</td><td>858 x R$ 12,00</td><td>cerca de R$ 10.300</td></tr>
        <tr><td>Equilíbrio econômico (retirada de R$ 2.000)</td><td>R$ 6.800 / R$ 5,60</td><td>1.215 potes por mês</td></tr>
      </tbody>
    </table>

    <p>Em 26 dias de trabalho, 858 potes dão cerca de 33 por dia, e 1.215 dão cerca de 47 por dia. Essa tradução em meta diária é o que torna o número útil: ela mostra se a capacidade da cozinha aguenta, se o preço precisa subir ou se os custos fixos têm de cair.</p>

    <h2>Como a IA ajuda no cálculo, passo a passo</h2>

    <p>A IA não descobre os seus custos, mas organiza a conta e roda cenários sem erro de digitação. O processo cabe em uma tarde:</p>

    <ol>
      <li>Exporte do banco ou do app de gestão os gastos dos últimos três meses.</li>
      <li>Peça à IA para separar o que é fixo e o que é variável, e revise cada linha.</li>
      <li>Calcule a margem unitária dos três produtos que mais vendem.</li>
      <li>Monte a planilha do ponto de equilíbrio e peça cenários de preço e de custo.</li>
      <li>Transforme o resultado em meta semanal e acompanhe no painel.</li>
    </ol>

    <p>Para a planilha, o guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> mostra como pedir fórmulas, e o texto sobre <a href="/artigos/conciliacao-bancaria-com-ia-pequeno-negocio-guia">conciliação bancária com IA</a> ajuda a separar os lançamentos do extrato.</p>

    <h2>Prompts prontos para montar a conta</h2>

    <pre><code>Tenho uma doceria em casa. Abaixo estão meus gastos do mês. Separe em custos fixos e custos variáveis por unidade vendida, explique em uma linha por que classificou cada item e aponte o que ficou ambíguo para eu decidir. Gastos: [cole a lista, sem dados pessoais]</code></pre>

    <pre><code>Com preço de venda de R$ 12,00, custos variáveis de R$ 6,40 por unidade e custos fixos de R$ 4.800 por mês, monte uma tabela com o ponto de equilíbrio contábil em unidades e em reais. Depois mostre como ele muda se o preço for R$ 13,00, R$ 14,00 e se o ingrediente subir 10%.</code></pre>

    <pre><code>Crie uma planilha para Google Sheets com colunas de produto, preço, custo variável, margem unitária e índice de margem, e uma célula que calcule o ponto de equilíbrio a partir dos custos fixos. Explique as fórmulas em português simples.</code></pre>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Peça sempre que a IA mostre a conta passo a passo. Se o resultado não bater com a sua calculadora, o erro costuma estar em um custo colocado na coluna errada.</p></div>

    <h2>O que fazer quando o ponto de equilíbrio está alto demais</h2>

    <p>Se o número de vendas necessário passa da sua capacidade, há três alavancas: subir o preço, reduzir o custo variável e cortar custo fixo. Subir R$ 1 no pote do exemplo leva a margem a R$ 6,60 e derruba o equilíbrio contábil para cerca de 728 unidades. Trocar uma embalagem e renegociar um ingrediente pode economizar R$ 0,50 por unidade. Já o aluguel dificilmente muda no curto prazo.</p>

    <p>Vale ainda olhar a mistura de produtos: vender mais do item de maior margem melhora o resultado sem aumentar o esforço. O guia de <a href="/artigos/como-usar-ia-para-negociar-melhor-com-fornecedores">negociação com fornecedores</a> e o de <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">redução de custos operacionais</a> trazem roteiros práticos. Em datas de promoção, refaça a conta antes de dar desconto, como mostra o texto sobre <a href="/artigos/black-friday-2026-desconto-sem-prejuizo-para-pequeno-negocio">Black Friday sem prejuízo</a>.</p>

    <h2>Erros comuns ao calcular o ponto de equilíbrio</h2>

    <ul class="checklist">
      <li>Esquecer o pró-labore e achar que lucro é tudo o que sobra depois das contas, sem pagar a si mesmo.</li>
      <li>Colocar imposto, comissão e taxa da maquininha nos custos fixos, quando eles crescem com a venda.</li>
      <li>Usar um preço médio que ninguém paga, ignorando descontos e promoções.</li>
      <li>Calcular uma vez e nunca mais atualizar quando o aluguel, o fornecedor ou o preço mudam.</li>
      <li>Tratar o ponto de equilíbrio como caixa: ele não considera prazo de recebimento nem estoque parado.</li>
    </ul>

    <p>Esse último ponto é importante. A própria Conta Azul observa que margem positiva não garante lucro e que o resultado deve ser lido junto com o fluxo de caixa. Se você vende no cartão parcelado ou a prazo, o dinheiro entra depois, e o equilíbrio no papel pode coexistir com falta de caixa no mês.</p>

    <h2>Como acompanhar a meta no dia a dia</h2>

    <p>Depois do cálculo, o trabalho é acompanhar. Crie uma linha simples de vendas acumuladas no mês contra a meta de equilíbrio e veja a cada semana se está acima ou abaixo. Um painel básico resolve, e o guia de <a href="/artigos/dashboard-para-pequeno-negocio-com-ia-servico-pacotes-e-entrega">dashboard para pequeno negócio</a> mostra o formato. Para prever os meses seguintes, use a <a href="/artigos/como-fazer-previsao-de-vendas-planejamento-financeiro-com-ia">previsão de vendas com IA</a>, e antes de investir em um produto novo, rode o <a href="/artigos/como-validar-ideia-de-negocio-com-ia-antes-de-investir">teste de validação da ideia</a>.</p>

    <p>Quem fatura como MEI deve ainda cuidar do teto anual, tema do texto sobre o <a href="/artigos/limite-de-faturamento-do-mei-como-controlar-mes-a-mes">limite de faturamento do MEI</a>, porque crescer acima dele muda a tributação. O próximo passo é simples: abra uma planilha hoje, liste os custos do último mês e calcule o equilíbrio de um único produto. Em seguida, volte à categoria Negócios do Portal da AI para escolher a próxima melhoria.</p>
  `,
  faq: [
    {
      question: "O que é ponto de equilíbrio em um pequeno negócio?",
      answer:
        "É o faturamento mensal em que a receita cobre todos os custos e despesas, sem lucro nem prejuízo. Calcula-se dividindo os custos fixos totais pelo índice de margem de contribuição. Ele mostra o mínimo que você precisa vender para não pagar para trabalhar e serve de meta no começo do mês.",
    },
    {
      question: "Como calcular o ponto de equilíbrio em unidades?",
      answer:
        "Divida os custos fixos do mês pela margem de contribuição unitária, que é o preço menos os custos variáveis por unidade. No exemplo do artigo, R$ 4.800 divididos por R$ 5,60 dão 858 potes por mês. Sempre arredonde para cima, porque não se vende fração de produto.",
    },
    {
      question: "A IA calcula o ponto de equilíbrio sozinha?",
      answer:
        "Ela monta a planilha, explica as fórmulas e testa cenários, mas depende dos números que você fornece. Custos errados geram um resultado errado com aparência de certo. Use a IA para organizar e simular, e confira cada valor com extrato, nota fiscal e a sua própria calculadora.",
    },
    {
      question: "Qual a diferença entre ponto de equilíbrio contábil e econômico?",
      answer:
        "O contábil considera lucro zero: a receita só cobre custos e despesas. O econômico soma aos custos fixos o retorno que você quer ter, como uma retirada mensal. Para quem vive do negócio, o econômico é o número que realmente define se a operação compensa.",
    },
    {
      question: "Posso usar o ponto de equilíbrio para definir preço?",
      answer:
        "Sim, como teste. Troque o preço na planilha e veja quantas unidades você precisaria vender em cada caso. Se o preço mais baixo exige uma quantidade que você não consegue produzir, ele não é viável. Combine essa conta com a pesquisa do que o cliente aceita pagar.",
    },
  ],
};
