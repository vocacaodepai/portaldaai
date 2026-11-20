import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "data-de-corte-da-ia-por-que-o-chatbot-nao-sabe-do-que-aconteceu-ontem-e-como-contornar",
  title: "Data de corte da IA: por que o chatbot não sabe de ontem",
  seoTitle: "Data de corte da IA: o que é e como contornar",
  excerpt:
    "Entenda o que é a data de corte da IA, por que o chatbot erra sobre fatos recentes e como contornar com busca na web, arquivos e perguntas bem feitas.",
  metaDescription:
    "Data de corte da IA é o ponto em que o modelo parou de aprender. Veja por que o chatbot erra sobre fatos recentes, como checar a data e como contornar sem cair em erro.",
  category: "iniciantes",
  articleSubcategory: "conceitos",
  date: "2026-10-31",
  readTime: 7,
  imageQuery: "calendar clock library archive books",
  seed: 947,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A data de corte é o ponto até onde o modelo de IA aprendeu: o que aconteceu depois disso ele só sabe se a ferramenta buscar na web ou se você enviar o material.",
    "As desenvolvedoras publicam a data de corte de cada modelo, e ela costuma ser anterior ao dia em que você o usa, às vezes por meses.",
    "Para assuntos recentes, ligue a busca na web, cole o texto da fonte e peça a data e o link das informações, em vez de confiar na memória do modelo.",
  ],
  content: `
    <p>Data de corte da IA é o momento em que termina o material usado para treinar o modelo: tudo o que aconteceu depois disso, o chatbot não aprendeu. Por isso uma IA pode explicar muito bem um conceito antigo e, ao mesmo tempo, errar sobre uma lei nova, um preço atual ou o resultado do jogo de ontem.</p>

    <p>Quase todo iniciante já passou por isso: pergunta algo recente, recebe uma resposta confiante e descobre depois que estava desatualizada. Este guia explica o que é a data de corte, onde ver a de cada modelo, por que a resposta desatualizada soa tão segura e quais são as formas práticas de contornar o problema no dia a dia.</p>

    <h2>O que é a data de corte de um modelo de IA</h2>

    <p>Um modelo de linguagem aprende com um grande volume de textos reunidos até uma certa data. Depois, passa por ajustes e testes antes de ser lançado, e só então chega ao público. Isso significa que existe um intervalo entre o fim do aprendizado e o primeiro dia de uso, e esse intervalo continua crescendo enquanto o modelo está em circulação. O guia <a href="/artigos/como-uma-ia-aprende-treinamento-ajuste-fino-e-por-que-erra">como uma IA aprende</a> explica essa etapa de treinamento com mais calma.</p>

    <p>Pense em uma enciclopédia impressa em abril: ela é ótima para consultar o que já era conhecido até abril, mas não traz nada do que veio depois. O modelo funciona de forma parecida, com uma diferença importante: ele não avisa, por conta própria, que a "edição" ficou velha. Responde com o mesmo tom de segurança sobre um fato de três anos atrás e sobre um fato que mudou semana passada.</p>

    <h2>Onde ver a data de corte de cada modelo</h2>

    <p>As empresas costumam publicar essa informação nas páginas técnicas dos modelos. A <a href="https://developers.openai.com/api/docs/models" target="_blank" rel="noopener noreferrer">página de modelos da OpenAI</a>, consultada em 31/10/2026, traz um campo "Knowledge cutoff" para cada modelo atual. Na consulta, os valores listados foram 30 de abril de 2026 para o GPT-6 Astra e para o GPT-6.1 Sol, 18 de maio de 2026 para o GPT-6 Luna e 1º de junho de 2026 para o GPT-6.1 Terra.</p>

    <p>Repare no detalhe: mesmo o modelo mais recente da lista tem corte anterior a hoje, e a diferença chega a cinco meses. Se você usa o app com o modelo padrão, vale conferir qual modelo está respondendo. O texto sobre o <a href="/artigos/chatgpt-gratis-gpt-6-luna-e-intelligent-ui-o-que-muda">ChatGPT grátis com o GPT-6 Luna</a> ajuda a situar qual modelo está por trás de cada plano. Já outras páginas técnicas nem sempre trazem a data, e quando ela não aparece, o certo é tratar o corte como desconhecido, e não supor.</p>

    <table>
      <thead>
        <tr><th>Pergunta</th><th>A data de corte atrapalha?</th></tr>
      </thead>
      <tbody>
        <tr><td>Explicar o que é inflação</td><td>Quase nunca: conceito estável</td></tr>
        <tr><td>Resumir um texto que você colou</td><td>Não: o material vem de você</td></tr>
        <tr><td>Preço atual de um plano ou produto</td><td>Sim, muito</td></tr>
        <tr><td>Lei ou regra que mudou neste ano</td><td>Sim, muito</td></tr>
        <tr><td>Resultado de ontem, notícia da semana</td><td>Sim, a menos que haja busca na web</td></tr>
      </tbody>
    </table>

    <h2>Por que a resposta desatualizada soa tão segura</h2>

    <p>O modelo não consulta uma lista de fatos verificados: ele gera a continuação mais provável para o texto. Quando falta informação nova, ele completa com o que aprendeu, e isso pode produzir uma resposta bem escrita, porém velha. Em alguns casos, ele também inventa detalhes para preencher a lacuna, o que é o problema descrito em <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>.</p>

    <p>Há ainda um efeito curioso: o modelo pode errar a própria noção de "hoje". Se ninguém informa a data, ele pode assumir que estamos no período do corte. Por isso, em tarefas que dependem de prazo, idade ou calendário, vale escrever a data de hoje no pedido.</p>

    <h2>Como contornar: cinco caminhos práticos</h2>

    <h3>1. Ligar a busca na web</h3>

    <p>Muitas ferramentas conseguem consultar a internet antes de responder. A <a href="https://ai.google.dev/gemini-api/docs/google-search" target="_blank" rel="noopener noreferrer">documentação do Google sobre ancoragem com a Pesquisa Google</a> diz que o recurso conecta o Gemini a conteúdo da web em tempo real e ajuda a dar respostas mais precisas e com fontes verificáveis além do corte de conhecimento. O funcionamento, as citações e as ressalvas aparecem em <a href="/artigos/ia-com-busca-na-web-como-funciona-citacoes-e-quando-desconfiar">IA com busca na web</a>, e o <a href="/artigos/modo-ia-do-google-como-usar-a-pesquisa-com-ia">Modo IA do Google</a> é um exemplo de uso no dia a dia.</p>

    <h3>2. Colar o texto da fonte</h3>

    <p>Quando o assunto é uma lei, um edital ou uma política de empresa, copie o trecho oficial e peça para a IA trabalhar só com ele. Assim você controla a base da resposta. O mesmo vale para documentos longos, como mostra o guia de <a href="/artigos/como-usar-ia-para-resumir-pdfs-artigos-e-textos-longos">resumir PDFs e textos longos</a>.</p>

    <h3>3. Perguntar a data e a fonte da informação</h3>

    <p>Peça que a IA diga de quando é a informação e de onde veio. Se a resposta for vaga, trate como pista, e não como fato.</p>

    <h3>4. Usar ferramentas que consultam seus documentos</h3>

    <p>Sistemas que respondem com base em arquivos da empresa ou do usuário contornam o problema porque a informação é buscada na hora. O funcionamento está em <a href="/artigos/rag-na-ia-como-chatbot-responde-com-base-nos-seus-documentos">RAG na IA</a>.</p>

    <h3>5. Conferir no site oficial</h3>

    <p>Para preço, prazo, lei e regra, a última palavra é do site da empresa ou do órgão. Se a notícia é de ontem, procure veículos confiáveis, e o texto sobre <a href="/artigos/noticias-pelo-chatbot-de-ia-o-que-o-reuters-institute-mostra-e-como-checar-a-fonte">notícias pelo chatbot de IA</a> mostra como checar a fonte.</p>

    <h2>Prompts prontos para perguntas sobre fatos recentes</h2>

    <pre><code>Hoje é 31/10/2026. Pesquise na web e responda com data e link de cada fonte: qual é a regra atual do tema que vou descrever abaixo? Se não achar fonte recente, diga que não achou.</code></pre>

    <pre><code>Use apenas o texto abaixo para responder. Se a resposta não estiver no texto, escreva "não consta no material". Texto: [cole aqui o trecho oficial]</code></pre>

    <pre><code>Antes de responder, diga qual é a data mais recente de que você tem conhecimento sobre este assunto e o que pode ter mudado desde então.</code></pre>

    <p>O terceiro prompt tem limite: o modelo pode errar a própria data de corte. Use como alerta, não como prova. Para escrever pedidos melhores no geral, o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">como escrever comandos que funcionam</a> traz mais exemplos.</p>

    <h2>Exemplo prático: checando um prazo de imposto</h2>

    <p>O Rodrigo, motorista de aplicativo em Belo Horizonte, pergunta a um chatbot sem busca na web qual é o prazo de um pagamento do MEI neste ano. A IA responde com uma data que valia em anos anteriores. Se ele confia, corre risco de perder o prazo e pagar multa.</p>

    <p>Refazendo do jeito certo, ele liga a busca, informa a data de hoje e pede o link da fonte. Depois, abre o link e confere no site do governo. Levou três minutos e evitou o erro. Esse é o padrão que vale para qualquer assunto que muda: peça a fonte, abra a fonte e confirme. Para golpes que se aproveitam de datas e prazos, veja também como <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">checar mensagem suspeita com IA</a>.</p>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Achar que "mais novo" significa "sabe tudo de hoje".</strong> O modelo mais recente também tem corte.</li>
      <li><strong>Não informar a data de hoje.</strong> O modelo pode assumir a data errada.</li>
      <li><strong>Confiar em preço e prazo sem fonte.</strong> São os dados que mais mudam.</li>
      <li><strong>Misturar tarefa estável com tarefa recente.</strong> Para explicar conceitos a data de corte pesa pouco; para notícias, pesa muito.</li>
      <li><strong>Esquecer a privacidade ao colar texto.</strong> Antes de enviar documentos, leia <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a>.</li>
    </ul>

    <h2>Próximo passo</h2>

    <p>Na próxima vez que fizer uma pergunta sobre algo que muda, adote a rotina de três passos: informe a data, ligue a busca e abra a fonte. Se quiser entender melhor o que acontece quando o texto é grande demais para caber na conversa, leia sobre <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto</a>, e para evitar os tropeços mais comuns de quem está começando, veja os <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">cinco erros comuns de iniciantes</a>. A categoria de <a href="/categoria/iniciantes">iniciantes</a> reúne os demais guias.</p>
  `,
  faq: [
    {
      question: "O que é a data de corte de uma IA?",
      answer:
        "É o ponto até onde o material de treinamento do modelo vai. Fatos posteriores a essa data ele não aprendeu, a menos que a ferramenta busque na web ou que você envie o texto. Por isso respostas sobre notícias, preços e leis recentes podem vir desatualizadas, ainda que bem escritas.",
    },
    {
      question: "Como descobrir a data de corte do ChatGPT ou do Gemini?",
      answer:
        "Consulte a página técnica de modelos da empresa. A página da OpenAI, por exemplo, tem um campo de knowledge cutoff para cada modelo atual. Perguntar ao próprio chatbot pode ajudar como pista, mas ele pode errar essa informação, então confirme na página oficial.",
    },
    {
      question: "A busca na web resolve o problema da data de corte?",
      answer:
        "Ajuda muito, mas não elimina o risco. Com busca, o modelo consulta páginas atuais e pode citar fontes, como descreve a documentação do Google sobre ancoragem. Ainda assim, ele pode escolher uma fonte ruim ou interpretar errado, então abra os links para conferir.",
    },
    {
      question: "Por que a IA responde com tanta segurança mesmo estando desatualizada?",
      answer:
        "Porque o modelo gera o texto mais provável a partir do que aprendeu, sem uma checagem automática de atualidade. O tom firme faz parte do estilo da resposta e não indica certeza. Para dados que mudam, como prazos e preços, peça data e fonte antes de agir.",
    },
    {
      question: "Preciso me preocupar com a data de corte em todas as perguntas?",
      answer:
        "Não. Para conceitos estáveis, como explicar um termo ou revisar um texto que você colou, o impacto é pequeno. A atenção deve ser maior quando o assunto muda com o tempo: notícias, leis, preços, versões de software e resultados esportivos.",
    },
  ],
};
