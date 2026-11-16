import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "boleto-falso-de-fornecedor-como-conferir-com-dda-cnpj-e-ia",
  title: "Boleto falso de fornecedor: como conferir com DDA, CNPJ e IA",
  seoTitle: "Boleto falso de fornecedor: conferência antes de pagar",
  excerpt:
    "Boleto falso de fornecedor: veja como conferir beneficiário, CNPJ e código do banco, usar o DDA da empresa e montar uma rotina de pagamento segura com IA.",
  metaDescription:
    "Como descobrir se o boleto do fornecedor é falso: DDA no CNPJ, beneficiário, código do banco, consulta na Receita e um checklist com IA antes de pagar.",
  category: "negocios",
  articleSubcategory: "financas-e-precificacao",
  date: "2026-11-16",
  readTime: 9,
  imageQuery: "invoice payment office desk",
  seed: 1216,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Antes de pagar qualquer boleto de fornecedor, confira o nome e o CNPJ do beneficiário que o app do banco mostra e veja se os três primeiros números da linha digitável batem com o banco impresso.",
    "O DDA, ativado no banco com o CNPJ da empresa, lista os boletos registrados em seu nome: boleto que chega por e-mail e não aparece ali merece uma ligação para o fornecedor antes do pagamento.",
    "A IA ajuda a montar o checklist, comparar dados do boleto com o cadastro do fornecedor e ler e-mails suspeitos, mas a decisão de pagar continua com uma pessoa e a confirmação é feita por telefone conhecido.",
  ],
  content: `
    <p>Boleto falso de fornecedor é a cobrança adulterada que chega por e-mail, WhatsApp ou até impressa, com o valor certo e a cara do fornecedor de sempre, mas com o dinheiro indo para a conta de um golpista. Para conferir, olhe o beneficiário e o CNPJ no app do banco, cheque o código do banco e use o DDA da empresa.</p>

    <p>O fim de ano junta muita coisa: compra de estoque para o Natal, décimo terceiro, aluguel e fornecedor novo que entrou às pressas. É o cenário perfeito para o golpe, porque quem paga está com pressa. Este guia mostra a conferência em cinco minutos, como montar uma rotina simples na empresa e onde a IA ajuda (e onde não ajuda).</p>

    <h2>Como funciona o golpe do boleto falso de fornecedor?</h2>

    <p>O golpista não precisa inventar uma cobrança. Ele copia uma real. Pode ser um e-mail invadido do fornecedor, um endereço quase igual ao verdadeiro (uma letra trocada no domínio), um vírus no computador que troca a linha digitável na hora de imprimir ou uma mensagem dizendo que "a conta bancária mudou".</p>

    <p>Por fora, o boleto parece perfeito: logo do fornecedor, número do pedido, vencimento certo. O que muda é o que importa: o beneficiário e a conta que vai receber. Em <a href="https://www.cnnbrasil.com.br/economia/financas/nao-imprima-boletos-alerta-febraban-entenda/" target="_blank" rel="noopener noreferrer">reportagem da CNN Brasil com orientações da Febraban</a>, a federação dos bancos explica que o criminoso altera o valor e a conta de destino no momento da impressão, e cita 4,2 bilhões de boletos emitidos no ano anterior à reportagem. Volume desse tamanho explica por que o golpe continua rendendo.</p>

    <p>Para o pequeno negócio, o prejuízo é duplo: o dinheiro vai embora e a dívida com o fornecedor continua aberta.</p>

    <h2>A conferência de 5 minutos antes de pagar</h2>

    <p>Faça estes passos em todo boleto de fornecedor, sem exceção para "o de sempre". O golpe mira justamente o pagamento que ninguém olha.</p>

    <ol>
      <li><strong>Digite ou leia o código no app do banco e pare antes de confirmar.</strong> A tela de confirmação mostra o nome e o CNPJ do beneficiário. É esse dado que vale, não o que está impresso no PDF.</li>
      <li><strong>Compare o beneficiário com o cadastro do fornecedor.</strong> O nome pode ser a razão social (às vezes diferente do nome fantasia) ou o banco ou intermediador de cobrança que ele usa. Se aparecer um nome de pessoa física ou uma empresa que você nunca viu, pare.</li>
      <li><strong>Cheque o código do banco.</strong> Os três primeiros números da linha digitável indicam o banco emissor (001 é Banco do Brasil, 237 é Bradesco, 341 é Itaú, 104 é Caixa, 033 é Santander). Se o boleto mostra o logo de um banco e o código é de outro, é sinal forte de fraude. A Febraban recomenda essa checagem na mesma orientação citada acima.</li>
      <li><strong>Confira valor e vencimento com o pedido ou a nota fiscal.</strong> Valor diferente do combinado ou desconto inesperado para pagar hoje são alertas.</li>
      <li><strong>Veja se o boleto aparece no DDA.</strong> A próxima seção explica como.</li>
      <li><strong>Na dúvida, ligue para o fornecedor.</strong> Use o telefone que você já tinha no cadastro, nunca o número que veio no e-mail ou no próprio boleto.</li>
    </ol>

    <div class="callout-box callout-bad"><span class="callout-label">Nunca faça</span><p>Não pague boleto "atualizado" ou com "nova conta bancária" que chegou só por e-mail ou WhatsApp, mesmo que a mensagem venha do endereço certo. Fornecedor que muda de banco avisa por mais de um canal, e uma ligação de dois minutos resolve.</p></div>

    <h2>O que é o DDA e como conferir quem está cobrando</h2>

    <p>O DDA (Débito Direto Autorizado) é um serviço dos bancos que mostra, no internet banking, os boletos registrados no CPF ou CNPJ do pagador. Segundo a <a href="https://portal.febraban.org.br/pagina/3051/1088/pt-br/dda" target="_blank" rel="noopener noreferrer">página do DDA na Febraban</a>, o sistema foi desenhado pela federação com os bancos associados para que as cobranças cheguem de forma eletrônica, sem depender do papel.</p>

    <p>Na prática, funciona assim: o fornecedor registra o boleto no banco dele, a cobrança entra na plataforma centralizada e aparece no DDA da sua empresa, com beneficiário, valor e vencimento originais. Se chegou um PDF por e-mail e ele não aparece no DDA, ou aparece com outro beneficiário, desconfie antes de pagar.</p>

    <h3>Como ativar</h3>

    <p>O cadastro é feito no banco onde a empresa tem conta, como "pagador eletrônico", pelo internet banking ou pelo gerente. A Febraban lembra que DDA não é débito automático: ele só avisa e deixa o boleto disponível, e cada pagamento continua precisando da sua autorização. Se a empresa tem conta em mais de um banco, comece pelo que você usa para pagar fornecedores e pergunte ao gerente como as cobranças aparecem ali.</p>

    <h3>O limite do DDA</h3>

    <p>Aparecer no DDA prova que o boleto foi registrado no seu CNPJ, não que a cobrança é justa. Um golpista também pode emitir boleto contra a sua empresa. Por isso o DDA é uma camada da conferência, não a conferência inteira.</p>

    <h3>Consulta do CNPJ do beneficiário</h3>

    <p>Se o beneficiário mostrado pelo banco é uma empresa desconhecida, consulte o CNPJ no <a href="https://www.gov.br/pt-br/servicos/consultar-cadastro-nacional-de-pessoas-juridicas" target="_blank" rel="noopener noreferrer">serviço de consulta de CNPJ no gov.br</a>, que leva ao comprovante de inscrição da Receita Federal. Ali aparecem razão social, nome fantasia, situação cadastral, endereço e atividade principal.</p>

    <p>Três perguntas resolvem a maioria dos casos. A razão social bate com o fornecedor ou com o intermediador de pagamento que ele usa? A situação é "ativa"? A atividade faz sentido para quem vende o que você comprou? Uma distribuidora de embalagens cobrando por meio de uma empresa aberta há três meses com atividade de "promoção de vendas" é motivo para ligar antes.</p>

    <p>Vale registrar no cadastro de cada fornecedor o CNPJ, o banco que ele usa para cobrar e um telefone fixo de contato. A planilha de <a href="/artigos/contas-a-pagar-e-a-receber-em-planilha-vencimentos-coloridos-e-rotina-semanal-com-ia">contas a pagar e a receber</a> pode ganhar uma coluna "beneficiário conferido" para isso, e a próxima <a href="/artigos/como-usar-ia-para-negociar-melhor-com-fornecedores">conversa com fornecedores</a> é a hora de combinar por escrito o canal oficial para mudanças.</p>

    <h2>Onde a IA ajuda na rotina de pagamento</h2>

    <p>A IA não enxerga o sistema do banco e não confirma se um boleto é verdadeiro. O que ela faz bem é organizar a conferência e apontar sinais estranhos em e-mails e documentos. O guia de <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">como checar mensagem suspeita com IA</a> mostra a lógica geral; aqui vão três usos específicos para contas a pagar.</p>

    <h3>1. Ler o e-mail de cobrança antes de você</h3>

    <pre><code>Você é um assistente de contas a pagar de uma pequena empresa. Vou colar um e-mail de cobrança de fornecedor. Aponte, em lista: (1) se o endereço do remetente parece diferente do domínio habitual; (2) pedidos de urgência ou de pagamento em conta nova; (3) qualquer mudança de dados bancários; (4) erros de português ou formatação fora do padrão. Não diga se é verdadeiro ou falso: só liste os sinais e o que devo confirmar por telefone.</code></pre>

    <h3>2. Comparar o boleto com o cadastro</h3>

    <pre><code>Tenho o cadastro do fornecedor e os dados que o app do banco mostrou na hora de pagar. Compare campo a campo e me diga o que não bate. Cadastro: razão social [ ], CNPJ [ ], banco que costuma cobrar [ ]. Boleto: beneficiário [ ], CNPJ do beneficiário [ ], três primeiros números da linha digitável [ ], valor [ ], vencimento [ ]. Valor do pedido: [ ].</code></pre>

    <h3>3. Escrever a política interna</h3>

    <pre><code>Escreva uma política de pagamento de fornecedores de uma página para uma loja com 4 funcionários. Regras: só a sócia aprova pagamento acima de R$ 2.000; mudança de dados bancários só vale depois de ligação para o telefone do cadastro; todo boleto passa pela conferência de beneficiário, código do banco e DDA. Linguagem simples, em tópicos.</code></pre>

    <p>Cuidado com o que você cola na ferramenta. Dados bancários completos e documentos com informação de clientes não precisam ir para a IA; o artigo sobre <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">o que o funcionário pode colar no ChatGPT</a> ajuda a definir esse limite, e a <a href="/artigos/politica-de-uso-de-ia-na-pequena-empresa-regras-simples-para-a-equipe">política de uso de IA na pequena empresa</a> coloca isso por escrito.</p>

    <h2>Exemplo: a loja de embalagens e o boleto de R$ 4.380</h2>

    <p>Imagine uma loja de embalagens em Campinas que compra caixas de papelão do mesmo fabricante há dois anos. Na segunda semana de novembro, chega um e-mail com o boleto do pedido de Natal, R$ 4.380, vencimento em três dias, e uma observação: "nosso banco mudou, use este novo boleto".</p>

    <p>Quem cuida do financeiro abre o app, digita a linha e para na confirmação. O beneficiário é uma empresa de "serviços digitais" de outro estado, e a linha começa com o código de um banco digital, enquanto o PDF mostra o logo de um banco tradicional. O DDA da loja tem o boleto verdadeiro do mesmo pedido, emitido pelo fabricante, com outro beneficiário. Uma ligação para o telefone do cadastro confirma: o fabricante não mudou de banco, e o e-mail do vendedor tinha sido invadido.</p>

    <p>A conferência inteira leva uns seis minutos. O prejuízo evitado é o valor do pedido, mais o atraso com o fornecedor. O passo seguinte é avisar o fabricante, que troca a senha do e-mail e alerta os outros clientes.</p>

    <h2>Erros comuns que abrem a porta para o golpe</h2>

    <table>
      <thead>
        <tr><th>Erro</th><th>Por que é perigoso</th><th>O que fazer</th></tr>
      </thead>
      <tbody>
        <tr><td>Conferir só o PDF</td><td>O PDF pode ser editado à vontade</td><td>Confiar no beneficiário que o app do banco mostra</td></tr>
        <tr><td>Pagar fora do DDA sem perguntar</td><td>Boleto legítimo de fornecedor recorrente costuma aparecer ali</td><td>Ligar quando o boleto não aparece ou aparece diferente</td></tr>
        <tr><td>Ligar para o número do e-mail</td><td>Pode ser o telefone do golpista</td><td>Usar o contato que já estava no cadastro</td></tr>
        <tr><td>Uma pessoa só lança e paga</td><td>Ninguém confere o que passou</td><td>Separar quem lança de quem aprova acima de um valor</td></tr>
        <tr><td>Senha fraca no e-mail financeiro</td><td>E-mail invadido é a origem de muitos golpes</td><td>Ativar verificação em duas etapas ou chave de acesso</td></tr>
      </tbody>
    </table>

    <p>Sobre o último ponto, o guia de <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">chave de acesso (passkey)</a> mostra como proteger o e-mail que recebe as cobranças. E se o golpe chegar por ligação, com voz de alguém conhecido pedindo pagamento urgente, leia sobre o <a href="/artigos/golpe-da-voz-clonada-como-se-proteger-com-palavra-da-familia-e-checagem">golpe da voz clonada</a>.</p>

    <h2>Pagou um boleto falso? O que fazer nas primeiras horas</h2>

    <ul class="checklist">
      <li>Ligue imediatamente para o seu banco, informe o pagamento fraudulento e peça a contestação. Anote o protocolo.</li>
      <li>Avise o fornecedor verdadeiro, que precisa saber que o e-mail ou o cadastro dele foi usado.</li>
      <li>Registre boletim de ocorrência, de preferência na delegacia eletrônica do seu estado, com o e-mail, o PDF e o comprovante.</li>
      <li>Guarde tudo: cabeçalho do e-mail, arquivo original e prints do app do banco.</li>
      <li>Revise a conta de e-mail e o computador usado no pagamento antes de pagar o próximo boleto.</li>
    </ul>

    <p>Se o golpe envolveu Pix em vez de boleto, o caminho tem regras próprias, explicadas no guia sobre <a href="/artigos/golpe-do-pix-o-que-fazer-nas-primeiras-horas-med-e-uso-de-ia">o que fazer nas primeiras horas após um golpe do Pix</a>. Vale também consultar o <a href="/artigos/registrato-do-banco-central-conferir-contas-chaves-pix-e-dividas-no-seu-nome">Registrato do Banco Central</a> para ver se não há contas ou chaves abertas no seu nome que você não reconhece.</p>

    <h2>Uma rotina semanal para não depender da sorte</h2>

    <p>A defesa que funciona é a rotina, não a desconfiança no dia. Separe um horário fixo na semana para os pagamentos, confira cada boleto pela lista acima e marque na planilha. Quem já usa um fluxo para <a href="/artigos/email-de-conta-e-boleto-vira-tarefa-com-prazo-gmail-google-tarefas-e-ia-sem-esquecer-vencimento">transformar e-mail de boleto em tarefa com prazo</a> pode incluir a conferência como etapa. No fim do mês, a <a href="/artigos/conciliacao-bancaria-com-ia-pequeno-negocio-guia">conciliação bancária</a> fecha o ciclo: cada pagamento precisa bater com um pedido e uma nota fiscal.</p>

    <p>Comece hoje: ative o DDA no CNPJ, crie a coluna "beneficiário conferido" na planilha e combine com a equipe e com os fornecedores que nenhum dado bancário muda sem ligação. Para mais guias de finanças do pequeno negócio, a categoria <a href="/categoria/negocios">Negócios</a> reúne o restante, incluindo o guia de <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa com IA</a>.</p>
  `,
  faq: [
    {
      question: "Como saber se um boleto é falso antes de pagar?",
      answer:
        "Digite a linha no app do banco e pare na tela de confirmação. Confira se o nome e o CNPJ do beneficiário são do fornecedor ou do intermediador que ele usa, se os três primeiros números batem com o banco do logo e se o valor bate com o pedido. Na dúvida, ligue para o telefone do cadastro.",
    },
    {
      question: "DDA é a mesma coisa que débito automático?",
      answer:
        "Não. O DDA só mostra no internet banking os boletos registrados no CPF ou CNPJ, com os dados originais. Cada pagamento continua precisando da sua autorização. No débito automático, o banco paga sozinho na data combinada. O DDA serve para conferir, e por isso ajuda a identificar boleto adulterado.",
    },
    {
      question: "Como ativar o DDA para o CNPJ da empresa?",
      answer:
        "Pelo internet banking da conta empresarial ou com o gerente, pedindo o cadastro como pagador eletrônico. A partir daí, os boletos registrados no CNPJ passam a aparecer no internet banking. Depois de ativado, confira o DDA sempre que receber um boleto por e-mail ou mensagem.",
    },
    {
      question: "Boleto que aparece no DDA é sempre verdadeiro?",
      answer:
        "Não necessariamente. Aparecer no DDA mostra que o boleto foi registrado contra o seu CNPJ, mas qualquer empresa pode emitir uma cobrança. Se o beneficiário for desconhecido ou o valor não corresponder a nenhum pedido, não pague: confirme com o fornecedor e recuse a cobrança que não reconhece.",
    },
    {
      question: "A IA consegue dizer se um boleto é falso?",
      answer:
        "Não com segurança. A IA não acessa o sistema dos bancos e pode errar. Ela ajuda a listar sinais suspeitos num e-mail, comparar os dados do boleto com o cadastro do fornecedor e escrever a política de pagamento. A confirmação final é a tela do banco e a ligação para o fornecedor.",
    },
  ],
};
