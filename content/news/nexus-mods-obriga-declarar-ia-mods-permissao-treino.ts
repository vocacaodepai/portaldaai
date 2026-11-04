import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "nexus-mods-obriga-declarar-ia-mods-permissao-treino",
  title: "Nexus Mods passa a exigir que autores declarem o uso de IA nos mods",
  summary:
    "Maior site de mods para PC obriga autores a declarar uso de IA, explicar onde ela entrou e cria trava padrão contra uso dos arquivos em treino de modelos.",
  author: "Bruno Danello",
  sourceName: "Nexus Mods, The Verge",
  sourceUrl: "https://help.nexusmods.com/article/180-ai-policy-changes-2026",
  date: "2026-11-03",
  publishedAt: "2026-11-03T22:23:00-03:00",
  imageQuery: "Nexus Mods logo",
  topic: "regulacao",
  content: `
    <p>O Nexus Mods, maior repositório de modificações para jogos de PC, anunciou nesta terça-feira (3) uma nova política sobre inteligência artificial que vale para todos os arquivos hospedados no site. A partir de agora, quem publica um mod novo precisa declarar se usou IA no trabalho, escolher um rótulo que diga o quanto ela pesou no resultado e, quando a IA teve papel de apoio, explicar publicamente quais ferramentas usou e em que partes do mod. A plataforma também cria uma permissão específica para treino de IA, que já nasce travada em todos os arquivos, inclusive os antigos.</p>

    <p>O anúncio foi feito num texto do dono do site, Victor Folmann, conhecido como "Foledinho", e detalhado na <a href="https://help.nexusmods.com/article/180-ai-policy-changes-2026" rel="noopener noreferrer nofollow" target="_blank">página oficial de regras de IA da Central de Ajuda do Nexus Mods</a>. O site americano The Verge foi o primeiro grande veículo a repercutir a mudança, também nesta terça.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Nexus-Mods_logo.png" alt="Logotipo do Nexus Mods" loading="lazy" />
      <figcaption>Foto: Black Tree Gaming Ltd. / Wikimedia Commons (domínio público)</figcaption>
    </figure>

    <h2>Três rótulos e uma explicação obrigatória</h2>
    <p>A regra central é simples: se a IA generativa foi usada para criar, editar ou processar qualquer arquivo, recurso ou texto de página enviado ao site, o autor tem de dizer isso de forma precisa. Para isso, o Nexus Mods passa a trabalhar com três categorias.</p>

    <ul>
      <li><strong>Conteúdo gerado por IA:</strong> quando o núcleo do trabalho saiu de ferramentas de IA, como código, vozes sintéticas, texturas, textos ou scripts gerados.</li>
      <li><strong>Mídia com IA:</strong> quando a IA aparece fora dos arquivos do jogo, em imagens de divulgação, miniaturas, banners, vídeos ou na descrição do mod.</li>
      <li><strong>Conteúdo assistido por IA:</strong> quando o mod é conduzido por uma pessoa e a IA só ajudou, por exemplo ao aumentar a resolução de texturas, limpar ruído de áudio ou gerar a arte conceitual inicial.</li>
    </ul>

    <p>É no terceiro rótulo que está a maior novidade. Quem marca o mod como "assistido por IA" precisa listar na página principal as ferramentas, programas ou modelos usados e dizer exatamente quais saídas da IA ficaram no produto final, seja autocompletar de código, texturas ampliadas, diálogos revisados ou remoção de ruído. O site pede ainda provas de que o trabalho foi conduzido por um humano, como histórico de versões do projeto ou de commits, e avisa que o autor pode ter de explicar o funcionamento do próprio código em caso de disputa com a moderação. Sem essas provas, a equipe pode trocar o rótulo por conta própria.</p>

    <p>A política também obriga o autor a atualizar essa declaração sempre que uma nova versão trouxer partes feitas com IA ou mudar bastante as que já existiam. E o site se reserva o direito de pedir o código-fonte quando houver dúvida sobre o que um arquivo faz. O autor não é obrigado a entregar, mas o Nexus Mods pode deixar de hospedar o mod se a suspeita continuar.</p>

    <h2>Por que o site não proibiu a IA</h2>
    <p>Segundo o relato do The Verge, Folmann diz que o Nexus Mods é "a favor da criatividade humana", mas descartou banir mods gerados por IA. O argumento é que a IA já está espalhada por todo o processo de criação, do autocompletar de scripts à geração de texturas e vozes, e que é difícil traçar uma linha clara entre o aceitável e o inaceitável. Uma proibição total, na visão dele, não tiraria a IA dos mods: só faria as pessoas pararem de dizer que a usaram. A aposta do site é o contrário, com uso às claras, rotulado e regulado pelas regras da plataforma.</p>

    <p>Junto com isso, o site vai deixar os rótulos de IA mais visíveis nas páginas e lançar filtros para esconder conteúdo gerado por IA nas páginas dos jogos e na página inicial. O próximo passo, de acordo com o anúncio, é levar o mesmo filtro para a busca. A seção de mods recém-adicionados também muda, com limite de quantos arquivos de um mesmo autor aparecem de uma vez e restrições mais duras para contas novas, porque a produção acelerada vinha empurrando os outros autores para baixo da lista.</p>

    <h2>Trava padrão contra treino de IA</h2>
    <p>A segunda metade da política trata de quem usa o trabalho alheio. O Nexus Mods vai criar permissões explícitas para dois usos: treino ou uso em ferramentas de IA e criação de versões paralelas (os chamados forks). As duas começam marcadas como "Pergunte-me" em todos os arquivos hospedados, inclusive nos publicados antes da regra existir.</p>

    <p>Na prática, "Pergunte-me" proíbe que alguém use os arquivos do mod para treinar, ajustar ou montar bases de dados de IA generativa, ou para alimentar fluxos automáticos de edição e geração, sem autorização por escrito do autor. A trava cobre todas as partes do mod: modelos 3D, texturas, scripts, áudio, texto e código-fonte. O site afirma ainda que não usa os mods para treinar IA e que não vai vender nem licenciar o acervo para quem faça isso.</p>

    <p>Há uma exceção importante: as permissões da plataforma não passam por cima de licenças de código aberto do tipo copyleft, como a GPL, que já estejam ligadas ao código ou aos recursos e que exigem que obras derivadas sigam a mesma licença. Nesses casos, a moderação vai respeitar os termos da licença original.</p>

    <p>Para os forks, a regra fica mais rígida. Publicar no site uma versão paralela de um mod ativo só é permitido com autorização documentada do criador original ou quando a página dele liberar derivados. Todo trabalho derivado precisa creditar o autor original e linkar para o mod de origem na descrição principal, incluindo toda a cadeia de criadores quando o mod for construído em cima de outro derivado.</p>

    <h2>Prazo até 2 de janeiro</h2>
    <p>Os mods enviados a partir de agora já precisam preencher todos os campos novos de permissão e declaração. Para o acervo existente, há um período de transição de 60 dias, que começou nesta terça e termina em 2 de janeiro de 2027. A declaração básica de uso de IA, que já era exigida antes, continua valendo durante esse período. Depois do prazo, mods sem rótulo ou fora da regra serão encaminhados à equipe de confiança e segurança, os autores serão avisados e, se não corrigirem, podem sofrer advertência, restrição de conta ou ter o arquivo removido. O site também pede que a comunidade denuncie mods com IA sem rótulo ou com rótulo errado.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo para quem não joga, a decisão do Nexus Mods é um bom retrato de para onde estão indo as plataformas de conteúdo criado por usuários. Em vez de proibir a IA, elas exigem transparência e passam a cobrar provas de autoria humana. É uma linha parecida com a de quem já discute selos como o <a href="/artigos/content-credentials-c2pa-como-saber-se-imagem-foi-feita-por-ia">Content Credentials (C2PA) para saber se uma imagem foi feita por IA</a>, e com a pressão de editores e criadores por um <a href="/noticias/anthropic-openai-google-microsoft-sinal-unico-robots-txt-bloquear-treino">sinal único para bloquear o uso de conteúdo no treino de modelos</a>.</p>

    <p>Se você vende ou publica trabalho criativo feito com ajuda de IA, como artes, textos, códigos ou vídeos, vale se preparar para esse tipo de exigência em outros lugares: guardar o histórico do projeto, anotar quais ferramentas usou e em que etapa, e saber explicar o que é seu e o que veio da máquina. Isso protege na hora de uma disputa e ajuda a separar seu trabalho do conteúdo produzido em massa. Para entender o lado jurídico no Brasil, o guia sobre <a href="/artigos/direitos-autorais-e-ia-no-brasil-quem-e-dono-do-que-a-ia-cria-e-o-que-esta-em-discussao">quem é dono do que a IA cria</a> e o texto sobre <a href="/artigos/ia-e-direitos-autorais-o-que-criadores-precisam-saber">o que criadores precisam saber de direitos autorais e IA</a> são bons pontos de partida.</p>

    <p>A trava padrão contra treino também chama atenção. Ela inverte a lógica comum na internet, em que o conteúdo fica liberado até alguém pedir para sair: no Nexus Mods, o arquivo já nasce protegido e só entra num modelo com autorização do autor. O mundo dos jogos vem sendo um campo de teste para esse debate, como mostraram o <a href="/noticias/decomp-dev-encerra-indice-ia-ports-jogos">fim do índice do Decomp.dev, que culpou a IA pelos ports de jogos</a> e a <a href="/noticias/claude-code-recusa-recriar-jogos-regra-servidor-desenvolvedores">regra do Claude Code que recusa recriar jogos existentes</a>. A política do Nexus Mods leva a discussão para dentro da maior comunidade de mods para PC e deve servir de referência para outras plataformas.</p>
  `,
};
