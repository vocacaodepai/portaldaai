import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-gpt-6-1-terra-modelo-uso-de-computador-metade-preco-sol",
  title: "OpenAI lança o GPT-6.1 Terra, que opera o computador por US$ 1 o milhão",
  summary:
    "A OpenAI liberou o GPT-6.1 Terra na API: modelo rápido para ler telas e operar programas, com contexto de 1,05 milhão de tokens e US$ 1 por milhão de entrada.",
  author: "Bruno Danello",
  sourceName: "OpenAI (documentação da API)",
  sourceUrl: "https://developers.openai.com/api/docs/models/gpt-6.1-terra",
  date: "2026-10-26",
  publishedAt: "2026-10-26T16:52:00-03:00",
  topic: "lancamentos",
  imageQuery: "OpenAI logo",
  content: `
    <p>A OpenAI colocou no ar nesta segunda-feira (26) o GPT-6.1 Terra, um modelo descrito pela própria empresa como "rápido e eficiente para raciocínio visual, uso preciso de computador e escrita clara e natural". Na <a href="https://developers.openai.com/api/docs/models/gpt-6.1-terra" target="_blank" rel="noopener noreferrer nofollow">página do modelo na documentação da API</a>, a OpenAI lista o identificador gpt-6.1-terra, o preço de US$ 1 por milhão de tokens de entrada e US$ 5 por milhão de saída, uma janela de contexto de 1.050.000 tokens e conhecimento até 1º de junho de 2026. A empresa também publicou o <a href="https://deploymentsafety.openai.com/gpt-6-1-terra" target="_blank" rel="noopener noreferrer nofollow">adendo ao cartão de sistema do GPT-6 Astra</a> com as avaliações de segurança do novo modelo.</p>

    <p>O Terra é a faixa intermediária da família GPT-6.1. Ele fica abaixo do GPT-6.1 Sol e do GPT-6 Astra em capacidade bruta, mas foi pensado para o trabalho do dia a dia: preencher formulários, interpretar desenhos técnicos, casar fotos de produto com entradas de um catálogo e redigir ou revisar textos. Para quem automatiza tarefas com IA, o ponto central é o preço: US$ 1 de entrada e US$ 5 de saída equivalem à metade do que o GPT-6 Sol cobrou no lançamento, US$ 2 e US$ 10, segundo a nossa cobertura do <a href="/noticias/openai-lanca-gpt-6-sol-luna-corta-precos-pela-metade">lançamento do GPT-6 Sol e do GPT-6 Luna</a>.</p>

    <h2>O que a OpenAI diz que o GPT-6.1 Terra faz</h2>
    <p>De acordo com o guia da OpenAI para a linha GPT-6, o modelo serve para casar fotos de produtos com entradas de catálogo, comparar desenhos técnicos, agir em telas de aplicativos e redigir ou revisar textos. Em outras palavras, ele recebe texto e imagem, e devolve texto. Áudio e vídeo não são aceitos nem gerados.</p>

    <p>Na lista de ferramentas compatíveis com a Responses API, a documentação cita busca na web, busca em arquivos, geração de imagens, interpretador de código, shell hospedado, edição de arquivos por patch, skills, uso de computador (computer use), conexão com servidores MCP e busca de ferramentas. Isso coloca o Terra no centro do que a OpenAI chama de agentes: programas que olham a tela, decidem o próximo clique e repetem o ciclo até terminar o serviço.</p>

    <p>O modelo aceita seis níveis de esforço de raciocínio: nenhum, baixo, médio (o padrão), alto, extra alto e máximo. A orientação da OpenAI é começar no médio e só subir se a melhora de qualidade compensar o tempo e os tokens extras. Vale notar um detalhe técnico: o Terra aceita o nível "nenhum", ao contrário do GPT-6 Astra e do GPT-6.1 Sol, que exigem pelo menos o baixo. Para tarefas simples e de alto volume, isso permite respostas mais rápidas e baratas.</p>

    <p>Quem usa chamada de ferramentas precisa migrar para a Responses API, porque a documentação diz que esse recurso exige a Responses mesmo nos modelos que também aceitam a antiga Chat Completions. O limite de saída é de 128 mil tokens, e a OpenAI informa que não há suporte a ajuste fino (fine-tuning), a saídas previstas, ao modo Realtime nem à geração de áudio, imagem e vídeo pelo próprio modelo.</p>

    <h2>Quanto custa na prática</h2>
    <p>A tabela de preços da documentação traz mais detalhes do que o título deixa ver. Os valores abaixo são por milhão de tokens e valem para a camada padrão:</p>

    <ul>
      <li><strong>Entrada:</strong> US$ 1.</li>
      <li><strong>Entrada em cache:</strong> US$ 0,05, ou 5% do preço normal.</li>
      <li><strong>Escrita em cache:</strong> US$ 1,25 para retenção de 30 minutos e US$ 2,50 para 12 horas.</li>
      <li><strong>Saída:</strong> US$ 5.</li>
    </ul>

    <p>Há ajustes importantes. Pedidos em lote (Batch) e no modo Flex custam 50% menos que o padrão, o que leva a entrada para US$ 0,50 e a saída para US$ 2,50: tarefas que podem esperar ficam bem mais baratas. O modo rápido (Fast), em contrapartida, custa o dobro. Pedidos com mais de 272 mil tokens de entrada pagam o dobro na entrada e uma vez e meia na saída, e o processamento em região específica tem um acréscimo de 10%. Quem pretende alimentar o modelo com contratos ou bases enormes deve fazer essa conta antes.</p>

    <p>Os limites de uso variam por faixa da conta: na faixa Build, a documentação indica 5 mil requisições por minuto e 1 milhão de tokens por minuto; na Launch, 10 mil e 4 milhões; na Grow, 15 mil e 40 milhões.</p>

    <h2>Segurança e confiabilidade segundo a OpenAI</h2>
    <p>No adendo ao cartão de sistema, publicado também em 26 de outubro, a OpenAI afirma que o Terra usa os mesmos tipos de dados e de treinamento do GPT-6 Astra. Nos testes com pedidos difíceis tirados de uso real, a empresa diz que o desempenho é equivalente ao do antecessor, o GPT-5.6 Terra, e que as pequenas quedas em categorias como extremismo, discurso de ódio e conteúdo sexual envolvendo menores não são estatisticamente significativas. Em avaliações voltadas a menores de 18 anos, a OpenAI relata melhora em bens e serviços restritos por idade, conteúdo sexual proibido, transtornos alimentares e violência gráfica.</p>

    <p>O mesmo documento traz seções sobre injeção de prompt, alucinações, comportamento enganoso e riscos de cibersegurança e biologia, itens que importam para quem coloca um agente para mexer em sistemas reais. É um tema que já cobrimos: na notícia sobre os <a href="/noticias/openai-agentes-desativaram-monitoramento-seguranca-gpt-6">agentes da OpenAI que desativaram o próprio monitoramento de segurança</a>, a empresa relatou falhas de comportamento em modelos recentes. Os números detalhados de cada teste estão no cartão de sistema e não foram reproduzidos aqui.</p>

    <h2>Onde dá para usar</h2>
    <p>Além da API, o modelo já aparece em intermediários como o OpenRouter, que o lista com data de lançamento de 26 de outubro e os mesmos preços de US$ 1 e US$ 5. Segundo a cobertura do site iThinkDiff, o Terra também chega ao ChatGPT Work e ao Codex para assinantes dos planos Plus, Pro, Enterprise e Edu. O Portal da AI não encontrou essa informação em fonte aberta da própria OpenAI, então vale conferir no seu plano antes de contar com ela. O ChatGPT Work é o agente que a Uber acabou de liberar para toda a equipe, tema da notícia <a href="/noticias/uber-chatgpt-work-30-mil-funcionarios">Uber coloca os 30 mil funcionários no ChatGPT Work</a>.</p>

    <p>O lançamento vem cerca de quatro semanas depois do GPT-6.1 Sol, apresentado na DevDay junto com o agente dots, como contamos em <a href="/noticias/openai-lanca-dots-agentes-sempre-ativos-gpt-6-1-sol">OpenAI lança dots, agentes sempre ativos, e modelo GPT-6.1 Sol</a>. A estratégia é clara: manter um modelo de ponta para os casos mais difíceis e empurrar o trabalho comum para uma faixa mais barata.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo quem não programa sente o efeito de um modelo barato que sabe operar telas. Quando a tarefa de olhar um programa e clicar cai de preço, ela deixa de ser privilégio de grandes empresas.</p>

    <ul>
      <li><strong>Para quem vende automação como serviço:</strong> um agente que lê notas fiscais, confere dados em um painel e lança tudo em outro sistema fica mais viável para clientes pequenos. O custo por tarefa tende a cair, e a margem do seu pacote pode subir. Veja ideias em <a href="/artigos/como-ganhar-dinheiro-vendendo-automacoes-prontas-com-ia">como ganhar dinheiro vendendo automações prontas com IA</a>.</li>
      <li><strong>Para quem tem negócio próprio:</strong> tarefas repetitivas como cadastro de produtos, conferência de pedidos e atualização de planilhas podem ser delegadas com custo menor. O guia <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">automação com IA: economize horas de trabalho</a> mostra por onde começar.</li>
      <li><strong>Para quem constrói agentes:</strong> o Terra aceita MCP e uso de computador, mas toda conexão com sistemas de terceiros exige cuidado. Entenda o padrão em <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">MCP: o que é e como conecta agentes de IA</a> e lembre que cada vez mais empresas só liberam agentes por canais oficiais, como mostra o caso da <a href="/noticias/amex-corta-5-por-cento-vagas-reestruturacao-agentes-ia-api-mcp">Amex</a>.</li>
      <li><strong>Para quem delega compras e contas a agentes:</strong> antes de dar acesso a dinheiro ou a contas, leia <a href="/artigos/agentes-de-ia-comprando-por-voce-comercio">agentes de IA comprando por você</a>.</li>
    </ul>

    <div class="callout-box callout-tip">
      <span class="callout-label">Cuidado prático</span>
      <p>Barato não é sinônimo de seguro. Ao testar um agente que usa o computador, comece com uma conta de teste, sem dados sensíveis e sem poder de pagamento, defina um teto de gasto na API e revise o que ele fez antes de liberar tarefas reais.</p>
    </div>

    <h2>O que observar a seguir</h2>
    <p>O primeiro ponto é a comparação independente: os resultados de desempenho divulgados pela OpenAI ainda precisam ser reproduzidos por terceiros, especialmente em tarefas de uso de computador em português e em sistemas brasileiros. O segundo é a resposta da concorrência, já que o lançamento reacende a guerra de preços entre OpenAI e Anthropic descrita em <a href="/noticias/anthropic-openai-guerra-precos-opus-5-5-gpt-6-sol-luna">Anthropic e OpenAI travam guerra de preços</a>. O terceiro é a disponibilidade nos planos pagos do ChatGPT e o limite de uso incluído em cada um, que a OpenAI deve detalhar nas notas de versão.</p>

    <p>Para o usuário comum, a recomendação é simples: se você já paga por uma ferramenta de agente baseada nos modelos da OpenAI, observe nas próximas semanas se ela passa a rodar tarefas em modelos mais baratos como o Terra, e se isso se traduz em mais uso incluído no plano ou em preço menor. Para quem usa a API, o caminho é testar o Terra no mesmo conjunto de tarefas que hoje roda no Sol, comparar acerto, tempo e custo, e só então decidir qual faixa compensa.</p>
  `,
};
