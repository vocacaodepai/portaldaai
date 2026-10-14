import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "licao-de-casa-com-ia-como-ajudar-o-filho-sem-fazer-por-ele",
  title: "Lição de casa com IA: como ajudar o filho sem fazer por ele",
  seoTitle: "Lição de casa com IA: como ajudar o filho a aprender",
  excerpt:
    "Lição de casa com IA pode ajudar seu filho a entender a matéria ou virar atalho. Veja regras por idade, prompts seguros, sinais de alerta e privacidade.",
  metaDescription:
    "Lição de casa com IA: regras por faixa etária, prompts que pedem explicação e não resposta, sinais de alerta, Family Link e privacidade para pais.",
  category: "iniciantes",
  articleSubcategory: "vida-pratica",
  date: "2026-10-14",
  readTime: 7,
  imageQuery: "parent child homework kitchen table",
  seed: 304,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA ajuda na lição de casa quando explica o caminho e o aluno faz o trabalho; vira problema quando entrega a resposta pronta e o raciocínio fica de fora.",
    "A Common Sense Media recomenda, no ensino fundamental inicial, usar IA junto com um adulto e focar em explicações, e no ensino médio um uso estratégico, não automático.",
    "Para menores de 13 anos, o Google exige conta supervisionada pelo Family Link para usar o Gemini, e os próprios filtros do serviço, segundo o Google, não são perfeitos.",
  ],
  content: `
    <p>A lição de casa com IA funciona quando a inteligência artificial explica e o aluno resolve. Peça ao assistente que ensine o caminho, faça perguntas e corrija, e não que entregue a resposta final. A regra prática para pais é simples: se seu filho não consegue explicar com as próprias palavras o que a IA respondeu, ele não aprendeu, só copiou.</p>

    <p>Este guia mostra como montar combinados em casa, quais prompts usar, o que muda por idade, que sinais indicam que a IA está fazendo o trabalho por ele e quais cuidados de segurança e privacidade tomar. Se você ainda está conhecendo o assunto, o texto <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">O que é inteligência artificial</a> explica o básico em linguagem simples.</p>

    <h2>Quando a IA ajuda e quando atrapalha</h2>

    <p>Ajuda quando faz o papel de um professor particular paciente: explica de outro jeito, dá um exemplo, propõe exercícios parecidos e aponta onde o raciocínio travou. Atrapalha quando resolve a questão, escreve a redação ou resume o livro que o aluno devia ler. O resultado até parece bom, mas o esforço que fixa o conteúdo foi pulado.</p>

    <p>A diferença está na forma do pedido. "Resolva esta equação" entrega a resposta. "Me explique os passos para resolver este tipo de equação e me dê uma parecida para eu tentar" mantém o trabalho com o aluno. O guia de <a href="/artigos/aulas-particulares-com-ia-como-montar-reforco-escolar">aulas particulares com IA</a> mostra essa lógica aplicada a reforço escolar.</p>

    <h2>O que a Common Sense Media recomenda por idade</h2>

    <p>A organização americana Common Sense Media publica um <a href="https://www.commonsensemedia.org/using-ai-wisely-for-school-success" target="_blank" rel="noopener noreferrer">guia de uso da IA para o sucesso escolar</a> (conferido em 14/10/2026), em inglês, com orientações por faixa etária. Resumindo o que a página diz:</p>

    <table>
      <thead>
        <tr><th>Faixa escolar</th><th>Orientação do guia</th></tr>
      </thead>
      <tbody>
        <tr><td>Fundamental inicial (cerca de 6 a 10 anos)</td><td>Usar IA junto com um adulto, se for usar, com foco em explicações e não em respostas; evitar uso independente de chatbots</td></tr>
        <tr><td>Fundamental final (cerca de 11 a 14 anos)</td><td>Usar para prática e revisão, não para entregar tarefas; conversar sobre erros e viés; incentivar transparência sobre o uso</td></tr>
        <tr><td>Ensino médio</td><td>Uso estratégico, não automático; valorizar a voz e a autoria próprias; ensinar quando não usar IA</td></tr>
      </tbody>
    </table>

    <p>A correspondência com as séries brasileiras é aproximada, porque o guia usa a divisão americana. Adapte à realidade da sua família e às regras da escola. O próprio guia sugere ficar atento quando a tarefa começa a parecer fácil demais, sinal de que a IA pode estar fazendo o trabalho real.</p>

    <h2>Combinados em casa: um acordo simples de cinco regras</h2>

    <p>Antes de qualquer ferramenta, converse. Combinados claros evitam brigas e ensinam responsabilidade. Um acordo possível, que você pode adaptar:</p>

    <ul class="checklist">
      <li>Primeiro tento sozinho; só depois peço ajuda à IA</li>
      <li>Peço explicação e exemplos, nunca a resposta pronta</li>
      <li>Conto à professora e aos pais quando usei IA e como usei</li>
      <li>Confiro as respostas no caderno, no livro ou com um adulto</li>
      <li>Não passo nome completo, escola, endereço nem fotos para a IA</li>
    </ul>

    <p>A transparência é um ponto-chave. Muitas escolas têm regras próprias sobre IA, e esconder o uso gera problema maior que o próprio uso. Para entender por que detectores de texto não resolvem essa questão, leia o guia sobre <a href="/artigos/detector-de-texto-de-ia-funciona-ou-nao-como-saber-se-foi-escrito-por-ia">detector de texto de IA</a>.</p>

    <h2>Prompts que ensinam em vez de entregar</h2>

    <p>Os prompts abaixo deixam a IA no papel de tutora. Cole no assistente e troque o conteúdo entre colchetes. Para crianças pequenas, o adulto digita e lê junto.</p>

    <pre><code>Você é um tutor paciente para um aluno do 7º ano. Não me dê a resposta final. Explique em linguagem simples como resolver este tipo de problema: [cole o enunciado]. Faça uma pergunta de cada vez e espere minha resposta antes de continuar. Se eu errar, mostre onde pensei errado, sem corrigir por mim.</code></pre>

    <pre><code>Li este texto para a aula de Português: [cole o trecho]. Em vez de resumir, faça 5 perguntas para eu checar se entendi, da mais simples à mais difícil. Depois de eu responder, diga o que acertei e o que faltou, sem escrever a resposta por mim.</code></pre>

    <pre><code>Escrevi esta redação: [cole o texto]. Não reescreva. Aponte 3 pontos fortes, 3 pontos que posso melhorar e 2 perguntas que me ajudem a revisar o argumento. Use o que a minha professora pediu: [critérios].</code></pre>

    <p>O segredo é o pedido de uma pergunta por vez, que obriga o aluno a pensar. O guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">como escrever comandos que funcionam</a> explica por que esse tipo de instrução melhora a resposta, e o de <a href="/artigos/flashcards-com-ia-estudar-melhor-notebooklm-e-anki">flashcards com IA</a> mostra como transformar a matéria em perguntas de revisão.</p>

    <h2>Sinais de alerta de que a IA está fazendo o trabalho</h2>

    <p>A Common Sense Media lista sinais que valem para qualquer família. Preste atenção se a lição passou a parecer fácil demais, se a criança não consegue explicar a resposta sem a ajuda do assistente, ou se a IA parece pensar no lugar dela. Um teste caseiro: peça que ela ensine o conteúdo para você, em voz alta, sem olhar a tela. Quem aprendeu consegue; quem copiou, trava.</p>

    <p>Outro cuidado vale para adolescentes: o mesmo guia alerta que recorrer à IA como apoio emocional pode atrapalhar o desenvolvimento de formas saudáveis de lidar com sofrimento, e recomenda buscar um adulto de confiança ou um profissional nesses momentos. Conversar sobre isso com naturalidade, antes de acontecer, ajuda.</p>

    <h2>Segurança e privacidade: Family Link, filtros e dados</h2>

    <p>Segundo a <a href="https://support.google.com/families/answer/16109150?hl=pt-BR" target="_blank" rel="noopener noreferrer">página de ajuda do Google sobre o Gemini para menores de 13 anos</a> (conferida em 14/10/2026), crianças nessa faixa podem usar os apps do Gemini com conta supervisionada, e os pais ativam ou desativam o acesso no aplicativo Family Link, em Controles, Gemini, Apps do Gemini. Os pais recebem um e-mail quando a criança usa o app pela primeira vez, e a liberação está sendo gradual.</p>

    <p>O Google também faz avisos que valem para qualquer assistente: os filtros não são perfeitos, e a criança pode encontrar conteúdo que você não quer que ela veja; a ferramenta pode errar e apresentar informação imprecisa como fato; ela não deve ser tratada como amiga; e a criança deve aprender a não compartilhar informações pessoais, como endereço, nome da escola ou dados da família. O guia de <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade em IA</a> aprofunda o que costuma ser compartilhado sem perceber.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Regras de idade e disponibilidade variam por serviço e mudam com o tempo. Leia os termos do aplicativo que seu filho usa antes de liberar o acesso.</p></div>

    <h2>Exemplo: uma tarde de lição com a IA como tutora</h2>

    <p>Considere uma família em Curitiba. Lucas, de 12 anos, trava em porcentagem. A mãe senta ao lado dele, abre o assistente e digita o primeiro prompt, pedindo que ele explique sem dar a resposta. A IA faz uma pergunta sobre um desconto de 20% em uma camiseta de R$ 80. Lucas erra, a IA mostra onde o raciocínio escorregou, e ele refaz. Em 20 minutos, ele resolve três problemas parecidos sozinho.</p>

    <p>No dia seguinte, a mãe pede que ele explique o método para a irmã. Se ele explica, o objetivo foi cumprido. Se trava, voltam ao exemplo. O ganho aqui é de compreensão, não de velocidade. O custo é zero no plano gratuito de muitos assistentes, mas os limites e recursos mudam, então consulte as páginas oficiais. Para escolher qual assistente usar, o guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> compara as opções.</p>

    <h2>Erros comuns de pais e alunos</h2>

    <ul>
      <li><strong>Proibir sem conversar.</strong> O uso escondido é mais arriscado que o uso combinado.</li>
      <li><strong>Liberar sem supervisão para crianças pequenas.</strong> No fundamental inicial, o adulto deve estar junto.</li>
      <li><strong>Aceitar a resposta da IA sem checar.</strong> O texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> ensina a conferir.</li>
      <li><strong>Usar a IA para redação inteira.</strong> A escola e a vida pedem voz própria.</li>
      <li><strong>Esquecer dos outros recursos.</strong> Livro, caderno e professor continuam sendo a base.</li>
    </ul>

    <p>Para estudantes mais velhos, a IA pode ser uma aliada na revisão, como mostram os guias de <a href="/artigos/como-usar-ia-para-estudar-para-provas-e-concursos">estudar para provas e concursos com IA</a> e do <a href="/artigos/enem-2026-com-ia-plano-de-estudos-e-redacao-ate-a-prova">Enem 2026</a>. Pais que querem entender os principais deslizes de quem está começando encontram um bom resumo em <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">5 erros comuns de quem está começando a usar IA</a>.</p>

    <p>O objetivo não é proibir nem liberar tudo, e sim ensinar seu filho a usar a IA como quem usa uma calculadora: para ir mais longe, depois de entender a conta. Comece hoje com o acordo de cinco regras e um prompt de tutor. Para mais guias do dia a dia, visite a <a href="/categoria/iniciantes">categoria Iniciantes</a> do Portal da AI.</p>
  `,
  faq: [
    {
      question: "Meu filho pode usar IA para fazer a lição de casa?",
      answer:
        "Pode usar como apoio, desde que a IA explique e ele resolva. A Common Sense Media recomenda uso junto com um adulto no fundamental inicial, com foco em explicações, e uso estratégico no ensino médio. Combine regras em casa e confira também a política da escola.",
    },
    {
      question: "A partir de que idade a criança pode usar o Gemini?",
      answer:
        "Segundo o Google, menores de 13 anos podem usar os apps do Gemini com uma conta supervisionada, e os pais controlam o acesso pelo Family Link. A liberação é gradual e varia por região. Leia os termos de cada serviço, porque as regras mudam com o tempo.",
    },
    {
      question: "Como saber se meu filho está copiando da IA?",
      answer:
        "Observe se a lição parece fácil demais e se ele consegue explicar a resposta com as próprias palavras sem olhar a tela. Peça que ele ensine o conteúdo a você. Quem aprendeu explica com segurança; quem apenas copiou costuma travar ao ser questionado.",
    },
    {
      question: "Qual prompt usar para a IA ensinar sem dar a resposta?",
      answer:
        "Peça que a IA atue como tutora, explique o caminho, faça uma pergunta por vez e espere a resposta do aluno antes de continuar. Acrescente: não me dê a resposta final. Se o aluno errar, ela deve apontar onde o raciocínio falhou, sem corrigir por ele.",
    },
    {
      question: "É seguro deixar a criança conversar com a IA sozinha?",
      answer:
        "Para crianças pequenas, o ideal é usar junto. O Google avisa que os filtros não são perfeitos, que a ferramenta pode errar e que a criança não deve compartilhar endereço, escola ou dados da família. Quanto menor a criança, maior a necessidade de supervisão de um adulto.",
    },
  ],
};
