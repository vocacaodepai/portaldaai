import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ia-para-video-criar-avatar-digital-que-fala-por-voce",
  title: "IA para vídeo: como criar um avatar digital que fala por você",
  seoTitle: "Avatar digital com IA: como criar vídeos sem aparecer",
  excerpt:
    "IA para vídeo: veja como criar um avatar digital que fala por você com HeyGen ou Synthesia, quanto custa o plano, como escrever o roteiro e quando não usar.",
  metaDescription:
    "IA para vídeo na prática: como criar um avatar digital que apresenta seu roteiro, preços verificados do HeyGen e Synthesia, prompts prontos e regras de aviso.",
  category: "ferramentas",
  date: "2026-09-20",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "digital avatar video talking",
  seed: 56,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Um avatar digital de IA transforma um roteiro escrito em vídeo com apresentador, voz e sincronia labial, sem câmera nem estúdio.",
    "HeyGen e Synthesia têm plano gratuito para testar e planos pagos a partir de US$ 29 por mês, com limites de minutos ou créditos.",
    "O avatar funciona bem em aula, treinamento e vídeo de apoio; para construir marca pessoal, aparecer de verdade ainda rende mais.",
  ],
  sources: [
    { label: "HeyGen: planos e preços", url: "https://www.heygen.com/pricing" },
    { label: "Synthesia: planos e preços", url: "https://www.synthesia.io/pricing" },
    {
      label: "YouTube: divulgação de conteúdo alterado ou sintético",
      url: "https://support.google.com/youtube/answer/14328491",
    },
  ],
  content: `
    <p>IA para vídeo já permite criar um avatar digital que fala por você: você escreve o roteiro, escolhe um rosto e uma voz, e a ferramenta gera um apresentador com boca e expressão sincronizadas. HeyGen e Synthesia fazem isso em minutos, a partir de planos gratuitos, e o resultado serve para aula, treinamento, anúncio e vídeo de apoio ao cliente.</p>

    <p>Este guia mostra como o processo funciona na prática, quanto custa cada plano (com preços conferidos na página oficial), como escrever um roteiro que soa natural em português, onde o avatar rende e onde ele afasta o público. Também entra o lado legal, porque plataformas como o YouTube já exigem aviso quando o vídeo simula uma pessoa real.</p>

    <h2>O que é um avatar digital de IA e como ele funciona</h2>
    <p>Um avatar digital é um apresentador gerado por computador. Ele pode ser um personagem de estoque da ferramenta (dezenas de rostos, idades e estilos) ou uma cópia sua, criada a partir de um vídeo curto gravado com o celular.</p>
    <p>O fluxo tem três camadas. A primeira é o texto: você cola o roteiro no editor. A segunda é a voz: uma voz sintética lê o texto, ou você grava o áudio e a ferramenta usa a sua voz. A terceira é o vídeo: o modelo gera os movimentos de boca, olhos e cabeça em cima da voz, e junta tudo com fundo, legenda e slides. O mesmo princípio de gerar fala aparece no guia de <a href="/artigos/ia-para-audio-criar-podcasts-e-narracoes-profissionais">IA para áudio e narrações</a>; aqui a diferença é que a voz ganha um rosto.</p>
    <p>O Google já mostrou um <a href="/noticias/google-gemini-3-8-live-avatar-video-tempo-real-97-idiomas">avatar em vídeo que conversa em tempo real em 97 idiomas</a>, sinal de para onde isso vai. Para quem produz conteúdo hoje, porém, o uso concreto continua sendo o vídeo gravado a partir de roteiro.</p>

    <h2>Quais ferramentas criam avatar digital (e quanto custam)</h2>
    <p>As duas ferramentas mais usadas por quem não é técnico são o HeyGen e o Synthesia. As duas têm interface em navegador, vozes em português do Brasil e plano gratuito para você testar antes de pagar. A tabela abaixo resume os planos de entrada, com preços verificados em 27/09/2026 nas páginas de planos do <a href="https://www.heygen.com/pricing" rel="noopener noreferrer">HeyGen</a> e do <a href="https://www.synthesia.io/pricing" rel="noopener noreferrer">Synthesia</a> (os valores são em dólar e mudam com frequência; confira antes de assinar).</p>
    <table>
      <thead>
        <tr><th>Ferramenta e plano</th><th>Preço mensal</th><th>O que entrega</th></tr>
      </thead>
      <tbody>
        <tr><td>HeyGen Free</td><td>US$ 0</td><td>3 vídeos por mês de até 1 minuto, 1 avatar personalizado</td></tr>
        <tr><td>HeyGen Creator</td><td>US$ 29 (US$ 24 no anual)</td><td>600 créditos por mês, vídeos de até 30 minutos, exportação em 1080p, clonagem de voz</td></tr>
        <tr><td>Synthesia Basic</td><td>US$ 0</td><td>10 minutos de vídeo por mês, sem cartão, sem download do vídeo gerado (só visualização na plataforma)</td></tr>
        <tr><td>Synthesia Starter</td><td>US$ 29 (US$ 18 no anual)</td><td>10 minutos por mês (120 por ano no anual)</td></tr>
        <tr><td>Synthesia Creator</td><td>US$ 89 (US$ 64 no anual)</td><td>30 minutos por mês (360 por ano no anual)</td></tr>
      </tbody>
    </table>
    <p>Repare na diferença de lógica: o Synthesia cobra por minuto de vídeo gerado, e o HeyGen cobra por crédito, cujo consumo varia com o modelo de IA e a duração. Antes de escolher, faça a conta com o volume que você pretende produzir por mês. A <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA</a> ajuda a conferir também os termos de uso e o que acontece com seus dados.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Os preços são em dólar e, no cartão brasileiro, entram câmbio do dia e IOF. Considere isso ao comparar com uma gravação tradicional.</p></div>

    <h2>Passo a passo: do roteiro ao vídeo pronto</h2>
    <h3>1. Escreva o roteiro para ser ouvido, não lido</h3>
    <p>Avatar lê exatamente o que está no texto. Frases longas, siglas e parênteses viram fala travada. Escreva como você explicaria em voz alta para um cliente: frases curtas, uma ideia por frase, números por extenso quando forem pequenos. Um prompt que funciona bem no ChatGPT, Claude ou Gemini:</p>
    <pre><code>Transforme o texto abaixo em um roteiro falado de 90 segundos para um vídeo com apresentador. Regras: frases de no máximo 15 palavras, português do Brasil coloquial, sem siglas sem explicação, sem listas. Comece com a dúvida que o espectador tem e termine com uma orientação prática. Texto: [cole aqui]</code></pre>
    <h3>2. Escolha avatar, voz e cenário</h3>
    <p>Teste pelo menos duas vozes em português antes de decidir; a diferença de naturalidade entre elas é grande. Se for usar um avatar seu, grave o vídeo de referência com boa luz de frente, fundo neutro e sem óculos escuros. Ajuste a velocidade da fala para algo um pouco abaixo do padrão: voz sintética rápida cansa.</p>
    <h3>3. Gere, revise e corrija as pronúncias</h3>
    <p>Assista ao vídeo inteiro uma vez só olhando a boca e outra só ouvindo. Nomes próprios, marcas e palavras em inglês costumam sair errado; as ferramentas permitem escrever a pronúncia foneticamente. Peça também uma revisão do texto com este prompt:</p>
    <pre><code>Leia este roteiro como um revisor de vídeo. Aponte: palavras que uma voz sintética em português tende a pronunciar errado, frases ambíguas ao ouvir sem ler, e trechos onde falta uma pausa. Devolva o roteiro corrigido com marcações de pausa entre colchetes. Roteiro: [cole aqui]</code></pre>
    <h3>4. Adicione legenda e corte para cada rede</h3>
    <p>Legenda aumenta o alcance de qualquer vídeo, e as ferramentas geram a transcrição automaticamente. Para ajustar formato (vertical para Reels e TikTok, horizontal para YouTube) e inserir capa, o fluxo do guia de <a href="/artigos/canva-capcut-e-ia-artes-e-videos-sem-saber-design">Canva e CapCut com IA</a> resolve sem precisar de editor profissional.</p>

    <h2>Exemplo brasileiro: escritório contábil que virou canal de dúvidas</h2>
    <p>Cenário ilustrativo, com números redondos para você adaptar. Um escritório de contabilidade em Campinas atende 140 pequenas empresas e recebe todo mês as mesmas perguntas sobre MEI, notas fiscais e prazos. A sócia não quer aparecer em vídeo e não tem tempo de gravar. A solução foi um avatar apresentando 12 vídeos por mês de 2 minutos e meio cada, o que dá 30 minutos, exatamente o limite do Synthesia Creator mensal (US$ 89 por mês, verificado em 27/09/2026).</p>
    <p>O processo semanal ficou assim: segunda, a sócia dita três dúvidas em áudio no WhatsApp; a assistente transforma em roteiro com o prompt da seção anterior; quarta, gera os três vídeos e revisa; sexta, publica no YouTube e manda o link para os clientes por e-mail. Tempo total: cerca de 3 horas por semana da assistente, contra uma manhã inteira por vídeo quando tentaram gravar com celular.</p>
    <p>O retorno não é só economia de tempo. Os vídeos reduziram perguntas repetidas no atendimento e deram base para um curso curto, seguindo o caminho descrito em <a href="/artigos/como-criar-e-vender-curso-online-usando-ia">como criar e vender um curso online usando IA</a>.</p>

    <h2>Onde o avatar rende mais (e onde ele afasta o público)</h2>
    <p>O avatar resolve um problema específico: produzir vídeo falado com frequência, sem depender da disponibilidade e da vontade de alguém de aparecer. Ele rende quando o valor está na informação e não na pessoa. Um treinamento interno que muda todo trimestre, um tutorial de produto, um aviso de mudança de prazo, uma aula técnica: tudo isso funciona.</p>
    <ul class="checklist">
      <li>Treinamento interno e integração de funcionários, com atualização frequente.</li>
      <li>Tutoriais e vídeos de suporte que hoje viram textos longos por e-mail.</li>
      <li>Versões do mesmo vídeo em vários idiomas, sem regravar, como no guia de <a href="/artigos/como-atender-clientes-em-varios-idiomas-usando-ia">atendimento em vários idiomas com IA</a>.</li>
      <li>Vídeos curtos de conteúdo informativo para redes, no ritmo que a <a href="/artigos/ia-para-redes-sociais-criar-agendar-analisar-posts">rotina de redes sociais com IA</a> pede.</li>
      <li>Apresentações gravadas para propostas e aulas, complementando o guia de <a href="/artigos/como-criar-apresentacoes-e-slides-profissionais-com-ia">slides e apresentações com IA</a>.</li>
    </ul>
    <p>Ele afasta quando o público está ali pela pessoa. Marca pessoal, depoimento, storytelling emocional, venda de alto valor por confiança: nesses casos, um vídeo tremido com você de verdade costuma converter mais do que um apresentador perfeito. Quem vive de <a href="/artigos/como-ganhar-dinheiro-criando-videos-curtos-com-ia">vídeos curtos para redes sociais</a> pode usar o avatar em conteúdo informativo e reservar a própria câmera para o que exige presença.</p>

    <h2>Transparência, direito de imagem e regras das plataformas</h2>
    <p>Aqui não há espaço para improviso. O YouTube exige que o criador marque, no envio, quando o vídeo faz uma pessoa real parecer dizer ou fazer algo que não fez, ou quando gera uma cena realista que não aconteceu; a plataforma aplica um aviso visível e pode remover conteúdo ou suspender a monetização de quem esconde isso repetidamente, segundo a <a href="https://support.google.com/youtube/answer/14328491" rel="noopener noreferrer">política de divulgação de conteúdo alterado ou sintético do YouTube</a>. Usar um avatar seu falando o seu próprio roteiro é um caso simples; usar o rosto de outra pessoa sem autorização escrita não é.</p>
    <p>A regulação está chegando pelo lado da publicidade também. A Califórnia aprovou uma <a href="/noticias/california-lei-sb-1050-divulgacao-performer-sintetico-anuncios">lei que exige aviso claro quando um anúncio usa performer sintético</a>, e é razoável esperar movimentos parecidos em outros mercados. Do lado do público, o guia sobre <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">deepfakes e como proteger sua reputação</a> explica por que a desconfiança com rostos sintéticos está crescendo.</p>
    <p>Regra prática: coloque uma frase na descrição e, se possível, uma marca discreta no próprio vídeo ("apresentado por avatar de IA"). Guarde a autorização de uso de imagem de qualquer pessoa clonada, mesmo funcionário. E leia como a ferramenta trata o vídeo de referência que você envia, tema que o artigo sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> detalha.</p>
    <div class="callout-box callout-bad"><span class="callout-label">Nunca faça</span><p>Clonar rosto ou voz de cliente, concorrente ou pessoa pública sem autorização por escrito. Além do risco de remoção, isso é caso de indenização por uso indevido de imagem.</p></div>

    <h2>Erros comuns ao criar vídeo com avatar</h2>
    <p>O primeiro erro é colar um texto de blog e mandar gerar. Sai um vídeo de 8 minutos com voz monótona que ninguém assiste até o fim. Corte para 60 a 120 segundos e deixe o restante para um artigo ou um PDF. O segundo é ignorar a pronúncia: um nome de produto falado errado destrói a credibilidade em três segundos.</p>
    <p>O terceiro é usar o avatar como enfeite de um vídeo que deveria ser só slide com narração; se não há motivo para um rosto na tela, a narração em áudio custa menos e distrai menos. O quarto é esquecer a legenda e a transcrição, que servem também para gerar cortes e legendas em outros idiomas, como mostra o guia de <a href="/artigos/como-ganhar-dinheiro-com-transcricao-e-legendagem-usando-ia">transcrição e legendagem com IA</a>. O quinto é não medir: publique dois vídeos sobre o mesmo tema, um com avatar e outro com você, e compare retenção antes de decidir o formato do canal.</p>
    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Comece pelo plano gratuito com um vídeo de 60 segundos sobre a dúvida mais frequente do seu negócio. Se a resposta do público for boa, aí sim assine.</p></div>

    <p>Avatar digital é ferramenta de produção, não de personalidade. Use para escalar informação e reserve sua presença para o que só você pode dar. Se a ideia é montar um fluxo completo, do roteiro à publicação, o guia de <a href="/artigos/ia-para-criadores-de-conteudo-videos-textos-e-artes">IA para criadores de conteúdo</a> mostra as demais peças, e a categoria de ferramentas do Portal da AI tem os comparativos de cada uma.</p>
  `,
  faq: [
    {
      question: "Avatar digital com IA funciona em português?",
      answer:
        "Sim. HeyGen e Synthesia oferecem vozes em português do Brasil e sincronizam os lábios com o áudio em qualquer idioma suportado. A naturalidade varia bastante entre vozes, então teste pelo menos duas antes de decidir. Nomes próprios, siglas e palavras em inglês podem sair errado; as ferramentas permitem escrever a pronúncia foneticamente para corrigir.",
    },
    {
      question: "Quanto custa criar um avatar digital que fala por você?",
      answer:
        "Dá para testar de graça: o HeyGen Free gera 3 vídeos de até 1 minuto por mês e o Synthesia Basic dá 10 minutos mensais, sem download do vídeo gerado. Os planos pagos de entrada custam US$ 29 por mês nas duas ferramentas, com desconto no anual (verificado em 27/09/2026). No cartão brasileiro entram câmbio e IOF, então consulte a página oficial antes de assinar.",
    },
    {
      question: "Preciso avisar que o vídeo usa avatar de IA?",
      answer:
        "No YouTube, sim, quando o conteúdo é realista e simula uma pessoa dizendo algo que ela não disse ou uma cena que não aconteceu; a plataforma aplica um aviso e pode punir quem esconde isso. Mesmo fora dessa regra, avisar na descrição protege sua credibilidade. Para clonar rosto ou voz de outra pessoa, tenha autorização por escrito.",
    },
    {
      question: "Avatar de IA ou gravar com o celular: o que é melhor?",
      answer:
        "Depende do papel do vídeo. Para treinamento, tutorial, aviso e conteúdo informativo em volume, o avatar ganha em tempo e consistência. Para marca pessoal, depoimento e venda que depende de confiança, aparecer de verdade costuma converter mais. Muitos criadores misturam: avatar para o conteúdo recorrente e câmera para o que exige presença.",
    },
    {
      question: "Dá para criar um avatar com o meu próprio rosto?",
      answer:
        "Sim. As ferramentas pedem um vídeo curto gravado com o celular, com luz de frente, fundo neutro e sem acessórios que cubram o rosto, e criam um avatar seu. No HeyGen, até o plano gratuito inclui 1 avatar personalizado (verificado em 27/09/2026). Leia os termos sobre o que a empresa faz com o vídeo de referência antes de enviar.",
    },
  ],
};
