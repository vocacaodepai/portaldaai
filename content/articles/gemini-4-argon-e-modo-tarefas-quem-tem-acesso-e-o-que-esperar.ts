import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "gemini-4-argon-e-modo-tarefas-quem-tem-acesso-e-o-que-esperar",
  title: "Gemini 4 Argon e modo tarefas: quem tem acesso e o que esperar",
  seoTitle: "Gemini 4 Argon e modo tarefas: acesso e limites",
  excerpt:
    "Gemini 4 Argon e modo tarefas chegaram ao app para assinantes Pro e Ultra. Veja o que o Google confirmou, o que ficou em aberto e como testar com segurança.",
  metaDescription:
    "Gemini 4 Argon e modo tarefas no app: quem tem acesso, o que o Google confirmou, apps conectados no Brasil, o que falta explicar e como testar com segurança.",
  category: "ferramentas",
  date: "2026-10-15",
  readTime: 8,
  imageQuery: "person using smartphone assistant tasks list",
  seed: 341,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Em 13/10/2026 o Google liberou o Gemini 4 Argon no app Gemini para assinantes do Google AI Pro e do Ultra, junto com um botão para alternar do chat para o modo tarefas.",
    "O Google diz que, no modo tarefas, o Gemini pode trabalhar mesmo quando você não está no computador, mas não detalhou limites de uso, salvaguardas nem lista de países.",
    "Os apps conectados passam de 40 e, segundo as notas de versão, alguns estão disponíveis no Brasil: comece por tarefas de baixo risco e confira cada permissão antes de aprovar.",
  ],
  content: `
    <p>O Gemini 4 Argon é o modelo mais novo do Google no app Gemini, liberado em 13 de outubro de 2026 para assinantes do Google AI Pro e do Ultra, e o modo tarefas é um botão no chat que muda a conversa para um trabalho que o Gemini pode continuar mesmo quando você não está no computador. Esta é a descrição do próprio Google.</p>

    <p>Muita coisa ficou em aberto: o Google não publicou limites de uso, regras de privacidade específicas para tarefas nem uma lista de países, e a diferença para o agente <a href="/artigos/agente-de-ia-pessoal-gemini-spark-o-que-delegar-e-o-que-nao">Gemini Spark</a> não foi explicada nos textos oficiais que consultei. Neste guia você vê o que está confirmado, o que ainda não está, o que muda para quem mora no Brasil e como fazer um teste seguro sem entregar demais para um agente.</p>

    <h2>O que o Google confirmou sobre o Gemini 4 Argon</h2>

    <p>O <a href="https://blog.google/innovation-and-ai/products/gemini-app/gemini-4-argon-availability/" target="_blank" rel="noopener noreferrer">post oficial do Google</a> diz que assinantes do Google AI Pro e do Ultra podem acessar o Gemini 4 Argon e dar tarefas ao Gemini. Segundo o texto, o Argon responde de forma mais direta e com menos rodeios, repete menos e evita clichês. Em trabalhos longos, compartilha o progresso com mais frequência. O post também cita melhorias de programação e informa que a interface de programação com agentes Antigravity agora está no app Gemini para macOS, o que interessa mais a quem desenvolve software.</p>

    <p>As <a href="https://gemini.google/release-notes/" target="_blank" rel="noopener noreferrer">notas de versão do Gemini</a> registram o lançamento em 13/10/2026 como liberação global para assinantes Pro e Ultra. A mesma página avisa que o Antigravity no Mac está disponível em inglês, para contas pessoais e contas de trabalho elegíveis (maiores de 18 anos), em regiões onde o recurso é suportado. Para o leitor brasileiro, isso quer dizer: o modelo novo aparece no app, mas nem tudo o que foi anunciado junto está disponível em português ou fora do Mac.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Antes de continuar</span><p>O modelo Argon já tinha sido noticiado em 30 de setembro, quando o acesso era restrito. A cobertura sobre esse primeiro anúncio está em <a href="/noticias/google-gemini-4-argon-lancamento-preco">Google lança Gemini 4 Argon</a>. Este guia trata da chegada ao app em 13/10.</p></div>

    <h2>O que é o modo tarefas</h2>

    <p>Segundo o Google, há um botão simples na janela principal do chat para alternar de chat para tarefas. Ao escolher tarefas, o Gemini pode trabalhar por você mesmo quando você não está no computador, atuando em apps do Google e em outros serviços. Em vez de você conversar e copiar a resposta, você descreve um objetivo e o Gemini executa etapas.</p>

    <p>O que isso não significa, até onde os textos oficiais mostram: o Google não explicou se o modo tarefas é o Spark com outro nome, uma porta de entrada diferente para ele ou um recurso separado. Também não detalhou quanto tempo uma tarefa pode rodar, quantas tarefas cabem por dia e como as permissões funcionam. A publicação especializada <a href="https://ppc.land/gemini-app-tasks-mode-works-while-users-are-away-for-19-99-and-up/" target="_blank" rel="noopener noreferrer">PPC Land</a> chegou à mesma conclusão: o post oficial era a única fonte de texto na data da publicação, e os limites não aparecem nele.</p>

    <h3>Spark, tarefas e chat: o que não misturar</h3>

    <p>O Spark foi apresentado em maio de 2026 como agente pessoal ligado 24 horas, em beta para assinantes do Ultra nos Estados Unidos, segundo as notas de versão. O modo tarefas aparece agora no app para Pro e Ultra. Como o Google não explicou a relação entre os dois, trate-os como coisas diferentes até haver documentação clara, e leia o texto sobre <a href="/artigos/agente-de-ia-pessoal-gemini-spark-o-que-delegar-e-o-que-nao">o que delegar e o que não delegar ao Spark</a> para a lógica de risco.</p>

    <h2>Quem tem acesso e quanto custa</h2>

    <p>O acesso confirmado é para quem assina o Google AI Pro ou o Ultra. O post oficial não cita preços, mas o PPC Land, citando documentação do Google, informa que o AI Pro custa US$ 19,99 por mês nos Estados Unidos (verificado em 15/10/2026). Preço em reais e em outros planos muda com frequência e com impostos: consulte a página do plano na sua conta. Se você ainda está decidindo se paga por algum plano, o comparativo <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">Google AI Plus, Pro ou Ultra</a> organiza os critérios.</p>

    <table>
      <thead>
        <tr><th>Item</th><th>O que está confirmado</th><th>O que ficou em aberto</th></tr>
      </thead>
      <tbody>
        <tr><td>Quem acessa</td><td>Assinantes Google AI Pro e Ultra</td><td>Plano gratuito e Plus não foram citados</td></tr>
        <tr><td>Modo tarefas</td><td>Botão para alternar do chat; Gemini trabalha longe do computador</td><td>Limites diários e duração</td></tr>
        <tr><td>Apps conectados</td><td>Mais de 40 apps ou serviços</td><td>Se a tarefa termina o passo ou só abre o app</td></tr>
        <tr><td>Países</td><td>Liberação global do modelo para Pro e Ultra</td><td>Lista de países para tarefas</td></tr>
        <tr><td>Segurança</td><td>Nada específico no post</td><td>Permissões e retenção de dados</td></tr>
      </tbody>
    </table>

    <h2>Apps conectados: o que vale para o Brasil</h2>

    <p>As notas de versão trazem uma informação útil: a área Personalizar, no menu à esquerda, permite conectar mais de 40 apps ou serviços e gerenciar essas conexões a qualquer momento, com liberação para todos os planos na web, no celular e nos apps de Windows e Mac. A maior parte dos apps conectados está disponível em inglês nos Estados Unidos, e alguns aparecem em outras regiões de língua inglesa, no Brasil e na Índia. O post cita exemplos como Instacart, OpenTable, Adobe e Shopify, mas isso não garante que todos funcionem aqui.</p>

    <p>Na prática, abra Personalizar no seu app e veja quais conexões aparecem para a sua conta. Se um app que você usa não estiver na lista, o modo tarefas não vai alcançá-lo por essa via. Para entender como diferentes apps conversam com um assistente, o texto sobre <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">MCP e conexão de agentes de IA</a> explica a ideia de fundo.</p>

    <h2>Como testar o modo tarefas com segurança</h2>

    <p>Um agente que age em seu nome é diferente de um chat: ele pode ler, mover e enviar coisas. Por isso, o teste deve começar pelo risco mínimo. Um roteiro em cinco passos:</p>

    <ol>
      <li>Conecte apenas um app, o mais simples, e deixe os outros desligados.</li>
      <li>Escolha uma tarefa que você consegue desfazer, como organizar uma lista ou preparar um rascunho.</li>
      <li>Peça um plano antes da execução e leia cada etapa.</li>
      <li>Não dê tarefas que envolvam pagamento, envio de e-mail para terceiros ou exclusão de arquivos.</li>
      <li>Revise o resultado e anote o que o Gemini acertou e errou.</li>
    </ol>

    <h3>Prompts para uma primeira tarefa</h3>

    <pre><code>Quero planejar o jantar de sábado para 6 pessoas, com orçamento de R$ 300. Monte o cardápio, a lista de compras agrupada por seção do mercado e um cronograma de preparo. Não compre nada e não envie mensagem para ninguém: só me entregue o rascunho para eu aprovar.</code></pre>

    <pre><code>Leia a pasta de documentos que eu indicar e crie uma tabela com nome do arquivo, assunto e data. Não apague, mova nem compartilhe nenhum arquivo. Se faltar permissão, me avise em vez de tentar outro caminho.</code></pre>

    <p>Para dar boas instruções, o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">engenharia de prompt</a> serve de base, e o de <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto</a> explica por que tarefas longas pedem instruções claras.</p>

    <h2>Riscos que você precisa conhecer</h2>

    <p>O principal risco de um agente é a prompt injection: um texto escondido em uma página ou e-mail que tenta enganar a IA para fazer algo que você não pediu. Se o Gemini lê e-mails e navega por sites durante uma tarefa, esse risco entra na conta. O texto sobre <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection</a> mostra exemplos e defesas simples. O segundo risco é a privacidade: o Google não detalhou nas fontes consultadas como os dados das tarefas são guardados, então leia as configurações de atividade antes de conectar contas sensíveis. O guia <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> dá a lista do que observar.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Não conecte conta bancária, e-mail de trabalho com dados de clientes ou documentos de terceiros a um agente sem entender as regras de acesso e retenção. A política da sua empresa pode proibir isso.</p></div>

    <h2>Vale pagar por causa disso?</h2>

    <p>A resposta honesta é: ainda é cedo. Sem limites publicados, sem lista de países e sem documentação de segurança, pagar o plano apenas por causa do modo tarefas é apostar em algo pouco explicado. Faz mais sentido se você já usa o plano pelos outros benefícios, como o <a href="/artigos/gemini-deep-research-como-usar-limites-e-planos">Deep Research</a> ou o <a href="/artigos/gemini-canvas-como-criar-documentos-apps-e-slides">Canvas</a>, e quer apenas testar a novidade sem custo extra. Se a sua dúvida é qual assistente escolher em geral, o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> ajuda a separar as necessidades.</p>

    <h2>Erros comuns ao testar agentes</h2>

    <ul>
      <li>Conectar vários apps de uma vez e perder o controle do que o Gemini pode acessar.</li>
      <li>Dar uma tarefa vaga ("resolva meu e-mail") sem dizer o que não pode ser feito.</li>
      <li>Aprovar etapas sem ler, só porque a resposta parece segura.</li>
      <li>Ignorar a conferência do resultado: agentes também erram.</li>
      <li>Supor que o que vale para os Estados Unidos já vale no Brasil. Confira no seu app.</li>
    </ul>

    <h2>Seu próximo passo</h2>

    <p>Se você tem Pro ou Ultra, abra o Gemini, procure o botão de tarefas e faça o teste do jantar do prompt acima, sem conectar nenhum app sensível. Anote o que funcionou e volte a este guia quando o Google publicar limites e regras de privacidade. Para acompanhar outras novidades de ferramentas, visite a categoria <a href="/categoria/ferramentas">Ferramentas</a>.</p>
  `,
  faq: [
    {
      question: "O que é o Gemini 4 Argon?",
      answer:
        "É o modelo mais novo do Google no app Gemini, liberado em 13 de outubro de 2026 para assinantes do Google AI Pro e do Ultra. Segundo o Google, responde de forma mais direta, repete menos, mostra o progresso em tarefas longas e traz melhorias de programação.",
    },
    {
      question: "O que é o modo tarefas do Gemini?",
      answer:
        "É um botão na janela principal do chat que alterna do modo conversa para o modo tarefas. O Google diz que, nesse modo, o Gemini pode trabalhar para você mesmo quando você não está no computador, em apps do Google e em outros serviços conectados.",
    },
    {
      question: "O modo tarefas é gratuito?",
      answer:
        "Não segundo o que o Google informou: o acesso foi anunciado para assinantes do Google AI Pro e do Ultra. O post não cita planos gratuitos nem o Plus. Confirme na sua conta quais recursos aparecem, porque o Google libera as funções de forma gradual.",
    },
    {
      question: "O modo tarefas funciona no Brasil?",
      answer:
        "As notas de versão dizem que o modelo Argon chega globalmente aos planos Pro e Ultra e que alguns apps conectados estão disponíveis no Brasil. Para o modo tarefas em si, o Google não publicou lista de países. Teste na sua conta e confira as conexões na área Personalizar.",
    },
    {
      question: "O modo tarefas é seguro?",
      answer:
        "O Google não descreveu salvaguardas específicas nas fontes consultadas. Por isso, comece com tarefas de baixo risco, conecte poucos apps, peça um plano antes da execução e não dê acesso a banco, pagamentos ou dados de terceiros até entender as regras de permissão e de retenção de dados.",
    },
  ],
};
