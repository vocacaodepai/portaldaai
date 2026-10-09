import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-receita-anualizada-50-bilhoes-financial-times",
  title: "OpenAI diz a investidores que receita anualizada está perto de US$ 50 bi",
  summary:
    "Segundo o Financial Times, o número é cerca de US$ 20 bilhões menor que os US$ 70 bilhões divulgados antes, e a diferença estaria no método de cálculo usado.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/08/openais-revenue-is-reportedly-20-billion-less-than-previously-projected/",
  date: "2026-10-08",
  publishedAt: "2026-10-09T04:22:00-03:00",
  imageQuery: "OpenAI logo",
  topic: "negocios",
  content: `
    <p>A receita anualizada da OpenAI está "perto de US$ 50 bilhões", segundo informações que a empresa passou a investidores e que foram reportadas pelo Financial Times, em matéria repercutida pelo <a href="https://techcrunch.com/2026/10/08/openais-revenue-is-reportedly-20-billion-less-than-previously-projected/" rel="noopener noreferrer nofollow">TechCrunch</a> em 8 de outubro de 2026. O número é cerca de US$ 20 bilhões menor do que o divulgado cerca de uma semana antes, quando a receita anualizada da empresa era descrita como próxima de US$ 70 bilhões.</p>

    <p>Segundo o FT, os US$ 70 bilhões vieram de informações compartilhadas com investidores e foram produzidos a partir de tentativas de investidores da própria OpenAI de montar uma comparação direta com a receita anualizada da Anthropic. O TechCrunch procurou a OpenAI para comentar e, até a publicação, não registrou resposta da empresa.</p>

    <h2>Por que os números divergem</h2>
    <p>O ponto central é o método de cálculo. De acordo com a reportagem, as duas empresas calculam a receita anualizada de formas diferentes: a Anthropic inclui vendas feitas por meio de parceiros de nuvem, enquanto a OpenAI não conta esse tipo de venda. Na comparação direta feita pelos investidores, o número de US$ 70 bilhões seria competitivo com o que se reporta da Anthropic, mas a base de cálculo não era a mesma.</p>
    <p>Receita anualizada, ou run rate, é uma projeção: pega o faturamento de um período curto, geralmente um mês ou um trimestre, e multiplica para estimar um ano. Ela costuma ser a métrica preferida em empresas de crescimento rápido, mas é sensível ao que entra na conta e a picos pontuais. Por isso, comparar duas empresas sem alinhar a metodologia pode distorcer a leitura.</p>

    <table>
      <thead>
        <tr><th>Item</th><th>O que foi reportado</th></tr>
      </thead>
      <tbody>
        <tr><td>Número anterior</td><td>Receita anualizada próxima de US$ 70 bilhões</td></tr>
        <tr><td>Número informado a investidores</td><td>"Perto de US$ 50 bilhões" (Financial Times)</td></tr>
        <tr><td>Diferença</td><td>Cerca de US$ 20 bilhões</td></tr>
        <tr><td>Causa apontada</td><td>Método de cálculo diferente entre OpenAI e Anthropic</td></tr>
        <tr><td>Resposta da OpenAI</td><td>Sem comentário registrado até a publicação</td></tr>
      </tbody>
    </table>

    <h2>O contexto financeiro da OpenAI</h2>
    <p>A OpenAI levantou US$ 122 bilhões numa rodada em março de 2026. Números vazados mostraram cerca de US$ 13 bilhões de receita em 2025, com gastos significativamente maiores. A empresa assumiu investimentos gigantescos em infraestrutura de computação que precisa justificar, e a abertura de capital, antes rumorada para 2026, teria sido empurrada para o início de 2027, segundo a CNBC. A reportagem do TechCrunch não traz valores específicos de compromissos de computação.</p>
    <p>Já cobrimos o número anterior na notícia sobre a <a href="/noticias/openai-receita-anualizada-70-bilhoes-crescimento-b2b">receita anualizada de US$ 70 bilhões e o crescimento no segmento corporativo</a>, e o plano de capital aberto em <a href="/noticias/altman-openai-nao-abre-capital-em-2026">Altman diz que a OpenAI não abre capital em 2026</a>. Do lado da concorrente, o prospecto vazado da Anthropic foi tema de outra matéria: <a href="/noticias/anthropic-ipo-prospecto-vazado-2-trilhoes">o IPO da Anthropic e a avaliação de US$ 2 trilhões</a>.</p>

    <h2>Como interpretar a diferença entre US$ 70 bilhões e US$ 50 bilhões</h2>
    <p>Uma redução de US$ 20 bilhões no número divulgado não significa, necessariamente, que a receita da OpenAI caiu. A reportagem sugere que se trata de uma correção de metodologia: o número maior surgiu de uma tentativa de investidores de colocar OpenAI e Anthropic na mesma régua, e o número menor reflete a forma como a OpenAI conta sua própria receita. Em outras palavras, a fotografia da empresa pode ser a mesma, mas a moldura mudou.</p>
    <p>Isso importa porque as duas empresas disputam a atenção dos mesmos investidores, que estão avaliando rodadas e aberturas de capital de valores enormes. Qualquer diferença de critério muda a percepção de quem está na frente. Para o leitor comum, a lição é desconfiar de manchetes que comparam receitas de empresas de IA sem explicar o que entrou em cada conta, e esperar pelos documentos oficiais das ofertas públicas, que costumam trazer definições mais rigorosas.</p>
    <p>Também vale notar que a própria OpenAI ainda não confirmou publicamente os números, e que parte das informações vem de documentos compartilhados com investidores, não de demonstrações financeiras auditadas.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa ou revende ferramentas de IA no Brasil, a discussão parece distante, mas toca em duas coisas práticas. A primeira é a estabilidade dos fornecedores: empresas que dependem de contratos de computação bilionários precisam mostrar crescimento para continuar financiando preços de API e planos de assinatura. Isso se liga à <a href="/noticias/anthropic-openai-guerra-precos-opus-5-5-gpt-6-sol-luna">guerra de preços entre OpenAI e Anthropic</a>.</p>
    <p>A segunda é saber ler os números. Quando uma empresa de IA anuncia "receita anualizada", vale perguntar o que entrou na conta. Quem monta um negócio em cima de uma única plataforma deve acompanhar sinais de saúde financeira e manter alternativas: trocar de modelo ou de provedor deve ser possível sem refazer tudo.</p>
    <ul>
      <li>Evite depender de um único fornecedor de modelo para um produto crítico.</li>
      <li>Guarde seus prompts e fluxos de forma portátil, para migrar com facilidade.</li>
      <li>Acompanhe mudanças de preço e de limites de uso, que costumam refletir pressão financeira.</li>
      <li>Desconfie de comparações de receita sem metodologia explicada.</li>
    </ul>

    <h2>O que observar a seguir</h2>
    <p>O primeiro ponto é se a OpenAI comenta oficialmente a diferença e explica a metodologia. O segundo é se a empresa adota um critério mais próximo ao da Anthropic ao divulgar números, o que facilitaria comparações. O terceiro é o calendário de abertura de capital das duas, já que o IPO da Anthropic é esperado antes do da concorrente e deve forçar mais transparência sobre a forma de contar a receita.</p>
    <p>Até lá, o dado mais seguro é que o número de US$ 50 bilhões vem de informação que a OpenAI passou a investidores, e não de um balanço auditado. Vale tratar qualquer cifra de receita anualizada como estimativa e acompanhar as atualizações antes de tirar conclusões sobre quem lidera o mercado.</p>
  `,
  faq: [
    {
      question: "Qual é a receita anualizada da OpenAI, segundo o Financial Times?",
      answer:
        "A empresa disse a investidores que a receita anualizada está perto de US$ 50 bilhões, cerca de US$ 20 bilhões menos do que o número de aproximadamente US$ 70 bilhões divulgado uma semana antes.",
    },
    {
      question: "Por que os números da OpenAI e da Anthropic não são comparáveis?",
      answer:
        "Porque, segundo a reportagem, a Anthropic inclui vendas feitas por parceiros de nuvem na receita anualizada e a OpenAI não, o que torna a comparação direta enganosa.",
    },
    {
      question: "O que é receita anualizada?",
      answer:
        "É uma projeção que multiplica o faturamento de um período curto, como um mês, para estimar um ano inteiro. É sensível ao método de cálculo e a picos pontuais.",
    },
  ],
};
