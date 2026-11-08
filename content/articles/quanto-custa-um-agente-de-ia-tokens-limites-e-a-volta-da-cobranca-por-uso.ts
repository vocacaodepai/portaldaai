import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "quanto-custa-um-agente-de-ia-tokens-limites-e-a-volta-da-cobranca-por-uso",
  title: "Quanto custa um agente de IA: tokens, limites e cobrança por uso",
  seoTitle: "Quanto custa um agente de IA? Tokens e limites explicados",
  excerpt:
    "Entenda quanto custa um agente de IA: por que ele gasta bem mais tokens que um chat, o fim do uso à vontade nos planos e como controlar o gasto no dia a dia.",
  metaDescription:
    "Quanto custa um agente de IA: o que é token, por que gastam 5 a 30 vezes mais, o orçamento único do ChatGPT, modelos abertos e como não estourar o limite.",
  category: "futuro",
  articleSubcategory: "agentes-de-ia",
  date: "2026-11-08",
  readTime: 8,
  imageQuery: "server room data center cost",
  seed: 1153,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Um agente de IA custa mais que um chat porque planeja, consulta ferramentas e revisa o próprio trabalho: segundo o Gartner, gasta de 5 a 30 vezes mais tokens para a mesma tarefa.",
    "A cobrança por uso está voltando aos planos de assinatura: a partir de dezembro, ChatGPT e Codex passam a dividir um orçamento único de tokens nos planos Plus, Pro e Business.",
    "O caminho para pagar menos é escolher o modelo pelo tamanho da tarefa, travar limites de gasto e medir resultado, não volume de uso; modelos abertos devem assumir a parte rotineira.",
  ],
  content: `
    <p>Quanto custa um agente de IA depende de quantos tokens ele gasta para terminar a tarefa, e um agente gasta muito mais que um chat comum. Segundo o Gartner, a mesma tarefa consome de 5 a 30 vezes mais tokens quando feita por um agente. É por isso que as empresas de IA estão trocando o "uso à vontade" por orçamentos e limites nos planos.</p>

    <p>Este guia explica o que é token sem jargão, por que o agente custa mais mesmo com o preço do token caindo, o que muda nos planos do ChatGPT e do Claude, o papel dos modelos abertos e como uma pequena empresa brasileira pode fazer a conta antes de colocar um agente para trabalhar.</p>

    <h2>O que é token e por que ele virou a moeda da IA?</h2>

    <p>Token é a unidade que o modelo usa para ler e escrever. Uma palavra em português costuma virar um ou mais tokens, e tudo entra na conta: a sua pergunta, os arquivos que o modelo lê, o raciocínio interno e a resposta. Nas APIs, o preço é cobrado por milhão de tokens; nos planos de assinatura, os tokens aparecem como limite de uso.</p>

    <p>Num chat simples, a conta é pequena: você pergunta, o modelo responde, acabou. Num agente, cada passo é uma nova rodada. O <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, diferente do chatbot</a>, decide o que fazer, abre uma página, lê um documento, roda um código, confere o resultado e tenta de novo se errar. Cada uma dessas etapas relê o contexto acumulado, e o contexto cresce a cada passo.</p>

    <p>O resultado é que o preço por token pode cair e, mesmo assim, a conta subir. Para quem usa IA no trabalho, entender essa lógica passa a ser parte do básico, do mesmo jeito que entender plano de celular por gigabyte.</p>

    <h2>Por que o agente gasta tanto: o paradoxo da inferência</h2>

    <p>Em outubro, o Gartner previu que o custo de inferência por fluxo de trabalho com agentes vai subir mais de cinco vezes até 2028, mesmo com o token ficando mais barato. Segundo a <a href="https://venturebeat.com/orchestration/gartner-says-agent-costs-will-rise-fivefold-by-2028-even-as-tokens-get-cheaper-here-is-how-to-keep-them-in-check" target="_blank" rel="noopener noreferrer">reportagem da VentureBeat</a>, a consultoria chama isso de "paradoxo da inferência": os ganhos de eficiência são usados para lançar modelos mais pesados, e o token mais barato torna viáveis tarefas que consomem muito mais tokens.</p>

    <p>O analista Will Sommer, do Gartner, estima que agentes precisam de 5 a 30 vezes mais tokens que um chatbot para a mesma tarefa. Na mesma reportagem, uma pesquisa da VentureBeat com 109 empresas mostrou que 21% das que usam plataformas de orquestração não têm nenhum limite automático de gasto com tokens dos agentes, e só 31% mandam tarefas rotineiras para modelos mais baratos.</p>

    <p>Quem já leu sobre <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes e o futuro do trabalho autônomo</a> conhece a promessa: delegar tarefas inteiras. O custo é a outra metade dessa história, e ela começou a aparecer na fatura.</p>

    <h3>O caso extremo</h3>

    <p>O presidente da aceleradora Y Combinator, Garry Tan, disse que gasta entre US$ 100 mil e US$ 200 mil por ano em tokens com agentes que cuidam de código, pesquisa e tarefas pessoais. Segundo o <a href="https://techcrunch.com/2026/11/02/y-combinators-garry-tan-uses-ai-agents-so-much-he-spends-up-to-200k-a-year-on-tokens/" target="_blank" rel="noopener noreferrer">TechCrunch</a>, ele mesmo chamou o gasto de privilégio e afirmou que agentes pessoais ainda são caros demais para virar coisa de todo mundo.</p>

    <h2>O fim do "uso à vontade" nos planos de assinatura</h2>

    <p>Os planos mensais de IA nasceram com cara de assinatura de streaming: paga um valor fixo e usa quanto quiser. Com os agentes, essa conta deixou de fechar, e os planos estão mudando.</p>

    <table>
      <thead>
        <tr><th>Mudança</th><th>O que acontece</th><th>O que significa para você</th></tr>
      </thead>
      <tbody>
        <tr><td>ChatGPT: orçamento único</td><td>A partir de dezembro, Plus, Pro e Business dividem um só saldo de tokens entre ChatGPT e Codex; conversas com modelos Instant não contam</td><td>Tarefa pesada de agente consome o mesmo saldo do chat avançado</td></tr>
        <tr><td>Claude: plano Ultra</td><td>O plano de US$ 200 da Anthropic virou Ultra, sem a janela de cinco horas para contas verificadas</td><td>Os limites mudam de formato, mas continuam existindo</td></tr>
        <tr><td>Empresas: limite por time</td><td>Empresas restringem quem usa qual ferramenta e quanto</td><td>Uso de IA passa a ter orçamento, como viagem e software</td></tr>
      </tbody>
    </table>

    <p>Sobre o ChatGPT, a <a href="https://the-decoder.com/openais-upcoming-chat-and-work-merger-in-chatgpt-signals-the-end-of-all-you-can-prompt-pricing/" target="_blank" rel="noopener noreferrer">análise do The Decoder</a> sobre a página de ajuda da OpenAI mostra que o saldo restante e o horário de renovação ficam nas configurações, e que quem chega ao limite pode esperar a renovação, mudar de plano ou comprar créditos extras. O tamanho do saldo de cada plano não foi divulgado. A mudança do Claude está na notícia sobre o <a href="/noticias/anthropic-renomeia-planos-max-ultra-sem-limite-cinco-horas">plano Max que virou Ultra</a>.</p>

    <p>Quem já lidou com os <a href="/artigos/limites-de-uso-do-gemini-janela-de-5-horas-planos-e-como-economizar">limites de uso do Gemini</a> reconhece o padrão. Antes de assinar, vale comparar o que cada plano entrega, como no <a href="/artigos/chatgpt-plus-vale-a-pena-review-2026">review do ChatGPT Plus</a> e no guia de <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">planos do Gemini</a>.</p>

    <h2>Modelos abertos: a aposta para baratear a parte rotineira</h2>

    <p>Se o problema é volume, a resposta das empresas está sendo trocar de modelo nas etapas simples. Em novembro, o Gartner publicou a previsão de que, até 2030, 90% das etapas operacionais dos fluxos de agentes nas empresas vão rodar em modelos de pesos abertos (open-weight), aqueles que a empresa pode baixar e rodar na própria infraestrutura.</p>

    <p>Segundo a <a href="https://www.theregister.com/ai-and-ml/2026/11/03/open-models-can-do-90-of-agentic-work-at-a-twentieth-of-the-cost-of-a-frontier-llm-gartner/5307132" target="_blank" rel="noopener noreferrer">reportagem do The Register</a> sobre o estudo, um modelo aberto custa cerca de um quarto do modelo fechado mais barato de desempenho parecido, e pode sair até 20 vezes mais barato que usar um modelo de fronteira em todas as etapas. Na prática, a economia por tarefa fica mais perto de 5 a 6 vezes, porque os modelos abertos de hoje escrevem mais e repetem mais tentativas.</p>

    <p>O exemplo real mais citado é o da fintech Revolut, que trocou ferramentas comerciais de código por um modelo GLM rodando nos próprios servidores e relatou corte de cerca de 90% no custo, como mostra a <a href="/noticias/revolut-corta-90-por-cento-custo-ia-codigo-glm-auto-hospedado">notícia sobre a Revolut</a>. Para quem quer entender a diferença entre modelos, o guia sobre <a href="/artigos/modelo-pequeno-ou-grande-de-ia-velocidade-custo-e-qualidade-para-quem-usa">modelo pequeno ou grande</a> e o caso do <a href="/artigos/muse-spark-open-da-meta-modelo-aberto-licenca-e-como-testar">modelo aberto da Meta</a> ajudam.</p>

    <h2>Exemplo brasileiro: fazendo a conta antes de ligar o agente</h2>

    <p>Imagine a Lúcia, dona de uma agência de marketing com três pessoas em Recife. Ela quer um agente que leia os dados de campanha de cada cliente, monte o relatório semanal e escreva um resumo. São 20 clientes, quatro relatórios por mês cada: 80 relatórios.</p>

    <p>Os números a seguir são uma conta ilustrativa, não o preço de nenhuma empresa. Se a mesma tarefa num chat simples gastasse 5 mil tokens, o agente gastaria de 25 mil a 150 mil, usando a faixa de 5 a 30 vezes do Gartner. Pense num modelo que custe US$ 3 por milhão de tokens, ordem de grandeza próxima à que a Revolut citou para ferramentas comerciais (cerca de dez vezes os US$ 0,30 do modelo próprio):</p>

    <ul>
      <li><strong>Cenário enxuto:</strong> 80 relatórios x 25 mil tokens = 2 milhões de tokens, cerca de US$ 6 no mês.</li>
      <li><strong>Cenário pesado:</strong> 80 relatórios x 150 mil tokens = 12 milhões de tokens, cerca de US$ 36 no mês.</li>
      <li><strong>Com modelo mais barato nas etapas simples:</strong> dividir por 5 a 6, seguindo a estimativa prática do Gartner para modelos abertos.</li>
    </ul>

    <p>A diferença de seis vezes entre os cenários vem de decisões que a Lúcia controla: quantos arquivos o agente lê, quantas vezes revisa, qual modelo usa em cada etapa. Lembre que a cobrança em dólar vem no cartão com IOF e cotação do dia. Se ela usar créditos de API de um plano, o guia sobre <a href="/artigos/creditos-de-api-do-claude-nos-planos-max-e-team-como-resgatar-o-que-cobrem-e-limites">créditos de API do Claude</a> mostra como funcionam.</p>

    <h2>Como controlar o gasto com agentes</h2>

    <ul class="checklist">
      <li>Defina um teto de gasto mensal na plataforma antes do primeiro uso</li>
      <li>Use o modelo menor nas etapas simples (classificar, extrair, formatar) e o maior só no raciocínio difícil</li>
      <li>Corte o contexto: mande ao agente só os arquivos que importam para a tarefa</li>
      <li>Limite o número de tentativas e de passos por tarefa</li>
      <li>Meça o resultado (relatório entregue, ticket resolvido), não a quantidade de tokens</li>
      <li>Revise as permissões do agente para ele não sair abrindo ferramentas à toa</li>
    </ul>

    <p>O último item conversa com o guia de <a href="/artigos/permissoes-de-agentes-de-ia-o-que-liberar-o-que-travar-e-quando-pedir-aprovacao">permissões de agentes de IA</a>: cada ferramenta extra que o agente pode chamar é mais uma rodada de tokens. Use este prompt para estimar o custo antes de criar o fluxo:</p>

    <pre><code>Vou criar um agente de IA para esta tarefa: [descreva].
Liste as etapas que ele precisa executar e, para cada uma,
diga se um modelo pequeno resolve ou se precisa de um modelo
avançado. Estime quantas vezes o agente vai reler o contexto
e aponte onde dá para cortar arquivos, passos ou tentativas.</code></pre>

    <h2>Erros comuns ao calcular o custo de um agente</h2>

    <ul>
      <li><strong>Olhar só o preço do token:</strong> o que pesa é o total de tokens por tarefa, que no agente é muitas vezes maior.</li>
      <li><strong>Usar o modelo mais avançado em tudo:</strong> é a forma mais rápida de estourar o limite do plano.</li>
      <li><strong>Medir produtividade por uso:</strong> um memorando interno da Amazon avisou que contar tokens não prova trabalho, como mostra a <a href="/noticias/amazon-alerta-engenheiros-tokenmaxxing-metricas-uso-ia">notícia sobre o "tokenmaxxing"</a>.</li>
      <li><strong>Esquecer o câmbio:</strong> quase toda cobrança de API é em dólar.</li>
      <li><strong>Não testar em pequena escala:</strong> rode 10 tarefas, meça o gasto real e só depois multiplique.</li>
    </ul>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Preço por token, tamanho dos limites e regras dos planos mudam com frequência. Antes de fechar um orçamento, consulte a página oficial de preços de cada empresa.</p></div>

    <p>Os agentes de IA vão ficar mais baratos por tarefa com o tempo, mas a tendência dos próximos anos é pagar pelo que se usa, e não mais um valor fixo para usar à vontade. Quem aprender agora a escolher o modelo certo para cada etapa e a medir resultado vai gastar menos e entregar mais. Para acompanhar essa mudança, siga a categoria Futuro do Portal da AI.</p>
  `,
  faq: [
    {
      question: "Quanto custa usar um agente de IA?",
      answer:
        "Depende de quantos tokens a tarefa consome e do modelo usado. Segundo o Gartner, um agente gasta de 5 a 30 vezes mais tokens que um chatbot para a mesma tarefa, porque planeja, consulta ferramentas e revisa o trabalho. Nos planos de assinatura isso aparece como limite de uso; na API, como cobrança por milhão de tokens, geralmente em dólar.",
    },
    {
      question: "O que é token em inteligência artificial?",
      answer:
        "Token é a unidade que o modelo usa para ler e escrever texto. Uma palavra pode virar um ou mais tokens, e entram na conta a pergunta, os arquivos lidos, o raciocínio interno e a resposta. As empresas de IA cobram por milhão de tokens nas APIs e usam os tokens para medir os limites dos planos mensais.",
    },
    {
      question: "O ChatGPT vai ter limite de tokens?",
      answer:
        "Segundo a página de ajuda da OpenAI citada pelo The Decoder, a partir de dezembro os planos Plus, Pro e Business passam a dividir um orçamento único de tokens entre ChatGPT e Codex. Conversas com modelos Instant não contam. Ao chegar ao limite, dá para esperar a renovação, mudar de plano ou comprar créditos. O tamanho do saldo não foi divulgado.",
    },
    {
      question: "Por que agentes de IA estão ficando mais caros se o token está mais barato?",
      answer:
        "O Gartner chama isso de paradoxo da inferência. Os ganhos de eficiência viram modelos mais pesados, e o token mais barato torna viáveis tarefas longas, que consomem muito mais tokens. Por isso a consultoria prevê custo por fluxo de agente mais de cinco vezes maior até 2028, mesmo com o preço unitário caindo.",
    },
    {
      question: "Modelo aberto de IA é mais barato?",
      answer:
        "Em geral, sim, nas tarefas rotineiras. Segundo o Gartner, um modelo aberto custa cerca de um quarto do fechado mais barato de desempenho parecido, mas a economia real por tarefa fica perto de 5 a 6 vezes, porque esses modelos repetem mais tentativas. Rodar na própria máquina exige hardware caro; para a maioria, o caminho é usar via API.",
    },
  ],
};
