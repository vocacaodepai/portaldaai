import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-classificador-imagens-abuso-infantil-chatgpt-suspensao",
  title: "OpenAI libera detector de abuso infantil e pune pedidos no ChatGPT",
  summary:
    "Classificador grátis feito com o NCMEC acha imagens novas e geradas por IA; no ChatGPT, quem tenta sexualizar crianças leva aviso e 24 horas de bloqueio.",
  author: "Bruno Danello",
  sourceName: "TechCrunch, OpenAI",
  sourceUrl: "https://techcrunch.com/2026/11/16/openai-releases-a-new-image-classifier-and-chatgpt-warnings-to-combat-csam/",
  date: "2026-11-18",
  publishedAt: "2026-11-18T07:10:00-03:00",
  topic: "seguranca",
  imageQuery: "OpenAI logo",
  content: `
    <p>A OpenAI anunciou nesta segunda-feira, 16 de novembro, um pacote de ferramentas contra material de abuso sexual infantil (conhecido pela sigla em inglês CSAM). A peça central é um classificador de imagens, desenvolvido com o Centro Nacional para Crianças Desaparecidas e Exploradas dos Estados Unidos (NCMEC), que a empresa vai oferecer de graça, pela API, a organizações aprovadas. Junto com ele vêm avisos e bloqueios temporários no ChatGPT, um guia para desenvolvedores e ferramentas para a polícia. Os detalhes foram publicados pela OpenAI e reportados pelo TechCrunch.</p>
    <p>O anúncio chega num momento em que a empresa responde a vários processos que a acusam de expor menores a riscos, como o do <a href="/noticias/texas-processa-openai-altman-chatgpt-menores">Texas</a> e o da <a href="/noticias/florida-processa-openai-menores-supervisao-independente">Flórida</a>, e depois de a Common Sense Media classificar o <a href="/noticias/common-sense-media-chatgpt-teens-risco-inaceitavel">ChatGPT para adolescentes como "risco inaceitável"</a>.</p>

    <h2>O que se sabe</h2>
    <p>O classificador analisa imagens estáticas e procura sinais visuais de abuso. A diferença para a ferramenta mais usada hoje no setor, a comparação de hashes (uma espécie de impressão digital do arquivo, conferida contra listas de imagens já catalogadas), é que ele tenta reconhecer imagens que nunca foram vistas antes, incluindo as criadas por IA. A comparação de hashes só acha o que já está no catálogo; uma imagem gerada ontem por um modelo de imagem passa direto por ela.</p>
    <p>Segundo a ficha técnica do modelo descrita pela OpenAI, a ferramenta devolve duas notas por imagem: uma para "provável CSAM" e outra para "provável CSAM gerado por IA". A nota não é um veredito. Ela serve para indicar a revisores humanos o que olhar primeiro, e a própria empresa diz que um resultado sozinho não confirma nada nem gera denúncia automática: a revisão humana continua obrigatória.</p>
    <p>Nos testes com parceiros, a OpenAI afirma que o classificador marcou 48% menos imagens que a ferramenta anterior e encontrou o mesmo número de imagens de abuso. Na prática, isso significa menos alarme falso e menos material traumático para a equipe de moderação revisar. As imagens marcadas tinham duas vezes mais chance de ser de fato abusivas. A OpenAI não informou o tamanho da amostra nem o período do teste.</p>
    <p>O acesso é gratuito, mas fechado. A empresa diz que vai liberar a ferramenta a companhias selecionadas, que precisam pedir por um formulário, passar por verificação de identidade e aceitar os termos do programa. A distribuição terá apoio da Tech Coalition, associação de empresas de tecnologia contra exploração infantil, e da ROOST, iniciativa de ferramentas abertas de segurança. A OpenAI afirma ainda que as imagens enviadas à API não ficam guardadas e não são usadas para treinar modelos.</p>
    <p>No ChatGPT, quem tentar comandos que sexualizem crianças passa a ver uma tela de aviso que direciona para apoio especializado para interromper esse comportamento, e a conta fica suspensa por 24 horas. Reincidência pode levar a restrições mais longas, ao encerramento da conta e a denúncia às autoridades. O ChatGPT já bloqueava esse tipo de pedido; a novidade é a consequência imediata para o usuário. A OpenAI diz que desenhou as mensagens com as organizações Protect Children e Lucy Faithfull Foundation e com Joel Scanlan, pesquisador da Universidade da Tasmânia que avaliou de forma independente um teste de mensagens de dissuasão.</p>
    <p>O pacote inclui também um guia para desenvolvedores que usam modelos da OpenAI, com recomendações de prevenção, detecção (comparação de hashes mais classificadores para imagens novas) e registro para denunciar casos ao NCMEC, além de recursos de IA e treinamento para investigadores da polícia.</p>

    <h2>O que ainda não está confirmado</h2>
    <p>A OpenAI não publicou a lista de empresas que já têm acesso ao classificador nem os critérios de aprovação. Também não há avaliação independente do desempenho: os números de 48% e de "duas vezes mais chance" vêm dos testes da própria empresa com parceiros.</p>
    <p>A ficha técnica, segundo o resumo divulgado, admite limites importantes. A precisão foi bem menor nos testes com tráfego real do ChatGPT do que no laboratório. O acerto cai muito em imagens de bebês e varia conforme o tom de pele e o sexo das crianças retratadas, com desempenho pior em alguns grupos. Vídeo ainda não foi testado. E resultado medido no tráfego da OpenAI não garante o mesmo desempenho em outro serviço.</p>
    <p>Não está claro se e quando os avisos e a suspensão de 24 horas valem para contas corporativas e educacionais, nem quando chegam a todos os países, incluindo o Brasil. A OpenAI também não disse se pretende abrir o classificador a plataformas menores fora dos Estados Unidos.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para pais e mães, a notícia confirma uma mudança que já vinha acontecendo: o risco não está só em imagens antigas circulando, mas em imagens novas geradas por IA a partir de fotos comuns, inclusive as que a família posta nas redes. O caso do Grok, usado para criar imagens sexualizadas sem consentimento, mostrou o tamanho do problema. Ferramentas que reconhecem material inédito ajudam plataformas a derrubar esse conteúdo mais rápido, mas não substituem cuidado com o que se publica dos filhos. O guia do Portal da AI sobre o <a href="/artigos/eca-digital-e-ia-o-que-muda-para-pais-criancas-chatbots-e-apps">ECA Digital e a IA</a> explica o que a lei brasileira já exige de apps e chatbots.</p>
    <p>Para quem desenvolve ou mantém produto com upload ou geração de imagem, seja um app, um marketplace ou uma ferramenta de edição, a notícia é prática: existe agora um classificador gratuito de um grande fornecedor, além da comparação de hashes. Quem constrói em cima da API da OpenAI deve ler o guia para desenvolvedores, porque ele descreve o que a empresa espera de quem usa seus modelos, e esse padrão tende a virar exigência contratual e regulatória. Proteção de menores é um dos pontos mais cobrados pelo ECA Digital, e mostrar que o produto tem detecção e canal de denúncia conta.</p>
    <p>A análise do Portal da AI é que a mudança mais visível para o usuário comum é a suspensão no ChatGPT: pela primeira vez, a OpenAI pune de forma automática e imediata a tentativa, e não só bloqueia a resposta. Já o classificador é um avanço técnico real, mas os limites que a própria empresa admite, em especial a queda de acerto com bebês e as diferenças entre grupos de crianças, mostram que ele é uma camada a mais, não a solução. O que vale acompanhar é a primeira avaliação independente e a chegada da ferramenta a plataformas fora dos Estados Unidos.</p>
    <p>Se você encontrar material de abuso infantil na internet, não compartilhe, nem para denunciar. No Brasil, a denúncia pode ser feita de forma anônima pelo Disque 100 ou pelo canal da SaferNet. Para avaliar se uma ferramenta de IA que você usa leva segurança a sério, o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> ajuda.</p>
  `,
  faq: [
    {
      question: "O que é o classificador de imagens da OpenAI contra abuso infantil?",
      answer:
        "É um modelo, feito com o NCMEC, que analisa imagens estáticas e dá notas de probabilidade de abuso sexual infantil, inclusive para material gerado por IA. A nota orienta revisores humanos e não gera denúncia automática.",
    },
    {
      question: "Qualquer empresa pode usar o classificador?",
      answer:
        "Não. O acesso pela API é gratuito, mas só para organizações aprovadas, que pedem por formulário, passam por verificação de identidade e aceitam os termos do programa. A OpenAI não divulgou os critérios de aprovação.",
    },
    {
      question: "O que acontece no ChatGPT com quem tenta pedir esse tipo de conteúdo?",
      answer:
        "A pessoa vê um aviso que indica apoio especializado e a conta fica suspensa por 24 horas. Reincidência pode levar a restrições mais longas, encerramento da conta e denúncia às autoridades.",
    },
  ],
};
