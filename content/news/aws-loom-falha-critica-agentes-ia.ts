import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "aws-loom-falha-critica-agentes-ia",
  title: "AWS corrige falha nota máxima em plataforma de agentes de IA",
  summary:
    "Loom, ferramenta de código aberto da AWS Labs para orquestrar agentes de IA, tinha brecha que dava controle total do sistema sem senha.",
  author: "Bruno Danello",
  sourceName: "AWS Security Bulletins",
  sourceUrl: "https://aws.amazon.com/security/security-bulletins/2026-124-aws/",
  date: "2026-10-04",
  content: `
    <p>A AWS publicou, na sexta-feira (2), um boletim de segurança revelando três falhas no Loom, ferramenta de código aberto mantida pela AWS Labs para orquestrar agentes de inteligência artificial em produção. A mais grave, catalogada como <strong>CVE-2026-103956</strong>, recebeu a pontuação máxima possível na escala CVSS, 10 de 10, porque deixava qualquer pessoa com acesso de rede ao sistema assumir controle administrativo completo do painel de agentes sem precisar de senha nem de nenhuma credencial válida.</p>
    <p>Segundo o <a href="https://aws.amazon.com/security/security-bulletins/2026-124-aws/" target="_blank" rel="noopener noreferrer nofollow">boletim oficial da AWS</a>, a brecha afeta instalações do Loom anteriores à versão 1.6.1 que não tenham um provedor de identidade externo configurado, como um pool do Amazon Cognito. Nesse cenário, que reportagens de segurança descrevem como comum em ambientes de teste e também em implantações internas que acabam expostas por engano, qualquer requisição à API da aplicação era suficiente para obter privilégio de super-administrador sobre o plano de controle dos agentes.</p>

    <h2>O que um atacante conseguia fazer com a falha</h2>
    <p>Com acesso de super-administrador ao Loom, um atacante tinha três caminhos diretos de abuso. O primeiro era registrar servidores de ferramentas falsos dentro da plataforma, o que permite inserir instruções maliciosas no fluxo de trabalho de um agente de IA sem que ninguém perceba, já que o agente passaria a confiar nesse servidor como se fosse legítimo. O segundo era ler credenciais de integração já armazenadas no sistema, como chaves de API de outros serviços conectados ao Loom. O terceiro, talvez o mais sério, era reescrever as políticas de permissão do AWS Identity and Access Management (IAM) ligadas às funções usadas pelos agentes geridos pela plataforma, o que na prática dá a um invasor a chave para expandir o próprio acesso dentro da conta AWS da vítima.</p>
    <p>O mesmo boletim lista outras duas falhas corrigidas junto, ambas presentes em versões anteriores à 1.7.0. A CVE-2026-103957 permitia que usuários autenticados com permissão de escrita em protocolos como MCP ou A2A fizessem o Loom revelar segredos e tokens de acesso OAuth2 para um endereço controlado pelo próprio atacante, explorando como o sistema processa a etapa de descoberta desse protocolo de autenticação. A CVE-2026-103958 é uma falha de falsificação de requisição do lado do servidor (SSRF, na sigla em inglês), que deixava quem tivesse permissão de escrita forçar o Loom a se conectar a destinos internos arbitrários da rede, o que pode expor credenciais temporárias da AWS associadas ao contêiner onde o sistema roda.</p>

    <h2>Por que o Loom importa, e por que isso se repete</h2>
    <p>O Loom não é um produto comercial de prateleira: é a camada de orquestração que equipes técnicas usam para registrar, conectar e monitorar vários agentes de IA trabalhando juntos, do tipo que hoje aparece em empresas que tentam automatizar atendimento, triagem de código ou tarefas internas com múltiplos agentes especializados. É exatamente esse papel central, de ponto único que enxerga credenciais e permissões de tudo que passa por ele, que torna uma falha de autenticação ali tão mais grave do que a mesma falha em um sistema isolado: comprometer o orquestrador compromete, em cascata, todos os agentes que ele administra.</p>
    <p>O caso também não é isolado. Dias antes, a AWS já havia corrigido duas vulnerabilidades no SDK em Python do Amazon Bedrock AgentCore que permitiam executar código arbitrário através do assistente que instala pacotes dentro de sessões de interpretador de código usadas por agentes, e esta mesma semana trouxe o caso do modelo Mythos, da Anthropic, que <a href="/noticias/anthropic-mythos-vulnerabilidade-rejetto-hfs-exploracao">achou uma falha crítica no servidor de arquivos Rejetto HFS</a> que atacantes já exploravam menos de 24 horas depois da divulgação. Soma-se a isso a falha batizada de <a href="/noticias/plugin4shell-falha-agentes-ia-codigo-claude-code-codex-copilot-gemini">"Plugin4Shell"</a>, que expôs diretamente os principais agentes de IA para programação, incluindo Claude Code, Codex, Copilot e Gemini, a invasão remota. O padrão que emerge é claro: a infraestrutura que dá autonomia a agentes de IA virou, ela mesma, uma superfície de ataque nova e ainda pouco testada, crescendo mais rápido do que a maturidade das práticas de segurança em torno dela.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se a sua empresa já usa ou está testando algum tipo de orquestração de agentes de IA, seja com o Loom, seja com outra ferramenta parecida, o caso é um lembrete concreto de que "ambiente interno" não é sinônimo de "seguro por padrão". A própria AWS recomenda, no boletim, configurar um provedor de identidade antes de expor o Loom além do acesso local da máquina (loopback) e desativar qualquer modo de autenticação de desenvolvimento em produção, exatamente o tipo de atalho que equipes sob pressão de prazo costumam deixar de lado até que vire incidente. Quem já tinha uma instalação vulnerável também precisa, depois de atualizar, rotacionar todos os segredos OAuth2 em uso, revogar tokens ativos e auditar os registros do AWS CloudTrail em busca de sinais de que credenciais de contêiner foram usadas de forma indevida.</p>
    <p>Para quem trabalha com IA no Brasil sem ter uma equipe de segurança dedicada, caso comum em startups e pequenas empresas que adotam agentes de IA para ganhar produtividade, o episódio reforça um ponto prático: cada peça nova de infraestrutura de agentes que entra em produção, por mais útil que seja, amplia a lista do que precisa ser configurado com cuidado e revisado com regularidade. A <a href="/noticias/microsoft-relatorio-ia-ciberataques-vantagem-atacantes">Microsoft já havia alertado que a IA deu vantagem aos atacantes</a> ao reduzir o tempo entre a descoberta de uma falha e sua exploração em massa, e ferramentas como o Loom, por concentrar tanto poder em um único ponto, são justamente o tipo de alvo que mais compensa atacar primeiro.</p>

    <h2>O que observar nas próximas semanas</h2>
    <p>A recomendação imediata para quem usa o Loom é atualizar para a versão 1.7.0, que corrige as três falhas de uma vez; quem só puder aplicar a correção da CVE-2026-103956 deve, no mínimo, ir até a 1.6.1 e tratar as outras duas como prioridade seguinte. Vale também acompanhar se outras ferramentas de orquestração de agentes de código aberto, muitas delas inspiradas no mesmo modelo de arquitetura do Loom, vão passar por auditorias parecidas nas próximas semanas, algo que empresas como a <a href="/noticias/cohesity-agent-resilience-protecao-agentes-ia">Cohesity já sinalizaram como tendência</a> ao lançarem produtos focados especificamente em proteger esse tipo de infraestrutura de agentes.</p>
    <p>Outro ponto a observar é se a própria AWS vai detalhar, em boletins futuros, quantos clientes tinham de fato instalações expostas sem provedor de identidade configurado no momento da divulgação, informação que ajudaria a medir o tamanho real do risco que ficou em aberto entre o lançamento do Loom e a correção. Até lá, a lição prática para qualquer equipe que lida com <a href="/noticias/doxxnet-rede-privada-agentes-ia-38-milhoes">infraestrutura dedicada a agentes de IA</a> é tratar o orquestrador com o mesmo rigor de segurança que se dedicaria a um banco de dados de produção, porque é exatamente isso que ele passou a ser.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Resumo rápido</span>
      <p>A AWS corrigiu três falhas no Loom, sua plataforma de código aberto para orquestrar agentes de IA. A mais grave, CVE-2026-103956, tinha nota máxima de severidade (CVSS 10) e dava controle administrativo total sem senha quando não havia provedor de identidade configurado. A correção está na versão 1.7.0, divulgada em boletim de 2 de outubro.</p>
    </div>
  `,
  faq: [
    {
      question: "O que é o Loom, da AWS?",
      answer:
        "É uma ferramenta de código aberto mantida pela AWS Labs para orquestrar e gerenciar agentes de inteligência artificial em produção, registrando servidores de ferramentas, credenciais de integração e políticas de permissão usadas por esses agentes.",
    },
    {
      question: "O que a falha CVE-2026-103956 permitia?",
      answer:
        "Em instalações do Loom anteriores à versão 1.6.1 sem provedor de identidade configurado, qualquer requisição à API da aplicação dava a um atacante controle administrativo completo sobre o plano de controle dos agentes, sem exigir senha ou credencial válida.",
    },
    {
      question: "Como se proteger dessa falha?",
      answer:
        "A AWS recomenda atualizar o Loom para a versão 1.7.0, configurar um provedor de identidade como o Amazon Cognito antes de expor o sistema além do acesso local, e, após atualizar, rotacionar segredos OAuth2, revogar tokens ativos e auditar o AWS CloudTrail.",
    },
  ],
};
