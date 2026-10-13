import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam",
  title: "Tokens e janela de contexto em IA: o que são e por que importam",
  seoTitle: "Tokens e janela de contexto em IA: o que são",
  excerpt:
    "Entenda o que são tokens e janela de contexto em IA, por que a conversa trava ou o assistente esquece o começo e como usar isso para economizar e acertar mais.",
  metaDescription:
    "Tokens e janela de contexto explicados sem jargão: como a IA conta texto, por que ela esquece trechos de conversas longas e o que fazer para obter respostas melhores.",
  category: "iniciantes",
  articleSubcategory: "conceitos",
  date: "2026-10-13",
  readTime: 7,
  imageQuery: "open book pages close up reading",
  seed: 278,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Token é o pedaço de texto que a IA realmente lê: pode ser uma letra, uma sílaba ou uma palavra inteira, e a conta de tudo (limite, custo, memória) é feita em tokens.",
    "Janela de contexto é o tamanho da memória de curto prazo da IA numa conversa: tudo o que você mandou, o que ela respondeu e os arquivos precisam caber ali.",
    "Conversas e arquivos muito longos pioram as respostas e podem fazer a IA perder o começo, então resumir, dividir tarefas e começar chats novos costuma funcionar melhor.",
  ],
  content: `
    <p>Token é o pedaço de texto que uma inteligência artificial lê e escreve, e a janela de contexto é a quantidade máxima de tokens que ela consegue manter "em mente" numa mesma conversa. Quando o limite estoura, a IA esquece trechos, erra detalhes ou simplesmente recusa o pedido.</p>

    <p>Parece assunto de programador, mas pesa no seu dia a dia: explica por que o assistente "esquece" o que você disse há 40 mensagens, por que um PDF grande dá resposta fraca e por que alguns planos pagos prometem "mais contexto". Este guia traduz tudo para a prática, com exemplos em reais e prompts que você pode copiar.</p>

    <h2>O que é um token, afinal?</h2>

    <p>A IA não lê palavras como nós. Antes de qualquer coisa, o texto é cortado em pedaços pequenos chamados tokens, e esse corte se chama tokenização. A <a href="https://ai.google.dev/gemini-api/docs/tokens" target="_blank" rel="noopener noreferrer">documentação do Gemini para desenvolvedores</a> explica que um token pode ser um caractere solto, como a letra z, ou uma palavra inteira, como gato, e que palavras longas são quebradas em vários tokens.</p>

    <p>Para ter uma régua, a mesma página informa que um token equivale a cerca de 4 caracteres e que 100 tokens correspondem a algo entre 60 e 80 palavras em inglês. Em português a conta costuma ser menos favorável, porque nossas palavras são mais longas e cheias de acentos e flexões, então o mesmo texto tende a gastar mais tokens. Trate esses números como estimativa e nunca como medida exata.</p>

    <p>Se você é totalmente novo no assunto, vale ler antes o <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">guia completo do que é inteligência artificial</a> e consultar o <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de termos essenciais</a>, que traz "token" e outras palavras que aparecem nos planos e nos anúncios.</p>

    <h2>E a janela de contexto?</h2>

    <p>A janela de contexto é o espaço total que o modelo tem para trabalhar em uma conversa. A <a href="https://ai.google.dev/gemini-api/docs/long-context" target="_blank" rel="noopener noreferrer">página sobre contexto longo do Google</a> compara a janela com uma memória de curto prazo: é o que o modelo consegue considerar de uma vez. Tudo entra na conta: sua pergunta, as instruções, os arquivos que você anexou, as respostas anteriores e a resposta que está sendo escrita agora.</p>

    <p>Para dar uma ideia de escala, a mesma página diz que uma janela de 1 milhão de tokens comporta cerca de 50 mil linhas de código, ou aproximadamente 8 romances em inglês de tamanho médio, ou transcrições de mais de 200 episódios de podcast. Segundo a documentação consultada em 13/10/2026, modelos recentes do Gemini chegam a 1.048.576 tokens de janela. Outros assistentes têm janelas menores ou maiores, e o número muda a cada versão, então confira o seu plano.</p>

    <p>Pense numa mesa de trabalho: quanto maior a mesa, mais papéis cabem abertos ao mesmo tempo. Mas uma mesa gigante lotada não deixa ninguém mais organizado, e é por isso que o tamanho da janela sozinho não garante boas respostas.</p>

    <h2>Por que a IA "esquece" no meio da conversa?</h2>

    <p>Há dois motivos diferentes, e vale separar. O primeiro é o limite duro: quando a conversa passa do tamanho da janela, algo precisa sair. Alguns aplicativos cortam as mensagens mais antigas sem avisar, e a IA passa a responder como se elas nunca tivessem existido. O segundo é a atenção: mesmo dentro do limite, o modelo pode errar ao recuperar vários detalhes espalhados num texto enorme.</p>

    <p>A própria documentação do Google registra isso. Ela afirma que a recuperação de um único fato pode chegar a cerca de 99% de acerto, mas que a precisão cai quando o pedido exige encontrar vários fatos específicos ao mesmo tempo. Também lembra que entradas maiores tendem a aumentar o tempo até a primeira palavra da resposta.</p>

    <p>Na prática: se você colou um contrato de 80 páginas e pediu "liste todos os prazos, multas e datas", o resultado pode vir incompleto, e a única forma de ter segurança é conferir no documento. Isso se liga a outro problema clássico, o das respostas inventadas, tratado em <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">como checar se a resposta da IA está certa</a>.</p>

    <h2>Quanto custa ou limita cada conversa?</h2>

    <p>Tokens são a "moeda" de quase tudo. Nos aplicativos de assinatura, eles aparecem disfarçados em limites de mensagens por período e em avisos de "conversa longa demais". Em ferramentas para desenvolvedores, o preço é cobrado por milhão de tokens, separando o que entra do que sai. Por isso um plano grátis costuma ter janela e limites menores, e a comparação entre planos fica mais clara no texto <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga: o que vale a pena</a>.</p>

    <table>
      <thead>
        <tr><th>Situação</th><th>O que consome tokens</th><th>Efeito comum</th></tr>
      </thead>
      <tbody>
        <tr><td>Chat curto com perguntas objetivas</td><td>Poucas centenas de tokens</td><td>Resposta rápida e precisa</td></tr>
        <tr><td>Conversa de horas sobre o mesmo projeto</td><td>Todo o histórico a cada resposta</td><td>Lentidão, confusão e esquecimento do começo</td></tr>
        <tr><td>PDF ou planilha anexados</td><td>O arquivo inteiro vira texto</td><td>Pode estourar o limite do plano</td></tr>
        <tr><td>Imagens, áudio e vídeo</td><td>Também viram tokens (vídeo pesa muito)</td><td>Limites de uso atingidos mais cedo</td></tr>
      </tbody>
    </table>

    <p>A página do Google avisa que a forma de contar tokens de vídeo afeta cobrança e limites de uso. Quem trabalha com mídia deve ler também sobre <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA multimodal</a>, que explica por que imagem e áudio não são "de graça" para o modelo.</p>

    <h2>Exemplo brasileiro: o PDF do fornecedor</h2>

    <p>Imagine a Marta, dona de uma loja de material de construção em Londrina. Ela recebe um catálogo de 40 páginas do fornecedor e quer saber quais itens subiram de preço. Cada página tem uns 500 palavras, ou seja, perto de 20 mil palavras. Como o português gasta mais tokens, uma estimativa honesta é algo na casa de dezenas de milhares de tokens: cabe com folga numa janela moderna, mas é muito para um plano limitado.</p>

    <p>Marta tem três caminhos. O pior é colar tudo e perguntar "o que mudou?". O melhor é pedir primeiro uma tabela só com código, produto e preço, depois cruzar com a lista antiga em uma segunda etapa. Para textos longos, o roteiro do guia sobre <a href="/artigos/como-usar-ia-para-resumir-pdfs-artigos-e-textos-longos">como resumir PDFs, artigos e textos longos</a> mostra como dividir por capítulos e conferir os resultados.</p>

    <pre><code>Vou colar um catálogo em 3 partes. Em cada parte, responda apenas com uma tabela: código do produto, descrição e preço. Não resuma, não comente. Quando eu disser FIM, juntaremos as tabelas e você apontará o que mudou em relação à lista antiga que vou enviar.</code></pre>

    <h2>Sete hábitos para gastar menos contexto e errar menos</h2>

    <ul class="checklist">
      <li><strong>Comece um chat novo por assunto.</strong> Misturar orçamento, receita de bolo e currículo na mesma conversa polui a janela.</li>
      <li><strong>Peça um resumo de checkpoint.</strong> A cada etapa longa, peça "resuma decisões e pendências em 10 linhas" e copie para o início de um chat novo.</li>
      <li><strong>Mande só o que importa.</strong> Em vez do PDF inteiro, cole os capítulos relevantes. A documentação do Google recomenda não enviar tokens de que o modelo não precisa.</li>
      <li><strong>Ponha a pergunta no fim.</strong> Com textos longos, a mesma documentação aconselha deixar a instrução depois do material.</li>
      <li><strong>Divida pedidos que exigem muitos fatos.</strong> Prazos num pedido, valores em outro, nomes em outro.</li>
      <li><strong>Reaproveite instruções fixas.</strong> Se você repete o mesmo texto de apresentação, guarde-o num modelo salvo em vez de recolar toda vez.</li>
      <li><strong>Confira os números críticos na fonte.</strong> Datas, valores e cláusulas voltam ao documento original.</li>
    </ul>

    <p>Esses hábitos conversam com a técnica de escrever bons comandos, que o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> aprofunda. Instruções curtas, claras e com formato de saída definido economizam tokens e reduzem retrabalho.</p>

    <h2>Contexto não é memória de longo prazo</h2>

    <p>Muita gente confunde as duas coisas. A janela de contexto vale para a conversa atual. Já a "memória" de alguns assistentes guarda fatos sobre você entre conversas e é um recurso à parte, com regras próprias. O texto sobre <a href="/artigos/memoria-longa-em-ia-assistente-que-lembra-de-voce">memória longa em IA</a> explica a diferença e como ligar ou desligar.</p>

    <p>Há também uma questão de privacidade: tudo o que cabe na janela é conteúdo que você entregou ao serviço. Antes de colar um contrato, um prontuário ou uma planilha de clientes, leia o que você entrega sem perceber em <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> e remova nomes, CPFs e dados que não fazem diferença para a tarefa.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Se a resposta começar a ficar estranha, repetitiva ou ignorar uma regra que você deu no início, não insista na mesma conversa. Peça um resumo, abra um chat novo e cole o resumo. Quase sempre resolve.</p></div>

    <h2>Erros comuns sobre tokens e contexto</h2>

    <ul>
      <li><strong>Achar que janela grande resolve tudo.</strong> Mais espaço não garante atenção a todos os detalhes, como a própria documentação do Google admite ao falar da queda de precisão em buscas por vários fatos.</li>
      <li><strong>Contar palavras em vez de tokens.</strong> Limites são em tokens, e português gasta mais por palavra do que inglês.</li>
      <li><strong>Escolher o plano só pelo número de contexto.</strong> Velocidade, limite de uso e qualidade em português pesam tanto quanto. O <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">comparativo entre ChatGPT, Claude e Gemini</a> e o texto sobre <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">planos do Gemini</a> ajudam a decidir com calma.</li>
      <li><strong>Esquecer que a resposta também usa a janela.</strong> Em alguns modelos, entrada, raciocínio e resposta dividem o mesmo espaço, segundo a documentação do Google.</li>
      <li><strong>Não avisar o que é importante.</strong> Se uma regra vale para a conversa toda, repita-a no checkpoint.</li>
    </ul>

    <p>Quem está dando os primeiros passos pode se beneficiar da leitura de <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">5 erros comuns de quem está começando a usar IA</a>, que complementa esta lista. Para acompanhar o que os modelos novos prometem em tamanho de contexto, veja também <a href="/artigos/gemini-3-vale-a-pena-novidades-precos-comparacao-chatgpt">o texto sobre o Gemini 3</a>.</p>

    <h2>Resumo prático para levar</h2>

    <p>Tokens são a unidade de leitura da IA, e a janela de contexto é o tamanho da mesa onde tudo precisa caber. Quando entende isso, você deixa de culpar o assistente por "ficar burro" e passa a organizar o trabalho: chats curtos por assunto, arquivos enxutos, checkpoints de resumo e conferência dos dados críticos. Abra agora uma conversa que esteja longa demais, peça o resumo de checkpoint do prompt acima e compare a qualidade das respostas num chat novo.</p>
  `,
  faq: [
    {
      question: "O que é token em inteligência artificial?",
      answer:
        "Token é o pedaço de texto que o modelo lê e escreve: pode ser uma letra, uma sílaba ou uma palavra inteira. Segundo a documentação do Gemini, um token equivale a cerca de 4 caracteres. Limites de uso, tamanho de memória e preço em ferramentas pagas são medidos em tokens, não em palavras.",
    },
    {
      question: "O que é janela de contexto?",
      answer:
        "É a quantidade máxima de tokens que o modelo considera de uma vez numa conversa. Entram sua pergunta, as instruções, arquivos anexados, respostas anteriores e a resposta atual. Funciona como uma memória de curto prazo: o que passa do limite é cortado ou ignorado, dependendo do aplicativo.",
    },
    {
      question: "Por que a IA esquece o que eu disse no começo da conversa?",
      answer:
        "Porque a conversa pode ter passado do limite da janela e o aplicativo cortou as mensagens antigas, ou porque o modelo perdeu a atenção a detalhes num texto muito longo. A saída mais segura é pedir um resumo das decisões e começar um chat novo colando esse resumo.",
    },
    {
      question: "Quantas palavras cabem em mil tokens?",
      answer:
        "Para inglês, a documentação do Gemini estima que 100 tokens equivalem a 60 a 80 palavras, ou seja, mil tokens ficam entre 600 e 800 palavras. Em português o número costuma ser menor, porque as palavras são mais longas e acentuadas. Use como estimativa, nunca como medida exata.",
    },
    {
      question: "Janela de contexto maior sempre dá respostas melhores?",
      answer:
        "Não. Uma janela grande permite enviar mais material, mas a precisão pode cair quando você pede vários fatos específicos de um texto enorme. Material enxuto, pedido dividido em etapas e conferência na fonte costumam render mais do que simplesmente colar tudo.",
    },
  ],
  quiz: [
    {
      question: "Qual a melhor reação quando uma conversa muito longa começa a gerar respostas confusas?",
      options: [
        "Insistir na mesma conversa até a IA acertar",
        "Pedir um resumo e começar um chat novo com ele",
        "Trocar de celular",
      ],
      answer: 1,
      explanation:
        "O resumo leva só o essencial para uma janela limpa, o que reduz esquecimentos e confusão.",
    },
    {
      question: "Os limites das ferramentas de IA são medidos principalmente em:",
      options: ["Tokens", "Páginas de PDF", "Minutos de conversa"],
      answer: 0,
      explanation: "Texto, imagens e arquivos são convertidos em tokens, e é essa conta que define limites e custo.",
    },
  ],
};
