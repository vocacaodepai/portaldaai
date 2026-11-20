import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "gartner-modelos-abertos-90-por-cento-etapas-agentes-custo",
  title: "Gartner: modelos abertos farão 90% do trabalho dos agentes de IA",
  summary:
    "Para a Gartner, modelos de pesos abertos já fazem 9 de cada 10 etapas de um agente de IA pelo preço de um quarto do modelo fechado mais barato com mesma nota.",
  author: "Bruno Danello",
  sourceName: "The Register, Gartner",
  sourceUrl:
    "https://www.theregister.com/ai-and-ml/2026/11/03/open-models-can-do-90-of-agentic-work-at-a-twentieth-of-the-cost-of-a-frontier-llm-gartner/5307132",
  date: "2026-11-03",
  publishedAt: "2026-11-03T15:26:00-03:00",
  imageQuery: "servidor data center rack",
  topic: "negocios",
  content: `
    <p>A consultoria Gartner publicou um relatório que mexe com uma das maiores dúvidas de quem paga a conta da inteligência artificial nas empresas: vale a pena mandar todas as tarefas de um agente de IA para o modelo mais caro e mais inteligente do mercado? Segundo os analistas, a resposta é não. Para a Gartner, nove em cada dez etapas de um fluxo de trabalho com agentes são rotineiras e podem ser feitas por modelos de pesos abertos, aqueles que a empresa pode baixar e rodar na própria infraestrutura, com o mesmo resultado e por uma fração do preço.</p>

    <p>O documento, intitulado "Open-Weight Models Will Run 90% of Enterprise Agentic Workflow Steps" (algo como "modelos de pesos abertos vão rodar 90% das etapas de fluxos agênticos corporativos"), foi assinado por Mark Petty, diretor sênior, e Raymond Paquet, vice-presidente de grupo da Gartner. O relatório é restrito a clientes da consultoria, e os números vieram a público nesta terça-feira (3) em reportagem do site britânico The Register.</p>

    <h2>O que a Gartner calculou</h2>
    <p>O raciocínio parte de uma observação simples sobre como um agente de IA trabalha na prática. Um fluxo operacional típico, como processar pedidos, conferir notas ou responder chamados, é formado por centenas de pequenos passos: classificar um documento, chamar uma ferramenta, passar dados de um sistema para outro, validar um campo, conciliar valores. Só de vez em quando aparece uma etapa que exige raciocínio de ponta. Pela conta dos analistas, há centenas de passos rotineiros para cada passo que realmente pede um modelo de fronteira.</p>

    <p>Nessas etapas rotineiras, a Gartner diz que os modelos abertos já empatam com os fechados. E a diferença de preço é grande:</p>
    <ul>
      <li><strong>Contra o modelo fechado mais barato</strong> que tem a mesma pontuação na tarefa, o modelo aberto custa cerca de um quarto;</li>
      <li><strong>Contra um modelo de fronteira usado em todas as etapas</strong>, o custo pode cair para algo como um vigésimo;</li>
      <li><strong>Na vida real</strong>, a economia por tarefa fica mais perto de cinco a seis vezes, porque os modelos abertos atuais costumam ser mais prolixos e precisam repetir tentativas com mais frequência.</li>
    </ul>

    <p>A consultoria também fez uma previsão de prazo: até 2030, 90% das etapas dos fluxos operacionais com agentes nas empresas devem rodar em modelos de pesos abertos. E a tendência, segundo os analistas, é a adoção de modelos abertos especializados por área, que fazem sentido quando um número pequeno de passos muito estáveis se repete milhões de vezes por mês.</p>

    <h2>O argumento principal não é o preço</h2>
    <p>O ponto que mais chama atenção no relatório é que a economia aparece como benefício secundário. Para Petty e Paquet, a vantagem mais importante é o controle dos dados. Quando cada etapa rotineira de um agente vai para a API de um modelo de fronteira, os dados do fluxo de trabalho, como informações de clientes, contratos e números internos, saem do perímetro da empresa a cada chamada. Com um modelo aberto rodando em casa ou em uma nuvem contratada pela própria empresa, esses dados ficam onde estão.</p>

    <p>Isso não significa que os modelos de fronteira vão perder espaço por completo. A leitura do The Register é que eles continuam importantes para pesquisa e desenvolvimento, um gasto mais parecido com investimento. Depois que o modelo grande ajuda a desenhar e resolver a parte difícil, o trabalho repetitivo do dia a dia passa a ser despesa operacional, e aí entra o modelo aberto, mais barato e mais controlável.</p>

    <h2>A peça que decide quem ganha: o orquestrador</h2>
    <p>A reportagem acrescenta uma análise que vale para qualquer empresa que usa agentes: se os modelos estão virando commodity, o valor passa para o que o mercado chama de "harness", o sistema que roda e gerencia os agentes. Um bom orquestrador escolhe sozinho o modelo mais adequado para cada tarefa, sem que o usuário perceba, economiza dinheiro, aplica regras de segurança e cuida de uma frota de agentes ao mesmo tempo. Os mais fracos deixam esse trabalho para o próprio usuário, que acaba decidindo na mão qual modelo usar em cada passo.</p>

    <p>A previsão conversa com outro estudo da mesma consultoria. Em outubro, a Gartner já tinha alertado que, mesmo com o preço por token caindo, <a href="/noticias/gartner-custo-agentes-ia-quintuplica-2028">o custo por fluxo com agentes de IA pode ficar mais de cinco vezes maior até 2028</a>, porque os agentes fazem muito mais chamadas do que um chatbot comum. Usar modelos mais baratos nas etapas simples é justamente uma das saídas para segurar essa conta. Do lado da oferta, as grandes empresas já se mexem: a Nvidia, por exemplo, lançou <a href="/noticias/nvidia-nemotron-3-5-super-vl-bolt-modelos-abertos-agentes">a família Nemotron 3.5 de modelos abertos pensados para agentes</a>, e a Meta abriu o <a href="/artigos/muse-spark-open-da-meta-modelo-aberto-licenca-e-como-testar">Muse Spark Open, seu modelo de pesos abertos</a>.</p>

    <h2>Os limites da previsão</h2>
    <p>Vale ler os números com cuidado. O relatório completo não é público, e o que se sabe dele vem da reportagem do The Register. A própria Gartner reconhece que a economia de um vigésimo é o cenário máximo e que, na prática, a vantagem é menor por causa das repetições e das respostas mais longas dos modelos abertos. Rodar um modelo em casa também tem custos que não aparecem na tabela de preço por token: servidor ou nuvem dedicada, pessoas para manter o sistema, testes para garantir que o modelo menor não erra mais nas tarefas críticas. Para uma empresa pequena, contratar um modelo aberto hospedado por um provedor costuma ser bem mais simples do que montar a estrutura sozinha.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa ou vende <strong>automação com agentes de IA</strong>, a mensagem da Gartner é prática: nem toda tarefa precisa do modelo mais caro. Antes de montar um fluxo, vale separar o que é rotina (classificar, extrair dados, preencher planilha, mover informação entre sistemas) do que exige raciocínio de verdade (decidir uma exceção, escrever uma resposta delicada a um cliente, analisar um contrato). O guia sobre <a href="/artigos/modelo-pequeno-ou-grande-de-ia-velocidade-custo-e-qualidade-para-quem-usa">modelo pequeno ou grande de IA</a> ajuda a fazer essa divisão, e o texto sobre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">a diferença entre agente, chatbot e automação</a> mostra quando um agente faz sentido.</p>

    <p>Se você presta <strong>serviço de automação para pequenas empresas</strong>, a economia de cinco a seis vezes por tarefa pode ser a diferença entre um projeto que se paga e um que fica caro demais para o cliente. Saber combinar um modelo barato nas etapas simples com um modelo de ponta só nas difíceis vira um diferencial de orçamento.</p>

    <p>E se o seu agente mexe com <strong>dados de clientes</strong>, o argumento central do relatório tem peso extra no Brasil. Cada chamada para uma API estrangeira é um envio de dados para fora, o que entra no radar da LGPD. Manter as etapas rotineiras em um modelo sob seu controle reduz esse risco. O <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio que usa IA</a> é um bom ponto de partida para revisar o que o seu fluxo envia, para quem e por quê.</p>
  `,
};
