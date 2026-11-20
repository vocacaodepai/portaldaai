import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "trajectory-capta-45-milhoes-sequoia-pos-treino-modelos-abertos",
  title: "Trajectory capta US$ 45 milhões para treinar modelos abertos sob medida",
  summary:
    "A startup de pós-treino levantou US$ 45 milhões em rodada liderada pela Sequoia, com avaliação de US$ 300 milhões, e abre a plataforma para não técnicos.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/11/02/trajectory-raises-45m-to-make-ai-model-training-accessible-to-nontechnical-experts/",
  date: "2026-11-03",
  publishedAt: "2026-11-03T00:25:00-03:00",
  topic: "negocios",
  imageQuery: "Sequoia Capital Menlo Park office",
  coverImage: {
    url: "/images/covers/trajectory-capta-45-milhoes-sequoia-pos-treino-modelos-abertos.webp",
    width: 1280,
    height: 853,
    credit: "Pexels / Pixabay",
    creditUrl: "https://pixabay.com/photos/conifers-sunlight-road-avenue-1850227/",
  },
  content: `
    <p>A Trajectory, startup americana de pós-treino de modelos de IA, anunciou na segunda-feira (2 de novembro) uma rodada Série A de US$ 45 milhões, liderada pela Sequoia, com avaliação de US$ 300 milhões. Nvidia, Bessemer Venture Partners e Bain Capital Ventures também entraram. A empresa, fundada há cerca de um ano e com 18 funcionários, também abriu sua plataforma ao público. A informação é da <a href="https://techcrunch.com/2026/11/02/trajectory-raises-45m-to-make-ai-model-training-accessible-to-nontechnical-experts/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>.</p>

    <h2>O que a Trajectory faz</h2>
    <p>A proposta é simples de descrever e difícil de executar. A empresa que contrata a Trajectory parte de um modelo de código aberto, conecta esse modelo aos seus aplicativos e deixa a plataforma acompanhar como ele se sai nas tarefas do dia a dia. A partir do retorno sobre o que deu certo e o que deu errado, a plataforma retreina o modelo para que ele melhore em funções específicas. É o que o mercado chama de aprendizado contínuo: o modelo não fica parado depois do lançamento, ele evolui com o uso real.</p>
    <p>O diferencial que a empresa defende é o público. Em vez de exigir um time de pesquisadores de aprendizado de máquina, a interface foi desenhada para que especialistas de negócio, como um advogado, um analista financeiro ou um gerente de atendimento, consigam dizer o que é um bom resultado e deixar a plataforma cuidar do resto. O cofundador Ronak Malde resumiu a lógica ao dizer que a economia valoriza quem trabalhou 30 anos naquela função, e que os modelos genéricos ainda não têm essa experiência acumulada. Segundo ele, são os próprios usuários que devem decidir como é um resultado bom para a sua organização.</p>

    <h2>Quem usa e quem está por trás</h2>
    <p>Entre os clientes citados estão Harvey, Rogo, Decagon, Mercor e a própria Nvidia. A Harvey e a Rogo usam a plataforma para pós-treinar modelos abertos em trabalhos jurídicos e financeiros. A Harvey, aliás, é a mesma empresa que levantou recentemente uma rodada gigante para construir modelos jurídicos próprios, assunto de <a href="/noticias/harvey-capta-550-milhoes-15-6-bilhoes-ia-juridica">Harvey capta US$ 550 milhões e chega a US$ 15,6 bilhões</a>. O fato de uma empresa desse porte ser cliente de uma startup de 18 pessoas mostra o quanto o pós-treino virou uma peça disputada.</p>
    <p>Os três cofundadores, Ronak Malde, Michael Elabd e Arjun Karanam, se conheceram como colegas de turma em Stanford. Malde e Elabd trabalharam no Google DeepMind, e Malde esteve entre os pesquisadores que a DeepMind contratou da Windsurf. Karanam atuou com modelos generativos de base na Apple. A empresa também contratou pesquisadores e designers que passaram por OpenAI, Stripe e Netflix, o que sinaliza que o produto tenta unir pesquisa e experiência de uso.</p>

    <div class="callout-box">
      <span class="callout-label">Em números</span>
      <p>US$ 45 milhões na Série A, avaliação de US$ 300 milhões, 18 funcionários, cerca de um ano de vida e clientes como Harvey, Rogo, Decagon, Mercor e Nvidia. Esses são os dados divulgados na reportagem.</p>
    </div>

    <h2>Um mercado cada vez mais concorrido</h2>
    <p>A Trajectory não está sozinha. A reportagem cita como concorrentes a Thinking Machines Lab, que mantém a plataforma de ajuste fino Tinker, a Applied Compute, avaliada em US$ 3,25 bilhões no mês passado, e a Prime Intellect. A leitura de mercado é que, à medida que os modelos de código aberto ficam bons o bastante, o dinheiro migra para quem consegue adaptá-los a um uso específico. Essa disputa aparece também em outras frentes que já cobrimos, como a <a href="/noticias/nous-research-1-5-bilhao-hermes-agentes-empresas">Nous Research, avaliada em US$ 1,5 bilhão</a> com foco em agentes para empresas, e o avanço dos pesos abertos nos lançamentos recentes, caso do <a href="/noticias/mistral-large-4-pesos-abertos-hugging-face-terminal-bench">Mistral Large 4 com pesos abertos</a>.</p>
    <p>Há ainda uma posição de princípio no discurso da empresa. Segundo a reportagem, Elabd defende que manter pessoas dentro do ciclo de treinamento é mais seguro do que depender de modelos que se aperfeiçoam sozinhos, o que, na visão dele, poderia levar a resultados não previstos e até perigosos. O debate sobre autoaperfeiçoamento voltou ao centro da conversa depois que a Anthropic disse, no documento de abertura de capital, estar perto dessa capacidade, tema de <a href="/noticias/anthropic-s-1-alerta-autoaperfeicoamento-recursivo-ia-rsi">Anthropic diz no S-1 que está perto de uma IA que se aperfeiçoa sozinha</a>. A Trajectory se posiciona no outro lado: melhoria contínua, mas guiada por quem entende do trabalho.</p>

    <h2>O que muda na prática para as empresas</h2>
    <p>Até agora, ter um modelo afinado para a própria operação era privilégio de quem podia pagar um time caro de pesquisa. O que startups como a Trajectory prometem é baixar essa barreira. Em vez de usar o mesmo modelo genérico que todo concorrente usa, a empresa passa a ter um modelo treinado com o seu jeito de trabalhar: o vocabulário do setor, os critérios de qualidade, os erros típicos que um profissional experiente evitaria.</p>
    <p>Isso tem vantagens claras. Modelos menores e especializados costumam custar menos para rodar do que os maiores modelos de fronteira, e dão mais controle sobre os dados, já que o modelo aberto pode rodar em infraestrutura própria. Em contrapartida, há trabalho do lado do cliente. É preciso definir o que é um bom resultado, reunir exemplos, acompanhar a evolução e não confiar cegamente no modelo só porque ele foi treinado com os seus dados. Pós-treino mal feito pode ensinar vícios, repetir erros antigos ou piorar em tarefas que antes funcionavam.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você trabalha com IA no Brasil, seja como profissional, freelancer ou dono de um pequeno negócio, essa notícia aponta uma tendência: o valor está migrando do modelo genérico para o conhecimento específico de cada área. Quem domina bem um ofício, como contabilidade, direito, saúde, vendas ou educação, tem justamente o ingrediente que falta aos modelos. Essa é a lógica da Trajectory, e ela vale também fora do mundo das startups.</p>
    <p>Na prática, três atitudes ajudam. Primeiro, comece a documentar o que é um trabalho bem feito na sua área, com exemplos reais de entregas boas e ruins, porque esse material é a base de qualquer ajuste de IA, de um simples conjunto de instruções até um retreinamento completo. Segundo, avalie ferramentas que permitam personalizar o comportamento da IA sem programar, e compare o custo com o de simplesmente pagar por um modelo de ponta. Terceiro, mantenha sempre uma revisão humana, porque quem decide o que é bom continua sendo você.</p>
    <p>Para quem quer transformar conhecimento de nicho em renda, vale ler <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como ganhar dinheiro criando e vendendo agentes de IA personalizados</a> e entender o cenário geral em <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o futuro do trabalho autônomo</a>. E antes de entregar dados da sua empresa a qualquer plataforma, o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> ajuda a avaliar risco e privacidade.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Há alguns pontos a acompanhar. O primeiro é se a plataforma aberta ao público vai mesmo atrair usuários sem formação técnica, ou se continuará dependendo de times especializados dentro dos clientes. O segundo é como a Trajectory vai se diferenciar de rivais mais bem capitalizados, como a Applied Compute, que tem avaliação mais de dez vezes maior. O terceiro é a qualidade real dos modelos pós-treinados: a reportagem traz os clientes e o discurso da empresa, mas não números de desempenho comparando esses modelos com os de fronteira. Até haver esses dados, o melhor é tratar a promessa como direção de mercado, e não como resultado comprovado.</p>
    <p>Vale lembrar também que a avaliação de US$ 300 milhões e o valor da rodada vêm da reportagem e do anúncio da própria empresa, e que a Trajectory é jovem, com pouco tempo de mercado. Rodadas desse tipo mostram o apetite dos investidores por infraestrutura de IA aplicada, mas não garantem que a empresa se sustente quando a concorrência apertar.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Reportagem da TechCrunch: <a href="https://techcrunch.com/2026/11/02/trajectory-raises-45m-to-make-ai-model-training-accessible-to-nontechnical-experts/" target="_blank" rel="noopener noreferrer nofollow">Trajectory raises $45M to make AI model training accessible to nontechnical experts</a>.</p>
    </div>
  `,
};
