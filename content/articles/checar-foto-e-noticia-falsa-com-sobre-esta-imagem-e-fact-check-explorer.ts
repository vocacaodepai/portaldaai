import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "checar-foto-e-noticia-falsa-com-sobre-esta-imagem-e-fact-check-explorer",
  title: "Checar foto e notícia falsa com IA: guia passo a passo",
  seoTitle: "Checar foto e notícia falsa: guia com ferramentas do Google",
  excerpt:
    "Aprenda a checar foto e notícia falsa em minutos: use Sobre esta imagem, o Fact Check Explorer e a IA para pesquisar a origem antes de repassar no WhatsApp.",
  metaDescription:
    "Checar foto e notícia falsa passo a passo: Sobre esta imagem, Fact Check Explorer, busca reversa e prompts de IA para verificar origem, data e contexto antes de compartilhar.",
  category: "iniciantes",
  articleSubcategory: "apps-e-tarefas",
  date: "2026-10-21",
  readTime: 7,
  imageQuery: "person checking smartphone news photo",
  seed: 528,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Para checar uma foto suspeita, o caminho mais rápido é descobrir quando ela apareceu pela primeira vez e onde, usando o painel Sobre esta imagem do Google, que mostra usos antigos e outras páginas com a mesma imagem.",
    "Para checar uma notícia, o Fact Check Explorer reúne checagens feitas por agências e jornais, mas cada resultado vale o que vale quem o publicou, então leia a matéria completa.",
    "A IA ajuda a organizar a investigação e a levantar perguntas, mas não é juiz da verdade: ela pode errar e deve ser a última etapa, nunca a única.",
  ],
  content: `
    <p>Checar foto e notícia falsa leva poucos minutos e começa sempre pela mesma pergunta: de onde isso veio e quando apareceu pela primeira vez? Com o painel Sobre esta imagem, o Fact Check Explorer e uma busca simples, você descobre se a imagem é antiga, se foi tirada de contexto e se alguma agência de checagem já analisou o assunto.</p>

    <p>Este guia é para quem recebe correntes no WhatsApp, vê prints no Instagram e fica na dúvida se deve repassar. Você vai aprender um método de cinco passos, ver onde a IA ajuda e onde ela atrapalha, e levar prompts prontos. Tudo com ferramentas gratuitas e sem precisar de conhecimento técnico.</p>

    <h2>Por que checar antes de repassar?</h2>

    <p>Foto falsa raramente é montagem sofisticada. O mais comum é uma imagem verdadeira usada no lugar errado: uma enchente de anos atrás apresentada como se fosse de hoje, um protesto de outro país com legenda brasileira, um print recortado que muda o sentido. Por isso a pergunta útil não é só "essa imagem é real?", e sim "essa imagem mostra o que dizem que ela mostra?".</p>

    <p>Repassar sem checar também tem custo. Você perde credibilidade com família e colegas, pode espalhar pânico e, em casos de golpe, ajudar quem quer roubar dados. Se a mensagem pede dinheiro ou senha, vá direto ao guia sobre <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">como usar IA para checar mensagem suspeita e evitar golpes</a>.</p>

    <p>Vale lembrar que a inteligência artificial também cria imagens convincentes. O texto sobre <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">deepfakes e conteúdo falso</a> mostra sinais visuais que ajudam, e o artigo sobre <a href="/artigos/content-credentials-c2pa-como-saber-se-imagem-foi-feita-por-ia">Content Credentials</a> explica as etiquetas que alguns arquivos carregam.</p>

    <h2>Passo 1: leia a imagem antes de qualquer ferramenta</h2>

    <p>Antes de abrir o celular para pesquisar, olhe com atenção. Dez segundos de observação já eliminam muita coisa. Procure pistas dentro da própria cena:</p>

    <ul class="checklist">
      <li>Placas, letreiros e idioma das pessoas ao fundo: combinam com o lugar que a legenda cita?</li>
      <li>Clima e roupas: a legenda diz verão, mas todos usam casaco?</li>
      <li>Marca d'água, logotipo de jornal ou de perfil: alguém assinou a foto?</li>
      <li>Detalhes estranhos em mãos, texto ou reflexos, que podem indicar imagem gerada por IA.</li>
      <li>Qualidade: print de print costuma ser pixelado, e isso esconde a origem.</li>
    </ul>

    <p>Anote o que você achou. Essas pistas viram termos de busca no passo seguinte, como o nome da cidade, do evento ou da placa.</p>

    <h2>Passo 2: use o Sobre esta imagem do Google</h2>

    <p>A <a href="https://support.google.com/websearch/answer/14177408" target="_blank" rel="noopener noreferrer">página de ajuda do Google sobre o recurso</a> descreve o caminho: pesquise a imagem no app do Google ou na página inicial, abra a imagem no visualizador, toque no ícone de informação, escolha Sobre e depois a opção de saber mais sobre a imagem. O painel mostra quando o Google pode ter visto a imagem ou uma versão parecida pela primeira vez, outros sites que usam versões semelhantes e, em alguns casos, uma seção de usos antigos, com páginas em que a imagem apareceu muito antes dos demais resultados.</p>

    <p>Isso resolve boa parte dos casos de foto velha apresentada como nova: se o painel aponta que a imagem circula há anos, a legenda "aconteceu hoje" é suspeita. O painel também pode indicar como a imagem foi feita ou editada, por exemplo se uma câmera a captou ou se foi gerada por IA, com a informação de quem confirmou o dado.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>A mesma página do Google avisa que o recurso está disponível apenas em algumas regiões e que metadados como crédito e tipo de fonte digital podem ser alterados por programas de edição. Ou seja: a ausência de aviso de IA não prova que a foto é autêntica. Cruze com outras fontes.</p></div>

    <p>Se o recurso não aparecer no seu app, use a pesquisa por imagem do navegador ou o <a href="/artigos/circle-to-search-pesquisar-e-traduzir-o-que-esta-na-tela">Circle to Search</a>, que permite selecionar uma imagem na tela do Android e pesquisar sobre ela.</p>

    <h2>Passo 3: procure se alguém já checou o assunto</h2>

    <p>Muitas notícias falsas são recicladas, e agências de checagem já analisaram a maioria. O Fact Check Explorer, ferramenta do Google, funciona como um buscador de checagens. Segundo a <a href="https://newsinitiative.withgoogle.com/resources/lessons/google-fact-check-tools/" target="_blank" rel="noopener noreferrer">lição do Google News Initiative sobre o Fact Check Tools</a>, você pode pesquisar por palavra-chave, ver as checagens recentes sobre aquele tema, restringir por site de um veículo e até enviar uma imagem para saber se ela já foi checada antes. Os resultados mostram quem fez a checagem e a classificação dada, como "falso".</p>

    <p>O ponto de atenção está no próprio limite da ferramenta: ela reúne checagens de outras organizações, e a confiança no resultado depende de quem o publicou. Por isso abra a matéria, leia o raciocínio e confira o nome do veículo. Uma frase solta de "falso" sem explicação não basta.</p>

    <p>No dia a dia, vale combinar: faça a busca no Fact Check Explorer com duas ou três palavras-chave do boato e depois leia a checagem inteira. Se não houver nada, isso não prova que o boato seja verdadeiro, apenas que ninguém checou ainda ou que as palavras escolhidas não bateram.</p>

    <h2>Passo 4: use a IA como assistente de investigação</h2>

    <p>A IA entra aqui para organizar a investigação, não para dar o veredito. Ela é boa em sugerir termos de busca, listar perguntas que você ainda não fez e resumir uma checagem longa. Ela é ruim em afirmar fatos sem fonte, e pode inventar detalhes com muita confiança, o que o guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> explica bem. Nunca cole nada sigiloso: o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade em IA</a> mostra o que evitar.</p>

    <p>Prompt para transformar a mensagem em perguntas de checagem:</p>

    <pre><code>Recebi esta mensagem e quero checar antes de repassar: [cole o texto, sem nomes de pessoas próximas].
Liste: 1) as afirmações que podem ser verificadas; 2) que tipo de fonte confirmaria cada uma (órgão público, agência de checagem, jornal); 3) três buscas curtas para eu fazer no Google. Não diga se é verdadeiro ou falso, só me ajude a investigar.</code></pre>

    <p>Prompt para ler uma checagem longa:</p>

    <pre><code>Resuma em 5 linhas a checagem abaixo: o que foi afirmado, o que a checagem encontrou, quais fontes ela usou e qual foi a conclusão. Se algo não estiver no texto, diga que não está.
[cole o texto da checagem]</code></pre>

    <p>Quando a ferramenta de IA tem pesquisa na web, como no <a href="/artigos/modo-ia-do-google-como-usar-a-pesquisa-com-ia">Modo IA do Google</a>, peça sempre os links das fontes e abra cada um. Se não houver link, trate a resposta como palpite.</p>

    <h2>Passo 5: decida e registre</h2>

    <p>Depois das buscas, classifique o conteúdo em uma de três caixas: confirmado (fonte confiável e independente diz o mesmo), falso ou enganoso (checagem ou fonte primária contradiz) e não verificado (você não achou nada). Para a terceira caixa, a regra é simples: não repasse. Se alguém na família já enviou, responda com o link da checagem, sem tom de bronca.</p>

    <p>Compare o que cada ferramenta faz para escolher a mais adequada ao caso:</p>

    <table>
      <thead>
        <tr><th>Situação</th><th>Ferramenta</th><th>O que você descobre</th></tr>
      </thead>
      <tbody>
        <tr><td>Foto que pode ser antiga</td><td>Sobre esta imagem (Google)</td><td>Primeiras aparições e outros usos da imagem</td></tr>
        <tr><td>Boato conhecido</td><td>Fact Check Explorer</td><td>Se agências já checaram e com que classificação</td></tr>
        <tr><td>Imagem que pode ser de IA</td><td>Painel de origem e <a href="/artigos/synthid-site-do-google-para-verificar-midia-gerada-por-ia">verificação de mídia</a></td><td>Indícios de geração por IA, que não são prova final</td></tr>
        <tr><td>Texto que parece escrito por robô</td><td><a href="/artigos/detector-de-texto-de-ia-funciona-ou-nao-como-saber-se-foi-escrito-por-ia">Detectores de texto</a></td><td>Pouca confiança: use só como pista</td></tr>
        <tr><td>Mensagem que pede dinheiro</td><td>Canal oficial da empresa</td><td>Se o pedido existe de verdade</td></tr>
      </tbody>
    </table>

    <h2>Exemplo: a foto da enchente que voltou a circular</h2>

    <p>Imagine que chega no grupo da família uma foto de uma rua alagada com a legenda "Porto Alegre agora, ninguém fala disso". Você segue o método. No passo 1, nota que os carros ao fundo têm placas de outro padrão e que há um letreiro em espanhol. No passo 2, o painel de origem mostra páginas com a mesma imagem que apareceram anos antes, em sites de outro país. No passo 3, uma busca por "enchente foto falsa Porto Alegre" no Fact Check Explorer revela se alguma agência já analisou a imagem.</p>

    <p>Em cerca de cinco minutos, sem pagar nada, você tem base para responder: "Essa foto circula há anos e parece ser de outro país, olha aqui". O ganho não é só evitar o boato: é criar o hábito de pedir fonte, que protege também contra golpes como o descrito no guia do <a href="/artigos/golpe-do-pix-o-que-fazer-nas-primeiras-horas-med-e-uso-de-ia">golpe do Pix</a>.</p>

    <h2>Erros comuns ao checar</h2>

    <ul>
      <li><strong>Confiar na IA como juiz:</strong> ela pode errar, e o guia sobre <a href="/artigos/vies-em-ia-o-que-e-exemplos-e-como-perceber-na-pratica">viés em IA</a> mostra por quê.</li>
      <li><strong>Checar só o que contraria você:</strong> aplique o mesmo rigor ao que confirma sua opinião.</li>
      <li><strong>Parar na primeira fonte:</strong> procure pelo menos duas independentes.</li>
      <li><strong>Achar que "não achei nada" é prova de verdade:</strong> é apenas ausência de checagem.</li>
      <li><strong>Usar ferramenta duvidosa:</strong> antes de instalar um app de verificação, veja o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a>.</li>
      <li><strong>Repassar "só por precaução":</strong> alerta sem checagem também é desinformação.</li>
    </ul>

    <p>Quem tem crianças em casa pode ensinar o método como brincadeira de detetive: o texto sobre o <a href="/artigos/eca-digital-e-ia-o-que-muda-para-pais-criancas-chatbots-e-apps">ECA Digital e IA</a> traz contexto sobre o que muda para famílias. Na próxima vez que uma foto bombástica chegar, abra o painel Sobre esta imagem antes de responder, e explore os demais guias de <a href="/categoria/iniciantes">Iniciantes</a> para dominar outras ferramentas.</p>
  `,
  faq: [
    {
      question: "Como saber se uma foto é antiga ou falsa?",
      answer:
        "Pesquise a imagem no Google e abra o painel Sobre esta imagem, quando disponível na sua região. Ele mostra quando a imagem ou versões parecidas apareceram antes e em quais sites. Depois procure o assunto no Fact Check Explorer para ver se alguma agência já checou.",
    },
    {
      question: "O Fact Check Explorer é gratuito?",
      answer:
        "O Fact Check Explorer funciona no navegador, em toolbox.google.com/factcheck/explorer, e permite buscar por palavra-chave, por publicador e por imagem. A página do Google News Initiative não cita preço. A qualidade de cada resultado depende de quem publicou a checagem, então leia a matéria completa.",
    },
    {
      question: "A IA consegue dizer se uma notícia é falsa?",
      answer:
        "Não com segurança. A IA pode sugerir buscas, resumir checagens e listar afirmações a verificar, mas também pode errar ou inventar detalhes. Use-a como assistente, peça links das fontes e confirme em órgão oficial, agência de checagem ou jornal confiável antes de decidir.",
    },
    {
      question: "O que fazer quando não acho nenhuma checagem?",
      answer:
        "Considere o conteúdo não verificado e não repasse. Ausência de checagem não prova que o boato é verdadeiro: pode ser recente ou você ter usado palavras diferentes. Tente outras buscas, procure a fonte original e espere confirmação de um veículo confiável.",
    },
    {
      question: "Sobre esta imagem funciona em português e no Brasil?",
      answer:
        "A página de ajuda do Google informa que o recurso está disponível apenas em algumas regiões. Como a liberação muda com o tempo, teste no seu app. Se não aparecer, use a busca por imagem do navegador e o Circle to Search no Android.",
    },
  ],
  quiz: [
    {
      question: "Qual é a primeira pergunta útil ao ver uma foto suspeita?",
      options: ["Quantas curtidas ela tem?", "De onde veio e quando apareceu pela primeira vez?", "Quem enviou para mim?"],
      answer: 1,
      explanation: "Muita foto falsa é verdadeira, só que antiga ou de outro lugar. Descobrir a origem e a data resolve a maioria dos casos.",
    },
    {
      question: "Sem nenhuma checagem encontrada, o que fazer?",
      options: ["Repassar por precaução", "Tratar como verdadeiro", "Considerar não verificado e não repassar"],
      answer: 2,
      explanation: "A falta de checagem não confirma o boato. O mais seguro é não compartilhar até uma fonte confiável confirmar.",
    },
  ],
};
