import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ia-para-audio-criar-podcasts-e-narracoes-profissionais",
  title: "IA para áudio: como criar podcasts e narrações profissionais",
  seoTitle: "IA para áudio: podcasts e narrações profissionais",
  excerpt:
    "IA para áudio na prática: limpe a gravação do celular, edite pelo texto e gere narração em português com ElevenLabs, Descript e Adobe Podcast, sem estúdio.",
  metaDescription:
    "IA para áudio: como gravar em casa, limpar ruído de graça, editar pelo texto e criar narrações em português. Fluxo completo, preços verificados e prompts.",
  category: "ferramentas",
  date: "2026-09-16",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "podcast microphone recording studio",
  seed: 36,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Com IA para áudio, uma gravação feita no celular em um quarto silencioso vira episódio publicável: limpeza de ruído gratuita, edição pelo texto e capítulos automáticos.",
    "Voz sintética em português já serve para narração de curso, vídeo institucional e audiodescrição; para podcast de opinião, a voz real ainda conecta mais.",
    "Dá para começar gastando zero (Audacity, Adobe Podcast Enhance, planos gratuitos de Descript e ElevenLabs) e só pagar quando o volume justificar.",
  ],
  sources: [
    { label: "Adobe Podcast: Enhance Speech", url: "https://podcast.adobe.com/en/enhance" },
    { label: "Descript: planos e preços", url: "https://www.descript.com/pricing" },
    { label: "ElevenLabs: planos e preços", url: "https://elevenlabs.io/pricing" },
    { label: "Audacity: editor de áudio gratuito", url: "https://www.audacityteam.org/" },
    { label: "Google: anúncio do Gemini 3.8 Flash TTS", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/" },
  ],
  content: `
    <p>IA para áudio é o conjunto de ferramentas que limpa, edita e até gera voz a partir de texto, e hoje ela resolve as três barreiras clássicas de quem quer fazer podcast ou narração: não ter estúdio, não saber editar e não ter "voz de locutor". Com um celular, um quarto com cortina e duas ferramentas gratuitas, o resultado já é publicável.</p>

    <p>Este guia mostra o que cada tipo de ferramenta faz, um fluxo completo do roteiro ao episódio publicado, quanto custam Descript, ElevenLabs e Adobe Podcast (preços verificados em 27/09/2026), quando usar voz sintética e quando não usar, e os erros que deixam o áudio com cara de amador mesmo com IA. Também tem dois prompts prontos para roteiro e descrição do episódio.</p>

    <h2>O que a IA para áudio faz de verdade?</h2>

    <p>Existem quatro frentes, e vale entender cada uma antes de assinar qualquer coisa. A primeira é limpeza: remover eco, chiado de ventilador e ruído da rua de uma gravação já feita. A segunda é edição pelo texto: a ferramenta transcreve o áudio e você corta trechos apagando palavras, como em um documento. A terceira é geração de voz (text-to-speech): você escreve o roteiro e uma voz sintética lê, em português, com entonação natural. A quarta é a parte de apoio: transcrição, capítulos, título e descrição do episódio gerados automaticamente.</p>

    <p>O avanço mais recente está na geração de voz. O Google anunciou que o <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/" rel="noopener noreferrer">Gemini 3.8 Flash TTS</a> recria um perfil vocal a partir de 30 segundos de áudio de uma voz cujos direitos você tenha, em mais de 100 idiomas, com destaque para o português brasileiro. A notícia sobre <a href="/noticias/google-gemini-3-8-flash-tts-clonagem-voz">o lançamento do Gemini 3.8 Flash TTS</a> detalha o anúncio. Isso faz parte de um movimento maior, que o artigo sobre <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA multimodal</a> explica: a mesma ferramenta passa a ouvir, ler e falar.</p>

    <p>O que a IA ainda não faz: escolher o assunto certo, ter opinião e sustentar uma conversa interessante por 40 minutos. Isso continua sendo trabalho seu.</p>

    <h2>As ferramentas e quanto custam (verificado em 27/09/2026)</h2>

    <p>A tabela abaixo reúne o que uma pessoa começando de fato precisa. Não inclui suítes profissionais de estúdio, porque o leitor deste guia não vai usar nada disso no primeiro ano.</p>

    <table>
      <thead>
        <tr><th>Ferramenta</th><th>Para que serve</th><th>Plano gratuito</th><th>Plano pago inicial</th></tr>
      </thead>
      <tbody>
        <tr><td>Audacity</td><td>Gravar e cortar áudio no computador</td><td>Totalmente gratuito e de código aberto (Windows, Mac, Linux)</td><td>Não tem</td></tr>
        <tr><td>Adobe Podcast Enhance Speech</td><td>Limpar ruído e eco de uma gravação pronta</td><td>Gratuito, direto no navegador</td><td>Consulte a página oficial para os limites do plano pago</td></tr>
        <tr><td>Descript</td><td>Editar áudio e vídeo pelo texto, Studio Sound, voz sintética</td><td>60 minutos de processamento por mês, transcrição em 25 idiomas</td><td>Hobbyist a partir de US$ 16 por mês no plano anual</td></tr>
        <tr><td>ElevenLabs</td><td>Gerar narração em português a partir de texto, clonar voz</td><td>10 mil créditos por mês</td><td>Starter US$ 6 por mês; Creator US$ 22 por mês (com clonagem profissional)</td></tr>
      </tbody>
    </table>

    <p>Fontes: <a href="https://www.audacityteam.org/" rel="noopener noreferrer">site do Audacity</a>, <a href="https://podcast.adobe.com/en/enhance" rel="noopener noreferrer">página do Enhance Speech</a>, <a href="https://www.descript.com/pricing" rel="noopener noreferrer">preços do Descript</a> e <a href="https://elevenlabs.io/pricing" rel="noopener noreferrer">preços da ElevenLabs</a>, todos em dólar; converta pela cotação do dia e some o IOF do cartão. Antes de colocar cartão em qualquer uma, passe pelo <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a>, principalmente na parte sobre o que acontece com o áudio da sua voz depois do upload.</p>

    <h2>Fluxo completo: do roteiro ao episódio publicado</h2>

    <p>O passo a passo abaixo é para um episódio solo de 15 a 20 minutos, gravado em casa. Com convidado remoto, a lógica é a mesma, só muda a gravação (cada um grava o próprio áudio localmente e você junta depois).</p>

    <h3>1. Roteiro com IA (30 minutos)</h3>

    <p>Não peça para a IA escrever o episódio inteiro: o resultado soa lido e genérico. Peça a estrutura e os ganchos, e fale com as suas palavras. O <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">guia de prompt engineering</a> explica por que dar contexto e formato muda tanto a resposta.</p>

    <pre><code>Sou dono de uma pequena contabilidade em Curitiba e vou gravar um podcast solo de 15 minutos para donos de comércio. Tema deste episódio: "3 erros que fazem o MEI pagar imposto a mais". Monte um roteiro em tópicos (não em texto corrido) com: gancho de abertura de 20 segundos, os 3 erros com um exemplo em reais para cada, uma pergunta para o ouvinte responder no Instagram e um encerramento com chamada para o próximo episódio. Marque onde eu devo contar uma história pessoal.</code></pre>

    <h3>2. Gravação (20 minutos)</h3>

    <p>Celular a um palmo da boca, no app de gravador nativo, em um cômodo com cortina, cama ou roupas (tecido absorve reverberação). Ventilador e geladeira desligados. Grave 10 segundos de silêncio no início: as ferramentas de limpeza usam isso como referência de ruído. Erros de fala não precisam de regravação; repita a frase e siga, o corte vem depois.</p>

    <h3>3. Limpeza (5 minutos)</h3>

    <p>Suba o arquivo no Adobe Podcast Enhance Speech, aguarde e baixe. Se a voz ficar "metálica", reduza a intensidade do efeito no controle da própria página. Alternativa dentro do Descript é o Studio Sound, disponível a partir do plano Hobbyist.</p>

    <h3>4. Edição pelo texto (30 a 40 minutos)</h3>

    <p>No Descript, a transcrição aparece como um documento. Apague as frases repetidas, as pausas longas e os "éééé" com a função de remoção de palavras de preenchimento. A mesma técnica que o artigo sobre <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">transcrição e resumo de reuniões com IA</a> descreve vale aqui: a transcrição vira índice do áudio.</p>

    <h3>5. Publicação (15 minutos)</h3>

    <p>Peça à IA capítulos com minutagem, três opções de título e uma descrição de 80 palavras a partir da transcrição. Exporte em MP3 e publique no seu agregador. Um trecho de 60 segundos com legenda vira conteúdo para redes; o guia de <a href="/artigos/como-ganhar-dinheiro-criando-videos-curtos-com-ia">vídeos curtos com IA</a> mostra como reaproveitar.</p>

    <pre><code>Aqui está a transcrição do meu episódio (colar abaixo). Gere: 1) capítulos com minutagem no formato 00:00 Título; 2) três títulos de até 60 caracteres, um deles em formato de pergunta; 3) uma descrição de 80 palavras em português do Brasil, sem adjetivos vazios, terminando com uma pergunta para o ouvinte.</code></pre>

    <h2>Quando usar voz sintética (e quando não usar)</h2>

    <p>Voz gerada por IA funciona bem quando a identidade de quem fala não é o ponto: narração de curso online, vídeo institucional, audiodescrição, aviso de espera telefônica, versão em áudio de um artigo. Nesses casos, a vantagem é regravar em segundos quando o texto muda, em vez de agendar estúdio. Quem produz aulas vai encontrar no guia sobre <a href="/artigos/como-criar-e-vender-curso-online-usando-ia">criar e vender curso online usando IA</a> o encaixe da narração sintética no processo, e o artigo sobre <a href="/artigos/ia-para-video-criar-avatar-digital-que-fala-por-voce">avatar digital que fala por você</a> mostra o passo seguinte, com vídeo.</p>

    <p>Não use voz sintética em podcast de opinião, entrevista ou qualquer formato em que a audiência escolhe ouvir você. A conexão vem da hesitação, da risada fora de hora, do sotaque. Tirar isso tira o motivo de ouvir.</p>

    <p>Sobre clonar a própria voz: é legítimo e útil para corrigir uma frase sem regravar tudo. Mas leia os termos de uso, guarde o consentimento por escrito se a voz for de outra pessoa e avise a audiência quando um trecho for gerado. O artigo sobre <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">deepfakes e como proteger sua reputação</a> explica por que transparência aqui não é detalhe. O setor está se organizando em torno de licenciamento, como mostra a notícia sobre a <a href="/noticias/universal-music-elevenlabs-plataforma-ia-musical-licenciada">plataforma de música com IA da Universal e da ElevenLabs</a> construída com catálogo licenciado.</p>

    <div class="callout-box callout-bad"><span class="callout-label">Nunca faça</span><p>Clonar a voz de uma pessoa real sem autorização escrita, mesmo "só para teste" ou "de brincadeira". Além do risco jurídico, uma denúncia derruba sua conta e o seu canal junto.</p></div>

    <h2>Exemplo brasileiro: podcast de contabilidade com R$ 0 de investimento</h2>

    <p>Cena hipotética com números realistas. Rafael tem um escritório de contabilidade em Curitiba com 60 clientes MEI e pequenas empresas. Ele quer um podcast semanal de 15 minutos para atrair clientes e reduzir as mesmas perguntas no WhatsApp. Investimento no primeiro mês: R$ 0. Equipamento: o celular, o quarto e um par de fones com fio.</p>

    <p>Rotina semanal: 30 minutos de roteiro com o prompt acima no plano gratuito do Gemini ou do ChatGPT (o <a href="/artigos/ia-para-criadores-de-conteudo-videos-textos-e-artes">guia de IA para criadores de conteúdo</a> compara as opções), 20 minutos de gravação na terça à noite, 5 minutos no Adobe Podcast Enhance, 40 minutos de edição pelo texto no plano gratuito do Descript (que cobre 60 minutos de processamento por mês, suficiente para quatro episódios curtos) e 15 minutos para capítulos, título, descrição e upload. Total: pouco menos de duas horas por episódio.</p>

    <p>No terceiro mês, com oito episódios publicados e um trecho por semana no Instagram com legenda automática do CapCut, Rafael passa a receber duas ou três mensagens por semana de pessoas que chegaram pelo podcast. Só então assina o Descript Hobbyist (US$ 16 por mês no plano anual, verificado em 27/09/2026) para ter o Studio Sound e mais horas. O retorno depende do nicho, da constância e de quanto o conteúdo resolve problema real do ouvinte; o que o exemplo mostra é que o custo de começar é zero.</p>

    <h2>Erros comuns de quem usa IA para áudio</h2>

    <p><strong>Confiar na limpeza para consertar gravação ruim.</strong> IA remove ruído constante (ventilador, chiado). Não remove o cachorro latindo no meio da frase nem o eco de um cômodo vazio com azulejo. Grave bem primeiro.</p>

    <p><strong>Deixar a IA escrever o texto inteiro e ler.</strong> O ouvinte percebe em 30 segundos. Use a IA para estrutura e fale com as suas palavras.</p>

    <p><strong>Exagerar no efeito de limpeza.</strong> Voz "de robô" ou "dentro de uma lata" é sinal de intensidade alta demais. Reduza até soar como uma pessoa em uma sala normal.</p>

    <p><strong>Ignorar a transcrição.</strong> Ela é o índice do episódio e o texto que o Google lê. Publique junto do áudio. Quem faz isso bem pode até vender o serviço, como mostra o artigo sobre <a href="/artigos/como-ganhar-dinheiro-com-transcricao-e-legendagem-usando-ia">ganhar dinheiro com transcrição e legendagem</a>.</p>

    <p><strong>Pagar antes de publicar cinco episódios.</strong> A maioria dos podcasts para antes do décimo episódio. Use os planos gratuitos até ter certeza de que vai continuar.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Se quer estudar um tema antes de gravar, o NotebookLM gera uma conversa em áudio a partir dos seus documentos. Serve como pesquisa e como referência de ritmo, não como episódio para publicar. O guia sobre <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">Perplexity e NotebookLM</a> mostra como usar.</p></div>

    <h2>Grave o primeiro episódio esta semana</h2>

    <p>Não espere microfone novo nem nome perfeito para o programa. Escolha um assunto que você explica toda semana para clientes ou colegas, rode o prompt de roteiro, grave 15 minutos no celular e passe pelo Enhance Speech. O primeiro episódio vai ser mediano, e isso é normal: o que a IA para áudio elimina é a desculpa técnica, não a necessidade de praticar. Para ver o que mais dá para fazer com essas ferramentas, a categoria de <a href="/categoria/ferramentas">ferramentas de IA</a> reúne os guias de vídeo, design e automação.</p>
  `,
  faq: [
    {
      question: "IA para áudio funciona em português?",
      answer:
        "Sim. A transcrição do Descript cobre 25 idiomas, incluindo português, e a geração de voz da ElevenLabs e do Gemini 3.8 Flash TTS tem suporte a português brasileiro, que o Google destaca entre os idiomas com melhor desempenho no anúncio do modelo. A limpeza de ruído do Adobe Podcast Enhance Speech independe do idioma, porque trabalha com o som da voz, não com as palavras.",
    },
    {
      question: "Dá para fazer podcast com IA de graça?",
      answer:
        "Dá. Audacity é gratuito para gravar e cortar, o Adobe Podcast Enhance Speech limpa o ruído sem custo, o plano gratuito do Descript processa 60 minutos de mídia por mês e o da ElevenLabs libera 10 mil créditos mensais de voz sintética (valores verificados em 27/09/2026). Isso cobre quatro episódios curtos por mês. Pague só quando o volume ou a necessidade de Studio Sound justificar.",
    },
    {
      question: "Quanto custa a ElevenLabs por mês?",
      answer:
        "Em 27/09/2026, a página oficial listava o plano gratuito com 10 mil créditos mensais, o Starter a US$ 6 por mês com clonagem instantânea de voz, o Creator a US$ 22 por mês com clonagem profissional e o Pro a US$ 99 por mês. Os valores são em dólar, então o preço em reais varia com a cotação e inclui IOF no cartão. Consulte a página oficial antes de assinar, porque os planos mudam.",
    },
    {
      question: "Voz de IA ou voz real: qual usar no podcast?",
      answer:
        "Voz real para podcast de opinião, entrevista e qualquer formato em que a audiência escolhe ouvir você. Voz sintética para narração de curso, vídeo institucional, audiodescrição e conteúdo que muda com frequência, porque regravar vira questão de segundos. Se clonar a própria voz para corrigir trechos, avise a audiência; se a voz for de outra pessoa, tenha autorização por escrito.",
    },
    {
      question: "Preciso de microfone profissional para começar um podcast?",
      answer:
        "Não. Um celular a um palmo da boca, em um quarto com cortina e roupas (tecido absorve reverberação), com ventilador e geladeira desligados, produz gravação que a limpeza por IA deixa publicável. O que a IA não corrige é eco forte de cômodo vazio e ruídos pontuais no meio da frase, então o ambiente importa mais que o equipamento no início.",
    },
  ],
};
