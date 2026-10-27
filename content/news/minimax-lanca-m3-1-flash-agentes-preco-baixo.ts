import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "minimax-lanca-m3-1-flash-agentes-preco-baixo",
  title: "MiniMax lança o M3.1 Flash, modelo para agentes a US$ 0,15 por milhão",
  summary:
    "A chinesa MiniMax abriu o M3.1 Flash na API com entrada a US$ 0,15 e saída a US$ 0,60 por milhão de tokens, e promete custo 70% menor em tarefas de agentes.",
  author: "Bruno Danello",
  sourceName: "MiniMax",
  sourceUrl: "https://www.minimax.io/blog/minimax-m31f",
  date: "2026-10-19",
  publishedAt: "2026-10-19T15:25:00-03:00",
  topic: "lancamentos",
  imageQuery: "MiniMax logo",
  content: `
    <p>A MiniMax, empresa chinesa de inteligência artificial, lançou nesta segunda-feira (19) o M3.1 Flash, um modelo pensado para rodar agentes de IA de forma rápida e barata. Segundo o <a href="https://www.minimax.io/blog/minimax-m31f" target="_blank" rel="noopener noreferrer nofollow">anúncio publicado pela própria MiniMax</a>, o modelo já está disponível na API da empresa, no plano M Plan e na ferramenta MiniMax Code. Os pesos do modelo, ou seja, os arquivos que permitem rodá-lo por conta própria, ainda não saíram: a página diz apenas que serão liberados mais tarde.</p>

    <p>O que chama atenção é o preço. A MiniMax cobra US$ 0,15 por milhão de tokens de entrada e US$ 0,60 por milhão de tokens de saída, com uma tarifa ainda menor, de US$ 0,015, para entrada que já está em cache. Token é o pedaço de texto que o modelo lê ou escreve, e é a unidade em que a maioria das APIs cobra. Em outras palavras, o valor por milhão de tokens é o que decide quanto custa deixar um agente trabalhando o dia inteiro.</p>

    <h2>O que a MiniMax anunciou</h2>
    <p>De acordo com a empresa, o M3.1 Flash tem inferência online cerca de três vezes mais rápida que a do modelo anterior e custo de uso em tarefas de agentes 70% menor. Em uso comum, a saída chega a mais de 200 tokens por segundo, com mediana acima de 170 tokens por segundo. Esses números são medições da própria MiniMax e não foram confirmados por testes independentes até a publicação desta matéria.</p>
    <p>A página também informa que uma versão preliminar do modelo, com o codinome "Space Bunny", processou mais de 200 trilhões de tokens de forma anônima antes do lançamento. A empresa avisa ainda que o modelo maior da família, o Pro, vai chegar depois. A janela de contexto e a licença de uso do M3.1 Flash não aparecem na página, e esse é um dado importante que vale conferir antes de qualquer decisão de adoção.</p>

    <h2>Os resultados em testes de desempenho</h2>
    <p>A MiniMax divulgou uma lista de resultados em benchmarks, que são provas padronizadas usadas para comparar modelos. Os números informados pela empresa são:</p>
    <ul>
      <li>BankerToolBench: 76,2 pontos;</li>
      <li>DeepSWE v1.1: 73,7%, em tarefas de engenharia de software;</li>
      <li>OSWorld V2: 61,7 pontos, o que a empresa diz ser o primeiro lugar entre os modelos chineses, em tarefas de operar um computador;</li>
      <li>Agents' Last Exam (ALE): 29,6 pontos, também apontado como o primeiro entre os chineses;</li>
      <li>CyberGym: 82%, em tarefas ligadas a segurança digital;</li>
      <li>AutomationBench-AA: a empresa diz que o modelo está entre os melhores, mas não informa a nota.</li>
    </ul>
    <p>Como sempre, convém ler esses resultados com cuidado. Benchmark mede tarefas específicas, e a posição "primeiro entre os modelos chineses" é uma comparação escolhida pela própria empresa. Isso não quer dizer que o modelo seja o melhor em geral, nem que vá render o mesmo no seu trabalho. O teste que vale é rodar o modelo nas suas tarefas reais e comparar o resultado com o que você já usa hoje.</p>

    <h2>Onde o M3.1 Flash pode ser usado</h2>
    <p>O modelo está disponível por três caminhos. O primeiro é a API, usada por desenvolvedores e por ferramentas que se conectam ao modelo por trás dos panos. O segundo é o M Plan, o plano de assinatura da MiniMax. O terceiro é o MiniMax Code, ferramenta voltada a programação com agentes. A página não detalha limites de uso do plano, preços de assinatura nem disponibilidade por país, então não dá para afirmar como será o acesso a partir do Brasil, nem se haverá cobrança em reais.</p>
    <p>Na prática, a maioria das pessoas vai encontrar o M3.1 Flash dentro de outras ferramentas, caso plataformas de automação e editores de código decidam incluí-lo na lista de modelos. Isso costuma acontecer em poucos dias ou semanas quando um modelo barato e rápido chama atenção, mas aqui ainda não há confirmação de nenhuma integração.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Na prática</span>
      <p>Antes de trocar de modelo, faça um teste pequeno: escolha 10 tarefas reais do seu dia a dia, rode no modelo atual e no novo, e compare qualidade e custo. Só então decida se vale migrar.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>O recado central do lançamento é que o custo de manter um agente de IA trabalhando está caindo rápido, e isso muda a conta de quem automatiza tarefas. Quando a entrada custa centavos de dólar por milhão de tokens, tarefas repetitivas como responder mensagens, resumir documentos e organizar planilhas passam a caber em orçamentos pequenos. O Portal da AI já mostrou movimentos parecidos, como o <a href="/noticias/xiaomi-lanca-mimo-v2-6-modelo-aberto-treinado-3-milhoes">Xiaomi MiMo-V2.6, modelo aberto treinado por apenas US$ 3 milhões</a>, e a <a href="/noticias/deepseek-search-fetch-api-preco-por-busca">cobrança por busca nas APIs da DeepSeek</a>.</p>
    <p>Para quem quer entender o básico antes de se aventurar, vale ler a explicação sobre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">a diferença entre agente de IA, chatbot e automação</a> e o guia sobre <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">MCP, o protocolo que conecta agentes a ferramentas</a>. Quem pensa em transformar isso em renda pode seguir para <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como ganhar dinheiro criando e vendendo agentes de IA personalizados</a>, e quem toca um negócio pode ver <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">como usar IA para reduzir custos operacionais</a>.</p>
    <p>Para o freelancer e o pequeno empreendedor, modelos baratos têm duas leituras. A boa é que o custo de montar um serviço com agentes cai, o que abre espaço para oferecer automações a clientes com uma margem melhor. A outra é que o preço também cai para os concorrentes: quando todo mundo tem acesso a modelos baratos, o diferencial deixa de ser a ferramenta e passa a ser o conhecimento do problema do cliente e a qualidade da entrega.</p>

    <h2>Cuidados antes de adotar um modelo chinês novo</h2>
    <p>Preço baixo não é o único critério. Ao usar a API de uma empresa estrangeira, os dados que você envia passam por servidores dela, e as regras de privacidade e retenção variam. Para dados de clientes, informações financeiras ou documentos sensíveis, vale ler a política de dados do fornecedor e, quando possível, evitar enviar informações pessoais. Para quem precisa cumprir a LGPD, essa checagem não é opcional.</p>
    <p>Outro ponto é a incerteza sobre os pesos abertos. A MiniMax diz que vai liberá-los, mas não deu data na página, e a licença ainda não foi informada. Até lá, quem depende do modelo depende também da API da empresa, de seus preços e de suas regras. Preços de lançamento podem mudar, e um custo baixo hoje não garante o mesmo valor no próximo trimestre.</p>

    <h2>O que acompanhar daqui para a frente</h2>
    <p>Três pontos merecem atenção nas próximas semanas: a chegada do modelo Pro, a divulgação da licença e dos pesos, e testes independentes que confirmem a velocidade e o desempenho em agentes. Também será útil ver se ferramentas populares de programação e automação passam a oferecer o M3.1 Flash, e a que preço final para o usuário. Se a promessa de custo 70% menor em tarefas de agentes se confirmar fora dos testes da empresa, a pressão sobre os preços dos modelos de outras fabricantes tende a aumentar, algo que, no fim, beneficia quem usa IA para trabalhar.</p>
  `,
};
