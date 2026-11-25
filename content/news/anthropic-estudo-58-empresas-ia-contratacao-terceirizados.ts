import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-estudo-58-empresas-ia-contratacao-terceirizados",
  title: "Anthropic: IA freou contratações em 2 de cada 3 empresas entrevistadas",
  summary:
    "Estudo da Anthropic com 58 empresas dos EUA aponta contratações menores em dois terços delas e cortes de terceirizados; demissões diretas foram raras.",
  author: "Bruno Danello",
  sourceName: "Anthropic",
  sourceUrl: "https://www.anthropic.com/research/working-with-ai",
  date: "2026-11-25",
  publishedAt: "2026-11-25T16:26:00-03:00",
  topic: "mercado-trabalho",
  imageQuery: "Anthropic logo",
  content: `
    <p>A inteligência artificial está pesando mais nas vagas que deixam de ser abertas do que nas demissões. É o que mostra o relatório "Working with AI", publicado pela Anthropic, dona do Claude, em 23 de novembro. Pessoas de dois terços das empresas ouvidas disseram ter contratado menos por causa da IA, enquanto só duas companhias relataram uma função eliminada por completo pela automação, com perda do emprego.</p>

    <h2>O que se sabe</h2>
    <p>Os economistas Nathan Wilmers, Maxim Massenkoff e Peter McCrory fizeram 66 entrevistas presenciais em 58 empresas dos Estados Unidos, todas clientes da Anthropic. Falaram com executivos, gerentes e funcionários de escritórios de advocacia, fábricas, startups, uma transportadora, uma editora e outros negócios.</p>
    <p>Sobre emprego, os números principais são estes:</p>
    <ul>
      <li>Em dois terços das empresas houve relato de contratação reduzida por causa da IA. Um terço dessas quedas veio de áreas encolhidas de propósito, sem repor quem saiu. A maior parte veio de vagas que seriam necessárias para crescer e não foram abertas.</li>
      <li>Dez empresas disseram ter contratado mais por causa da IA, principalmente para implantar as ferramentas e reforçar o suporte de TI.</li>
      <li>Nove relataram cortes em serviços contratados de programação, atendimento ao cliente, assessoria jurídica e funções administrativas, muitos deles já feitos fora do país.</li>
      <li>Em cinco houve relato de desligamento de funcionários que não adotaram a IA.</li>
    </ul>
    <p>Uma frase de um líder de engenharia de uma empresa de gestão em saúde resume o padrão, em tradução livre: "Aumentamos muito a capacidade comprando tokens em vez de contratar gente". Outra pessoa ouvida disse que a empresa podia não estar demitindo, mas também não estava contratando.</p>
    <p>O corte em terceirizados aparece em exemplos concretos. Uma financeira dispensou bem mais de 100 prestadores de dados e desenvolvimento no exterior. Uma empresa de tecnologia financeira adotou agentes de atendimento e encerrou contratos de suporte fora dos Estados Unidos. Outra, que criou um agente para analisar documentos, reduziu em mais de 90% o número de revisores que esperava contratar no ano seguinte, plano que depois enfrentou resistência da equipe de revisão. Os autores avaliam que isso pode ser um alerta antecipado para o setor internacional de serviços empresariais.</p>

    <h2>Onde a IA gera valor, segundo os entrevistados</h2>
    <p>O relatório analisou quase 300 aplicações de IA descritas nas conversas. Na maioria, o ganho veio de produzir mais, e não de cortar custo: parte por acelerar o trabalho que já existia, parte por melhorar produtos e serviços ou criar outros. Uma clínica passou a informar ao paciente, antes do atendimento, quanto ele pagaria depois do plano de saúde. Uma empresa da área odontológica colocou um atendimento com IA para ligações fora do horário.</p>
    <p>Em um décimo dos casos, quem ficou com o benefício foi o próprio funcionário, com um trabalho mais agradável ou menos horas de esforço. Nem todo chefe gostou. Um executivo reclamou que a equipe escondia os ganhos para usar as horas livres em outras coisas.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Mindpark_Helsingborg_bottenv%C3%A5ning_Open_Space.jpg" alt="Pessoas trabalhando com notebooks em um espaço compartilhado, em foto de arquivo" loading="lazy" />
      <figcaption>Foto: Karstendc / Wikimedia Commons (CC BY-SA 4.0)</figcaption>
    </figure>

    <h2>Por que muitos projetos travam</h2>
    <p>A dificuldade mais repetida foi revisar o que a IA entrega: o volume cresce mais rápido do que a atenção de quem confere. Também surgiram adoção desigual entre colegas, falta de estrutura para manter os programas criados com IA e etapas que não aceleram junto com as demais. Regulação e desconfiança de clientes quase não foram citadas como barreira.</p>
    <p>Um contador, por exemplo, criou com o Claude um aplicativo para auditar contribuições de aposentadoria, tarefa que antes tomava 80 horas. O protótipo impressionou a equipe, mas precisou ser implementado por um fornecedor externo e, meses depois, ainda não estava em uso regular.</p>
    <p>A automação decidida de cima para baixo trouxe outro problema. Especialistas são chamados a montar e conferir o sistema que pode substituí-los, e parte deles resiste. "Se eu me abrir a isso, estou construindo meu próprio caixão", disse um funcionário, em tradução livre. Também houve relatos de IA usada para acompanhar o desempenho de equipes e de preocupação com vigilância.</p>
    <p>As empresas que os autores consideram mais bem encaminhadas mudaram a organização. Elas ampliaram o escopo dos cargos, deslocaram pessoas para as tarefas que a IA ainda não resolve e criaram uma base comum de dados e ferramentas. Em uma construtora, um agente passou a coletar com as equipes de obra as informações do relatório diário, e os gerentes de projeto ganharam as manhãs para falar com clientes.</p>

    <h2>O que ainda não está confirmado</h2>
    <p>O estudo tem limites que o próprio texto reconhece. As empresas não formam uma amostra aleatória nem representativa, todas são americanas e clientes de quem fez a pesquisa. As avaliações de valor são principalmente opiniões dos entrevistados, em geral sem teste controlado ou medição. Os autores dizem esperar que pesquisas quantitativas ponham as ideias à prova.</p>
    <p>Também não dá para tirar do relatório quantos empregos a IA fechou ou vai fechar no mercado como um todo, nem o que acontece no Brasil. E a Anthropic vende a tecnologia analisada, um interesse que o leitor deve levar em conta. Os próprios autores avisam que as boas práticas descritas não garantem proteção contra perda de empregos.</p>
    <p>Outras pesquisas olham o mesmo tema por ângulos diferentes. Um <a href="/noticias/workday-relatorio-ia-nao-reduz-vagas-mas-muda-tudo">relatório da Workday indicou que a IA muda as vagas mais do que corta empregos</a>, enquanto a companhia aérea australiana Qantas anunciou que vai <a href="/noticias/qantas-terceiriza-850-vagas-accenture-india-ia">terceirizar 850 vagas de escritório e acelerar o uso de IA</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Na leitura do Portal da AI, o risco mais próximo, pelos relatos, está na porta de entrada e nas tarefas vendidas em pacotes fechados. Quem presta serviço remoto de código, suporte, revisão de documentos ou rotinas administrativas, sobretudo para fora, deve olhar com atenção: são os tipos de contrato que apareceram nos cortes. A defesa possível é vender o que o cliente não separa facilmente em uma tarefa, como entender o problema, conferir a qualidade e responder pelo resultado.</p>
    <p>Para quem busca emprego, saber usar a ferramenta virou parte do cargo em algumas dessas empresas, e já há <a href="/noticias/recem-formados-viram-gestores-de-agentes-ia-pwc-vagas-entrada">recém-formados começando a carreira como gestores de agentes de IA</a>. Vale registrar com exemplos o que você melhorou no trabalho, como mostra o guia para <a href="/artigos/como-se-tornar-referencia-em-ia-na-empresa-sem-ser-do-ti">virar referência em IA na empresa sem ser do TI</a>.</p>
    <p>Para o pequeno negócio, a lição prática é escolher um processo, definir quem revisa a saída e quem mantém a automação antes de contar a economia. Comece entendendo a <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">diferença entre agente, chatbot e automação</a> e veja onde a IA pode <a href="/artigos/como-usar-ia-para-reduzir-custos-operacionais-pequenos-negocios">reduzir custos operacionais</a> sem criar retrabalho. Se a ferramenta economizar horas, decida com a equipe para onde elas vão.</p>
  `,
  faq: [
    {
      question: "O que o estudo da Anthropic diz sobre demissões por IA?",
      answer:
        "Nas 58 empresas ouvidas, só duas relataram uma função totalmente eliminada pela automação com perda do emprego. Os efeitos mais comuns foram contratação menor, citada em dois terços delas, e cortes de serviços terceirizados, relatados por nove.",
    },
    {
      question: "O resultado vale para o Brasil?",
      answer:
        "Não dá para afirmar. As entrevistas foram feitas em empresas dos Estados Unidos, todas clientes da Anthropic, e os autores dizem que a amostra não é aleatória nem representativa do mercado.",
    },
    {
      question: "Quais barreiras as empresas encontraram para usar IA?",
      answer:
        "A mais repetida foi revisar o volume de material gerado pela IA. Também apareceram adoção desigual entre funcionários, falta de estrutura para manter programas feitos com IA, resistência de especialistas e etapas do trabalho que não aceleram junto.",
    },
  ],
};
