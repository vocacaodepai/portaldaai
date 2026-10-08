import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "pwn2own-irlanda-32-zero-days-openai-codex-litellm",
  title: "Pwn2Own Irlanda: 32 falhas inéditas no 1º dia, incluindo OpenAI Codex",
  summary:
    "Pesquisadores exploraram 32 falhas inéditas no 1º dia do Pwn2Own Irlanda e ganharam US$ 388,5 mil, com OpenAI Codex e LiteLLM entre os alvos de IA.",
  author: "Bruno Danello",
  sourceName: "BleepingComputer",
  sourceUrl: "https://www.bleepingcomputer.com/news/security/hackers-exploit-32-zero-days-on-first-day-of-pwn2own-ireland/",
  date: "2026-10-06",
  publishedAt: "2026-10-08T11:30:00-03:00",
  imageQuery: "Cork Ireland city",
  topic: "seguranca",
  content: `
    <p>No primeiro dia do Pwn2Own Irlanda 2026, pesquisadores de segurança exploraram 32 falhas inéditas (as chamadas zero-days) e receberam US$ 388,5 mil em prêmios, segundo a <a href="https://www.bleepingcomputer.com/news/security/hackers-exploit-32-zero-days-on-first-day-of-pwn2own-ireland/" target="_blank" rel="noopener noreferrer nofollow">BleepingComputer</a>. A competição é organizada pela Zero Day Initiative (ZDI), da Trend Micro, e entre os alvos desta edição havia ferramentas de IA usadas no dia a dia de empresas e desenvolvedores.</p>

    <p>Entre as ferramentas atacadas, a reportagem cita o OpenAI Codex, o agente de programação que roda na nuvem, derrubado com uma única falha de injeção de argumentos, e o LiteLLM, uma camada muito usada para conectar aplicativos a vários modelos de IA, no qual pesquisadores demonstraram falhas inéditas. O artigo não informa o valor pago por esses dois casos.</p>

    <h2>O que aconteceu no primeiro dia</h2>
    <p>O Pwn2Own é uma competição em que equipes tentam invadir produtos reais com falhas que o fabricante ainda não conhece. Quando uma tentativa dá certo, o fabricante é avisado e tem 90 dias para lançar uma correção antes de a ZDI divulgar os detalhes publicamente. Por isso, as falhas descobertas agora só devem ficar totalmente conhecidas depois desse prazo.</p>

    <p>A lista de alvos do primeiro dia foi variada. Segundo a BleepingComputer, o Samsung Galaxy S26 foi invadido duas vezes, por equipes diferentes, ainda que alguns dos erros usados já fossem conhecidos pela Samsung. Um Philips Hue Bridge Pro caiu por uma cadeia de sete falhas e rendeu US$ 40 mil à dupla da VinSOC que liderou o placar, e essa mesma dupla ganhou outros US$ 40 mil por uma cadeia de cinco falhas contra o Oracle Autonomous AI Database. Duas multifuncionais, da Lexmark e da Canon, e uma caixa de som Sonos Era 300 também foram comprometidas.</p>

    <ul>
      <li><strong>Total do dia 1:</strong> 32 falhas inéditas e US$ 388,5 mil.</li>
      <li><strong>Alvos de IA:</strong> OpenAI Codex, LiteLLM e Oracle Autonomous AI Database.</li>
      <li><strong>Prazo de correção:</strong> 90 dias antes da divulgação pública.</li>
      <li><strong>Resultado em aberto:</strong> o Google Pixel 10 foi tentado, mas a equipe não conseguiu executar o ataque no tempo disponível.</li>
    </ul>

    <h2>Por que as ferramentas de IA entraram na mira</h2>
    <p>Ferramentas de IA concentram acesso. Um agente de programação costuma ter permissão para ler e alterar código, e uma camada como o LiteLLM costuma guardar chaves de acesso de vários provedores de IA. Quando uma delas é comprometida, o impacto vai além do próprio programa. Isso explica por que o evento reservou parte do cronograma para infraestrutura de IA: a reportagem diz que, nos dias 2 e 3, haveria novas tentativas contra alvos desse tipo.</p>

    <p>A comparação com o ano passado mostra uma competição ainda em andamento: o evento de 2025 pagou US$ 1.024.750 por 73 falhas inéditas no total, e o primeiro dia deste ano, sozinho, representa menos da metade desse montante. Como a reportagem não detalha o prêmio por alvo, não dá para dizer quanto do total veio de ferramentas de IA, e os números finais só saem quando o evento termina.</p>

    <p>Esse tipo de alerta se soma a outros casos recentes. Já cobrimos aqui a <a href="/noticias/plugin4shell-falha-agentes-ia-codigo-claude-code-codex-copilot-gemini">falha que afetou agentes de código como Claude Code, Codex, Copilot e Gemini</a> e o <a href="/noticias/ataque-agentes-ia-395-organizacoes-papercut">ataque que atingiu agentes de IA em 395 organizações</a>. O padrão é parecido: quanto mais poder um agente tem, mais atraente ele fica para quem ataca.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa IA no trabalho, a notícia não pede pânico, mas sim hábitos simples. O primeiro é manter as ferramentas atualizadas, porque as correções chegam por atualização depois que o fabricante é avisado. O segundo é limitar o que cada ferramenta pode acessar: um agente que só precisa ler uma pasta não deveria ter acesso a toda a máquina. O terceiro é guardar chaves e senhas fora do código e girar essas chaves quando houver suspeita de problema.</p>

    <p>Para quem contrata ou escolhe ferramentas, vale seguir um roteiro de avaliação. O <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA com segurança</a> traz perguntas práticas sobre permissões, armazenamento de dados e histórico de correções, e o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade e o que você entrega sem perceber</a> ajuda a rever que informações realmente precisam passar pela ferramenta.</p>

    <p>No Brasil, o ponto de atenção é o de sempre em pequenas empresas: ferramentas adotadas por conta própria, sem ninguém responsável por atualizar e revisar acessos. Definir uma pessoa para acompanhar avisos de segurança dos fornecedores já reduz boa parte do risco. E, se a equipe usa agentes que executam tarefas sozinhos, convém registrar o que cada um pode fazer, como explica o guia sobre <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o futuro do trabalho autônomo</a>.</p>

    <h2>O que observar a seguir</h2>
    <p>Três pontos merecem acompanhamento. O primeiro é o resultado completo do evento, que continua nos dias seguintes e deve trazer novos casos de infraestrutura de IA. O segundo é a resposta dos fabricantes, que têm 90 dias para corrigir antes da divulgação pública, e os avisos de atualização que vierem depois. O terceiro é se o Pwn2Own mantém ou amplia o espaço dedicado a ferramentas de IA nas próximas edições, o que indicaria como a indústria de segurança avalia esse risco. Até lá, a regra é a mesma: atualizar, limitar acessos e não confiar cegamente em ferramentas que guardam chaves.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">O que está confirmado</span>
      <p>32 falhas inéditas e US$ 388,5 mil no primeiro dia, com OpenAI Codex, LiteLLM e Oracle Autonomous AI Database entre os alvos, segundo a BleepingComputer. A reportagem não detalha o prêmio de cada alvo nem os detalhes técnicos das falhas, que ficam sob o prazo de 90 dias.</p>
    </div>
  `,
  faq: [
    {
      question: "O que é o Pwn2Own?",
      answer:
        "É uma competição de segurança organizada pela Zero Day Initiative em que equipes tentam invadir produtos reais com falhas desconhecidas. Os fabricantes têm 90 dias para corrigir antes que os detalhes sejam divulgados.",
    },
    {
      question: "Quais ferramentas de IA foram atacadas?",
      answer:
        "Segundo a BleepingComputer, o OpenAI Codex, o LiteLLM e o Oracle Autonomous AI Database. O Codex foi derrubado por uma única falha de injeção de argumentos, e o banco da Oracle por uma cadeia de cinco falhas.",
    },
    {
      question: "Preciso fazer algo agora?",
      answer:
        "Mantenha as ferramentas atualizadas, limite os acessos de cada uma e guarde chaves fora do código. Os detalhes técnicos das falhas só serão públicos depois do prazo de 90 dias para correção.",
    },
  ],
};
