import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-mandiant-llmjacking-chaves-api-ia-roubadas-1-milhao",
  title: "Google: chaves de IA roubadas já geram contas de até US$ 1 milhão",
  summary:
    "Mandiant e o grupo de ameaças do Google relatam ataques de LLMjacking com cobranças de mais de US$ 100 mil por dia e revenda do acesso a modelos de IA.",
  author: "Bruno Danello",
  sourceName: "Google Threat Intelligence Group, Mandiant, BleepingComputer",
  sourceUrl: "https://cloud.google.com/blog/topics/threat-intelligence/llmjacking-monetizing-compromised-cloud-models",
  date: "2026-11-03",
  publishedAt: "2026-11-03T18:25:00-03:00",
  imageQuery: "servidor data center segurança nuvem",
  topic: "seguranca",
  content: `
    <p>O Google Threat Intelligence Group (GTIG) e a Mandiant, a área de resposta a incidentes do Google Cloud, publicaram nesta segunda-feira (2) um relatório sobre um tipo de ataque que cresceu em 2026 e mira diretamente o bolso das empresas que usam inteligência artificial: o LLMjacking, ou sequestro de acesso a modelos de linguagem. Nos casos investigados, criminosos tomaram contas corporativas de IA e geraram cobranças acima de US$ 100 mil em um único dia. Em algumas empresas, o prejuízo acumulado chegou a US$ 1 milhão antes que o acesso fosse cortado. O relatório foi repercutido nesta terça (3) pelo site BleepingComputer.</p>

    <p>Segundo o <a href="https://cloud.google.com/blog/topics/threat-intelligence/llmjacking-monetizing-compromised-cloud-models" rel="noopener noreferrer nofollow">texto publicado no blog de inteligência de ameaças do Google Cloud</a>, as invasões atingiram organizações na América do Norte, na América do Sul e na região Ásia-Pacífico, nos setores financeiro, de varejo, de tecnologia e de transporte, e envolveram vários provedores de nuvem e de modelos. Ou seja, não é um problema de uma plataforma só.</p>

    <h2>Como funciona o golpe</h2>
    <p>A lógica é parecida com a do cryptojacking, em que o invasor usa servidores alheios para minerar criptomoedas, só que muito mais rápida. Em vez de consumir recursos aos poucos, o LLMjacking dispara milhares de chamadas a modelos de IA pagos em poucas horas. Para o provedor, aquilo parece consumo legítimo, e a fatura vai para a empresa dona da conta.</p>

    <p>Os pesquisadores descrevem duas portas de entrada principais. A primeira são servidores de IA deixados abertos na internet, sem senha. O relatório mostra um script automático testando instalações expostas do Ollama, ferramenta popular para rodar modelos em máquina própria, e tentando registrar modelos do próprio invasor nelas. A segunda, e a mais comum nos casos investigados, são credenciais roubadas: chaves de contas de serviço da nuvem, credenciais de acesso (IAM), tokens pessoais do GitHub, tokens de sessão ativos e chaves de API de modelos de linguagem.</p>

    <p>Um dos grupos coletava chaves de API corporativas esquecidas em repositórios públicos do GitHub. Para conferir se cada chave funcionava sem chamar atenção, fazia pedidos mínimos de um único token, o que não disparava os alertas de volume das ferramentas de monitoramento da vítima. Outro grupo, chamado pelo Google de UNC6993, montou uma página falsa que se passava por portal de uma equipe de usuários de IA e convencia as pessoas a colar ali um bloco de dados com o token de acesso ativo. Com isso, o criminoso passava por cima da senha e da autenticação em dois fatores.</p>

    <h2>Depois de entrar, o invasor se espalha</h2>
    <p>O acesso inicial é só o começo. Nos casos analisados, os atacantes vasculharam repositórios de código atrás de senhas escritas direto no código, leram registros de acesso para achar credenciais de outros ambientes e consultaram bancos de dados em busca de senhas de administrador. Para garantir que continuariam lá, criaram contas de serviço falsas, uma delas disfarçada de ferramenta interna de "otimização de cobrança", e instalaram chaves SSH nas máquinas da vítima.</p>

    <p>O relatório também cita a exploração de uma falha no LiteLLM, software de código aberto muito usado como roteador entre aplicativos e vários modelos de IA. A vulnerabilidade, registrada como CVE-2026-40217, permitia transformar uma chave virtual comum em credencial de administrador geral do gateway. O LiteLLM já apareceu outras vezes em notícias de segurança deste ano, como no caso em que <a href="/noticias/litellm-ataque-comecou-chave-mestra-exposta-posmortem">o ataque começou por uma chave mestra exposta</a>.</p>

    <h2>O mercado paralelo de acesso a IA</h2>
    <p>A parte mais nova do relatório é a descrição de uma divisão de trabalho entre criminosos. De um lado, quem invade e obtém o acesso. Do outro, operadores dos chamados "LLM mixers", serviços que juntam chaves roubadas, distribuem os pedidos entre elas e revendem o acesso a assinantes em fóruns clandestinos. Em uma das investigações, o Google viu dois grupos diferentes trabalhando em sequência sobre a mesma vítima.</p>

    <p>Um exemplo citado é o Jet Night, serviço que oferece um plano de tokens "ilimitado" por cerca de US$ 60 por mês, com suposto acesso a modelos de ponta, quando uma assinatura de consumo equivalente costuma custar de US$ 100 a US$ 250. Segundo o Google, um invasor fez mais de 500 mil chamadas de API em menos de oito horas usando chaves roubadas para abastecer esse serviço, e quase US$ 1 milhão em custo de tokens caiu na conta da empresa vítima. O próprio canal do Jet Night no Telegram anunciava quedas frequentes, o que os pesquisadores atribuem às chaves sendo revogadas quando as vítimas descobrem o problema.</p>

    <p>Houve ainda casos em que os criminosos usaram a nuvem da vítima como base própria: ativaram agentes de IA, publicaram servidores intermediários abertos que imitavam endpoints de vários modelos de ponta e tentaram ligar máquinas com GPUs potentes em várias regiões, chegando a pedir aumento de cota ao provedor. Para driblar limites de uso, um grupo criava e apagava contas de serviço de vida curta sem parar, enquanto acompanhava o painel de cobrança da vítima para medir o estrago.</p>

    <h2>O que o Google recomenda</h2>
    <p>As orientações do relatório começam pela gestão de identidade e acesso. Os pontos principais são:</p>
    <ul>
      <li>guardar chaves e segredos em um cofre central, com troca periódica, em vez de deixá-los em código, planilhas ou variáveis soltas;</li>
      <li>negar qualquer permissão que não seja explicitamente necessária, inclusive o acesso a serviços de IA da nuvem para quem não usa;</li>
      <li>exigir autenticação resistente a phishing, como chaves de segurança e passkeys;</li>
      <li>definir limites de uso e de gasto nas APIs de IA, para que um ataque não vire uma fatura sem teto;</li>
      <li>ativar e acompanhar os registros de auditoria e de inferência, de olho em serviços ligados sem autorização, picos de uso e tentativas de desligar os logs;</li>
      <li>mapear a "IA nas sombras", ou seja, serviços de IA que funcionários ativaram sem o conhecimento da área de TI.</li>
    </ul>

    <p>O GTIG prevê que o LLMjacking vai passar à frente do cryptojacking como forma preferida de roubo de recursos de nuvem, porque o acesso a modelos pode ser revendido na hora e com margem alta. O cenário se soma a outros alertas recentes, como o levantamento da Wiz sobre <a href="/noticias/wiz-black-october-northflank-llmjacking-plataformas-ia">plataformas de IA invadidas em outubro</a> e a invasão da Railway por criminosos <a href="/noticias/railway-invasao-chaves-api-ia-100-mil-workspaces">atrás de chaves de API de IA</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Uma chave de API de IA virou, na prática, um cartão de crédito corporativo. Quem tem uma chave da OpenAI, da Anthropic, do Google ou de qualquer outro provedor ligada a um cartão pode acordar com uma conta de milhares de reais sem ter usado nada. Isso vale tanto para a empresa grande quanto para o freelancer que montou uma automação, para a agência que integrou um chatbot no site de um cliente e para quem testa modelos no fim de semana.</p>

    <p>Algumas medidas simples reduzem muito o risco. Nunca coloque chave de API em código que vai para o GitHub, nem em repositório privado; use variáveis de ambiente e um gerenciador de segredos. Configure limite de gasto mensal e alerta de consumo no painel de cada provedor, recurso que a maioria já oferece. Crie uma chave separada para cada projeto, para poder revogar só a que vazou. Se você roda modelos em casa ou no escritório com o Ollama, não deixe a porta exposta na internet sem proteção. E ative a autenticação forte nas contas de nuvem e do GitHub: nosso guia sobre <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">como ativar passkeys</a> e o de <a href="/artigos/gerenciador-de-senhas-como-escolher-comecar-e-usar-com-seguranca">gerenciador de senhas</a> ajudam nesse primeiro passo.</p>

    <p>Para quem trabalha ou quer trabalhar com segurança, o relatório mostra mais uma frente nova que exige gente que entenda ao mesmo tempo de nuvem e de IA. A nossa trilha de <a href="/artigos/carreira-em-ciberseguranca-com-ia-vagas-trilha-e-habilidades">carreira em cibersegurança com IA</a> explica por onde começar. Os números de prejuízo citados vêm das investigações da própria Mandiant e não identificam as empresas atingidas.</p>
  `,
};
