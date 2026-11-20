import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "curva-abc-de-estoque-com-ia-o-que-repor-e-o-que-encalha",
  title: "Curva ABC de estoque com IA: o que repor e o que encalha",
  seoTitle: "Curva ABC de estoque com IA: o que repor e o que encalha",
  excerpt:
    "Aprenda a montar a curva ABC de estoque com IA e planilha, separar o que mais fatura do que encalha e decidir o que repor antes do Natal sem travar caixa.",
  metaDescription:
    "Aprenda a montar a curva ABC de estoque com IA e planilha, separar o que mais fatura do que encalha e decidir o que repor antes do Natal sem travar caixa.",
  category: "negocios",
  articleSubcategory: "gestao-e-operacao",
  date: "2026-11-20",
  readTime: 8,
  imageQuery: "retail store shelves inventory",
  seed: 1238,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A curva ABC ordena os produtos pelo valor que cada um movimenta e separa os poucos que sustentam o faturamento (A) dos muitos que pouco pesam (C).",
    "Com uma planilha de vendas e um prompt, a IA monta a classificação em minutos, mas quem decide o que repor continua sendo o dono, com o olhar do caixa.",
    "Refazer a curva a cada trimestre, e antes de datas fortes como o Natal, evita dinheiro parado em prateleira e falta do que realmente vende.",
  ],
  content: `
    <p>A curva ABC de estoque é um método que ordena os produtos pelo valor que cada um movimenta e separa os poucos itens que sustentam o faturamento dos muitos que quase não pesam. Com uma planilha de vendas e a ajuda de uma IA, o pequeno comércio faz essa classificação em uma tarde e passa a saber o que repor primeiro e o que está encalhado.</p>
    <p>Faltando pouco mais de um mês para o Natal, errar a compra custa caro de dois jeitos: faltar o produto campeão no pico de vendas ou entupir a prateleira de item que não gira. Este guia mostra o passo a passo com números, prompts prontos e os erros que mais aparecem.</p>

    <h2>O que é a curva ABC de estoque?</h2>
    <p>A curva ABC é uma classificação inspirada no princípio de Pareto, a regra 80/20: uma parte pequena dos itens responde pela maior parte do resultado. O <a href="https://www.omie.com.br/blog/conheca-a-curva-abc-e-otimize-o-seu-estoque/" target="_blank" rel="noopener noreferrer">blog da Omie</a> explica o método como uma divisão dos produtos em três grupos, conforme a importância e o valor para o negócio. Uma publicação da <a href="https://bibliotecas.sebrae.com.br/chronus/ARQUIVOS_CHRONUS/bds/bds.nsf/993e56ecde845e32bffa8f9192a5a38e/%24File/4760.pdf" target="_blank" rel="noopener noreferrer">biblioteca do Sebrae</a> sobre gestão de estoque descreve o sistema ABC nesse mesmo espírito: uma ferramenta que classifica os itens pela importância para a gestão da empresa.</p>
    <p>Na prática, são três classes:</p>
    <ul>
      <li><strong>Classe A:</strong> poucos itens, a maior parte do valor. Exigem controle de perto e reposição sem furo.</li>
      <li><strong>Classe B:</strong> itens intermediários. Pedem acompanhamento regular, sem exagero.</li>
      <li><strong>Classe C:</strong> muitos itens, pouco valor. Cabem em controle simples e compra em lote menor.</li>
    </ul>
    <p>Um guia da <a href="https://www.nuvemshop.com.br/blog/curva-abc" target="_blank" rel="noopener noreferrer">Nuvemshop</a> resume a proporção típica: cerca de 20% dos produtos geram 80% dos resultados, 30% geram 15% e os 50% restantes geram só 5%. Isso é uma referência, não uma lei: na sua loja os números podem ser outros, e o ponto do método é descobrir quais são.</p>

    <h2>Por que a curva ABC importa para o caixa</h2>
    <p>Estoque é dinheiro parado. Todo produto que fica meses na prateleira é capital que poderia estar pagando fornecedor, aluguel ou um item que vende toda semana. Quem trata todos os produtos do mesmo jeito acaba dando atenção demais ao que pouco importa e de menos ao que sustenta a loja.</p>
    <p>A curva ABC corrige isso ao responder duas perguntas simples: qual produto não pode faltar e qual produto não deveria ter sido comprado em tanta quantidade. A primeira protege a venda. A segunda protege o <a href="/artigos/capital-de-giro-do-pequeno-negocio-como-calcular-com-ia-e-quando-pedir-credito">capital de giro</a>, que é o que mantém a operação respirando entre uma venda e outra.</p>
    <p>Ela também ajuda a negociar. Com a lista dos itens A na mão, fica claro com qual fornecedor vale pedir prazo maior ou desconto por volume, tema do guia sobre <a href="/artigos/como-usar-ia-para-negociar-melhor-com-fornecedores">negociar melhor com fornecedores</a>.</p>

    <h2>Os dados que você precisa antes de começar</h2>
    <p>Não precisa de sistema caro. Uma planilha com quatro colunas já resolve: nome do produto, quantidade vendida no período, preço de venda e custo unitário. O período ideal é de 3 a 12 meses, dependendo do giro da loja. Em comércio com forte sazonalidade, prefira 12 meses ou compare com o mesmo período do ano passado.</p>
    <p>Se a loja usa maquininha, marketplace ou sistema de caixa, exporte o relatório de vendas por item. Quem controla tudo no caderno pode usar o resumo do <a href="/artigos/fechamento-de-caixa-diario-na-loja-conferir-pix-cartao-e-dinheiro-com-planilha-e-ia">fechamento de caixa diário</a>, desde que os produtos estejam identificados.</p>
    <p>Duas decisões ajudam a evitar confusão:</p>
    <ul class="checklist">
      <li>Escolha o critério da curva: faturamento (preço x quantidade) ou lucro (margem x quantidade). Para quem está começando, faturamento é mais simples; lucro é mais fiel ao bolso.</li>
      <li>Junte variações do mesmo produto (cor, tamanho) quando elas se comportam igual, para a planilha não virar uma lista de 400 linhas.</li>
      <li>Remova itens descontinuados ou vendidos uma única vez em promoção pontual, que distorcem o resultado.</li>
    </ul>

    <h2>Passo a passo: montando a curva ABC em 5 etapas</h2>
    <p>O Google Planilhas ou o Excel fazem tudo. A IA entra para acelerar as fórmulas e interpretar o resultado.</p>
    <ol>
      <li>Calcule o valor de cada item: quantidade vendida multiplicada pelo preço (ou pela margem).</li>
      <li>Ordene a lista do maior para o menor valor.</li>
      <li>Calcule a participação de cada item no total: valor do item dividido pela soma geral.</li>
      <li>Calcule o percentual acumulado, somando a participação linha a linha.</li>
      <li>Classifique: A até 80% acumulado, B de 80% a 95%, C o restante. Esses cortes aparecem no guia da Omie e são os mais usados.</li>
    </ol>
    <p>Para quem não quer montar as fórmulas, um prompt resolve. Cole os dados do relatório (sem dados pessoais de clientes) e peça:</p>
    <pre><code>Você é um analista de estoque de pequeno comércio. Abaixo está a lista de produtos com quantidade vendida nos últimos 6 meses, preço de venda e custo unitário. Monte a curva ABC pelo faturamento: calcule o valor de cada item, ordene do maior para o menor, calcule o percentual acumulado e classifique em A (até 80%), B (80% a 95%) e C (restante). Devolva em tabela e diga quantos itens ficaram em cada classe. Se algum dado parecer inconsistente, avise antes de calcular.</code></pre>
    <p>Sempre confira o total que a IA devolveu com a soma da sua planilha. Modelo de linguagem erra conta quando a lista é longa, e a conferência leva dois minutos.</p>

    <h2>Exemplo com números: papelaria de bairro</h2>
    <p>Imagine uma papelaria com 10 itens principais que faturaram R$ 10.000 em um mês (valores ilustrativos, só para mostrar a conta). A planilha ordenada fica assim:</p>
    <table>
      <thead>
        <tr><th>Produto</th><th>Faturamento</th><th>Participação</th><th>Acumulado</th><th>Classe</th></tr>
      </thead>
      <tbody>
        <tr><td>Caderno universitário</td><td>R$ 4.000</td><td>40%</td><td>40%</td><td>A</td></tr>
        <tr><td>Caneta gel</td><td>R$ 2.500</td><td>25%</td><td>65%</td><td>A</td></tr>
        <tr><td>Mochila</td><td>R$ 1.500</td><td>15%</td><td>80%</td><td>A</td></tr>
        <tr><td>Estojo</td><td>R$ 900</td><td>9%</td><td>89%</td><td>B</td></tr>
        <tr><td>Papel A4</td><td>R$ 600</td><td>6%</td><td>95%</td><td>B</td></tr>
        <tr><td>Marcador de texto</td><td>R$ 250</td><td>2,5%</td><td>97,5%</td><td>C</td></tr>
        <tr><td>Agenda</td><td>R$ 150</td><td>1,5%</td><td>99%</td><td>C</td></tr>
        <tr><td>Régua, calculadora e pasta</td><td>R$ 100</td><td>1%</td><td>100%</td><td>C</td></tr>
      </tbody>
    </table>
    <p>Três itens (caderno, caneta e mochila) respondem por 80% do faturamento. Se a loja ficar sem caderno na semana de volta às aulas, perde quase metade da receita do mês. Já a régua, a calculadora e a pasta somam 1% e não justificam estoque grande.</p>
    <p>A decisão prática: manter estoque de segurança nos itens A, comprar B conforme o giro e reduzir ao mínimo a compra de C, aceitando até a falta eventual. Se esses itens C forem baratos e de alto giro de curiosidade, vale ainda juntar tudo num kit, como no guia de <a href="/artigos/kits-de-presente-de-natal-na-loja-pequena-montar-precificar-e-divulgar-com-ia">kits de presente de Natal</a>.</p>

    <h2>Como decidir o que repor com cada classe</h2>
    <p>Classificar é metade do trabalho. A outra metade é transformar a letra em regra de compra. Uma tabela simples orienta a rotina:</p>
    <table>
      <thead>
        <tr><th>Classe</th><th>Revisão</th><th>Estoque de segurança</th><th>Postura de compra</th></tr>
      </thead>
      <tbody>
        <tr><td>A</td><td>Semanal</td><td>Alto: cobre o prazo de entrega do fornecedor com folga</td><td>Pedidos menores e frequentes, negociação de prazo e preço</td></tr>
        <tr><td>B</td><td>Quinzenal ou mensal</td><td>Médio</td><td>Compra por giro, sem estocar demais</td></tr>
        <tr><td>C</td><td>Mensal ou trimestral</td><td>Baixo</td><td>Lotes pequenos, liquidar o que está parado</td></tr>
      </tbody>
    </table>
    <p>Para o item A, a conta do ponto de reposição é: venda média por dia multiplicada pelos dias que o fornecedor leva para entregar, mais uma folga de segurança. Se o caderno vende 20 por dia e o fornecedor entrega em 5 dias, o pedido deve sair quando restarem uns 100 cadernos mais a folga. Quem tem pouco histórico pode pedir ajuda à IA para calcular, usando o prompt do bloco abaixo.</p>
    <pre><code>Para cada item da classe A abaixo, calcule o ponto de reposição: venda média por dia x prazo de entrega do fornecedor em dias + 20% de folga. Use as vendas dos últimos 90 dias divididas por 90. Devolva em tabela com o item, a venda diária, o prazo, o ponto de reposição e a quantidade sugerida de pedido para cobrir 15 dias. Não invente dados que eu não informei.</code></pre>
    <p>A rotina de acompanhar esses pontos combina bem com o que o <a href="/artigos/como-usar-ia-para-gerenciar-estoque-pequeno-comercio">guia de gestão de estoque com IA</a> já descreve, e o aviso automático de estoque mínimo pode ser montado na própria planilha.</p>

    <h2>O que fazer com os itens C e os encalhados</h2>
    <p>Item classe C não é sinônimo de item ruim. Alguns completam o mix, são tickets baixos que levam o cliente à loja ou têm margem alta. O problema aparece quando o estoque deles é grande demais para o que giram. Antes de cortar, confira três coisas:</p>
    <ul class="checklist">
      <li>Há quanto tempo o item não vende nada? Mais de 90 dias sem venda é sinal de encalhe.</li>
      <li>Qual a margem dele? C com margem alta pode ficar; C com margem baixa e giro baixo é candidato a sair.</li>
      <li>Ele puxa outra venda? O item que acompanha um A, como a pilha da calculadora, merece ficar.</li>
    </ul>
    <p>Para o que encalhou, as saídas clássicas são combo com um item A, promoção com prazo curto e preço de custo, ou devolução ao fornecedor quando o contrato permitir. Faça a conta do desconto antes: o guia de <a href="/artigos/black-friday-2026-desconto-sem-prejuizo-para-pequeno-negocio">Black Friday sem prejuízo</a> mostra como calcular até onde dá para baixar sem pagar para vender, e <a href="/artigos/markup-ou-margem-qual-usar-para-formar-preco-no-pequeno-negocio">markup ou margem</a> esclarece a diferença entre os dois cálculos.</p>
    <p>Dinheiro liberado de estoque parado entra direto no <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa</a>. Vale registrar quanto foi recuperado na liquidação para medir se o método está funcionando.</p>

    <h2>Antes do Natal: ajustando a curva para a sazonalidade</h2>
    <p>A curva ABC mostra o passado. Em dezembro, o comportamento muda: itens que ficaram em B ou C no ano podem virar campeões por duas semanas, e itens A podem cair. Por isso, faça duas curvas: uma do ano inteiro e outra do mesmo período do ano anterior, se tiver o dado.</p>
    <p>Um roteiro simples para esta época:</p>
    <ol>
      <li>Refaça a curva com as vendas de novembro e dezembro do ano passado.</li>
      <li>Marque os itens que subiram de classe e aumente a compra deles, respeitando o limite do caixa.</li>
      <li>Cruze com o plano do <a href="/artigos/natal-2026-como-planejar-estoque-promocoes-e-campanhas-com-ia-na-loja">Natal 2026 na loja</a> e com as promoções da Black Friday.</li>
      <li>Confirme prazos de entrega: em fim de ano, fornecedor e transportadora atrasam, e o ponto de reposição precisa de folga maior.</li>
      <li>Depois do Natal, refaça a curva e liquide o que sobrou, antes do <a href="/artigos/inventario-de-fim-de-ano-na-loja-contagem-recontagem-e-divergencias-com-ia">inventário de fim de ano</a>.</li>
    </ol>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Não compre estoque grande de um item só porque ele subiu de classe em um mês. Confirme se o aumento vem de demanda repetida ou de uma promoção pontual, e só então ajuste o pedido.</p></div>

    <h2>Erros comuns ao usar a curva ABC</h2>
    <ul>
      <li><strong>Usar só a quantidade vendida:</strong> o item mais vendido nem sempre é o que mais fatura. Pela quantidade, a caneta ganha; pelo valor, a mochila pode ganhar.</li>
      <li><strong>Fazer a curva uma vez e esquecer:</strong> a classificação envelhece. O recomendado é refazer a cada trimestre ou semestre, e antes de datas fortes.</li>
      <li><strong>Ignorar a margem:</strong> um produto A de margem muito baixa pode consumir caixa sem sobrar lucro. Compare com o <a href="/artigos/ponto-de-equilibrio-com-ia-quanto-vender-para-nao-ter-prejuizo">ponto de equilíbrio</a> da loja.</li>
      <li><strong>Confiar cegamente na IA:</strong> a IA organiza e calcula, mas não sabe que o fornecedor fechou, que o produto saiu de linha ou que a obra em frente à loja derrubou o movimento.</li>
      <li><strong>Cortar o item C sem olhar o cliente:</strong> alguns itens baratos seguram a fidelidade de quem compra os A.</li>
      <li><strong>Misturar produtos novos com antigos:</strong> item lançado há 15 dias não tem histórico para entrar na curva. Acompanhe à parte por 60 dias.</li>
    </ul>

    <h2>Como transformar isso em rotina</h2>
    <p>Método bom é o que cabe na semana. Registre a rotina em um <a href="/artigos/procedimento-operacional-padrao-com-ia-como-documentar-processos">procedimento padrão</a> de uma página: quem exporta o relatório, quando a curva é refeita, quais itens A precisam de contagem semanal e quem aprova pedidos acima de determinado valor.</p>
    <p>Combine com o <a href="/artigos/contas-a-pagar-e-a-receber-em-planilha-vencimentos-coloridos-e-rotina-semanal-com-ia">controle de contas a pagar</a>, para que o pedido ao fornecedor só saia quando o vencimento do boleto cabe no caixa. E, depois das festas, aproveite o movimento para conquistar quem comprou na promoção, como mostra o guia sobre <a href="/artigos/cliente-da-black-friday-como-fazer-voltar-depois-da-promocao-com-ia">trazer o cliente da Black Friday de volta</a>.</p>
    <p>Comece hoje com os 20 produtos que mais saem: exporte as vendas, rode o prompt acima e marque em vermelho os itens A. Só com isso você já enxerga onde o estoque protege a venda e onde só prende dinheiro. Depois, aprofunde com a categoria <a href="/categoria/negocios">Negócios</a>.</p>
  `,
  faq: [
    {
      question: "O que é curva ABC de estoque?",
      answer:
        "É um método que ordena os produtos pelo valor que cada um movimenta e os divide em três classes. A reúne poucos itens que geram a maior parte do resultado, B fica no meio e C reúne muitos itens de pouco peso. Serve para decidir onde concentrar controle, compra e dinheiro.",
    },
    {
      question: "Quais são os percentuais da curva ABC?",
      answer:
        "O mais comum é A até 80% do valor acumulado, B de 80% a 95% e C o restante. Em quantidade de itens, a referência costuma ser cerca de 20% em A, 30% em B e 50% em C. São parâmetros de referência: na sua loja, a divisão pode sair diferente, e tudo bem.",
    },
    {
      question: "Dá para fazer a curva ABC com IA?",
      answer:
        "Dá. Você cola a lista de produtos com quantidade, preço e custo, pede o cálculo do acumulado e a classificação, e a IA devolve a tabela. Sempre confira o total com a sua planilha, porque modelos de linguagem podem errar conta em listas longas. Evite enviar dados pessoais de clientes.",
    },
    {
      question: "Com que frequência refazer a curva ABC?",
      answer:
        "Refaça a cada trimestre ou semestre, conforme o giro da loja. Em comércio sazonal, refaça também antes das datas fortes, como Dia das Mães e Natal, e logo depois, para ver o que sobrou. Se o mix muda rápido, uma revisão mensal só dos itens A já ajuda bastante.",
    },
    {
      question: "Curva ABC serve para loja pequena ou MEI?",
      answer:
        "Serve, e talvez mais ainda, porque o caixa de uma loja pequena aguenta menos erro de compra. Com 30 ou 40 produtos, uma planilha simples basta. O ganho está em saber quais itens não podem faltar e em parar de comprar em volume o que quase não vende.",
    },
  ],
};
