import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-android-studio-traga-seu-proprio-agente-claude-codex",
  title: "Android Studio deixa usar Claude e Codex como agentes dentro do IDE",
  summary:
    "No Android Dev Summit, o Google liberou o Bring Your Own Agent no Android Studio e lançou plugin do Android CLI para Claude Code e Codex e novas APIs.",
  author: "Bruno Danello",
  sourceName: "The Decoder",
  sourceUrl: "https://the-decoder.com/google-opens-android-development-to-third-party-ai-agents-and-unveils-new-gemini-apis/",
  date: "2026-10-29",
  publishedAt: "2026-10-29T03:45:00-03:00",
  topic: "lancamentos",
  imageQuery: "Android Studio logo",
  content: `
    <p>O Google usou o Android Dev Summit, relatado nesta quarta-feira (28), para concentrar suas ferramentas de desenvolvimento em agentes de IA. A principal mudança é que o Android Studio, o ambiente oficial para criar aplicativos Android, deixa de ficar preso às ferramentas de IA do próprio Google e passa a aceitar agentes de terceiros, como o Claude Agent, da Anthropic, e o Codex, da OpenAI. A novidade foi detalhada pelo The Decoder. Esta matéria é uma análise própria a partir desse relato; o crédito da fonte está no fim do texto.</p>

    <p>Quem programa com IA já usa agentes no terminal ou em editores como o Cursor. Agora, quem cria apps para Android ganha a opção de trazer o agente favorito para dentro do ambiente oficial, com acesso a recursos que antes só as ferramentas do Google enxergavam.</p>

    <h2>Android Studio Rabbit 2 e o "Bring Your Own Agent"</h2>
    <p>Segundo o relato, a versão Android Studio Rabbit 2 traz o recurso Bring Your Own Agent, algo como "traga o seu próprio agente". Os agentes se conectam pelo Agent Client Protocol (ACP), um padrão aberto, e mais de 40 agentes de código já podem rodar dentro do IDE. Pelo marketplace embutido estão disponíveis o Claude Agent, o Codex e o Google Antigravity, e vários deles podem funcionar ao mesmo tempo.</p>

    <p>Os agentes recebem acesso a ferramentas do próprio IDE, como a estrutura do projeto, a resolução de símbolos do código, o emulador e o Logcat, o painel de mensagens do sistema Android. Na prática, o agente deixa de trabalhar às cegas sobre arquivos soltos e passa a enxergar o app como o desenvolvedor enxerga.</p>

    <p>O Google também apresentou o Android Bench 2.0, um ranking que avalia modelos de IA em projetos de desenvolvimento longos, de vários dias, medindo funcionalidade, tempo gasto e custo. Há ainda o Change Review, que analisa alterações pendentes, gera relatos de bugs e explica as mudanças passo a passo, e um assistente de migração na versão Canary que converte layouts antigos em XML para o Jetpack Compose. Em testes, está o Lightbuild, um sistema de build declarativo, em YAML, que humanos e agentes conseguem ler e editar.</p>

    <h2>Android CLI vira plugin para Claude Code e Codex</h2>
    <p>Para quem prefere o terminal ou usa integração contínua, o Android CLI foi ampliado e agora é um plugin oficial para o Claude Code, o Codex e o Antigravity. Entre os destaques, a renderização de prévias do Compose permite que o agente confira mudanças de interface sem abrir um emulador. Em testes internos do Google, os agentes terminaram tarefas de interface 77% mais rápido e gastaram até três vezes menos tokens.</p>

    <p>O CLI também ganhou o streaming de dispositivos, do Google Labs, para o agente investigar bugs em aparelhos físicos de teste, e passou a incluir o LeakCanary, detector aberto de vazamentos de memória, também integrado ao Profiler do Android Studio. Os dumps de memória são analisados no computador do desenvolvedor, e não no celular, o que evita que o teste deixe o app lento. Num teste A/B do Google com o Claude Opus 5.5, o CLI achou e corrigiu vazamentos quase duas vezes mais rápido e usou cerca de 25% menos tokens. Outros comandos capturam traces do sistema, puxam relatórios de falhas do Firebase Crashlytics e verificam a otimização do código com o compilador R8.</p>

    <p>Outra peça são as Android Skills: mais de 30 pacotes que alimentam o agente com documentação atual. Há exemplos como checar as políticas do Google Play antes de enviar o app, tratar problemas de segurança de permissões e adaptar telas para dobráveis e notebooks chamados de "Googlebooks". Para quem já conhece o conceito, o <a href="/noticias/anthropic-doa-agent-skills-agentic-ai-foundation">padrão Agent Skills, doado pela Anthropic à fundação do MCP</a>, segue a mesma lógica de entregar conhecimento atualizado ao agente.</p>

    <h2>Novas APIs para apps que têm agentes dentro</h2>
    <p>O Google anunciou também ferramentas para quem quer colocar IA dentro do próprio app. A Agentic API, em alfa, faz parte do ML Kit GenAI e usa o Gemini Nano 4 no próprio aparelho: executa funções automaticamente, guarda o histórico de conversa, controla o ciclo de orquestração e inclui filtros de segurança. A AppFunctions API, em beta, é construída sobre o Model Context Protocol e funciona como camada única de chamada de ferramentas, para que os apps ofereçam funções a agentes locais ou do sistema inteiro. Já o Agent-to-UI (A2UI) para Jetpack Compose, em alfa, permite que o agente exiba interfaces interativas montadas com os componentes do próprio app, em vez de responder só com texto.</p>

    <p>A Connected Apps Platform, em prévia, é a parte voltada à distribuição. Os desenvolvedores ligam seus apps por MCP do Android ou por servidores MCP na nuvem e gerenciam tudo em um único console. O Google afirma que há mais de 50 integrações parceiras, entre elas Adobe, Peloton e Experian, já ativas no app do Gemini, com expansão para a Busca nas próximas semanas. Esse tema já foi detalhado em nossa matéria sobre <a href="/noticias/google-connected-apps-platform-gemini-search-desenvolvedores">a abertura do Gemini e da Busca para apps de terceiros</a>. O padrão por trás de tudo é o MCP, que explicamos no artigo <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">MCP: o que é e como conecta agentes de IA</a>.</p>

    <h2>Óculos XREAL AURA e o resto do evento</h2>
    <p>O evento teve ainda hardware. O XREAL AURA são óculos inteligentes com fio, desenvolvidos com a XREAL e rodando Android XR, que o chefe de XR do Google, Shahram Izadi, descreve como os primeiros do tipo. Pesam menos de 95 gramas, têm lentes transparentes com escurecimento e campo de visão de 70 graus. O processamento e a bateria ficam num módulo externo que também serve de trackpad, com o novo chip Snapdragon Reality Elite. As pré-vendas estão abertas nos Estados Unidos, no Canadá e na Coreia do Sul, por US$ 1.099, com envio previsto para meados de novembro. Não há anúncio para o Brasil. Também chegaram à versão estável o Jetpack XR SDK, os emuladores de XR no Android Studio e o Engine Hub para Unity, Godot e Unreal, além do Jetpack Compose 1.13.</p>

    <h2>Por que isso importa para você</h2>
    <p>Você não precisa programar para sentir o efeito dessa mudança. Ela mostra para onde vai o desenvolvimento de software: agentes de IA de várias empresas trabalhando dentro das mesmas ferramentas, com padrões abertos, e não um assistente único imposto pelo fabricante da plataforma.</p>
    <ul>
      <li><strong>Menos dependência de um fornecedor.</strong> Quem desenvolve apps Android pode escolher o agente que prefere e trocar depois, sem mudar de IDE. Isso vale também para freelancers que cobram por app e querem entregar mais rápido.</li>
      <li><strong>Custo de tokens importa.</strong> Os números do Google sobre 77% mais velocidade e até três vezes menos tokens são de testes internos, mas apontam um caminho: ferramentas que dão ao agente o contexto certo gastam menos e erram menos. Vale medir isso no seu próprio fluxo.</li>
      <li><strong>Apps com agentes viram serviço.</strong> Saber expor as funções de um app por MCP ou AppFunctions é uma habilidade nova, que pequenas empresas vão precisar contratar. O artigo sobre <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como ganhar dinheiro criando e vendendo agentes de IA personalizados</a> mostra caminhos para isso.</li>
      <li><strong>Segurança de agentes com acesso amplo.</strong> Dar a um agente acesso ao emulador, ao projeto e a dispositivos físicos exige cuidado. Na mesma semana, a <a href="/noticias/claude-code-variavel-rm-sem-aprovacao-skip-permissions">variável do Claude Code que deixa o agente apagar arquivos sem pedir</a> lembrou que a permissão do agente precisa ser configurada com atenção.</li>
    </ul>

    <div class="callout-box callout-tip">
      <span class="callout-label">Dica prática</span>
      <p>Se você já usa o Claude Code ou o Codex em projetos Android, instale o plugin do Android CLI em um projeto de teste antes de levar para o app de produção. Rode a mesma tarefa com e sem o plugin e compare tempo e consumo de tokens. Assim você confirma na prática se o ganho anunciado aparece no seu caso.</p>
    </div>

    <h2>O que observar a seguir</h2>
    <p>O primeiro ponto é a disponibilidade: o relato fala em recursos em estágios diferentes, de estável a alfa, e vale conferir na documentação oficial do Android o que já está liberado para a sua versão do Android Studio. O segundo é se a concorrência, como o Xcode da Apple e o Visual Studio da Microsoft, seguirá o mesmo caminho de aceitar agentes de terceiros por protocolos abertos. O terceiro é o preço: usar o Claude Agent ou o Codex dentro do IDE continua dependendo dos planos de cada empresa. Por enquanto, o essencial é este: o Android Studio Rabbit 2 aceita mais de 40 agentes via ACP, e o Android CLI virou plugin oficial do Claude Code, do Codex e do Antigravity, segundo o The Decoder.</p>
  `,
};
