import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-lanca-dots-agente-sempre-ativo",
  title: "OpenAI lança Dots, agente de IA sempre ativo que trabalha em segundo plano",
  summary:
    "Rodando sobre o GPT-6 Astra, o Dots monitora e-mail e Slack, faz ligações e age sozinho dentro de regras definidas pelo usuário, no Pro e Business Premium.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/",
  date: "2026-09-29",
  content: `
    <p>A OpenAI lançou nesta terça-feira (29), durante seu evento anual para desenvolvedores, o Dots, um agente de IA pessoal que roda em segundo plano o tempo todo, sem esperar comando para agir. Segundo a <a href="https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/" rel="noopener noreferrer nofollow">reportagem da TechCrunch</a>, o Dots é movido pelo GPT-6 Astra e ganha um computador na nuvem e um navegador próprios, podendo se conectar a mais de 4 mil aplicativos do ecossistema da empresa.</p>
    <p>Diferente do ChatGPT comum ou do Codex, o Dots não depende de uma tela aberta para funcionar: ele lê e-mail e Slack por conta própria, sinaliza só o que considera importante e, seguindo regras padrão definidas pela OpenAI, pede aprovação antes de agir em situações mais sensíveis. O usuário também pode criar regras próprias para liberar, travar ou exigir confirmação em ações específicas. A ferramenta está disponível a partir de hoje para assinantes dos planos Pro e Business Premium do ChatGPT em mercados elegíveis, com acesso pelo próprio ChatGPT, por chamada de voz, ou por mensagem no Slack e no Microsoft Teams.</p>

    <h2>Contexto: a corrida dos agentes com cara e nome próprios</h2>
    <p>O Dots chega numa semana de disputa acirrada entre gigantes de IA por esse tipo de assistente autônomo. Poucos dias antes, a Manus lançou o Cue, <a href="/noticias/manus-lanca-cue-agente-pessoal-telefone-carteira">agente pessoal com telefone, e-mail e carteira digital próprios</a>, capaz de ligar, mandar mensagem e pagar contas dentro de um limite definido pelo usuário. Antes disso, o Muse, da Meta, <a href="/noticias/meta-muse-ultrapassa-chatgpt-app-mais-baixado-ios">chegou a ultrapassar o ChatGPT como app mais baixado no iOS</a>, mas também <a href="/noticias/meta-muse-vaza-endereco-vende-errado-marketplace">vazou o endereço de um usuário e vendeu um item errado no Facebook Marketplace</a>, episódio que levou a própria Meta a <a href="/noticias/meta-reforca-aviso-seguranca-muse-apos-vulnerabilidade">reforçar avisos de segurança do agente</a>. A TechCrunch nota que o design do Dots, com um avatar de bolinhas flutuantes, lembra propositalmente o estilo cartunesco do Muse, numa disputa que já passa pela personalidade visual do agente, não só pela capacidade técnica.</p>
    <p>A OpenAI também posiciona o Dots como algo além de "especialistas" individuais: a ideia declarada é permitir, no futuro, que vários Dots com identidades e credenciais próprias trabalhem em conjunto num mesmo fluxo, e a empresa já sinaliza integração futura com os controles de segurança do Microsoft Agent 365. A TechCrunch cita como exemplo um desenvolvedor que usa um Dot para monitorar feedback de clientes e aplicar correções sozinho, e uma cientista que usa outro para rodar novamente análises conforme novos dados de experimento chegam.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa ChatGPT no trabalho, o Dots muda o tipo de tarefa que dá pra delegar: em vez de abrir uma conversa e esperar resposta, você define um objetivo e o agente cuida disso sozinho por horas ou dias, avisando só quando algo precisa da sua decisão. Isso vale tanto para quem trabalha em equipe (monitorar Slack e e-mail sem check-in manual) quanto para quem empreende sozinho e precisa de alguém, ou algo, cuidando de tarefas recorrentes enquanto foca no que só um humano resolve. Antes de dar esse tipo de autonomia a um agente, vale aplicar o mesmo cuidado que já recomendamos no <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">guia de como configurar seu primeiro assistente de IA pessoal</a>: comece com regras restritivas e vá liberando conforme ganha confiança no comportamento dele.</p>
    <p>Para quem presta serviço de automação ou consultoria em IA para pequenos negócios, o lançamento também é um sinal de mercado: agentes que agem sozinhos, com regras de governança embutidas, tendem a virar padrão nos próximos meses, e entender a diferença entre um chatbot, uma automação e um agente de verdade, como explicamos no <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">guia sobre agente, chatbot e automação</a>, ajuda a posicionar melhor o que você vende para o cliente.</p>

    <h2>Como configurar um agente assim sem tomar susto</h2>
    <p>Quem for testar o Dots, ou qualquer agente parecido, ganha mais segurança seguindo uma ordem simples. Primeiro, conecte só as contas que realmente precisam de monitoramento contínuo, em vez de liberar acesso a tudo de uma vez. Depois, revise as regras padrão de aprovação antes de qualquer coisa: ações que envolvem dinheiro, envio de mensagem para terceiros ou alteração de dado sensível merecem ficar no modo "pedir confirmação" por padrão, mesmo que isso signifique receber mais notificações no começo. Só depois de acompanhar o comportamento do agente por alguns dias, e confirmar que ele erra pouco, vale liberar mais autonomia. Essa lógica de começar restrito e ir soltando aos poucos é a mesma que recomendamos para qualquer automação que mexe com dado real de cliente ou de empresa.</p>
    <table>
      <tr><th>Recurso</th><th>Dots (OpenAI)</th><th>Cue (Manus)</th><th>Muse (Meta)</th></tr>
      <tr><td>Modelo por trás</td><td>GPT-6 Astra</td><td>Arquitetura Cascade</td><td>Modelo próprio da Meta</td></tr>
      <tr><td>Identidade própria</td><td>Sim, com credenciais e "especialistas"</td><td>Telefone, e-mail e carteira próprios</td><td>Avatar cartunesco no app</td></tr>
      <tr><td>Onde funciona</td><td>ChatGPT, Slack, Teams</td><td>Web, desktop e futuramente iOS</td><td>App próprio no Facebook</td></tr>
      <tr><td>Disponibilidade</td><td>Pro e Business Premium</td><td>Acesso antecipado</td><td>Público, com restrições após falhas</td></tr>
    </table>

    <h2>O que observar daqui pra frente</h2>
    <p>A disponibilidade inicial restrita aos planos mais caros do ChatGPT (Pro e Business Premium) sugere que a OpenAI ainda está testando o comportamento do Dots em produção antes de abrir para o público geral, algo parecido com o cuidado que a própria empresa já demonstrou ao <a href="/noticias/openai-pausa-treinamento-agentes-sites-governo-eua">pausar treinamento após agentes fugirem do roteiro em sites do governo americano</a>. Vale acompanhar se episódios de falha, como os que já aconteceram com o Muse, também vão aparecer com o Dots, e se as regras de aprovação padrão realmente seguram ações arriscadas antes que causem prejuízo ao usuário. A expansão prometida para números de texto e para integração com o Microsoft Agent 365 também é um indicativo de que a OpenAI quer o Dots dentro do ambiente corporativo, não só como curiosidade de uso pessoal, o que deve acelerar essa disputa com Manus e Meta nos próximos meses.</p>
  `,
  faq: [
    {
      question: "O que é o Dots, da OpenAI?",
      answer: "É um agente de IA pessoal, movido pelo GPT-6 Astra, que trabalha em segundo plano de forma contínua, monitorando e-mail e mensagens e agindo por conta própria dentro de regras definidas pelo usuário.",
    },
    {
      question: "Quem pode usar o Dots agora?",
      answer: "Por enquanto, apenas assinantes dos planos Pro e Business Premium do ChatGPT, em mercados elegíveis, a partir de 29 de setembro de 2026.",
    },
    {
      question: "O Dots pode agir sem pedir permissão?",
      answer: "Em ações mais sensíveis, ele pede aprovação por padrão. O usuário pode criar regras próprias para liberar, bloquear ou exigir confirmação em ações específicas.",
    },
  ],
};
