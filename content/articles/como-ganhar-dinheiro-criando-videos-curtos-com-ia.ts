import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-ganhar-dinheiro-criando-videos-curtos-com-ia",
  title: "Vídeos curtos com IA: como ganhar dinheiro produzindo Reels",
  seoTitle: "Vídeos curtos com IA: como ganhar dinheiro com Reels",
  excerpt:
    "Vídeos curtos com IA: como ganhar dinheiro produzindo Reels, Shorts e TikToks para negócios locais, com ferramentas e preços verificados, prompts e pacotes.",
  metaDescription:
    "Como ganhar dinheiro criando vídeos curtos com IA: ferramentas com preço verificado (CapCut, HeyGen, ElevenLabs), prompts de roteiro, pacotes e exemplo.",
  category: "monetizacao",
  articleSubcategory: "conteudo-e-midia",
  date: "2026-09-26",
  updated: "2026-09-27",
  readTime: 8,
  imageQuery: "short video content creator phone editing",
  seed: 87,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Ganhar dinheiro criando vídeos curtos com IA funciona melhor vendendo pacotes mensais de Reels, Shorts e TikToks para negócios locais que não têm tempo de gravar; vídeo avulso vira pechincha.",
    "Roteiro, legenda, narração e avatar saem de ferramentas com plano gratuito ou de entrada barato: CapCut, HeyGen (Creator a US$ 29/mês) e ElevenLabs (Starter a US$ 6/mês), preços verificados em 27/09/2026.",
    "Conteúdo realista gerado por IA (avatar, voz clonada) precisa ser sinalizado no YouTube e recebe rótulo na Meta; a regra faz parte da entrega e o cliente precisa saber.",
  ],
  content: `
    <p>Ganhar dinheiro criando vídeos curtos com IA funciona de duas formas: produzindo Reels, Shorts e TikToks para pequenas empresas que não têm tempo de gravar, ou crescendo um perfil próprio que depois vende produto, patrocínio ou serviço. Este guia cobre ferramentas com preço verificado, prompts de roteiro, pacotes, um exemplo com números e as regras de sinalização de conteúdo feito com IA.</p>

    <p>O trabalho mudou de lugar. Antes, o gargalo era câmera, luz e horas de edição. Hoje o roteiro sai em minutos, a legenda é automática, a narração pode ser sintética e um avatar pode falar por você. O gargalo virou gosto, constância e entender o negócio do cliente. É aí que você cobra.</p>

    <h2>Vídeos curtos com IA: o que dá para produzir sem equipe?</h2>
    <p>Um vídeo vertical de 20 a 60 segundos com gancho nos primeiros dois segundos, três pontos rápidos e uma chamada para ação no final. Com IA, cada etapa tem uma ferramenta: roteiro (ChatGPT, Claude ou Gemini), edição e legenda (CapCut, Canva), voz (ElevenLabs ou a narração nativa do CapCut) e avatar (HeyGen). O guia de <a href="/artigos/canva-capcut-e-ia-artes-e-videos-sem-saber-design">Canva, CapCut e IA para quem não sabe design</a> ensina o básico da edição.</p>
    <p>Quatro formatos vendem bem para negócio local: "3 erros que o cliente comete" (educativo), bastidor do produto sendo feito, resposta a uma pergunta frequente e depoimento reescrito como roteiro curto. Nenhum precisa do dono aparecendo, que é o que ele mais pede. Quando o cliente quer rosto sem gravar, entra o <a href="/artigos/ia-para-video-criar-avatar-digital-que-fala-por-voce">avatar digital que fala por você</a>; quando quer só voz, a <a href="/artigos/ia-para-audio-criar-podcasts-e-narracoes-profissionais">narração feita com IA</a>.</p>

    <h2>Ferramentas e quanto custam</h2>
    <p>Preços conferidos nas páginas oficiais em 27/09/2026. Mudam com frequência, e vários planos cobram em dólar.</p>
    <table>
      <thead>
        <tr><th>Ferramenta</th><th>Função</th><th>Plano gratuito</th><th>Plano pago de entrada</th></tr>
      </thead>
      <tbody>
        <tr><td>CapCut</td><td>Edição, legenda automática, voz sintética</td><td>Sim, com recursos básicos</td><td>Consulte a página oficial</td></tr>
        <tr><td>HeyGen</td><td>Avatar digital falando o roteiro</td><td>3 vídeos por mês de até 1 minuto, com marca d'água</td><td>Creator, US$ 29/mês</td></tr>
        <tr><td>ElevenLabs</td><td>Narração em português com voz natural</td><td>10 mil créditos por mês</td><td>Starter, US$ 6/mês; Creator, US$ 22/mês</td></tr>
        <tr><td>ChatGPT, Claude ou Gemini</td><td>Roteiro, ganchos, variações</td><td>Sim</td><td>Consulte a página oficial</td></tr>
      </tbody>
    </table>
    <p>Fontes: <a href="https://www.heygen.com/pricing" rel="noopener noreferrer">preços do HeyGen</a> e <a href="https://elevenlabs.io/pricing" rel="noopener noreferrer">preços do ElevenLabs</a>. Na conta do ElevenLabs, cada caractere de texto consome em geral um crédito, então o plano gratuito cobre uns 10 mil caracteres de narração por mês: dá para testar, não para atender cliente. Para começar, o custo realista de ferramentas fica entre zero e US$ 35 por mês, e a maior parte dos primeiros vídeos sai só com CapCut e um modelo de IA gratuito.</p>

    <h2>Roteiro em 10 minutos: prompts que funcionam</h2>
    <p>O roteiro é onde a IA mais economiza tempo e também onde o vídeo genérico nasce. A solução é alimentar o modelo com informação do negócio real: produto, preço, dúvida que os clientes fazem no balcão, jeito de falar do dono.</p>
    <pre><code>Você escreve roteiros de Reels para [tipo de negócio] em [cidade].
Contexto: [cole 5 frases sobre o negócio, o produto principal e a dúvida mais comum dos clientes].
Escreva 3 roteiros de 30 segundos, cada um com:
- gancho de no máximo 8 palavras nos 2 primeiros segundos;
- 3 frases curtas de desenvolvimento, faladas como o dono falaria;
- uma chamada final simples (comentar, mandar mensagem ou visitar).
Marque [TEXTO NA TELA] onde uma frase deve aparecer escrita.
Sem palavras como "imperdível", "surpreendente" ou "transforme".</code></pre>
    <pre><code>Aqui está um roteiro aprovado: [cole].
Gere 5 ganchos alternativos para o mesmo roteiro: um com pergunta, um com número, um com erro comum, um com "ninguém te conta", um com cena do cotidiano.
Depois escreva a legenda do post em até 150 caracteres e 5 hashtags locais.</code></pre>
    <p>Mais técnicas de pedido bem feito estão em <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering: comandos que funcionam</a>. Guarde os roteiros aprovados em uma pasta por cliente: em dois meses você terá um banco de ganchos que a IA usa como referência de estilo, e o segundo mês de produção sai mais rápido que o primeiro.</p>

    <h2>Como vender: pacotes mensais, não vídeo avulso</h2>
    <p>Vídeo avulso vira pechincha. Pacote mensal cria previsibilidade para você e resultado acumulado para o cliente, que só aparece depois de 20 ou 30 vídeos publicados.</p>
    <table>
      <thead>
        <tr><th>Pacote</th><th>Entrega mensal</th><th>Indicado para</th></tr>
      </thead>
      <tbody>
        <tr><td>Básico</td><td>4 vídeos com roteiro, legenda e capa</td><td>Loja, salão, restaurante local</td></tr>
        <tr><td>Intermediário</td><td>8 vídeos, edição com trilha, 2 variações de gancho, agendamento</td><td>Clínica, escola, e-commerce pequeno</td></tr>
        <tr><td>Avançado</td><td>12 a 20 vídeos, avatar ou narração, relatório mensal de desempenho</td><td>Infoprodutor, franquia, criador em crescimento</td></tr>
      </tbody>
    </table>
    <p>O agendamento e o relatório saem de ferramentas descritas em <a href="/artigos/ia-para-redes-sociais-criar-agendar-analisar-posts">IA para redes sociais: criar, agendar e analisar</a>. Para achar clientes, comece pelos negócios que você já frequenta e mostre 3 vídeos feitos para eles, de graça, antes de propor o pacote. O argumento de venda é o de <a href="/artigos/como-usar-ia-para-vender-mais-no-seu-negocio-local">vender mais no negócio local usando IA</a>: mais gente entrando pela porta, não "presença digital".</p>
    <h3>Quanto cobrar</h3>
    <p>Cobre pelo resultado e pela constância, não pela hora. A IA reduz o tempo de produção, e essa diferença é margem sua. Uma referência de raciocínio: se o pacote básico toma 6 horas por mês e você quer R$ 60 líquidos por hora, o piso é R$ 360 mais ferramentas e impostos; a maioria fecha acima disso porque o cliente compara com agência, não com hora. O guia de <a href="/artigos/como-precificar-servicos-usando-ia-no-trabalho">precificar serviços usando IA</a> ajuda a montar a tabela.</p>

    <h2>Exemplo brasileiro: 4 clientes em uma cidade média</h2>
    <p>Cenário de análise. Uma estudante de Londrina fecha três pacotes básicos (4 vídeos por mês cada) com uma ótica, uma pizzaria e uma clínica de estética, a R$ 500 cada, e um intermediário com uma escola de inglês a R$ 1.100. Receita bruta: R$ 2.600 por mês. Ferramentas: CapCut gratuito, ChatGPT gratuito e ElevenLabs Starter (US$ 6, algo perto de R$ 35 dependendo da cotação do dia) para as narrações da escola. Como MEI, paga o DAS mensal e emite nota para os quatro.</p>
    <p>Tempo: 20 vídeos por mês, em média 45 minutos cada entre roteiro, edição e ajuste, mais 4 horas de reunião e captação de material bruto com celular. São umas 19 horas no mês, algo perto de R$ 135 por hora bruta. O número cai se o cliente pede refação demais, e por isso a proposta limita a duas rodadas de ajuste por vídeo. O ganho por hora é o argumento para se organizar como <a href="/artigos/freelancer-na-era-da-ia-como-se-tornar-insubstituivel">freelancer insubstituível na era da IA</a>: quem entende o cliente cobra mais do que quem só aperta botão.</p>

    <h2>Sinalização de IA: o que as plataformas exigem</h2>
    <p>Isso faz parte da entrega, e o cliente precisa saber. O YouTube exige que o criador informe, no envio, quando o vídeo contém conteúdo realista gerado ou alterado por IA, como uma pessoa real dizendo algo que não disse ou uma cena realista que não aconteceu; a plataforma afirma que a sinalização não limita alcance nem monetização, mas quem omite repetidamente pode ter vídeo removido, segundo a <a href="https://support.google.com/youtube/answer/14328491" rel="noopener noreferrer">central de ajuda do YouTube</a>. A Meta aplica o rótulo de informações de IA no Facebook e no Instagram quando detecta indicadores padrão de IA ou quando o autor declara, conforme o <a href="https://about.fb.com/news/2024/04/metas-approach-to-labeling-ai-generated-content-and-manipulated-media/" rel="noopener noreferrer">comunicado oficial da Meta</a>. Confira a regra de cada rede antes de publicar, porque elas mudam.</p>
    <p>Na prática: avatar e voz clonada do dono são sinalizados; legenda automática, corte e correção de cor não precisam. Nunca use a voz ou o rosto de alguém sem autorização por escrito, e leia <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">deepfakes: como proteger sua reputação</a> antes de oferecer clonagem de voz a qualquer cliente.</p>

    <h2>Erros comuns de quem começa</h2>
    <div class="callout-box callout-bad">
      <span class="callout-label">Nunca faça</span>
      <p>Entregar roteiro que a IA gerou sem uma informação real do negócio. O cliente reconhece o texto genérico na hora, e o público também. Cada vídeo precisa de um dado, um preço, uma frase que só aquele dono diria.</p>
    </div>
    <p>Outros erros: prometer viralização (ninguém controla isso), aceitar refação ilimitada, usar música sem licença, não pedir material bruto do cliente (fotos e vídeos do produto real valem mais que qualquer banco de imagens) e depender de uma única ferramenta que pode mudar de preço. O hábito de aceitar a primeira resposta da IA sem ajustar aparece em <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">5 erros comuns de quem começa a usar IA</a> e vale dobrado aqui.</p>
    <div class="callout-box callout-ok">
      <span class="callout-label">Sinal de que vale</span>
      <p>Se você já edita vídeo por hobby ou conhece 2 ou 3 negócios na sua rua, o caminho até o primeiro pacote é de semanas, não de meses.</p>
    </div>

    <h2>Quando não usar IA no vídeo (ou não vender esse serviço)</h2>
    <p>Não use avatar para negócios em que a confiança depende do rosto real: médico, advogado, terapeuta. Nesses casos, grave o dono com celular e use a IA só em roteiro e legenda. Não venda o serviço se você não suporta mexer em vídeo por horas, porque a IA reduz, mas não elimina, o trabalho de edição; talvez serviços de texto como <a href="/artigos/como-ganhar-dinheiro-com-newsletter-usando-ia">newsletter com IA</a> ou <a href="/artigos/como-ganhar-dinheiro-com-transcricao-e-legendagem-usando-ia">transcrição e legendagem</a> combinem mais com você. E quando o cliente quer só fotos de produto bem tratadas, o serviço certo é outro: <a href="/artigos/como-vender-servicos-de-edicao-de-fotos-e-retoque-com-ia">edição de fotos e retoque com IA</a>.</p>
    <p>Comece com um cliente, quatro vídeos e um mês. Meça alcance e mensagens recebidas, mostre o relatório e proponha o pacote seguinte. A lista de <a href="/artigos/10-formas-de-ganhar-dinheiro-com-inteligencia-artificial">formas de ganhar dinheiro com inteligência artificial</a> mostra o que combinar com esse serviço quando a agenda encher.</p>
  `,
  faq: [
    {
      question: "Preciso aparecer no vídeo para vender esse serviço?",
      answer:
        "Não. Os formatos que mais vendem para negócio local (erros comuns, bastidor, pergunta frequente) funcionam com imagens do produto, texto na tela e narração. Quando o cliente quer um rosto, o avatar digital do HeyGen ou a voz do ElevenLabs resolvem, desde que o conteúdo seja sinalizado como feito com IA nas plataformas.",
    },
    {
      question: "Quanto tempo leva para produzir um vídeo curto com IA?",
      answer:
        "Em análise realista, entre 30 e 60 minutos por vídeo depois que o fluxo está montado: 10 minutos de roteiro com prompt, 20 a 30 de edição e legenda no CapCut e o resto em ajuste com o cliente. O primeiro mês é mais lento; a partir do segundo, o banco de roteiros aprovados acelera tudo.",
    },
    {
      question: "É obrigatório avisar que o vídeo foi feito com IA?",
      answer:
        "Depende do conteúdo e da rede. O YouTube exige a divulgação quando há conteúdo realista gerado ou alterado por IA, como avatar ou voz sintética de pessoa real; a Meta aplica rótulo de IA quando detecta ou quando o autor declara. Legenda automática e correção de cor não precisam. Confira a regra de cada plataforma, porque elas mudam.",
    },
    {
      question: "Quanto cobrar por um pacote de vídeos curtos com IA?",
      answer:
        "Não existe tabela fixa. Calcule pelo tempo que o pacote toma vezes o valor líquido por hora que você quer, some ferramentas e impostos, e compare com o que uma agência cobraria na sua cidade. Vídeo avulso subvaloriza o trabalho; pacote mensal com limite de refações é o modelo que costuma fechar.",
    },
    {
      question: "Quais ferramentas de IA são gratuitas para vídeos curtos?",
      answer:
        "CapCut tem plano gratuito com edição, legenda automática e voz sintética; ChatGPT, Claude e Gemini têm versão gratuita para roteiro; ElevenLabs oferece 10 mil créditos por mês e o HeyGen, 3 vídeos de até 1 minuto com marca d'água (verificado em 27/09/2026). Para atender cliente com narração ou avatar, o plano pago de entrada costuma ser necessário.",
    },
  ],
  quiz: [
    {
      question: "Qual é a estrutura típica de um vídeo curto que funciona?",
      options: [
        "Um vídeo longo sem divisão clara",
        "Gancho nos primeiros segundos, desenvolvimento rápido e chamada para ação",
        "Apenas imagens sem nenhum roteiro",
        "Um texto lido sem qualquer edição",
      ],
      answer: 1,
      explanation:
        "Vídeos curtos seguem uma estrutura previsível: gancho forte nos dois primeiros segundos, três pontos rápidos e um fechamento com chamada clara para ação.",
    },
    {
      question: "Por que vender pacotes mensais em vez de cobrar por vídeo avulso?",
      options: [
        "Porque cobrar por vídeo é sempre mais lucrativo",
        "Porque pacotes mensais criam previsibilidade e refletem o resultado acumulado que o cliente só vê depois de dezenas de vídeos",
        "Porque o cliente prefere pagar mais caro por menos entrega",
        "Porque vídeos avulsos exigem menos tempo de produção",
      ],
      answer: 1,
      explanation:
        "Vídeo avulso vira pechincha. O pacote mensal dá previsibilidade a quem produz e entrega ao cliente o resultado acumulado, que só aparece depois de 20 ou 30 vídeos publicados.",
    },
  ],
};
