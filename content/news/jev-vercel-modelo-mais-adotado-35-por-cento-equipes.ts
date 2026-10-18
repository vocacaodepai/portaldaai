import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "jev-vercel-modelo-mais-adotado-35-por-cento-equipes",
  title: "Jev chega a 35% das equipes pagas da Vercel em duas semanas",
  summary:
    "Dados da Vercel mostram o Jev, da TypeSafe AI, usado por 35% das equipes pagas em duas semanas, quase o dobro do Sonnet 5.5, segundo o TechCrunch.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/",
  date: "2026-10-18",
  publishedAt: "2026-10-18T00:30:00-03:00",
  topic: "lancamentos",
  imageQuery: "Vercel logo",
  content: `
    <p>O Jev, modelo de IA da TypeSafe AI que escolhe entre alguns resultados pré-definidos em vez de escrever texto livre, virou o modelo de adoção mais rápida da história da Vercel. Segundo dados publicados pela empresa na quinta-feira e relatados pelo <a href="https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>, em duas semanas de lançamento o modelo já era usado por 35% das equipes pagas da plataforma, quase o dobro do alcance do segundo colocado, o Sonnet 5.5, da Anthropic.</p>
    <p>Os números vêm do gateway de IA da Vercel, um serviço de API unificada parecido com o OpenRouter. O próprio TechCrunch faz a ressalva: é uma visão limitada, que tende a subestimar laboratórios como OpenAI e Anthropic, que também vendem acesso direto pelas suas APIs. Mesmo assim, é o primeiro dado concreto de uso por trás do barulho que o Jev provocou desde a estreia em versão limitada, em 15 de setembro.</p>

    <h2>O que é o Jev e por que ele é barato</h2>
    <p>O Jev foi desenhado como uma ferramenta leve para decidir entre poucas saídas possíveis. Em vez de gerar parágrafos, ele devolve uma escolha entre opções previamente definidas, junto com probabilidades. Limitar as saídas deixa o modelo mais barato e mais rápido do que alternativas generalistas como o Sonnet, e isso o torna ideal para classificar grandes volumes de dados: marcar uma mensagem como spam ou não, separar um chamado de suporte por urgência, detectar um comando perigoso.</p>
    <p>A própria Vercel foi uma das primeiras adotantes. A empresa usa o Jev para classificar comandos nocivos, tarefa que antes era feita com o GPT-6 Luna, da OpenAI. Trocar um modelo de texto de uso geral por um classificador enxuto é exatamente o tipo de decisão que reduz custo sem mudar o resultado percebido pelo cliente. Já mostramos como a startup chegou a esse patamar na cobertura da <a href="/noticias/typesafe-ai-jev-avaliada-7-5-bilhoes-modelo-sem-texto">rodada que avaliou a TypeSafe AI em US$ 7,5 bilhões</a>, semanas depois do lançamento.</p>
    <p>O sucesso também gerou reação. O TechCrunch aponta que o Jev inspirou ofertas concorrentes da OpenAI e da Amazon, entre outras. Ou seja, a ideia de um modelo que classifica em vez de conversar já virou categoria de produto, e não apenas um experimento de uma startup.</p>

    <h2>Código aberto e gastos: o que mais o relatório mostra</h2>
    <p>O relatório da Vercel traz outros dois dados relevantes para quem acompanha o mercado de modelos. Primeiro, os modelos de código aberto já respondem por mais de 70% dos tokens processados no gateway e por quase 25% do gasto total. Segundo, o gasto com laboratórios de fronteira cresceu dez vezes, mesmo representando fatia menor do total.</p>
    <p>A leitura que o TechCrunch faz dessa combinação é que modelos de fronteira e alternativas abertas podem acabar sendo complementares, não rivais. Na prática, equipes usam um modelo caro para tarefas difíceis de raciocínio e escrita, e modelos baratos ou abertos para o trabalho repetitivo em volume. O mercado cresce rápido o bastante para que os dois lados ganhem. Para entender o que muda ao usar modelos abertos, vale ler nosso guia sobre <a href="/artigos/ia-codigo-aberto-o-que-muda-para-quem-usa">IA de código aberto: o que muda para quem usa</a>.</p>

    <div class="callout-box"><span class="callout-label">Como ler esses números</span><p>Os dados vêm de um único gateway e de equipes que já pagam pela Vercel, em geral desenvolvedores e empresas de software. Isso não representa o mercado inteiro de IA. Mesmo assim, é um sinal útil de para onde estão indo os projetos novos: mais classificação barata, mais modelos abertos.</p></div>

    <h2>Por que isso importa para você</h2>
    <p>Quem trabalha com IA no Brasil costuma pensar em modelo como sinônimo de chatbot. A história do Jev mostra que boa parte do valor está em tarefas pequenas e repetitivas, em que a resposta certa é uma etiqueta e não um texto. Triar e-mails de clientes, separar leads quentes de frios, filtrar comentários ofensivos, classificar notas fiscais por tipo de despesa: tudo isso é trabalho de classificação, e o custo por decisão importa quando o volume é grande.</p>
    <p>Para um pequeno negócio, a lição é de custo. Se o seu fluxo usa um modelo de texto caro para decidir "é urgente ou não", você provavelmente está pagando por capacidade que não precisa. Conversamos sobre esse raciocínio no guia de <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">como usar IA para reduzir custos operacionais em pequenos negócios</a>. A regra prática é separar as tarefas: uso o modelo mais capaz para escrever e analisar, e o mais enxuto para etiquetar e filtrar.</p>
    <p>Para quem vende serviço de automação, o dado também abre oportunidade. Montar fluxos que classificam mensagens do WhatsApp, e-mails ou pedidos, com modelo barato por baixo, permite cobrar mensalidade com margem melhor. Esse tipo de oferta aparece em nosso material sobre <a href="/artigos/como-ganhar-dinheiro-vendendo-automacoes-prontas-com-ia">como ganhar dinheiro vendendo automações prontas com IA</a>.</p>

    <h2>Desdobramentos práticos</h2>
    <p>O primeiro desdobramento é a concorrência de preços. Quando a OpenAI cortou preços pela metade ao lançar o GPT-6 Sol e o Luna, a briga já estava em andamento, como registramos em <a href="/noticias/openai-lanca-gpt-6-sol-luna-corta-precos-pela-metade">OpenAI lança GPT-6 Sol e Luna e corta preços pela metade</a>. Com o Jev, Amazon e OpenAI correndo atrás, a tendência é que classificar com IA fique ainda mais barato nos próximos meses.</p>
    <p>O segundo é a escolha de ferramenta. Quem constrói produto próprio deve testar, antes de fechar a arquitetura, quais etapas do fluxo realmente precisam de texto livre. Muitas vezes uma etapa pode ser trocada por um classificador, reduzindo conta e tempo de resposta. O terceiro é a dependência de fornecedor: um gateway que reúne vários modelos facilita trocar de um para outro quando aparece uma opção melhor, o que protege o negócio de ficar preso a uma só empresa.</p>
    <ul>
      <li>Liste as decisões repetitivas do seu negócio que têm poucas respostas possíveis.</li>
      <li>Meça quanto você gasta hoje com um modelo grande nessas tarefas.</li>
      <li>Teste um modelo mais enxuto ou aberto em uma amostra pequena antes de migrar.</li>
      <li>Mantenha o modelo mais capaz para o que exige escrita e raciocínio de verdade.</li>
    </ul>
    <p>Quem ainda está começando e quer ganhar tempo no dia a dia pode olhar o passo a passo de <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">automação com IA para economizar horas de trabalho</a> e identificar, no próprio fluxo, onde um classificador entraria.</p>

    <h2>O que ainda é incerto</h2>
    <p>Dois pontos pedem cautela. O primeiro é a duração do efeito: duas semanas é pouco tempo, e adoção inicial alta nem sempre vira uso contínuo, ainda mais com concorrentes chegando. O segundo é a qualidade fora do laboratório. Classificar bem exemplos de teste é diferente de acertar em dados reais, com gírias, erros de digitação e casos de borda, como os que aparecem no atendimento brasileiro. Antes de confiar em qualquer modelo para decidir por você, vale medir a taxa de erro nos seus próprios dados e manter uma revisão humana para os casos duvidosos.</p>
    <p>Ainda assim, o recado do relatório é claro: o mercado de IA está se dividindo em camadas. No topo, modelos caros e capazes para o trabalho difícil. Embaixo, uma fila crescente de modelos baratos, rápidos e muitas vezes abertos para o trabalho em volume. Quem entende essa divisão consegue entregar mais por menos, e isso vale tanto para quem tem uma loja quanto para quem presta serviço de IA para outras empresas.</p>
  `,
  faq: [
    {
      question: "O que é o Jev?",
      answer:
        "É um modelo de IA da TypeSafe AI que escolhe entre poucas saídas pré-definidas, devolvendo probabilidades em vez de texto livre. Por isso roda mais barato e rápido que modelos como o Sonnet, e é indicado para classificar grandes volumes de dados.",
    },
    {
      question: "Quanto o Jev foi adotado na Vercel?",
      answer:
        "Segundo dados da Vercel relatados pelo TechCrunch, 35% das equipes pagas usaram o modelo em duas semanas, quase o dobro do segundo colocado, o Sonnet 5.5. Os dados vêm do gateway de IA da Vercel e podem subestimar as APIs diretas de OpenAI e Anthropic.",
    },
    {
      question: "Isso vale para pequenos negócios brasileiros?",
      answer:
        "Vale como lição de custo: tarefas de classificação, como triar mensagens ou separar leads, podem usar modelos mais baratos em vez de um modelo grande de texto. O dado, porém, vem de equipes de software, não do mercado inteiro.",
    },
  ],
};
