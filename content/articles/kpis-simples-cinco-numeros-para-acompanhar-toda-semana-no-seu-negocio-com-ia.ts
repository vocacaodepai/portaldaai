import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "kpis-simples-cinco-numeros-para-acompanhar-toda-semana-no-seu-negocio-com-ia",
  title: "KPIs simples: 5 números para acompanhar toda semana com IA",
  seoTitle: "KPIs simples: 5 números para acompanhar toda semana",
  excerpt:
    "Descubra quais KPIs simples acompanhar toda semana no seu negócio: faturamento, margem, caixa, ticket médio e retorno de clientes, com rotina de 30 minutos e IA.",
  metaDescription:
    "KPIs simples para pequeno negócio: 5 indicadores para acompanhar toda semana, fórmulas com exemplo em reais, rotina de 30 minutos e prompts para a IA ler os números.",
  category: "negocios",
  articleSubcategory: "gestao-e-operacao",
  date: "2026-10-25",
  readTime: 6,
  imageQuery: "small business owner reviewing numbers",
  seed: 717,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Quem tem um negócio pequeno precisa de poucos indicadores, e cinco bastam para começar: faturamento, margem de lucro, saldo de caixa, ticket médio e retorno de clientes.",
    "Uma rotina de cerca de 30 minutos por semana, sempre no mesmo dia, vale mais do que um painel complexo que ninguém abre.",
    "A IA ajuda a organizar os dados e a explicar variações, mas as contas e as decisões continuam com o dono, que deve conferir os números antes de agir.",
  ],
  content: `
    <p>KPIs simples para pequeno negócio são poucos números, calculados do mesmo jeito toda semana, que mostram se a empresa está ganhando ou perdendo dinheiro. Cinco bastam para começar: faturamento, margem de lucro, saldo de caixa, ticket médio e retorno de clientes. A IA ajuda a organizar e explicar, mas a conta é sua.</p>

    <p>KPI é a sigla em inglês para indicador-chave de desempenho. O nome assusta, a ideia não: é olhar para o negócio com números em vez de sensação. Muita gente fatura bem e fica sem dinheiro no fim do mês, e quase sempre a causa é um número que ninguém olhou. Este guia mostra os cinco indicadores, as fórmulas, uma rotina enxuta e prompts para a IA.</p>

    <h2>Por que poucos indicadores funcionam melhor que muitos</h2>

    <p>O blog do Sebrae-RN sobre <a href="https://blog.rn.sebrae.com.br/indicadores-de-desempenho-para-mei/" target="_blank" rel="noopener noreferrer">indicadores de desempenho para MEI</a> recomenda começar com 3 a 5 KPIs, como faturamento mensal, fluxo de caixa, margem de lucro, novos clientes e retenção. O motivo é prático: cada indicador a mais é uma conta a mais, e quem se cansa para de acompanhar.</p>

    <p>Outra orientação da mesma fonte é comparar os números com o seu próprio histórico, e não com o de concorrentes. Sem dados de terceiros, o seu mês passado é a melhor régua. Isso também tira a pressão de achar uma "média do setor" que quase nunca é confiável.</p>

    <p>Antes de escolher, responda a uma pergunta: o que, se piorar, me deixa sem dinheiro em 60 dias? A resposta costuma estar entre caixa, margem e vendas. Para organizar o planejamento do ano, o guia de <a href="/artigos/planejamento-2027-do-pequeno-negocio-metas-orcamento-e-calendario-com-ia">planejamento 2027</a> mostra como transformar esses números em metas.</p>

    <h2>Os 5 números e como calcular cada um</h2>

    <table>
      <thead><tr><th>Indicador</th><th>Fórmula</th><th>Exemplo</th></tr></thead>
      <tbody>
        <tr><td>Faturamento</td><td>Soma do que entrou em vendas no período</td><td>R$ 18.000 no mês</td></tr>
        <tr><td>Margem de lucro</td><td>(Receita menos custos totais) / receita x 100</td><td>(18.000 menos 13.500) / 18.000 = 25%</td></tr>
        <tr><td>Saldo de caixa</td><td>Entradas menos saídas no período</td><td>R$ 2.100 na semana</td></tr>
        <tr><td>Ticket médio</td><td>Faturamento / número de vendas</td><td>18.000 / 90 vendas = R$ 200</td></tr>
        <tr><td>Retorno de clientes</td><td>Clientes que voltaram / clientes do período anterior</td><td>32 de 80 = 40%</td></tr>
      </tbody>
    </table>

    <p>As fórmulas de margem, ticket médio e retenção seguem as do texto do Sebrae-RN. O ticket médio, segundo o <a href="https://agilize.com.br/blog/marketing-e-vendas/como-calcular-ticket-medio" target="_blank" rel="noopener noreferrer">blog da Agilize</a>, deve ser lido com cuidado: a sazonalidade pode explicar um mês fraco, e um ticket alto não garante lucro, por isso convém olhá-lo junto com a margem.</p>

    <p>Os números do exemplo são de uma loja fictícia de acessórios, criada só para ilustrar a conta. Troque pelos seus.</p>

    <h2>O que cada número avisa</h2>

    <h3>Faturamento e ticket médio</h3>

    <p>Se o faturamento cai com o ticket estável, você vendeu menos vezes: o problema é de tráfego, atendimento ou oferta. Se o ticket cai com o mesmo número de vendas, os clientes estão comprando itens mais baratos ou recebendo mais desconto. O <a href="/artigos/markup-ou-margem-qual-usar-para-formar-preco-no-pequeno-negocio">guia de markup e margem</a> ajuda a revisar o preço.</p>

    <h3>Margem e caixa</h3>

    <p>Margem baixa com faturamento alto é o clássico de quem trabalha muito e sobra pouco. Já o caixa diz se dá para pagar as contas: um mês lucrativo pode ter caixa negativo se os clientes pagam em 30 dias e você paga o fornecedor à vista. Veja o <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa com IA</a> e o <a href="/artigos/ponto-de-equilibrio-com-ia-quanto-vender-para-nao-ter-prejuizo">ponto de equilíbrio</a> para aprofundar.</p>

    <h3>Retorno de clientes</h3>

    <p>Vender para quem já comprou costuma ser mais barato do que conquistar um cliente novo. Se o retorno cai, acione o <a href="/artigos/pos-venda-com-ia-mensagem-de-acompanhamento-e-pedido-de-avaliacao">pós-venda</a> e a <a href="/artigos/reativar-clientes-inativos-com-ia-lista-mensagem-e-oferta-sem-incomodar">reativação de clientes inativos</a>.</p>

    <h2>A rotina de 30 minutos toda semana</h2>

    <p>O Sebrae-RN sugere registrar os dados da semana anterior na segunda-feira e consolidar o mês no último dia. Uma agenda possível: caixa e faturamento toda semana, margem e ticket médio todo mês, retorno de clientes todo mês ou a cada trimestre, conforme o seu volume.</p>

    <ol>
      <li>Abra a planilha (um modelo simples com uma linha por semana).</li>
      <li>Preencha vendas, custos, entradas e saídas da semana.</li>
      <li>Calcule as cinco linhas de indicadores.</li>
      <li>Compare com a semana anterior e com a mesma semana do mês passado.</li>
      <li>Escreva uma decisão: o que vou fazer por causa desse número.</li>
    </ol>

    <p>O último passo é o que muda o negócio. Sem decisão, o indicador vira enfeite. Se a planilha ainda é um desafio, o guia de <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">planilhas do zero com IA</a> resolve as fórmulas básicas. Quem é MEI pode cruzar isso com o <a href="/artigos/limite-de-faturamento-do-mei-como-controlar-mes-a-mes">controle do limite de faturamento</a>.</p>

    <h2>Exemplo de leitura: quatro semanas de uma loja</h2>

    <p>Na loja fictícia de acessórios, as quatro semanas do exemplo do prompt abaixo dão estas margens: a semana 1 tem faturamento de R$ 4.200 e custos de R$ 3.100, ou seja, margem de cerca de 26%. A semana 2 fecha em 23%, a semana 3 em 23% e a semana 4 em 24%. O faturamento subiu, mas a margem ficou praticamente parada, o que indica que o custo cresceu junto com as vendas.</p>

    <p>O ticket médio conta outra parte da história: foi de R$ 200 na semana 1, R$ 218 na semana 2, R$ 229 na semana 3 e R$ 196 na semana 4. A semana 3 teve menos vendas, mas cada uma valeu mais, e a semana 4 teve o contrário. A decisão possível seria revisar o preço dos itens mais vendidos antes de investir em anúncio, porque vender mais sem margem maior não melhora o caixa.</p>

    <p>Esse tipo de leitura leva dez minutos e muda a conversa: em vez de "a semana foi boa", você diz "vendi mais, mas lucrei a mesma proporção, vou olhar custo e preço". É esse o ganho de acompanhar poucos números com regularidade.</p>

    <h2>Como usar a IA para ler os números</h2>

    <p>A IA entra depois da conta, para explicar e sugerir hipóteses. Nunca cole dados de clientes (nome, CPF, telefone): use só os totais. O <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD</a> detalha esse cuidado.</p>

    <pre><code>Segue o resumo das últimas 4 semanas do meu negócio (loja de acessórios). Semana 1: faturamento R$ 4.200, custos R$ 3.100, 21 vendas. Semana 2: R$ 4.800, R$ 3.700, 22 vendas. Semana 3: R$ 3.900, R$ 3.000, 17 vendas. Semana 4: R$ 5.100, R$ 3.900, 26 vendas. Calcule margem e ticket médio de cada semana, aponte o que mudou e liste 3 hipóteses para investigar. Não invente dados.</code></pre>

    <pre><code>Com base nesses números, sugira uma única ação para a próxima semana e como vou saber se funcionou, em até 5 linhas.</code></pre>

    <p>Confira as contas da IA com uma calculadora: modelos de linguagem erram aritmética, e o guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> mostra como checar. Se quiser um painel visual, a <a href="/artigos/dashboard-para-pequeno-negocio-com-ia-servico-pacotes-e-entrega">estrutura de dashboard para pequeno negócio</a> serve de modelo.</p>

    <h2>Erros comuns ao acompanhar indicadores</h2>

    <ul class="checklist">
      <li>Misturar dinheiro do dono com dinheiro da empresa: o <a href="/artigos/retirada-fixa-do-dono-pro-labore-e-conta-separada-no-pequeno-negocio">pro-labore e a conta separada</a> evitam isso.</li>
      <li>Calcular margem sem incluir impostos, taxas de cartão e frete.</li>
      <li>Olhar um mês isolado, sem considerar sazonalidade.</li>
      <li>Acompanhar dez indicadores e agir em nenhum.</li>
      <li>Não registrar a decisão tomada depois de ler o número.</li>
      <li>Deixar o controle de estoque de fora: veja <a href="/artigos/como-usar-ia-para-gerenciar-estoque-pequeno-comercio">IA para gerenciar estoque</a>.</li>
    </ul>

    <p>Comece esta semana: monte a planilha com as cinco linhas, preencha as últimas quatro semanas e marque 30 minutos fixos na agenda. Se você tem equipe, divida a coleta de dados e use o guia de <a href="/artigos/gestao-de-equipe-com-ia-escala-e-tarefas-pequeno-negocio">gestão de equipe com IA</a> para distribuir responsabilidades.</p>
  `,
  faq: [
    {
      question: "Quais KPIs um pequeno negócio deve acompanhar?",
      answer:
        "Para começar, cinco bastam: faturamento, margem de lucro, saldo de caixa, ticket médio e retorno de clientes. O Sebrae-RN orienta começar com 3 a 5 indicadores ligados aos seus objetivos. Depois de dominar esses, você pode incluir taxa de conversão e custo para conquistar cliente novo.",
    },
    {
      question: "O que é KPI?",
      answer:
        "KPI vem do inglês key performance indicator e significa indicador-chave de desempenho. É um número escolhido para mostrar se o negócio caminha na direção certa, como a margem de lucro ou o ticket médio. Um bom KPI é simples de calcular, fácil de comparar e leva a uma decisão.",
    },
    {
      question: "Como calcular o ticket médio?",
      answer:
        "Divida o faturamento do período pelo número de vendas realizadas. Se a loja faturou R$ 18.000 em 90 vendas, o ticket médio é R$ 200. A Agilize lembra que o valor depende do setor e da época do ano, e que deve ser lido junto com a margem de lucro.",
    },
    {
      question: "Com que frequência devo olhar os indicadores?",
      answer:
        "O Sebrae-RN sugere olhar o caixa toda semana, faturamento e lucro todo mês, e clientes e retenção todo mês ou trimestre. Uma rotina de cerca de 30 minutos por semana, sempre no mesmo dia, costuma ser suficiente para um negócio pequeno.",
    },
    {
      question: "A IA pode calcular os indicadores para mim?",
      answer:
        "Pode ajudar a organizar e explicar, mas modelos de linguagem erram contas, então confira com planilha ou calculadora. Use apenas totais, sem dados pessoais de clientes, e trate as hipóteses sugeridas como pontos para investigar, não como diagnóstico definitivo.",
    },
  ],
};
