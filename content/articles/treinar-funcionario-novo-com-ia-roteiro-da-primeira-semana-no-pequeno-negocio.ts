import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "treinar-funcionario-novo-com-ia-roteiro-da-primeira-semana-no-pequeno-negocio",
  title: "Treinar funcionário novo com IA: roteiro da primeira semana",
  seoTitle: "Treinar funcionário novo com IA: roteiro e checklist",
  excerpt:
    "Treinar funcionário novo com IA no pequeno negócio: roteiro de 5 dias, manual de uma página, prompts de treinamento e erros que fazem o novato sair cedo.",
  metaDescription:
    "Treinar funcionário novo com IA: monte um roteiro da primeira semana, um manual de uma página e simulações de atendimento, sem expor dados da empresa nem pular o acompanhamento.",
  category: "negocios",
  articleSubcategory: "gestao-e-operacao",
  date: "2026-10-23",
  readTime: 7,
  imageQuery: "small shop owner training new employee counter",
  seed: 613,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Treinar funcionário novo com IA é usar o assistente para preparar material (manual de uma página, roteiro de cinco dias, simulações de cliente e perguntas de revisão), enquanto o acompanhamento humano continua com o dono ou um colega.",
    "A primeira semana funciona melhor com um dia para cada bloco: a empresa e as regras, o produto, o atendimento, o fechamento do caixa e a revisão de tudo com feedback.",
    "Nada de dado de cliente, senha ou documento do funcionário dentro do chat, e as regras trabalhistas devem ser confirmadas com o contador, porque a IA não substitui essa orientação.",
  ],
  content: `
    <p>Treinar funcionário novo com IA é usar um assistente para preparar o material que o dono nunca tem tempo de escrever: um manual de uma página, um roteiro dia a dia da primeira semana, simulações de atendimento e perguntas de revisão. A IA monta o material em minutos, e o dono ou um colega faz o que não dá para terceirizar: mostrar na prática e dar retorno.</p>

    <p>Em pequeno negócio, o treinamento costuma ser "fica olhando e vai aprendendo", e a consequência é conhecida: o novato erra por falta de instrução, o dono se irrita, e a rotatividade custa mais caro do que qualquer curso. Este guia traz um roteiro de cinco dias, prompts para montar cada peça, uma conta simples do tempo envolvido e os cuidados com dados e com a parte trabalhista, com consultas feitas em 23/10/2026 ao portal do eSocial e a um guia do Sebrae.</p>

    <h2>Por que a primeira semana decide quase tudo</h2>

    <p>É na primeira semana que a pessoa descobre se vai conseguir fazer o trabalho e se vale ficar. Se ninguém explica onde ficam as coisas, como se fala com o cliente e o que fazer quando algo dá errado, o novato inventa. Muitas vezes inventa errado, e quem paga é o cliente.</p>

    <p>Não existe número mágico para o tempo de aprendizado, e ele muda com a função. Mas existe uma regra prática: tudo o que você explica mais de duas vezes deveria virar um material escrito. É a mesma lógica do guia de <a href="/artigos/procedimento-operacional-padrao-com-ia-como-documentar-processos">procedimento operacional padrão com IA</a>: o conhecimento sai da cabeça do dono e passa a viver em um papel que qualquer pessoa consulta.</p>

    <p>Antes de começar, confira o lado legal e administrativo da contratação com o contador. O portal do <a href="https://www.gov.br/esocial/pt-br" target="_blank" rel="noopener noreferrer">eSocial</a>, no gov.br, tem áreas separadas para empresas e para o microempreendedor individual, com manuais e perguntas frequentes. E o <a href="https://sebraepr.com.br/comunidade/artigo/guia-completo-para-a-contratacao-de-funcionario-para-mei" target="_blank" rel="noopener noreferrer">guia do Sebrae Paraná para contratação por MEI</a> lembra que o microempreendedor pode ter um empregado que receba um salário mínimo ou o piso da categoria, com direitos como 13º, férias com um terço, FGTS e jornada limitada. O que vale para o seu caso é assunto do contador, não da IA.</p>

    <h2>O roteiro da primeira semana, dia a dia</h2>

    <p>Cinco dias, um tema por dia, com uma entrega pequena no fim de cada um. O quadro abaixo serve de base para uma loja, uma lanchonete, um salão ou um escritório; troque os exemplos pelo seu dia a dia.</p>

    <table>
      <thead>
        <tr><th>Dia</th><th>Tema</th><th>Como a IA ajuda</th><th>Entrega do dia</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>A empresa, as regras e as pessoas</td><td>Resume as regras da casa em uma página e cria um glossário de termos internos</td><td>O novato explica as 5 regras principais com as próprias palavras</td></tr>
        <tr><td>2</td><td>Produtos e serviços</td><td>Monta perguntas e respostas sobre o que você vende, com base no seu catálogo</td><td>Acerta um mini-teste de 10 perguntas</td></tr>
        <tr><td>3</td><td>Atendimento ao cliente</td><td>Simula clientes difíceis em conversa de texto</td><td>Resolve 3 simulações sem ajuda</td></tr>
        <tr><td>4</td><td>Rotina operacional (abertura, caixa, estoque, fechamento)</td><td>Transforma o passo a passo em checklist</td><td>Faz o fechamento acompanhado</td></tr>
        <tr><td>5</td><td>Revisão e feedback</td><td>Resume as dúvidas da semana e sugere o plano das próximas duas semanas</td><td>Conversa de 20 minutos com o dono</td></tr>
      </tbody>
    </table>

    <p>Repare que a conversa de feedback fica para o fim, mas pequenos retornos acontecem todo dia. Um "isso ficou bom" e um "da próxima vez, faça assim" valem mais do que um relatório final. O guia de <a href="/artigos/gestao-de-equipe-com-ia-escala-e-tarefas-pequeno-negocio">gestão de equipe com IA</a> mostra como organizar escala e tarefas depois que o novato sai do período de treinamento.</p>

    <h2>Prompts para montar o material</h2>

    <p>Cada prompt abaixo gera uma peça do roteiro. Troque os colchetes pelos seus dados, mas sem incluir nomes de clientes, CPF, senhas ou valores confidenciais.</p>

    <h3>Manual de uma página</h3>

    <pre><code>Sou dono de uma [tipo de negócio] com [número] funcionários. Escreva um manual de uma página para um funcionário novo, em tom amigável e direto, com: 1) o que a empresa faz e para quem, 2) horário e regras de comportamento, 3) como tratar o cliente em 5 frases-chave, 4) o que fazer quando não souber a resposta, 5) a quem pedir ajuda. Use frases curtas. Não invente regras: se faltar informação, deixe uma lacuna entre colchetes para eu preencher.</code></pre>

    <h3>Mini-teste de produto</h3>

    <pre><code>Com base na lista de produtos abaixo (nome, uso e preço de venda), crie 10 perguntas de múltipla escolha para um funcionário novo e traga o gabarito separado ao final. Misture perguntas sobre diferença entre produtos, indicação para cada tipo de cliente e política de troca. Lista: [cole aqui].</code></pre>

    <h3>Simulação de cliente difícil</h3>

    <pre><code>Finja ser um cliente de [tipo de negócio] que chegou irritado porque o pedido atrasou 40 minutos. Eu serei o atendente. Responda uma frase por vez, como um cliente real, e só se acalme se eu pedir desculpas de forma específica e oferecer uma solução. Ao final, dê nota de 0 a 10 para o meu atendimento e três sugestões de melhoria.</code></pre>

    <p>Para o treinamento de atendimento por mensagem, combine a simulação com o guia de <a href="/artigos/sac-com-ia-protocolo-prazo-de-resposta-e-quando-chamar-humano">SAC com IA</a>, que explica prazo de resposta e o momento de chamar uma pessoa. Se a empresa atende por WhatsApp, o texto sobre <a href="/artigos/whatsapp-business-para-pequeno-negocio-catalogo-etiquetas-e-respostas">WhatsApp Business para pequeno negócio</a> ajuda a padronizar as respostas rápidas.</p>

    <h2>Exemplo com números: uma loja de roupas com uma vendedora nova</h2>

    <p>Os dados são ilustrativos. Uma loja de bairro contrata uma vendedora. Sem roteiro, o dono acompanha a nova funcionária "no improviso": cerca de 2 horas por dia ao longo de 10 dias úteis, ou 20 horas, e ainda responde dúvidas repetidas.</p>

    <p>Com o roteiro, ele gasta cerca de 3 horas, uma única vez, para gerar e revisar com a IA o manual, o mini-teste e as simulações. Depois, na primeira semana, dedica 1 hora por dia ao acompanhamento direto, 5 horas no total. A soma é de 8 horas, contra as 20 do jeito antigo. O número é um exemplo, não uma garantia: o ganho real depende do tamanho da loja, da função e do jeito de ensinar de cada dono. Mesmo assim, a conta mostra onde o tempo é economizado: no material que se reaproveita para a próxima contratação.</p>

    <p>Para o dono que quer conhecer melhor o processo de escolher a pessoa certa antes do treinamento, o guia de <a href="/artigos/como-usar-ia-para-melhorar-contratacao-pequenas-empresas">contratação em pequenas empresas</a> cobre a etapa anterior. E quando a equipe cresce, o texto de <a href="/artigos/de-mei-para-microempresa-quando-migrar-simples-nacional-e-contador">MEI para microempresa</a> ajuda a entender quando o enquadramento do negócio muda.</p>

    <h2>Dados da empresa e privacidade no treinamento</h2>

    <p>O novo funcionário também vai usar IA, e é melhor combinar as regras no primeiro dia. Defina o que pode e o que não pode ir para um chat: dados de clientes, senhas, valores de contratos e documentos pessoais ficam fora. O guia de <a href="/artigos/politica-de-uso-de-ia-na-pequena-empresa-regras-simples-para-a-equipe">política de uso de IA na pequena empresa</a> traz um modelo simples, e o texto sobre <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">colar dados da empresa no ChatGPT</a> detalha os riscos.</p>

    <p>Se o treinamento envolver atender clientes ou guardar cadastros, vale passar pelo checklist de <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">LGPD para pequeno negócio</a>. Nas simulações, use sempre clientes inventados: o assistente não precisa de nenhum dado real para treinar uma conversa.</p>

    <h2>Erros comuns no treinamento de quem entra</h2>

    <ul class="checklist">
      <li><strong>Despejar tudo no primeiro dia.</strong> O cérebro retém pouco de um dia de oito horas de informação. Divida por temas, como no roteiro.</li>
      <li><strong>Confiar que o manual da IA está certo.</strong> Leia tudo e corrija. Se a IA escrever uma regra que você não tem, apague.</li>
      <li><strong>Treinar sem avaliar.</strong> Mini-teste e simulação existem para você enxergar onde a pessoa está, não para punir.</li>
      <li><strong>Deixar o novato sozinho cedo demais.</strong> Autonomia vem aos poucos: primeiro observa, depois faz acompanhado, depois faz sozinho com conferência no fim.</li>
      <li><strong>Esquecer de pedir feedback ao novato.</strong> Pergunte o que ficou confuso. Ele enxerga falhas do processo que você não vê mais.</li>
      <li><strong>Não atualizar o material.</strong> Quando uma regra muda, mude o manual no mesmo dia, ou ele vira fonte de erro.</li>
    </ul>

    <h2>Depois da primeira semana</h2>

    <p>O treinamento não termina na sexta-feira. Marque uma revisão aos 15 e aos 30 dias, com perguntas simples: o que já domina, o que ainda trava, o que o negócio poderia fazer melhor. Quem registra as reuniões de acompanhamento pode usar <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">IA para reuniões, com transcrição e resumo</a>, desde que a pessoa saiba e concorde. Se a ideia é cortar o retrabalho de uma vez, o guia de <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">custos operacionais em pequenos negócios</a> dá o próximo passo, e o texto de <a href="/artigos/ia-para-mei-tarefas-que-voce-pode-automatizar">tarefas que o MEI pode automatizar</a> libera tempo para treinar sem atropelar o resto.</p>

    <p>Comece hoje: copie o primeiro prompt, preencha com os dados do seu negócio e leia o resultado com uma caneta na mão, marcando o que está certo, o que está errado e o que falta. Em 30 minutos você tem o rascunho do manual. Para mais textos sobre organização do dia a dia, visite a <a href="/categoria/negocios">categoria de negócios</a>.</p>
  `,
  faq: [
    {
      question: "Como treinar um funcionário novo no pequeno negócio?",
      answer:
        "Divida a primeira semana em blocos: empresa e regras, produtos, atendimento, rotina operacional e revisão com feedback. Use um manual de uma página, um mini-teste e simulações de cliente. A IA ajuda a preparar o material, mas o dono ou um colega precisa mostrar na prática e corrigir no mesmo dia.",
    },
    {
      question: "A IA pode criar o manual do funcionário?",
      answer:
        "Pode criar o rascunho em minutos, desde que você informe as regras reais da empresa. Revise tudo e apague o que a IA inventou. Regras trabalhistas, jornada, benefícios e contrato devem ser confirmados com o contador, porque o manual de rotina não substitui a orientação profissional.",
    },
    {
      question: "O MEI pode contratar funcionário?",
      answer:
        "Segundo o guia do Sebrae Paraná, o MEI pode contratar um empregado que receba um salário mínimo ou o piso da categoria, com direitos como 13º, férias e FGTS. As obrigações de registro passam pelo eSocial. Para o seu caso, confirme os detalhes atuais com o contador ou nas páginas oficiais.",
    },
    {
      question: "Posso usar dados reais de clientes para treinar o funcionário com IA?",
      answer:
        "Não é recomendado. Use clientes e situações inventados nas simulações. Nomes, telefones, CPF e valores reais de clientes não devem ir para um chat de IA sem uma política clara da empresa e atenção à LGPD. O assistente treina muito bem conversas com dados fictícios.",
    },
    {
      question: "Quanto tempo dura o treinamento inicial?",
      answer:
        "Depende da função. Um roteiro de cinco dias costuma bastar para a base em atendimento ou balcão, com revisões aos 15 e aos 30 dias para ajustar o que ainda trava. Funções técnicas pedem mais tempo. O importante é combinar o que a pessoa deve dominar em cada etapa.",
    },
  ],
};
