import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "hackers-chineses-artex-ia-connectwise-2250-tenants-microsoft",
  title: "Hackers ligados à China usam agente de IA para atacar 2.250 empresas",
  summary:
    "Microsoft diz que o grupo Storm-0940 usou o framework ARTEX, de testes de invasão com IA, para tomar apps da ConnectWise e tentar entrar em 2.250 ambientes Microsoft 365.",
  author: "Bruno Danello",
  sourceName: "The Hacker News",
  sourceUrl: "https://thehackernews.com/2026/10/china-linked-hackers-use-artex-ai.html",
  date: "2026-10-22",
  publishedAt: "2026-10-22T06:25:00-03:00",
  topic: "seguranca",
  imageQuery: "Microsoft headquarters Redmond",
  content: `
    <p>A Microsoft revelou na quarta-feira (21) que um grupo de hackers alinhado ao Estado chinês usou um agente de inteligência artificial para comprometer aplicativos em nuvem da ConnectWise, uma das maiores fornecedoras de software para provedores de serviços gerenciados (MSPs), e tentar acessar mais de 2.250 ambientes de clientes. Segundo a reportagem do <a href="https://thehackernews.com/2026/10/china-linked-hackers-use-artex-ai.html" target="_blank" rel="noopener noreferrer nofollow">The Hacker News</a>, o grupo, rastreado pela Microsoft como Storm-0940, usou uma ferramenta chamada ARTEX para automatizar varredura, ataque de senhas e abuso de aplicativos OAuth em velocidade de máquina.</p>

    <p>O ARTEX é um framework escrito em Go, criado originalmente como ferramenta de teste de invasão com agentes de IA. De acordo com o relato, ele foi fechado ao público depois de ter sido abusado em ataques contra instituições financeiras da Coreia do Sul. A Microsoft afirma que, desde setembro de 2026, o grupo vem usando a ferramenta contra centenas de organizações de vários setores, entre eles serviços financeiros, governo, energia, defesa e tecnologia.</p>

    <h2>Como o ataque aconteceu, segundo a Microsoft</h2>
    <p>A cronologia descrita pela Microsoft mostra um ataque em duas fases. Entre 10 e 14 de outubro, os invasores fizeram uma pulverização de senhas (password spray) entre diferentes empresas, mirando 327 contas em oito organizações para chegar ao Microsoft 365 e ao Exchange Online. Foram registradas mais de 151 mil tentativas de login que falharam, com pico de 2.900 falhas por minuto no dia 11. Nessa etapa, nenhuma autenticação bem-sucedida foi detectada.</p>
    <p>A virada veio em 15 de outubro. Segundo a Microsoft, os agentes de IA assumiram identidades de vários aplicativos em nuvem da ConnectWise, entre eles o ConnectWise Cloud Backup, e passaram a usá-las para autenticar dentro dos ambientes dos clientes. Em alguns casos, os agentes foram além: usaram o Microsoft Graph para fazer reconhecimento, trocar credenciais de aplicativos para garantir acesso futuro e alterar identidades, grupos e funções privilegiadas. No total, o ARTEX tentou entrar em mais de 2.250 tenants, a até 2.900 tentativas de login por minuto.</p>
    <p>Alguns ataques chegaram a acesso privilegiado na nuvem em menos de três horas depois do alvo inicial. A Microsoft alerta ainda que as credenciais de aplicativo alteradas pelos invasores podem continuar funcionando como porta dos fundos mesmo depois de o aplicativo comprometido original ser limpo, o que torna a remediação mais trabalhosa do que simplesmente trocar uma senha.</p>

    <h2>O que a Zscaler encontrou dentro da ferramenta</h2>
    <p>A equipe de pesquisa Zscaler ThreatLabz analisou uma instalação personalizada do ARTEX e encontrou configurações de assistentes de IA, scripts de sincronização, ferramentas de roteamento de rede e até um histórico de prompts do Claude Code. O framework estava configurado para usar um modelo da DeepSeek por meio de um gateway compatível com a API da OpenAI, e outras configurações usavam modelos GLM e Grok. Os prompts dividiam as tarefas de investigação entre modelos diferentes e faziam um modelo revisar o trabalho do outro.</p>
    <p>O histórico de comandos também sugere motivação financeira: havia pedidos de dados pessoais e de transações em grande volume, perguntas sobre como vender dados roubados e buscas por chaves de API de gateways de pagamento e por privilégios de administrador. A Microsoft diz ainda que outros grupos, em várias regiões, também estão usando o ARTEX.</p>

    <h2>A resposta da ConnectWise</h2>
    <p>A ConnectWise afirmou que o episódio descreve uma campanha que vai muito além de uma única empresa. A companhia desligou temporariamente alguns serviços e os está restaurando em fases, ao longo de vários dias. Em comunicado citado na reportagem, a empresa lembra que os provedores de serviços gerenciados são, ao mesmo tempo, alvos e um caminho para todos os clientes que atendem, o que explica por que um único aplicativo de backup comprometido pode abrir portas em milhares de ambientes.</p>
    <p>Vale notar o que ainda não está claro. A reportagem não detalha quantos dos 2.250 ambientes foram de fato invadidos, apenas que o ARTEX tentou entrar neles, e a lista de recomendações formais não foi divulgada no texto. Os números de tentativas de login, portanto, indicam escala e velocidade do ataque, não o total de vítimas confirmadas.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que você nunca tenha ouvido falar da ConnectWise, a lógica do ataque atinge quem trabalha com IA e com ferramentas em nuvem no Brasil. Agências, consultorias de TI e contadores que gerenciam o Microsoft 365 de vários clientes dependem de fornecedores desse tipo, e o ataque mostra que o elo mais fraco pode ser um aplicativo de terceiros com permissões já concedidas, não a senha do usuário final.</p>
    <p>O segundo ponto é a velocidade. Um agente de IA que testa milhares de logins por minuto e divide tarefas entre modelos reduz o tempo que uma equipe pequena tem para perceber o problema. Isso muda o cálculo de risco para freelancers e pequenas empresas que acham que não são alvo: quando a varredura é automatizada, o tamanho da vítima deixa de ser critério.</p>
    <p>Na prática, algumas medidas simples valem agora. Ative a autenticação em dois fatores em todas as contas administrativas, revise quais aplicativos OAuth têm acesso ao seu Microsoft 365 ou Google Workspace e remova os que você não reconhece, e pergunte aos seus fornecedores de TI como eles protegem as credenciais de aplicativos que acessam o seu ambiente. Nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA com segurança</a> ajuda a fazer essas perguntas antes de contratar.</p>

    <h2>Um padrão que se repete em 2026</h2>
    <p>O caso se soma a uma série de episódios em que agentes de IA aparecem dos dois lados da segurança digital. Já cobrimos a falha <a href="/noticias/plugin4shell-falha-agentes-ia-codigo-claude-code-codex-copilot-gemini">Plugin4Shell em agentes de código</a>, a <a href="/noticias/gitlab-ai-gateway-falha-critica-rce">falha crítica no AI Gateway da GitLab</a> e os <a href="/noticias/agentes-openai-15-incidentes-seguranca-investigacao">incidentes de segurança com agentes da OpenAI</a>. Em todos eles, a mesma tensão: o que torna o agente útil, a autonomia e o acesso a sistemas, é também o que o torna perigoso quando cai em mãos erradas.</p>
    <p>Há ainda um dado incômodo para o mercado: o ARTEX nasceu como ferramenta legítima de teste de segurança. Ferramentas ofensivas com IA, vendidas para defesa, tendem a vazar ou ser copiadas, e quem as usa mal não precisa dos mesmos escrúpulos de quem as criou. Se você quer entender como esse tipo de automação funciona do lado de quem trabalha com ela, vale ler também nosso guia sobre <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o futuro do trabalho autônomo</a>.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Os próximos passos a acompanhar são a conclusão da restauração dos serviços da ConnectWise, a eventual publicação de indicadores de comprometimento e de orientações oficiais de remediação, e se outras fornecedoras de MSP confirmam que foram atingidas pela mesma campanha. Também vale observar se reguladores e fornecedores de nuvem passam a exigir controles mais rígidos sobre aplicativos OAuth com permissões amplas, justamente o ponto que permitiu ao grupo operar sem login interativo de usuário.</p>
    <p>Para quem usa IA no dia a dia, a lição é direta: segurança deixou de ser assunto só de grandes empresas. Se o atacante usa agentes para escalar, a defesa precisa de higiene básica bem feita, com acessos mínimos, revisão periódica de permissões e fornecedores que respondam rápido quando algo dá errado.</p>
  `,
};
