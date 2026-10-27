import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "php-falhas-criticas-nsa-openai-wiz-ia-corrige",
  title: "NSA alerta para duas falhas críticas no PHP achadas com ajuda de IA",
  summary:
    "A NSA diz que duas falhas críticas afetam todas as versões do PHP desde a 5. Calif e Wiz as acharam com modelos de IA, e sites sem correção devem sair do ar.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/21/php-armageddon-openai-googles-wiz-find-ancient-holes-panicking-the-internet/",
  date: "2026-10-21",
  publishedAt: "2026-10-21T20:23:00-03:00",
  imageQuery: "PHP programming language logo",
  topic: "seguranca",
  content: `
    <p>A Agência de Segurança Nacional dos Estados Unidos (NSA) alertou nesta quarta-feira, 21 de outubro de 2026, que duas falhas críticas foram encontradas no PHP, a linguagem que roda uma parcela enorme dos sites do mundo, incluindo o WordPress. Segundo a reportagem do <a href="https://techcrunch.com/2026/10/21/php-armageddon-openai-googles-wiz-find-ancient-holes-panicking-the-internet/" rel="noopener noreferrer nofollow">TechCrunch</a>, os defeitos existem em todas as versões desde o PHP 5, lançado em 2004, e permitem que um atacante chegue ao sistema de arquivos do servidor ou ao banco de dados usado pela aplicação web.</p>

    <p>O detalhe que chama atenção é como as falhas apareceram: elas foram achadas por equipes que usaram modelos de inteligência artificial para varrer código antigo. A NSA foi direta no conselho aos administradores: se um site não puder ser corrigido imediatamente, ele deve ser retirado do ar até que a atualização seja aplicada.</p>

    <h2>Quem achou as falhas e como</h2>
    <p>De acordo com o TechCrunch, uma das falhas foi encontrada pela Calif, empresa de testes de segurança que trabalha dentro da iniciativa Patch the Planet, da OpenAI, voltada a achar defeitos em software de código aberto. A Calif usou o modelo GPT-5.6 Sol, e a OpenAI divulgou o caso em um post em seu blog.</p>
    <p>A equipe da Wiz, empresa de segurança em nuvem ligada ao Google, também achou várias vulnerabilidades no PHP. Ela combinou o Wiz Atlas, seu agente de segurança com IA, com o Gemini 4 Argon e o GPT-5.6 Sol. Os dois grupos seguiram o processo de divulgação responsável: avisaram a equipe do PHP e trabalharam com ela nas correções antes de tornar o caso público. A Wiz agradeceu a Automattic, Akamai, AWS, Cloudflare, Fastly, Imperva, Microsoft e Vercel, que ajudaram a testar os patches.</p>

    <table>
      <thead>
        <tr><th>Ponto</th><th>O que foi relatado</th></tr>
      </thead>
      <tbody>
        <tr><td>Versões afetadas</td><td>Todas desde o PHP 5 (2004)</td></tr>
        <tr><td>Risco</td><td>Acesso ao sistema de arquivos do servidor ou a bancos de dados da aplicação</td></tr>
        <tr><td>Quem achou</td><td>Calif (com GPT-5.6 Sol) e Wiz (com Wiz Atlas, Gemini 4 Argon e GPT-5.6 Sol)</td></tr>
        <tr><td>Correção</td><td>PHP 8.5.12, 8.4.27, 8.3.36 e 8.2.35 (avisos de segurança no php-src, GitHub)</td></tr>
        <tr><td>Exploração</td><td>Sem relatos de ataques em andamento, segundo a OpenAI</td></tr>
      </tbody>
    </table>

    <h2>O que os administradores precisam fazer</h2>
    <p>O projeto PHP publicou versões de segurança em 21 de outubro de 2026. Segundo os dois avisos de segurança do php-src (GHSA-w8hw-w9fx-j79w e GHSA-6wmf-4rv5-p3rp), classificados como críticos (CVSS 9.2) e identificados como CVE-2026-109618 e CVE-2026-109619, as versões corrigidas são PHP 8.5.12, 8.4.27, 8.3.36 e 8.2.35: qualquer versão anterior dessas quatro linhas está vulnerável. O TechCrunch também recomenda atualizar para o PHP 8.5.12 e informa que as versões 8.1 e anteriores não têm mais suporte, então quem ainda roda essas linhas precisa migrar para uma versão mantida. Se a hospedagem não mostrar o número exato, peça a confirmação de que o servidor está nessa versão ou acima.</p>
    <p>Para sites em WordPress, a própria WordPress afirmou, segundo a reportagem, que a falha não é específica da plataforma. A correção depende do servidor: quem usa hospedagem compartilhada ou gerenciada deve cobrar da empresa de hospedagem a atualização do PHP e confirmar que a versão em uso já recebeu o patch.</p>

    <h2>Por que a IA muda o jogo dos dois lados</h2>
    <p>A Wiz alertou que a IA reduz uma barreira que antes protegia sistemas antigos. Em vez de um atacante precisar adaptar manualmente um exploit para cada versão, configuração e layout de memória, um modelo de linguagem pode ajudar nessa adaptação. Nas palavras da empresa citadas pela reportagem, com a IA isso deixa de ser um obstáculo.</p>
    <p>Agora que as falhas são públicas, os atacantes também sabem delas. A OpenAI afirma que os defeitos foram achados antes de hackers os descobrirem e que não há relatos de exploração, mas o intervalo entre a divulgação e a aplicação do patch é justamente o período de maior risco. Esse padrão já apareceu em outras notícias recentes: mostramos que as <a href="/noticias/terra-security-correcoes-seguranca-falham-ia-atacantes">correções de segurança falham 10 vezes mais em 2026</a> em um cenário de atacantes com IA, e que o <a href="/noticias/anthropic-mythos-vulnerabilidade-rejetto-hfs-exploracao">Anthropic Mythos achou uma vulnerabilidade no Rejetto HFS</a>. O mesmo movimento levou ao crescimento da demanda por profissionais da área, tema da nossa matéria sobre as <a href="/noticias/ciberseguranca-vagas-caem-26-engenheiro-seguranca-ia-sobe-268">vagas de cibersegurança que caem 26% enquanto engenheiro de segurança de IA sobe 268%</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que você não seja programador, é provável que dependa de PHP sem saber. Lojas virtuais, blogs, portais de empresas pequenas e sistemas de agendamento costumam rodar nele. Se você tem um site de negócio, um blog que gera renda ou presta serviço de criação de sites para clientes, esta é uma tarefa urgente, não um assunto de especialista.</p>
    <p>O que fazer, na prática:</p>
    <ul>
      <li>Descobrir qual versão de PHP o seu site usa. No painel da hospedagem, essa informação costuma estar na seção de configuração de PHP.</li>
      <li>Atualizar para uma versão corrigida (8.5.12, 8.4.27, 8.3.36, 8.2.35 ou mais nova), ou pedir à hospedagem que faça isso.</li>
      <li>Fazer um backup completo antes da atualização, com arquivos e banco de dados.</li>
      <li>Se a hospedagem não oferecer a versão corrigida em prazo curto, avaliar tirar o site do ar temporariamente, como recomenda a NSA, ou trocar de provedor.</li>
      <li>Trocar senhas de banco de dados e chaves de acesso se houver qualquer sinal de comportamento estranho no site.</li>
    </ul>
    <p>Para quem presta serviços de manutenção de sites, o episódio abre uma oportunidade legítima de trabalho: auditar os sites de clientes, atualizar versões antigas e cobrar por monitoramento contínuo. Quem usa IA no próprio trabalho também ganha uma lição sobre o outro lado da moeda. A mesma tecnologia que acelera a sua produção acelera a de quem procura brechas, e agentes e automações que você configura precisam rodar em ambientes atualizados. Vale reler o caso dos <a href="/noticias/agentes-openai-15-incidentes-seguranca-investigacao">agentes da OpenAI com mais de 15 incidentes de segurança</a> para lembrar que acesso amplo demais é risco, e o alerta sobre o <a href="/noticias/aws-loom-falha-critica-agentes-ia">Loom da AWS e sua falha crítica em agentes de IA</a>.</p>

    <h2>O que observar a seguir</h2>
    <p>O primeiro ponto é o detalhamento técnico dos dois avisos (um descreve execução remota de código por corrupção de memória em falta de memória, outro por estado global obsoleto), que ajuda empresas a priorizar a correção. O segundo é a velocidade com que as hospedagens brasileiras atualizam seus servidores. O terceiro é se aparecerão relatos de exploração real nos próximos dias, já que o código das falhas agora é conhecido por quem quiser estudá-lo.</p>
    <p>A fonte desta matéria é a reportagem do TechCrunch, que por sua vez cita a NSA, a OpenAI e a Wiz. Os números de versão corrigida e as pontuações vêm dos avisos de segurança do php-src e do changelog do php.net; confira-os antes de qualquer decisão em ambiente de produção.</p>
  `,
};
