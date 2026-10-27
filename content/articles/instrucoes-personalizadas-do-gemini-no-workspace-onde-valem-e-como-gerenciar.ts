import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "instrucoes-personalizadas-do-gemini-no-workspace-onde-valem-e-como-gerenciar",
  title: "Instruções personalizadas do Gemini no Workspace: onde valem",
  seoTitle: "Instruções personalizadas do Gemini no Workspace",
  excerpt:
    "Instruções personalizadas do Gemini no Workspace: onde valem no Gmail, Drive, Chat, Planilhas e Slides, como salvar, quem tem, limites e o que não está claro.",
  metaDescription:
    "Veja como salvar instruções personalizadas do Gemini no Google Workspace, em quais apps valem, quem tem acesso, onde gerenciar e os limites informados.",
  category: "ferramentas",
  date: "2026-10-24",
  readTime: 7,
  imageQuery: "person typing laptop settings preferences",
  seed: 619,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "As instruções personalizadas guardam seu estilo, tom e formato de resposta no Gemini, e desde 2 de setembro de 2026 valem também no Ask Gemini do Drive e do Chat e no painel lateral de Gmail, Planilhas e Slides, além do Docs.",
    "Para salvar, basta pedir ao Gemini que guarde a instrução, e para ver o que foi salvo o caminho é menu, Configurações, Personalização, sem controle do administrador, segundo o Google.",
    "O Google informou o limite de 1.000 instruções ativas por usuário no anúncio do Docs, e não detalha no aviso de setembro como editar ou apagar cada uma, então vale conferir na Central de Ajuda.",
  ],
  content: `
    <p>As instruções personalizadas do Gemini no Workspace são regras permanentes que você pede ao assistente para guardar, como "responda em tópicos" ou "use tom profissional e direto", e que ele passa a seguir sem você repetir em cada conversa. Segundo o <a href="https://workspaceupdates.googleblog.com/2026/09/custom-instructions-for-gemini-in-Workspace-now-available-in-more-apps.html" rel="noopener noreferrer" target="_blank">blog Workspace Updates</a> (verificado em 24/10/2026), o recurso nasceu no Docs e foi ampliado a partir de 2 de setembro de 2026 para outros apps.</p>

    <p>Quem usa o Gemini dentro do Gmail, do Drive e das Planilhas costuma perder tempo repetindo os mesmos pedidos de formato. Este guia mostra onde as instruções valem, como salvar e conferir, quem tem acesso, que limites o Google informou, três modelos de instrução para copiar e o que o aviso oficial deixa em aberto.</p>

    <h2>O que são as instruções personalizadas?</h2>

    <p>Pense em um bilhete fixo colado no monitor do seu assistente: "sempre responda em português do Brasil, com frases curtas e sem enfeite". Em vez de escrever isso toda vez, você pede uma vez ao Gemini que armazene a regra, e ela passa a moldar as respostas seguintes. O anúncio do Google descreve o objetivo como personalizar estilo, tom e formatação sem repetir o pedido a cada conversa.</p>

    <p>No lançamento para o Docs, em maio de 2026, o Google deu dois exemplos: "Always respond in bullet points" (responda sempre em tópicos) e "Use a concise and professional tone for all my documents" (use tom conciso e profissional em todos os meus documentos). O recurso começou a ser liberado em 4 de maio de 2026, de forma gradual, segundo o <a href="https://workspaceupdates.googleblog.com/2026/05/set-custom-instructions-for-gemini-in-Google-Docs.html" rel="noopener noreferrer" target="_blank">anúncio de maio</a> (verificado em 24/10/2026).</p>

    <p>Não confunda instrução com habilidade. A instrução é uma preferência geral de estilo, enquanto as habilidades (skills) servem para tarefas específicas, como o texto sobre <a href="/artigos/gemini-gems-viram-skills-o-que-muda-e-como-migrar">Gems que viram skills</a> explica.</p>

    <h2>Onde as instruções valem agora</h2>

    <p>Pelo aviso de setembro, as instruções salvas em uma superfície são usadas nas demais, para dar uma experiência de personalização consistente. A lista confirmada pelo Google:</p>

    <table>
      <thead><tr><th>Onde</th><th>Situação segundo o Google</th></tr></thead>
      <tbody>
        <tr><td>Gemini no Google Docs</td><td>Lançado em maio de 2026</td></tr>
        <tr><td>Ask Gemini no Drive</td><td>Incluído a partir de 2 de setembro</td></tr>
        <tr><td>Ask Gemini no Chat</td><td>Incluído a partir de 2 de setembro</td></tr>
        <tr><td>Painel lateral do Gemini no Gmail</td><td>Incluído a partir de 2 de setembro</td></tr>
        <tr><td>Painel lateral do Gemini nas Planilhas</td><td>Incluído a partir de 2 de setembro</td></tr>
        <tr><td>Painel lateral do Gemini nos Slides</td><td>Incluído a partir de 2 de setembro</td></tr>
      </tbody>
    </table>

    <p>O rollout é gradual e, para os domínios nas versões Rapid Release e Scheduled Release, pode levar até 15 dias para o recurso aparecer. Se você ainda não vê a opção, o motivo mais provável é o ritmo de liberação do seu domínio, ou o plano. Detalhes de cada app estão nos textos sobre o <a href="/artigos/gemini-no-gmail-escrever-e-responder-emails-mais-rapido">Gemini no Gmail</a>, o <a href="/artigos/ask-gemini-no-google-chat-o-que-faz-quem-tem-e-limites">Ask Gemini no Google Chat</a> e o <a href="/artigos/gemini-no-google-planilhas-no-iphone-e-android-como-usar-e-limites">Gemini nas Planilhas no celular</a>.</p>

    <h2>Quem tem acesso e o que o Google não disse</h2>

    <p>O aviso de setembro diz que o recurso está disponível para todos os clientes do Google Workspace que têm acesso ao Ask Gemini no Drive, ao Ask Gemini no Chat ou ao painel lateral do Gemini em Gmail, Planilhas ou Slides. O texto não lista edições, e remete a uma tabela de disponibilidade de recursos.</p>

    <p>O anúncio do Docs, em maio, é mais detalhado e lista estes planos:</p>

    <ul>
      <li><strong>Business:</strong> Starter, Standard e Plus.</li>
      <li><strong>Enterprise:</strong> Starter, Standard e Plus.</li>
      <li><strong>Education:</strong> Education Plus, além dos complementos Google AI Pro for Education e Teaching and Learning.</li>
      <li><strong>Contas pessoais:</strong> Google AI Plus, Pro e Ultra.</li>
      <li><strong>Outros:</strong> Frontline Plus e os complementos AI Expanded Access e AI Ultra Access.</li>
    </ul>

    <p>O anúncio não menciona contas pessoais gratuitas, então não dá para afirmar que quem usa o Gemini sem assinatura terá o recurso. Para comparar os planos de consumo, veja o guia <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">Google AI Plus, Pro ou Ultra</a>.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Nos dois anúncios, o Google informa que não há controle do administrador para esse recurso. Ou seja, quem administra o domínio da empresa não tem um controle específico do recurso no painel de administração.</p></div>

    <h2>Como salvar uma instrução, passo a passo</h2>

    <ol>
      <li>Abra o Gemini onde você já usa: o painel lateral no Gmail, Planilhas, Slides ou Docs, ou o Ask Gemini no Drive ou no Chat.</li>
      <li>Escreva um pedido claro para que ele armazene a regra, por exemplo: "Guarde esta instrução: responda sempre em português do Brasil, em tópicos curtos".</li>
      <li>Confirme que o Gemini avisou que salvou.</li>
      <li>Faça um teste com um pedido comum, como resumir um e-mail, e veja se o formato mudou.</li>
      <li>Abra o menu (as três linhas), vá em Configurações e depois em Personalização para ver as instruções salvas.</li>
    </ol>

    <p>O passo 5 segue o caminho informado pelo Google, que chama essa aba de Personalização e diz que todas as instruções salvas podem ser vistas e gerenciadas ali. O aviso não descreve como editar ou apagar uma instrução individual e remete à Central de Ajuda, no artigo chamado "Customize Gemini in Workspace's responses with your instructions". Se você precisar remover algo, procure essa página em vez de supor o caminho.</p>

    <h2>Três modelos de instrução para copiar</h2>

    <p>Os exemplos abaixo são sugestões minhas de redação, não instruções oficiais do Google. Ajuste ao seu trabalho e prefira regras curtas e verificáveis, porque instrução vaga rende resposta vaga. O guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> mostra como escrever pedidos claros.</p>

    <pre><code>Guarde esta instrução: responda sempre em português do Brasil, com frases
curtas, sem jargão e sem elogios no começo. Se faltar informação para
responder, pergunte antes de supor.</code></pre>

    <pre><code>Guarde esta instrução: ao resumir e-mails, comece com uma linha dizendo
o que eu preciso decidir ou responder, depois liste prazos e valores
em tópicos. Não invente datas que não estejam no texto.</code></pre>

    <pre><code>Guarde esta instrução: em planilhas, explique sempre a fórmula em uma
frase e mostre um exemplo com os dados da própria tabela antes de
sugerir qualquer alteração.</code></pre>

    <p>Repare que os modelos pedem para o Gemini não inventar e para perguntar em caso de dúvida. Isso não elimina erros, e o texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">como checar se a resposta da IA está certa</a> continua valendo.</p>

    <h2>Quando vale usar instruções e quando basta pedir na hora</h2>

    <p>Instrução salva compensa para o que você pede todo dia: idioma, tom, formato de resumo, jeito de explicar fórmulas. Para tarefas únicas, como reescrever um parágrafo para um cliente específico, é melhor pedir direto na conversa, porque uma regra permanente demais acaba atrapalhando em outros contextos. Uma boa medida é salvar só o que você já repetiu três vezes.</p>

    <p>Também vale testar a instrução em apps diferentes. Como o Google diz que as instruções salvas em uma superfície são usadas nas outras, uma regra pensada para e-mails, como "comece com a decisão que preciso tomar", pode soar estranha nas Planilhas. Prefira regras gerais e deixe os detalhes de cada tarefa para o pedido do momento.</p>

    <h2>Privacidade e uso no trabalho</h2>

    <p>Uma instrução fica salva e é aplicada em conversas futuras, então não escreva nela dados sensíveis, como senha, documento ou informação de cliente. Use regras de estilo e de formato, não segredos. Se a sua empresa tem política de IA, siga o que ela define, e o modelo do texto sobre <a href="/artigos/politica-de-uso-de-ia-na-pequena-empresa-regras-simples-para-a-equipe">política de uso de IA na pequena empresa</a> ajuda a criar uma.</p>

    <p>Também vale lembrar que o Gemini guarda outras informações sobre você em outros recursos. Para quem quer controlar o que fica armazenado, o artigo sobre <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">como apagar o histórico do Gemini e usar o chat temporário</a> e o guia de <a href="/artigos/memoria-longa-em-ia-assistente-que-lembra-de-voce">memória longa em IA</a> explicam as diferenças.</p>

    <h2>Erros comuns ao usar instruções personalizadas</h2>

    <ul>
      <li><strong>Escrever regras contraditórias.</strong> "Seja breve" e "explique em detalhes" na mesma lista confundem o resultado.</li>
      <li><strong>Colocar dados sensíveis na instrução.</strong> Ela é permanente e pode aparecer em muitos contextos.</li>
      <li><strong>Esperar que valha em todo lugar.</strong> O aviso lista superfícies específicas, e o app do Gemini tem seus próprios recursos de personalização.</li>
      <li><strong>Esquecer o que salvou.</strong> Revise a aba Personalização de tempos em tempos para remover regras antigas.</li>
      <li><strong>Achar que o administrador controla.</strong> O Google informa que não há controle de admin para o recurso, então a responsabilidade é de quem escreve.</li>
    </ul>

    <p>Para entender o que mais mudou na personalização do assistente, leia <a href="/artigos/menu-personalizar-do-gemini-skills-apps-e-controle-para-admins">o menu Personalizar do Gemini</a>. E se você ainda está escolhendo entre assistentes, o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> ajuda na decisão.</p>

    <p>Quer ver mais novidades de ferramentas explicadas sem enrolação? Siga pela categoria de <a href="/categoria/ferramentas">ferramentas de IA</a> e comece hoje: salve uma instrução simples de estilo, teste por uma semana e ajuste conforme o resultado.</p>
  `,
  faq: [
    {
      question: "O que são instruções personalizadas do Gemini no Workspace?",
      answer:
        "São regras permanentes de estilo, tom e formato que você pede ao Gemini para guardar, como responder em tópicos ou usar tom profissional. Depois de salvas, elas passam a valer nas respostas seguintes sem você precisar repetir o pedido, nos apps do Workspace em que o recurso está liberado.",
    },
    {
      question: "Em quais apps do Google as instruções funcionam?",
      answer:
        "Segundo o Google, no Gemini do Docs, desde maio de 2026, e, desde 2 de setembro de 2026, também no Ask Gemini do Drive, no Ask Gemini do Chat e no painel lateral do Gemini no Gmail, nas Planilhas e nos Slides. A liberação é gradual e pode levar até 15 dias.",
    },
    {
      question: "Como ver as instruções que o Gemini salvou?",
      answer:
        "O Google informa o caminho: abra o menu (as três linhas), vá em Configurações e depois em Personalização. Ali ficam as instruções salvas. O aviso não explica como editar ou apagar uma por uma e indica a Central de Ajuda para esses detalhes.",
    },
    {
      question: "Qual o limite de instruções?",
      answer:
        "No anúncio do Docs, de maio de 2026, o Google diz que cada usuário pode ter até 1.000 instruções ativas. O aviso de setembro não repete o número para os outros apps, então trate o limite como confirmado para o Docs e confira a Central de Ajuda para as demais superfícies.",
    },
    {
      question: "O administrador do Workspace controla esse recurso?",
      answer:
        "Não. Nos dois anúncios, o Google afirma que não há controle de administrador para as instruções personalizadas. Isso significa que cada pessoa gerencia as próprias regras, e empresas que precisam de padrão devem combinar orientações internas de uso em vez de depender de um painel de admin.",
    },
  ],
};
