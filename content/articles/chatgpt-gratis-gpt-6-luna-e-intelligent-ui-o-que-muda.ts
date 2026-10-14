import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "chatgpt-gratis-gpt-6-luna-e-intelligent-ui-o-que-muda",
  title: "ChatGPT grátis com GPT-6 Luna: o que muda para quem não paga",
  seoTitle: "ChatGPT grátis com GPT-6 Luna e Intelligent UI",
  excerpt:
    "ChatGPT grátis com GPT-6 Luna e Intelligent UI: veja quem recebe, o que o plano gratuito ganhou, como usar gráficos e calculadoras e onde ainda há limite.",
  metaDescription:
    "ChatGPT grátis agora usa o GPT-6 Luna e responde com gráficos e calculadoras. Veja quem recebe, como usar, os limites e quando pagar vale a pena.",
  category: "ferramentas",
  date: "2026-10-14",
  readTime: 8,
  imageQuery: "smartphone chat interface charts screen",
  seed: 286,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Desde 8 de outubro de 2026 a OpenAI começou a liberar o GPT-6 Luna para os planos Free e Go do ChatGPT, de forma gradual: nem toda conta já tem o modelo.",
    "O Intelligent UI deixa o ChatGPT responder com gráficos, formulários, botões e pequenas calculadoras dentro da conversa, sem cota própria: valem os limites normais do plano.",
    "O plano pago continua com o GPT-6 Sol, um modelo maior; para perguntas do dia a dia o Luna tende a bastar, mas a diferença aparece em trabalhos longos e complexos.",
  ],
  content: `
    <p>O ChatGPT grátis passou a usar o GPT-6 Luna, modelo mais leve da nova família da OpenAI, e a responder com gráficos, formulários e calculadoras dentro do próprio chat. A liberação para os planos Free e Go começou em 8 de outubro de 2026 e é gradual: se o modelo ainda não aparece na sua conta, é questão de dias.</p>

    <p>Quem usa a versão gratuita para tirar dúvidas, escrever e-mails ou estudar vai notar duas mudanças: um modelo mais novo por trás das respostas e um formato de resposta que vai além do texto. Este guia explica quem recebe o quê, como aproveitar o novo recurso, quais limites continuam valendo e quando faz sentido pagar por um plano. Se você ainda está começando, vale ler antes o <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">guia completo de inteligência artificial</a>.</p>

    <h2>O que mudou no ChatGPT grátis</h2>

    <p>Segundo as notas de versão da OpenAI relatadas pela imprensa, a empresa começou a liberar o GPT-6 no chat comum em 7 de outubro de 2026 para os planos pagos e, um dia depois, para Free e Go. A cobertura do <a href="https://letsdatascience.com/news/openai-brings-gpt-6-and-intelligent-ui-to-chatgpt-4f0d797c" target="_blank" rel="noopener noreferrer">Let's Data Science</a> resume a divisão: planos pagos usam o GPT-6 Sol, e Free e Go usam o GPT-6 Luna. Os modelos das áreas de trabalho e de programação (Work e Codex) não mudaram.</p>

    <p>Para quem usa o plano gratuito, a novidade prática é o Luna no chat comum, que antes aparecia só no aplicativo de computador, de acordo com o <a href="https://notebookcheck.net/ChatGPT-Free-and-Go-users-start-getting-GPT-6-Luna-in-Chat.1419032.0.html" target="_blank" rel="noopener noreferrer">Notebookcheck</a>. A mesma reportagem lembra que a página de ajuda sobre modelos ainda citava o GPT-5.6 Luna como padrão do Free e do Go, o que mostra que a documentação oficial demora a acompanhar o lançamento. Os preços de API e o contexto do lançamento estão na <a href="/noticias/openai-lanca-gpt-6-sol-luna-corta-precos-pela-metade">notícia sobre o GPT-6 Sol e o Luna</a>.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>A liberação é gradual. Se o GPT-6 não aparece no menu de modelos, a própria OpenAI diz que ele pode não estar disponível na sua conta ainda. Não há o que configurar: basta esperar e manter o aplicativo atualizado.</p></div>

    <h2>Sol ou Luna: qual é a diferença na prática</h2>

    <p>O Sol é o modelo maior, ligado aos planos pagos. O Luna é a versão mais barata de operar e, por isso, fica com o plano gratuito. Pelos números de API divulgados no lançamento, o Sol custa cerca de 20 vezes mais por token que o Luna, o que dá uma ideia da distância de porte entre os dois. Se você quer entender o que é um token e por que isso pesa na conta, o texto sobre <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto</a> explica.</p>

    <p>O que ninguém mostrou ainda é o quanto essa distância aparece numa conversa comum. Os testes citados pela OpenAI são feitos pela própria empresa e não representam o uso cotidiano. A leitura prudente é esta: para perguntas simples, explicações, redação curta e tradução, o Luna costuma resolver. Para trabalhos longos, com muitos arquivos, raciocínio em várias etapas ou código, o modelo maior tende a fazer diferença. Se você tem dúvida entre as famílias de assistentes, o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude e Gemini</a> ajuda a decidir.</p>

    <table>
      <thead>
        <tr><th>Plano</th><th>Modelo no chat</th><th>Intelligent UI</th></tr>
      </thead>
      <tbody>
        <tr><td>Free</td><td>GPT-6 Luna (liberação gradual)</td><td>Sim, com limites normais do plano</td></tr>
        <tr><td>Go</td><td>GPT-6 Luna (liberação gradual)</td><td>Sim, com limites normais do plano</td></tr>
        <tr><td>Plus, Pro, Business, Enterprise</td><td>GPT-6 Sol</td><td>Sim, exceto no modo Pro</td></tr>
      </tbody>
    </table>

    <h2>Intelligent UI: respostas com gráficos, botões e calculadoras</h2>

    <p>O Intelligent UI é o recurso que decide, a cada pergunta, se a melhor resposta é um parágrafo, uma tabela, um diagrama, um gráfico, um formulário ou uma pequena ferramenta. Na prática, em vez de receber três parágrafos sobre juros, você pode receber uma calculadora com campos para valor, prazo e taxa. A <a href="/noticias/chatgpt-intelligent-ui-visuais-interativos-gpt-6">notícia sobre o Intelligent UI</a> mostra os exemplos que a empresa apresentou.</p>

    <p>Dois detalhes importam para o dia a dia. Primeiro, o recurso não tem cota própria: usar uma calculadora ou um gráfico consome o mesmo limite do seu plano, como qualquer outra mensagem. Segundo, o ChatGPT escolhe o formato sozinho e pode continuar usando só texto quando isso for mais claro. Você pode pedir de forma explícita: "mostre isso em um gráfico" ou "monte uma calculadora simples para eu preencher".</p>

    <h3>Exemplo com números: comparar duas ofertas de celular</h3>

    <p>Imagine que você está em dúvida entre um celular de R$ 1.800 à vista e outro de R$ 2.100 em 10 parcelas de R$ 210. Peça ao ChatGPT que monte uma comparação interativa e acrescente a pergunta que importa: quanto você pagaria a mais pelo parcelamento e se o dinheiro parado na conta renderia mais que isso. O recurso pode devolver uma tabela com os dois cenários e campos para ajustar a taxa de rendimento. Os números de entrada são seus, e o cálculo precisa ser conferido.</p>

    <pre><code>Compare duas formas de pagar um celular: R$ 1.800 à vista ou 10 parcelas de R$ 210. Monte uma calculadora em que eu possa mudar o rendimento mensal do dinheiro parado e mostre, em um gráfico, qual opção termina mais barata. Use apenas os valores que passei e liste as contas feitas.</code></pre>

    <h2>Como usar e como reduzir os visuais</h2>

    <p>Não existe botão para ativar: o Intelligent UI aparece quando o ChatGPT entende que ajuda. Em contrapartida, há três cuidados de compatibilidade. Os aplicativos antigos de computador, para Windows e Mac, não exibem o recurso, e a recomendação da OpenAI é usar o chatgpt.com no navegador. No celular, é preciso estar com a versão mais recente do app. E o modo Pro dos planos pagos não suporta o recurso.</p>

    <p>Se os visuais atrapalham, há saída. Na versão web, a opção "Layout and visuals" nas configurações pode ser desligada, e mesmo assim alguns elementos visuais ainda podem aparecer. Também dá para pedir na própria conversa: "responda só em texto, sem gráficos". Para quem usa leitor de tela ou conexão lenta, essa preferência faz diferença.</p>

    <ul class="checklist">
      <li>Atualize o aplicativo do celular antes de testar</li>
      <li>No computador, prefira o navegador ao app antigo</li>
      <li>Peça o formato que você quer: tabela, gráfico, calculadora ou só texto</li>
      <li>Confira os números de qualquer calculadora antes de decidir algo com dinheiro</li>
      <li>Desligue "Layout and visuals" se preferir respostas apenas em texto</li>
    </ul>

    <h2>Quatro usos que valem o teste no plano gratuito</h2>

    <p>O recurso rende mais em tarefas em que ver ajuda mais do que ler. Ideias para testar, todas sem custo extra:</p>

    <p><strong>Orçamento do mês.</strong> Passe suas despesas fixas e variáveis e peça um gráfico por categoria. O texto sobre <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">finanças pessoais com IA</a> traz prompts para essa organização, sempre sem colar dados bancários.</p>

    <p><strong>Estudo.</strong> Peça um diagrama de um conceito difícil, como a ligação entre inflação e juros, e depois um mini quiz com botões de resposta. Combina com o método de estudo para provas.</p>

    <p><strong>Planilhas.</strong> Em vez de abrir o Excel para uma conta rápida, descreva o problema e receba uma tabela pronta. Para trabalhos recorrentes, o guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> mostra como automatizar relatórios.</p>

    <p><strong>Decisões de compra.</strong> Comparar planos de internet, seguros ou eletrodomésticos num quadro com campos editáveis costuma ser mais claro que um texto corrido.</p>

    <h2>Limites e cuidados que continuam valendo</h2>

    <p>Até 9 de outubro, segundo a cobertura citada, a OpenAI não tinha publicado um limite específico de mensagens do GPT-6 para contas gratuitas. A página de ajuda ainda falava em conversas de texto ilimitadas no uso normal, sujeitas a proteções contra abuso, mas sem atualização para o Luna. Uploads, geração de imagens, voz e análise de dados têm limites próprios, que a empresa não detalha. Consulte a página oficial de ajuda do ChatGPT antes de depender de uma cota.</p>

    <p>O risco maior é de confiança. Um gráfico ou uma calculadora passam sensação de precisão, mas podem se basear em números errados ou em uma suposição que você não viu. Isso é o que o guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> chama de resposta bonita e incorreta. Para dinheiro, saúde ou assuntos jurídicos, trate o resultado como rascunho e confira em fonte oficial.</p>

    <p>Há ainda a questão da privacidade. Gráficos e formulários tendem a pedir dados pessoais, como renda, dívidas e idade. Evite informar CPF, número de conta ou documentos, e revise as opções de uso dos seus dados nas configurações. O texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade em IA</a> explica o que costuma ficar guardado.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Peça sempre as contas feitas: "liste as fórmulas e os números usados". Se a resposta não mostrar o caminho, você não tem como conferir.</p></div>

    <h2>Vale pagar ou ficar no gratuito?</h2>

    <p>Para a maioria das pessoas que usa IA algumas vezes por semana, o plano gratuito com Luna cobre dúvidas, redação, resumos e organização. Pagar passa a fazer sentido quando você bate no limite com frequência, precisa do modelo maior para trabalhos longos, usa a ferramenta como parte do trabalho ou quer recursos avançados de arquivos e agentes. Os preços mudam e variam por país: consulte a página oficial de planos antes de decidir.</p>

    <p>Uma regra simples: use o gratuito por uma semana com tarefas reais e anote em quais deles você ficou travado. Se a lista for curta, não pague. Se for longa, compare com o que cobra a concorrência no texto sobre <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a> e, se o assunto for o plano da OpenAI, leia o <a href="/artigos/chatgpt-plus-vale-a-pena-review-2026">review do ChatGPT Plus</a>. Para quem prefere o ecossistema do Google, o guia de <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">planos do Gemini</a> faz a mesma conta.</p>

    <h2>Erros comuns ao usar o novo ChatGPT</h2>

    <ul>
      <li><strong>Aceitar o primeiro gráfico.</strong> Peça os dados usados e confirme se batem com os seus.</li>
      <li><strong>Prompt vago.</strong> "Ajude com minhas finanças" gera resposta genérica. Informe objetivo, valores e prazo, como ensina o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompts que funcionam</a>.</li>
      <li><strong>Esperar o recurso no app antigo.</strong> Atualize ou use o navegador.</li>
      <li><strong>Tratar o Luna como o Sol.</strong> Se a tarefa é longa e complexa e a resposta veio rasa, o problema pode ser o porte do modelo, não o seu prompt.</li>
    </ul>

    <p>O ChatGPT grátis ficou mais útil, mas continua sendo uma ferramenta que erra. Teste o Intelligent UI com uma tarefa real desta semana, confira o resultado e veja como ele se compara a outros aplicativos na lista de <a href="/artigos/7-aplicativos-de-ia-que-toda-pessoa-deveria-conhecer">7 aplicativos de IA que toda pessoa deveria conhecer</a>.</p>
  `,
  faq: [
    {
      question: "O ChatGPT grátis usa o GPT-6?",
      answer:
        "Sim, a OpenAI começou a liberar o GPT-6 Luna para os planos Free e Go em 8 de outubro de 2026. A liberação é gradual, então algumas contas ainda podem estar com o modelo anterior. Se ele não aparece no menu de modelos, a conta provavelmente ainda não recebeu.",
    },
    {
      question: "O que é o Intelligent UI do ChatGPT?",
      answer:
        "É o recurso que permite ao ChatGPT responder com elementos visuais e interativos, como tabelas, diagramas, gráficos, botões, formulários e pequenas calculadoras. O próprio ChatGPT decide quando usar e pode continuar respondendo só com texto quando isso for mais claro para a pergunta.",
    },
    {
      question: "O Intelligent UI tem limite de uso separado?",
      answer:
        "Não. Segundo a cobertura do lançamento, o recurso não usa cota própria. Cada resposta com gráfico ou calculadora conta dentro dos limites normais do seu plano, como uma mensagem comum. Uploads, imagens, voz e análise de dados têm limites específicos.",
    },
    {
      question: "Como desligar os gráficos e formulários do ChatGPT?",
      answer:
        "Na versão web, desative a opção Layout and visuals nas configurações. Alguns elementos visuais ainda podem aparecer mesmo assim. Você também pode pedir na conversa que o ChatGPT responda somente com texto, sem gráficos nem formulários.",
    },
    {
      question: "Vale pagar o Plus se o grátis já tem GPT-6 Luna?",
      answer:
        "Depende do uso. Para dúvidas, redação e estudo, o plano gratuito costuma bastar. Pagar faz sentido se você bate no limite com frequência ou precisa do modelo maior para trabalhos longos e complexos. Consulte a página oficial de planos para ver preços atuais.",
    },
  ],
};
