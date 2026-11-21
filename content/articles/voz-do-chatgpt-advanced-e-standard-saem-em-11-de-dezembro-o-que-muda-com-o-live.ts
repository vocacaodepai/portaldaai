import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "voz-do-chatgpt-advanced-e-standard-saem-em-11-de-dezembro-o-que-muda-com-o-live",
  title: "Voz do ChatGPT: Advanced e Standard saem em 11 de dezembro",
  seoTitle: "Voz do ChatGPT: fim do Advanced e Standard em 11/12",
  excerpt:
    "A OpenAI aposenta a voz Advanced e a Standard do ChatGPT em 11/12/2026. Veja o que muda com o Live, os limites por plano, vídeo e tela, privacidade e como se preparar.",
  metaDescription:
    "A voz Advanced e a Standard do ChatGPT acabam em 11 de dezembro de 2026. Entenda o Live (GPT-Live), limites por plano, o que some e o que continua, e como se preparar.",
  category: "ferramentas",
  date: "2026-11-21",
  readTime: 7,
  imageQuery: "person talking smartphone headphones microphone",
  seed: 1239,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Em 11 de dezembro de 2026 a OpenAI tira a voz Advanced e a Standard do seletor do ChatGPT, e quem ainda usa uma delas passa automaticamente para a voz Live.",
    "O Live conversa de forma full-duplex, ouvindo e falando ao mesmo tempo, mas ainda não faz vídeo nem compartilhamento de tela, que seguem na Advanced por enquanto.",
    "Seus chats antigos continuam no histórico, o áudio dos chats Live fica 30 dias com a transcrição e o uso do Live tem limite de horas por plano.",
  ],
  content: `
    <p>A voz Advanced e a voz Standard do ChatGPT deixam de existir em 11 de dezembro de 2026. A partir dessa data, o seletor em Configurações, Voz, não oferece mais as duas, e quem estava com uma delas escolhida passa para a voz Live, movida pelo modelo GPT-Live. É o que diz a central de ajuda da OpenAI.</p>
    <p>Se você usa o modo de voz para treinar inglês, pensar em voz alta ou ditar ideias no carro, vale entender agora o que muda, o que fica de fora e quanto tempo de conversa cada plano oferece. Este guia parte da documentação oficial da OpenAI e foi escrito sem teste próprio do recurso.</p>

    <h2>O que muda em 11 de dezembro de 2026</h2>
    <p>Segundo a <a href="https://help.openai.com/en/articles/20001638-retiring-advanced-and-standard-voice-in-chatgpt" rel="noopener noreferrer" target="_blank">página oficial sobre a aposentadoria</a>, os usuários foram avisados em 10 de novembro de 2026. Até 11 de dezembro dá para continuar usando a Advanced ou a Standard. Depois disso, elas somem do seletor e a voz padrão passa a ser a Live.</p>
    <p>A OpenAI explica que o GPT-Live foi lançado em julho, que o uso de voz quase dobrou desde então e que praticamente todo mundo que usa voz no ChatGPT já está nele. A empresa diz que a mudança serve para simplificar a experiência e concentrar as melhorias em um só modelo.</p>
    <div class="callout-box callout-warn">
      <span class="callout-label">Atenção</span>
      <p>Vídeo ao vivo e compartilhamento de tela ainda não existem no Live. Esses recursos continuam usando a voz Advanced até o GPT-Live ganhar essa capacidade, segundo a OpenAI.</p>
    </div>

    <h2>Live, Advanced e Standard: qual a diferença</h2>
    <p>As três vozes funcionam de jeitos bem diferentes por dentro, e isso explica por que a conversa parece outra.</p>
    <table>
      <thead>
        <tr><th>Voz</th><th>Como funciona</th><th>Ponto fraco</th></tr>
      </thead>
      <tbody>
        <tr><td>Live (GPT-Live)</td><td>Full-duplex: ouve e fala ao mesmo tempo, pode dizer &quot;mhmm&quot; e ficar em silêncio quando você pensa</td><td>Sem vídeo e sem compartilhar tela</td></tr>
        <tr><td>Advanced</td><td>Modelo de áudio por turnos, que espera você parar de falar</td><td>Conversa mais rígida, vai sair do seletor</td></tr>
        <tr><td>Standard</td><td>Três modelos em cadeia: transcreve, responde em texto e converte em fala</td><td>Respostas lentas e perda de informação entre voz e texto</td></tr>
      </tbody>
    </table>
    <p>O Live ainda pode passar perguntas complexas e tarefas para os modelos de texto mais avançados da OpenAI e continuar a conversa enquanto elas rodam em segundo plano. Quer entender melhor como a IA junta voz, imagem e texto? Leia <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA multimodal: o que muda quando a máquina vê, ouve e fala</a>.</p>

    <h2>O que o Live já faz hoje</h2>
    <p>De acordo com a <a href="https://help.openai.com/en/articles/20001274-chatgpt-voice" rel="noopener noreferrer" target="_blank">página oficial do ChatGPT Voice</a>, o Live pode usar busca na web e memória, mostrar resultados visuais em widgets compatíveis, trabalhar com texto e imagens no mesmo chat e usar os plugins e apps conectados à sua conta.</p>
    <ul class="checklist">
      <li>Você pode interromper a resposta falando por cima, porque o Live ouve enquanto fala.</li>
      <li>Dá para anexar uma imagem ou digitar uma mensagem durante a conversa, sem abrir outro chat.</li>
      <li>Se uma ação precisa de aprovação, a aprovação é feita na tela, com os botões de aprovar ou recusar. Aprovação falada não é aceita.</li>
      <li>Em português do Brasil, há as vozes Viola e Rio, além das vozes gerais como Arbor, Breeze, Cove, Ember, Juniper, Maple, Sol, Spruce e Vale.</li>
      <li>Também funciona no Apple CarPlay em iPhones compatíveis, e a conversa pode continuar em segundo plano com o celular bloqueado.</li>
    </ul>
    <p>Para ter uma noção de como usar voz no dia a dia, o guia de <a href="/artigos/assistente-de-voz-com-ia-como-usar-no-dia-a-dia">assistente de voz com IA</a> mostra situações práticas, e o texto sobre <a href="/artigos/comandos-de-voz-com-ia-no-computador-windows-e-mac">comandos de voz no computador</a> cobre o outro lado, o desktop.</p>

    <h2>O que some, o que fica e o que ainda não existe</h2>
    <p>Pelo que a OpenAI informa, o que acontece com cada coisa é este:</p>
    <ul>
      <li><strong>Conversas antigas:</strong> continuam no histórico e podem ser retomadas em texto ou em voz. Depois de 11 de dezembro, a voz abre no GPT-Live.</li>
      <li><strong>Personalidades prontas:</strong> as personalidades predefinidas do ChatGPT não se aplicam ao Live. Você pode pedir durante a conversa para mudar o tom, o ritmo ou o estilo.</li>
      <li><strong>Velocidade de fala:</strong> dá para pedir que o ChatGPT fale mais rápido ou mais devagar, mas ainda não há controle preciso de velocidade de reprodução.</li>
      <li><strong>GPTs personalizados:</strong> a voz com eles continua na Advanced até a desativação dos GPTs personalizados, também marcada para 11 de dezembro de 2026.</li>
      <li><strong>Ler em voz alta (Read Aloud):</strong> não muda. O recurso que lê respostas escritas continua funcionando.</li>
      <li><strong>Arquivos da Biblioteca:</strong> o Live ainda não encontra nem adiciona arquivos da sua Biblioteca, mas você pode anexar um arquivo compatível manualmente, conforme a conta.</li>
    </ul>
    <p>Se você precisa de vídeo ou de tela compartilhada em uma conversa de voz, continue na Advanced no celular enquanto ela existir e planeje uma alternativa para depois. A OpenAI não deu data para o Live receber esses recursos.</p>

    <h2>Quanto tempo de voz cada plano oferece</h2>
    <p>No chat, o uso do Live é medido numa janela móvel de 24 horas. Segundo a OpenAI, os limites hoje são estes:</p>
    <table>
      <thead>
        <tr><th>Plano</th><th>Uso do Live no chat</th></tr>
      </thead>
      <tbody>
        <tr><td>Free</td><td>Acesso limitado ao GPT-Live-1.1 Quip, e os limites podem mudar</td></tr>
        <tr><td>Go</td><td>3 horas com o GPT-Live-1.1 Quip</td></tr>
        <tr><td>Plus</td><td>3 horas com o GPT-Live-1.1</td></tr>
        <tr><td>Pro (US$ 100 por mês)</td><td>15 horas com o GPT-Live-1.1</td></tr>
        <tr><td>Pro (US$ 200 por mês)</td><td>Ilimitado, sujeito às proteções contra abuso</td></tr>
      </tbody>
    </table>
    <p>Quando você chega ao limite, o ChatGPT avisa. Planos Business, Enterprise e Edu têm regras próprias, com horas incluídas e consumo de créditos depois delas. Para decidir se compensa pagar, veja <a href="/artigos/chatgpt-plus-vale-a-pena-review-2026">ChatGPT Plus: vale a pena em 2026</a> e <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a>. A notícia sobre a <a href="/noticias/chatgpt-voice-ganha-gpt-6-plugins-chatgpt-work">voz do ChatGPT com GPT-6 e plugins</a> conta como o recurso chegou até aqui.</p>

    <h2>Exemplo prático: treino de inglês antes e depois</h2>
    <p>Imagine uma analista em São Paulo que treina inglês para reuniões, 20 minutos por dia no trajeto de ônibus. Hoje ela usa a voz Standard, que transcreve, responde e fala em turnos. Depois de 11 de dezembro, a mesma rotina passa para o Live, onde ela pode ser interrompida e interromper, e pedir pausa para pensar.</p>
    <p>Com 20 minutos por dia, ela gasta cerca de 10 horas de voz em 30 dias, abaixo das 3 horas por janela de 24 horas do Plus. Sobra folga. O que muda na prática é o jeito de pedir, como neste exemplo de prompt para abrir a sessão:</p>
    <pre><code>Vamos treinar inglês para reuniões de trabalho. Faça uma pergunta por vez, espere eu terminar de falar e, quando eu errar, corrija em português no fim da resposta. Se eu pedir um tempo, fique em silêncio até eu dizer que estou pronta.</code></pre>
    <p>Esse pedido usa o recurso de esperar descrito pela OpenAI, mas ela avisa que pausas longas, fala de outras pessoas ou ruído ainda podem fazer o Live responder antes da hora. Para montar uma rotina completa, leia <a href="/artigos/ingles-para-o-trabalho-com-ia-treino-de-reuniao-entrevista-e-email">inglês para o trabalho com IA</a> e <a href="/artigos/como-usar-ia-para-aprender-um-novo-idioma-todos-os-dias">como aprender um idioma com IA todos os dias</a>.</p>

    <h2>Privacidade: o que acontece com seu áudio</h2>
    <p>A central de ajuda diz que os clipes de áudio do Live e do Advanced ficam guardados junto com a transcrição no histórico do chat por 30 dias. Ao apagar o chat, os clipes associados são apagados em até 30 dias, salvo exceções legais ou de segurança. Na Standard, o áudio é apagado depois da transcrição.</p>
    <p>A OpenAI afirma que não usa os clipes de áudio para treinar modelos, a menos que você escolha compartilhá-los em Configurações, Controles de dados. As transcrições, porém, podem ser usadas se a opção de melhorar o modelo para todos estiver ligada, conforme o plano e as configurações. Para aprofundar o tema, leia <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega à IA sem perceber</a>, <a href="/artigos/chats-bloqueados-no-chatgpt-como-proteger-conversas-e-limites">chats bloqueados no ChatGPT</a> e <a href="/artigos/memoria-longa-em-ia-assistente-que-lembra-de-voce">memória longa em IA</a>.</p>
    <div class="callout-box callout-tip">
      <span class="callout-label">Dica</span>
      <p>Antes de 11 de dezembro, abra Configurações, Controles de dados e confira se as opções de incluir gravações de áudio estão desligadas. Se quiser guardar conversas importantes, a OpenAI indica a exportação dos dados da conta.</p>
    </div>

    <h2>Voz ou ditado: qual usar</h2>
    <p>A página do Voice separa as duas ferramentas. Use a voz para uma conversa de ida e volta, para pensar em voz alta. Use o ditado quando quiser gravar um prompt, revisar a transcrição e só depois enviar como texto. A OpenAI também anunciou em 18 de novembro de 2026 o Live Dictation, que transcreve enquanto você fala e eliminou o limite de 10 minutos de gravação, liberado para todos os planos em iOS, Android, web e desktop, conforme as <a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" rel="noopener noreferrer" target="_blank">notas de versão do ChatGPT</a>.</p>
    <p>Quem usa o Gemini no Mac pode comparar com o <a href="/artigos/ditado-por-voz-no-app-gemini-para-mac-tecla-fn-edicao-com-tela-e-limites">ditado por voz do Gemini</a>.</p>

    <h2>Erros comuns e cuidados</h2>
    <ul class="checklist">
      <li>Esperar até 11 de dezembro para testar o Live e descobrir só então que a sua rotina dependia de vídeo ou tela.</li>
      <li>Achar que o Live substitui o ditado: para texto revisável, o ditado ainda é melhor.</li>
      <li>Usar voz em ambiente barulhento ou com várias pessoas: o Live foi feito para conversa a dois e pode responder a quem não é você. Fones ajudam.</li>
      <li>Falar dados sensíveis em voz alta em lugar público ou no carro, e usar o celular dirigindo quando a lei ou a situação não permitem.</li>
      <li>Ignorar golpes com voz: o <a href="/artigos/golpe-da-voz-clonada-como-se-proteger-com-palavra-da-familia-e-checagem">golpe da voz clonada</a> mostra por que desconfiar de áudios fora do app.</li>
    </ul>

    <h2>Como se preparar em 3 passos</h2>
    <ol>
      <li>Abra Configurações, Voz e troque para o Live hoje, para se acostumar antes da troca automática.</li>
      <li>Reescreva seus pedidos fixos. Sem personalidades prontas, diga o tom e o ritmo no início da conversa.</li>
      <li>Se usa voz com GPT personalizado, vídeo ou tela, defina agora o plano B para depois de 11 de dezembro.</li>
    </ol>
    <p>Quem usa voz em entrevistas fictícias pode aproveitar para treinar com o guia de <a href="/artigos/como-se-preparar-para-entrevistas-de-emprego-usando-ia">como se preparar para entrevistas com IA</a>. E para acompanhar as demais mudanças do assistente, visite a categoria <a href="/categoria/ferramentas">Ferramentas de IA</a> do Portal da AI.</p>
  `,
  faq: [
    {
      question: "Quando a voz Advanced e a Standard do ChatGPT acabam?",
      answer:
        "Em 11 de dezembro de 2026. Segundo a OpenAI, a partir dessa data as duas deixam de aparecer em Configurações, Voz, e quem tinha uma delas selecionada passa automaticamente para a voz Live. Até lá, ainda dá para usar as duas normalmente.",
    },
    {
      question: "O que é a voz Live do ChatGPT?",
      answer:
        "É a voz movida pelo GPT-Live, um modelo full-duplex que ouve e fala ao mesmo tempo. Ele aceita interrupções, pode ficar em silêncio quando você pensa, usa busca e memória e trabalha com texto e imagens no mesmo chat.",
    },
    {
      question: "O Live faz vídeo e compartilha a tela?",
      answer:
        "Ainda não. A OpenAI informa que o Live não oferece vídeo nem compartilhamento de tela, e que esses recursos seguem na voz Advanced até o GPT-Live ganhar essa capacidade. Não há data anunciada para isso.",
    },
    {
      question: "Perco meus chats de voz antigos?",
      answer:
        "Não. As conversas feitas com a Advanced ou a Standard continuam no histórico e podem ser retomadas em texto ou em voz. Depois de 11 de dezembro, a voz passa a usar o GPT-Live por padrão. Se quiser uma cópia, peça a exportação dos dados.",
    },
    {
      question: "Quantas horas de voz tem o plano Plus?",
      answer:
        "Segundo a página oficial, o Plus tem 3 horas com o GPT-Live-1.1, medidas numa janela móvel de 24 horas. O Go também tem 3 horas, com o modelo Quip, e o Free tem acesso limitado. Os limites podem mudar, então confira a página.",
    },
    {
      question: "A OpenAI usa meu áudio para treinar a IA?",
      answer:
        "Segundo a OpenAI, não usa os clipes de áudio, a menos que você escolha compartilhá-los nos controles de dados. As transcrições podem ser usadas se a opção de melhorar o modelo estiver ligada. Os clipes ficam guardados por 30 dias com a transcrição.",
    },
  ],
};
