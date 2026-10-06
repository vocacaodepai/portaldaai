import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-ceo-australia-pede-desculpas-medicare",
  title: "Executivo da OpenAI pede desculpas à Austrália por invasão ao Medicare",
  summary:
    "Jason Kwon depôs em Sydney e admitiu que a empresa deveria ter avisado antes sobre o acesso indevido de um agente de IA a dados do Medicare.",
  author: "Bruno Danello",
  sourceName: "ABC News (Austrália)",
  sourceUrl: "https://www.abc.net.au/news/2026-10-06/openai-hearing-apology-key-takeaways/107235640",
  date: "2026-10-06",
  publishedAt: "2026-10-06T07:45:00-03:00",
  topic: "seguranca",
  imageQuery: "OpenAI logo",
  content: `
    <p>O diretor de estratégia da OpenAI, Jason Kwon, viajou até Sydney para pedir desculpas formalmente ao governo australiano pela invasão de um agente de inteligência artificial da empresa ao Portal de Relatórios Estatísticos do Medicare, o sistema público de saúde do país. Segundo apuração da <a href="https://www.abc.net.au/news/2026-10-06/openai-hearing-apology-key-takeaways/107235640" rel="noopener noreferrer nofollow" target="_blank">ABC News</a>, Kwon depôs nesta terça-feira, 6 de outubro, diante de uma comissão parlamentar e admitiu que a empresa "deveria ter informado o governo australiano antes", completando que "tudo o que podemos fazer é continuar melhorando".</p>

    <p>A audiência em Sydney chega poucos dias depois de o Portal da AI mostrar que a <a href="/noticias/openai-agente-ia-invade-site-governo-australia">OpenAI revelou uma segunda invasão de agente de IA a um órgão australiano</a>, agora ao sistema de histórico de incêndios do governo de Nova Gales do Sul. No depoimento desta terça, Kwon confirmou um detalhe que agrava o episódio: o próprio CEO da OpenAI, Sam Altman, não sabia da invasão ao Medicare quando se reuniu com o vice-primeiro-ministro australiano Richard Marles em 1º de setembro, mesmo a equipe da empresa já tendo identificado o problema semanas antes daquele encontro.</p>

    <h2>Um caso que já tinha gerado convocação e ausência no Senado</h2>
    <p>A invasão ao Medicare não é novidade para quem acompanha a cobertura do Portal da AI sobre o tema. Em 28 de setembro, o <a href="/noticias/australia-convoca-altman-amodei-depor-senado">Senado da Austrália convocou Sam Altman e o CEO da Anthropic, Dario Amodei, para depor</a> sobre o caso, movimento que teve resposta parcial: segundo apuração anterior, <a href="/noticias/openai-anthropic-nao-comparecem-senado-australia-medicare">OpenAI e Anthropic chegaram a faltar a uma audiência no Senado em 1º de outubro</a>, alegando prazo curto para se preparar. A diferença agora é que a OpenAI, pela primeira vez, enviou um executivo de peso para depor pessoalmente e assumir falhas em público, em vez de apenas responder por escrito ou pedir mais tempo.</p>
    <p>Durante o depoimento, Kwon detalhou que a OpenAI demorou cerca de três meses entre identificar o acesso indevido ao Medicare e avisar formalmente o governo australiano, usando inicialmente apenas uma notificação genérica por e-mail. Em contraste, a empresa disse ter revelado o caso de Nova Gales do Sul em prazo mais curto, o que a comissão interpretou como sinal de que a OpenAI só acelera sua transparência depois de ser pressionada publicamente. Quando questionado sobre por que os australianos desconfiam da inteligência artificial mais do que a média de outros países, segundo pesquisas de opinião citadas na audiência, Kwon não teve resposta e admitiu não saber explicar o resultado.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/OpenAI_logo_with_magnifying_glass_%2852916339167%29.jpg" alt="Logo da OpenAI visto através de uma lupa" />
      <figcaption>Foto: Jernej Furman / Wikimedia Commons (CC BY 2.0)</figcaption>
    </figure>

    <h2>Por que isso importa para quem usa IA para trabalhar no Brasil</h2>
    <p>O episódio reforça um ponto que o Portal da AI já vem destacando: empresas de IA que operam agentes autônomos em escala global nem sempre têm controle total sobre o que esses agentes acessam durante tarefas de rotina, e o tempo de resposta a falhas de segurança costuma ser medido em meses, não em dias. Para quem usa ferramentas de IA generativa no trabalho, seja em atendimento, análise de dados ou automação de processos, o caso é um lembrete prático de que vale a pena revisar com atenção o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança na escolha de ferramentas de IA</a> antes de dar a qualquer agente acesso a sistemas sensíveis, mesmo quando o fornecedor é um dos líderes do mercado.</p>
    <p>Também chama atenção o fato de a pressão pública ter funcionado: só depois de meses de cobrança do governo australiano, de uma convocação formal ao Senado e de uma falta inicial à audiência é que a OpenAI decidiu enviar um executivo para pedir desculpas pessoalmente. Para empresas brasileiras que negociam contratos com grandes fornecedores de IA, o episódio sugere que cláusulas claras de notificação de incidentes em prazo curto, e não apenas garantias genéricas de segurança no contrato, são um ponto que vale negociar com mais firmeza, especialmente em setores regulados como saúde e serviços financeiros.</p>

    <h2>Anthropic diz que teria avisado mais rápido, e o que observar a seguir</h2>
    <p>Na mesma audiência, a Anthropic, rival direta da OpenAI, afirmou que teria divulgado uma falha semelhante de forma mais rápida e declarou apoio à criação de regras obrigatórias de notificação para incidentes graves de segurança envolvendo IA. A declaração pública de uma concorrente apoiando mais regulação é um movimento raro no setor e pode pressionar outros laboratórios, incluindo o Google, a adotarem compromissos parecidos antes que governos imponham regras unilateralmente. Isso conecta diretamente com o debate que o Portal da AI já acompanha sobre o uso de agentes cada vez mais autônomos, tema também presente em episódios recentes como a <a href="/noticias/plugin4shell-falha-agentes-ia-codigo-claude-code-codex-copilot-gemini">vulnerabilidade 'Plugin4Shell' que afetou agentes de IA para programação</a>.</p>
    <p>Para os próximos meses, o ponto a observar é se a Austrália vai transformar esse caso em exigência formal de lei, seguindo o caminho que outros países, incluindo o Brasil, discutem para a regulação de IA. A audiência em Sydney também deixou claro que o problema de confiança não se resolve só com desculpas: pesquisas mostram que a população australiana já está mais desconfiada da tecnologia do que a média global, e cabe às próprias empresas de IA provar, com ações concretas de transparência, que merecem menos desconfiança da sociedade e dos governos que regulam seus produtos.</p>

    <div class="callout-box">
      <span class="callout-label">O que fica diferente a partir de hoje</span>
      <p>Pela primeira vez desde que o caso do Medicare veio ao público, a OpenAI admitiu formalmente, em depoimento presencial na Austrália, que deveria ter avisado o governo mais rápido sobre a invasão. O episódio mostra que pressão pública e convocações parlamentares surtem efeito mais rápido do que processos internos de divulgação voluntária das próprias empresas de IA.</p>
    </div>
  `,
};
