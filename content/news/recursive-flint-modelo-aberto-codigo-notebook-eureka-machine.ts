import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "recursive-flint-modelo-aberto-codigo-notebook-eureka-machine",
  title: "Recursive lança o Flint, modelo de código grátis que roda no notebook",
  summary:
    "A startup de Richard Socher liberou o Flint, modelo aberto de código com 40 bilhões de parâmetros que roda offline em notebook e diz ter sido feito quase todo por IA.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/21/recursive-launches-flint-a-laptop-coding-model-it-says-was-largely-built-by-ai/",
  date: "2026-10-21",
  publishedAt: "2026-10-21T19:22:00-03:00",
  topic: "lancamentos",
  imageQuery: "Richard Socher portrait",
  content: `
    <p>A Recursive, startup fundada em 2025 com o objetivo de criar uma IA capaz de se aprimorar sozinha, lançou nesta quarta-feira, 21 de outubro de 2026, o Flint, seu primeiro modelo. Segundo o <a href="https://techcrunch.com/2026/10/21/recursive-launches-flint-a-laptop-coding-model-it-says-was-largely-built-by-ai/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>, trata-se de um modelo de programação gratuito, que roda localmente em um notebook, e que a própria empresa afirma ter sido construído em grande parte por um sistema de IA. Para quem programa, automatiza tarefas ou vende serviços que dependem de código, a novidade mexe em duas perguntas ao mesmo tempo: dá para trabalhar com um assistente de código bom sem pagar assinatura, e até que ponto a IA já consegue construir a próxima IA?</p>

    <h2>O que é o Flint e como ele funciona</h2>
    <p>O Flint está disponível gratuitamente no Hugging Face, sob a licença Apache 2.0, que permite uso e modificação sem custo, inclusive em projetos comerciais. É um modelo do tipo mistura de especialistas (mixture-of-experts) com 40 bilhões de parâmetros no total, dos quais apenas 2,5 bilhões ficam ativos a cada tarefa. Na prática, isso significa que o modelo é grande no papel, mas gasta pouca memória e poder de processamento para responder, e é isso que o deixa viável em um computador pessoal.</p>
    <p>Rodar localmente traz vantagens concretas, conforme a reportagem: o desenvolvedor pode trabalhar offline, manter o código privado sem enviar nada a servidores de terceiros e evitar a cobrança por uso da nuvem. Para freelancers e pequenas empresas que lidam com código de clientes sob contrato de confidencialidade, essa combinação pesa bastante.</p>

    <h2>Os números de desempenho divulgados</h2>
    <p>A Recursive diz que o Flint alcança cerca de 131 tokens por segundo em um MacBook Pro com chip M4 Pro da Apple. Modelos parecidos, como o Gemma 4, do Google, e o Nemotron 3.5 Lightning, da Nvidia, ficaram entre 58 e 69 tokens por segundo na mesma máquina, de acordo com a empresa. Em uma placa RTX Spark, da Nvidia, o Flint passou de 150 tokens por segundo.</p>
    <p>Na avaliação de qualidade, a Recursive afirma que o Flint superou todos os outros modelos com menos de 50 bilhões de parâmetros no SWE-Bench Verified, teste que mede a capacidade de corrigir erros reais em projetos de software. Na média de seis testes usados pela própria empresa, só o Qwen3.8 27B, da Alibaba, teve nota maior. Vale lembrar que são números divulgados pelo fabricante, ainda sem verificação independente em larga escala.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Resumo do lançamento</span>
      <p>Flint: modelo aberto de código, licença Apache 2.0, 40 bilhões de parâmetros (2,5 bilhões ativos), disponível no Hugging Face, cerca de 131 tokens por segundo em um MacBook Pro M4 Pro. Fonte: TechCrunch, 21 de outubro de 2026.</p>
    </div>

    <h2>Um modelo feito, em boa parte, por IA</h2>
    <p>O ponto que mais chama atenção é o processo. Um sistema automatizado de pesquisa da Recursive, chamado Eureka Machine, participou de quase todas as etapas, do pré-treinamento ao pós-treinamento e à inferência. Ele gera ideias, roda experimentos e usa os resultados para escolher os próximos passos. Segundo a empresa, entre as contribuições dele estão um formato de modelo mais esparso, treinamento em baixa precisão numérica, que reduziu o Flint em 71% com perda de qualidade quase nula, e rotinas de computação personalizadas.</p>
    <p>Uma equipe pequena construiu o modelo do zero em menos de quatro meses, com supervisão humana. A Recursive não informou quanto tempo de pesquisa humana o sistema economizou. A empresa surgiu do anonimato em maio de 2026 com US$ 650 milhões captados a uma avaliação de US$ 4,65 bilhões, com apoio de GV, Nvidia e AMD Ventures, e é comandada por Richard Socher, ex-cientista-chefe da Salesforce. Em junho, assinou um contrato de US$ 410 milhões em computação com a AWS.</p>

    <h2>Limites e o que dizem os primeiros testes</h2>
    <p>A própria Recursive reconhece que o Flint exige mais orientação do que os grandes assistentes de programação pagos e recomenda dividir tarefas grandes em etapas menores. Will Knight, da Wired, testou o modelo em um Mac com 48 GB de memória e pediu a construção de um aplicativo de lista de tarefas e de uma ferramenta de pesquisa na web. Segundo a reportagem, modelos pequenos costumam errar ou ser lentos em comparação com Claude ou Codex, mas o Flint atendeu corretamente todos os pedidos dele.</p>
    <p>O contexto competitivo também é relevante. A reportagem cita o Muse Spark Open, da Meta, lançado na semana anterior, com 816 bilhões de parâmetros e exigência de pelo menos 1 terabyte de memória, em contraste com a proposta mais enxuta do Flint. A diferença mostra duas estratégias para modelos abertos: gigantes que exigem máquinas potentes e modelos compactos para o computador do dia a dia.</p>

    <h2>A discussão sobre IA que se aperfeiçoa sozinha</h2>
    <p>A reportagem lembra que alguns pesquisadores temem que uma IA capaz de se aprimorar sozinha escape ao controle humano. Socher disse à Wired que a meta de longo prazo é que a Eureka Machine alcance o aperfeiçoamento recursivo completo, com humanos supervisionando e podendo interromper o processo se algo der errado. A Recursive afirma que cada novo modelo deve tornar a Eureka Machine uma pesquisadora melhor, acelerando o desenvolvimento do próximo. A reportagem cita ainda que a OpenAI informou, em setembro, que seus agentes de IA registravam 3,1 dias de trabalho para cada dia trabalhado por um pesquisador humano. Esses são relatos das empresas, e a promessa de supervisão ainda precisa ser testada na prática.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa IA para trabalhar ou ganhar dinheiro no Brasil, o Flint é um sinal de que assistentes de código bons e gratuitos estão chegando a computadores comuns. Quem faz sites, automações ou pequenos sistemas para clientes pode, em teoria, reduzir a conta mensal de assinaturas e manter o código de terceiros dentro da própria máquina. Antes de trocar de ferramenta, porém, vale testar com tarefas reais, porque benchmark de fabricante não garante o mesmo resultado no seu fluxo de trabalho.</p>
    <ul>
      <li><strong>Escolha da ferramenta.</strong> Se você ainda compara serviços pagos, o guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> ajuda a decidir onde investir.</li>
      <li><strong>Código aberto.</strong> Entenda o que muda ao usar modelos com licença livre em <a href="/artigos/ia-codigo-aberto-o-que-muda-para-quem-usa">IA de código aberto: o que muda para quem usa</a>.</li>
      <li><strong>Mercado de programação.</strong> A discussão sobre quem cria o código é tema de <a href="/artigos/ia-vai-substituir-programadores-o-que-muda-ate-2030">IA vai substituir programadores?</a>.</li>
      <li><strong>Outros modelos abertos.</strong> O Portal da AI também cobriu a <a href="/noticias/nvidia-nemotron-3-5-super-vl-bolt-modelos-abertos-agentes">família Nemotron 3.5 da Nvidia</a>, citada como concorrente do Flint.</li>
      <li><strong>Agentes.</strong> Para entender onde um modelo de código entra em automações, veja a <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">diferença entre agente, chatbot e automação</a>.</li>
    </ul>
    <p>Na prática, quem tem um notebook com memória razoável pode baixar o Flint no Hugging Face e comparar com o assistente que já usa em tarefas pequenas e repetitivas, como escrever scripts, corrigir erros simples e montar protótipos. Para projetos grandes, a própria empresa admite que modelos pagos de ponta ainda exigem menos orientação. O mais útil é tratar o Flint como mais uma opção gratuita para testar, sem abandonar o que já funciona para você.</p>
  `,
};
