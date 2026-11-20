import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "goldman-sachs-restringe-ferramentas-ia-codigo-traders-bankers",
  title: "Goldman Sachs tira ferramentas de IA para código de traders e bankers",
  summary: "O Goldman Sachs limitou o acesso a ferramentas de IA para programar, como Claude Code, a engenheiros. Traders e bankers que usavam perderam o acesso, diz a Bloomberg.",
  author: "Bruno Danello",
  sourceName: "The Decoder, Bloomberg",
  sourceUrl: "https://the-decoder.com/goldman-sachs-pulls-ai-coding-tools-from-traders-and-bankers/",
  publishedAt: "2026-11-02T20:40:00-03:00",
  topic: "negocios",
  imageQuery: "Goldman Sachs headquarters New York",
  coverImage: {
    url: "/images/covers/goldman-sachs-restringe-ferramentas-ia-codigo-traders-bankers.webp",
    width: 1280,
    height: 720,
    credit: "Eden, Janine and Jim from New York City (CC BY 2.0) / Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File%3AGoldman%20Sachs%20Headquarters%20(53876567922).jpg",
  },
  date: "2026-11-02",
  content: `
    <p>O Goldman Sachs recuou no uso de ferramentas de IA para programar entre quem não é engenheiro. Segundo uma reportagem da Bloomberg publicada na segunda-feira (2) e resumida pelo <a href="https://the-decoder.com/goldman-sachs-pulls-ai-coding-tools-from-traders-and-bankers/" target="_blank" rel="noopener noreferrer nofollow">The Decoder</a>, a maior parte dos funcionários perdeu o acesso a esse tipo de ferramenta. Diretrizes internas de outubro, citadas pela Bloomberg, deixam o uso só para engenheiros. Entre as ferramentas afetadas estariam o Claude Code, da Anthropic, e produtos de programação da Microsoft ligados ao GitHub.</p>

    <p>A mudança atinge traders e bankers, que vinham usando esses assistentes havia meses para acompanhar fluxos de negociação e criar conteúdo. A reportagem diz que a decisão causou frustração dentro do banco. Não há, na matéria, número de pessoas afetadas, e o Goldman não detalhou incidentes específicos de risco.</p>

    <h2>O que o banco disse</h2>
    <p>O porta-voz Nick Carcaterra afirmou à Bloomberg que a decisão leva em conta "uma variedade de fatores, incluindo produtividade e gestão de risco". Ele disse também que a fase de experimentação acabou e que o banco quer concentrar as ferramentas em quem está "mais bem preparado para tirar proveito delas no longo prazo". Ou seja, o Goldman não está abandonando a IA de programação. Está escolhendo quem pode usá-la.</p>

    <p>O contraste com o discurso de poucos meses atrás é grande. Em julho, o diretor de tecnologia do banco, Marco Argenti, elogiou publicamente o "vibe coding" feito por pessoas sem formação técnica. O fluxo descrito na época era simples: um trader ou alguém da gestão de ativos montava um protótipo rápido com ajuda de IA, e um engenheiro depois transformava aquilo em algo pronto para produção. Pelo que a reportagem relata, esse não é mais o plano.</p>

    <h2>Por que um banco faria isso</h2>
    <p>A reportagem não explica o motivo em detalhe, então o que segue é leitura nossa, e não informação confirmada pelo banco. Um código escrito por alguém sem experiência em engenharia pode ter falhas de segurança, tratar dados sensíveis de forma errada ou rodar sem revisão. Num banco de investimento, isso se soma a regras de conformidade, a dados de clientes e a sistemas que movimentam dinheiro. Quanto mais gente cria seus próprios scripts, maior a superfície que a área de risco precisa vigiar.</p>

    <p>Há também a questão de custo e de controle. Ferramentas de agentes de código consomem muita capacidade, e liberar para milhares de pessoas sem critério sai caro. Restringir a um grupo menor facilita medir o retorno. O próprio porta-voz usou a palavra produtividade, o que sugere que a conta de quanto valor essas ferramentas entregavam fora das equipes técnicas não fechou.</p>

    <h2>O que isso diz sobre IA em empresas grandes</h2>
    <p>O caso mostra um padrão que aparece em outras empresas: depois de uma fase de liberdade, a área de tecnologia e a de risco puxam o freio e organizam quem pode usar o quê. Já mostramos o lado oposto, de adoção em massa, quando o Barclays liberou o Claude Code para milhares de funcionários, em <a href="/noticias/barclays-anthropic-claude-code-16-mil-funcionarios">Barclays e Anthropic levam o Claude Code a 16 mil funcionários</a>. O Goldman vai na direção contrária, ao menos para quem não é da engenharia.</p>

    <p>Também vale lembrar que ferramentas de código com autonomia têm riscos próprios, como comandos executados sem aprovação. Um exemplo está em <a href="/noticias/claude-code-variavel-rm-sem-aprovacao-skip-permissions">Claude Code e a variável que apaga arquivos sem pedir aprovação</a>. Para um banco, um erro desse tipo em ambiente errado custa muito mais do que em um projeto pessoal.</p>

    <p>O Goldman é, ainda, um dos grandes investidores em IA fora do próprio banco. Contamos o programa de pequenas empresas da instituição em <a href="/noticias/goldman-sachs-500-milhoes-instituto-ia-pequenas-empresas">Goldman Sachs destina US$ 500 milhões a um instituto de IA para pequenas empresas</a>. Ou seja, o recuo não é uma rejeição da tecnologia, e sim uma decisão sobre governança dentro de casa.</p>

    <h2>Por que isso importa para você</h2>
    <p>Você não trabalha no Goldman, mas a lógica vale para qualquer empresa que está liberando IA para a equipe.</p>

    <ul>
      <li><strong>Se você usa IA para programar ou automatizar no trabalho:</strong> pergunte à sua empresa quais ferramentas são permitidas e para quais dados. Usar uma conta pessoal com informação da empresa pode virar problema, mesmo que funcione bem.</li>
      <li><strong>Se você não é programador e cria scripts com IA:</strong> trate o que sai dali como protótipo. Peça revisão a alguém técnico antes de depender daquilo em rotina de cliente, financeiro ou dados pessoais.</li>
      <li><strong>Se você tem uma pequena empresa:</strong> defina regras simples desde o início: quem pode usar, em quais tarefas, com quais dados e quem revisa o resultado. É mais fácil criar a regra agora do que retirar o acesso depois, como o banco precisou fazer.</li>
      <li><strong>Se você quer crescer na carreira:</strong> saber usar IA com critério, e não só rápido, é diferencial. Veja o guia <a href="/artigos/como-migrar-de-carreira-para-area-de-ia">como migrar de carreira para a área de IA</a> para montar um plano.</li>
    </ul>

    <div class="callout-box callout-tip">
      <span class="callout-label">Cuidado prático</span>
      <p>Antes de colar código, planilhas ou documentos internos em qualquer assistente de IA, confirme a política da sua empresa e use a conta corporativa quando houver uma. Isso protege você e evita surpresas se a regra mudar de um dia para o outro.</p>
    </div>

    <h2>O que ainda não se sabe</h2>
    <p>A reportagem original da Bloomberg e o resumo do The Decoder não dizem quantas pessoas perderam acesso, quais incidentes, se houve algum, motivaram a mudança, nem se a restrição é permanente. Também não há comentário do Goldman além da declaração do porta-voz. Vale acompanhar se o banco volta a liberar ferramentas para outras áreas sob regras mais rígidas, e se outros bancos fazem movimento parecido. Esta notícia se apoia em fonte secundária, a partir de uma reportagem da Bloomberg.</p>

    <p>Enquanto isso, o episódio serve de lembrete prático: o ganho de produtividade com IA de programação existe, mas só se sustenta quando vem com revisão, limites claros e responsabilidade definida.</p>
  `,
};
