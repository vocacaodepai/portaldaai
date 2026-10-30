import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "perfil-de-preferencias-na-ia-como-configurar-tom-formato-e-contexto-uma-unica-vez",
  title: "Preferências na IA: como configurar tom e contexto uma vez",
  seoTitle: "Preferências na IA: configure tom e contexto",
  excerpt:
    "Aprenda a configurar as preferências da IA no ChatGPT, Claude e Gemini: tom, formato e contexto definidos uma vez, sem repetir tudo em cada conversa nova.",
  metaDescription:
    "Preferências na IA: veja como configurar instruções de tom, formato e contexto no ChatGPT, Claude e Gemini, com exemplos prontos e cuidados de privacidade.",
  category: "iniciantes",
  articleSubcategory: "apps-e-tarefas",
  date: "2026-10-30",
  readTime: 7,
  imageQuery: "smartphone settings preferences",
  seed: 940,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "As preferências da IA guardam instruções gerais, como tom, formato e contexto sobre você, e valem para todas as conversas, sem repetir o mesmo pedido toda vez.",
    "Instruções curtas e concretas funcionam melhor do que textos longos: diga como você quer a resposta, e não apenas que quer uma resposta boa.",
    "O que você escreve nas preferências é visto pela ferramenta em toda conversa, então nunca coloque senhas, documentos ou dados de terceiros ali.",
  ],
  content: `
    <p>Preferências na IA são instruções gerais que você escreve uma única vez, como tom de voz, formato das respostas e contexto sobre você, e que o assistente passa a considerar em todas as conversas. Em vez de repetir "responda curto e em português do Brasil" a cada pergunta, você configura isso nas configurações do ChatGPT, do Claude ou do Gemini.</p>

    <p>Quem usa IA com frequência reconhece a cena: toda conversa nova começa explicando quem você é, o que precisa e como gosta da resposta. Isso cansa e gera resultados desiguais. Este guia ensina a escrever boas preferências, mostra onde configurar em cada ferramenta, traz modelos prontos para copiar, aponta o que nunca colocar nesse campo e explica como testar se a configuração está funcionando.</p>

    <h2>O que são preferências e por que ajudam</h2>

    <p>A IA não conhece você. Cada conversa nova começa praticamente do zero, a menos que a ferramenta tenha um espaço onde você registra regras permanentes. Segundo a <a href="https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features" target="_blank" rel="noopener noreferrer">central de ajuda do Claude</a>, as "instruções para o Claude" são orientações válidas para todas as suas conversas, onde você pode descrever métodos preferidos, termos comuns, situações típicas e preferências gerais de comunicação.</p>

    <p>O ganho é de consistência. Se você sempre quer respostas em tópicos curtos, com português do Brasil e sem jargão, escrever isso uma vez evita o vai e vem de ajustes. Também ajuda a reduzir um erro típico de iniciantes: reclamar que a IA respondeu "genérico" quando, na verdade, ela não tinha informação nenhuma sobre o seu caso. O artigo sobre <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">cinco erros comuns de quem está começando</a> trata desse tipo de falha.</p>

    <h2>Preferências, memória e projetos: três coisas diferentes</h2>

    <p>É comum confundir os recursos, e cada ferramenta usa nomes próprios. Vale separar a ideia geral:</p>

    <table>
      <thead>
        <tr><th>Recurso</th><th>O que faz</th><th>Quem escreve</th></tr>
      </thead>
      <tbody>
        <tr><td>Preferências / instruções</td><td>Regras gerais de tom, formato e contexto, para todas as conversas</td><td>Você</td></tr>
        <tr><td>Memória</td><td>Informações que a ferramenta aprende e guarda das suas conversas</td><td>A ferramenta (você pode revisar)</td></tr>
        <tr><td>Projetos ou espaços de trabalho</td><td>Contexto e regras só para um assunto específico</td><td>Você</td></tr>
      </tbody>
    </table>

    <p>O Google descreve, na <a href="https://support.google.com/gemini/answer/15637730" target="_blank" rel="noopener noreferrer">página de personalização do Gemini</a>, que o app pode adaptar as respostas com base na memória de conversas anteriores, em conteúdo de apps do Google que você conecta e em preferências como instruções sobre como você quer a resposta. A mesma página avisa que esses recursos não estão disponíveis para todos e que contas de trabalho, escola e supervisionadas não os têm. Se o seu Gemini não mostra a opção, esse pode ser o motivo.</p>

    <p>Para aprofundar a parte de memória, leia sobre <a href="/artigos/memoria-longa-em-ia-assistente-que-lembra-de-voce">memória longa em IA</a>. E para contexto específico de um assunto, veja como funcionam os <a href="/artigos/projetos-no-claude-como-usar-limites-e-memoria-por-projeto">projetos no Claude</a>.</p>

    <h2>Onde configurar em cada ferramenta</h2>

    <h3>Claude</h3>

    <p>De acordo com a central de ajuda, clique nas suas iniciais no canto inferior esquerdo, abra Configurações, vá em "Seu Claude" (ou "Conta", em layouts mais antigos) e preencha o campo de instruções. Instruções de projeto ficam dentro de cada projeto, para conversas daquele assunto. A própria central tem informações divergentes sobre a disponibilidade de projetos para contas gratuitas e pagas, então confira o que aparece no seu plano.</p>

    <h3>Gemini</h3>

    <p>No app do Gemini, a personalização aparece nas configurações, onde também ficam as conexões com apps do Google. O menu e os nomes mudam com frequência, e o Google diz que os recursos não estão disponíveis para todos. Se quiser entender as mudanças recentes no app, veja o <a href="/artigos/menu-personalizar-do-gemini-skills-apps-e-controle-para-admins">menu Personalizar do Gemini</a> e a explicação de como os <a href="/artigos/gemini-gems-viram-skills-o-que-muda-e-como-migrar">Gems viram skills</a>.</p>

    <h3>ChatGPT</h3>

    <p>O ChatGPT tem um recurso de personalização nas configurações, com campos para você descrever quem é e como quer as respostas. Os nomes e a posição das opções mudaram ao longo do tempo, então procure por "Personalização" ou "Instruções personalizadas" nas configurações da sua conta. Para proteger conversas sensíveis, veja também <a href="/artigos/chats-bloqueados-no-chatgpt-como-proteger-conversas-e-limites">chats bloqueados no ChatGPT</a>.</p>

    <h2>Como escrever boas instruções</h2>

    <p>Três regras tornam as preferências úteis. A primeira é ser concreto: "responda de forma clara" não diz nada, enquanto "use frases de até 20 palavras e termine com um próximo passo" é possível de seguir. A segunda é dizer o que fazer, e não apenas o que evitar. A terceira é separar em blocos: quem sou eu, como quero a resposta, o que fazer quando faltar informação.</p>

    <p>Este é um exemplo de preferências para uma pessoa que usa a IA no trabalho administrativo de uma loja:</p>

    <pre><code>Quem sou: dono de uma loja de material de construção em Goiânia, sem formação técnica em tecnologia.
Como responder: português do Brasil, frases curtas, sem jargão. Se usar um termo técnico, explique em uma linha.
Formato: comece pela resposta direta; depois, no máximo 5 tópicos. Use tabela quando for comparar opções.
Quando faltar informação: pergunte antes de responder, em até 3 perguntas.
Nunca invente números, leis ou preços: se não souber, diga que não sabe e sugira onde conferir.</code></pre>

    <p>O último item é importante. Mandar a IA admitir quando não sabe não elimina erros, mas ajuda. O artigo sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> explica por que a conferência continua sendo sua tarefa.</p>

    <h2>Modelos prontos para copiar e adaptar</h2>

    <h3>Para estudar</h3>

    <pre><code>Sou estudante de ensino médio. Explique como se eu tivesse 15 anos, com um exemplo do dia a dia.
Depois da explicação, faça 2 perguntas para eu conferir se entendi. Não me dê a resposta pronta de exercícios: guie por passos.</code></pre>

    <h3>Para escrever e-mails</h3>

    <pre><code>Escreva e-mails em tom cordial e direto, no máximo 120 palavras, com assunto sugerido.
Assine como "Marina". Não use expressões como "venho por meio desta".</code></pre>

    <h3>Para organizar a rotina</h3>

    <pre><code>Quando eu pedir ajuda com a agenda, devolva uma lista por dia com horários e uma prioridade (alta, média, baixa).
Considere que trabalho das 8h às 17h e busco meu filho às 17h30.</code></pre>

    <p>Quer mais ideias de uso no dia a dia? O guia de <a href="/artigos/como-usar-ia-para-criar-rotina-diaria-produtiva">rotina diária produtiva com IA</a> mostra pedidos que combinam bem com preferências fixas, e o texto sobre <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">como escrever comandos que funcionam</a> aprofunda a escrita de instruções.</p>

    <h2>O que nunca colocar nas preferências</h2>

    <p>As preferências ficam ativas em toda conversa, então tudo o que você escreve ali acompanha cada pergunta. Por isso, não coloque:</p>

    <ul class="checklist">
      <li>Senhas, códigos de verificação, chaves de acesso e dados de cartão.</li>
      <li>CPF, RG, endereço completo e documentos pessoais.</li>
      <li>Dados de clientes, alunos, pacientes ou colegas.</li>
      <li>Segredos da empresa, contratos e informações financeiras sensíveis.</li>
    </ul>

    <p>Descreva você e o seu trabalho em termos gerais. "Tenho uma loja de materiais de construção" basta. O artigo sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> mostra o que se entrega sem perceber, e quem usa IA no emprego deve ler <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">o que o funcionário pode colar no ChatGPT</a>.</p>

    <h2>Como testar e ajustar</h2>

    <p>Depois de salvar, abra uma conversa nova e faça três perguntas diferentes: uma simples, uma que exige explicação e uma em que falte informação de propósito. Verifique se o tom, o formato e a postura de perguntar antes se mantiveram. Se alguma regra foi ignorada, reescreva de forma mais direta e curta, e teste de novo.</p>

    <p>Lembre que a IA não responde sempre igual, como mostra o texto sobre <a href="/artigos/por-que-a-ia-responde-diferente-na-mesma-pergunta-aleatoriedade-e-como-controlar">por que a IA responde diferente na mesma pergunta</a>. Preferências aumentam a consistência, mas não a garantem. Se um pedido pontual conflita com a preferência geral, o que você escreve na conversa costuma pesar mais, porque é mais específico.</p>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Escrever um texto enorme.</strong> Dez regras claras funcionam melhor que dois parágrafos vagos.</li>
      <li><strong>Misturar vida pessoal e trabalho.</strong> Se usa a mesma conta para tudo, mantenha as preferências neutras.</li>
      <li><strong>Esquecer de atualizar.</strong> Mudou de emprego ou de rotina? Revise o texto.</li>
      <li><strong>Colocar dado sensível.</strong> Veja a lista acima.</li>
      <li><strong>Confiar cegamente.</strong> "Nunca invente" é um pedido, e não uma garantia.</li>
    </ul>

    <h2>Próximo passo</h2>

    <p>Reserve dez minutos hoje: escolha uma ferramenta, escreva cinco regras e teste em três perguntas. Se ainda está decidindo qual assistente usar, compare em <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a>. E para montar sua base do zero, siga o passo a passo de <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">como configurar seu primeiro assistente de IA pessoal</a>.</p>
  `,
  faq: [
    {
      question: "O que são instruções personalizadas ou preferências na IA?",
      answer:
        "São regras gerais que você escreve uma vez, como tom de voz, formato das respostas e contexto sobre você, e que a IA considera em todas as conversas. A central de ajuda do Claude descreve isso como orientações para todas as suas conversas, incluindo preferências gerais de comunicação.",
    },
    {
      question: "Qual a diferença entre preferências e memória da IA?",
      answer:
        "Preferências são instruções que você mesmo escreve. Memória é o que a ferramenta aprende e guarda a partir das suas conversas, e que você pode revisar. Projetos, por sua vez, guardam contexto só de um assunto. Os nomes e a disponibilidade variam entre ChatGPT, Claude e Gemini.",
    },
    {
      question: "Por que não vejo a opção de personalização no Gemini?",
      answer:
        "O Google informa que esses recursos não estão disponíveis para todos no momento e que contas de trabalho, escola e supervisionadas não têm acesso. Entre com uma conta Google pessoal e confira as configurações do app. Os menus e nomes mudam com frequência, então a posição pode variar.",
    },
    {
      question: "Posso colocar meus dados pessoais nas preferências da IA?",
      answer:
        "Evite. O que fica nas preferências acompanha todas as conversas. Não coloque senhas, códigos, CPF, documentos, dados de clientes ou segredos da empresa. Descreva você e o seu trabalho em termos gerais, como profissão e tipo de negócio, e mantenha o resto fora do campo.",
    },
    {
      question: "Como saber se minhas instruções estão funcionando?",
      answer:
        "Abra uma conversa nova e faça três perguntas: uma simples, uma que exige explicação e uma com informação faltando. Confira se tom, formato e postura de perguntar antes se mantiveram. Se uma regra for ignorada, reescreva de forma mais curta e direta e teste novamente.",
    },
  ],
};
