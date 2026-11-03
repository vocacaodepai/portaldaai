import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "destilacao-de-modelos-de-ia-o-que-e-como-funciona-e-por-que-gera-briga",
  title: "Destilação de IA: o que é e por que gera briga entre empresas",
  seoTitle: "Destilação de IA: o que é e como funciona",
  excerpt:
    "Destilação é quando um modelo de IA grande ensina um menor a imitá-lo. Veja como funciona, por que barateia a IA e por que virou briga entre empresas.",
  metaDescription:
    "Destilação de modelos de IA para iniciantes: professor e aluno, por que deixa a IA menor e mais barata, o exemplo do DeepSeek e as acusações de cópia.",
  category: "iniciantes",
  articleSubcategory: "conceitos",
  date: "2026-11-03",
  readTime: 7,
  imageQuery: "chemistry distillation flask laboratory",
  seed: 1113,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Destilação é treinar um modelo menor (o aluno) com as respostas de um modelo maior (o professor), para que o pequeno imite o comportamento do grande gastando muito menos.",
    "A técnica foi descrita em 2015 por Hinton, Vinyals e Dean e hoje ajuda a criar versões compactas, como os modelos destilados do DeepSeek-R1, que vão de 1,5 bilhão a 70 bilhões de parâmetros.",
    "Virou briga porque também pode ser usada para copiar um concorrente: basta mandar milhares de perguntas ao modelo dele e treinar outro com as respostas.",
  ],
  content: `
    <p>Destilação de IA é a técnica de treinar um modelo pequeno com as respostas de um modelo grande, para que o pequeno aprenda a se comportar de forma parecida. O grande faz o papel de professor e o pequeno, de aluno. O resultado é uma IA mais rápida e barata de rodar, que perde parte da qualidade, mas não toda.</p>

    <p>O termo apareceu nas notícias de 2026 por dois motivos: é assim que muitas empresas criam versões leves dos seus modelos, e é também do que algumas acusam as concorrentes, de usar as respostas delas para treinar rivais. Este guia explica a ideia sem fórmula, mostra exemplos reais e diz o que isso muda para quem só usa IA no dia a dia. Fontes conferidas em 03/11/2026.</p>

    <h2>A ideia do professor e do aluno</h2>

    <p>Pense em um cozinheiro experiente ensinando um aprendiz. O aprendiz não precisa repetir os 20 anos de tentativa e erro do mestre: ele observa o resultado de cada prato e aprende a reproduzir o que importa. Na IA é parecido. O modelo grande já foi treinado com uma montanha de dados e muito poder de computação. O aluno, menor, aprende a imitar as saídas dele.</p>

    <p>O detalhe que faz a técnica funcionar é que o professor não entrega só a resposta certa, entrega também o quanto achou provável cada alternativa. Se a pergunta é "que fruta é amarela e comprida?", o professor pode dar 90% para banana, 5% para milho e quase nada para tomate. Essa "dúvida" ensina ao aluno quais respostas são parecidas entre si. Para entender o treino comum, que vem antes disso, vale ler <a href="/artigos/como-uma-ia-aprende-treinamento-ajuste-fino-e-por-que-erra">como uma IA aprende</a>.</p>

    <h2>De onde veio a destilação</h2>

    <p>A técnica ganhou nome no artigo <a href="https://arxiv.org/abs/1503.02531" target="_blank" rel="noopener noreferrer">Distilling the Knowledge in a Neural Network</a>, publicado em 2015 por Geoffrey Hinton, Oriol Vinyals e Jeff Dean. O problema que eles atacavam era prático: juntar vários modelos dá resultados melhores, mas rodar todos ao mesmo tempo custa caro demais. A proposta foi comprimir o conhecimento do conjunto em um único modelo, e os autores relataram ganho em um modelo acústico usado comercialmente.</p>

    <p>Onze anos depois, a lógica é a mesma, só que com modelos de linguagem. Em vez de reconhecer sons, o aluno aprende a escrever, resumir e raciocinar como o professor. Se você quer o vocabulário básico antes de seguir, o <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de inteligência artificial</a> ajuda.</p>

    <h2>Um exemplo real: os modelos destilados do DeepSeek</h2>

    <p>O caso mais didático é o do DeepSeek-R1. Segundo a <a href="https://huggingface.co/deepseek-ai/DeepSeek-R1" target="_blank" rel="noopener noreferrer">página oficial do modelo no Hugging Face</a>, a empresa publicou seis versões destiladas, de 1,5 bilhão a 70 bilhões de parâmetros. Elas partem de modelos abertos de outras empresas, Qwen2.5 e Llama, e foram ajustadas com exemplos gerados pelo próprio R1.</p>

    <table>
      <thead>
        <tr><th>Modelo destilado</th><th>Modelo de base (aluno)</th></tr>
      </thead>
      <tbody>
        <tr><td>1,5B e 7B</td><td>Qwen2.5-Math</td></tr>
        <tr><td>8B</td><td>Llama 3.1 8B</td></tr>
        <tr><td>14B e 32B</td><td>Qwen2.5</td></tr>
        <tr><td>70B</td><td>Llama 3.3 70B Instruct</td></tr>
      </tbody>
    </table>

    <p>Repare no detalhe da licença: a página diz que os pesos estão sob licença MIT, que permite uso comercial e inclusive destilação. Ou seja, aqui a técnica foi usada às claras, com autorização. Modelos pequenos assim são os que conseguem rodar em computadores comuns, tema do guia sobre <a href="/artigos/ia-codigo-aberto-o-que-muda-para-quem-usa">IA de código aberto</a>.</p>

    <h2>Por que a destilação virou briga</h2>

    <p>O problema começa quando o professor não autorizou. Qualquer pessoa com acesso a um chatbot pode mandar milhares de perguntas, guardar as respostas e usá-las para treinar outro modelo. O site <a href="https://thenextweb.com/news/deepseek-moonshot-gpt-6-astra-distillation" target="_blank" rel="noopener noreferrer">The Next Web</a> resume assim: a prática ajuda um modelo menor a reproduzir capacidades avançadas a um custo muito menor, e OpenAI, Anthropic e Google argumentam que ela permite copiar sem investimento comparável.</p>

    <p>Em outubro de 2026, a mesma publicação repercutiu reportagem do The Information segundo a qual DeepSeek e Moonshot teriam usado muito o GPT-6 Astra para treinar modelos recentes, informação que o veículo diz não ter confirmado de forma independente. Antes disso, a OpenAI afirmou ter derrubado uma campanha coordenada ligada à Moonshot, com mais de 15 mil usuários, e a Anthropic disse que novas proteções cortaram de 90% a 99% os dados coletados em ataques desse tipo. O Portal da AI cobriu os dois episódios nas notícias sobre <a href="/noticias/deepseek-moonshot-treinaram-modelos-com-gpt-6-astra">DeepSeek, Moonshot e o GPT-6 Astra</a> e sobre <a href="/noticias/openai-moonshot-destilacao-raciocinio-chatgpt">a extração do raciocínio do ChatGPT</a>.</p>

    <div class="callout-box">
      <span class="callout-label">Destilação não é sempre cópia</span>
      <p>A mesma técnica serve para a própria empresa criar a versão leve do seu modelo, para pesquisadores estudarem modelos e para quem usa pesos com licença que permite. O conflito está em usar respostas de terceiros sem autorização e contra os termos do serviço.</p>
    </div>

    <h2>O que muda para quem usa IA</h2>

    <p>Para o usuário comum, a destilação explica por que existem modelos rápidos e baratos que respondem quase tão bem quanto os grandes. Essa é uma das técnicas usadas para criar versões compactas, ao lado de outras. Quando você escolhe um modelo "mini", "flash" ou "lite", está trocando um pouco de qualidade por velocidade e custo, como mostra o guia de <a href="/artigos/modelo-pequeno-ou-grande-de-ia-velocidade-custo-e-qualidade-para-quem-usa">modelo pequeno ou grande de IA</a>.</p>

    <h3>Um exemplo com números</h3>

    <p>Cenário ilustrativo: uma loja online em Belo Horizonte usa IA para responder 3 mil perguntas por mês sobre prazo de entrega e troca. Se um modelo grande custasse, em valores hipotéticos, R$ 0,10 por resposta e um pequeno R$ 0,01, a conta mensal cairia de R$ 300 para R$ 30. Para perguntas repetitivas e simples, o pequeno costuma bastar. Para contratos ou cálculos, o grande compensa. O mesmo raciocínio aparece no guia sobre <a href="/artigos/claude-haiku-5-5-quando-o-modelo-pequeno-basta-preco-e-limites">quando o modelo pequeno basta</a>.</p>

    <p>Outro efeito é no celular: modelos pequenos o suficiente rodam no próprio aparelho, sem internet, o que ajuda na privacidade. É o caso explicado em <a href="/artigos/ia-no-celular-sem-internet-gemini-nano-e-privacidade">IA no celular sem internet</a>.</p>

    <h2>Limites do modelo destilado</h2>

    <p>O aluno raramente supera o professor no geral. Ele tende a ir bem nas tarefas em que foi treinado e pior fora delas. Também herda os defeitos do professor: se o grande inventa um fato com confiança, o pequeno pode aprender a inventar do mesmo jeito. Por isso, a checagem continua valendo, como ensina o guia de <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>.</p>

    <ul class="checklist">
      <li>Desconfie de modelo pequeno que diz ser "igual" a um grande em tudo; olhe testes em tarefas parecidas com a sua.</li>
      <li>Rankings ajudam, mas medem tarefas específicas; veja <a href="/artigos/ranking-de-ia-e-benchmarks-como-ler-arena-e-testes-antes-de-escolher-qual-usar">como ler rankings e benchmarks</a>.</li>
      <li>Em tarefas longas, o pequeno pode perder o fio da meada antes; entenda a <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">janela de contexto</a>.</li>
      <li>Para problemas difíceis, um modelo maior com modo de raciocínio ligado costuma acertar mais; veja <a href="/artigos/modos-de-raciocinio-em-ia-quando-ligar-o-pensar-e-quando-nao-vale">quando ligar o Pensar</a>.</li>
    </ul>

    <h2>Erros comuns sobre destilação</h2>

    <p>O primeiro erro é achar que destilar é copiar os "arquivos" do outro modelo. Não é: o aluno nunca vê os pesos do professor, só as respostas. Por isso a disputa é sobre uso das respostas e termos de serviço, não sobre invasão de servidor. O segundo é pensar que todo modelo barato é cópia; muitos são destilados pela própria empresa, de propósito.</p>

    <p>O terceiro erro é achar que o tema não afeta quem só usa. Afeta: a briga explica por que algumas empresas escondem o raciocínio detalhado dos modelos e limitam o volume de perguntas automáticas. O quarto é confundir destilação com ajuste fino comum. No ajuste fino, o modelo aprende com exemplos escritos por pessoas ou coletados de fontes; na destilação, os exemplos vêm de outro modelo.</p>

    <h2>Para levar desta leitura</h2>

    <p>Destilação é um professor grande ensinando um aluno pequeno, e ela está por trás de boa parte das IAs rápidas que você usa. É legítima quando a empresa destila o próprio modelo ou quando a licença permite, e vira conflito quando alguém treina um rival com as respostas de outro sem autorização. Na próxima vez que escolher entre um modelo grande e um compacto, lembre da troca: velocidade e custo de um lado, qualidade em tarefas difíceis do outro. Para entender a família de termos por trás disso, siga para <a href="/artigos/ia-machine-learning-e-deep-learning-qual-a-diferenca-e-onde-entra-a-generativa">IA, machine learning e deep learning</a>.</p>
  `,
  faq: [
    {
      question: "O que é destilação de modelos de IA?",
      answer:
        "É treinar um modelo menor, chamado aluno, com as respostas de um modelo maior, chamado professor. O aluno aprende a imitar o comportamento do grande e fica mais rápido e barato de rodar, com alguma perda de qualidade.",
    },
    {
      question: "Destilação de IA é ilegal?",
      answer:
        "A técnica em si não é. Ela é usada pelas próprias empresas e permitida em modelos com licenças como a MIT, caso do DeepSeek-R1. O conflito aparece quando alguém usa as respostas de um serviço de terceiros para treinar um concorrente sem autorização e contra os termos de uso.",
    },
    {
      question: "Qual a diferença entre destilação e ajuste fino?",
      answer:
        "No ajuste fino, o modelo é treinado com exemplos de pessoas ou de bases de dados. Na destilação, os exemplos de treino são as respostas de outro modelo, geralmente maior. A destilação é, na prática, um tipo de ajuste fino em que o professor é uma IA.",
    },
    {
      question: "Modelo destilado é pior que o original?",
      answer:
        "Em geral, sim no conjunto, mas a diferença pode ser pequena nas tarefas para as quais foi treinado. Ele também herda erros do professor, como inventar informações. Para tarefas simples e repetitivas, costuma bastar.",
    },
    {
      question: "Por que as empresas de IA acusam concorrentes de destilação?",
      answer:
        "Porque mandar milhares de perguntas a um modelo avançado e treinar outro com as respostas permite reproduzir parte das capacidades dele gastando muito menos. OpenAI, Anthropic e Google afirmam ter detectado e bloqueado campanhas desse tipo.",
    },
  ],
  quiz: [
    {
      question: "Na destilação, o que o modelo aluno recebe do professor?",
      options: ["Os pesos e arquivos internos", "As respostas e probabilidades", "A senha do servidor"],
      answer: 1,
      explanation: "O aluno aprende com as saídas do professor, não com os arquivos internos dele.",
    },
    {
      question: "Qual a principal vantagem de um modelo destilado?",
      options: [
        "Ser sempre mais inteligente que o professor",
        "Nunca errar",
        "Ser mais rápido e barato de rodar",
      ],
      answer: 2,
      explanation:
        "A destilação troca um pouco de qualidade por velocidade e custo menor, o que permite até rodar no celular.",
    },
  ],
};
