import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "protocolo-a2a-como-agentes-conversam-entre-si-e-o-que-muda-para-voce",
  title: "Protocolo A2A: como agentes de IA conversam entre si",
  seoTitle: "Protocolo A2A: o que é e como funciona",
  excerpt:
    "Protocolo A2A explicado sem jargão: como agentes de IA de empresas diferentes trocam tarefas, qual a diferença para o MCP e o que muda para quem usa.",
  metaDescription:
    "Entenda o protocolo A2A (Agent2Agent): como agentes de IA de fabricantes diferentes combinam tarefas, o que é o cartão do agente, a diferença para o MCP e os riscos.",
  category: "futuro",
  articleSubcategory: "agentes-de-ia",
  date: "2026-10-20",
  readTime: 7,
  imageQuery: "two robots handshake office",
  seed: 493,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O A2A é um padrão aberto para agentes de IA de empresas e sistemas diferentes se encontrarem, combinarem uma tarefa e devolverem o resultado, sem expor o que roda por dentro.",
    "O MCP liga um agente às suas ferramentas e dados, e o A2A liga um agente a outro agente: os dois se complementam, segundo a própria documentação do A2A.",
    "Para quem usa IA no dia a dia, a mudança é gradual: mais tarefas passam por vários agentes, e vale saber quem recebe seus dados em cada etapa.",
  ],
  content: `
    <p>O protocolo A2A (Agent2Agent) é um padrão aberto que permite a agentes de inteligência artificial criados por empresas e sistemas diferentes se comunicarem, combinarem uma tarefa e trocarem resultados. Segundo a <a href="https://a2a-protocol.org/latest/" rel="noopener noreferrer" target="_blank">documentação oficial</a> (verificado em 20/10/2026), ele nasceu no Google e foi doado à Linux Foundation, que hoje o hospeda.</p>

    <p>Hoje a maioria das pessoas conversa com um agente por vez. A ideia do A2A é preparar o terreno para um cenário em que o agente da sua agenda pede ajuda ao agente de uma agência de viagens, que por sua vez consulta o agente de uma companhia aérea. Este guia explica o que é o protocolo, como ele funciona em linguagem simples, como se diferencia do MCP, quais riscos existem e o que você pode fazer agora.</p>

    <h2>O que é o protocolo A2A?</h2>

    <p>Pense em dois funcionários de empresas diferentes que nunca se falaram. Para trabalharem juntos, precisam de um jeito combinado de se apresentar, pedir algo, acompanhar o andamento e entregar o resultado. O A2A faz esse papel para agentes de IA: define um formato comum de apresentação e de conversa, de modo que um agente feito com uma tecnologia consiga delegar trabalho a outro feito com outra, sem que os dois precisem conhecer o funcionamento interno um do outro.</p>

    <p>A documentação lista, no comitê técnico, representantes de AWS, Cisco, Google, IBM Research, Microsoft, Salesforce, SAP e ServiceNow. Um aviso no topo do site também informa que o A2A passou a fazer parte da Agentic AI Foundation. A lista mostra que o padrão não pertence a uma empresa só, o que importa para quem teme ficar preso a um único fornecedor. Se o termo agente ainda soa abstrato, o texto sobre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">a diferença entre agente, chatbot e automação</a> ajuda a firmar a base.</p>

    <h2>Como o A2A funciona, sem jargão</h2>

    <p>A página de <a href="https://a2a-protocol.org/latest/topics/key-concepts/" rel="noopener noreferrer" target="_blank">conceitos-chave</a> descreve poucas peças. Vale conhecer as quatro principais, porque elas aparecem em qualquer produto que adote o padrão.</p>

    <table>
      <thead><tr><th>Peça</th><th>O que é</th><th>Comparação do dia a dia</th></tr></thead>
      <tbody>
        <tr><td>Cartão do agente (Agent Card)</td><td>Documento que descreve identidade, habilidades, endereço e forma de autenticação</td><td>Cartão de visita com a lista de serviços</td></tr>
        <tr><td>Tarefa (Task)</td><td>Unidade de trabalho com identificador e ciclo de vida, que pode demorar</td><td>Pedido de serviço com número de protocolo</td></tr>
        <tr><td>Mensagem (Message)</td><td>Um turno da conversa, vindo do usuário ou do agente</td><td>Cada mensagem trocada sobre o pedido</td></tr>
        <tr><td>Artefato (Artifact)</td><td>Resultado concreto entregue ao final</td><td>O documento ou a planilha entregue</td></tr>
      </tbody>
    </table>

    <p>O agente que começa a conversa é chamado de cliente e atua em nome do usuário. O agente que recebe o pedido é o agente remoto e expõe um endereço de internet que fala o protocolo. Para o cliente, o agente remoto é uma caixa-preta: a documentação diz que seu funcionamento interno, memória e ferramentas ficam ocultos, e a interação acontece só pelo protocolo. A comunicação usa HTTP(S) com mensagens no formato JSON-RPC 2.0, ou seja, tecnologia comum da web.</p>

    <h3>Um exemplo passo a passo</h3>

    <ol>
      <li>Você pede ao seu assistente: organizar a viagem a Recife em dezembro, com orçamento de R$ 3.000.</li>
      <li>O assistente lê o cartão de um agente de viagens e confirma que ele faz cotação de voos e hospedagem.</li>
      <li>Ele envia uma tarefa com as datas e o limite de gasto.</li>
      <li>O agente de viagens responde com atualizações, porque a busca leva alguns minutos.</li>
      <li>No fim, devolve um artefato: um roteiro com opções, que o seu assistente apresenta para você escolher.</li>
    </ol>

    <p>Esse exemplo é uma ilustração do fluxo, não o relato de um produto específico. O ponto é entender a sequência: apresentação, pedido, andamento e entrega.</p>

    <h2>A2A ou MCP: qual a diferença?</h2>

    <p>Os dois nomes aparecem juntos em muita conversa sobre agentes, e a confusão é comum. A documentação do A2A resolve a dúvida em uma frase: o MCP é para a comunicação entre agente e ferramenta, e o A2A é para a comunicação entre agente e agente. Os dois são tratados como complementares.</p>

    <p>Na prática, o MCP é o cabo que liga o seu assistente à agenda, à pasta de arquivos ou a um banco de dados, como mostra a <a href="https://modelcontextprotocol.io/docs/getting-started/intro" rel="noopener noreferrer" target="_blank">introdução oficial do MCP</a>, que usa a imagem de uma porta USB-C para IA. Já o A2A é a conversa entre dois especialistas. Um agente pode usar MCP para acessar suas ferramentas por dentro e A2A para pedir ajuda a outro agente por fora. Para entender o primeiro, leia <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">o guia de MCP</a>.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Regra mental</span><p>Se o agente está falando com uma ferramenta (planilha, agenda, banco de dados), pense em MCP. Se está falando com outro agente que decide sozinho como fazer o trabalho, pense em A2A.</p></div>

    <h2>O que muda para quem usa IA no dia a dia</h2>

    <p>A mudança não chega de uma vez. O que você tende a notar primeiro é que um assistente consegue resolver mais pedidos sem você abrir outro aplicativo, porque ele aciona especialistas por trás. É a evolução natural do que já aparece em <a href="/artigos/agente-de-ia-pessoal-gemini-spark-o-que-delegar-e-o-que-nao">agentes pessoais que executam tarefas</a> e em <a href="/artigos/agentes-de-ia-comprando-por-voce-comercio">agentes que compram por você</a>.</p>

    <p>Para pequenos negócios, a consequência prática é dupla. Do lado de quem compra, seu agente poderá consultar o agente de fornecedores em vez de você mandar dez mensagens. Do lado de quem vende, ter um agente que sabe apresentar seus serviços e preços de forma padronizada pode virar um novo canal de atendimento, parecido com o que hoje fazem o <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">atendimento automatizado no WhatsApp</a> e os <a href="/artigos/como-criar-chatbot-de-atendimento-para-seu-site-sem-programar">chatbots de site</a>. Ainda é cedo para prometer resultado: a adoção depende de cada plataforma, e os produtos que usam o padrão variam bastante.</p>

    <h2>Riscos e cuidados</h2>

    <p>Mais agentes conversando significa mais portas por onde dados e instruções passam. A documentação indica que o A2A segue práticas de segurança comuns da web: os requisitos de autenticação ficam declarados no cartão do agente, e credenciais como tokens OAuth ou chaves de API costumam seguir nos cabeçalhos HTTP, não dentro das mensagens. É um bom começo, mas não resolve tudo.</p>

    <ul class="checklist">
      <li>Descubra quem recebe seus dados em cada etapa: o agente final pode ser de outra empresa, com política de privacidade própria.</li>
      <li>Dê a cada agente só a permissão de que ele precisa, de preferência de leitura, e revise o que foi liberado de tempos em tempos.</li>
      <li>Desconfie de instruções escondidas em respostas de outros agentes: o <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">risco de prompt injection</a> existe quando um agente lê texto vindo de fora.</li>
      <li>Exija confirmação humana antes de pagamentos, envio de documentos ou exclusão de dados.</li>
      <li>Releia a política de dados: o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade e IA</a> mostra o que costuma ser coletado sem que a pessoa perceba.</li>
    </ul>

    <p>Como a execução do agente remoto é opaca, você não vê como ele chegou ao resultado. Isso reforça um hábito antigo: conferir o que veio pronto. O guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">como checar se a resposta da IA está certa</a> vale também para respostas que passaram por mais de um agente.</p>

    <h2>Erros comuns ao falar de A2A</h2>

    <ul>
      <li><strong>Achar que A2A e MCP competem.</strong> A própria documentação os apresenta como complementares.</li>
      <li><strong>Supor que todo agente já usa o padrão.</strong> Ele é aberto e tem apoio de grandes empresas, mas a adoção real varia por produto.</li>
      <li><strong>Confundir protocolo com produto.</strong> O A2A é uma regra de conversa, não um aplicativo que você baixa.</li>
      <li><strong>Liberar acesso amplo por comodidade.</strong> Quanto mais agentes na cadeia, mais importante é limitar permissões.</li>
      <li><strong>Esperar resultado perfeito sem revisão.</strong> A conversa entre agentes não elimina erros, só os esconde em mais camadas.</li>
    </ul>

    <h2>Como se preparar sem ser técnico</h2>

    <p>Você não precisa instalar nada. O preparo é de hábito. Aprenda a escrever pedidos claros, porque um pedido vago que passa por três agentes vira três interpretações: o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> é um bom ponto de partida. Experimente automações simples antes de agentes completos, como as que o texto sobre <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">automação com IA</a> descreve. E acompanhe o tema pelo lado profissional: o artigo sobre <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o futuro do trabalho autônomo</a> mostra quais tarefas tendem a ser delegadas primeiro.</p>

    <p>Se você é dono de negócio, vale uma tarefa concreta para esta semana: escreva em uma página o que sua empresa faz, quais serviços oferece, em que horários atende e como se cobra. Esse texto serve hoje para treinar um atendimento automático e amanhã seria a base de um cartão de agente. Quem tem as informações organizadas entra em qualquer novo canal mais rápido.</p>

    <p>Quer acompanhar como esses padrões chegam ao seu dia a dia? Continue pela categoria de <a href="/categoria/futuro">futuro da IA</a> e leia também <a href="/artigos/como-humanos-e-agentes-de-ia-vao-trabalhar-juntos-no-futuro">como humanos e agentes vão trabalhar juntos</a>.</p>
  `,
  faq: [
    {
      question: "O que significa A2A em inteligência artificial?",
      answer:
        "A2A é a sigla de Agent2Agent, um padrão aberto para comunicação entre agentes de IA. Ele define como um agente se apresenta, recebe uma tarefa, informa o andamento e entrega o resultado, mesmo quando os agentes foram feitos por empresas e com tecnologias diferentes.",
    },
    {
      question: "Qual a diferença entre A2A e MCP?",
      answer:
        "Segundo a documentação do A2A, o MCP serve para a comunicação entre agente e ferramenta, e o A2A serve para a comunicação entre agente e agente. Os dois são complementares: um agente pode usar MCP para acessar dados e A2A para pedir ajuda a outro agente.",
    },
    {
      question: "Quem criou o protocolo A2A?",
      answer:
        "O A2A foi desenvolvido originalmente pelo Google e doado à Linux Foundation, que passou a hospedá-lo. O comitê técnico reúne representantes de empresas como AWS, Cisco, Google, IBM Research, Microsoft, Salesforce, SAP e ServiceNow, conforme o site oficial.",
    },
    {
      question: "O A2A é seguro?",
      answer:
        "Ele usa práticas comuns da web, com autenticação declarada no cartão do agente e credenciais em cabeçalhos HTTP. Ainda assim, a segurança depende de cada implementação, das permissões que você libera e de conferir o que cada agente recebe e devolve antes de aprovar ações importantes.",
    },
    {
      question: "Preciso saber programar para usar agentes com A2A?",
      answer:
        "Para usar um produto que adota o padrão, não. A programação fica por conta de quem constrói os agentes. Como usuário, o mais útil é escrever pedidos claros, limitar permissões e revisar os resultados antes de tomar decisões ou fazer pagamentos.",
    },
  ],
};
