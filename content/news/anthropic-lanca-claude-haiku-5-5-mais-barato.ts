import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-lanca-claude-haiku-5-5-mais-barato",
  title: "Anthropic lança Claude Haiku 5.5, o modelo pequeno mais barato da casa",
  summary:
    "O Haiku 5.5 custa US$ 0,10 por milhão de tokens de entrada, cerca de 75% menos que o Haiku 4.5, e ganha ajuste de esforço. Já está em todas as plataformas.",
  author: "Bruno Danello",
  sourceName: "Anthropic",
  sourceUrl: "https://www.anthropic.com/claude-haiku-5-5",
  date: "2026-10-07",
  publishedAt: "2026-10-07T19:22:20-03:00",
  imageQuery: "Anthropic logo",
  topic: "lancamentos",
  content: `
    <p>A Anthropic lançou nesta quarta-feira (7) o Claude Haiku 5.5, que a empresa descreve como "o modelo pequeno mais barato, mais rápido e mais capaz que já lançamos". Segundo o <a href="https://www.anthropic.com/claude-haiku-5-5" target="_blank" rel="noopener noreferrer nofollow">anúncio oficial</a>, o modelo foi pensado para trabalho de alto volume e sensível a custo, como resumos, compactação de contexto, consultas a bancos de dados e classificação. Ele também pode atuar como subagente ao lado do Opus 5.5 e do Sonnet 5.5 em tarefas de programação.</p>

    <p>O identificador do modelo na API é claude-haiku-5-5. A Anthropic informa que ele já está disponível em todas as plataformas, incluindo Amazon Web Services, Google Cloud, Microsoft Azure e a Claude Platform. O anúncio não diz explicitamente se o modelo chega aos aplicativos de consumo do Claude, e também não informa o tamanho da janela de contexto.</p>

    <h2>Preço e o que muda para quem paga pela API</h2>
    <p>O ponto mais forte do lançamento é o preço. Para prompts de até 100 mil tokens, o Haiku 5.5 custa US$ 0,10 por milhão de tokens de entrada e US$ 0,50 por milhão de saída. Para prompts maiores, os valores sobem para US$ 0,50 e US$ 2,50. Para comparação, o Haiku 4.5 custava US$ 1 de entrada e US$ 5 de saída, e o Sonnet 5.5 custa US$ 2 e US$ 10.</p>
    <p>A leitura de cache também ficou barata: US$ 0,01 por milhão de tokens em prompts de até 100 mil. A Anthropic afirma que o custo médio de execução cai cerca de 75% em relação ao Haiku 4.5, com redução de 90% em requisições de até 100 mil tokens e de 50% nas mais longas. Há um aviso: o novo tokenizador usa um pouco mais de tokens por tarefa, o que reduz parte da economia.</p>
    <p>No mesmo anúncio, a empresa informou que o preço de leitura de cache do Sonnet 5.5 caiu pela metade, de US$ 0,20 para US$ 0,10 por milhão de tokens, o que, segundo ela, reduz em cerca de 20% o custo desse modelo na maioria das tarefas de agentes.</p>

    <h2>Desempenho e ajuste de esforço</h2>
    <p>O Haiku 5.5 é o primeiro modelo da linha Haiku com ajuste de esforço, que permite trocar custo por inteligência em cinco níveis (baixo, médio, alto, extra alto e máximo). Segundo a Anthropic, é o modelo mais rápido da empresa na velocidade padrão de cada um, embora mais lento que os Opus no modo rápido.</p>
    <p>Nos testes divulgados, a distância para o antecessor é grande. No OSWorld 2.1, que mede uso de computador, o Haiku 5.5 marcou 72,4%, contra 15,7% do Haiku 4.5. No Terminal-Bench 4.0, ficou em 39,2%, contra 0,0%. No Humanity's Last Exam sem ferramentas, chegou a 45,9%, contra 10,2%. O Sonnet 5.5 continua à frente em todos esses testes, por exemplo com 70,6% no Terminal-Bench, e a própria Anthropic diz que Sonnet 5.5 e Opus 5.5 seguem sendo a melhor escolha para programação agêntica complexa.</p>
    <p>Clientes citados no anúncio relatam ganhos de velocidade: a Asana informou latência mais de 30% menor nas tarefas, e a Box mediu 11 pontos a mais que o Haiku 4.5 com cerca de metade da latência. Esses números vêm das próprias empresas, citados pela Anthropic, e não de uma avaliação independente.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa a API da Anthropic em automações, atendimento ou análise de documentos no Brasil, o Haiku 5.5 tende a ser a opção para tarefas simples e repetitivas, em que o custo por chamada pesa mais que a qualidade máxima. Um fluxo que classifica mensagens, resume e-mails ou extrai dados de formulários pode rodar por uma fração do custo anterior. O texto sobre <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">como usar IA para reduzir custos operacionais em pequenos negócios</a> mostra onde esse tipo de economia costuma aparecer.</p>
    <p>A lógica de usar um modelo pequeno como subagente também importa para quem monta agentes. Em vez de pagar o modelo mais caro para cada passo, o fluxo pode reservar o modelo maior para decisões difíceis e delegar as tarefas mecânicas ao menor. Essa estratégia aparece também na <a href="/noticias/anthropic-openai-guerra-precos-opus-5-5-gpt-6-sol-luna">guerra de preços entre Anthropic e OpenAI</a>, que já vinha empurrando os valores para baixo.</p>
    <p>Quem é só usuário final do Claude no navegador ou no celular não deve sentir mudança imediata, já que o anúncio não confirma a chegada aos aplicativos. Vale conferir nos próximos dias. Para comparar o Claude com outras ferramentas, o guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> continua sendo uma boa referência.</p>

    <h2>Segurança e limites do modelo</h2>
    <p>A Anthropic afirma que o Haiku 5.5 melhora de forma importante nas avaliações de alinhamento em relação ao Haiku 4.5, com menos comportamentos desalinhados e menos disposição para cooperar com usos indevidos. As salvaguardas de cibersegurança são mais restritivas que as do Haiku 4.5 e menos que as do Sonnet 5.5: permitem uma gama maior de tarefas defensivas, mas continuam bloqueando testes de invasão e técnicas semelhantes. Organizações podem se candidatar aos programas de verificação de ciências da vida e de cibersegurança. Os detalhes estão no documento técnico do modelo, o chamado system card.</p>
    <p>O anúncio traz ainda um benefício para assinantes: usuários do plano Max 5x recebem US$ 100 em créditos mensais de API, os do Max 20x recebem US$ 200, e assinantes do plano Team recebem até US$ 500 compartilhados entre os usuários.</p>

    <h2>O que observar daqui para frente</h2>
    <p>O primeiro ponto é a validação independente. Os números de desempenho vêm da própria Anthropic e de clientes parceiros, e testes de terceiros em tarefas em português mostrarão se o ganho se mantém. O segundo é o efeito do novo tokenizador no custo real: o preço por token caiu bastante, mas o número de tokens por tarefa subiu um pouco, e só o uso real revela a economia final.</p>
    <p>O terceiro é a reação dos concorrentes. Com um modelo pequeno tão barato, é provável que outras empresas respondam com cortes de preço ou novos modelos compactos, o que beneficia quem constrói produtos sobre APIs. Por fim, vale acompanhar quando e se o Haiku 5.5 aparece nos aplicativos de consumo e nos planos gratuitos.</p>
  `,
};
