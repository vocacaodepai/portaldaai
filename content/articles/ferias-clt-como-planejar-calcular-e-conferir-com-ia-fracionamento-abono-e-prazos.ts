import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ferias-clt-como-planejar-calcular-e-conferir-com-ia-fracionamento-abono-e-prazos",
  title: "Férias CLT: como planejar e conferir o valor com IA",
  seoTitle: "Férias CLT: como planejar e conferir o valor com IA",
  excerpt:
    "Entenda as regras da CLT para férias (30 dias, terço, abono e fracionamento) e use a IA para planejar as datas e conferir o cálculo antes de aceitar o valor.",
  metaDescription:
    "Entenda as regras da CLT para férias (30 dias, terço, abono e fracionamento) e use a IA para planejar as datas e conferir o cálculo antes de aceitar o valor.",
  category: "carreira",
  articleSubcategory: "trabalho-e-remuneracao",
  date: "2026-11-24",
  readTime: 8,
  imageQuery: "beach vacation calendar planning",
  seed: 1279,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Pela CLT, o empregado tem direito a 30 dias de férias após 12 meses de contrato, e as faltas no período podem reduzir esse total.",
    "Dá para dividir as férias em até três períodos, com concordância do empregado, e vender até um terço delas como abono pecuniário, se pedir no prazo.",
    "A IA ajuda a organizar datas e a conferir a conta, mas o valor final vem do holerite e do departamento pessoal, e você deve checar convenção coletiva e regras novas.",
  ],
  content: `
    <p>Pela CLT, o trabalhador com carteira assinada tem direito a 30 dias corridos de férias depois de cada 12 meses de contrato, pagos com um terço a mais, e pode dividir o descanso em até três períodos ou vender até dez dias. A IA ajuda a planejar as datas e a conferir a conta, mas quem fecha o valor é o departamento pessoal.</p>
    <p>Com o fim do ano chegando, muita gente decide em novembro e dezembro quando tirar as férias de 2027 e quanto vai receber. Este guia explica as regras com base no texto da lei, mostra um cálculo com números e traz prompts para você conferir tudo antes de aceitar.</p>

    <h2>Quando nasce o direito às férias?</h2>
    <p>O direito aparece depois de 12 meses de vigência do contrato, o chamado período aquisitivo. O artigo 130 da CLT, disponível no <a href="https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452compilado.htm" target="_blank" rel="noopener noreferrer">texto compilado no site do Planalto</a>, também fixa que as férias vão de 30 dias corridos, quando o empregado teve no máximo 5 faltas no período, até 12 dias, quando teve de 24 a 32 faltas.</p>
    <table>
      <thead>
        <tr><th>Faltas injustificadas no período aquisitivo</th><th>Dias de férias</th></tr>
      </thead>
      <tbody>
        <tr><td>Até 5</td><td>30 dias corridos</td></tr>
        <tr><td>De 6 a 14</td><td>24 dias corridos</td></tr>
        <tr><td>De 15 a 23</td><td>18 dias corridos</td></tr>
        <tr><td>De 24 a 32</td><td>12 dias corridos</td></tr>
      </tbody>
    </table>
    <p>A lei também proíbe descontar as faltas do período de férias e diz que o descanso conta como tempo de serviço para todos os efeitos. Se você ficou na dúvida sobre o que são faltas injustificadas, confira o seu <a href="/artigos/holerite-com-ia-como-ler-descontos-inss-irrf-e-fgts-sem-erro">holerite</a> e o registro de ponto, e leve a dúvida ao RH.</p>

    <h2>Quem decide a data das férias?</h2>
    <p>O artigo 134 diz que as férias são concedidas por ato do empregador, nos 12 meses seguintes ao período aquisitivo. Na prática, a empresa costuma montar uma escala e o empregado pede a data preferida. O aviso precisa ser por escrito, com pelo menos 30 dias de antecedência, segundo o artigo 135, e com recibo do empregado.</p>
    <p>Se a empresa deixar passar o prazo e conceder as férias fora dos 12 meses, o artigo 137 prevê o pagamento em dobro da remuneração das férias. Quem está nessa situação deve conversar com o RH e, se preciso, procurar o sindicato ou um advogado, porque cada caso tem detalhes.</p>
    <p>Outra regra pouco lembrada: o início das férias não pode cair nos dois dias que antecedem feriado ou dia de repouso semanal remunerado (art. 134, parágrafo 3º). Por isso, uma data que parece boa no calendário pode ser recusada pelo departamento pessoal.</p>

    <h2>Férias em até três períodos: como funciona</h2>
    <p>Desde a reforma trabalhista, com a concordância do empregado, as férias podem ser fracionadas em até três períodos. Um deles precisa ter no mínimo 14 dias corridos, e os outros, no mínimo 5 dias corridos cada, conforme o parágrafo 1º do artigo 134. Então três períodos de 14, 8 e 8 dias, por exemplo, são possíveis, e 20 e 10 dias também.</p>
    <p>O fracionamento depende do seu acordo. Ninguém é obrigado a aceitar um desenho que não serve. Antes de responder ao RH, vale testar cenários com a IA. Um prompt como este organiza:</p>
    <pre><code>Tenho 30 dias de férias a tirar em 2027 pela CLT. Regras: até 3 períodos, um com no mínimo 14 dias corridos e os outros com no mínimo 5 dias corridos cada; o início não pode cair nos 2 dias antes de feriado ou domingo. Meus feriados prolongados em 2027 são [datas]. Monte 3 cenários de divisão que aproveitem emendas de feriado, e para cada um liste início, fim e quantos dias úteis eu falto ao trabalho. Se alguma data parecer violar a regra, avise.</code></pre>
    <p>Confira cada data no calendário e no regulamento da empresa. A IA não conhece o seu calendário de feriados municipais nem a escala do seu setor. Para pensar em equilíbrio de carreira e descanso, o texto sobre <a href="/artigos/primeiros-90-dias-no-emprego-novo-com-ia-plano-e-contrato-de-experiencia">primeiros 90 dias no emprego novo</a> traz a lógica de planejar com antecedência.</p>

    <h2>Terço de férias e abono pecuniário: quanto você recebe</h2>
    <p>As férias são pagas com um acréscimo de um terço sobre o salário, previsto na Constituição (art. 7º, inciso XVII). Além disso, o artigo 143 da CLT permite ao empregado converter um terço das férias em dinheiro, o abono pecuniário, que corresponde à remuneração dos dias vendidos. O parágrafo 1º exige o pedido até 15 dias antes do fim do período aquisitivo, e a decisão é do empregado.</p>
    <p>O pagamento da remuneração das férias e do abono deve ocorrer até dois dias antes do início do descanso (art. 145). Se o RH pagar depois, o valor pode ser contestado.</p>
    <h3>Exemplo com números</h3>
    <p>Imagine um salário bruto de R$ 3.000 por mês, sem horas extras nem adicionais (valores ilustrativos). Veja a conta de 30 dias de férias, sem abono:</p>
    <table>
      <thead>
        <tr><th>Item</th><th>Conta</th><th>Valor bruto</th></tr>
      </thead>
      <tbody>
        <tr><td>Férias de 30 dias</td><td>Salário de 30 dias</td><td>R$ 3.000</td></tr>
        <tr><td>Terço constitucional</td><td>R$ 3.000 ÷ 3</td><td>R$ 1.000</td></tr>
        <tr><td><strong>Total antes dos descontos</strong></td><td></td><td><strong>R$ 4.000</strong></td></tr>
      </tbody>
    </table>
    <p>Sobre esse bruto incidem INSS e, dependendo da renda, imposto de renda na fonte. O líquido é o que cai na conta, e quem explica a conta é o holerite. Já o abono de 10 dias, nesse mesmo salário, equivale à remuneração desses dias, algo em torno de R$ 1.000 antes de checar com o departamento pessoal como a empresa trata o terço sobre o abono, porque a jurisprudência não é uniforme nesse ponto. Para a conta correta, peça o demonstrativo antes da data.</p>
    <p>Quem vende dez dias trabalha dez dias a mais e fica com 20 dias de descanso. Quanto vale a troca depende do que você faria com esse dinheiro e do quanto precisa do descanso. A IA pode montar a comparação, e você decide.</p>

    <h2>Como conferir o valor com a IA</h2>
    <p>Com o salário, o terço e o calendário, a IA monta uma conferência em dois minutos. Use dados sem identificação: nada de CPF, nome da empresa ou número de matrícula. O guia de <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade em IA</a> mostra o que evitar.</p>
    <pre><code>Calcule as minhas férias CLT com estes dados fictícios do meu caso: salário bruto de R$ [valor], [30] dias de férias, [com/sem] venda de 10 dias (abono). Mostre passo a passo: salário proporcional, terço constitucional, abono (se houver) e total bruto. Não calcule INSS nem imposto de renda: apenas avise que eles incidem sobre as férias e que o valor líquido depende da tabela vigente. Aponte o que devo perguntar ao RH.</code></pre>
    <p>Se o resultado for diferente do demonstrativo da empresa, não acuse ninguém: pergunte. Peça o cálculo detalhado e compare linha a linha. A diferença às vezes vem de adicionais, comissões médias ou horas extras habituais que entram na base e que a IA não conhece. Lembre também que a IA erra conta, como explicado em <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">como checar se a resposta está certa</a>.</p>

    <h2>Fim de ano, 13º e férias: planeje o caixa</h2>
    <p>Quem tira férias em janeiro costuma chegar com as contas de dezembro ainda abertas. Antes de marcar a data, some o que entra: férias, abono, se houver, e 13º. O <a href="/artigos/13o-salario-do-trabalhador-2026-datas-calculo-descontos-e-como-conferir-com-ia">guia do 13º salário de 2026</a> mostra as datas e a conta. Para quem tem renda irregular, o <a href="/artigos/reserva-de-emergencia-para-quem-tem-renda-variavel-orcamento-com-ia-e-inss">guia de reserva de emergência</a> traz o raciocínio de separar dinheiro para meses mais curtos.</p>
    <p>Se você pretende viajar, comece pelo roteiro e pelo teto de gastos, como no texto <a href="/artigos/planejar-viagem-com-ia-roteiro-orcamento-e-checagem-antes-de-reservar">planejar viagem com IA</a>. E para organizar o dinheiro do mês, o <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">guia de finanças pessoais com IA</a> ajuda a fixar um orçamento simples.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>A página do Planalto com a CLT traz notas sobre normas recentes que podem mexer em regras de trabalho. Convenção ou acordo coletivo da sua categoria também podem prever condições diferentes. Confirme com o RH ou o sindicato antes de decidir datas e venda de dias.</p></div>

    <h2>Quando a empresa quer parar o trabalho em bloco</h2>
    <p>Algumas empresas dão férias coletivas, em geral no Natal. Nesse caso, a conversão em abono depende de acordo coletivo com o sindicato, e não de pedido individual (art. 143, parágrafo 2º). O texto sobre <a href="/artigos/ferias-coletivas-no-natal-prazo-de-15-dias-aviso-ao-sindicato-e-pagamento">férias coletivas no Natal</a> explica prazos e avisos do lado da empresa.</p>
    <p>Quem entra na empresa no fim do ano como temporário tem regras próprias, tratadas no guia de <a href="/artigos/trabalhador-temporario-no-natal-contrato-prazo-e-escala-com-ia-no-pequeno-comercio">trabalhador temporário no Natal</a>, e quem pensa em trocar de CLT para PJ deve olhar o <a href="/artigos/clt-ou-pj-como-comparar-proposta-com-ia-e-planilha">comparativo CLT ou PJ</a>, porque o PJ não tem férias remuneradas por lei.</p>

    <h2>Erros comuns com férias</h2>
    <ul>
      <li><strong>Aceitar a data sem ler o aviso:</strong> o aviso deve ser por escrito, com 30 dias de antecedência, e com recibo.</li>
      <li><strong>Vender dias sem pedir no prazo:</strong> o abono precisa ser requerido até 15 dias antes do fim do período aquisitivo.</li>
      <li><strong>Esquecer a regra dos dois dias antes de feriado:</strong> a data pode ser recusada.</li>
      <li><strong>Aceitar fracionamento que não serve:</strong> um período precisa ter 14 dias ou mais, e depende do seu acordo.</li>
      <li><strong>Confiar só na IA:</strong> a conta do chatbot é uma conferência, não um documento. Quem vale é o demonstrativo da empresa.</li>
      <li><strong>Não guardar o recibo:</strong> o empregado dá quitação do pagamento com início e fim das férias (art. 145, parágrafo único), então guarde uma cópia. Se quiser organizar papéis em casa, veja o guia de <a href="/artigos/escanear-documentos-no-celular-recibos-garantias-e-contas-com-ia">escanear documentos no celular</a>.</li>
    </ul>

    <h2>Roteiro para decidir suas férias</h2>
    <ol>
      <li>Conte quantos dias você tem direito, considerando as faltas do período.</li>
      <li>Escolha entre um bloco único ou fracionar, lembrando da regra dos 14 e dos 5 dias.</li>
      <li>Decida se vende dez dias, e avise o RH dentro do prazo.</li>
      <li>Peça o aviso por escrito, com 30 dias de antecedência.</li>
      <li>Confira o cálculo no demonstrativo antes do pagamento, que deve sair até 2 dias antes do início.</li>
    </ol>
    <p>Comece pelo calendário de 2027: marque os feriados, rode o prompt dos três cenários e leve as opções ao seu gestor. Para mais guias sobre trabalho e remuneração, visite a categoria <a href="/categoria/carreira">Carreira</a>. Se a dúvida é sobre demissão, o texto sobre <a href="/artigos/demitido-o-que-fazer-nas-primeiras-semanas-rescisao-seguro-desemprego-e-ia">o que fazer nas primeiras semanas depois da demissão</a> traz o passo a passo da rescisão.</p>
  `,
  faq: [
    {
      question: "Quantos dias de férias a CLT garante?",
      answer:
        "O empregado tem direito a 30 dias corridos após 12 meses de contrato, desde que tenha tido no máximo 5 faltas no período aquisitivo. Com mais faltas, o total cai para 24, 18 ou 12 dias, conforme o artigo 130 da CLT. As férias são pagas com acréscimo de um terço.",
    },
    {
      question: "Posso dividir as férias em três períodos?",
      answer:
        "Pode, desde que você concorde. O parágrafo 1º do artigo 134 da CLT permite até três períodos: um com no mínimo 14 dias corridos e os demais com no mínimo 5 dias corridos cada. Ninguém é obrigado a aceitar o fracionamento proposto pela empresa.",
    },
    {
      question: "Como funciona a venda de dez dias de férias?",
      answer:
        "É o abono pecuniário do artigo 143 da CLT: o empregado pode converter um terço das férias em dinheiro. O pedido deve ser feito até 15 dias antes do fim do período aquisitivo, e a decisão é sua. Em férias coletivas, a conversão depende de acordo coletivo com o sindicato.",
    },
    {
      question: "Até quando a empresa precisa pagar as férias?",
      answer:
        "O artigo 145 da CLT manda pagar a remuneração das férias e o abono, se houver, até dois dias antes do início do período de descanso. O empregado dá quitação com a indicação do início e do fim das férias. Pagamento atrasado merece pergunta ao RH.",
    },
    {
      question: "A IA calcula minhas férias com segurança?",
      answer:
        "Ela ajuda a conferir a lógica, mas pode errar conta e não conhece sua base de cálculo, que inclui adicionais e médias da empresa. Use a IA para montar a conferência e levar perguntas ao RH. O valor correto é o do demonstrativo, e dúvidas vão ao sindicato.",
    },
  ],
};
