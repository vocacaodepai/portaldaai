import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "nvidia-balanco-terceiro-trimestre-receita-115-bilhoes-kress",
  title: "Nvidia fatura US$ 115,8 bilhões no primeiro balanço sem Jensen Huang",
  summary:
    "Receita da Nvidia dobra em um ano, data center chega a US$ 107,6 bilhões e a projeção sobe para US$ 130 bilhões, sem contar vendas de chips de IA à China.",
  author: "Bruno Danello",
  sourceName: "Nvidia",
  sourceUrl: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-third-quarter-fiscal-2027",
  date: "2026-11-17",
  publishedAt: "2026-11-17T18:38:00-03:00",
  topic: "negocios",
  imageQuery: "Nvidia headquarters Santa Clara",
  content: `
    <p>A Nvidia divulgou no fim da tarde desta terça-feira, 17 de novembro, o resultado do terceiro trimestre do ano fiscal 2027, encerrado em 25 de outubro. É o primeiro balanço desde que Jensen Huang deixou o comando da empresa, e os números mostram que, pelo menos no caixa, a crise de liderança ainda não chegou: a receita somou US$ 115,8 bilhões, mais que o dobro do mesmo período do ano passado.</p>
    <p>O comunicado chega no mesmo dia em que o conselho anunciou um comitê de segurança nacional e controle de exportação, resposta à pressão do governo americano que contamos quando <a href="/noticias/bessent-pede-ceo-de-fora-nvidia-vendas-chips-china">Scott Bessent pediu um CEO de fora e pôs as vendas de chips à China na mira</a>. A teleconferência com analistas começa às 19h de Brasília.</p>

    <h2>O que se sabe</h2>
    <p>Segundo o comunicado oficial da Nvidia, a receita de US$ 115,8 bilhões cresceu 20% sobre o trimestre anterior e 103% sobre um ano antes. Em agosto, a própria empresa tinha projetado US$ 108 bilhões, com margem de 2% para mais ou para menos, então o resultado ficou acima do teto da sua previsão.</p>
    <p>O motor continua sendo o data center, segmento que reúne os chips usados para treinar e rodar modelos de IA. Ele faturou US$ 107,6 bilhões, alta de 21% no trimestre e de 110% em um ano. A área de computação de borda (Edge Computing) somou US$ 8,2 bilhões.</p>
    <p>A rentabilidade segue alta. A margem bruta ficou em 74,8% pelo critério contábil oficial (GAAP) e em 74,9% no critério ajustado, praticamente estável em relação ao trimestre anterior. O lucro líquido GAAP foi de US$ 65,3 bilhões, alta de 105% em um ano, e o lucro por ação diluída ficou em US$ 2,70 (US$ 2,68 no ajustado). No trimestre, a empresa devolveu US$ 28,1 bilhões aos acionistas em recompra de ações e dividendos, e ainda tinha cerca de US$ 227,3 bilhões disponíveis no programa de recompra ampliado em setembro, que noticiamos quando a <a href="/noticias/nvidia-recompra-150-bilhoes-acoes-recorde">Nvidia aprovou mais US$ 150 bilhões em recompras</a>.</p>
    <p>Para ter uma ideia do ritmo: no trimestre anterior, divulgado em agosto, a receita tinha sido de US$ 96,2 bilhões e a de data center, de US$ 89 bilhões. Em três meses, só o data center acrescentou perto de US$ 19 bilhões em vendas. O lucro operacional GAAP chegou a US$ 77,5 bilhões, alta de 115% em um ano, enquanto as despesas operacionais subiram 57%, para US$ 9,2 bilhões. Ou seja, a receita cresce bem mais rápido que o custo de manter a empresa funcionando.</p>
    <p>Para o quarto trimestre fiscal, a Nvidia projeta receita de US$ 130 bilhões, com variação de 3% para mais ou para menos, num período que terá uma semana a mais que o normal. A margem bruta deve cair para a faixa de 71% a 72%. A empresa repete que a projeção não considera nenhuma receita de chips de computação para data center vendidos à China.</p>
    <p>Colette Kress, diretora financeira que assumiu como CEO interina, disse no comunicado que o impulso da empresa "é real" e que a plataforma Vera Rubin, nova geração de chips para data center, começou de forma "explosiva".</p>

    <h2>O que ainda não está confirmado</h2>
    <p>O comunicado não traz nenhuma explicação sobre as vendas por intermediários em Singapura, no centro da investigação ligada à Megaspeed, nem prazo para a escolha do novo CEO. O texto apenas cita, entre os riscos, a busca por um novo presidente executivo e a investigação conduzida por um comitê independente do conselho. Essas respostas, se vierem, devem aparecer na teleconferência.</p>
    <p>Também não está claro quanto da queda prevista na margem vem da semana extra, da transição para a Vera Rubin ou de outros custos: o comunicado só dá a faixa. E, até a publicação desta notícia, o Portal da AI não encontrou reportagem confiável com o movimento das ações no pregão estendido após o balanço. Vamos atualizar esta página com a reação do mercado e com o que for dito na teleconferência.</p>

    <h2>Por que isso importa para você</h2>
    <p>Na leitura do Portal da AI, o número mais importante não é o lucro, e sim a projeção de US$ 130 bilhões. Ela indica que big techs e laboratórios de IA seguem comprando chips no mesmo ritmo, mesmo com a Nvidia sem o fundador no comando e sob pressão de Washington. Para quem usa ChatGPT, Gemini, Claude ou APIs de IA no trabalho, isso é sinal de que a capacidade de computação continua crescendo, o que tende a manter a competição de preços entre os modelos. Por outro lado, margem bruta perto de 75% mostra que a Nvidia ainda dita o preço do hardware, e esse custo acaba embutido nas assinaturas e nas tarifas de API cobradas em dólar.</p>
    <p>Para o Brasil, o pano de fundo é a nova regra americana que passa a <a href="/noticias/eua-exigem-licenca-chips-ia-brasil-data-centers">exigir licença para enviar chips de IA a data centers no país</a> a partir de 19 de novembro. Uma Nvidia com demanda forte e um governo americano mais rígido com exportações significam que projetos de data center no Brasil, inclusive os que contam com o incentivo do <a href="/noticias/lula-sanciona-redata-incentivo-fiscal-data-centers-ia">Redata, sancionado por Lula</a>, podem esperar mais por servidores e pagar mais caro por eles.</p>
    <p>Para quem investe, a Nvidia tem peso grande nos fundos e ETFs de tecnologia vendidos aqui, e a ação deve reagir tanto aos números quanto ao que Kress disser sobre governança. A crise começou quando <a href="/noticias/jensen-huang-renuncia-nvidia-colette-kress-ceo-interina">Huang renunciou e Kress assumiu de forma interina</a>, e o balanço mostra que o negócio segue forte. O risco, agora, está menos na demanda e mais nas decisões do conselho e do governo americano. Nosso guia sobre <a href="/artigos/como-usar-ia-para-investir-na-bolsa-sem-complicar">como usar IA para investir na bolsa sem complicar</a> ajuda a organizar a análise, mas não substitui a diversificação.</p>
  `,
  faq: [
    {
      question: "Quanto a Nvidia faturou no terceiro trimestre fiscal de 2027?",
      answer:
        "Segundo o comunicado oficial, a receita foi de US$ 115,8 bilhões, alta de 103% em um ano. O segmento de data center respondeu por US$ 107,6 bilhões.",
    },
    {
      question: "Qual é a previsão da Nvidia para o próximo trimestre?",
      answer:
        "A empresa projeta receita de US$ 130 bilhões, com variação de 3% para mais ou para menos, e margem bruta entre 71% e 72%. A projeção não inclui vendas de chips de data center à China.",
    },
  ],
};
