import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "tenstorrent-capta-1-5-bilhao-chips-inferencia-modelos-abertos",
  title: "Tenstorrent capta US$ 1,5 bilhão e vale US$ 6,2 bi com chips para IA aberta",
  summary:
    "A fabricante de chips de inferência levantou US$ 1,5 bilhão a uma avaliação de US$ 6,2 bilhões, mais que o dobro de 2024, para servir modelos abertos e vídeo.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/19/tenstorrent-hits-6-2b-valuation-to-scale-open-weight-ai-chips/",
  date: "2026-10-19",
  publishedAt: "2026-10-20T04:30:00-03:00",
  topic: "negocios",
  imageQuery: "Jim Keller Tenstorrent",
  content: `
    <p>A Tenstorrent, startup de chips focada em inferência e vista como uma desafiante da Nvidia, levantou US$ 1,5 bilhão em uma nova rodada que a avalia em US$ 6,2 bilhões. A informação foi publicada pelo <a href="https://techcrunch.com/2026/10/19/tenstorrent-hits-6-2b-valuation-to-scale-open-weight-ai-chips/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a> em 19 de outubro de 2026. O valor mais que dobra a avaliação de US$ 2,6 bilhões que a empresa tinha no fim de 2024 e coloca no mapa uma pergunta que interessa a qualquer pessoa que paga por IA: quem vai fabricar os chips que fazem os modelos responderem, e a que preço.</p>

    <p>A rodada foi liderada pela Trace Capital, firma nova lançada por Ben Mahdavi, cofundador da Quiet Capital, e pela Innovation X. Também entraram a Cadence Ventures, a Eclipse, a Fidelity, a SanDisk e a T. Rowe Price. A Tenstorrent tem cerca de dez anos de existência e, segundo a reportagem, vai usar o dinheiro para ampliar a produção de chips voltados a servir modelos de IA de pesos abertos e também a geração de vídeo.</p>

    <h2>O que a Tenstorrent faz e por que inferência importa</h2>
    <p>Existem duas grandes etapas no ciclo de vida de um modelo de IA. A primeira é o treinamento, quando o modelo aprende a partir de enormes volumes de dados e consome meses de computação. A segunda é a inferência, o momento em que o modelo já pronto recebe a sua pergunta e devolve uma resposta. O treinamento acontece poucas vezes. A inferência acontece bilhões de vezes por dia, cada vez que alguém abre um chatbot, pede um resumo, roda um agente ou gera uma imagem.</p>
    <p>É por isso que o custo de inferência pesa tanto no preço final dos serviços de IA. Quando uma empresa de IA cobra uma assinatura mensal ou um valor por milhão de tokens, boa parte do que ela está repassando é o custo de ter chips ligados respondendo pedidos. Uma fabricante que consiga entregar essa resposta com menos energia e menos dinheiro por consulta pressiona o preço de todo o setor, mesmo que o usuário final nunca ouça o nome dela.</p>
    <p>A Tenstorrent se posiciona exatamente nessa camada. De acordo com o TechCrunch, a empresa é uma startup de chips com foco em inferência e a rodada serve para escalar chips destinados a modelos de pesos abertos, aqueles cujos parâmetros ficam disponíveis para que qualquer provedor ou empresa os rode por conta própria.</p>

    <h2>A recusa em ser comprada</h2>
    <p>Um detalhe da reportagem chama atenção. Cerca de cinco meses antes, a Bloomberg havia informado que a Intel e a Qualcomm tinham demonstrado interesse em comprar a Tenstorrent, com valores de até US$ 5 bilhões. A empresa não vendeu. O CEO, Jim Keller, disse à Bloomberg que a companhia decidiu permanecer independente e levantar mais capital depois que seus servidores Galaxy mostraram que conseguem rodar modelos da DeepSeek.</p>
    <p>A leitura é direta: em vez de aceitar uma oferta de até US$ 5 bilhões, os investidores e a diretoria preferiram uma avaliação maior, de US$ 6,2 bilhões, apostando que o mercado de chips para inferência ainda tem muito espaço para crescer. Esse tipo de decisão costuma indicar que quem está por dentro vê demanda sólida pela frente, embora também carregue o risco de uma aposta alta em uma área em que a Nvidia domina.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Os números da rodada</span>
      <p>Captação de US$ 1,5 bilhão, avaliação de US$ 6,2 bilhões (contra US$ 2,6 bilhões no fim de 2024), liderada por Trace Capital e Innovation X, com Cadence Ventures, Eclipse, Fidelity, SanDisk e T. Rowe Price. Fonte: TechCrunch, 19 de outubro de 2026.</p>
    </div>

    <h2>Modelos abertos no centro da estratégia</h2>
    <p>A aposta da Tenstorrent em modelos de pesos abertos faz sentido dentro de um cenário em que esses modelos ganharam força. Nas últimas semanas o Portal da AI registrou vários movimentos nessa direção, como o lançamento da <a href="/noticias/nvidia-nemotron-3-5-super-vl-bolt-modelos-abertos-agentes">família Nemotron 3.5 da Nvidia para agentes</a> e a <a href="/artigos/muse-spark-open-da-meta-modelo-aberto-licenca-e-como-testar">discussão sobre o Muse Spark Open, da Meta</a>, um modelo aberto que qualquer pessoa pode testar. Quanto mais bons modelos abertos existem, mais empresas querem rodá-los em infraestrutura própria ou alugada, e mais chips diferentes passam a ter chance de competir.</p>
    <p>Para a Nvidia, a vantagem sempre foi o ecossistema de software. Quem escreve código para as placas dela dificilmente quer migrar. Mas modelos abertos mudam essa conta, porque a mesma arquitetura de modelo pode ser adaptada para vários tipos de chip. A <a href="/noticias/amazon-torchneuron-pytorch-trainium-desafia-nvidia">tentativa recente da Amazon de facilitar o uso de seus chips com o PyTorch</a> vai na mesma direção: reduzir o custo de trocar de fornecedor.</p>
    <p>A reportagem também menciona que a Tenstorrent mira a geração de vídeo, uma carga de trabalho que consome muito mais processamento do que texto. Vídeo gerado por IA é um dos usos que mais cresce entre criadores e pequenos negócios, e também um dos mais caros de servir. Chips mais eficientes nesse ponto podem, com o tempo, baixar o preço de ferramentas que hoje cobram caro por cada clipe.</p>

    <h2>O contexto: uma corrida por alternativas à Nvidia</h2>
    <p>A reportagem lembra que, no início de outubro, o próprio TechCrunch informou que a Etched, outra fabricante de chips de IA, recebia propostas de investimento a avaliações de US$ 40 bilhões ou mais. Somando os dois casos, o recado do mercado é claro: há muito dinheiro disposto a financiar quem prometa fazer inferência de forma diferente da Nvidia.</p>
    <p>Isso não significa que a Tenstorrent vá derrubar a líder do setor, nem que os preços de IA vão cair no mês que vem. Captar dinheiro não é o mesmo que entregar chips em escala, e a empresa ainda precisa provar que consegue produzir em volume, manter o software em dia e convencer provedores de nuvem a comprar. O que a rodada mostra é a confiança de investidores como Fidelity e T. Rowe Price de que existe espaço para mais de um grande fornecedor.</p>
    <p>Vale também separar o que foi informado do que é interpretação. Os fatos reportados são o valor da rodada, a avaliação, os investidores, o histórico de interesse da Intel e da Qualcomm e a declaração do CEO sobre os servidores Galaxy rodando modelos da DeepSeek. Previsões sobre queda de preço, ganho de mercado ou desempenho comparado ao de outras marcas não vieram da reportagem e devem ser tratadas como hipóteses.</p>

    <h2>Por que isso importa para você</h2>
    <p>Quem usa IA para trabalhar ou empreender no Brasil raramente compra um chip. Mas paga, de forma indireta, por todos eles. Cada plano de assinatura, cada chamada de API e cada minuto de vídeo gerado carrega embutido o custo da infraestrutura. Quando surgem concorrentes bem financiados na camada de chips, a pressão para baixar esse custo aumenta, e os primeiros a se beneficiar costumam ser os serviços que repassam a economia em preço ou em limites de uso mais generosos.</p>
    <p>Na prática, três pontos merecem sua atenção:</p>
    <ul>
      <li><strong>Modelos abertos ficam mais viáveis.</strong> Se mais provedores conseguem rodá-los barato, vale acompanhar quando eles aparecem em ferramentas que você já usa. O guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> ajuda a comparar o que cada serviço entrega hoje.</li>
      <li><strong>Custo de IA é custo operacional.</strong> Se você vende serviços com IA, entenda o quanto de cada entrega depende de chamadas pagas. O texto sobre <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">como usar IA para reduzir custos operacionais</a> mostra como medir isso em um negócio pequeno.</li>
      <li><strong>Agentes pedem muita inferência.</strong> Quanto mais tarefas você delega a agentes, mais respostas o sistema precisa gerar por trás. Entender a <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">diferença entre agente, chatbot e automação</a> evita pagar por poder de processamento que você não usa.</li>
    </ul>
    <p>Para o freelancer ou o dono de pequena empresa, a recomendação prática é simples: não mude de ferramenta por causa de uma rodada de investimento, mas fique de olho em reajustes de preço, novos planos e limites. Se os custos de inferência caírem de verdade, isso tende a aparecer primeiro nessas mudanças. Se você já monta automações com agentes, vale reler também o que é o <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">MCP e como ele conecta agentes de IA</a>, porque são esses fluxos que mais consomem inferência no dia a dia.</p>
    <p>O movimento da Tenstorrent é mais um sinal de que a infraestrutura da IA continua atraindo capital em volume raro, e de que a disputa por quem serve os modelos, e não só por quem os treina, está ficando mais disputada. Os efeitos para o bolso do usuário comum, caso venham, serão graduais.</p>
  `,
};
