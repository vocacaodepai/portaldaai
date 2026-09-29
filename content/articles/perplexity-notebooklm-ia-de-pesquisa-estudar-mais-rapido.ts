import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido",
  title: "Perplexity e NotebookLM: como pesquisar e estudar mais rápido",
  seoTitle: "Perplexity e NotebookLM: pesquisa e estudo com IA",
  excerpt:
    "Perplexity e NotebookLM: veja quando usar cada IA de pesquisa, os limites do plano gratuito, prompts prontos e um método para estudar mais rápido com fontes.",
  metaDescription:
    "Perplexity e NotebookLM (agora Gemini Notebook): veja quando usar cada IA de pesquisa, limites gratuitos verificados, prompts prontos e um método de estudo.",
  category: "ferramentas",
  date: "2026-09-14",
  updated: "2026-09-27",
  readTime: 8,
  imageQuery: "research studying notes laptop",
  seed: 27,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Perplexity busca na web e responde com fontes citadas; NotebookLM (que o Google passou a chamar de Gemini Notebook) responde só com base nos documentos que você envia e gera resumo, quiz, mapa mental e áudio.",
    "O plano gratuito do NotebookLM dá 100 cadernos, 50 fontes por caderno, 3 Audio Overviews e 50 perguntas por dia (verificado em 27/09/2026), o bastante para um concurso ou uma disciplina inteira.",
    "O método é buscar no Perplexity, filtrar fontes primárias, organizar no NotebookLM e se testar com quiz, sempre abrindo a citação antes de confiar em qualquer resposta.",
  ],
  content: `
    <p>Perplexity e NotebookLM são duas ferramentas de IA de pesquisa que mudam a forma de estudar. A primeira busca na web e responde com as fontes citadas. A segunda, que o Google passou a chamar de Gemini Notebook, responde só com base nos documentos que você envia e gera resumo, quiz e áudio. Juntas, cortam horas de garimpo por semana.</p>

    <p>Este guia explica quando usar cada uma, os limites do plano gratuito com data de verificação, prompts prontos, um cenário de concurseiro brasileiro com números e os erros que fazem a pesquisa com IA sair pior do que a busca comum. Serve para concurso, faculdade, pesquisa de mercado e a reunião de amanhã.</p>

    <h2>O que é IA de pesquisa e por que é diferente do ChatGPT?</h2>

    <p>Um chat comum responde com o que o modelo "lembra" do treinamento. Uma IA de pesquisa faz outra coisa: busca primeiro, lê as fontes e só então escreve, mostrando de onde tirou cada trecho. A <a href="https://docs.perplexity.ai/docs/agent-api/quickstart" rel="noopener noreferrer">documentação da Perplexity</a> descreve o próprio produto assim: respostas ancoradas em busca na web em tempo real, com citações inline. Isso reduz (não elimina) a chance de inventar dado em tema recente ou específico.</p>

    <p>O NotebookLM segue outro caminho. Em vez de buscar na internet, ele responde só com base no que você colocou no caderno: PDFs, links, vídeos, anotações. Segundo a <a href="https://support.google.com/notebooklm/" rel="noopener noreferrer">central de ajuda do Gemini Notebook</a>, além do chat ele gera Audio Overviews, Video Overviews, flashcards, quizzes, mapas mentais, infográficos, slides e relatórios a partir das fontes. O endereço antigo, notebooklm.google.com, hoje redireciona para notebook.google.com, mas a ferramenta é a mesma.</p>

    <p>Na prática, você usa as duas em sequência: Perplexity para achar e triar material, NotebookLM para estudar o material escolhido. Quem ainda confunde os termos pode passar pelo <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de inteligência artificial</a> antes; "alucinação", "fonte" e "contexto" aparecem o tempo todo aqui. E o <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">comparativo ChatGPT, Claude e Gemini</a> mostra que os chats gerais também ganharam busca, só que com menos controle sobre as fontes.</p>

    <h2>Perplexity ou NotebookLM: qual usar em cada situação</h2>

    <table>
      <thead>
        <tr><th>Situação</th><th>Melhor opção</th><th>Por quê</th></tr>
      </thead>
      <tbody>
        <tr><td>Entender um assunto novo em 10 minutos</td><td>Perplexity</td><td>Busca ampla, resposta com links para conferir</td></tr>
        <tr><td>Estudar 8 PDFs de uma disciplina</td><td>NotebookLM</td><td>Responde só com base no material, gera quiz e resumo</td></tr>
        <tr><td>Pesquisa de mercado e concorrência</td><td>Perplexity, depois NotebookLM</td><td>Um acha as fontes, o outro organiza a análise</td></tr>
        <tr><td>Preparar reunião sobre um contrato ou relatório</td><td>NotebookLM</td><td>Perguntas diretas ao documento, com trecho citado</td></tr>
        <tr><td>Notícia de hoje</td><td>Perplexity</td><td>Busca em tempo real</td></tr>
      </tbody>
    </table>

    <p>Limites do plano gratuito do NotebookLM, segundo a <a href="https://support.google.com/notebooklm/answer/16213268" rel="noopener noreferrer">página oficial de limites de uso</a> (verificado em 27/09/2026): 100 cadernos por usuário, 50 fontes por caderno, 3 Audio Overviews por dia e 50 perguntas no chat por dia. Com o Google AI Pro, sobe para 500 cadernos, 300 fontes por caderno, 20 Audio Overviews e 500 perguntas por dia. A própria página avisa que os limites mudam ao longo do tempo, então confira antes de assinar. O valor dos planos Google AI Pro e Ultra: consulte a página oficial.</p>

    <p>A Perplexity tem plano gratuito e o Perplexity Pro; o preço e a quantidade de buscas avançadas mudam com frequência, então consulte a página oficial. A empresa também lançou navegador próprio, o Comet, <a href="/noticias/perplexity-comet-navegador-ia-disponivel-todos-usuarios-ios">agora disponível para todos os usuários de iOS</a>, que faz a busca com IA direto na navegação.</p>

    <h2>Passo a passo para estudar mais rápido com IA de pesquisa</h2>

    <p>O fluxo tem seis passos. Os dois primeiros acontecem no Perplexity, os quatro seguintes no NotebookLM. Não pule o primeiro: sem pergunta definida, a IA devolve enciclopédia.</p>

    <ol>
      <li><strong>Defina a pergunta.</strong> "Preciso entender X para fazer Y." Escreva isso em uma linha antes de abrir qualquer ferramenta.</li>
      <li><strong>Triagem no Perplexity.</strong> Faça a pergunta, abra as 3 fontes mais citadas e salve as que são primárias: lei, artigo científico, documentação oficial, relatório.</li>
      <li><strong>Monte o caderno no NotebookLM.</strong> Suba os PDFs e links escolhidos. Nomeie o caderno pelo objetivo, não pelo assunto.</li>
      <li><strong>Peça o mapa.</strong> Resumo por tópico, depois mapa mental. Leia o resumo comparando com o original em pelo menos dois pontos.</li>
      <li><strong>Teste-se.</strong> Gere um quiz de 10 perguntas e responda sem olhar. O que errar vira flashcard.</li>
      <li><strong>Feche com o Audio Overview.</strong> Ouça no trajeto no dia seguinte. É revisão passiva, boa para fixar, não para aprender do zero.</li>
    </ol>

    <p>Esse fluxo é o mesmo que um profissional usa para <a href="/artigos/como-usar-ia-para-monitorar-concorrencia-tomar-decisoes-melhores">monitorar a concorrência</a> ou <a href="/artigos/como-validar-ideia-de-negocio-com-ia-antes-de-investir">validar uma ideia de negócio antes de investir</a>: buscar, filtrar, organizar, questionar. Muda o material, não o método.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>No NotebookLM, clique na citação numerada de cada resposta. Ela abre o trecho exato da fonte. Se a resposta não tem citação, desconfie.</p></div>

    <h2>Prompts prontos para pesquisa e estudo</h2>

    <p>Os três prompts abaixo usam as técnicas do <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">guia de prompt engineering</a>: objetivo claro, formato de saída e pedido explícito de fonte.</p>

    <h3>Triagem no Perplexity</h3>

    <pre><code>Quero entender como funciona o MEI em 2026 para abrir um negócio de doces em casa. Responda em tópicos curtos e, para cada afirmação, cite a fonte. Priorize gov.br, Receita Federal e Sebrae. No fim, liste 3 pontos em que as fontes discordam ou parecem desatualizadas.</code></pre>

    <h3>Resumo fiel no NotebookLM</h3>

    <pre><code>Com base apenas nas fontes deste caderno, faça um resumo em 10 tópicos do conteúdo sobre [assunto]. Para cada tópico, indique a fonte e o trecho. Se algum ponto não estiver nas fontes, escreva "não consta nas fontes" em vez de completar com conhecimento geral.</code></pre>

    <h3>Quiz de revisão</h3>

    <pre><code>Crie 10 perguntas de múltipla escolha sobre as fontes deste caderno, com 4 alternativas cada, no estilo de prova de concurso. Não mostre o gabarito agora. Depois que eu responder, corrija e explique cada erro citando o trecho da fonte.</code></pre>

    <p>A frase "não consta nas fontes" é o que mais protege contra resposta inventada. Vale para qualquer documento: um <a href="/artigos/ia-para-contratos-revisar-documentos-juridicos-mais-rapido">contrato que você quer revisar com IA</a>, uma ata de <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">reunião transcrita por IA</a> ou o material de um curso.</p>

    <h2>Exemplo brasileiro: concurso em 12 semanas com R$ 0 de ferramenta</h2>

    <p>Cenário montado para ilustrar. Rafael, 31 anos, técnico em Belo Horizonte, estuda para um concurso de nível médio com edital de 6 disciplinas e 3 horas por dia depois do trabalho. Material: apostila em PDF de 400 páginas, a lei seca de 2 normas e 30 videoaulas gratuitas no YouTube.</p>

    <p>Ele cria um caderno por disciplina no NotebookLM gratuito: 6 cadernos, cada um com 5 a 8 fontes, bem abaixo do limite de 50 fontes por caderno. Toda noite: 40 minutos lendo o resumo lado a lado com a apostila, 60 minutos de exercícios do próprio material, 20 minutos de quiz gerado pela IA e 3 perguntas ao caderno sobre o que não entendeu. As 50 perguntas diárias do plano gratuito sobram. No ônibus, ouve o Audio Overview da disciplina do dia, dentro do limite de 3 por dia.</p>

    <p>No Perplexity, uma vez por semana, ele confere se saiu alteração na legislação, pedindo fonte oficial. Custo total de ferramenta em 12 semanas: R$ 0. O que ele paga é a apostila e, se quiser, o Google AI Pro quando os cadernos crescerem; o valor está na página oficial. O ganho não é "estudar menos": é gastar as 3 horas com exercício e revisão ativa em vez de com fichamento.</p>

    <p>O mesmo método serve para quem produz conteúdo: o resumo e o quiz viram base para <a href="/artigos/como-criar-e-vender-curso-online-usando-ia">criar um curso online com IA</a> ou para uma <a href="/artigos/como-ganhar-dinheiro-com-newsletter-usando-ia">newsletter paga</a>, e o Audio Overview mostra o formato que dá para reproduzir com as <a href="/artigos/ia-para-audio-criar-podcasts-e-narracoes-profissionais">ferramentas de áudio com IA</a>.</p>

    <h2>Erros comuns e quando não usar IA de pesquisa</h2>

    <p>Os cinco erros abaixo transformam uma ferramenta boa em fonte de confusão. O primeiro é o mais comum e o mais caro.</p>

    <ul>
      <li><strong>Não abrir a fonte.</strong> Citação existir não significa que o link diz aquilo. Em tema médico, jurídico ou financeiro, abra e leia o trecho.</li>
      <li><strong>Subir material ruim.</strong> Resumo de PDF errado é erro organizado. Escolha fontes primárias antes de montar o caderno.</li>
      <li><strong>Usar o Audio Overview como estudo principal.</strong> É bom para revisar, fraco para aprender do zero.</li>
      <li><strong>Subir documento confidencial no caderno errado.</strong> Contrato de cliente e dado de paciente pedem conta corporativa e política clara; o artigo sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> explica o que verificar.</li>
      <li><strong>Aceitar a primeira resposta.</strong> Pergunte "o que contradiz isso?" e "qual é a fonte mais recente?".</li>
    </ul>

    <p>Quando não usar: para decidir sozinho algo com consequência legal ou de saúde, para escrever trabalho acadêmico sem ler as fontes (o professor percebe, e a banca também) e para checar boato viral. Para o último caso, o guia sobre <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">identificar conteúdo falso e deepfakes</a> mostra o caminho certo. O <a href="https://hai.stanford.edu/ai-index" rel="noopener noreferrer">AI Index 2026 da Stanford</a> resume o momento: a distância entre o que a IA consegue fazer e a nossa capacidade de avaliar isso está aumentando. Conferir fonte é a parte que cabe a você.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Tema de prova, saúde, dinheiro ou lei: a IA aponta o caminho, a fonte primária dá a resposta. Nunca inverta a ordem.</p></div>

    <p>Comece esta semana com um caderno só: um assunto, 5 fontes boas, um resumo conferido e um quiz. Depois expanda. Se quer descobrir o que estudar primeiro, o guia sobre <a href="/artigos/como-usar-ia-para-identificar-fechar-lacunas-de-habilidades">identificar lacunas de habilidades com IA</a> ajuda a montar o plano, e a categoria <a href="/categoria/ferramentas">Ferramentas</a> tem mais comparativos do Portal da AI.</p>
  `,
  faq: [
    {
      question: "NotebookLM é gratuito?",
      answer:
        "Sim, com limites. Segundo a página oficial de limites de uso (verificado em 27/09/2026), o plano gratuito dá 100 cadernos, 50 fontes por caderno, 3 Audio Overviews e 50 perguntas por dia. O Google AI Pro amplia para 500 cadernos, 300 fontes e 500 perguntas diárias. Os limites mudam com o tempo, então confira antes de assinar.",
    },
    {
      question: "NotebookLM mudou de nome para Gemini Notebook?",
      answer:
        "A central de ajuda do Google chama o produto de Gemini Notebook, e o endereço antigo notebooklm.google.com redireciona para notebook.google.com. É a mesma ferramenta: cadernos com fontes, chat com citações, Audio Overviews, quizzes, flashcards e mapas mentais. Nos textos deste guia, NotebookLM e Gemini Notebook são a mesma coisa.",
    },
    {
      question: "Perplexity ou NotebookLM: qual é melhor para estudar?",
      answer:
        "Depende da etapa. Perplexity é melhor para descobrir e triar material, porque busca na web em tempo real e cita as fontes. NotebookLM é melhor para estudar o material escolhido, porque responde só com base nos seus documentos e gera resumo, quiz e áudio. O fluxo mais eficiente usa os dois em sequência.",
    },
    {
      question: "Perplexity funciona em português?",
      answer:
        "Sim. Você pergunta em português e recebe a resposta em português, com fontes que podem ser em qualquer idioma. Para temas brasileiros, como legislação, concursos e Sebrae, vale pedir no prompt que a ferramenta priorize fontes oficiais em gov.br e Receita Federal, e conferir se os links citados realmente dizem o que o resumo afirma.",
    },
    {
      question: "IA de pesquisa pode inventar fontes?",
      answer:
        "Pode errar de duas formas: citar um link que existe mas não diz aquilo, ou completar lacunas com conhecimento geral quando a fonte não cobre o ponto. A defesa é simples: abrir a citação, pedir no prompt que a IA escreva \"não consta nas fontes\" quando faltar informação e nunca usar a resposta como decisão final em tema de saúde, dinheiro ou lei.",
    },
  ],
};
