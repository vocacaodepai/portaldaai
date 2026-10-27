import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-um-agente-so-vence-varios-subagentes-kit-migracao",
  title: "Anthropic recomenda trocar vários subagentes por um agente só",
  summary:
    "Guia da Anthropic: um agente único com skills e ferramentas costuma superar vários subagentes em qualidade, custo e velocidade, e lança um kit de migração.",
  author: "Bruno Danello",
  sourceName: "Anthropic",
  sourceUrl: "https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop",
  date: "2026-10-26",
  publishedAt: "2026-10-26T02:25:00-03:00",
  topic: "lancamentos",
  imageQuery: "Anthropic logo",
  content: `
    <p>A Anthropic publicou um guia para quem constrói agentes de IA na Claude Platform com uma recomendação direta: antes de manter uma frota de subagentes especializados, vale testar se um único agente principal, que carrega contexto e ferramentas sob demanda, não entrega mais com menos custo. O texto, assinado por Diane Sarkis e datado de 22 de outubro de 2026, está no <a href="https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop" target="_blank" rel="noopener noreferrer nofollow">site da própria Anthropic</a>. A empresa também liberou um kit de migração no GitHub para ajudar equipes a fazer essa avaliação.</p>

    <p>A discussão chegou a quem acompanha o setor neste fim de semana, quando o veículo The Decoder resumiu o material. Como o conteúdo original é aberto, esta matéria se baseia nele, e o que segue são as afirmações da Anthropic, não testes feitos pelo Portal da AI.</p>

    <h2>O que a Anthropic diz</h2>
    <p>Subagentes são agentes com janela de contexto, ferramentas e instruções próprias, coordenados por um orquestrador. Segundo a Anthropic, eles continuam úteis para verificação, trabalho em paralelo e separação de permissões, e a própria empresa os usa em produtos como seu sistema multiagente de pesquisa. O ponto novo é outro: a equipe de IA aplicada da empresa notou, em vários clientes corporativos, um padrão em que juntar roteadores, planejadores e subagentes de domínio dentro do laço principal melhorou o resultado.</p>
    <p>Nas comparações feitas em diferentes implantações, a Anthropic afirma que um agente único com skills frequentemente superou tanto o desenho de um prompt gigante para tudo quanto o desenho com subagentes, em qualidade e, muitas vezes, com menor custo e menor tempo por tarefa. Um cliente que comparou seu sistema multiagente com um laço único registrou execução cerca de duas vezes mais rápida no segundo caso.</p>

    <h2>Os problemas de ter um subagente por time</h2>
    <p>O guia descreve uma armadilha comum em empresas grandes. Cada time constrói o seu agente e uma equipe central cria um orquestrador por cima. Parece simples, mas traz problemas que a Anthropic lista:</p>
    <ul>
      <li>perda de contexto a cada passagem de bastão entre agentes, como num jogo de telefone sem fio;</li>
      <li>proliferação de subagentes sem dono e sem padrão, até virarem centenas de agentes sobrepostos;</li>
      <li>o chamado "Frankenprompt", em que cada time acrescenta uma regra ao prompt do sistema e as regras acabam se contradizendo;</li>
      <li>avaliações pequenas demais, otimizadas para uma subtarefa e sem dono do conjunto;</li>
      <li>mais latência, porque cada chamada é um laço de modelo dentro de outro.</li>
    </ul>
    <p>A empresa resume o fenômeno como uma versão da lei de Conway para agentes: a arquitetura do agente vira cópia do organograma da empresa.</p>

    <h2>Como funciona o agente único</h2>
    <p>A alternativa proposta é um modelo, uma janela de contexto e um laço aberto de ferramentas, com limites de turnos e de custo definidos pelo sistema. A cada rodada, o modelo emite um lote de chamadas de ferramenta, o sistema as executa em paralelo e devolve os resultados brutos ao mesmo modelo, que decide o próximo passo: outro lote, uma pergunta ao usuário ou a resposta final. O modelo escreve o plano no contexto no primeiro turno e o revisa conforme os resultados chegam.</p>
    <p>Para que o contexto não vire uma bagunça, a Anthropic defende a divulgação progressiva. O agente enxerga só descrições curtas de skills e ferramentas, e carrega o conteúdo completo quando precisa. A empresa diz que, aplicando essa ideia, reduziu em mais de 80% o prompt de sistema do Claude Code para modelos mais avançados. Ela também aponta que, a partir do Opus 4.5, os modelos passaram a conduzir planos complexos em um único laço, e que modelos recentes comentam o próprio progresso e conferem o que fazem, o que torna parte das camadas de controle desnecessária.</p>
    <p>Em muitos casos, segundo o guia, bastam um prompt de sistema limpo, quatro ou cinco ferramentas de dados enxutas e regras firmes de saída. A Anthropic chega a sugerir agrupar ferramentas por intenção do usuário, e não uma por API, porque passar de 30 a 50 definições de ferramenta no prompt tende a piorar a escolha do modelo.</p>

    <h2>Quando ainda vale usar subagentes</h2>
    <p>O texto não manda abolir os subagentes. Ele lista três situações em que continuam fazendo sentido: quando o laço único mostra queda de desempenho medida por excesso de contexto, quando várias tarefas precisam rodar em paralelo com janelas de contexto novas e descartáveis, e quando um agente sozinho erra na escolha de ferramentas ou enfrenta instruções conflitantes. Se for manter subagentes, a recomendação é chamá-los como ferramentas pelo agente principal, para que ele continue conversando com o usuário, e reservar a entrega total da conversa para quando o subagente precisa falar diretamente com a pessoa.</p>

    <h2>O kit de migração e o passo a passo</h2>
    <p>Para quem já tem um orquestrador em produção, o guia sugere ir por etapas. Primeiro, montar um conjunto de avaliações de tarefa completa, mesmo que com apenas 10 exemplos de referência. Depois, juntar os subagentes que costumam ser chamados em sequência ou que mexem nos mesmos dados, transformar os prompts de cada um em skills e as chamadas de API em ferramentas MCP, e comparar o desempenho com e sem cada subagente, olhando não só a nota final mas quais tarefas mudaram de resultado. Num teste com um agente de suporte, a Anthropic conta que unir dois subagentes reduziu a latência, mas quebrou um processo que antes passava, porque o agente principal respondeu o prazo de entrega sozinho em vez de consultar o especialista em logística.</p>
    <p>O kit de migração encadeia as skills de API da empresa em um fluxo guiado, com uma demonstração em sistema de teste. Entre os comandos citados estão build-eval, para criar as avaliações, prompt-audit, para achar instruções escritas para modelos antigos, e hillclimb, para melhorar um aplicativo de forma iterativa.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você monta automações com IA, seja para o seu negócio ou para vender como serviço, o recado é simplificar antes de complicar. Um agente com poucas ferramentas bem descritas e algumas skills com o passo a passo do seu trabalho pode ser mais barato, mais rápido e mais fácil de manter do que uma cadeia de agentes especializados. Menos agentes também significa menos chamadas de modelo e, portanto, menos tokens pagos.</p>
    <p>Para quem está começando, vale entender os conceitos que aparecem no guia. Veja <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">a diferença entre agente de IA, chatbot e automação</a> e <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">o que é o MCP e como ele conecta agentes</a>. Quem pensa em transformar isso em renda pode seguir com <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como ganhar dinheiro criando e vendendo agentes de IA personalizados</a>.</p>
    <p>As skills, aliás, são o centro da proposta, e o padrão foi doado recentemente a uma fundação aberta, como contamos em <a href="/noticias/anthropic-doa-agent-skills-agentic-ai-foundation">Anthropic doa o padrão Agent Skills à fundação que cuida do MCP</a>. Quem quiser ver um agente mais autônomo da própria empresa pode ler sobre o <a href="/noticias/anthropic-lanca-claude-duet-agente-pessoal-proativo">Claude Duet</a>.</p>

    <h2>O que considerar com cautela</h2>
    <p>É uma recomendação de quem vende os modelos e as ferramentas, baseada em experiências com clientes corporativos que a empresa não identifica, e os números, como a execução duas vezes mais rápida, vêm de casos específicos. O resultado depende do seu problema: tarefas muito longas ou paralelas ainda podem pedir subagentes, e o próprio guia reconhece isso. A sugestão prática é testar com avaliações pequenas antes de mexer num sistema que já funciona, e comparar custo, velocidade e acertos nos dois desenhos.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Artigo "Building agents: When to fold subagents into your main agent loop", de Diane Sarkis, publicado pela Anthropic em 22 de outubro de 2026. O Portal da AI não testou o kit de migração.</p>
    </div>
  `,
};
