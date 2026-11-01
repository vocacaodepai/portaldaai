import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "agent-skills-padrao-aberto-o-que-sao-skills-de-agentes-de-ia-e-por-que-importam",
  title: "Agent Skills: o que são skills de agentes de IA e por que importam",
  seoTitle: "Agent Skills: o que são skills de agentes de IA",
  excerpt:
    "Agent Skills é um padrão aberto: uma pasta com um arquivo SKILL.md que ensina um agente de IA a fazer uma tarefa. Veja como funciona e o que muda para você.",
  metaDescription:
    "Agent Skills é um padrão aberto de pastas com SKILL.md que ensinam agentes de IA a repetir tarefas. Veja como funciona, quem adota e o que muda com a AAIF.",
  category: "futuro",
  articleSubcategory: "agentes-de-ia",
  date: "2026-11-01",
  readTime: 7,
  imageQuery: "folder documents checklist workflow",
  seed: 1028,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Uma skill é uma pasta com um arquivo SKILL.md, que traz nome, descrição e instruções, e pode levar scripts e materiais de apoio para o agente de IA executar uma tarefa do mesmo jeito sempre.",
    "O agente carrega primeiro só o nome e a descrição de cada skill e lê o texto completo apenas quando a tarefa combina, o que permite ter muitas skills sem encher a memória de trabalho da IA.",
    "Em 22/10/2026 o padrão foi doado à Agentic AI Foundation, da Linux Foundation, o que reduz o risco de ficar preso a uma única ferramenta; você pode escrever uma skill hoje e levá-la a outros agentes compatíveis.",
  ],
  content: `
    <p>Agent Skills é um padrão aberto para ensinar agentes de IA a executar tarefas do mesmo jeito sempre. Uma skill é uma pasta com um arquivo chamado SKILL.md, que traz um nome, uma descrição e as instruções, podendo incluir scripts e materiais de apoio, segundo a <a href="https://agentskills.io" target="_blank" rel="noopener noreferrer">documentação oficial do padrão</a>.</p>

    <p>A novidade de outubro de 2026 é institucional: a Anthropic, que criou o formato, anunciou em 22/10/2026 a doação do padrão a uma fundação neutra. Para quem usa IA no dia a dia, isso importa porque a mesma skill pode servir a vários agentes. Este guia explica a ideia sem jargão, mostra um exemplo prático e aponta os cuidados. Se você ainda se confunde com os termos, comece pelo texto sobre a <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">diferença entre agente de IA, chatbot e automação</a>.</p>

    <h2>O que é uma skill de agente de IA</h2>

    <p>Pense numa skill como uma receita de procedimento que o agente consulta quando precisa. Em vez de repetir a mesma explicação toda vez ("quando eu pedir um orçamento, siga estes passos, use este tom, entregue neste formato"), você escreve uma vez e guarda numa pasta. O agente decide sozinho quando usá-la, a partir da descrição.</p>

    <p>A estrutura mínima é simples. Uma pasta com o nome da skill e, dentro dela, o arquivo SKILL.md. Opcionalmente entram três subpastas: scripts, para código que o agente pode executar; references, para documentos de consulta; e assets, para modelos e imagens. A ideia é parecida com o que já existe para pessoas, e quem já documentou processos com o guia de <a href="/artigos/procedimento-operacional-padrao-com-ia-como-documentar-processos">procedimento operacional padrão com IA</a> vai reconhecer o raciocínio: escrever o passo a passo para que qualquer um, humano ou máquina, refaça igual.</p>

    <h2>Como o agente usa a skill sem encher a memória</h2>

    <p>O ponto técnico mais interessante se chama divulgação progressiva. A especificação descreve três estágios. No primeiro, ao iniciar, o agente carrega apenas o nome e a descrição de cada skill disponível, algo em torno de 100 tokens por skill. No segundo, quando a tarefa combina com a descrição, ele lê o SKILL.md inteiro. No terceiro, só se precisar, abre scripts e arquivos de referência.</p>

    <p>Na prática, isso resolve um problema que muita gente enfrenta: instruções longas gastam o espaço de contexto da IA. Quem quer entender melhor esse limite pode ler sobre <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto</a>. Com skills, o agente mantém dezenas de procedimentos "na gaveta" e abre só o que a conversa pede. A própria especificação recomenda manter o SKILL.md abaixo de 500 linhas e mover o detalhe para arquivos separados.</p>

    <h2>O que muda com a doação à Agentic AI Foundation</h2>

    <p>Segundo o <a href="https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation" target="_blank" rel="noopener noreferrer">anúncio da Anthropic</a>, de 22/10/2026, o padrão passa para a Agentic AI Foundation (AAIF), vinculada à Linux Foundation. A AAIF foi cofundada pela Anthropic com a Block e a OpenAI e já abriga o MCP, o protocolo que conecta agentes a ferramentas. O guia sobre o <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">MCP e como ele conecta agentes de IA</a> explica essa outra peça.</p>

    <p>A doação inclui o nome, o logotipo, a organização no GitHub e o domínio agentskills.io. A empresa diz que o formato foi publicado em dezembro de 2025, que mais de 70 plataformas já o adotaram, entre elas ChatGPT, Cursor, GitHub Copilot e VS Code, e cita 1 milhão de skills publicadas e perto de 280 milhões de instalações. Esses números são da própria empresa, não de uma auditoria independente. A notícia resumida está em <a href="/noticias/anthropic-doa-agent-skills-agentic-ai-foundation">Anthropic doa o padrão Agent Skills</a>.</p>

    <div class="callout-box callout-tip"><span class="callout-label">O que isso significa para você</span><p>Quem escreve uma skill em formato aberto não fica refém de um único aplicativo. Se trocar de ferramenta, leva o procedimento junto, desde que a nova ferramenta seja compatível.</p></div>

    <h2>Como é um SKILL.md na prática</h2>

    <p>O arquivo começa com um cabeçalho em YAML e segue com texto em Markdown. Pela especificação, o campo name é obrigatório, tem até 64 caracteres e aceita só letras minúsculas, números e hífens. O campo description também é obrigatório, tem até 1024 caracteres e deve dizer o que a skill faz e quando usá-la. Outros campos, como licença e compatibilidade, são opcionais.</p>

    <h3>Exemplo para uma marmitaria de bairro</h3>

    <p>Imagine uma marmitaria que responde pedidos de orçamento para empresas pequenas. O dono escreve uma skill para o agente padronizar a resposta. O texto abaixo é um modelo de estudo, não uma skill testada em produção.</p>

    <pre><code>---
name: orcamento-de-marmitas
description: Monta orçamento de marmitas para empresas. Use quando o cliente pedir preço para 10 ou mais refeições por dia.
---

Passos:
1. Pergunte quantidade por dia, dias da semana e endereço.
2. Use a tabela de preços do arquivo references/precos.md.
3. Mostre o total semanal e o prazo de entrega.
4. Termine com a forma de pagamento e peça confirmação.

Nunca prometa desconto que não está na tabela.</code></pre>

    <p>Repare em dois detalhes: a descrição diz quando usar, e a regra final limita o que o agente pode prometer. Para quem quer escrever instruções claras em geral, o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">como escrever comandos que funcionam</a> ajuda.</p>

    <h2>Skills em outras ferramentas e como encaixam no seu dia</h2>

    <p>O conceito já aparece fora do universo da Anthropic. O Google, por exemplo, trocou os Gems do Gemini por skills, como mostra o texto sobre <a href="/artigos/gemini-gems-viram-skills-o-que-muda-e-como-migrar">Gems que viram skills</a>, e o <a href="/artigos/menu-personalizar-do-gemini-skills-apps-e-controle-para-admins">menu Personalizar do Gemini</a> reúne skills, apps e controle para administradores. Nem toda skill de cada produto segue o mesmo formato aberto, então confira a documentação de cada ferramenta antes de assumir que um arquivo funciona em qualquer lugar.</p>

    <p>Para pequenos negócios, o uso mais direto é padronizar o que se repete: respostas a clientes, fechamento de caixa, roteiro de post, conferência de pedido. Um serviço de montar esses pacotes é o assunto de <a href="/artigos/skills-do-gemini-como-servico-montar-instrucoes-reutilizaveis-para-pequenos-negocios">skills do Gemini como serviço</a>.</p>

    <h2>Riscos e limites que ninguém deve ignorar</h2>

    <p>Uma skill é, no fim, texto e às vezes código que um agente segue. Isso traz risco. Uma skill baixada de terceiros pode conter instruções escondidas, scripts que acessam arquivos ou comandos que o agente executa sem você perceber. O anúncio da Anthropic menciona, entre as propostas de roteiro, orientações de segurança para quem escreve e para quem instala skills, o que indica que o tema é reconhecido, mas ainda sem prazo.</p>

    <ul class="checklist">
      <li>Leia o SKILL.md e qualquer script antes de instalar uma skill de fonte desconhecida.</li>
      <li>Dê ao agente só as permissões de que a tarefa precisa, como explica o texto sobre <a href="/artigos/permissoes-de-agentes-de-ia-o-que-liberar-o-que-travar-e-quando-pedir-aprovacao">permissões de agentes de IA</a>.</li>
      <li>Não coloque senhas, chaves ou dados de clientes dentro da skill.</li>
      <li>Fique atento ao <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">risco de prompt injection</a> quando a skill manda o agente ler páginas ou e-mails.</li>
      <li>Revise o resultado: skill boa não elimina erro de IA.</li>
    </ul>

    <p>Para avaliar qualquer ferramenta nova com calma, o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> serve de base.</p>

    <h2>Por que isso pesa no futuro do trabalho</h2>

    <p>Skills transformam conhecimento de empresa em ativo portátil. Quem sabe descrever bem um processo passa a ter um diferencial, porque o agente executa o que está escrito, nem mais nem menos. É um traço do que os textos sobre <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o futuro do trabalho autônomo</a> e sobre <a href="/artigos/como-humanos-e-agentes-de-ia-vao-trabalhar-juntos-no-futuro">como humanos e agentes vão trabalhar juntos</a> já apontavam: o valor migra de executar para especificar e conferir.</p>

    <p>Há também a camada de comunicação entre agentes, tratada no guia do <a href="/artigos/protocolo-a2a-como-agentes-conversam-entre-si-e-o-que-muda-para-voce">protocolo A2A</a>. Skills, MCP e A2A resolvem problemas diferentes: o que o agente sabe fazer, a que ele se conecta e com quem ele conversa.</p>

    <h2>Erros comuns de quem começa</h2>

    <ul>
      <li><strong>Descrição vaga.</strong> Se a descrição diz só "ajuda com orçamentos", o agente não sabe quando acionar. Diga o que faz e quando usar.</li>
      <li><strong>SKILL.md gigante.</strong> Textos longos desperdiçam contexto; separe o detalhe em arquivos de referência.</li>
      <li><strong>Instalar sem ler.</strong> Trate skill de terceiros como programa baixado da internet.</li>
      <li><strong>Achar que é igual em todo lugar.</strong> Compatibilidade varia entre produtos.</li>
      <li><strong>Esquecer de atualizar.</strong> Preço e regra mudam; revise a skill de tempos em tempos.</li>
    </ul>

    <h2>Próximo passo</h2>

    <p>Escolha uma tarefa que você explica toda semana, escreva os passos em 10 linhas e teste com o agente que você já usa. Se der certo, vale transformar em skill. Acompanhe o tema na categoria de futuro do Portal da AI, que mostra como agentes mudam o trabalho de gente comum.</p>
  `,
  faq: [
    {
      question: "O que é uma skill de agente de IA?",
      answer:
        "É uma pasta com um arquivo SKILL.md que ensina um agente de IA a executar uma tarefa específica. O arquivo traz um nome, uma descrição de quando usar e as instruções em texto, e a pasta pode incluir scripts, documentos de consulta e modelos. O agente lê a skill quando a tarefa pedida combina com a descrição.",
    },
    {
      question: "Agent Skills é gratuito e aberto?",
      answer:
        "O formato é um padrão aberto, com especificação pública no site agentskills.io, e foi doado à Agentic AI Foundation em 22/10/2026, segundo a Anthropic. O formato em si não tem custo. O preço de usar skills depende do aplicativo ou do plano de cada agente, e isso varia de produto para produto.",
    },
    {
      question: "Qual a diferença entre skill, prompt e MCP?",
      answer:
        "Prompt é a instrução de uma conversa. Skill é um procedimento guardado em pasta que o agente carrega quando precisa, reaproveitável em várias conversas. MCP é um protocolo para conectar o agente a ferramentas e dados externos. Os três se complementam: a skill diz como fazer, o MCP dá acesso ao que é necessário.",
    },
    {
      question: "Uma skill criada para um agente funciona em outro?",
      answer:
        "Pode funcionar, se o outro agente seguir o padrão. A Anthropic afirma que mais de 70 plataformas já adotaram o formato, mas cada produto implementa à sua maneira e alguns campos são experimentais. Teste antes de depender dela e leia a documentação da ferramenta de destino.",
    },
    {
      question: "É seguro instalar skills de terceiros?",
      answer:
        "Exige cuidado. Uma skill pode incluir instruções e scripts que o agente executa com as permissões que você deu. Leia o conteúdo antes de instalar, evite colocar senhas ou dados de clientes dentro dela e limite o acesso do agente ao necessário. A comunidade ainda discute orientações formais de segurança para o padrão.",
    },
  ],
};
