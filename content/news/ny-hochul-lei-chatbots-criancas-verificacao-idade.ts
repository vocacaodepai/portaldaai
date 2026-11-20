import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "ny-hochul-lei-chatbots-criancas-verificacao-idade",
  title: "Nova York proíbe chatbots de se passarem por humanos com crianças",
  summary:
    "Hochul sancionou lei que obriga chatbots a checar a idade com dois métodos, barra conversa íntima com menores e prevê multa de até US$ 25 mil por violação.",
  author: "Bruno Danello",
  sourceName: "The Next Web, Bloomberg Government",
  sourceUrl: "https://thenextweb.com/news/new-york-ai-chatbots-children-law-hochul-baby-monitors",
  date: "2026-10-30",
  publishedAt: "2026-10-30T14:35:00-03:00",
  topic: "regulacao",
  imageQuery: "Kathy Hochul portrait",
  content: `
    <p>O estado de Nova York aprovou uma das leis mais duras dos Estados Unidos sobre chatbots e crianças. A governadora Kathy Hochul sancionou, na quarta-feira (28), um pacote que proíbe os assistentes de IA de fingirem ser pessoas de verdade quando conversam com menores de 18 anos e que obriga as empresas a verificar a idade de quem usa o serviço. A informação vem de reportagem do The Next Web publicada nesta sexta-feira (30), que cita a cobertura da Bloomberg Government e declarações do gabinete da governadora.</p>

    <p>A lei foi apresentada pela senadora estadual Kristen Gonzalez e pelo deputado estadual Alex Bores. Segundo a reportagem, ela passa a valer em 1º de janeiro, e o governo de Nova York diz que as regras serão aplicadas nos próximos meses. Junto com ela, Hochul sancionou uma segunda lei, sobre monitores de bebê conectados à internet, que entra em vigor 90 dias após a assinatura.</p>

    <h2>O que os chatbots ficam proibidos de fazer</h2>
    <p>As restrições valem para todos os usuários menores de 18 anos e também para qualquer pessoa cuja idade não tenha sido verificada. Isso é importante: na prática, quem não prova que é adulto passa a receber o tratamento reservado a crianças. De acordo com o The Next Web, o chatbot não poderá:</p>
    <ul>
      <li>dizer que é uma pessoa real, que está vivo ou que tem emoções humanas;</li>
      <li>afirmar que mantém uma relação romântica, pessoal ou profissional com uma criança, nem puxar conversas emocionais sem ser provocado;</li>
      <li>criar dependência emocional no usuário;</li>
      <li>ter conversas sexuais com menores nem exibir conteúdo sexualmente explícito;</li>
      <li>promover suicídio, automutilação, transtornos alimentares ou uso de drogas e álcool;</li>
      <li>incentivar a criança a esconder segredos dos pais.</li>
    </ul>

    <h2>Verificação de idade e multas</h2>
    <p>As empresas terão de confirmar a idade dos usuários com pelo menos dois métodos, e ao menos um deles não pode depender apenas de documento oficial com foto. Os dados de idade coletados precisam ser apagados depois da verificação. É uma tentativa de equilibrar proteção e privacidade, já que sistemas de checagem de idade costumam ser criticados justamente por acumular informações sensíveis.</p>
    <p>A fiscalização fica com a procuradora-geral do estado, Letitia James, que poderá pedir multas civis de até US$ 25 mil por violação. A reportagem acrescenta que os tribunais também poderão mandar destruir os dados coletados de forma ilegal e até os modelos de IA que tenham sido treinados com eles, uma sanção rara e pesada para o setor.</p>

    <h2>De onde veio a pressão</h2>
    <p>Hochul citou o caso de Adam Raine, adolescente californiano de 16 anos que morreu por suicídio depois de conversar com o ChatGPT. Os pais dele fizeram campanha pela lei, segundo a organização Common Sense Media. Em nota do gabinete, a governadora afirmou: "Nenhuma empresa deveria estar empurrando chatbots para crianças que incentivam a automutilação ou fingem ser amigos delas, ou mais do que isso". O diretor da Common Sense Media, James P. Steyer, disse que Nova York "fez história ao sancionar a mais forte lei de segurança de IA para crianças do país".</p>
    <p>O movimento acontece num mês de forte pressão sobre a OpenAI. Conforme o The Next Web, oito estados americanos processaram a empresa neste mês por supostos danos a crianças. O Portal da AI já mostrou essa frente jurídica em <a href="/noticias/texas-processa-openai-altman-chatgpt-menores">Texas processa a OpenAI e Sam Altman por riscos do ChatGPT a menores</a>, em <a href="/noticias/florida-processa-openai-menores-supervisao-independente">Flórida pede à Justiça que bloqueie o ChatGPT de menores</a> e em <a href="/noticias/pais-processam-openai-gpt-4o-medicamento-epilepsia">Pais processam a OpenAI e dizem que o GPT-4o levou a filha a largar o remédio</a>. A reportagem lembra ainda que a Common Sense Media alertou neste mês que o ChatGPT para adolescentes não é seguro para menores de 18 anos, e que a Califórnia aprovou em setembro suas próprias regras para chatbots.</p>

    <h2>O que a indústria e os especialistas dizem</h2>
    <p>Nem todos comemoraram. A Tech:NYC, entidade que representa empresas de tecnologia de Nova York, alertou, em declaração reproduzida pelo New York Post, que a lei "pode forçar as empresas a restringir o acesso de menores a ferramentas de tutoria, ajuda com lição de casa e assistentes de programação". Em outras palavras: para não arriscar multa, as empresas poderiam bloquear tudo para quem não passou na verificação, inclusive usos educativos legítimos.</p>
    <p>Justine Gluck, do Future of Privacy Forum, disse à Associated Press que várias categorias da lei são amplas ou pouco definidas, o que pode dificultar a aplicação. Termos como "dependência emocional" e "conversa emocional não provocada" não têm fronteira óbvia, e caberá aos tribunais e à procuradoria dar contorno a eles.</p>

    <h2>O pacote dos monitores de bebê</h2>
    <p>A segunda lei assinada no mesmo dia vale para monitores de bebê novos, vendidos em Nova York, que transmitem áudio ou vídeo pela internet. Eles terão de trazer recursos de segurança que impeçam estranhos de ver ou ouvir o bebê, além de uma etiqueta de advertência. Não é uma lei de IA, mas mostra o mesmo raciocínio: produto conectado e voltado a crianças passa a ter obrigação explícita de segurança.</p>

    <h2>Contexto político</h2>
    <p>A reportagem observa que Hochul assinou as leis a poucos dias da eleição, na qual disputa o cargo com o republicano Bruce Blakeman, e que uma pesquisa Siena de 28 de outubro a colocava 14 pontos à frente. Isso é contexto apresentado pelo veículo, não uma afirmação de que a assinatura tenha motivação eleitoral.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo no Brasil, essa lei é um sinal do que vem por aí. Regras de plataforma costumam ser globais: se grandes empresas de IA precisarem implementar verificação de idade em dois passos e travas para menores para atender Nova York e Califórnia, é provável que as mudanças apareçam também nos produtos que você usa aqui. Para quem tem filhos, vale conhecer o que a lei brasileira já prevê no guia <a href="/artigos/eca-digital-e-ia-o-que-muda-para-pais-criancas-chatbots-e-apps">ECA Digital e IA: o que muda para pais, crianças, chatbots e apps</a>, ativar controles parentais e ensinar o que não se deve contar a um chatbot.</p>
    <p>Se você empreende e vende um app, um atendente virtual ou um GPT personalizado que conversa com o público, o recado é de gestão de risco. Deixe claro desde a primeira mensagem que o usuário fala com uma máquina, evite linguagem que simule amizade ou afeto, tenha filtros para temas sensíveis e pense em como confirmar a idade sem coletar dados demais. Para entender o outro lado, o da sua própria privacidade, leia <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a> e <a href="/artigos/chats-bloqueados-no-chatgpt-como-proteger-conversas-e-limites">chats bloqueados no ChatGPT e como proteger conversas</a>. A onda de leis estaduais também aparece em <a href="/noticias/conecticut-lei-ia-assinatura-transparencia">Connecticut e a lei de IA</a>.</p>

    <h2>O que ainda não se sabe</h2>
    <p>A lei ainda não está em vigor. Falta saber como as empresas vão verificar a idade na prática, se a OpenAI, a Character.ai e outras vão contestar a norma na Justiça e como a procuradoria definirá os termos mais vagos. Também não está claro se outros estados vão copiar o modelo de Nova York ou se o Congresso americano vai tentar criar uma regra federal que se sobreponha às estaduais. O que está confirmado, pela reportagem do The Next Web, é o conteúdo da lei assinada e as reações de apoiadores e críticos citadas acima.</p>
    <p>Nesta notícia, o fato central veio de uma única reportagem, do The Next Web, com base na Bloomberg Government e em declarações públicas do gabinete da governadora. Vale acompanhar o texto oficial da lei quando ele for divulgado para conferir cada obrigação com precisão.</p>
  `,
};
