import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "oracle-cerebras-nuvem-2027-inferencia-ia",
  title: "Oracle vai oferecer na nuvem os computadores de IA da Cerebras em 2027",
  summary:
    "A Oracle confirmou que vai vender, a partir de 2027, nuvem com os computadores de IA da Cerebras, e a ação da Cerebras subiu 9,5%. Veja o que muda para você.",
  author: "Bruno Danello",
  sourceName: "The Next Web, Bloomberg",
  sourceUrl:
    "https://thenextweb.com/news/oracle-cerebras-ai-inference-cloud-2027",
  date: "2026-10-27",
  publishedAt: "2026-10-27T23:35:00-03:00",
  topic: "negocios",
  imageQuery: "Cerebras wafer scale engine chip",
  content: `
    <p>A Oracle vai passar a oferecer, na sua nuvem, serviços de inteligência artificial rodando nos computadores da Cerebras Systems. O acordo foi revelado primeiro pela Bloomberg e confirmado pelas duas empresas em um anúncio conjunto nesta terça-feira, 27 de outubro de 2026, durante o evento anual Oracle AI World. O lançamento está previsto para 2027, dentro da Oracle Cloud Infrastructure (OCI), e a Oracle não informou quanto hardware da Cerebras pretende instalar.</p>

    <p>Pode parecer um assunto distante de quem só abre o ChatGPT ou o Claude para trabalhar, mas é o tipo de acordo que, mais adiante, mexe na velocidade e no preço das respostas que chegam até você. A seguir, o que se sabe, por que esse chip é diferente e o que observar.</p>

    <h2>O que foi anunciado</h2>
    <p>Segundo a reportagem do The Next Web, a Oracle vai hospedar máquinas da Cerebras em seus data centers e vender acesso a elas como serviço de nuvem. Mahesh Thiagarajan, presidente da Oracle Cloud Infrastructure, resumiu a lógica em uma frase: &quot;a inferência de IA exige escolha&quot;. Em português claro, a Oracle quer ter mais de uma opção de hardware para oferecer aos clientes, em vez de depender de um único fornecedor de chips.</p>

    <p>Inferência é a etapa em que o modelo já treinado responde a pedidos reais: cada pergunta que você faz a um chatbot, cada resumo, cada linha de código sugerida. É a parte que gera conta recorrente para as empresas de IA, porque acontece milhões de vezes por dia, e é justamente onde a Cerebras diz ser mais rápida que a concorrência.</p>

    <h2>Por que o chip da Cerebras é diferente</h2>
    <p>A maior parte dos chips é cortada de uma lâmina circular de silício, chamada wafer, e cada lâmina rende muitos processadores pequenos. A Cerebras faz o contrário: cada chip dela usa a lâmina inteira. A empresa afirma que esse desenho permite responder a pedidos de IA mais depressa do que os rivais, porque os dados não precisam viajar entre vários chips separados.</p>

    <p>A Cerebras abriu o capital em maio e já tem como clientes a OpenAI e a Amazon Web Services. Analistas citados na reportagem esperam que a receita da empresa quase triplique no ano que vem, para perto de US$ 3 bilhões, a partir de menos de US$ 1 bilhão neste ano. Na terça-feira, as ações da Cerebras subiram cerca de 9,5% com a notícia.</p>

    <h2>O tamanho da aposta e o que ainda é dúvida</h2>
    <p>O anúncio veio no mesmo evento em que a Oracle também falou de acordos com a Nvidia e com a Intel, o que reforça a estratégia de oferecer vários tipos de chip. A empresa planeja gastar cerca de US$ 70 bilhões em investimentos de capital no ano fiscal que termina em maio de 2027, contra US$ 55,7 bilhões no ano anterior. É dinheiro de infraestrutura em escala enorme, e já mostramos que a empresa chegou a acumular um <a href="/noticias/oracle-backlog-664-bilhoes-nuvem-ia">backlog de US$ 664 bilhões em contratos de IA</a>.</p>

    <p>Ainda assim, há ressalvas. A reportagem lembra que investidores seguem preocupados porque a Cerebras atende um nicho pequeno de um mercado em que a Nvidia fatura perto de US$ 100 bilhões por trimestre. Também não há detalhes de preço, de quais modelos rodarão nas máquinas nem de em que regiões do mundo o serviço estará disponível. Tudo isso só deve ficar claro mais perto do lançamento.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Para guardar</span>
      <p>O mercado de chips de IA está deixando de ter um dono só. Mais concorrência na etapa de inferência tende, com o tempo, a significar respostas mais rápidas e custo por uso menor, mas isso é tendência, não promessa: nenhuma das empresas divulgou preços.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>Quem trabalha com IA no Brasil raramente compra chip, mas paga a conta de quem compra. Os preços de API, de planos de assistentes e de ferramentas de automação refletem o custo de rodar os modelos. Quando uma nuvem grande como a da Oracle passa a oferecer hardware especializado em resposta rápida, a pressão para baixar preço e ganhar velocidade aumenta sobre todo mundo. Alguns pontos práticos:</p>
    <ul>
      <li>Se você monta automações ou agentes para clientes, velocidade de resposta é parte da experiência. Hardware mais rápido na ponta da nuvem pode tornar viável produtos que hoje parecem lentos demais, como atendimento por voz ou assistentes que respondem em tempo real.</li>
      <li>Se você vende serviço de IA, acompanhe os preços de API ao longo de 2027. Reduções de custo costumam chegar primeiro a quem usa a API direto e só depois aos planos de consumo.</li>
      <li>Evite amarrar seu produto a um único fornecedor de modelo ou de nuvem. O próprio movimento da Oracle mostra que as empresas grandes também estão diversificando.</li>
    </ul>

    <p>A disputa por chips aparece em várias frentes ao mesmo tempo. A Amazon, por exemplo, tenta reduzir a dependência da Nvidia com um software próprio, como contamos em <a href="/noticias/amazon-torchneuron-pytorch-trainium-desafia-nvidia">Amazon TorchNeuron e o desafio à Nvidia</a>, e startups de chips de inferência estão captando valores altos, caso da <a href="/noticias/tenstorrent-capta-1-5-bilhao-chips-inferencia-modelos-abertos">Tenstorrent, que levantou US$ 1,5 bilhão</a>. A Oracle e a Cerebras entram nesse mesmo mapa.</p>

    <p>Para entender como tirar proveito da IA no seu trabalho sem depender de detalhe técnico de infraestrutura, vale ler <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o futuro do trabalho autônomo</a> e <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como ganhar dinheiro criando e vendendo agentes de IA personalizados</a>. Quanto mais barata e rápida a inferência fica, mais espaço existe para quem constrói soluções em cima dela.</p>

    <p>Vale registrar que o acordo foi apresentado por Oracle e Cerebras em comunicado conjunto, e que os números de receita futura da Cerebras são projeções de analistas, não resultados confirmados. Este texto é análise nossa a partir da reportagem do The Next Web, que cita a cobertura inicial da Bloomberg.</p>
  `,
};
