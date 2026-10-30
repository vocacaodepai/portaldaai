import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "clube-de-assinatura-no-pequeno-negocio-caixa-mensal-preco-cancelamento-e-cdc",
  title: "Clube de assinatura no pequeno negócio: preço, caixa e cancelamento",
  seoTitle: "Clube de assinatura para pequeno negócio: como montar",
  excerpt:
    "Monte um clube de assinatura no pequeno negócio: escolha do produto, preço da caixa mensal, controle de caixa, regras de cancelamento e o que o CDC exige.",
  metaDescription:
    "Clube de assinatura para pequeno negócio: como calcular preço e margem da caixa mensal, controlar entregas e cancelamentos com planilha e IA e respeitar o CDC.",
  category: "negocios",
  articleSubcategory: "vendas-e-marketing",
  date: "2026-10-30",
  readTime: 8,
  imageQuery: "small shop packing monthly subscription box",
  seed: 921,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Clube de assinatura dá previsibilidade de caixa, mas só funciona se a margem da caixa cobrir produto, embalagem, frete, taxa de pagamento e as desistências.",
    "Regras de cancelamento e de arrependimento precisam estar claras desde a venda, e o Código de Defesa do Consumidor se aplica a compras feitas fora da loja física.",
    "A IA ajuda a calcular preço, escrever as mensagens e organizar a planilha de assinantes, mas as contas e os termos devem ser conferidos por você.",
  ],
  content: `
    <p>Um clube de assinatura no pequeno negócio é uma venda recorrente: o cliente paga todo mês e recebe um produto ou serviço combinado, como uma caixa de cafés especiais, kits de papelaria ou uma cesta de hortifrúti. A vantagem é a previsão de receita. O risco é que, se o preço não cobrir todos os custos e as desistências, cada nova assinatura aumenta o prejuízo.</p>

    <p>Este guia mostra como validar a ideia, calcular o preço da caixa, controlar assinantes em uma planilha, usar IA para as mensagens e tratar cancelamentos e direitos do consumidor. Os números são exemplos didáticos, não metas de faturamento.</p>

    <h2>Quando faz sentido ter um clube</h2>

    <p>Assinatura combina com produtos que o cliente consome de forma regular e que você consegue repor com previsibilidade: café, pães, produtos de beleza, ração, flores, itens de papelaria, temperos. Não combina com produto de compra rara, como um sofá, ou com algo que depende de estoque que você não controla.</p>

    <p>Antes de montar, responda a três perguntas. O cliente já compra isso de você com frequência? Você consegue entregar com o mesmo padrão por três meses seguidos? A entrega cabe na sua logística atual? Se alguma resposta for não, teste com uma "caixa avulsa" antes de oferecer assinatura. O <a href="https://www.sebrae-sc.com.br/blog/como-fidelizar-clientes" target="_blank" rel="noopener noreferrer">blog do Sebrae/SC sobre fidelização</a>, consultado em 30/10/2026, cita pesquisa da Harvard Business School segundo a qual um aumento de 5% na retenção pode elevar o lucro de 25% a 95%. Retenção pesa, mas esse intervalo é amplo e varia por setor.</p>

    <h2>Como calcular o preço da caixa</h2>

    <p>Some todos os custos de uma caixa e só depois some a margem. Esquecer a taxa de pagamento e as desistências é o erro mais comum. Veja um exemplo com uma loja de cafés especiais:</p>

    <table>
      <thead>
        <tr><th>Item</th><th>Valor por caixa (exemplo)</th></tr>
      </thead>
      <tbody>
        <tr><td>Café (2 pacotes de 250 g)</td><td>R$ 38,00</td></tr>
        <tr><td>Embalagem e cartão</td><td>R$ 6,00</td></tr>
        <tr><td>Frete médio</td><td>R$ 16,00</td></tr>
        <tr><td>Taxa de pagamento (cerca de 4%)</td><td>R$ 3,20</td></tr>
        <tr><td>Reserva para trocas e extravio (5%)</td><td>R$ 4,00</td></tr>
        <tr><td>Custo total</td><td>R$ 67,20</td></tr>
        <tr><td>Preço para margem de 30% sobre o preço</td><td>R$ 96,00</td></tr>
      </tbody>
    </table>

    <p>Para chegar ao preço, divida o custo total por 0,70 (R$ 67,20 dividido por 0,70 dá R$ 96,00). Repare que o frete é um peso grande. Se a entrega for local, o custo cai e o preço pode ser menor. Se o frete variar muito por região, ofereça o clube só onde o custo é estável. O artigo sobre <a href="/artigos/frete-e-embalagem-no-preco-da-loja-online-calcular-com-ia-sem-perder-margem">frete e embalagem no preço da loja online</a> mostra como não perder margem, e o de <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">precificação com IA</a> ajuda na conta.</p>

    <p>Um prompt para conferir seus números:</p>

    <pre><code>Tenho um clube de assinatura de cafés. Custos por caixa: produto R$ 38, embalagem R$ 6, frete R$ 16, taxa de pagamento 4% do preço, reserva de 5% do preço para trocas. Quero margem de 30% sobre o preço de venda. Calcule o preço, mostre a conta passo a passo e diga quanto sobra por caixa se 15% dos assinantes cancelarem no segundo mês.</code></pre>

    <h2>Controle de assinantes e de caixa</h2>

    <p>Uma planilha simples já resolve no começo: nome, contato, data de início, plano, forma de pagamento, status (ativo, pausado, cancelado), data do próximo envio e observações. Se a assinatura for cobrada por link de pagamento ou plataforma, registre também a data da cobrança e o resultado. Para o dia a dia financeiro, o texto sobre <a href="/artigos/contas-a-pagar-e-a-receber-em-planilha-vencimentos-coloridos-e-rotina-semanal-com-ia">contas a pagar e a receber em planilha</a> mostra uma rotina semanal, e o de <a href="/artigos/capital-de-giro-do-pequeno-negocio-como-calcular-com-ia-e-quando-pedir-credito">capital de giro</a> ajuda a entender quanto você precisa ter em caixa para comprar insumos antes de receber.</p>

    <h3>Indicadores simples</h3>

    <ul class="checklist">
      <li>Assinantes ativos no início e no fim do mês.</li>
      <li>Cancelamentos do mês dividido por assinantes do início (taxa de cancelamento).</li>
      <li>Margem por caixa depois de todos os custos.</li>
      <li>Tempo médio que o assinante fica no clube.</li>
      <li>Motivos de cancelamento, anotados em uma coluna.</li>
    </ul>

    <p>Para reduzir cancelamentos, veja <a href="/artigos/como-usar-ia-para-reduzir-cancelamento-de-clientes">como usar IA para reduzir cancelamento de clientes</a> e o guia de <a href="/artigos/pos-venda-com-ia-mensagem-de-acompanhamento-e-pedido-de-avaliacao">pós-venda com IA</a>.</p>

    <h2>Cancelamento, arrependimento e CDC</h2>

    <p>O <a href="https://www2.camara.leg.br/legin/fed/lei/1990/lei-8078-11-setembro-1990-365086-norma-pl.html" target="_blank" rel="noopener noreferrer">Código de Defesa do Consumidor (Lei 8.078/1990)</a> prevê, no artigo 49, o direito de arrependimento em contratações feitas fora do estabelecimento comercial, como por internet, telefone ou WhatsApp, no prazo de 7 dias a partir da contratação ou do recebimento. Se o cliente exercer o direito, os valores pagos devem ser devolvidos. O texto da lei está no link; leia o artigo completo e, em caso de dúvida, consulte um contador ou advogado.</p>

    <p>Na prática, escreva os termos do clube com linguagem simples: valor, data de cobrança, o que vem na caixa, prazo de envio, como pausar, como cancelar e quando o cancelamento começa a valer. Não crie obstáculo para sair, como exigir ligar em horário restrito. Para o atendimento, o artigo sobre o <a href="/artigos/decreto-13135-de-2026-novas-regras-do-sac-e-o-que-copiar-no-atendimento-da-sua-loja">decreto 13.135/2026 do SAC</a> mostra boas práticas que vale copiar, e o de <a href="/artigos/garantia-legal-e-contratual-o-que-a-loja-deve-cumprir-e-como-explicar-ao-cliente">garantia legal e contratual</a> explica o que você deve cumprir quando o produto vem com defeito.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Se você guarda nome, endereço e telefone dos assinantes, trata dados pessoais. Coletar só o necessário e dizer para que serve faz parte da LGPD, tema do <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD</a>. Evite colar a lista completa de clientes em ferramentas de IA.</p></div>

    <h2>Onde a IA ajuda no clube</h2>

    <ul>
      <li><strong>Mensagens:</strong> boas-vindas, aviso de envio, lembrete de pagamento e pesquisa de satisfação, em tom próximo. Veja a <a href="/artigos/pesquisa-de-satisfacao-com-ia-analisar-respostas-de-clientes">pesquisa de satisfação com IA</a>.</li>
      <li><strong>Curadoria:</strong> ideias de combinação de itens por mês, com revisão sua.</li>
      <li><strong>Textos de venda:</strong> página do clube, perguntas frequentes e descrição dos planos.</li>
      <li><strong>Análise:</strong> resumo dos motivos de cancelamento, sem dados identificáveis.</li>
    </ul>

    <p>Se o clube vira indicação entre clientes, o artigo sobre <a href="/artigos/programa-de-indicacao-de-clientes-com-ia-pequeno-negocio">programa de indicação com IA</a> complementa. E para divulgar na semana de promoções, veja a <a href="/artigos/black-friday-2026-desconto-sem-prejuizo-para-pequeno-negocio">Black Friday 2026 sem prejuízo</a>, lembrando que desconto de entrada em assinatura precisa caber na margem dos três primeiros meses.</p>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Preço sem margem.</strong> Esquecer frete, taxa e trocas transforma crescimento em prejuízo.</li>
      <li><strong>Prometer o que muda.</strong> Se a caixa varia, diga isso na venda e mantenha um padrão de valor.</li>
      <li><strong>Dificultar o cancelamento.</strong> Gera reclamação, estorno e má reputação.</li>
      <li><strong>Sem plano para falta de estoque.</strong> Combine antes uma substituição equivalente.</li>
      <li><strong>Crescer rápido demais.</strong> Comece com 10 a 20 assinantes e valide a operação.</li>
    </ul>

    <h2>Comece pequeno</h2>

    <p>Escolha um produto que já vende bem, calcule o preço com todos os custos, abra 10 vagas para clientes atuais e acompanhe três meses de dados antes de ampliar. Registre cancelamentos e ajuste a caixa. Para mais ideias de venda recorrente e relacionamento, veja a categoria <a href="/categoria/negocios">IA para negócios</a>.</p>
  `,
  faq: [
    {
      question: "Vale a pena montar um clube de assinatura no pequeno negócio?",
      answer:
        "Vale quando o cliente já compra o produto com frequência, você consegue manter o padrão por vários meses e a margem cobre frete, taxa de pagamento, trocas e desistências. Comece com poucas vagas, acompanhe os dados por três meses e só então amplie a operação.",
    },
    {
      question: "Como calcular o preço de uma caixa de assinatura?",
      answer:
        "Some produto, embalagem, frete, taxa de pagamento e uma reserva para trocas. Depois divida o custo total por 1 menos a margem desejada, em decimal. Por exemplo, para margem de 30% sobre o preço, divida o custo por 0,70. Reveja a conta se o frete ou a taxa mudarem.",
    },
    {
      question: "O cliente pode desistir da assinatura em 7 dias?",
      answer:
        "O Código de Defesa do Consumidor prevê, no artigo 49, o direito de arrependimento em 7 dias para contratações feitas fora do estabelecimento comercial, como internet e telefone. Deixe isso claro nos termos do clube e, em dúvida sobre seu caso, consulte um advogado ou contador.",
    },
    {
      question: "Como controlar assinantes sem sistema caro?",
      answer:
        "Uma planilha com nome, contato, plano, status, data de cobrança e próximo envio resolve no começo. Some indicadores simples, como assinantes ativos, taxa de cancelamento e margem por caixa. Quando o volume crescer, avalie uma plataforma de cobrança recorrente.",
    },
    {
      question: "A IA pode cuidar da operação do clube?",
      answer:
        "Pode ajudar com mensagens, textos de venda, ideias de curadoria e resumo de motivos de cancelamento. Cobrança, estoque, prazos e termos continuam sob sua responsabilidade, e dados pessoais dos assinantes não devem ser colados em ferramentas sem critério.",
    },
  ],
};
