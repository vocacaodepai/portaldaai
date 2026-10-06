import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-cowork-nuvem-pro-max-outubro",
  title: "Claude Cowork passa a rodar na nuvem para planos Pro e Max",
  summary: "Desde 6 de outubro, novas tarefas do Claude Cowork nos planos Pro e Max da Anthropic rodam nos servidores da empresa, não mais no computador do usuário.",
  author: "Bruno Danello",
  sourceName: "Central de ajuda da Anthropic",
  sourceUrl: "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork",
  date: "2026-10-05",
  imageQuery: "Anthropic office San Francisco",
  topic: "lancamentos",
  content: `
    <p>A partir desta terça-feira (6), as novas tarefas criadas no Claude Cowork pelos planos Pro e Max da Anthropic passam a rodar exclusivamente nos servidores da empresa, em vez de rodar localmente no computador do usuário. Segundo a <a href="https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork" target="_blank" rel="noopener noreferrer nofollow">central de ajuda da Anthropic</a>, a mudança remove a opção "Somente no seu computador", que ficava em Configurações, dentro da aba Geral, para quem está nesses dois planos.</p>

    <p>O Cowork é o recurso de agente da Anthropic que executa tarefas de várias etapas sozinho, como montar planilhas com fórmulas, organizar arquivos, criar apresentações e sintetizar pesquisas, em vez de responder a comandos isolados um por um. Com a mudança, segundo a própria documentação da empresa, "sessões e arquivos passam a viver na conta Claude do usuário e acompanham ele entre desktop, web e celular", o que elimina a dependência de manter o computador ligado para o trabalho continuar.</p>

    <h2>O que muda, o que fica igual e quem é afetado</h2>
    <p>Tarefas que já estavam em andamento no computador do usuário continuam exatamente onde estavam, rodando localmente até terminarem, e é possível baixar o histórico de qualquer tarefa local já existente. A mudança vale só para tarefas novas, criadas a partir de hoje, nos planos Pro (assinatura individual) e Max (nas variantes 5x e 20x). Quem usa a versão gratuita do Claude não tem acesso ao Cowork e, portanto, não é afetado por essa mudança específica.</p>
    <p>Mesmo com a tarefa rodando na nuvem, algumas capacidades continuam exigindo o aplicativo de desktop aberto: acesso a arquivos locais, automação de navegador e os recursos de "computer use", em que o Claude controla a tela do próprio computador. Ou seja, a tarefa em si passa a executar no servidor da Anthropic, mas qualquer interação direta com o sistema operacional do usuário ainda depende do aplicativo rodando na máquina.</p>

    <h2>Por que a Anthropic está centralizando o processamento</h2>
    <p>Rodar tarefas de agente localmente tem um custo prático conhecido de quem já testou recursos parecidos em outras ferramentas de IA: o processo trava se o notebook for fechado, perde a conexão de internet ou entra em modo de economia de energia, e tarefas agendadas simplesmente não disparam se a máquina estiver desligada no horário marcado. Mover a execução para a nuvem resolve esse problema de continuidade, mas também dá à Anthropic mais controle sobre o ambiente de execução, o que ajuda a padronizar segurança e desempenho entre milhões de sessões simultâneas, em vez de depender da configuração de hardware de cada usuário.</p>
    <p>A mudança acompanha um movimento mais amplo da empresa para consolidar a infraestrutura de produto em volta da própria nuvem, visível também em notícias recentes como a <a href="/noticias/anthropic-india-inferencia-local-claude-bedrock">expansão da Anthropic para infraestrutura de inferência local na Índia via AWS Bedrock</a>, outra decisão guiada por continuidade de serviço e previsibilidade de custo em escala global. Também reforça a diferença entre Cowork e outras formas de uso de IA no dia a dia, tema explorado em detalhe no artigo sobre a <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">diferença entre agente de IA, chatbot e automação simples</a>: o Cowork se encaixa na categoria de agente que planeja e executa etapas sozinho, não na de um chatbot que só responde perguntas.</p>

    <h2>Por que isso importa para quem usa Claude para trabalhar no Brasil</h2>
    <p>Para quem usa Claude Pro ou Max no Brasil para automatizar tarefas de trabalho, como organizar planilhas financeiras, preparar apresentações para clientes ou rodar pesquisas recorrentes, a mudança é mais prática do que técnica: significa poder disparar uma tarefa pelo celular ou pelo navegador no trabalho, fechar o notebook ao sair de casa e encontrar o resultado pronto depois, sem precisar deixar a máquina ligada a noite toda. Isso se aproxima do que já é possível em outras ferramentas, como mostra o guia sobre como <a href="/artigos/claude-app-celular-controlar-outros-apps">controlar outros aplicativos pelo Claude no celular</a>, e amplia o caso de uso de automação com IA discutido em <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">como a automação com IA pode economizar horas de trabalho por semana</a>.</p>
    <p>Há também um ponto de atenção para quem lida com dados sensíveis de clientes ou da própria empresa: rodar a tarefa no servidor da Anthropic, em vez de localmente, muda onde esses dados circulam durante o processamento. Para a maioria dos usos do dia a dia isso não representa risco adicional relevante, já que o Claude já processa prompts nos servidores da empresa mesmo na versão de chat comum, mas vale revisar políticas internas de dados antes de conectar pastas inteiras do computador ou arquivos com informação confidencial ao Cowork, principalmente em empresas que têm regras específicas de compliance.</p>

    <h2>Como isso se compara a outros agentes de produtividade</h2>
    <p>A corrida para colocar agentes de IA rodando continuamente na nuvem, sem depender do dispositivo do usuário, não é exclusividade da Anthropic. Concorrentes diretos também vêm empurrando produtos nessa direção, o que faz parte de uma comparação mais ampla sobre <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">qual IA escolher entre ChatGPT, Claude e Gemini</a> dependendo do tipo de tarefa que a pessoa quer automatizar. A diferença prática que o usuário brasileiro deve observar na hora de decidir qual ferramenta usar é menos sobre qual empresa tem o agente mais rápido e mais sobre qual delas oferece histórico de execução confiável, suporte a agendamento de tarefas recorrentes e integração com os aplicativos que a pessoa já usa no trabalho, tema também abordado no panorama sobre <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o futuro do trabalho autônomo</a>.</p>
    <p>Nas próximas semanas, vale observar se a Anthropic estende a mesma mudança para o plano gratuito do Claude, se outros concorrentes anunciam movimentos parecidos de centralização na nuvem para seus próprios agentes, e se usuários corporativos relatam algum problema de latência ou disponibilidade nos primeiros dias da transição, já que mover milhões de sessões de uma vez para a infraestrutura própria da empresa costuma expor picos de demanda que não apareciam quando o processamento estava distribuído em cada computador individual.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Secretary_of_State_Peter_Kyle_visits_Anthropic_in_San_Francisco._%2854098999333%29.jpg" alt="Visita a escritório da Anthropic em São Francisco" />
      <figcaption>Foto: Alecsandra Dragoi / DSIT / Wikimedia Commons (CC BY 2.0)</figcaption>
    </figure>

    <div class="callout-box">
      <span class="callout-label">Resumo prático</span>
      <p>Só tarefas novas do Cowork, criadas a partir de 6 de outubro, nos planos Pro e Max, passam a rodar na nuvem da Anthropic. Tarefas antigas continuam no computador até terminarem, e recursos como acesso a arquivos locais e automação de navegador ainda exigem o aplicativo de desktop aberto.</p>
    </div>
  `,
};
