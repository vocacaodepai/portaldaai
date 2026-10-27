import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "frete-e-embalagem-no-preco-da-loja-online-calcular-com-ia-sem-perder-margem",
  title: "Frete e embalagem no preço da loja online: calcule sem perder margem",
  seoTitle: "Frete e embalagem no preço da loja online: como calcular",
  excerpt:
    "Frete e embalagem no preço da loja online: veja como somar o custo de envio, embalar certo, decidir quem paga o frete e usar IA na conta sem perder margem.",
  metaDescription:
    "Aprenda a colocar frete e embalagem no preço da loja online: custo real por pedido, frete grátis sem prejuízo, medidas dos Correios, arrependimento e prompts de IA.",
  category: "negocios",
  articleSubcategory: "financas-e-precificacao",
  date: "2026-10-27",
  readTime: 7,
  imageQuery: "packing parcel cardboard box shipping",
  seed: 839,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O custo de envio tem três partes: o frete pago à transportadora, a embalagem e o tempo de quem embala, e as três precisam entrar na conta do pedido.",
    "Frete grátis só é grátis para o cliente: alguém paga, e o jeito seguro é calcular o valor mínimo do pedido que cobre o frete sem comer a margem.",
    "A IA ajuda a montar a planilha e a testar cenários, mas os números de frete vêm do simulador oficial da transportadora e das suas medidas reais.",
  ],
  content: `
    <p>Frete e embalagem entram no preço da loja online como custos do pedido: some o frete que você paga à transportadora, o material da embalagem e o tempo de embalar, e decida quanto disso o cliente paga e quanto fica dentro do preço do produto. Sem essa conta, uma promoção de frete grátis pode transformar uma venda de R$ 120 em prejuízo sem que ninguém perceba.</p>

    <p>O problema aparece quando o dono da loja olha só a margem do produto e esquece o envio. Este guia mostra como levantar o custo real por pedido, como usar as regras e os limites de medidas dos Correios, como definir um valor mínimo para o frete grátis, o que o Código de Defesa do Consumidor diz sobre o arrependimento e como a IA ajuda a testar cenários sem fazer a conta no escuro.</p>

    <h2>Os três custos de envio que a maioria esquece</h2>

    <p>O primeiro custo é o frete em si. Segundo a página de <a href="https://www.correios.com.br/enviar/encomendas/nacional" target="_blank" rel="noopener noreferrer">encomendas nacionais dos Correios</a>, o preço depende do peso, da origem e do destino e dos serviços adicionais escolhidos, como aviso de recebimento e valor declarado. O prazo é contado em dias úteis a partir do primeiro dia útil depois da postagem, e uma postagem feita depois do horário de corte da agência pode somar um dia.</p>

    <p>O segundo custo é a embalagem: caixa, fita, plástico bolha, etiqueta, papel de proteção, sacola ou saquinho. Parece pouco por unidade, mas em 200 pedidos por mês vira um valor relevante. O terceiro é o tempo, que quase ninguém cobra de si mesmo: se embalar leva 6 minutos por pedido e a sua hora vale R$ 30, são R$ 3 por pedido que alguém pagou.</p>

    <p>Some os três e você tem o custo de envio por pedido. Esse número entra na planilha junto com o custo do produto, a taxa do meio de pagamento e a comissão do marketplace, se houver. Se ainda não tem essa estrutura, o guia de <a href="/artigos/markup-ou-margem-qual-usar-para-formar-preco-no-pequeno-negocio">markup e margem</a> mostra como formar o preço, e o de <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">precificação com IA</a> traz o passo a passo geral.</p>

    <h2>Medidas e peso: o que os Correios limitam</h2>

    <p>A mesma página dos Correios traz limites para o que dá para enviar. Um pacote ou caixa tem, no mínimo, 11 x 6 x 0,4 cm, no máximo 100 cm na maior dimensão e soma de comprimento, largura e altura de até 200 cm. O SEDEX aceita até 30 kg; o PAC também aceita 30 kg para cliente sem contrato, com até 50 kg para clientes com contrato, sujeito a disponibilidade. A página de <a href="https://www2.correios.com.br/sistemas/precosprazos/Formato.cfm" target="_blank" rel="noopener noreferrer">limites de dimensões das embalagens</a> detalha os formatos de envelope, caixa e rolo.</p>

    <p>Duas consequências práticas. Primeira: a caixa maior do que o necessário pode encarecer o envio, porque o preço pode levar em conta as dimensões e não só o peso (o simulador dos Correios mostra o valor final, e vale testar mais de uma caixa antes de comprar 100 unidades). Segunda: envelope só serve para produto fino. No PAC, o envelope é medido como pacote.</p>

    <p>Os valores de frete mudam. Por isso, nenhuma tabela deste texto traz preço de envio: simule no portal dos Correios com o CEP real de origem e de alguns destinos típicos, anote a data e atualize a planilha de tempos em tempos.</p>

    <h2>Monte a planilha de custo por pedido</h2>

    <p>Uma planilha simples resolve. Uma linha por produto ou por tipo de embalagem, com estas colunas:</p>

    <table>
      <thead>
        <tr><th>Coluna</th><th>Exemplo (ilustrativo)</th></tr>
      </thead>
      <tbody>
        <tr><td>Preço de venda</td><td>R$ 129,00</td></tr>
        <tr><td>Custo do produto</td><td>R$ 58,00</td></tr>
        <tr><td>Taxa de pagamento e comissão</td><td>R$ 9,00</td></tr>
        <tr><td>Embalagem (caixa, fita, proteção)</td><td>R$ 4,50</td></tr>
        <tr><td>Tempo de embalar (6 min a R$ 30/h)</td><td>R$ 3,00</td></tr>
        <tr><td>Frete médio simulado</td><td>R$ 24,00</td></tr>
        <tr><td>Sobra se a loja pagar o frete</td><td>R$ 30,50</td></tr>
        <tr><td>Sobra se o cliente pagar o frete</td><td>R$ 54,50</td></tr>
      </tbody>
    </table>

    <p>No exemplo, o frete grátis custa R$ 24 da sobra de R$ 54,50, quase metade. A decisão passa a ser concreta: dá para absorver isso, ou o produto precisa subir de preço, ou o frete grátis só vale acima de um valor? A conta do <a href="/artigos/ponto-de-equilibrio-com-ia-quanto-vender-para-nao-ter-prejuizo">ponto de equilíbrio</a> ajuda a ver quantos pedidos a loja precisa fazer para cobrir os custos fixos com essa sobra.</p>

    <h2>Frete grátis sem prejuízo: o valor mínimo do pedido</h2>

    <p>Frete grátis incentiva a compra, principalmente o carrinho maior. O truque é cobrar o custo dele de quem compra mais. Defina uma regra simples: o frete não pode passar de metade do que sobra do pedido antes do frete. Para achar o valor mínimo, multiplique o frete médio por 2 e divida pela margem de contribuição percentual (o que sobra do preço depois de produto, taxas e embalagem).</p>

    <p>No exemplo anterior, a sobra antes do frete e do tempo é R$ 129 menos R$ 58, R$ 9 e R$ 4,50, ou seja, R$ 57,50, cerca de 44,6% do preço. Com frete de R$ 24, a regra pede R$ 48 de sobra, o que equivale a cerca de R$ 108 em produtos (48 dividido por 0,446). Quem quiser mais folga pode fixar o frete grátis em R$ 199: nesse valor, a sobra sobe para cerca de R$ 89 e o frete passa a pesar pouco mais de um quarto dela.</p>

    <p>Outras saídas: cobrar frete reduzido (o cliente paga parte), oferecer retirada na loja ou combinar frete grátis só para regiões próximas, onde o envio é mais barato. Antes de campanhas grandes, como a <a href="/artigos/black-friday-2026-desconto-sem-prejuizo-para-pequeno-negocio">Black Friday</a> e o <a href="/artigos/natal-2026-como-planejar-estoque-promocoes-e-campanhas-com-ia-na-loja">Natal</a>, refaça a conta: o desconto e o frete grátis somados são o jeito mais comum de vender muito e lucrar nada.</p>

    <h2>Usando a IA para testar cenários</h2>

    <p>A IA é boa em montar a estrutura e testar variações; ela não conhece o seu frete. Entregue os números e peça a conta.</p>

    <pre><code>Sou dono de uma loja online. Vou te passar os custos de um produto: preço de venda R$ 129, custo R$ 58, taxa de pagamento e comissão R$ 9, embalagem R$ 4,50, tempo de embalar R$ 3 e frete médio R$ 24. Monte uma tabela com a sobra por pedido em 3 cenários: cliente paga o frete, loja paga o frete e frete grátis a partir de R$ 199 com carrinho médio de 1,6 itens. Mostre as contas passo a passo e aponte qual cenário deixa a menor sobra.</code></pre>

    <pre><code>Com base na tabela acima, sugira 3 valores mínimos de pedido para frete grátis e explique em uma frase o risco de cada um. Não invente preços de frete: use apenas os números que informei.</code></pre>

    <p>Peça sempre que a IA mostre a conta, e refaça uma delas na calculadora. Assistentes erram aritmética com mais frequência do que parece. Se a sua loja tem muitos produtos, o serviço de <a href="/artigos/cadastro-de-produtos-para-loja-virtual-com-ia-servico-pacote-e-preco">cadastro de produtos com IA</a> pode incluir peso e medidas de cada item, que são os dados que o cálculo de frete precisa.</p>

    <h2>Troca, devolução e arrependimento: quem paga o frete</h2>

    <p>Na compra pela internet, o Código de Defesa do Consumidor dá ao cliente o direito de desistir em 7 dias. O <a href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm" target="_blank" rel="noopener noreferrer">artigo 49 do CDC</a> diz que, exercido o direito, os valores pagos "a qualquer título" durante o prazo de reflexão são devolvidos de imediato, com correção monetária. O texto não fala em frete pelo nome, e a expressão ampla costuma ser lida como incluindo o que o cliente pagou na compra. Confirme a interpretação com um profissional se o volume de devoluções for alto.</p>

    <p>Isso muda a conta: em loja com muita devolução, o frete de ida e volta pode virar um dos maiores custos. O guia de <a href="/artigos/troca-e-devolucao-na-loja-online-politica-clara-e-respostas-com-ia">política de troca e devolução</a> mostra como escrever as regras, e o texto sobre <a href="/artigos/ia-para-reduzir-devolucoes-trocas-ecommerce">como reduzir devoluções com IA</a> ataca o problema na origem, com descrição e foto melhores.</p>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Frete grátis em tudo.</strong> Sem valor mínimo, o produto barato carrega o envio sozinho.</li>
      <li><strong>Caixa grande demais.</strong> Gasta mais material e pode encarecer o frete; teste duas ou três medidas.</li>
      <li><strong>Usar frete médio nacional para vender só em uma região.</strong> Simule os destinos que realmente aparecem nos pedidos.</li>
      <li><strong>Esquecer o seguro e o valor declarado.</strong> Produto caro precisa de proteção, e isso tem custo.</li>
      <li><strong>Não atualizar a planilha.</strong> Reajuste de frete ou de embalagem corrói a margem em silêncio; revise todo mês.</li>
    </ul>

    <h2>Próximo passo</h2>

    <p>Pegue os 5 produtos mais vendidos, pese e meça cada um já embalado, simule o frete para 3 CEPs típicos e preencha a tabela deste guia. Depois compare com a <a href="/artigos/dre-simples-com-ia-ler-o-lucro-do-pequeno-negocio-mes-a-mes">DRE simples</a> do mês e veja se a sobra por pedido bate com o lucro real. Quem vende em marketplace deve também conferir as regras de envio do canal, como no texto sobre <a href="/artigos/vender-na-shopee-com-ia-taxas-margem-e-anuncios">vender na Shopee com IA</a>. Para mais temas de preço e caixa, visite a <a href="/categoria/negocios">categoria de negócios</a>.</p>
  `,
  faq: [
    {
      question: "Como calcular o frete no preço do produto?",
      answer:
        "Some o frete simulado, a embalagem e o tempo de embalar para achar o custo de envio por pedido. Depois decida quanto repassa ao cliente e quanto absorve. Faça a conta pela sobra do pedido, não só pela margem do produto, e atualize a simulação de frete com frequência.",
    },
    {
      question: "Vale a pena oferecer frete grátis?",
      answer:
        "Pode valer, desde que o custo caiba na margem. O caminho mais seguro é oferecer frete grátis acima de um valor mínimo de pedido, calculado pela sobra média por venda, em vez de dar frete grátis em qualquer compra.",
    },
    {
      question: "Quais as medidas máximas de um pacote nos Correios?",
      answer:
        "Segundo os Correios, um pacote tem no mínimo 11 x 6 x 0,4 cm, no máximo 100 cm na maior dimensão e soma das três medidas de até 200 cm. O peso máximo é de 30 kg para SEDEX e para PAC de cliente sem contrato. Confira o limite atual no site.",
    },
    {
      question: "Quem paga o frete na devolução por arrependimento?",
      answer:
        "O CDC prevê 7 dias para desistir da compra feita fora da loja e a devolução imediata dos valores pagos a qualquer título nesse prazo. A leitura mais comum inclui o frete pago na compra. Para situações específicas, vale consultar um advogado ou o Procon.",
    },
    {
      question: "A IA calcula o frete dos Correios?",
      answer:
        "Não de forma confiável. A IA monta a planilha, testa cenários e confere a lógica, mas o valor do frete depende de peso, medidas, origem, destino e do serviço. Use o simulador oficial dos Correios e informe os números para a IA trabalhar.",
    },
  ],
};
