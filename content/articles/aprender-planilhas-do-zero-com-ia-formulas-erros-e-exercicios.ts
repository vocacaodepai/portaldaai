import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios",
  title: "Aprender planilhas do zero com IA: fórmulas, erros e exercícios",
  seoTitle: "Aprender planilhas do zero com IA: passo a passo",
  excerpt:
    "Aprender planilhas do zero com IA fica mais fácil com um roteiro de 4 semanas, exercícios com números reais, prompts prontos e um guia dos erros de fórmula.",
  metaDescription:
    "Aprender planilhas do zero com IA: roteiro de 4 semanas, fórmulas básicas (SOMA, SE, PROCV), prompts para tirar dúvidas e como entender os erros #N/A, #REF! e #DIV/0!.",
  category: "iniciantes",
  articleSubcategory: "estudos",
  date: "2026-10-23",
  readTime: 7,
  imageQuery: "beginner learning spreadsheet laptop notebook",
  seed: 611,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA funciona como professora particular de planilhas: explica a fórmula, aponta o erro e cria exercícios, mas você só aprende de verdade digitando e conferindo cada resultado na mão.",
    "Um roteiro de 4 semanas (tabela e soma, condições com SE, busca com PROCV, limpeza e resumo) cobre o que a maioria dos empregos e pequenos negócios realmente usa.",
    "Os erros de fórmula (#N/A, #REF!, #DIV/0!, #VALUE!, #NAME?) são pistas, e pedir à IA que explique o erro, em vez de só corrigir, é o que transforma o tropeço em aprendizado.",
  ],
  content: `
    <p>Aprender planilhas do zero com IA significa usar um assistente como professor particular: você digita a fórmula, ele explica o que cada pedaço faz, aponta onde está o erro e cria exercícios novos até o assunto fixar. O ganho de tempo é grande, mas a regra é simples: quem digita e confere aprende, quem só copia a resposta continua dependente.</p>

    <p>Planilha é uma das habilidades mais cobradas em vagas administrativas, no controle de um pequeno negócio e até na organização das contas de casa. Este guia traz um roteiro de 4 semanas, um exercício com números de uma venda de bairro, prompts para tirar dúvidas, uma tabela dos erros que aparecem e os limites do Gemini dentro do Google Planilhas, com base nas páginas oficiais do Google e em reportagens conferidas em 23/10/2026.</p>

    <h2>O que a IA ensina bem e o que ela não ensina</h2>

    <p>A IA é ótima para três tarefas. Primeiro, traduzir fórmula em português claro: cole <strong>=SE(B2&gt;=1500;"Meta batida";"Abaixo da meta")</strong> e peça a explicação linha por linha. Segundo, achar o motivo de um erro, desde que você mostre a fórmula e a mensagem que apareceu. Terceiro, inventar exercícios com dados fictícios, quantas vezes você quiser.</p>

    <p>Ela não substitui duas coisas. A primeira é a prática: ler sobre PROCV não faz ninguém saber PROCV, assim como ler sobre bicicleta não ensina a pedalar. A segunda é a conferência. Modelos de linguagem erram conta e às vezes inventam função, tema do guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>. Por isso, toda fórmula sugerida deve ser testada com números que você consegue calcular de cabeça.</p>

    <p>Para confirmar se uma função existe e qual é a sintaxe correta, use a <a href="https://support.google.com/docs/table/25273" target="_blank" rel="noopener noreferrer">lista oficial de funções do Google Planilhas</a>, que agrupa tudo por categoria (matemática, lógica, busca, texto, data) com a descrição de cada uma. Ela está em inglês, mas o Planilhas permite trocar o idioma das funções, e na versão em português elas aparecem traduzidas, como SOMA, SE e PROCV.</p>

    <h2>Roteiro de 4 semanas, 20 minutos por dia</h2>

    <p>A ideia é avançar pouco por dia e repetir bastante. Vinte minutos de prática valem mais do que duas horas no domingo, e o ritmo curto cabe na rotina descrita no guia de <a href="/artigos/como-usar-ia-para-criar-rotina-diaria-produtiva">rotina diária produtiva com IA</a>.</p>

    <table>
      <thead>
        <tr><th>Semana</th><th>Tema</th><th>O que você deve saber fazer no fim</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Tabela, formatação e soma</td><td>Montar uma tabela com cabeçalho, formatar valores em R$, usar SOMA, MÉDIA, MÁXIMO e MÍNIMO</td></tr>
        <tr><td>2</td><td>Condições</td><td>Usar SE, SE com E/OU e SOMASE para totais por categoria</td></tr>
        <tr><td>3</td><td>Busca entre tabelas</td><td>Usar PROCV (ou XLOOKUP, se preferir) para puxar preço ou comissão de outra aba</td></tr>
        <tr><td>4</td><td>Limpeza e resumo</td><td>Tirar espaços sobrando, remover duplicados, montar uma tabela dinâmica simples e um gráfico</td></tr>
      </tbody>
    </table>

    <p>Em cada semana, peça à IA três exercícios de dificuldade crescente e só peça a resposta depois de tentar. Quando travar, peça uma dica, não a solução. Essa pequena disciplina é o que separa estudar de terceirizar o estudo, a mesma lógica do guia de <a href="/artigos/como-usar-ia-para-estudar-para-provas-e-concursos">estudo para provas e concursos com IA</a>.</p>

    <h2>Exercício: a semana de vendas de um mercadinho</h2>

    <p>Os números abaixo são fictícios, para treinar. Um mercadinho de bairro vendeu, de segunda a sábado, R$ 180, R$ 220, R$ 195, R$ 240, R$ 310 e R$ 420. Coloque os dias na coluna A (A2 a A7) e os valores na coluna B (B2 a B7), com os títulos "Dia" e "Venda (R$)" na linha 1.</p>

    <ul class="checklist">
      <li>Total da semana em B8: <strong>=SOMA(B2:B7)</strong>. O resultado esperado é R$ 1.565. Se deu outro número, algum valor foi digitado como texto.</li>
      <li>Média por dia em B9: <strong>=MÉDIA(B2:B7)</strong>. O esperado é cerca de R$ 260,83.</li>
      <li>Melhor dia em B10: <strong>=MÁXIMO(B2:B7)</strong>. O esperado é R$ 420, o sábado.</li>
      <li>Meta de R$ 1.500 na semana, em B11: <strong>=SE(B8&gt;=1500;"Meta batida";"Abaixo da meta")</strong>. O esperado é "Meta batida".</li>
      <li>Quantos dias passaram de R$ 200, em B12: <strong>=CONT.SE(B2:B7;"&gt;200")</strong>. O esperado é 4 (R$ 220, R$ 240, R$ 310 e R$ 420).</li>
    </ul>

    <p>Repare que você já sabe todas as respostas antes de digitar. Isso é proposital: planilha iniciante se aprende comparando o que a fórmula devolve com o que a sua conta de cabeça diz. Quando as duas batem, você entendeu. Quando não batem, você achou a lição do dia. Depois, o mesmo exercício vira base para um controle de caixa, como no guia de <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa com IA</a>.</p>

    <h2>Três prompts para estudar planilha com a IA</h2>

    <p>A qualidade da ajuda depende do contexto. Os modelos abaixo seguem a lógica do guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">escrita de comandos que funcionam</a>: dizer quem você é, o que quer e como quer a resposta.</p>

    <pre><code>Sou iniciante em Google Planilhas e quero aprender a função SE. Explique em 5 linhas com um exemplo de notas de alunos, depois me dê 3 exercícios com dados fictícios e NÃO mostre as respostas. Quando eu enviar a minha fórmula, corrija e explique o que errei.</code></pre>

    <pre><code>Minha fórmula está dando erro. Fórmula: =PROCV(A2;Preços!A:B;2;0). Mensagem: #N/A. Os códigos da coluna A parecem iguais aos da aba Preços. Liste, em ordem de probabilidade, as 4 causas mais comuns e me diga como testar cada uma na planilha.</code></pre>

    <pre><code>Crie uma tabela fictícia de 12 linhas com data, produto, quantidade e valor, com 2 erros de digitação escondidos (um espaço sobrando e um número escrito como texto). Eu vou tentar achar os erros e limpar os dados. Só revele os erros se eu pedir.</code></pre>

    <p>Não cole planilhas reais com dados de clientes, CPF ou salários. Use dados inventados ou anonimizados, como orienta o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega à IA sem perceber</a>.</p>

    <h2>Os erros de fórmula mais comuns, em tabela</h2>

    <p>Quem começa tem medo da mensagem vermelha. Ela é, na verdade, a pista mais útil que a planilha dá. Cada erro aponta para uma família de causas.</p>

    <table>
      <thead>
        <tr><th>Erro</th><th>O que costuma significar</th><th>Primeiro teste</th></tr>
      </thead>
      <tbody>
        <tr><td>#N/A</td><td>A busca não achou o valor procurado</td><td>Conferir espaços sobrando e se o código está como texto em um lado e número no outro</td></tr>
        <tr><td>#REF!</td><td>A fórmula aponta para uma célula que não existe mais</td><td>Ver se alguém apagou linha, coluna ou aba usada na fórmula</td></tr>
        <tr><td>#DIV/0!</td><td>Divisão por zero ou por célula vazia</td><td>Olhar o divisor e tratar o caso com SE</td></tr>
        <tr><td>#VALUE!</td><td>Tipo de dado errado, como texto no meio de uma conta</td><td>Procurar texto disfarçado de número</td></tr>
        <tr><td>#NAME?</td><td>Nome de função escrito errado ou inexistente</td><td>Conferir a grafia na lista oficial de funções</td></tr>
      </tbody>
    </table>

    <p>Existe a tentação de esconder tudo com SEERRO, que troca o erro por um valor em branco. Use com parcimônia: esconder o erro não resolve a causa e pode mascarar uma soma errada em um relatório. Primeiro entenda, depois decida se vale esconder.</p>

    <h2>Gemini dentro do Planilhas: ajuda boa, com ressalvas</h2>

    <p>O Google tem um painel lateral do Gemini no Planilhas. Segundo a <a href="https://canaltech.com.br/inteligencia-artificial/nao-sabe-criar-formulas-nova-ia-do-google-planilhas-te-ajuda-com-isso/" target="_blank" rel="noopener noreferrer">reportagem do Canaltech</a>, de 19/06/2026, dá para pedir em linguagem natural que ele monte a estrutura, incluindo fórmulas, tabelas dinâmicas e gráficos, com suporte a 28 idiomas, o português entre eles. O acesso, segundo a mesma matéria, é para contas empresariais e educacionais e para assinantes dos planos Google AI Pro e AI Ultra, e em ambientes corporativos o administrador precisa habilitar o recurso.</p>

    <p>A <a href="https://workspace.google.com/resources/spreadsheet-ai/?hl=pt-br" target="_blank" rel="noopener noreferrer">página do Google Workspace sobre IA em planilhas</a> descreve o mesmo conjunto: criar tabelas a partir de um pedido, sugerir fórmulas, montar tabelas dinâmicas e aplicar formatação condicional. Quem usa o celular encontra os detalhes no guia do <a href="/artigos/gemini-no-google-planilhas-no-iphone-e-android-como-usar-e-limites">Gemini no Google Planilhas no iPhone e no Android</a>.</p>

    <p>Para quem está aprendendo, há um dilema. Pedir ao Gemini que escreva a fórmula é rápido, mas você aprende pouco. Use assim: tente primeiro, depois peça ao Gemini para comparar a sua fórmula com a dele e explicar a diferença. Se a sua conta não tem o recurso, uma conversa em qualquer assistente de IA, com o prompt da seção anterior, entrega 80% do benefício para estudo.</p>

    <h2>Erros comuns de quem aprende planilha com IA</h2>

    <ul>
      <li><strong>Copiar e colar sem entender.</strong> Funciona hoje e quebra amanhã, quando a tabela mudar de tamanho. Peça sempre a explicação por partes.</li>
      <li><strong>Não testar com números simples.</strong> Teste a fórmula com dados que você calcula de cabeça antes de aplicar nos reais.</li>
      <li><strong>Misturar tudo em uma célula.</strong> Fórmula gigante é difícil de corrigir. Divida em colunas auxiliares e, depois, junte.</li>
      <li><strong>Digitar números como texto.</strong> Valor alinhado à esquerda e com aspas escondidas costuma ser texto. A soma ignora e o resultado sai menor.</li>
      <li><strong>Usar dado sensível no chat.</strong> Troque nomes e valores reais por exemplos.</li>
      <li><strong>Nunca praticar sozinho.</strong> Uma vez por semana, resolva um exercício sem abrir a IA. É assim que você descobre o que realmente aprendeu.</li>
    </ul>

    <h2>Para onde ir depois do básico</h2>

    <p>Com as quatro semanas feitas, você já aguenta o controle de caixa de um pequeno negócio, o orçamento da casa descrito no guia de <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">finanças pessoais com IA</a> e relatórios simples. O passo seguinte é automatizar, tema de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas e relatórios</a>, e ler dados com mais profundidade, como mostra o texto sobre o <a href="/artigos/grafico-de-caixa-no-google-planilhas-box-plot-quartis-e-outliers">gráfico de caixa no Google Planilhas</a>. Quem pega gosto pode até transformar a habilidade em renda, como mostra o guia de <a href="/artigos/como-ganhar-dinheiro-vendendo-planilhas-automatizadas-com-ia">planilhas automatizadas com IA</a>, sem promessa de ganho, só como caminho possível. Para fixar o conteúdo, os <a href="/artigos/flashcards-com-ia-estudar-melhor-notebooklm-e-anki">flashcards com IA</a> ajudam a decorar os nomes das funções.</p>

    <p>Comece hoje: abra uma planilha em branco, digite os seis valores de venda do exercício e confira o total de R$ 1.565. Se bateu, você acabou de dar o primeiro passo. Para mais guias de base, visite a <a href="/categoria/iniciantes">categoria de iniciantes</a> ou volte ao <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">guia completo de inteligência artificial</a>.</p>
  `,
  faq: [
    {
      question: "Dá para aprender planilhas sozinho com IA?",
      answer:
        "Dá, com uma condição: praticar. A IA explica fórmulas, aponta erros e cria exercícios, mas o aprendizado vem de digitar e conferir cada resultado. Um roteiro de 20 minutos por dia durante 4 semanas cobre soma, condições, busca e limpeza, que é o que a maioria dos trabalhos pede.",
    },
    {
      question: "Qual IA é melhor para aprender Google Planilhas?",
      answer:
        "Qualquer assistente de conversa serve para estudar, desde que você mostre a fórmula e o erro. O Gemini no painel lateral tem a vantagem de enxergar a planilha aberta, mas o acesso, segundo o Canaltech, vale para contas empresariais, educacionais e planos Google AI Pro e Ultra. Na dúvida, comece com o chat gratuito que você já usa.",
    },
    {
      question: "Por que minha fórmula PROCV dá #N/A?",
      answer:
        "O #N/A indica que a busca não encontrou o valor. As causas mais comuns são espaços sobrando no código, código escrito como texto de um lado e como número do outro e intervalo de busca que não começa na coluna do código. Teste cada hipótese com um único código simples antes de mexer na tabela inteira.",
    },
    {
      question: "Posso colar minha planilha da empresa na IA para ela corrigir?",
      answer:
        "Evite. Planilhas reais costumam ter nomes, CPF, valores e dados de clientes. Troque por exemplos fictícios com a mesma estrutura e peça a correção do método. Se a empresa tiver política de uso de IA, siga a regra dela antes de colar qualquer coisa em um chat.",
    },
    {
      question: "Quanto tempo leva para aprender o básico de planilhas?",
      answer:
        "Com 20 minutos por dia, cerca de quatro semanas bastam para o básico útil: tabela, soma, SE, busca e resumo. O tempo varia com a prática e com o ponto de partida de cada pessoa. O importante é a constância, não a duração de cada sessão de estudo.",
    },
  ],
  quiz: [
    {
      question: "Qual é a melhor forma de usar a IA para aprender uma fórmula nova?",
      options: [
        "Pedir a fórmula pronta e colar na planilha",
        "Tentar primeiro, depois pedir que a IA compare e explique a diferença",
        "Evitar testar para não gastar tempo",
      ],
      answer: 1,
      explanation:
        "Tentar primeiro e comparar depois mantém o aprendizado com você. Pedir a fórmula pronta resolve o dia, mas não ensina.",
    },
    {
      question: "O que o erro #REF! costuma indicar?",
      options: [
        "Divisão por zero",
        "Nome de função escrito errado",
        "Referência a uma célula que não existe mais",
      ],
      answer: 2,
      explanation:
        "O #REF! aparece quando a fórmula aponta para uma célula, linha, coluna ou aba que foi apagada.",
    },
  ],
};
