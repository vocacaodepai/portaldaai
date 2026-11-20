import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "cisa-confirma-exploracao-php2shell-prazo-federal-29-outubro",
  title: "CISA confirma ataques reais às falhas do PHP achadas com ajuda de IA",
  summary:
    "A agência de segurança dos EUA incluiu as duas falhas PHP2Shell na lista de vulnerabilidades já exploradas, e órgãos federais têm até 29 de outubro para corrigir.",
  author: "Bruno Danello",
  sourceName: "The Next Web",
  sourceUrl: "https://thenextweb.com/news/php2shell-flaws-exploited-cisa-kev",
  date: "2026-10-28",
  publishedAt: "2026-10-28T12:40:00-03:00",
  imageQuery: "PHP programming language logo",
  topic: "seguranca",
  content: `
    <p>As duas falhas críticas do PHP que vieram a público na semana passada já estão sendo exploradas por atacantes. A agência americana de cibersegurança, a CISA, incluiu na segunda-feira, 26 de outubro de 2026, as duas vulnerabilidades, conhecidas como PHP2Shell, no seu catálogo de vulnerabilidades exploradas ativamente (KEV). Órgãos civis do governo federal dos Estados Unidos têm até quinta-feira, 29 de outubro, para aplicar a correção. A informação consta em reportagem do The Next Web desta quarta-feira, que cita o alerta da própria CISA.</p>

    <p>É um desdobramento do caso que já contamos aqui: as falhas foram achadas com ajuda de modelos de IA e a NSA recomendou que sites sem correção saíssem do ar. Na semana passada, a CISA havia avisado sobre os defeitos, mas dizia não ter visto ataques. Agora a situação mudou, e quem mantém um site em PHP, no Brasil ou fora, não pode mais tratar o assunto como risco teórico.</p>

    <h2>O que mudou: de alerta para ataque confirmado</h2>
    <p>Os dois defeitos têm os identificadores CVE-2026-109618 e CVE-2026-109619. O projeto PHP corrigiu ambos em 21 de outubro, nas versões 8.5.12, 8.4.27, 8.3.36 e 8.2.35. Segundo a reportagem, a equipe do PHP afirma que o risco é maior em instalações que usam mod_php e que não existe mitigação completa além de atualizar. A CISA orientou quem não consegue atualizar rápido a tirar os sistemas do ar.</p>
    <p>Na segunda-feira, o PHP também publicou versões para Windows que corrigem uma falha separada no Brotli, uma biblioteca de compressão, o que reforça a necessidade de revisar a versão instalada mesmo em ambientes de desenvolvimento.</p>
    <p>As entradas no catálogo da CISA não citam vítimas nem explicam a prova usada para a decisão. Quem noticiou a mudança primeiro foi David DiMolfetta, do Nextgov/FCW, segundo o The Next Web.</p>

    <table>
      <thead>
        <tr><th>Ponto</th><th>O que foi relatado</th></tr>
      </thead>
      <tbody>
        <tr><td>Falhas</td><td>CVE-2026-109618 e CVE-2026-109619 (PHP2Shell)</td></tr>
        <tr><td>Correção</td><td>PHP 8.5.12, 8.4.27, 8.3.36 e 8.2.35, de 21 de outubro</td></tr>
        <tr><td>CISA</td><td>Entrada no catálogo KEV em 26 de outubro; prazo federal em 29 de outubro</td></tr>
        <tr><td>Mais exposto</td><td>Servidores com mod_php, sem mitigação completa</td></tr>
        <tr><td>Escala medida</td><td>68.499 tentativas de 652 endereços de IP em 73 países desde 21 de outubro (Delft)</td></tr>
      </tbody>
    </table>

    <h2>As evidências de exploração</h2>
    <p>A principal evidência citada é de Adel Karimi, responsável por detecção e resposta na Perplexity. Ele relatou no GitHub que seus honeypots, servidores isca montados para atrair ataques, registraram em 24 de outubro 35 comandos de shell iniciados pelo servidor Apache. Os três alvos rodavam PHP 8.4.26 com mod_php. Os comandos vieram de dois endereços de IP, o que, segundo o relato, não permite concluir que havia dois atacantes distintos. Depois de entrar, os invasores tentaram alcançar servidores externos com PHP, curl e wget, mas não houve download de malware visível. Karimi avisou que sua configuração, com um único processo, favorece o ataque, então os resultados não mostram a confiabilidade do exploit em outros ambientes. Marcus Hutchins, da Expel, confirmou os achados.</p>
    <p>O Laboratório de Inteligência de Ameaças da Universidade de Tecnologia de Delft mantém um painel público. Até a noite de terça-feira ele registrava 68.499 requisições de exploração vindas de 652 endereços de IP em 73 países desde 21 de outubro. Desses endereços, 174 enviaram código ou um dropper, pequeno programa que baixa outros programas maliciosos.</p>

    <h2>A campanha de 25 servidores e o papel da IA</h2>
    <p>A Dream, empresa de segurança israelense cofundada por Shalev Hulio, divulgou na segunda-feira que uma campanha invadiu 25 servidores, incluindo sistemas de um ambiente ligado ao governo americano. Segundo a empresa, os atacantes tomaram 24 firewalls e um servidor interno de gerenciamento, combinando o PHP2Shell com uma falha do kernel do Linux (Fragnesia, CVE-2026-46300) que pode dar acesso de administrador. Eles também decifraram a senha de uma conta de serviço do LDAP e listaram todos os usuários e grupos do domínio. A Dream não conseguiu confirmar se uma conta de backdoor foi criada.</p>
    <p>Os investigadores acharam o Claude Code instalado nas máquinas e uma plataforma de ataque que usa os modelos chineses DeepSeek e Kimi. A própria Dream afirma que não tem prova direta de que essas ferramentas escreveram o exploit e que a operação não parecia totalmente autônoma. A empresa não atribuiu a ação a um grupo específico, mas disse que vários indícios apontam para uma operação ligada à China. O The Next Web ressalva que não verificou esses achados de forma independente, e é assim que eles devem ser lidos: como relato de uma empresa de segurança, não como fato comprovado.</p>

    <h2>Correções de rota nos relatos anteriores</h2>
    <p>Em meio à pressa, algumas empresas recuaram. A Sophos corrigiu um relato de ataques bem-sucedidos contra clientes: sua telemetria mostrava apenas varreduras e algumas tentativas fracassadas. A Unit 42, da Palo Alto Networks, retirou a avaliação de que atacantes usaram o PHP2Shell contra um órgão do governo europeu. Esses recuos mostram como é difícil separar varredura em massa de invasão real nos primeiros dias, e por isso vale desconfiar de números isolados.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você tem um site, uma loja virtual, um blog que gera renda ou cuida de sites de clientes, a chance de rodar PHP é alta. WordPress, WooCommerce e muitos sistemas de agendamento dependem dele. A diferença entre esta semana e a passada é que agora existe ataque confirmado, com ferramentas automatizadas varrendo a internet atrás de servidores sem correção.</p>
    <p>O que fazer, na prática:</p>
    <ul>
      <li>Descobrir a versão de PHP do site no painel da hospedagem e conferir se é 8.5.12, 8.4.27, 8.3.36, 8.2.35 ou mais nova.</li>
      <li>Pedir à hospedagem a atualização, se você não controla o servidor, e exigir resposta por escrito.</li>
      <li>Fazer backup completo de arquivos e banco de dados antes de mexer.</li>
      <li>Se não houver correção em prazo curto, considerar tirar o site do ar temporariamente, como orienta a CISA, ou migrar de provedor.</li>
      <li>Trocar senhas de banco de dados, chaves de API e tokens de integração se notar comportamento estranho, como arquivos novos ou processos que você não reconhece.</li>
    </ul>
    <p>Para quem presta serviços, há uma oportunidade legítima: auditar e atualizar os sites de clientes e cobrar por monitoramento contínuo. E há uma lição sobre o uso de IA no dia a dia. As mesmas ferramentas que aceleram o seu trabalho são usadas por quem procura brechas, então agentes e automações que você configura devem rodar em ambientes atualizados e com acesso mínimo. Já mostramos que as <a href="/noticias/terra-security-correcoes-seguranca-falham-ia-atacantes">correções de segurança falham 10 vezes mais em 2026</a>, que os <a href="/noticias/agentes-openai-15-incidentes-seguranca-investigacao">agentes da OpenAI tiveram mais de 15 incidentes de segurança</a>, e que o <a href="/noticias/aws-loom-falha-critica-agentes-ia">Loom da AWS teve uma falha crítica em agentes de IA</a>. O cenário também reabre o debate sobre mercado de trabalho, tema da matéria sobre as <a href="/noticias/ciberseguranca-vagas-caem-26-engenheiro-seguranca-ia-sobe-268">vagas de cibersegurança que caem 26% enquanto engenheiro de segurança de IA sobe 268%</a>. Para a origem do caso, leia a <a href="/noticias/php-falhas-criticas-nsa-openai-wiz-ia-corrige">notícia sobre o alerta da NSA</a>, e para outro exemplo de IA achando brechas, o caso do <a href="/noticias/anthropic-mythos-vulnerabilidade-rejetto-hfs-exploracao">Anthropic Mythos no Rejetto HFS</a>.</p>

    <h2>O que observar a seguir</h2>
    <p>O primeiro ponto é se a CISA ou outras agências divulgarem vítimas e a evidência por trás da inclusão no catálogo, já que as entradas atuais não trazem esse detalhe. O segundo é a confirmação independente da campanha descrita pela Dream, em especial a ligação com ferramentas de IA. O terceiro é a velocidade com que as hospedagens brasileiras atualizam seus servidores: o prazo federal americano termina quinta-feira, mas o risco para quem ainda não atualizou já existe.</p>
    <p>A fonte desta matéria é o The Next Web, que cita a CISA, o relato de Adel Karimi, a Dream e o laboratório de Delft. Os números de versão corrigida vêm dos avisos do projeto PHP; confira-os antes de qualquer decisão em produção.</p>
  `,
};
