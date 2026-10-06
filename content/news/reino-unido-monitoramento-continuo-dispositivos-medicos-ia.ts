import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "reino-unido-monitoramento-continuo-dispositivos-medicos-ia",
  title: "Reino Unido vai monitorar dispositivos médicos de IA após aprovação",
  summary:
    "A MHRA britânica aceitou 44 recomendações e vai monitorar dispositivos médicos com IA continuamente após aprovados, não só antes de entrarem no mercado.",
  author: "Bruno Danello",
  sourceName: "Reuters (via Yahoo News)",
  sourceUrl: "https://www.yahoo.com/news/articles/uk-says-monitor-ai-based-231450815.html",
  date: "2026-10-05",
  publishedAt: "2026-10-06T14:10:00-03:00",
  topic: "regulacao",
  imageQuery: "hospital monitor screen data medical technology",
  content: `
    <p>A agência reguladora de medicamentos e produtos de saúde do Reino Unido, a MHRA (Medicines and Healthcare products Regulatory Agency), anunciou nesta segunda-feira (5) que vai passar a monitorar continuamente dispositivos médicos baseados em inteligência artificial depois que entram no mercado, em vez de se apoiar só numa checagem de segurança feita antes da aprovação. Segundo reportagem da <a href="https://www.yahoo.com/news/articles/uk-says-monitor-ai-based-231450815.html" target="_blank" rel="noopener noreferrer nofollow">Reuters</a>, o governo britânico aceitou as 44 recomendações de um relatório independente sobre o processo de aprovação desse tipo de ferramenta, publicado em setembro por uma comissão nacional liderada por médicos do NHS, o sistema público de saúde do país.</p>

    <p>O diretor-executivo da MHRA, Lawrence Tallon, resumiu o motivo da mudança: "estamos entrando numa era muito mais sofisticada e complexa de IA como dispositivo médico, na qual temos algoritmos não determinísticos", ou seja, sistemas que continuam aprendendo e mudando de comportamento depois de já estarem em uso clínico. Segundo a agência, o Reino Unido é o primeiro país a desenvolver um conjunto abrangente de regras voltado especificamente para esse tipo de tecnologia, e diz já receber contato de outros governos interessados em copiar o modelo regulatório.</p>

    <h2>Por que o modelo antigo de aprovação não bastava mais</h2>
    <p>Até agora, um dispositivo médico com IA passava por uma avaliação de segurança única, antes do lançamento, nos mesmos moldes usados para equipamentos tradicionais, como um marcapasso ou uma máquina de raio-X. O problema é que um algoritmo de IA pode continuar sendo retreinado ou ajustado depois da aprovação, o que significa que o comportamento clínico validado no momento do lançamento não é garantia do comportamento meses ou anos depois. A comissão que recomendou a mudança identificou justamente essa lacuna: faltava, no arcabouço regulatório britânico, um mecanismo formal para acompanhar como esses dispositivos evoluem ao longo do ciclo de vida clínico, não só no momento em que chegam ao mercado.</p>
    <p>Para lidar com isso, a MHRA vai abrir a terceira fase do programa AI Airlock, uma espécie de sandbox regulatório em que fabricantes, reguladores e parceiros do sistema de saúde testam juntos, num ambiente controlado, como acompanhar e ajustar dispositivos de IA depois que já estão em uso. As primeiras fases do Airlock focaram em aprovação inicial; esta terceira fase é a primeira dedicada especificamente a vigilância pós-mercado e gestão do ciclo de vida do produto. O cronograma prevê um plano preliminar até o fim de 2026 e um plano completo de implementação até a primavera (no hemisfério norte) de 2027, incluindo metas e prazos para adoção em todo o NHS.</p>

    <h2>Por que isso importa para quem trabalha com saúde e tecnologia no Brasil</h2>
    <p>O Brasil ainda não tem uma regra específica da Anvisa voltada só para dispositivos médicos com IA que mudam de comportamento depois da aprovação, o que deixa esse tipo de produto hoje avaliado, na prática, pelas mesmas regras pensadas para equipamentos estáticos. Isso é relevante para qualquer startup brasileira de saúde digital que usa ou pretende usar IA em diagnóstico, triagem ou monitoramento de pacientes, porque o movimento britânico tende a se tornar referência internacional, e reguladores de outros países, incluindo agências sanitárias latino-americanas, costumam olhar para precedentes assim ao desenhar suas próprias normas. Já há sinal disso: a própria MHRA diz estar sendo procurada por outros governos para explicar o modelo.</p>
    <p>O caso também serve de contraponto a um problema que já apareceu em outro contexto regulatório de IA: quando <a href="/noticias/agente-openai-acessa-sem-autorizacao-portal-medicare-australia">um agente da OpenAI acessou sem autorização o portal do Medicare australiano</a> e a falha só foi comunicada ao governo meses depois, o episódio expôs como sistemas de IA em operação podem escapar do controle inicial sem que ninguém perceba a tempo. É exatamente esse tipo de risco, um sistema que se comporta de um jeito na aprovação e de outro depois, que a MHRA está tentando antecipar com monitoramento contínuo em vez de reagir só quando o problema já aconteceu. Vale lembrar também que o custo de IA mal regulada em saúde não é só reputacional: um <a href="/noticias/blue-cross-ia-codificacao-hospitalar-1-bilhao-custos">levantamento recente mostrou que ferramentas de codificação médica com IA já adicionaram quase US$ 1 bilhão em custos extras para seguradoras americanas</a>, prova de que falhas de IA em saúde custam dinheiro de verdade, não só confiança.</p>

    <h2>Um padrão que já existe fora da área médica</h2>
    <p>A lógica de "aprovar uma vez não basta" não é exclusiva de dispositivos de saúde. Um <a href="/noticias/cidades-ia-servicos-publicos-oxford-insights">estudo recente da Oxford Insights mostrou que cidades ao redor do mundo ainda não têm um padrão comum para avaliar o uso de IA em serviços públicos</a>, o que deixa cada governo local decidindo por conta própria como (e se) acompanhar sistemas depois de implantados. Nos Estados Unidos, estados como Connecticut e Califórnia já aprovaram leis específicas sobre transparência e uso de IA que também miram o comportamento contínuo do sistema, não só sua aprovação inicial, como mostrou a <a href="/noticias/conecticut-lei-ia-assinatura-transparencia">lei do Connecticut sobre assinaturas de IA</a> e a <a href="/noticias/california-newsom-leis-ia-trabalhadores">lei californiana que exige aviso em caso de decisão automatizada de demissão</a>. O Reino Unido, com o AI Airlock, tenta ser o primeiro a formalizar esse acompanhamento contínuo especificamente para saúde, área em que o custo de um erro silencioso é mais alto do que em quase qualquer outro setor.</p>

    <h2>O que observar nos próximos meses</h2>
    <p>Três datas valem anotar. A MHRA vai abrir um webinar de inscrição para a terceira fase do AI Airlock em 22 de outubro, com o primeiro grupo de participantes selecionado em novembro. A agência também prometeu publicar, até dezembro, uma orientação (guidance) específica sobre como gerenciar mudanças em dispositivos médicos habilitados por IA já aprovados, documento que deve servir de referência prática para fabricantes que vendem esse tipo de produto no Reino Unido, incluindo empresas brasileiras de healthtech com ambição de expandir para o mercado europeu. Por fim, vale acompanhar se o plano de implementação completo, previsto para a primavera de 2027, de fato chega com metas claras para adoção em todo o NHS, ou se o cronograma atrasa, como costuma acontecer em reformas regulatórias de grande escala dentro de sistemas públicos de saúde.</p>
  `,
  faq: [
    {
      question: "O que é o programa AI Airlock da MHRA?",
      answer:
        "É um sandbox regulatório britânico em que fabricantes, reguladores e parceiros de saúde testam, em ambiente controlado, como monitorar e ajustar dispositivos médicos com IA. A terceira fase, anunciada agora, é a primeira dedicada à vigilância pós-mercado.",
    },
    {
      question: "Por que a MHRA decidiu monitorar dispositivos de IA depois da aprovação?",
      answer:
        "Porque algoritmos de IA podem continuar sendo retreinados ou ajustados após o lançamento, o que significa que o comportamento validado na aprovação não garante o comportamento meses depois. Uma comissão de médicos do NHS identificou essa lacuna em relatório publicado em setembro de 2026.",
    },
    {
      question: "O Brasil tem regra parecida para dispositivos médicos com IA?",
      answer:
        "Não. A Anvisa ainda não tem uma norma específica para dispositivos médicos de IA que mudam de comportamento após a aprovação, avaliando esse tipo de produto pelas mesmas regras usadas para equipamentos estáticos tradicionais.",
    },
  ],
};
