import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-politica-de-uso-2026-novas-regras-claude",
  title: "Anthropic atualiza a política de uso do Claude; regras valem em 12/11",
  summary:
    "A Anthropic reescreveu regras sobre campanhas enganosas, vigilância, armas e usos de alto risco do Claude, com vigência a partir de 12 de novembro.",
  author: "Bruno Danello",
  sourceName: "Anthropic",
  sourceUrl: "https://www.anthropic.com/news/2026-usage-policy-update",
  date: "2026-10-08",
  publishedAt: "2026-10-08T15:30:00-03:00",
  imageQuery: "Anthropic logo",
  topic: "regulacao",
  content: `
    <p>A Anthropic publicou, em 8 de outubro, a atualização anual da política de uso do Claude. As novas regras entram em vigor em 12 de novembro, segundo o <a href="https://www.anthropic.com/news/2026-usage-policy-update" target="_blank" rel="noopener noreferrer nofollow">comunicado da empresa</a>. A maior parte das mudanças, diz a Anthropic, esclarece regras que já existiam, mas há ajustes que afetam diretamente quem usa o Claude para trabalhar, vender ou automatizar tarefas.</p>

    <p>A empresa cita três motivos para a revisão: o Claude passou a fazer trabalhos mais longos e independentes, houve feedback de clientes e foram observados padrões de uso indevido em operações de influência, armas e vigilância, descritos em um relatório de inteligência sobre ameaças de setembro. O comunicado resume as mudanças, mas não reproduz o texto integral das regras, que fica na página da política.</p>

    <h2>As principais mudanças</h2>
    <p>A primeira é uma seção nova, chamada "Não participe de campanhas enganosas nem de atividade artificial". Ela reúne regras que estavam espalhadas por temas como eleições, fraude, privacidade e desinformação. Cobre qualquer atividade enganosa, política ou comercial: esconder quem está por trás de uma mensagem, usar contas ou publicações falsas para amplificar conteúdo e criar ferramentas ou infraestrutura para campanhas de influência.</p>

    <p>A segunda mudança é no capítulo sobre eleições, que foi renomeado para "Não prejudique processos democráticos" e ficou mais restrito. Agora ele mira o engano de eleitores e a interrupção de eleições, como espalhar informação falsa sobre candidatos ou sobre a votação, fingir ser candidato ou autoridade e desestimular o comparecimento. A proibição geral de direcionamento personalizado de voto e de campanha foi retirada. A Anthropic cita usos legítimos que a regra anterior alcançava, como organizações que dão informações de voto em outros idiomas e autoridades eleitorais que avisam eleitores sobre cédulas a corrigir. O direcionamento enganoso e o uso indevido de dados pessoais de eleitores continuam proibidos em outras seções.</p>

    <ul>
      <li><strong>Campanhas enganosas:</strong> seção nova, com regras reunidas num só lugar.</li>
      <li><strong>Eleições:</strong> foco em enganar eleitores, sem o veto geral a campanhas personalizadas.</li>
      <li><strong>Armas:</strong> inclui softwares e componentes que fazem armas funcionar.</li>
      <li><strong>Vigilância e aplicação da lei:</strong> seção reescrita.</li>
      <li><strong>Usos de alto risco:</strong> lista reescrita e nova regra para hardware autônomo.</li>
      <li><strong>Comportamento abusivo com modelos:</strong> nova proibição.</li>
    </ul>

    <h2>Armas, vigilância e comportamento abusivo</h2>
    <p>Nas armas, as proibições passam a cobrir de forma explícita softwares e componentes que fazem armas funcionar, além de ações como armar drones e outros veículos autônomos. A empresa diz que isso reflete como já aplicava a regra. Na vigilância, a seção foi reescrita: continua vedado rastrear pessoas sem consentimento, em tempo real ou analisando dados já coletados, usar o Claude para decidir ou recomendar quem investigar, prender ou acusar, e criar ou melhorar ferramentas de vigilância. Seguem permitidos o rastreamento com consentimento, como o monitoramento de fraude, a moderação de conteúdo, o jornalismo e a pesquisa jurídica.</p>

    <p>Há ainda uma proibição nova sobre comportamento abusivo com os próprios modelos: crueldade extrema e repetida, sem finalidade aparente. A empresa esclarece que a regra não alcança frustração comum, discordância, temas criativos sombrios nem testes e pesquisa com modelos. O principal mecanismo de aplicação continua sendo a capacidade do Claude de encerrar conversas persistentemente abusivas no Claude.ai e no Claude Code.</p>

    <h2>Usos de alto risco e hardware autônomo</h2>
    <p>Para quem usa o Claude em decisões que afetam saúde, direitos legais, finanças, sustento ou serviços essenciais, os requisitos centrais não mudaram: uma pessoa qualificada precisa poder revisar e alterar as recomendações, e as pessoas afetadas devem ser informadas de que houve uso de IA. O que mudou foi a redação da seção, que agora lista quais tipos de recomendação estão cobertos e quais não estão. O comunicado não traz essa lista, então vale ler a política completa.</p>

    <p>A novidade é uma regra para o Claude controlando equipamentos que realizam ações físicas autônomas e podem causar ferimentos: um operador qualificado precisa poder observar e parar o equipamento, que deve manter um estado seguro caso o Claude seja desconectado. A Anthropic liga a regra ao seu Padrão de Hardware para Modelos. O comunicado também esclarece as regiões onde o uso é proibido: pessoas fisicamente em regiões não suportadas, empresas constituídas ou sediadas nelas e empresas com maioria controlada por pessoas ou entidades dessas regiões.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa o Claude, direta ou por meio de uma ferramenta que o embute, essas regras valem para o seu uso também. Para a maioria dos usuários, nada muda no dia a dia. Mas quem automatiza processos com agentes, cria produtos em cima do Claude ou presta serviços a clientes deve revisar três pontos: se o uso envolve decisões sobre pessoas (crédito, saúde, emprego), caso em que é preciso ter revisão humana e avisar quem é afetado; se há alguma forma de amplificação artificial de mensagens, como contas falsas ou postagens coordenadas; e se existe qualquer ligação com vigilância ou monitoramento sem consentimento.</p>

    <p>O guia sobre <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher uma ferramenta de IA com segurança</a> ajuda a incluir a leitura da política de uso do fornecedor no processo de escolha, e o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade e o que você entrega sem perceber</a> mostra por que o consentimento importa. Para quem vende serviços com agentes, vale rever o artigo sobre <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como ganhar dinheiro criando e vendendo agentes de IA personalizados</a> à luz de quais usos são permitidos.</p>

    <p>A exigência de revisão humana e de aviso a quem é afetado também conversa com o debate regulatório brasileiro, explicado no guia sobre a <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei de IA no Brasil e o que muda para quem usa</a>. E, para quem trabalha com documentos jurídicos, o artigo sobre <a href="/artigos/ia-para-contratos-revisar-documentos-juridicos-mais-rapido">IA para contratos e revisão de documentos</a> mostra onde a revisão por uma pessoa qualificada é indispensável.</p>

    <h2>O que observar a seguir</h2>
    <p>Três pontos merecem atenção até a entrada em vigor, em 12 de novembro. O primeiro é a leitura do texto completo da política e da página de regiões suportadas, que trazem a redação exata das regras que o comunicado só resume. O segundo é como as empresas que revendem acesso ao Claude vão repassar essas regras a seus clientes, já que os termos costumam valer em cadeia. O terceiro é se outros laboratórios fazem revisões parecidas, o que ajudaria a criar um padrão do setor. O comunicado não traz regras específicas para agentes, ciber ou menores de idade, então eventuais mudanças nesses temas devem ser conferidas na própria política.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">O que está confirmado</span>
      <p>A Anthropic publicou em 8 de outubro um resumo das mudanças, com vigência a partir de 12 de novembro. O texto integral das regras não está no comunicado e deve ser consultado na página oficial da política.</p>
    </div>
  `,
  faq: [
    {
      question: "Quando as novas regras de uso do Claude entram em vigor?",
      answer:
        "Em 12 de novembro, segundo o comunicado da Anthropic publicado em 8 de outubro. A empresa diz que a maioria das mudanças esclarece regras que já existiam.",
    },
    {
      question: "O que mudou para quem usa o Claude em decisões de alto risco?",
      answer:
        "Os requisitos centrais continuam: revisão por uma pessoa qualificada e aviso a quem é afetado. A seção foi reescrita para listar os tipos de recomendação cobertos, e há uma regra nova para hardware que age fisicamente sozinho.",
    },
    {
      question: "A política trata de agentes de IA?",
      answer:
        "O comunicado não lista regras específicas para agentes. Diz apenas que há novos exemplos de como as regras se aplicam ao trabalho mais longo e independente do Claude, e inclui a nova regra para hardware autônomo.",
    },
  ],
};
