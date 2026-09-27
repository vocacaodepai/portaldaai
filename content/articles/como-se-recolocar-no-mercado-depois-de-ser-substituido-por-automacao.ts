import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-se-recolocar-no-mercado-depois-de-ser-substituido-por-automacao",
  title: "Substituído por automação: como se recolocar no mercado",
  seoTitle: "Substituído por automação: como se recolocar",
  excerpt:
    "Substituído por automação? Plano de 90 dias para se recolocar no mercado: o que fazer na primeira semana, como traduzir sua experiência e onde buscar vaga.",
  metaDescription:
    "Perdeu a função para automação ou IA? Plano de 90 dias para se recolocar no mercado: seguro-desemprego, mapa de habilidades, currículo, prompts e onde buscar.",
  category: "carreira",
  date: "2026-09-18",
  updated: "2026-09-27",
  readTime: 9,
  imageQuery: "job search resume career restart",
  seed: 49,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A automação elimina tarefas, não pessoas inteiras: o primeiro passo é separar o cargo que acabou das habilidades que continuam valendo.",
    "Um plano de 90 dias resolve a maior parte dos casos: dinheiro e documentos na semana 1, mapa de habilidades e currículo até o dia 30, candidaturas e entrevistas até o dia 90.",
    "Quem aprende o básico da ferramenta que substituiu sua função vira candidato a supervisionar o processo, e isso muda a conversa na entrevista.",
  ],
  sources: [
    { label: "gov.br: solicitar o seguro-desemprego", url: "https://www.gov.br/pt-br/servicos/solicitar-o-seguro-desemprego" },
    { label: "Sebrae: cursos online gratuitos", url: "https://loja.sebrae.com.br/cursos/cursos-online" },
    { label: "Stanford HAI: AI Index Report 2025", url: "https://hai.stanford.edu/ai-index/2025-ai-index-report" },
    { label: "Microsoft Work Trend Index 2024", url: "https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part" },
  ],
  content: `
    <p>Se recolocar no mercado depois de ser substituído por automação é possível, e costuma ser mais rápido do que parece quando se segue um plano. A função que acabou tinha um nome de cargo; o que você sabe fazer é maior que esse nome. Este guia organiza os primeiros 90 dias: dinheiro, documentos, mapa de habilidades, currículo, candidaturas e entrevista.</p>

    <p>O texto vale para quem perdeu a vaga para um sistema, um robô de atendimento, uma planilha automatizada ou uma ferramenta de IA. Não tem promessa de emprego em duas semanas. Tem uma sequência de passos, exemplos com números e prompts prontos para usar no ChatGPT, no Claude ou no Gemini.</p>

    <h2>O que a automação substituiu de verdade?</h2>

    <p>A empresa automatizou tarefas: digitar pedidos, conferir notas, responder as mesmas dez perguntas no WhatsApp, montar o relatório de sexta. Ela não automatizou a sua capacidade de perceber quando o pedido do cliente está errado, de negociar prazo com o fornecedor ou de explicar um processo para um colega novo. Essa distinção entre tarefa e habilidade é o ponto de partida de toda recolocação.</p>

    <p>O AI Index 2025 da Universidade Stanford registra que <a href="https://hai.stanford.edu/ai-index/2025-ai-index-report" rel="noopener noreferrer">78% das organizações relataram usar IA em 2024</a>, contra 55% no ano anterior. Isso significa que a mesma tecnologia que fechou a sua vaga está abrindo funções de operação, revisão e supervisão em outras empresas. O artigo sobre <a href="/artigos/empregos-que-a-ia-vai-transformar-como-se-preparar">os empregos que a IA vai transformar</a> mostra quais áreas estão nesse movimento.</p>

    <p>Uma pesquisa da OpenAI com trabalhadores, comentada na notícia sobre <a href="/noticias/openai-pesquisa-trabalhadores-novas-formas-de-trabalhar">como a IA está expandindo funções</a>, aponta na mesma direção: quem usa a ferramenta tende a assumir tarefas que antes não faziam parte do cargo. O mercado corta, mas também reorganiza, e seu trabalho nos próximos 90 dias é chegar do lado certo dessa reorganização.</p>

    <h2>Semana 1: dinheiro e documentos antes de qualquer currículo</h2>

    <p>Nada de abrir o LinkedIn no primeiro dia. A primeira semana é para garantir fôlego financeiro, porque procurar emprego com a conta no vermelho leva a aceitar qualquer proposta. Faça estas quatro coisas, nesta ordem.</p>

    <ul class="checklist">
      <li>Confira a rescisão: aviso prévio, férias proporcionais, 13º proporcional, multa de 40% do FGTS (na demissão sem justa causa) e a liberação do saque.</li>
      <li>Solicite o seguro-desemprego. O pedido é feito pelo app Carteira de Trabalho Digital, pelo portal gov.br ou pelo telefone 158, com o requerimento entregue pela empresa e o CPF; a <a href="https://www.gov.br/pt-br/servicos/solicitar-o-seguro-desemprego" rel="noopener noreferrer">página oficial do seguro-desemprego</a> lista prazos e requisitos (o benefício exige, no primeiro pedido, pelo menos 12 meses de trabalho nos 18 meses anteriores).</li>
      <li>Monte um orçamento de sobrevivência: some aluguel, contas, comida e transporte e descubra quantos meses o dinheiro da rescisão cobre.</li>
      <li>Peça à empresa uma carta de referência ou o contato de um gestor disposto a indicar você. É mais fácil na semana da saída do que três meses depois.</li>
    </ul>

    <p>Se a conta fechar apertada, o freela pode entrar como ponte. O guia sobre <a href="/artigos/10-formas-de-ganhar-dinheiro-com-inteligencia-artificial">formas de ganhar dinheiro com inteligência artificial</a> lista opções que não exigem investimento inicial, como transcrição, revisão de texto e organização de planilhas para pequenos negócios.</p>

    <h2>Dias 8 a 30: o mapa de habilidades (com prompt)</h2>

    <p>Aqui você transforma "eu era auxiliar de faturamento" em uma lista de competências que um recrutador de outra área entende. O jeito mais rápido é descrever a rotina antiga para uma IA e pedir a tradução. O <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">comparativo entre ChatGPT, Claude e Gemini</a> ajuda a escolher a ferramenta, mas para esse exercício qualquer uma das três no plano gratuito funciona.</p>

    <pre><code>Fui auxiliar de faturamento em uma distribuidora por 6 anos. Minha rotina: conferir 80 a 120 notas fiscais por dia, corrigir erros de cadastro de cliente, cobrar pendências por telefone e WhatsApp, fechar o relatório semanal no Excel e treinar os novatos do setor. A empresa automatizou a emissão e a conferência de notas.

Liste as 8 habilidades transferíveis por trás dessa rotina, em linguagem de vaga (ex.: "conciliação de dados", "atendimento B2B"). Para cada uma, diga em quais funções ela é exigida hoje e como eu provaria que tenho essa habilidade em uma entrevista.</code></pre>

    <p>Anote a resposta em uma planilha com três colunas: habilidade, prova (um caso real com número) e funções onde ela vale. Depois, use o método do artigo sobre <a href="/artigos/como-usar-ia-para-identificar-fechar-lacunas-de-habilidades">identificar e fechar lacunas de habilidades</a> para ver o que falta entre o que você tem e o que as vagas pedem. Quase sempre falta uma coisa só: a ferramenta que substituiu a função.</p>

    <h3>Aprenda a ferramenta que tirou seu lugar</h3>

    <p>Parece contraditório, mas é o passo que mais muda o resultado. Se um sistema de emissão automática fechou a sua vaga, alguém precisa configurar, auditar e corrigir esse sistema quando ele erra. Quem entende o processo antigo e o básico da ferramenta nova é o candidato natural. Reserve uma hora por dia, por 20 dias, para um curso gratuito: o <a href="https://loja.sebrae.com.br/cursos/cursos-online" rel="noopener noreferrer">catálogo de cursos online do Sebrae</a> tem opções gratuitas de gestão financeira, atendimento e marketing digital com 7 a 10 horas cada.</p>

    <h2>Dias 31 a 60: currículo, LinkedIn e onde procurar</h2>

    <p>Com o mapa pronto, o currículo deixa de ser uma lista de cargos e vira uma lista de resultados. Em vez de "responsável pelo faturamento", escreva "conferia 100 notas por dia com erro abaixo de 1%; treinei 4 auxiliares". O artigo sobre <a href="/artigos/como-colocar-habilidades-de-ia-no-curriculo">como colocar habilidades de IA no currículo</a> mostra o formato e o que evitar (nada de "usuário de ChatGPT" solto nas competências).</p>

    <p>O Work Trend Index 2024 da Microsoft traz um dado que joga a seu favor: <a href="https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part" rel="noopener noreferrer">66% dos líderes dizem que não contratariam alguém sem habilidades de IA</a>, e 71% preferem um candidato menos experiente que use IA a um mais experiente que não use. Vinte dias de prática já colocam você no grupo que esses gestores procuram.</p>

    <table>
      <thead>
        <tr><th>Onde procurar</th><th>Por que funciona</th><th>O que fazer</th></tr>
      </thead>
      <tbody>
        <tr><td>A própria empresa que demitiu</td><td>Quem conhece o processo antigo é útil na transição</td><td>Perguntar ao RH sobre vagas de operação ou supervisão do novo sistema</td></tr>
        <tr><td>Empresas de 10 a 50 funcionários</td><td>Automatizam menos e valorizam quem faz várias coisas</td><td>Buscar no LinkedIn por "vagas" e o nome da sua cidade, filtrar por porte</td></tr>
        <tr><td>Fornecedores e clientes do antigo empregador</td><td>Já conhecem seu trabalho</td><td>Mensagem direta para 5 contatos por semana</td></tr>
        <tr><td>Prestação de serviço (MEI)</td><td>Transforma a mesma experiência em renda para vários clientes</td><td>Definir um serviço, um preço e três clientes-alvo</td></tr>
      </tbody>
    </table>

    <p>Prestar serviço não é plano B de quem não achou vaga. Atender três pequenos negócios pode pagar tanto quanto o cargo antigo, com mais controle da agenda. O artigo sobre <a href="/artigos/freelancer-na-era-da-ia-como-se-tornar-insubstituivel">freelancer na era da IA</a> explica como se posicionar, e o guia de <a href="/artigos/como-precificar-servicos-usando-ia-no-trabalho">precificação de serviços com IA</a> ajuda a não cobrar barato demais.</p>

    <h2>Exemplo brasileiro: 90 dias de um auxiliar de faturamento</h2>

    <p>Cena hipotética com valores realistas. Carla, 38 anos, auxiliar de faturamento em uma distribuidora de bebidas em Campinas, salário de R$ 2.900. A empresa adotou um sistema que emite e confere notas sozinho e cortou dois dos três auxiliares. Rescisão líquida: cerca de R$ 9.500 somando verbas e FGTS. Orçamento mensal de sobrevivência: R$ 3.200. Fôlego: três meses, contando o seguro-desemprego.</p>

    <p>Semana 1: pedido do seguro-desemprego pelo app, planilha de contas, carta de referência do gerente. Dias 8 a 30: mapa de habilidades com o prompt acima (conciliação de dados, atendimento B2B, cobrança, treinamento de equipe, Excel intermediário) e o curso gratuito de gestão financeira do Sebrae, 10 horas, em duas semanas. Dias 31 a 60: currículo novo, 40 candidaturas focadas em empresas de 10 a 50 funcionários da região, mensagem para 12 contatos de fornecedores.</p>

    <p>Dias 61 a 90: três entrevistas. Uma delas em uma transportadora de 30 funcionários que estava implantando o mesmo sistema de notas. Carla foi contratada como assistente administrativa para auditar o que o sistema emite, salário de R$ 3.100. No caminho, dois ex-fornecedores fecharam com ela um serviço avulso de organização de cadastro, R$ 600 cada, feito nos fins de semana. O resultado depende da região, do setor e do ritmo de candidaturas, mas a sequência serve para qualquer área.</p>

    <h2>Dias 61 a 90: entrevistas e a resposta para "por que você saiu?"</h2>

    <p>A pergunta vai aparecer, e a resposta certa é curta, sem ressentimento: "A empresa automatizou a emissão de notas e reduziu o setor. Aproveitei para aprender como o sistema funciona, e hoje sei onde ele erra e como conferir." Essa frase transforma você de vítima da automação em alguém que entende a automação. O guia sobre <a href="/artigos/como-se-preparar-para-entrevistas-de-emprego-usando-ia">como se preparar para entrevistas usando IA</a> mostra como treinar respostas com simulações.</p>

    <pre><code>Você é um recrutador de uma empresa de logística com 40 funcionários. Vou me candidatar à vaga de assistente administrativo. Faça uma entrevista comigo com 6 perguntas, uma por vez. Inclua obrigatoriamente "por que você saiu do último emprego?" e "o que você sabe sobre sistemas de emissão de nota fiscal?". Ao final, avalie minhas respostas de 0 a 10 e diga o que melhorar.</code></pre>

    <p>Se a recolocação passar de 90 dias, não é fracasso, é sinal de setor apertado. O artigo sobre <a href="/artigos/como-migrar-de-carreira-para-area-de-ia">migrar de carreira para a área de IA sem voltar a estudar do zero</a> mostra caminhos de 6 a 12 meses, e o texto sobre <a href="/artigos/profissoes-que-vao-surgir-por-causa-da-ia">profissões que vão surgir por causa da IA</a> ajuda a mirar em funções com demanda crescente.</p>

    <h2>Erros comuns de quem foi substituído por automação</h2>

    <p><strong>Evitar a tecnologia por ressentimento.</strong> É compreensível, mas fecha justamente as portas que estão abertas. Vinte horas de prática já resolvem o básico.</p>

    <p><strong>Mandar o mesmo currículo para 200 vagas.</strong> Candidatura em massa rende poucas respostas. Quarenta candidaturas bem escolhidas, com currículo ajustado para cada tipo de vaga, funcionam melhor.</p>

    <p><strong>Esconder a demissão.</strong> Recrutador descobre. Dizer que a função foi automatizada é uma explicação honesta e cada vez mais comum.</p>

    <p><strong>Esperar a vaga perfeita com o dinheiro acabando.</strong> Um serviço avulso enquanto procura não atrapalha a busca e vira caso para contar na entrevista.</p>

    <p><strong>Sumir do LinkedIn.</strong> Postar uma vez por semana sobre o que está aprendendo mostra movimento. O guia de <a href="/artigos/como-construir-autoridade-em-ia-no-linkedin-sem-ser-tecnico">autoridade em IA no LinkedIn sem ser técnico</a> tem um roteiro simples para isso.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Desconfie de cursos que prometem "recolocação garantida" por R$ 2 mil ou mais. Comece pelos gratuitos do Sebrae; pague por formação só depois de saber qual função quer.</p></div>

    <h2>Comece hoje: a lista da primeira semana</h2>

    <p>Recolocação não depende de sorte, depende de sequência. Hoje: pedir o seguro-desemprego e montar a planilha de sobrevivência. Amanhã: rodar o prompt do mapa de habilidades. Esta semana: escolher um curso gratuito e marcar uma hora por dia na agenda. Em 30 dias você terá um currículo que fala de resultados, e em 90, entrevistas. Para os próximos passos, o artigo sobre <a href="/artigos/como-montar-portfolio-de-habilidades-de-ia-para-recrutadores">montar um portfólio de habilidades de IA para recrutadores</a> mostra como provar, com exemplos, o que você aprendeu nesse período.</p>
  `,
  faq: [
    {
      question: "Fui demitido por causa de automação, tenho direito ao seguro-desemprego?",
      answer:
        "Sim, se a demissão foi sem justa causa e você cumpre os requisitos gerais: no primeiro pedido, pelo menos 12 meses de trabalho com carteira nos 18 meses anteriores e nenhuma renda própria suficiente para o sustento. O pedido é feito pelo app Carteira de Trabalho Digital, pelo portal gov.br ou pelo telefone 158, com o requerimento entregue pela empresa. O motivo da demissão (automação ou não) não muda o direito.",
    },
    {
      question: "Quanto tempo leva para se recolocar depois de ser substituído por automação?",
      answer:
        "Não existe prazo garantido; depende do setor, da cidade e do ritmo de candidaturas. Um plano de 90 dias cobre a maioria dos casos: semana 1 para dinheiro e documentos, até o dia 30 para mapear habilidades e aprender o básico da ferramenta nova, até o dia 60 para currículo e candidaturas focadas, e até o dia 90 para entrevistas. Se passar disso, vale rever a área-alvo.",
    },
    {
      question: "Preciso aprender IA para me recolocar?",
      answer:
        "Não precisa virar especialista, mas precisa entender o básico da ferramenta que substituiu sua função. O Work Trend Index 2024 da Microsoft mostra que 66% dos líderes não contratariam alguém sem habilidades de IA. Vinte horas de prática com ChatGPT, Claude ou Gemini, aplicadas às tarefas da sua antiga rotina, já colocam você em condição de conversar sobre o assunto na entrevista.",
    },
    {
      question: "Vale mais procurar emprego CLT ou virar prestador de serviço?",
      answer:
        "Os dois caminhos podem andar juntos. Um serviço avulso (organizar planilhas, cadastros, cobranças para pequenos negócios) gera renda enquanto você procura vaga e ainda rende um caso para contar na entrevista. Se três clientes fixos pagarem o equivalente ao salário antigo, a prestação de serviço vira opção principal. O cadastro de MEI é feito online, no Portal do Empreendedor do gov.br.",
    },
    {
      question: "Como explicar na entrevista que fui substituído por automação?",
      answer:
        "Com uma frase curta e sem mágoa: a empresa automatizou tal processo, reduziu o setor, e você aproveitou para aprender como a ferramenta funciona. Em seguida, cite um exemplo concreto do que sabe fazer com ela ou onde ela costuma errar. Essa resposta mostra maturidade e posiciona você como alguém capaz de supervisionar o sistema, não como alguém que compete com ele.",
    },
  ],
  quiz: [
    {
      question: "Qual deve ser a primeira ação na semana da demissão?",
      options: [
        "Enviar currículo para o máximo de vagas possível",
        "Garantir o dinheiro: conferir a rescisão e pedir o seguro-desemprego",
        "Fazer um curso pago de IA",
      ],
      answer: 1,
      explanation:
        "Sem fôlego financeiro, a pessoa aceita qualquer proposta. Rescisão, seguro-desemprego e orçamento de sobrevivência vêm antes do currículo.",
    },
    {
      question: "O que fazer com a ferramenta que substituiu a sua função?",
      options: [
        "Evitar, porque ela tirou o seu emprego",
        "Aprender o básico, porque alguém precisa configurar e auditar o sistema",
        "Ignorar e procurar vagas em áreas sem tecnologia",
      ],
      answer: 1,
      explanation:
        "Quem entende o processo antigo e o básico da ferramenta nova é o candidato natural para supervisionar o sistema e corrigir os erros dele.",
    },
  ],
};
