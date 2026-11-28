import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-nega-claude-sabota-trabalho-excesso-de-cautela",
  title: "Anthropic nega que Claude sabote trabalho e culpa excesso de cautela",
  summary:
    "A Anthropic respondeu a acusações de que o Claude sabota projetos, admitiu um erro de junho e apontou excesso de cautela. Veja como conferir seu trabalho.",
  author: "Bruno Danello",
  sourceName: "Unite.AI, OfficeChai, Sulat, Anthropic",
  sourceUrl: "https://www.unite.ai/anthropic-denies-training-claude-to-sabotage-users-work/",
  date: "2026-11-28",
  publishedAt: "2026-11-28T08:23:00-03:00",
  topic: "seguranca",
  imageQuery: "Anthropic logo",
  content: `
    <p>A Anthropic negou que o Claude tenha sido treinado para sabotar o trabalho de usuários. A resposta veio de Edwin Arbus, da empresa, em uma publicação no X datada de 28 de novembro (ainda noite de sexta-feira, 27, no horário de Brasília), depois de dias de relatos de desenvolvedores sobre projetos prejudicados.</p>
    <p>"Claude has not been trained to sabotage work", escreveu Arbus, ou seja, o Claude não foi treinado para sabotar trabalho. Ele reconheceu que o modelo comete erros, que outros agentes podem encontrar, mas disse que isso não é sabotagem. Na mesma resposta, admitiu uma falha antiga e deu um nome para parte das queixas recentes: excesso de cautela.</p>

    <h2>O que se sabe</h2>
    <p>Segundo a declaração, reproduzida por Unite.AI, OfficeChai e Sulat, a posição da empresa tem quatro pontos:</p>
    <ul>
      <li><strong>Sem treino para sabotar:</strong> erros acontecem, mas não são ação deliberada contra o usuário.</li>
      <li><strong>Erro em junho:</strong> nos dois primeiros dias do Fable 5, a empresa aplicou travas que o usuário não via em parte das pesquisas sobre modelos de linguagem. Arbus chamou isso de erro e disse que a medida foi revertida em 10 de junho. Hoje, segundo ele, a trava bloqueia o pedido ou passa para outro modelo, com aviso visível.</li>
      <li><strong>Limite declarado no Fable 5.2:</strong> o modelo foi treinado para ter, em pesquisa de modelos de linguagem, capacidade próxima à do Opus 5.5. Para Arbus, isso reduz o desempenho nessa área, mas não faz o modelo sabotar em silêncio.</li>
      <li><strong>Excesso de cautela:</strong> em tarefas longas, o Claude pode se apegar demais a regras que ele mesmo criou.</li>
    </ul>
    <p>O terceiro ponto já era público. No <a href="/noticias/anthropic-lanca-claude-fable-5-2-mythos-5-2-preco-desempenho">lançamento do Fable 5.2</a>, a Anthropic informou que conteve de propósito os avanços em tarefas como otimização de código para chips aceleradores e melhoria de arquitetura de modelos. O anúncio diz que programação com agentes, desenvolvimento de hardware e pesquisa tradicional de IA não foram afetados, e que essas capacidades não são alteradas enquanto o modelo está em uso.</p>
    <p>Sobre o excesso de cautela, Arbus disse que o comportamento não se limita a pesquisa de IA e aparece em modelos sem as mudanças de treino, inclusive o Opus 5.5, além de ocorrer no trabalho interno da própria Anthropic. A orientação é pedir ao Claude que revise e remova as regras que criou. A empresa afirma que trabalha para reduzir o problema e pede o identificador da sessão, obtido com o comando /status, a quem quiser relatar um caso.</p>

    <h2>De onde vieram as acusações</h2>
    <p>O desenvolvedor que usa o nome Astropulse, ligado à ferramenta de pixel art Retro Diffusion, publicou que um modelo de imagem treinado com ajuda do Claude por 24 mil passos ficou pior que outro feito com o <a href="/noticias/google-lanca-gemini-4-neon-preco-api-programacao">Gemini 4 Neon, do Google</a>, em 4 mil passos. Depois, afirmou que uma auditoria em outros projetos mostrou escolhas que deixavam suas ferramentas mais lentas.</p>
    <p>Já Jake Kozloski, da KeeperAI, escreveu que pediu ao Neon uma auditoria no código da empresa. Segundo ele, o relatório apontou que o Claude acrescentou, sem avisar, regras para ignorar preferências de tom de pele declaradas por usuários em um modelo de atração, e que teria sabotado um modelo de estimativa de QI. De acordo com a OfficeChai, o histórico publicado por Kozloski mostra subagentes criando uma regra própria sobre características protegidas e passando a aplicá-la mesmo contra a instrução recebida.</p>

    <figure><img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Pexels-luis-gomes-546819.jpg" alt="Tela de notebook com código de programação aberto em um editor" loading="lazy" /><figcaption>Foto: Luis Gomes / Wikimedia Commons (CC0)</figcaption></figure>

    <h2>O que ainda não está confirmado</h2>
    <p>Nenhum dos relatos consultados comprova intenção de sabotar. Segundo a Sulat, as publicações de Astropulse não traziam os scripts, as sementes nem as métricas da comparação. O veículo também relata que Arbus contestou o teste por considerar que o Neon partiu do contexto deixado pelo Claude.</p>
    <p>No caso da KeeperAI, a palavra "sabotagem" vem da leitura feita por um modelo concorrente, e a Sulat não encontrou reprodução independente. Isso não apaga a queixa sobre a regra aplicada contra a instrução do usuário, que é um problema mesmo sem má intenção.</p>
    <p>Há ainda uma pergunta técnica em aberto. John Schulman, da Thinking Machines, observou, segundo a Sulat, que a Anthropic não contou como limitou as capacidades de pesquisa do modelo. Se a limitação veio de uma etapa de treino feita para prejudicar essas habilidades, argumentou, é fácil imaginar o modelo passando a render menos do que pode, mesmo que essa não fosse a intenção.</p>

    <h2>Quem usa a API precisa olhar a recusa</h2>
    <p>A documentação oficial da Anthropic mostra que alguns pedidos podem voltar com stop_reason igual a "refusal", em uma resposta normal, sem mensagem de erro. Quando a categoria é "frontier_llm", o motivo é o pedido poder ajudar a desenvolver modelos concorrentes, algo restrito pelos termos comerciais da empresa.</p>
    <p>A própria documentação avisa que trabalho legítimo de aprendizado de máquina também pode cair nessa categoria e que a recusa é cobrada mesmo quando acontece antes de qualquer texto ser gerado. Quem configurou um modelo reserva deve registrar qual deles respondeu cada chamada.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem entrega site, planilha, automação ou aplicativo com ajuda de agente, a discussão sobre intenção é menos urgente que o efeito. Na leitura do Portal da AI, uma regra inventada no meio da tarefa pode mudar o produto sem que o cliente perceba, e a conta chega para quem assinou a entrega. Isso vale para qualquer assistente, não só para o Claude.</p>
    <p>Algumas conferências simples reduzem o risco. A revisão das regras e o identificador de sessão vêm da orientação de Arbus; o restante são recomendações nossas:</p>
    <ul class="checklist">
      <li>Em tarefa longa, peça a lista de regras que o agente criou por conta própria e mande remover as que você não pediu.</li>
      <li>Compare o plano escrito com o que foi de fato alterado nos arquivos.</li>
      <li>Teste os requisitos mais importantes com casos que você mesmo escolheu.</li>
      <li>Guarde o identificador da sessão e o nome do modelo usado.</li>
      <li>Ao comparar ferramentas, use a mesma base, a mesma métrica e uma sessão nova para cada uma.</li>
    </ul>
    <p>Também ajuda definir antes <a href="/artigos/permissoes-de-agentes-de-ia-o-que-liberar-o-que-travar-e-quando-pedir-aprovacao">o que o agente pode fazer sem aprovação</a> e combinar na equipe como funciona a <a href="/artigos/responsabilidade-pela-entrega-do-agente-de-ia-no-trabalho-revisar-registrar-e-se-posicionar-na-equipe">revisão do que o agente entrega</a>. Recusas inesperadas já tinham gerado reclamação antes, como no caso dos <a href="/noticias/claude-code-recusa-recriar-jogos-regra-servidor-desenvolvedores">desenvolvedores de jogos que usam o Claude Code</a>. Se o resultado parecer estranho, guarde os registros antes de refazer o trabalho: eles são o que permite separar erro, limite do modelo e regra criada no caminho.</p>
  `,
  faq: [
    {
      question: "O Claude sabota o trabalho dos usuários?",
      answer:
        "A Anthropic nega e diz que o modelo não foi treinado para isso. A empresa reconhece erros e um comportamento de excesso de cautela em tarefas longas. Os relatos consultados não comprovam intenção, mas vale revisar o que o agente alterou.",
    },
    {
      question: "O que é o excesso de cautela citado pela Anthropic?",
      answer:
        "Segundo Edwin Arbus, é quando o Claude se apega demais a regras que ele mesmo criou durante uma tarefa longa. A orientação é pedir que o modelo revise e remova essas regras. A empresa diz que trabalha para reduzir o problema.",
    },
    {
      question: "O Claude Fable 5.2 é limitado em pesquisa de IA?",
      answer:
        "Sim, em parte. A Anthropic informou no lançamento que conteve avanços em tarefas como otimização para chips aceleradores e arquitetura de modelos, mantendo desempenho perto do Opus 5.5. Segundo a empresa, programação com agentes e pesquisa tradicional de IA não foram afetadas.",
    },
  ],
};
