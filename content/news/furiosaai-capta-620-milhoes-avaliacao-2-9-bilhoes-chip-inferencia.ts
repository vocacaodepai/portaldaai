import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "furiosaai-capta-620-milhoes-avaliacao-2-9-bilhoes-chip-inferencia",
  title: "FuriosaAI capta US$ 620 milhões e vale US$ 2,9 bi com chip rival da Nvidia",
  summary:
    "A startup sul-coreana FuriosaAI levantou US$ 620 milhões em rodada Série D e passou a valer cerca de US$ 2,9 bilhões, quatro vezes mais que no ano passado.",
  author: "Bruno Danello",
  sourceName: "The Next Web, Bloomberg",
  sourceUrl: "https://thenextweb.com/news/furiosaai-series-d-620m-2-9bn-valuation",
  date: "2026-10-30",
  publishedAt: "2026-10-30T00:40:00-03:00",
  topic: "negocios",
  imageQuery: "Seoul South Korea skyline",
  content: `
    <p>A FuriosaAI, fabricante sul-coreana de chips para rodar modelos de inteligência artificial, anunciou uma rodada Série D de US$ 620 milhões que a avalia em cerca de US$ 2,9 bilhões. A empresa, sediada em Seul, valia US$ 735 milhões na rodada do ano passado, ou seja, o valor quase quadruplicou em doze meses. A informação foi publicada pelo The Next Web, que cita a Bloomberg como a primeira a noticiar o negócio, e a própria empresa divulgou a rodada em comunicado e em post no blog. Para quem usa IA no trabalho, a notícia importa porque mostra o dinheiro indo para a parte do sistema que mais pesa na conta: a inferência, isto é, o momento em que o modelo responde às suas perguntas.</p>

    <h2>Quem colocou dinheiro na rodada</h2>
    <p>O maior investidor individual foi o Fundo Nacional de Crescimento da Coreia do Sul, com US$ 280 milhões. Investidores internacionais somaram US$ 110 milhões, com liderança da americana Infinitum e participação de Jericho Capital, Worldline Capital, Cisco Investments, NeoFort Holding, de Abu Dhabi, e QUDA Capital Partners, de Singapura. O fundador da QUDA, Charlie Foo, é ex-executivo da Nvidia e hoje aconselha a FuriosaAI.</p>

    <p>Os acionistas que já estavam na empresa colocaram outros US$ 125 milhões, incluindo os três investidores da rodada semente: NAVER, DSC Investment e KDB Capital. Também entraram o Banco de Exportação e Importação da Coreia, que fez seu primeiro investimento direto em uma startup, e a gestora UAMCO, com US$ 30 milhões. A reportagem não informa o valor do banco de exportação, e os números citados não fecham exatamente os US$ 620 milhões, então vale tratar a divisão como aproximada.</p>

    <h2>O chip RNGD e o que ele promete</h2>
    <p>O produto da empresa é o RNGD, pronunciado como "renegade", sua segunda geração de chip dedicado à inferência. Ele entrou em produção em massa em janeiro. Segundo a Bloomberg, a TSMC fabricará 20 mil unidades neste ano, e a FuriosaAI afirma já ter garantido memória e capacidade de fábrica para mais de 40 mil em 2027. A placa consome 180 watts e dispensa refrigeração líquida, bastando ventilação por ar, o que facilita a instalação em data centers comuns.</p>

    <p>A empresa diz que o RNGD iguala a vazão da placa RTX PRO 6000, da Nvidia, e atende o dobro de usuários por quilowatt de energia. Esses números são da própria companhia e não foram testados de forma independente, então devem ser lidos como promessa de fabricante, não como resultado comprovado. Ainda assim, o argumento de eficiência energética é o centro da estratégia: com data centers esbarrando em limites de eletricidade, entregar mais respostas por quilowatt pesa tanto quanto a velocidade bruta.</p>

    <h2>Quem já usa o chip</h2>
    <p>A FuriosaAI cita clientes reais. A Samsung SDS lançou em julho um serviço de nuvem rodando em RNGD. O LG Group executa seus modelos EXAONE nos chips, segundo a empresa, e a sul-coreana Upstage usa o hardware para gerar resumos de busca. O CEO, June Paik, disse à Bloomberg que conversa com muitos clientes na Ásia-Pacífico e no Oriente Médio. A empresa tem escritórios nos Estados Unidos, em Singapura e em Lisboa, e levou o RNGD à Europa em julho, por Lisboa, em parceria com a Equinix. A reportagem não menciona a OpenAI como cliente, e é melhor não presumir nenhuma ligação com ela.</p>

    <h2>Para onde vai o dinheiro</h2>
    <p>Os recursos vão para produzir mais chips, melhorar o software e desenvolver a terceira geração, feita com a Broadcom e outros parceiros. A empresa afirma que o novo projeto usará design de múltiplos chiplets em 2 nanômetros e memória HBM4. O software conta tanto quanto o silício: uma alternativa à Nvidia só ganha clientes se for fácil de programar e funcionar com as ferramentas que as equipes já usam.</p>

    <p>Há um obstáculo geral no mercado, a escassez de memória. A Micron espera que a falta se estenda até 2028, o que limita a quantidade de aceleradores que qualquer fabricante consegue entregar. O cenário já aparece em outras notícias que cobrimos, como a <a href="/noticias/euclyd-200-milhoes-chip-ia-samsung">rodada de US$ 200 milhões da Euclyd</a>, outra startup de chips que se apoia em fornecedores sul-coreanos.</p>

    <h2>Um mercado de chips cada vez mais disputado</h2>
    <p>A reportagem lembra que a Etched, outra fabricante focada em inferência, levantou dinheiro em agosto a uma avaliação de US$ 21 bilhões, o que dá a dimensão da aposta do mercado nesse tipo de hardware. A disputa não envolve só startups. A Amazon avança com o Trainium, como mostra o texto sobre o <a href="/noticias/amazon-torchneuron-pytorch-trainium-desafia-nvidia">TorchNeuron e o PyTorch no Trainium</a>. A OpenAI estuda diversificar fornecedores, conforme a notícia de que ela <a href="/noticias/openai-planeja-comprar-tpus-google-alem-nvidia">planeja comprar TPUs do Google além dos chips da Nvidia</a>. A Oracle, por sua vez, vai oferecer na nuvem as máquinas da Cerebras em 2027, tema da notícia sobre <a href="/noticias/oracle-cerebras-nuvem-2027-inferencia-ia">Oracle e Cerebras</a>.</p>

    <p>O que une todos esses movimentos é a inferência. Treinar um modelo é um custo grande, mas pontual. Responder a milhões de pedidos todos os dias, em chats, agentes e assistentes, é um custo recorrente, e quem baratear essa etapa muda o preço final das ferramentas que você assina.</p>

    <h2>O que a reportagem não informa</h2>
    <p>Para não tirar conclusões além do que foi publicado, convém separar o que não aparece. A matéria não fala em planos de abertura de capital, não traz receita ou lucro da FuriosaAI e não detalha contratos com clientes dos Estados Unidos. Também não há preço do RNGD nem prazo para a terceira geração. O que existe são a rodada, os investidores, as especificações declaradas pela empresa e os clientes que ela mesma cita.</p>

    <h2>Por que isso importa para você</h2>
    <p>Você provavelmente nunca vai comprar um chip da FuriosaAI, mas vai sentir o efeito de um mercado com mais fornecedores. Quando só uma empresa domina o hardware, o custo de rodar IA fica alto e se reflete em planos mais caros e limites de uso mais apertados. Com mais concorrentes eficientes, a tendência é de pressão por preços menores por resposta, o que beneficia quem vive de automatizar tarefas, atender clientes ou vender serviços com apoio de IA.</p>

    <p>Na prática, vale acompanhar duas coisas: se os preços de API dos grandes modelos continuam caindo e se as nuvens passam a oferecer mais opções de hardware sem exigir que você mude de ferramenta. Se você ainda está decidindo qual assistente usar no dia a dia, o guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> ajuda a comparar custo e qualidade, e o artigo <a href="/artigos/vibe-coding-para-nao-programadores-carreira-e-riscos">Vibe coding para não programadores</a> mostra como tirar proveito dessas ferramentas sem escrever código do zero.</p>

    <p>A notícia veio de fonte única, o The Next Web, que cita a Bloomberg. O texto é nosso, com análise própria, e os dados citados são os informados pela reportagem e pela empresa.</p>
  `,
};
