import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "primeiros-90-dias-no-emprego-novo-com-ia-plano-e-contrato-de-experiencia",
  title: "Primeiros 90 dias no emprego novo com IA: plano e contrato",
  seoTitle: "Primeiros 90 dias no emprego novo com IA: plano",
  excerpt:
    "Primeiros 90 dias no emprego novo com IA: monte um plano de 30, 60 e 90 dias, entenda o contrato de experiência e use o assistente sem expor dados da empresa.",
  metaDescription:
    "Primeiros 90 dias no emprego novo com IA: plano de 30, 60 e 90 dias, regras do contrato de experiência (até 90 dias) e prompts para aprender rápido sem vazar dados da empresa.",
  category: "carreira",
  articleSubcategory: "mentalidade-e-adaptacao",
  date: "2026-10-25",
  readTime: 7,
  imageQuery: "new employee first day office welcome desk",
  seed: 708,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Os primeiros 90 dias combinam com o prazo máximo do contrato de experiência, que segundo o Ministério do Trabalho e Emprego deve ser escrito, não pode passar de 90 dias e só pode ser prorrogado uma vez dentro desse limite.",
    "Um plano de 30, 60 e 90 dias (aprender, entregar, melhorar) deixa claro o que se espera de você, e a IA ajuda a transformar anotações soltas em perguntas para o gestor e metas verificáveis.",
    "Use a IA para estudar e organizar, mas só com dados que a empresa permite colocar na ferramenta, e confirme com o gestor e o RH o que está combinado, em vez de assumir.",
  ],
  content: `
    <p>Para ir bem nos primeiros 90 dias no emprego novo, organize o período em três fases: 30 dias para aprender o trabalho e as pessoas, 60 dias para entregar algo pequeno e concreto, 90 dias para mostrar uma melhoria e combinar o próximo passo com o gestor. A IA ajuda a planejar, estudar e preparar as conversas, desde que você não cole dados confidenciais da empresa.</p>

    <p>Esse prazo também é familiar para quem entrou numa vaga CLT: o contrato de experiência tem limite de 90 dias. Não quer dizer que você será avaliado só no último dia, e sim que o começo importa. Este guia traz um plano semana a semana, prompts para cada fase, o que a regra do contrato de experiência diz segundo fonte oficial e os erros que mais atrapalham quem chega.</p>

    <h2>O que é o contrato de experiência e por que 90 dias</h2>

    <p>O contrato de experiência é uma modalidade de contrato por prazo determinado em que empresa e empregado se conhecem antes de efetivar. Segundo as <a href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/perguntas-frequentes" target="_blank" rel="noopener noreferrer">perguntas frequentes do Ministério do Trabalho e Emprego</a> (consultadas em 25/10/2026), ele deve ser escrito, não pode exceder 90 dias e pode ser prorrogado uma única vez, desde que o período total, somando a prorrogação, não passe de 90 dias. Se for prorrogado mais de uma vez, passa a valer sem prazo determinado, com a exceção prevista na Lei 9.601/98.</p>

    <p>Na prática, muita empresa usa 45 dias mais 45, ou 30 mais 60, mas isso é combinação do contrato, e não regra única. Leia o seu com atenção: datas, jornada, salário e funções. Para entender o que aparece no seu primeiro pagamento, veja o <a href="/artigos/holerite-com-ia-como-ler-descontos-inss-irrf-e-fgts-sem-erro">guia do holerite com IA</a>. A <a href="https://www.gov.br/trabalho-e-emprego/pt-br/servicos/trabalhador/fgts" target="_blank" rel="noopener noreferrer">página do FGTS no site do Ministério</a> informa que o empregador deposita 8% do salário pago (2% no caso do jovem aprendiz).</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Este texto não é aconselhamento jurídico. Regras de rescisão, indenização e convenção coletiva variam. Em caso de dúvida sobre o seu contrato, procure o RH, o sindicato da categoria ou um advogado trabalhista.</p></div>

    <h2>Antes do primeiro dia: preparar com IA</h2>

    <p>Na semana anterior, use o assistente para estudar a empresa e o setor com informação pública: site, notícias, vagas, produtos. Peça um resumo do mercado, os termos que você precisa conhecer e perguntas inteligentes para a primeira conversa. O guia de <a href="/artigos/como-se-preparar-para-entrevistas-de-emprego-usando-ia">preparação para entrevistas com IA</a> usa o mesmo método de pesquisa, e a ideia é parecida: chegar sabendo o básico.</p>

    <pre><code>Vou começar como [cargo] numa empresa de [setor]. Com base apenas em informação pública, liste: 10 termos que preciso dominar, 5 perguntas inteligentes para fazer ao gestor na primeira semana e 3 erros comuns de quem entra nesta função.</code></pre>

    <p>Confira o que a IA responder: ela pode inventar termos ou dados, e o guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> mostra como checar. Se este é o seu primeiro emprego, o texto de primeiro emprego com IA traz o ponto de partida.</p>

    <h2>Dias 1 a 30: aprender o trabalho, as pessoas e as regras</h2>

    <p>A meta do primeiro mês não é impressionar, é entender. Faça um caderno com: quem é quem, qual é o fluxo do seu trabalho, como a empresa mede resultado e quais são as regras informais. Agende uma conversa curta com o gestor na primeira semana para perguntar o que é sucesso aos 30, 60 e 90 dias.</p>

    <ul class="checklist">
      <li>Conhecer a rotina do seu cargo e quem depende do seu trabalho.</li>
      <li>Descobrir como pedir ajuda e a quem.</li>
      <li>Ler a política de uso de IA e de dados da empresa antes de usar qualquer ferramenta (veja o modelo em <a href="/artigos/politica-de-uso-de-ia-na-pequena-empresa-regras-simples-para-a-equipe">política de uso de IA na pequena empresa</a>).</li>
      <li>Anotar processos que você aprendeu para não perguntar a mesma coisa duas vezes.</li>
    </ul>

    <p>Use a IA como caderno inteligente. Depois de cada reunião, escreva suas anotações e peça uma lista de tarefas e dúvidas. Se a empresa permite gravar e resumir reuniões, o guia de <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">reuniões com IA</a> mostra o fluxo. Mas antes de colar qualquer coisa, leia <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">o que o funcionário pode colar no ChatGPT</a>.</p>

    <p>Um hábito simples ajuda muito: ao fim de cada dia, escreva três linhas com o que aprendeu, o que ficou em aberto e a quem perguntar. Aos domingos, peça à IA que organize essas linhas em uma lista de dúvidas para o gestor, agrupadas por assunto, e leve a lista na reunião de acompanhamento. Isso mostra iniciativa, evita interrupções soltas e cria um registro do seu aprendizado que será útil no feedback final.</p>

    <h2>Dias 31 a 60: entregar uma vitória pequena</h2>

    <p>No segundo mês, escolha uma entrega pequena, útil e verificável. Exemplos: documentar um processo que ninguém registrou, reduzir o tempo de um relatório de 3 horas para 1 hora, criar um modelo de resposta para um e-mail repetido. Combine com o gestor antes, para a entrega ser algo que ele valorize.</p>

    <table>
      <thead>
        <tr><th>Tipo de entrega</th><th>Como a IA ajuda</th><th>Cuidado</th></tr>
      </thead>
      <tbody>
        <tr><td>Documentar um processo</td><td>Transforma suas anotações em passo a passo</td><td>Revisar com quem executa o processo (veja POP com IA)</td></tr>
        <tr><td>Relatório mais rápido</td><td>Sugere estrutura e fórmulas</td><td>Conferir cada número</td></tr>
        <tr><td>Modelo de e-mail</td><td>Rascunha tom e estrutura</td><td>Adaptar à voz da empresa (veja <a href="/artigos/email-profissional-dificil-com-ia-feedback-prazo-e-recusa-sem-climao">e-mail profissional difícil</a>)</td></tr>
      </tbody>
    </table>

    <p>Anote o antes e o depois com números (minutos, erros, pedidos atendidos). Sem número, a conquista vira opinião. O guia de <a href="/artigos/avaliacao-de-desempenho-no-trabalho-como-ia-ajuda-a-se-destacar">avaliação de desempenho com IA</a> mostra como registrar resultados desde cedo.</p>

    <h2>Dias 61 a 90: mostrar melhoria e combinar o próximo passo</h2>

    <p>No último mês, junte o que fez, o que aprendeu e o que quer fazer a seguir. Prepare uma conversa de feedback com o gestor: peça uma avaliação franca, pergunte o que falta para a efetivação e ofereça um plano para os próximos 90 dias. Treine a fala antes, com o roteiro de <a href="/artigos/ensaiar-apresentacao-com-ia-roteiro-cronometrado-e-perguntas-dificeis">ensaiar apresentação com IA</a>.</p>

    <pre><code>Aqui estão minhas anotações dos últimos 90 dias (sem dados confidenciais): [lista]. Monte um resumo de uma página com: o que aprendi, 3 entregas com números, 2 pontos que preciso melhorar e 3 perguntas para o meu gestor sobre os próximos passos.</code></pre>

    <p>Se a conversa for sobre salário no futuro, deixe para depois de mostrar resultados e consulte <a href="/artigos/pedir-promocao-ou-aumento-com-ia-dossie-de-resultados-e-roteiro-da-conversa">pedir promoção ou aumento com IA</a>. Se o assunto for sua evolução, o <a href="/artigos/plano-de-carreira-com-ia-metas-de-90-dias">plano de carreira com metas de 90 dias</a> é um bom complemento.</p>

    <h2>Lidar com a pressão de saber tudo</h2>

    <p>É comum sentir que todo mundo sabe mais do que você. Isso tem nome em muitos casos, e o texto sobre <a href="/artigos/sindrome-do-impostor-usar-ia-nao-te-torna-menos-capaz">síndrome do impostor e IA</a> ajuda a separar sensação de fato. A pressão de dominar ferramentas novas também é real: o guia <a href="/artigos/como-lidar-pressao-de-ter-que-saber-tudo-de-ia-no-trabalho">como lidar com a pressão de saber tudo de IA no trabalho</a> propõe um limite saudável. E se perceber lacunas, o roteiro de fechar lacunas de habilidades ajuda a priorizar.</p>

    <h2>Erros comuns nos primeiros 90 dias</h2>

    <ul>
      <li><strong>Colar dados da empresa em ferramentas pessoais de IA</strong> sem autorização. Pode ser falta grave e, em alguns casos, violação de contrato ou de LGPD.</li>
      <li><strong>Entregar com IA sem revisar.</strong> Um erro de número logo no início custa credibilidade.</li>
      <li><strong>Não perguntar o que se espera.</strong> Não adivinhe: pergunte e registre por escrito.</li>
      <li><strong>Esconder que usa IA</strong> quando a empresa pergunta. Seja transparente e siga a política.</li>
      <li><strong>Ficar isolado.</strong> Construa relações, por exemplo com mensagens de networking, e busque ser útil, como mostra o guia de <a href="/artigos/como-se-tornar-referencia-em-ia-na-empresa-sem-ser-do-ti">como se tornar referência em IA na empresa</a>.</li>
    </ul>

    <p>Os 90 dias passam rápido. Se você registrar o que aprende, entregar uma melhoria pequena e conversar com o gestor com base em fatos, chega ao fim do contrato com muito mais segurança. Continue com a categoria de carreira do Portal da AI para os próximos passos.</p>
  `,
  faq: [
    {
      question: "Quanto tempo dura o contrato de experiência?",
      answer:
        "No máximo 90 dias, segundo o Ministério do Trabalho e Emprego. Ele deve ser escrito e pode ser prorrogado uma única vez, desde que o período total, somando a prorrogação, não passe de 90 dias. A divisão do prazo (por exemplo 45 mais 45) é definida no contrato.",
    },
    {
      question: "Posso usar IA para fazer meu trabalho nos primeiros 90 dias?",
      answer:
        "Pode usar como apoio de estudo e organização se a empresa permitir. Leia a política de uso de IA, evite colar dados confidenciais, revise tudo que a ferramenta gerar e seja transparente com o gestor sobre como a usa. A responsabilidade pela entrega continua sendo sua.",
    },
    {
      question: "O que perguntar ao gestor na primeira semana?",
      answer:
        "Pergunte o que é sucesso aos 30, 60 e 90 dias, como o resultado é medido, quais são as prioridades do time, com quem você deve falar e como prefere receber atualizações. Anote as respostas por escrito e use-as como base do seu plano de 90 dias.",
    },
    {
      question: "O FGTS é depositado durante o contrato de experiência?",
      answer:
        "O depósito de FGTS é feito pelo empregador sobre o salário pago, 8% no caso geral, segundo a página do Ministério do Trabalho e Emprego sobre o tema. Confira os depósitos na sua conta vinculada e peça esclarecimentos ao RH se algo parecer faltar.",
    },
    {
      question: "O que fazer se eu não for efetivado?",
      answer:
        "Peça um feedback sincero, registre o que aprendeu e atualize currículo e portfólio com as entregas, usando números. Se tiver dúvidas sobre verbas e prazos de rescisão, consulte o RH, o sindicato da categoria ou um advogado trabalhista antes de assinar qualquer documento.",
    },
  ],
  quiz: [
    {
      question: "Qual é o prazo máximo do contrato de experiência segundo o Ministério do Trabalho e Emprego?",
      options: ["45 dias", "90 dias", "180 dias"],
      answer: 1,
      explanation:
        "O contrato de experiência não pode exceder 90 dias, incluindo a prorrogação, que só pode acontecer uma vez.",
    },
    {
      question: "O que você deve fazer antes de colar informações da empresa numa IA?",
      options: [
        "Colar tudo para ter mais contexto",
        "Ler a política de uso de IA e dados da empresa",
        "Pedir à própria IA para decidir",
      ],
      answer: 1,
      explanation:
        "A política da empresa define o que pode ser colocado em ferramentas de IA. Na dúvida, pergunte ao gestor ou ao RH.",
    },
  ],
};
