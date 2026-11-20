import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "editar-apresentacao-inteira-com-gemini-no-google-slides-varios-slides-ingles-e-limites",
  title: "Gemini no Google Slides edita a apresentação inteira: como usar",
  seoTitle: "Gemini no Google Slides: editar a apresentação inteira",
  excerpt:
    "O Gemini no Google Slides agora edita vários slides ou o deck inteiro com um pedido só. Veja como usar, quem tem acesso, o limite do inglês e os cuidados.",
  metaDescription:
    "Gemini no Google Slides edita vários slides ou a apresentação inteira por um pedido no painel lateral. Veja planos, limite do inglês, exemplos e cuidados antes de usar.",
  category: "ferramentas",
  date: "2026-10-31",
  readTime: 7,
  imageQuery: "presentation slides projector meeting",
  seed: 946,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Gemini no Google Slides passou a editar vários slides ou o deck inteiro a partir de um único pedido no painel lateral, e as mudanças entram como se você mesmo as tivesse feito.",
    "No lançamento, o recurso funciona só em inglês e depende de plano elegível (Workspace Standard ou Plus, Google AI Pro ou Ultra), sem controle de administrador.",
    "Como o Gemini mexe em muitos slides de uma vez, vale pedir em etapas, revisar o resumo de mudanças e saber desfazer pelo histórico de versões.",
  ],
  content: `
    <p>O Gemini no Google Slides agora consegue editar vários slides ou a apresentação inteira a partir de um único pedido digitado no painel lateral, sem que você precise abrir slide por slide. Segundo o Google, o recurso começou a ser liberado em 29 de outubro de 2026, funciona no lançamento só em inglês e entra de forma gradual nos planos elegíveis.</p>

    <p>Até aqui, o Gemini no Slides ajudava mais a criar apresentações do zero. A novidade muda o jogo para quem já tem um deck pronto e precisa padronizar fonte, resumir três slides em um ou atualizar conteúdo com base em um arquivo do Drive. Este guia explica o que mudou, como pedir, quem tem acesso, quais são os limites e como evitar dor de cabeça ao deixar uma IA mexer em tudo de uma vez.</p>

    <h2>O que o Gemini no Slides passou a fazer</h2>

    <p>De acordo com o <a href="https://workspaceupdates.googleblog.com/2026/10/edit-entire-presentations-with-gemini-in-Google-Slides.html" target="_blank" rel="noopener noreferrer">blog de atualizações do Google Workspace</a>, publicado em 30 de outubro de 2026, o Gemini passa a decidir quais slides precisam mudar e altera os slides nativos e editáveis. O Google afirma que as edições são aplicadas "como se você mesmo as tivesse feito", o que significa que desfazer e histórico de versões continuam funcionando para revisar ou reverter.</p>

    <p>Na prática, o recurso cobre quatro tipos de pedido. Os exemplos abaixo seguem os casos citados na própria publicação:</p>

    <ul class="checklist">
      <li>Atualizar o estilo do deck inteiro para combinar com um arquivo de referência.</li>
      <li>Atualizar o conteúdo com mais detalhes a partir de um arquivo do Drive.</li>
      <li>Juntar ou resumir slides, por exemplo transformar os slides 5 a 7 em um só.</li>
      <li>Padronizar o visual, como deixar todos os títulos com a mesma fonte, tamanho e cor.</li>
    </ul>

    <p>Quando termina, o Gemini mostra no painel lateral um resumo do que mudou. Esse resumo é a sua primeira ferramenta de conferência, e vale lê-lo antes de seguir em frente.</p>

    <h2>Quem tem acesso e qual é o limite do idioma</h2>

    <p>A publicação do Google lista os planos contemplados. No Workspace para empresas, entram Business Standard e Plus e Enterprise Standard e Plus. Para pessoas físicas, o recurso chega com os planos Google AI Pro e Ultra, e na educação com o Google AI Pro for Education. Se você ainda está decidindo qual plano contratar, o comparativo <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">Google AI Plus, Pro ou Ultra</a> ajuda a entender as diferenças.</p>

    <p>Dois pontos pesam para o leitor brasileiro. O primeiro: no lançamento o recurso é compatível apenas com inglês, conforme o próprio Google. Isso não impede de abrir um deck em português, mas não há garantia de que funcione bem, então teste em uma cópia. O segundo: a liberação é gradual, e o Google fala em rollout estendido que pode passar de 15 dias para aparecer em alguns domínios. Se o painel ainda não mostra a opção, pode ser só questão de tempo.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>O Google informa que não existe controle de administrador para esse recurso. Quem gerencia o Workspace de uma empresa deve avisar a equipe sobre o que não deve ser enviado ao Gemini, em vez de esperar um botão para bloquear.</p></div>

    <h2>Como usar, passo a passo</h2>

    <p>A <a href="https://support.google.com/docs/answer/17111393" target="_blank" rel="noopener noreferrer">página de ajuda do Google sobre gerar apresentações com o Gemini</a> descreve o fluxo de criação: no computador, abrir o Google Slides, usar o painel lateral do Gemini, descrever o que se quer e, se precisar, anexar arquivos de referência do Drive. A mesma página avisa que o recurso exige um plano elegível do Workspace ou do Google AI, que funciona no computador e em inglês, e que é preciso manter a aba aberta enquanto o Gemini trabalha.</p>

    <ol>
      <li>Abra a apresentação no computador e faça uma cópia (menu Arquivo, Fazer uma cópia) antes de testar.</li>
      <li>Abra o painel lateral do Gemini.</li>
      <li>Escreva um pedido específico, com o escopo claro: quais slides, o que muda e o que não pode mudar.</li>
      <li>Leia o resumo de mudanças que o Gemini mostra no fim.</li>
      <li>Confira slide por slide as partes críticas, como números e nomes.</li>
      <li>Se algo saiu errado, use Desfazer ou o histórico de versões.</li>
    </ol>

    <h2>Exemplos de pedidos que funcionam melhor</h2>

    <p>Pedido vago gera resultado vago. Como o Gemini decide sozinho quais slides alterar, quanto mais preciso o pedido, menor o risco de ele mexer no que não devia. Como o recurso hoje responde em inglês, os exemplos abaixo vêm em inglês, com a explicação em português logo depois.</p>

    <pre><code>Make all slide titles the same font, size and color, and do not change any other text.</code></pre>

    <p>Padroniza os títulos sem tocar no conteúdo.</p>

    <pre><code>Summarize slides 5 to 7 into a single slide with three bullets. Keep the numbers exactly as they are.</code></pre>

    <p>Condensa três slides em um e protege os números.</p>

    <pre><code>Update this presentation to add more detail based on the attached file. Only add content, do not remove existing slides.</code></pre>

    <p>Usa um arquivo do Drive como base, com uma trava contra apagar slides. A regra de ouro é a mesma de qualquer IA que mexe em dados: número, nome e data precisam de conferência humana. O guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> mostra como fazer essa checagem sem perder tempo.</p>

    <h2>Exemplo prático: o deck de proposta de uma agência</h2>

    <p>Imagine a Camila, que toca uma pequena agência de marketing em Curitiba. Ela tem uma proposta comercial de 18 slides, feita ao longo de meses por três pessoas, com três tamanhos de título e duas paletas de cor. Antes, padronizar levava uma tarde. Com o novo recurso, ela faz uma cópia do deck, pede para padronizar títulos e cores e, em seguida, pede para condensar os slides de cases em um só.</p>

    <p>Mesmo assim, ela confere o resumo de mudanças e abre os slides que tinham tabelas de preço, porque são os que não podem errar. O ganho está em tirar o trabalho braçal da formatação, e não em dispensar a revisão. Se o objetivo for montar o deck do zero, o guia de <a href="/artigos/como-criar-apresentacoes-e-slides-profissionais-com-ia">apresentações profissionais com IA</a> e o comparativo <a href="/artigos/gamma-ou-canva-qual-ia-cria-apresentacao-melhor">Gamma ou Canva</a> mostram alternativas.</p>

    <h2>Limites de uso e o que muda depois de 1º de dezembro</h2>

    <p>O Google não divulgou números por usuário. O que a publicação diz é que, até pelo menos 1º de dezembro de 2026, clientes do Workspace têm acesso promocional a limites mais altos para criar apresentações com vários slides, e que os limites por usuário passam a valer depois dessa data, com detalhes na Central de Ajuda. Ou seja: o que parece folgado hoje pode ficar mais apertado em dezembro, e vale não montar um fluxo de trabalho que dependa de uso ilimitado.</p>

    <p>Para entender como o Gemini limita o uso em geral, veja <a href="/artigos/limites-de-uso-do-gemini-janela-de-5-horas-planos-e-como-economizar">a janela de 5 horas e como economizar</a>. E, se você já usa o Gemini para criar arquivos no chat, leia <a href="/artigos/criar-e-editar-arquivos-no-app-gemini-pdf-slides-e-planilhas-como-usar-e-limites">criar e editar arquivos no app Gemini</a>, que cobre o caminho pelo aplicativo em vez do Slides.</p>

    <h2>Cuidados com dados e com o idioma</h2>

    <p>Um deck costuma carregar informação sensível: preços, nomes de clientes, números de faturamento. A página de ajuda do Google lembra que o Gemini pode usar conteúdo da web e, se você ativar, do Drive, do Chat ou do Gmail, e pede para não enviar dados pessoais, confidenciais ou sensíveis em feedback sobre as sugestões. Antes de anexar o contrato de um cliente como arquivo de referência, releia o que a sua empresa permite. O texto sobre <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">o que o funcionário pode colar numa IA</a> serve de base para essa conversa, e o <a href="/artigos/gemini-entre-apps-do-workspace-criar-pesquisar-e-agendar-sem-trocar-de-app-quem-tem">Gemini entre os apps do Workspace</a> mostra como ele se conecta ao restante da conta.</p>

    <p>Com o idioma, a recomendação é simples: se o seu deck está em português, teste primeiro em uma cópia e com um pedido pequeno. Se o resultado vier em inglês ou bagunçado, o recurso ainda não serve para o seu caso.</p>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Pedir a mudança direto no arquivo original.</strong> Sempre trabalhe em cópia na primeira vez.</li>
      <li><strong>Escrever pedido genérico.</strong> "Melhore a apresentação" deixa o Gemini decidir tudo.</li>
      <li><strong>Não ler o resumo de mudanças.</strong> É ali que aparece o que foi alterado.</li>
      <li><strong>Esquecer a conferência de números.</strong> Tabelas e valores merecem olho humano.</li>
      <li><strong>Contar com o recurso em português.</strong> No lançamento, só inglês.</li>
    </ul>

    <h2>Vale a pena para você?</h2>

    <p>Vale testar se você tem plano elegível, mantém decks longos e perde tempo com formatação. Se você apresenta pouco, a ajuda é marginal. Quem trabalha com slides como serviço pode ler o artigo sobre <a href="/artigos/freelancer-de-slides-inteligencia-artificial-pacotes-e-preco">freelancer de slides com IA</a>, e quem vai apresentar o deck pode ensaiar com o guia de <a href="/artigos/ensaiar-apresentacao-com-ia-roteiro-cronometrado-e-perguntas-dificeis">ensaiar apresentação com IA</a>. Para acompanhar outras novidades da ferramenta, volte à categoria de <a href="/categoria/ferramentas">ferramentas</a>.</p>
  `,
  faq: [
    {
      question: "O Gemini no Google Slides edita a apresentação inteira?",
      answer:
        "Sim. Segundo o Google, o Gemini no Slides pode editar vários slides ou o deck inteiro a partir de um pedido no painel lateral, decidindo quais slides alterar. As mudanças são feitas nos slides nativos e editáveis, e um resumo do que mudou aparece no painel ao final.",
    },
    {
      question: "O recurso de editar vários slides funciona em português?",
      answer:
        "No lançamento, o Google informa que o recurso é compatível apenas com inglês. Você pode testar em um deck em português, mas não há garantia de bom resultado. Faça o teste em uma cópia do arquivo e com um pedido pequeno antes de confiar nele.",
    },
    {
      question: "Quais planos têm o Gemini editando slides inteiros?",
      answer:
        "A publicação do Google lista Business Standard e Plus, Enterprise Standard e Plus, Google AI Pro e Ultra e Google AI Pro for Education. A liberação é gradual e pode demorar mais de 15 dias em alguns domínios, então a opção pode não aparecer de imediato.",
    },
    {
      question: "Dá para desfazer as mudanças que o Gemini fez no Slides?",
      answer:
        "Dá. O Google afirma que as edições são aplicadas como se você mesmo as tivesse feito, então Desfazer e o histórico de versões funcionam para revisar ou reverter. Por segurança, faça uma cópia do arquivo antes do primeiro teste.",
    },
    {
      question: "O administrador do Workspace pode bloquear esse recurso?",
      answer:
        "Não por um controle específico. A publicação do Google diz que não há controle de administrador para esse recurso. Por isso, empresas devem orientar a equipe sobre quais dados não enviar ao Gemini, em vez de esperar uma opção para desligar.",
    },
  ],
};
