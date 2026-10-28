import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ia-na-previsao-do-tempo-tupann-do-impa-monan-do-inpe-e-o-que-muda-para-voce",
  title: "IA na previsão do tempo: Tupann, Monan e o que muda para você",
  seoTitle: "IA na previsão do tempo: Tupann, Monan e o que muda",
  excerpt:
    "IA na previsão do tempo já avisa chuva com 3 horas de antecedência no Brasil. Entenda o Tupann do Impa, o Monan do Inpe e como ler um alerta sem cair em erro.",
  metaDescription:
    "IA na previsão do tempo no Brasil: como o Tupann do Impa prevê chuva em até 3 horas, o que o Monan do Inpe faz sem IA e como ler previsão e alerta com cuidado.",
  category: "futuro",
  articleSubcategory: "tecnologia-emergente",
  date: "2026-10-28",
  readTime: 7,
  imageQuery: "storm clouds radar weather forecast city",
  seed: 875,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Tupann, criado por doutorandos do Impa, usa IA para avisar chuva com 3 horas de antecedência, já ajuda previsões no Rio de Janeiro e foi testado em Manaus, La Paz, Toronto e Miami.",
    "O Monan, modelo do Inpe que entrou em operação em setembro de 2026, é um modelo físico global de 10 km que prevê até 11 dias; segundo a reportagem da Agência Brasil, ele não usa IA.",
    "IA e física se complementam: a física cobre dias à frente e a IA aprende padrões para o curtíssimo prazo, mas nenhum dos dois dispensa o alerta oficial nem o cuidado de quem decide.",
  ],
  content: `
    <p>IA na previsão do tempo é o uso de modelos que aprendem com muitos eventos passados de chuva para estimar o que vem a seguir, em vez de resolver apenas equações da atmosfera. No Brasil, um exemplo recente é o Tupann, ferramenta de doutorandos do Impa que avisa chuva com três horas de antecedência e já apoia previsões no Rio de Janeiro.</p>

    <p>A conversa ganhou força porque, quase ao mesmo tempo, o Inpe colocou no ar o Monan, um modelo próprio de previsão que não depende de IA. Ficam duas perguntas práticas: o que cada um faz e o que muda para quem decide com base no tempo, seja um dono de loja, um motorista de aplicativo ou uma família com viagem marcada? Este texto separa o que as fontes oficiais informam do que ainda é promessa.</p>

    <h2>Como a IA entra na previsão do tempo?</h2>

    <p>A previsão tradicional usa modelos numéricos, que aplicam leis da física a dados de satélites, radares e estações. A IA entra de outro jeito: o modelo é treinado com um grande volume de eventos passados e aprende padrões. É a mesma ideia de qualquer aprendizado de máquina, explicada no guia sobre <a href="/artigos/como-uma-ia-aprende-treinamento-ajuste-fino-e-por-que-erra">como uma IA aprende</a>, aplicada a imagens de chuva em vez de textos.</p>

    <p>A reportagem da <a href="https://agenciabrasil.ebc.com.br/radioagencia-nacional/inovacao/audio/2026-06/ia-desenvolvida-por-brasileiros-faz-previsao-do-tempo-em-curto-prazo" target="_blank" rel="noopener noreferrer">Radioagência Nacional</a>, publicada em 12/06/2026, descreve exatamente isso: o doutorando Leonardo Voltarelli explica que o modelo recebe uma sequência de quadros do passado e é desafiado a prever os próximos, depois de treinado com muitos eventos de chuva. Para entender a diferença entre as técnicas, o texto sobre <a href="/artigos/ia-machine-learning-e-deep-learning-qual-a-diferenca-e-onde-entra-a-generativa">IA, machine learning e deep learning</a> ajuda.</p>

    <h2>Tupann: chuva com três horas de antecedência</h2>

    <p>Segundo a mesma reportagem, o Tupann foi desenvolvido por doutorandos do Impa, o Instituto de Matemática Pura e Aplicada, ligado ao Ministério da Ciência, Tecnologia e Inovação. Ele é descrito como capaz de avisar a ocorrência de chuvas com três horas de antecedência, usando dados de satélite e cálculos matemáticos. A janela é considerada decisiva para avaliar o tempo e prevenir desastres.</p>

    <p>O foco é onde faltam radares no solo ou onde existem poucos. A matéria informa que a ferramenta já apoia previsões no Rio de Janeiro e foi testada em Manaus e também fora do país: La Paz, na Bolívia, Toronto, no Canadá, e Miami, nos Estados Unidos. Os próximos passos citados são testes na Ásia e na África e a ampliação do prazo para além das três horas.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>A reportagem não traz taxa de acerto nem comparação com outros modelos. O que existe é a avaliação do pesquisador, de que a ferramenta acerta bem pelos resultados obtidos. Trate como promessa promissora, não como medida pública de precisão.</p></div>

    <h2>Monan: o modelo do Inpe que não usa IA</h2>

    <p>Em 03/09/2026, a <a href="https://www.acessa.com/noticias/2026/09/338717-inpe-inicia-operacao-de-modelo-proprio-de-previsao-do-tempo.html" target="_blank" rel="noopener noreferrer">Agência Brasil, em texto republicado pelo Acessa.com</a>, informou que o Inpe começou a operar o Monan (Modelo para Previsões de Oceano, Terra e Atmosfera), desenvolvido ao longo de três anos. Ele roda no supercomputador Jaci, no centro de dados do Inpe em Cachoeira Paulista (SP), tem cobertura global, resolução de 10 km e duas atualizações por dia, e prevê até 11 dias à frente, segundo o MCTI.</p>

    <p>A reportagem descreve um modelo baseado em física, com equações e dados de satélites, radares e estações, e não menciona IA ou aprendizado de máquina. O ministério afirma que a precisão brasileira agora se equipara à de agências de referência dos Estados Unidos e da Europa. Esse é o ponto de vista do governo, e a matéria não traz números para checar. Entre as aplicações previstas estão alertas antecipados de desastres, monitoramento de frentes frias e secas, planejamento de plantio e colheita e estimativa de chuva para bacias de rios.</p>

    <h2>Física ou IA: qual prevê melhor?</h2>

    <p>A comparação mais útil é por prazo e por tarefa, não por quem vence.</p>

    <table>
      <thead>
        <tr><th>Característica</th><th>Monan (Inpe)</th><th>Tupann (Impa)</th></tr>
      </thead>
      <tbody>
        <tr><td>Técnica</td><td>Modelo físico, equações da atmosfera</td><td>IA treinada com eventos de chuva</td></tr>
        <tr><td>Alcance</td><td>Global, até 11 dias</td><td>Chuva local, até 3 horas</td></tr>
        <tr><td>Resolução informada</td><td>10 km</td><td>Não informada</td></tr>
        <tr><td>Uso hoje</td><td>Em operação no Inpe desde setembro de 2026</td><td>Apoia previsões no Rio de Janeiro</td></tr>
        <tr><td>Próximo passo</td><td>Regional de 5 km e previsão imediata de até 6 horas</td><td>Testes na Ásia e na África, prazo maior</td></tr>
      </tbody>
    </table>

    <p>Repare que o Inpe também aponta, entre os próximos passos, ferramentas de previsão imediata de até seis horas, o terreno em que o Tupann já atua. Ou seja: as duas abordagens caminham para se encontrar, e a tendência plausível é usar física para o cenário geral e IA para o ajuste fino das próximas horas. Isso é leitura do cenário, não anúncio oficial.</p>

    <h2>O que muda no seu dia a dia</h2>

    <p>Para a maioria das pessoas, o impacto chega por aplicativos e alertas, não por modelos. Três situações em que o aviso de poucas horas pesa:</p>

    <ul>
      <li><strong>Pequeno comércio e delivery:</strong> saber que a chuva forte chega em três horas ajuda a reforçar entregadores, cobrir mercadoria na calçada e avisar clientes. O guia de <a href="/artigos/ia-para-restaurante-e-delivery-cardapio-pedidos-e-avaliacoes">IA para restaurante e delivery</a> mostra como organizar pedidos em dia de pico.</li>
      <li><strong>Viagens e passeios:</strong> ao <a href="/artigos/planejar-viagem-com-ia-roteiro-orcamento-e-checagem-antes-de-reservar">planejar viagem com IA</a>, olhe a previsão perto da data, não só na reserva.</li>
      <li><strong>Campo e produção:</strong> quem planta e colhe tem na previsão uma decisão de custo. O artigo sobre <a href="/artigos/ia-no-agro-brasileiro-drones-sensores-e-o-que-muda-para-quem-produz">IA no agro brasileiro</a> mostra onde a tecnologia já chegou.</li>
    </ul>

    <p>Quando o assunto é segurança, a ordem de confiança é: alerta oficial da Defesa Civil e dos órgãos de meteorologia, depois o aplicativo, depois a IA que você consulta por conversa. Um chatbot que resume a previsão não mede a chuva, só repete o que leu e pode errar, como mostra o guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>.</p>

    <h2>Como pedir uma leitura da previsão para a IA sem se enganar</h2>

    <p>Um assistente de IA serve para traduzir o texto técnico da previsão em decisão prática, desde que você cole o texto oficial e peça a lista do que checar. Veja um modelo:</p>

    <pre><code>Segue a previsão oficial do tempo para a minha cidade nos próximos 3 dias (colei abaixo). Explique em linguagem simples o que significa cada termo, aponte onde há incerteza e liste 3 decisões que eu devo adiar até ver o alerta mais recente. Não invente dados que não estejam no texto.</code></pre>

    <p>Outro uso é montar um plano B de operação: peça uma lista de ações para uma loja ou evento ao ar livre se a chuva antecipar em duas horas. Se a resposta citar número ou prazo que não está no texto colado, descarte. Para saber qual tamanho de modelo faz sentido nessa tarefa simples, veja <a href="/artigos/modelo-pequeno-ou-grande-de-ia-velocidade-custo-e-qualidade-para-quem-usa">modelo pequeno ou grande de IA</a>.</p>

    <h2>Erros comuns ao confiar em previsão com IA</h2>

    <ul class="checklist">
      <li>Tratar uma ferramenta em teste como padrão oficial de alerta.</li>
      <li>Ler porcentagem de chuva como garantia, sem checar o que a fonte quer dizer com ela.</li>
      <li>Ignorar o prazo: previsão de 3 horas é para agir já, não para planejar o fim de semana.</li>
      <li>Pedir ao chatbot a previsão sem colar fonte e confiar no que ele devolve.</li>
      <li>Decidir só pela IA em situação de risco, como área de alagamento ou encosta.</li>
    </ul>

    <p>Também vale lembrar o limite estrutural. Segundo a reportagem do Monan, os modelos dependem de dados de satélites, radares e estações, e o Tupann nasceu justamente para regiões com poucos radares. Onde faltam dados, a previsão é mais incerta, qualquer que seja a técnica. Esse tipo de viés de cobertura é parente do problema descrito em <a href="/artigos/vies-em-ia-o-que-e-exemplos-e-como-perceber-na-pratica">viés em IA</a>: o modelo aprende o que viu, e lugares pouco medidos aparecem pouco nos dados.</p>

    <h2>O que acompanhar daqui para frente</h2>

    <p>Três sinais mostram se a IA vai virar parte do alerta cotidiano: publicação de métricas de acerto do Tupann, a chegada do modelo regional de 5 km e das ferramentas de previsão imediata do Inpe, e a expansão para mais cidades brasileiras. Enquanto isso, a ciência do clima também depende de energia e de computação, tema do artigo sobre <a href="/artigos/data-centers-de-ia-e-energia-no-brasil-redata-conta-de-luz-e-o-que-esperar">data centers de IA e energia no Brasil</a>. Para o panorama das políticas públicas, veja o <a href="/artigos/plano-brasileiro-de-ia-pbia-o-que-muda-para-voce">Plano Brasileiro de IA</a>.</p>

    <p>Quer continuar acompanhando as tecnologias que saem do laboratório e chegam à rotina? Veja outras análises em <a href="/categoria/futuro">futuro com IA</a> e comece pelo que já está funcionando no Brasil, como a previsão de chuva, antes de apostar no que ainda é promessa.</p>
  `,
  faq: [
    {
      question: "O que é o Tupann do Impa?",
      answer:
        "É uma ferramenta de IA criada por doutorandos do Impa para avisar chuva com três horas de antecedência, usando dados de satélite. Segundo a Radioagência Nacional, ela apoia previsões no Rio de Janeiro e foi testada em Manaus, La Paz, Toronto e Miami. A reportagem não divulga taxa de acerto.",
    },
    {
      question: "O Monan do Inpe usa inteligência artificial?",
      answer:
        "A reportagem da Agência Brasil sobre o início da operação, em 03/09/2026, descreve um modelo baseado em física e não menciona IA nem aprendizado de máquina. Ele tem 10 km de resolução, cobertura global e prevê até 11 dias, segundo o Ministério da Ciência, Tecnologia e Inovação.",
    },
    {
      question: "IA prevê o tempo melhor que os modelos tradicionais?",
      answer:
        "Depende da tarefa e do prazo. As fontes consultadas não trazem comparação com números. O modelo físico cobre dias à frente, enquanto a IA do Tupann mira chuva nas próximas três horas. O mais provável é que as duas técnicas se complementem, mas isso é leitura do cenário, não anúncio oficial.",
    },
    {
      question: "Posso usar o ChatGPT ou o Gemini para saber se vai chover?",
      answer:
        "Pode pedir ajuda para entender um texto de previsão que você colou, mas não como fonte de alerta. Um chatbot não mede chuva e pode errar. Para decisões de segurança, use o alerta oficial da Defesa Civil e dos órgãos de meteorologia e confira o horário da última atualização.",
    },
    {
      question: "O Tupann já serve para o alerta de chuva na minha cidade?",
      answer:
        "Não há informação, nas fontes consultadas, de que ele esteja disponível ao público em geral. A reportagem diz que a ferramenta apoia previsões no Rio de Janeiro e que há testes em outras cidades. Acompanhe os anúncios do Impa e dos órgãos de meteorologia locais.",
    },
  ],
};
