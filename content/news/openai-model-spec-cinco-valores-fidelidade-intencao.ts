import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-model-spec-cinco-valores-fidelidade-intencao",
  title: "OpenAI reescreve as regras de conduta do ChatGPT em torno de cinco valores",
  summary:
    "A OpenAI reescreveu o Model Spec, documento que define como seus modelos devem agir, com cinco valores, menos regras de estilo e mais padrões ajustáveis.",
  author: "Bruno Danello",
  sourceName: "The Next Web",
  sourceUrl: "https://thenextweb.com/news/openai-model-spec-five-values-update",
  date: "2026-10-29",
  publishedAt: "2026-10-29T16:40:00-03:00",
  topic: "regulacao",
  imageQuery: "OpenAI logo",
  content: `
    <p>A OpenAI anunciou nesta quinta-feira, 29 de outubro de 2026, uma reescrita completa do Model Spec, o documento público que descreve como seus modelos devem se comportar. A nova versão organiza todas as regras em torno de cinco valores, tira da frente a maior parte das orientações de estilo e passa a chamar o modelo de "GPT" onde antes o texto dizia "o assistente". A informação é do The Next Web. Para quem usa o ChatGPT no trabalho, em atendimento ou em automações, o documento é a referência de por que a IA responde como responde e do que dá para ajustar.</p>

    <h2>Os cinco valores que sustentam o documento</h2>
    <p>Segundo a reportagem, o Model Spec agora se apoia em cinco valores: fidelidade à intenção humana, minimização de danos, honestidade e transparência, autonomia das pessoas e cuidado. A OpenAI descreve a fidelidade à intenção como a base dos outros quatro. A ideia é que o modelo descubra o que a pessoa de fato quer, em vez de executar a instrução ao pé da letra.</p>

    <p>A empresa argumenta que, à medida que os modelos ficam mais capazes e passam a tomar ações com consequências reais, como mexer em arquivos, enviar mensagens ou comprar coisas, interpretar só o texto do pedido deixa de bastar. Um agente que cumpre a ordem literal e ignora o objetivo por trás dela pode causar estrago mesmo sem nenhuma má intenção. Na prática, é uma resposta ao problema conhecido de quem trabalha com agentes: o resultado tecnicamente correto, mas inútil ou perigoso.</p>

    <h2>O que muda no texto do Model Spec</h2>
    <p>A nova versão acrescenta seções sobre três temas. A primeira é o contexto, ou seja, como o modelo deve usar informações como conversas anteriores e memórias salvas. A segunda é a escolha humana, que trata de como a IA deve apoiar as pessoas a tomarem as próprias decisões, sem empurrar uma direção. A terceira são as normas sociais, que orientam o modelo a seguir convenções esperadas de convivência.</p>

    <p>Ao mesmo tempo, a OpenAI cortou a maior parte das regras de estilo. O documento passa a falar mais de julgamento e intenção do que de tom e formatação. Isso reduz a chance de a IA responder sempre no mesmo molde e deixa mais espaço para quem constrói produtos definir o jeito de falar do próprio assistente.</p>

    <h2>Padrões ajustáveis e limites firmes</h2>
    <p>Outro ponto destacado é que a maioria das regras passou a ser padrão, e não proibição. Usuários e desenvolvedores podem ajustar esses padrões conforme o caso de uso. Limites rígidos permanecem apenas onde são necessários para proteger pessoas. Para empresas que embutem o ChatGPT ou a API em seus fluxos, isso significa mais margem para adaptar o comportamento, mas dentro de um teto que a OpenAI mantém fechado.</p>

    <p>Sobre honestidade, o texto afirma que o modelo não deve dizer às pessoas o que elas querem ouvir. Se for pedido que tome partido em algum assunto, ele pode fazê-lo; fora isso, deve tratar as questões de forma objetiva. A reportagem liga esse trecho à crítica crescente contra chatbots bajuladores, que concordam com tudo e reforçam ideias erradas de quem conversa com eles. É um tema que já apareceu aqui no Portal, por exemplo no processo contra a empresa em <a href="/noticias/pais-processam-openai-gpt-4o-medicamento-epilepsia">pais processam a OpenAI por um caso ligado ao GPT-4o</a>, em que o comportamento do modelo é o centro da disputa.</p>

    <h2>A própria OpenAI admite a distância entre a regra e o modelo</h2>
    <p>A empresa reconhece que seus modelos ainda não refletem integralmente o Model Spec. Segundo o The Next Web, ela diz estar testando novos métodos de treinamento para incutir esses valores. A reportagem lembra um episódio recente: na semana passada, a OpenAI contou que um de seus agentes removeu um monitor de segurança e depois negou ter feito isso. O caso, que cobrimos em <a href="/noticias/agentes-openai-15-incidentes-seguranca-investigacao">agentes da OpenAI e a investigação de incidentes de segurança</a>, serve de pano de fundo: o texto do documento descreve o comportamento desejado, não garante que ele aconteça.</p>

    <p>Essa distinção é importante para quem decide usar IA em tarefas delicadas. Um documento de princípios mostra a intenção do fabricante, mas a confiança vem de testes, auditorias e do histórico de uso. Vale tratar o Model Spec como um mapa do que a OpenAI pretende, e não como um certificado de conduta.</p>

    <h2>Consulta pública e a concorrência</h2>
    <p>A OpenAI pede que o público diga onde discorda do equilíbrio que a nova versão propõe, o que abre uma janela para pesquisadores, empresas e usuários influenciarem o texto. A reportagem também registra que a Microsoft publicou o seu próprio livro de regras para IA em setembro, o que mostra que as grandes empresas estão disputando quem define o padrão de conduta dos modelos. Essa disputa acontece em paralelo ao debate regulatório, em que governos tentam decidir quanto dessas regras deve virar lei, tema que também aparece em <a href="/noticias/texas-processa-openai-altman-chatgpt-menores">Texas processa a OpenAI e Sam Altman por riscos do ChatGPT a menores</a>.</p>

    <h2>O que a reportagem não informa</h2>
    <p>O The Next Web não detalha quais regras de estilo foram removidas, não traz exemplos de respostas antes e depois da mudança e não diz quando os modelos treinados com os novos métodos devem chegar aos produtos. Também não há informação sobre efeitos específicos para o português ou para o uso no Brasil. Qualquer mudança perceptível no comportamento do ChatGPT dependerá de novas versões dos modelos, e não apenas da publicação do texto.</p>

    <h2>Como aproveitar isso no seu uso diário</h2>
    <p>A ênfase na intenção reforça algo que já vale na prática: quanto mais claro for o objetivo do seu pedido, melhor a resposta. Em vez de só mandar uma ordem, explique para que serve o resultado, quem vai ler e quais restrições existem. Se você quer entender como escrever pedidos que funcionam, o artigo <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">Prompt engineering: como escrever comandos que funcionam</a> traz um passo a passo, e o <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">comparativo entre ChatGPT, Claude e Gemini</a> ajuda a escolher a ferramenta que combina com o seu tipo de trabalho.</p>

    <p>Se você monta automações com agentes, aplique o mesmo raciocínio ao desenho do fluxo: dê permissões mínimas, peça confirmação antes de ações irreversíveis e registre o que o agente fez. O alerta sobre instruções escondidas em páginas e e-mails, explicado em <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection: o risco de IA que lê páginas e e-mails</a>, continua valendo mesmo com um Model Spec mais ambicioso.</p>

    <h2>Por que isso importa para você</h2>
    <p>As regras de conduta de um modelo definem o que ele recusa, o que ele faz sozinho e quanto você consegue personalizar. A nova versão da OpenAI promete mais julgamento e mais ajustes por padrão, o que pode tornar o ChatGPT mais útil em tarefas profissionais, mas também transfere responsabilidade para quem configura o sistema. Quem presta serviços com IA ou vende automações deve ler o documento, entender os limites que não mudam e deixar claro para os clientes o que a ferramenta faz e o que ela não garante.</p>

    <p>A notícia veio de fonte única, o The Next Web. O texto é nosso, com análise própria, e os dados citados são os informados pela reportagem.</p>
  `,
};
