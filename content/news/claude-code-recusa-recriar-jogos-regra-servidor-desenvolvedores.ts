import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "claude-code-recusa-recriar-jogos-regra-servidor-desenvolvedores",
  title: "Devs dizem que o Claude Code passou a recusar trabalhos com jogos",
  summary:
    "Desenvolvedores relatam que o Claude Code recusa recriar jogos existentes, até em projetos encomendados. A Anthropic ainda não comentou nem confirmou a regra.",
  author: "Bruno Danello",
  sourceName: "The Next Web, Tom's Hardware",
  sourceUrl:
    "https://thenextweb.com/news/claude-code-game-recreation-refusals-developers",
  date: "2026-11-01",
  publishedAt: "2026-11-01T12:35:00-03:00",
  topic: "lancamentos",
  imageQuery: "Anthropic logo",
  content: `
    <p>Desenvolvedores de jogos começaram a relatar que o Claude Code, o agente de programação da Anthropic, passou a recusar projetos que envolvem recriar jogos que já existem, inclusive trabalhos encomendados por quem tem os direitos sobre esses jogos. O caso foi publicado neste domingo (1º) pelo The Next Web, que se baseia em reportagem do Tom's Hardware e em chamados abertos no repositório público do Claude Code no GitHub. Até agora, a Anthropic não anunciou nenhuma mudança, e o registro oficial de alterações da ferramenta não cita o assunto.</p>

    <p>Vale deixar claro desde o início: tudo o que se sabe vem de relatos de usuários. A existência da regra não foi confirmada pela empresa. Mesmo assim, o episódio levanta uma pergunta prática para quem trabalha com agentes de IA: o que acontece com o seu projeto quando as regras do serviço mudam sem aviso?</p>

    <h2>O que os desenvolvedores relatam</h2>
    <p>O relato mais detalhado vem do dono de uma pequena empresa, a Conflict Simulations, que cria versões digitais personalizadas de jogos de tabuleiro de guerra (os chamados wargames) para clientes que já possuem esses jogos. Segundo a matéria, por volta de 27 de outubro o Claude Code teria começado a receber uma &quot;instrução do lado do servidor&quot; para recusar trabalhos com jogos. Em 30 de outubro, ele abriu um chamado público descrevendo o problema: as sessões passaram a recusar o serviço, citando uma instrução contra reproduzir jogos.</p>

    <p>O argumento central do desenvolvedor é que uma regra ampla, que barra toda a categoria &quot;jogos&quot;, não consegue separar pirataria de trabalho profissional encomendado. Ele pede que a Anthropic mire a regra em infrações de direito autoral de verdade e crie um caminho de verificação para profissionais que comprovem estar trabalhando para o titular dos direitos.</p>

    <p>Há nuances no relato. Em uma atualização, o próprio desenvolvedor disse que sessões antigas continuaram funcionando depois da suposta chegada da regra, e que as recusas só começaram depois que ele pediu ao Claude para verificar se a regra afetava seus projetos. Um comentarista sugeriu que a memória do projeto ou o histórico do Git poderia estar carregando a recusa de uma sessão para outra, e o desenvolvedor disse que tentaria limpar isso. Ou seja, parte do que parece uma regra nova pode ser efeito de contexto acumulado, algo que só a Anthropic poderia esclarecer.</p>

    <h2>O que a Anthropic respondeu até agora</h2>
    <p>Segundo a reportagem, o robô de suporte da empresa teria dito que a política vale para todos os clientes, sem exceções. Os dois chamados de suporte foram depois escalados para funcionários da empresa, e o desenvolvedor entrou com um recurso. Não há, até esta publicação, comunicado oficial, texto de política pública nem nota na lista de mudanças do Claude Code que confirme a regra. O Tom's Hardware também informou que não recebeu declaração oficial.</p>

    <p>Houve ainda opinião contrária no mesmo chamado: outro usuário argumentou que, se o trabalho não é feito para os detentores dos direitos, ele não difere de qualquer outra port feito por engenharia reversa. É um debate antigo no mundo dos jogos, e ele ajuda a entender por que uma empresa de IA, ainda mais uma que enfrenta processos por direito autoral, tenda a ser conservadora nesse tipo de pedido. A própria Anthropic é alvo de um processo aberto em outubro por herdeiros de Elvis Presley, que citam 274 músicas, caso que mostramos na notícia sobre os <a href="/noticias/elvis-presley-herdeiros-processam-anthropic-274-musicas">herdeiros de Elvis Presley contra a Anthropic</a>.</p>

    <h2>Bloqueios de segurança aparecem em paralelo</h2>
    <p>A matéria também lembra outros bloqueios recentes, esses ligados à segurança cibernética. Em outubro, as proteções do Claude Code teriam sinalizado código anti-cheat em um jogo de um desenvolvedor e uma revisão de segurança de outro desenvolvedor sobre o próprio jogo. O Tom's Hardware observou que o momento desses bloqueios e o das recusas de jogos pode ser coincidência, ou seja, não está provado que sejam a mesma regra.</p>

    <p>A Anthropic afirma que seus modelos disponíveis ao público têm salvaguardas conservadoras de cibersegurança, que bloqueiam a maior parte do trabalho da área. Em 6 de outubro, a empresa ampliou o programa que libera parte desses bloqueios para equipes de segurança verificadas, tema que cobrimos em <a href="/noticias/anthropic-expande-programa-verificacao-ciberseguranca-ia">Anthropic expande o Cyber Verification Program</a>. O ponto é que quem faz trabalho legítimo na fronteira entre jogos, engenharia reversa e segurança pode esbarrar em recusas difíceis de prever.</p>

    <div class="callout-box">
      <span class="callout-label">O que está confirmado e o que não está</span>
      <p>Confirmado: existem chamados públicos de desenvolvedores relatando recusas, e a reportagem os leu. Não confirmado: que a Anthropic tenha criado uma regra específica para jogos, quando ela teria começado e se haverá exceção para trabalho encomendado. Trate tudo como relato de usuários até que a empresa se manifeste.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que você nunca tenha criado um jogo, o caso mostra um risco real de depender de uma ferramenta de IA como parte do seu negócio: as regras de uso podem mudar no servidor, sem que você atualize nada no seu computador e sem uma nota clara de mudanças. Um fluxo de trabalho que funcionava na semana passada pode começar a falhar hoje, e o suporte nem sempre sabe explicar o motivo.</p>

    <p>Se você presta serviço para clientes usando agentes de programação, alguns cuidados ajudam a reduzir o impacto de uma recusa inesperada:</p>
    <ul>
      <li>Guarde contratos ou autorizações que provem que o trabalho é encomendado pelo titular dos direitos. Se a empresa criar um caminho de verificação, isso será útil.</li>
      <li>Mantenha o código sempre em um repositório seu, com commits frequentes, para que a troca de ferramenta não paralise o projeto.</li>
      <li>Tenha uma alternativa testada. Nosso guia para <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">escolher uma ferramenta de IA com segurança</a> ajuda a comparar opções antes de depender de uma só.</li>
      <li>Se uma sessão passar a recusar tudo, tente começar uma nova, sem o histórico anterior. O relato sugere que o contexto acumulado pode carregar a recusa.</li>
      <li>Registre o problema no canal oficial de chamados, com o máximo de detalhes. Foi assim que o caso ganhou visibilidade.</li>
    </ul>

    <p>É também um lembrete de que ferramentas de agentes cada vez mais autônomas vêm acompanhadas de camadas de regras que o usuário não vê. Já mostramos, por exemplo, como uma <a href="/noticias/claude-code-variavel-rm-sem-aprovacao-skip-permissions">variável nova do Claude Code tira o último freio do comando que apaga arquivos</a> e como uma <a href="/noticias/extensao-falsa-claude-code-marketplace-cursor-5-mil-usuarios">extensão falsa do Claude Code chegou a milhares de usuários do Cursor</a>. Entre a liberdade total e o bloqueio total existe uma zona cinzenta, e quem trabalha com isso precisa conhecer as duas pontas.</p>

    <p>Para quem está começando a usar IA para programar sem ser programador, vale ler também o texto sobre <a href="/artigos/vibe-coding-para-nao-programadores-carreira-e-riscos">vibe coding para não programadores, carreira e riscos</a>, que trata justamente da dependência de ferramentas que você não controla.</p>

    <p>Este texto é análise nossa a partir da reportagem do The Next Web, que cita o Tom's Hardware e os chamados públicos de desenvolvedores no repositório do Claude Code. A notícia veio de uma fonte principal, e a Anthropic ainda não confirmou nem negou a regra descrita. Vamos acompanhar se a empresa se pronunciar.</p>
  `,
};
