import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "aprender-python-com-ia-roteiro-de-30-dias-para-iniciantes",
  title: "Aprender Python com IA: roteiro de 30 dias para iniciantes",
  seoTitle: "Aprender Python com IA: roteiro de 30 dias",
  excerpt:
    "Aprender Python com IA fica mais rápido quando a IA explica e você escreve o código. Veja um roteiro de 30 dias, prompts prontos e como começar sem instalar.",
  metaDescription:
    "Aprender Python com IA em 30 dias: roteiro semanal, prompts para pedir explicação sem copiar código pronto, uso do Google Colab e erros comuns de iniciantes.",
  category: "iniciantes",
  articleSubcategory: "estudos",
  date: "2026-10-18",
  readTime: 6,
  imageQuery: "laptop code notebook beginner learning",
  seed: 398,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA funciona melhor como tutora: você escreve o código, ela explica o erro e propõe o próximo exercício, em vez de entregar a solução pronta.",
    "Dá para começar sem instalar nada: o Google Colab roda notebooks no navegador, tem acesso grátis a recursos de computação e ajuda do Gemini para gerar, explicar e depurar código.",
    "O roteiro de 30 dias tem quatro semanas (básico, decisões, listas e arquivos, mini projeto); a documentação oficial do Python, em português, serve como consulta, não como primeira aula.",
  ],
  content: `
    <p>Aprender Python com IA significa usar um assistente como tutor: você escreve cada linha de código, e a IA explica o que deu errado, sugere exercícios e responde dúvidas a qualquer hora. O roteiro abaixo cabe em 30 dias, com cerca de 30 a 45 minutos por dia, e não exige instalar nada no começo.</p>

    <p>Python é uma boa primeira linguagem porque a escrita é parecida com o inglês simples, e o site oficial a descreve como fácil de usar e aprender para iniciantes. O erro mais comum de quem começa com IA é pedir o código pronto e copiar: funciona hoje e não ensina nada. Aqui a regra é o contrário. Você tenta primeiro, e a IA corrige.</p>

    <h2>O que você precisa para começar</h2>

    <p>Quase nada. O <a href="https://developers.google.com/colab" target="_blank" rel="noopener noreferrer">Google Colab</a> é, segundo o Google, um serviço de notebooks Jupyter hospedado que não exige configuração, com acesso grátis a recursos de computação e assistência do Gemini para gerar, explicar e depurar código. Você entra com a conta Google, abre um notebook e escreve Python direto no navegador. Planos pagos existem para mais capacidade, mas você não precisa deles para aprender o básico.</p>

    <p>Além do Colab, escolha um assistente de IA para conversar. Se estiver em dúvida entre o grátis e o pago, veja <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a>: para estudar, o grátis basta. E tenha à mão o <a href="https://docs.python.org/pt-br/3/tutorial/index.html" target="_blank" rel="noopener noreferrer">tutorial oficial do Python em português</a>. Um aviso honesto: o texto diz que foi escrito para pessoas que já programam, então use-o como consulta depois das primeiras semanas, não como aula inicial.</p>

    <h2>A regra de ouro: a IA tutora, não a IA programadora</h2>

    <p>Defina logo no início como a IA deve se comportar. Cole este prompt no começo de cada conversa de estudo:</p>

    <pre><code>Aja como tutora de Python para quem nunca programou. Regras: 1) não me dê o código completo da solução; 2) me dê uma pista de cada vez; 3) quando eu enviar meu código com erro, explique o erro em português simples e peça que eu tente corrigir; 4) ao final, proponha um exercício novo de dificuldade parecida.</code></pre>

    <p>Isso aplica o que o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">como escrever comandos que funcionam</a> ensina: papel claro, regras e formato. O <a href="/artigos/modo-estudo-do-chatgpt-e-aprendizado-guiado-do-gemini-como-usar">modo de estudo do ChatGPT e o aprendizado guiado do Gemini</a> fazem algo parecido de forma nativa, se estiverem disponíveis para você.</p>

    <h2>Semana 1: o básico (dias 1 a 7)</h2>

    <p>Objetivo: escrever e rodar pequenos programas. Aprenda <code>print</code>, variáveis, números e texto. Todo dia, faça um exercício e peça à IA que explique cada linha que você não entendeu.</p>

    <ul class="checklist">
      <li>Dias 1 e 2: imprimir uma mensagem, guardar nome e idade em variáveis.</li>
      <li>Dias 3 e 4: contas simples, como calcular o total de uma compra com desconto.</li>
      <li>Dias 5 e 6: textos, como juntar nome e sobrenome e contar letras.</li>
      <li>Dia 7: revisão. Peça à IA 5 perguntas sobre a semana, sem dar a resposta.</li>
    </ul>

    <h2>Semana 2: decisões e repetições (dias 8 a 14)</h2>

    <p>Aqui entram o <code>if</code> e o <code>for</code>: o programa decide e repete. Exemplo de exercício: um programa que recebe o preço de um produto e diz se cabe em um orçamento de R$ 200. Outro: imprimir a tabuada do 7.</p>

    <p>Quando travar, não peça a solução. Peça isto:</p>

    <pre><code>Meu código abaixo dá erro. Não corrija: me diga em qual linha está o problema, o que a mensagem de erro significa e uma pergunta que me ajude a achar a correção sozinho.</code></pre>

    <p>Essa é a prática que mais separa quem aprende de quem só copia. O texto sobre <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">erros comuns de quem está começando a usar IA</a> reforça isso, e o <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de termos de IA</a> ajuda se algum conceito soar estranho.</p>

    <h2>Semana 3: listas, funções e arquivos (dias 15 a 21)</h2>

    <p>Listas guardam vários itens; funções permitem reaproveitar código. Faça exercícios com a vida real: uma lista de gastos do mês, uma função que soma tudo, outra que acha o maior gasto. Esta é também a semana de ler arquivos, como uma planilha exportada em formato CSV.</p>

    <table>
      <thead>
        <tr><th>Tema</th><th>Exercício com a vida real</th><th>Como a IA ajuda</th></tr>
      </thead>
      <tbody>
        <tr><td>Listas</td><td>Lista de gastos do mês</td><td>Gera dados de teste para você</td></tr>
        <tr><td>Funções</td><td>Função que calcula o total e o maior gasto</td><td>Explica o erro de cada chamada</td></tr>
        <tr><td>Arquivos</td><td>Ler um CSV de despesas</td><td>Cria um arquivo de exemplo</td></tr>
        <tr><td>Revisão</td><td>Refazer o exercício da semana 1</td><td>Compara sua versão com a primeira</td></tr>
      </tbody>
    </table>

    <p>Se a ideia é usar Python para planilhas, veja também <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> e entenda como o <a href="/artigos/google-apps-script-com-ia-servico-de-automacao-para-sheets-e-gmail">Google Apps Script com IA</a> resolve problemas parecidos em outra linguagem.</p>

    <h2>Semana 4: mini projeto (dias 22 a 30)</h2>

    <p>Escolha um projeto pequeno e seu. Sugestões: um controle de gastos que lê um arquivo e mostra o total por categoria; um sorteador de tarefas da casa; um conversor de moedas com cotação digitada por você. Escreva um plano de 5 passos com a IA, depois faça um passo por vez, sempre tentando antes de pedir ajuda.</p>

    <p>Exemplo concreto: o controle de gastos. Dia 22, desenhe as colunas do arquivo. Dia 24, leia o arquivo. Dia 26, some por categoria. Dia 28, mostre o resultado em texto. Dia 30, peça à IA uma revisão do código com sugestões de melhoria e compare com a sua versão. Para manter o ritmo, ajuda ter uma agenda fixa, como mostra o guia de <a href="/artigos/como-usar-ia-para-criar-rotina-diaria-produtiva">rotina diária produtiva com IA</a>.</p>

    <h2>Como saber se você está aprendendo de verdade</h2>

    <p>Existe um teste simples: feche a conversa com a IA, abra um notebook em branco e tente refazer o exercício do dia anterior. Se conseguir sem olhar, aprendeu. Se travou no primeiro passo, você só acompanhou a solução. Repita esse teste uma vez por semana e anote o resultado.</p>

    <p>Outro sinal é a qualidade das suas perguntas. No começo, elas são do tipo "por que deu erro?". Com o tempo, passam a ser "por que usar uma lista aqui e não um texto?". Quando as perguntas ficam mais específicas, você está evoluindo. Se em algum momento a frustração bater, reduza a meta do dia para 15 minutos: constância pesa mais que intensidade, e voltar amanhã importa mais que terminar o exercício hoje.</p>

    <h2>Erros comuns e como evitar</h2>

    <ul>
      <li><strong>Copiar sem entender</strong>: se não consegue explicar a linha, volte e peça explicação.</li>
      <li><strong>Confiar cegamente</strong>: a IA pode inventar função ou sintaxe. Teste sempre o código e confira na documentação, como no guia de <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>.</li>
      <li><strong>Colar dados sensíveis</strong>: não envie senhas, chaves nem dados de clientes. Em conversas longas, o <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">limite de contexto</a> também faz a IA esquecer o começo.</li>
      <li><strong>Estudar só lendo</strong>: programar se aprende digitando. Mantenha o notebook aberto.</li>
      <li><strong>Pular a revisão</strong>: a técnica dos <a href="/artigos/flashcards-com-ia-estudar-melhor-notebooklm-e-anki">flashcards com IA</a> funciona para fixar comandos.</li>
    </ul>

    <h2>Depois dos 30 dias: para onde ir</h2>

    <p>Ao fim do roteiro, você deve conseguir ler e alterar scripts curtos, o que já é útil no trabalho. A partir daí, três caminhos: aprofundar em Python com a documentação e a página de <a href="https://www.python.org/about/gettingstarted/" target="_blank" rel="noopener noreferrer">primeiros passos do Python.org</a>, usar IA para criar apps sem programar profundamente, como em <a href="/artigos/vibe-coding-para-nao-programadores-carreira-e-riscos">vibe coding para não programadores</a>, ou transformar a habilidade em renda com <a href="/artigos/como-ganhar-dinheiro-vendendo-automacoes-prontas-com-ia">automações prontas</a>. Para quem se preocupa com o futuro da profissão, o texto <a href="/artigos/ia-vai-substituir-programadores-o-que-muda-ate-2030">IA vai substituir programadores?</a> traz o contexto.</p>

    <p>Ninguém vira programador em 30 dias, mas dá para sair do zero e perder o medo do código. Abra o Colab hoje, cole o prompt de tutora e faça o primeiro exercício. Para mais guias de estudo com IA, continue na categoria <a href="/categoria/iniciantes">Iniciantes</a>.</p>
  `,
  faq: [
    {
      question: "Dá para aprender Python com IA sem saber nada?",
      answer:
        "Dá para começar sem experiência, desde que você escreva o código e use a IA como tutora. Peça pistas e explicação de erros, não a solução pronta. Em 30 dias você não vira programador, mas consegue ler e alterar scripts curtos.",
    },
    {
      question: "Preciso instalar o Python para começar?",
      answer:
        "Não no começo. O Google Colab roda notebooks no navegador, sem configuração, e oferece acesso grátis a recursos de computação, segundo o Google. Mais adiante, se quiser rodar programas no seu computador, a página de primeiros passos do Python.org orienta a instalação.",
    },
    {
      question: "Qual IA é melhor para aprender a programar?",
      answer:
        "Para estudo básico, as versões gratuitas de assistentes populares costumam bastar. O mais importante é o jeito de usar: defina o papel de tutora, peça pistas e teste todo código. Confira limites e preços na página oficial de cada ferramenta.",
    },
    {
      question: "A documentação oficial do Python serve para iniciantes?",
      answer:
        "O tutorial oficial em português diz que foi escrito para pessoas que já programam. Por isso, use-o como consulta depois das primeiras semanas. Para a primeira aula, funcionam melhor exercícios curtos com tutoria de IA e prática diária no Colab.",
    },
    {
      question: "A IA pode errar no código de Python?",
      answer:
        "Pode. Ela às vezes inventa funções ou usa sintaxe que não existe. Rode o código sempre, leia a mensagem de erro e confira a dúvida na documentação oficial. Pedir que a IA explique o raciocínio ajuda a perceber quando algo não faz sentido.",
    },
  ],
  quiz: [
    {
      question: "Qual é a melhor forma de usar a IA para aprender Python?",
      options: [
        "Pedir o código pronto e copiar",
        "Escrever o código e pedir pistas e explicação de erros",
        "Só ler a documentação sem praticar",
      ],
      answer: 1,
      explanation:
        "Aprender exige praticar. A IA entra como tutora que explica erros e propõe exercícios, sem tirar de você o trabalho de escrever.",
    },
    {
      question: "O que o Google Colab permite no começo?",
      options: [
        "Rodar notebooks no navegador sem configuração",
        "Só instalar programas no computador",
        "Apenas ler textos sobre Python",
      ],
      answer: 0,
      explanation: "O Colab é um serviço de notebooks hospedado que não exige configuração, segundo o Google.",
    },
  ],
};
