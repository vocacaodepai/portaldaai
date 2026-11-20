import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "escanear-documentos-no-celular-recibos-garantias-e-contas-com-ia",
  title: "Escanear documentos no celular: recibos, garantias e contas",
  seoTitle: "Escanear documentos no celular: guia para iniciantes",
  excerpt:
    "Aprenda a escanear documentos no celular, salvar em PDF pesquisável, organizar recibos, garantias e contas em pastas e usar IA para resumir e achar tudo depressa.",
  metaDescription:
    "Escanear documentos no celular em poucos passos: Google Drive no Android, Notas no iPhone, nomes de arquivos, pastas, prazos de garantia e prompts de IA para resumir contas.",
  category: "iniciantes",
  articleSubcategory: "apps-e-tarefas",
  date: "2026-10-22",
  readTime: 7,
  imageQuery: "person scanning receipt smartphone camera",
  seed: 564,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Seu celular já escaneia documentos: no Android, pelo app do Google Drive, e no iPhone, pelo app Notas, com o resultado salvo em PDF.",
    "Um nome padrão e poucas pastas (Casa, Saúde, Garantias, Trabalho) resolvem 90% da bagunça de papéis e evitam perder recibos na hora que você precisa.",
    "A IA ajuda a resumir contas e contratos longos, mas você não deve enviar documentos com dados sensíveis sem entender para onde eles vão.",
  ],
  content: `
    <p>Para escanear documentos no celular, abra um app com scanner (o Google Drive no Android ou o Notas no iPhone), aponte a câmera para a folha sobre uma superfície plana e bem iluminada, ajuste o recorte e salve como PDF em uma pasta com nome claro. Em poucos minutos o papel vira um arquivo que você acha na hora da busca.</p>

    <p>Guardar recibos, garantias e contas no celular economiza tempo e evita a gaveta cheia de papel que desbota. Neste guia você aprende o passo a passo, como nomear e organizar os arquivos, por quanto tempo guardar garantias e como usar a IA para resumir uma conta ou localizar um comprovante, sem expor dados à toa.</p>

    <h2>Por que escanear em vez de só tirar foto</h2>
    <p>Uma foto comum tem sombra, ângulo torto e fundo bagunçado, e fica espalhada na galeria entre fotos de família. O scanner corta o papel nas bordas, corrige a perspectiva, melhora o contraste e junta várias páginas em um único arquivo. O resultado é mais legível, ocupa menos espaço e pode ser enviado por e-mail ou WhatsApp sem confusão.</p>
    <p>Outra vantagem é a busca. A Ajuda do Google Drive informa que o app salva o resultado como PDF pesquisável, o que permite achar o documento digitando uma palavra do texto. Isso transforma uma pilha de papel em um arquivo consultável. Se você quer um panorama maior de como a IA arruma a bagunça digital, veja <a href="/artigos/ia-para-organizar-fotos-arquivos-menos-bagunca-digital">IA para organizar fotos e arquivos</a>.</p>

    <h2>Como escanear no Android com o Google Drive</h2>
    <p>Segundo a <a href="https://support.google.com/drive/answer/3145835" rel="noopener noreferrer" target="_blank">Ajuda do Google Drive</a>, o passo a passo no app para Android é este:</p>
    <ol>
      <li>Abra o app do Drive e toque em Câmera, no canto inferior direito.</li>
      <li>Aponte para o documento. Um contorno azul mostra a área que será recortada.</li>
      <li>Tire a foto, no modo manual ou automático.</li>
      <li>Ajuste o resultado: cortar, girar, mudar as cores ou usar tons de cinza, remover manchas e dedos, adicionar mais páginas ou refazer.</li>
      <li>Toque em Concluído, digite um nome para o arquivo e escolha o formato PDF ou JPG.</li>
      <li>Se quiser, escolha a pasta em Local e toque em Salvar.</li>
    </ol>
    <p>A mesma página cita um widget na tela inicial, o Drive scan, para escanear mais rápido depois de escolher a pasta padrão. Quem digitaliza com frequência ganha tempo com ele.</p>

    <h2>Como escanear no iPhone</h2>
    <p>No iPhone, o scanner fica no app Notas. O <a href="https://support.apple.com/guide/iphone/welcome/ios" rel="noopener noreferrer" target="_blank">Guia do Usuário do iPhone</a> lista o tópico "Scan text and documents" (digitalizar textos e documentos) entre as funções do app Notas, com as instruções oficiais. Como a interface muda entre versões do iOS, siga o passo a passo da Apple na versão do seu aparelho. Depois de salvar, você pode compartilhar o PDF ou guardá-lo no app Arquivos, em uma pasta com o mesmo padrão de nomes usado no Android.</p>

    <h2>Dicas para o scanner funcionar melhor</h2>
    <ul class="checklist">
      <li>Use uma superfície escura e lisa embaixo de um papel claro, para o recorte automático acertar as bordas.</li>
      <li>Prefira luz natural ou uma lâmpada acima, sem o celular fazendo sombra sobre a folha.</li>
      <li>Em cupom fiscal térmico, escaneie logo: o papel desbota com o tempo.</li>
      <li>Confira se os números (valor, data, chave de acesso) estão legíveis antes de jogar o papel fora.</li>
      <li>Escaneie frente e verso quando o verso tiver informação, como termos de garantia.</li>
    </ul>

    <h2>Nomes e pastas: o que faz o documento ser achado</h2>
    <p>Escanear é metade do trabalho. A outra metade é nomear e guardar. Um padrão simples serve para quase todo mundo: ano-mês-dia, tipo de documento e assunto. Exemplos:</p>
    <table>
      <thead>
        <tr><th>Documento</th><th>Nome sugerido</th><th>Pasta</th></tr>
      </thead>
      <tbody>
        <tr><td>Conta de luz de setembro</td><td>2026-09_conta-luz</td><td>Casa/Contas</td></tr>
        <tr><td>Nota fiscal da geladeira</td><td>2026-03-12_nf-geladeira-marca</td><td>Garantias</td></tr>
        <tr><td>Receita médica</td><td>2026-08-05_receita-ortopedista</td><td>Saúde</td></tr>
        <tr><td>Comprovante de pagamento do IPVA</td><td>2026-02_ipva-carro</td><td>Carro</td></tr>
      </tbody>
    </table>
    <p>Mantenha poucas pastas principais, no máximo seis, e use subpastas por ano. A Central de Ajuda do Google Drive recomenda nomes curtos e com datas ou palavras-chave, além de pastas dentro de pastas para organizar por projeto, como detalha a página sobre <a href="https://support.google.com/drive/answer/2375091" rel="noopener noreferrer" target="_blank">como organizar arquivos no Drive</a>. Quem quiser transformar isso em renda pode ver o guia de <a href="/artigos/organizacao-de-arquivos-no-drive-como-servico-pacote-e-preco-com-ia">organização de arquivos no Drive como serviço</a>.</p>

    <h2>Por quanto tempo guardar garantias e comprovantes</h2>
    <p>O Código de Defesa do Consumidor, no art. 26, dá 30 dias para reclamar de vício aparente em serviço e produto não durável e 90 dias para serviço e produto durável, conforme o <a href="https://www2.camara.leg.br/legin/fed/lei/1990/lei-8078-11-setembro-1990-365086-publicacaooriginal-1-pl.html" rel="noopener noreferrer" target="_blank">texto da Lei 8.078/1990</a>. A garantia contratual do fabricante é outra coisa e costuma constar no termo que acompanha o produto. Por isso, escaneie a nota fiscal e o termo de garantia no mesmo dia da compra e guarde ambos na pasta Garantias.</p>
    <p>Se um dia precisar reclamar, ter o comprovante à mão faz diferença. O guia de <a href="/artigos/reclamar-de-empresa-com-ia-consumidor-gov-br-passo-a-passo">como reclamar de empresa com IA pelo consumidor.gov.br</a> mostra como organizar o pedido, e o de <a href="/artigos/golpe-do-pix-o-que-fazer-nas-primeiras-horas-med-e-uso-de-ia">golpe do Pix</a> lembra que comprovantes salvos ajudam em qualquer disputa.</p>

    <h2>Onde a IA entra: resumir, extrair e achar</h2>
    <p>Com o documento digitalizado, a IA acelera três tarefas. A primeira é resumir contas e contratos longos. Antes de usar, apague ou tape dados pessoais, como CPF, endereço completo e número de contrato, e veja o que o <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">guia de privacidade com IA</a> recomenda. Dois prompts úteis:</p>
    <pre><code>Segue o texto de uma conta de internet (sem dados pessoais). Liste: valor total, data de vencimento, o que mudou em relação ao mês anterior e qualquer cobrança que eu deva conferir. Se alguma informação não estiver no texto, diga que não encontrou.</code></pre>
    <pre><code>Vou colar o termo de garantia de um eletrodoméstico. Resuma em 5 tópicos: prazo, o que cobre, o que NÃO cobre, como acionar e quais documentos preciso apresentar.</code></pre>
    <p>A segunda tarefa é extrair dados para uma planilha, como valores mensais de energia, o que ajuda no <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">controle das finanças pessoais com IA</a>. A terceira é localizar: com PDF pesquisável, basta digitar a palavra no Drive. Para textos longos, veja <a href="/artigos/como-usar-ia-para-resumir-pdfs-artigos-e-textos-longos">como resumir PDFs com IA</a>. A IA pode errar números e interpretar mal uma cláusula, então confirme valores e datas no documento original.</p>

    <h2>Exemplo prático: a rotina de 15 minutos por semana</h2>
    <p>O Marcos, motorista de aplicativo em Salvador, vira um papel toda semana: comprovantes de abastecimento, recibos de manutenção e a conta de celular. Ele reserva 15 minutos no domingo, escaneia tudo com o Drive no celular, nomeia pelo padrão e joga na pasta do ano. Em fevereiro, quando vai organizar o imposto, a pasta já está pronta e ele só pede à IA um resumo dos gastos por categoria, sem colar dados pessoais. Essa rotina simples se encaixa no guia de <a href="/artigos/como-usar-ia-para-criar-rotina-diaria-produtiva">rotina diária produtiva com IA</a>. Se você é MEI, o texto sobre <a href="/artigos/ia-para-mei-tarefas-que-voce-pode-automatizar">tarefas do MEI que a IA automatiza</a> mostra outros usos.</p>

    <h2>Erros comuns</h2>
    <ul class="checklist">
      <li>Deixar a foto na galeria sem nome e sem pasta: depois ninguém acha.</li>
      <li>Jogar o papel fora sem conferir se o PDF ficou legível.</li>
      <li>Mandar documentos com CPF, endereço e dados bancários para uma IA sem pensar no destino das informações.</li>
      <li>Guardar tudo em um só lugar. Mantenha uma cópia em nuvem e outra em outro local.</li>
      <li>Esquecer de escanear o termo de garantia junto com a nota fiscal.</li>
      <li>Deixar o celular sem bloqueio e a conta sem verificação em duas etapas: ative a <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">chave de acesso (passkey)</a> para proteger a nuvem.</li>
    </ul>

    <h2>Comece hoje com cinco documentos</h2>
    <p>Pegue cinco papéis que você mais teme perder: a nota fiscal do seu maior eletrodoméstico, a última conta de luz, um exame, o documento do carro e o contrato de aluguel ou de internet. Escaneie, nomeie e guarde. Depois, aprenda a dar comandos melhores ao assistente com o <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">guia do primeiro assistente de IA pessoal</a> e explore mais na categoria <a href="/categoria/iniciantes">IA para iniciantes</a>.</p>
  `,
  faq: [
    {
      question: "Como escanear documento no celular Android?",
      answer:
        "Pelo app do Google Drive: toque em Câmera, aponte para o documento, tire a foto, ajuste o recorte, toque em Concluído, escolha nome, formato PDF ou JPG e pasta, e salve. A Ajuda do Google Drive informa que o resultado fica como PDF pesquisável.",
    },
    {
      question: "Como escanear documento no iPhone?",
      answer:
        "Pelo app Notas, que tem a função de digitalizar textos e documentos, conforme o Guia do Usuário do iPhone da Apple. Como o caminho dos menus muda entre versões do iOS, siga as instruções da Apple para o seu aparelho e salve o PDF no app Arquivos.",
    },
    {
      question: "O PDF escaneado vale como original?",
      answer:
        "Para consulta e organização pessoal, ele serve bem. Para procedimentos que exigem original ou cópia autenticada, a exigência depende de cada órgão ou empresa. Guarde o papel quando o documento for importante e confirme a regra com quem vai receber.",
    },
    {
      question: "Por quanto tempo devo guardar nota fiscal e garantia?",
      answer:
        "Pelo menos durante o prazo da garantia do produto. O Código de Defesa do Consumidor fixa 30 dias para reclamar de vício aparente em produto não durável e 90 dias em produto durável. A garantia do fabricante costuma ser maior e consta no termo.",
    },
    {
      question: "Posso mandar documentos escaneados para a IA?",
      answer:
        "Pode, com cuidado. Prefira remover CPF, endereço e dados bancários antes, leia as opções de histórico e treinamento da ferramenta e confira os resultados no original. Evite enviar documentos sensíveis de terceiros sem autorização.",
    },
  ],
};
