import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "justica-eua-ia-copyright-fair-use-westlaw",
  title: "Tribunal dos EUA nega uso justo a IA treinada com dados da Westlaw",
  summary:
    "O Terceiro Circuito confirmou que a Ross Intelligence violou direitos autorais da Westlaw ao treinar sua IA jurídica, na primeira decisão de apelação dos EUA sobre uso justo no treinamento de modelos.",
  author: "Bruno Danello",
  sourceName: "Law360",
  sourceUrl:
    "https://www.law360.com/articles/2531563/breaking-3rd-circ-affirms-thomson-reuters-westlaw-ai-copyright-win",
  date: "2026-09-30",
  content: `
    <p>O Tribunal de Apelações do Terceiro Circuito dos Estados Unidos confirmou nesta terça-feira (29) a vitória da Thomson Reuters contra a startup Ross Intelligence, no caso <em>Thomson Reuters Corp. v. Ross Intelligence Inc.</em>. Segundo reportagem da <a href="https://www.law360.com/articles/2531563/breaking-3rd-circ-affirms-thomson-reuters-westlaw-ai-copyright-win" rel="noopener noreferrer nofollow">Law360</a>, a decisão manteve o entendimento de que a Ross infringiu direitos autorais ao usar cabeçalhos ("headnotes") extraídos da Westlaw, plataforma de pesquisa jurídica da Thomson Reuters, para treinar uma ferramenta de busca jurídica baseada em IA.</p>
    <p>O caso se tornou a primeira decisão de um tribunal de apelação nos Estados Unidos a enfrentar diretamente a pergunta que mais preocupa desenvolvedores de modelos de linguagem: usar material protegido por direitos autorais para treinar um sistema de IA pode ser considerado uso justo (fair use)? A resposta do Terceiro Circuito foi não, ao menos nas circunstâncias específicas do caso, mantendo a decisão de primeira instância de um tribunal federal de Delaware que já havia condenado a Ross.</p>

    <h2>Como o caso chegou até aqui</h2>
    <p>A Ross Intelligence era uma startup que desenvolvia um mecanismo de busca jurídica alimentado por IA, pensado como alternativa mais barata à própria Westlaw. Para treinar o sistema, a empresa contratou terceiros para produzir milhares de perguntas e respostas jurídicas baseadas nos headnotes da Westlaw, resumos curtos escritos por editores da Thomson Reuters que sintetizam pontos de decisões judiciais e ajudam advogados a localizar precedentes relevantes rapidamente. A Thomson Reuters alegou que esse material era protegido por direitos autorais e que a Ross se apropriou dele sem licença para construir um concorrente direto.</p>
    <p>Em 2025, um juiz federal já havia decidido a favor da Thomson Reuters em julgamento sumário, rejeitando o argumento de fair use da Ross e concluindo que os headnotes tinham originalidade suficiente para merecer proteção autoral, e que o uso feito pela Ross era substitutivo, e não transformador. A Ross recorreu, e o Terceiro Circuito agora confirma esse entendimento em segunda instância, consolidando o precedente. A startup, que fechou as portas ainda em 2025 citando os custos do próprio litígio, não é a única a enfrentar esse tipo de processo: a Anthropic também responde a ações judiciais movidas por editoras e gravadoras, incluindo a <a href="/noticias/sony-warner-processam-anthropic-direitos-autorais">disputa movida pela Sony Music e Warner Chappell</a> e as duas ações movidas pela <a href="/noticias/universal-sony-processam-suno-novamente-modelo-v6">Universal e Sony contra a Suno</a> por uso não autorizado de obras musicais no treinamento de modelos.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa, vende ou constrói produtos em cima de modelos de IA no Brasil, esse precedente não fica só nos Estados Unidos: boa parte das ferramentas usadas por aqui, de assistentes de escrita a geradores de imagem, foi treinada com dados coletados globalmente, incluindo material de veículos, editoras e plataformas brasileiras. Uma decisão que reduz a margem de defesa de "uso justo" no treinamento de IA pressiona as empresas de tecnologia a fechar mais acordos de licenciamento, como já fizeram a <a href="/noticias/universal-music-elevenlabs-plataforma-ia-musical-licenciada">Universal Music com a ElevenLabs</a>, e pode elevar o custo de acesso a esses modelos com o tempo, à medida que o licenciamento de dados vira linha de custo relevante.</p>
    <p>Para quem <a href="/artigos/como-vender-artes-e-fotos-criadas-com-ia-generativa">vende artes e conteúdo criado com IA generativa</a> ou usa esse tipo de ferramenta para produzir textos, imagens e vídeos comercialmente, o caso também serve de alerta na direção oposta: reforça que treinar um modelo com conteúdo de terceiros sem licença carrega risco jurídico real, mesmo quando o resultado final parece suficientemente transformado. Quem constrói produto próprio de IA, por exemplo treinando um modelo especializado em cima de uma base de dados específica, como jurídica, médica ou de determinado nicho de mercado, precisa verificar com mais cuidado a origem e a licença desses dados antes de comercializar o resultado.</p>

    <h2>O que muda na prática para empresas que constroem IA</h2>
    <p>A decisão não proíbe todo uso de dados protegidos no treinamento de IA, mas estreita bastante o espaço de defesa quando o produto final compete diretamente com a fonte original dos dados, como acontecia entre a Ross e a própria Westlaw. Tribunais americanos vinham dando decisões mistas sobre fair use no treinamento de IA em primeira instância, então essa é a primeira vez que um tribunal de apelação fixa entendimento sobre o tema, o que tende a servir de referência para outros processos em andamento contra grandes empresas de IA, incluindo os movidos contra a própria Anthropic.</p>
    <p>Vale lembrar que esse caso trata de um cenário específico, uso de conteúdo jurídico protegido para treinar um concorrente direto, e que o resultado pode ser diferente em disputas envolvendo outros tipos de conteúdo ou usos menos diretamente competitivos. Ainda assim, o precedente já é citado por advogados que representam editoras, gravadoras e outros detentores de direitos autorais em ações contra empresas de IA, e deve pesar nas negociações de licenciamento que vêm acontecendo em paralelo aos processos judiciais.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Vale acompanhar se outras empresas de IA vão tentar recorrer a essa decisão em casos que já correm em outras jurisdições americanas, e se ela vai influenciar como tribunais tratam disputas semelhantes envolvendo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">modelos de linguagem generalistas</a>, cujo uso de dados de treinamento costuma ser mais difuso do que o caso específico da Westlaw. Também é um bom momento para quem usa IA profissionalmente revisar os termos de uso das ferramentas que contrata, verificando se a empresa por trás delas já fechou acordos de licenciamento de dados ou ainda enfrenta processos em aberto que possam afetar a disponibilidade do serviço no futuro.</p>
    <div class="callout-box">
      <span class="callout-label">Resumo rápido</span>
      O Terceiro Circuito confirmou que a Ross Intelligence infringiu direitos autorais da Westlaw ao treinar sua IA jurídica com os headnotes da plataforma, na primeira decisão de apelação nos EUA a rejeitar o argumento de uso justo no treinamento de modelos de IA.
    </div>
  `,
  faq: [
    {
      question: "O que o Terceiro Circuito decidiu no caso Thomson Reuters contra Ross Intelligence?",
      answer:
        "Confirmou que a Ross Intelligence infringiu direitos autorais da Thomson Reuters ao usar os headnotes da Westlaw, resumos editoriais de decisões judiciais, para treinar sua ferramenta de busca jurídica baseada em IA, rejeitando o argumento de uso justo (fair use).",
    },
    {
      question: "Por que essa decisão é importante para o setor de IA?",
      answer:
        "É a primeira decisão de um tribunal de apelação nos Estados Unidos sobre se treinar IA com conteúdo protegido por direitos autorais pode ser considerado uso justo, servindo de precedente para outros processos em andamento contra empresas de IA.",
    },
    {
      question: "Isso significa que toda IA treinada com dados protegidos é ilegal?",
      answer:
        "Não necessariamente. O caso trata de uma situação específica, uso de material protegido para treinar um produto que competia diretamente com a fonte original, e o resultado pode variar conforme o tipo de conteúdo e o uso feito pela IA em outros casos.",
    },
  ],
};
