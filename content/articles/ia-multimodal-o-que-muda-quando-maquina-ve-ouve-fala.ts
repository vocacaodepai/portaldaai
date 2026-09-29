import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala",
  title: "IA multimodal: o que muda quando a máquina vê, ouve e fala",
  seoTitle: "IA multimodal: o que muda quando a máquina vê, ouve e fala",
  excerpt:
    "IA multimodal é a IA que entende foto, áudio e vídeo além de texto. Veja o que já funciona, como usar no dia a dia e no negócio e onde a máquina erra.",
  metaDescription:
    "IA multimodal explicada sem jargão: o que a máquina já faz com foto, voz e vídeo, exemplos de uso no dia a dia e no negócio, limites e quando não usar.",
  category: "futuro",
  date: "2026-09-15",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "voice vision technology interface",
  seed: 30,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "IA multimodal é o modelo que recebe foto, áudio, vídeo e texto na mesma conversa e responde sem que você precise transcrever ou descrever nada antes.",
    "Na prática isso já funciona hoje nos assistentes gratuitos: foto de um problema, áudio de uma reunião, tela de uma planilha; o ganho é cortar etapas entre o problema real e a resposta.",
    "A máquina ainda erra em texto pequeno, imagem girada, contagem de objetos e áudio com ruído, como a documentação oficial da OpenAI e da Anthropic reconhece; decisão importante continua passando por gente.",
  ],
  content: `
    <p>IA multimodal é a inteligência artificial que recebe texto, imagem, áudio e vídeo na mesma conversa e responde a partir de tudo isso junto. Em vez de descrever a foto do produto quebrado, você manda a foto. Em vez de transcrever a reunião, você manda o áudio. A máquina passa a "ver" e "ouvir" o problema, e o texto vira só uma das formas de falar com ela.</p>

    <p>Este guia explica, sem jargão, o que isso muda no seu dia a dia e no seu negócio: o que já funciona nos assistentes gratuitos, três formas de usar hoje com prompts prontos, um cenário brasileiro com números, os limites que a própria documentação das ferramentas admite e as situações em que ainda é melhor não usar.</p>

    <h2>O que é IA multimodal, em português claro</h2>
    <p>"Modal" vem de modalidade: texto é uma, imagem é outra, som é outra, vídeo é outra. Um modelo multimodal foi treinado para entender várias ao mesmo tempo. Até pouco tempo, cada modalidade exigia um app separado: um para transcrever áudio, outro para ler texto em foto, outro para traduzir. Agora um único assistente faz as três coisas na mesma janela.</p>
    <p>Isso não é promessa de futuro. ChatGPT, Claude e Gemini aceitam imagem nas versões gratuitas, e o modo de voz do ChatGPT e do Gemini conversa em tempo real. A documentação da Anthropic, por exemplo, informa que o <a href="https://platform.claude.com/docs/en/build-with-claude/vision" rel="noopener noreferrer">Claude aceita até 20 imagens por mensagem no claude.ai, com até 10 MB cada</a> (verificado em 27/09/2026). Se algum termo travar, o <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de inteligência artificial</a> resolve em um minuto.</p>
    <p>A mudança de fundo é de fricção. Quanto menos etapas entre o problema real e a resposta, mais a ferramenta cabe na rotina de quem não é técnico. É a mesma lógica que aparece na discussão sobre <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o futuro do trabalho autônomo</a>: a máquina se aproxima do jeito humano de comunicar, em vez de exigir que a gente se adapte a ela.</p>

    <h2>O que a máquina já faz com foto, áudio e vídeo</h2>
    <p>A tabela abaixo resume o que funciona hoje, por modalidade, e com que ferramenta comum. Os limites vêm da documentação oficial de cada uma.</p>
    <table>
      <thead>
        <tr><th>Modalidade</th><th>O que já funciona</th><th>Exemplo de uso</th><th>Onde</th></tr>
      </thead>
      <tbody>
        <tr><td>Imagem</td><td>Descrever, ler texto visível, responder sobre objetos e cores</td><td>Foto do painel do carro com luz acesa: "o que significa?"</td><td>ChatGPT, Claude, Gemini (grátis)</td></tr>
        <tr><td>Voz em tempo real</td><td>Conversa falada com interrupção natural</td><td>Treinar uma apresentação falando e sendo corrigido</td><td>ChatGPT Voice, Gemini Live</td></tr>
        <tr><td>Áudio gravado</td><td>Transcrever, identificar falantes, resumir</td><td>Áudio de reunião de 40 minutos vira ata</td><td>Gemini, apps de reunião</td></tr>
        <tr><td>Vídeo</td><td>Descrever cenas e resumir o que foi dito</td><td>Vídeo curto do estoque: "quais produtos aparecem?"</td><td>Gemini</td></tr>
        <tr><td>Documento em foto</td><td>Extrair dados de nota fiscal, planilha impressa, cardápio</td><td>Foto de 30 notas vira tabela</td><td>ChatGPT, Claude, Gemini</td></tr>
      </tbody>
    </table>
    <p>Dois exemplos vêm direto da documentação. A OpenAI descreve o uso de um modelo com visão para <a href="https://developers.openai.com/api/docs/guides/images-vision" rel="noopener noreferrer">descrever imagens, ler texto visível e responder sobre objetos, formas e cores</a>. Já a Google documenta que a <a href="https://ai.google.dev/gemini-api/docs/audio" rel="noopener noreferrer">API Gemini entende áudio e gera transcrição com marcação de tempo e identificação de quem fala</a>, com até 9,5 horas de áudio por requisição (verificado em 27/09/2026). Quem precisa disso na rotina de reuniões encontra o processo em <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">IA para transcrição, resumo e ata automática</a>.</p>

    <h2>Como usar IA multimodal hoje, com prompts prontos</h2>
    <p>Três usos cobrem a maior parte do que uma pessoa comum ou um pequeno negócio precisa. Em todos, a regra é a mesma: mande a mídia e diga o que quer de volta, em que formato.</p>
    <h3>1. Foto de um problema</h3>
<pre><code>Esta é a foto do painel da minha máquina de lavar com um código piscando.
Me diga: o que o código provavelmente indica, o que eu posso tentar sozinho com segurança em até 3 passos e em que situação devo chamar assistência.
Se a foto não estiver clara o suficiente para ter certeza, diga isso antes de responder.</code></pre>
    <h3>2. Áudio ou vídeo de reunião</h3>
<pre><code>Este é o áudio de uma reunião de 35 minutos com dois fornecedores.
Faça uma ata com: decisões tomadas, quem ficou responsável por cada tarefa, prazos citados e dúvidas que ficaram em aberto.
Formato: tópicos curtos. Marque com [CONFERIR] qualquer valor ou data que você não tenha ouvido com clareza.</code></pre>
    <h3>3. Documento em foto</h3>
<pre><code>Estas são fotos de 12 notas fiscais de compra do meu restaurante.
Monte uma tabela com: data, fornecedor, valor total e categoria (bebida, carne, hortifruti, limpeza, outros).
Some por categoria no final e liste as notas em que algum campo estava ilegível, em vez de inventar o valor.</code></pre>
    <p>O terceiro prompt é a porta de entrada para quem quer organizar o financeiro sem digitar nada, e combina com o guia de <a href="/artigos/ia-para-organizar-fotos-arquivos-menos-bagunca-digital">IA para organizar fotos e arquivos</a>. Para praticar conversa por voz, o modo falado é o mesmo que aparece em <a href="/artigos/como-usar-ia-para-aprender-um-novo-idioma-todos-os-dias">como usar IA para aprender um idioma todos os dias</a>.</p>

    <h2>Um cenário brasileiro com números</h2>
    <p>Imagine uma assistência técnica de celulares em Belo Horizonte que recebe cerca de 30 mensagens por dia no WhatsApp, e metade delas é "meu celular está assim, dá para consertar?". Antes, a atendente pedia para o cliente descrever o problema por escrito, o que gerava três ou quatro mensagens de ida e volta e uns 5 minutos por conversa.</p>
    <p>Com um assistente multimodal, o cliente manda a foto da tela trincada ou o vídeo do aparelho reiniciando, e a atendente cola a mídia no assistente com um prompt padrão: "classifique o problema em tela, bateria, conector ou software, e sugira uma faixa de orçamento com base na minha tabela abaixo". A triagem cai para 1 minuto. São 15 conversas por dia com 4 minutos economizados cada: uma hora por dia, cerca de 22 horas por mês, usando a versão gratuita de qualquer um dos três assistentes. O orçamento final continua sendo de uma pessoa.</p>
    <p>É um cenário ilustrativo, não um caso medido, mas a conta é fácil de refazer para o seu negócio: número de conversas com foto, minutos economizados por conversa, dias no mês. Quem atende cliente encontra mais ideias nesse formato em <a href="/artigos/como-ia-esta-mudando-atendimento-ao-cliente">como a IA está mudando o atendimento ao cliente</a>.</p>

    <h2>O que muda para quem tem negócio ou presta serviço</h2>
    <p>Para quem atende, o atendimento passa a aceitar foto e áudio do cliente sem ficar pior por isso. A foto do produto substitui a descrição; o áudio de 40 segundos vira texto que entra no sistema. Isso reduz atrito na hora em que o cliente mais desiste: quando precisa explicar um problema que não sabe nomear. E abre a porta para atender em outros idiomas, como mostra o guia sobre <a href="/artigos/como-atender-clientes-em-varios-idiomas-usando-ia">atender clientes em vários idiomas com IA</a>.</p>
    <p>Para quem cria conteúdo, a produção deixa de ser em série. O mesmo assistente que lê o roteiro sugere a narração, descreve a imagem para a capa e resume o vídeo para a legenda. Os guias de <a href="/artigos/ia-para-audio-criar-podcasts-e-narracoes-profissionais">IA para áudio e narrações</a> e de <a href="/artigos/ia-para-video-criar-avatar-digital-que-fala-por-voce">IA para vídeo com avatar digital</a> mostram o lado de gerar, e não só de entender, mídia.</p>
    <p>Para quem analisa, a novidade é partir da fonte original: a foto da prateleira, o áudio da ligação, o vídeo da linha de produção. Menos descrição intermediária, menos perda no caminho. O ritmo dessa mudança aparece nas notícias recentes, como o <a href="/noticias/google-gemini-3-8-live-avatar-video-tempo-real-97-idiomas">Gemini Live com avatar em vídeo conversando em 97 idiomas</a> e o <a href="/noticias/chatgpt-voice-ganha-gpt-6-plugins-chatgpt-work">ChatGPT Voice ganhando acesso a e-mail e agenda</a>.</p>

    <h2>Onde a IA multimodal ainda erra</h2>
    <p>Os limites não são opinião: estão na documentação oficial. A OpenAI lista, na própria página de visão, que o modelo pode errar com texto pequeno, imagens giradas, contagem de objetos (que sai aproximada), gráficos com muitas cores e imagens médicas, e recomenda considerar isso ao usar a ferramenta. A Anthropic lista, na página de visão do Claude, que o modelo pode alucinar com imagens de baixa qualidade ou muito pequenas, que não identifica pessoas pelo rosto, que a contagem é aproximada e que ele não consegue dizer se uma imagem foi gerada por IA.</p>
    <p>Esse último ponto merece atenção: a IA multimodal não é detector de conteúdo falso. Quem precisa dessa proteção deve seguir os passos de <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">como identificar deepfakes e proteger sua reputação</a>, que não dependem de perguntar ao modelo.</p>
    <p>Em áudio, ruído de fundo, duas pessoas falando ao mesmo tempo e sotaque forte derrubam a transcrição. Na conversa por voz, a própria OpenAI descreve a <a href="https://developers.openai.com/api/docs/guides/realtime" rel="noopener noreferrer">Realtime API como voltada a interações que precisam de interrupção e baixa latência</a>, o que é ótimo para treinar apresentação e ruim para ditar um contrato. Regra prática: peça para o modelo marcar o que não ouviu ou não viu com clareza, como nos prompts acima.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Foto de documento com CPF, laudo médico ou extrato bancário é dado sensível. Antes de mandar para um assistente gratuito, leia <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber ao usar IA</a> e confira as configurações de uso de dados da ferramenta.</p></div>

    <h2>Quando não usar IA multimodal (ainda)</h2>
    <p>Não use para decisão médica a partir de foto de exame, mancha na pele ou raio-x: a documentação da OpenAI e da Anthropic cita imagens médicas como ponto fraco, e o resultado pode ser convincente e errado. Não use para reconhecer pessoas em fotos ou vídeos: além de o Claude recusar, isso esbarra em privacidade. Não use para "provar" que um vídeo é falso ou verdadeiro.</p>
    <p>Também não vale a pena quando a mídia é ruim. Foto escura, áudio com música ao fundo, vídeo tremido: o custo de refazer a captura é menor que o custo de conferir uma resposta inventada. E não use em nada com consequência financeira sem uma pessoa revisando o resultado, como em orçamento, laudo ou contrato.</p>
    <ul class="checklist">
      <li>A foto está nítida, na orientação certa e com o texto legível?</li>
      <li>O áudio tem uma pessoa falando por vez, sem música ao fundo?</li>
      <li>Você pediu para o modelo marcar o que não viu ou não ouviu com clareza?</li>
      <li>Tem dado sensível na mídia? Se sim, apagou ou tapou antes de enviar?</li>
      <li>Uma pessoa vai revisar antes de virar decisão, orçamento ou documento?</li>
    </ul>
    <p>Se os cinco itens estão ok, use sem medo: a IA multimodal é hoje a forma mais rápida de transformar foto, áudio e vídeo em texto útil. Para escolher com qual assistente começar, o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual escolher</a> mostra o que cada um faz melhor com imagem e voz.</p>
  `,
  faq: [
    {
      question: "O que é IA multimodal?",
      answer:
        "É a inteligência artificial que entende mais de um tipo de conteúdo na mesma conversa: texto, imagem, áudio e vídeo. Em vez de descrever uma foto ou transcrever um áudio antes de perguntar, você envia a mídia diretamente e o modelo responde a partir dela. ChatGPT, Claude e Gemini já fazem isso nas versões gratuitas, com limites diferentes em cada um.",
    },
    {
      question: "IA multimodal é gratuita?",
      answer:
        "Para uso básico, sim. ChatGPT, Claude e Gemini aceitam imagem nas versões gratuitas, e o ChatGPT e o Gemini têm modo de voz. Os planos pagos aumentam limites de uso e liberam recursos como vídeo mais longo ou mais mensagens por dia; os valores mudam com frequência, então consulte a página oficial de cada ferramenta antes de assinar.",
    },
    {
      question: "IA multimodal funciona em português?",
      answer:
        "Sim. Os três grandes assistentes leem texto em português dentro de imagens, transcrevem áudio em português e conversam por voz no idioma. A qualidade cai com sotaque muito forte, ruído de fundo ou várias pessoas falando ao mesmo tempo, então grave em ambiente silencioso e peça para o modelo marcar trechos que não entendeu.",
    },
    {
      question: "A IA consegue identificar pessoas em fotos?",
      answer:
        "Não deve ser usada para isso. A documentação do Claude informa que o modelo não identifica pessoas pelo rosto e recusa esse pedido. Além da limitação técnica, reconhecer pessoas sem consentimento esbarra em privacidade. Use a IA multimodal para ler documentos, descrever objetos e cenas, não para dizer quem aparece na imagem.",
    },
    {
      question: "IA multimodal detecta deepfake?",
      answer:
        "Não de forma confiável. A Anthropic informa na documentação de visão que o Claude não consegue determinar se uma imagem foi gerada por IA e pode errar se perguntado. Para verificar conteúdo suspeito, use métodos que não dependem do modelo: busca reversa de imagem, checagem da fonte original e ferramentas específicas de verificação.",
    },
    {
      question: "Quantas imagens posso enviar de uma vez?",
      answer:
        "Depende da ferramenta. No claude.ai, a documentação oficial informa até 20 imagens por mensagem, com até 10 MB cada (verificado em 27/09/2026). ChatGPT e Gemini têm limites próprios que variam por plano; consulte a página de ajuda de cada um. Para lotes grandes, como dezenas de notas fiscais, divida em grupos e peça uma tabela por grupo.",
    },
  ],
  quiz: [
    {
      question: "Você tirou foto de uma mancha na pele e quer saber se é grave. O que a IA multimodal deve fazer nesse caso?",
      options: [
        "Dar o diagnóstico, porque ela vê a imagem",
        "Servir no máximo como apoio para você decidir procurar um médico",
        "Substituir a consulta se a foto estiver nítida",
      ],
      answer: 1,
      explanation:
        "A documentação da OpenAI e da Anthropic cita imagens médicas como ponto fraco dos modelos. A foto pode até ajudar a organizar o que perguntar ao médico, mas a decisão é de um profissional.",
    },
    {
      question: "Qual é o maior ganho prático da IA multimodal para um pequeno negócio?",
      options: [
        "Cortar etapas entre o problema do cliente e a resposta, aceitando foto e áudio",
        "Eliminar a necessidade de revisar orçamentos",
        "Identificar clientes pelo rosto nas fotos",
      ],
      answer: 0,
      explanation:
        "O ganho está na fricção: o cliente manda a foto ou o áudio e a triagem fica mais rápida. Revisão humana continua, e reconhecimento facial não é uso adequado nem permitido pelas ferramentas.",
    },
  ],
};
