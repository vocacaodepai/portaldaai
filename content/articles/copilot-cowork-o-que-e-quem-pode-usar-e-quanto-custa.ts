import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "copilot-cowork-o-que-e-quem-pode-usar-e-quanto-custa",
  title: "Copilot Cowork: o que é, quem pode usar e quanto custa",
  seoTitle: "Copilot Cowork: o que é, quem usa e quanto custa",
  excerpt:
    "Copilot Cowork é o agente da Microsoft para tarefas longas no Microsoft 365: veja o que faz, quem pode usar, como é a cobrança por crédito e os limites.",
  metaDescription:
    "Copilot Cowork explicado: o que o agente da Microsoft faz, requisitos do Microsoft 365 Copilot, cobrança por Copilot Credits, segurança e quando vale testar na empresa.",
  category: "ferramentas",
  date: "2026-10-20",
  readTime: 7,
  imageQuery: "office team laptops dashboard meeting",
  seed: 477,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Copilot Cowork é um agente do Microsoft 365 Copilot que executa tarefas longas e com várias ferramentas na nuvem e devolve um resultado pronto, em vez de só sugerir um rascunho.",
    "Exige licença do Microsoft 365 Copilot e ativação pelo administrador da empresa, e o uso do Cowork em si é cobrado por Copilot Credits, medido por tarefa.",
    "Para quem usa IA no Brasil por conta própria, ele não é uma opção de compra individual: vale entender como referência e como pauta para levar ao TI da empresa.",
  ],
  content: `
    <p>O Copilot Cowork é um sistema de agentes da Microsoft, dentro do Microsoft 365 Copilot, que executa tarefas longas e com várias ferramentas e devolve um resultado pronto. Segundo o <a href="https://www.microsoft.com/en-us/copilot/blog/2026/06/16/copilot-cowork-is-now-generally-available/" target="_blank" rel="noopener noreferrer">anúncio oficial de 16 de junho de 2026</a>, ele ficou disponível para clientes do Microsoft 365 Copilot no mundo todo depois de três meses de prévia no programa Frontier.</p>

    <p>Neste guia você vê o que ele faz, quem pode usar, como funciona a cobrança, o que está pronto e o que ainda está por vir. Todas as informações foram conferidas na página da Microsoft em 20/10/2026. Preços e disponibilidade no Brasil não foram confirmados, então trate o texto como mapa, não como proposta comercial.</p>

    <h2>O que é o Copilot Cowork</h2>

    <p>A diferença para um chat comum é o tipo de trabalho. Em vez de responder uma pergunta, o Cowork recebe um objetivo, planeja os passos, usa dados do trabalho e ferramentas conectadas e entrega o resultado. A Microsoft descreve tarefas complexas, longas e com várias etapas, executadas de ponta a ponta.</p>

    <p>Um exemplo imaginário: pedir "reúna as notas das reuniões deste mês com o cliente X, resuma as pendências e monte uma apresentação para a revisão de sexta". Um chat cuida de uma parte. Um agente tenta fazer o conjunto, e você revisa. A lógica é a mesma explicada no guia de <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot ou automação</a>.</p>

    <p>Segundo a Microsoft, as tarefas rodam na nuvem: os arquivos não ficam no computador, e o trabalho continua mesmo com o notebook desligado. Para ligar o recurso, o usuário alterna uma chave no aplicativo Microsoft 365 Copilot.</p>

    <h2>Quem pode usar e o que é preciso</h2>

    <p>O requisito principal é uma licença de usuário do Microsoft 365 Copilot. Além disso, o administrador precisa habilitar o Cowork na organização: pela página da Microsoft, ele vem desativado por padrão. Ou seja, funcionário individual não liga por conta própria.</p>

    <p>Os controles de segurança do Microsoft 365 se aplicam. A Microsoft afirma que prompts, respostas e arquivos gerados passam pelos controles existentes, que rótulos de sensibilidade são herdados e que há registro de auditoria, descoberta eletrônica e gestão de risco interno. A proteção contra perda de dados (DLP) aparece como "em breve" no anúncio.</p>

    <p>Para o leitor brasileiro, a consequência é prática: o Cowork é produto para empresa, com contrato e TI. Quem trabalha sozinho e quer um assistente pessoal deve olhar opções como o <a href="/artigos/microsoft-copilot-superapp-o-que-muda-e-como-usar-de-graca">Copilot na versão gratuita</a> ou outras comparadas no guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a>.</p>

    <h2>Quanto custa: licença mais crédito por uso</h2>

    <p>A cobrança tem duas partes. A licença do Microsoft 365 Copilot é um valor fixo por usuário por mês e inclui chat, Copilot nos aplicativos e agentes. O Cowork, em si, é cobrado por uso, em Copilot Credits. Cada tarefa tem um preço baseado em quatro fatores: uso de modelo, busca de contexto, chamadas de ferramentas e tempo de execução.</p>

    <p>Segundo a Microsoft, no modelo pague conforme o uso (PayGo) cada Copilot Credit custa US$ 0,01 (verificado em 20/10/2026). Há também o P3, em que a empresa se compromete antecipadamente com um volume em troca de desconto, sem valor informado na página. A cobrança começou em 16 de junho de 2026, com um período de carência até 1º de julho para quem testou na prévia.</p>

    <table>
      <thead>
        <tr><th>Item</th><th>Como funciona</th><th>O que verificar</th></tr>
      </thead>
      <tbody>
        <tr><td>Licença Microsoft 365 Copilot</td><td>Valor fixo por usuário por mês</td><td>Preço em reais no contrato da empresa</td></tr>
        <tr><td>Copilot Cowork</td><td>Créditos por tarefa (PayGo: US$ 0,01 por crédito)</td><td>Estimativa de consumo por tipo de tarefa</td></tr>
        <tr><td>Plano P3</td><td>Compromisso de volume com desconto</td><td>Percentual de desconto e prazo</td></tr>
        <tr><td>Limites de gasto</td><td>Por organização, grupo e usuário</td><td>Quem define e quem recebe alertas</td></tr>
      </tbody>
    </table>

    <p>A Microsoft afirma que, em testes internos de 125 execuções com 12 prompts, o Cowork saiu em média de 30% a 40% mais barato por prompt que o Claude Cowork com o conector do Microsoft 365. É um dado da própria empresa, com a ressalva de que resultados variam, então use como indicação, não como garantia.</p>

    <h2>Quais modelos e recursos estão disponíveis</h2>

    <p>No lançamento, o Cowork roda em modelos da Anthropic, incluindo o Opus 4.8 e o Sonnet 4.6. O GPT 5.5 aparece na prévia Frontier, e a Microsoft promete um modelo próprio de custo menor, chamado Cowork 1, "nas próximas semanas". Para quem acompanha o mercado, vale ler a notícia sobre o <a href="/noticias/anthropic-cowork-nuvem-pro-max-outubro">Claude Cowork na nuvem</a>, que mostra a versão concorrente.</p>

    <p>Entre os recursos citados no anúncio estão plugins de parceiros (nove disponíveis no lançamento, como monday.com, Miro e Morningstar, e oito previstos, entre eles Adobe, Atlassian, Canva e Databricks) e o uso de navegador, que na data do anúncio ficava restrito ao Frontier. Outra página da Microsoft, sobre <a href="https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/build-apps-in-copilot-cowork-and-copilot-studio/" target="_blank" rel="noopener noreferrer">criar aplicativos no Cowork e no Copilot Studio</a>, descreve a habilidade /app para gerar aplicativos por conversa, também no Frontier.</p>

    <p>A conexão entre agentes e sistemas depende de padrões como o MCP, explicado em <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">MCP: o que é e como conecta agentes de IA</a>.</p>

    <h2>Para quem faz sentido na prática</h2>

    <p>O Cowork faz mais sentido em empresas que já usam Microsoft 365 e têm trabalho repetitivo de várias etapas, como consolidar relatórios, preparar reuniões ou cruzar dados de planilhas e e-mails. Quem já automatiza partes disso com <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA em planilhas</a>, <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">atas de reunião</a> e <a href="/artigos/ia-para-email-organizar-caixa-de-entrada-responder-mais-rapido">e-mail</a> entende o ganho.</p>

    <p>Para pequenas empresas sem licença corporativa, o custo de licença mais créditos pode não compensar. O melhor primeiro passo é um piloto pequeno, com tarefas medidas. O guia de <a href="/artigos/proposta-de-piloto-de-ia-para-o-chefe-modelo-de-uma-pagina">proposta de piloto de IA para o chefe</a> traz um modelo de uma página para levar ao gestor.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Antes de pedir ao TI, liste três tarefas que você faz toda semana, o tempo gasto em cada uma e quem precisa aprovar o resultado. Isso vira a base para estimar créditos.</p></div>

    <h2>Riscos e cuidados antes de liberar</h2>

    <p>Agente que age em nome do usuário amplia o impacto de um erro. Ele pode ler arquivos demais, copiar dado errado ou seguir uma instrução escondida em um documento. O risco de instruções maliciosas está explicado em <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection</a>, e o checklist de <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">escolha de ferramenta de IA com segurança</a> ajuda a definir critérios.</p>

    <ul class="checklist">
      <li>Definir quem pode usar e para quais tarefas.</li>
      <li>Configurar limites de gasto por grupo e por usuário, que a Microsoft diz oferecer.</li>
      <li>Revisar sempre o resultado antes de enviar a cliente ou diretoria.</li>
      <li>Evitar dados sensíveis em tarefas de teste, até as regras de DLP estarem claras.</li>
      <li>Registrar o tempo economizado, para comparar com o custo.</li>
    </ul>

    <p>Para funcionários, também vale reler o que pode e o que não pode ser colado em IA no trabalho, assunto de <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">dados da empresa no ChatGPT</a>. E quem acompanha a política de preços da Microsoft deve ler a notícia sobre a <a href="/noticias/microsoft-copilot-cobranca-uso-brasil-fora">cobrança por uso do Copilot</a>.</p>

    <h2>Limites e o que ainda não está pronto</h2>

    <p>Pelo anúncio, ainda faltavam o modelo Cowork 1, a proteção DLP, oito plugins e o uso de navegador fora do Frontier. O desconto do P3 não foi detalhado, e o número de 30% a 40% de economia vem de teste interno. Também não há na página informação sobre preço em reais ou disponibilidade específica no Brasil.</p>

    <p>A Microsoft reorganizou os produtos de Copilot recentemente. Se você quer entender o pano de fundo, leia a notícia sobre o <a href="/noticias/microsoft-relanca-copilot-super-app-agentes-autopilot">relançamento do Copilot como super app</a>. Para decidir hoje, monte um quadro simples com tarefa, tempo gasto e custo estimado, e volte a ele quando o preço local e os plugins estiverem confirmados.</p>
  `,
  faq: [
    {
      question: "O que é o Copilot Cowork?",
      answer:
        "É um sistema de agentes do Microsoft 365 Copilot para tarefas longas, com várias etapas e ferramentas, executadas na nuvem. Você descreve o objetivo, ele planeja, usa dados do trabalho e devolve um resultado pronto para revisão. Foi anunciado como disponível em 16 de junho de 2026.",
    },
    {
      question: "Quanto custa o Copilot Cowork?",
      answer:
        "Exige licença do Microsoft 365 Copilot, cobrada por usuário, e o Cowork é cobrado por uso em Copilot Credits. A Microsoft informa US$ 0,01 por crédito no modelo PayGo (verificado em 20/10/2026). O preço em reais e o consumo por tarefa dependem do contrato da empresa.",
    },
    {
      question: "Posso usar o Copilot Cowork sem ser empresa?",
      answer:
        "Pelo anúncio, o requisito é uma licença do Microsoft 365 Copilot e a ativação pelo administrador da organização, que vem desligada por padrão. Por isso ele é voltado a empresas. Para uso pessoal, existem outros assistentes, inclusive versões gratuitas.",
    },
    {
      question: "O Copilot Cowork usa modelos da Anthropic?",
      answer:
        "Segundo a Microsoft, no lançamento ele roda em modelos da Anthropic, como o Opus 4.8 e o Sonnet 4.6, com o GPT 5.5 disponível na prévia Frontier. A empresa também anunciou um modelo próprio, o Cowork 1, ainda sem data fechada na página.",
    },
    {
      question: "O Copilot Cowork é seguro para dados da empresa?",
      answer:
        "A Microsoft diz que ele opera dentro do limite de confiança do Microsoft 365, herda rótulos de sensibilidade e oferece auditoria e eDiscovery. A proteção contra perda de dados aparece como em breve. Mesmo assim, defina regras de uso e revise os resultados.",
    },
  ],
};
