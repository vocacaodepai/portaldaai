import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-configurar-primeiro-assistente-de-ia-pessoal",
  title: "Assistente de IA pessoal: como configurar o seu em 15 minutos",
  seoTitle: "Assistente de IA pessoal: configure em 15 minutos",
  excerpt:
    "Assistente de IA pessoal: configure ChatGPT, Claude ou Gemini em 15 minutos com instruções fixas, memória e três prompts prontos para usar hoje mesmo.",
  metaDescription:
    "Assistente de IA pessoal: passo a passo de 15 minutos para configurar ChatGPT, Claude ou Gemini com instruções fixas, memória e prompts prontos para usar.",
  category: "iniciantes",
  date: "2026-09-18",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "personal assistant setup phone",
  seed: 45,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Um assistente de IA pessoal é uma conta gratuita do ChatGPT, Claude ou Gemini com instruções fixas sobre você, e isso leva 15 minutos para configurar.",
    "O que muda o resultado não é o plano pago, e sim três coisas: contexto salvo, pedidos com formato definido e uma tarefa real testada no primeiro dia.",
    "Os planos pagos ficam entre US$ 4,99 e US$ 20 por mês (Claude e Gemini verificados em 27/09/2026), mas o gratuito basta para a primeira semana inteira.",
  ],
  content: `
    <p>Um assistente de IA pessoal é uma conta no ChatGPT, no Claude ou no Gemini que já sabe quem você é, o que faz e como gosta de receber resposta. Configurar isso leva uns 15 minutos: criar a conta, salvar três ou quatro frases de contexto, testar uma tarefa real e instalar o aplicativo no celular. Não precisa pagar nada nem entender de tecnologia.</p>

    <p>Este guia é o passo a passo com relógio na mão. Você vai ver o que escrever no campo de instruções, quais prompts rodar no primeiro dia, quanto custam os planos pagos (com data de verificação) e os erros que fazem a maioria das pessoas desistir na primeira semana. A ideia é sair daqui com o assistente funcionando, não com uma lista de recursos para estudar depois.</p>

    <h2>O que é um assistente de IA pessoal, na prática?</h2>

    <p>É a mesma ferramenta que todo mundo usa, com uma diferença: você deixa salvo quem você é. Sem isso, cada conversa começa do zero e a IA responde como se falasse com um estranho. Com isso, ela já sabe que você é dona de uma loja de roupas em Curitiba, que prefere respostas curtas e que odeia texto com cara de propaganda.</p>

    <p>As três grandes ferramentas oferecem esse recurso com nomes diferentes. No Claude, a <a href="https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features" rel="noopener noreferrer">central de ajuda da Anthropic</a> descreve instruções de conta (valem para todas as conversas), instruções de projeto e estilos de resposta. No Gemini, a <a href="https://support.google.com/gemini/answer/15637730?hl=pt-BR" rel="noopener noreferrer">página de personalização do Google</a> lista memória das conversas anteriores, aplicativos conectados e instruções personalizadas, disponíveis só em conta pessoal (não em conta de trabalho ou escola). O ChatGPT tem memória e instruções personalizadas nas configurações; consulte a página oficial para o estado atual do recurso na sua conta.</p>

    <p>Se você ainda está decidindo entre as três, o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> resolve em cinco minutos. Para este guia, qualquer uma serve.</p>

    <h2>Minuto 1 a 3: crie a conta e ignore o plano pago</h2>

    <p>Entre no site ou baixe o aplicativo e crie a conta gratuita com o seu e-mail ou conta Google. Vai aparecer uma oferta de plano pago logo de cara. Feche. Você não sabe ainda se vai usar a ferramenta três vezes por dia ou três vezes por mês, e o gratuito dá conta da primeira semana inteira.</p>

    <p>Para referência, os preços atuais dos planos pagos são estes:</p>

    <table>
      <thead>
        <tr><th>Ferramenta</th><th>Plano pago de entrada</th><th>Preço (verificado em 27/09/2026)</th></tr>
      </thead>
      <tbody>
        <tr><td>Claude</td><td>Pro</td><td>US$ 17/mês no anual ou US$ 20/mês no mensal, segundo a <a href="https://claude.com/pricing" rel="noopener noreferrer">página de preços do Claude</a></td></tr>
        <tr><td>Gemini</td><td>Google AI Plus / Pro</td><td>US$ 4,99/mês (Plus) e US$ 19,99/mês (Pro), segundo a <a href="https://gemini.google/subscriptions/" rel="noopener noreferrer">página de planos do Google</a></td></tr>
        <tr><td>ChatGPT</td><td>Plus</td><td>Consulte a página oficial da OpenAI</td></tr>
      </tbody>
    </table>

    <p>Na cotação do dia, US$ 20 passam de R$ 100 por mês. O artigo <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga: o que vale a pena</a> mostra em que momento esse gasto se justifica. Por enquanto, gratuito.</p>

    <h2>Minuto 4 a 7: escreva as instruções fixas</h2>

    <p>Abra as configurações e procure "Personalização", "Instruções personalizadas" ou "Instruções para o Claude". Esse campo é o coração do assistente pessoal. Escreva em português, em primeira pessoa, quatro blocos: quem você é, o que faz com frequência, como quer as respostas e o que a IA nunca deve fazer. Um modelo pronto:</p>

    <pre><code>Sou a Renata, dona de uma loja de roupas femininas em Curitiba, com duas funcionárias. Uso você para responder clientes no WhatsApp, escrever legendas de Instagram e organizar tarefas da semana.

Responda sempre em português do Brasil, em frases curtas. Quando eu pedir um texto, entregue uma versão só, sem explicar o que fez. Quando eu pedir opções, no máximo três.

Nunca invente número, preço ou prazo. Se faltar informação, pergunte antes de responder. Não use "incrível", "poderoso" nem ponto de exclamação em legenda.</code></pre>

    <p>Troque os dados pelos seus. O bloco "nunca faça" costuma ser o que mais melhora o resultado, porque corta o tom de vendedor que a IA usa por padrão. Quem quer ir além disso encontra em <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> a lógica por trás de cada bloco.</p>

    <h3>Ative a memória, mas com critério</h3>

    <p>Memória faz a ferramenta guardar fatos que aparecem nas conversas (o nome do seu sócio, o prazo de um projeto). Ajuda, mas tudo que você escreve pode ficar salvo. Antes de ligar, leia <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber ao usar IA</a>: dados de cliente, CPF e senha nunca entram na conversa, com ou sem memória.</p>

    <h2>Minuto 8 a 11: teste com uma tarefa que você tem hoje</h2>

    <p>O erro clássico é abrir a ferramenta e digitar "me ajude a ser mais produtivo". A resposta vem genérica e a pessoa conclui que IA não serve para ela. Pegue uma tarefa concreta que está na sua lista agora: um e-mail difícil, uma dúvida de imposto, o cardápio da semana. Peça seguindo a estrutura que a <a href="https://developers.openai.com/api/docs/guides/prompt-engineering" rel="noopener noreferrer">documentação de prompts da OpenAI</a> recomenda: identidade, instruções, exemplo e contexto.</p>

    <p>Dois prompts para o primeiro teste. O primeiro resolve um e-mail; o segundo, o planejamento da semana:</p>

    <pre><code>Recebi este e-mail de um cliente reclamando de atraso na entrega (cole o e-mail abaixo). Escreva uma resposta de até 6 linhas: peça desculpa uma vez, explique que o pedido sai amanhã pelos Correios com código de rastreio e ofereça 10% de desconto na próxima compra. Tom cordial, sem se humilhar.

E-mail do cliente:
[cole aqui]</code></pre>

    <pre><code>Estas são as minhas tarefas desta semana: [liste]. Tenho 4 horas livres por dia, de segunda a sexta, das 14h às 18h. Monte uma agenda em tabela com dia, horário e tarefa, colocando as que dependem de outras pessoas primeiro. Depois me diga qual tarefa você cortaria se eu só tivesse 3 horas por dia.</code></pre>

    <p>Leia a resposta e peça ajuste na mesma conversa: "mais curto", "tira a segunda frase", "em formato de lista". Cada ajuste ensina você a pedir melhor da próxima vez. Quem gosta de organizar a rotina desse jeito encontra um método completo em <a href="/artigos/como-usar-ia-para-criar-rotina-diaria-produtiva">como usar IA para criar uma rotina diária produtiva</a>.</p>

    <h2>Minuto 12 a 15: deixe o assistente à mão</h2>

    <ul class="checklist">
      <li>Instale o aplicativo no celular e faça login. Abrir o navegador toda vez é a fricção que mata o hábito.</li>
      <li>Fixe o app na primeira tela, ao lado do WhatsApp.</li>
      <li>Salve ou favorite a conversa do teste que deu certo: ela vira o seu modelo.</li>
      <li>Crie uma conversa por assunto (clientes, finanças, estudo) em vez de misturar tudo em uma só.</li>
      <li>Anote uma tarefa da sua rotina para testar amanhã. Só uma.</li>
    </ul>

    <p>Um caso para dar escala: um vendedor autônomo de São José dos Campos que responde 30 mensagens de cliente por dia e gasta 3 minutos em cada uma passa 90 minutos por dia digitando. Com o assistente configurado e um prompt salvo para respostas, se cada mensagem cair para 1 minuto e meio, sobra em torno de 45 minutos por dia, o que dá perto de 15 horas por mês. Tudo com o plano gratuito e um celular. O ganho depende de quantas mensagens são parecidas entre si, mas a conta ilustra por que o contexto salvo importa mais do que o plano pago.</p>

    <h2>O que fazer na primeira semana (e o que deixar para depois)</h2>

    <p>Nos primeiros sete dias, use a mesma ferramenta para tarefas pequenas e repetidas. Três usos que funcionam bem para iniciante: triar e responder e-mail, como no guia de <a href="/artigos/ia-para-email-organizar-caixa-de-entrada-responder-mais-rapido">IA para e-mail</a>; montar a lista de compras a partir de um cardápio, como em <a href="/artigos/como-usar-ia-para-planejar-refeicoes-e-economizar-no-mercado">planejar refeições e economizar no mercado</a>; e organizar gastos do mês, como em <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">organizar finanças pessoais com IA</a>.</p>

    <p>Deixe para depois: geração de imagem, agentes, automações e a compra de qualquer plano. Quando a semana fechar e você tiver três tarefas que a IA faz bem, aí vale escolher um segundo uso. O mercado de assistentes muda rápido: em setembro de 2026 o <a href="/noticias/meta-muse-ultrapassa-chatgpt-app-mais-baixado-ios">Muse, da Meta, passou o ChatGPT</a> entre os apps mais baixados nos EUA. Isso não muda o seu plano: o hábito de pedir bem vale para qualquer ferramenta.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Quer um teste que dá resultado no primeiro dia? Peça ao assistente para conversar 10 minutos com você em inglês ou espanhol sobre o seu dia, corrigindo os erros no fim. O guia de <a href="/artigos/como-usar-ia-para-aprender-um-novo-idioma-todos-os-dias">aprender idioma com IA todos os dias</a> tem o prompt completo.</p></div>

    <h2>Erros comuns de quem está configurando o primeiro assistente</h2>

    <ul>
      <li><strong>Deixar as instruções em branco.</strong> Sem contexto, a IA responde para "qualquer pessoa" e a resposta serve para ninguém. Cinco linhas já mudam tudo.</li>
      <li><strong>Escrever um pedido de uma linha e julgar a ferramenta pela primeira resposta.</strong> A primeira resposta é rascunho. O ajuste na mesma conversa é onde o resultado aparece.</li>
      <li><strong>Colar dado sensível para "ver o que ela faz".</strong> CPF, senha, extrato bancário e dados de cliente ficam fora, sempre.</li>
      <li><strong>Assinar plano no primeiro dia.</strong> Pague só quando bater no limite do gratuito duas ou três vezes na mesma semana.</li>
      <li><strong>Abrir três ferramentas ao mesmo tempo.</strong> Uma só, por sete dias. Depois compare.</li>
      <li><strong>Confiar em número que a IA cita sem fonte.</strong> Ela pode inventar estatística e prazo com a maior confiança. Peça o link e confira.</li>
    </ul>

    <p>A lista completa, com o que fazer em cada caso, está em <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">5 erros comuns de quem está começando a usar IA</a>. O maior deles não é técnico: é desistir antes de aprender a pedir direito.</p>

    <h2>Quando um assistente de IA pessoal não é a resposta</h2>

    <p>Há três situações em que configurar o assistente resolve pouco. A primeira é quando você precisa de resposta jurídica, médica ou fiscal para tomar uma decisão real: a IA ajuda a entender o assunto e a preparar perguntas, mas a decisão passa por um profissional. A segunda é quando a tarefa envolve dado de terceiro que você não tem autorização para compartilhar. A terceira é quando você quer que a IA "faça sozinha" algo que exige acesso ao seu computador ou aos seus sistemas: isso é trabalho de agente, e o artigo <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot ou automação</a> explica a diferença antes de você gastar tempo no lugar errado.</p>

    <p>Fora disso, os 15 minutos deste guia são o melhor investimento de tempo que um iniciante pode fazer. Configure hoje, teste uma tarefa real, e volte à categoria <a href="/iniciantes">Para Iniciantes</a> na semana que vem para escolher o segundo uso. O guia <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">o que é inteligência artificial</a> é a leitura certa para entender o que está por trás da ferramenta que você acabou de configurar.</p>
  `,
  faq: [
    {
      question: "Assistente de IA pessoal é gratuito?",
      answer:
        "Sim. ChatGPT, Claude e Gemini têm plano gratuito com instruções personalizadas e, em geral, memória. O gratuito tem limite de mensagens por período, mas cobre a primeira semana de uso de um iniciante. Os planos pagos ficam entre US$ 4,99 e US$ 20 por mês (Claude e Gemini verificados em 27/09/2026; para o ChatGPT, consulte a página oficial).",
    },
    {
      question: "Qual IA escolher para um assistente pessoal: ChatGPT, Claude ou Gemini?",
      answer:
        "Para um iniciante, qualquer uma das três funciona. Quem vive no Gmail e no Google Agenda tende a preferir o Gemini, pela integração. Quem trabalha com texto longo costuma gostar do Claude. O ChatGPT tem mais extras, como voz e imagem. Escolha uma, use por sete dias e só depois compare com outra.",
    },
    {
      question: "Assistente de IA funciona em português?",
      answer:
        "Sim. As três ferramentas respondem em português do Brasil com qualidade parecida. Escreva as instruções fixas em português e diga explicitamente 'responda em português do Brasil', porque em algumas contas o padrão vem em inglês. A qualidade do texto depende mais do contexto que você deu do que do idioma.",
    },
    {
      question: "O que escrever nas instruções personalizadas da IA?",
      answer:
        "Quatro blocos: quem você é (profissão, cidade, negócio), o que faz com frequência, como quer as respostas (tamanho, tom, formato) e o que a IA nunca deve fazer (inventar número, usar exclamação, explicar o óbvio). Cinco a dez linhas bastam. Revise depois de uma semana, quando já souber o que incomoda.",
    },
    {
      question: "É seguro ativar a memória do assistente de IA?",
      answer:
        "Depende do que você conversa. A memória guarda fatos das conversas para usar depois, o que é útil para nome de projetos e preferências. O cuidado é o mesmo com ou sem memória: não cole CPF, senha, extrato ou dados de cliente. Em conta de trabalho ou escola, o Gemini nem oferece o recurso.",
    },
  ],
  quiz: [
    {
      question: "Qual é o primeiro passo depois de criar a conta gratuita?",
      options: [
        "Assinar o plano pago para liberar todos os recursos",
        "Escrever as instruções fixas sobre quem você é e como quer as respostas",
        "Testar geração de imagem para ver a qualidade",
      ],
      answer: 1,
      explanation:
        "As instruções fixas são o que transforma uma conta comum em assistente pessoal. Plano pago e imagem ficam para depois da primeira semana.",
    },
    {
      question: "O que fazer quando a primeira resposta da IA vem genérica?",
      options: [
        "Trocar de ferramenta",
        "Concluir que IA não serve para a sua tarefa",
        "Pedir ajuste na mesma conversa, com contexto e formato",
      ],
      answer: 2,
      explanation:
        "A primeira resposta é rascunho. Ajustar na mesma conversa (mais curto, em lista, com tal tom) é onde o resultado aparece e onde você aprende a pedir melhor.",
    },
  ],
};
