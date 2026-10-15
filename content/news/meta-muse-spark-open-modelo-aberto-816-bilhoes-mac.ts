import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "meta-muse-spark-open-modelo-aberto-816-bilhoes-mac",
  title: "Meta lança Muse Spark Open, modelo aberto de 816 bilhões para Macs",
  summary:
    "A Meta lançou o Muse Spark Open, modelo de pesos abertos com 816 bilhões de parâmetros e 1 milhão de tokens de contexto, que pede 1 TB de RAM local.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/15/meta-launches-an-open-weight-model-that-runs-on-macs/",
  date: "2026-10-15",
  publishedAt: "2026-10-15T17:22:28-03:00",
  topic: "lancamentos",
  imageQuery: "Meta Platforms logo",
  content: `
    <p>A Meta lançou nesta quinta-feira o Muse Spark Open, um modelo de pesos abertos com 816 bilhões de parâmetros e janela de contexto de 1 milhão de tokens. De acordo com a <a href="https://techcrunch.com/2026/10/15/meta-launches-an-open-weight-model-that-runs-on-macs/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>, a empresa diz que ele é o modelo de pesos abertos mais capaz dos Estados Unidos e que supera outros modelos abertos populares nas avaliações que ela mesma divulgou. O detalhe que chama atenção é o hardware: rodar o modelo localmente exige, segundo a Engadget, citada pela reportagem, pelo menos 1 TB de RAM.</p>

    <p>O modelo é nativamente multimodal e foi pensado para programação complexa e trabalho agêntico, aquele em que a IA executa uma sequência de ações sozinha, em vez de apenas responder a uma pergunta. A Meta também o apresenta como um modelo desenhado para rodar em computadores da Apple, com melhor desempenho esperado no Mac Studio equipado com o chip M5 Ultra.</p>

    <h2>O que a Meta anunciou</h2>
    <p>Os números principais são os seguintes. O Muse Spark Open tem 816 bilhões de parâmetros, o que o coloca entre os maiores modelos abertos já publicados, e aceita até 1 milhão de tokens de contexto, espaço suficiente para colocar de uma só vez uma base de código inteira ou um conjunto grande de documentos. A Meta afirma que ele já está disponível por meio de plataformas de API, e a reportagem da TechCrunch não nomeia essas plataformas.</p>

    <p>No <a href="https://research.meta.ai/blog/muse-spark-open" target="_blank" rel="noopener noreferrer nofollow">blog de pesquisa da Meta</a>, a empresa detalha mais. Os pesos são distribuídos sob a Muse Model License, uma licença com termos comerciais limitados, que segundo a página permite que muitos desenvolvedores usem o modelo sem pagar. Os arquivos podem ser baixados no Hugging Face, no Amazon SageMaker AI, no Google Cloud Model Garden e no Microsoft Foundry Models. Para uso hospedado por API, a Meta cita Baseten, Fireworks AI, Groq, Modal, Nebius, OpenRouter e Together AI. Vale ler a licença com calma antes de qualquer uso comercial, porque os termos limitados significam que nem toda aplicação está liberada.</p>

    <p>Sobre desempenho, a Meta diz que o modelo supera outros abertos populares, mas a TechCrunch não traz números, e a página da Meta remete a um relatório separado de metodologia de avaliação. Em outras palavras, a comparação é da própria empresa e ainda não foi confirmada por testes independentes.</p>

    <h2>Os exemplos de uso: Muse Code e DaVinci Resolve</h2>
    <p>Para mostrar o que o modelo faz, a Meta o combinou com o Muse Code, seu terminal de programação com IA. Em uma das demonstrações, o modelo trabalhou em um cliente do Mastodon e fez correções de erros, novas funcionalidades e a compilação completa do projeto. É o tipo de tarefa em que o contexto de 1 milhão de tokens ajuda, já que o agente consegue enxergar muito código ao mesmo tempo.</p>

    <p>Em outra demonstração, a Meta usou o modelo junto com o DaVinci Resolve, editor de vídeo profissional, para revisar e cortar filmagens. Nos dois casos a ideia é a mesma: a IA recebe um objetivo e opera as ferramentas por conta própria, o que combina com o movimento que já vínhamos cobrindo no <a href="/noticias/meta-lanca-muse-for-mac-agente-executa-acoes-computador">Muse for Mac, agente que executa ações no computador</a>.</p>

    <h2>Contexto: modelos abertos e por que 1 TB de RAM pesa</h2>
    <p>Modelo de pesos abertos é aquele em que os arquivos com o resultado do treinamento ficam disponíveis para download. Quem os baixa pode rodar o modelo em servidor próprio, ajustá-lo para uma tarefa e inspecioná-lo, o que, como lembra a TechCrunch, costuma dar mais transparência, flexibilidade e economia do que os modelos fechados. Isso não é o mesmo que código aberto no sentido estrito: o que se libera são os pesos, e a licença define o que pode ser feito com eles. Outros laboratórios vêm apostando na mesma linha, como mostra a <a href="/noticias/xiaomi-lanca-mimo-v2-6-modelo-aberto-treinado-3-milhoes">Xiaomi com o MiMo V2.6</a>.</p>

    <p>A conta da memória explica por que a exigência de 1 TB de RAM é tão relevante. Cada parâmetro precisa ficar guardado na memória enquanto o modelo trabalha. Mesmo comprimido para formatos mais leves, um modelo de 816 bilhões de parâmetros ocupa centenas de gigabytes, e ainda sobra espaço a reservar para o contexto longo, que também consome memória. É por isso que a exigência chega perto de um terabyte, uma quantidade que um notebook comum, com 16 ou 32 GB, nem de longe oferece.</p>

    <p>A própria Meta reconhece o tamanho do desafio. Na descrição do blog, a configuração de desktop usa dois Mac Studio com chip M5 Ultra, e cada máquina pode destinar até 512 GB de memória unificada à GPU integrada, com 1,2 TB por segundo de largura de banda. Ou seja, mesmo no caminho considerado acessível, a conta envolve duas máquinas topo de linha. A Meta também lista compatibilidade com motores de inferência como vLLM, SGLang, Apple MLX e llama.cpp, o que facilita a vida de quem tem esse hardware.</p>

    <p>O contexto competitivo ajuda a entender o movimento. A Meta vem lançando modelos em ritmo acelerado, do <a href="/noticias/meta-muse-wonder-primeiro-modelo-fronteira">Muse Wonder, seu primeiro modelo de fronteira</a>, apresentado poucos dias antes, a esta versão aberta. A estratégia parece ser cobrir duas frentes ao mesmo tempo: modelos fechados no topo, servidos por API e assinatura, e um modelo aberto para atrair desenvolvedores e empresas que querem controle sobre a infraestrutura.</p>

    <h2>Por que isso importa para você</h2>
    <p>Seja direto: quase ninguém no Brasil vai rodar o Muse Spark Open em casa. Um computador com 1 TB de RAM, ou dois Mac Studio de última geração, custa muito mais do que a maioria das empresas pequenas e dos profissionais autônomos pode ou quer investir. Para o usuário comum, este lançamento não vira um aplicativo para instalar no fim de semana.</p>

    <p>O caminho realista é o acesso por API. As plataformas citadas pela Meta oferecem o modelo hospedado, e você paga pelo uso, em tokens, sem comprar hardware. Essa é a mesma lógica explicada no nosso comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a>, com a diferença de que aqui a concorrência vem de um modelo aberto, e isso tende a pressionar preços. Mais de um provedor servindo os mesmos pesos significa que dá para comparar o custo e trocar de fornecedor sem reescrever tudo, o que reduz a dependência de uma única empresa.</p>

    <p>Há ainda a questão da privacidade e da LGPD. Rodar um modelo localmente é, em tese, a forma mais segura de manter dados de clientes dentro de casa, porque nada sai da sua máquina. Só que, como a execução local é inviável para quase todos, quem usar o modelo por API estará enviando dados a uma plataforma de terceiros, e valem as mesmas cautelas de qualquer outra ferramenta de IA. Antes de colocar dados pessoais de clientes em qualquer serviço, leia o <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequenos negócios que usam IA</a>. Escolher o provedor, a região dos servidores e as regras de retenção de dados faz diferença real.</p>

    <p>Para quem desenvolve software ou automatiza processos, o modelo é uma opção a mais para testar em tarefas de código e de agentes, principalmente quando o contexto longo é necessário. Quem ainda está entendendo o conceito pode começar por <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">a diferença entre agente de IA, chatbot e automação</a>.</p>

    <h2>O que observar a seguir</h2>
    <ul>
      <li>Testes independentes: os resultados citados são da Meta, e comparações feitas por terceiros dirão se o modelo realmente supera os abertos concorrentes.</li>
      <li>Preço por API: o valor cobrado por cada plataforma e a diferença entre elas definirão se o modelo compensa para quem não tem hardware próprio.</li>
      <li>Termos da licença: o que exatamente a Muse Model License limita no uso comercial, principalmente para empresas maiores.</li>
      <li>Versões menores: se a Meta lançará variantes que caibam em máquinas comuns, o que mudaria bastante o alcance do modelo.</li>
      <li>Disponibilidade no Brasil: quais provedores atendem o país e com que latência e condições de contratação.</li>
    </ul>

    <p>Por ora, o lançamento mostra que o teto dos modelos abertos subiu, mas também que esse teto ainda exige uma máquina de outro nível. Para a maior parte das pessoas, o benefício chega indiretamente, pela concorrência de preços e pelos produtos que outras empresas construírem em cima do modelo.</p>
  `,
  faq: [
    {
      question: "O que é o Muse Spark Open da Meta?",
      answer:
        "É um modelo de pesos abertos com 816 bilhões de parâmetros e janela de contexto de 1 milhão de tokens, nativamente multimodal e voltado a programação e trabalho agêntico. A Meta diz que é o modelo aberto mais capaz dos EUA, com base em avaliações divulgadas por ela mesma.",
    },
    {
      question: "Dá para rodar o Muse Spark Open no meu computador?",
      answer:
        "Na prática, não. Segundo a Engadget, citada pela TechCrunch, são necessários pelo menos 1 TB de RAM, e o melhor desempenho é esperado no Mac Studio com chip M5 Ultra. A Meta cita uma configuração com dois desses computadores. Para a maioria das pessoas, o caminho é usar o modelo por API.",
    },
    {
      question: "Onde baixar ou usar o Muse Spark Open?",
      answer:
        "Segundo o blog da Meta, os pesos estão no Hugging Face, no Amazon SageMaker AI, no Google Cloud Model Garden e no Microsoft Foundry Models, e o uso hospedado por API passa por plataformas como Together AI, Fireworks AI e OpenRouter. A licença é a Muse Model License, com termos comerciais limitados.",
    },
  ],
};
