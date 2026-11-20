import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-message-threads-beta-api-claude-agentes-historico",
  title: "Anthropic lança threads na API do Claude e corta espera em 35%",
  summary: "O beta de message threads deixa agentes enviarem a conversa inteira uma vez e depois só as mensagens novas. A Anthropic diz que a espera cai cerca de 35% em contextos longos.",
  author: "Bruno Danello",
  sourceName: "The Next Web, Anthropic",
  sourceUrl: "https://thenextweb.com/news/anthropic-message-threads-beta-claude-api-agents",
  publishedAt: "2026-11-02T18:45:00-03:00",
  topic: "lancamentos",
  imageQuery: "Anthropic logo",
  coverImage: {
    url: "/images/covers/anthropic-message-threads-beta-api-claude-agentes-historico.webp",
    width: 1280,
    height: 720,
    credit: "https://brandfetch.com/anthropic.com?view=library&amp;library=default&amp;collection=logos&amp;asset=idBLFXf2oS (CC0) / Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File%3AAnthropic%20Logo%202.webp",
  },
  date: "2026-11-02",
  content: `
    <p>A Anthropic anunciou nesta segunda-feira (2) o message threads, um recurso em beta público da API do Claude pensado para quem constrói agentes de IA. A ideia é simples: em vez de reenviar o histórico completo da conversa a cada pedido, o agente manda o conteúdo inteiro uma única vez e, nas chamadas seguintes, envia apenas as mensagens novas junto com o identificador da última resposta do Claude. A informação foi resumida pelo The Next Web, com base no anúncio da própria Anthropic.</p>

    <h2>Como funciona</h2>
    <p>Hoje, um agente que trabalha por horas acumula uma conversa enorme: instruções, resultados de ferramentas, trechos de arquivos. A cada passo, o programa costuma reenviar tudo isso para a API. Com as threads, o fluxo muda. A primeira chamada leva a conversa completa. As próximas levam só o que é novo e a referência da resposta anterior, e a Anthropic reconstrói o contexto do lado dela.</p>

    <p>Segundo a reportagem, a empresa afirma que o recurso reduz em cerca de 35% a espera típica até o Claude começar a responder em pedidos de 500 mil a 1 milhão de tokens. Token é a unidade em que os modelos medem texto, e 1 milhão equivale a centenas de páginas. Ou seja, o ganho aparece sobretudo em agentes de longa duração e em tarefas com muito contexto, como revisar um repositório inteiro.</p>

    <h2>Economiza tempo, não dinheiro</h2>
    <p>Um ponto importante: a melhoria é de velocidade, não de custo. De acordo com o texto, o Claude continua processando a conversa inteira em cada turno, e a Anthropic diz que preços e limites de uso permanecem os mesmos. A reportagem lembra que a empresa já havia cortado em 75% o preço do cache em setembro, o que é outra frente de redução de custo para agentes. As duas coisas se somam, mas são separadas: o cache mexe no preço, as threads mexem na latência e no volume de dados trafegados.</p>

    <p>Quem acompanha nossa cobertura de custos de IA pode ligar isso ao que já publicamos sobre o gasto com agentes, em <a href="/noticias/anthropic-relatorios-gasto-claude-retorno-orcamentos-compartilhados">Anthropic lança relatórios que mostram o que o gasto com Claude rende</a>, e ao modelo mais barato de setembro, em <a href="/noticias/anthropic-lanca-claude-opus-5-5-mais-barato-rapido">Anthropic lança o Claude Opus 5.5, mais barato e rápido</a>.</p>

    <h2>Limites e cuidados de dados</h2>
    <p>O recurso tem restrições que o desenvolvedor precisa conhecer. Segundo o The Next Web, as threads ficam apenas na memória, criptografadas, e nunca são gravadas em disco. Elas expiram cinco minutos depois da última requisição. Por isso, a equipe precisa manter a própria cópia de cada conversa para retomá-la depois desse prazo. Também há uma exclusão relevante para empresas reguladas: as threads não são elegíveis a configurações de retenção zero de dados (zero data retention) nem de HIPAA, a norma americana de dados de saúde.</p>

    <p>O beta funciona com todos os modelos do Claude, na plataforma da Anthropic e também por meio da AWS, do Microsoft Foundry e do Google Cloud. A reportagem acrescenta que a maioria dos usuários do Claude Code já está com as threads ativadas, o que indica que a Anthropic testou o recurso no próprio produto antes de abri-lo a terceiros. O Claude Code é a ferramenta de programação da empresa, e já foi tema aqui em <a href="/noticias/claude-code-variavel-rm-sem-aprovacao-skip-permissions">Claude Code ganha variável que deixa o agente apagar arquivos sem pedir</a>.</p>

    <h2>Por que a Anthropic fez isso agora</h2>
    <p>Agentes se tornaram o principal uso da API. Quando cada passo exige reenviar centenas de milhares de tokens, o tempo de resposta vira gargalo, e o usuário final sente isso como lentidão. A Anthropic também compete com a OpenAI e o Google justamente na experiência de agentes, e reduzir a espera é um argumento direto para desenvolvedores que escolhem em qual API construir. O texto não traz comparação com concorrentes, então essa leitura é nossa, e não uma afirmação da empresa.</p>

    <p>Vale notar também o que o recurso não resolve. Uma conversa de 1 milhão de tokens continua cara e pesada de processar, e agentes mal desenhados que acumulam contexto inútil seguirão desperdiçando recursos. Recomendações de arquitetura, como usar menos subagentes, aparecem em <a href="/noticias/anthropic-um-agente-so-vence-varios-subagentes-kit-migracao">Anthropic recomenda trocar vários subagentes por um agente só</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que você não programe, o recurso afeta as ferramentas de IA que usa e os serviços que pode vender.</p>

    <ul>
      <li><strong>Para desenvolvedores e quem monta automações:</strong> agentes com contexto longo respondem mais rápido sem mudar a fatura. Teste o beta em um fluxo real e meça o tempo antes e depois, guardando a cópia local da conversa por causa da expiração de cinco minutos.</li>
      <li><strong>Para freelancers que vendem agentes:</strong> menor espera melhora a percepção de qualidade do cliente. O guia <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como ganhar dinheiro criando e vendendo agentes de IA personalizados</a> mostra caminhos de serviço.</li>
      <li><strong>Para empresas com dados sensíveis:</strong> como as threads não valem para retenção zero, quem tem esse tipo de contrato deve ficar de fora por enquanto.</li>
      <li><strong>Para quem só usa o chat:</strong> o efeito é indireto, mas o texto <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot ou automação: qual a diferença</a> ajuda a entender por que isso importa.</li>
    </ul>

    <div class="callout-box callout-tip">
      <span class="callout-label">Cuidado prático</span>
      <p>Antes de ligar um recurso em beta em produção, rode primeiro em um ambiente de teste e mantenha um plano de reserva que reenvie a conversa completa caso a thread expire. Assim, uma pausa de mais de cinco minutos não derruba o atendimento de um cliente.</p>
    </div>

    <h2>O que observar a seguir</h2>
    <p>O primeiro ponto é a saída do beta e se a Anthropic estenderá o prazo de cinco minutos, hoje um obstáculo para tarefas que esperam resposta humana. O segundo é se OpenAI e Google lançarão mecanismos parecidos, o que mostraria que o reenvio de histórico virou problema comum a todas as plataformas. O terceiro é se a Anthropic abrirá o recurso para clientes com retenção zero. Por ora, o que está confirmado vem do anúncio da empresa conforme o The Next Web: ganho de cerca de 35% de espera em contextos longos, sem mudança de preço.</p>
  `,
};
