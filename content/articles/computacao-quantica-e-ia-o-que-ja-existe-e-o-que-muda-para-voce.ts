import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "computacao-quantica-e-ia-o-que-ja-existe-e-o-que-muda-para-voce",
  title: "Computação quântica e IA: o que já existe e o que muda para você",
  seoTitle: "Computação quântica e IA: o que muda para você",
  excerpt:
    "Entenda o que é computação quântica, como ela se relaciona com a IA, o que a IBM e o Google já mostraram e por que a criptografia pós-quântica já importa hoje.",
  metaDescription:
    "Computação quântica e IA explicadas sem jargão: o que já existe na IBM e no Google, o que ainda é promessa, o que muda no seu dia a dia e como se preparar sem pânico.",
  category: "futuro",
  articleSubcategory: "tecnologia-emergente",
  date: "2026-10-22",
  readTime: 7,
  imageQuery: "quantum computer chip cryostat laboratory",
  seed: 560,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Computador quântico não é um ChatGPT mais rápido: ele resolve certos tipos de problema de um jeito diferente e ainda está em fase de pesquisa e de protótipos.",
    "IBM e Google já mostram chips e roteiros públicos com correção de erros, mas as máquinas úteis em larga escala são planos para o fim desta década, não produtos de prateleira.",
    "Para a maioria das pessoas, a mudança prática mais próxima é a criptografia pós-quântica, cujos primeiros padrões já foram publicados pelo NIST.",
  ],
  content: `
    <p>Computação quântica é um tipo de computador que usa as regras da física quântica para tratar certos problemas de um jeito que as máquinas comuns não conseguem acompanhar. Ela não substitui o seu celular nem faz a inteligência artificial responder mais rápido hoje. Hoje existem protótipos e roteiros públicos, e a aplicação prática mais próxima para você é a segurança dos seus dados.</p>

    <p>A relação com a IA aparece em manchetes o tempo todo, e quase sempre de forma exagerada. Neste guia você vê o que a IBM e o Google já anunciaram, o que continua sendo promessa, onde os dois mundos realmente se encontram e o que vale fazer agora, sem pânico e sem comprar nada. Se você ainda está começando, vale ler antes o <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">guia completo sobre o que é inteligência artificial</a>.</p>

    <h2>O que é computação quântica, sem jargão</h2>
    <p>Um computador comum guarda informação em bits, que valem 0 ou 1. Um computador quântico usa qubits, que podem estar em uma combinação desses dois estados antes de serem medidos. Quando muitos qubits trabalham juntos e são controlados com cuidado, algoritmos específicos conseguem explorar muitas possibilidades de uma vez e chegar à resposta com menos passos do que uma máquina tradicional precisaria.</p>
    <p>O detalhe que quase ninguém conta: qubits são frágeis. Calor, vibração e ruído eletromagnético estragam o cálculo, e é por isso que os chips quânticos supercondutores ficam em equipamentos resfriados a temperaturas extremas. Boa parte do esforço da indústria hoje não é fazer a máquina mais rápida, e sim fazer ela errar menos. Esse trabalho se chama correção de erros e é o centro dos roteiros das empresas.</p>

    <h2>O que a IBM e o Google já mostraram</h2>
    <p>A <a href="https://www.ibm.com/quantum/technology" rel="noopener noreferrer" target="_blank">página de tecnologia da IBM Quantum</a> descreve o processador Nighthawk, com 120 qubits programáveis, e trata como meta para 2029 o Starling, um computador quântico tolerante a falhas, planejado com 200 qubits lógicos e capacidade de executar 100 milhões de operações. A própria IBM afirma, nessa página, que a vantagem quântica prometida para 2026 foi entregue com parceiros. Como é uma afirmação da empresa, trate como alegação a ser confirmada por pesquisadores independentes.</p>
    <p>O <a href="https://quantumai.google/" rel="noopener noreferrer" target="_blank">Google Quantum AI</a> apresenta o chip Willow como um grande passo rumo a um computador quântico com correção de erros em grande escala. A página também descreve o algoritmo Quantum Echoes, rodado no Willow, como a primeira demonstração de vantagem quântica verificável, e abre um programa de acesso antecipado para pesquisadores. Os dois exemplos mostram a mesma coisa: avanço real de laboratório, ainda longe de um serviço que você contrata por assinatura.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Atenção</span>
      <p>Vantagem quântica significa que a máquina fez uma tarefa específica melhor que um computador clássico. Isso não quer dizer que ela já serve para problemas do dia a dia, nem que existe um computador quântico geral pronto para uso comercial.</p>
    </div>

    <h2>Computação quântica e IA: onde os dois mundos se encontram</h2>
    <p>Hoje, os modelos de IA que você usa, como os chatbots, rodam em chips comuns de data center, principalmente placas gráficas. Nenhum assistente popular depende de computador quântico. O que existe são três frentes de pesquisa que tentam juntar as áreas.</p>
    <h3>IA ajudando a computação quântica</h3>
    <p>Calibrar qubits e detectar erros gera uma quantidade enorme de dados. Técnicas de aprendizado de máquina entram para ajustar o hardware e decodificar erros mais rápido. Aqui a IA é ferramenta de engenharia, e o ganho aparece nos laboratórios, não no seu aplicativo.</p>
    <h3>Computação quântica ajudando a IA</h3>
    <p>É a promessa mais citada e a menos comprovada. A ideia é usar algoritmos quânticos para acelerar partes do treinamento ou da otimização. Por enquanto, os modelos de linguagem funcionam bem com chips tradicionais, e as máquinas quânticas atuais são pequenas demais para treinar algo parecido. Desconfie de quem promete um assistente quântico para breve.</p>
    <h3>Problemas de otimização e simulação</h3>
    <p>As áreas apontadas como mais promissoras são química, materiais e logística, em que simular moléculas ou combinar rotas é muito pesado para máquinas comuns. Quando isso amadurecer, o efeito chega para você de forma indireta, em remédios, baterias e cadeias de entrega melhores, e não como um botão novo no celular. Para entender como a IA de hoje funciona por dentro, o guia sobre <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto</a> ajuda a enxergar a diferença.</p>

    <h2>Comparando: computador comum, IA atual e computador quântico</h2>
    <table>
      <thead>
        <tr><th>Característica</th><th>Computador comum</th><th>IA atual (chatbots)</th><th>Computador quântico</th></tr>
      </thead>
      <tbody>
        <tr><td>Unidade básica</td><td>Bit (0 ou 1)</td><td>Roda em chips comuns</td><td>Qubit</td></tr>
        <tr><td>Uso hoje</td><td>Tudo</td><td>Texto, imagem, código, voz</td><td>Pesquisa e protótipos</td></tr>
        <tr><td>Onde você acessa</td><td>Casa e trabalho</td><td>Celular e navegador</td><td>Programas de acesso para pesquisadores</td></tr>
        <tr><td>Maior desafio</td><td>Consumo de energia</td><td>Custo e confiabilidade das respostas</td><td>Correção de erros</td></tr>
      </tbody>
    </table>

    <h2>O que muda para você: a criptografia pós-quântica</h2>
    <p>Boa parte da segurança da internet hoje, de bancos a aplicativos de mensagem, depende de problemas matemáticos que um computador quântico grande e confiável poderia resolver. Essa máquina ainda não existe, mas a troca de sistemas de segurança leva anos, e por isso os padrões já estão sendo preparados.</p>
    <p>O <a href="https://www.nist.gov/pqc" rel="noopener noreferrer" target="_blank">NIST, órgão de padrões dos Estados Unidos</a>, informa que publicou três padrões finalizados de criptografia pós-quântica em agosto de 2024, entre eles os algoritmos ML-KEM e ML-DSA, e diz que as organizações devem começar a aplicá-los agora. Para o usuário comum, isso significa que sites e aplicativos vão atualizar a segurança por trás da tela, sem que você precise fazer nada.</p>
    <p>O que está ao seu alcance é a higiene básica. A <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">chave de acesso (passkey)</a> reduz a dependência de senhas, e o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega à IA sem perceber</a> ajuda a decidir o que nunca deve ser colado em um chat.</p>

    <h2>Exemplo prático: uma loja com dados de clientes</h2>
    <p>Imagine a Camila, dona de uma loja virtual de cosméticos em Belo Horizonte, com 3 mil clientes cadastrados e vendas por Pix e cartão. Ela não vai comprar computador quântico e nem precisa. O que ela faz em uma tarde, sem custo, é conferir três coisas. Primeiro, se a plataforma da loja e o gateway de pagamento usam conexão segura e atualizam os sistemas. Segundo, se ela guarda só os dados de que precisa, o que reduz o estrago em qualquer vazamento. Terceiro, se o acesso ao painel tem verificação em duas etapas.</p>
    <p>Para a parte de dados de clientes, o <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio que usa IA</a> serve de roteiro. Quanto menos dado guardado, menos há para proteger, inclusive de ameaças futuras.</p>

    <h2>Como usar IA para estudar o assunto sem cair em exagero</h2>
    <p>Um assistente de IA é bom para traduzir jargão, desde que você peça com cuidado e confira nas fontes oficiais. Dois prompts úteis:</p>
    <pre><code>Explique computação quântica para uma pessoa que não é da área de tecnologia, em 5 frases e com uma analogia do dia a dia. Depois liste 3 coisas que ela ainda NÃO consegue fazer hoje.</code></pre>
    <pre><code>Vou colar o trecho de uma notícia sobre um avanço quântico. Separe o que é fato verificável, o que é alegação da empresa e o que é projeção para o futuro. Não acrescente informação que não esteja no texto.</code></pre>
    <p>Esse segundo prompt é o mais valioso, porque a maior parte das notícias mistura os três tipos de afirmação no mesmo parágrafo. Se quiser aprofundar a lógica de pedir raciocínio ao assistente, veja <a href="/artigos/modos-de-raciocinio-em-ia-quando-ligar-o-pensar-e-quando-nao-vale">quando ligar o modo pensar</a>.</p>

    <h2>Erros comuns ao ler notícia sobre computação quântica</h2>
    <ul class="checklist">
      <li>Achar que vantagem quântica em um teste específico vale para qualquer tarefa.</li>
      <li>Confundir número de qubits físicos com qubits lógicos, que já têm correção de erros e são o que importa para cálculos úteis.</li>
      <li>Acreditar em produto "com IA quântica" vendido hoje para o consumidor final.</li>
      <li>Entrar em pânico com a segurança dos seus dados: o risco é de médio prazo e as soluções já estão em padronização.</li>
      <li>Investir dinheiro por manchete, sem entender que muitas empresas do setor ainda não têm produto comercial.</li>
    </ul>

    <h2>Como se preparar sem gastar nada</h2>
    <p>Para o profissional, o movimento mais útil é acompanhar o tema por fontes primárias, como as páginas da IBM, do Google e do NIST, e entender como ele toca a sua área. Quem trabalha com segurança da informação já tem um caminho de carreira em crescimento, descrito em <a href="/artigos/carreira-em-ciberseguranca-com-ia-vagas-trilha-e-habilidades">carreira em cibersegurança com IA</a>. Quem tem negócio pode usar o texto sobre <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher uma ferramenta de IA com segurança</a> como filtro na hora de contratar um serviço.</p>
    <p>Outras tecnologias emergentes também merecem o mesmo olhar crítico, como os <a href="/artigos/robos-humanoides-com-ia-quando-chegam-ao-mercado-de-trabalho">robôs humanoides</a> e os <a href="/artigos/oculos-inteligentes-com-ia-no-brasil-o-que-fazem-custam-e-privacidade">óculos inteligentes</a>: separe demonstração de laboratório de produto que você realmente pode usar.</p>

    <h2>Conclusão: acompanhe de perto, sem pressa</h2>
    <p>A computação quântica é uma das apostas mais sérias da tecnologia, com roteiros públicos para esta década, mas ainda não muda o seu dia a dia. A parte que merece atenção hoje é a segurança de dados, e ela já está em andamento. Continue acompanhando a categoria <a href="/categoria/futuro">Futuro com IA</a> e leia também sobre <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o futuro do trabalho autônomo</a> para ver o que já está ao seu alcance.</p>
  `,
  faq: [
    {
      question: "Computação quântica já existe?",
      answer:
        "Existem computadores quânticos de pesquisa e protótipos, como os chips Nighthawk, da IBM, e Willow, do Google, descritos nas páginas oficiais das empresas. Máquinas grandes, com correção de erros e uso comercial amplo, ainda são planos para o fim desta década.",
    },
    {
      question: "O ChatGPT usa computação quântica?",
      answer:
        "Não. Os assistentes de IA populares rodam em chips comuns de data center, principalmente placas gráficas. A ligação entre IA e computação quântica hoje está em pesquisa, como o uso de aprendizado de máquina para corrigir erros em qubits.",
    },
    {
      question: "Computador quântico vai quebrar minhas senhas?",
      answer:
        "Um computador quântico grande e confiável poderia quebrar parte da criptografia atual, mas essa máquina ainda não existe. O NIST já publicou padrões de criptografia pós-quântica e recomenda que as organizações comecem a aplicá-los, então a troca ocorre nos bastidores.",
    },
    {
      question: "Preciso comprar algo ou me preparar agora?",
      answer:
        "Não precisa comprar nada. Use verificação em duas etapas, prefira chaves de acesso, guarde só os dados de clientes de que realmente precisa e desconfie de produto vendido como IA quântica para o consumidor. Acompanhe as fontes oficiais.",
    },
    {
      question: "O que é vantagem quântica?",
      answer:
        "É quando um computador quântico executa uma tarefa específica melhor que o melhor método clássico conhecido. O Google descreve o algoritmo Quantum Echoes como uma demonstração verificável. Isso não significa utilidade geral, e os resultados ainda são avaliados pela comunidade científica.",
    },
  ],
};
