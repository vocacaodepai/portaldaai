import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "github-copilot-fusion-escolhe-modelo-agentes-40-por-cento-prs",
  title: "GitHub lança o Copilot Fusion, que escolhe o modelo de IA de cada tarefa",
  summary:
    "No GitHub Universe, a Microsoft apresentou o Copilot Fusion e disse que agentes já abrem o rascunho de mais de 40% dos pull requests da plataforma.",
  author: "Bruno Danello",
  sourceName: "The Next Web, GitHub",
  sourceUrl: "https://thenextweb.com/news/github-universe-copilot-fusion-octoverse-agents",
  date: "2026-10-29",
  publishedAt: "2026-10-29T10:40:00-03:00",
  topic: "lancamentos",
  imageQuery: "GitHub logo",
  content: `
    <p>O GitHub apresentou na quarta-feira, 28 de outubro de 2026, durante o GitHub Universe, o Copilot Fusion, um sistema que decide qual modelo de IA, ou qual combinação de modelos, deve cuidar de cada etapa de uma tarefa de programação. A informação é do The Next Web, em reportagem de Ana Maria Constantin. No mesmo evento, a empresa divulgou o relatório Octoverse, com um número que chama atenção: mais de 40% dos pull requests da plataforma já começam com um rascunho feito por agente de IA.</p>

    <p>Para quem programa, contrata programadores ou usa IA para criar sites, automações e aplicativos, o anúncio mostra duas coisas ao mesmo tempo. A escolha do modelo deixa de ser uma decisão manual de quem usa a ferramenta, e o trabalho de escrever código está sendo dividido, cada vez mais, entre pessoas e agentes.</p>

    <h2>O que é o Copilot Fusion</h2>
    <p>Segundo a reportagem, o Fusion analisa o que cada etapa de uma tarefa exige, como raciocínio, geração de código, depuração e uso de ferramentas, e então envia o trabalho para o modelo mais adequado. Em vez de o desenvolvedor escolher entre um modelo mais caro e potente ou outro mais rápido e barato, o sistema faz essa distribuição por conta própria, e pode misturar modelos dentro de uma mesma tarefa.</p>

    <p>Jay Parikh, vice-presidente executivo de CoreAI da Microsoft, escreveu que a versão Fusion Max chegou a dois pontos do Claude Opus 5.5 Max, da Anthropic, no índice de agentes de código da Artificial Analysis, com cerca de metade do custo e 40% menos tempo por tarefa. Satya Nadella, presidente-executivo da Microsoft, afirmou que o Fusion entrega qualidade de nível de fronteira 40% mais rápido e com até 77% de custo a menos. Esses números são informados pela própria empresa e ainda não foram confirmados por testes independentes.</p>

    <p>A lógica é parecida com a de quem monta uma equipe: o trabalho difícil vai para o profissional mais caro, e o trabalho repetitivo vai para quem custa menos. Na prática, isso pode baratear o uso de agentes de código em projetos grandes, onde cada tarefa gasta muitos tokens.</p>

    <h2>Preço e disponibilidade</h2>
    <p>Desde 28 de outubro, clientes do GitHub Enterprise podem usar todos os recursos do Copilot sem uma assinatura separada, pagando pelos créditos de IA que consumirem. Por enquanto, a oferta é vendida pela equipe comercial do GitHub, e o acesso por conta própria aparece como em breve. Quem já tem o Copilot Business ou o Enterprise pode manter o plano atual ou trocar quando quiser.</p>

    <p>A reportagem não informa preços por crédito nem fala de disponibilidade no Brasil. Para o desenvolvedor autônomo ou para a pequena equipe, o caminho mais provável é esperar o acesso individual e comparar o custo com o de outros agentes de código antes de decidir.</p>

    <h2>Outras novidades do GitHub Universe</h2>
    <p>O evento trouxe mais anúncios voltados a agentes. O novo aplicativo GitHub Copilot conecta agentes e ferramentas entre projetos e roda trabalho de agente em vários repositórios ao mesmo tempo. Uma sessão de agente na nuvem pode continuar entre o aplicativo, o VS Code, a linha de comando e a web sem perder o contexto.</p>

    <p>As automações do Copilot agora aprendem com os próprios resultados e propõem mudanças para o desenvolvedor aprovar. Houve ainda o Copilot code review Max, que, segundo o GitHub, teve a maior pontuação F1 no ReviewBench para problemas de alta gravidade. O sistema unificado que roda os agentes do Copilot também passou a funcionar no Foundry, o serviço gerenciado da Microsoft para agentes de longa duração.</p>

    <p>Por trás disso há uma demanda pesada de infraestrutura. O GitHub contou que, neste ano, adicionou 4 milhões de núcleos de CPU, 160 petabytes de armazenamento rápido e 50 terabits por segundo de capacidade de rede, e que está migrando para uma implantação em várias regiões na Azure, prevista para terminar no início do ano que vem.</p>

    <h2>Os números do Octoverse</h2>
    <p>O relatório cobre os 12 meses até 30 de setembro. Os desenvolvedores enviaram código 17,9 bilhões de vezes, mais do que em 2024 e 2025 somados. Os commits chegaram a 34,3 bilhões e os pull requests integrados, a 1,3 bilhão. A plataforma tem mais de 225 milhões de desenvolvedores, com 38,3 milhões nos Estados Unidos e 32 milhões na Índia.</p>

    <p>O dado mais comentado é o dos agentes. Em setembro, mais de 40% dos pull requests começaram com um rascunho gerado por agente, contra 17% em março. Foram 110 milhões só naquele mês. O GitHub avisa que essa contagem é um piso, porque não consegue identificar todos os agentes. Também apareceu que 61% dos usuários do Copilot que escolhem o próprio modelo usaram mais de um em setembro, o que ajuda a explicar a aposta em um sistema que faz essa escolha sozinho. O TypeScript segue como a linguagem mais usada, e o Rust foi a que mais cresceu entre as grandes, dobrando em um ano.</p>

    <p>Parikh também escreveu que todo o software feito até hoje representará menos de 1% do que será escrito nos próximos cinco anos. É uma projeção de executivo interessado em vender o produto, e deve ser lida assim.</p>

    <h2>Um movimento que já vinha aparecendo</h2>
    <p>A ideia de misturar modelos e agentes dentro das ferramentas de programação não é isolada. Recentemente, o <a href="/noticias/google-android-studio-traga-seu-proprio-agente-claude-codex">Android Studio passou a aceitar Claude e Codex como agentes dentro do IDE</a>, e o debate sobre dar autonomia demais a esses agentes também ganhou força com o caso do <a href="/noticias/claude-code-variavel-rm-sem-aprovacao-skip-permissions">Claude Code com variável que apaga arquivos sem pedir aprovação</a>. Quanto mais o código nasce de agentes, mais importa revisar o que eles entregam.</p>

    <h2>Limites e pontos de atenção</h2>
    <p>Os números de custo e desempenho do Fusion vêm de executivos da Microsoft, e o dado de 40% de pull requests depende da forma como o GitHub conta os agentes. Um rascunho feito por agente não é o mesmo que um código aprovado: boa parte passa por revisão humana, correção e descarte. Além disso, a oferta começa pelo plano Enterprise, voltado a empresas grandes, e não há data para o acesso individual.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa IA para programar, mesmo que só para montar um site ou uma automação para clientes, o recado é que a ferramenta tende a decidir sozinha qual modelo usar para cada passo, o que pode reduzir custo e tempo. Vale acompanhar quando o Fusion chegar ao plano individual e comparar com as alternativas. Para entender melhor o que são esses assistentes que agem sozinhos, leia <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">Agente de IA, chatbot ou automação: qual a diferença</a>, e veja como eles se conectam a outros sistemas em <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">MCP: o que é e como conecta agentes de IA</a>.</p>

    <p>Se a dúvida é qual modelo escolher no dia a dia, o guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> ajuda a começar. E, qualquer que seja a ferramenta, mantenha a revisão humana: o agente acelera o rascunho, mas a responsabilidade pelo que vai ao ar continua sendo sua.</p>

    <p>A notícia veio do The Next Web, com base nos anúncios do GitHub e da Microsoft. O texto é nosso, com análise própria, e os números citados são os informados pelas empresas.</p>
  `,
};
