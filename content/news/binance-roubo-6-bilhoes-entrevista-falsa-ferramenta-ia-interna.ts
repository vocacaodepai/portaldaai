import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "binance-roubo-6-bilhoes-entrevista-falsa-ferramenta-ia-interna",
  title: "Binance: entrevista falsa e IA interna abriram roubo de US$ 6 bi",
  summary:
    "Relatório da Binance diz que norte-coreanos entraram por uma tarefa de entrevista falsa e usaram uma ferramenta interna de IA para chegar às carteiras.",
  author: "Bruno Danello",
  sourceName: "Binance, The Register, TechCrunch, The Verge",
  sourceUrl: "https://www.binance.com/en/blog/community/3229153443759566763",
  date: "2026-11-03",
  publishedAt: "2026-11-03T19:25:00-03:00",
  imageQuery: "Binance Richard Teng",
  topic: "seguranca",
  content: `
    <p>A Binance, maior corretora de criptomoedas do mundo, publicou nesta terça-feira (3) o primeiro relatório detalhado sobre o roubo de cerca de US$ 6,34 bilhões em ativos digitais sofrido em 29 de outubro, o maior da história do setor. O documento mostra que o ataque não foi um golpe único, mas uma campanha de meses que combinou um instalador adulterado baixado por um engenheiro que procurava uma ferramenta de IA para programar, uma entrevista de emprego falsa com uma "tarefa técnica" contaminada e, na reta final, o uso de uma ferramenta interna de inteligência artificial da própria empresa para tomar o controle dos computadores de outros engenheiros.</p>

    <p>O FBI atribuiu o ataque ao TraderTraitor, grupo de hackers ligado ao governo da Coreia do Norte e associado ao Lazarus, conhecido por roubos bilionários de criptomoedas. A Binance diz que nenhum cliente vai arcar com a perda: cerca de US$ 2,85 bilhões foram congelados ou interceptados, e a empresa afirma ter reposto 98% dos tokens afetados com recursos próprios até 31 de outubro. Os detalhes foram repercutidos pelo The Register e pelo TechCrunch, que ouviram a empresa e pesquisadores de segurança.</p>

    <h2>Como o ataque foi montado, passo a passo</h2>
    <p>Segundo o relatório, a preparação começou em junho. Um engenheiro da equipe de infraestrutura de carteiras, chamado no documento de Engenheiro A, instalou um pacote adulterado do Homebrew, gerenciador de programas muito usado em Macs, enquanto procurava uma ferramenta de IA para código. O malware foi detectado, o aparelho foi trocado e as senhas foram renovadas. Ainda assim, a própria Binance admite que a função do engenheiro e os colegas da equipe de carteiras ficaram expostos ao atacante, que passou a saber quem trabalhava ali e como.</p>

    <p>Em setembro veio a segunda etapa. Outro engenheiro de software, o Engenheiro B, foi procurado em uma plataforma legítima de vagas por alguém que se apresentava como diretor de projetos de uma empresa. Houve várias rodadas de entrevista. Na primeira, por vídeo, o falso recrutador chegou a mostrar um perfil em rede social com fotos e vídeos pessoais para ganhar a confiança do candidato. Na segunda, por um aplicativo de mensagens, o suposto presidente da empresa pediu que ele baixasse uma "tarefa" de programação. O repositório estava contaminado e rodou no computador de trabalho do engenheiro durante a configuração.</p>

    <p>O código malicioso trocou um componente legítimo do pyenv, ferramenta de quem programa em Python, por uma versão adulterada que abria uma porta de comunicação com um servidor dos invasores. As ferramentas de proteção dos computadores da Binance não detectaram o malware, descrito no relatório como uma ameaça inédita (zero-day) com técnicas para apagar rastros.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/RichardTeng_BBW2023_Istanbul1.jpg" alt="Richard Teng, presidente-executivo da Binance, discursando em evento da empresa em Istambul">
      <figcaption>Foto: Binance / Wikimedia Commons (CC BY 4.0)</figcaption>
    </figure>

    <h2>O papel da ferramenta interna de IA</h2>
    <p>A parte que mais chama atenção para quem acompanha IA no trabalho está na terceira fase. Em 20 de outubro, já com o computador do Engenheiro B comprometido, os invasores usaram uma ferramenta interna de inteligência artificial da Binance para ganhar controle sobre as máquinas do Engenheiro A e de um terceiro desenvolvedor da equipe de carteiras, o Engenheiro C. Foi aí que encontraram, no computador do Engenheiro A, um token com permissão para publicar contêineres no ambiente de produção.</p>

    <p>A Binance não explica o que essa ferramenta faz no dia a dia nem por que ela tinha alcance sobre os computadores de outros funcionários. O The Verge e o TechCrunch apontaram justamente essa lacuna: pela descrição, era uma ferramenta capaz de assumir as máquinas de colegas, o que fez dela um atalho perfeito para quem já estava dentro da rede. Entre as medidas já concluídas, a empresa diz ter reconstruído a ferramenta de IA e seus controles de acesso.</p>

    <p>Em 29 de outubro, no fim da tarde, o atacante entrou no computador do Engenheiro C, usou a credencial roubada do Engenheiro A para subir um contêiner e disparou um script contra o serviço de assinatura das carteiras quentes, as que ficam conectadas para atender saques. Em poucos minutos, saíram centenas de milhões de XRP, além de cerca de 18 mil bitcoins e grandes volumes de SOL, OP e ETH.</p>

    <h2>Por que a Binance demorou a estancar a perda</h2>
    <p>O relatório explica que suspender os saques não foi suficiente. O invasor usou um recurso recente da rede Ethereum, o EIP-7702, para dar a um contrato controlado por ele direitos parciais de execução sobre uma carteira quente. Como essas autorizações ficavam registradas na própria blockchain, funcionavam independentemente do sistema de saques da corretora.</p>

    <p>Além disso, a carteira usava computação multipartidária (MPC), modelo em que não existe uma chave privada única. Isso é ótimo para evitar que uma só pessoa movimente fundos, mas, no caso, impediu a revogação imediata das autorizações maliciosas. A equipe precisou montar um procedimento especial, e a última transferência indevida só foi concluída perto da meia-noite.</p>

    <h2>O que a empresa promete mudar</h2>
    <p>Entre as ações já feitas, a Binance lista a troca dos aparelhos afetados, o cancelamento de todas as credenciais e tokens dos engenheiros comprometidos, varreduras reforçadas em todos os computadores de funcionários, o fechamento das portas de entrada usadas no ataque e a ampliação da detecção de comportamento anômalo baseada em IA. Para os próximos meses, promete uma revisão independente por especialistas externos, mais investimento em segurança dos ambientes de desenvolvimento e um fundo de pesquisa em segurança, com iniciativas junto a empresas de IA e de cibersegurança voltadas à segurança de IA em ambientes de blockchain.</p>

    <p>A empresa também diz ter barrado 57 casos suspeitos de ataques ligados à Coreia do Norte. Ao TechCrunch, um porta-voz se limitou a indicar o comunicado oficial e não respondeu como a Binance impede que código não autorizado rode nos laptops dos funcionários.</p>

    <h2>Por que isso importa para você</h2>
    <p>O caso junta três riscos que já aparecem na rotina de quem trabalha com tecnologia no Brasil. O primeiro é a busca por ferramentas de IA: o ponto de partida foi um engenheiro instalando um pacote adulterado enquanto procurava um assistente de código. Baixar extensões, instaladores e "versões grátis" de ferramentas de IA a partir de anúncios ou sites desconhecidos virou uma porta de entrada comum, como mostrou o caso do <a href="/noticias/agents-md-downloads-sequestra-agentes-codigo-forever-security">arquivo AGENTS.md usado para sequestrar agentes de código</a>.</p>

    <p>O segundo é a entrevista de emprego falsa. Com o mercado de tecnologia disputado, receber uma proposta por plataforma de vagas e um "teste prático" para rodar na máquina parece normal. A regra prática é nunca executar tarefa de entrevista no computador da empresa em que você trabalha e, se for rodar, fazer isso em uma máquina virtual ou ambiente isolado, sem acesso a senhas e chaves. Quem está mirando uma vaga na área pode aproveitar o guia de <a href="/artigos/carreira-em-ciberseguranca-com-ia-vagas-trilha-e-habilidades">carreira em cibersegurança com IA</a>, que mostra justamente como esse tipo de ameaça virou demanda de mercado.</p>

    <p>O terceiro, e mais novo, é a própria ferramenta de IA interna como alvo. Empresas estão dando a assistentes e agentes acesso amplo a sistemas, máquinas e tokens para que eles "resolvam sozinhos". Quando um invasor entra, esse poder vai junto. É o mesmo problema por trás do <a href="/noticias/google-mandiant-llmjacking-chaves-api-ia-roubadas-1-milhao">LLMjacking descrito pelo Google e pela Mandiant</a> e o motivo de a <a href="/noticias/crowdstrike-compra-fiddler-dreadnode-ai-kill-switch-agentes-ia">CrowdStrike comprar empresas para vigiar agentes de IA</a>. Se você administra ferramentas de IA na sua empresa, vale revisar quais permissões elas têm, limitar o acesso ao mínimo necessário e tratar tokens guardados em computadores de funcionários como risco real. Para o usuário comum, o recado é o mesmo de sempre, agora com mais urgência: <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">escolha ferramentas de IA com critério</a> e desconfie de qualquer pedido para baixar e rodar arquivos, por mais convincente que seja a conversa.</p>
  `,
};
