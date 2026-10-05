import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "clockwork-io-31-milhoes-falhas-gpu-ia",
  title: "Clockwork.io capta US$ 31 milhões para evitar horas de GPU perdidas em IA",
  summary:
    "LinkedIn, Together AI e WhiteFiber usam software da Clockwork.io que evita perda de horas de GPU quando chips falham durante treinamento de IA.",
  author: "Bruno Danello",
  sourceName: "PR Newswire",
  sourceUrl:
    "https://www.prnewswire.com/news-releases/clockworkio-raises-31m-as-linkedin-together-ai-and-whitefiber-adopt-its-resilience-software-to-stop-wasting-gpu-hours-302897588.html",
  date: "2026-10-05",
  content: `
    <p>A Clockwork.io anunciou nesta segunda-feira, 5 de outubro, uma nova rodada de US$ 31 milhões, elevando o total captado pela startup a US$ 73 milhões. Segundo <a href="https://www.prnewswire.com/news-releases/clockworkio-raises-31m-as-linkedin-together-ai-and-whitefiber-adopt-its-resilience-software-to-stop-wasting-gpu-hours-302897588.html" target="_blank" rel="noopener noreferrer nofollow">comunicado oficial distribuído pela PR Newswire</a>, a rodada foi liderada por Premji Invest, Wing Venture Capital e Seligman Ventures, com participação dos investidores já existentes NEA e e& Capital.</p>

    <p>A empresa vende um software de tolerância a falhas para infraestrutura de inteligência artificial, pensado para resolver um problema caro e pouco visível de fora: quando um componente de hardware falha durante o treinamento de um modelo de IA, milhares de GPUs podem ficar ociosas esperando a correção, desperdiçando horas inteiras de processamento já pagas. Segundo o comunicado, a própria Meta relatou interrupções inesperadas em média a cada três horas durante um período de 54 dias de treinamento do Llama 3 usando 16.384 GPUs, um exemplo da escala do problema que a Clockwork.io tenta resolver.</p>

    <h2>Como funciona o software da Clockwork.io</h2>
    <p>A solução da empresa tem duas partes principais. O LinkPass identifica falhas de rede e redireciona o tráfego de dados para contornar a conexão quebrada, sem que o processo de treinamento perceba a interrupção. Já o TorchPass faz algo parecido no nível da própria GPU: quando um chip começa a falhar, o TorchPass move o trabalho que estava sendo feito ali para uma GPU saudável, permitindo que o treinamento continue em vez de precisar voltar a um ponto de checagem anterior e refazer horas de trabalho. A versão mais recente do TorchPass ganhou ainda a capacidade de salvar o estado inteiro de um treinamento distribuído em várias máquinas sem exigir mudanças no código, além de pontos de checagem assíncronos mais rápidos voltados a treinamento por reforço.</p>
    <p>Segundo o comunicado, o LinkedIn já usa o LinkPass em produção e afirma evitar dezenas de milhares de horas de GPU perdidas por mês. A Together AI está levando a tecnologia do TorchPass ao mercado como um serviço dentro de seus clusters de GPU, e demonstrou publicamente um treinamento distribuído em várias máquinas continuando sem interrupção mesmo depois de falhas de hardware propositalmente inseridas no teste. A WhiteFiber, por sua vez, está ampliando o uso do software da Clockwork.io em toda a sua operação global de GPU como serviço, usada para validar clusters de infraestrutura de IA antes de entregá-los a clientes.</p>

    <h2>O custo escondido de treinar modelos de IA em escala</h2>
    <p>Esse tipo de investimento em resiliência de infraestrutura ajuda a explicar por que treinar modelos de IA de ponta custa tanto dinheiro, além do preço dos próprios chips. O <a href="/noticias/amazon-8-bilhoes-chips-nvidia-leaseback">Portal da AI já mostrou como a Amazon investiu US$ 8 bilhões em chips da Nvidia</a> e como a <a href="/noticias/broadcom-emprestimo-42-bilhoes-anthropic-chips-tpu">Anthropic recorreu a um empréstimo de US$ 42 bilhões para financiar chips e TPUs</a>: cada GPU parada por falha de hardware, sem um sistema como o da Clockwork.io para contornar o problema, representa dinheiro gasto sem gerar treinamento útil, numa indústria em que o custo de infraestrutura já é a maior linha de despesa das empresas de IA.</p>
    <p>Esse tipo de solução de "bastidores" também mostra como o mercado de IA está maturando: junto com a corrida por modelos cada vez maiores, cresce um ecossistema de empresas especializadas em tornar o treinamento desses modelos mais eficiente e mais barato. O <a href="/noticias/supabase-turso-aquisicao-150-milhoes-bancos-ia">Portal da AI já noticiou</a> a aquisição da Turso pela Supabase, voltada a bancos de dados para aplicações de IA, e a <a href="/noticias/snorkel-ai-triplica-avaliacao-3-5-bilhoes-dados-treinamento">Snorkel AI triplicando sua avaliação</a> por conta da demanda crescente por dados de treinamento de melhor qualidade, movimentos que seguem a mesma lógica: cada etapa do processo de treinar um modelo de IA, da preparação de dados até a confiabilidade da infraestrutura, hoje sustenta empresas inteiras dedicadas só a resolver aquele gargalo específico.</p>

    <h2>Por que isso importa para quem usa IA no Brasil</h2>
    <p>Quem usa ferramentas como ChatGPT, Claude ou Gemini no dia a dia não sente diretamente o efeito de uma falha de GPU durante o treinamento de um modelo, mas sente o resultado dela mais adiante: toda essa ineficiência de infraestrutura acaba embutida, de alguma forma, no preço cobrado pelas assinaturas e pelo acesso via API às ferramentas de IA. Empresas brasileiras que já gastam com <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">IA para reduzir custos operacionais</a> têm interesse direto em que o custo de treinar e operar esses modelos continue caindo, porque isso tende a se refletir, com o tempo, em planos mais baratos ou em mais recursos gratuitos disponíveis nas ferramentas que já usam.</p>
    <p>Para quem trabalha com infraestrutura de tecnologia, cloud ou dados em empresas brasileiras que estão montando ou contratando capacidade de GPU para treinar modelos próprios, ainda que em escala muito menor do que LinkedIn ou Together AI, o caso da Clockwork.io serve como lembrete prático: falhas de hardware em cargas de trabalho de IA não são exceção, são esperadas, e planejar a infraestrutura considerando esse risco desde o início custa menos do que descobrir o problema no meio de um treinamento caro e demorado.</p>

    <div class="callout-box">
      <span class="callout-label">O problema em números</span>
      <p>Segundo a Clockwork.io, a Meta registrou, em média, uma interrupção inesperada a cada três horas ao longo de 54 dias de treinamento do Llama 3 usando 16.384 GPUs. Cada uma dessas interrupções, sem um sistema de contorno automático, pode custar horas de processamento refeito do zero.</p>
    </div>

    <h2>O que esperar da indústria de resiliência para IA</h2>
    <p>O CEO da Clockwork.io, Suresh Vasudevan, resumiu a lógica por trás do investimento ao afirmar, segundo o comunicado, que "falhas são inevitáveis na escala da IA, perder horas de trabalho útil não deveria ser". Essa frase capta bem a tendência maior do setor: conforme as empresas de IA aumentam o tamanho dos clusters de GPU usados para treinar modelos cada vez mais complexos, a chance de uma falha pontual de hardware também cresce, tornando software de tolerância a falhas uma peça cada vez mais essencial da conta final de treinar um modelo de IA, ao lado do preço dos próprios chips e da energia consumida pelos data centers.</p>
    <p>Para o mercado brasileiro de tecnologia, que ainda está no início da construção de infraestrutura própria de IA em maior escala, casos como o da Clockwork.io mostram um caminho de maturidade a seguir: empresas que pretendem investir pesado em treinamento de modelos próprios, ou mesmo em servir modelos de terceiros com GPUs próprias, vão precisar considerar esse tipo de software de resiliência como parte do orçamento de infraestrutura, não como um extra opcional a ser adicionado depois que o primeiro grande prejuízo por falha de hardware já tiver acontecido.</p>
  `,
  faq: [
    {
      question: "O que a Clockwork.io vende para empresas de IA?",
      answer:
        "Um software de tolerância a falhas para infraestrutura de treinamento de IA, com dois produtos principais: o LinkPass, que contorna falhas de rede, e o TorchPass, que move o trabalho de uma GPU que está falhando para outra saudável sem perder o progresso do treinamento.",
    },
    {
      question: "Quais empresas já usam o software da Clockwork.io?",
      answer:
        "Segundo o comunicado da empresa, LinkedIn, Together AI e WhiteFiber já usam a tecnologia em produção, cada uma aplicando o software a diferentes partes de sua infraestrutura de GPU.",
    },
  ],
};
