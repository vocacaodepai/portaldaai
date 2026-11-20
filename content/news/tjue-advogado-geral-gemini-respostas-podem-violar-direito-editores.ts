import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "tjue-advogado-geral-gemini-respostas-podem-violar-direito-editores",
  title: "Respostas do Gemini podem violar direito de editores, diz assessor da UE",
  summary:
    "No 1º caso de IA generativa no tribunal da UE, o advogado-geral diz que treinar IA é livre, mas o chatbot que reaproveita a reportagem pode violar o direito.",
  author: "Bruno Danello",
  sourceName: "Tribunal de Justiça da União Europeia, Reuters, AFP",
  sourceUrl: "https://curia.europa.eu/site/upload/docs/application/pdf/2026-11/cp260155pt.pdf",
  date: "2026-11-03",
  publishedAt: "2026-11-03T11:23:00-03:00",
  topic: "regulacao",
  imageQuery: "Court of Justice of the European Union Luxembourg",
  coverImage: {
    url: "/images/covers/tjue-advogado-geral-gemini-respostas-podem-violar-direito-editores.webp",
    width: 1280,
    height: 720,
    credit: "FrDr (CC BY-SA 4.0) / Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File%3ACourt%20of%20Justice%20of%20the%20European%20Union%20Luxembourg%202026%20402.jpg",
  },
  content: `
    <p>O primeiro processo sobre inteligência artificial generativa a chegar ao Tribunal de Justiça da União Europeia (TJUE) ganhou nesta terça-feira, 3 de novembro, a sua peça mais importante até agora. O advogado-geral Maciej Szpunar apresentou suas conclusões no caso C-250/25, em que a empresa húngara Like Company, dona de vários portais de notícias, processa a Google pelo uso de seus artigos no chatbot Gemini. A conclusão tem dois lados: treinar um modelo de linguagem com conteúdo protegido é, em regra, permitido pela lei europeia, mas a resposta que o chatbot dá ao usuário, quando busca e reaproveita uma reportagem em tempo real, pode violar o direito dos editores em determinadas circunstâncias. O parecer está no <a href="https://curia.europa.eu/site/upload/docs/application/pdf/2026-11/cp260155pt.pdf" rel="noopener noreferrer nofollow" target="_blank">comunicado de imprensa n.º 155/26 do tribunal</a> e foi noticiado pela Reuters e pela AFP.</p>

    <h2>O que está em jogo no processo</h2>
    <p>A Like Company entrou com a ação no Tribunal Regional de Budapeste. Ela pede proteção para os artigos publicados em seus portais com base no direito conexo que a diretiva europeia de direitos autorais de 2019 (Diretiva 2019/790, artigo 15) dá aos editores de publicações de imprensa sobre a "utilização em linha" do que publicam. A empresa alega duas coisas: que a Google usou esses textos para treinar os modelos do Gemini e que, entre 13 de junho de 2023 e 31 de maio de 2024, o chatbot reproduziu e colocou à disposição do público esses artigos várias vezes. O juiz húngaro suspendeu o caso e mandou quatro perguntas ao tribunal europeu, duas sobre o treino e duas sobre as respostas.</p>

    <p>O ponto técnico central é a chamada geração aumentada por recuperação (RAG, na sigla em inglês, ou grounding). É o mecanismo que permite ao Gemini buscar informações na web no momento da pergunta, para responder sobre fatos recentes. Na prática, quando alguém pergunta ao chatbot o que aconteceu hoje, ele com frequência vai até os sites de notícias, extrai os artigos e monta uma resposta a partir deles. É exatamente esse uso, e não o treino, que preocupa os editores, porque a resposta pronta tende a substituir o clique na matéria original.</p>

    <h2>Treino: permitido, mas fora do caso</h2>
    <p>Sobre o treino, Szpunar recomendou que o tribunal declare as duas perguntas inadmissíveis. O motivo é duplo: não há prova de que os artigos da Like Company tenham sido usados para treinar o Gemini, e o treino de um modelo, na leitura dele, não é uma forma de "utilização em linha" de publicação de imprensa. Por isso, as perguntas seriam hipotéticas. Mesmo assim, para deixar o tema completo, ele sugeriu que o tribunal registre que o uso de obras protegidas para treinar um modelo de linguagem é, em regra, livremente permitido pela exceção de mineração de textos e dados (artigo 4 da mesma diretiva). É uma posição favorável às empresas de IA, e a Google comemorou esse trecho, segundo a AFP.</p>

    <h2>Respostas: onde mora o risco para a Google</h2>
    <p>A parte que pesa contra a Google é a das respostas. Para o advogado-geral, quando um chatbot baseado em modelo de linguagem recupera uma publicação no site de um editor, reaproveita esse conteúdo para gerar a resposta e entrega essa resposta ao usuário, o direito do editor pode ser violado. Ele faz uma ressalva importante: esse direito não protege os simples fatos relatados numa notícia, apenas a forma específica como o texto foi escrito. O objetivo, diz o comunicado, é proteger o investimento necessário para produzir a reportagem, não dar aos editores um monopólio sobre a notícia em si.</p>

    <p>Szpunar propõe dois critérios para saber se há violação do direito de reprodução. O primeiro é se o chatbot acessou o texto de forma ilícita, por exemplo contornando um paywall ou outra barreira técnica criada para impedir o acesso ou a extração. O segundo é se a resposta se limita a relatar os fatos ou se reaproveita de modo reconhecível a forma de expressão da matéria, a ponto de o usuário não precisar mais abrir o original. Já o direito de colocação à disposição do público, segundo ele, costuma ser violado quando essa forma de expressão aparece de modo sistemático nas respostas do chatbot sobre o assunto.</p>

    <p>Por fim, o parecer trata da responsabilidade. O fornecedor do chatbot responde por esses usos quando eles forem inerentes ao seu modelo de negócio ou quando ele não tiver adotado medidas adequadas para combatê-los de forma confiável e eficaz. Esse é o trecho que mais tende a gerar debate: um chatbot de uso geral existe justamente para responder perguntas sobre qualquer assunto, inclusive notícias do dia.</p>

    <h2>A resposta da Google e os próximos passos</h2>
    <p>Um porta-voz da Google disse à AFP que o Gemini aprende padrões de linguagem para criar respostas originais, sem replicar conteúdo, e que a empresa oferece controles para que os titulares de direitos escolham se querem ficar de fora. O mesmo porta-voz elogiou o reconhecimento de que a lei europeia permite treinar IA com informação pública. As conclusões do advogado-geral não obrigam o tribunal, mas os juízes costumam segui-las, segundo a Reuters. O julgamento é esperado em cerca de seis meses, e quem decide o caso concreto, depois, é a Justiça húngara, aplicando a interpretação dada em Luxemburgo.</p>

    <p>O caso se soma a uma série de disputas que o Portal da AI vem acompanhando. Nos Estados Unidos, a <a href="/noticias/wikimedia-amicus-openai-nyt-treino-justo-rag-nao">Wikimedia disse à Justiça que treinar IA é uso justo, mas que o chatbot copiar o site não é</a>, uma distinção muito parecida com a do advogado-geral. O <a href="/noticias/nyt-jornais-processam-brave-indice-busca-treino-ia">New York Times e outros jornais processaram a Brave</a> pelo uso de reportagens em respostas de IA, e o Reino Unido abriu uma <a href="/noticias/cma-abre-investigacao-termos-ia-meta-editores">investigação sobre os termos de IA da Meta para editores</a>. Do lado do tráfego, o <a href="/noticias/reddit-perde-1-milhao-visitas-google-por-semana-modo-ia-login">Reddit diz perder 1 milhão de visitas do Google por semana por causa do Modo IA</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem produz conteúdo, o parecer desenha uma linha prática: fatos são livres, mas o texto, o jeito de contar, tem valor protegido, e o chatbot que entrega a sua matéria quase inteira ao leitor pode estar passando do limite. Se você tem um site, blog ou newsletter, vale revisar as proteções técnicas (paywall, bloqueio de rastreadores) e acompanhar como as plataformas oferecem a opção de sair do uso em respostas, porque o critério de acesso ilícito pesa na análise. Para quem cria produtos com IA que buscam conteúdo na web, a mensagem é a inversa: resumir fatos com fonte é mais seguro que reproduzir trechos reconhecíveis, e ter um mecanismo claro de controle para os titulares de direitos pode fazer diferença numa disputa.</p>

    <p>O tema também conversa com o Brasil. O projeto de lei de IA em tramitação no Congresso discute a remuneração pelo uso de conteúdo protegido, e uma decisão do principal tribunal europeu tende a servir de referência para o debate por aqui. Para entender o cenário nacional, veja o nosso guia sobre <a href="/artigos/direitos-autorais-e-ia-no-brasil-quem-e-dono-do-que-a-ia-cria-e-o-que-esta-em-discussao">direitos autorais e IA no Brasil</a> e o resumo sobre <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">o que a lei de IA muda para quem usa</a>.</p>

    <p>Os fatos relatados vêm do comunicado de imprensa do Tribunal de Justiça da União Europeia e das reportagens da Reuters e da AFP; o texto acima é análise própria do Portal da AI.</p>
  `,
};
