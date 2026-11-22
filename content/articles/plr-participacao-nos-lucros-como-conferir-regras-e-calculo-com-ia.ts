import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "plr-participacao-nos-lucros-como-conferir-regras-e-calculo-com-ia",
  title: "PLR: como conferir regras e cálculo da participação nos lucros",
  seoTitle: "PLR: como conferir o cálculo da participação nos lucros",
  excerpt:
    "Entenda a PLR: quem negocia, o que o acordo precisa dizer, como conferir o cálculo com planilha e IA e o que perguntar ao RH antes de contar com o valor.",
  metaDescription:
    "PLR explicada para quem é CLT: regras da Lei 10.101, metas, pagamento em até duas parcelas, exemplo de cálculo e prompts de IA para conferir o valor com o RH.",
  category: "carreira",
  articleSubcategory: "trabalho-e-remuneracao",
  date: "2026-11-22",
  readTime: 8,
  imageQuery: "calculator spreadsheet office desk",
  seed: 1239,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "PLR é um acordo negociado entre empresa e empregados, com regras claras e metas combinadas antes: o valor não é um bônus que a empresa decide no fim do ano.",
    "A lei limita o pagamento a duas vezes por ano, com intervalo mínimo de um trimestre civil, e a PLR não vira base de encargos trabalhistas.",
    "Com o documento da PLR em mãos, uma planilha e uma IA ajudam a conferir peso das metas, proporcionalidade e valor, mas o número final vem do RH e do holerite.",
  ],
  content: `
    <p>A <strong>PLR</strong> (participação nos lucros ou resultados) é um valor pago pela empresa ao empregado com base em metas e resultados combinados antes, e não um prêmio que o patrão define na hora. Se o seu RH anunciou a PLR deste ano, o que importa é o documento do acordo: ele diz quanto, quando e por qual conta você recebe.</p>
    <p>Este guia mostra o que a lei exige, como ler o seu acordo, como montar a conta numa planilha com ajuda de IA e quais perguntas levar ao RH. Não substitui o advogado ou o sindicato, e o seu caso depende do texto que a sua empresa assinou.</p>

    <h2>O que é PLR e quem tem direito?</h2>
    <p>A Lei 10.101/2000 trata a PLR como instrumento de integração entre capital e trabalho e como incentivo à produtividade. Na prática, a empresa e os empregados negociam o que será medido (lucro, produtividade, qualidade, metas de área) e quanto será pago se a meta for batida.</p>
    <p>A lei não obriga toda empresa a ter PLR. Quando existe, ela vale para quem está dentro do acordo, e as regras de quem entra, quem sai e quem recebe proporcional ficam escritas no próprio documento. Por isso a primeira pergunta é sempre: existe acordo assinado para o meu cargo?</p>
    <p>Como a PLR não substitui nem complementa a remuneração, ela não entra como base de encargos trabalhistas, segundo o texto da <a href="https://www.planalto.gov.br/ccivil_03/leis/l10101.htm" rel="noopener noreferrer" target="_blank">Lei 10.101/2000</a>. Também não vale contar com ela como parte fixa do salário, algo que pesa na hora de comparar propostas, como mostra o artigo sobre <a href="/artigos/clt-ou-pj-como-comparar-proposta-com-ia-e-planilha">CLT ou PJ com planilha</a>.</p>

    <h2>Quem negocia e o que o acordo precisa dizer</h2>
    <p>Pela lei, a negociação acontece por uma comissão escolhida pelas partes, com um representante indicado pelo sindicato da categoria, ou por convenção ou acordo coletivo. O instrumento precisa ter regras claras e objetivas, incluindo a periodicidade da distribuição, o período de vigência e os prazos de revisão.</p>
    <p>Os critérios previstos são índices de produtividade, qualidade ou lucratividade e programas de metas, resultados e prazos combinados previamente. O acordo deve ser arquivado no sindicato dos trabalhadores. Ao receber o documento, procure estes pontos:</p>
    <ul class="checklist">
      <li>Quais metas existem e quanto cada uma pesa no total.</li>
      <li>Como cada meta é medida e quem confere o resultado.</li>
      <li>O valor-alvo: em salários, em reais fixos ou em percentual do lucro.</li>
      <li>A regra para quem entrou ou saiu no meio do período, e para afastados.</li>
      <li>As datas de pagamento e a vigência do acordo.</li>
      <li>Se há faixa mínima de atingimento (por exemplo, abaixo de 70% da meta não paga).</li>
    </ul>

    <h2>Quantas vezes por ano a PLR pode ser paga?</h2>
    <p>A lei veda pagamento ou antecipação em mais de duas vezes no mesmo ano civil e em intervalo menor que um trimestre civil. Se a empresa pagar além disso, a regra da lei prevê que só os pagamentos excedentes ficam sem a proteção da PLR, e não o acordo inteiro.</p>
    <p>Isso importa porque uma "PLR" paga todo mês, por exemplo, deixa de ser PLR aos olhos da lei e pode ser tratada como salário, com encargos. Se o seu contracheque mostra um valor mensal com esse nome, vale perguntar ao RH como está enquadrado.</p>
    <p>Outro ponto é o prazo: a lei considera previamente estabelecidas as regras fixadas em instrumento assinado antes de qualquer antecipação e com pelo menos 90 dias de antecedência do pagamento da parcela única ou final. Metas inventadas depois do ano fechado são sinal de alerta.</p>

    <h2>Exemplo de cálculo com números</h2>
    <p>O exemplo abaixo é hipotético, só para treinar a conta. Imagine um analista com salário de R$ 3.500, acordo de PLR com valor-alvo de 1,5 salário (R$ 5.250) e três metas:</p>
    <table>
      <thead>
        <tr><th>Meta</th><th>Peso</th><th>Atingimento</th><th>Contribuição</th></tr>
      </thead>
      <tbody>
        <tr><td>Lucro da empresa</td><td>50%</td><td>90%</td><td>0,45</td></tr>
        <tr><td>Meta da área</td><td>30%</td><td>100%</td><td>0,30</td></tr>
        <tr><td>Meta individual</td><td>20%</td><td>80%</td><td>0,16</td></tr>
        <tr><td><strong>Total</strong></td><td>100%</td><td></td><td><strong>0,91</strong></td></tr>
      </tbody>
    </table>
    <p>Valor bruto: 0,91 x R$ 5.250 = R$ 4.777,50. Se esse mesmo analista entrou em julho e o acordo prevê proporcionalidade por mês trabalhado, seriam 6/12 do valor: R$ 2.388,75. Se o acordo não prevê proporcionalidade, a conta muda, e é exatamente isso que você precisa ler no documento.</p>
    <p>Esse é o valor bruto. O imposto é descontado na fonte, e não dá para estimar o líquido de cabeça, como explico a seguir.</p>

    <h2>Imposto de renda na PLR: o que dizer e o que não chutar</h2>
    <p>A Lei 10.101 diz que a PLR é tributada exclusivamente na fonte, em separado dos demais rendimentos, e que não entra na declaração de ajuste anual como base de cálculo. A lei traz uma tabela progressiva própria para o valor anual da PLR, reajustada pelo mesmo percentual da tabela mensal do imposto.</p>
    <p>A <a href="https://planalto.gov.br/ccivil_03/_Ato2023-2026/2025/Lei/L15270.htm" rel="noopener noreferrer" target="_blank">Lei 15.270/2025</a>, que mudou o imposto de renda da pessoa física a partir de 2026, não trata da PLR no texto. Por isso não existe uma resposta segura de cabeça sobre alíquota: o desconto aparece no holerite e a faixa vigente é informada pelo RH. Não use IA para "adivinhar" o líquido; use para organizar a conta bruta e as perguntas.</p>
    <p>Para quem tem renda muito alta, vale saber que a tributação mínima criada pela Lei 15.270 considera a soma de todos os rendimentos do ano acima de R$ 600 mil, inclusive os tributados de forma exclusiva. Para a maioria dos empregados isso não se aplica.</p>

    <h2>Como usar IA para conferir a PLR</h2>
    <p>A IA é boa para transformar um documento chato em uma checklist e uma conta. Cuidado com privacidade: apague nome, CPF, nome da empresa e dados de colegas antes de colar qualquer trecho do acordo. Veja a base para escrever boas instruções no guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">comandos que funcionam</a>.</p>
    <h3>Prompt 1: ler o acordo</h3>
    <pre><code>Vou colar o trecho de um acordo de PLR com dados pessoais removidos. Liste: (1) metas e pesos, (2) valor-alvo, (3) regra de proporcionalidade, (4) datas de pagamento, (5) pontos ambíguos que eu deveria perguntar ao RH. Não invente nada que não esteja no texto.</code></pre>
    <h3>Prompt 2: montar a planilha</h3>
    <pre><code>Monte uma planilha com colunas Meta, Peso, Atingimento, Contribuição. Use estes dados: [cole pesos e atingimentos]. Calcule o fator total e o valor bruto com valor-alvo de [valor]. Mostre as fórmulas.</code></pre>
    <h3>Prompt 3: perguntas ao RH</h3>
    <pre><code>Escreva um e-mail curto e educado pedindo ao RH: o relatório de atingimento de cada meta, o critério de proporcionalidade e a data de pagamento da PLR. Tom profissional, sem acusar ninguém.</code></pre>
    <p>Para o tom de e-mails assim, o artigo sobre <a href="/artigos/email-profissional-dificil-com-ia-feedback-prazo-e-recusa-sem-climao">e-mail profissional difícil</a> traz modelos.</p>

    <h2>Como transformar PLR em plano, não em surpresa</h2>
    <p>PLR bem planejada não vira gasto automático. Se o dinheiro cai no fim do ano, decida a divisão antes de ele chegar: reserva, dívidas, despesas de janeiro (IPVA, material escolar) e o que sobra para você. Quem tem renda irregular encontra um método no guia de <a href="/artigos/reserva-de-emergencia-para-quem-tem-renda-variavel-orcamento-com-ia-e-inss">reserva de emergência com renda variável</a>.</p>
    <p>Lembre também do calendário de fim de ano: o <a href="/artigos/13o-salario-do-trabalhador-2026-datas-calculo-descontos-e-como-conferir-com-ia">13º salário</a> e as <a href="/artigos/ferias-coletivas-no-natal-prazo-de-15-dias-aviso-ao-sindicato-e-pagamento">férias coletivas no Natal</a> mexem com o caixa na mesma época.</p>

    <h2>Como as metas entram na sua conversa de carreira</h2>
    <p>A meta individual da PLR costuma sair da avaliação de desempenho. Quem guarda registros de resultados ao longo do ano chega ao fechamento com argumento; o guia de <a href="/artigos/avaliacao-de-desempenho-no-trabalho-como-ia-ajuda-a-se-destacar">avaliação de desempenho</a> e o de <a href="/artigos/feedback-no-trabalho-e-pdi-com-ia-como-pedir-receber-e-virar-plano-de-estudo">feedback e PDI</a> ajudam a montar esse histórico.</p>
    <p>Esse mesmo registro serve para pedir <a href="/artigos/pedir-promocao-ou-aumento-com-ia-dossie-de-resultados-e-roteiro-da-conversa">promoção ou aumento</a>. E, ao comparar empregos, pergunte quanto da remuneração é fixa e quanto depende de PLR; a <a href="/artigos/pesquisa-salarial-com-ia-quanto-pagam-pela-sua-funcao-caged-vagas-e-faixa-realista">pesquisa salarial</a> e o texto sobre <a href="/artigos/como-negociar-salario-melhor-sabendo-usar-ia">negociar salário</a> ajudam a conversar com números.</p>

    <h2>Erros comuns com a PLR</h2>
    <ul>
      <li><strong>Contar com o valor antes de ver o acordo:</strong> sem documento assinado e metas definidas, o valor é só expectativa.</li>
      <li><strong>Confundir PLR com bônus:</strong> bônus é decisão da empresa; PLR tem regras combinadas com os empregados.</li>
      <li><strong>Esquecer a proporcionalidade:</strong> quem entrou ou saiu no ano precisa ler essa cláusula.</li>
      <li><strong>Colar dados pessoais na IA:</strong> remova nome, CPF e empresa antes.</li>
      <li><strong>Calcular o líquido sem o holerite:</strong> o desconto de imposto depende da tabela vigente.</li>
    </ul>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Achou que a empresa não cumpriu o acordo? Procure primeiro o RH por escrito e, se precisar, o sindicato da sua categoria. Este texto é informativo e não é orientação jurídica.</p></div>

    <h2>Próximos passos</h2>
    <p>Peça o acordo de PLR ao RH, monte a planilha com os pesos e leve as dúvidas por escrito. Se o novo emprego é a pauta, o <a href="/artigos/plano-de-carreira-com-ia-metas-de-90-dias">plano de carreira com metas de 90 dias</a> e o roteiro dos <a href="/artigos/primeiros-90-dias-no-emprego-novo-com-ia-plano-e-contrato-de-experiencia">primeiros 90 dias</a> dão o passo seguinte. Explore também a <a href="/categoria/carreira">categoria Carreira</a>.</p>
  `,
  faq: [
    {
      question: "O que é PLR e quem tem direito?",
      answer:
        "PLR é a participação nos lucros ou resultados, regulada pela Lei 10.101/2000. É negociada entre empresa e empregados, com metas e regras escritas antes. Tem direito quem está incluído no acordo da empresa. A lei não obriga toda empresa a ter PLR, então o primeiro passo é pedir o documento ao RH.",
    },
    {
      question: "A PLR pode ser paga todo mês?",
      answer:
        "Não. A lei veda pagamento ou antecipação em mais de duas vezes no mesmo ano civil e em intervalo menor que um trimestre civil. Valor mensal chamado de PLR pode ser tratado como salário, com encargos. Se é o seu caso, pergunte ao RH como o pagamento está enquadrado.",
    },
    {
      question: "A PLR entra no 13º salário e nas férias?",
      answer:
        "Pela Lei 10.101, a PLR não substitui nem complementa a remuneração e não é base de encargo trabalhista. Isso significa que ela, em regra, não compõe 13º, férias e FGTS. Se a empresa pagar fora das regras da lei, a situação pode mudar, então confira o enquadramento com o RH.",
    },
    {
      question: "PLR paga imposto de renda?",
      answer:
        "Sim. A lei prevê tributação exclusiva na fonte, em separado dos demais rendimentos, com tabela progressiva própria para o valor anual. O desconto aparece no holerite. A alíquota exata depende da tabela vigente, então consulte o RH em vez de estimar o líquido por conta própria.",
    },
    {
      question: "Posso usar IA para calcular minha PLR?",
      answer:
        "Pode, para organizar a conta bruta: pesos das metas, atingimento e proporcionalidade. Remova nome, CPF e empresa antes de colar o acordo. O valor final e o imposto vêm do RH e do holerite, não da IA, que pode errar números se o texto estiver incompleto.",
    },
  ],
  quiz: [
    {
      question: "Qual dos itens costuma definir o valor da PLR?",
      options: [
        "Só a vontade do gestor no fim do ano",
        "Metas e regras combinadas antes, no acordo",
        "O valor do 13º salário",
      ],
      answer: 1,
      explanation:
        "Pela Lei 10.101, a PLR exige regras claras e objetivas combinadas previamente entre empresa e empregados.",
    },
    {
      question: "O que fazer antes de colar o acordo na IA?",
      options: [
        "Remover nome, CPF e nome da empresa",
        "Enviar tudo sem mudar nada",
        "Incluir a senha do holerite",
      ],
      answer: 0,
      explanation:
        "Dados pessoais e da empresa não precisam ir para a ferramenta para conferir uma conta.",
    },
  ],
};
