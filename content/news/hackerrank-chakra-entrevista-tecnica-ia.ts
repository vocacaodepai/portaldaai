import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "hackerrank-chakra-entrevista-tecnica-ia",
  title: "HackerRank lança Chakra, IA que avalia como você pensa, não só o código",
  summary: "A Chakra, da HackerRank, observa como o candidato pensa e usa IA durante a entrevista técnica. Mais de 500 mil entrevistas já testaram o sistema.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/05/hackerranks-ai-interviewer-offers-a-glimpse-into-what-job-interviews-could-become/",
  date: "2026-10-05",
  publishedAt: "2026-10-07T07:35:00-03:00",
  imageQuery: "programmer coding technical interview laptop screen",
  topic: "mercado-trabalho",
  content: `
    <p>A HackerRank lançou nesta semana a Chakra, um agente de IA que conduz entrevistas técnicas de programação observando como o candidato pensa e resolve o problema, não só o resultado final que ele entrega. Segundo reportagem da <a href="https://techcrunch.com/2026/10/05/hackerranks-ai-interviewer-offers-a-glimpse-into-what-job-interviews-could-become/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>, a ferramenta já passou por mais de 500 mil entrevistas em fase de teste e reduziu em 70% a 80% os alertas de atividade suspeita em comparação com as avaliações tradicionais da própria HackerRank.</p>

    <p>A Chakra apresenta ao candidato uma tarefa de código em repositório real, dentro de uma interface tipo "canvas" que já inclui um assistente de IA liberado para uso durante a prova. Em vez de proibir ferramentas de IA, como boa parte dos processos de seleção técnica ainda faz, o sistema assume que o candidato vai usá-las e passa a avaliar outra coisa: como ele monta o prompt, como julga a resposta que a IA devolve e como conduz a solução a partir daí. O CEO da HackerRank, Vivek Ravisankar, resumiu a mudança de forma direta: "o modelo anterior de avaliação julgava o resultado (...) agora, por causa da IA, qualquer pessoa consegue produzir um artefato."</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Custom-software-developement-php-net.JPG" alt="Código de programação exibido na tela de um computador" />
      <figcaption>Foto: Ron23545 / Wikimedia Commons (CC BY-SA 4.0)</figcaption>
    </figure>

    <h2>Como funciona a entrevista com Chakra</h2>
    <p>A plataforma junta, numa única sessão, o que antes exigia três etapas separadas de seleção: a prova de código em si, a entrevista de arquitetura e a conversa de acompanhamento sobre decisões técnicas. Durante a tarefa, o agente faz perguntas de acompanhamento sobre a metodologia e as escolhas do candidato, no mesmo estilo de uma entrevista humana que pede pra você "pensar em voz alta". A diferença é que a IA está observando o processo inteiro, incluindo a troca de mensagens com o assistente embutido no canvas, para formar o que a empresa chama de nota de "fluência em IA": a capacidade de formular bem um problema pra um modelo, reconhecer quando a resposta está errada e guiar a solução até o fim.</p>
    <p>Empresas como Snowflake, Snorkel e Capgemini testaram a Chakra antes do lançamento público, e a base de clientes da HackerRank já inclui nomes como Amazon, Nvidia, Clay e Replit, entre os mais de 3 mil clientes corporativos e 30 milhões de desenvolvedores cadastrados na plataforma globalmente. Ravisankar foi categórico sobre o peso que a empresa está dando ao produto: "a Chakra vai ser a manchete. É o caminho que vamos seguir daqui pra frente."</p>

    <h2>Por que isso importa para quem trabalha ou contrata com IA no Brasil</h2>
    <p>O lançamento da Chakra formaliza algo que já vinha acontecendo nos bastidores de processos seletivos de tecnologia: a pergunta deixou de ser "você sabe programar sem ajuda de IA?" e passou a ser "você sabe programar bem usando IA?". Isso muda o que vale a pena treinar pra quem está buscando vaga de desenvolvedor hoje, e conversa direto com o que o Portal da AI já mostrou em <a href="/artigos/como-se-preparar-para-entrevistas-de-emprego-usando-ia">como se preparar para entrevistas de emprego usando IA</a>: dominar prompt, saber revisar criticamente o que a IA devolve e justificar decisão técnica importam mais do que nunca, porque agora isso é literalmente o que está sendo avaliado, não um complemento informal da entrevista.</p>
    <p>Essa mudança também pesa pra quem está do outro lado da mesa, contratando. Uma reportagem recente mostrou que <a href="/noticias/programadores-evitam-ia-trabalho-stack-overflow">6 em cada 10 programadores ainda evitam usar IA no trabalho</a>, por desconfiança ou medo de errar, e ferramentas como a Chakra tendem a empurrar justamente na direção contrária: quem sabe usar IA de forma transparente e criteriosa passa a sair na frente num processo seletivo, em vez de esconder que usou. Isso é coerente com o que o relatório da Workday já tinha apontado: como mostrou a notícia sobre o <a href="/noticias/workday-relatorio-ia-nao-reduz-vagas-mas-muda-tudo">relatório da Workday sobre IA mudar as vagas mais do que cortar empregos</a>, a demanda não está desaparecendo, está se deslocando pra quem sabe operar com IA como parte do trabalho, não escondido dele.</p>

    <h2>Uma peça do quebra-cabeça da contratação técnica no Brasil</h2>
    <p>No mercado brasileiro, esse tipo de ferramenta chega num momento em que as empresas já sinalizam cautela especificamente nas vagas de entrada. A pesquisa da Manpower mostrada na notícia sobre a <a href="/noticias/brasil-contratacao-vagas-junior-ia-manpower-2026">contratação de vagas júnior de tecnologia no Brasil</a> apontou retração justamente nos cargos que, historicamente, eram testados com provas de código mais simples e repetitivas, exatamente o tipo de avaliação que a IA generativa deixou mais fácil de simular ou de terceirizar sem aprendizado real por trás. Uma ferramenta que avalia o raciocínio e não só o código entregue tende a dificultar esse tipo de atalho, o que pode, a médio prazo, também mudar o cálculo de quem hoje acha mais arriscado contratar gente nova sem saber se ela programa ou se só sabe copiar resposta de IA.</p>
    <p>Vale lembrar que times de recursos humanos e tecnologia no Brasil costumam adotar esse tipo de produto de avaliação técnica com atraso em relação ao mercado americano, geralmente via integração com plataformas de recrutamento já usadas aqui, então o impacto direto da Chakra em processos seletivos brasileiros ainda deve demorar alguns meses pra aparecer. Mas o sinal que a ferramenta dá é claro: quem se prepara hoje pra ser avaliado pelo raciocínio com IA, e não só pelo código puro, está se preparando pro formato de entrevista que mais empresas de tecnologia devem adotar nos próximos ciclos de contratação, inclusive fora dos Estados Unidos.</p>

    <h2>O que ainda falta confirmar</h2>
    <p>A HackerRank não detalhou, na reportagem, exatamente qual modelo de IA move o assistente embutido na Chakra, nem divulgou preço específico do produto pra quem já é cliente da plataforma de avaliação técnica. Também não há, até a publicação desta notícia, dado independente que confirme a redução de 70% a 80% nos alertas de atividade suspeita citada pela própria empresa, número que vale tratar com a mesma cautela reservada a qualquer estatística divulgada por quem lança o produto. Dois pontos merecem acompanhamento: se outras plataformas de recrutamento técnico (como LeetCode e CodeSignal) vão responder com produtos parecidos, e se empresas brasileiras de tecnologia vão de fato adotar esse modelo de avaliação ou preferir manter a entrevista técnica tradicional, sem IA liberada durante a prova.</p>
  `,
  faq: [
    {
      question: "O que é a Chakra, da HackerRank?",
      answer:
        "É um agente de IA lançado pela HackerRank em outubro de 2026 que conduz entrevistas técnicas de programação observando o raciocínio do candidato, incluindo como ele usa um assistente de IA liberado durante a prova, em vez de avaliar só o código final entregue.",
    },
    {
      question: "A Chakra permite usar IA durante a entrevista?",
      answer:
        "Sim. Diferente da maioria dos testes técnicos tradicionais, que proíbem ferramentas de IA, a Chakra libera um assistente de IA dentro da própria interface de prova e avalia a chamada 'fluência em IA' do candidato: como ele formula o problema, julga a resposta da IA e conduz a solução a partir dela.",
    },
    {
      question: "Quais empresas já usam ou testaram a Chakra?",
      answer:
        "Snowflake, Snorkel e Capgemini testaram a ferramenta antes do lançamento. A base de clientes da HackerRank, que deve ter acesso ao produto, inclui nomes como Amazon, Nvidia, Clay e Replit, entre mais de 3 mil clientes corporativos no mundo.",
    },
  ],
};
