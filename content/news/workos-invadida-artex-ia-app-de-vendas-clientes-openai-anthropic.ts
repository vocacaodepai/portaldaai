import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "workos-invadida-artex-ia-app-de-vendas-clientes-openai-anthropic",
  title: "WorkOS, que cuida do login de OpenAI e Anthropic, é invadida com IA",
  summary:
    "Atacante usou a ferramenta de IA ARTEX para entrar num app de vendas da WorkOS e levou contatos e resumos de conversas com clientes. Produção não foi afetada.",
  author: "Bruno Danello",
  sourceName: "BleepingComputer, WorkOS",
  sourceUrl: "https://www.bleepingcomputer.com/news/security/workos-says-attacker-used-artex-ai-to-breach-internal-sales-app/",
  date: "2026-11-04",
  publishedAt: "2026-11-04T02:24:00-03:00",
  imageQuery: "computer security server room",
  topic: "seguranca",
  content: `
    <p>A WorkOS, empresa americana que fornece a peça de login corporativo de milhares de aplicativos, confirmou ter sofrido uma invasão em que o atacante usou uma ferramenta de inteligência artificial para automatizar o trabalho. Segundo o aviso de incidente da própria empresa e a reportagem publicada nesta terça-feira (3) pelo site <a href="https://www.bleepingcomputer.com/news/security/workos-says-attacker-used-artex-ai-to-breach-internal-sales-app/" rel="noopener noreferrer nofollow">BleepingComputer</a>, o invasor entrou num aplicativo interno usado pela equipe de vendas e teve acesso a registros de contatos comerciais e a resumos de conversas com clientes. A empresa afirma que os dados dos aplicativos dos clientes e os serviços de produção não foram tocados.</p>

    <p>O caso chama atenção por dois motivos. O primeiro é quem está na lista de clientes: de acordo com o site da WorkOS, mais de 3.000 empresas usam seus serviços, entre elas OpenAI, Anthropic, Cursor, Perplexity, Snowflake, Plaid e Netlify. O segundo é a ferramenta usada no ataque, a ARTEX AI, um conjunto de agentes de IA para testes de invasão que vem aparecendo em incidente após incidente desde o começo do ano.</p>

    <h2>O que a WorkOS faz e o que foi exposto</h2>
    <p>A WorkOS vende infraestrutura para desenvolvedores: APIs e kits que permitem a um aplicativo oferecer login único corporativo (o famoso SSO, em que o funcionário entra com a conta da empresa), gestão de usuários e controle de identidade sem que o time precise construir tudo do zero. É o tipo de fornecedor invisível para o usuário final, mas que fica no caminho de quase todo acesso a um software empresarial.</p>

    <p>Por isso a primeira pergunta de qualquer cliente seria se o sistema de autenticação foi comprometido. Pela versão da empresa, não. A WorkOS diz que identificou, em 30 de outubro, acesso não autorizado a um aplicativo interno da área comercial. O que estava ali eram informações típicas de vendas: nomes, cargos e contatos de pessoas nas empresas clientes, além de resumos das conversas mantidas com elas. Segundo a investigação até agora, nenhum dado dos aplicativos que rodam sobre a WorkOS nem os serviços de produção foram acessados.</p>

    <p>Depois de detectar a intrusão, a empresa cortou o acesso externo ao aplicativo afetado, revisou os controles de acesso das ferramentas internas e contratou uma firma independente de perícia e resposta a incidentes para medir o alcance completo do ataque. Também prometeu avisar diretamente os clientes afetados e pediu que fiquem atentos a tentativas de phishing e de engenharia social que usem as informações vazadas.</p>

    <h2>A ARTEX de novo no centro de um ataque</h2>
    <p>Quem deu o nome da ferramenta foi o fundador da WorkOS, Michael Grinich, em publicações nas redes sociais citadas pelo BleepingComputer. Segundo ele, o time de investigação encontrou nas requisições do invasor identificadores de navegador (os chamados user agents) como "artex-enrich/1.0" e "norma/0.4", rastros que ligam o ataque à suíte ARTEX AI. Grinich afirmou que o incidente já está totalmente contido e que a empresa vai publicar mais detalhes ao fim da investigação.</p>

    <p>A ARTEX foi criada por desenvolvedores chineses e lançada inicialmente como projeto de código aberto para segurança ofensiva, ou seja, para que equipes de defesa testassem os próprios sistemas. O projeto virou fechado depois de ser usado em ataques reais contra instituições financeiras da Coreia do Sul, caso que o Portal da AI acompanhou em <a href="/noticias/bancos-coreia-ia-hacker-autonomo-vazamento">bancos coreanos</a> e depois em <a href="/noticias/coreia-corretoras-bithumb-novos-ataques-artex-daishin">corretoras como a Bithumb</a>. Só que várias cópias derivadas do código continuam circulando, e qualquer grupo com conhecimento técnico mediano consegue colocar uma delas para funcionar.</p>

    <p>O histórico recente mostra o tamanho do problema. Em outubro, a ferramenta apareceu numa ofensiva de <a href="/noticias/hackers-chineses-artex-ia-connectwise-2250-tenants-microsoft">hackers ligados à China contra milhares de contas do Microsoft 365</a>. Nesta semana, a CrowdStrike descreveu uma campanha do grupo que ela chama de Vapor Panda contra mais de 200 organizações em 14 países, iniciada em 17 de outubro, com vítimas confirmadas que incluem operadoras de telecomunicações nos Estados Unidos e na Bélgica, empresas farmacêuticas americanas e órgãos de governo na Grécia, no Oriente Médio e na América Latina. Nessa operação, segundo a CrowdStrike, os agentes de IA faziam o reconhecimento, exploravam falhas, instalavam portas dos fundos e buscavam caminhos alternativos quando um bloqueio aparecia, com um operador humano intervindo só nas decisões críticas. Em uma das intrusões, os pesquisadores estimam que os agentes consumiram mais de 1,4 bilhão de tokens de entrada.</p>

    <p>Antes disso, o instituto holandês DIVD, que trabalha justamente com divulgação de vulnerabilidades, contou que foi atacado em setembro por um agente que foi do acesso inicial a privilégios totais de administrador em 12 minutos, encadeando duas falhas desconhecidas. O DIVD registrou mais de 450 mil requisições e 2.500 scripts ligados ao ataque e descreveu a atividade como barulhenta e bagunçada, o que dá uma pista: esses agentes não são sutis, mas compensam a falta de cuidado com velocidade e volume.</p>

    <h2>Por que um app de vendas vira alvo</h2>
    <p>Pode parecer que o atacante ficou com pouco, já que não chegou ao sistema de login. Mas uma base de contatos comerciais com resumos de conversas é matéria-prima valiosa para golpes. Com ela, um criminoso sabe quem, dentro de uma empresa como a OpenAI ou a Anthropic, cuida da integração com a WorkOS, o que foi conversado nas últimas reuniões e que tipo de pedido soaria normal. É exatamente o ingrediente de um phishing direcionado convincente, em que o e-mail falso cita o projeto certo, a pessoa certa e o prazo certo.</p>

    <p>Esse padrão, de mirar fornecedores de infraestrutura para chegar nas grandes empresas de IA, tem se repetido. Nas últimas semanas houve a <a href="/noticias/railway-invasao-chaves-api-ia-100-mil-workspaces">invasão da Railway atrás de chaves de IA</a> e a série de plataformas atingidas que a Wiz chamou de <a href="/noticias/wiz-black-october-northflank-llmjacking-plataformas-ia">"Black October"</a>. Ferramentas automatizadas como a ARTEX barateiam o ataque: o que antes exigia uma equipe dedicada por semanas agora pode ser disparado contra dezenas de alvos ao mesmo tempo, e basta um deles ter uma porta mal fechada.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se a sua empresa usa softwares que fazem login pela conta corporativa, é provável que algum fornecedor como a WorkOS esteja no meio do caminho, mesmo que você nunca tenha ouvido o nome dele. O caso mostra que o elo frágil nem sempre é o sistema principal, mas as ferramentas internas que ficam em volta dele, como CRMs, planilhas de vendas e painéis de suporte. Três cuidados práticos valem para qualquer negócio, grande ou pequeno:</p>
    <ul>
      <li><strong>Desconfie de pedidos urgentes que citam detalhes reais:</strong> um e-mail que menciona a reunião da semana passada não é prova de que veio de quem diz. Confirme por outro canal antes de trocar senha, liberar acesso ou pagar algo.</li>
      <li><strong>Trate ferramentas internas como produção:</strong> app de vendas, CRM e painel de atendimento precisam de autenticação forte e acesso restrito, porque guardam exatamente o que o golpista quer.</li>
      <li><strong>Use autenticação resistente a phishing:</strong> chaves de acesso (passkeys) e gerenciador de senhas reduzem muito o estrago de um e-mail falso bem feito. Veja nosso guia de <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">como ativar a chave de acesso</a>.</li>
    </ul>
    <p>Para quem trabalha com IA, fica também o recado de que a mesma tecnologia que acelera o seu trabalho acelera o do atacante. Empresas de segurança já estão se movendo para isso, como mostrou a <a href="/noticias/crowdstrike-compra-fiddler-dreadnode-ai-kill-switch-agentes-ia">compra de duas startups pela CrowdStrike</a> para vigiar agentes de IA. A WorkOS ainda deve divulgar o relatório final da perícia, e o principal ponto a acompanhar é se algum cliente relatará tentativas de golpe usando os dados levados.</p>
  `,
};
