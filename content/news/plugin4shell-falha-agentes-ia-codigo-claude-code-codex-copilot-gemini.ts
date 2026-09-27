import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "plugin4shell-falha-agentes-ia-codigo-claude-code-codex-copilot-gemini",
  title: "Falha 'Plugin4Shell' expõe os principais agentes de IA para programação a invasão remota",
  author: "Bruno Danello",
  summary:
    "Pesquisadores encontraram uma vulnerabilidade zero-click que permite trocar o código de um plugin já aprovado por código malicioso, mesmo com a trava de versão ativada, afetando Claude Code, OpenAI Codex, GitHub Copilot e Gemini CLI. Anthropic e OpenAI já corrigiram; o Google decidiu descontinuar o Gemini CLI em vez de corrigi-lo.",
  sourceName: "Help Net Security",
  sourceUrl: "https://www.helpnetsecurity.com/2026/09/18/plugin4shell-ai-coding-agents-vulnerability/",
  date: "2026-09-18",
  content: `
    <p>Uma vulnerabilidade batizada de "Plugin4Shell" acaba de expor uma falha de segurança séria nos principais agentes de IA usados para programar: Claude Code, OpenAI Codex, GitHub Copilot e Gemini CLI. É a primeira falha de cadeia de suprimentos (supply chain) documentada especificamente no ecossistema de agentes de IA — e o motivo pelo qual ela preocupa tanto é justamente o mecanismo que deveria proteger contra esse tipo de ataque.</p>

    <h2>O que quebrou exatamente</h2>
    <p>Esses agentes permitem instalar plugins de terceiros para estender suas funções. Para evitar que um plugin seja alterado depois de revisado, existe uma trava chamada "SHA pinning": ela deveria garantir que o código instalado nunca mude sem o desenvolvedor perceber. O problema é que o agente confere qual commit foi solicitado, mas não confirma se foi realmente esse commit que chegou até a máquina do usuário — abrindo brecha para quem controla o repositório do plugin substituir o código por uma versão maliciosa, mesmo com a trava "ativada" e aparentemente funcionando.</p>

    <div class="callout-box callout-bad">
      <span class="callout-label">Por que é "zero-click"</span>
      <p>Como Claude Code e Codex atualizam plugins instalados automaticamente em segundo plano, o ataque não exige que a vítima instale nada de novo nem clique em link algum: basta publicar um plugin legítimo, esperar adoção, e só depois alterar o repositório de origem.</p>
    </div>

    <h2>O que está em risco</h2>
    <p>Como esses plugins costumam herdar as mesmas permissões de quem está rodando o agente, o alcance de um ataque bem-sucedido pode incluir acesso a código-fonte local, credenciais de nuvem, chaves SSH, repositórios internos, sistemas de produção e outros segredos — exatamente o tipo de dado sensível que discutimos em nosso guia sobre <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher uma ferramenta de IA com segurança</a>.</p>

    <h2>Como cada empresa respondeu</h2>
    <p>Anthropic e OpenAI já lançaram correções para Claude Code e Codex, respectivamente. A Microsoft contesta se o caminho relatado continua explorável via GitHub, enquanto os pesquisadores mantêm que outros provedores de Git preservam o risco no Copilot. Já o Google optou por descontinuar o Gemini CLI em vez de corrigi-lo — toda instalação existente permanece vulnerável, e a empresa recomenda migração para o Antigravity, que não é afetado por esse ataque específico.</p>

    <h2>O que isso significa pra quem usa agentes de IA no dia a dia</h2>
    <p>Se você usa algum desses <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA autônomos</a> para programar ou automatizar tarefas, vale revisar quais plugins de terceiros estão instalados, desativar atualização automática de plugins quando possível, e acompanhar os avisos oficiais de segurança de cada ferramenta — principalmente se você usa Gemini CLI, que não vai receber correção.</p>
  `,
};
