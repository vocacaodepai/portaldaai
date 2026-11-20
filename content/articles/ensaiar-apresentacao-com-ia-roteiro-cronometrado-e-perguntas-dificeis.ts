import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ensaiar-apresentacao-com-ia-roteiro-cronometrado-e-perguntas-dificeis",
  title: "Ensaiar apresentação com IA: roteiro, tempo e perguntas difíceis",
  seoTitle: "Ensaiar apresentação com IA: guia para o trabalho",
  excerpt:
    "Ensaiar apresentação com IA para o trabalho: roteiro cronometrado, ensaio gravado em português, simulação de perguntas difíceis e o que o Speaker Coach faz e não faz.",
  metaDescription:
    "Ensaiar apresentação com IA: método em 5 passos, prompts para cronometrar o roteiro e simular perguntas do chefe, e os limites do Speaker Coach do PowerPoint, que só entende inglês.",
  category: "carreira",
  articleSubcategory: "desenvolvimento-de-habilidades",
  date: "2026-10-23",
  readTime: 8,
  imageQuery: "professional presenting meeting room slides rehearsal",
  seed: 615,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Ensaiar apresentação com IA funciona em três frentes: ajustar o roteiro ao tempo disponível, gravar e analisar o seu ensaio e simular as perguntas difíceis que o público vai fazer.",
    "O Speaker Coach do PowerPoint dá feedback de ritmo, tom e palavras de preenchimento, mas, segundo a página oficial da Microsoft, só entende inglês, então em português o ensaio gravado com transcrição é o caminho.",
    "A IA melhora o ensaio, mas não substitui falar em voz alta: o ganho vem de repetir três vezes e corrigir um ponto por vez, sem colar dados confidenciais da empresa no chat.",
  ],
  content: `
    <p>Ensaiar apresentação com IA é usar um assistente para três coisas que costumam faltar na véspera: um roteiro que caiba no tempo, um retorno sobre como você soa e perguntas difíceis para treinar as respostas. A IA não fala por você nem dá a segurança que só vem de repetir em voz alta. Mas ela encurta o caminho entre um slide cheio e uma fala clara.</p>

    <p>Apresentar resultado ao chefe, defender uma proposta, mostrar um projeto em uma reunião de equipe ou fazer uma entrega ao cliente são momentos em que a carreira anda. Quem se comunica com clareza costuma ser lembrado, e esse é um dos pontos do guia sobre <a href="/artigos/como-se-tornar-referencia-em-ia-na-empresa-sem-ser-do-ti">como virar referência em IA na empresa</a>. Este texto traz um método de cinco passos, prompts prontos, um exemplo com contas de tempo, o que o Speaker Coach faz e o que ele não faz em português, com páginas conferidas em 23/10/2026.</p>

    <h2>Por que o ensaio muda o resultado</h2>

    <p>Muita apresentação ruim não falha no conteúdo, e sim no tempo e na estrutura: o orador gasta tempo demais nos primeiros slides, corre nos últimos e termina sem dizer o que quer que o público faça. O ensaio expõe esses problemas antes de o público ver. E há um benefício menos óbvio: quem ensaia chega mais calmo, porque já sabe o que vem depois de cada slide.</p>

    <p>Na falta de colegas para ouvir, a IA faz o papel de plateia paciente. Ela lê o roteiro, aponta trechos confusos, calcula se cabe no tempo e, se você pedir, assume o papel de um diretor desconfiado. O limite é claro: ela não vê o seu rosto, não sente o clima da sala e não substitui um colega de confiança que assiste ao ensaio e dá retorno de verdade, algo que combina bem com o <a href="/artigos/sindrome-do-impostor-usar-ia-nao-te-torna-menos-capaz">texto sobre síndrome do impostor</a> para quem trava na hora de falar.</p>

    <h2>O método em cinco passos</h2>

    <ol>
      <li><strong>Defina a mensagem em uma frase.</strong> O que o público deve decidir, aprovar ou entender ao fim? Se a frase não cabe em 25 palavras, a apresentação ainda não está pronta.</li>
      <li><strong>Peça à IA um roteiro cronometrado.</strong> Informe tempo total, número de slides e público, e receba o tempo por slide.</li>
      <li><strong>Ensaie em voz alta e grave.</strong> Use o gravador do celular. Fale como falaria na reunião, sem parar para corrigir.</li>
      <li><strong>Transcreva e peça análise.</strong> Cole o texto transcrito (sem dados sigilosos) e peça retorno sobre clareza, repetições, palavras de preenchimento e trechos longos.</li>
      <li><strong>Simule as perguntas difíceis.</strong> Peça cinco perguntas que o chefe, o cliente ou o financeiro poderiam fazer, responda em voz alta e peça uma avaliação.</li>
    </ol>

    <p>Repita os passos 3 e 4 até três vezes, corrigindo um ponto por rodada. Mudar tudo de uma vez só confunde. Para criar ou revisar os slides antes do ensaio, o guia de <a href="/artigos/como-criar-apresentacoes-e-slides-profissionais-com-ia">apresentações e slides profissionais com IA</a> e o texto sobre <a href="/artigos/apresentacao-no-gemini-notebook-como-revisar-o-roteiro-antes-de-gerar">revisar o roteiro no Gemini Notebook</a> ajudam na base.</p>

    <h2>Passo 2 na prática: roteiro cronometrado</h2>

    <p>A conta é simples e vale fazer antes de qualquer IA. Meça o seu ritmo: leia em voz alta um texto de 100 palavras, cronometrando. Se levou 45 segundos, você fala cerca de 133 palavras por minuto, e esse é o seu número, não uma média universal. Com ele, 8 minutos de fala comportam por volta de 1.060 palavras, já contando as pausas que você deve fazer.</p>

    <p>Exemplo ilustrativo: uma analista tem 8 minutos para apresentar o resultado do trimestre, com 10 slides. Dividindo por igual, são 48 segundos por slide. Mas slide de abertura e de agenda não merecem 48 segundos. O ideal é reservar 30 segundos para a abertura, 1 minuto para o fecho com a decisão pedida e distribuir o resto entre os slides de conteúdo. Peça isso à IA:</p>

    <pre><code>Tenho 8 minutos para apresentar o resultado do trimestre para a diretoria, com 10 slides. Meu ritmo é de cerca de 130 palavras por minuto. Distribua o tempo por slide, deixando 1 minuto no fim para a decisão que quero pedir (aprovar a contratação de um assistente). Para cada slide, sugira a frase de abertura e o ponto que não pode faltar. Não invente números: use [XX] onde faltar dado que eu vou preencher. Slides: [liste os títulos].</code></pre>

    <p>Conferir a conta com um cronômetro real é obrigatório. A IA pode errar o cálculo de palavras e de tempo, assunto do guia de <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>. Se o resultado do cálculo não bater com o seu primeiro ensaio, prevaleça o ensaio.</p>

    <h2>Speaker Coach do PowerPoint: o que faz e a pegadinha do idioma</h2>

    <p>O PowerPoint tem uma ferramenta própria para isso. Segundo a <a href="https://support.microsoft.com/en-us/topic/cd7fc941-5c3b-498c-a225-83ef3f64f07b" target="_blank" rel="noopener noreferrer">página de suporte da Microsoft</a>, o Speaker Coach dá retorno sobre ritmo, tom de voz, palavras de preenchimento, fala informal e eufemismos, além de apontar quando você fala demais ou apenas lê o texto do slide. Para usar, abra a apresentação, escolha "Rehearse with Coach" (na aba Apresentação de Slides, na web, no Windows e no Mac) e inicie o ensaio. A <a href="https://its.unc.edu/2023/06/29/become-a-better-public-speaker" target="_blank" rel="noopener noreferrer">Universidade da Carolina do Norte</a> descreve o mesmo caminho e lista a disponibilidade na web, Windows, macOS, iOS e Android.</p>

    <p>Agora a pegadinha. Pela mesma página da Microsoft, o Speaker Coach hoje entende apenas inglês e só funciona com a interface do Microsoft 365 em inglês, e o retorno de pronúncia vale só para inglês dos Estados Unidos. A página também avisa que a fala é enviada à Microsoft para o serviço funcionar, que é preciso entrar com conta Microsoft e ter microfone, e que o relatório de ensaio desaparece ao ser fechado, então vale tirar uma captura de tela se quiser guardá-lo. Esses detalhes podem mudar, por isso confira a página antes de contar com o recurso.</p>

    <p>Na prática, para quem apresenta em português, o Speaker Coach serve de pouco, a não ser para ensaiar uma fala em inglês. O caminho em português é o ensaio gravado e analisado por uma IA de conversa, descrito a seguir.</p>

    <h2>Passo 3 e 4: gravar, transcrever e pedir retorno em português</h2>

    <p>Grave o ensaio no celular, de preferência em pé e com o slide à frente. Depois, transcreva. As opções gratuitas e pagas estão no guia das <a href="/artigos/melhores-ias-para-transcrever-audio-e-video-em-portugues">melhores IAs para transcrever áudio e vídeo em português</a>, e quem já usa o WhatsApp pode aproveitar a <a href="/artigos/transcricao-de-audio-no-whatsapp-como-ativar-e-quando-usar-ia">transcrição de áudio do WhatsApp</a> para ensaios curtos. O texto de <a href="/artigos/gravar-aula-e-virar-resumo-com-ia-transcricao-revisao-e-etica">gravar aula e virar resumo</a> traz cuidados parecidos para quem grava terceiros; no ensaio, você grava a si mesmo, então o cuidado é outro: não deixe a gravação com dados da empresa em aplicativo que você não conhece.</p>

    <pre><code>Esta é a transcrição de um ensaio meu de 8 minutos para a diretoria. Analise em quatro blocos: 1) trechos confusos ou longos demais, 2) palavras de preenchimento que repeti (tipo, né, então, assim), com a contagem aproximada, 3) onde eu li o slide em vez de explicar, 4) se a decisão que quero pedir ficou clara. Dê no máximo 5 sugestões, em ordem de impacto, e reescreva a minha abertura em 3 frases. Transcrição: [cole aqui].</code></pre>

    <p>Atenção ao que você cola. Dados de clientes, números não divulgados e nomes de pessoas não devem ir para um chat sem autorização, tema do guia sobre <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">colar dados da empresa no ChatGPT</a>. Troque por [XX] e por rótulos genéricos, como "cliente A".</p>

    <p>Quem quer ensaiar falando com a IA, e não só com texto, pode testar as conversas por voz de assistentes, como mostra o guia do <a href="/artigos/gemini-live-com-camera-e-tela-como-usar-no-celular">Gemini Live</a>. Funciona como conversa de treino, mas não mede ritmo com precisão nem enxerga o seu tom como um treinador faria.</p>

    <h2>Passo 5: perguntas difíceis, o ensaio que quase ninguém faz</h2>

    <p>Muita gente ensaia a fala e esquece a sessão de perguntas, que é onde o chefe testa a sua segurança. A IA é ótima nisso, porque inventa perguntas sem cerimônia.</p>

    <pre><code>Aja como um diretor financeiro cético que acabou de ouvir a minha apresentação: [resuma em 5 linhas]. Faça uma pergunta difícil por vez, espere minha resposta e só então faça a próxima, com base no que eu disse. Depois de 5 perguntas, avalie minhas respostas: o que ficou convincente, onde fui evasivo e como eu poderia responder em 30 segundos.</code></pre>

    <p>Responda em voz alta, como na reunião. Para as perguntas que mais travaram, escreva uma resposta de duas frases e treine até sair natural. Quem vai pedir algo grande, como aumento ou promoção, encontra o mesmo raciocínio no guia de <a href="/artigos/pedir-promocao-ou-aumento-com-ia-dossie-de-resultados-e-roteiro-da-conversa">dossiê de resultados e roteiro da conversa</a>, e quem apresenta uma ideia nova ao gestor pode partir da <a href="/artigos/proposta-de-piloto-de-ia-para-o-chefe-modelo-de-uma-pagina">proposta de piloto de uma página</a>. Para entrevista de emprego, que é uma apresentação sobre você mesmo, veja <a href="/artigos/como-se-preparar-para-entrevistas-de-emprego-usando-ia">como se preparar para entrevistas com IA</a>.</p>

    <h2>Quadro de decisão: qual recurso usar</h2>

    <table>
      <thead>
        <tr><th>Objetivo</th><th>Recurso</th><th>Limite</th></tr>
      </thead>
      <tbody>
        <tr><td>Encaixar o roteiro no tempo</td><td>Chat de IA com seu ritmo informado</td><td>Confira com cronômetro real</td></tr>
        <tr><td>Retorno de ritmo e palavras de preenchimento em português</td><td>Gravação, transcrição e análise por IA de conversa</td><td>Não mede tom de voz com precisão</td></tr>
        <tr><td>Retorno de ritmo e tom em inglês</td><td>Speaker Coach do PowerPoint</td><td>Só inglês, fala enviada à Microsoft, relatório some ao fechar</td></tr>
        <tr><td>Treinar respostas</td><td>Simulação de perguntas por IA</td><td>Perguntas genéricas se você der pouco contexto</td></tr>
        <tr><td>Segurança emocional e linguagem corporal</td><td>Ensaio com um colega ou na frente do espelho</td><td>Depende de gente</td></tr>
      </tbody>
    </table>

    <h2>Erros comuns ao ensaiar com IA</h2>

    <ul class="checklist">
      <li><strong>Ensaiar só lendo o texto na cabeça.</strong> Fale em voz alta. A língua tropeça em frases que a mente achou lindas.</li>
      <li><strong>Decorar o roteiro palavra por palavra.</strong> Decore a sequência de ideias, não as frases. Se esquecer uma palavra, não trava.</li>
      <li><strong>Aceitar toda sugestão da IA.</strong> Escolha as duas ou três que melhoram a clareza e deixe o resto.</li>
      <li><strong>Colocar dados confidenciais no chat.</strong> Troque números e nomes por marcadores.</li>
      <li><strong>Ignorar a pergunta da plateia.</strong> Reserve ao menos 20% do ensaio para perguntas e respostas.</li>
      <li><strong>Não ensaiar a abertura e o fecho.</strong> São os dois momentos que o público mais lembra; treine essas frases até sair natural.</li>
    </ul>

    <h2>Próximo passo</h2>

    <p>Marque 30 minutos na agenda de amanhã, calcule o seu ritmo lendo 100 palavras com cronômetro, peça o roteiro cronometrado com o primeiro prompt e grave um ensaio completo. Se uma apresentação importante está no horizonte, repita o processo três vezes em dias diferentes. Para mais textos sobre habilidades que valorizam a carreira, visite a <a href="/categoria/carreira">categoria de carreira</a> ou leia o guia de <a href="/artigos/email-profissional-dificil-com-ia-feedback-prazo-e-recusa-sem-climao">e-mail profissional difícil com IA</a>, que trabalha outra forma de comunicação no trabalho.</p>
  `,
  faq: [
    {
      question: "Como ensaiar uma apresentação com IA?",
      answer:
        "Defina a mensagem em uma frase, peça à IA um roteiro cronometrado com o seu ritmo de fala, ensaie em voz alta gravando, transcreva e peça análise de clareza e palavras de preenchimento. Por fim, simule as perguntas difíceis. Repita até três vezes, corrigindo um ponto por rodada.",
    },
    {
      question: "O Speaker Coach do PowerPoint funciona em português?",
      answer:
        "Segundo a página de suporte da Microsoft, o Speaker Coach hoje entende apenas inglês e só funciona com a interface do Microsoft 365 em inglês, com outros idiomas apenas planejados. Para apresentar em português, use a gravação do ensaio com transcrição e análise por uma IA de conversa. Confira a página para ver se isso mudou.",
    },
    {
      question: "O ensaio no Speaker Coach fica gravado?",
      answer:
        "A Microsoft informa que a fala é enviada aos serviços de voz dela para gerar o retorno e que o relatório de ensaio desaparece quando é fechado, por isso recomenda uma captura de tela para guardá-lo. As regras de tratamento de dados podem variar por conta e por empresa, então consulte a política da sua organização.",
    },
    {
      question: "Posso colar o texto da apresentação da empresa no ChatGPT?",
      answer:
        "Só se a política da empresa permitir. Dados de clientes, números não divulgados e informações estratégicas não devem ir para um chat sem autorização. Uma saída é trocar valores e nomes por marcadores, como [XX] e cliente A, e pedir feedback apenas de estrutura e clareza.",
    },
    {
      question: "Quantas vezes devo ensaiar antes de apresentar?",
      answer:
        "Não há número exato. Para uma apresentação importante, ensaiar três vezes em dias diferentes, corrigindo um ponto por rodada, costuma dar bons resultados. O essencial é ensaiar em voz alta, cronometrar e treinar as respostas às perguntas mais difíceis que o público pode fazer.",
    },
  ],
  quiz: [
    {
      question: "Qual é a limitação principal do Speaker Coach para quem apresenta em português?",
      options: [
        "Ele só existe no Mac",
        "Segundo a Microsoft, hoje só entende inglês",
        "Ele cobra por minuto de ensaio",
      ],
      answer: 1,
      explanation:
        "A página de suporte da Microsoft diz que o Speaker Coach entende apenas inglês e depende da interface em inglês. Em português, use gravação, transcrição e análise por IA.",
    },
    {
      question: "O que fazer antes de colar a transcrição de um ensaio em um chat de IA?",
      options: [
        "Nada, o chat é sempre privado",
        "Trocar nomes e números sensíveis por marcadores",
        "Enviar também os arquivos da empresa",
      ],
      answer: 1,
      explanation:
        "Marcadores como [XX] e cliente A preservam a estrutura da fala e protegem dados confidenciais.",
    },
  ],
};
