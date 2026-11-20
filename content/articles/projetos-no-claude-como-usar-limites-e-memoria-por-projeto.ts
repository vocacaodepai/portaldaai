import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "projetos-no-claude-como-usar-limites-e-memoria-por-projeto",
  title: "Projetos no Claude: como usar, limites e memória por projeto",
  seoTitle: "Projetos no Claude: como usar, limites e memória",
  excerpt:
    "Projetos no Claude reúnem arquivos, instruções e conversas num só lugar. Veja como criar, o limite do plano gratuito, a memória separada e o que muda nos pagos.",
  metaDescription:
    "Projetos no Claude: aprenda a criar um projeto, subir arquivos, definir instruções, entender o limite de 5 no plano gratuito, a memória por projeto e o RAG nos planos pagos.",
  category: "ferramentas",
  date: "2026-10-20",
  readTime: 7,
  imageQuery: "folders organized desk laptop workspace",
  seed: 481,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Projetos agrupam conversas em torno de uma base de conhecimento e de instruções próprias, e estão disponíveis para todos os usuários, com limite de cinco projetos na conta gratuita.",
    "Cada projeto tem memória própria, separada dos outros, e dá para desligar o uso da memória da conta para isolar completamente um assunto ou cliente.",
    "Nos planos pagos, o recurso de RAG amplia a capacidade da base de conhecimento quando ela chega perto do limite de contexto, e os planos de equipe permitem compartilhar projetos.",
  ],
  content: `
    <p>Projetos no Claude são áreas de trabalho que juntam arquivos, instruções e conversas sobre um mesmo assunto, para você não repetir o contexto a cada chat novo. Segundo a central de ajuda da Anthropic, o recurso está disponível para todos os usuários, inclusive da conta gratuita, que pode ter até cinco projetos.</p>

    <p>Quem usa assistente de IA no dia a dia conhece a cena: você explica quem é o cliente, cola o guia de estilo, pede um texto e, na semana seguinte, começa tudo de novo. Projeto resolve esse retrabalho. Este guia mostra como funciona, o que cada plano oferece, como a memória se comporta e quando vale a pena montar um, com base nas páginas oficiais conferidas em 20/10/2026. Para comparar o Claude com outros assistentes, veja também o guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a>.</p>

    <h2>O que são Projetos no Claude</h2>

    <p>De acordo com o artigo oficial <a href="https://support.claude.com/en/articles/9517075-what-are-projects" target="_blank" rel="noopener noreferrer">What are projects</a>, um projeto é um espaço independente, com histórico de conversas e base de conhecimento próprios. Você sobe documentos, textos e trechos de código, e o Claude usa esse material como pano de fundo para as conversas dentro do projeto. Também é possível escrever instruções personalizadas, como pedir um tom mais formal ou que a IA responda a partir de um papel profissional específico.</p>

    <p>Na prática, o projeto funciona como uma pasta com cérebro: o material fica guardado, e cada chat novo já começa sabendo do que se trata. Isso lembra o que a categoria chama de <a href="/artigos/memoria-longa-em-ia-assistente-que-lembra-de-voce">memória longa em IA</a>, mas com uma diferença importante: aqui você escolhe exatamente o que entra, em vez de depender do que o sistema decide guardar.</p>

    <h2>Como criar um projeto passo a passo</h2>

    <p>O caminho muda um pouco entre web, desktop e celular, mas a lógica é a mesma. Pelo navegador, o fluxo costuma ser este:</p>

    <ol>
      <li>Abra a área de projetos na barra lateral e escolha criar um novo projeto.</li>
      <li>Dê um nome claro, como "Cliente Padaria Sol" ou "TCC: capítulo 2".</li>
      <li>Escreva as instruções do projeto: quem você é, o que quer, formato e tom.</li>
      <li>Suba os arquivos de apoio: guia de marca, briefing, planilha, rascunho.</li>
      <li>Abra um chat dentro do projeto e peça a primeira tarefa.</li>
    </ol>

    <p>Os nomes dos botões podem mudar com as atualizações do aplicativo, então siga o que aparece na sua tela. Quanto mais enxuto e organizado o material, melhor o resultado. Três arquivos curtos e bem escolhidos costumam render mais do que dez documentos soltos. Se você ainda está aprendendo a escrever pedidos, o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">engenharia de prompt</a> ajuda a redigir as instruções.</p>

    <h2>Limites por plano: o que muda do gratuito para o pago</h2>

    <p>A página oficial traz o seguinte, e vale conferir antes de decidir por um plano:</p>

    <table>
      <thead>
        <tr><th>Recurso</th><th>Gratuito</th><th>Planos pagos (Pro, Max, Team, Enterprise)</th></tr>
      </thead>
      <tbody>
        <tr><td>Criar projetos</td><td>Sim, até 5</td><td>Sim</td></tr>
        <tr><td>Instruções e arquivos por projeto</td><td>Sim</td><td>Sim</td></tr>
        <tr><td>RAG automático para bases grandes</td><td>Não</td><td>Sim</td></tr>
        <tr><td>Compartilhar com outras pessoas</td><td>Não</td><td>Team e Enterprise, com permissão de ver ou editar</td></tr>
      </tbody>
    </table>

    <p>O RAG, sigla em inglês para geração aumentada por recuperação, entra quando a base de conhecimento chega perto do limite de contexto. Segundo a página, o recurso pode ampliar a capacidade em até 10 vezes mantendo a qualidade das respostas. Para entender a ideia por trás, leia <a href="/artigos/rag-na-ia-como-chatbot-responde-com-base-nos-seus-documentos">RAG na IA</a> e o texto sobre <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto</a>. Os preços dos planos mudam, então consulte a página oficial de planos da Anthropic antes de assinar; veja também o comparativo <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga: o que vale a pena</a>.</p>

    <h2>Memória por projeto: o que fica dentro e o que fica fora</h2>

    <p>Segundo o artigo sobre <a href="https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context" target="_blank" rel="noopener noreferrer">busca em chats e memória</a>, cada projeto tem a sua própria memória. Dentro do projeto, o Claude usa a memória dele mais a memória da conta vinda de chats fora de projetos, mas não mistura com a de outros projetos. Para isolar de vez um assunto, basta desligar a opção "Use account memory" na página do projeto.</p>

    <p>A mesma página informa que a memória vem ligada por padrão nos planos Free, Pro e Max, enquanto em Team e Enterprise o dono da conta precisa ativá-la. Você pode pausar a memória (ela para de ser usada, mas o que já existe fica) ou redefinir (apaga tudo). Há ainda o chat anônimo, que não entra no histórico nem na memória. Já a página de projetos avisa que o contexto não passa de um chat para outro dentro do projeto, a menos que a informação seja adicionada à base de conhecimento. Ou seja: o que deve valer sempre precisa estar nos arquivos ou nas instruções.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Não suba para um projeto documentos com dados de clientes, senhas ou informações sigilosas sem checar a política da sua conta. A central de ajuda diz que algumas informações, como números de documento de identidade e de conta financeira, nunca são salvas na memória, mas isso não substitui o cuidado com o que você anexa.</p></div>

    <h2>Três usos práticos para quem trabalha com conteúdo e pequenos negócios</h2>

    <h3>Freelancer com vários clientes</h3>

    <p>Uma redatora com quatro clientes cria um projeto por cliente, com guia de tom de voz, exemplos de textos aprovados e lista de palavras proibidas. Ao abrir um chat, a IA já sabe como escrever para aquela marca. Desligar a memória da conta em cada projeto evita que o estilo de um cliente contamine o outro.</p>

    <h3>Estudante com TCC ou concurso</h3>

    <p>Um projeto com o projeto de pesquisa, as normas da faculdade e os artigos lidos mantém o fio da meada ao longo de semanas. Mas lembre que a regra da instituição vem primeiro; confira o guia de <a href="/artigos/tcc-com-ia-o-que-a-faculdade-aceita-abnt-citacoes-e-plagio">TCC com IA</a> e o de <a href="/artigos/como-usar-ia-para-estudar-para-provas-e-concursos">estudo para provas e concursos</a>.</p>

    <h3>Dono de pequeno negócio</h3>

    <p>Um projeto "Atendimento da loja" com política de troca, tabela de preços e tom de voz acelera respostas a clientes, desde que uma pessoa revise antes de enviar. O guia de <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">como configurar seu primeiro assistente de IA</a> traz uma estrutura parecida para quem está começando.</p>

    <h2>Exemplo de instruções de projeto que você pode adaptar</h2>

    <pre><code>Você é redatora sênior da Padaria Sol. Escreva em português do Brasil, tom caloroso e direto, frases curtas, sem gírias pesadas. Sempre que eu pedir um texto, entregue 3 versões e aponte qual usa o guia de marca anexado. Se faltar informação, pergunte antes de inventar. Nunca cite preços que não estejam nos arquivos do projeto.</code></pre>

    <pre><code>Leia os arquivos do projeto e liste: (1) as 5 regras de tom de voz que você identificou, (2) o que está faltando para eu escrever melhor, (3) duas perguntas que eu deveria responder. Não escreva nenhum texto ainda.</code></pre>

    <p>O segundo comando é um bom teste de projeto novo: ele mostra o que a IA realmente entendeu da base antes de você gastar tempo com a primeira entrega.</p>

    <h2>Erros comuns ao usar projetos</h2>

    <ul class="checklist">
      <li>Subir arquivos demais e desorganizados, sem dizer à IA qual é o mais importante.</li>
      <li>Esquecer que um chat novo dentro do projeto não herda o que foi dito em outro chat.</li>
      <li>Misturar clientes ou assuntos no mesmo projeto e ficar com respostas contaminadas.</li>
      <li>Compartilhar projeto de equipe sem conferir as permissões de ver e de editar.</li>
      <li>Confiar na resposta sem conferir fatos, números e citações.</li>
    </ul>

    <p>Sobre o último ponto, nenhuma base de conhecimento elimina o risco de erro; o texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> explica como conferir. E, para entender o que cada ferramenta guarda de você, leia <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a>.</p>

    <h2>Projetos, Gems e outras pastas de IA: qual escolher</h2>

    <p>A ideia de guardar contexto fixo existe em quase todo assistente. No Google, o conceito aparece nos Gems, tema do guia sobre <a href="/artigos/gemini-gems-viram-skills-o-que-muda-e-como-migrar">Gems que viram Skills</a>; em ferramentas de pesquisa, aparece nos cadernos, como no <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">NotebookLM</a>. A escolha costuma depender de onde seus arquivos já estão e de qual assistente você usa mais. Se o seu trabalho gira em torno de documentos fixos, projeto é a opção natural; se gira em torno de pesquisa nova a cada vez, um caderno de pesquisa pode servir melhor.</p>

    <p>O próximo passo é prático: crie um projeto de teste com um assunto que você já domina, suba dois arquivos, escreva instruções de cinco linhas e compare o resultado com um chat sem contexto. Para ver outras novidades de assistentes, acompanhe a categoria Ferramentas do Portal da AI.</p>
  `,
  faq: [
    {
      question: "Projetos no Claude são gratuitos?",
      answer:
        "Sim, o recurso está disponível para todos os usuários, inclusive da conta gratuita, que pode criar até cinco projetos. Os planos pagos acrescentam o RAG automático para bases grandes, e Team e Enterprise permitem compartilhar. Confira a página oficial de planos para ver valores e limites atuais.",
    },
    {
      question: "O que posso colocar em um projeto do Claude?",
      answer:
        "Documentos, textos e trechos de código, mais instruções personalizadas para o projeto. A página oficial não informa um limite numérico de arquivos, mas o material precisa caber na capacidade de contexto, que nos planos pagos é ampliada pelo RAG. Evite anexar dados sigilosos sem checar a política da sua conta.",
    },
    {
      question: "A memória de um projeto se mistura com a de outro?",
      answer:
        "Não. Cada projeto tem memória própria, e o Claude não usa a de outros projetos. Dentro do projeto, ele combina a memória do projeto com a memória da conta vinda de chats fora de projetos. Para separar totalmente, desligue a opção Use account memory na página do projeto.",
    },
    {
      question: "Posso compartilhar um projeto com minha equipe?",
      answer:
        "Nos planos Team e Enterprise, sim, desde que os administradores permitam. Os membros podem receber permissão de ver ou de editar, e só o criador do projeto remove o acesso. No plano gratuito e nos individuais, o compartilhamento não faz parte do recurso descrito na página oficial.",
    },
    {
      question: "Qual a diferença entre projeto e conversa comum?",
      answer:
        "A conversa comum começa do zero a cada vez, a menos que a memória traga algo. O projeto guarda arquivos e instruções que valem para todos os chats dentro dele. Mas o conteúdo de um chat do projeto não passa para outro, a menos que você o adicione à base de conhecimento.",
    },
  ],
};
