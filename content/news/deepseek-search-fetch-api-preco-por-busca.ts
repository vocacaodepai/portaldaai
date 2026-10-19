import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "deepseek-search-fetch-api-preco-por-busca",
  title: "DeepSeek abre sua busca na web para devs por US$ 0,75 a cada mil consultas",
  summary:
    "A DeepSeek lançou as APIs Search e Fetch, que dão a agentes busca na web e leitura de páginas, cobradas por requisição e grátis no Claude Code até 1º/11.",
  author: "Bruno Danello",
  sourceName: "DeepSeek API Docs",
  sourceUrl: "https://api-docs.deepseek.com/zh-cn/guides/search",
  date: "2026-10-19",
  publishedAt: "2026-10-19T06:48:00-03:00",
  topic: "lancamentos",
  imageQuery: "DeepSeek logo",
  content: `
    <p>A DeepSeek abriu para desenvolvedores externos o sistema de busca na web que alimenta o seu próprio aplicativo. Segundo a <a href="https://api-docs.deepseek.com/zh-cn/guides/search" target="_blank" rel="noopener noreferrer nofollow">documentação oficial da DeepSeek</a>, são duas APIs novas: a Search, que devolve resultados ranqueados de uma pesquisa, e a Fetch, que recebe o endereço de uma página e devolve o conteúdo dela em Markdown, um formato de texto simples que modelos de IA leem com facilidade. O preço informado é de 5 yuans a cada 1.000 requisições bem-sucedidas em cada uma, o que o relato do site <a href="https://sessionwatcher.com/news/deepseek-search-fetch-api-pricing-claude-code-codex-web-search" target="_blank" rel="noopener noreferrer nofollow">SessionWatcher</a> converte para cerca de US$ 0,75.</p>

    <p>Em português claro: quem constrói um assistente, um agente ou uma automação que precisa consultar a internet em tempo real agora tem mais um fornecedor para isso, e a um preço por consulta bem baixo. Não é um produto para o usuário final, é peça de construção. Mas o que ela muda no preço de fazer um agente pesquisar na web interessa a quem trabalha com IA.</p>

    <h2>O que as duas APIs fazem</h2>
    <p>A Search recebe uma consulta de 1 a 128 caracteres e devolve uma lista de resultados, de 1 a 50 por chamada (o padrão é 10). Cada resultado traz título, endereço, um trecho curto, um resumo mais longo pensado para modelos de IA e uma nota de relevância de 0 a 3. A API também informa a data da página e um índice de autoridade da fonte, de 0 a 4, em que valores a partir de 3 indicam fonte de alta autoridade. Se o desenvolvedor ativar a opção <em>need_content</em>, vem junto o texto completo de cada página.</p>

    <p>A consulta aceita operadores conhecidos de quem pesquisa no Google, como limitar a um site, excluir palavras, buscar frase exata e filtrar por data com <em>after</em> e <em>before</em>. A documentação traz até um exemplo em português, buscando notícias sobre energia solar em sites do governo brasileiro a partir de 2025. A Fetch é mais simples: recebe uma URL e devolve título e conteúdo, sujeita à disponibilidade e às políticas do site de destino.</p>

    <h2>Quanto custa e quais são os limites</h2>
    <p>A cobrança é por requisição, não por token. Só paga quem recebe resposta com resultado: na Search é preciso que haja pelo menos um item, e na Fetch que a página tenha vindo. Falhas, buscas sem resultado e tempos esgotados não são cobrados, e o número de resultados pedido não altera o preço. As tarifas saem do mesmo saldo usado para consumo de tokens dos modelos da empresa.</p>

    <p>Os limites de uso são generosos para a maioria dos projetos: 100 consultas por segundo na Search e 25 na Fetch, por conta, com limite adicional por domínio de destino na leitura de páginas. Usar outra chave de API não contorna o teto. Se passar, a resposta é um erro 429, e a orientação oficial é esperar e tentar de novo.</p>

    <h2>De graça no Claude Code e no Codex, por enquanto</h2>
    <p>Um detalhe que chama atenção: quem usa a API da DeepSeek dentro do próprio DeepSeek Harness, do Claude Code ou do Codex já acessa busca e leitura de páginas como chamadas de ferramenta no servidor, e essas chamadas hoje não são cobradas. Pela documentação, a cobrança começa à 0h de Pequim de 1º de novembro de 2026, o que dá pouco mais de uma semana de uso gratuito. O SessionWatcher fala em duas semanas de isenção após o lançamento, mas a página oficial é que traz a data exata, e é nela que vale confiar.</p>

    <p>É um movimento de distribuição claro. Ao liberar a busca de graça dentro de ferramentas de programação populares, a DeepSeek incentiva desenvolvedores a testarem seus modelos nelas. A empresa vem mexendo no preço da sua API com frequência, como contamos na cobertura sobre a <a href="/noticias/deepseek-receita-1-bilhao-alta-precos-api-ipo-xangai">receita de US$ 1 bilhão e a alta de preços da API</a> e sobre o <a href="/noticias/deepseek-v4-1-flash-mantem-v4-pro">V4.1 Flash, que mantém o V4 Pro</a>.</p>

    <h2>Cuidados antes de usar</h2>
    <p>Alguns pontos pedem atenção. Primeiro, a documentação diz que o resultado da Fetch depende das políticas do site consultado, e há erro específico para quando a leitura é bloqueada por política de segurança (403) ou não obtém conteúdo utilizável (404). Segundo, a própria nota de autoridade e a data devolvidas pela Search existem justamente porque a qualidade das fontes varia, e um agente que cita a internet sem checar isso pode repetir erro. Terceiro, enviar a pergunta de um cliente a uma API estrangeira é tratamento de dado pessoal quando a pergunta contém dados identificáveis, e as regras da LGPD valem. O nosso <a href="/artigos/adequacao-a-lgpd-como-servico-para-pequenos-negocios-com-ia">guia de adequação à LGPD para pequenos negócios com IA</a> ajuda a organizar isso.</p>

    <p>Vale lembrar também que a DeepSeek é uma empresa chinesa, e que o roteamento de dados para servidores fora do Brasil pode ser um fator de risco para alguns negócios, dependendo do setor. Para pesquisas públicas e genéricas, o risco é menor. Para qualquer coisa que envolva nome, documento ou histórico de cliente, prefira anonimizar antes de mandar.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você não programa, o efeito é indireto, mas real. Agentes de IA que pesquisam na internet ficam mais baratos de operar quando o custo de cada busca cai, e isso tende a chegar ao preço final de ferramentas e serviços que você contrata. Entender a diferença entre um chatbot e um agente que consulta fontes ajuda a escolher bem: veja <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">a diferença entre agente de IA, chatbot e automação</a>.</p>

    <p>Se você vende serviços de IA ou automação, a conta fica interessante. A US$ 0,75 por mil consultas, uma rotina que faça 200 buscas por dia para monitorar concorrentes, preços ou notícias de um cliente custa uns US$ 4,50 por mês de busca, antes do custo do modelo que lê e resume os resultados. Isso abre espaço para pacotes baratos, como os descritos em <a href="/artigos/como-vender-pacotes-de-automacao-de-ia-para-negocios-locais">como vender pacotes de automação de IA para negócios locais</a>, e para serviços de inteligência de mercado, tema do artigo sobre <a href="/artigos/ganhar-dinheiro-com-pesquisa-de-mercado-para-pequenas-empresas-usando-ia">pesquisa de mercado para pequenas empresas usando IA</a>. Para a rotina do dia a dia, o <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">guia de automação com IA para economizar horas de trabalho</a> mostra por onde começar.</p>

    <p>Uma ressalva honesta: o número acima é uma conta de exemplo, não uma garantia. O custo real depende do modelo usado, do volume de texto lido e de quanto da infraestrutura você precisa montar. E como a busca em si é só uma peça, o valor está em como você a combina com o resto.</p>

    <h2>O que observar a seguir</h2>
    <ul>
      <li>O que acontece em 1º de novembro: se a cobrança começa como anunciado e como fica o uso dentro do Claude Code e do Codex.</li>
      <li>Qualidade real dos resultados em português e para fontes brasileiras, que ainda não tem teste independente.</li>
      <li>Reação de concorrentes: preço de busca para agentes é um mercado disputado, e é provável que outros ajustem tabelas.</li>
      <li>Bloqueios de sites: quantos domínios impedem a leitura automática e como isso afeta a Fetch.</li>
    </ul>

    <p>Por ora, o lançamento é uma ferramenta nova e barata para quem constrói com IA, com uma janela de teste gratuito curta. Quem pretende usar deve aproveitar a isenção para medir qualidade e custo antes que a cobrança comece.</p>

  `,
};
