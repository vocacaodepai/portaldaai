import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-doa-agent-skills-agentic-ai-foundation",
  title: "Anthropic doa o padrão Agent Skills à fundação que cuida do MCP",
  summary:
    "A Anthropic doa o padrão aberto Agent Skills à Agentic AI Foundation, da Linux Foundation. Mais de 70 plataformas já o usam. Veja o que muda para quem usa agentes.",
  author: "Bruno Danello",
  sourceName: "Anthropic",
  sourceUrl: "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation",
  date: "2026-10-25",
  publishedAt: "2026-10-25T12:35:00-03:00",
  topic: "lancamentos",
  imageQuery: "Anthropic logo",
  content: `
    <p>A Anthropic anunciou na quinta-feira (22) que está doando o <strong>Agent Skills</strong>, o padrão aberto que dá conhecimento e rotinas especializadas a agentes de IA, para a <strong>Agentic AI Foundation (AAIF)</strong>, entidade ligada à Linux Foundation. A informação está no <a href="https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation" rel="noopener noreferrer nofollow" target="_blank">comunicado oficial da Anthropic</a>. Na prática, o formato que milhares de pessoas já usam para ensinar tarefas a um agente deixa de ser controlado por uma única empresa e passa a ter uma casa neutra.</p>

    <p>Segundo a Anthropic, mais de 70 plataformas de agentes, entre elas ChatGPT, Cursor, GitHub Copilot e VS Code, já integraram o Agent Skills desde que o padrão foi publicado, em dezembro de 2025. É um número que ajuda a entender por que a mudança de governança importa: quando tantos concorrentes dependem do mesmo formato, ninguém quer que ele pertença a só um deles.</p>

    <h2>O que é uma skill e por que ela se espalhou</h2>
    <p>Uma skill é, de forma simples, uma pasta com um arquivo chamado <code>SKILL.md</code> que ensina o agente a executar uma tarefa ou a atuar em um domínio específico. A pasta pode levar também scripts e material de referência de que o agente precise. Pense num manual de procedimento escrito em texto comum: como montar um relatório do jeito da sua empresa, como revisar um contrato, como seguir a identidade visual de um cliente.</p>
    <p>A empresa conta que desenvolveu o conceito enquanto trabalhava no Claude Code. A ferramenta lidava bem com conhecimento geral, mas faltava a ela o conhecimento de procedimento que tarefas reais de negócio exigem. Poucas semanas depois do lançamento, em outubro de 2025, desenvolvedores já tinham publicado milhares de skills no GitHub e escrito carregadores para Codex, Cursor e OpenCode. Foi aí que a Anthropic publicou o formato como padrão aberto, com organização e domínio próprios, para que qualquer agente pudesse usá-lo.</p>
    <p>Os números do comunicado dão a dimensão: até agora, 1 milhão de skills foram publicadas e quase 280 milhões foram instaladas.</p>

    <h2>O que exatamente foi doado</h2>
    <p>A Anthropic afirma que quer manter o Agent Skills aberto, guiado pela comunidade e neutro em relação a fornecedores. Para isso, ela entrega à AAIF, sob a Linux Foundation, o padrão em si. A fundação foi cofundada pela própria Anthropic com a Block e a OpenAI no ano passado, e é a mesma para a qual a Anthropic já havia doado o <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">Model Context Protocol (MCP)</a>.</p>
    <p>A doação inclui:</p>
    <ul>
      <li>o nome e o logotipo Agent Skills;</li>
      <li>a organização no GitHub onde o padrão vive;</li>
      <li>o domínio agentskills.io, onde fica a especificação.</li>
    </ul>
    <p>O comunicado deixa claro que ninguém é obrigado a entrar na AAIF para usar ou contribuir com o padrão. Quem já escreve skills continua escrevendo do mesmo jeito.</p>

    <h2>Quem vai cuidar do padrão daqui para frente</h2>
    <p>A manutenção ficará com engenheiros da Anthropic, do Google, da OpenAI e de outras empresas, que atuarão como indivíduos e não como representantes de suas companhias. Os mantenedores principais são David Soria Parra e Mahesh Murag. A Anthropic propõe começar por um roteiro com três frentes: lançamentos com versões numeradas, um processo formal de propostas de mudança e orientações de segurança para quem escreve e instala skills.</p>
    <p>Esse último ponto merece atenção. Uma skill pode trazer scripts, e instalar uma skill de terceiros é parecido com instalar um programa: vale desconfiar da origem. O comunicado cita o tema de segurança como prioridade do roteiro, mas não detalha regras nem prazos. A comunidade poderá acompanhar e opinar pelo Discord do projeto e pelo GitHub, como ocorre com o MCP.</p>

    <h2>Como isso se encaixa no resto do mercado de agentes</h2>
    <p>O movimento segue um padrão que o Portal da AI vem acompanhando: as peças de infraestrutura dos agentes estão sendo empurradas para formatos abertos. O MCP virou a forma comum de ligar agentes a ferramentas e dados, e hoje aparece em casos tão diferentes quanto o <a href="/noticias/walmart-agent-gateway-agentes-ia-compras-mcp">Agent Gateway do Walmart</a>, o <a href="/noticias/qive-camada-ia-assistente-conector-mcp-claude-chatgpt">conector da Qive para Claude e ChatGPT</a> e a <a href="/noticias/figma-dylan-field-mcp-nao-e-protocolo-perfeito-20-parceiros">ampliação de parceiros do Figma</a>. As skills cumprem outro papel: enquanto o MCP diz ao agente onde estão as ferramentas, a skill diz como fazer o trabalho com elas.</p>
    <p>Essa lógica também chegou a outros produtos. O Google, por exemplo, transformou os Gems do Gemini em skills, como explicamos em <a href="/artigos/gemini-gems-viram-skills-o-que-muda-e-como-migrar">Gems viram skills no Gemini</a>. E a Anthropic já havia aberto uma loja de extensões, o <a href="/noticias/anthropic-lanca-claude-marketplace-2000-plugins">Claude Marketplace, com mais de 2 mil plugins</a>. Ter o padrão sob uma fundação neutra reduz o risco de uma skill escrita hoje parar de funcionar amanhã porque uma empresa mudou de ideia.</p>

    <h2>O que o comunicado não responde</h2>
    <p>Por ser um anúncio da própria Anthropic, o texto traz o ponto de vista de quem doa. Alguns pontos práticos continuam em aberto:</p>
    <ul>
      <li>não há datas para o roteiro de versões, para o processo de propostas nem para as orientações de segurança;</li>
      <li>os números de uso (1 milhão de skills publicadas, quase 280 milhões de instalações, mais de 70 plataformas) são da empresa e não foram verificados por terceiros;</li>
      <li>o comunicado não diz se a governança da AAIF dará peso igual a todas as empresas envolvidas, nem como serão resolvidas divergências entre elas.</li>
    </ul>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa IA para trabalhar, a notícia tem um efeito direto: o tempo que você investe em escrever uma skill, ou seja, em documentar do seu jeito como uma tarefa deve ser feita, tende a render em mais de uma ferramenta. Como o formato é o mesmo em mais de 70 plataformas, uma skill de atendimento, de proposta comercial ou de revisão de texto não fica presa a um único assistente.</p>
    <p>Para quem empreende ou faz freela, há uma oportunidade clara. Empresas pequenas têm processos que só existem na cabeça do dono, e transformar isso em skills bem escritas é um serviço que se vende. Vale ler nosso guia sobre <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como criar, vender e cobrar agentes de IA personalizados</a> para ver como precificar esse tipo de trabalho. Se a dúvida for entender a diferença entre automação e agente, comece por <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">chatbot, automação ou agente</a>.</p>
    <p>E fica o cuidado básico: skill é código e instruções que o agente vai seguir. Instale só de fontes que você conhece, leia o conteúdo da pasta antes de ativar e não entregue a um agente acesso a contas sensíveis sem necessidade. Nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA com segurança</a> ajuda a organizar essa avaliação.</p>

    <div class="callout-box"><span class="callout-label">Fonte original</span>Comunicado da <a href="https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation" rel="noopener noreferrer nofollow" target="_blank">Anthropic</a>, de 22 de outubro de 2026.</div>
  `,
};
