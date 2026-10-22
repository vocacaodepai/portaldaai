import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "markup-ou-margem-qual-usar-para-formar-preco-no-pequeno-negocio",
  title: "Markup ou margem: qual usar para formar preço no pequeno negócio",
  seoTitle: "Markup ou margem: como formar preço sem prejuízo",
  excerpt:
    "Markup ou margem? Entenda a diferença, veja a fórmula do Sebrae com um exemplo em reais e aprenda a usar a IA para conferir o preço antes de dar desconto.",
  metaDescription:
    "Markup ou margem: diferença em linguagem simples, fórmula do Sebrae, exemplo com custo de R$ 18, efeito do desconto no lucro e prompt de IA para conferir o seu preço.",
  category: "negocios",
  articleSubcategory: "financas-e-precificacao",
  date: "2026-10-22",
  readTime: 7,
  imageQuery: "calculator price tags small shop",
  seed: 569,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Markup é o número que você multiplica pelo custo para chegar ao preço, e margem é a parte do preço que sobra como lucro: são coisas diferentes e confundir as duas é causa comum de prejuízo.",
    "A fórmula usada pelo Sebrae divide 100 por 100 menos a soma das despesas variáveis, das despesas fixas e do lucro desejado, e o resultado multiplica o custo do produto.",
    "Um desconto de 10% pode reduzir o lucro por unidade em muito mais que 10%, então calcule o preço mínimo antes de promover e use a IA só para conferir as contas.",
  ],
  content: `
    <p>Markup é o fator que você multiplica pelo custo do produto para chegar ao preço de venda, e margem é o percentual do preço que fica como lucro. Para formar preço no pequeno negócio, use o markup como ferramenta de cálculo, mas sempre confira qual margem real ele entrega depois das despesas.</p>
    <p>A confusão entre os dois termos faz muita gente vender com prejuízo sem perceber: aplica 30% sobre o custo, acha que ficou com 30% de lucro e esquece taxas, impostos e despesas fixas. Este guia mostra a diferença, a fórmula, um exemplo completo em reais e como a IA ajuda a conferir as contas, sem substituir o contador.</p>

    <h2>O que é markup e o que é margem</h2>
    <p>O <a href="https://blog.rn.sebrae.com.br/markup/" target="_blank" rel="noopener noreferrer">artigo do Sebrae RN sobre markup</a>, consultado em 22/10/2026, define markup como a diferença entre o preço de venda e o custo, expressa como percentual do custo. Já a margem de lucro é a parte do preço de venda que sobra como lucro depois de pagar custos e despesas. A base de cálculo muda: o markup olha para o custo, a margem olha para o preço.</p>
    <p>Um exemplo simples mostra o tamanho da diferença. Um produto que custa R$ 50 e é vendido a R$ 100 tem markup de 100% (dobrou sobre o custo), mas a margem bruta é de 50% (metade do preço). Se você pensa "quero 50% de lucro" e aplica 50% de markup, chega a R$ 75, e a margem bruta é só de 33%. Por isso o primeiro passo é saber de qual número está falando.</p>

    <h2>A fórmula do Sebrae para o fator de marcação</h2>
    <p>O mesmo artigo apresenta a fórmula do fator multiplicador: 100 dividido por [100 menos (DV + DF + ML)], onde DV são as despesas variáveis, DF são as despesas fixas e ML é a margem de lucro desejada, todas em percentual do preço. O resultado multiplica o custo do produto e dá o preço de venda.</p>
    <p>O exemplo do Sebrae usa um serviço de pet shop com custo de R$ 60, despesas fixas de 12%, variáveis de 15% e margem desejada de 18%. A conta é 100 / (100 - 45) = 1,82, e 1,82 vezes R$ 60 dá cerca de R$ 109,20. Para entender a lógica de custos, margem de contribuição e preço mínimo, o <a href="https://bibliotecas.sebrae.com.br/chronus/ARQUIVOS_CHRONUS/bds/bds.nsf/45ee582085782cbc0f452cce55d360d4/$File/19655.pdf" target="_blank" rel="noopener noreferrer">guia prático de precificação do Sebrae</a> é uma leitura complementar. O guia sobre <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">como precificar produtos e serviços com IA</a> traz o passo anterior, o levantamento de custos.</p>

    <h2>Exemplo: caneca personalizada com custo de R$ 18</h2>
    <p>Uma loja de canecas personalizadas paga R$ 18 pelo produto pronto, com arte e embalagem. Ela estima que 12% do preço vão para taxas de plataforma e imposto (despesas variáveis), 15% para despesas fixas rateadas (aluguel do ateliê, internet, ferramentas) e quer 20% de lucro. Os percentuais são hipotéticos, para ilustrar a conta.</p>
    <table>
      <thead>
        <tr><th>Item</th><th>Percentual do preço</th><th>Valor em R$</th></tr>
      </thead>
      <tbody>
        <tr><td>Custo do produto</td><td>47%</td><td>18,00</td></tr>
        <tr><td>Despesas variáveis</td><td>12%</td><td>4,08</td></tr>
        <tr><td>Despesas fixas</td><td>15%</td><td>5,09</td></tr>
        <tr><td>Lucro desejado</td><td>20%</td><td>6,79</td></tr>
        <tr><td><strong>Preço de venda</strong></td><td>100%</td><td><strong>33,96</strong></td></tr>
      </tbody>
    </table>
    <p>O fator é 100 / (100 - 47) = 1,887, e 1,887 vezes R$ 18 dá R$ 33,96. O markup percentual é de cerca de 89% sobre o custo, embora a margem de lucro seja de 20% sobre o preço. Quem olhasse só para o "89%" poderia achar o número alto demais e cortar o preço, quando ele só reflete que o custo é menos da metade do preço.</p>

    <h2>O erro clássico: aplicar a margem como se fosse markup</h2>
    <p>Se a dona da loja pensasse "quero 20% de lucro" e fizesse R$ 18 vezes 1,20, chegaria a R$ 21,60. Parece razoável, mas dessa quantia saem as taxas variáveis (12%, ou R$ 2,59), sobrando R$ 1,01, e as despesas fixas rateadas (cerca de R$ 3,24 nesse preço) transformam o resultado em prejuízo de aproximadamente R$ 2,23 por caneca. A venda existe, o dinheiro entra, mas o negócio perde a cada unidade.</p>
    <p>Esse tipo de erro aparece quando se confunde "percentual em cima do custo" com "percentual do preço". O texto sobre o <a href="/artigos/ponto-de-equilibrio-com-ia-quanto-vender-para-nao-ter-prejuizo">ponto de equilíbrio com IA</a> mostra quantas unidades você precisa vender para cobrir as despesas fixas, e o guia de <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa</a> mostra por que lucro no papel não é dinheiro no banco.</p>

    <h2>O que acontece com o lucro quando você dá desconto</h2>
    <p>No exemplo, o preço cheio é R$ 33,96 e o lucro por caneca é R$ 6,79. Com 10% de desconto, o preço cai para cerca de R$ 30,56. As taxas variáveis, proporcionais ao preço, caem para R$ 3,67, o custo continua R$ 18 e o rateio fixo continua R$ 5,09. Sobram cerca de R$ 3,80 de lucro, uma queda de 44% para um desconto de 10%.</p>
    <p>Isso quer dizer que, para manter o lucro total, você precisaria vender bem mais unidades, e nem sempre o desconto traz esse volume. Antes de qualquer promoção, defina um preço mínimo: o menor valor em que a venda ainda cobre custo e despesas variáveis e dá alguma contribuição. A leitura sobre <a href="/artigos/black-friday-2026-desconto-sem-prejuizo-para-pequeno-negocio">desconto sem prejuízo na Black Friday</a> aplica essa lógica a um caso concreto.</p>

    <h2>Como a IA ajuda a conferir o preço</h2>
    <p>A IA é útil para organizar a conta, montar a planilha e testar cenários, mas não conhece suas despesas reais. Informe os números e peça a memória de cálculo, para você conferir cada passo. O guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> ajuda a transformar o resultado numa tabela reutilizável.</p>
    <pre><code>Sou dono de uma loja de canecas personalizadas. Custo do produto: R$ 18. Despesas variáveis: 12% do preço. Despesas fixas: 15% do preço. Lucro desejado: 20% do preço. Calcule o fator de marcação com a fórmula 100 / (100 - (DV + DF + ML)), o preço de venda, o markup percentual sobre o custo e o lucro em reais por unidade. Depois simule descontos de 5%, 10% e 15% e diga o lucro por unidade em cada caso. Mostre todas as contas passo a passo.</code></pre>
    <p>Confira ao menos um resultado na calculadora e peça que a IA mostre a conta quando algo parecer estranho. Se os números ficarem muito diferentes do esperado, geralmente o problema é uma despesa esquecida na entrada.</p>

    <h2>Quando markup é suficiente e quando olhar a margem de contribuição</h2>
    <p>Para quem vende poucos produtos parecidos, um fator de marcação único já ajuda a ter rapidez. Com muitos itens de custos diferentes, canais distintos (loja própria, marketplace, venda direta) e taxas variadas, calcule a margem de contribuição por canal, como no guia sobre <a href="/artigos/vender-na-shopee-com-ia-taxas-margem-e-anuncios">vender na Shopee com IA</a>. A taxa muda de canal para canal, e portanto o preço mínimo também muda.</p>
    <p>Em produtos digitais, onde o custo unitário é quase zero, o raciocínio muda para as taxas da plataforma, e o texto sobre <a href="/artigos/produto-digital-na-hotmart-quanto-sobra-depois-das-taxas">quanto sobra na Hotmart depois das taxas</a> mostra um caso. Para vender em loja própria, o comparativo de <a href="/artigos/nuvemshop-plano-gratis-ou-pago-taxas-e-recursos-de-ia-para-vender">planos da Nuvemshop</a> mostra como as taxas entram na conta. Se você é MEI, acompanhe também o <a href="/artigos/limite-de-faturamento-do-mei-como-controlar-mes-a-mes">limite de faturamento</a>, porque vender mais não pode estourar o enquadramento.</p>

    <h2>Erros comuns na formação de preço</h2>
    <ul class="checklist">
      <li>Confundir markup com margem e achar que 30% sobre o custo é 30% de lucro.</li>
      <li>Esquecer taxas de plataforma, frete grátis, embalagem e imposto nas despesas variáveis.</li>
      <li>Ratear despesas fixas de forma irreal, sem olhar quantas unidades você vende por mês.</li>
      <li>Copiar o preço do concorrente sem saber o custo dele (nem o seu).</li>
      <li>Dar desconto sem calcular o efeito no lucro por unidade.</li>
      <li>Nunca revisar a conta quando o fornecedor reajusta o custo.</li>
    </ul>
    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Revise o preço sempre que o custo do fornecedor ou as taxas da plataforma mudarem. Marque uma data fixa no calendário, como o primeiro dia útil do mês.</p></div>

    <h2>Próximo passo</h2>
    <p>Pegue os cinco produtos que mais vendem, levante custo e percentuais de despesa e calcule o fator de marcação de cada um. Compare o preço atual com o calculado e veja onde há diferença. Se encontrar produto com prejuízo, ajuste o preço ou reduza o custo antes de pensar em promoção. Para projetar o mês, veja o guia de <a href="/artigos/como-fazer-previsao-de-vendas-planejamento-financeiro-com-ia">previsão de vendas com IA</a>. Para reduzir custos, veja o guia de <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">custos operacionais com IA</a>, e acompanhe mais conteúdo na categoria de <a href="/categoria/negocios">negócios</a>.</p>
  `,
  faq: [
    {
      question: "Qual a diferença entre markup e margem de lucro?",
      answer:
        "Markup é o percentual aplicado sobre o custo para formar o preço, e margem de lucro é o percentual do preço de venda que sobra como lucro. Um produto de R$ 50 vendido a R$ 100 tem markup de 100% e margem bruta de 50%, porque cada base de cálculo é diferente.",
    },
    {
      question: "Como calcular o markup pela fórmula do Sebrae?",
      answer:
        "Divida 100 por 100 menos a soma de despesas variáveis, despesas fixas e margem de lucro desejada, todas em percentual do preço. O resultado é o fator que multiplica o custo. No exemplo do Sebrae, custo de R$ 60 com 45% de soma resulta em preço de cerca de R$ 109,20.",
    },
    {
      question: "Posso usar o mesmo markup para todos os produtos?",
      answer:
        "Pode, se custos, taxas e canais forem parecidos. Quando produtos têm taxas diferentes, como marketplace e venda direta, o fator único pode gerar preço baixo demais em alguns itens. Nesse caso, calcule o fator por canal ou por grupo de produtos.",
    },
    {
      question: "Quanto o desconto reduz meu lucro?",
      answer:
        "Depende da margem. No exemplo do artigo, uma caneca de R$ 33,96 com lucro de R$ 6,79 passa a render cerca de R$ 3,80 com 10% de desconto, queda de 44%. Calcule seu caso antes de promover, porque o impacto cresce quando a margem é apertada.",
    },
    {
      question: "A IA pode calcular o preço de venda por mim?",
      answer:
        "Pode ajudar a organizar as contas e simular cenários, desde que você informe custo e percentuais reais e peça a memória de cálculo. Confira o resultado em uma calculadora e valide com o contador quando houver impostos específicos ou regimes diferentes.",
    },
  ],
};
