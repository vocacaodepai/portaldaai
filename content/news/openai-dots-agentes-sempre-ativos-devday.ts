import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-dots-agentes-sempre-ativos-devday",
  title: "OpenAI lança Dots, agente pessoal sempre ativo, no DevDay 2026",
  summary:
    "Rodando sobre o GPT-6 Astra, o Dots ganha computador e navegador próprios para trabalhar em segundo plano e concorre direto com o Muse, da Meta.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/",
  date: "2026-09-29",
  content: `
    <p>A OpenAI apresentou o Dots nesta terça-feira (29), durante o keynote do DevDay 2026, seu novo agente pessoal de inteligência artificial. Diferente do assistente que só responde quando você pergunta, o Dots roda sobre o modelo GPT-6 Astra e foi pensado para ficar ativo o tempo todo, cuidando de tarefas que você delega e avisando quando termina, com um computador e um navegador próprios na nuvem para executar o trabalho sem depender do seu aparelho ligado.</p>
    <p>Segundo a <a href="https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/" rel="noopener noreferrer nofollow">reportagem da TechCrunch</a>, o Dots já está disponível a partir desta terça para assinantes dos planos ChatGPT Pro e Business Premium em mercados elegíveis, podendo ser acionado tanto pelo ChatGPT quanto pelo Codex. A ferramenta se conecta a mais de 4 mil aplicativos, permite conversas dentro do Slack e do Teams, e a OpenAI já trabalha com a Microsoft para integrar o agente ao Agent 365, plataforma corporativa de gestão de agentes de IA.</p>

    <h2>Mais um agente sempre ativo na disputa</h2>
    <p>O Dots chega poucas semanas depois de a Meta lançar o Muse, agente pessoal que rapidamente <a href="/noticias/meta-muse-ultrapassa-chatgpt-app-mais-baixado-ios">ultrapassou o ChatGPT como app gratuito mais baixado nos Estados Unidos</a>, mas também enfrentou uma sequência de problemas de segurança, incluindo um <a href="/noticias/pesquisador-exporta-6gb-arquivos-agente-muse-meta">vazamento de 6,8 GB de arquivos internos</a> e a exposição de dados de endereço em uma venda. A xAI, de Elon Musk, também aposta na mesma frente com o <a href="/noticias/grok-bot-conecta-conta-bancaria-cartao-investimentos">Grok Bot conectado a conta bancária e cartão</a>. A OpenAI chega depois, mas com a vantagem de reaproveitar a base de usuários do ChatGPT e a rede de mais de 800 milhões de usuários semanais que a empresa já reivindica.</p>
    <p>A escolha de rodar o Dots sobre o GPT-6 Astra também chama atenção porque é o mesmo modelo por trás da versão de segurança cibernética anunciada pela empresa, e não o GPT-6.1 Astra, que a própria OpenAI <a href="/noticias/openai-cancela-lancamento-gpt-6-1-astra-seguranca">cancelou dias antes por falha em testes de alinhamento</a>. Isso sugere que a companhia optou por lançar o agente sobre uma base já validada, em vez de esperar a versão seguinte, mais uma pista de que a corrida por lançar o "assistente sempre ligado" primeiro pesou na decisão de calendário.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você trabalha com marketing, atendimento, vendas ou qualquer rotina cheia de tarefas repetitivas, um agente que continua trabalhando depois que você fecha o notebook muda a forma de organizar o dia: em vez de abrir o ChatGPT toda hora para pedir algo, você delega um objetivo e confere o resultado depois, parecido com gerenciar um assistente júnior remoto. Para quem já testa <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">a diferença entre chatbot e automação</a>, o Dots empurra ainda mais a linha para o lado da automação real, já que ele age sozinho em navegador e apps sem precisar de comando a cada passo.</p>
    <p>Para quem pensa em <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">vender agentes de IA personalizados como serviço</a>, essa é mais uma prova de que grandes empresas estão validando esse formato de produto, o que tende a aquecer a demanda por profissionais que sabem configurar, treinar e conectar agentes a fluxos de trabalho reais de pequenas e médias empresas no Brasil. O detalhe da disponibilidade só nos planos mais caros (Pro e Business Premium) também é um sinal de para onde vai o modelo de cobrança: acesso a agente autônomo tende a continuar mais caro que o chat tradicional por um bom tempo.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Vale acompanhar três pontos: se a OpenAI vai repetir os mesmos tropeços de segurança do Muse agora que o Dots tem permissão para agir em nome do usuário em múltiplos apps; se o suporte a SMS prometido pela empresa chega ao Brasil; e se o preço do acesso desce dos planos corporativos para o ChatGPT Plus, hoje mais popular por aqui. Enquanto isso, empresas que já usam agentes internos, como fez o <a href="/noticias/salesforce-lanca-sete-agentes-ia-agentforce">Salesforce com o Agentforce</a> ou a própria <a href="/noticias/microsoft-relanca-copilot-super-app-agentes-autopilot">Microsoft com o Copilot renovado</a>, mostram que a disputa não é mais só por qual modelo responde melhor, e sim por qual agente consegue de fato terminar uma tarefa do início ao fim sem supervisão constante.</p>

    <h2>O que muda na forma de configurar um agente</h2>
    <p>Um detalhe pouco comentado, mas relevante para quem já mexe com automação, é a forma como o Dots é configurado: em vez de escrever um prompt gigante toda vez, o usuário define um objetivo permanente (por exemplo, monitorar preços de concorrentes, organizar a caixa de entrada ou preparar um relatório semanal) e o agente decide sozinho os passos necessários para chegar lá, revisando o próprio trabalho e voltando a executar quando encontra um erro no meio do caminho. Isso aproxima o Dots do conceito de "agente com memória de objetivo", diferente de assistentes que esquecem o contexto assim que a conversa termina.</p>
    <div class="callout-box">
      <span class="callout-label">Ponto de atenção</span>
      Como o Dots ganha acesso a navegador e a mais de 4 mil aplicativos em nome do usuário, especialistas em segurança já recomendam revisar com cuidado quais permissões conceder logo na configuração inicial, e nunca liberar acesso a conta bancária ou pagamento sem entender exatamente que tipo de ação o agente pode tomar sozinho.
    </div>
    <p>Essa cautela existe porque agentes autônomos desse tipo já mostraram falhas em outras plataformas neste ano. A própria OpenAI reconheceu publicamente incidentes de comportamento fora do esperado antes do lançamento do Dots, e a Meta precisou lidar com problemas parecidos no Muse. Para quem for adotar o agente no trabalho, a recomendação prática é começar com tarefas de baixo risco (organização de agenda, resumo de e-mails, pesquisa de preços) antes de delegar qualquer coisa que envolva dinheiro ou dados sensíveis de cliente.</p>
  `,
  faq: [
    {
      question: "O que é o Dots, da OpenAI?",
      answer: "É um agente pessoal de inteligência artificial que roda sobre o modelo GPT-6 Astra, fica ativo continuamente com um computador e navegador próprios na nuvem, e executa tarefas delegadas pelo usuário em mais de 4 mil aplicativos, incluindo Slack e Teams.",
    },
    {
      question: "Quem pode usar o Dots agora?",
      answer: "Por enquanto, o acesso é limitado a assinantes dos planos ChatGPT Pro e Business Premium em mercados elegíveis, acionado pelo ChatGPT ou pelo Codex.",
    },
    {
      question: "Como o Dots se compara ao Muse, da Meta?",
      answer: "Os dois são agentes pessoais sempre ativos com objetivo parecido, mas o Muse já enfrentou vazamentos de dados e falhas de segurança desde o lançamento, enquanto o Dots chega depois, sobre um modelo que a OpenAI diz já ter passado por testes de alinhamento.",
    },
  ],
};
