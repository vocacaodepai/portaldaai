import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "wiz-black-october-northflank-llmjacking-plataformas-ia",
  title: "Wiz lista 9 plataformas de IA invadidas em outubro; Northflank é a última",
  summary:
    "Relatório da Wiz soma nove incidentes em plataformas para devs de IA e a Northflank confirma uso indevido de chaves de clientes; abuso passou de US$ 100 mil.",
  author: "Bruno Danello",
  sourceName: "Wiz, Northflank, BleepingComputer",
  sourceUrl:
    "https://www.wiz.io/blog/black-october-for-ai-developer-platforms",
  date: "2026-10-31",
  publishedAt: "2026-10-31T20:24:00-03:00",
  topic: "seguranca",
  imageQuery: "servidor data center chaves de API",
  content: `
    <p>A empresa de segurança Wiz publicou em 30 de outubro um relatório chamado &quot;Black October&quot; (Outubro Negro) para plataformas de desenvolvimento de IA. A conta é direta: pelo menos nove plataformas onde equipes publicam apps, agentes e modelos foram invadidas ao longo do mês, quase sempre com o mesmo alvo, as variáveis de ambiente onde ficam guardadas as chaves de API de provedores de IA. No mesmo dia, a Northflank, a nona da lista, avisou clientes que o ambiente deles deve ser tratado como comprometido e confirmou que chaves de IA já estão sendo usadas por terceiros.</p>

    <p>Para quem usa IA para trabalhar ou vender serviços, o recado é prático: a chave que você cola num painel de hospedagem vale dinheiro, e há um mercado paralelo pronto para revendê-la. O texto abaixo organiza o que a Wiz, a Northflank e o <a href="https://www.bleepingcomputer.com/news/security/northflank-security-breach-leads-to-abuse-of-customers-ai-api-keys/" rel="noopener noreferrer nofollow" target="_blank">BleepingComputer</a> disseram até agora.</p>

    <h2>A lista de nove incidentes em outubro</h2>
    <p>Segundo a Wiz, os incidentes divulgados publicamente em outubro foram os da Fireworks AI (6 de outubro), Andromeda (9), Zeabur (14), Lightning AI (15), OpenCode (16 e 17), Railway (20), Warp (23), CommandCode (28) e Northflank (30). A própria Wiz avisa que não confirmou que os mesmos atacantes estejam por trás de todos os casos e que não existe uma única falha ou dependência comum entre eles.</p>
    <p>As causas relatadas variam. Em Fireworks, Zeabur e Lightning AI, a origem foi acesso a credenciais. A Railway disse acreditar em escalada de privilégios na infraestrutura de builds, a Warp apontou uma dependência de fornecedor externo e a OpenCode citou um sistema antigo. O que une os casos, de acordo com os relatos públicos, é o comportamento: os invasores procuram variáveis de ambiente, sobretudo as que dão acesso a serviços de IA. Fireworks, OpenCode e Warp ainda mencionaram sinais de um enxame de agentes de IA no ataque, e OpenCode e CommandCode ligaram os episódios a tentativas de destilação, isto é, usar o acesso roubado para copiar o comportamento de modelos pagos. A Wiz também registra que a Zeabur anunciou que vai encerrar as atividades por causa do incidente.</p>
    <p>Alguns desses casos já passaram pelo Portal da AI. Os detalhes da invasão à Railway estão em <a href="/noticias/railway-invasao-chaves-api-ia-100-mil-workspaces">Hacker invade a Railway atrás de chaves de IA</a>, e o caso das chaves expostas na OpenCode aparece em <a href="/noticias/opencode-vazamento-chaves-api-openai-anthropic-usuarios">vazamento de chaves de API de OpenAI e Anthropic</a>. A novidade agora é ver tudo somado numa linha do tempo só.</p>

    <h2>O que a Northflank confirmou</h2>
    <p>A Northflank é uma plataforma de nuvem para publicar aplicações, bancos de dados, contêineres e cargas de trabalho de IA. De acordo com a página de status da empresa, tudo começou às 11h43 UTC de 30 de outubro, quando a Wiz enviou um alerta de ameaça. Um minuto depois, engenheiros já analisavam o aviso, e uma primeira correção de política de rede foi aplicada, seguida de novas correções ao longo da manhã. A empresa também acionou a equipe de resposta a incidentes da Wiz.</p>
    <p>Às 13h58 UTC, o tom do aviso mudou. A Northflank passou a pedir: &quot;Assuma que todas as variáveis de ambiente foram descriptografadas. Desative e troque todas as chaves.&quot; Pouco depois, informou que vários usuários confirmavam o uso de suas chaves de IA por terceiros e, no fim do dia, escreveu que usuários relataram uso não autorizado de chaves de API de IA fornecidas à plataforma. A empresa ainda não disse como os invasores entraram nem quantos clientes foram afetados, e o BleepingComputer informou que não obteve resposta às perguntas enviadas.</p>
    <p>Desde então, a Northflank liberou a rotação automática de senhas para PostgreSQL, MongoDB, MySQL, Redis e Minio, ativou os registros de auditoria para todos os clientes, inclusive os do plano gratuito, e pediu que quem ainda não trocou seus segredos faça isso imediatamente.</p>

    <h2>Como uma chave roubada vira prejuízo em minutos</h2>
    <p>A parte mais útil do relatório da Wiz é o que ela viu depois do roubo. A empresa investigou dois casos de credenciais corporativas ligadas a esses vazamentos e descreve um padrão parecido: a primeira atividade não autorizada apareceu em até 30 minutos depois do acesso às credenciais, num teste rápido que varria chaves de várias organizações para ver quais ainda funcionavam. Nos dias seguintes, pequenas rotinas voltaram a validar as chaves, até a enxurrada começar.</p>
    <p>No primeiro caso, o abuso chegou a cerca de 800 mil chamadas ao serviço Bedrock, da Amazon, em 30 horas, e a maioria foi bem-sucedida. A política da chave permitia perfis de inferência entre regiões, e o invasor usou isso em todas as chamadas, o que quase eliminou os bloqueios por limite. No segundo caso, a chave era restrita a regiões dos EUA, mas apareceu num aparente grupo de revenda e acabou sendo usada para cerca de 1,7 milhão de chamadas em 13 horas. Pelo preço de tabela, a Wiz estima que os dois casos juntos passaram de US$ 100 mil em consumo de IA, pagos por quem teve a chave roubada.</p>
    <p>O perfil do tráfego lembra revenda de agentes de código, com uso intenso de cache de prompt e respostas curtas. A Wiz identificou ainda dois sites que anunciam acesso com desconto a modelos de ponta (um deles aceita pagamento em criptomoeda), ligados a verificações das chaves roubadas, embora ressalve que não consegue vincular esses operadores de forma definitiva à enxurrada de chamadas. A mensagem de fundo é que existe uma cadeia organizada de roubo, teste e revenda de acesso a IA.</p>

    <h2>O que fazer hoje</h2>
    <p>As recomendações da Northflank servem para qualquer plataforma. Primeiro, troque todas as chaves e segredos guardados em variáveis de ambiente, e depois revogue as antigas junto ao provedor que as emitiu. Segundo, confira o painel de uso e a cobrança de cada provedor de IA em busca de consumo que você não reconhece. Terceiro, desative o acesso público a bancos de dados e complementos quando ele não for necessário. Se achar atividade estranha, avise tanto a plataforma quanto o provedor da chave.</p>
    <p>Dois cuidados extras reduzem o estrago caso o pior aconteça: definir um limite de gasto mensal em cada provedor de IA e criar uma chave separada por projeto, com permissões restritas, em vez de usar uma chave mestra para tudo. O caso <a href="/noticias/litellm-ataque-comecou-chave-mestra-exposta-posmortem">LiteLLM, em que o ataque começou numa chave mestra exposta</a>, mostra o custo de concentrar acesso num ponto só.</p>

    <h2>Por que isso importa para você</h2>
    <p>Quem vende automações, agentes ou sites com IA para clientes costuma hospedar tudo numa plataforma de nuvem barata e colar ali as chaves de OpenAI, Anthropic ou Google. Se essa plataforma for invadida, a conta de IA que paga a fatura é a sua, e o prejuízo chega como cobrança no cartão, às vezes antes de qualquer aviso. Para um freelancer ou uma pequena agência no Brasil, uma fatura de milhares de dólares em tokens pode apagar meses de lucro.</p>
    <p>Por isso, trate a segurança das chaves como parte do custo do serviço. Use limites de gasto, separe chaves por cliente e troque-as com regularidade. Se você oferece esse tipo de serviço, vale conhecer as ideias do guia <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher uma ferramenta de IA com segurança</a> e combinar com os clientes quem guarda o quê. E atenção a outro vetor da mesma onda: o aviso sobre a <a href="/noticias/extensao-falsa-claude-code-marketplace-cursor-5-mil-usuarios">extensão falsa do Claude Code no marketplace do Cursor</a> mostra que o roubo de credenciais também chega pelo editor de código.</p>
    <p>Vale lembrar que os números vêm de relatos das próprias empresas e da Wiz, e que as investigações seguem abertas. Se a Northflank ou outras plataformas da lista divulgarem novos detalhes, os totais de clientes afetados e de prejuízo podem mudar.</p>

    <div class="callout-box"><span class="callout-label">Fonte original</span>Relatório <a href="https://www.wiz.io/blog/black-october-for-ai-developer-platforms" rel="noopener noreferrer nofollow" target="_blank">&quot;Black October&quot; for AI Developer Platforms</a>, da Wiz (30 de outubro de 2026), página de status da Northflank e reportagem do BleepingComputer (31 de outubro de 2026).</div>
  `,
};
