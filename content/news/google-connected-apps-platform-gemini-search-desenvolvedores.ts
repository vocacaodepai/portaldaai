import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-connected-apps-platform-gemini-search-desenvolvedores",
  title: "Google abre o Gemini e a Busca para apps de terceiros em nova plataforma",
  summary:
    "A Connected Apps Platform deixa qualquer empresa ou desenvolvedor colocar seu app dentro do Gemini e da Busca com IA. Está em beta nos EUA, com lista de espera.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/28/as-ai-agents-reshape-the-web-google-opens-gemini-and-search-to-more-apps/",
  date: "2026-10-28",
  publishedAt: "2026-10-28T18:40:00-03:00",
  topic: "lancamentos",
  imageQuery: "Google Gemini logo",
  content: `
    <p>O Google lançou nesta quarta-feira (28) a Connected Apps Platform, um programa que abre o Gemini e a Busca com IA para aplicativos de terceiros. A novidade foi reportada pelo TechCrunch, em texto de Sarah Perez. A ideia é que qualquer empresa ou desenvolvedor possa registrar o seu app e fazer com que ele apareça dentro das experiências de IA do Google, para que o usuário resolva tarefas sem sair da conversa. Esta matéria é uma análise própria a partir desse relato; o crédito da fonte está no fim do texto.</p>

    <p>Os apps conectados já existiam em versão restrita. Eles foram apresentados neste ano no app do Gemini e na Busca e permitem ligar serviços de terceiros ao assistente para executar ações específicas, como pedir a um app de design que monte um panfleto ou a um serviço de música que crie uma playlist. O que muda agora é a porta de entrada: em vez de parcerias fechadas uma a uma, o Google abre o processo para quem quiser participar.</p>

    <h2>Como a plataforma funciona</h2>
    <p>Segundo o TechCrunch, o desenvolvedor escolhe onde o seu app aparece: na Busca, no app do Gemini ou nos dois. Depois do lançamento, é possível acompanhar tráfego, latência e taxa de erros, o que dá à empresa um painel mínimo para saber se a integração está funcionando. As marcas também mantêm o controle da identidade, com logotipos verificados e contas autenticadas.</p>

    <p>Para entrar, o caminho técnico tem dois passos. Primeiro, o time integra o serviço a um servidor MCP hospedado na nuvem ou ao Android MCP, usando as APIs AppFunctions. Depois, usa o Google Connected Console para registrar, testar e enviar o app para aprovação. O MCP, sigla de Model Context Protocol, é o padrão que virou a forma mais comum de ligar ferramentas a assistentes de IA, e já explicamos como ele funciona no artigo <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">MCP: o que é e como conecta agentes de IA</a>.</p>

    <h2>Quem já está dentro e o que falta</h2>
    <p>De acordo com a reportagem, o Gemini já tem mais de 50 apps conectados. Entre os parceiros estão Adobe, Experian, Localiza e Peloton, além de serviços do próprio Google, como Workspace, Fotos, YouTube Music e Google Home. Na Busca, a lista é menor e inclui Instacart, Canva, YouTube Music e Yahoo Fantasy Football. A plataforma de meditação Calm foi anunciada como novo parceiro e deve chegar em breve ao Gemini e à Busca.</p>

    <p>A disponibilidade ainda é limitada. A plataforma está em prévia pública, em beta, para desenvolvedores nos Estados Unidos que entrarem numa lista de espera. O Google não informou quando abre para todos, e o avanço dos apps conectados na Busca acontece nas próximas semanas, segundo o relato. Para o Brasil, não há previsão, embora a Localiza, empresa brasileira de aluguel de carros, apareça entre os parceiros do Gemini.</p>

    <h2>Uma corrida para virar o balcão de apps da IA</h2>
    <p>O TechCrunch compara o movimento com o que OpenAI e Meta fazem com o ChatGPT e o Muse. A lógica é a mesma: o usuário acessa seus serviços favoritos pelo assistente de IA que prefere, em vez de abrir um app por vez. O texto observa que isso só funciona se houver uma variedade grande de apps disponíveis, e é por isso que o Google abre as portas agora.</p>

    <p>Vale lembrar que esse cenário tem lados diferentes. Do lado do consumidor, a promessa é conveniência. Do lado das empresas, a pergunta é se vale a pena depender de plataformas que decidem quais apps aparecem. Já vimos movimentos opostos, como o <a href="/noticias/walmart-agent-gateway-agentes-ia-compras-mcp">Walmart, que abriu um portal para agentes de IA</a>, e sites que bloqueiam esses agentes, como mostramos em <a href="/noticias/agentes-ia-bloqueados-sites-comercio">agentes de IA bloqueados em sites de comércio</a>. A plataforma do Google tenta ficar no meio: a empresa participa, mas nos termos e no formato do Google.</p>

    <p>O assunto também se liga às novidades do próprio Gemini. Na mesma semana, o Google mostrou como o <a href="/noticias/google-politica-privacidade-gmail-fotos-anuncios-personal-intelligence">Personal Intelligence conecta Gmail e Fotos ao assistente</a>, e o Chrome ganhou um <a href="/noticias/chrome-autofill-ia-gmail-formularios-google">autofill que busca dados no Gmail</a>. Os apps conectados completam o quadro: o Gemini conhece seus dados e agora também pode agir em serviços de terceiros.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo em beta e só nos EUA, a plataforma aponta para uma mudança de como as pessoas vão encontrar produtos e serviços. Se você tem um negócio, presta serviço online ou desenvolve software, vale prestar atenção:</p>
    <ul>
      <li><strong>Uma nova vitrine, parecida com o SEO.</strong> O TechCrunch sugere que estar entre os apps conectados pode virar uma espécie de SEO da web com agentes: quem aparece na resposta da IA ganha o cliente. Quem vende pela internet deve acompanhar isso desde já.</li>
      <li><strong>Integrar por MCP deixa de ser detalhe técnico.</strong> Um servidor MCP bem feito pode servir ao Gemini e a outros assistentes. Para freelancers e agências, saber montar essa camada é um serviço novo, tema que exploramos em <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como ganhar dinheiro criando e vendendo agentes de IA personalizados</a>.</li>
      <li><strong>Mais compras e tarefas resolvidas dentro do chat.</strong> Quem vende produtos precisa pensar em como o cliente chega até a loja quando o primeiro contato é uma conversa com a IA, e não uma busca com links. O artigo sobre <a href="/artigos/agentes-de-ia-comprando-por-voce-comercio">agentes de IA comprando por você</a> ajuda a entender o impacto.</li>
      <li><strong>Cuidado com dependência.</strong> Colocar o seu app dentro de uma plataforma significa seguir regras que podem mudar. Teste com calma, meça o retorno e mantenha o seu site e os seus canais próprios.</li>
    </ul>

    <div class="callout-box callout-tip">
      <span class="callout-label">Dica prática</span>
      <p>Se você tem um app ou serviço com API, comece mapeando as três ações que um cliente mais pede (consultar um pedido, agendar, pagar) e veja se elas podem ser expostas por um servidor MCP. Isso serve ao Google e a qualquer outro assistente que adote o padrão, e já deixa você pronto quando a lista de espera abrir para o seu país.</p>
    </div>

    <h2>O que observar a seguir</h2>
    <p>O primeiro ponto é a abertura além dos EUA e das empresas que entrarem na lista de espera, sem data definida pelo Google. O segundo é como a Busca vai escolher qual app mostrar quando vários servirem para a mesma tarefa, já que os critérios de ranking não foram detalhados nos relatos. O terceiro é a adesão de empresas brasileiras: a presença da Localiza é um sinal, mas uma plataforma de apps só vira útil para o público daqui quando houver variedade em português. Por enquanto, o essencial é este: o Google passou a aceitar apps de qualquer empresa ou desenvolvedor no Gemini e na Busca, em beta nos EUA, com integração por MCP e painel de desempenho, segundo o TechCrunch.</p>
  `,
};
