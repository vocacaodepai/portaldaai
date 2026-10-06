import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-marca-dagua-texto-chatgpt-ue",
  title: "OpenAI vai colocar marca d'água invisível no texto do ChatGPT na UE",
  summary:
    "Para cumprir o AI Act, a OpenAI vai marcar textos do ChatGPT e do Codex na UE com um padrão invisível que sobrevive a copiar e colar o conteúdo.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/05/openai-will-start-watermarking-chatgpts-text-in-the-eu",
  date: "2026-10-05",
  content: `
    <p>A OpenAI anunciou nesta segunda-feira (5) que vai passar a marcar com uma espécie de assinatura invisível todo texto gerado pelo ChatGPT e pelo Codex para usuários na União Europeia, nas próximas semanas. Segundo reportagem do <a href="https://techcrunch.com/2026/10/05/openai-will-start-watermarking-chatgpts-text-in-the-eu" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>, a tecnologia, batizada de textGrain, não insere nenhum símbolo visível no conteúdo: ela molda sutilmente as escolhas de palavras do modelo, criando um padrão estatístico que um leitor comum não percebe, mas que um detector da própria OpenAI consegue identificar depois.</p>
    <p>A medida nasce de uma obrigação legal, não de uma escolha espontânea da empresa. As regras de transparência do AI Act da União Europeia, que entraram em vigor em 2 de agosto, exigem que empresas de inteligência artificial sinalizem de alguma forma quando um conteúdo foi gerado por máquina. A marcação vai valer para todos os planos do ChatGPT na Europa, para o Codex e, em caráter opcional, para alguns modelos disponíveis via API em outras regiões do mundo, segundo o anúncio da própria OpenAI.</p>

    <h2>Como funciona o textGrain e por que ele é limitado</h2>
    <p>Diferente de uma marca d'água visual, como as que empresas de imagem já aplicam há anos em fotos geradas por IA, o textGrain atua no próprio processo de geração do texto: a cada escolha de palavra, o modelo é levemente inclinado para um conjunto específico de alternativas, formando um padrão estatístico que viaja com o conteúdo mesmo depois de copiado e colado em outro documento. A ideia é parecida com a de sistemas de marcação já usados por outras empresas de IA para imagem e vídeo, como mostrou o <a href="/noticias/ucla-ia-luz-detecta-deepfakes-elight">chip óptico desenvolvido pela UCLA para detectar deepfakes em vídeo</a>, mas aplicada a texto puro, que é tecnicamente mais difícil de marcar sem alterar o sentido da frase.</p>
    <p>A própria OpenAI reconheceu limites técnicos relevantes do método. Editar apenas 10% de um texto gerado pelo ChatGPT já reduz a taxa de detecção de 92% para 66%, e passagens curtas, respostas matemáticas e textos traduzidos para outro idioma são particularmente difíceis de identificar com confiança. Por isso, segundo a empresa, "essas limitações contribuíram para a decisão de oferecer acesso inicial ao detector apenas a pesquisadores aprovados e organizações especializadas", e não ao público em geral, ao menos nesta primeira fase.</p>

    <h2>Uma corrida regulatória que já vinha de outras frentes</h2>
    <p>A exigência da União Europeia não é um caso isolado: o tema da rastreabilidade de conteúdo gerado por IA já apareceu em outras frentes regulatórias recentes, incluindo a tentativa, descartada no encontro entre Trump e Xi Jinping, de alinhar <a href="/noticias/marco-legal-ia-congresso-trump-xi-descarta-regulacao">regras internacionais comuns para inteligência artificial</a>. Sem esse acordo multilateral, cada bloco segue regulando por conta própria, e a União Europeia, historicamente mais rígida em privacidade e proteção de dados desde o GDPR, assumiu a dianteira nesse ponto específico de transparência de conteúdo sintético.</p>
    <p>O movimento também reflete uma pressão crescente sobre as grandes empresas de IA para que demonstrem mais responsabilidade pública, tema que ficou evidente na recente <a href="/noticias/nyc-council-audiencia-ia-coxon-reckless">audiência da Câmara de Vereadores de Nova York, em que executivos de OpenAI, Anthropic, Google e Meta testemunharam sob juramento</a> sobre riscos da tecnologia. Naquele mesmo pacote de projetos de lei em discussão em Nova York, aliás, já constava a exigência de validação externa antes de lançamentos, como mostrou o <a href="/noticias/nyc-council-projetos-lei-regulacao-ia-kill-switch-denuncia">resumo dos dez projetos de lei que a cidade avalia</a>. A marcação de texto é um tipo de exigência mais técnica e específica, mas caminha na mesma direção de maior prestação de contas.</p>

    <h2>Por que isso importa para quem usa IA no Brasil</h2>
    <p>O Brasil não está sob o AI Act europeu, então a obrigação legal não chega automaticamente até aqui. Mas há pelo menos três motivos práticos para quem usa ChatGPT no país prestar atenção nisso. Primeiro, empresas globais como a OpenAI costumam, com o tempo, estender globalmente recursos que primeiro testam sob pressão regulatória em um mercado específico; não é incomum que uma funcionalidade pensada para cumprir lei europeia acabe disponível, ainda que de forma opcional, em outras regiões depois de madura, como ocorreu antes com rótulos de conteúdo de IA em imagens.</p>
    <p>Segundo, para quem usa IA profissionalmente, seja para criar conteúdo, atender clientes ou produzir material de marketing, a marcação invisível já é um indicativo de para onde a indústria está indo: a tendência de rastreabilidade de texto gerado por máquina deve continuar crescendo, e empresas brasileiras que lidam com compliance, educação ou publicação de conteúdo podem precisar, em algum momento, adaptar seus próprios processos a esse tipo de verificação, assim como já aconteceu com imagens, tema abordado no <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">guia do Portal da AI sobre como identificar deepfakes e conteúdo falso</a>.</p>
    <p>Terceiro, e talvez o ponto mais relevante no curto prazo, é que a limitação técnica reconhecida pela própria OpenAI mostra que marca d'água em texto ainda não é uma solução definitiva contra o uso indevido de IA generativa, seja em fraudes, plágio acadêmico ou desinformação. Quem decide, hoje, entre <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> para seu fluxo de trabalho não deve contar com esse tipo de rastreamento como garantia de proteção legal ou editorial, já que basta uma edição parcial do texto para reduzir bastante a chance de detecção.</p>

    <h2>O que observar nas próximas semanas</h2>
    <p>Vale acompanhar três desdobramentos. O primeiro é se a OpenAI vai, de fato, ampliar o acesso ao detector de textGrain além de pesquisadores e organizações aprovadas, o que tornaria a ferramenta útil para professores, editoras e empresas de verificação de fatos que hoje não têm como checar se um texto saiu ou não de um modelo da OpenAI. O segundo é se outras empresas, como Google e Anthropic, vão anunciar sistemas equivalentes para cumprir a mesma exigência europeia, já que o AI Act se aplica a qualquer provedor de IA generativa que opere no bloco, não só à OpenAI.</p>
    <p>O terceiro ponto é regulatório: a União Europeia tem histórico de usar multas pesadas para fazer valer suas próprias regras, como já ocorreu em casos de proteção de dados envolvendo big techs. Se a marcação de texto se revelar insuficiente na prática, por conta das limitações já admitidas pela própria OpenAI, é razoável esperar pressão por exigências mais rígidas nos próximos ciclos de revisão do AI Act, o que tende a influenciar, ainda que indiretamente, como empresas de IA desenham produtos para o resto do mundo, Brasil incluso.</p>
  `,
  faq: [
    {
      question: "A marca d'água do ChatGPT aparece visível no texto?",
      answer:
        "Não. O textGrain é invisível a olho nu: ele influencia sutilmente a escolha de palavras do modelo, criando um padrão que só um detector da OpenAI consegue identificar depois.",
    },
    {
      question: "Essa marcação vale para o ChatGPT usado no Brasil?",
      answer:
        "Por enquanto, a obrigação é específica da União Europeia, por exigência do AI Act. A OpenAI não confirmou expansão automática e obrigatória para outras regiões, incluindo o Brasil.",
    },
    {
      question: "A marca d'água consegue identificar qualquer texto gerado por IA?",
      answer:
        "Não com certeza. A própria OpenAI reconhece que editar só 10% de um texto já reduz a taxa de detecção de 92% para 66%, e que textos curtos, respostas matemáticas ou traduzidos são difíceis de identificar.",
    },
  ],
};
