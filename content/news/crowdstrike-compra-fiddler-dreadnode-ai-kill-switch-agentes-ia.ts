import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "crowdstrike-compra-fiddler-dreadnode-ai-kill-switch-agentes-ia",
  title: "CrowdStrike compra Fiddler e Dreadnode para vigiar agentes de IA",
  summary:
    "A CrowdStrike vai comprar duas startups de segurança de IA e lançou um botão que desliga na hora agentes que saem do controle. Valores não foram divulgados.",
  author: "Bruno Danello",
  sourceName: "CrowdStrike, The Next Web",
  sourceUrl: "https://www.crowdstrike.com/en-us/press-releases/crowdstrike-to-acquire-fiddler-to-deliver-agent-observability/",
  date: "2026-11-03",
  publishedAt: "2026-11-03T10:26:00-03:00",
  imageQuery: "CrowdStrike logo",
  topic: "seguranca",
  content: `
    <p>A CrowdStrike, uma das maiores empresas de cibersegurança do mundo, anunciou nesta terça-feira (3) a compra de duas startups especializadas em segurança de inteligência artificial: a Fiddler AI e a Dreadnode. No mesmo dia, a empresa colocou no ar um recurso chamado AI Kill Switch, uma espécie de botão de emergência que permite à equipe de segurança parar um agente de IA que começou a agir fora do combinado. Os anúncios foram feitos na conferência Fal.Con Europe, em Barcelona, e constam em comunicados oficiais da própria CrowdStrike, repercutidos pelo site The Next Web.</p>

    <p>Os valores das duas aquisições não foram divulgados. Segundo a empresa, o pagamento será feito majoritariamente em dinheiro, com uma parte em ações sujeitas a regras de permanência (o chamado vesting). As duas compras devem ser concluídas no quarto trimestre do ano fiscal de 2027 da CrowdStrike, ainda dependendo das condições habituais de fechamento.</p>

    <h2>O que a Fiddler faz: um "gravador de voo" para agentes</h2>
    <p>A Fiddler trabalha com o que o mercado chama de observabilidade de agentes de IA. Em termos simples, ela registra o que cada agente fez, quais ferramentas chamou, que caminho de raciocínio seguiu e se ficou dentro da tarefa para a qual foi configurado. O produto também detecta mudanças de comportamento ao longo do tempo, alucinações e ações não previstas quando o agente já está rodando em produção.</p>

    <p>Na lista de recursos divulgada pela CrowdStrike aparecem ainda a avaliação dos agentes antes de colocá-los no ar (precisão, conclusão de tarefas e respeito às regras internas), o controle de uso de tokens e de gasto, e a integração com ferramentas de desenvolvimento de agentes como LangGraph, Amazon Bedrock, AWS Strands e o ADK do Google. A empresa afirma que os modelos próprios da Fiddler conseguem reduzir em até 98% o custo de avaliação, porque dispensam chamadas a modelos de linguagem externos. Esse número é da própria companhia e não foi verificado de forma independente.</p>

    <p>George Kurtz, fundador e presidente executivo da CrowdStrike, resumiu a compra com uma imagem: a Fiddler seria o "gravador de voo" de cada agente. O argumento dele é que dizer "foi o modelo que fez" não é resposta aceitável quando um regulador ou o conselho da empresa pergunta o que um agente fez. Krishna Gade, cofundador e presidente da Fiddler, colocou a questão do ponto de vista do cliente: dá para confiar no que os meus agentes estão fazendo? A tecnologia será vendida dentro da plataforma Falcon com o nome Falcon Observe, com lançamento geral previsto para o mesmo trimestre do fechamento.</p>

    <h2>Dreadnode: ataque simulado antes de o agente ir ao ar</h2>
    <p>A segunda compra mira outra etapa do problema. A Dreadnode faz testes ofensivos em modelos, aplicativos e agentes de IA antes que eles cheguem ao usuário final. Segundo o The Next Web, a ferramenta roda mais de 100 estratégias de ataque conhecidas, entre elas jailbreaks (tentativas de fazer o modelo ignorar suas regras) e injeção de prompt (instruções maliciosas escondidas em textos, páginas ou arquivos que o agente lê). Os alvos incluem o próprio modelo, o ciclo de raciocínio do agente, os aplicativos e os servidores MCP, o protocolo que conecta agentes a ferramentas e dados externos.</p>

    <p>Os resultados são organizados de acordo com referências conhecidas do setor, como a lista OWASP Top 10 para modelos de linguagem, o MITRE ATLAS e o framework de gestão de riscos de IA do NIST, o instituto de padrões dos Estados Unidos. A equipe da Dreadnode, liderada pelo presidente executivo Brad Palm, vai integrar o laboratório interno da CrowdStrike dedicado a IA aplicada à segurança. A ideia defendida por Palm é que a IA falha de jeitos que os testes tradicionais de software não foram feitos para pegar, e que quem encontra essas falhas melhor é quem pensa como atacante.</p>

    <h2>O botão de desligar agentes</h2>
    <p>Diferente das aquisições, o AI Kill Switch já está disponível, segundo o comunicado. Ele faz parte do Falcon Guardian, o produto da CrowdStrike voltado a proteger agentes de IA dentro das empresas. Quando um administrador autorizado aciona o recurso, três coisas acontecem: o agente é interrompido no ponto em que está rodando, fica impedido de ser reiniciado na máquina ou no grupo de máquinas afetado e perde o acesso à rede corporativa. Cada ação fica registrada em trilha de auditoria.</p>

    <p>Há uma ressalva importante no texto da própria empresa: a interrupção começa pelo gateway (o ponto de passagem do tráfego) e chega "em breve" ao computador onde o agente roda. Ou seja, a cobertura completa ainda não está pronta. O comunicado não traz preço nem lista de quais agentes ou fabricantes são compatíveis.</p>

    <p>A CrowdStrike também anunciou que vai levar o Falcon Guardian para dentro do Claude Cowork, o ambiente de agentes da Anthropic. O sensor da empresa passa a rodar na máquina virtual em que os agentes do Cowork executam código. A integração está em beta no macOS, com suporte ao Windows previsto para o fim de novembro, segundo um post no blog da CrowdStrike. O Portal da AI já contou aqui como o <a href="/noticias/anthropic-cowork-nuvem-pro-max-outubro">Claude Cowork passou a rodar na nuvem para planos Pro e Max</a>.</p>

    <h2>Por que a segurança de agentes virou mercado</h2>
    <p>O movimento da CrowdStrike acompanha uma sequência de casos que mostraram o tamanho do risco. Em outubro, a Symantec flagrou um <a href="/noticias/agente-atacante-modo-skynet-sequestra-modelos-expostos-symantec">agente de IA que sequestrava modelos expostos para atacar</a>, e a própria OpenAI relatou que seus <a href="/noticias/agentes-openai-15-incidentes-seguranca-investigacao">agentes já somavam mais de 15 incidentes de segurança</a>. Outras empresas do setor também correram para criar ferramentas específicas, como a <a href="/noticias/1password-for-agents-senhas-agentes-ia">1Password, com uma plataforma para agentes entrarem em contas sem senha</a>.</p>

    <p>O ponto em comum é que agentes não se comportam como programas comuns. Eles tomam decisões, chamam ferramentas por conta própria e podem ser enganados por um texto malicioso escondido num e-mail ou numa página. Isso cria duas necessidades que as compras da CrowdStrike tentam cobrir: testar o agente antes (Dreadnode) e registrar e explicar o que ele fez depois (Fiddler), com o botão de emergência no meio do caminho.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa ou pretende usar agentes de IA no trabalho, seja numa empresa grande ou num negócio pequeno, a mensagem é clara: grandes fornecedores de segurança já tratam o agente como algo que precisa de vigilância própria, e não só como mais um aplicativo. Para empresas brasileiras que atendem clientes com regras rígidas de proteção de dados, como a LGPD, saber exatamente o que um agente acessou e fez tende a virar exigência em contratos e auditorias.</p>

    <p>Mesmo sem comprar uma plataforma como a da CrowdStrike, dá para aplicar a lógica: dê ao agente só os acessos de que ele precisa, mantenha registro do que ele faz, teste com textos maliciosos antes de liberar e tenha um jeito rápido de desligá-lo. Se você quer entender melhor a peça que liga agentes a ferramentas externas, vale ler nosso guia sobre <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">o que é o MCP e para que serve</a>. E para quem pensa em carreira, a área está aquecida: veja a nossa trilha de <a href="/artigos/carreira-em-ciberseguranca-com-ia-vagas-trilha-e-habilidades">carreira em cibersegurança com IA</a>.</p>

    <p>Vale lembrar que as aquisições ainda precisam ser concluídas e que os números de desempenho citados vêm das próprias empresas. O Portal da AI vai acompanhar quando o Falcon Observe e a ferramenta de testes da Dreadnode chegarem ao mercado.</p>
  `,
};
