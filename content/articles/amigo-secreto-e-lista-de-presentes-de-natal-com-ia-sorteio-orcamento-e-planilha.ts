import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "amigo-secreto-e-lista-de-presentes-de-natal-com-ia-sorteio-orcamento-e-planilha",
  title: "Amigo secreto e presentes de Natal com IA: sorteio e orçamento",
  seoTitle: "Amigo secreto e lista de presentes de Natal com IA",
  excerpt:
    "Use a IA para montar a lista de presentes de Natal, dividir o orçamento por pessoa e organizar o amigo secreto, com sorteio na planilha, não no chatbot.",
  metaDescription:
    "Amigo secreto e lista de presentes de Natal com IA: como dividir o orçamento por pessoa, fazer o sorteio na planilha, pedir ideias de presente e evitar erros.",
  category: "iniciantes",
  articleSubcategory: "apps-e-tarefas",
  date: "2026-11-04",
  readTime: 6,
  imageQuery: "christmas gift list notebook wrapping paper",
  seed: 1118,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Comece pelo valor total que cabe no bolso e só depois divida por pessoa; a IA ajuda a montar a lista e sugerir presentes dentro de cada faixa.",
    "O sorteio do amigo secreto deve ser feito com função aleatória da planilha ou com um app de sorteio, não pedindo ao chatbot, que não garante sorteio justo nem segredo.",
    "Antes de comprar, confira preço, loja e regras de troca: troca por gosto ou tamanho só é obrigatória se a loja ofereceu, e a compra online tem 7 dias de arrependimento.",
  ],
  content: `
    <p>Para organizar o amigo secreto e a lista de presentes de Natal com IA, defina primeiro quanto pode gastar no total, liste as pessoas e peça ao chatbot ideias dentro de cada faixa de preço. O sorteio, porém, deve sair da planilha, com uma função aleatória, e não da conversa com a IA.</p>

    <p>Este guia mostra o passo a passo para quem nunca fez isso com IA: como montar a lista, dividir o dinheiro, fazer o sorteio sem ninguém espiar e pedir sugestões que não pareçam genéricas. No fim, há uma lista de erros comuns e os cuidados de consumidor antes de passar o cartão. Se você ainda está começando, o guia de <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">o que é inteligência artificial</a> explica o básico.</p>

    <h2>Passo 1: o orçamento antes da lista</h2>

    <p>O erro clássico é pensar nos presentes e só depois somar. Faça o contrário: decida o valor total e divida. O <a href="https://idec.org.br/consultas/dicas-e-direitos/confira-as-dicas-do-idec-e-faca-suas-compras-de-natal-com-seguranca" target="_blank" rel="noopener noreferrer">Idec recomenda</a> listar as pessoas que você quer presentear, anotar o item de cada uma e estimar quanto vai gastar com cada presente antes de sair às compras.</p>

    <p>Um exemplo: a Patrícia, de Recife, separou R$ 600 para o Natal. São 8 pessoas na lista e um amigo secreto da família com valor combinado de R$ 50. Ela reserva R$ 50 para o amigo secreto, R$ 80 para embrulhos e imprevistos e divide os R$ 470 restantes em três faixas: R$ 100 para mãe e marido, R$ 60 para os dois filhos e R$ 37,50 para os quatro sobrinhos. Se a sua renda de fim de ano depende do 13º, veja antes quanto vai cair em cada parcela no guia do <a href="/artigos/13o-salario-do-trabalhador-2026-datas-calculo-descontos-e-como-conferir-com-ia">13º salário do trabalhador</a>.</p>

    <h2>Passo 2: a planilha da lista de presentes</h2>

    <p>Uma planilha simples resolve. Crie no Google Planilhas ou no Excel as colunas abaixo e preencha uma linha por pessoa.</p>

    <table>
      <thead>
        <tr><th>Pessoa</th><th>Faixa (R$)</th><th>Ideia</th><th>Loja</th><th>Preço pago</th><th>Comprado?</th></tr>
      </thead>
      <tbody>
        <tr><td>Mãe</td><td>100</td><td>Livro de receitas</td><td>Livraria do bairro</td><td></td><td>Não</td></tr>
        <tr><td>Lucas (12 anos)</td><td>60</td><td>Jogo de tabuleiro</td><td>Loja online</td><td></td><td>Não</td></tr>
        <tr><td>Sobrinha Ana</td><td>37,50</td><td>Kit de pintura</td><td>Papelaria</td><td></td><td>Não</td></tr>
      </tbody>
    </table>

    <p>No fim da coluna "Preço pago", use a função SOMA para ver quanto já foi gasto, e subtraia do total para saber o que sobra. Se nunca usou fórmula, o guia de <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">planilhas do zero com IA</a> ensina SOMA e outras funções básicas. Também dá para pedir ao Gemini dentro do próprio Planilhas, como mostra o guia do <a href="/artigos/gemini-no-google-planilhas-no-iphone-e-android-como-usar-e-limites">Gemini no Google Planilhas pelo celular</a>.</p>

    <h2>Passo 3: pedir ideias de presente que fazem sentido</h2>

    <p>A IA dá sugestões genéricas quando recebe pedidos genéricos. Conte do que a pessoa gosta, a idade, o que ela já tem e o limite de preço. Não precisa dar nome completo nem dados pessoais: "minha mãe, 64 anos" basta.</p>

    <pre><code>Quero ideias de presente de Natal para minha mãe, 64 anos.
Ela gosta de cozinhar, de plantas e de novela.
Já tem air fryer e liquidificador.
Limite: R$ 100, comprando no Brasil.
Me dê 8 ideias em lista, com faixa de preço aproximada,
e marque quais são fáceis de achar em loja física.
Não invente marcas ou modelos específicos.</code></pre>

    <p>Trate os preços que a IA sugere como palpite, não como valor real: o chatbot pode estar desatualizado ou simplesmente errar. Confira sempre na loja. O guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">como checar se a resposta da IA está certa</a> explica por que isso acontece.</p>

    <h2>Passo 4: o sorteio do amigo secreto</h2>

    <p>Pedir ao ChatGPT ou ao Gemini "sorteie o amigo secreto" parece prático, mas tem dois problemas. Primeiro, o modelo de linguagem não faz um sorteio de verdade: ele gera texto que parece aleatório, e pode repetir nomes ou tirar a pessoa dela mesma. Segundo, quem pede o sorteio vê o resultado inteiro, e o segredo acaba.</p>

    <h3>Como sortear na planilha</h3>

    <p>O Google Planilhas tem a função ALEATÓRIOENTRE, que, segundo a <a href="https://support.google.com/docs/answer/3093507?hl=pt-BR" target="_blank" rel="noopener noreferrer">ajuda oficial do Google</a>, devolve um número inteiro aleatório entre dois valores. Uma forma simples, que evita alguém tirar a si mesmo, é o sorteio em círculo:</p>

    <ol>
      <li>Coloque os nomes na coluna A, um por linha.</li>
      <li>Na coluna B, escreva =ALEATÓRIOENTRE(1;1000) ao lado de cada nome.</li>
      <li>Selecione as duas colunas e ordene pela coluna B. A ordem dos nomes fica embaralhada.</li>
      <li>Cada pessoa tira quem está na linha de baixo; a última tira a primeira.</li>
      <li>Copie os pares e cole como "somente valores", porque a função recalcula sempre que a planilha muda.</li>
    </ol>

    <p>Para manter o segredo, uma pessoa de fora do grupo pode fazer o passo a passo e mandar a cada participante só o nome que tirou. Outra saída é usar um app ou site próprio de amigo secreto que envia o resultado individualmente por e-mail ou mensagem.</p>

    <div class="callout-box">
      <span class="callout-label">Onde a IA ajuda de verdade</span>
      <p>Use a IA para escrever o convite do grupo, as regras (valor, data, onde será a troca) e a lista de desejos de cada um. Peça: "escreva uma mensagem curta para o grupo da família com as regras do amigo secreto: valor R$ 50, troca dia 24 às 20h, cada um manda três sugestões até dia 10".</p>
    </div>

    <h2>Passo 5: lembretes e prazos</h2>

    <p>Natal tem prazo fixo, e compra online pode atrasar. Marque na agenda a data limite para pedir pela internet com folga e um lembrete para embrulhar. O guia de <a href="/artigos/google-tarefas-e-lembretes-no-celular-organizar-a-semana-com-ia-passo-a-passo">tarefas e lembretes no celular com IA</a> mostra como transformar a lista em tarefas com data. Quem prefere anotações rápidas pode usar o <a href="/artigos/google-keep-notas-listas-e-lembretes-com-gemini-como-organizar-sem-bagunca">Google Keep com listas e lembretes</a>.</p>

    <h2>Cuidados antes de comprar</h2>

    <p>A IA organiza, mas a compra é sua. O <a href="https://www.procon.sp.gov.br/procon-sp-esclarece-sobre-condicoes-para-a-trocas-de-presentes-e-alerta-para-os-prazos/" target="_blank" rel="noopener noreferrer">Procon-SP lembra</a> que a loja não é obrigada a trocar produto que não serviu ou não agradou, a menos que tenha oferecido essa troca na compra ou que o produto tenha defeito. Por isso, peça que a condição de troca venha escrita na nota. Já a compra feita fora da loja, como pela internet, pode ser cancelada em até 7 dias do recebimento.</p>

    <ul class="checklist">
      <li>Compare o preço em mais de uma loja antes de fechar.</li>
      <li>Pergunte a regra de troca e peça para anotar na nota fiscal.</li>
      <li>Em loja online desconhecida, pesquise CNPJ e reclamações antes de pagar.</li>
      <li>Desconfie de promoção enviada por mensagem com link encurtado; veja <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">como checar mensagem suspeita com IA</a>.</li>
      <li>Guarde notas e comprovantes numa pasta só, para facilitar uma eventual troca.</li>
    </ul>

    <p>Se for aproveitar a Black Friday para adiantar presentes, o guia de <a href="/artigos/comprar-na-black-friday-comparar-precos-evitar-golpe-e-arrependimento">comprar na Black Friday sem cair em golpe</a> complementa esta lista.</p>

    <h2>Erros comuns</h2>

    <p>O primeiro é confiar no sorteio feito pelo chatbot. O segundo é colocar na conversa com a IA dados que ela não precisa, como endereço ou CPF de quem vai receber o presente. O terceiro é não ter uma linha de imprevistos no orçamento: embrulho, frete e o presente de última hora para a visita surpresa sempre aparecem.</p>

    <p>O quarto é deixar a planilha recalcular o sorteio depois de divulgado. Se alguém editar a planilha e a função ALEATÓRIOENTRE rodar de novo, os pares mudam. Por isso o passo de colar como valores é obrigatório. O quinto é aceitar a primeira lista de ideias: peça à IA para cortar as sugestões óbvias e trazer opções ligadas ao que a pessoa gosta.</p>

    <h2>Para fechar</h2>

    <p>Monte hoje a planilha com o total, as pessoas e as faixas, combine as regras do amigo secreto no grupo e faça o sorteio na planilha, com alguém de fora cuidando do resultado. Depois, use a IA para as ideias e para os textos, e confira preço e troca antes de comprar. Se gostou do método, use a mesma lógica para a ceia ou para a <a href="/artigos/como-usar-ia-para-planejar-festa-de-aniversario-com-orcamento">festa de aniversário com orçamento</a>.</p>
  `,
  faq: [
    {
      question: "Posso pedir ao ChatGPT para sortear o amigo secreto?",
      answer:
        "Não é recomendado. O chatbot gera texto que parece aleatório, mas não garante sorteio justo, pode repetir nomes ou sortear a pessoa para ela mesma, e quem pede vê todos os pares. Use a função ALEATÓRIOENTRE da planilha ou um app de sorteio.",
    },
    {
      question: "Como fazer o sorteio do amigo secreto no Google Planilhas?",
      answer:
        "Liste os nomes, coloque =ALEATÓRIOENTRE(1;1000) ao lado de cada um, ordene por essa coluna e faça cada pessoa tirar quem está na linha de baixo, com a última tirando a primeira. Depois cole os pares como valores para a função não recalcular.",
    },
    {
      question: "Como dividir o orçamento de presentes de Natal?",
      answer:
        "Defina o valor total, separe uma parte para o amigo secreto e para imprevistos como embrulho e frete, e divida o restante em faixas por grupo de pessoas. A IA ajuda a sugerir presentes dentro de cada faixa.",
    },
    {
      question: "A loja é obrigada a trocar presente que não serviu?",
      answer:
        "Não, segundo o Procon-SP, a menos que a loja tenha oferecido a troca na compra ou que o produto tenha defeito. Peça que a condição de troca seja anotada na nota. Compras pela internet podem ser canceladas em até 7 dias.",
    },
  ],
  quiz: [
    {
      question: "Por que colar o resultado do sorteio como valores na planilha?",
      options: [
        "Para a planilha ficar mais bonita",
        "Porque a função aleatória recalcula e mudaria os pares",
        "Porque o Google exige",
      ],
      answer: 1,
      explanation: "ALEATÓRIOENTRE gera novos números sempre que a planilha é alterada, o que bagunçaria o sorteio já divulgado.",
    },
    {
      question: "Qual é a primeira coisa a definir na lista de presentes?",
      options: ["O presente mais caro", "O valor total que cabe no bolso", "A loja"],
      answer: 1,
      explanation: "Com o total definido, fica fácil dividir por pessoa e evitar gastar mais do que pode.",
    },
  ],
};
