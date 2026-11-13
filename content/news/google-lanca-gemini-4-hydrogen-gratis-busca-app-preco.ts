import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-lanca-gemini-4-hydrogen-gratis-busca-app-preco",
  title: "Google lança Gemini 4 Hydrogen e leva o Gemini 4 à Busca e ao app",
  summary:
    "Modelo rápido e mais barato da família Gemini 4 chega ao app, à Busca e à API, supera o Argon em ranking e custa US$ 1,50 por milhão de tokens de entrada.",
  author: "Bruno Danello",
  sourceName: "Google",
  sourceUrl:
    "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/",
  date: "2026-11-13",
  publishedAt: "2026-11-13T17:24:00-03:00",
  topic: "lancamentos",
  imageQuery: "Google Gemini logo",
  content: `
    <p>O Google lançou nesta quinta-feira (12) o Gemini 4 Hydrogen, o modelo rápido e mais barato da nova família Gemini 4. A diferença em relação aos lançamentos anteriores da série é o alcance: enquanto o Gemini 4 Argon e o Gemini 4 Carbon chegaram primeiro a grupos restritos e a assinantes, o Hydrogen começou a ser liberado no mundo todo de uma vez, na API para desenvolvedores, no app Gemini, na Busca do Google e no Gemini dentro do Google Sheets. Na prática, é a primeira vez que a geração Gemini 4 fica ao alcance de qualquer pessoa, inclusive de quem não paga nada.</p>
    <p>O anúncio foi assinado por Koray Kavukcuoglu, vice-presidente sênior do Google DeepMind e arquiteto-chefe de IA do Google, que descreve o Hydrogen como um modelo para o trabalho do dia a dia, com foco em programação e em agentes, aqueles assistentes que executam tarefas em várias etapas sozinhos.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Gemini_language_model_logo.png" alt="Logotipo do Gemini, família de modelos de IA do Google" loading="lazy" />
      <figcaption>Foto: Google / Wikimedia Commons (domínio público)</figcaption>
    </figure>

    <h2>O que o Hydrogen faz e onde ele se encaixa</h2>
    <p>O Google divide a família em dois papéis. O Argon e o Carbon são os modelos de fronteira, pensados para raciocínio longo e problemas difíceis, como desenhar a arquitetura de um sistema ou caçar um erro sutil. O Hydrogen é o executor: escreve código, roda testes, confere mudanças e responde rápido. A empresa diz que ele pode trabalhar sozinho ou junto com os modelos maiores.</p>
    <p>Para juntar os dois papéis, o Google apresentou também o Orchestrator, um recurso do Google Antigravity (o ambiente de programação com agentes da empresa) que alterna entre o Carbon e o Hydrogen dentro da mesma sessão. Segundo o Google, no teste Terminal-Bench 4.0, essa combinação chegou perto da taxa de acerto do Carbon usando em média 24% menos cota e terminando 19% mais rápido. Em tarefas com vários agentes em paralelo, o Carbon pode coordenar enquanto o Hydrogen faz o papel de agentes que executam e verificam o trabalho.</p>
    <p>O modelo tem quatro níveis de raciocínio: baixo, médio, alto (o padrão) e um novo nível "xhigh", o mais profundo. A ideia é que o usuário pague e espere apenas pelo nível de raciocínio que a tarefa exige. A janela de contexto é de 1 milhão de tokens na entrada, com até 1 milhão de tokens de saída, o que permite jogar no modelo PDFs longos, planilhas, gráficos, áudio e vídeo de uma vez.</p>

    <h2>Desempenho e preço</h2>
    <p>No índice de inteligência da Artificial Analysis, o Hydrogen marca 51 pontos no nível padrão, contra 50 do Argon, e chega a 54 no nível xhigh. É um dado curioso: o modelo "barato" da família passa o modelo de fronteira lançado no fim de setembro. Em relação ao antecessor direto, o Gemini 3.8 Flash, o Google afirma que o Hydrogen termina tarefas 2,5 vezes mais rápido, mais que triplica a nota no Terminal-Bench 4.1 (57% contra 18,2%) e reduz em mais de cinco vezes as afirmações inventadas.</p>
    <p>A empresa cita ainda outros resultados: 58,8% no HLE-Diamond, primeiro lugar geral no Vals Tax Agent Bench (52,3%), empate no primeiro lugar do Vals Legal Research Bench (55,8%), 71,6% no Agents' Last Exam v1.1 e quinto lugar na Agent Arena, ranking ao vivo da arena.ai. Parceiros que testaram o modelo antes do lançamento relataram execuções de 2 a 2,8 vezes mais rápidas, com 12% a 23% menos tokens, em fluxos com SQL e grandes volumes de dados. Boa parte desses números vem do próprio Google e de testes de parceiros, sem verificação independente até agora.</p>
    <p>O preço na API é de US$ 1,50 por milhão de tokens de entrada e US$ 7,50 por milhão de tokens de saída, valor fixo em toda a janela de 1 milhão de tokens. Isso é relevante porque vários concorrentes cobram mais caro quando o texto enviado passa de certo tamanho. Para comparação, o Carbon foi lançado com preço promocional de US$ 2 e US$ 10 por milhão, como mostramos na <a href="/noticias/google-gemini-4-carbon-lancamento-ranking-preco">notícia sobre o Gemini 4 Carbon</a>.</p>

    <h2>Onde dá para usar a partir de agora</h2>
    <p>A liberação é gradual, mas global, e começou no dia 12:</p>
    <ul>
      <li><strong>App Gemini:</strong> o Hydrogen aparece na lista de modelos. Usuários gratuitos recebem o modelo pela seleção automática, quando o sistema entender que ele é o mais adequado para o pedido.</li>
      <li><strong>Busca do Google:</strong> o modelo passa a alimentar as respostas de IA para todos os usuários, com melhor leitura de perguntas longas ou com erros de digitação, respostas mais visuais e uma variedade maior de links.</li>
      <li><strong>Desenvolvedores:</strong> Gemini API e Google AI Studio em todos os planos, Android Studio e, para assinantes pagos do Google AI Pro e Ultra, o Google Antigravity.</li>
      <li><strong>Empresas:</strong> Gemini for business pela API ou pela lista de modelos, Antigravity e Gemini no Google Sheets para assinaturas corporativas elegíveis.</li>
      <li><strong>Google Sheets para pessoas físicas:</strong> começa pelos assinantes do Google AI Pro e Ultra. O Google diz que o modelo gera resultados mais de 30% mais rápido que os anteriores no modo canvas das planilhas.</li>
    </ul>

    <h2>O que o Google diz sobre segurança</h2>
    <p>Por ser o modelo que vai chegar ao maior número de pessoas, o Google deu peso ao comportamento dele como agente. Segundo a empresa, em comparação com o 3.8 Flash, o Hydrogen reduz em até 81% os casos em que o agente faz mais do que foi pedido e em até 79% os casos em que faz menos, e corta em 12 vezes as ações desalinhadas e os atalhos indevidos em testes de uso de ferramentas e de programação. Diante de tarefas bloqueadas, seria até duas vezes menos propenso a contornar limites de permissão.</p>
    <p>Contra a injeção indireta de prompt, um tipo de ataque em que instruções escondidas num site ou documento tentam sequestrar o agente, o Google afirma que o modelo ficou mais de 2,3 vezes mais resistente no teste da Gray Swan. A empresa também diz ter mantido a taxa de recusas indevidas em perguntas médicas abaixo de 0,4% no HealthBench Pro. São, de novo, resultados internos, detalhados na ficha técnica publicada junto com o anúncio.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para o usuário comum no Brasil, a mudança mais visível vai acontecer sem nenhuma ação: as respostas de IA da Busca do Google e do app Gemini passam a usar um modelo mais novo, inclusive no plano gratuito. Vale reparar se as respostas ficam mais precisas nas perguntas do seu trabalho, mas sem abandonar o hábito de conferir as fontes citadas. O próprio Google afirma que reduziu as invenções do modelo, não que elas acabaram. Se você ainda está escolhendo qual assistente usar no dia a dia, nossa comparação entre <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude e Gemini</a> ajuda a decidir.</p>
    <p>Para quem programa ou monta automações, o recado é sobre custo. Um modelo que pontua acima do Argon por US$ 1,50 e US$ 7,50 por milhão de tokens muda a conta de projetos que rodam milhares de chamadas por dia, como atendimento, análise de documentos e agentes internos. A estratégia de usar um modelo caro para planejar e um barato para executar, que o Orchestrator automatiza, tende a virar padrão. Quem quer entender melhor o ambiente pode ler o explicativo sobre o <a href="/artigos/antigravity-no-app-gemini-para-mac-o-que-e-quem-pode-usar-e-limites">Antigravity no app Gemini</a>.</p>
    <p>Para pequenos negócios, a novidade no Google Sheets é a mais prática: montar modelos financeiros que se ajustam a cenários de previsão a partir de um pedido em linguagem natural. Quem ainda tem dificuldade com fórmulas pode começar pelo nosso guia para <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">aprender planilhas do zero com IA</a>. E antes de colocar dados de clientes em qualquer ferramenta nova, vale passar pelo <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA com segurança</a>.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Três pontos merecem atenção nas próximas semanas. O primeiro é a velocidade da liberação no Brasil, já que o Google fala em lançamento global e gradual, sem calendário por país. O segundo é a confirmação independente dos números de desempenho e de segurança, que hoje vêm quase todos da própria empresa. O terceiro é a reação de OpenAI e Anthropic no segmento de modelos rápidos e baratos, onde o preço por tarefa concluída pesa mais que a liderança em ranking. Quem acompanhou o <a href="/noticias/google-gemini-4-argon-lancamento-preco">lançamento do Gemini 4 Argon</a> em setembro viu a família completar três modelos em menos de dois meses, um ritmo que deixa arriscado amarrar qualquer projeto a um único fornecedor.</p>
    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Informações do blog oficial do Google, em anúncio de Koray Kavukcuoglu publicado em 12 de novembro de 2026. Os resultados de desempenho e de segurança foram divulgados pela empresa e por parceiros e ainda não foram verificados de forma independente.</p>
    </div>
  `,
};
