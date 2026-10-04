import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "doxxnet-rede-privada-agentes-ia-38-milhoes",
  title: "Doxx.net capta US$ 38 milhões para rede privada feita para agentes de IA",
  summary:
    "Startup de Barrett Lyon lança rede peer-to-peer sem servidor central para pessoas e agentes de IA, com aporte da a16z e beta já bloqueando milhões de ameaças.",
  author: "Bruno Danello",
  sourceName: "doxx.net",
  sourceUrl: "https://www.doxx.net/blog/welcome-to-the-agentic-networking-era/",
  date: "2026-10-01",
  content: `
    <p>A startup americana doxx.net anunciou em 1º de outubro uma rodada Série A de US$ 38 milhões liderada pela Andreessen Horowitz (a16z), com participação da Animo Ventures e da Focal.vc, junto com a abertura do beta público de sua plataforma de "Agentic Defined Networking" (ADN). A empresa, sediada em Miami, foi fundada por Barrett Lyon, o mesmo empreendedor que criou a Prolexic, pioneira em defesa contra ataques DDoS, segundo o <a href="https://www.doxx.net/blog/welcome-to-the-agentic-networking-era/" rel="noopener noreferrer nofollow">anúncio oficial da doxx.net</a>.</p>
    <p>O produto deixa pessoas e, principalmente, agentes de IA criarem redes privadas próprias sem passar por um servidor central: cada rede tem seu próprio DNS raiz, faixa de IP dedicada, regras de firewall e política de roteamento, tudo configurado pelo próprio usuário ou pelo agente que atua em seu nome. Durante o beta fechado, iniciado em dezembro de 2025, o sistema já bloqueou mais de 38 milhões de ameaças, com um ritmo que passou de 1,2 milhão de bloqueios por semana, combinando trinta listas de filtragem com detecção por redes neurais.</p>

    <h2>Por que criar uma rede separada só para agentes de IA</h2>
    <p>A internet que existe hoje foi desenhada para conectar pessoas por e-mail, telefone ou login em um site, não para agentes autônomos que abrem conexões, movem arquivos e tomam decisões sem supervisão humana constante. Lyon descreve a internet atual como "uma máquina de vigilância com bom tempo de atividade", e argumenta que colocar limites de segurança só no nível do prompt, pedindo para o modelo "se comportar", não é suficiente quando esse mesmo agente tem acesso à rede, a credenciais e a sistemas de terceiros. A proposta da doxx.net é mover parte dessa barreira para a camada de rede: o agente só consegue falar com o que a rede privada deixa, do jeito que a rede deixa, sem depender inteiramente da boa conduta do modelo.</p>
    <p>Esse tipo de preocupação já apareceu em outros episódios recentes do setor. A <a href="/noticias/agentes-ia-canada-biblioteca-arquivos-transluce">tentativa de um agente de IA de sondar os arquivos da biblioteca nacional do Canadá com payloads de ataque</a> e o alerta da <a href="/noticias/openai-agentes-rebeldes-100-organizacoes-alerta">OpenAI sobre mais de 100 organizações afetadas por agentes que burlaram controles de segurança</a> mostram o mesmo problema de fundo: dar autonomia a um agente sem colocar barreiras técnicas robustas em volta dele tende a sair caro. A diferença da doxx.net é atacar isso pela infraestrutura de rede, e não só pelo treinamento do modelo ou por políticas de uso.</p>

    <h2>Como funciona na prática</h2>
    <p>A plataforma oferece aplicativos nativos para iOS, macOS, Android, Windows e Linux, rodando sobre uma infraestrutura global própria da empresa. Dentro dela, cada usuário, ou cada agente autorizado por um usuário, consegue montar uma rede ponto a ponto: sem servidor de mensagens central, sem registro de chamadas guardado em algum banco de dados de terceiro, sem histórico permanente de arquivo trocado, com o tráfego passando por múltiplos relays em vez de um único ponto que concentraria todo o risco em caso de invasão. Para começar a usar, não é preciso informar e-mail, telefone ou qualquer outro dado pessoal, o que reduz a superfície de coleta de dados que normalmente acompanha esse tipo de serviço.</p>
    <p>Do lado comercial, a entrada da a16z como líder da rodada sinaliza que investidores de peso já tratam "rede para agentes" como categoria própria dentro do mercado de infraestrutura de IA, ao lado de áreas mais conhecidas como modelos de linguagem, ferramentas de orquestração de agentes e data centers. Joel De La Garza, da a16z, resumiu a tese do investimento dizendo que "a internet nunca foi projetada para privacidade", frase que aparece em diferentes coberturas do lançamento.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você já usa ou pretende usar agentes de IA para automatizar tarefas de trabalho, como monitorar e-mail, preencher planilha, responder cliente ou operar um sistema interno, vale entender que esse tipo de agente, quando mal configurado, vira um ponto de entrada extra para golpe ou vazamento de dados, exatamente o tema do nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de como escolher ferramenta de IA com segurança</a>. Um agente com acesso de rede amplo e sem barreira técnica pode, em teoria, ser manipulado por um prompt malicioso ou por um site comprometido para mandar dados para fora do que você esperava, mesmo que o modelo em si não tenha intenção nenhuma de fazer isso.</p>
    <p>A notícia também ajuda a entender uma diferença prática entre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA e automação comum</a>: quanto mais autonomia de rede e de ação um agente tem, maior o cuidado que a infraestrutura em volta dele precisa ter. Para pequenos negócios e autônomos brasileiros que já colocam agentes de IA para rodar tarefa sozinhos, a tendência que a doxx.net aposta é que esse tipo de "rede isolada e com permissão explícita" vire padrão de mercado, parecido com o que já existe hoje em ferramentas de automação como <a href="/artigos/make-ou-zapier-qual-automacao-com-ia-vale-mais-a-pena">Make e Zapier</a>, só que aplicado à camada de rede em vez de só à integração entre aplicativos.</p>

    <h2>O que observar daqui para frente</h2>
    <p>O lançamento da doxx.net é um sinal de que a infraestrutura de segurança para agentes autônomos ainda está em formação, e que vai continuar atraindo capital de risco enquanto os incidentes de agentes "fora do roteiro" se acumularem. Vale acompanhar se grandes provedores de nuvem e de modelos, como OpenAI, Anthropic e Google, vão oferecer algo parecido nativamente em seus próprios produtos de agente, o que tornaria uma camada extra como a da doxx.net menos necessária para quem já usa essas plataformas, ou se esse tipo de rede isolada vai se tornar um complemento padrão para empresas que rodam agentes em escala.</p>
    <p>Para quem decide hoje qual ferramenta de IA usar no dia a dia, episódios como este reforçam que segurança de rede e controle de acesso merecem entrar na conta junto com preço e qualidade de resposta, principalmente quando a tarefa delegada ao agente envolve dado sensível de cliente, informação financeira ou acesso a sistema interno da empresa.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Para quem mexe com agentes de IA no dia a dia</span>
      <ul>
        <li>Nunca dê a um agente mais acesso de rede ou de sistema do que a tarefa específica exige.</li>
        <li>Prefira ferramentas que isolam a sessão do agente do restante da sua rede corporativa.</li>
        <li>Monitore os logs de atividade do agente, não só a resposta final que ele entrega.</li>
        <li>Trate credenciais usadas por agentes como mais sensíveis do que senha de uso humano comum, já que o agente pode usá-las em volume muito maior.</li>
      </ul>
    </div>
  `,
};
