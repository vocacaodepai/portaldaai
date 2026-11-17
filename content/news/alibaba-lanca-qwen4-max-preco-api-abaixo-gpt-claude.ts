import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "alibaba-lanca-qwen4-max-preco-api-abaixo-gpt-claude",
  title: "Alibaba lança o Qwen4-Max e cobra bem menos que GPT-6 e Claude na API",
  summary:
    "O Qwen4-Max, novo modelo principal da Alibaba, chega com 1 milhão de tokens de contexto e API bem mais barata que a dos rivais, mas perde em vários testes.",
  author: "Bruno Danello",
  sourceName: "Alibaba, Digital Trends, DataCamp",
  sourceUrl: "https://www.digitaltrends.com/computing/qwen-4-max-aliababas-latest-flagship-ai-model-announced/",
  date: "2026-11-17",
  publishedAt: "2026-11-17T10:12:00-03:00",
  topic: "lancamentos",
  imageQuery: "Alibaba Group headquarters Hangzhou",
  content: `
    <p>A Alibaba liberou para o público o Qwen4-Max, novo modelo principal da família Qwen e o primeiro construído sobre a arquitetura Qwen4. O acesso geral abriu na segunda-feira, 16 de novembro, depois de uma prévia restrita que começou no dia 11. A aposta da empresa chinesa é clara: entregar um modelo de ponta para tarefas longas de trabalho, com agentes, por um preço de API bem abaixo do que cobram OpenAI, Anthropic e Google.</p>
    <p>O lançamento foi detalhado pelo próprio time do Qwen e analisado por veículos como Digital Trends, Bloomberg e DataCamp. O Portal da AI reuniu o que está confirmado, o que ainda depende de testes independentes e o que isso muda para quem usa IA no trabalho no Brasil.</p>

    <h2>O que se sabe</h2>
    <p>Segundo a Alibaba, o Qwen4-Max é um modelo do tipo mistura de especialistas, com 2,4 trilhões de parâmetros no total e 71 bilhões ativados a cada token. Ele aceita texto, imagem e vídeo como entrada, responde em texto e tem janela de contexto de 1 milhão de tokens, o suficiente para ler centenas de documentos de uma vez. O modo de raciocínio vem ligado por padrão.</p>
    <p>O preço é o ponto que mais chama atenção. Na tabela internacional da QwenCloud, a API custa US$ 1,50 por milhão de tokens de entrada e US$ 4,50 por milhão de tokens de saída, 25% menos que o antecessor, o Qwen3.8-Max. Para comparar, a Digital Trends lista o Claude Opus 5.5 a US$ 4 na entrada e US$ 20 na saída, e o DataCamp cita o GPT-6.1 Sol e o Kimi K3.1 a US$ 2 e US$ 10. Na saída, o Qwen4-Max custa menos de um quarto do Opus 5.5 e menos da metade do Sol.</p>
    <p>A Alibaba também afirma que o modelo gasta menos tokens para fazer o mesmo trabalho. No Work360, um teste criado pela própria empresa, o custo médio por tarefa caiu de US$ 4,43 para US$ 1,67, uma redução de 62% em relação ao Qwen3.8-Max. A comparação, como a Digital Trends ressalta, é contra o modelo anterior da casa, não contra os rivais.</p>
    <p>O modelo está disponível pela API da QwenCloud (compatível com os formatos de chamada da OpenAI e da Anthropic, o que facilita a troca em sistemas já prontos), pelo plano de assinatura Token Plan e nos produtos Qwen Studio, QwenWork e Qoder, a ferramenta de programação da empresa. Os pesos do Qwen4-Max não foram abertos: a Alibaba diz que só modelos Qwen4 menores serão liberados em código aberto, sem data.</p>

    <figure><img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Alibaba_Binjiang_Park.jpg" alt="Campus da Alibaba no distrito de Binjiang, em Hangzhou, na China" loading="lazy" /><figcaption>Foto: Danielinblue / Wikimedia Commons (CC BY-SA 4.0)</figcaption></figure>

    <h2>O que ainda não está confirmado</h2>
    <p>A maior parte dos números de desempenho vem da própria Alibaba. No gráfico de lançamento, o Qwen4-Max lidera alguns testes de tarefas longas e de programação com agentes, como o Agents' Last Exam (46,7, contra 43,4 do Opus 5.5) e o DeepSWE (75,7, contra 74,2 do Opus 5.5 e 75,2 do GPT-6.1 Sol). Mas o próprio gráfico mostra o modelo atrás em vários outros: no Terminal-Bench 4.0 marca 48,5, contra 59,6 do Opus 5.5 e 67,2 do Kimi K3.1; e no ProgramBench, que mede a capacidade de recriar um software, fica em 31,5, contra 65,0 do Opus 5.5.</p>
    <p>As primeiras avaliações independentes pintam um quadro mais modesto. Segundo o DataCamp, o índice da Artificial Analysis coloca o Qwen4-Max em nono lugar geral, e o Vals Index em 11º de 38 modelos, a melhor posição já registrada por um modelo chinês nesse ranking. Nos testes da Vals, o GPT-6.1 Sol teve nota um pouco maior e saiu mais barato por tarefa, porque o Qwen4-Max escreve e raciocina demais: testadores relatam lentidão e respostas longas até em pedidos simples. Ou seja, preço menor por token não garante conta menor no fim do mês.</p>
    <p>Também falta validação externa da segurança. A Alibaba diz ter filtrado dados de treino ligados a ataques e não ter observado capacidades de risco cibernético em larga escala, mas, segundo a Digital Trends, nenhuma equipe externa testou o modelo até agora.</p>

    <h2>Por que isso importa para você</h2>
    <p>A análise do Portal da AI é que o Qwen4-Max não destrona os líderes, mas aperta a disputa de preço no topo. A briga que já vinha forte entre as americanas, como contamos na <a href="/noticias/anthropic-openai-guerra-precos-opus-5-5-gpt-6-sol-luna">guerra de preços entre Claude Opus 5.5 e GPT-6</a>, ganha agora um concorrente chinês com nota de ponta e tabela agressiva, poucos dias depois de o Google lançar o <a href="/noticias/google-gemini-4-carbon-lancamento-ranking-preco">Gemini 4 Carbon</a>, que tem aumento de preço marcado para 1º de dezembro.</p>
    <p>Para quem desenvolve produtos com IA no Brasil, a conta em dólar pesa, e um modelo de ponta que cobra uma fração na saída de texto merece entrar no teste. A compatibilidade com o formato da OpenAI e da Anthropic reduz o trabalho de experimentar. O conselho prático é medir o custo por tarefa, não por token: rode as suas próprias tarefas reais nos dois ou três modelos candidatos e compare o valor final e o tempo de resposta, já que o Qwen4-Max é mais lento e verboso. Para escolher a ferramenta do dia a dia, o nosso guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> ajuda a pensar no uso antes do preço.</p>
    <p>Há um cuidado extra. Os servidores da QwenCloud ficam em regiões como Singapura, Hong Kong, Tóquio, Pequim, Virgínia (EUA) e Frankfurt, e o modelo é de uma empresa chinesa sob pressão regulatória crescente no Ocidente. Antes de mandar dados de clientes, verifique em qual região a sua conta roda e o que diz a LGPD sobre transferência internacional. A Alibaba já vinha baixando preço em outras frentes, como no <a href="/noticias/alibaba-qwen-audio-3-1-corta-precos-ate-95-por-cento">Qwen-Audio 3.1, com cortes de até 95%</a>, e a estratégia parece a mesma: ganhar espaço pelo custo. Vamos acompanhar os próximos testes independentes e a chegada dos modelos Qwen4 abertos.</p>
  `,
  faq: [
    {
      question: "Quanto custa usar o Qwen4-Max pela API?",
      answer:
        "Na tabela internacional da QwenCloud, US$ 1,50 por milhão de tokens de entrada e US$ 4,50 por milhão de tokens de saída. Há também o plano de assinatura Token Plan e uma cota gratuita de 1 milhão de tokens para novos usuários na região de Singapura.",
    },
    {
      question: "O Qwen4-Max é melhor que o Claude e o GPT-6?",
      answer:
        "Não de forma geral. Ele lidera alguns testes divulgados pela própria Alibaba, mas fica atrás do Claude Opus 5.5 e dos modelos GPT-6 em vários outros, e as primeiras avaliações independentes o colocam entre o 9º e o 11º lugar nos rankings gerais.",
    },
    {
      question: "O Qwen4-Max é de código aberto?",
      answer:
        "Não. Os pesos do Qwen4-Max não foram liberados. A Alibaba diz que modelos Qwen4 menores serão abertos mais tarde, sem data nem tamanho definidos.",
    },
  ],
};
