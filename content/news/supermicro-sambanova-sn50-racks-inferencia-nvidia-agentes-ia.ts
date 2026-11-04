import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "supermicro-sambanova-sn50-racks-inferencia-nvidia-agentes-ia",
  title: "Supermicro vai vender racks que juntam chips SambaNova e GPUs Nvidia",
  summary:
    "Supermicro e SambaNova vão vender racks que unem GPUs da Nvidia e chips SN50 para rodar agentes de IA. O plano começa com 10 mil chips e mira nuvens de IA.",
  author: "Bruno Danello",
  sourceName: "The Next Web, SambaNova",
  sourceUrl:
    "https://thenextweb.com/news/supermicro-sambanova-sn50-nvidia-inference-racks",
  date: "2026-11-04",
  publishedAt: "2026-11-04T09:23:00-03:00",
  imageQuery: "servidores rack data center inteligência artificial",
  topic: "lancamentos",
  content: `
    <p>A Supermicro, uma das maiores montadoras de servidores para data centers do mundo, vai passar a vender sistemas de inteligência artificial que combinam dois tipos de chip no mesmo rack: as GPUs da Nvidia e o SN50, chip de inferência da SambaNova. O acordo foi anunciado pelas duas empresas na terça-feira (3) e começa com um plano inicial de 10 mil chips SN50, segundo o comunicado da SambaNova. A informação foi publicada nesta quarta-feira (4) pelo <a href="https://thenextweb.com/news/supermicro-sambanova-sn50-nvidia-inference-racks" rel="noopener noreferrer nofollow">The Next Web</a>.</p>

    <p>Os novos racks vão entrar no catálogo de soluções prontas que a Supermicro já vende a clientes, chamado Data Center Building Block Solutions. Na prática, quem compra recebe o sistema montado, testado e entregue pela Supermicro, com suporte inclusive no local. A SambaNova fica com a parte do software: seus engenheiros colocam os modelos de IA para rodar no SN50, fazem o ajuste fino de desempenho e ajudam na implantação.</p>

    <h2>Como os dois chips dividem o trabalho</h2>
    <p>Para entender a proposta, vale lembrar que rodar um modelo de linguagem tem duas etapas. Primeiro o sistema lê todo o pedido do usuário, o prompt, de uma vez. Depois ele escreve a resposta aos poucos, um pedaço de texto de cada vez. As duas etapas pedem coisas diferentes do hardware: a leitura exige muita força de cálculo em paralelo, enquanto a escrita depende de mover dados da memória o mais rápido possível, repetidamente.</p>

    <p>Nos racks anunciados, as GPUs da Nvidia cuidam da leitura e os chips SN50 cuidam da escrita, segundo a SambaNova. A empresa argumenta que agentes de IA trabalham sem parar, encadeando dezenas de chamadas ao modelo para concluir uma tarefa, e que por isso a velocidade com que cada resposta sai passa a definir a velocidade do agente inteiro. Um agente que espera alguns segundos a cada passo, multiplicado por centenas de passos, fica lento e caro.</p>

    <p>"A IA agêntica é a próxima onda da inferência, e ela precisa rodar em todo lugar", disse Rodrigo Liang, cofundador e presidente-executivo da SambaNova, de acordo com o comunicado. Charles Liang, presidente-executivo da Supermicro, afirmou que a empresa está comprometida em entregar infraestrutura de IA flexível e de alto desempenho para as necessidades em mudança dos clientes.</p>

    <h2>O que é o SN50</h2>
    <p>O SN50 é a quinta geração da RDU (Reconfigurable Dataflow Unit), arquitetura própria da SambaNova pensada para inferência, e não para treinar modelos. Segundo a empresa, o chip consegue servir os maiores modelos do mercado sem exigir densidade extrema de energia em cada rack. Um SambaRack SN50 consome em média 20 kW, número que a SambaNova divulgou na semana passada. Para comparação, racks de GPUs de última geração costumam passar com folga desse patamar e exigir refrigeração líquida e reforço na rede elétrica.</p>

    <p>Esse é o argumento central da parceria. Muitos operadores de data center hoje não conseguem crescer porque falta energia e capacidade de refrigeração, e novos prédios levam anos para ficar prontos. A SambaNova diz que, com um rack que consome menos, é possível adicionar capacidade de inferência em prédios que já existem, sem esperar obras novas, e ainda prolongar a vida útil das GPUs que o cliente já tem. As duas empresas afirmam que, assim, conseguem entregar bem mais capacidade de inferência em 2027.</p>

    <h2>Quem vai comprar primeiro</h2>
    <p>O foco inicial são as chamadas neoclouds, provedores de nuvem criados especificamente para IA, e as nuvens soberanas, que mantêm dados e processamento dentro de um único país. Só numa segunda fase as empresas pretendem vender para companhias que rodam IA nos próprios data centers.</p>

    <p>O acordo com a Supermicro vem logo depois de outro anúncio importante para a SambaNova. Na conferência AI World, em 27 de outubro, a Oracle disse que vai instalar chips SN50 em seus data centers de nuvem e oferecer essa capacidade a quem desenvolve modelos de IA. A mesma Oracle já tinha anunciado que vai <a href="/noticias/oracle-cerebras-nuvem-2027-inferencia-ia">oferecer na nuvem os computadores de inferência da Cerebras em 2027</a>, o que mostra uma estratégia clara de não depender só da Nvidia. Dois dias depois, a SambaNova fechou contrato com a Emergys, empresa de serviços de transformação digital, para implantar e operar sua plataforma em clientes corporativos.</p>

    <p>Fundada em 2017 e sediada em San Jose, na Califórnia, a SambaNova captou recursos em julho com uma avaliação de US$ 11 bilhões. Em junho, a Foxconn e a Intel se juntaram a ela para construir infraestrutura de IA em escala de rack.</p>

    <h2>O contexto: a corrida pela inferência</h2>
    <p>A notícia se encaixa num movimento que vem ganhando força nos últimos meses. Treinar modelos ainda é um negócio dominado pela Nvidia, mas a etapa de rodar esses modelos no dia a dia, a inferência, virou o campo de batalha dos fabricantes alternativos. Startups como a <a href="/noticias/furiosaai-capta-620-milhoes-avaliacao-2-9-bilhoes-chip-inferencia">FuriosaAI</a> e a <a href="/noticias/tenstorrent-capta-1-5-bilhao-chips-inferencia-modelos-abertos">Tenstorrent</a> levantaram rodadas bilionárias com essa tese, e provedores de inferência como a <a href="/noticias/fal-dobra-avaliacao-16-bilhoes-rodada-1-3-bilhao-inferencia-video-imagem">Fal</a> estão dobrando de valor em poucos meses.</p>

    <p>O detalhe interessante do acordo com a Supermicro é que ele não tenta substituir a Nvidia, e sim dividir o trabalho com ela. Para quem compra, isso reduz o risco: as GPUs continuam no rack, com todo o software que o mercado já conhece, e o chip alternativo entra só na parte em que promete ser mais eficiente. Para a SambaNova, ganhar a rede de vendas e suporte de uma montadora do porte da Supermicro resolve um dos maiores problemas de quem fabrica chip novo: chegar ao cliente.</p>

    <h2>Por que isso importa para você</h2>
    <p>Pouca gente no Brasil vai comprar um rack de servidores, mas quase todo mundo que usa IA para trabalhar paga, direta ou indiretamente, pelo custo da inferência. É ele que define o preço por milhão de tokens das APIs, os limites dos planos de assinatura e a velocidade com que um agente conclui uma tarefa.</p>
    <ul>
      <li><strong>Agentes mais rápidos.</strong> Se a aposta de dividir leitura e escrita entre chips diferentes funcionar, agentes que encadeiam muitas chamadas ao modelo tendem a ficar mais ágeis. Se você ainda está entendendo o que muda com eles, comece pelo nosso guia sobre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">a diferença entre agente de IA, chatbot e automação</a>.</li>
      <li><strong>Pressão sobre preços.</strong> Mais concorrência na inferência e mais capacidade em 2027 costumam empurrar o custo por resposta para baixo, o que favorece quem usa API em volume.</li>
      <li><strong>Escolha do modelo certo.</strong> Enquanto isso não chega, a forma mais garantida de economizar continua sendo usar o modelo do tamanho certo para cada tarefa, como explicamos em <a href="/artigos/modelo-pequeno-ou-grande-de-ia-velocidade-custo-e-qualidade-para-quem-usa">modelo pequeno ou grande de IA: velocidade, custo e qualidade</a>.</li>
    </ul>

    <h2>O que ainda não se sabe</h2>
    <p>As empresas não divulgaram preços dos racks, nomes de clientes nem datas de entrega das primeiras unidades. Também não há números independentes que comparem o desempenho do SN50 com GPUs da própria Nvidia na etapa de escrita da resposta: os dados de consumo e velocidade vêm da SambaNova. O plano de 10 mil chips é inicial, e o tamanho real do negócio vai depender de quantas neoclouds e nuvens soberanas toparem montar data centers com dois fornecedores de chip ao mesmo tempo.</p>
  `,
};
