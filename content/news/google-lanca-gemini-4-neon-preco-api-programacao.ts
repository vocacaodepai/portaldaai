import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-lanca-gemini-4-neon-preco-api-programacao",
  title: "Google lança Gemini 4 Neon, modelo para código e agentes por US$ 3",
  summary:
    "Quarto modelo da família Gemini 4, o Neon chega ao app para assinantes Pro e Ultra e à API paga, com foco em programação, agentes e menor custo por tarefa.",
  author: "Bruno Danello",
  sourceName: "Google, The Decoder",
  sourceUrl:
    "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/",
  date: "2026-11-19",
  publishedAt: "2026-11-19T07:11:00-03:00",
  topic: "lancamentos",
  imageQuery: "Google Gemini logo",
  content: `
    <p>O Google apresentou nesta quarta-feira (18) o Gemini 4 Neon, o quarto modelo da família Gemini 4 e o terceiro lançado em cerca de três semanas, depois do Carbon, no fim de outubro, e do Hydrogen, na semana passada. O Neon ocupa um espaço que faltava na linha: um modelo com desempenho perto do topo dos rankings, mas pensado para fechar tarefas longas de programação, análise de documentos e ciência gastando menos por tarefa concluída do que os modelos maiores.</p>
    <p>O anúncio, assinado por Koray Kavukcuoglu, vice-presidente sênior do Google DeepMind e arquiteto-chefe de IA do Google, descreve o Neon como um modelo de "inteligência de fronteira com conclusão rápida de tarefas de ponta a ponta". Na divisão de papéis da família, o Carbon fica com os projetos mais difíceis e demorados, o Hydrogen com a execução rápida do dia a dia e o Neon com o meio do caminho: fluxos complexos que se repetem muitas vezes, onde profundidade e custo pesam ao mesmo tempo.</p>

    <h2>Onde o Neon já pode ser usado</h2>
    <p>Diferente do Hydrogen, que chegou também ao plano gratuito e à Busca do Google, o Neon começa restrito a quem paga. Segundo o Google, a liberação inclui:</p>
    <ul>
      <li><strong>App Gemini:</strong> assinantes do Google AI Pro e do Ultra encontram o modelo na lista de seleção.</li>
      <li><strong>Desenvolvedores:</strong> Gemini API e Google AI Studio no nível pago, além do Android Studio. Assinantes Pro e Ultra podem experimentar o modelo no AI Studio.</li>
      <li><strong>Google Antigravity:</strong> o ambiente de programação com agentes do Google recebe o Neon para assinantes pagos do AI Pro e do Ultra.</li>
      <li><strong>Empresas:</strong> o Gemini for business oferece o modelo pela API e pela lista de modelos.</li>
      <li><strong>Defesa cibernética:</strong> uma variante voltada a segurança começa a ser liberada nos próximos dias para defensores aprovados no programa Fairwind, com pedido de acesso pela equipe de contas do Google Cloud.</li>
    </ul>
    <p>O anúncio não traz calendário por país nem menciona o Vertex AI. Como nos lançamentos anteriores da família, a liberação deve ser gradual, então pode levar alguns dias até o modelo aparecer para todos os assinantes brasileiros.</p>

    <h2>Preço e recursos técnicos</h2>
    <p>Na API, o Neon custa US$ 3 por milhão de tokens de entrada e US$ 15 por milhão de tokens de saída. A entrada em cache, usada quando o mesmo trecho de texto é reenviado várias vezes, sai por US$ 0,15 por milhão, um desconto de 95%. A janela de contexto é de 1 milhão de tokens. Segundo o site The Decoder, que acompanhou o registro de mudanças do AI Studio, o modelo também pode gerar até 1 milhão de tokens de saída, aceita texto, imagem, vídeo, áudio e PDF, e trabalha com uso de computador, execução de código, busca em arquivos e consulta ao Google Search e ao Google Maps. Ele não gera imagens nem áudio.</p>
    <p>A tabela da família ficou assim, por milhão de tokens de entrada e saída: Hydrogen a US$ 1,50 e US$ 7,50; Carbon e Argon a US$ 2 e US$ 10 em preço promocional, que sobe para US$ 4 e US$ 20 em 1º de dezembro, segundo o The Decoder; e Neon a US$ 3 e US$ 15. Ou seja, o Neon custa o dobro do Hydrogen, mas fica abaixo do preço cheio do Carbon depois do fim da promoção. Para comparar com a concorrência, o GPT-6.2 Astra, lançado pela OpenAI nesta semana, cobra US$ 8 e US$ 40, o mesmo que o Claude Fable 5.2, como mostramos na <a href="/noticias/openai-lanca-gpt-6-2-astra-sol-preco-claude-fable">notícia sobre o GPT-6.2</a>.</p>
    <p>Assim como o Hydrogen, o Neon tem quatro níveis de raciocínio. O padrão é o "alto", e o nível "xhigh" fica reservado para as tarefas mais pesadas. A lógica é a mesma: o usuário escolhe quanto tempo e dinheiro quer gastar em cada pedido.</p>

    <h2>O que os números do Google mostram</h2>
    <p>O Google divulgou uma lista longa de resultados. No índice de inteligência da Artificial Analysis, o Neon marca 61 pontos no nível xhigh e aparece em terceiro lugar geral, atrás de modelos maiores e mais lentos. No índice de agentes de programação da mesma empresa, fica em primeiro, com 58,6. Na Agent Arena, ranking ao vivo com mais de 4.200 sessões de agentes, ocupa o segundo lugar global, com 1.336 pontos. Em programação, a empresa cita 65,2% no Terminal-Bench 4.1 e 46,2% no FrontierCode 2.0.</p>
    <p>Fora do código, o Google afirma que o Neon lidera os testes de pesquisa jurídica e de agente tributário da Vals, a maior parte dos testes de finanças, contabilidade e modelagem em planilhas da Surge AI, o AutomationBench da Zapier (56,3%) e o Vending-Bench 2 da Andon Labs, que simula a gestão de um pequeno negócio. Em ciência, aparecem 70,5% no Terminal-Bench Science e 71,3% no HLE-Diamond.</p>
    <p>O argumento central, porém, é de custo. Segundo o Google, no nível alto de raciocínio o Neon gasta 32% menos por tarefa que o Carbon, e em alguns rankings de agentes sai de 50% a 80% mais barato por tarefa que os principais modelos concorrentes. A empresa também diz que ele tem a menor taxa de informações inventadas entre os modelos Gemini 4 testados internamente no Antigravity.</p>
    <p>É importante ler esses números com cuidado. Eles foram escolhidos e divulgados pelo próprio Google, e o The Decoder registrou que, no momento do lançamento, não havia resultados independentes publicados. Rankings de terceiros, como Artificial Analysis e Agent Arena, mudam a cada lançamento, e a OpenAI acabou de colocar o GPT-6.2 no ar.</p>

    <h2>Segurança e comportamento como agente</h2>
    <p>O Google afirma que o Neon tem proteções em tempo real contra uso indevido em ataques cibernéticos e em biossegurança comparáveis às do Carbon, mas recusa bem menos trabalho legítimo: 1,98% das tarefas no Terminal-Bench 4.0. A empresa também relata 0,09% de ações desalinhadas no seu conjunto de testes de segurança de agentes e 99,2% de aprovação em avaliação de honestidade. Em comparação com o Carbon, o Neon deixaria menos tarefas pela metade e iria menos vezes além do que foi pedido. No teste de injeção indireta de prompt da Gray Swan, em que instruções escondidas tentam sequestrar o agente, o modelo resistiu a todos os ataques no nível mais alto de raciocínio. Os detalhes estão na ficha técnica do modelo, publicada junto com o anúncio.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem assina o Google AI Pro ou o Ultra, a mudança prática é ter uma opção intermediária no app: mais capaz que o Hydrogen para relatórios, análises de planilhas e documentos longos, e em tese mais rápida que o Carbon. Vale testar nas tarefas reais do seu trabalho antes de trocar de modelo por causa de um ranking. Quem ainda está decidindo qual assistente usar pode começar pela nossa comparação entre <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude e Gemini</a>.</p>
    <p>Para desenvolvedores e pequenas empresas que pagam API, o Neon é mais um sinal de que a disputa saiu do "modelo mais inteligente" e foi para o "custo por tarefa concluída". Um agente que acerta mais na primeira tentativa pode sair mais barato mesmo cobrando mais por token, porque gasta menos rodadas. A recomendação é medir com os seus próprios dados: rodar o mesmo lote de tarefas no Neon, no Hydrogen e no modelo que você já usa, e comparar acerto, tempo e conta no fim do mês. Para quem programa com agentes, o explicativo sobre o <a href="/artigos/antigravity-no-app-gemini-para-mac-o-que-e-quem-pode-usar-e-limites">Antigravity no app Gemini</a> mostra como funciona o ambiente onde o Google diz que o Neon rende mais.</p>
    <p>Outro ponto de atenção é o calendário de preços. Quem montou projetos em cima do Carbon ou do Argon com o preço promocional precisa refazer as contas antes de 1º de dezembro, quando o valor dobra, e o Neon pode ser a alternativa natural dentro do próprio Google. E antes de ligar qualquer modelo novo a dados de clientes, vale passar pelo nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA com segurança</a>.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Nas últimas semanas o Google lançou o <a href="/noticias/google-gemini-4-carbon-lancamento-ranking-preco">Gemini 4 Carbon</a>, o <a href="/noticias/google-lanca-gemini-4-hydrogen-gratis-busca-app-preco">Gemini 4 Hydrogen</a> e agora o Neon, num ritmo que pressiona OpenAI e Anthropic justamente na semana em que a OpenAI lançou o GPT-6.2. Três coisas merecem acompanhamento: a confirmação independente dos números de desempenho, a chegada do modelo a planos mais baratos ou ao gratuito e a resposta dos concorrentes em preço. Para quem usa IA no trabalho, o recado continua o mesmo: não amarre seus processos a um único modelo, porque o melhor custo-benefício está mudando de mãos em questão de semanas.</p>
    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Informações do blog oficial do Google, em anúncio de Koray Kavukcuoglu publicado em 18 de novembro de 2026, e do site The Decoder, que detalhou recursos e a tabela de preços da família Gemini 4. Os resultados de desempenho e de segurança foram divulgados pelo Google e ainda não foram verificados de forma independente.</p>
    </div>
  `,
};
