import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "open-weight-71-por-cento-tokens-vercel-china-controle-exportacao",
  title: "Modelos abertos já são 71,5% dos tokens do gateway da Vercel",
  summary:
    "Dados da Vercel mostram modelos abertos com 71,5% dos tokens e quase 25% do gasto, enquanto a China propõe controles de exportação, diz o The Register.",
  author: "Bruno Danello",
  sourceName: "The Register",
  sourceUrl: "https://www.theregister.com/ai-and-ml/2026/10/17/open-weight-models-win-hearts-minds-and-wallets/5303704",
  date: "2026-10-19",
  publishedAt: "2026-10-19T02:22:52-03:00",
  topic: "negocios",
  imageQuery: "servidor data center",
  content: `
    <p>Os modelos de IA de pesos abertos deixaram de ser coadjuvantes no uso real. Segundo reportagem do <a href="https://www.theregister.com/ai-and-ml/2026/10/17/open-weight-models-win-hearts-minds-and-wallets/5303704" target="_blank" rel="noopener noreferrer nofollow">The Register</a>, publicada em 17 de outubro, dados do índice de produção do AI Gateway da Vercel mostram que esses modelos processaram 71,5% dos tokens do serviço entre junho e setembro de 2026, e que o gasto com eles passou de cerca de 5% em junho para quase 25% em setembro. A reportagem lembra que os números são da Vercel, não foram coletados pelo veículo, e são estimativas.</p>
    <p>O dado chega ao mesmo tempo em que a China propôs incluir itens de IA em sua lista de controle de exportação, o que pode afetar justamente os modelos abertos chineses que muitas empresas americanas hospedam. Para quem usa IA para trabalhar ou empreender no Brasil, os dois assuntos se encontram na pergunta de qual modelo colocar por baixo das suas ferramentas.</p>

    <h2>O que os números da Vercel mostram</h2>
    <p>O AI Gateway funciona como uma porta única de acesso a vários modelos, parecido com o OpenRouter. Segundo a reportagem, em agosto os modelos de pesos abertos processaram pela primeira vez a maioria do volume de tokens, e no acumulado de junho a setembro chegaram a 71,5%. Mais de sete em cada dez tokens, portanto, já passam por modelos que qualquer empresa pode baixar, hospedar ou contratar de provedores diferentes.</p>
    <p>No dinheiro, a fatia é menor, mas cresce rápido. A parcela do gasto estimado destinada a modelos abertos mais que quadruplicou, de cerca de 5% em junho para quase 25% em setembro. O gasto total no gateway em setembro foi cerca de 13 vezes maior que em dezembro de 2025, enquanto o preço médio por token caiu cerca de 47%. Ou seja, o mercado gasta muito mais, mas cada token ficou quase metade mais barato.</p>
    <p>Entre os modelos individuais, o Claude Opus 5.5, da Anthropic, liderou o gasto em setembro, com 11,03%. Em seguida vieram o GPT-6 Astra, da OpenAI, com 4,86%, e o DeepSeek V4.1 Flash, com 4,19%, em terceiro. O Jev, da TypeSafe AI, foi o modelo de adoção mais rápida entre as equipes, com 35% das equipes pagas em 14 dias, mas respondeu por apenas cerca de 1% dos tokens e 0,15% do gasto, o que o texto atribui à arquitetura do modelo. Já cobrimos esse caso em <a href="/noticias/jev-vercel-modelo-mais-adotado-35-por-cento-equipes">Jev chega a 35% das equipes pagas da Vercel em duas semanas</a>.</p>
    <p>Outro número chama atenção: quase uma em cada três equipes trocou de provedor principal de IA em setembro. A Vercel interpreta isso como sinal de que a concorrência está limitando a dependência de um único fornecedor. Quando trocar de modelo custa pouco, o poder de barganha muda de lado.</p>

    <h2>Modelos chineses, hospedagem americana</h2>
    <p>A reportagem também detalha o peso dos modelos chineses. Mais de dois terços do gasto com modelos chineses em setembro foram para provedores dos Estados Unidos que hospedam esses modelos, contra menos de um décimo em dezembro de 2025. Na prática, muita empresa americana usa pesos chineses rodando em infraestrutura americana.</p>
    <p>Por laboratório, os números divulgados mostram perfis bem diferentes. A Moonshot AI, do Kimi, teve 3,6% dos tokens e 13,2% do gasto, o que indica um modelo mais caro por token. O DeepSeek concentrou 58% dos tokens, mas só 6,6% do gasto, ou seja, volume alto a preço baixo. A Z.ai, do GLM-5.3, ficou com 7,2% dos tokens e 4,5% do gasto. Sobre o DeepSeek, vale ver nossa cobertura do <a href="/noticias/deepseek-v4-1-flash-mantem-v4-pro">DeepSeek V4.1 Flash</a>, e sobre o GLM-5.3, a notícia sobre <a href="/noticias/anthropic-glm-5-3-zhipu-riscos-ciberseguranca">os riscos de ciberseguranca apontados pela Anthropic</a>.</p>

    <div class="callout-box"><span class="callout-label">Limite dos dados</span><p>O AI Gateway é um intermediário, como o OpenRouter. Ele não enxerga o uso por outros gateways, por compra direta nos fornecedores nem por hospedagem própria. Os números mostram uma amostra relevante, mas não o mercado inteiro.</p></div>

    <h2>A proposta de controle de exportação da China</h2>
    <p>O contexto político aparece no mesmo texto. A reportagem diz que a China propôs adicionar 40 itens de tecnologia à sua lista de controle de exportação, 23 deles ligados a IA. Segundo a agência AP, citada pelo The Register, o Kimi K3, da Moonshot, e o Qwen 3.8-Max, da Alibaba, parecem atingir o limite de parâmetros previsto, embora o aviso oficial não cite modelos específicos.</p>
    <p>Chris McGuire, pesquisador sênior do Council on Foreign Relations, disse que a medida cria incerteza significativa para empresas americanas que hospedam ou dependem de modelos chineses. Ele argumentou que a capacidade da China de restringir acordos de licenciamento a qualquer momento deveria deixar essas empresas mais hesitantes, e defendeu um marco regulatório amplo nos Estados Unidos, que cubra tanto a tecnologia americana de IA no exterior quanto os modelos chineses usados ou hospedados no país.</p>
    <p>A reportagem observa ainda que esforços americanos para proibir ou limitar modelos de pesos abertos atingiriam empresas locais que servem esses modelos e seus clientes. É um debate em que os dois lados podem perder: restringir o acesso encarece quem hoje economiza com modelos abertos. Para acompanhar o lado americano dessa discussão, veja <a href="/noticias/khanna-pesos-modelos-ia-seguranca-china">a proposta de Khanna sobre pesos de modelos e segurança</a>.</p>

    <h2>O que isso muda para quem trabalha com IA no Brasil</h2>
    <p>O primeiro efeito é de custo. Se o preço médio por token caiu quase pela metade em menos de um ano e os modelos abertos já respondem pela maior parte do volume, ferramentas e automações que usam esses modelos tendem a ficar mais baratas. Quem vende automações ou monta fluxos para clientes pode rever a margem: nem toda tarefa precisa de um modelo de fronteira. Resumir mensagens, classificar pedidos e extrair dados de documentos costumam funcionar bem com opções mais baratas. Nosso guia de <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">como usar IA para reduzir custos operacionais em pequenos negócios</a> mostra como fazer essa divisão.</p>
    <p>O segundo efeito é de risco. Um fluxo que depende de um único modelo chinês hospedado fora do Brasil pode sofrer com mudança de licença, de preço ou de disponibilidade se o cenário regulatório apertar. A proposta ainda é uma proposta, e o aviso oficial não nomeia modelos, então não há como dizer hoje quais seriam afetados. O que dá para fazer é se preparar: documentar qual modelo roda em cada etapa e manter um plano B testado.</p>
    <p>O terceiro efeito é de escolha. Para entender o que muda ao usar modelos abertos no dia a dia, incluindo vantagens de custo, privacidade e controle, vale ler <a href="/artigos/ia-codigo-aberto-o-que-muda-para-quem-usa">IA de código aberto: o que muda para quem usa</a>. A conclusão prática é que modelo aberto deixou de ser opção de laboratório e virou parte normal do orçamento de IA de muita empresa.</p>

    <h2>Como se proteger de mudanças de fornecedor</h2>
    <p>O dado de que quase um terço das equipes trocou de provedor principal em um mês mostra que a troca é viável quando o projeto foi desenhado para isso. Alguns cuidados simples ajudam qualquer negócio, grande ou pequeno.</p>
    <ul>
      <li>Use uma camada intermediária, como um gateway, para poder trocar o modelo sem reescrever o fluxo inteiro.</li>
      <li>Teste pelo menos dois modelos para cada tarefa importante e guarde exemplos reais para comparar qualidade e custo.</li>
      <li>Leia a licença de cada modelo aberto antes de usá-lo em um produto vendido a clientes.</li>
      <li>Evite colocar dados sensíveis de clientes em qualquer modelo sem saber onde ele é hospedado.</li>
      <li>Acompanhe o noticiário regulatório, porque regras de exportação e de hospedagem podem mudar rápido.</li>
    </ul>
    <p>Nada disso exige time técnico grande. Em muitos casos, é uma planilha com o nome do modelo, o fornecedor, o custo mensal e uma alternativa testada. Esse tipo de organização transforma uma notícia de política internacional em uma decisão tranquila de negócio.</p>

    <h2>O que esperar daqui para frente</h2>
    <p>Os dados cobrem de junho a setembro e vêm de um único gateway, então convém tratar a tendência com cautela. Ainda assim, a combinação de preço por token em queda, adoção crescente de modelos abertos e troca frequente de fornecedor sugere um mercado menos preso a poucas empresas. A proposta chinesa é o principal ponto de interrogação: se avançar e atingir modelos hoje muito usados, a hospedagem desses pesos por provedores fora da China pode ficar mais incerta.</p>
    <p>Por enquanto, o que é verificável é o seguinte: os modelos abertos já movimentam a maior parte dos tokens do gateway da Vercel, o gasto com eles quadruplicou em três meses e a China colocou em consulta uma lista que inclui itens de IA. Quem acompanha o tema deve olhar os próximos passos do aviso oficial e os próximos relatórios da Vercel para ver se o ritmo se mantém.</p>

    <div class="callout-box"><span class="callout-label">Fonte original</span><p>Reportagem de Thomas Claburn no <a href="https://www.theregister.com/ai-and-ml/2026/10/17/open-weight-models-win-hearts-minds-and-wallets/5303704" target="_blank" rel="noopener noreferrer nofollow">The Register</a>, de 17 de outubro de 2026, com base no índice de produção do AI Gateway da Vercel.</p></div>
  `,
};
