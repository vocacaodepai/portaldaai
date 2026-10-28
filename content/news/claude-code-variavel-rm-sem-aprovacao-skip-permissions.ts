import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "claude-code-variavel-rm-sem-aprovacao-skip-permissions",
  title: "Claude Code ganha variável que deixa o agente apagar arquivos sem pedir",
  summary:
    "A versão 2.1.311 do Claude Code trouxe uma variável opcional que tira o último freio sobre o comando rm. Veja como funciona e o que fazer para não perder arquivos.",
  author: "Bruno Danello",
  sourceName: "The Register, Anthropic",
  sourceUrl:
    "https://www.theregister.com/ai-and-ml/2026/10/27/anthropic-now-lets-claude-users-jump-out-of-plane-without-parachute/5305807",
  date: "2026-10-28",
  publishedAt: "2026-10-28T07:40:00-03:00",
  topic: "seguranca",
  imageQuery: "Anthropic logo",
  content: `
    <p>A Anthropic adicionou ao Claude Code, seu agente de programação que roda no terminal, uma opção que remove o último freio do modo mais permissivo da ferramenta. Na versão 2.1.311, uma variável de ambiente com o nome propositalmente exagerado <strong>CLAUDE_CODE_EVEN_MORE_DANGEROUSLY_SKIP_PERMISSIONS</strong>, quando definida como 1, permite que o agente execute o comando <strong>rm</strong>, que apaga arquivos, sem pedir aprovação. A novidade foi divulgada por Daisy Hollman, integrante da equipe técnica da Anthropic, em uma rede social, e reportada pelo The Register em 27 de outubro de 2026.</p>

    <p>Quem usa o Claude Code só para pequenas tarefas talvez nunca precise disso, mas a mudança diz muito sobre o rumo dos agentes de IA: cada vez mais autonomia, com cada vez menos confirmações. Entender o que foi liberado, e o que continua protegido, ajuda a decidir se vale ligar a opção.</p>

    <h2>O que mudou na versão 2.1.311</h2>
    <p>O Claude Code já tinha a flag <strong>--dangerously-skip-permissions</strong>, que ativa o modo chamado bypassPermissions e faz o agente executar quase tudo sem perguntar. O nome da flag sugere que ela dispensa todas as confirmações, mas não é bem assim: mesmo nesse modo, alguns comandos continuavam barrados, como <strong>rm -rf ~</strong>, que tenta apagar a pasta pessoal inteira do usuário. Segundo a reportagem, comandos de remoção como <strong>rm</strong> e <strong>rmdir</strong> ainda exigiam aprovação.</p>

    <p>A nova variável existe justamente para quem quer tirar essa última barreira. Ela precisa ser definida no ambiente do terminal do próprio desenvolvedor, ou seja, não vem ligada por padrão e ninguém a ativa sem querer. Hollman comentou, em tom de brincadeira, que a flag antiga não aprova realmente tudo e que ela espera que o nome da variável seja &quot;memorável&quot;. A reportagem também registra que a mudança não aparece na lista de alterações oficial da versão 2.1.311, e que configurações gerenciadas por uma empresa ainda podem impor restrições próprias.</p>

    <h2>Por que o freio existia</h2>
    <p>A trava sobre comandos de apagar arquivos não é detalhe. Agentes de IA erram, interpretam mal um pedido ou seguem uma instrução escondida em um arquivo que leram, e um único comando de remoção no lugar errado pode destruir um projeto, uma pasta de clientes ou um disco inteiro. O The Register lembra que já houve muitos relatos de agentes que rodaram comandos como <strong>rm -rf ~</strong> e acabaram apagando discos rígidos ou causando outras perdas de dados.</p>

    <div class="callout-box callout-bad">
      <span class="callout-label">Atenção</span>
      <p>Apagar arquivos é uma ação sem volta na maioria dos casos. Sem a confirmação, você só descobre o erro depois que ele aconteceu. Se for testar a opção, faça isso em uma máquina descartável, em um contêiner ou em uma pasta com cópia de segurança atualizada.</p>
    </div>

    <p>É a mesma lógica de outros problemas de segurança que já mostramos por aqui. Em setembro, a falha batizada de <a href="/noticias/plugin4shell-falha-agentes-ia-codigo-claude-code-codex-copilot-gemini">Plugin4Shell</a> mostrou que um plugin alterado podia fazer agentes de programação executarem código malicioso sem que o usuário clicasse em nada. Quanto mais o agente age sozinho, maior o estrago possível quando alguma coisa dá errado, seja por erro do modelo, seja por ataque.</p>

    <h2>Quem pode querer ligar a opção</h2>
    <p>Há um motivo prático para a Anthropic ter incluído a variável: quem roda agentes por horas, em tarefas longas ou em pipelines automáticos, não quer que o trabalho pare esperando alguém clicar em &quot;aprovar&quot; a cada limpeza de arquivos temporários. Em ambientes isolados, como uma máquina virtual criada só para a tarefa, o risco é pequeno, porque o pior cenário é descartar o ambiente inteiro e começar de novo.</p>

    <p>Já em um notebook de trabalho, com arquivos de clientes, planilhas e fotos de família no mesmo disco, o raciocínio muda. Nesse caso, o ganho de velocidade de não precisar confirmar remoções não compensa o risco, e a recomendação segue sendo manter as confirmações ligadas. A própria Anthropic descreve os modos de permissão na documentação do Claude Code, e vale conhecer cada um antes de mexer em qualquer configuração.</p>

    <h2>Como se proteger se você usa agentes de código</h2>
    <p>Mesmo sem ligar a variável nova, algumas práticas reduzem bastante o risco de perda de dados com qualquer agente:</p>
    <ul>
      <li>Trabalhe sempre dentro de um repositório Git e faça commits com frequência. Assim, uma remoção indevida de arquivos do projeto pode ser desfeita.</li>
      <li>Mantenha cópia de segurança automática da pasta de trabalho, na nuvem ou em um disco externo, antes de entregar tarefas grandes a um agente.</li>
      <li>Use um ambiente separado, como uma máquina virtual ou um contêiner, para tarefas em que o agente vai rodar sem supervisão.</li>
      <li>Evite abrir arquivos de origem desconhecida com o agente ativo, porque instruções escondidas no conteúdo podem induzir comandos perigosos.</li>
      <li>Revise as permissões configuradas e remova o que você não usa. Menos poder concedido significa menos dano possível.</li>
    </ul>

    <h2>Por que isso importa para você</h2>
    <p>Você não precisa ser programador para sentir o efeito dessa tendência. Ferramentas de agentes de IA estão chegando a quem automatiza o próprio negócio, monta sites e cria pequenos aplicativos com ajuda de IA, e o convite à comodidade vem sempre embalado em &quot;deixe o agente cuidar disso sem perguntar&quot;. A decisão de quanta autonomia entregar é sua, e a conta de um erro também.</p>

    <p>Se você está começando a usar agentes para programar ou automatizar tarefas, leia nosso guia sobre <a href="/artigos/vibe-coding-para-nao-programadores-carreira-e-riscos">vibe coding para não programadores, carreira e riscos</a> e o checklist para <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">escolher uma ferramenta de IA com segurança</a>. Para ver o que dá para fazer de útil com o Claude Code no dia a dia, confira também como a ferramenta pode ser <a href="/noticias/claude-code-mods-typescript-personalizar">personalizada com mods em TypeScript</a> e o caso de quem usou o agente para <a href="/noticias/ia-vibe-coders-tv-inteligente-sem-anuncios-claude-code">tirar anúncios de uma TV inteligente</a>. Quem já depende do Claude Code no trabalho também deve lembrar que o serviço pode ficar indisponível, como mostramos quando a <a href="/noticias/anthropic-falha-claude-code-api-fora-do-ar">API saiu do ar</a>.</p>

    <p>A regra de ouro continua simples: quanto mais poder você dá a um agente, mais importante é ter cópia de segurança e um lugar onde errar não custe caro. A variável nova é opcional, vem desligada e só serve a quem entende o risco que está assumindo.</p>

    <p>Este texto é análise nossa a partir da reportagem do The Register, que cita o anúncio feito por Daisy Hollman, da Anthropic, e a documentação do Claude Code. A reportagem não informa preço, e a mudança não consta da lista oficial de alterações da versão, o que vale acompanhar nos próximos dias.</p>
  `,
};
