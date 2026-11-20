import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "rag-na-ia-como-chatbot-responde-com-base-nos-seus-documentos",
  title: "RAG na IA: como o chatbot responde com base nos seus documentos",
  seoTitle: "RAG na IA: o que é e como funciona, sem jargão",
  excerpt:
    "RAG na IA é o que faz um chatbot consultar seus documentos antes de responder. Entenda como funciona, onde você já usa e como evitar respostas inventadas.",
  metaDescription:
    "RAG na IA explicado sem jargão: como o chatbot busca trechos dos seus arquivos antes de responder, onde isso já aparece no dia a dia e quais limites ainda existem.",
  category: "iniciantes",
  articleSubcategory: "conceitos",
  date: "2026-10-19",
  readTime: 7,
  imageQuery: "librarian shelves books searching archive",
  seed: 469,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "RAG é a técnica em que a IA primeiro busca trechos relevantes nos seus documentos e só depois escreve a resposta, em vez de depender só do que aprendeu no treinamento.",
    "Ele reduz respostas inventadas e permite citar a fonte, mas não elimina o erro: se a busca trouxer o trecho errado, a resposta sai errada com cara de certa.",
    "Você já usa RAG em cadernos de estudo com IA, em chatbots de atendimento e em buscas com IA, e dá para testar em casa com três arquivos seus.",
  ],
  content: `
    <p>RAG, sigla de geração aumentada por recuperação, é a técnica em que a IA primeiro procura trechos relevantes em documentos e só depois escreve a resposta usando o que encontrou. É por isso que alguns chatbots conseguem responder sobre o regulamento da sua empresa ou o seu contrato, mesmo sem nunca terem sido treinados com esses textos.</p>

    <p>Entender RAG ajuda a escolher melhor as ferramentas, a desconfiar na hora certa e a saber o que pedir a quem monta um chatbot para o seu negócio. Neste guia você vê como o processo funciona em quatro passos, onde já usa isso sem perceber, um exemplo com números e os erros mais comuns.</p>

    <h2>O que é RAG e por que ele existe</h2>
    <p>Todo modelo de linguagem aprende com uma grande quantidade de textos até uma certa data. Depois do treinamento, ele não sabe o que aconteceu no mês passado e nunca viu seus arquivos internos. Se você perguntar o prazo de entrega da sua loja, ele só pode adivinhar. O texto sobre <a href="/artigos/como-uma-ia-aprende-treinamento-ajuste-fino-e-por-que-erra">como uma IA aprende e por que erra</a> detalha essa limitação.</p>
    <p>A saída mais barata do que treinar o modelo de novo é entregar a ele, na hora da pergunta, os trechos certos para ler. A <a href="https://aws.amazon.com/what-is/retrieval-augmented-generation/" target="_blank" rel="noopener noreferrer">AWS define o RAG</a> como o processo de otimizar a saída de um modelo para que ele consulte uma fonte de conhecimento confiável antes de responder. Segundo a empresa, as vantagens são o custo menor que o de retreinar o modelo, o acesso a informação atual, a possibilidade de citar fontes e o maior controle de quem monta o sistema.</p>
    <p>A ideia não é nova. O artigo científico que deu nome à técnica, de Patrick Lewis e colegas, foi enviado ao arXiv em maio de 2020 e aceito na conferência NeurIPS. Os autores descrevem um modelo que combina um gerador de texto com um buscador sobre a Wikipédia e obtém respostas mais concretas e baseadas em fatos do que um modelo parecido sem busca, segundo o <a href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener noreferrer">resumo do artigo no arXiv</a>.</p>

    <h2>Como o RAG funciona em quatro passos</h2>
    <p>Pense numa bibliotecária que, antes de responder a uma dúvida, vai à estante, separa três páginas e só então fala com você. O sistema faz algo parecido:</p>
    <ol>
      <li><strong>Preparar os documentos.</strong> Os arquivos são cortados em pedaços pequenos, chamados de trechos, e cada trecho recebe uma espécie de impressão digital numérica que representa o seu significado.</li>
      <li><strong>Receber a pergunta.</strong> Sua pergunta também vira uma impressão digital numérica.</li>
      <li><strong>Buscar.</strong> O sistema compara a pergunta com os trechos e separa os mais próximos em significado, não só os que repetem as mesmas palavras.</li>
      <li><strong>Responder.</strong> Os trechos escolhidos são colocados junto da pergunta dentro do pedido enviado ao modelo, que escreve a resposta com base neles e, quando configurado, indica de onde tirou cada informação.</li>
    </ol>
    <p>Repare que o modelo continua o mesmo. O que muda é o material de leitura que chega junto com a pergunta. Esse material ocupa espaço na chamada janela de contexto, assunto do guia sobre <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto</a>, e por isso o sistema envia só os trechos úteis, e não o arquivo inteiro.</p>

    <h2>Onde você já usa RAG sem perceber</h2>
    <p>Quando você sobe PDFs em um caderno de estudo com IA e faz perguntas sobre eles, o princípio é o mesmo. O <a href="/artigos/gemini-notebook-antigo-notebooklm-o-que-mudou">guia do caderno de pesquisa do Google</a> e o comparativo <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">entre Perplexity e NotebookLM</a> mostram ferramentas que trabalham a partir das fontes que você escolhe. Outros exemplos do dia a dia:</p>
    <ul>
      <li>Chatbots de atendimento que respondem com base no catálogo e nas políticas da loja, como os descritos em <a href="/artigos/como-criar-chatbot-de-atendimento-para-seu-site-sem-programar">chatbot de atendimento sem programar</a>.</li>
      <li>Buscas com IA que leem páginas da internet antes de resumir, caso do <a href="/artigos/modo-ia-do-google-como-usar-a-pesquisa-com-ia">modo IA do Google</a>.</li>
      <li>Assistentes que consultam seu e-mail e sua agenda, que dependem de conectores como os explicados no texto sobre <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">protocolo MCP</a>.</li>
      <li>Ferramentas de resumo de documentos longos, como as do guia para <a href="/artigos/como-usar-ia-para-resumir-pdfs-artigos-e-textos-longos">resumir PDFs e textos longos</a>.</li>
    </ul>

    <h2>RAG, treinamento e memória: qual a diferença</h2>
    <table>
      <thead>
        <tr><th>Caminho</th><th>O que faz</th><th>Quando usar</th></tr>
      </thead>
      <tbody>
        <tr><td>Treinamento</td><td>Ensina o modelo com enormes volumes de texto, uma vez</td><td>Feito pela empresa que cria o modelo</td></tr>
        <tr><td>Ajuste fino</td><td>Adapta o modelo a um estilo ou tarefa com exemplos</td><td>Quando o comportamento precisa mudar</td></tr>
        <tr><td>RAG</td><td>Busca trechos dos seus arquivos a cada pergunta</td><td>Quando o conteúdo muda e a resposta precisa citar a fonte</td></tr>
        <tr><td>Memória do assistente</td><td>Guarda preferências suas entre conversas</td><td>Para personalizar o tom e lembrar contexto</td></tr>
      </tbody>
    </table>
    <p>A memória, como mostra o guia de <a href="/artigos/memoria-longa-em-ia-assistente-que-lembra-de-voce">memória longa em IA</a>, guarda quem você é. O RAG consulta o que está escrito nos seus arquivos. Os dois podem trabalhar juntos, mas resolvem problemas diferentes.</p>

    <h2>Exemplo prático: uma loja com 15 páginas de políticas</h2>
    <p>Uma loja de cosméticos online tem um arquivo de 15 páginas com prazo de entrega, regras de troca e formas de pagamento. Hoje a dona responde as mesmas dúvidas no WhatsApp, cerca de 40 vezes por semana, e cada resposta leva uns 3 minutos. São 2 horas por semana só em perguntas repetidas.</p>
    <p>Com um chatbot de RAG, os 15 trechos do arquivo viram a base de consulta. Quando o cliente pergunta "quanto tempo leva para chegar em Salvador?", o sistema busca o trecho sobre prazo e responde só com o que está lá, indicando a página. Se a pergunta não tiver resposta no arquivo, a configuração correta manda o chatbot dizer que não sabe e chamar uma pessoa. O guia sobre <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">atendimento no WhatsApp com IA</a> mostra como encaixar isso na rotina.</p>
    <p>Atenção ao custo real: o plano da ferramenta, as horas para organizar o arquivo e a revisão semanal das respostas entram na conta. Confira preços na página oficial de cada ferramenta no dia da contratação.</p>

    <h2>Teste em casa em 10 minutos</h2>
    <p>Você não precisa de programador para sentir como o RAG funciona. Escolha uma ferramenta que aceite upload de arquivos, suba três documentos seus (um contrato de aluguel, um manual de eletrodoméstico e o regulamento de um curso, por exemplo) e faça perguntas com resposta conhecida. Um modelo de pedido:</p>
    <pre><code>Responda apenas com base nos documentos enviados.
Para cada resposta, cite o nome do arquivo e o trecho usado.
Se a informação não estiver nos documentos, escreva exatamente: não encontrei isso nos arquivos.
Pergunta: qual é o prazo para avisar a rescisão do contrato?</code></pre>
    <p>Depois faça uma pergunta cuja resposta não esteja em nenhum arquivo. Uma boa configuração admite que não sabe. Se a ferramenta inventar, você descobriu um limite importante antes de confiar nela. Para repetir esse tipo de teste com método, o guia de <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">como checar se a resposta da IA está certa</a> traz um passo a passo.</p>

    <h2>Limites e erros comuns</h2>
    <ul class="checklist">
      <li><strong>Busca errada.</strong> Se o sistema trouxer o trecho errado, a resposta sai errada, mas escrita com segurança. Confira sempre a citação.</li>
      <li><strong>Documento desatualizado.</strong> O RAG repete o que está no arquivo. Política antiga gera resposta antiga.</li>
      <li><strong>Arquivo bagunçado.</strong> Tabelas em imagem, PDF escaneado sem texto e arquivos com informações contraditórias confundem a busca.</li>
      <li><strong>Dado sensível sem cuidado.</strong> Subir contratos e dados de clientes exige ler a política de privacidade da ferramenta. O <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequenos negócios</a> ajuda nessa checagem.</li>
      <li><strong>Texto malicioso dentro do documento.</strong> Páginas e e-mails podem conter instruções escondidas para enganar a IA, risco explicado em <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection</a>.</li>
    </ul>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>RAG diminui a chance de invenção, mas não a zera. Em contrato, saúde, dinheiro e questões legais, use a resposta como ponto de partida e confirme no documento original ou com um profissional.</p></div>

    <h2>Próximos passos</h2>
    <p>Se quiser consolidar o vocabulário, consulte o <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de inteligência artificial</a> e o <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">guia completo do que é inteligência artificial</a>. Depois, escolha um conjunto pequeno de arquivos seus, rode o teste de 10 minutos e veja na prática onde a ferramenta acerta e onde precisa de supervisão. Explore a categoria Iniciantes do Portal para seguir aprendendo sem jargão.</p>
  `,
  faq: [
    {
      question: "O que significa RAG em inteligência artificial?",
      answer:
        "RAG significa geração aumentada por recuperação. A IA busca trechos relevantes em uma base de documentos e os usa como material de leitura para escrever a resposta. Assim, ela pode falar de conteúdo que não viu no treinamento, como seus arquivos, e citar de onde tirou cada informação.",
    },
    {
      question: "RAG elimina as alucinações da IA?",
      answer:
        "Não. Ele reduz a chance de invenção porque a resposta se apoia em trechos reais, mas a busca pode trazer o trecho errado ou o documento pode estar desatualizado. Por isso vale conferir a citação e pedir que a ferramenta admita quando a informação não estiver nos arquivos.",
    },
    {
      question: "Qual a diferença entre RAG e ajuste fino?",
      answer:
        "O ajuste fino muda o comportamento do modelo com exemplos, e o conhecimento fica embutido nele. O RAG deixa o modelo como está e entrega os trechos certos a cada pergunta. Para conteúdo que muda com frequência, como preços e políticas, o RAG costuma ser mais prático e barato de manter.",
    },
    {
      question: "Preciso saber programar para usar RAG?",
      answer:
        "Para usar, não. Ferramentas de caderno de estudo e plataformas de chatbot permitem subir arquivos e conversar com eles sem escrever código. Para montar um sistema sob medida, integrado ao seu site ou sistema interno, aí costuma ser necessário um desenvolvedor ou uma plataforma pronta.",
    },
    {
      question: "É seguro subir documentos da empresa em uma ferramenta de RAG?",
      answer:
        "Depende da ferramenta e do tipo de dado. Leia a política de privacidade, veja se os arquivos são usados para treinar modelos e evite dados pessoais de clientes sem base legal. Em caso de contratos e informações sensíveis, prefira planos empresariais com controles de acesso.",
    },
  ],
};
