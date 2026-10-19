import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "microsoft-deixa-data-center-nscale-reino-unido-antes-ipo",
  title: "Microsoft desiste de data center da Nscale no Reino Unido antes do IPO",
  summary:
    "Segundo o Telegraph, a Microsoft saiu do acordo para ancorar o primeiro data center da Nscale no Reino Unido, em Loughton, semanas antes do IPO.",
  author: "Bruno Danello",
  sourceName: "The Next Web",
  sourceUrl: "https://thenextweb.com/news/microsoft-pulls-out-nscale-loughton-data-centre-ipo",
  date: "2026-10-18",
  publishedAt: "2026-10-18T22:25:00-03:00",
  topic: "negocios",
  imageQuery: "Microsoft headquarters Redmond",
  content: `
    <p>A Microsoft teria desistido de um acordo para ser o cliente âncora do primeiro data center da Nscale no Reino Unido, em Loughton, no condado de Essex, a poucas semanas do IPO da empresa. A informação foi publicada pelo jornal britânico The Telegraph e repercutida pela Bloomberg, e chegou a este texto por meio de uma <a href="https://thenextweb.com/news/microsoft-pulls-out-nscale-loughton-data-centre-ipo" rel="noopener noreferrer nofollow" target="_blank">reportagem do The Next Web</a> publicada neste domingo (18). Nem a Microsoft nem a imprensa que acompanha o caso apontaram o motivo da saída.</p>

    <h2>O que foi reportado sobre a saída da Microsoft</h2>
    <p>De acordo com o Telegraph, a Microsoft deixou o projeto de Loughton, que já acumulava atrasos. A Bloomberg publicou o mesmo fato citando o jornal e disse que a Microsoft não respondeu de imediato ao pedido de comentário. O Telegraph também não conseguiu uma posição da big tech sobre o assunto, e o motivo da retirada segue sem explicação oficial.</p>
    <p>A Nscale, por sua vez, afirma que continua comprometida com o local. Um porta-voz da empresa disse ao Telegraph que a relação com a Microsoft permanece forte e de longo prazo. A companhia diz estar avaliando outras fontes de energia e outros locais no Reino Unido, o que sugere que o plano original precisará ser reescrito.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">O que é uma neocloud</span>
      <p>Neocloud é o nome dado a empresas de nuvem especializadas em computação para IA, como a Nscale e a CoreWeave. Em vez de vender de tudo como a Amazon, o Google ou a Microsoft, elas alugam capacidade de GPUs para laboratórios e empresas, muitas vezes com dinheiro emprestado para construir os data centers antes de ter os clientes.</p>
    </div>

    <h2>Energia é o gargalo do projeto de Loughton</h2>
    <p>O problema do local já era conhecido. O próprio The Next Web havia noticiado em julho que a rede elétrica não conseguiria conectar o site a tempo da abertura planejada. Segundo a reportagem atual, as autoridades avisaram a Nscale para não esperar fornecimento de energia antes da década de 2030. Para um data center de IA, que depende de grandes volumes de eletricidade estável, isso na prática inviabiliza o cronograma original.</p>
    <p>O caso de Loughton se soma a outras notícias recentes em que a falta de energia e de infraestrutura trava a expansão da IA. Já mostramos aqui como a <a href="/noticias/oracle-force-majeure-data-center-stargate-novo-mexico">Oracle invocou força maior em um data center do Stargate no Novo México</a> e como a <a href="/noticias/microsoft-triplica-capacidade-data-centers-ia">própria Microsoft planejava triplicar a capacidade de data centers de IA</a>. Construir é caro, demorado e depende de decisões que escapam ao controle das empresas, como a velocidade com que a rede elétrica local é ampliada.</p>

    <h2>IPO de até US$ 3 bilhões e dependência de dois clientes</h2>
    <p>A saída chega num momento delicado. A Nscale busca levantar até US$ 3 bilhões em sua oferta de ações, possivelmente ainda neste mês. Segundo o documento do IPO, Microsoft e Anthropic respondem por cerca de 85% dos contratos da empresa. Essa concentração é um fator de risco comum em neoclouds, porque a perda ou a redução de um único cliente grande pesa muito na receita futura.</p>
    <p>A Anthropic, em agosto, firmou um compromisso de gastar US$ 45 bilhões em computação da Nscale ao longo de seis anos. A Microsoft, por sua vez, assinou uma carta de intenções para um campus na Virgínia Ocidental, nos Estados Unidos, o que indica que a relação comercial entre as duas não acabou, e que a retirada se limita ao projeto britânico. A reportagem também cita que o principal site da Nscale na Noruega está cerca de seis meses atrasado, com 6,4 MW em operação de um total planejado de 30 MW.</p>
    <p>Esses números ajudam a entender o que os investidores vão avaliar. Já havíamos mostrado a <a href="/noticias/nscale-abre-capital-eua-avaliacao-35-bilhoes">abertura de capital da Nscale nos EUA com avaliação de US$ 35 bilhões</a> e a rodada de <a href="/noticias/nscale-capta-3-36-bilhoes-financiamento-pre-ipo">US$ 3,36 bilhões em financiamento conversível antes do IPO</a>, em que a Nvidia entrou como investidora. Agora o mercado passa a precisar pesar, ao mesmo tempo, o crescimento acelerado da receita e os atrasos de obra.</p>

    <h2>O humor do mercado com as neoclouds</h2>
    <p>O contexto setorial não ajuda. Segundo a reportagem, os investidores estão cautelosos com empresas desse tipo, muitas das quais se endividam pesadamente para ampliar a capacidade. As ações da CoreWeave caíram 25% na semana passada, o pior desempenho semanal desde novembro. Na Austrália, a Firmus cancelou seu IPO por não conseguir apoio suficiente de investidores.</p>
    <p>A CoreWeave é a referência do segmento, e vale lembrar o tamanho do que essas empresas prometem entregar: nossa cobertura do <a href="/noticias/coreweave-backlog-104-bilhoes">backlog de US$ 104 bilhões da CoreWeave</a> mostra que boa parte do negócio depende de contratos longos com poucos compradores. Quando a confiança no setor cai, empresas ainda não listadas, como a Nscale, sentem primeiro, porque precisam convencer o mercado de que a demanda vai se converter em receita.</p>

    <h2>O que isso muda para quem usa IA no Brasil</h2>
    <p>Para quem trabalha ou empreende com IA no Brasil, a história pode parecer distante, mas ela toca em algo prático: o custo e a disponibilidade da capacidade de computação que está por trás das ferramentas usadas no dia a dia. Modelos como o Claude e o Copilot rodam em data centers, e a Anthropic é justamente uma das duas grandes clientes da Nscale. Atrasos de obra e cortes de investimento podem, no médio prazo, pressionar preços de API, limites de uso e prazos de lançamento de novos recursos.</p>
    <p>Isso não significa que algo vá mudar amanhã. O que a notícia mostra é que a infraestrutura é o ponto frágil da corrida de IA. Já vimos empresas ajustando custos, como na reportagem sobre <a href="/noticias/microsoft-meta-reduzem-uso-claude-anthropic-custos">Microsoft e Meta reduzindo o uso do Claude por causa dos custos</a>. Para o profissional ou o pequeno negócio, a lição é não depender de um único fornecedor: manter alternativas de modelo e ferramenta evita sustos se o preço ou a oferta de um serviço mudar.</p>

    <h2>O que acompanhar nos próximos dias</h2>
    <p>O primeiro ponto é se a Microsoft vai comentar publicamente a decisão, já que até agora o motivo é desconhecido. O segundo é como a Nscale ajustará o plano britânico, com novas fontes de energia ou novos locais. O terceiro é o próprio IPO, que, segundo a reportagem, pode acontecer ainda em outubro: a reação dos investidores dirá se o mercado ainda paga caro por promessa de capacidade de IA, ou se começa a exigir prazos de entrega mais firmes.</p>
    <p>Vale ressaltar que a informação sobre a saída da Microsoft vem de reportagens que citam o Telegraph, sem confirmação da empresa. Enquanto não houver posicionamento oficial, o tratamento correto é de fato reportado, não confirmado. Acompanhamos o caso e atualizamos o Portal da AI quando houver novidades.</p>

    <p>Fonte original: <a href="https://thenextweb.com/news/microsoft-pulls-out-nscale-loughton-data-centre-ipo" rel="noopener noreferrer nofollow" target="_blank">The Next Web</a>, com base em informações do Telegraph e da Bloomberg.</p>
  `,
};
