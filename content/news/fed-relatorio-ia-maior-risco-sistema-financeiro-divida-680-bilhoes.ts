import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "fed-relatorio-ia-maior-risco-sistema-financeiro-divida-680-bilhoes",
  title: "Fed aponta a IA como o maior risco ao sistema financeiro dos EUA",
  summary:
    "Relatório do banco central americano mostra que 87% dos consultados veem a IA como principal ameaça e que a dívida para data centers passa de US$ 680 bilhões.",
  author: "Bruno Danello",
  sourceName: "Federal Reserve, Reuters",
  sourceUrl: "https://www.federalreserve.gov/publications/files/financial-stability-report-20261113.pdf",
  date: "2026-11-14",
  publishedAt: "2026-11-14T09:24:00-03:00",
  topic: "negocios",
  imageQuery: "Federal Reserve Eccles Building Washington",
  content: `
    <p>A inteligência artificial virou a principal preocupação de quem acompanha de perto a saúde do sistema financeiro dos Estados Unidos. O Federal Reserve, o banco central americano, publicou nesta sexta-feira, 13 de novembro, o seu Relatório de Estabilidade Financeira, um documento semestral que mapeia o que pode desestabilizar bancos, fundos e mercados. Na pesquisa que acompanha o relatório, 87% dos profissionais consultados citaram a IA como risco relevante, à frente de qualquer outro tema. Na edição de maio, segundo a Reuters, essa fatia era de 50%.</p>

    <p>O relatório traz também um número que ajuda a entender o tamanho da aposta: a emissão de dívida ligada à infraestrutura de computação avançada, ou seja, data centers e chips para IA, passou de US$ 680 bilhões até outubro de 2026. Em todo o ano de 2023, foram US$ 130 bilhões. É um salto de cerca de cinco vezes em três anos, e o Fed dedicou um quadro inteiro do documento a explicar por que isso merece atenção.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Eccles_Building_%2826088200676%29.jpg" alt="Edifício Marriner S. Eccles, sede do Federal Reserve em Washington" loading="lazy" />
      <figcaption>Foto: Federal Reserve / Wikimedia Commons (domínio público)</figcaption>
    </figure>

    <h2>O que diz a pesquisa com o mercado</h2>
    <p>A pesquisa de riscos é feita pela equipe do Federal Reserve de Nova York, que ouviu 23 profissionais de corretoras, bancos, fundos de investimento e consultorias entre setembro e outubro. O próprio relatório avisa que as respostas refletem a visão desses contatos, e não a posição oficial da diretoria do Fed. Mesmo assim, o resultado chama atenção pela distância entre a IA e os demais temas.</p>
    <p>Depois da IA, com 87% das menções, vieram uma correção forte nos ativos de risco, com 52%, e a alta dos juros de longo prazo, com 48%. Ataques cibernéticos e a sustentabilidade da dívida pública americana aparecem logo atrás. O texto destaca que a IA, os juros longos e os ataques cibernéticos foram os temas que mais cresceram em relação à pesquisa anterior, feita na primavera do hemisfério norte.</p>
    <p>Os entrevistados separaram o risco da IA em três frentes. A primeira é o preço das ações: com avaliações esticadas, um lucro abaixo do esperado nas empresas de IA poderia derrubar o mercado. A segunda é a segurança digital, tanto por ataques de governos estrangeiros sofisticados quanto por danos causados pelos próprios modelos de IA de fronteira. A terceira é a forma complexa como os projetos de IA estão sendo financiados. Vários participantes disseram ainda que a IA está baixando a barreira de entrada para ataques sofisticados contra a infraestrutura do mercado financeiro, como sistemas de negociação, liquidação e pagamento.</p>

    <h2>A dívida por trás dos data centers</h2>
    <p>O trecho mais detalhado do relatório é um quadro sobre a alavancagem na construção de data centers. Ele mostra que a dívida ligada à computação avançada deixou de ser uma parte pequena do mercado de crédito corporativo. Em 2023, esse tipo de empréstimo respondia por menos de 6% das emissões de empresas não financeiras com grau de investimento nos Estados Unidos. Em 2026, a fatia chegou a cerca de 31%. A dívida pública já em circulação ligada ao setor é estimada em mais de US$ 1,1 trilhão, e o Fed reconhece que o número real é difícil de medir, porque uma parte relevante das operações acontece no mercado de crédito privado, longe da bolsa.</p>
    <p>O formato da dívida também mudou. No começo, eram sobretudo títulos corporativos emitidos por gigantes de tecnologia, como os que mostramos quando a <a href="/noticias/alphabet-vende-6-bilhoes-euros-titulos-divida-ia">Alphabet vendeu 6 bilhões de euros em títulos para financiar IA</a>. Agora, a lista inclui crédito privado, operações estruturadas e financiamento de projeto, em que o empréstimo é pago apenas com o caixa futuro de um data center específico.</p>
    <p>O Fed compara o momento atual ao ciclo de investimento em telecomunicações do fim dos anos 1990, que terminou com a quebra de várias empresas no começo dos anos 2000. Pelos cálculos do banco central, o gasto acumulado de cinco grandes empresas de nuvem (Amazon, Alphabet, Meta, Microsoft e Oracle) desde 2020 vinha caminhando lado a lado com o das teles naquela época. Só que o ritmo acelerou recentemente, e o relatório diz que o ciclo atual pode ultrapassar o das telecomunicações em pouco tempo.</p>

    <h2>O que o Fed chama de financiamento circular</h2>
    <p>Além da dívida declarada, o relatório chama atenção para compromissos que não aparecem como empréstimo no balanço. São contratos de aluguel de data centers que ainda não começaram a valer, cujo valor sem desconto passa de US$ 1 trilhão, e outras obrigações, como contratos de compra garantida e garantias de valor residual, que somam mais de US$ 2 trilhões. Juntando os dois grupos, os compromissos ligados à infraestrutura de IA passam de US$ 3 trilhões.</p>
    <p>Na prática, funciona assim: uma grande empresa de nuvem assina um aluguel de longo prazo com uma construtora de data centers menor, e essa construtora usa o contrato para conseguir crédito. Fabricantes de chips gráficos, por sua vez, garantem o valor de revenda dos chips para que empresas de IA consigam financiar a compra. Quando essas mesmas gigantes também investem dinheiro nas empresas menores, o Fed descreve o resultado como uma dinâmica de "financiamento circular".</p>
    <p>O relatório vê dois lados nisso. De um lado, as maiores empresas de tecnologia podem absorver perdas numa crise e proteger o resto do sistema. De outro, a exposição delas a uma queda pode ser bem maior do que os balanços sugerem. O Fed lembra ainda que os maiores conglomerados bancários dos Estados Unidos têm perto de US$ 1 trilhão em exposição a empresas de tecnologia, construtoras de data centers, veículos de crédito privado e empresas de energia, e que esse risco entra nos testes de estresse anuais. As fatias mais arriscadas dessas operações ficam com fundos de alto rendimento, seguradoras e outros veículos de crédito privado.</p>

    <div class="callout-box">
      <span class="callout-label">Outro alerta do relatório</span>
      <p>Fora do tema IA, o Fed registrou que a alavancagem dos fundos hedge chegou ao nível mais alto desde 2013, quando começou a série de dados, concentrada num pequeno número de fundos grandes. O documento usa dados do mercado até 28 de outubro.</p>
    </div>

    <h2>Uma semana agitada para as ações de IA</h2>
    <p>A Reuters observa que a pesquisa foi feita antes da turbulência desta semana na Nvidia, quando <a href="/noticias/jensen-huang-renuncia-nvidia-colette-kress-ceo-interina">Jensen Huang deixou o comando da empresa</a>, e antes das eleições de meio de mandato nos Estados Unidos, em que a preocupação do público com a IA foi um dos temas centrais. Depois da votação, como contamos aqui, <a href="/noticias/acoes-ia-despencam-nasdaq-correcao-eleicao-eua-data-centers">as ações de IA despencaram e a Nasdaq entrou em correção</a>. Ou seja, parte do risco que os entrevistados apontavam em setembro e outubro já começou a aparecer no preço dos papéis.</p>
    <p>O relatório também chega às vésperas da estreia da Anthropic na bolsa. A empresa <a href="/noticias/anthropic-mantem-ipo-antes-acao-de-gracas-aceita-avaliacao-menor">manteve a abertura de capital para antes do feriado de Ação de Graças</a>, num teste direto do apetite dos investidores por empresas de IA que ainda gastam muito com computação. O Fed não cita nenhuma empresa de IA pelo nome na parte sobre riscos, mas o retrato que faz do setor serve de pano de fundo para essas operações.</p>

    <h2>Por que isso importa para você</h2>
    <p>O alerta do Fed não quer dizer que uma crise vai acontecer, nem que a IA vai parar de crescer. O documento é um mapa de vulnerabilidades, e o próprio texto lembra que o investimento das empresas, puxado pelas novas tecnologias de computação, foi um motor importante do crescimento americano neste ano. O ponto central é outro: uma parte grande da construção de data centers está sendo paga com dívida, e se o lucro das empresas de IA vier abaixo do que o mercado espera, o ajuste pode passar das ações para o crédito, e do crédito para o resto da economia.</p>
    <p>Para quem investe a partir do Brasil, a lição prática é olhar a concentração da carteira. Fundos e ETFs de tecnologia vendidos aqui costumam ter um peso grande em poucas empresas americanas ligadas à IA, e um ajuste nelas mexe com toda a carteira. Se você está começando a usar ferramentas para acompanhar seus investimentos, nosso guia sobre <a href="/artigos/como-usar-ia-para-investir-na-bolsa-sem-complicar">como usar IA para investir na bolsa sem complicar</a> ajuda a separar análise de palpite. E nenhum assistente substitui a diversificação.</p>
    <p>Para quem usa IA no trabalho ou vende serviços com ela, o efeito é mais indireto. O preço das assinaturas e das APIs depende do custo de computação, que hoje é sustentado por esse volume de investimento. Se o crédito ficar mais caro ou mais escasso, a expansão de data centers tende a desacelerar, e isso pode pesar no preço e na oferta de capacidade lá na frente. No Brasil, a discussão sobre data centers também passa por energia e incentivos fiscais, como explicamos no guia sobre <a href="/artigos/data-centers-de-ia-e-energia-no-brasil-redata-conta-de-luz-e-o-que-esperar">data centers de IA e energia no Brasil</a>.</p>
    <p>O próximo termômetro chega na terça-feira, 17 de novembro, com o resultado trimestral da Nvidia, o primeiro sob comando interino. A forma como o mercado reagir aos números da maior fornecedora de chips de IA vai dizer muito sobre se as preocupações apontadas pelo Fed ficam no papel ou começam a pesar de verdade.</p>
  `,
  faq: [
    {
      question: "O que é o Relatório de Estabilidade Financeira do Fed?",
      answer:
        "É um documento publicado duas vezes por ano pelo Federal Reserve que avalia as vulnerabilidades do sistema financeiro americano, como preços de ativos, endividamento de empresas e famílias, alavancagem de bancos e fundos e riscos de financiamento.",
    },
    {
      question: "O Fed disse que existe uma bolha de IA?",
      answer:
        "Não. O relatório não usa essa palavra. Ele registra que a IA foi o risco mais citado por profissionais do mercado e mostra que o investimento em data centers está cada vez mais apoiado em dívida e em compromissos fora do balanço, o que exige acompanhamento de perto.",
    },
    {
      question: "Quanto já foi emitido em dívida para data centers de IA?",
      answer:
        "Segundo o Fed, mais de US$ 680 bilhões até outubro de 2026, contra US$ 130 bilhões em todo o ano de 2023. Somando aluguéis ainda não iniciados e garantias, os compromissos ligados à infraestrutura de IA passam de US$ 3 trilhões.",
    },
  ],
};
