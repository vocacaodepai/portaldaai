import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "meta-remove-trecho-termos-raspagem-treino-ia",
  title: "Meta retira dos termos comerciais trecho sobre raspagem e treino de IA",
  summary:
    "Após críticas, a Meta apagou dos termos comerciais a frase que previa usar conteúdo de sites de anunciantes para treinar IA; a empresa nega qualquer mudança.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/17/meta-removes-language-that-raised-scraping-and-ai-training-concerns/",
  date: "2026-10-17",
  publishedAt: "2026-10-17T22:35:00-03:00",
  topic: "regulacao",
  imageQuery: "Meta Platforms headquarters Menlo Park",
  content: `
    <p>A Meta retirou dos seus termos comerciais um trecho que dizia que a empresa poderia usar "qualquer conteúdo" dos domínios, páginas e URLs de uma conta empresarial para "fornecer, desenvolver, melhorar, pesquisar, treinar e manter a integridade" dos seus produtos e serviços. A mudança foi noticiada neste sábado pelo <a href="https://techcrunch.com/2026/10/17/meta-removes-language-that-raised-scraping-and-ai-training-concerns/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>, que por sua vez cita reportagem do <a href="https://www.theverge.com/tech/1013409/meta-removes-language-that-may-have-allowed-it-to-scrape-news-sites" target="_blank" rel="noopener noreferrer nofollow">The Verge</a>. A frase havia sido incluída numa atualização recente da página de termos comerciais e levantou suspeitas de que daria à empresa uma licença ampla para raspar sites de quem tem conta de negócios na plataforma.</p>
    <p>Segundo o TechCrunch, especialistas em direito ouvidos pelo Nieman Lab chamaram o texto de "disposição notável", porque ele poderia permitir que a Meta coletasse o conteúdo de qualquer editor com uma conta empresarial e o usasse para treinar seus modelos de IA. Um porta-voz da empresa havia respondido que a atualização não representava mudança na forma como a Meta rastreia a web. Agora, depois da repercussão, a própria empresa tirou o trecho e disse, em nota: "Ouvimos vocês e queremos esclarecer: os termos de rastreamento que consolidamos valiam apenas para nossos produtos de anúncios e negócios, e deixamos isso claro nos próprios termos. Isso não muda a forma como a Meta usa seus rastreadores."</p>

    <h2>O que dizia o trecho e por que gerou alarme</h2>
    <p>De acordo com o The Verge, a frase removida afirmava que a Meta poderia usar qualquer conteúdo desses domínios, páginas ou URLs para desenvolver, pesquisar e treinar seus produtos, serviços e recursos previstos nos termos comerciais e em outros termos suplementares aplicáveis. Para quem lê contrato com atenção, a palavra "treinar" ao lado de "qualquer conteúdo" é exatamente o tipo de formulação que acende alerta, ainda mais vinda de uma empresa que desenvolve modelos próprios de IA e disputa espaço com OpenAI, Google e Anthropic.</p>
    <p>A leitura de vários críticos, incluindo o Nieman Lab e James Grimmelmann, professor de direito da informação na Cornell, foi de que o texto era uma tentativa de garantir o direito de usar, sem pagar, conteúdo raspado de sites para treinar IA, inclusive passando por cima de instruções de bloqueio no arquivo robots.txt, o mecanismo padrão pelo qual um site diz a rastreadores o que podem ou não coletar. O The Verge registra que Andy Stone, vice-presidente de comunicação da Meta, e o porta-voz Daniel Roberts rebateram, dizendo que não havia mudança no uso de rastreadores e que qualquer sugestão em contrário era falsa. A retirada do texto, porém, foi bem mais do que um esclarecimento: a frase simplesmente deixou de existir na página.</p>
    <p>Em nova declaração ao The Verge, Roberts afirmou que os criadores de conteúdo podem continuar usando o robots.txt para sinalizar suas preferências e que "isso não é sobre raspar sites de notícias", acrescentando que as atualizações não dão à empresa novos direitos que se sobreponham a essas preferências.</p>

    <h2>O contexto: IA, direitos autorais e termos de uso</h2>
    <p>O episódio acontece em um momento em que o treinamento de modelos com conteúdo de terceiros está no centro de disputas judiciais. O TechCrunch lembra que a Meta venceu, em 2025, um processo de grande repercussão sobre violação de direitos autorais no treino de IA com livros, mas que outras ações contra empresas de IA, incluindo a própria Meta, seguem em andamento. Nos Estados Unidos, editores já processam a empresa por uso de material protegido. No Brasil, o debate sobre remuneração de conteúdo usado por modelos aparece tanto na discussão do marco legal de IA quanto em conflitos comerciais entre veículos e plataformas, assunto que aprofundamos em nosso guia sobre <a href="/artigos/ia-e-direitos-autorais-o-que-criadores-precisam-saber">IA e direitos autorais: o que criadores precisam saber</a>.</p>
    <p>Mudanças em termos de serviço são uma via silenciosa para ampliar o que uma empresa pode fazer com dados, porque quem mantém uma conta de anúncios ou uma página comercial costuma aceitar atualizações sem ler. Foi isso que tornou este caso sensível: não se tratava de um anúncio de produto, e sim de uma linha dentro de um contrato que milhões de anunciantes aceitam para continuar vendendo. Outros episódios recentes mostram o mesmo padrão de reação rápida da Meta a críticas públicas, como o reforço de avisos de segurança do assistente Muse, que cobrimos em <a href="/noticias/meta-reforca-aviso-seguranca-muse-apos-vulnerabilidade">Meta reforça aviso de segurança do Muse após vulnerabilidade</a>.</p>

    <blockquote>"Isso não muda a forma como a Meta usa seus rastreadores", disse a empresa em nota, afirmando que os termos consolidados valiam só para anúncios e produtos de negócios.</blockquote>

    <h2>Por que isso importa para você</h2>
    <p>Se você tem um blog, uma loja virtual, um perfil profissional ou presta serviço para clientes que anunciam no Facebook e no Instagram, o caso é um lembrete prático de que o conteúdo que você publica pode ser tratado como matéria-prima de IA, e de que o contrato é parte disso. A Meta recuou nesta frase, mas o recuo não é uma garantia de longo prazo: as empresas atualizam termos com frequência, e o que vale para você é o texto vigente no dia em que você aceita. Para quem produz conteúdo como fonte de renda, vale tratar a leitura dos termos de plataformas como parte da rotina, do mesmo jeito que se acompanha uma mudança de regra do Google, tema que tratamos em <a href="/artigos/blog-com-ia-e-adsense-o-que-o-google-permite-e-proibe">blog com IA e AdSense: o que o Google permite e proíbe</a>.</p>
    <p>Do lado do pequeno empresário que anuncia, o ponto central é separar duas coisas. Uma é o rastreador que lê sua página para verificar um anúncio, montar catálogo ou checar a qualidade do destino, o que é função normal de uma plataforma de anúncios. Outra é o uso do mesmo conteúdo para treinar modelos de IA. A própria Meta diz agora que os termos só tratam da primeira. Mesmo assim, quem tem textos, fotos de produto ou cursos próprios deveria saber o que a plataforma pode fazer com eles, e isso conversa diretamente com a Lei Geral de Proteção de Dados quando há dados de clientes envolvidos, como explicamos no <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio que usa IA</a>.</p>

    <h2>O que fazer na prática</h2>
    <p>O primeiro passo é conferir o seu robots.txt. É o arquivo na raiz do site que informa a rastreadores quais áreas podem ser lidas. A Meta afirma que respeita essas preferências, e outras empresas de IA publicam nomes de rastreadores específicos que o dono do site pode bloquear. Se você não quer que seu conteúdo seja usado em treino, vale listar esses rastreadores e bloquear cada um, sabendo que o robots.txt é um pedido, não uma barreira técnica: quem decide respeitá-lo é o rastreador.</p>
    <p>O segundo passo é guardar o que você aceitou. Salve uma cópia da versão dos termos comerciais da plataforma em que você anuncia, com a data. Se uma cláusula mudar no futuro, você terá como comparar e mostrar o que estava em vigor quando assinou. Isso é especialmente útil para agências e gestores de tráfego que respondem pela conta de clientes e precisam explicar a eles o que está sendo concedido à plataforma.</p>
    <ul>
      <li>Revise o robots.txt do seu site e decida, rastreador por rastreador, o que permitir.</li>
      <li>Guarde uma cópia datada dos termos comerciais das plataformas em que você anuncia.</li>
      <li>Registre no contrato com clientes quem responde por aceitar termos de plataformas em nome deles.</li>
      <li>Acompanhe comunicados oficiais, não só rumores, quando uma plataforma mudar regras de dados.</li>
    </ul>
    <p>O terceiro passo é pensar no conteúdo como ativo. Quem vende produtos digitais, newsletters ou consultoria baseada em texto próprio tem nesse material o principal diferencial. Entender como a privacidade e o uso de dados funcionam nas ferramentas do dia a dia, como detalhamos em <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a>, ajuda a decidir onde publicar, o que deixar em área restrita e o que cobrar por acesso.</p>

    <div class="callout-box"><span class="callout-label">O que ficou claro e o que não ficou</span><p>Confirmado pelas fontes: a frase sobre uso de conteúdo para treinar produtos foi removida da página de termos comerciais, e a Meta diz que nada muda no uso de rastreadores. Não confirmado: qualquer intenção por trás da redação original. A empresa apresenta o texto como uma consolidação de termos de anúncios e negócios, enquanto críticos o leram como uma licença ampla para raspagem.</p></div>

    <h2>O que observar nos próximos dias</h2>
    <p>Dois pontos merecem atenção. O primeiro é se a Meta publicará uma versão consolidada e comentada dos termos, deixando explícito o que seus rastreadores fazem com páginas de anunciantes. O segundo é se editores e associações de imprensa vão pedir garantias formais, já que uma nota à imprensa não tem o mesmo peso de uma cláusula contratual. Enquanto isso, o episódio reforça uma tendência que já aparece em outras frentes: a disputa entre quem produz conteúdo e quem treina modelos está migrando dos tribunais para os contratos e para os arquivos de configuração dos sites.</p>
    <p>Para o leitor brasileiro que trabalha com conteúdo, anúncios ou atendimento, a lição é objetiva. A conveniência de usar plataformas gigantes vem com cláusulas que podem mudar sem aviso destacado, e a reação pública tem funcionado como mecanismo de correção, como mostrou este caso em poucos dias. Ler o contrato continua sendo parte do trabalho. Quem usa o assistente da Meta no dia a dia pode conferir também o que muda para o seu uso em <a href="/artigos/meta-ai-no-whatsapp-o-que-faz-privacidade-e-como-usar">Meta AI no WhatsApp: o que faz, privacidade e como usar</a>.</p>

    <p>Vale registrar ainda que a história começou com um trecho curto de texto e acabou em declarações de executivos de comunicação, repercussão entre professores de direito e uma alteração oficial na página em poucos dias. Isso mostra o peso crescente que cláusulas aparentemente técnicas passaram a ter para a economia de quem vive de publicar na internet.</p>
  `,
  faq: [
    {
      question: "O que a Meta removeu dos termos comerciais?",
      answer:
        "A frase que dizia que a Meta poderia usar qualquer conteúdo dos domínios, páginas ou URLs de uma conta empresarial para fornecer, desenvolver, pesquisar e treinar seus produtos e serviços. Segundo o The Verge, ela não aparece mais na página.",
    },
    {
      question: "A Meta passou a raspar sites para treinar IA?",
      answer:
        "A empresa nega. Em nota, afirmou que os termos de rastreamento consolidados valiam apenas para anúncios e produtos de negócios e que nada muda na forma como usa seus rastreadores.",
    },
    {
      question: "O robots.txt ainda protege meu site?",
      answer:
        "A Meta diz que criadores podem usar o robots.txt para sinalizar preferências e que os termos não dão direitos que se sobreponham a elas. O arquivo é um pedido a rastreadores, não um bloqueio técnico.",
    },
  ],
};
