import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "pesquisa-salarial-com-ia-quanto-pagam-pela-sua-funcao-caged-vagas-e-faixa-realista",
  title: "Pesquisa salarial com IA: quanto pagam pela sua função",
  seoTitle: "Pesquisa salarial com IA: quanto pagam pela sua função",
  excerpt:
    "Pesquisa salarial com IA em 5 passos: junte vagas reais, cruze com o Novo Caged, calcule uma faixa realista e chegue preparado à conversa de salário ou proposta.",
  metaDescription:
    "Pesquisa salarial com IA: como juntar vagas, usar o Novo Caged como referência, montar uma faixa com mediana e quartis e evitar erros antes de negociar uma proposta.",
  category: "carreira",
  articleSubcategory: "trabalho-e-remuneracao",
  date: "2026-10-31",
  readTime: 6,
  imageQuery: "woman laptop notes job offer desk",
  seed: 986,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Pesquisa salarial com IA funciona melhor com uma amostra própria de 10 a 15 vagas reais, em que a IA organiza e calcula e você confere cada número na fonte.",
    "O Novo Caged, do Ministério do Trabalho, publicou salário médio de admissão de R$ 2.294,62 para o Brasil em 2025, mas é média de todas as funções, excluindo contratos intermitentes, e serve só de régua geral.",
    "Uma faixa realista vem da mediana e dos quartis da sua amostra, ajustada por cidade, porte da empresa e senioridade, nunca de um número único achado na internet.",
  ],
  content: `
    <p>Pesquisa salarial com IA é o processo de reunir vagas e dados oficiais sobre a sua função, pedir ao assistente que organize e calcule uma faixa (mediana e quartis) e conferir cada número na fonte antes de usar numa negociação. A IA poupa horas de tabela, mas não sabe o salário real da sua cidade: ela só calcula o que você colocar na amostra.</p>

    <p>Quem chega a uma entrevista sem saber a faixa costuma aceitar o primeiro número que ouve. Quem chega com uma faixa fundamentada negocia com mais calma. Este guia mostra uma pesquisa em cinco passos, como usar o Novo Caged sem se enganar, como calcular a faixa com um exemplo e quais erros evitar. Os valores do exemplo são inventados para ilustrar a conta.</p>

    <h2>Onde buscar números confiáveis sobre salário?</h2>
    <p>Nenhuma fonte sozinha dá a resposta. Salário anunciado em vaga, relato de profissionais, dados oficiais e conversa com colegas se complementam, e cada um tem vício diferente. Vaga mostra o que a empresa se dispõe a pagar para contratar agora, mas muitas não divulgam valor. Relato em site mostra quem se dispôs a contar, em geral um grupo menor e não aleatório.</p>
    <p>A fonte oficial mais útil para ter uma régua é o Novo Caged, o cadastro de admissões e desligamentos de empregos com carteira assinada. O <a href="https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/novo-caged/2025/dezembro/sumario-executivo_-acumulado-e-dezembro-2025.pdf" target="_blank" rel="noopener noreferrer">sumário executivo de janeiro a dezembro de 2025</a> informa que o salário médio de admissão no Brasil foi de R$ 2.294,62 nesse período, e a tabela traz também valores por estado e por grupo de atividade econômica. A nota de rodapé avisa que os valores não incluem salários abaixo de 0,3 nem acima de 150 salários mínimos, nem vínculos intermitentes.</p>
    <p>O portal do <a href="https://www.gov.br/trabalho-e-emprego/pt-br" target="_blank" rel="noopener noreferrer">Ministério do Trabalho e Emprego</a> reúne os serviços ligados ao Caged e à RAIS. Use esses dados para saber se a faixa que você encontrou é razoável, não para fixar o seu salário.</p>

    <h2>O que o salário médio de admissão não diz</h2>
    <p>O número de R$ 2.294,62 é a média de todas as admissões formais do país, de auxiliar de serviços gerais a analista sênior, e considera o salário de quem entrou, não de quem já está há anos na empresa. Por isso ele é um piso de bom senso, não uma meta. Comparar a sua função com essa média nacional é como comparar a conta de luz de um apartamento com a de uma indústria.</p>
    <p>Os mesmos relatórios trazem recortes por região e por setor, que já ajudam: um mesmo cargo costuma pagar diferente em capitais e no interior, e entre indústria, comércio e serviços. Para localizar o nome oficial da sua função, a Classificação Brasileira de Ocupações é a referência, e o guia de <a href="/artigos/mudar-de-area-com-ia-mapa-de-habilidades-cbo-e-primeiros-passos">mudar de área com IA, mapa de habilidades e CBO</a> mostra como consultá-la.</p>

    <h2>Os 5 passos da pesquisa</h2>
    <ol>
      <li>Defina o cargo, a cidade, o porte da empresa e o nível (júnior, pleno, sênior).</li>
      <li>Junte de 10 a 15 vagas reais com salário informado, guardando link e data de cada uma.</li>
      <li>Peça à IA para organizar a amostra e calcular mediana e quartis.</li>
      <li>Compare com o Novo Caged do seu estado e setor, como checagem de plausibilidade.</li>
      <li>Ajuste a faixa pelos benefícios e pelo seu perfil, e escreva a sua âncora e o seu piso.</li>
    </ol>

    <h3>Prompt para organizar a amostra</h3>
    <pre><code>Vou colar 12 vagas de analista administrativo pleno em Belo Horizonte,
cada uma com salário, benefícios e porte da empresa. Monte uma tabela com
essas colunas, calcule mediana, primeiro e terceiro quartil do salário e
liste as vagas que fogem muito do padrão. Use só os dados que eu colei.
Se faltar um dado, diga que faltou em vez de estimar.</code></pre>
    <p>A última frase do prompt importa: modelos de linguagem completam lacunas com números plausíveis. Peça sempre a tabela com os dados de origem e confira as contas por amostragem. O guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> explica como conferir.</p>

    <h2>Exemplo: calculando a faixa com 11 vagas</h2>
    <p>Cenário ilustrativo. Marina é analista administrativa pleno e recebeu uma proposta de R$ 3.800 em Belo Horizonte. Ela juntou 11 vagas parecidas, com salários anunciados de R$ 3.200, 3.400, 3.500, 3.600, 3.800, 4.000, 4.000, 4.200, 4.500, 4.800 e 5.200.</p>

    <table>
      <thead>
        <tr><th>Medida</th><th>Valor</th><th>Como ler</th></tr>
      </thead>
      <tbody>
        <tr><td>Mediana (6ª vaga)</td><td>R$ 4.000</td><td>Metade das vagas paga menos, metade paga mais</td></tr>
        <tr><td>1º quartil (3ª vaga)</td><td>R$ 3.500</td><td>Entrada da faixa</td></tr>
        <tr><td>3º quartil (9ª vaga)</td><td>R$ 4.500</td><td>Topo da faixa típica</td></tr>
        <tr><td>Proposta recebida</td><td>R$ 3.800</td><td>Entre o 1º quartil e a mediana</td></tr>
      </tbody>
    </table>

    <p>A faixa típica da amostra vai de R$ 3.500 a R$ 4.500, e a proposta está abaixo da mediana. Isso não prova que o salário esteja errado: Marina precisa olhar benefícios, porte, modelo de trabalho e perspectiva de crescimento. Mas dá a ela um argumento concreto para pedir algo entre R$ 4.000 e R$ 4.200, se o perfil dela sustentar. A conversa em si é tema do guia de <a href="/artigos/como-negociar-salario-melhor-sabendo-usar-ia">como negociar salário sabendo usar IA</a>, e a comparação de ofertas com regimes diferentes está em <a href="/artigos/clt-ou-pj-como-comparar-proposta-com-ia-e-planilha">CLT ou PJ: como comparar proposta com IA e planilha</a>.</p>

    <h2>Ajustes que mudam a faixa</h2>
    <ul class="checklist">
      <li>Cidade e custo de vida: remoto ou presencial muda o jogo.</li>
      <li>Porte da empresa: multinacionais e startups pagam diferente de empresas familiares.</li>
      <li>Benefícios: vale-refeição, plano de saúde e bônus mudam o total, e o salário-base pode ser menor.</li>
      <li>Senioridade e entrega: a faixa vale para o perfil médio, não para o seu caso específico.</li>
      <li>Data da vaga: vagas antigas distorcem a amostra, então prefira as dos últimos 90 dias.</li>
    </ul>
    <p>Quando o salário já é de quem está empregado e quer pedir reajuste, o <a href="/artigos/pedir-promocao-ou-aumento-com-ia-dossie-de-resultados-e-roteiro-da-conversa">dossiê de resultados para pedir promoção ou aumento</a> complementa a pesquisa. Para PJ e freelancer, o preço do serviço é outra conta, tratada em <a href="/artigos/como-precificar-servicos-usando-ia-no-trabalho">como precificar serviços</a>.</p>

    <h2>Como usar a faixa numa entrevista</h2>
    <p>Se perguntarem sua pretensão, responda com uma faixa e não com um número único, apoiando-se no mercado: "pelo que vi para essa função e porte de empresa, a faixa tem ido de X a Y, e eu me vejo na parte de cima por tal motivo". Não cite a fonte de forma agressiva e nunca invente uma oferta concorrente. Para treinar a resposta, o guia de <a href="/artigos/como-se-preparar-para-entrevistas-de-emprego-usando-ia">como se preparar para entrevistas usando IA</a> traz simulações, e o de <a href="/artigos/networking-com-ia-mensagens-para-recrutadores-e-indicacoes">networking com IA</a> ajuda a perguntar a colegas sobre faixas.</p>
    <p>Fale também com pessoas da área. Uma conversa de 15 minutos com alguém que trabalha em empresa parecida vale mais do que dez tabelas, e serve para calibrar o que a sua amostra mostrou. Se você está em transição, o <a href="/artigos/plano-de-carreira-com-ia-metas-de-90-dias">plano de carreira com IA e metas de 90 dias</a> inclui uma meta salarial realista.</p>

    <h2>Erros comuns</h2>
    <ul>
      <li>Usar a média nacional do Caged como se fosse o salário da sua função.</li>
      <li>Aceitar da IA uma faixa pronta, sem amostra própria e sem fonte.</li>
      <li>Misturar salário anunciado de capital com salário de cidade pequena.</li>
      <li>Ignorar benefícios e comparar só o salário-base.</li>
      <li>Colar dados pessoais ou sua proposta completa, com nome da empresa, numa ferramenta sem checar privacidade. O texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> ajuda a decidir o que enviar.</li>
      <li>Tratar a faixa como garantia: ela é um argumento, não um direito.</li>
    </ul>

    <p>Reserve uma hora neste fim de semana: junte 10 vagas, peça a tabela com mediana e quartis e compare com a sua situação. Se estiver sem emprego, vale combinar a pesquisa com a <a href="/artigos/adaptar-curriculo-para-cada-vaga-com-ia-palavras-da-vaga-sem-inventar">adaptação do currículo para cada vaga</a>. A categoria de carreira do Portal da AI reúne os próximos passos da conversa.</p>
  `,
  faq: [
    {
      question: "Qual o salário médio de admissão no Brasil?",
      answer:
        "Segundo o sumário executivo do Novo Caged de janeiro a dezembro de 2025, o salário médio de admissão nacional foi de R$ 2.294,62. É a média de todas as funções e não inclui valores abaixo de 0,3 nem acima de 150 salários mínimos, nem vínculos intermitentes. Serve como régua geral, não como faixa de uma função.",
    },
    {
      question: "A IA sabe quanto pagam pela minha profissão?",
      answer:
        "Não com precisão. Ela pode repetir números sem fonte ou inventar. O caminho seguro é você juntar vagas reais e dados oficiais e pedir que a IA organize e calcule apenas o que foi colado, com a conta mostrada para você conferir.",
    },
    {
      question: "Quantas vagas preciso para uma faixa confiável?",
      answer:
        "De 10 a 15 vagas parecidas, com cidade, porte e senioridade semelhantes, já dão uma noção razoável de mediana e quartis. Quanto mais vagas e mais recentes, melhor. Complemente com conversa com profissionais da área, que mostra benefícios e bônus.",
    },
    {
      question: "Salário de vaga anunciada é o que a empresa paga?",
      answer:
        "Nem sempre. O valor anunciado é o que a empresa propõe para contratar, e pode haver margem para negociar ou, ao contrário, vagas que anunciam o teto. Trate como indicativo e confirme na entrevista, junto com benefícios e regime de contratação.",
    },
    {
      question: "O que é mediana e por que usar em vez da média?",
      answer:
        "Mediana é o valor do meio: metade das vagas paga menos e metade paga mais. Ela sofre menos com valores extremos que a média. Os quartis mostram a faixa em que ficam as vagas do meio da amostra, o que ajuda a definir um piso e um teto realistas.",
    },
  ],
};
