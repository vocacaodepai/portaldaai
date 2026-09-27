import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-ganhar-dinheiro-com-transcricao-e-legendagem-usando-ia",
  title: "Transcrição e Legendagem com IA: Como Ganhar Dinheiro Revisando",
  seoTitle: "Transcrição e legendagem com IA: como ganhar dinheiro",
  excerpt:
    "Transcrição e legendagem com IA viraram serviço vendável: veja ferramentas, custo por minuto verificado, como precificar, prompts e onde achar clientes.",
  metaDescription:
    "Transcrição e legendagem com IA como renda extra: ferramentas, custo por minuto verificado, entrega em SRT, precificação e onde achar os primeiros clientes.",
  category: "monetizacao",
  date: "2026-09-17",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "video subtitles transcription editing",
  seed: 43,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA gera a transcrição bruta por centavos de dólar por minuto; o que o cliente paga é a revisão humana, a sincronia e o arquivo pronto para publicar.",
    "Precifique pelo seu tempo de revisão (em geral 2 a 4 minutos de trabalho por minuto de vídeo), não pelo custo da ferramenta.",
    "Os primeiros clientes estão perto: criadores de curso, podcasters, escolas e empresas que gravam treinamento e reunião.",
  ],
  sources: [
    { label: "OpenAI: guia de speech-to-text (limite de 25 MB, formatos e modelos)", url: "https://developers.openai.com/api/docs/guides/speech-to-text" },
    { label: "OpenAI: tabela de preços dos modelos de transcrição", url: "https://developers.openai.com/api/docs/pricing" },
    { label: "Ajuda do YouTube: formatos de legenda aceitos (SRT, VTT e outros)", url: "https://support.google.com/youtube/answer/2734698" },
    { label: "gov.br: o que você precisa saber antes de se tornar MEI", url: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/o-que-voce-precisa-saber-antes-de-se-tornar-um-mei" },
  ],
  content: `
    <p>Transcrição e legendagem com IA é um dos serviços mais simples de começar a vender: a ferramenta gera o texto bruto em minutos, você revisa ouvindo o áudio, ajusta a sincronia e entrega um arquivo SRT pronto para o YouTube, o curso ou o Instagram do cliente. O cliente paga pela revisão e pelo arquivo que funciona, não pela transcrição automática.</p>

    <p>Este guia mostra o que mudou com a IA, quais ferramentas usar, quanto custa gerar a base (com preço verificado), um passo a passo de entrega, uma forma de precificar sem chutar e os erros que fazem iniciantes perderem o cliente na segunda entrega.</p>

    <h2>Por que alguém paga por transcrição se a IA faz de graça?</h2>

    <p>Porque a transcrição automática erra justamente onde dói: nomes próprios, siglas, termos técnicos, duas pessoas falando ao mesmo tempo, sotaque carregado e áudio com ruído de ventilador. Em um vídeo institucional, uma aula paga ou uma entrevista, um nome errado na legenda parece descuido da marca. Quem contrata quer alguém que garanta que aquilo saiu certo.</p>

    <p>Tem ainda o trabalho que a IA não faz sozinha: quebrar as frases em blocos legíveis, segurar cada legenda na tela pelo tempo certo, decidir se um "né" fica ou sai, marcar quem está falando e exportar no formato que a plataforma do cliente aceita. A página de ajuda do YouTube lista mais de dez <a href="https://support.google.com/youtube/answer/2734698" rel="noopener noreferrer">formatos de legenda aceitos</a>, e o cliente raramente sabe qual quer. Você sabe, e isso vira serviço.</p>

    <p>O raciocínio é o mesmo de quem vende <a href="/artigos/como-ganhar-dinheiro-revisando-textos-com-ia">revisão de textos com apoio de IA</a>: a máquina entrega o rascunho, o profissional entrega o resultado. A diferença é que aqui a demanda vem embalada em vídeo.</p>

    <h2>Ferramentas para gerar a transcrição bruta</h2>

    <p>Para quem está começando, três caminhos resolvem a maior parte dos trabalhos.</p>

    <table>
      <thead>
        <tr><th>Caminho</th><th>Para que serve</th><th>Custo (verificado em 27/09/2026)</th></tr>
      </thead>
      <tbody>
        <tr><td>API de transcrição da OpenAI (whisper-1, gpt-transcribe)</td><td>Áudio de até 25 MB por arquivo, com marcação de tempo para legenda</td><td>De US$ 0,003 a US$ 0,006 por minuto, conforme o modelo</td></tr>
        <tr><td>Legenda automática de editores (CapCut, DaVinci Resolve)</td><td>Gera legenda direto no vídeo, boa para Reels e Shorts</td><td>Consulte a página oficial de cada editor</td></tr>
        <tr><td>Legenda automática do YouTube</td><td>Base gratuita para vídeos que o cliente já publicou</td><td>Gratuito no YouTube Studio</td></tr>
      </tbody>
    </table>

    <p>A <a href="https://developers.openai.com/api/docs/guides/speech-to-text" rel="noopener noreferrer">documentação de speech-to-text da OpenAI</a> indica o whisper-1 quando você precisa de marcação de tempo e legenda, e aceita mp3, mp4, m4a, wav e webm. Na <a href="https://developers.openai.com/api/docs/pricing" rel="noopener noreferrer">tabela de preços</a>, o whisper-1 custa US$ 0,006 por minuto e o gpt-4o-mini-transcribe, US$ 0,003 por minuto (verificado em 27/09/2026). Uma hora de áudio sai por menos de meio dólar, o que mostra onde não está o seu valor: no custo da ferramenta.</p>

    <p>Se mexer em API assusta, o guia de <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">IA para reuniões e transcrição</a> mostra ferramentas com interface pronta, e o artigo sobre <a href="/artigos/canva-capcut-e-ia-artes-e-videos-sem-saber-design">Canva, CapCut e IA</a> ensina a legenda automática do CapCut passo a passo. O mercado de áudio também está barateando rápido: a Alibaba <a href="/noticias/alibaba-qwen-audio-3-1-corta-precos-ate-95-por-cento">cortou em até 95% o preço de reconhecimento de fala</a> nos modelos Qwen Audio 3.1.</p>

    <h2>Passo a passo: da gravação ao arquivo SRT entregue</h2>

    <h3>1. Receba o arquivo certo</h3>
    <p>Peça o vídeo ou o áudio original, nunca o link do Instagram. Pergunte quantas pessoas falam, se há termos técnicos e peça uma lista de nomes e siglas que aparecem na gravação.</p>

    <h3>2. Gere a base com IA</h3>
    <p>Rode a transcrição na ferramenta escolhida. Se o arquivo passar de 25 MB, divida em partes com um editor gratuito. Salve a saída com marcação de tempo, porque é ela que vira legenda.</p>

    <h3>3. Revise ouvindo, não só lendo</h3>
    <p>Ouça em velocidade 1,25x com o texto ao lado e corrija nomes, números, pontuação e trechos que a IA "inventou" em cima de ruído. Marque com um símbolo tudo que ficou inaudível para perguntar ao cliente.</p>

    <h3>4. Ajuste a sincronia e a leitura</h3>
    <p>Legenda boa cabe em duas linhas curtas e fica na tela tempo suficiente para ler. Quebre frases longas, junte fragmentos de meio segundo e confira o início e o fim de cada bloco em um editor de legendas gratuito como o Subtitle Edit ou o Aegisub.</p>

    <h3>5. Exporte e entregue com checklist</h3>
    <ul class="checklist">
      <li>Arquivo SRT (e VTT, se o cliente usa site próprio) com o nome do vídeo</li>
      <li>Versão em texto corrido (DOCX ou Google Docs) para descrição, blog ou material de curso</li>
      <li>Lista dos trechos com dúvida e o que você assumiu em cada um</li>
      <li>Um vídeo curto ou captura mostrando a legenda aplicada</li>
    </ul>

    <h2>Como precificar sem chutar (exemplo com números)</h2>

    <p>Não existe tabela oficial de preço para esse serviço no Brasil, então desconfie de quem promete "o valor de mercado". O caminho honesto é partir do seu tempo. Em áudio limpo com uma pessoa falando, a revisão completa costuma tomar de 2 a 4 minutos de trabalho por minuto de vídeo; com duas vozes e ruído, mais. Meça nos seus três primeiros trabalhos e use a sua média.</p>

    <p>Cenário para ilustrar a conta: Mariana, em Curitiba, fecha com uma confeiteira que vende curso online a legendagem de 40 aulas de 8 minutos, 320 minutos no total. Ela quer ganhar R$ 40 por hora e mede que gasta 3 minutos de revisão por minuto de aula, ou seja, 16 horas de trabalho. Custo base: R$ 640. Ela cobra R$ 3,50 por minuto, R$ 1.120 pelo pacote, com entrega em duas semanas. A transcrição bruta das 320 minutos pelo whisper-1 custou cerca de US$ 1,92, uma fração do que ela recebeu.</p>

    <p>Repare no que está embutido: revisão humana, arquivo pronto e prazo. Deixe isso escrito na proposta, porque é o que separa seu serviço da legenda automática que a cliente consegue sozinha. O guia sobre <a href="/artigos/como-precificar-servicos-usando-ia-no-trabalho">como precificar serviços quando você usa IA</a> aprofunda a lógica de cobrar pelo resultado, não pela hora de máquina. E se o volume crescer, formalize: o portal do empreendedor do <a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/o-que-voce-precisa-saber-antes-de-se-tornar-um-mei" rel="noopener noreferrer">gov.br</a> informa que o MEI pode faturar até R$ 81 mil por ano, e emitir nota abre porta em empresa.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Cobre a mais por áudio ruim, múltiplos falantes e termos técnicos. Peça uma amostra de 2 minutos antes de fechar preço: é nela que você descobre se o trabalho vai levar o dobro do tempo.</p></div>

    <h2>Prompts que aceleram a revisão</h2>

    <p>Depois da transcrição bruta, um modelo de texto como ChatGPT, Claude ou Gemini ajuda na parte chata. Ele não substitui a escuta, mas corta tempo em pontuação, quebra de linhas e resumo. Cole o trecho e use prompts como estes.</p>

    <pre><code>Você é revisor de transcrições em português do Brasil. Abaixo está uma transcrição automática de uma aula de confeitaria. Corrija apenas pontuação, letras maiúsculas e erros óbvios de reconhecimento. Não reescreva frases, não remova vícios de linguagem e não invente palavras. Os nomes corretos são: Mariana Duarte, ganache, buttercream, Fondant. Devolva o texto revisado e, no fim, uma lista dos trechos em que ficou em dúvida.</code></pre>

    <pre><code>Transforme a transcrição abaixo em legendas no formato SRT. Regras: máximo de 2 linhas por legenda, até 42 caracteres por linha, cada legenda entre 1 e 6 segundos na tela, não separe nome de sobrenome nem número da sua unidade. Mantenha as marcações de tempo originais como referência e ajuste só o que for necessário para respeitar as regras.</code></pre>

    <pre><code>A partir desta transcrição de um episódio de podcast de 45 minutos, escreva: 1) uma descrição de até 120 palavras para o YouTube, 2) oito capítulos com minutagem no formato 00:00, 3) cinco frases curtas do convidado que funcionem como legenda de post. Use apenas o que está no texto, sem acrescentar informação.</code></pre>

    <p>Esse terceiro prompt é o que transforma um serviço de R$ 3 por minuto em um pacote: legenda, descrição, capítulos e cortes. Quem quer aprender a escrever comandos melhores encontra a base no guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a>. Só cuidado com o que você cola: áudio de reunião interna de empresa é dado sensível, e o artigo sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> explica o que checar antes de subir arquivos de clientes em qualquer ferramenta.</p>

    <h2>Onde encontrar os primeiros clientes</h2>

    <p>Comece por quem já grava e sofre com isso. Produtores de curso online precisam de legenda e transcrição por acessibilidade e por material complementar; o guia sobre <a href="/artigos/como-criar-e-vender-curso-online-usando-ia">criar e vender curso online com IA</a> mostra o tamanho desse trabalho. Podcasters querem transformar episódio em texto, e quem produz <a href="/artigos/ia-para-audio-criar-podcasts-e-narracoes-profissionais">podcasts e narrações com IA</a> costuma ter dezenas de episódios acumulados sem transcrição.</p>

    <p>Outros três grupos costumam pagar rápido: empresas que gravam treinamento interno e reunião com cliente, igrejas e escolas que publicam pregações e aulas, e criadores que vivem de <a href="/artigos/como-ganhar-dinheiro-criando-videos-curtos-com-ia">vídeos curtos para redes sociais</a> e precisam de legenda queimada em cada corte. Se o cliente atende público de fora, ofereça a legenda traduzida como adicional; o artigo sobre <a href="/artigos/como-atender-clientes-em-varios-idiomas-usando-ia">atender clientes em vários idiomas com IA</a> mostra como revisar tradução automática com segurança.</p>

    <p>Para ser encontrado, publique um antes e depois: um trecho de 30 segundos com a legenda automática crua e o mesmo trecho com a sua revisão. O guia sobre <a href="/artigos/como-construir-autoridade-em-ia-no-linkedin-sem-ser-tecnico">construir autoridade no LinkedIn sem ser técnico</a> explica como postar isso sem parecer propaganda.</p>

    <h2>Erros comuns de quem está começando</h2>

    <p><strong>Entregar a transcrição bruta com um verniz.</strong> O cliente compara com a legenda automática do YouTube, vê os mesmos erros e não volta. Se não deu tempo de ouvir tudo, avise e cobre menos.</p>

    <p><strong>Cobrar por hora de trabalho.</strong> Cobre por minuto de vídeo entregue e ganhe com a sua eficiência.</p>

    <p><strong>Aceitar qualquer áudio pelo mesmo preço.</strong> Gravação de celular em restaurante leva o dobro do tempo. Amostra antes, preço depois.</p>

    <p><strong>Ignorar acessibilidade.</strong> Legenda para pessoa surda inclui marcação de sons relevantes, como [risos] e [música]. Ofereça como opção e cobre por isso.</p>

    <p><strong>Não guardar um glossário por cliente.</strong> Nomes, produtos e siglas de cada cliente em um arquivo simples fazem a segunda entrega sair na metade do tempo. É assim que o <a href="/artigos/freelancer-na-era-da-ia-como-se-tornar-insubstituivel">freelancer se torna difícil de substituir</a>: o conhecimento do cliente fica com você.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Quando não usar IA na base: áudio jurídico ou médico com sigilo contratual, em que o cliente não autoriza envio a serviço externo. Nesse caso, use ferramenta que roda no seu computador ou transcreva do jeito antigo e cobre por isso.</p></div>

    <p>Transcrição e legendagem com IA não vai deixar ninguém rico, e nem precisa. É um serviço concreto, com demanda perto de você, custo de ferramenta quase zero e entrada fácil para quem tem ouvido atento e cuidado com texto. Faça a conta do seu tempo, monte o antes e depois e ofereça para o primeiro criador que você acompanha. Para comparar com outros caminhos, o guia com <a href="/artigos/10-formas-de-ganhar-dinheiro-com-inteligencia-artificial">10 formas de ganhar dinheiro com inteligência artificial</a> coloca este e outros serviços lado a lado.</p>
  `,
  faq: [
    {
      question: "Transcrição com IA é confiável para legendar vídeo profissional?",
      answer:
        "Como base, sim. Ferramentas como o whisper-1 da OpenAI geram texto com marcação de tempo em minutos. O problema aparece em nomes próprios, siglas, termos técnicos e áudio com ruído, onde a taxa de erro sobe. Por isso o serviço vendável é a revisão humana ouvindo o áudio, com ajuste de sincronia e exportação no formato que a plataforma do cliente aceita.",
    },
    {
      question: "Quanto custa transcrever uma hora de áudio com IA?",
      answer:
        "Na tabela de preços da OpenAI, verificada em 27/09/2026, o whisper-1 custa US$ 0,006 por minuto e o gpt-4o-mini-transcribe, US$ 0,003 por minuto. Uma hora de áudio sai entre US$ 0,18 e US$ 0,36. Editores como CapCut e o YouTube Studio geram legenda automática sem cobrar à parte. O custo real do serviço é o seu tempo de revisão, não a ferramenta.",
    },
    {
      question: "Quanto cobrar por minuto de legendagem?",
      answer:
        "Não existe tabela oficial no Brasil. Parta do seu tempo: meça quantos minutos de revisão gasta por minuto de vídeo (em áudio limpo, costuma ficar entre 2 e 4) e multiplique pelo valor que quer ganhar por hora. No exemplo do artigo, R$ 40 por hora e 3 minutos de revisão por minuto de vídeo dão um piso de R$ 2 por minuto, e o preço final ficou em R$ 3,50 com prazo e formatos incluídos.",
    },
    {
      question: "Que formato de legenda devo entregar ao cliente?",
      answer:
        "SRT é o mais aceito e o que a ajuda do YouTube recomenda para iniciantes. VTT serve para sites e players próprios. Para Reels, Shorts e TikTok, o cliente geralmente quer a legenda queimada no vídeo, o que você faz no CapCut ou no DaVinci Resolve. Pergunte onde o vídeo vai ser publicado antes de exportar e entregue mais de um formato quando houver dúvida.",
    },
    {
      question: "Preciso de CNPJ para vender transcrição e legendagem?",
      answer:
        "Para os primeiros trabalhos com pessoas físicas, não. Quando começar a atender empresas, elas costumam pedir nota fiscal, e o MEI resolve isso com pouca burocracia. Segundo o portal do empreendedor do gov.br, o MEI pode faturar até R$ 81 mil por ano e precisa exercer uma ocupação permitida. Confira a lista de ocupações antes de abrir.",
    },
  ],
};
