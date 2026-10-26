import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "agents-md-downloads-sequestra-agentes-codigo-forever-security",
  title: "Arquivo AGENTS.md na pasta Downloads sequestra agentes de código",
  summary:
    "A Forever Security achou um AGENTS.md malicioso na pasta Downloads de um cliente. No Codex, o malware rodou em mais de 90% dos testes. Veja como se proteger.",
  author: "Bruno Danello",
  sourceName: "Forever Security",
  sourceUrl: "https://forever.security/blog/hijacking-ai-agents-via-downloads-folder",
  date: "2026-10-25",
  publishedAt: "2026-10-25T22:40:00-03:00",
  topic: "seguranca",
  imageQuery: "programador notebook código segurança",
  content: `
    <p>Um arquivo de texto que parece inofensivo pode virar uma ordem para o seu assistente de programação. A Forever Security, empresa que monitora riscos de agentes de IA, publicou na quinta-feira (22) uma pesquisa em que descreve um ataque real: um arquivo <strong>AGENTS.md</strong> malicioso, largado na pasta <code>~/Downloads</code> de um cliente, que tentou fazer um agente de código instalar um pacote de malware. A <a href="https://forever.security/blog/hijacking-ai-agents-via-downloads-folder" rel="noopener noreferrer nofollow" target="_blank">pesquisa original</a> foi retomada neste domingo (25) pelo site BleepingComputer, que também confirmou a parte da pesquisa que dá para testar sem risco.</p>

    <h2>O que a Forever Security encontrou</h2>
    <p>Segundo os pesquisadores Gal Weizman e Omer Samet, o alerta começou quando a plataforma da empresa barrou, no meio de uma sessão, um agente de código que ia instalar o <code>function-color</code>, um pacote malicioso do npm de uma campanha que passou quase dois anos sem ser notada, até ser documentada publicamente. Instalar pacote ruim é um problema comum. O que chamou a atenção foi a origem da ordem: não veio de uma dependência nem de um repositório, mas de um AGENTS.md na pasta Downloads do cliente.</p>
    <p>O arquivo se passava por um documento de "diretrizes de engenharia", longo e banal, com uma única seção perto do fim, apresentada como preparação de ambiente. Essa seção mandava o agente registrar, na configuração dele mesmo, um suposto servidor de ferramentas do projeto, que na prática disparava a instalação do pacote malicioso. Ninguém sabe quem colocou o arquivo ali.</p>

    <h2>Por que a pasta Downloads é o ponto fraco</h2>
    <p>O AGENTS.md, e arquivos parecidos como o CLAUDE.md, existem para dar instruções a agentes: quais comandos de teste rodar, que convenções seguir, quais ferramentas usar. O agente foi feito para obedecer a esse arquivo na pasta em que é aberto. Em uma pasta de projeto que você controla, isso é bom, porque você viu o conteúdo e confia nele.</p>
    <p>A Downloads é diferente. Para os pesquisadores, é a única pasta em que a web consegue gravar sozinha. Chrome, Edge e Firefox salvam downloads ali por padrão, sem perguntar, e só mostram uma notificação. O BleepingComputer testou uma página de demonstração que baixou em silêncio um AGENTS.md com texto inofensivo. O Brave, que pede aprovação antes de baixar, foi a exceção. Os pesquisadores resumem a ideia numa frase: Markdown é o novo executável. O arquivo não é um programa, então as proteções que o sistema operacional aplica a executáveis não se aplicam, mas, nas mãos de um agente, as instruções dele são cumpridas.</p>

    <h2>O que os testes mostraram no Codex e no Claude Code</h2>
    <p>A equipe reproduziu o ataque em duas ferramentas, segundo a pesquisa e o relato do BleepingComputer:</p>
    <ul>
      <li><strong>OpenAI Codex:</strong> usando o arquivo real encontrado no cliente, dentro de uma máquina virtual isolada, o Codex executou o código do atacante em mais de 90% das tentativas. O agente editou o arquivo de configuração global dele (<code>~/.codex/config.toml</code>), o que faz o servidor malicioso ser carregado em qualquer pasta e em qualquer projeto depois disso. Com uma carga inofensiva que apenas abria a calculadora, o BleepingComputer registra 90% de sucesso.</li>
      <li><strong>Claude Code:</strong> um CLAUDE.md malicioso redirecionou o tráfego de API do agente para um servidor controlado pelos pesquisadores. Isso expôs o token de login do agente e permitiu devolver chamadas de ferramenta que executaram código em cerca de 50% dos testes.</li>
    </ul>
    <p>A empresa diz que não há o que a OpenAI ou a Anthropic corrigirem, porque os agentes fizeram exatamente o que foram projetados para fazer. O risco está na circunstância: uma pasta onde a web escreve, tratada como se fosse sua. Também alerta que o ataque não exige clique nem erro de ninguém, e que pode acontecer sem ninguém olhando quando o próprio agente navega pela internet e visita um site.</p>

    <h2>Quantas pessoas trabalham assim</h2>
    <p>A Forever diz que, na telemetria dela, cerca de metade dos clientes roda um agente de código dentro da pasta Downloads, e que aproximadamente um quarto das sessões de agente abre um navegador de verdade. Segundo o BleepingComputer, só o Claude Code teve mais de 1.300 sessões iniciadas nesse local, e também aparecem Codex e Cursor CLI. Esses números são da própria empresa de segurança, vêm da base de clientes dela e não foram verificados por terceiros. Também vale lembrar que o ataque exige que alguém abra o agente exatamente naquela pasta, o que, segundo os pesquisadores, é comum quando se pede à IA para organizar ou processar downloads.</p>

    <h2>Como se proteger</h2>
    <p>As recomendações que aparecem na cobertura são simples e servem para qualquer ferramenta de agente:</p>
    <ul>
      <li>não abra o agente na pasta Downloads, na sua pasta pessoal nem em pastas muito amplas;</li>
      <li>inicie o agente sempre na raiz do projeto em que ele vai trabalhar, como a OpenAI e a Anthropic já recomendam;</li>
      <li>leia qualquer AGENTS.md, CLAUDE.md ou arquivo parecido que você não escreveu antes de deixar o agente segui-lo;</li>
      <li>mantenha ligados os pedidos de aprovação e a proteção de sandbox;</li>
      <li>teste código desconhecido em ambiente isolado antes de rodar na sua máquina principal.</li>
    </ul>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa um agente de código para trabalhar, seja para programar, automatizar planilhas ou organizar arquivos, ele tem as mesmas permissões que você na sua máquina. Uma instrução escondida em arquivo de texto pode usar essas permissões para instalar programas, mexer em configurações ou expor o seu acesso. O hábito de abrir o agente "onde estiver" é cômodo e, a partir de agora, é um risco documentado.</p>
    <p>Para quem presta serviço com IA, esse cuidado também é profissional: se você cria automações para clientes, trabalha com arquivos recebidos deles ou monta agentes personalizados, um acesso comprometido vira problema do cliente. Vale ler o guia de <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection, o risco de a IA ler páginas e e-mails</a>, que explica a mesma família de ataque, e o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA com segurança</a>. Quem pretende vender esse tipo de trabalho encontra um ponto de partida em <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como criar e vender agentes de IA personalizados</a>.</p>
    <p>O tema conversa com outras notícias recentes sobre segurança de agentes: sites que <a href="/noticias/agentes-ia-injecao-prompt-cabecalhos-http-sites">já escondem ordens para agentes em cabeçalhos HTTP</a>, o <a href="/noticias/agente-atacante-modo-skynet-sequestra-modelos-expostos-symantec">agente atacante que sequestra modelos expostos</a> e a plataforma <a href="/noticias/1password-for-agents-senhas-agentes-ia">1Password for Agents</a>, que tenta resolver o acesso de agentes a contas sem entregar a senha. O padrão é o mesmo: quanto mais autonomia o agente ganha, mais vale cuidar do que ele lê e de onde ele roda.</p>

    <div class="callout-box"><span class="callout-label">Fonte original</span>Pesquisa da <a href="https://forever.security/blog/hijacking-ai-agents-via-downloads-folder" rel="noopener noreferrer nofollow" target="_blank">Forever Security</a>, de 22 de outubro de 2026, com cobertura do <a href="https://www.bleepingcomputer.com/news/security/ai-coding-agents-hijacked-using-agentsmd-file-in-downloads-folder/" rel="noopener noreferrer nofollow" target="_blank">BleepingComputer</a> de 25 de outubro.</div>
  `,
};
