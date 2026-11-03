import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "taxa-da-maquininha-no-preco-mdr-mensalidade-e-antecipacao-com-conta-simples-e-ia",
  title: "Taxa da maquininha no preço: MDR, mensalidade e antecipação",
  seoTitle: "Taxa da maquininha no preço: MDR e mensalidade",
  excerpt:
    "Entenda quem fica com cada parte da taxa da maquininha, como somar mensalidade, MDR e antecipação e como embutir esse custo no preço sem perder a venda.",
  metaDescription:
    "Taxa da maquininha para pequeno negócio: o que é MDR, como calcular o custo mensal com mensalidade e antecipação, exemplo com números e como formar o preço.",
  category: "negocios",
  articleSubcategory: "financas-e-precificacao",
  date: "2026-11-03",
  readTime: 7,
  imageQuery: "card machine payment small shop counter",
  coverImage: {
    url: "/images/covers/taxa-da-maquininha-no-preco-mdr-mensalidade-e-antecipacao-com-conta-simples-e-ia.webp",
    width: 1280,
    height: 853,
    credit: "Antonio_Cansino / Pixabay",
    creditUrl: "https://pixabay.com/photos/woman-face-mask-market-hijab-5632026/",
  },
  seed: 1104,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A MDR é um percentual descontado de cada venda no cartão; segundo a Cielo, a maior parte vai para o banco emissor, uma parte menor para a bandeira e o restante, chamado Net MDR, para a credenciadora.",
    "O custo mensal da maquininha soma mensalidade ou aluguel, MDR de cada modalidade e antecipação, se usada, e uma taxa baixa pode sair mais cara que outra por causa da mensalidade.",
    "Para formar preço, calcule o custo médio por modalidade, decida se embute a taxa no preço ou dá desconto no Pix, e use a IA só para organizar a conta, conferindo as taxas no seu contrato.",
  ],
  content: `
    <p>A taxa da maquininha é um percentual descontado de cada venda no cartão, chamado MDR (Merchant Discount Rate), somado a eventuais mensalidades e ao custo da antecipação de recebíveis. Segundo a Cielo, a MDR é dividida entre banco emissor, bandeira e credenciadora, e o lojista recebe o valor da venda já descontado dela.</p>

    <p>Muito pequeno negócio descobre o tamanho dessa taxa só no extrato, depois de fixar o preço. Este guia mostra como a taxa é dividida, como somar o custo real por mês, um exemplo com números do blog da Cielo e como colocar isso no preço sem travar a venda. As informações vêm de dois textos do blog da empresa, <a href="https://blog.cielo.com.br/financas/taxa-mdr/" target="_blank" rel="noopener noreferrer">sobre a taxa MDR</a> e <a href="https://blog.cielo.com.br/produtos-e-servicos/custo-maquininha-por-mes/" target="_blank" rel="noopener noreferrer">sobre o custo mensal da maquininha</a>, abertos em 03/11/2026. São conteúdos de uma credenciadora, então servem de exemplo, não de tabela oficial para o seu contrato.</p>

    <h2>Quem fica com cada parte da taxa</h2>

    <p>De acordo com o blog da Cielo, a MDR se divide entre três agentes. O banco emissor do cartão fica com a maior parte, cerca de 95% segundo o texto, a título de tarifa de intercâmbio. A bandeira, como Visa, Mastercard ou Elo, recebe uma porcentagem menor pelo uso da rede. A credenciadora fica com a parte chamada Net MDR, que cobre processamento, liquidação e repasse ao lojista.</p>

    <p>Na prática, o que importa para o lojista é a taxa final do contrato, que pode variar com o plano, o faturamento, o tipo de pagamento (crédito, débito, parcelado ou Pix) e a bandeira. O texto também indica que faturamentos maiores abrem espaço para negociar. Para consultar a sua, o caminho é a área de taxas e planos do aplicativo ou do portal da credenciadora.</p>

    <h2>As três partes do custo mensal</h2>

    <p>O blog da Cielo apresenta a conta como mensalidade ou aluguel, mais as taxas MDR de cada modalidade, mais o custo da antecipação, se você usar. Cada parte pesa de um jeito.</p>

    <table>
      <thead>
        <tr><th>Parte</th><th>Tipo de custo</th><th>O que olhar</th></tr>
      </thead>
      <tbody>
        <tr><td>Mensalidade ou aluguel</td><td>Fixo</td><td>Se há meta de vendas para zerar</td></tr>
        <tr><td>MDR por modalidade</td><td>Variável, sobre cada venda</td><td>Débito, crédito à vista e parcelado são diferentes</td></tr>
        <tr><td>Antecipação</td><td>Variável, só quando usada</td><td>Custo extra para receber antes</td></tr>
      </tbody>
    </table>

    <p>A antecipação permite receber antes o valor de vendas já feitas, principalmente parceladas, mas tem custo próprio. O texto da Cielo recomenda usá-la apenas quando houver necessidade de caixa e comparar com o custo de não ter o dinheiro disponível. Para entender essa necessidade, veja o guia de <a href="/artigos/capital-de-giro-do-pequeno-negocio-como-calcular-com-ia-e-quando-pedir-credito">capital de giro</a>.</p>

    <h2>Exemplo com as taxas publicadas pela Cielo</h2>

    <p>O texto sobre custo mensal traz, para o plano de aluguel no CNPJ, mensalidade de R$ 99,90 (grátis para quem atinge R$ 15 mil por mês) e taxas de 1,29% no débito, 4,09% no crédito à vista e 7,49% no parcelado em 3 vezes, valores vistos em 03/11/2026 que podem mudar. Com R$ 10.000 em vendas no mês, abaixo da meta, a conta fica assim:</p>

    <table>
      <thead>
        <tr><th>Cenário de vendas</th><th>Cálculo</th><th>Custo no mês</th></tr>
      </thead>
      <tbody>
        <tr><td>Tudo no débito</td><td>R$ 99,90 + 1,29% de R$ 10.000</td><td>R$ 228,90</td></tr>
        <tr><td>Tudo no crédito à vista</td><td>R$ 99,90 + 4,09% de R$ 10.000</td><td>R$ 508,90</td></tr>
      </tbody>
    </table>

    <p>A diferença de R$ 280,00 entre os dois cenários mostra por que o mix de pagamento importa. Os números do exemplo são ilustrativos de um plano específico e não valem para qualquer maquininha. Outro exemplo do blog sobre a MDR: uma venda de R$ 200 em 2 vezes, com taxa de crédito de 3,48% e de parcelamento de 5,47%, gera desconto total de R$ 17,90 e o lojista recebe R$ 182,10.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Taxa baixa nem sempre significa menor custo. Com pouca venda, uma mensalidade pesa mais do que a diferença de um ponto percentual. Compare sempre o custo total do mês, com o seu volume real.</p></div>

    <h2>Como colocar a taxa no preço</h2>

    <p>O blog da Cielo cita duas saídas. A primeira é embutir a taxa no preço: com taxa média de 3%, um produto de R$ 100 passa a custar R$ 103 para todos os clientes. A segunda é oferecer desconto para Pix ou dinheiro: se o cartão custa R$ 103, o Pix sai por R$ 100. As duas mexem na margem de formas diferentes, e a diferença de preço por forma de pagamento tem regras, explicadas em <a href="/artigos/preco-diferente-no-pix-no-debito-e-no-credito-o-que-a-lei-13455-permite">preço diferente no Pix, no débito e no crédito</a>.</p>

    <p>Para a conta de preço, use a lógica de <a href="/artigos/markup-ou-margem-qual-usar-para-formar-preco-no-pequeno-negocio">markup ou margem</a>: some o custo do produto, as taxas médias e as despesas, e só então defina o preço. O guia de <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">como precificar produtos e serviços com IA</a> complementa o passo a passo.</p>

    <h2>Passo a passo para calcular o seu custo</h2>

    <ol>
      <li>Baixe o extrato dos últimos 3 meses e separe as vendas por modalidade: débito, crédito à vista, parcelado e Pix.</li>
      <li>Anote a taxa de cada modalidade no seu contrato e a mensalidade.</li>
      <li>Calcule o custo mensal: mensalidade mais a soma de cada venda vezes a taxa.</li>
      <li>Divida o custo total pelo faturamento para achar a taxa média efetiva.</li>
      <li>Use essa taxa média na formação de preço e refaça a conta a cada trimestre.</li>
    </ol>

    <p>A taxa média efetiva é o número que cabe na planilha de preço. Para conferir o que entrou, o fechamento de caixa ajuda: veja <a href="/artigos/fechamento-de-caixa-diario-na-loja-conferir-pix-cartao-e-dinheiro-com-planilha-e-ia">fechamento de caixa diário</a> e a rotina de <a href="/artigos/contas-a-pagar-e-a-receber-em-planilha-vencimentos-coloridos-e-rotina-semanal-com-ia">contas a pagar e a receber</a>.</p>

    <h2>Usando a IA nessa conta</h2>

    <p>A IA organiza a planilha e explica o resultado, mas não deve inventar taxas. Cole apenas os números do seu extrato, sem dados de clientes. Um modelo de prompt:</p>

    <pre><code>Tenho estas vendas do mês por modalidade: débito R$ 3.000, crédito à vista R$ 4.500, crédito parcelado R$ 2.500. Taxas do meu contrato: débito 1,29%, crédito à vista 4,09%, parcelado 7,49%. Mensalidade R$ 99,90. Monte uma tabela com o custo de cada linha, o custo total e a taxa média efetiva sobre o faturamento. Mostre as contas passo a passo.</code></pre>

    <p>Confira o resultado com uma calculadora, já que modelos de linguagem podem errar conta, e leve a taxa média para o seu <a href="/artigos/dre-simples-com-ia-ler-o-lucro-do-pequeno-negocio-mes-a-mes">DRE simples</a>. Acompanhe também os números de <a href="/artigos/kpis-simples-cinco-numeros-para-acompanhar-toda-semana-no-seu-negocio-com-ia">KPIs simples da semana</a>.</p>

    <h2>Erros comuns</h2>

    <p>O primeiro é escolher a maquininha só pela menor taxa de débito, ignorando mensalidade e crédito. O segundo é antecipar tudo por padrão, sem comparar com a necessidade de caixa. O terceiro é fixar o preço sem a taxa e descobrir a perda no fim do mês. O quarto é não rever o contrato quando o faturamento sobe, perdendo chance de negociar. O quinto é esquecer o frete e a embalagem na venda online, que o texto sobre <a href="/artigos/frete-e-embalagem-no-preco-da-loja-online-calcular-com-ia-sem-perder-margem">frete e embalagem no preço</a> detalha.</p>

    <p>Em datas de muita venda, a conta aperta: veja como proteger a margem em <a href="/artigos/black-friday-2026-desconto-sem-prejuizo-para-pequeno-negocio">Black Friday sem prejuízo</a>.</p>

    <h2>Próximo passo</h2>

    <p>Separe o extrato do último mês, calcule a taxa média efetiva e compare com a margem dos seus três produtos mais vendidos. Se a taxa comer mais do que você imaginava, ajuste o preço ou a oferta de Pix e peça uma proposta a outra credenciadora. Para mais guias de preço e caixa, veja a <a href="/categoria/negocios">categoria negócios</a>.</p>
  `,
  faq: [
    {
      question: "O que é MDR na maquininha?",
      answer:
        "É a Merchant Discount Rate, um percentual descontado de cada venda no cartão. Segundo a Cielo, é dividida entre banco emissor, bandeira e credenciadora, e o lojista recebe o valor da venda já descontado.",
    },
    {
      question: "Como calcular o custo mensal da maquininha?",
      answer:
        "Some a mensalidade ou aluguel, as taxas MDR de cada modalidade sobre as vendas do mês e o custo da antecipação, se você usar. Divida o total pelo faturamento para achar a taxa média efetiva.",
    },
    {
      question: "Vale a pena antecipar os recebíveis?",
      answer:
        "Só quando houver necessidade de caixa. A antecipação permite receber antes, mas tem custo próprio. A Cielo recomenda comparar esse custo com o de não ter o dinheiro disponível.",
    },
    {
      question: "Devo embutir a taxa no preço ou dar desconto no Pix?",
      answer:
        "As duas opções são citadas pela Cielo. Embutir 3% faz um produto de R$ 100 custar R$ 103 para todos, e o desconto no Pix mantém R$ 100 para quem paga assim. Confira as regras de diferença de preço por forma de pagamento.",
    },
    {
      question: "A IA pode calcular a taxa por mim?",
      answer:
        "Pode organizar a planilha e mostrar as contas, mas você deve fornecer as taxas do seu contrato e conferir o resultado com calculadora. Não envie dados de clientes ao prompt.",
    },
  ],
};
