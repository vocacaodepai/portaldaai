import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "receita-saude-para-pacientes-como-conferir-recibos-de-despesas-medicas-no-imposto-de-renda",
  title: "Receita Saúde para pacientes: conferir recibos médicos no IR",
  seoTitle: "Receita Saúde para pacientes: recibos médicos no IR",
  excerpt:
    "Receita Saúde para pacientes: veja o que é o recibo eletrônico, quem emite, como conferir no app da Receita e como organizar as despesas médicas do IR com IA.",
  metaDescription:
    "Receita Saúde na visão do paciente: quem emite o recibo, como conferir no app, o que fazer se faltar e como organizar despesas médicas com IA.",
  category: "iniciantes",
  articleSubcategory: "vida-pratica",
  date: "2026-10-30",
  readTime: 7,
  imageQuery: "medical receipts folder smartphone",
  seed: 945,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Receita Saúde é o recibo eletrônico de serviços de saúde: dentistas, fisioterapeutas, fonoaudiólogos, médicos, psicólogos e terapeutas ocupacionais pessoa física são obrigados a emitir desde 1º de janeiro de 2025.",
    "O paciente não precisa imprimir o recibo: ele fica na base da Receita e aparece na declaração pré-preenchida, e dá para conferir no perfil Paciente do app.",
    "Se o profissional não emitiu, ainda é possível declarar a despesa, mas a chance de a declaração cair em malha é maior e será preciso comprovar o pagamento.",
  ],
  content: `
    <p>O Receita Saúde é o recibo eletrônico de serviços de saúde emitido pelo profissional e guardado na base da Receita Federal. Para o paciente, ele significa que a despesa médica com dentista, psicólogo, médico e outros pode aparecer sozinha na declaração pré-preenchida do Imposto de Renda, sem precisar guardar papel.</p>

    <p>Falta pouco para fechar 2026, e é agora que vale conferir se os recibos dos seus pagamentos existem. Este guia explica o que é o Receita Saúde na visão de quem paga, mostra como consultar no aplicativo, o que fazer quando o recibo não foi emitido e como usar IA para organizar a pasta do ano sem expor seus dados.</p>

    <h2>O que é o Receita Saúde</h2>

    <p>Segundo o <a href="https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/auditoria-fiscal/conformidade/perguntas-e-respostas-receita-saude" target="_blank" rel="noopener noreferrer">manual de perguntas e respostas da Receita Federal</a> (versão 2.1, de outubro de 2025), o serviço nasceu para captar dados confiáveis para o preenchimento prévio das declarações, reduzir a retenção em malha por erros em despesas médicas, impedir recibos falsos e dar mais transparência à comprovação. A base legal é a Instrução Normativa RFB nº 2.240, de 11 de dezembro de 2024.</p>

    <p>Na prática, o profissional emite o recibo no momento do pagamento. Se o pagamento for parcelado, sai um recibo por parcela. Um exemplo do próprio manual: um tratamento de R$ 1.000 pago em 4 vezes gera 4 recibos de R$ 250, cada um na data da respectiva parcela.</p>

    <h2>Quem é obrigado a emitir</h2>

    <p>Desde 1º de janeiro de 2025, estão obrigados a emitir o Receita Saúde, quando atuam como pessoa física, estes profissionais:</p>

    <ul>
      <li>dentistas;</li>
      <li>fisioterapeutas;</li>
      <li>fonoaudiólogos;</li>
      <li>médicos;</li>
      <li>psicólogos;</li>
      <li>terapeutas ocupacionais.</li>
    </ul>

    <p>O manual também esclarece que a nota fiscal de serviços não substitui o Receita Saúde: a nota comprova a prestação, enquanto o recibo comprova o pagamento, que é o que gera o direito de deduzir para o paciente. Os dois podem ter valores e datas diferentes. Se o seu atendimento é feito por clínica ou empresa, a regra pode ser outra e o documento de comprovação costuma ser a nota fiscal da empresa.</p>

    <h2>Como o paciente confere os recibos</h2>

    <p>Qualquer pessoa com CPF ativo pode acessar o Receita Saúde com o perfil Paciente. Para acessar o serviço, é preciso ter conta gov.br de nível prata ou ouro. Os recibos em que o seu CPF aparece como beneficiário ou como pagador são exibidos ali logo após a emissão.</p>

    <p>Há ainda o serviço "Validação Receita Saúde" no aplicativo da Receita Federal. O caminho descrito no manual é: menu de três barras, "Outros Serviços", "Para Imposto de Renda" e então "Validação Receita Saúde". Os nomes dos menus podem mudar, então use como referência. Vale conferir pelo menos três coisas em cada recibo: nome do profissional, valor e data do pagamento.</p>

    <h2>O que fazer se o profissional não emitiu o recibo</h2>

    <p>Você não perde o direito à dedução. O manual diz que o contribuinte pode informar na declaração o pagamento para o qual não houve Receita Saúde. O custo é a verificação: sem o recibo, a Receita não consegue conferir automaticamente, e isso aumenta a probabilidade de a declaração ficar retida em malha, até que você apresente documentos que comprovem o pagamento.</p>

    <p>O caminho mais seguro é pedir o recibo na hora do pagamento. A emissão retroativa é permitida, e o manual traz a regra do prazo: último dia de fevereiro do ano seguinte ao do pagamento. Seguindo essa regra, para pagamentos feitos em 2026 o limite seria 28/02/2027. Confirme no site da Receita se o prazo vigente continua o mesmo.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Dica</span>
      <p>Ao pagar, diga "preciso do Receita Saúde deste pagamento" e guarde o comprovante do Pix ou da transferência. Se precisar provar depois, o comprovante e o nome do profissional já resolvem metade do problema.</p>
    </div>

    <h2>Como organizar a pasta do ano com IA</h2>

    <p>A IA ajuda na organização, não na decisão do que é dedutível. Monte uma planilha simples com colunas para data, profissional, tipo de serviço, valor, forma de pagamento e "recibo conferido?". O guia de <a href="/artigos/escanear-documentos-no-celular-recibos-garantias-e-contas-com-ia">escanear documentos no celular</a> mostra como guardar comprovantes em PDF, e o de <a href="/artigos/ia-para-organizar-fotos-arquivos-menos-bagunca-digital">organizar arquivos</a> ajuda a nomear as pastas.</p>

    <p>Para usar um assistente de IA, remova CPF, endereço e dados de saúde detalhados antes de colar qualquer coisa. Prompts úteis:</p>

    <pre><code>Crie um modelo de planilha para controlar despesas médicas do ano, com colunas: data, profissional, tipo de serviço, valor, forma de pagamento, recibo eletrônico conferido (sim/não) e observações. Sugira uma fórmula para somar só as linhas em que o recibo não foi conferido.</code></pre>

    <pre><code>Escreva uma mensagem curta e educada de WhatsApp para pedir ao meu dentista o recibo eletrônico do pagamento de hoje, informando que preciso do Receita Saúde para a declaração.</code></pre>

    <p>Quem ainda está aprendendo planilhas pode usar o roteiro de <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">aprender planilhas do zero com IA</a>. Para lembrar de conferir no fim de cada mês, use um lembrete do <a href="/artigos/google-tarefas-e-lembretes-no-celular-organizar-a-semana-com-ia-passo-a-passo">Google Tarefas</a>.</p>

    <h2>Exemplo prático: a família de Marina</h2>

    <p>Exemplo ilustrativo, com números inventados. Marina fez em 2026: tratamento de ortodontia em 10 parcelas de R$ 300 (R$ 3.000), 20 sessões de psicoterapia a R$ 180 (R$ 3.600) e consultas médicas de R$ 1.200. Total pago: R$ 7.800.</p>

    <p>Em novembro, ela abre o perfil Paciente e vê recibos de todo o tratamento ortodôntico e das consultas, mas só 12 das 20 sessões de psicoterapia. Faltam 8 sessões, ou R$ 1.440 (8 x R$ 180). Marina pede os recibos à psicóloga por mensagem, anexando os comprovantes de Pix. Se a profissional emitir até o prazo, tudo aparece no pré-preenchido; se não, Marina decide com cautela se declara e como comprova.</p>

    <h2>Rotina mensal de conferência em 10 minutos</h2>

    <p>Uma rotina curta evita o susto no fim do ano. No primeiro fim de semana de cada mês, siga estes passos:</p>

    <ol>
      <li>Abra a planilha e some o que foi pago no mês anterior a cada profissional.</li>
      <li>Entre no perfil Paciente do Receita Saúde e compare valores e datas dos recibos.</li>
      <li>Marque "sim" ou "não" na coluna do recibo conferido.</li>
      <li>Para cada "não", mande a mensagem pedindo o recibo, com o comprovante de pagamento anexado.</li>
      <li>Guarde em uma pasta do celular os comprovantes de quem ainda não respondeu.</li>
    </ol>

    <p>Dez minutos por mês substituem horas de caça a papel em maio. E, se algo ficar pendente, você saberá o que cobrar e de quem, com tempo para a emissão retroativa.</p>

    <h2>Erros comuns</h2>

    <ul class="checklist">
      <li>Guardar só o recibo em papel e nunca olhar a base da Receita.</li>
      <li>Esperar abril ou maio para descobrir que faltam recibos.</li>
      <li>Colar CPF e relatórios de saúde em um assistente de IA sem pensar na privacidade, como alerta o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber</a>.</li>
      <li>Confiar em mensagem de WhatsApp que promete "recuperar restituição" por um link: o <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">guia para checar mensagens suspeitas</a> ajuda a desconfiar.</li>
      <li>Deixar a senha do gov.br em lugar inseguro; use um <a href="/artigos/gerenciador-de-senhas-como-escolher-comecar-e-usar-com-seguranca">gerenciador de senhas</a> e a <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">chave de acesso</a>.</li>
    </ul>

    <h2>Quando pedir ajuda de um contador</h2>

    <p>Se você tem dependentes, plano de saúde, reembolsos, despesas no exterior ou muitos profissionais diferentes, uma conferência com contador evita erro. A IA pode explicar o vocabulário, mas não conhece a sua situação completa. Sobre assuntos de saúde em si, o texto sobre <a href="/artigos/perguntar-sintomas-e-exames-para-ia-o-que-pode-e-o-que-nao-pode">perguntar sintomas e exames para a IA</a> traz os limites.</p>

    <p>Quem mistura renda e despesa irregular pode se interessar pela organização de <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">finanças pessoais com IA</a>. A <a href="https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda" target="_blank" rel="noopener noreferrer">página Meu Imposto de Renda</a> reúne os serviços oficiais, o guia Perguntão e os painéis de estatística, e na data da consulta (30/10/2026) ainda mostrava o prazo da declaração de 2026, 29 de maio de 2026.</p>

    <h2>Próximo passo</h2>

    <p>Esta semana, abra o perfil Paciente no Receita Saúde, compare com a sua planilha e peça os recibos que faltam enquanto o ano ainda está aberto. Para mais guias de organização do dia a dia com IA, volte à <a href="/categoria/iniciantes">categoria Iniciantes</a> do Portal da AI.</p>
  `,
  faq: [
    {
      question: "O que é o Receita Saúde?",
      answer:
        "É o recibo eletrônico de serviços de saúde, regulamentado pela Instrução Normativa RFB nº 2.240/2024. O profissional emite no momento do pagamento, e o dado fica na base da Receita para pré-preencher a declaração do paciente e reduzir erros em despesas médicas.",
    },
    {
      question: "Quem precisa emitir o Receita Saúde?",
      answer:
        "Desde 1º de janeiro de 2025, dentistas, fisioterapeutas, fonoaudiólogos, médicos, psicólogos e terapeutas ocupacionais que atendem como pessoa física. A nota fiscal de serviços não substitui o recibo, porque a nota comprova a prestação e o Receita Saúde comprova o pagamento.",
    },
    {
      question: "Preciso imprimir o recibo para o Imposto de Renda?",
      answer:
        "Não. Segundo o manual da Receita, o recibo emitido já fica armazenado na base de dados e aparece na declaração pré-preenchida do paciente. Mesmo assim, guarde o comprovante de pagamento, porque ele ajuda se a declaração for retida para conferência.",
    },
    {
      question: "O profissional não emitiu o recibo. Posso deduzir mesmo assim?",
      answer:
        "O manual afirma que o contribuinte pode informar o pagamento sem o recibo, mas a Receita não consegue verificar automaticamente e a chance de retenção em malha aumenta. Peça a emissão retroativa ao profissional e guarde comprovantes do pagamento e do atendimento.",
    },
    {
      question: "Como conferir se meus recibos existem?",
      answer:
        "Acesse o Receita Saúde com conta gov.br de nível prata ou ouro e entre no perfil Paciente, onde aparecem os recibos em seu CPF. O aplicativo da Receita Federal também tem o serviço de validação em Outros Serviços, na área Para Imposto de Renda.",
    },
  ],
};
