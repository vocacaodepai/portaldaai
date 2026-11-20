import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "eua-exigem-licenca-chips-ia-brasil-data-centers",
  title: "EUA vão exigir licença para enviar chips de IA a data centers no Brasil",
  summary:
    "Nova regra do Departamento de Comércio dos EUA põe o Brasil numa lista de cinco países que precisam de licença para receber chips avançados de IA da Nvidia.",
  author: "Bruno Danello",
  sourceName: "CBS News, Bloomberg, Euronews, Federal Register, Investidor10, Agenda do Poder",
  sourceUrl: "https://www.cbsnews.com/news/nvidia-jensen-huang-commerce-department-limit-remote-access-ai-chips/",
  date: "2026-11-16",
  publishedAt: "2026-11-16T15:12:00-03:00",
  updatedAt: "2026-11-18T15:12:00-03:00",
  topic: "regulacao",
  imageQuery: "Herbert C. Hoover Building Department of Commerce",
  content: `

    <h2>Atualização (15:12)</h2>
    <p>O governo brasileiro se manifestou. Em nota divulgada depois do anúncio americano e reproduzida por veículos como Investidor10, Portal Viu e Agenda do Poder, o Ministério do Desenvolvimento, Indústria, Comércio e Serviços (MDIC) disse que acompanha os possíveis desdobramentos da decisão e que a medida "não representa uma proibição direta da exportação de semicondutores avançados para o mercado brasileiro". Segundo o ministério, o que muda é a exigência de autorização específica para concretizar essas operações. A pasta acrescentou que ainda não é possível medir os efeitos concretos sobre as importações brasileiras desses chips. A nota não havia aparecido nas buscas do Portal da AI na manhã de terça, quando escrevemos que não havia manifestação oficial; fica corrigido aqui.</p>
    <p>Sobre o passo seguinte, a informação é menos firme. Segundo o Agenda do Poder, que ouviu interlocutores do governo sem identificá-los, Brasília ainda não decidiu como responder e avalia tanto negociar com Washington quanto contestar as restrições, mas o tema não teria causado "preocupação significativa" até agora. Até esta atualização, o Portal da AI não encontrou posição própria do Itamaraty nem do Ministério da Ciência, Tecnologia e Inovação, nem anúncio de conversa formal com o Departamento de Comércio americano.</p>
    <p>Na leitura do Portal da AI, o tom do MDIC é de contenção: o governo trata a regra como burocracia nova, não como veto, o que bate com o texto do BIS descrito abaixo (análise caso a caso e exceção para clientes com sede nos Estados Unidos). Só que o próprio documento americano diz que a cooperação do país na fiscalização pesa na concessão das licenças, então a escolha entre negociar e contestar não é neutra para quem planeja data center no Brasil. A publicação oficial no Federal Register, que dá início à vigência e ao prazo de 60 dias para comentários, está marcada para esta quinta-feira, 19 de novembro.</p>

    <h2>Atualização (07:10)</h2>
    <p>A regra saiu do papel. No fim da tarde de segunda-feira, 16 de novembro, o BIS protocolou o texto completo no Federal Register, o diário oficial americano, que o deixou disponível para inspeção pública (documento 2026-23529, com 117 páginas) e marcou a publicação oficial para esta quinta-feira, 19 de novembro. O Portal da AI leu o documento, e ele responde boa parte das dúvidas que ainda estavam em aberto.</p>
    <p>A primeira é a data. O texto diz que a regra vale a partir do dia da publicação, ou seja, 19 de novembro, e abre prazo de 60 dias, contados dessa data, para comentários do público no portal regulations.gov. Os 90 dias citados pela Euronews se referem a outra coisa: data centers que já forneciam grande volume de computação a empresas com sede na China, em Macau ou em outros países do grupo D:5 antes da publicação têm 90 dias para pedir licença se quiserem continuar prestando esse serviço.</p>
    <p>A segunda é o critério. Para o Brasil e os outros quatro países, os pedidos serão analisados caso a caso, e o próprio texto diz que o governo americano vai levar em conta a eficácia do controle de exportações de cada país e a cooperação dele com o BIS na fiscalização. Na prática, a licença brasileira passa a depender também de como Brasília conversa com Washington sobre o tema. O documento ainda avisa que o Departamento de Comércio vai monitorar países que "tolerem a evasão" e pode reagir com restrições de importação, novas exigências de licença e rebaixamento do país no regime americano de controle de exportações.</p>
    <p>A terceira é a exceção para empresas americanas, que vem com contrapartida. Chips enviados ao Brasil para clientes com sede nos Estados Unidos (ou cuja controladora final fica lá) dispensam licença, mas o exportador precisa mandar ao BIS um relatório mensal com nome e endereço de todas as partes e das controladoras, destino final, modelo, quantidade e desempenho de cada chip. O relatório vence no primeiro dia útil do mês seguinte a cada envio.</p>
    <p>O texto também define o que é "grande volume" de computação na regra contra o acesso remoto: mais de 12 milhões de TPP agregados (a medida de desempenho que o governo americano usa para classificar chips de IA), somando um data center ou vários interligados, inclusive por rede. A regra alcança ainda clientes de fora da China que treinam modelos para empresas chinesas, e obriga os data centers a investigar a cadeia de controle societário dos clientes. Por fim, o documento formaliza o fim da regra de difusão de IA do governo Biden, que nunca chegou a ser aplicada.</p>
    <p>Até a manhã desta terça, 17 de novembro, o Portal da AI não encontrou manifestação oficial do governo brasileiro sobre a regra. O que muda para o leitor: a data de vigência está marcada, e o que define o ritmo dos projetos de data center no Brasil daqui para a frente é a análise caso a caso, que agora tem critério escrito e passa pela diplomacia.</p>

    <p>O Brasil entrou numa lista curta e incômoda do governo americano. Nesta segunda-feira, 16 de novembro, o Bureau of Industry and Security (BIS), braço do Departamento de Comércio dos Estados Unidos que cuida do controle de exportações, publicou uma regra provisória que passa a exigir licença para exportar, reexportar ou transferir chips avançados de inteligência artificial para cinco países: Brasil, Indonésia, Malásia, Singapura e Tailândia. Segundo a CBS News, o BIS classificou esses países como de "risco de desvio acima do normal".</p>
    <p>O alvo declarado não é o Brasil, e sim a China. O governo americano quer fechar o que chama de brecha do acesso remoto: empresas chinesas, impedidas de comprar os chips mais potentes da Nvidia, podem alugar poder de computação em data centers de outros países que rodam esses mesmos chips. A regra chega quatro dias depois de Jensen Huang <a href="/noticias/jensen-huang-renuncia-nvidia-colette-kress-ceo-interina">deixar o comando da Nvidia</a>, em meio à suspeita de espionagem ligada à Megaspeed, empresa de nuvem de Singapura investigada por possível desvio de chips para clientes chineses. A Megaspeed nega irregularidades.</p>

    <h2>O que se sabe</h2>
    <p>De acordo com a CBS News, as exigências de licença que já existiam continuam valendo, e a nova regra se soma a elas. O BIS disse que o objetivo é garantir que as restrições atuais à tecnologia americana sensível "não possam ser contornadas por meio de acordos de computação remota" em países terceiros, e ao mesmo tempo continuar promovendo a tecnologia americana para fins comerciais legítimos.</p>
    <p>A Bloomberg, em texto reproduzido no Brasil pela InfoMoney e pela InvestNews, detalha o efeito prático: operadores de data center nos cinco países vão precisar de autorização do governo americano para comprar chips avançados de IA da Nvidia e de outros fabricantes dos EUA, e os pedidos serão analisados caso a caso. Há duas exceções relevantes. Empresas com sede nos Estados Unidos que operam nesses países podem continuar recebendo os chips sem licença, e ficam de fora também os data centers usados em sistemas de recomendação de varejistas online e redes sociais.</p>
    <p>Ainda segundo a Bloomberg, o texto foi redigido pelo Departamento de Comércio "por orientação e sob direção" do Tesouro e do Conselho de Segurança Nacional. O secretário do Tesouro, Scott Bessent, que no domingo <a href="/noticias/bessent-pede-ceo-de-fora-nvidia-vendas-chips-china">pediu um CEO de fora para a Nvidia</a>, disse à Fox News que vários departamentos defendiam a medida. As ações da Nvidia chegaram a cair 2,9% na segunda-feira, e o índice de semicondutores da Filadélfia chegou a recuar 5,5%, segundo a mesma agência.</p>
    <p>A Euronews acrescenta que a regra obriga data centers no exterior a fazer diligência sobre os próprios clientes e restringe os que fornecem grandes volumes de computação a empresas com sede em países de alto risco, como China, Rússia e Irã. Essa parte, segundo a Euronews, entra em vigor em 90 dias.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/Commerce_Building_aerial_view_from_14th_Street.jpg" alt="Vista aérea do Herbert C. Hoover Building, sede do Departamento de Comércio dos Estados Unidos, em Washington" loading="lazy" />
      <figcaption>Foto: Departamento de Comércio dos EUA / Wikimedia Commons (domínio público)</figcaption>
    </figure>

    <h2>O que ainda não está confirmado</h2>
    <p>Até a manhã desta segunda, segundo a InfoMoney, a regra ainda não tinha saído no Federal Register, o diário oficial americano, e as exigências de licença só passam a valer a partir dessa publicação. Por isso, ainda faltam detalhes que importam: a data exata de vigência de cada parte, quais modelos de chip entram exatamente na definição de "avançado", quais critérios o governo vai usar para aprovar ou negar cada pedido e quanto tempo a análise vai levar.</p>
    <p>Também não está claro se o Brasil foi incluído por algum caso concreto no país ou só por estar entre os mercados de data center que crescem rápido fora dos Estados Unidos. As reportagens não citam nenhuma investigação envolvendo empresas brasileiras, e até a publicação desta notícia nenhuma das matérias consultadas trazia reação do governo brasileiro. A Nvidia também não comentou a regra nas reportagens abertas pelo Portal da AI.</p>

    <h2>Por que o Brasil entrou na conta</h2>
    <p>A lista mistura quatro países do Sudeste Asiático, região onde a Megaspeed e outras empresas de nuvem cresceram vendendo capacidade de processamento, e o Brasil, que virou destino de grandes projetos de data center. Em setembro, o governo <a href="/noticias/lula-sanciona-redata-incentivo-fiscal-data-centers-ia">sancionou o Redata</a>, regime que suspende impostos sobre equipamentos de data center por cinco anos e exige, em troca, que as empresas reservem ao menos 10% da capacidade para o mercado brasileiro. Um dos argumentos do programa era justamente atrair data centers que exportam computação para clientes de fora.</p>
    <p>A nova regra cria um atrito direto com essa estratégia. Quem pretende montar um data center de IA no Brasil, sem ser uma empresa com sede nos Estados Unidos, passa a depender de uma licença americana para receber os chips que movem esse tipo de operação. Em tese, as grandes nuvens americanas já instaladas no país se encaixam na exceção para empresas com sede nos EUA, o que pode concentrar ainda mais o mercado nas mãos delas. A medida também conversa com o plano do governo Trump de <a href="/noticias/governo-trump-campeoes-nacionais-ia-nvidia-openai-anthropic">nomear campeãs nacionais de IA</a>: Washington quer que o mundo compre tecnologia americana, mas sob regras definidas por Washington.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem só usa ChatGPT, Claude ou Gemini no dia a dia, nada muda de imediato: esses serviços rodam em grande parte em data centers de empresas americanas, que ficam fora da exigência. Se você ainda está escolhendo qual assistente usar, o nosso <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">guia sobre ChatGPT, Claude e Gemini</a> continua valendo.</p>
    <p>O efeito aparece mais adiante e no bolso de quem constrói. Empresas brasileiras de nuvem, operadores de data center e startups que pretendiam treinar ou hospedar modelos de IA em infraestrutura nacional podem enfrentar mais burocracia, prazos maiores e menos fornecedores para escolher. Isso tende a pesar em projetos de IA soberana, de dados sensíveis (saúde, governo, bancos) que precisam ficar no país, e no custo de processamento oferecido por provedores locais. Se a sua empresa depende de um provedor de nuvem brasileiro para rodar IA, vale perguntar a ele como pretende lidar com a licença.</p>
    <p>O Portal da AI vai acompanhar a publicação no Federal Register e eventuais respostas do governo brasileiro e do setor de data centers, e atualiza esta notícia quando houver fato novo.</p>
  `,
  faq: [
    {
      question: "O que muda para o Brasil com a nova regra dos EUA sobre chips de IA?",
      answer:
        "Exportar, reexportar ou transferir chips avançados de IA para o Brasil passa a exigir licença do governo americano, com análise caso a caso. Empresas com sede nos EUA e data centers de sistemas de recomendação ficam de fora, segundo a Bloomberg.",
    },
    {
      question: "A regra afeta quem usa ChatGPT, Claude ou Gemini no Brasil?",
      answer:
        "Não de imediato. Esses serviços rodam em boa parte em data centers de empresas americanas, que estão na exceção. O impacto maior é sobre operadores de data center e provedores de nuvem que não têm sede nos Estados Unidos.",
    },
    {
      question: "Quando a regra entra em vigor?",
      answer:
        "A regra vale a partir da publicação oficial no Federal Register, marcada para 19 de novembro de 2026, com 60 dias para comentários. Data centers que já atendiam empresas com sede na China ou em outros países de risco têm 90 dias para pedir licença se quiserem continuar.",
    },
  ],
};
