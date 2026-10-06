import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "dicionario-de-inteligencia-artificial-termos-essenciais",
  title: "Dicionário de inteligência artificial: 25 termos explicados",
  seoTitle: "Dicionário de IA: 25 termos explicados de forma simples",
  excerpt:
    "Dicionário de inteligência artificial em português simples: entenda prompt, token, contexto, alucinação, agente, fine-tuning e RAG com exemplos do dia a dia.",
  metaDescription:
    "Dicionário de inteligência artificial com 25 termos sem jargão: prompt, token, contexto, alucinação, agente, RAG e fine-tuning, com exemplos e fontes.",
  category: "iniciantes",
  articleSubcategory: "conceitos",
  date: "2026-09-12",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "notebook definitions glossary writing desk",
  seed: 19,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Os 25 termos que mais aparecem em ferramentas e notícias de IA cabem em cinco grupos: o básico, a conversa com a IA, o treinamento, as ferramentas e o que aparece em preço e plano.",
    "Token, janela de contexto e alucinação são os três termos que mais mudam o resultado do seu uso diário, porque explicam limite de texto, custo e por que a IA erra com confiança.",
    "Você não precisa decorar nada: basta reconhecer o termo quando ele aparecer e saber o que ele muda na prática, e a tabela rápida deste guia serve de consulta.",
  ],
  content: `
    <p>Este dicionário de inteligência artificial explica, em português simples, os 25 termos que mais aparecem quando você abre o ChatGPT, lê uma notícia ou compara planos de ferramentas: prompt, token, janela de contexto, alucinação, agente, fine-tuning e companhia. Cada verbete tem definição curta, um exemplo do dia a dia e o que aquilo muda na prática para você.</p>

    <p>A ideia é servir de consulta, não de aula. Dá para ler de cima a baixo em uns oito minutos ou pular direto para o grupo de termos que travou sua leitura. Os verbetes estão organizados em cinco blocos: o básico, a conversa com a IA, o treinamento dos modelos, as ferramentas que executam tarefas e uma tabela rápida com o restante.</p>

    <h2>Por que aprender o vocabulário de IA antes de qualquer curso?</h2>

    <p>Porque o vocabulário separa quem usa a ferramenta com segurança de quem repete o que ouviu. Quando a página de preços diz que o plano gratuito tem "janela de contexto menor", isso decide se você consegue colar um contrato de 30 páginas de uma vez. Quando uma notícia fala em "alucinação", ela está avisando que aquele dado precisa ser checado.</p>

    <p>Também é o vocabulário que permite comparar ferramentas sem depender de propaganda. Saber a diferença entre um chatbot e um agente, por exemplo, evita pagar por uma automação que não faz o que promete. O guia sobre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente, chatbot ou automação</a> entra nessa comparação em detalhe, e o <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">guia completo sobre o que é inteligência artificial</a> é o ponto de partida se você quer a visão geral antes dos termos.</p>

    <h2>Termos básicos: inteligência artificial, modelo, LLM e IA generativa</h2>

    <h3>1. Inteligência artificial (IA)</h3>
    <p>Qualquer programa que faz uma tarefa que antes exigia julgamento humano: reconhecer um rosto, traduzir um texto, sugerir a próxima palavra. É um guarda-chuva: o corretor do celular é IA, e o ChatGPT também, em escalas muito diferentes.</p>

    <h3>2. Modelo</h3>
    <p>É o "motor" que gera as respostas: um arquivo gigante de números ajustados durante o treinamento. ChatGPT, Claude e Gemini são aplicativos que dão acesso a modelos diferentes, e cada empresa lança versões novas com nome e número, como você viu no <a href="/noticias/anthropic-lanca-claude-fable-5-1-mythos-5-1">lançamento do Claude Fable 5.1 e Mythos 5.1</a>. Trocar de modelo dentro do mesmo app muda qualidade, velocidade e preço.</p>

    <h3>3. LLM (grande modelo de linguagem)</h3>
    <p>O tipo de modelo por trás dos assistentes de texto. Segundo o <a href="https://platform.claude.com/docs/en/about-claude/glossary" rel="noopener noreferrer">glossário da Anthropic</a>, é um modelo com muitos parâmetros, treinado em volumes enormes de texto, capaz de gerar texto parecido com o humano, responder perguntas e resumir.</p>

    <h3>4. IA generativa</h3>
    <p>A IA que cria conteúdo novo (texto, imagem, áudio, vídeo, código) em vez de só classificar ou organizar o que já existe. Um filtro de spam é IA, mas não é generativa. O Canva gerando uma arte a partir de uma frase é. A comparação <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> mostra os três assistentes generativos mais usados lado a lado.</p>

    <h2>Termos da conversa: prompt, token, janela de contexto e alucinação</h2>

    <h3>5. Prompt</h3>
    <p>O pedido que você digita: pergunta, instrução, contexto e formato esperado. Quanto mais específico, melhor a resposta, e o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> mostra a estrutura que funciona. Um prompt fraco e um bom, para o mesmo objetivo:</p>

    <pre><code>Fraco: Escreve um post sobre minha loja.

Bom: Você é redator de uma loja de roupas infantis em Recife. Escreva um post de Instagram com até 80 palavras anunciando 20% de desconto em macacões de algodão até domingo. Tom leve, sem emoji, com uma chamada para mandar mensagem no WhatsApp.</code></pre>

    <h3>6. Token</h3>
    <p>A unidade que a IA usa para ler e escrever, geralmente um pedaço de palavra. Pela <a href="https://ai.google.dev/gemini-api/docs/tokens" rel="noopener noreferrer">documentação do Google</a>, um token equivale a cerca de 4 caracteres e 100 tokens dão de 60 a 80 palavras em inglês; em português a conta fica parecida, um pouco mais gorda. Tokens definem o custo na API e o tamanho máximo de uma conversa.</p>

    <h3>7. Janela de contexto</h3>
    <p>Tudo o que o modelo consegue "enxergar" de uma vez: seu texto, as respostas anteriores e a resposta que ele está escrevendo. A <a href="https://platform.claude.com/docs/en/build-with-claude/context-windows" rel="noopener noreferrer">documentação da Anthropic</a> chama isso de memória de trabalho e lista janelas de 200 mil a 1 milhão de tokens conforme o modelo. Um exemplo de conta: a dona de uma confeitaria em Belo Horizonte quer resumir 120 avaliações do Google, com umas 40 palavras cada. São 4.800 palavras, entre 6 mil e 8 mil tokens pela regra acima, o que cabe em uma única mensagem. A mesma documentação avisa que a precisão cai em conversas longas demais, então abrir um chat novo por tarefa ajuda.</p>

    <h3>8. Alucinação</h3>
    <p>Quando a IA inventa um dado, um nome ou uma lei e apresenta com a mesma confiança de um fato verdadeiro. Não é defeito raro, é característica do jeito como o modelo funciona. A regra prática: número, data, citação e referência legal se conferem antes de usar. A lista dos <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">5 erros comuns de quem está começando</a> mostra como esse problema aparece na rotina.</p>

    <h2>Termos do treinamento: pré-treinamento, fine-tuning, RLHF e RAG</h2>

    <h3>9. Pré-treinamento</h3>
    <p>A primeira fase, em que o modelo aprende a prever a próxima palavra lendo um volume gigante de texto. O glossário da Anthropic explica que, nesse estágio, o modelo ainda não é bom em seguir instruções; isso vem depois.</p>

    <h3>10. Fine-tuning (ajuste fino)</h3>
    <p>Treinar um pouco mais um modelo pronto com exemplos de uma tarefa específica, para que ele imite aquele padrão. O <a href="https://developers.openai.com/api/docs/guides/model-optimization" rel="noopener noreferrer">guia de otimização da OpenAI</a> recomenda começar por um bom prompt e só partir para o fine-tuning quando isso não basta. Para quem usa o app, o fine-tuning quase nunca é o caminho; um prompt bem escrito resolve a maioria dos casos.</p>

    <h3>11. RLHF</h3>
    <p>Aprendizado por reforço com feedback humano: pessoas comparam respostas e o modelo aprende a preferir as mais bem avaliadas. É a etapa que transforma um previsor de palavras em um assistente útil.</p>

    <h3>12. RAG</h3>
    <p>Geração aumentada por recuperação: antes de responder, o sistema busca trechos relevantes em documentos ou na web e coloca esse material na janela de contexto. É o que o NotebookLM e o Perplexity fazem quando respondem com base nos seus arquivos ou citam páginas, como o guia sobre <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">Perplexity e NotebookLM</a> mostra. RAG reduz alucinação, mas não zera: se a fonte é ruim, a resposta também é.</p>

    <h2>Termos das ferramentas: agente, automação, multimodal, API e MCP</h2>

    <h3>13. Agente de IA</h3>
    <p>Um sistema que recebe um objetivo e executa uma sequência de ações sozinho, usando ferramentas como navegador, e-mail ou planilha, e ajustando o rumo conforme o resultado. Diferente de um chatbot, que responde e para. O artigo sobre <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA</a> explica onde eles já funcionam e onde ainda falham.</p>

    <h3>14. Automação</h3>
    <p>Fluxo fixo do tipo "quando X acontecer, faça Y", sem julgamento no meio. Um Zapier que salva anexos no Drive é automação e não precisa de IA. Muita gente chama de agente o que é automação com uma etapa de IA dentro.</p>

    <h3>15. Multimodal</h3>
    <p>Modelo que entende e produz mais de um tipo de conteúdo: texto, imagem, áudio e vídeo. É por isso que você pode fotografar uma conta de luz e pedir a explicação. O guia sobre <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA multimodal</a> lista usos concretos disso.</p>

    <h3>16. API</h3>
    <p>A porta pela qual outros programas acessam o modelo, cobrada por token. Para o uso pessoal, a assinatura mensal do aplicativo costuma sair mais simples; a comparação <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a> ajuda a decidir.</p>

    <h3>17. MCP</h3>
    <p>Sigla de Model Context Protocol, um padrão aberto que, segundo o glossário da Anthropic, funciona como uma "porta USB-C" para conectar modelos a ferramentas e dados. Na prática, é o que permite ligar o assistente ao seu calendário, ao Notion ou ao e-mail. O passo a passo para <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">configurar seu primeiro assistente pessoal</a> mostra essas conexões em uso.</p>

    <h2>Tabela rápida: os outros oito termos que você vai cruzar</h2>

    <p>Os termos abaixo aparecem menos, quase sempre em página de preço, notícia de lançamento ou conversa com alguém de tecnologia:</p>

    <table>
      <thead>
        <tr><th>Termo</th><th>O que significa</th><th>Onde você esbarra nele</th></tr>
      </thead>
      <tbody>
        <tr><td>18. Parâmetros</td><td>Os números internos ajustados no treinamento; mais parâmetros, em geral, mais capacidade e mais custo.</td><td>Notícias de lançamento ("modelo de X bilhões de parâmetros").</td></tr>
        <tr><td>19. Temperatura</td><td>Ajuste que controla o quanto a resposta varia: baixa é previsível, alta é criativa (glossário da Anthropic).</td><td>Configurações avançadas e API.</td></tr>
        <tr><td>20. Latência</td><td>O tempo entre enviar o prompt e receber a resposta.</td><td>Comparativos de velocidade entre modelos.</td></tr>
        <tr><td>21. Inferência</td><td>O ato de o modelo gerar uma resposta (o treinamento é a outra fase).</td><td>Notícias sobre custo de data center e chips.</td></tr>
        <tr><td>22. Pesos abertos</td><td>Modelo cujo arquivo é publicado para qualquer um baixar e rodar.</td><td>Notícias de modelos "open" e discussões de privacidade.</td></tr>
        <tr><td>23. Benchmark</td><td>Prova padronizada usada para comparar modelos.</td><td>Tabelas de lançamento e reviews.</td></tr>
        <tr><td>24. System prompt</td><td>Instrução fixa que define o papel e as regras do assistente antes da sua mensagem.</td><td>GPTs personalizados, Projetos e Gems.</td></tr>
        <tr><td>25. Deepfake</td><td>Vídeo, áudio ou imagem sintética que imita uma pessoa real.</td><td>Golpes e notícias; o guia sobre <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">deepfakes</a> ensina a identificar.</td></tr>
      </tbody>
    </table>

    <p>Para fixar o vocabulário, peça para a própria IA te testar. Um prompt que funciona no plano gratuito de qualquer assistente:</p>

    <pre><code>Quero aprender vocabulário de inteligência artificial. Faça um quiz de 10 perguntas de múltipla escolha, uma por vez, sobre estes termos: prompt, token, janela de contexto, alucinação, agente, RAG, fine-tuning, multimodal, API e system prompt. Espere minha resposta antes de mostrar a próxima pergunta e explique o erro quando eu errar, com um exemplo do dia a dia de um pequeno negócio.</code></pre>

    <h2>Erros comuns ao usar esses termos</h2>

    <p><strong>Chamar tudo de "o ChatGPT".</strong> ChatGPT é um aplicativo da OpenAI. Claude é da Anthropic, Gemini é do Google. Quem diz "o ChatGPT do Google" começa a conversa confusa e tem dificuldade para pedir ajuda ou comparar preço.</p>

    <p><strong>Achar que janela de contexto é memória permanente.</strong> A janela vale dentro de uma conversa. Fechou o chat, o modelo não lembra por padrão. Alguns apps têm um recurso separado de memória entre conversas, que você pode ligar ou desligar; o guia sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> mostra onde fica esse ajuste.</p>

    <p><strong>Confundir automação com agente.</strong> Se o fluxo é sempre igual, é automação, e costuma ser mais barato e mais confiável. Agente faz sentido quando cada caso exige decisão.</p>

    <p><strong>Usar termo em inglês sem necessidade.</strong> "Prompt" já virou português; "fine-tuning" e "RAG" ainda assustam. Ao explicar IA para a equipe ou a família, traduza: ajuste fino, busca antes de responder.</p>

    <p>Com esses 25 termos você lê qualquer página de preço, entende a notícia de lançamento e sabe o que está pedindo quando abre um chat. O próximo passo é usar: escolha uma tarefa da sua semana e resolva com um dos guias da categoria <a href="/categoria/iniciantes">Para Iniciantes</a>.</p>
  `,
  faq: [
    {
      question: "O que é token em inteligência artificial?",
      answer:
        "Token é a unidade que o modelo usa para ler e escrever texto, geralmente um pedaço de palavra. Pela documentação do Google, um token tem cerca de 4 caracteres e 100 tokens equivalem a 60 a 80 palavras em inglês. Tokens definem quanto texto cabe em uma conversa e quanto custa cada chamada na API das ferramentas de IA.",
    },
    {
      question: "O que é janela de contexto e por que ela importa?",
      answer:
        "Janela de contexto é tudo o que o modelo consegue considerar de uma vez: seu texto, as mensagens anteriores e a resposta em andamento. A documentação da Anthropic descreve janelas de 200 mil a 1 milhão de tokens conforme o modelo. Na prática, ela define se você consegue colar um documento longo de uma vez e explica por que conversas muito extensas perdem precisão.",
    },
    {
      question: "O que significa alucinação em IA?",
      answer:
        "Alucinação é quando a IA apresenta uma informação inventada com a mesma confiança de um fato correto: um número, uma lei, uma citação ou um nome que não existe. Não é um erro raro, é uma característica do funcionamento dos modelos de linguagem. Por isso todo dado que vai para um documento, um contrato ou uma publicação precisa ser conferido em fonte confiável antes de usar.",
    },
    {
      question: "Qual a diferença entre agente de IA e chatbot?",
      answer:
        "Um chatbot responde perguntas e para; cada mensagem sua gera uma resposta. Um agente recebe um objetivo e executa uma sequência de ações sozinho, usando ferramentas como navegador, e-mail ou planilha, e ajustando o rumo conforme o resultado. Automação é um terceiro caso: um fluxo fixo do tipo se X, então Y, que muitas vezes nem precisa de IA para funcionar bem.",
    },
    {
      question: "O que é fine-tuning e eu preciso disso?",
      answer:
        "Fine-tuning é treinar um pouco mais um modelo pronto com exemplos de uma tarefa específica, para que ele reproduza aquele padrão. O guia de otimização da OpenAI recomenda começar por um bom prompt e só considerar fine-tuning quando isso não basta. Para quem usa o aplicativo no dia a dia, um prompt bem escrito e um system prompt fixo resolvem quase todos os casos.",
    },
    {
      question: "O que é RAG em inteligência artificial?",
      answer:
        "RAG significa geração aumentada por recuperação: antes de responder, o sistema busca trechos relevantes em documentos ou na web e coloca esse material na janela de contexto do modelo. É o que ferramentas como NotebookLM e Perplexity fazem ao responder com base nos seus arquivos ou citar páginas. RAG reduz alucinações, mas a qualidade da resposta depende da qualidade das fontes usadas.",
    },
  ],
  quiz: [
    {
      question: "Você colou um contrato longo e a IA parou de considerar o começo do texto. Qual termo explica isso?",
      options: ["Alucinação", "Janela de contexto", "Fine-tuning"],
      answer: 1,
      explanation:
        "A janela de contexto é o limite do que o modelo consegue considerar de uma vez. Quando a conversa passa desse limite, o começo deixa de ser levado em conta.",
    },
    {
      question: "Um fluxo que salva todo anexo de e-mail em uma pasta do Drive, sempre do mesmo jeito, é melhor descrito como:",
      options: ["Agente de IA", "Automação", "RAG"],
      answer: 1,
      explanation:
        "Fluxo fixo, sem julgamento no meio, é automação. Agente é quando o sistema decide os passos conforme o objetivo e o resultado de cada ação.",
    },
    {
      question: "A IA citou uma lei com número e artigo que não existem. Isso é um exemplo de:",
      options: ["Alucinação", "Temperatura", "Latência"],
      answer: 0,
      explanation:
        "Alucinação é quando o modelo inventa um dado e apresenta com confiança. Referências legais, números e citações sempre precisam de conferência.",
    },
  ],
};
