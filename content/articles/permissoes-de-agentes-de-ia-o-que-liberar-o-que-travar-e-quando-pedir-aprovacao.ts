import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "permissoes-de-agentes-de-ia-o-que-liberar-o-que-travar-e-quando-pedir-aprovacao",
  title: "Permissões de agentes de IA: o que liberar e o que travar",
  seoTitle: "Permissões de agentes de IA: o que liberar e travar",
  excerpt:
    "Veja como definir permissões de agentes de IA com privilégio mínimo: o que liberar, o que travar e quais ações exigem a sua aprovação antes de acontecer.",
  metaDescription:
    "Permissões de agentes de IA: aprenda o princípio do privilégio mínimo, como separar leitura de escrita e quais ações pedir aprovação humana antes de liberar.",
  category: "futuro",
  articleSubcategory: "agentes-de-ia",
  date: "2026-10-30",
  readTime: 7,
  imageQuery: "padlock keyboard security",
  seed: 936,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Um agente de IA deve receber só as ferramentas e o acesso que a tarefa exige, e não o acesso total que você mesmo tem à conta.",
    "Separar leitura de escrita e exigir aprovação humana em ações que gastam dinheiro, apagam dados ou falam em seu nome reduz a maior parte do estrago possível.",
    "Permissão é uma decisão que se revisa: comece pequena, observe o que o agente faz e só então amplie, sempre com uma forma de desfazer.",
  ],
  content: `
    <p>Permissões de agentes de IA são os acessos e as ações que você autoriza um agente a executar por conta própria, como ler e-mails, editar planilhas, enviar mensagens ou pagar uma conta. A regra mais segura é o privilégio mínimo: dar só o que a tarefa exige, separar leitura de escrita e pedir sua aprovação antes de qualquer ação irreversível.</p>

    <p>Agentes deixaram de ser demonstração e passaram a mexer em caixa de entrada, agenda, arquivos e navegador de gente comum. Quanto mais o agente consegue fazer sozinho, mais pesa a pergunta que ninguém costuma fazer na hora de clicar em "permitir": o que acontece se ele errar, ou se alguém o enganar? Este guia dá um método simples para decidir o que liberar, o que travar e quando exigir o seu "sim".</p>

    <h2>Por que o agente precisa de limites, e não só de boa vontade</h2>

    <p>Um chatbot responde e acaba ali. Um agente age: abre páginas, chama ferramentas, escreve em sistemas. A diferença está em <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">como agente, chatbot e automação se comportam</a>, e ela muda o tamanho do erro. Uma resposta ruim você ignora. Uma ação ruim já aconteceu quando você percebe.</p>

    <p>O projeto de segurança de IA da OWASP descreve esse risco como <a href="https://genai.owasp.org/llmrisk/llm062025-excessive-agency/" target="_blank" rel="noopener noreferrer">agência excessiva</a> (excessive agency): o sistema consegue tomar ações danosas diante de uma saída inesperada, ambígua ou manipulada do modelo. A OWASP aponta três causas: funcionalidade demais, permissões demais e autonomia demais. Repare que nenhuma delas depende de o modelo ser "ruim". Um modelo bom também erra, e um texto malicioso escondido numa página pode tentar desviar o comportamento, como mostra o artigo sobre <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection</a>.</p>

    <p>Por isso o limite precisa estar no acesso, e não só na instrução. Pedir no prompt "não apague nada" é um pedido. Entregar ao agente uma conta que simplesmente não tem permissão de apagar é um controle.</p>

    <h2>Privilégio mínimo: dar só o que a tarefa exige</h2>

    <p>O <a href="https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer">guia de segurança de agentes da OWASP</a> resume o princípio numa frase: conceder ao agente as ferramentas mínimas necessárias para a tarefa específica. Na prática, para quem usa agente no dia a dia, isso se traduz em quatro perguntas antes de liberar qualquer coisa.</p>

    <ul class="checklist">
      <li><strong>Qual é a tarefa exata?</strong> "Organizar minha caixa de entrada" é vaga. "Aplicar etiquetas em e-mails de fornecedores" é um escopo.</li>
      <li><strong>Que ferramentas ela exige?</strong> Se a tarefa é ler e resumir, o agente não precisa de enviar nem de apagar.</li>
      <li><strong>Em quais pastas, contas ou sites?</strong> Prefira uma pasta específica do Drive a "todo o Drive".</li>
      <li><strong>Por quanto tempo?</strong> Acesso para uma tarefa de hoje não precisa continuar valendo no mês que vem.</li>
    </ul>

    <p>Um erro frequente é usar a própria conta principal, com todos os acessos, porque é o caminho mais rápido. Quando possível, crie uma pasta, uma agenda ou uma conta de teste só para o agente trabalhar. Se algo sair errado, o estrago fica dentro daquela caixa.</p>

    <h2>Leitura, escrita e ações irreversíveis</h2>

    <p>Uma divisão ajuda a decidir rápido: o que só lê, o que escreve e o que não tem volta. A OWASP recomenda limitar cada ferramenta a recursos e tipos de operação específicos, como leitura apenas de certos caminhos. A tabela abaixo adapta essa lógica para o uso cotidiano.</p>

    <table>
      <thead>
        <tr><th>Tipo de ação</th><th>Exemplos</th><th>Como tratar</th></tr>
      </thead>
      <tbody>
        <tr><td>Leitura</td><td>Ler e resumir e-mails, consultar a agenda, abrir uma planilha</td><td>Pode liberar com escopo curto (uma pasta, um rótulo)</td></tr>
        <tr><td>Escrita reversível</td><td>Criar rascunho, etiquetar, adicionar linha em planilha com histórico</td><td>Liberar com atenção e conferir o histórico de versões</td></tr>
        <tr><td>Fala em seu nome</td><td>Enviar e-mail, responder cliente, postar em rede social</td><td>Exigir aprovação antes de cada envio, no início</td></tr>
        <tr><td>Dinheiro</td><td>Comprar, pagar boleto, assinar plano, mudar cobrança</td><td>Sempre com aprovação, de preferência com teto de valor</td></tr>
        <tr><td>Destruição</td><td>Apagar arquivos, esvaziar lixeira, remover contatos</td><td>Travar por padrão; liberar só com backup</td></tr>
      </tbody>
    </table>

    <p>A mesma lógica vale para tarefas de compra: o artigo sobre <a href="/artigos/agentes-de-ia-comprando-por-voce-comercio">agentes de IA comprando por você</a> mostra por que dinheiro merece sempre uma confirmação humana no fim do caminho.</p>

    <h2>Quando exigir a sua aprovação</h2>

    <p>O guia da OWASP pede aprovação explícita para ações de alto impacto ou irreversíveis e sugere tratar como "exigem revisão" tudo o que não foi classificado como de baixo risco. É uma boa regra de bolso: na dúvida, o agente pergunta. Uma boa aprovação mostra o que vai acontecer de forma concreta: o destinatário, o texto, o valor, o arquivo. "Posso continuar?" sem detalhes não ajuda ninguém a decidir.</p>

    <p>Imagine um exemplo brasileiro, hipotético. Uma dona de loja de roupas no Instagram usa um agente para responder dúvidas de clientes por e-mail. Na primeira semana, o agente só lê as mensagens e deixa respostas como rascunho. Ela revisa dez rascunhos por dia, em cerca de quinze minutos. Só depois de duas semanas sem erros ela libera o envio automático para perguntas de horário e endereço, mantendo rascunho para tudo que fala de troca, reembolso ou preço. Nada de pagamento ficou liberado.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Comece pelo modo "rascunho". Quase todo agente de e-mail e de mensagens permite preparar a resposta sem enviar. Você ganha a maior parte do tempo e mantém o controle do botão final.</p></div>

    <h2>Credenciais, senhas e chaves: o que nunca entregar</h2>

    <p>Existe uma categoria que merece regra própria: o que dá acesso a tudo. Senha do e-mail principal, código de verificação, chave de API e dados do cartão não devem ser colados numa conversa nem entregues a um agente para "facilitar". Prefira conexões oficiais, em que você autoriza o acesso por uma tela do próprio serviço e pode revogá-lo depois, como acontece nas integrações descritas em <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">MCP e a conexão de agentes com ferramentas</a>.</p>

    <p>Também vale proteger as contas que o agente toca. Um <a href="/artigos/gerenciador-de-senhas-como-escolher-comecar-e-usar-com-seguranca">gerenciador de senhas</a> evita reaproveitar a mesma senha, e a <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">chave de acesso (passkey)</a> reduz o risco de alguém entrar na conta mesmo que o agente seja enganado em algum ponto do caminho.</p>

    <h2>Agentes no navegador e no celular</h2>

    <p>Agentes que operam o navegador ou o celular herdam tudo o que você está logado para fazer. Por isso o cuidado é maior: quem usa a <a href="/artigos/chatgpt-no-chrome-extensao-oficial-abas-permissoes-e-cuidados">extensão de IA no Chrome</a> ou controla apps pelo <a href="/artigos/claude-app-celular-controlar-outros-apps">celular com um agente</a> deve revisar quais abas, sites e apps estão liberados e usar um perfil separado do navegador para tarefas sensíveis, como banco.</p>

    <p>O mesmo vale para assistentes pessoais mais amplos. O texto sobre o <a href="/artigos/agente-de-ia-pessoal-gemini-spark-o-que-delegar-e-o-que-nao">agente pessoal Gemini Spark</a> trata exatamente da fronteira entre delegar e manter nas suas mãos.</p>

    <h2>Testar em ambiente pequeno e manter um registro</h2>

    <p>A Anthropic, em seu texto sobre <a href="https://www.anthropic.com/engineering/building-effective-agents" target="_blank" rel="noopener noreferrer">como construir agentes eficazes</a>, recomenda testar bastante em ambientes isolados, com proteções adequadas, porque a autonomia traz o potencial de erros que se acumulam, e sugere pontos de pausa para feedback humano e limites como um número máximo de iterações. Para o usuário comum, a tradução é direta: teste com dados que não importam, defina um limite (quantos e-mails por dia, qual valor máximo) e guarde um registro do que o agente fez.</p>

    <p>Um registro simples já ajuda: uma planilha com data, ação, resultado e quem aprovou. Se um dia algo der errado, você sabe quando começou. E, se o erro envolver terceiros, o artigo sobre <a href="/artigos/quando-o-agente-de-ia-erra-quem-responde-cdc-contrato-e-o-que-fazer">quando o agente de IA erra e quem responde</a> explica por que o registro pesa na hora de reclamar ou se defender.</p>

    <h2>Em equipe: regras escritas valem mais que boa intenção</h2>

    <p>Em pequena empresa, o risco maior é cada pessoa liberar o que quiser. Escreva uma regra curta: quais agentes são permitidos, em quais contas, com quais dados e quem aprova ações com dinheiro. O modelo de <a href="/artigos/politica-de-uso-de-ia-na-pequena-empresa-regras-simples-para-a-equipe">política de uso de IA para a equipe</a> serve de base, e o checklist de <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">LGPD para quem usa IA</a> ajuda a decidir quais dados de clientes o agente nunca deve acessar.</p>

    <h2>Erros comuns ao liberar permissões</h2>

    <ul>
      <li><strong>Liberar tudo para não ser interrompido.</strong> A interrupção é o controle funcionando.</li>
      <li><strong>Aprovar em bloco, sem ler.</strong> Se você clica em "sim" sem ver o que vai acontecer, a aprovação virou enfeite.</li>
      <li><strong>Misturar conta pessoal e de trabalho</strong> no mesmo acesso do agente.</li>
      <li><strong>Esquecer de revogar.</strong> Acesso de uma tarefa antiga continua aberto até você fechar.</li>
      <li><strong>Confiar só na instrução do prompt.</strong> Limite de verdade é o que o agente não consegue fazer, e não o que foi pedido a ele que não faça.</li>
    </ul>

    <h2>Próximo passo</h2>

    <p>Escolha uma tarefa que você já faz à mão, liste as ferramentas mínimas, libere só a leitura e o rascunho e revise por duas semanas. Quando quiser entender para onde esse tipo de trabalho caminha, leia sobre <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o futuro do trabalho autônomo</a>. Autonomia boa é a que você ampliou aos poucos, com motivo e com saída de emergência.</p>
  `,
  faq: [
    {
      question: "O que é o princípio do privilégio mínimo em agentes de IA?",
      answer:
        "É dar ao agente apenas as ferramentas e os acessos que a tarefa exige, e nada além disso. Se ele só precisa ler e-mails de uma pasta, não deve poder enviar nem apagar. Assim, um erro do modelo ou uma tentativa de manipulação causa um estrago pequeno e contido.",
    },
    {
      question: "Quais ações de um agente de IA devem pedir aprovação humana?",
      answer:
        "Ações que gastam dinheiro, apagam dados, mudam configurações importantes ou falam em seu nome, como enviar e-mail a cliente. A OWASP recomenda aprovação explícita para ações de alto impacto ou irreversíveis. Na dúvida, trate a ação como de risco e peça confirmação antes.",
    },
    {
      question: "Posso dar a senha do meu e-mail para um agente de IA?",
      answer:
        "Não é recomendável. Prefira conexões oficiais em que você autoriza o acesso por uma tela do próprio serviço e pode revogar depois. Senha, códigos de verificação, chaves de API e dados de cartão não devem ser colados em conversa nem entregues ao agente, porque dão acesso amplo e difícil de controlar.",
    },
    {
      question: "O que é agência excessiva em IA?",
      answer:
        "É o risco de um sistema baseado em modelo de linguagem tomar ações danosas diante de uma saída inesperada, ambígua ou manipulada. A OWASP aponta três causas: funcionalidade demais, permissões demais e autonomia demais. A prevenção passa por reduzir ferramentas, reduzir permissões e exigir aprovação em ações de alto impacto.",
    },
    {
      question: "Como começar a usar um agente de IA com segurança?",
      answer:
        "Escolha uma tarefa pequena, libere só leitura e rascunho, use uma pasta ou conta separada e revise tudo por duas semanas. Anote o que o agente fez e só amplie a autonomia depois de ver que ele acerta de forma consistente. Mantenha sempre um jeito de desfazer.",
    },
  ],
};
