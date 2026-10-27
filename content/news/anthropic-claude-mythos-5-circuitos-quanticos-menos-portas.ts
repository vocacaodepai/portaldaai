import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-claude-mythos-5-circuitos-quanticos-menos-portas",
  title: "Claude Mythos 5 projeta circuitos quânticos com até 12 vezes menos portas",
  summary:
    "A Anthropic diz que o Claude criou, em ciclo automático, circuitos quânticos mais enxutos que os melhores já publicados, com 12 vezes menos portas num decodificador.",
  author: "Bruno Danello",
  sourceName: "Anthropic",
  sourceUrl: "https://www.anthropic.com/research/designing-efficient-quantum-circuits",
  date: "2026-10-19",
  publishedAt: "2026-10-19T22:22:39-03:00",
  imageQuery: "Anthropic logo",
  topic: "lancamentos",
  content: `
    <p>A Anthropic publicou, em 16 de outubro, um estudo em que o modelo Claude Mythos 5 desenhou circuitos quânticos mais eficientes do que os melhores projetos já divulgados em vários problemas. Segundo o <a href="https://www.anthropic.com/research/designing-efficient-quantum-circuits" rel="noopener noreferrer nofollow">post da Anthropic</a>, em alguns casos a melhoria foi de uma ordem de grandeza ou mais. O trabalho foi liderado por Andi Gu, do programa de bolsistas STEM da empresa, com mentoria de Alek Kemeny e colaboração de pesquisadores de Harvard e da QuEra Computing. Há também um artigo completo no arXiv.</p>
    <p>Não é uma notícia para quem usa IA só para escrever e-mails. Mas ela mostra uma direção concreta: modelos que não apenas respondem perguntas, e sim propõem soluções, recebem uma nota automática e se corrigem sozinhos por horas, com pouca ajuda humana.</p>

    <h2>Como o experimento foi montado</h2>
    <p>De acordo com a Anthropic, o Claude recebeu descrições em linguagem comum de oito tarefas de projeto de circuitos quânticos, além de um avaliador automático. Esse avaliador conferia se cada circuito proposto estava correto e atribuía uma pontuação baseada em qubits multiplicados por portas, uma medida aproximada do tempo de execução. As tarefas cobriam química, otimização, simulação quântica, teoria dos números e computação numérica.</p>
    <p>O modelo escrevia o código em Python, rodava, via a nota e revisava o projeto numa repetição contínua, sem que uma pessoa interviesse entre as rodadas. Essa receita, uma tarefa com resposta que pode ser verificada por máquina, é a mesma que vem sendo usada para agentes de programação, e a própria Anthropic reconhece que ela funciona melhor em problemas em que a correção é fácil de checar.</p>

    <h2>O que o Claude encontrou</h2>
    <p>O primeiro resultado destacado é a adição de pontos em curvas elípticas, uma operação central em criptografia. Depois de uma execução de 53 horas, o Claude propôs uma forma reversível de calcular uma etapa chamada divsteps, um método de inversão modular, sem guardar o histórico de ramificações. Numa família de projetos nova, um desenho usa 12% mais qubits, mas 17 vezes menos portas que o menor projeto anterior.</p>
    <p>O segundo resultado é um decodificador usado em interferometria quântica decodificada (DQI). O Claude trocou o algoritmo de Euclides estendido pelo de Berlekamp-Massey e passou a reconstruir valores temporários em vez de armazená-los. A contagem de portas caiu cerca de 12 vezes em relação à construção anterior do Google, e a necessidade de memória no pior caso baixou de 665 qubits para 19.</p>
    <p>Para definir o tamanho do registro de valores guardados, o modelo rodou 403 milhões de decodificações de amostra num simulador rápido. Concluiu que um único valor (19 qubits) bastava, com cerca de uma falha a cada 10 mil execuções, dentro do limite de erro permitido.</p>

    <h2>Como o modelo trabalhou</h2>
    <p>No caso do divsteps, a Anthropic conta que o Claude demonstrou identidades algébricas novas, derivou uma regra para recuperar a informação de ramificação a partir dos próprios números, validou o resultado numericamente e o formalizou na linguagem Lean, usada para verificar provas matemáticas. Ou seja, o resultado não ficou só no “parece funcionar”: passou por uma checagem formal.</p>
    <p>Os pesquisadores também pediram que o modelo desenvolvesse várias abordagens qualitativamente diferentes ao mesmo tempo. A Anthropic relata duas fraquezas. O Claude foi conservador demais, desconfiando de ganhos que já estavam bem comprovados e conferindo duas ou três vezes o mesmo resultado. E tendeu a preferir métodos conhecidos em vez de ideias novas, o que a equipe contornou com a exploração em paralelo e com lembretes ocasionais para ampliar a busca.</p>

    <h2>O que ainda não foi provado</h2>
    <p>É importante separar o que a empresa afirma do que o público costuma entender. O post lembra que as estimativas para simular a molécula FeMoco caíram de cerca de 50 trilhões de portas Toffoli, em 2017, para cerca de 340 milhões, uma redução de aproximadamente 150 mil vezes. Segundo a Anthropic, quase toda essa queda veio de muitos grupos de pesquisa ao longo de oito anos, e não do Claude.</p>
    <p>Projetar circuitos também é só uma parte da construção de um computador quântico tolerante a falhas. Os autores sugerem que a IA poderia, no futuro, otimizar em conjunto correção de erros, decodificação e hardware, mas tratam isso como especulação. Os números são da própria Anthropic e de um artigo ainda em divulgação, então vale esperar a revisão de outros grupos antes de tratá-los como definitivos.</p>

    <div class="callout-box">
      <span class="callout-label">Ponto de atenção</span>
      <p>Os resultados vêm do relato da fabricante do modelo. Reduzir portas e qubits num projeto teórico não significa que exista um computador quântico pronto para rodar esses circuitos hoje.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>Pouca gente no Brasil vai programar um computador quântico, mas o padrão por trás do estudo vale para qualquer trabalho com IA: quando existe um jeito automático de dizer se a resposta está certa, o modelo consegue iterar sozinho e chegar longe. É por isso que agentes de programação evoluem tão rápido, e é o caminho que tende a chegar a planilhas, relatórios e automações do dia a dia.</p>
    <p>Na prática, para quem trabalha por conta própria ou toca um negócio, a lição é desenhar tarefas com um critério de conferência claro. Se você pede um relatório e define de antemão como checar números, fontes e formato, a ferramenta erra menos e você revisa mais rápido. Sem esse critério, o risco é o de sempre, que explicamos em <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">como checar se a resposta da IA está certa</a>.</p>
    <p>Há ainda o recado de carreira. O modelo fez, em dias, um trabalho que normalmente ocuparia equipes de pesquisa por meses, mas dependeu de pessoas para formular o problema e interpretar o resultado. Esse é o desenho de futuro que já discutimos em <a href="/artigos/como-humanos-e-agentes-de-ia-vao-trabalhar-juntos-no-futuro">como humanos e agentes de IA vão trabalhar juntos</a> e em <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o futuro do trabalho autônomo</a>: quem sabe fazer a pergunta certa e validar a resposta ganha valor.</p>

    <h2>Um padrão que se repete na Anthropic</h2>
    <p>Esse não é o primeiro resultado científico recente atribuído à empresa. Na mesma semana, cobrimos como o <a href="/noticias/claude-rastreia-sementes-curvas-nist-ecdsa">Claude rastreou a origem das sementes das curvas NIST</a>, um enigma de criptografia de décadas. Antes, a Anthropic já havia apresentado novas versões de seus modelos, como mostramos em <a href="/noticias/anthropic-lanca-claude-fable-5-1-mythos-5-1">o lançamento do Claude Fable 5.1 e Mythos 5.1</a>.</p>
    <p>O que une esses episódios é o mesmo método: dar ao modelo um problema difícil, um verificador automático e tempo para tentar. A empresa e seus concorrentes tendem a anunciar mais resultados desse tipo, porque são fáceis de medir e rendem manchetes.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Três pontos merecem atenção. O primeiro é se outros grupos vão reproduzir os ganhos e confirmar as contagens de portas. O segundo é se a mesma abordagem aparece em produtos para o público, como agentes que revisam o próprio trabalho até passar numa checagem. O terceiro é o debate sobre criptografia: circuitos mais baratos para operações em curvas elípticas aproximam, em tese, o dia em que um computador quântico poderá quebrar esse tipo de proteção, o que reforça a discussão sobre migrar para criptografia resistente a ataques quânticos.</p>
    <p>Por enquanto, não há mudança imediata para quem usa IA no trabalho. Mas o estudo é mais um indício de que a diferença entre ferramentas está migrando de “quem responde melhor” para “quem executa e se confere melhor”, e isso vale a pena acompanhar na hora de escolher onde investir seu tempo e seu dinheiro. Se está comparando assistentes, o guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> ajuda a começar.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Post de pesquisa da Anthropic, <a href="https://www.anthropic.com/research/designing-efficient-quantum-circuits" rel="noopener noreferrer nofollow">Designing more efficient quantum circuits with Claude</a>, de 16 de outubro de 2026, com artigo completo no arXiv (2610.22367).</p>
    </div>
  `,
  faq: [
    {
      question: "O que o Claude Mythos 5 fez nesse estudo?",
      answer:
        "Projetou circuitos quânticos para oito tarefas, recebendo uma nota automática a cada tentativa e revisando o projeto sozinho. Em um decodificador, a Anthropic diz que a contagem de portas caiu cerca de 12 vezes.",
    },
    {
      question: "Isso significa que o computador quântico já está pronto?",
      answer:
        "Não. Projetar circuitos é só uma parte do problema, e os resultados são da própria Anthropic, ainda em divulgação. Um computador quântico tolerante a falhas depende de muito mais.",
    },
  ],
};
