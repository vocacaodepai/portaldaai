import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "controle-de-validade-e-perdas-no-comercio-de-alimentos-pvps-planilha-e-ia",
  title: "Controle de validade no comércio de alimentos: PVPS e planilha",
  seoTitle: "Controle de validade no comércio de alimentos com PVPS",
  excerpt:
    "Controle de validade no comércio de alimentos com PVPS, planilha e IA: como reduzir perdas por vencimento, o que as normas pedem e uma conta com números em reais.",
  metaDescription:
    "Controle de validade no pequeno comércio de alimentos: método PVPS, planilha de vencimentos, desconto antes de perder o produto e o que a RDC 216 e a lista da prefeitura de SP pedem.",
  category: "negocios",
  articleSubcategory: "gestao-e-operacao",
  date: "2026-10-31",
  readTime: 7,
  imageQuery: "grocery shelf dairy products store",
  seed: 985,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "PVPS (primeiro que vence, primeiro que sai) é a regra de organizar o estoque pela data de validade, e aparece como item de verificação na lista de boas práticas para supermercados da Prefeitura de São Paulo.",
    "Uma planilha com data de vencimento, lote e quantidade, ordenada pela data, mostra todo dia o que precisa sair primeiro, e a IA ajuda a montar fórmulas, alertas e textos de promoção.",
    "Dar desconto antes do vencimento, sem baixar o preço abaixo do custo, recupera o dinheiro investido, enquanto o produto vencido vira prejuízo total e, em alimentos, não pode ser vendido nem usado.",
  ],
  content: `
    <p>Controle de validade no comércio de alimentos é o processo de registrar a data de vencimento de cada lote, organizar a prateleira para vender primeiro o que vence primeiro (o método PVPS) e agir antes da data, com desconto, troca ou retirada. Um mercadinho, uma padaria ou uma lanchonete que faz isso numa planilha simples já reduz perdas e evita vender produto vencido.</p>

    <p>A perda por vencimento é silenciosa: ninguém vê o iogurte que passou da data, só o caixa que fechou menor. Este guia mostra o que as normas pedem, como montar a planilha, como a IA ajuda a criar fórmulas e avisos e quanto dinheiro está em jogo, com um exemplo em reais. Os números do exemplo são ilustrativos; use os seus.</p>

    <h2>O que é PVPS e por que ele vale dinheiro?</h2>
    <p>PVPS significa primeiro que vence, primeiro que sai. É diferente do PEPS, primeiro que entra, primeiro que sai, que serve quando o produto não traz validade ou quando a ordem de chegada acompanha a de vencimento. A diferença aparece quando um lote novo chega com data mais curta que o lote antigo: pelo PEPS o antigo sai antes, mas pelo PVPS o lote que vence antes é o que vai para a frente.</p>
    <p>A lista de verificação de boas práticas para supermercados e hipermercados da Prefeitura de São Paulo, baseada na Portaria 2.619/11, traz o <a href="https://drive.prefeitura.sp.gov.br/cidade/secretarias/upload/saude/LV_Supermercados_11_02_2022.pdf" target="_blank" rel="noopener noreferrer">uso de PEPS/PVPS</a> entre os itens avaliados e também a ausência de produtos com prazo de validade vencido e a retirada diária desses itens da área de venda. A fiscalização local pode ter exigências próprias, então confirme com a vigilância sanitária da sua cidade.</p>
    <p>O ganho financeiro é direto. Todo item que vence na prateleira é dinheiro que você já pagou ao fornecedor e não recupera. O texto sobre <a href="/artigos/como-usar-ia-para-gerenciar-estoque-pequeno-comercio">como usar IA para gerenciar estoque no pequeno comércio</a> cobre a visão geral; aqui o foco é o prazo de validade.</p>

    <h2>O que a norma pede de quem manipula e serve alimentos</h2>
    <p>Para serviços de alimentação (restaurantes, lanchonetes, padarias que produzem), vale a Resolução RDC 216/2004 da Anvisa. No <a href="https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2004/res0216_15_09_2004.html" target="_blank" rel="noopener noreferrer">texto publicado pela Biblioteca Virtual em Saúde</a>, o item 4.7.5 diz que as matérias-primas e os ingredientes devem estar acondicionados e identificados e que seu uso deve respeitar o prazo de validade; para os dispensados de indicar validade, observa-se a ordem de entrada. O item 4.7.4 manda devolver ao fornecedor os lotes reprovados ou vencidos, ou, se não for possível, identificá-los, guardá-los separados e definir o destino final.</p>
    <p>O item 4.8.17 trata do alimento preparado e conservado sob refrigeração a 4 °C ou menos: o prazo máximo de consumo é de 5 dias, e a identificação deve trazer ao menos o nome do produto, a data de preparo e o prazo de validade. Confirme a versão vigente da norma no site da Anvisa, porque regras sanitárias são atualizadas e a vigilância municipal pode pedir mais.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Este texto organiza a gestão do estoque; ele não substitui orientação da vigilância sanitária nem do responsável técnico do seu estabelecimento. Produto vencido de alimento não se vende, não se doa como se estivesse bom e não vai para a produção.</p></div>

    <h2>Planilha de validade em 6 colunas</h2>
    <p>Uma planilha simples resolve a maior parte do problema. Use uma linha por lote, não por produto, porque o mesmo item pode ter duas datas diferentes na prateleira.</p>

    <table>
      <thead>
        <tr><th>Coluna</th><th>Exemplo</th><th>Para que serve</th></tr>
      </thead>
      <tbody>
        <tr><td>Produto</td><td>Iogurte natural 170 g</td><td>Identificar o item</td></tr>
        <tr><td>Lote</td><td>L2310</td><td>Separar lotes com datas diferentes</td></tr>
        <tr><td>Vencimento</td><td>12/11/2026</td><td>Base de todos os alertas</td></tr>
        <tr><td>Quantidade</td><td>48</td><td>Saber quanto está em risco</td></tr>
        <tr><td>Custo unitário</td><td>R$ 3,20</td><td>Calcular a perda possível</td></tr>
        <tr><td>Dias para vencer</td><td>fórmula</td><td>Ordenar e destacar</td></tr>
      </tbody>
    </table>

    <p>A coluna "Dias para vencer" é a data de vencimento menos a data de hoje. Ordene a planilha por ela, do menor para o maior, e pinte de vermelho o que está a 7 dias ou menos. Quem tem pouca prática com fórmulas encontra o passo a passo em <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">aprender planilhas do zero com IA</a>, e o guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> mostra como automatizar relatórios.</p>

    <h3>Prompt para a IA montar as fórmulas</h3>
    <pre><code>Tenho uma planilha no Google Planilhas com as colunas:
A Produto, B Lote, C Vencimento (data), D Quantidade, E Custo unitário.
Crie a coluna F com os dias para vencer (vencimento menos hoje),
a coluna G com o valor em risco (quantidade vezes custo) e uma regra de
formatação condicional: vermelho com 7 dias ou menos, amarelo de 8 a 15 dias.
Explique cada fórmula em uma frase.</code></pre>
    <p>Teste as fórmulas com três linhas inventadas antes de colocar os dados reais. Se a IA errar uma referência de célula, você percebe na hora, o que é bem mais barato do que descobrir depois.</p>

    <h2>Quanto custa perder produto por vencimento: uma conta</h2>
    <p>Cenário ilustrativo. Um mercadinho em Recife compra R$ 18.000 por mês em laticínios, frios e produtos refrigerados. Se perde 4% por vencimento, são R$ 720 por mês, R$ 8.640 por ano. Reduzir a perda para 2% devolve R$ 360 ao caixa todo mês.</p>
    <p>Agora um item. O iogurte custa R$ 3,20 e é vendido a R$ 5,50. Com 7 dias para vencer, o dono aplica 30% de desconto e vende a R$ 3,85, cobrindo o custo e deixando R$ 0,65 por unidade. Se deixasse vencer, perderia os R$ 3,20 inteiros. Em 48 unidades, deixar vencer é uma perda de R$ 153,60 (48 x R$ 3,20); vender com desconto traz R$ 184,80 (48 x R$ 3,85), uma sobra de R$ 31,20 sobre o custo. O resultado melhora em R$ 184,80, mesmo sem lucro cheio.</p>
    <p>O desconto depende de margem e de concorrência; o guia de <a href="/artigos/markup-ou-margem-qual-usar-para-formar-preco-no-pequeno-negocio">markup ou margem</a> ajuda a decidir até onde baixar. Para entender o efeito no bolso do mês, veja o <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa com IA</a>.</p>

    <h2>Rotina diária de 10 minutos</h2>
    <ol>
      <li>Abra a planilha e ordene pelos dias para vencer.</li>
      <li>Leve para a frente da prateleira ou da geladeira os lotes em vermelho.</li>
      <li>Retire os vencidos da área de venda e registre como perda, com data e motivo.</li>
      <li>Defina a ação para os amarelos: desconto, combo ou troca com o fornecedor.</li>
      <li>Ao receber mercadoria nova, lance o lote e coloque o novo atrás do antigo.</li>
    </ol>
    <p>Transformar essa rotina em procedimento escrito, com responsável e horário, evita que dependa de uma pessoa só. O guia de <a href="/artigos/procedimento-operacional-padrao-com-ia-como-documentar-processos">procedimento operacional padrão com IA</a> mostra como documentar. Para acompanhar o resultado, escolha poucos indicadores, como na lista de <a href="/artigos/kpis-simples-cinco-numeros-para-acompanhar-toda-semana-no-seu-negocio-com-ia">cinco números para acompanhar toda semana</a>: valor perdido por vencimento e percentual sobre as compras são suficientes.</p>

    <h2>Negociar com fornecedor e comprar na medida certa</h2>
    <p>A causa mais comum de vencimento é comprar mais do que se vende. Compare a quantidade comprada com o que saiu nas últimas semanas e reduza o pedido dos itens de giro lento. Em perecíveis, vale pedir entregas menores e mais frequentes, e perguntar ao fornecedor sobre política de troca de produto próximo do vencimento. O artigo sobre <a href="/artigos/como-usar-ia-para-negociar-melhor-com-fornecedores">negociar melhor com fornecedores com IA</a> traz roteiros de conversa.</p>
    <p>Em datas de pico, o risco muda: comprar para o Natal exige olhar a validade de panetones, bebidas e importados. Veja o planejamento no guia de <a href="/artigos/natal-2026-como-planejar-estoque-promocoes-e-campanhas-com-ia-na-loja">estoque, promoções e campanhas para o Natal</a>. Quem trabalha com refeições prontas pode somar o <a href="/artigos/ia-para-restaurante-e-delivery-cardapio-pedidos-e-avaliacoes">guia de IA para restaurante e delivery</a>.</p>

    <h2>Erros comuns</h2>
    <ul>
      <li>Registrar só o produto e não o lote, e perder o controle das datas diferentes.</li>
      <li>Colocar o lote novo na frente do antigo por comodidade.</li>
      <li>Esperar o último dia para dar desconto, quando já ninguém compra.</li>
      <li>Não registrar a perda, e por isso nunca saber quanto ela custa.</li>
      <li>Confiar em fórmula gerada pela IA sem testar com poucos dados.</li>
      <li>Deixar a rotina com uma pessoa só, sem substituto.</li>
    </ul>

    <p>Comece pela categoria que mais vence na sua loja, normalmente laticínios ou frios, e monte a planilha só dela. Em duas semanas você terá o primeiro número de perda e saberá se o desconto antecipado compensa. Mais ideias de organização estão na categoria de negócios do Portal da AI, e o fechamento diário do caixa, em <a href="/artigos/fechamento-de-caixa-diario-na-loja-conferir-pix-cartao-e-dinheiro-com-planilha-e-ia">fechamento de caixa na loja</a>, combina bem com essa rotina.</p>
  `,
  faq: [
    {
      question: "O que significa PVPS no estoque?",
      answer:
        "Significa primeiro que vence, primeiro que sai: o lote com a data de validade mais próxima vai para a frente e é vendido antes, mesmo que tenha chegado depois. Difere do PEPS, que segue a ordem de chegada. Em alimentos com validade, o PVPS costuma ser o mais seguro.",
    },
    {
      question: "Posso vender produto perto do vencimento com desconto?",
      answer:
        "Em geral, sim, enquanto estiver dentro do prazo de validade e bem identificado como oferta. O que não pode é vender depois da data. Combine a regra com a vigilância sanitária local e informe o cliente da validade com clareza.",
    },
    {
      question: "O que a RDC 216 diz sobre produtos vencidos?",
      answer:
        "No texto de 2004, o item 4.7.4 manda devolver ao fornecedor os lotes reprovados ou vencidos ou, se não for possível, identificá-los, guardá-los separados e definir o destino final. A norma vale para serviços de alimentação, e a versão vigente deve ser conferida no site da Anvisa.",
    },
    {
      question: "A IA pode controlar a validade do meu estoque?",
      answer:
        "Ela ajuda a montar planilha, fórmulas, alertas e textos de promoção, mas não vê a sua prateleira. Os dados de lote e vencimento precisam ser lançados por uma pessoa. Teste as fórmulas com poucas linhas antes de usar os dados reais.",
    },
    {
      question: "Quanto de perda por vencimento é aceitável?",
      answer:
        "Não há número único; depende do tipo de produto e da loja. O mais útil é medir a sua perda por 30 dias, dividir pelo valor das compras do período e acompanhar se o percentual cai depois da planilha e do PVPS. Perecíveis costumam perder mais que secos.",
    },
  ],
};
