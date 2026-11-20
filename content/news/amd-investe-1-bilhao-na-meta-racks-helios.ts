import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "amd-investe-1-bilhao-na-meta-racks-helios",
  title: "AMD vai investir US$ 1 bi na Meta e já roda racks Helios por lá",
  summary:
    "A AMD diz que porá US$ 1 bilhão na oferta de ações da Meta e que seus primeiros racks Helios já funcionam nos data centers dela. A Nvidia pôs US$ 3 bilhões.",
  author: "Bruno Danello",
  sourceName: "The Next Web, CNBC, AMD",
  sourceUrl: "https://thenextweb.com/news/amd-1bn-meta-equity-helios-running",
  date: "2026-10-28",
  publishedAt: "2026-10-28T22:40:00-03:00",
  topic: "negocios",
  imageQuery: "Lisa Su AMD CEO portrait",
  content: `
    <p>A AMD anunciou na terça-feira, 27 de outubro de 2026, que vai investir US$ 1 bilhão na oferta de ações da Meta, a captação que a dona do Facebook e do Instagram montou para bancar seus gastos com inteligência artificial. No mesmo comunicado, a fabricante de chips disse que os primeiros sistemas Helios, seus racks de computação para IA em escala de data center, já estão instalados e funcionando dentro da Meta. A informação foi resumida pelo The Next Web, que cita a AMD e a CNBC.</p>

    <p>Este texto é análise nossa a partir dessa reportagem. Os números de cada etapa da captação da Meta variam conforme o veículo, e deixamos isso claro abaixo.</p>

    <h2>O que a AMD anunciou</h2>
    <p>O núcleo do anúncio tem duas partes. A primeira é financeira: US$ 1 bilhão em ações da Meta. A segunda é técnica: os racks Helios, que reúnem 72 GPUs cada, já estão rodando na infraestrutura da Meta. Segundo a AMD, a Meta está testando os sistemas e espera uma implantação mais ampla em breve. Lisa Su, presidente do conselho e CEO da AMD, declarou que, com o Helios em operação na Meta, a parceria passa a uma nova escala na era da superinteligência. Mark Zuckerberg, fundador e CEO da Meta, afirmou que a AMD é parceira-chave na construção da capacidade de computação que roda os modelos de fronteira da empresa.</p>

    <p>A parceria vai além dos racks. De acordo com o comunicado, os processadores EPYC da AMD dão suporte à computação por trás do Muse, o agente pessoal de IA da Meta. A Meta já usa milhões de chips EPYC, ao longo de várias gerações, e é cliente de lançamento da sexta geração. As duas empresas também trabalham em um chip futuro, chamado Verano. Nas GPUs, a Meta já usa as placas Instinct em produção, tanto para treinar modelos quanto para ranquear e recomendar conteúdo. Foi cliente de design inicial do MI450 e vai implantar uma GPU Instinct sob medida para suas cargas de trabalho, o que também deve influenciar a série MI500 da AMD. A AMD diz ainda que seus chips deram suporte aos modelos Muse Spark Open no lançamento e ao Muse Glimmer em PCs com Ryzen AI e placas Radeon.</p>

    <h2>A captação da Meta por trás do cheque</h2>
    <p>O investimento da AMD entra numa operação que a Meta iniciou na segunda-feira, 26 de outubro. Conforme o resumo do The Next Web, a empresa lançou uma venda de ações de US$ 35 bilhões para financiar a corrida de IA, dentro de um plano maior de até US$ 95 bilhões (a Bloomberg fala em cerca de US$ 98 bilhões). A parcela de ações ordinárias teria sido elevada para US$ 25 bilhões, com procura de cerca de cinco vezes a oferta. As ações foram precificadas a US$ 625, um desconto de 2,7% sobre o fechamento de sexta-feira. Investidores de longo prazo e já presentes na base ficaram com mais da metade dos papéis, e os 15 maiores compradores levaram cerca de 70%.</p>

    <p>O plano inclui ainda uma venda de US$ 12,5 bilhões em ações preferenciais conversíveis obrigatórias e um programa de venda gradual de ações ao longo do tempo. As diferenças entre US$ 35 bilhões e US$ 25 bilhões, ou entre US$ 95 bilhões e US$ 98 bilhões, refletem apurações diferentes de cada veículo, e por isso é prudente tratar os valores como aproximados até a Meta detalhar tudo em documentos oficiais. Já havíamos acompanhado a primeira parte dessa história em <a href="/noticias/meta-oferta-95-bilhoes-acoes-nvidia-3-bilhoes-muse">Meta vai vender até US$ 95 bi em ações, com US$ 3 bi da Nvidia</a>.</p>

    <h2>Nvidia e AMD no mesmo cheque</h2>
    <p>O dado mais curioso é que a Meta está comprando chips das duas rivais ao mesmo tempo em que recebe dinheiro delas. A Nvidia prometeu separadamente US$ 3 bilhões, e o acordo dela cobre mais sistemas Vera Rubin e processadores Vera, segundo o comunicado da própria Nvidia. Somando, as duas fabricantes colocam cerca de US$ 4 bilhões na captação de IA da Meta, conforme a CNBC. Na segunda-feira, a Meta disse que Nvidia, AMD e Broadcom tinham interesse em comprar até US$ 5 bilhões das ações. A Broadcom ainda não anunciou nenhum investimento.</p>

    <p>Esse tipo de arranjo, em que o fornecedor de chips investe no cliente que depois compra seus chips, virou comum em 2026. Segundo dados da Dealroom citados pela CNBC, a AMD participou de 25 rodadas de financiamento neste ano, contra duas em 2022, e a Nvidia entrou em 121. Em julho, a AMD já tinha dito que investiria até US$ 5 bilhões na Anthropic, que pretende rodar o Claude em sistemas Helios. A reação do mercado na terça-feira foi contida: as ações da AMD subiram 3%, as da Nvidia ficaram estáveis e as da Meta caíram 1%.</p>

    <h2>O que muda na disputa de chips</h2>
    <p>Por anos, treinar e rodar modelos grandes significou, na prática, comprar Nvidia. A entrada do Helios em produção na Meta é um sinal de que a AMD está saindo do papel de alternativa teórica. Quando uma das maiores compradoras de computação do mundo coloca racks da AMD para funcionar, ainda em teste, outros clientes de nuvem e de laboratórios de IA ganham um argumento para diversificar. Isso acompanha o que vimos nas semanas recentes, com a OpenAI avaliando TPUs do Google e a Oracle levando chips de vários fornecedores à sua nuvem, como contamos em <a href="/noticias/openai-planeja-comprar-tpus-google-alem-nvidia">OpenAI planeja comprar os chips TPU do Google além dos da Nvidia</a>.</p>

    <p>Também é preciso cautela. A própria AMD diz que a Meta está testando os racks e que a implantação maior virá depois, sem datas nem quantidades. Não há valor de contrato de chips divulgado, nem comparação de desempenho e custo contra a Nvidia. A empresa já tinha batido recordes de valor de mercado por causa da IA, como mostramos em <a href="/noticias/amd-atinge-1-trilhao-valor-mercado-ia">AMD chega a US$ 1 trilhão em valor de mercado</a>, mas convencer o mercado de que o software e a escala do Helios competem de verdade com a Nvidia é outra etapa. O comunicado é da própria AMD, portanto traz a versão mais favorável da parceria.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Para guardar</span>
      <p>Quando você vê "AMD investe na Meta", leia dois movimentos: dinheiro entrando na captação e pedido de chips saindo. É dinheiro circulando entre fornecedor e cliente, o que ajuda a financiar a corrida de IA, mas também concentra o risco em poucas empresas.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que você nunca compre um chip, o preço e a velocidade dos modelos que usa no trabalho dependem dessa disputa. Mais de um fornecedor de computação costuma significar mais capacidade disponível e mais pressão sobre o preço das APIs e dos planos pagos, embora o efeito leve meses para chegar ao usuário final. Alguns pontos práticos:</p>
    <ul>
      <li>Se você constrói produtos sobre modelos abertos, como a família Muse Spark Open, vale saber que a AMD foi citada como parceira no lançamento. Rodar o mesmo modelo em hardware diferente tende a baratear a hospedagem, como discutimos em <a href="/noticias/meta-muse-spark-open-modelo-aberto-816-bilhoes-mac">Muse Spark Open, o modelo aberto da Meta</a>.</li>
      <li>Se você roda IA no próprio computador, a menção ao Muse Glimmer em PCs com Ryzen AI mostra que os fabricantes querem levar agentes para máquinas comuns. Acompanhe também o que contamos em <a href="/noticias/amd-pc-ia-agentica-reduz-custo-token">PC com IA agêntica reduz o custo por token</a>.</li>
      <li>Se você acompanha o mercado financeiro, desconfie de manchetes que somam cifras bilionárias sem separar investimento, compra de chips e captação de ações. Os valores aqui mudam de veículo para veículo.</li>
    </ul>

    <p>Por fim, uma observação de método: a notícia vem de uma única reportagem do The Next Web, que se baseia no comunicado da AMD e em números da CNBC. Atualizaremos o texto quando a Meta ou a AMD detalharem prazos, quantidade de racks e termos da participação acionária. Enquanto isso, trate os valores da captação como estimativas da imprensa, e não como números fechados.</p>
  `,
};
