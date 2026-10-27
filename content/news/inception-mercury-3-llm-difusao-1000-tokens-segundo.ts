import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "inception-mercury-3-llm-difusao-1000-tokens-segundo",
  title: "Inception lança Mercury 3, IA de difusão que passa de 1.000 tokens/s",
  summary:
    "A Inception lançou o Mercury 3, modelo de difusão com 1 milhão de tokens de contexto e US$ 0,20 por milhão de entrada, que diz ser de 4 a 8 vezes mais rápido.",
  author: "Bruno Danello",
  sourceName: "Inception Labs",
  sourceUrl: "https://www.inceptionlabs.ai/blog/introducing-mercury-3",
  date: "2026-10-19",
  publishedAt: "2026-10-19T18:25:00-03:00",
  topic: "lancamentos",
  imageQuery: "servidor data center GPU",
  content: `
    <p>A Inception Labs apresentou nesta segunda-feira (19) o Mercury 3, a nova versão de seu modelo de linguagem baseado em difusão. Segundo o <a href="https://www.inceptionlabs.ai/blog/introducing-mercury-3" target="_blank" rel="noopener noreferrer nofollow">anúncio publicado pela própria empresa</a>, o modelo roda a cerca de 1.068 tokens por segundo em GPUs da Nvidia, aceita até 1 milhão de tokens de contexto e custa uma fração dos modelos de fronteira. A Inception afirma que ele supera o GPT-6 Luna e o Claude Haiku 5.5 em vários testes, sendo de 4 a 8 vezes mais rápido. Os números de desempenho são da própria fabricante e ainda não foram confirmados por avaliações independentes.</p>

    <h2>O que muda com um modelo de difusão</h2>
    <p>A maioria dos modelos de linguagem que você conhece, como os do ChatGPT e do Claude, gera texto em sequência: uma palavra (ou pedaço de palavra, o chamado token) depois da outra. Modelos de difusão seguem outro caminho. Eles produzem um rascunho do trecho inteiro e o refinam em várias passadas, em paralelo, parecido com o que acontece em geradores de imagem. A promessa dessa abordagem é velocidade: como muitos tokens são ajustados ao mesmo tempo, a resposta sai bem mais rápido.</p>
    <p>No anúncio, a Inception diz que o Mercury 3 tem cerca de 40 vezes mais parâmetros que o Mercury 1 e uma inteligência, medida em seus testes, aproximadamente três vezes maior que a do Mercury 1 mini. A frase que resume a tese da empresa, segundo a página, é que o Mercury 3 "demonstra que a difusão de texto escala". Em outras palavras, a Inception quer provar que dá para crescer esse tipo de modelo sem perder a vantagem de velocidade.</p>

    <h2>Números e preço divulgados</h2>
    <p>Pelos dados do anúncio, as principais características são estas:</p>
    <ul>
      <li>Velocidade de cerca de 1.068 tokens por segundo em GPUs da Nvidia.</li>
      <li>Janela de contexto de 1 milhão de tokens, contra 260 mil do Mercury 2.5.</li>
      <li>Preço de US$ 0,20 por milhão de tokens de entrada e US$ 0,70 por milhão de tokens de saída. Há um desconto de lançamento que reduz os valores para US$ 0,10 e US$ 0,35, e o uso de entrada em cache tem 90% de desconto sobre o preço de entrada.</li>
      <li>Compatibilidade com a API da OpenAI, o que facilita trocar o modelo em um sistema que já usa esse formato.</li>
      <li>Disponibilidade na plataforma de API da própria Inception, no OpenRouter, na Baseten e na Vercel, com 100 milhões de tokens gratuitos na plataforma da empresa.</li>
    </ul>
    <p>Para empresas, a Inception menciona capacidade dedicada, escalonamento automático, controles de conformidade e retenção de dados configurável. Junto com o Mercury 3, a companhia citou dois produtos relacionados: o Mercury Voice, voltado a agentes de voz de baixa latência, e o Mercury Decide, um modelo de classificação que, segundo a empresa, supera o Jev nos testes JevBench e LegalBench.</p>

    <h2>O que os parceiros relataram</h2>
    <p>O texto traz resultados de clientes e parceiros, todos reportados pela Inception e não verificados de forma independente. A TinyFish AI testou o modelo em 50 tarefas reais do Mind2Web, um conjunto que mede agentes que navegam em sites, e disse que o Mercury 3 completou 50% delas, mais do que o GPT-6.1 Sol. A Octen AI informou que, em seus testes com a API Sense, o tempo mediano de geração foi de 0,9 segundo e o tempo mediano de resposta completa foi de 2,2 segundos. A Lorikeet relatou latência menor e avaliações melhores do que outros modelos em testes iniciais.</p>
    <p>A página não divulga tabelas completas de benchmarks nem notas exatas, e é por isso que a comparação com GPT-6 Luna e Claude Haiku 5.5 deve ser lida com cautela. Resultados de fabricante costumam usar os testes em que o produto se sai melhor, e a diferença entre um teste de laboratório e o seu uso diário pode ser grande.</p>

    <h2>Onde a velocidade faz diferença</h2>
    <p>Velocidade importa pouco quando você faz uma pergunta e espera a resposta com calma. Ela pesa em três situações: agentes que encadeiam dezenas de chamadas seguidas (cada uma soma espera), atendimento por voz, em que um silêncio de dois segundos estraga a conversa, e automações que processam muitos documentos de uma vez. Nesses casos, um modelo que responde em menos de um segundo e custa centavos por milhão de tokens muda a conta do projeto.</p>
    <p>Esse movimento de modelos baratos e rápidos não é isolado. Nos últimos dias, a <a href="/noticias/minimax-lanca-m3-1-flash-agentes-preco-baixo">MiniMax lançou o M3.1 Flash para agentes com preço baixo</a>, e antes disso a <a href="/noticias/openai-lanca-gpt-6-sol-luna-corta-precos-pela-metade">OpenAI cortou os preços do GPT-6 Sol e Luna pela metade</a>. O que a Inception traz de diferente é a arquitetura: em vez de apenas baratear o mesmo tipo de modelo, aposta em outra forma de gerar texto.</p>

    <h2>Limites e dúvidas em aberto</h2>
    <p>Alguns pontos pedem atenção antes de qualquer decisão de compra. Primeiro, qualidade: um modelo pequeno e veloz pode ir bem em tarefas curtas e objetivas, como classificar, extrair dados ou resumir, e ficar atrás de modelos maiores em raciocínio longo ou em código complexo. Segundo, o contexto de 1 milhão de tokens é um limite técnico, e não garante que o modelo use bem todo o texto, algo que costuma exigir teste com os seus próprios documentos. Terceiro, a comparação de velocidade foi feita em hardware específico, e o resultado pode variar conforme a hospedagem escolhida.</p>
    <p>Também vale lembrar que o preço promocional de lançamento tem prazo. Quem for montar um produto em cima do Mercury 3 deve calcular o custo com o valor cheio, de US$ 0,20 e US$ 0,70, e tratar o desconto como bônus.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa IA para trabalhar ou para vender serviços, o custo por tarefa é o que define a margem. Um modelo que responde quase de imediato e cobra centavos abre espaço para automações que antes não fechavam a conta, como triagem de e-mails, atendimento em voz, classificação de leads e resumo de documentos em grande volume. Para entender como o tamanho do texto afeta custo e qualidade, vale ler nosso guia sobre <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto em IA</a>.</p>
    <p>Na prática, o caminho mais seguro é testar sem compromisso: com 100 milhões de tokens gratuitos na plataforma da Inception, dá para rodar uma amostra real do seu trabalho e comparar tempo, custo e qualidade com o modelo que você já usa. Como a API é compatível com a da OpenAI, trocar o modelo em uma automação costuma ser questão de mudar o endereço e a chave. Se você monta fluxos sem programar, veja como comparar ferramentas em <a href="/artigos/make-ou-zapier-qual-automacao-com-ia-vale-mais-a-pena">Make ou Zapier: qual automação com IA vale mais a pena</a>, e para pensar em redução de gastos use <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">como usar IA para reduzir custos operacionais em pequenos negócios</a>.</p>
    <p>Quem pensa em transformar isso em renda pode juntar velocidade e preço baixo em agentes sob medida para clientes, tema que explicamos em <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como ganhar dinheiro criando e vendendo agentes de IA personalizados</a>. E, para entender o que separa um agente de uma automação comum, leia <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot ou automação</a>.</p>

    <h2>O que observar daqui para frente</h2>
    <p>O próximo passo é a checagem independente: avaliações de terceiros mostrarão se o Mercury 3 mantém a vantagem de velocidade sem perder qualidade fora dos testes escolhidos pela Inception. Também vale acompanhar se outros laboratórios responderão com seus próprios modelos de difusão e se o preço de lançamento será mantido depois do período promocional.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Anúncio da <a href="https://www.inceptionlabs.ai/blog/introducing-mercury-3" target="_blank" rel="noopener noreferrer nofollow">Inception Labs</a>, publicado em 19 de outubro de 2026. Os dados de velocidade, preço e desempenho são informados pela própria empresa e por parceiros citados por ela.</p>
    </div>
  `,
};
