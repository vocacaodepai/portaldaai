import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "fichamento-de-livro-com-ia-como-estudar-sem-copiar-e-sem-inventar",
  title: "Fichamento de livro com IA: estudar sem copiar nem inventar",
  seoTitle: "Fichamento de livro com IA: passo a passo",
  excerpt:
    "Fichamento de livro com IA: veja como montar resumo, citações e dúvidas sem copiar trecho nem aceitar invenção, com prompts prontos e checagem simples.",
  metaDescription:
    "Aprenda a fazer fichamento de livro com IA: tipos de ficha, prompts, como conferir citação página a página, uso do Gemini Notebook e cuidados com direitos autorais.",
  category: "iniciantes",
  articleSubcategory: "estudos",
  date: "2026-10-24",
  readTime: 8,
  imageQuery: "open book highlighter notes desk",
  seed: 631,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Fichamento é um registro organizado do que você leu (ideias, citações e dúvidas), e a IA ajuda a organizar, mas a leitura e a conferência continuam sendo suas.",
    "O método mais seguro é pedir à IA que trabalhe apenas com o texto que você forneceu e que indique o trecho de onde tirou cada ideia, para você conferir na página.",
    "Citação deve ser curta, entre aspas e com autor e página, e jamais pode ser inventada pela IA: livros e artigos têm direitos autorais e a lei só permite a citação para estudo e crítica.",
  ],
  content: `
    <p>Fichamento de livro é o registro organizado do que você leu: as ideias principais, as citações importantes (com página) e as suas dúvidas e comentários. Com IA, você acelera a organização, mas só funciona bem se a ferramenta trabalhar a partir do texto que você deu e se você conferir cada citação no livro antes de usar.</p>

    <p>Muita gente tenta o caminho curto: pede para a IA "fichar o livro" e recebe um resumo bonito, cheio de frases que parecem do autor e que, às vezes, o autor nunca escreveu. Isso é uma armadilha para quem estuda para prova, faz trabalho de faculdade ou escreve TCC. Este guia mostra os tipos de ficha, um passo a passo em que a IA ajuda sem inventar, prompts para copiar e uma lista de conferência. Serve para quem está começando e não precisa de nenhum conhecimento técnico.</p>

    <h2>O que é um fichamento e para que ele serve</h2>

    <p>O fichamento é um caderno de estudo feito por você, com formato fixo, para que depois de semanas você ainda saiba o que o livro diz e onde. Ele serve para provas, resenhas, trabalhos acadêmicos e leitura profissional. A ideia central é separar três coisas: o que o autor disse, o que você entendeu e o que você ainda não entendeu. Misturar as três é o erro que mais atrapalha na hora de escrever.</p>

    <p>Existem formatos diferentes, e vale escolher um conforme o objetivo:</p>

    <table>
      <thead>
        <tr><th>Tipo de ficha</th><th>O que registra</th><th>Quando usar</th></tr>
      </thead>
      <tbody>
        <tr><td>Resumo</td><td>As ideias do capítulo com suas palavras</td><td>Revisão para prova</td></tr>
        <tr><td>Citação</td><td>Trechos curtos com autor, obra e página</td><td>Trabalho acadêmico, resenha</td></tr>
        <tr><td>Bibliográfica</td><td>Dados da obra, tese e conceitos-chave</td><td>Pesquisa com vários livros</td></tr>
        <tr><td>Comentário</td><td>Sua opinião, ligações com outras leituras</td><td>Discussões e ensaios</td></tr>
        <tr><td>Dúvidas</td><td>O que você não entendeu e pretende perguntar</td><td>Aula, monitoria, grupo de estudo</td></tr>
      </tbody>
    </table>

    <p>A IA entra bem em três deles: no resumo (como rascunho), na lista de dúvidas e na organização das fichas. Ela entra mal na ficha de citação, porque citação exige exatidão de palavra e de página, e é justamente onde modelos de linguagem mais erram. Para entender o motivo, leia <a href="/artigos/como-uma-ia-aprende-treinamento-ajuste-fino-e-por-que-erra">por que a IA erra</a>.</p>

    <h2>Por que a IA inventa citação e como evitar</h2>

    <p>Modelos de linguagem escrevem o texto mais provável, não consultam um arquivo do livro. Se você pede "cite três trechos do capítulo 2" sem fornecer o capítulo, o modelo pode produzir frases que soam como o autor e não existem. A regra de ouro é entregar o texto e limitar a resposta a ele. O guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">como escrever comandos que funcionam</a> reforça a ideia: contexto claro dentro do pedido reduz invenção.</p>

    <p>Na prática, isso significa três hábitos. Primeiro, forneça o material (foto de página, PDF próprio, trecho digitado ou seu resumo). Segundo, peça que a IA aponte de onde tirou cada ideia. Terceiro, nunca copie uma citação que você não tenha conferido no livro. Quem está tentando entender o que a faculdade aceita nesse tipo de trabalho pode ler também <a href="/artigos/tcc-com-ia-o-que-a-faculdade-aceita-abnt-citacoes-e-plagio">TCC com IA: ABNT, citações e plágio</a>.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Se a IA entregar uma citação com página e você não encontrar a frase no livro, trate como invenção e descarte. Uma referência falsa num trabalho é pior do que não ter referência.</p></div>

    <h2>Passo a passo: do livro à ficha pronta</h2>

    <h3>1. Leia o capítulo antes de abrir a IA</h3>

    <p>A IA organiza, não lê por você. Leia o capítulo, marque trechos e escreva à mão ou no celular uma frase com a ideia principal. Essa frase é o seu ponto de comparação: depois, você confere se o resumo da IA bate com o que você entendeu.</p>

    <h3>2. Forneça o texto à ferramenta</h3>

    <p>Se o livro é seu e está em PDF, você pode usar uma ferramenta que trabalha só com fontes que você envia, como o Gemini Notebook. A <a href="https://support.google.com/notebooklm/answer/16206563" target="_blank" rel="noopener noreferrer">ajuda oficial do Google</a>, consultada em 24/10/2026, explica que cada caderno é uma coleção de fontes de um projeto, com saídas como notas, mapas mentais, flashcards e questionários, e avisa que o resultado é gerado por IA e não deve substituir aconselhamento profissional. Para quem usa a ferramenta pelo chat, há ainda o novo <a href="/artigos/gemini-notebook-no-app-gemini-como-criar-e-consultar-cadernos-por-conversa">Gemini Notebook como app conectado</a>. Se o livro é físico, fotografe ou digite só os trechos que quer estudar.</p>

    <h3>3. Peça o resumo com indicação de origem</h3>

    <pre><code>Use SOMENTE o texto que colei abaixo. Faça um resumo do capítulo em 6 tópicos curtos.
Depois de cada tópico, indique entre colchetes o trecho do texto que o sustenta (primeiras 6 palavras do trecho).
Se algo não estiver no texto, escreva "não consta no trecho".
Texto: [cole aqui]</code></pre>

    <h3>4. Monte a ficha de citação a partir do livro, não da IA</h3>

    <p>Peça à IA para <strong>sugerir</strong> quais frases do seu texto merecem virar citação, e então vá ao livro, copie a frase exata e anote a página. A IA ajuda a escolher, você garante a exatidão.</p>

    <pre><code>Do texto abaixo, aponte as 5 frases que melhor resumem a tese do autor.
Copie cada frase exatamente como está, sem alterar nenhuma palavra, e indique o parágrafo (1, 2, 3...).
Texto: [cole aqui]</code></pre>

    <h3>5. Gere a lista de dúvidas</h3>

    <pre><code>Com base no resumo abaixo, liste 5 pontos que um estudante iniciante costuma achar confusos
e transforme cada um em uma pergunta que eu possa levar ao professor ou ao grupo de estudo.
Resumo: [cole aqui]</code></pre>

    <h2>Exemplo: fichando um capítulo de 25 páginas em 60 minutos</h2>

    <p>Uma estudante de pedagogia em Goiânia precisa entregar a ficha de um capítulo de 25 páginas para a aula de sexta. Ela reserva 60 minutos. Nos primeiros 25, lê e marca. Em 10 minutos, digita três trechos-chave no celular e cola no prompt de resumo. Nos 10 seguintes, confere cada tópico do resumo com o que marcou e corrige dois pontos que a IA simplificou demais. Em 10 minutos, pega a lista de frases sugeridas, vai ao livro, copia as duas que quer citar e anota a página. Nos últimos 5, gera três dúvidas para levar à aula.</p>

    <p>O resultado é uma ficha de uma página com resumo, duas citações conferidas e três perguntas. Os tempos são ilustrativos: livros densos pedem mais. O ganho está em separar o que é leitura (humana) do que é organização (IA). Para transformar o conteúdo em revisão, combine com <a href="/artigos/flashcards-com-ia-estudar-melhor-notebooklm-e-anki">flashcards com IA</a> e com <a href="/artigos/mapa-mental-com-ia-resumir-materia-e-estudar-com-o-gemini-notebook">mapa mental com o Gemini Notebook</a>.</p>

    <h2>Direitos autorais: o que pode e o que não pode</h2>

    <p>Livros têm autor, e a Lei de Direitos Autorais (Lei 9.610/1998), consultada em 24/10/2026 no <a href="https://www2.camara.leg.br/legin/fed/lei/1998/lei-9610-19-fevereiro-1998-365399-publicacaooriginal-1-pl.html" target="_blank" rel="noopener noreferrer">texto original publicado pela Câmara dos Deputados</a>, não considera ofensa a citação em livros, jornais, revistas ou outro meio, para fins de estudo, crítica ou polêmica, desde que indicados o autor e a origem. O mesmo artigo 46 trata da reprodução, em um só exemplar, de pequenos trechos para uso privado do copista. Ficha para estudo pessoal costuma estar nessa zona; copiar o livro inteiro para um chat ou distribuir o PDF, não.</p>

    <p>Duas dicas de bom senso: use apenas arquivos que você tem direito de usar (livro comprado, material da biblioteca, domínio público) e cite sempre o autor e a página. Para entender os limites mais amplos, veja <a href="/artigos/ia-e-direitos-autorais-o-que-criadores-precisam-saber">IA e direitos autorais</a>.</p>

    <h2>Erros comuns ao fichar com IA</h2>

    <ul class="checklist">
      <li>Pedir um resumo do livro pelo título, sem enviar o texto: o modelo preenche com o que "acha" que o livro diz.</li>
      <li>Copiar citação da resposta da IA sem conferir a frase e a página no livro.</li>
      <li>Misturar o que o autor disse com o que você pensa, sem separar as fichas.</li>
      <li>Colar o capítulo inteiro de um livro protegido em ferramenta pública, sem pensar em direitos e privacidade.</li>
      <li>Entregar a ficha como se fosse sua leitura sem tê-la lido, o que costuma aparecer na hora da prova ou da discussão.</li>
      <li>Aceitar o texto pronto sem ajustar o seu vocabulário: o <a href="/artigos/detector-de-texto-de-ia-funciona-ou-nao-como-saber-se-foi-escrito-por-ia">detector de texto de IA</a> não é confiável, mas o professor percebe quando o estilo não é o seu.</li>
    </ul>

    <h2>Organizando as fichas para estudar depois</h2>

    <p>Uma ficha só vale se você a encontra depois. Use uma planilha ou documento com colunas simples: livro, capítulo, tipo de ficha, ideia principal, citação com página e dúvida. Se você ainda não se sente à vontade com planilhas, o roteiro de <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">aprender planilhas do zero com IA</a> ajuda. Marque também a data da leitura e, antes de provas, revise as fichas em voz alta: lembrar sem olhar fixa muito mais do que reler.</p>

    <p>Se o objetivo é uma prova específica, encaixe as fichas num plano de estudos como o de <a href="/artigos/como-usar-ia-para-estudar-para-provas-e-concursos">estudar para provas e concursos com IA</a> ou, para quem presta o exame, em <a href="/artigos/enem-2026-com-ia-plano-de-estudos-e-redacao-ate-a-prova">Enem 2026 com IA</a>. Quando a ideia é aprender a conversar com a IA sem que ela entregue a resposta pronta, veja os <a href="/artigos/modo-estudo-do-chatgpt-e-aprendizado-guiado-do-gemini-como-usar">modos de estudo do ChatGPT e do Gemini</a>.</p>

    <p>Comece hoje com um capítulo só: leia, escreva a frase central, use o prompt com origem indicada e confira duas citações no livro. Em uma semana você terá um método seu. Para mais guias de estudo, explore a categoria <a href="/categoria/iniciantes">IA para iniciantes</a>.</p>
  `,
  faq: [
    {
      question: "Como fazer fichamento de livro com IA?",
      answer:
        "Leia o capítulo, forneça à IA o texto ou os trechos que você quer estudar e peça um resumo que indique de onde tirou cada ideia. Escolha as citações com a IA, mas copie a frase exata e a página direto do livro. Por fim, gere uma lista de dúvidas para levar à aula.",
    },
    {
      question: "A IA pode inventar citações de livros?",
      answer:
        "Pode. Modelos de linguagem escrevem frases plausíveis e, sem o texto à vista, podem criar citações e páginas inexistentes. Por isso envie o material, peça indicação de origem e confira toda citação no livro antes de usar em prova, trabalho ou TCC.",
    },
    {
      question: "Posso colar um capítulo de livro numa ferramenta de IA?",
      answer:
        "Para estudo pessoal, trechos de livros que você possui costumam ser usados assim, mas a lei de direitos autorais só trata de cópia de pequenos trechos para uso privado e de citação com autor e origem. Evite enviar a obra inteira, distribuir arquivos e usar material piratado.",
    },
    {
      question: "Fichamento feito com IA conta como plágio?",
      answer:
        "Depende das regras da sua instituição e de como você usa o resultado. Copiar o texto da IA como se fosse seu ou citar sem fonte pode gerar problema. Use a IA como apoio de organização, cite autor e página e declare o uso se a escola ou a faculdade pedir.",
    },
    {
      question: "Qual a melhor ferramenta para fazer fichamento?",
      answer:
        "Serve qualquer ferramenta que trabalhe com o texto que você fornece. O Gemini Notebook, por exemplo, usa apenas as fontes do caderno e gera notas, mapas mentais e flashcards. Uma planilha ou um documento simples para guardar as fichas já resolve para começar.",
    },
  ],
};
