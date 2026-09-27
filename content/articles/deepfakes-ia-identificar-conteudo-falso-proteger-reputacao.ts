import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "deepfakes-ia-identificar-conteudo-falso-proteger-reputacao",
  title: "Deepfakes: como identificar e proteger sua reputação online",
  seoTitle: "Deepfakes: como identificar e se proteger",
  excerpt:
    "Deepfakes de voz, vídeo e imagem já aparecem em golpes de WhatsApp e ataques à reputação. Veja os sinais, o que fazer em 24 horas e como se prevenir.",
  metaDescription:
    "Deepfakes: aprenda a identificar vídeo, áudio e imagem falsos feitos com IA, o que fazer nas primeiras 24 horas se for alvo e como proteger família e negócio.",
  category: "futuro",
  date: "2026-09-17",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "deepfake detection security screen",
  seed: 40,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Os sinais visuais (piscar estranho, boca fora de sincronia, sombra errada) ainda ajudam, mas a defesa que resiste ao avanço dos modelos é checar a fonte e confirmar por um segundo canal.",
    "O golpe mais comum no Brasil é o da voz clonada em pedido urgente de Pix; uma palavra de segurança combinada com a família e a regra de ligar de volta para o número conhecido cortam a maioria dos casos.",
    "Se você for alvo, documente tudo antes de pedir remoção, denuncie na plataforma e na SaferNet, registre boletim de ocorrência e, no caso de mulheres, saiba que a Lei 15.123/2025 aumenta a pena de quem usa IA para esse tipo de violência.",
  ],
  sources: [
    { label: "Senado Notícias: lei agrava pena em crime de violência contra a mulher com uso de IA (Lei 15.123/2025)", url: "https://www12.senado.leg.br/noticias/materias/2025/04/25/lei-agrava-pena-em-crime-de-violencia-contra-a-mulher-com-uso-de-ia" },
    { label: "FTC: golpistas usam IA para clonar voz em golpes de emergência familiar", url: "https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes" },
    { label: "Google DeepMind: SynthID, marca d'água para conteúdo gerado por IA", url: "https://deepmind.google/technologies/synthid/" },
    { label: "SaferNet Brasil: canal de denúncia anônima de crimes na internet", url: "https://new.safernet.org.br/denuncie" },
  ],
  content: `
    <p>Deepfakes são vídeos, áudios e imagens gerados por inteligência artificial que imitam uma pessoa real dizendo ou fazendo algo que nunca aconteceu. Eles já aparecem em golpe de Pix por áudio de WhatsApp, em propaganda falsa com rosto de médico e em ataques à reputação de gente comum. Este guia mostra como identificar, o que fazer nas primeiras 24 horas se você for alvo e como reduzir o risco antes.</p>

    <p>Uma coisa precisa ficar clara desde o início: o "olho treinado" ajuda cada vez menos. Os modelos de voz e vídeo melhoram a cada lançamento, e a defesa que continua funcionando é a de processo: quem publicou, por qual canal, e se dá para confirmar por outro caminho.</p>

    <h2>O que é um deepfake e por que ele virou problema de todo mundo?</h2>

    <p>O termo junta "deep learning" (a técnica de IA por trás) com "fake". Existem três tipos: rosto trocado ou gerado em vídeo, voz clonada e imagem manipulada. Os três ficaram baratos. Segundo a notícia sobre o <a href="/noticias/google-gemini-3-8-flash-tts-clonagem-voz">Gemini 3.8 Flash TTS</a>, o modelo de voz do Google clona um timbre a partir de 30 segundos de áudio. Qualquer pessoa com um story falando no Instagram já entregou esse material.</p>

    <p>O problema deixou de ser só de político e celebridade porque o alvo mais rentável para o golpista é a família comum com WhatsApp. E deixou de ser só de golpe porque a ferramenta que cria um <a href="/artigos/ia-para-video-criar-avatar-digital-que-fala-por-voce">avatar digital que fala por você</a> para um curso legítimo é a mesma que cria o vídeo falso do seu concorrente. O guia sobre <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA multimodal</a> explica por que ver, ouvir e falar viraram uma coisa só para esses modelos.</p>

    <p>Plataformas e governos respondem em duas frentes: marcar o conteúdo sintético e punir o uso criminoso. Nos Estados Unidos, a Califórnia passou a exigir <a href="/noticias/california-lei-sb-1050-divulgacao-performer-sintetico-anuncios">aviso claro quando um anúncio usa "performer sintético"</a>. No Brasil, a novidade mais concreta é a Lei 15.123/2025, que você vê mais abaixo.</p>

    <h2>Sinais que ainda denunciam um deepfake</h2>

    <p>Nenhum sinal sozinho prova nada; dois ou três juntos, com uma fonte suspeita, são motivo para parar e checar.</p>

    <h3>Vídeo</h3>
    <ul class="checklist">
      <li>Piscar raro, mecânico ou em ritmo igual demais.</li>
      <li>Boca e som fora de sincronia em falas rápidas, "s" e "p" que não batem com o lábio.</li>
      <li>Sombra do nariz e do queixo que não seguem a luz do ambiente; brinco ou óculos que somem por um quadro.</li>
      <li>Borda do rosto tremendo quando a pessoa vira a cabeça ou passa a mão na frente.</li>
    </ul>

    <h3>Áudio</h3>
    <ul class="checklist">
      <li>Respiração ausente ou sempre no mesmo lugar da frase.</li>
      <li>Entonação plana em frase emocional ("preciso de ajuda agora" dito sem pressa).</li>
      <li>Palavras regionais erradas: quem sempre disse "tu" aparece dizendo "você".</li>
    </ul>

    <h3>Imagem</h3>
    <ul class="checklist">
      <li>Mãos com dedos a mais ou a menos, joias que se fundem com a pele.</li>
      <li>Texto ilegível em placas, camisetas e telas ao fundo.</li>
    </ul>

    <p>Para um segundo olhar, descreva o que viu a um assistente e peça uma lista de checagens, sem enviar o vídeo em si, porque isso pode expor a vítima:</p>

    <pre><code>Recebi um vídeo de 40 segundos em que um médico conhecido da minha cidade recomenda um suplemento para emagrecer, publicado por um perfil criado há 3 dias. Liste, em ordem de prioridade, 8 verificações objetivas que eu posso fazer em 10 minutos para saber se o vídeo é autêntico, incluindo o que buscar no Google, o que olhar no perfil e a quem perguntar. Não invente ferramentas; se não tiver certeza de que uma ferramenta existe, não cite.</code></pre>

    <h2>Por que checar a fonte vale mais que qualquer detector</h2>

    <p>Os sinais acima descrevem os modelos de hoje; os de amanhã corrigem metade deles. Por isso a pergunta mais útil é "de onde veio?", e não "parece real?". Um vídeo que só existe em um perfil recém-criado, sem veículo conhecido repetindo, com pedido de urgência no final, tem os traços de fabricação mesmo com imagem perfeita.</p>

    <p>Há também a marcação técnica. O Google DeepMind mantém o <a href="https://deepmind.google/technologies/synthid/" rel="noopener noreferrer">SynthID</a>, uma marca d'água invisível inserida em imagem, vídeo, áudio e texto gerados pelas ferramentas do Google, que pode ser conferida enviando o arquivo ao Gemini. A limitação: só marca o que foi criado com ferramentas participantes, e um golpista com modelo aberto não deixa essa marca. Trate a marca d'água como prova positiva quando existe, nunca como prova de que algo é real quando falta.</p>

    <p>A tabela abaixo resume a regra prática por tipo de situação:</p>

    <table>
      <thead>
        <tr><th>Situação</th><th>Sinal de alerta</th><th>Como confirmar em 5 minutos</th></tr>
      </thead>
      <tbody>
        <tr><td>Áudio de parente pedindo dinheiro</td><td>Número novo, urgência, pedido de Pix ou transferência</td><td>Ligar para o número antigo da pessoa; usar a palavra de segurança da família</td></tr>
        <tr><td>Vídeo de figura pública dizendo algo chocante</td><td>Só aparece em um perfil, sem veículo confirmando</td><td>Buscar o nome da pessoa em dois jornais e no perfil oficial dela</td></tr>
        <tr><td>Anúncio com rosto de profissional conhecido</td><td>Produto "milagroso", link encurtado, perfil recente</td><td>Procurar o profissional no site ou no conselho da categoria e perguntar</td></tr>
        <tr><td>Foto íntima ou constrangedora "sua" circulando</td><td>Detalhe que você sabe que não existe (tatuagem, cômodo)</td><td>Não responder ao chantagista; salvar tudo e seguir o passo a passo abaixo</td></tr>
      </tbody>
    </table>

    <h2>Golpe da voz clonada: o caso mais comum no Brasil</h2>

    <p>A cena típica: sua mãe recebe um áudio no WhatsApp com a sua voz, de um número novo, dizendo que o celular quebrou e que você precisa de um Pix de R$ 1.800 para pagar um guincho antes das 18h. O áudio tem seu jeito de falar. Ela transfere, e o dinheiro não volta. Essa estrutura (voz familiar, número novo, urgência, pagamento irreversível) se repete em quase todos os relatos.</p>

    <p>A orientação da FTC, agência de defesa do consumidor dos Estados Unidos, serve aqui: <a href="https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes" rel="noopener noreferrer">não confie na voz</a>, ligue para a pessoa no número que você já tem, e desconfie de qualquer pedido de transferência, criptomoeda ou cartão-presente.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Urgência mais pagamento irreversível é a assinatura do golpe. Quem realmente precisa de ajuda consegue esperar dois minutos enquanto você liga de volta para o número antigo.</p></div>

    <p>Para quem tem negócio, a versão corporativa é o áudio do "dono" pedindo ao financeiro um pagamento fora do fluxo. A defesa é a mesma: nenhum pagamento acima de um valor combinado sai por mensagem de voz, só depois de ligação para o número cadastrado. O guia sobre <a href="/artigos/como-ia-esta-mudando-atendimento-ao-cliente">como a IA está mudando o atendimento ao cliente</a> mostra que os clientes também vão exigir esse tipo de confirmação das empresas.</p>

    <h2>O que fazer nas primeiras 24 horas se você for alvo</h2>

    <ol>
      <li><strong>Documente antes de pedir remoção.</strong> Print da tela inteira com data e hora, link completo, nome do perfil e gravação de tela do vídeo. Guarde no celular e na nuvem; depois que a plataforma remove, a prova some.</li>
      <li><strong>Denuncie na plataforma.</strong> Instagram, TikTok, YouTube e X têm categoria própria para conteúdo manipulado e imagem íntima sem consentimento; a categoria certa vai para uma fila mais rápida.</li>
      <li><strong>Denuncie na SaferNet.</strong> A <a href="https://new.safernet.org.br/denuncie" rel="noopener noreferrer">central de denúncias da SaferNet Brasil</a> recebe, de forma anônima, denúncias de crimes e violações de direitos humanos na internet e encaminha às autoridades.</li>
      <li><strong>Registre boletim de ocorrência.</strong> Na delegacia eletrônica do seu estado, com os prints anexados. O BO é o documento que a plataforma, o banco e o advogado vão pedir depois.</li>
      <li><strong>Avise quem precisa saber.</strong> Se o conteúdo atinge sua vida profissional, avise clientes e colegas antes que saibam por outra pessoa. Um assistente ajuda a escrever sem tom de pânico:</li>
    </ol>

    <pre><code>Sou nutricionista e um vídeo falso feito com IA, usando meu rosto e minha voz, está circulando recomendando um produto que eu nunca indiquei. Escreva um comunicado de até 120 palavras para eu publicar no Instagram e mandar aos meus pacientes: tom calmo, direto, sem me defender demais, dizendo que o vídeo é falso, que já denunciei e registrei ocorrência, e pedindo que não compartilhem. Português do Brasil, sem emoji.</code></pre>

    <p>Se a vítima for mulher e o objetivo for humilhar, constranger ou controlar, existe enquadramento penal específico. A <a href="https://www12.senado.leg.br/noticias/materias/2025/04/25/lei-agrava-pena-em-crime-de-violencia-contra-a-mulher-com-uso-de-ia" rel="noopener noreferrer">Lei 15.123/2025</a>, segundo o Senado, aumenta pela metade a pena do crime de violência psicológica contra a mulher (que é de seis meses a dois anos de reclusão, mais multa) quando ele é cometido com uso de IA ou de outra tecnologia que altere imagem ou voz da vítima. Leve o número da lei ao registrar o BO.</p>

    <h2>Como reduzir o risco antes que aconteça</h2>

    <p>Não dá para zerar o risco, porque qualquer foto de perfil já é material. Dá para deixar o golpe mais difícil e a resposta mais rápida:</p>

    <ul class="checklist">
      <li>Combine uma palavra de segurança com a família e com o financeiro da empresa; troque a cada seis meses.</li>
      <li>Regra fixa: pedido de dinheiro por áudio ou vídeo só vale depois de ligação de volta para o número antigo.</li>
      <li>Revise quem vê seus stories e vídeos longos; perfil aberto com dezenas de vídeos falando de frente é o melhor banco de treino para clonagem. O guia sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> mostra o que mais você entrega sem perceber.</li>
      <li>Configure alerta do Google com seu nome e o da sua empresa para saber cedo quando algo novo aparece; o artigo sobre <a href="/artigos/como-melhorar-avaliacoes-e-reputacao-online-com-ia">reputação online com IA</a> ensina a montar esse monitoramento.</li>
      <li>Mantenha um canal oficial ativo (site, perfil verificado ou LinkedIn) onde você possa desmentir rápido; quem já <a href="/artigos/como-construir-autoridade-em-ia-no-linkedin-sem-ser-tecnico">construiu presença no LinkedIn</a> tem onde falar quando precisa.</li>
      <li>Ao usar ferramentas de voz e vídeo no seu trabalho, leia a política de uso da sua amostra de voz; o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> lista o que olhar antes de assinar.</li>
      <li>Guarde fotos e vídeos originais com data, porque o original é a prova mais forte de que a versão alterada é falsa; o guia de <a href="/artigos/ia-para-organizar-fotos-arquivos-menos-bagunca-digital">organização de fotos e arquivos</a> ajuda.</li>
    </ul>

    <h2>Erros comuns ao lidar com deepfakes</h2>

    <p><strong>Responder ao chantagista.</strong> Quem paga para "não vazar" recebe um segundo pedido. Documente, denuncie e bloqueie.</p>

    <p><strong>Compartilhar o vídeo "para alertar".</strong> Cada compartilhamento aumenta o alcance e, no caso de conteúdo íntimo, pode ser crime. Alerte com um print borrado ou só com texto.</p>

    <p><strong>Achar que detector online resolve.</strong> Detectores erram nos dois sentidos e alguns guardam o arquivo enviado. Use como sinal a mais, nunca como veredito.</p>

    <p><strong>Confiar em quem "parece" a pessoa.</strong> Voz, rosto e jeito de falar já não são prova de identidade; canal conhecido e confirmação por segundo caminho, sim. Se os termos deste guia ainda soam estranhos, o <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de inteligência artificial</a> explica cada um em uma linha.</p>

    <p>Deepfakes vão ficar melhores; sua rotina de verificação precisa ficar mais simples, não mais paranoica. Duas regras cobrem quase tudo: ligue de volta para o número que você já tinha e não compartilhe o que não confirmou. Para acompanhar como essa tecnologia muda trabalho, comércio e lei, siga a categoria <a href="/categoria/futuro">Futuro do Trabalho</a>.</p>
  `,
  faq: [
    {
      question: "Como saber se um vídeo é deepfake?",
      answer:
        "Procure dois ou três sinais juntos: piscar mecânico, boca fora de sincronia em falas rápidas, sombras que não seguem a luz, borda do rosto tremendo ao virar a cabeça. Depois faça a checagem que importa: quem publicou, se algum veículo conhecido confirma e se o perfil oficial da pessoa diz algo. Vídeo perfeito em fonte suspeita continua suspeito.",
    },
    {
      question: "Deepfake é crime no Brasil?",
      answer:
        "Não existe um crime chamado deepfake, mas o uso pode se enquadrar em crimes já previstos, como estelionato, difamação e divulgação de cena íntima. Desde abril de 2025, a Lei 15.123 aumenta pela metade a pena de violência psicológica contra a mulher quando o crime é cometido com IA que altera imagem ou voz. Em caso de golpe financeiro, registre boletim de ocorrência e avise o banco.",
    },
    {
      question: "O que fazer se receber um áudio de parente pedindo Pix urgente?",
      answer:
        "Não transfira. Ligue para o número que você já tinha da pessoa, não para o número novo que enviou o áudio. Se não atender, ligue para outro familiar que possa confirmar. Peça a palavra de segurança combinada em família. Urgência somada a pagamento que não pode ser desfeito é a marca do golpe de voz clonada, e dois minutos de espera não prejudicam quem precisa de ajuda de verdade.",
    },
    {
      question: "Existe ferramenta que detecta deepfake?",
      answer:
        "Existem detectores e marcas d'água, como o SynthID do Google DeepMind, que identifica conteúdo gerado pelas ferramentas do próprio Google. A limitação é que só marcam o que foi criado com ferramentas participantes, e detectores genéricos erram nos dois sentidos. Use como sinal a mais, nunca como veredito, e não envie vídeos de terceiros a serviços que guardam o arquivo.",
    },
    {
      question: "Onde denunciar um deepfake?",
      answer:
        "Primeiro na plataforma onde ele circula, usando a categoria de conteúdo manipulado ou imagem íntima sem consentimento. Depois na SaferNet Brasil, que recebe denúncias anônimas de crimes na internet e encaminha às autoridades. Registre boletim de ocorrência na delegacia eletrônica do seu estado com os prints e links salvos. Guarde as provas antes de pedir remoção, porque o conteúdo some depois.",
    },
  ],
  quiz: [
    {
      question: "Você recebe um áudio com a voz da sua irmã, de um número novo, pedindo Pix de R$ 900 em 20 minutos. Qual a primeira ação?",
      options: ["Transferir e conferir depois", "Ligar para o número antigo dela", "Responder pedindo mais detalhes no número novo"],
      answer: 1,
      explanation:
        "A regra é confirmar por um canal que você já tinha. Responder no número novo só alimenta o golpista, e transferir é irreversível.",
    },
    {
      question: "Um vídeo falso com seu rosto está no Instagram. O que fazer primeiro?",
      options: ["Pedir remoção imediatamente", "Salvar prints, link e gravação de tela", "Compartilhar avisando que é falso"],
      answer: 1,
      explanation:
        "Documentar vem antes da remoção, porque a prova some quando a plataforma apaga. Compartilhar aumenta o alcance do conteúdo.",
    },
  ],
};
