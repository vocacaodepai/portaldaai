import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "citi-pnc-bancos-cliente-responde-agente-ia-mesmo-hackeado",
  title: "Citi e PNC mudam contrato: cliente responde pelo agente de IA na conta",
  summary:
    "Citi, PNC e Citizens avisam que quem dá acesso da conta a um agente de IA responde pelo que ele fizer, mesmo se for hackeado. Veja como se proteger.",
  author: "Bruno Danello",
  sourceName: "TechCrunch, American Banker",
  sourceUrl:
    "https://techcrunch.com/2026/11/18/more-banks-says-customers-using-ai-agents-are-on-their-own-even-if-they-get-hacked/",
  date: "2026-11-19",
  publishedAt: "2026-11-19T08:11:00-03:00",
  topic: "seguranca",
  imageQuery: "Citigroup Center New York",
  content: `
    <p>Mais bancos americanos passaram a dizer, por escrito, que quem entrega o acesso da conta a um agente de inteligência artificial fica sozinho se algo der errado. Segundo reportagem do TechCrunch publicada nesta quarta-feira (18), o Citibank, terceiro maior banco comercial dos Estados Unidos, mudou nesta semana o seu contrato de uso dos canais digitais para deixar claro que o cliente responde por tudo o que um assistente de IA de terceiros fizer na conta, inclusive quando a ferramenta for invadida ou vazar a senha. O PNC, oitavo maior banco do país, alterou seus termos no mesmo dia, e o Citizens enviou e-mail aos clientes com o mesmo recado.</p>

    <p>O movimento fecha um cerco que começou em outubro, quando JPMorgan e Bank of America adotaram políticas parecidas. Na prática, os maiores bancos dos Estados Unidos estão desenhando a regra do jogo para os agentes de IA que prometem cuidar das finanças pessoais: a IA pode até ajudar, mas o risco é do cliente.</p>

    <h2>O que se sabe</h2>
    <p>De acordo com o TechCrunch, a mudança do Citi aparece no Online User Agreement, o contrato que rege o uso do banco pela internet e pelo aplicativo. Um porta-voz do banco disse à publicação que clientes que dão acesso a agentes de IA de terceiros são “responsáveis pelas atividades realizadas por meio desses agentes” e que o objetivo da atualização é que o cliente entenda os riscos de compartilhar credenciais bancárias. Pelo texto descrito na reportagem, se a ferramenta de IA vazar o login ou for hackeada, o prejuízo causado pelos invasores fica com o dono da conta. O banco ressalva que os agentes oferecidos pelo próprio Citi podem ser usados sem esse peso extra.</p>

    <p>Os pontos confirmados até aqui:</p>
    <ul>
      <li><strong>Citi:</strong> contrato atualizado nesta semana; cliente responde por transações intencionais ou não feitas por agentes de terceiros, inclusive em caso de invasão da ferramenta.</li>
      <li><strong>PNC:</strong> mudou os termos em 18 de novembro, segundo o TechCrunch.</li>
      <li><strong>Citizens:</strong> mandou e-mail aos clientes avisando que eles respondem pelo que o assistente de IA fizer. O TechCrunch diz ter visto a mensagem.</li>
      <li><strong>JPMorgan e Bank of America:</strong> os dois maiores bancos americanos anunciaram políticas parecidas em outubro.</li>
      <li><strong>Wells Fargo:</strong> segundo o American Banker, o banco atualizou o contrato de acesso on-line com vigência a partir de 24 de novembro. O cliente passa a responder pela atividade de agentes de IA e precisa conseguir provar que revogou o acesso, sob pena de continuar responsável pelo que o agente fizer depois.</li>
    </ul>

    <p>Nós já tínhamos mostrado o começo dessa história, quando o <a href="/noticias/bank-of-america-pede-clientes-nao-dar-senha-a-agentes-de-ia">Bank of America pediu aos clientes que não entregassem a senha a agentes de IA</a> e quando <a href="/noticias/schwab-jpmorgan-bloqueiam-agentes-ia-externos-contas-clientes">Schwab e JPMorgan barraram agentes externos de mexer nas contas</a>. A novidade agora é que o aviso deixou de ser recomendação e virou cláusula de contrato em mais bancos, e com uma frase dura: nem a invasão da ferramenta tira a responsabilidade do cliente.</p>

    <h2>O que ainda não está confirmado</h2>
    <p>A reportagem não traz o texto integral das novas cláusulas nem a data exata em que cada uma passa a valer, com exceção do Wells Fargo. Também não detalha o que exatamente mudou nos termos do PNC. Não há, nas matérias consultadas, número de clientes afetados, casos concretos de contas invadidas por meio de agentes nem manifestação de reguladores americanos sobre as mudanças. As empresas de IA que vendem agentes financeiros, como OpenAI e Google, não aparecem com posicionamento na reportagem.</p>

    <p>Outro ponto em aberto é como o banco vai distinguir, na hora de uma contestação, uma transação feita pelo próprio cliente de uma feita por um agente. No caso do Wells Fargo, uma especialista ouvida pelo American Banker levanta justamente a dúvida sobre o que acontece se um agente sair do controle mesmo depois de o cliente provar que cortou o acesso. Essas regras devem ser testadas na prática, e possivelmente na Justiça, nos próximos meses.</p>

    <h2>Por que os bancos estão fazendo isso</h2>
    <p>Há duas leituras, e as duas convivem. A primeira é de segurança. Um agente que entra na conta com usuário e senha do cliente é, para o sistema do banco, indistinguível do próprio cliente. Se a ferramenta for enganada por um ataque de injeção de comandos, guardar mal a credencial ou sofrer um vazamento, o banco não tem como saber quem autorizou a transferência. Empurrar a responsabilidade para o cliente é a forma mais simples de se proteger juridicamente enquanto não existe um padrão para identificar agentes e o que cada um pode fazer.</p>

    <p>A segunda leitura é de negócio. O próprio TechCrunch lembra que os bancos veem os agentes de IA como ameaça: as ações do setor chegaram a cair depois de reportagens sobre ferramentas capazes de ajudar o consumidor a fugir de tarifas e de contas que rendem pouco, justamente o que sustenta parte da margem dos bancos. Quem controla o agente controla a relação com o cliente. A reportagem compara o caso com aplicativos de transporte e de entrega, que também resistem à ideia de serem usados por agentes de terceiros. Faz sentido, então, que o Citi libere sem ressalvas os agentes que ele mesmo oferece.</p>

    <p>Vale notar o contraste com a ferramenta de finanças pessoais que a Anthropic lançou no começo do mês, descrita pela reportagem como “somente leitura”: ela não pode mover, administrar nem investir o dinheiro do usuário. É exatamente o modelo que os bancos dizem tolerar, e o oposto de agentes que pagam contas e fazem compras, como os que a OpenAI passou a permitir com o <a href="/noticias/openai-lanca-chatgpt-wallet-dots-fazem-compras">ChatGPT Wallet e os agentes dots</a>.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Regra prática</span>
      <p>Se um agente de IA pede usuário e senha do banco para funcionar, ele está entrando pela porta dos fundos. Prefira integrações oficiais, com permissão limitada e botão para revogar, e só acesso de leitura sempre que der.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>As regras descritas valem para clientes de bancos dos Estados Unidos, mas a lógica atravessa fronteiras. No Brasil, o Pix faz o dinheiro sair na hora e o Open Finance já permite que aplicativos autorizados consultem dados da conta com o seu consentimento, dentro do app do banco e com prazo e escopo definidos. É esse tipo de canal controlado que os bancos americanos estão sinalizando como o caminho aceito. Entregar a senha a um agente que age em seu nome fica fora de qualquer proteção, aqui ou lá.</p>

    <p>Cuidados que valem desde já para quem testa agentes com dinheiro:</p>
    <ul>
      <li>Nunca digite senha do banco, código do token ou frase de recuperação em um chat de IA ou em um agente que aja por você.</li>
      <li>Leia o contrato do seu banco e do serviço de IA antes de conectar qualquer conta. Procure quem responde por transação feita pela ferramenta.</li>
      <li>Dê permissão só de leitura sempre que possível e revogue o acesso das ferramentas que você não usa mais. Guarde o comprovante da revogação.</li>
      <li>Ative chave de acesso e verificação em duas etapas. O passo a passo está em <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">chave de acesso: como ativar e proteger sua conta de golpes</a>.</li>
      <li>Se cair num golpe, aja rápido. Veja <a href="/artigos/golpe-do-pix-o-que-fazer-nas-primeiras-horas-med-e-uso-de-ia">o que fazer nas primeiras horas depois de um golpe do Pix</a>.</li>
    </ul>

    <p>Para quem quer usar IA para organizar as contas sem correr esse risco, o caminho mais seguro hoje é trabalhar com extratos exportados e planilhas, sem dar a chave da conta a ninguém. O guia <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">como usar IA para organizar finanças pessoais</a> mostra como fazer isso.</p>

    <p>Quem desenvolve automações ou vende serviços de IA para pequenas empresas também deve tirar uma lição: fluxo que guarda senha de cliente e movimenta dinheiro sem aprovação humana virou passivo. Credenciais próprias com escopo reduzido, registro de cada ação e confirmação humana antes de qualquer pagamento passam a ser exigência, não detalhe.</p>

    <p>Este texto se baseia na reportagem do TechCrunch sobre Citi, PNC e Citizens e na do American Banker sobre o Wells Fargo. A análise do que isso significa para o leitor brasileiro é do Portal da AI.</p>
  `,
};
