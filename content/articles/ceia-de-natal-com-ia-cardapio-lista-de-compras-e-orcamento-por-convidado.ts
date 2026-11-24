import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ceia-de-natal-com-ia-cardapio-lista-de-compras-e-orcamento-por-convidado",
  title: "Ceia de Natal com IA: cardápio, compras e orçamento por convidado",
  seoTitle: "Ceia de Natal com IA: cardápio, compras e orçamento",
  excerpt:
    "Veja como usar IA para montar a ceia de Natal: cardápio para o número de convidados, lista de compras, orçamento por pessoa e cuidados com as sobras.",
  metaDescription:
    "Veja como usar IA para montar a ceia de Natal: cardápio para o número de convidados, lista de compras, orçamento por pessoa e cuidados com as sobras.",
  category: "iniciantes",
  articleSubcategory: "vida-pratica",
  date: "2026-11-24",
  readTime: 8,
  imageQuery: "christmas dinner table family",
  seed: 1278,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA monta o cardápio, a lista de compras e a divisão de tarefas em minutos, mas só se você informar número de convidados, orçamento e restrições alimentares.",
    "O orçamento por convidado se calcula com uma conta simples de planilha, e a IA ajuda a cortar o que pesa sem tirar o que a família espera na mesa.",
    "A segurança do alimento não é com a IA: a Anvisa orienta manter quente acima de 60 °C, frio abaixo de 5 °C e consumir as sobras refrigeradas em até cinco dias.",
  ],
  content: `
    <p>Para montar a ceia de Natal com IA, você informa o número de convidados, o orçamento, as restrições alimentares e o que a família não abre mão, e pede um cardápio com lista de compras e divisão de tarefas. O resultado sai em minutos e serve de rascunho: preços, quantidades e segurança do alimento você confere com a sua realidade.</p>
    <p>Faltando pouco mais de um mês para o dia 24, este é o melhor momento para planejar sem correria e sem pagar caro por compra de última hora. O guia abaixo traz prompts prontos, uma conta de orçamento por pessoa e os cuidados com as sobras.</p>

    <h2>O que a IA faz bem na ceia e o que ela não resolve</h2>
    <p>Uma IA como ChatGPT, Gemini ou Claude é boa para organizar: sugere pratos que combinam, ajusta porções para o número de pessoas, separa a lista por seção do mercado e distribui tarefas entre os parentes. É um trabalho de planejamento, o mesmo tipo de tarefa que aparece no guia de <a href="/artigos/como-usar-ia-para-planejar-refeicoes-e-economizar-no-mercado">planejar refeições e economizar no mercado</a>.</p>
    <p>O que ela não sabe é o preço do dia no seu mercado, o tamanho do seu forno ou o que o tio de Minas não come. Também erra conta de vez em quando, como explica o texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>. Por isso, trate a resposta como esboço e refaça as quantidades principais na calculadora.</p>
    <ul class="checklist">
      <li>Use a IA para: cardápio, quantidades iniciais, lista de compras, cronograma do dia 24 e divisão de tarefas.</li>
      <li>Confira você mesmo: preços, alergias e restrições, tempo de forno, validade dos produtos.</li>
      <li>Não envie à IA: endereços, telefones ou dados pessoais dos convidados. Dê só o necessário, como número de pessoas e restrições, e veja <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber</a>.</li>
    </ul>

    <h2>Passo 1: defina os números antes de pedir o cardápio</h2>
    <p>Sem número, a IA devolve um cardápio genérico. Antes de abrir o aplicativo, anote cinco informações:</p>
    <ol>
      <li>Quantas pessoas vêm, separando adultos e crianças.</li>
      <li>Quanto você pode gastar no total (um teto, não uma média).</li>
      <li>Restrições: alergia, intolerância, vegetarianos, quem não come porco ou peixe.</li>
      <li>Equipamentos: tamanho do forno, se tem air fryer, quantas bocas no fogão, espaço na geladeira.</li>
      <li>O que não pode faltar: o prato que a família cobra todo ano.</li>
    </ol>
    <p>Esse levantamento leva dez minutos e muda a qualidade da resposta. Se a ceia é dividida entre várias casas, combine antes quem leva o quê, porque a IA não adivinha o que o resto da família já decidiu.</p>

    <h2>Prompts prontos para o cardápio e a lista</h2>
    <p>Cole o primeiro prompt trocando os dados entre colchetes. Ele já pede o que costuma faltar: quantidades por pessoa e uma versão mais barata.</p>
    <pre><code>Você é um organizador de ceias de Natal para famílias brasileiras. Monte um cardápio para [12] pessoas ([9] adultos e [3] crianças), com orçamento máximo de R$ [600]. Restrições: [uma pessoa vegetariana, uma alérgica a camarão]. Tenho forno de [50] litros e [4] bocas no fogão. A família exige [peru ou chester e arroz com passas]. Inclua entrada, pratos principais, acompanhamentos, sobremesa e bebidas sem álcool. Para cada item, dê a quantidade total e a quantidade por pessoa. No fim, aponte os 3 itens que mais pesam no orçamento e sugira uma versão mais barata de cada um.</code></pre>
    <p>Com o cardápio aprovado, peça a lista de compras organizada para o mercado:</p>
    <pre><code>Com base no cardápio acima, monte a lista de compras agrupada por seção (hortifruti, açougue, mercearia, frios e laticínios, bebidas, descartáveis). Informe a quantidade em quilos, litros ou unidades. Marque com um asterisco o que posso comprar já, por ser não perecível, e o que só devo comprar nos dias 22 e 23. Não invente preços.</code></pre>
    <p>A última instrução, "não invente preços", é importante. Se a IA tiver acesso à internet no seu plano, ela pode citar valores, mas confira no encarte ou no aplicativo do mercado antes de somar.</p>

    <h2>Passo 2: calcule o orçamento por convidado</h2>
    <p>A conta é simples e cabe em qualquer planilha. Some o custo de todos os itens e divida pelo número de pessoas. Contar crianças como meia porção é um jeito comum de ser mais justo, mas é uma escolha sua, não uma regra.</p>
    <table>
      <thead>
        <tr><th>Grupo de itens</th><th>Valor ilustrativo</th><th>Parte do total</th></tr>
      </thead>
      <tbody>
        <tr><td>Carne principal (peru, chester ou lombo)</td><td>R$ 220</td><td>37%</td></tr>
        <tr><td>Acompanhamentos (arroz, farofa, salada, batata)</td><td>R$ 110</td><td>18%</td></tr>
        <tr><td>Entradas e frios</td><td>R$ 70</td><td>12%</td></tr>
        <tr><td>Sobremesas</td><td>R$ 90</td><td>15%</td></tr>
        <tr><td>Bebidas</td><td>R$ 80</td><td>13%</td></tr>
        <tr><td>Descartáveis e embalagens para levar sobras</td><td>R$ 30</td><td>5%</td></tr>
        <tr><td><strong>Total</strong></td><td><strong>R$ 600</strong></td><td>100%</td></tr>
      </tbody>
    </table>
    <p>Os valores são ilustrativos, só para mostrar a conta. Para 12 pessoas, o gasto de R$ 600 dá R$ 50 por convidado. Se 3 deles forem crianças contadas como meia porção, são 10,5 porções e o custo por porção sobe para cerca de R$ 57. Nenhum desses números vale para a sua cidade: troque pelos preços que você encontrar.</p>
    <p>Quando o total passa do teto, peça à IA para cortar sem estragar a mesa. Um bom comando é: "o total passou de R$ 600; sugira trocas que reduzam 15% sem tirar o prato principal nem a sobremesa". As trocas costumam ser corte de pratos que repetem o mesmo ingrediente, versões caseiras de itens prontos e menos variedade de bebida.</p>

    <h2>Passo 3: olhe o caixa de dezembro antes de comprar</h2>
    <p>A ceia disputa dinheiro com presentes, viagem e as contas de janeiro. Se você conta com o décimo terceiro, veja o guia que mostra as <a href="/artigos/13o-salario-do-trabalhador-2026-datas-calculo-descontos-e-como-conferir-com-ia">datas e o cálculo do 13º em 2026</a> antes de decidir o teto. Quem parcela no cartão deve conferir como isso entra na fatura, tema do texto sobre <a href="/artigos/fatura-do-cartao-com-ia-assinaturas-esquecidas-rotativo-e-o-que-nao-enviar">fatura do cartão com IA</a>.</p>
    <p>Para não perder o controle, registre cada compra em uma planilha de duas colunas: o que foi e quanto custou. Quem ainda não tem o hábito pode seguir <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">o guia de finanças pessoais com IA</a> e, se quiser ir além do básico, aprender as fórmulas com <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">planilhas do zero com IA</a>.</p>
    <p>Duas regras ajudam a segurar o gasto sem estresse:</p>
    <ul>
      <li>Compre o não perecível já, quando houver promoção, e deixe carnes frescas e hortifruti para a semana do Natal. Na Black Friday, vale seguir os cuidados do guia sobre <a href="/artigos/comprar-na-black-friday-comparar-precos-evitar-golpe-e-arrependimento">comparar preços e evitar golpe</a>.</li>
      <li>Combine o "cada um leva um prato" com tempo. Cobrar tarefa de última hora vira briga, e a IA ajuda a escrever a mensagem educada para o grupo da família.</li>
    </ul>

    <h2>Passo 4: cronograma do dia 24 e divisão de tarefas</h2>
    <p>Ceia boa é a que sai na hora e sem ninguém exausto. Peça à IA um cronograma de trás para frente, a partir do horário em que a mesa será servida.</p>
    <pre><code>A ceia será servida às 22h do dia 24. Monte um cronograma de trás para frente, do dia 22 ao dia 24, com tarefas de preparo e tempo estimado: o que descongelar, o que marinar, o que assar e o que montar. Considere um forno só. Aponte quando cada prato deve estar pronto e como mantê-lo quente até servir. Divida as tarefas entre [3 pessoas: eu, minha mãe e meu irmão].</code></pre>
    <p>Confira o resultado com atenção ao forno. É onde os cronogramas gerados por IA mais falham, porque somam pratos que exigem temperaturas diferentes ao mesmo tempo. Se houver conflito, peça para reorganizar usando air fryer, micro-ondas ou preparo no dia anterior.</p>
    <p>Para compartilhar, peça a lista final em formato de texto curto e mande no grupo da família. Quem divide a ceia entre casas pode usar a mesma ideia do <a href="/artigos/amigo-secreto-e-lista-de-presentes-de-natal-com-ia-sorteio-orcamento-e-planilha">amigo secreto e da lista de presentes</a> para organizar quem leva o quê.</p>

    <h2>Segurança do alimento: o que a Anvisa orienta</h2>
    <p>Essa parte não se delega a um chatbot. Em notícia sobre as <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2024/ceias-de-fim-de-ano-com-seguranca-sanitaria-e-saude-no-prato" target="_blank" rel="noopener noreferrer">ceias de fim de ano com segurança sanitária</a>, publicada em dezembro de 2024, a Anvisa orienta manter os alimentos quentes acima de 60 ºC até a hora de servir e os frios abaixo de 5 ºC. Também pede para guardar na geladeira os alimentos cozidos e perecíveis e diminuir ao máximo o tempo entre o preparo e o consumo.</p>
    <table>
      <thead>
        <tr><th>Situação</th><th>Orientação da Anvisa</th></tr>
      </thead>
      <tbody>
        <tr><td>Prato quente na mesa</td><td>Manter acima de 60 ºC até servir</td></tr>
        <tr><td>Prato frio (saladas, maioneses, sobremesas geladas)</td><td>Manter abaixo de 5 ºC até servir</td></tr>
        <tr><td>Descongelamento</td><td>Nunca em temperatura ambiente: na geladeira, abaixo de 5 ºC, ou no micro-ondas com cozimento imediato</td></tr>
        <tr><td>Carnes de boi e de ave</td><td>Cozinhar até as partes internas não ficarem cruas, com suco claro e não rosado</td></tr>
        <tr><td>Sobras na geladeira</td><td>Consumir em até cinco dias</td></tr>
      </tbody>
    </table>
    <p>A página da Anvisa não traz um tempo em horas para o alimento ficar fora da geladeira nem regras de reaquecimento, então não vou inventar um número aqui. Na dúvida, siga a lógica da própria orientação: quanto menos tempo o prato fica entre 5 ºC e 60 ºC, melhor. Informações gerais da agência sobre o tema estão na <a href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos" target="_blank" rel="noopener noreferrer">seção de alimentos da Anvisa</a>.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>A IA pode sugerir tempos de forno e de conservação que parecem corretos, mas que não vêm de fonte oficial. Para carne de ave e peças grandes, siga a embalagem e a orientação da Anvisa, e na dúvida cozinhe mais.</p></div>

    <h2>Erros comuns ao planejar a ceia com IA</h2>
    <ul>
      <li><strong>Pedir sem informar o número de pessoas:</strong> a IA devolve porções de restaurante e a conta não fecha.</li>
      <li><strong>Aceitar quantidades sem conferir:</strong> uma peça de carne por pessoa é muito mais do que se precisa. Refaça as quantidades dos itens mais caros.</li>
      <li><strong>Esquecer as restrições:</strong> alergia é assunto sério. Pergunte a cada convidado e peça à IA para marcar os pratos com os ingredientes de risco, mas confirme a lista de ingredientes nos rótulos.</li>
      <li><strong>Planejar com um forno só:</strong> três pratos que precisam de forno ao mesmo tempo viram o maior drama da noite.</li>
      <li><strong>Sem plano para as sobras:</strong> prepare potes e etiquete com a data. O prazo da Anvisa é de cinco dias refrigerado, e o que não for comido vai para o congelador.</li>
      <li><strong>Deixar tudo para o dia 23:</strong> perecíveis em cima da hora, filas e preço alto. Distribua as compras em duas ou três idas.</li>
    </ul>

    <h2>Como usar o que sobrou, com a IA</h2>
    <p>Um bom uso da IA vem depois da ceia: informe os ingredientes que sobraram e peça ideias para o dia 25 e 26, sem passar do prazo de conservação. Um prompt direto resolve:</p>
    <pre><code>Sobraram de ontem: peru assado, farofa, arroz com passas, salpicão e pudim. Sugira 4 refeições simples para o almoço e o jantar de hoje e amanhã, usando só esses itens mais arroz, ovos e salada. Lembre-me do prazo máximo de consumo das sobras: cinco dias na geladeira, conforme a Anvisa.</code></pre>
    <p>Esse é o tipo de tarefa em que a IA brilha: criar variação a partir do que já existe. Para montar um hábito de uso no dia a dia, o <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">guia do primeiro assistente de IA pessoal</a> mostra como deixar o aplicativo pronto, e o texto sobre <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">como escrever comandos que funcionam</a> ajuda a pedir melhor.</p>
    <p>Se a data é de viagem e não de mesa cheia, o caminho é outro: veja como <a href="/artigos/planejar-viagem-com-ia-roteiro-orcamento-e-checagem-antes-de-reservar">planejar viagem com IA</a>. E para quem organiza festa de outro tipo no fim do ano, o <a href="/artigos/como-usar-ia-para-planejar-festa-de-aniversario-com-orcamento">planejamento de festa com orçamento</a> usa a mesma lógica.</p>
    <p>Comece hoje pelos números: convidados, teto e restrições. Cole o primeiro prompt, ajuste o cardápio e ainda em novembro você já sabe o que comprar em promoção. Para mais guias do dia a dia, passe pela categoria <a href="/categoria/iniciantes">Iniciantes</a>.</p>
  `,
  faq: [
    {
      question: "Dá para montar a ceia de Natal com IA?",
      answer:
        "Dá. Informe número de convidados, orçamento, restrições alimentares e o equipamento que você tem, e peça cardápio, lista de compras e cronograma. A IA serve de rascunho: confira preços, quantidades e tempos de preparo, e não use a resposta no lugar das orientações de segurança da Anvisa.",
    },
    {
      question: "Quanto custa uma ceia de Natal por pessoa?",
      answer:
        "Depende do cardápio, da cidade e da época. O guia usa um exemplo ilustrativo de R$ 600 para 12 pessoas, ou R$ 50 por convidado, só para mostrar a conta. O jeito certo é somar os preços reais do seu mercado e dividir pelo número de porções.",
    },
    {
      question: "Quanto tempo as sobras da ceia duram na geladeira?",
      answer:
        "A Anvisa, em notícia de dezembro de 2024, informa que o prazo máximo de consumo do alimento preparado e guardado sob refrigeração é de cinco dias, com a geladeira abaixo de 5 ºC. O que você não for comer nesse prazo deve ir para o congelador, em potes datados.",
    },
    {
      question: "A IA pode errar a quantidade de comida?",
      answer:
        "Pode. Modelos de linguagem erram contas e costumam sugerir porções grandes. Peça a quantidade por pessoa, refaça o cálculo dos itens mais caros na calculadora e ajuste crianças como meia porção se preferir. Em dúvida, compare com o que sobrou nas ceias anteriores.",
    },
    {
      question: "Posso passar dados dos convidados para a IA?",
      answer:
        "Evite. Para planejar a ceia, bastam o número de pessoas e as restrições alimentares, sem nomes completos, telefones ou endereços. Quanto menos dado pessoal você envia, menor o risco, e a qualidade do cardápio não muda.",
    },
  ],
};
