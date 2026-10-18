import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "gartner-custo-agentes-ia-quintuplica-2028",
  title: "Gartner prevê custo de agentes de IA mais de cinco vezes maior até 2028",
  summary:
    "Mesmo com o token mais barato, a Gartner projeta que o custo por fluxo com agentes de IA suba mais de cinco vezes até 2028 e recomenda controle de gastos.",
  author: "Bruno Danello",
  sourceName: "VentureBeat",
  sourceUrl:
    "https://venturebeat.com/orchestration/gartner-says-agent-costs-will-rise-fivefold-by-2028-even-as-tokens-get-cheaper-here-is-how-to-keep-them-in-check",
  date: "2026-10-18",
  publishedAt: "2026-10-18T13:22:00-03:00",
  topic: "negocios",
  imageQuery: "servidor data center",
  content: `
    <p>A consultoria Gartner projeta que o custo de inferência por fluxo de trabalho com inteligência artificial agêntica vai crescer mais de cinco vezes até 2028, mesmo com o preço do token continuando a cair. A previsão aparece em reportagem publicada em 16 de outubro pelo <a href="https://venturebeat.com/orchestration/gartner-says-agent-costs-will-rise-fivefold-by-2028-even-as-tokens-get-cheaper-here-is-how-to-keep-them-in-check" target="_blank" rel="noopener noreferrer nofollow">VentureBeat</a>, assinada por Sean Michael Kerner, e vem do chamado Tokenomics Forecast da Gartner, um modelo econométrico que usa mais de 300 variáveis. Para quem usa agentes de IA para trabalhar ou toca um pequeno negócio, o recado é direto: a conta de IA pode subir justamente quando tudo parece ficar mais barato.</p>

    <h2>O que a Gartner está dizendo</h2>
    <p>O argumento central tem nome: o "paradoxo da inferência". O preço por token, a unidade básica de cobrança dos modelos de linguagem, segue em queda. Ainda assim, o gasto total tende a subir, porque as tarefas que as empresas passam a delegar às máquinas ficam muito mais pesadas. Segundo a reportagem, rotear uma tarefa para um modelo de raciocínio agêntico eleva o custo de inferência para o provedor em pelo menos cinco vezes em relação a uma interação simples de chatbot, e muitas vezes mais, conforme a complexidade cresce. Agentes chegam a consumir de 5 a 30 vezes mais tokens por tarefa do que um chatbot básico fazendo o mesmo trabalho.</p>
    <p>Will Sommer, diretor sênior de análise da Gartner, resumiu a ideia ao dizer que "os custos de token não estão caindo, estão se alargando". Ele afirmou que os grandes laboratórios, em vez de embolsar a economia de eficiência, estão investindo em modelos mais intensivos em computação, que custam mais por token. Como exemplo, citou o Fable da Anthropic, que sairia mais caro por token do que o Opus. Sommer também disse que a alta de gastos da primavera foi em parte impulsionada pela moda do "tokenmaxxing", a corrida para consumir o máximo possível de tokens, e que o mercado entrou agora numa fase de "aperto de cintos".</p>

    <h2>Por que a conta sobe mesmo com token barato</h2>
    <p>A Gartner aponta três motores para esse aumento. O primeiro é que os laboratórios gastam os ganhos de eficiência em modelos maiores e mais caros, em vez de repassar o ganho ao cliente. O segundo é que uma IA mais capaz torna viáveis cargas de trabalho complexas, que usam muito mais tokens do que tarefas simples. O terceiro é a pressão competitiva, que empurra as empresas para casos de uso mais avançados e mais caros, porque o concorrente também está fazendo isso.</p>
    <p>A consultoria avisa ainda que a alta não será uma linha reta. Os custos devem subir em ondas irregulares, acompanhando o lançamento de novos modelos, e a Gartner espera várias outras ondas à medida que agentes de raciocínio, modelos de mundo e outras tecnologias amadureçam. Essa dinâmica ajuda a explicar por que a disputa de preços entre os laboratórios, que o Portal da AI acompanhou quando a <a href="/noticias/anthropic-openai-guerra-precos-opus-5-5-gpt-6-sol-luna">Anthropic e a OpenAI travaram uma guerra de preços com Opus 5.5 e GPT-6 Sol e Luna</a>, não significa necessariamente uma fatura menor no fim do mês: um preço unitário menor convive com um volume de uso muito maior.</p>

    <h2>Quanta gente está sem freio de gastos</h2>
    <p>O texto traz também um dado de pesquisa do VB Pulse, feita em setembro com 109 respondentes qualificados. Entre as empresas que usam uma plataforma de orquestração de agentes, 21% não têm nenhum limite automático para o gasto de tokens dos agentes. Só 31% mandam as tarefas rotineiras e de alto volume para modelos mais baratos. Em outras palavras, uma parcela relevante do mercado ainda opera sem freio e sem roteamento, o que é um convite a surpresas na fatura quando os fluxos ganham escala. A amostra é pequena, então o número serve como indício e não como retrato definitivo do mercado.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Na prática</span>
      <p>Se você paga por uso de API ou por créditos de agente, defina um teto de gasto por fluxo antes de automatizar. Sem teto, um agente que tenta de novo, lê documentos longos ou chama outras ferramentas pode multiplicar o consumo sem aviso.</p>
    </div>

    <h2>As cinco recomendações da Gartner</h2>
    <p>Para conter a escalada, a Gartner recomenda cinco movimentos, segundo a reportagem do VentureBeat:</p>
    <p><strong>Investir em observabilidade.</strong> Sommer disse que as empresas "não conseguem otimizar o que não conseguem observar" e defendeu práticas de AI FinOps, ou seja, gestão financeira específica para o gasto com IA, com acompanhamento detalhado de quem gasta quanto e em quê.</p>
    <p><strong>Amarrar o gasto a resultados.</strong> Prever custos em cenários de incerteza e medir contra métricas como tarefas automatizadas ou casos resolvidos, melhorando ou aposentando os fluxos que não se pagam.</p>
    <p><strong>Institucionalizar o roteamento por camadas.</strong> Encaminhar automaticamente cada consulta ao modelo mais eficiente em custo e bloquear o uso padrão de modelos de fronteira em tarefas rotineiras.</p>
    <p><strong>Definir padrões mínimos de execução.</strong> Fixar de antemão limites de sucesso, custos de conformidade e custos de mitigação de risco, e testar as implantações contra oscilações de preço de token antes de aprová-las.</p>
    <p><strong>Usar dados próprios.</strong> Ajustar modelos com dados do domínio e criar ciclos de retroalimentação para sustentar diferenciação e margem. A Gartner afirma que modelos eficientes e específicos de um domínio costumam superar modelos genéricos de fronteira em confiabilidade.</p>

    <h2>O que isso muda para quem empreende no Brasil</h2>
    <p>A Gartner fala de grandes empresas, mas a lógica vale para o freelancer e para o pequeno negócio brasileiro, com um agravante: boa parte dos preços de IA é cotada em dólar, e o real oscila. Um fluxo que parece barato na planilha pode estourar o orçamento se o consumo de tokens crescer e o câmbio apertar ao mesmo tempo. Por isso, vale entender o básico de como a cobrança funciona, algo que explicamos em <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto em IA, o que são e por que importam</a>.</p>
    <p>Na prática, a recomendação de roteamento por camadas pode ser aplicada em escala pequena. Use o modelo mais potente apenas onde a qualidade faz diferença, como uma proposta comercial importante ou uma análise delicada, e deixe tarefas simples, como classificar e-mails ou reformatar texto, para modelos menores e baratos. Se você ainda está decidindo qual assistente usar para cada função, o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini, qual IA escolher</a> ajuda a pensar nessa divisão, e o guia sobre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">a diferença entre agente de IA, chatbot e automação</a> mostra quando um agente completo é de fato necessário. Muitas vezes uma automação simples, de custo previsível, resolve o mesmo problema.</p>
    <p>Quem quer levar um agente para dentro da empresa ou para o chefe também deve incluir o custo recorrente na conta. O modelo de <a href="/artigos/proposta-de-piloto-de-ia-para-o-chefe-modelo-de-uma-pagina">proposta de piloto de IA em uma página</a> pode ganhar uma linha própria com a estimativa de consumo e o teto mensal aceitável, e o texto sobre <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">como usar IA para reduzir custos operacionais em pequenos negócios</a> lembra que a economia só existe quando o custo da própria IA entra no cálculo.</p>

    <h2>Um alerta que combina com outras estratégias de custo</h2>
    <p>A previsão da Gartner dialoga com tentativas do mercado de baratear a execução de agentes por outros caminhos. O Portal da AI mostrou, por exemplo, a tese de que <a href="/noticias/amd-pc-ia-agentica-reduz-custo-token">PCs com IA embutida poderiam reduzir o custo de agentes</a> ao dividir o processamento entre nuvem e máquinas locais. São respostas diferentes para o mesmo problema: o consumo de computação dos agentes cresce mais rápido do que o preço unitário cai.</p>
    <p>Vale também a cautela de leitura. Previsões de consultorias são estimativas baseadas em modelos e premissas, não fatos consumados, e o próprio horizonte de 2028 deixa espaço para mudanças de preço, de arquitetura e de concorrência. O que a reportagem sustenta, com base nas falas da Gartner, é uma direção: sem medição e sem limites, o gasto com agentes tende a escapar do controle. Para quem está começando a automatizar, o melhor momento de montar esses freios é antes de o fluxo ficar grande demais para ser desligado sem dor.</p>
  `,
};
