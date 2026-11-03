import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "apple-watch-audio-intelligence-siri-recaps-live-rewind-beta",
  title: "Apple Watch testa Siri Recaps, que resume conversas sem gravar áudio",
  summary:
    "A Apple liberou em beta para desenvolvedores o Audio Intelligence do Apple Watch: Live Rewind mostra os últimos 15 segundos de fala e Siri Recaps resume conversas.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/11/02/apple-watchs-ai-features-for-rewinding-and-recapping-conversations-begin-beta-testing/",
  date: "2026-11-03",
  publishedAt: "2026-11-03T04:23:15-03:00",
  topic: "lancamentos",
  imageQuery: "Apple Watch",
  content: `
    <p>A Apple começou a testar com desenvolvedores um conjunto de recursos de inteligência artificial para o Apple Watch chamado Audio Intelligence. Segundo a reportagem do TechCrunch publicada na noite de segunda-feira (2), os recursos chegam em beta dentro do iOS 27.3, depois de terem sido apresentados no evento de hardware de setembro, e só depois seguirão para o beta público e para os usuários em geral. São quatro funções, todas opcionais: reconhecimento de sons, reconhecimento de músicas, Live Rewind e Siri Recaps. As duas últimas são as que mais chamam atenção, porque colocam o relógio para ouvir conversas e devolver um resumo.</p>

    <h2>O que cada recurso faz</h2>
    <p>O reconhecimento de sons ajuda pessoas surdas ou com perda auditiva a identificar sons importantes, como sirenes, alarmes e campainhas, avisando pelo relógio. O reconhecimento de músicas usa o Shazam para mostrar nome e artista da música que toca ao redor. Os dois são extensões de funções que já existiam em outros aparelhos da empresa e entram agora no pacote de áudio do relógio.</p>
    <p>O Live Rewind é mais novo. Com um duplo toque na coroa digital, o relógio mostra na tela um trecho de texto com os últimos 15 segundos de fala captados. Um som e uma animação avisam as pessoas por perto de que algo está sendo registrado. O usuário pode dispensar o trecho, que é apagado, ou salvá-lo no app Siri, que chega com o iOS 27. Abaixo do texto há ainda a opção "Ask Siri", para perguntar algo sobre o que foi dito. Trechos que não forem salvos são apagados automaticamente em 30 segundos.</p>
    <p>O Siri Recaps vai além e gera notas de alto nível sobre conversas. Conforme a Apple, o recurso não identifica quem falou, não guarda o áudio bruto e não produz transcrição palavra por palavra. Cada resumo traz uma frase curta e tópicos com informações como datas, prazos, preços e detalhes de plano de pagamento. Os exemplos de uso citados são reuniões de trabalho, conversas entre pais e professores e sessões com personal trainer.</p>

    <h2>Como o resumo é feito</h2>
    <p>A parte técnica descrita pela Apple explica por que a empresa insiste na palavra privacidade. Modelos leves de IA no chip S11 do relógio detectam se quem usa o aparelho participa de uma conversa. O processador sempre ativo tem uma área segura com um buffer de áudio dedicado, e a empresa afirma que ninguém, nem a própria Apple, consegue acessar o áudio bruto. O som segue para o iPhone pareado por um mecanismo seguro de pareamento, onde modelos do Apple Intelligence rodando no aparelho convertem a fala em texto condensado, sem palavras de enchimento.</p>
    <p>Só então entra a nuvem: o texto condensado é criptografado e enviado ao Private Cloud Compute, o ambiente de nuvem da Apple, para montar o resumo. A empresa diz que o resumo e as versões intermediárias são apagados de lá logo em seguida. Os resumos só podem ser acessados pelo usuário, e a sincronização entre os aparelhos dele também é criptografada. Segundo a reportagem, os recursos não devem afetar de forma perceptível a bateria do relógio nem a do iPhone, e a lista de modelos citados inclui o Apple Watch Series 12 e o Ultra 4. O TechCrunch não informa em quais idiomas o Audio Intelligence vai funcionar.</p>

    <h2>Controles e filtros de conteúdo sensível</h2>
    <p>Os Siri Recaps não rodam enquanto a pessoa ouve música com fones ou usa cancelamento de ruído. No fim do dia, o usuário revisa os resumos e escolhe quais salvar no app Notas ou exportar para o app Diário. O que não for salvo é apagado depois de sete dias, e um lembrete de revisão aparece quando o relógio é desbloqueado pela primeira vez de manhã. O recurso pode ser ligado manualmente ou por agenda, por exemplo só no horário de trabalho ou nunca à noite, e desligado a qualquer momento pela Central de Controle.</p>
    <p>A Apple também afirma que os resumos foram projetados para deixar de fora identificadores emitidos por governos, dados financeiros e de autenticação, certos identificadores pessoais e linguagem que promova automutilação. Isso importa porque conversas de trabalho costumam citar números de contrato, valores e contatos, e é justamente esse tipo de dado que o filtro tenta não carregar para as notas.</p>

    <h2>O contexto: gravadores de IA e a reação contra eles</h2>
    <p>A reportagem lembra que há uma reação contra dispositivos de IA que gravam o ambiente, como os óculos inteligentes da Meta, e que a Apple apresenta o Audio Intelligence como uma forma de ser útil sem desrespeitar quem está por perto. O aviso sonoro e visual do Live Rewind, a ausência de transcrição completa e o apagamento rápido seguem essa linha. O mercado de gravadores de conversa com IA vem crescendo, como mostramos na cobertura da <a href="/noticias/ambi-ex-plaud-capta-26-milhoes-app-escuta-ambiente">Ambi, startup de ex-integrantes da Plaud que capta US$ 26 milhões para um app que escuta o ambiente</a>, e a Apple entra nessa disputa com a vantagem de já estar no pulso do usuário. Dias depois de tratarmos da <a href="/noticias/apple-ios-27-2-siri-ai-portugues-memoria-apps-excluidos">chegada da Siri AI em português com o iOS 27.2</a>, o beta mostra que a empresa quer que a assistente passe a ouvir e lembrar também fora do iPhone.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem trabalha por conta própria, atende clientes ou participa de muitas reuniões, a promessa é prática: um relógio que anota prazos e valores combinados em uma conversa sem que seja preciso abrir um app de gravação. Ainda é um beta para desenvolvedores, sem data de lançamento geral e sem confirmação de idiomas, então não há como afirmar que vá funcionar em português logo de saída. Alguns pontos merecem atenção desde já:</p>
    <ul>
      <li><strong>Conversas com terceiros.</strong> Mesmo com aviso sonoro e sem áudio guardado, registrar o que outra pessoa diz levanta questões de consentimento. Vale avisar clientes e colegas antes de ligar um recurso desses numa reunião, como se discute em <a href="/artigos/gravar-aula-e-virar-resumo-com-ia-transcricao-revisao-e-etica">gravar aula e virar resumo com IA: transcrição, revisão e ética</a>.</li>
      <li><strong>Resumo não é ata.</strong> Um resumo automático pode errar um valor ou um prazo. Para combinados importantes, confira o texto, como no guia de <a href="/artigos/ata-de-reuniao-como-servico-resumo-tarefas-e-envio-automatico-com-ia">ata de reunião como serviço com IA</a>.</li>
      <li><strong>Privacidade tem camadas.</strong> A Apple descreve processamento no relógio, no iPhone e na nuvem própria. Entender onde cada dado passa é parte do uso consciente, tema de <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a>.</li>
      <li><strong>Memória e assistentes pessoais.</strong> O Siri Recaps é mais uma peça de um assistente que lembra de você, assunto de <a href="/artigos/memoria-longa-em-ia-assistente-que-lembra-de-voce">memória longa em IA</a> e de <a href="/artigos/assistente-de-voz-com-ia-como-usar-no-dia-a-dia">assistente de voz com IA: como usar no dia a dia</a>.</li>
    </ul>

    <div class="callout-box callout-tip">
      <span class="callout-label">Antes de usar em reuniões</span>
      <p>Quando o recurso chegar à versão final, escolha o modo agendado em vez do contínuo, revise os resumos no fim do dia e salve só o que for útil. O que não for salvo é apagado em sete dias, mas o que você mandar para o app Notas passa a seguir as regras daquele app.</p>
    </div>

    <h2>O que observar a seguir</h2>
    <p>Três pontos ficam em aberto. O primeiro é a data de chegada ao público geral e a lista de países e idiomas, já que a reportagem não traz esses detalhes e a Siri AI só ganhou português recentemente. O segundo é como o recurso se comporta na prática com ruído de ambiente e várias pessoas falando, situação comum em reuniões e atendimentos. O terceiro é a reação de reguladores e de quem é gravado, porque dispositivos que ouvem conversas costumam atrair questionamentos sobre consentimento. Até lá, o que está confirmado é o início do beta no iOS 27.3 e a descrição técnica da Apple repetida pelo TechCrunch.</p>
  `,
};
