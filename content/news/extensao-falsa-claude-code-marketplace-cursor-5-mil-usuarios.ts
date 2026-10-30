import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "extensao-falsa-claude-code-marketplace-cursor-5-mil-usuarios",
  title: "Extensão adulterada do Claude Code ficou 11 horas no marketplace do Cursor",
  summary:
    "Versão alterada tentou coletar dados e abrir acesso remoto a até 5 mil usuários. O Cursor tirou a loja do ar, neutralizou o código e diz não haver risco extra.",
  author: "Bruno Danello",
  sourceName: "The Decoder, Cursor",
  sourceUrl: "https://the-decoder.com/malicious-claude-code-extension-in-cursors-marketplace-attempted-remote-access-and-data-theft/",
  date: "2026-10-30",
  publishedAt: "2026-10-30T15:30:00-03:00",
  topic: "seguranca",
  imageQuery: "Cursor code editor logo",
  content: `
    <p>Uma versão adulterada da extensão do Claude Code ficou disponível por cerca de onze horas no marketplace de extensões do Cursor, o editor de código com IA, na quinta-feira, 29 de outubro de 2026. O próprio Cursor informou, em publicação na rede X, que até 5 mil usuários podem ter sido afetados. A história foi reportada nesta sexta-feira, 30, pelo site The Decoder, que relata que a extensão tentava coletar dados da máquina e preparar um acesso remoto para o atacante.</p>

    <p>Segundo o relato, a Anthropic não teve nenhum envolvimento na criação dessa extensão. Ou seja, o problema não está no Claude Code em si, e sim no fato de que alguém publicou, na loja de extensões do Cursor, um pacote que se passava pelo original ou o substituía por uma versão alterada. A distinção importa: quem usa o Claude Code pelo terminal ou por fontes oficiais não foi o alvo descrito.</p>

    <h2>O que a extensão tentava fazer</h2>
    <p>De acordo com a descrição do Cursor repassada pelo The Decoder, o código malicioso tentava coletar o nome do computador (hostname), o nome de usuário, o sistema operacional e o endereço IP público da máquina. São dados que, sozinhos, não abrem contas nem roubam senhas, mas servem para mapear quem instalou a extensão e escolher alvos para uma segunda etapa do ataque.</p>
    <p>A extensão também tentava montar um acesso remoto para o invasor. O Cursor afirma que, na maioria das máquinas, essa parte provavelmente não funcionaria, porque exigiria privilégios de administrador. É uma informação tranquilizadora, mas com limite: em computadores onde o desenvolvedor usa uma conta com permissão elevada, a tentativa poderia ter ido mais longe, e a empresa fala em probabilidade, não em certeza.</p>

    <h2>Como o Cursor respondeu</h2>
    <p>Quando o problema foi identificado, o Cursor removeu a extensão e, por precaução, tirou o marketplace inteiro do ar. A empresa diz que trabalhou com fornecedores para neutralizar o código malicioso e que confirmou não haver risco adicional antes de recolocar a loja no ar. Também afirma que nenhuma outra extensão foi afetada. O texto do The Decoder não informa quem descobriu a extensão adulterada e não traz orientações detalhadas de limpeza para quem a instalou; apenas chama a atenção de quem instalou recentemente a extensão do Claude Code no Cursor.</p>
    <p>Vale registrar o que ainda não se sabe com base nessa cobertura: o nome da conta que publicou o pacote, a forma como a adulteração entrou na loja e se houve vítimas confirmadas. Todos esses pontos dependem de novas informações do Cursor ou de pesquisadores de segurança, e este texto será útil como contexto, não como relatório forense.</p>

    <h2>Um padrão que se repete em ferramentas de código com IA</h2>
    <p>O episódio se soma a uma série de alertas recentes sobre a cadeia de suprimentos de software em torno de agentes de código. O Portal da AI já noticiou <a href="/noticias/worm-testmetest-42-repositorios-github-ganchos-claude-cursor">o worm de npm que armou 42 repositórios do GitHub com ganchos para Claude e Cursor</a>, <a href="/noticias/agents-md-downloads-sequestra-agentes-codigo-forever-security">o arquivo AGENTS.md plantado na pasta Downloads para sequestrar agentes de código</a> e <a href="/noticias/plugin4shell-falha-agentes-ia-codigo-claude-code-codex-copilot-gemini">a falha Plugin4Shell em agentes como Claude Code, Codex, Copilot e Gemini</a>. A lógica é parecida: o atacante não invade o modelo, e sim o caminho que leva até o computador do desenvolvedor, como uma extensão, um pacote ou um arquivo de configuração.</p>
    <p>O motivo é simples. Editores com IA rodam no computador de quem programa, onde ficam chaves de API, tokens de acesso a repositórios, variáveis de ambiente e código de clientes. Uma extensão instalada tem acesso a esse ambiente, e muita gente instala extensões com o mesmo cuidado com que instala um aplicativo de celular: um clique e pronto. Marketplaces abertos são convenientes, mas dependem de verificação, e verificação falha.</p>

    <h2>O que fazer se você usa o Cursor</h2>
    <p>Quem instalou ou atualizou a extensão do Claude Code no Cursor na quinta-feira, 29, deve tratar o caso com atenção, mesmo com a loja já restabelecida. Algumas medidas razoáveis, que são boas práticas gerais e não instruções do Cursor: conferir qual publicador aparece na página da extensão instalada, desinstalar e reinstalar a partir de uma fonte oficial, trocar chaves de API e tokens que estavam na máquina se houver qualquer dúvida e verificar se existe algum serviço ou tarefa agendada que você não reconhece. Em computador de trabalho, avise o responsável de segurança da empresa.</p>
    <p>Em termos mais amplos, vale reduzir o que cada extensão pode ver. Evite deixar chaves de produção em arquivos de texto soltos, use contas sem privilégio de administrador no dia a dia e mantenha só as extensões que você realmente usa. Quanto menos extensões, menor a superfície de ataque.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa IA para programar, automatizar processos ou entregar serviços a clientes, o seu computador é parte da operação. Uma extensão adulterada pode expor chaves que dão acesso a contas pagas de IA, a repositórios de clientes e a ferramentas de pagamento, e o prejuízo cai sobre você, não sobre o autor do ataque. Para quem trabalha como freelancer ou tem uma pequena agência, a confiança do cliente depende também dessa higiene básica.</p>
    <p>O caso também lembra que o nome de uma marca conhecida, como Claude Code, não garante que o pacote seja legítimo. Confira sempre o publicador, a data de criação e o número de instalações antes de adicionar uma extensão. Para organizar uma rotina de cuidado, leia o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA com segurança</a> e o guia de <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">LGPD para pequeno negócio que usa IA</a>, já que dados de clientes na máquina comprometida também entram nessa conta. Outro caso recente que mostra o risco de credenciais expostas é <a href="/noticias/litellm-ataque-comecou-chave-mestra-exposta-posmortem">o pós-mortem do ataque ao LiteLLM, que começou numa chave mestra exposta</a>.</p>
    <p>A informação deste texto vem do relato do The Decoder, que por sua vez cita a publicação do Cursor na rede X. Por ser uma cobertura de fonte única, os números, como as onze horas de exposição e os até 5 mil usuários, são estimativas do próprio Cursor e podem ser revistos quando a empresa ou pesquisadores independentes divulgarem mais detalhes.</p>

    <div class="callout-box"><span class="callout-label">Fonte original</span>Reportagem do <a href="https://the-decoder.com/malicious-claude-code-extension-in-cursors-marketplace-attempted-remote-access-and-data-theft/" rel="noopener noreferrer nofollow" target="_blank">The Decoder</a>, de 30 de outubro de 2026, com base em publicação do Cursor.</div>
  `,
};
