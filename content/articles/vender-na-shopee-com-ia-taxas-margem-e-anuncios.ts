import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "vender-na-shopee-com-ia-taxas-margem-e-anuncios",
  title: "Vender na Shopee com IA: taxas, margem e anúncios",
  seoTitle: "Vender na Shopee com IA: taxas, margem e anúncios",
  excerpt:
    "Vender na Shopee com IA fica mais simples quando você calcula a margem antes. Veja a tabela de comissão, um exemplo em reais e prompts para anúncios e fotos.",
  metaDescription:
    "Vender na Shopee com IA: entenda a comissão por faixa de preço, calcule a margem de um produto, use prompts para títulos e fotos e evite os erros comuns de iniciante.",
  category: "monetizacao",
  articleSubcategory: "negocios-online",
  date: "2026-10-18",
  readTime: 6,
  imageQuery: "packing parcels online shop desk",
  seed: 425,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Antes de anunciar, calcule a margem: a comissão da Shopee depende da faixa de preço e inclui um valor fixo por item, o que pesa muito em produto barato.",
    "A IA ajuda a escrever título, descrição e perguntas frequentes e a organizar fotos, mas o preço, o fornecedor e a conferência dos números continuam com você.",
    "Nenhum ganho é garantido: o resultado depende de produto, concorrência, prazo de envio e avaliação dos clientes.",
  ],
  content: `
    <p>Vender na Shopee com IA significa usar assistentes de texto e imagem para acelerar o trabalho chato do marketplace (título, descrição, fotos, respostas a clientes) e, sobretudo, para calcular se cada produto deixa lucro depois da comissão. A IA não escolhe o produto por você nem garante venda, mas encurta o tempo entre a ideia e o anúncio no ar.</p>

    <p>Neste guia você vê como funciona a cobrança da Shopee por faixa de preço, faz a conta da margem com dois exemplos em reais, ganha prompts prontos para anúncio e aprende os erros que mais comem lucro de quem está começando. Não é promessa de renda: o resultado depende do que você vende, da concorrência e de quanto tempo dedica.</p>

    <h2>Como a Shopee cobra do vendedor</h2>

    <p>A conta começa pela comissão. Segundo a <a href="https://marketplace.anymarket.com.br/mudanca-de-comissao-shopee/" target="_blank" rel="noopener noreferrer">Anymarket</a>, a Shopee anunciou em fevereiro de 2026 uma política de comissão para vendedores com CNPJ, em vigor desde 1º de março, com percentual variável por faixa de preço mais um valor fixo por item. A tabela abaixo reproduz o que a Anymarket publicou (verificado em 18/10/2026).</p>

    <table>
      <thead>
        <tr><th>Preço do item</th><th>Comissão</th><th>Valor fixo por item</th></tr>
      </thead>
      <tbody>
        <tr><td>Até R$ 79,99</td><td>20%</td><td>R$ 4</td></tr>
        <tr><td>R$ 80 a R$ 99,99</td><td>14%</td><td>R$ 16</td></tr>
        <tr><td>R$ 100 a R$ 199,99</td><td>14%</td><td>R$ 20</td></tr>
        <tr><td>R$ 200 a R$ 499,99</td><td>14%</td><td>R$ 26</td></tr>
        <tr><td>A partir de R$ 500</td><td>14%</td><td>R$ 26</td></tr>
      </tbody>
    </table>

    <p>A mesma fonte informa que a taxa de transação já está dentro da comissão e que não há cobrança de comissão em devolução, cancelamento ou reembolso. Há ainda o Programa de Frete Grátis, em que cupons cobrem parte do frete conforme o preço do item. As regras mudam com frequência e variam entre CPF e CNPJ, então confirme sempre o valor vigente no painel do vendedor e na <a href="https://seller.shopee.com.br/edu/home" target="_blank" rel="noopener noreferrer">Central de Educação do Vendedor</a> antes de definir preço.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Nenhuma tabela de terceiros substitui o painel da Shopee. Se o número da sua conta for diferente do que está neste texto, vale o do painel.</p></div>

    <h2>A conta da margem com dois exemplos</h2>

    <p>Veja como o valor fixo muda tudo. Imagine uma camiseta que você compra por R$ 25, embala por R$ 3 e anuncia por R$ 59,90. A comissão é 20% de R$ 59,90 (R$ 11,98) mais R$ 4, ou seja, R$ 15,98. Sobram R$ 59,90 menos R$ 15,98, menos R$ 25, menos R$ 3: cerca de R$ 15,92, algo como 27% do preço, antes de imposto, frete que não seja coberto pelos cupons e tempo de trabalho.</p>

    <p>Agora um fone que custa R$ 55 e embalagem de R$ 3, vendido por R$ 120. A comissão é 14% de R$ 120 (R$ 16,80) mais R$ 20, total R$ 36,80. Sobram R$ 120 menos R$ 36,80, menos R$ 55, menos R$ 3: cerca de R$ 25,20, ou 21% do preço. O produto mais caro rende mais reais por venda, mas a margem percentual é menor, e o risco de devolução também pesa mais.</p>

    <p>O guia de <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">precificação com IA</a> ensina a montar essa planilha, e o de <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa com IA</a> mostra como acompanhar o dinheiro que entra e sai.</p>

    <h2>Onde a IA entra de verdade</h2>

    <h3>Título e descrição</h3>

    <p>Peça à IA variações de título com a palavra que o cliente digita no início, e descrição com medidas, material e o que vem na caixa. Revise tudo: se a IA escrever uma característica que o produto não tem, o cliente reclama e a nota cai. Um prompt útil:</p>

    <pre><code>Você é redator de anúncios para marketplace brasileiro. Produto: camiseta de algodão unissex, tamanhos P ao GG, cor preta, estampa frontal pequena. Escreva 5 títulos de até 100 caracteres começando pela palavra de busca principal e uma descrição com medidas, composição e cuidados de lavagem. Use somente as informações que dei e não invente material, selo ou garantia.</code></pre>

    <h3>Fotos e atendimento</h3>

    <p>Para imagens, o texto sobre <a href="/artigos/fotos-de-produto-para-vender-online-com-ia">fotos de produto com IA</a> explica como limpar fundo e padronizar sem enganar o comprador: a foto precisa mostrar o produto real. Para o chat, monte respostas prontas para as dúvidas comuns (prazo, tamanho, troca) e use um assistente para rascunhar a resposta, sempre com você revisando. O mesmo vale para o histórico de avaliações, tema de <a href="/artigos/como-melhorar-avaliacoes-e-reputacao-online-com-ia">reputação online com IA</a>.</p>

    <h3>Pesquisa de produto</h3>

    <p>Antes de comprar estoque, use IA para organizar concorrentes: preço, avaliação, prazo e reclamações recorrentes. Isso é parte do que o artigo de <a href="/artigos/como-validar-ideia-de-negocio-com-ia-antes-de-investir">validar ideia de negócio</a> detalha. Teste com poucas unidades primeiro.</p>

    <h2>Qual modelo escolher: estoque, dropshipping ou sob demanda</h2>

    <p>Existem três caminhos comuns para quem começa, cada um com um risco diferente. Com estoque próprio, você controla qualidade e prazo, mas imobiliza dinheiro (veja <a href="/artigos/como-usar-ia-para-gerenciar-estoque-pequeno-comercio">gestão de estoque com IA</a>). No dropshipping, o fornecedor envia, e você depende dele para prazo e qualidade, como explica o guia de <a href="/artigos/como-ganhar-dinheiro-com-dropshipping-usando-ia">dropshipping com IA</a>. No sob demanda, a peça só é produzida depois do pedido, modelo descrito em <a href="/artigos/print-on-demand-com-ia-vender-camisetas-e-canecas-sem-estoque">print on demand</a>. Verifique nas regras da Shopee se o modelo escolhido é permitido e como fica o prazo de envio, porque atraso gera penalidade.</p>

    <h2>Formalização e imposto</h2>

    <p>Quem vende com frequência precisa pensar em CNPJ. Pelo Portal do Empreendedor, em <a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor" target="_blank" rel="noopener noreferrer">gov.br</a>, o MEI faz a declaração anual (DASN-SIMEI) e paga as guias mensais; o teto de faturamento e as atividades permitidas precisam ser conferidos na legislação do próprio portal. Para acompanhar o limite mês a mês, leia <a href="/artigos/limite-de-faturamento-do-mei-como-controlar-mes-a-mes">como controlar o limite de faturamento do MEI</a>, e para a parte de notas, <a href="/artigos/nota-fiscal-de-servico-para-mei-nfs-e-nacional-com-ajuda-de-ia">nota fiscal de serviço para MEI</a> (que trata de serviço, não de produto: confirme com contador o seu caso).</p>

    <h2>Rotina semanal de 5 passos para não se perder</h2>

    <p>Quem vende em marketplace perde dinheiro mais por desorganização do que por falta de produto. Uma rotina curta já ajuda: na segunda, revise preços e estoque; na terça, responda dúvidas e avaliações; na quarta, teste um título novo em um anúncio que não vende; na quinta, confira prazos de envio e pedidos atrasados; na sexta, olhe a planilha de margem e veja quanto realmente sobrou. Pedir à IA um resumo das reclamações da semana, colando só o texto das avaliações e sem dados pessoais, economiza tempo e mostra padrões, como tamanho que veste diferente do anúncio.</p>

    <p>Anote também o que cada anúncio custou de tempo. Se um item rende R$ 15 de sobra e exige 20 minutos de atendimento por pedido, a conta real é outra. Esse olhar de gestor, e não o de quem só posta anúncio, é o que separa uma renda extra sustentável de um trabalho que consome horas e deixa pouco.</p>

    <h2>Erros comuns de quem começa</h2>

    <ul class="checklist">
      <li>Fixar o preço olhando só o concorrente, sem somar comissão, valor fixo, embalagem e perdas.</li>
      <li>Copiar descrição gerada pela IA sem conferir medidas e materiais.</li>
      <li>Vender produto de R$ 30 a R$ 40 com margem mínima: o valor fixo e a comissão de 20% comem quase tudo.</li>
      <li>Prometer prazo que o fornecedor não cumpre e acumular avaliação ruim.</li>
      <li>Ignorar devoluções no cálculo, principalmente em roupa e eletrônico.</li>
    </ul>

    <p>Se você quer montar o negócio inteiro, o guia de <a href="/artigos/como-montar-uma-loja-virtual-em-um-fim-de-semana-usando-ia">loja virtual em um fim de semana</a> serve de base, e o de <a href="/artigos/como-usar-ia-para-vender-mais-no-seu-negocio-local">vender mais no negócio local</a> mostra como combinar o marketplace com o público da sua cidade. Comece com poucos produtos, faça a conta de cada um e só então escale. Continue acompanhando a categoria Monetização para outros modelos.</p>
  `,
  faq: [
    {
      question: "Quanto a Shopee cobra de comissão?",
      answer:
        "Segundo a Anymarket, para vendedores com CNPJ a comissão é de 20% mais R$ 4 por item até R$ 79,99, e de 14% mais um valor fixo de R$ 16 a R$ 26 acima disso (verificado em 18/10/2026). Confirme sempre o valor atual no painel do vendedor, porque as regras mudam.",
    },
    {
      question: "Dá para vender na Shopee sem CNPJ?",
      answer:
        "A plataforma aceita vendedores pessoa física e jurídica, com regras e taxas diferentes. Quem vende com frequência deve considerar abrir MEI, que dá nota e organiza imposto. Confira as condições do seu perfil na Central do Vendedor e, se tiver dúvida fiscal, converse com um contador.",
    },
    {
      question: "A IA pode criar meus anúncios na Shopee?",
      answer:
        "Pode rascunhar título, descrição e respostas, mas você precisa revisar tudo. Se o texto prometer material, medida ou garantia que o produto não tem, o cliente reclama e a nota cai. Use a IA para ganhar tempo, não para substituir a conferência.",
    },
    {
      question: "Qual produto compensa mais vender na Shopee?",
      answer:
        "Depende da conta. Itens muito baratos sofrem com comissão de 20% mais valor fixo, e itens caros têm mais devolução. Calcule a margem de cada produto com todos os custos, teste poucas unidades e escolha o que sobra lucro depois das taxas.",
    },
  ],
};
