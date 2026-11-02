import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "nyt-jornais-processam-brave-indice-busca-treino-ia",
  title: "New York Times e três jornais processam a Brave por dados de busca para IA",
  summary:
    "O NYT e os jornais Daily News, Chicago Tribune e Orlando Sentinel acusam a Brave de vender seu índice de busca a empresas de IA como Anthropic, Perplexity e xAI.",
  author: "Bruno Danello",
  sourceName: "The Next Web, Reuters",
  sourceUrl: "https://thenextweb.com/news/nyt-newspapers-sue-brave-ai-scraping",
  date: "2026-11-02",
  publishedAt: "2026-11-02T14:41:00-03:00",
  topic: "regulacao",
  imageQuery: "New York Times building",
  content: `
    <p>A briga entre a imprensa e as empresas de inteligência artificial ganhou um alvo novo nesta segunda-feira, 2 de novembro. O jornal The New York Times processou a Brave Software, dona do navegador e do buscador Brave, e, poucas horas depois, os editores dos jornais New York Daily News, Chicago Tribune e Orlando Sentinel (todos do grupo Alden) entraram com uma ação separada, de teor parecido. As duas ações foram protocoladas na Justiça federal de Manhattan, segundo relato do The Next Web, que cita a agência Reuters e o serviço MLex. O foco não é uma empresa de chatbot, e sim uma peça de infraestrutura que alimenta várias delas: o índice de busca da Brave.</p>

    <h2>O que os jornais alegam</h2>
    <p>O centro das acusações é o Brave Index, uma coleção de mais de 30 bilhões de páginas da web que sustenta o buscador da empresa. Os jornais afirmam que a Brave nunca revelou o nome do seu rastreador, o que impede os editores de bloqueá-lo pelo nome nos arquivos de configuração dos sites. Também dizem que a empresa vende acesso a esse índice por meio de uma API de busca, e as petições citam cinco clientes: Anthropic, Perplexity, Mistral, xAI e Cohere. O próprio material de divulgação da Brave, segundo as ações, descreve o uso mais comum da API como "no treinamento e na ancoragem de vários dos maiores modelos de linguagem da web". Os jornais ainda citam um texto do blog da Brave em que a empresa diz que a Anthropic usou a API para treinar o Claude 2.</p>

    <p>Os três jornais do grupo Alden apresentam cinco pedidos: violação de direitos autorais direta, contributiva e vicária, burla de proteções técnicas pela lei americana DMCA e enriquecimento sem causa pela lei de Nova York. O Times também apresentou alegações de direitos autorais e de DMCA. A defesa dos três jornais é conduzida pelo advogado Steven Lieberman, que declarou que a Brave "deve ser responsabilizada por lavar reportagens pirateadas para a indústria de IA". Uma porta-voz do Times, Graham James, disse à Reuters que o jornal pediu repetidamente que a Brave parasse de usar seu jornalismo e foi ignorado.</p>

    <h2>Respostas de IA, paywall e anúncios</h2>
    <p>As ações vão além do índice. Os jornais acusam o recurso de respostas com IA da Brave, chamado Ask Brave, de devolver trechos palavra por palavra e de gerar resumos detalhados de matérias pagas. Também criticam uma configuração do navegador que a empresa promove para contornar paywalls: segundo as petições, ela permite ler conteúdo de assinantes sem fazer login, e uma delas cita um usuário do Reddit dizendo que conseguiu ler o Times sem conta. Por fim, os jornais lembram que o navegador bloqueia por padrão os anúncios dos editores enquanto a Brave vende os seus, o que, na visão deles, faz a empresa lucrar com o jornalismo sem repartir a receita.</p>

    <p>Os números que aparecem nas ações dão a dimensão do caso. Os jornais do grupo Alden afirmam que mais de 2 milhões de artigos registrados estão envolvidos e citam um estudo segundo o qual rastreadores de IA geram 95,7% menos tráfego de volta aos sites do que a busca tradicional do Google. A Brave, de acordo com a ação, teve mais de US$ 100 milhões em receita em 2025 e cerca de 130 milhões de usuários mensais. Os autores pedem indenização por danos reais e legais, devolução dos lucros, uma ordem permanente (injunção) e julgamento por júri. O texto do The Next Web não traz declaração da Brave, então não se sabe ainda como a empresa vai responder.</p>

    <h2>Um histórico de disputas</h2>
    <p>O processo não surge do nada. Em março de 2025, a própria Brave processou a News Corp, pedindo que a Justiça declarasse que indexar a web é uso justo. Em julho de 2026, a News Corp respondeu com uma contra-ação, acusando a Brave de infração de direitos autorais ligada à IA. O Times e os jornais do grupo Alden também já movem processos separados contra a OpenAI e a Microsoft. Ou seja, a estratégia mudou de escala: em vez de mirar só quem treina o modelo, os editores agora miram também quem fornece os dados que alimentam vários modelos ao mesmo tempo.</p>

    <p>Esse é um ponto que o Portal da AI já vinha acompanhando por outros ângulos. A <a href="/noticias/wikimedia-amicus-openai-nyt-treino-justo-rag-nao">Wikimedia disse à Justiça que treinar IA é uso justo, mas que um chatbot copiar o site não é</a>, uma distinção que conversa diretamente com a acusação sobre as respostas do Ask Brave. Gigantes do setor também aceitaram um padrão para recusar a coleta: <a href="/noticias/anthropic-openai-google-microsoft-sinal-unico-robots-txt-bloquear-treino">Anthropic, OpenAI, Google e Microsoft apoiam um sinal único no robots.txt para barrar o treino</a>. O caso da Brave mostra a limitação desse tipo de sinal: se o rastreador não tem nome público, o site não consegue bloqueá-lo. Em outra frente, a <a href="/noticias/justica-eua-ia-copyright-fair-use-westlaw">Justiça americana já analisou o uso justo em IA no caso Westlaw</a>, e a Anthropic enfrenta ações como a da <a href="/noticias/sony-warner-processam-anthropic-direitos-autorais">Sony e da Warner por direitos autorais</a>. A própria Brave, aliás, é conhecida entre usuários de IA por seu assistente, o <a href="/noticias/brave-leo-chat-ia-criptografado-ponta-a-ponta-tee">Leo, com chat criptografado de ponta a ponta</a>, que a reportagem não menciona nas ações.</p>

    <h2>O que ainda não se sabe</h2>
    <p>É importante separar acusação de fato provado. Tudo o que está acima são alegações das petições, relatadas pela imprensa. Ainda não há decisão judicial, e a Brave não se manifestou no texto consultado. Pontos centrais, como se vender acesso a um índice de busca para treinar modelos configura infração, ou se o uso de trechos em respostas de IA ultrapassa o uso justo, dependem de interpretação que os tribunais americanos ainda estão construindo caso a caso. Processos desse tipo costumam levar anos, e a chance de acordo de licenciamento, como os que algumas editoras já fecharam com empresas de IA, também existe.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo longe de Nova York, o desfecho desse tipo de caso mexe com o que você usa no dia a dia:</p>
    <ul>
      <li>Muitos assistentes e buscadores de IA dependem de índices de busca de terceiros. Se esse fornecimento for restringido ou ficar mais caro, o preço e a qualidade das respostas dessas ferramentas podem mudar.</li>
      <li>Se você produz conteúdo (blog, newsletter, loja, curso), vale conferir se o seu site declara no robots.txt o que pode ou não ser coletado e acompanhar os novos padrões de recusa de treino.</li>
      <li>O estudo citado de 95,7% menos visitas vindas de rastreadores de IA reforça um alerta para quem vive de tráfego de busca: depender só de Google ou de IA para ser encontrado é arriscado. Newsletter, comunidade e lista própria de contatos protegem melhor.</li>
      <li>Quem usa respostas de IA para trabalho, especialmente com matérias pagas, deve conferir a fonte original antes de citar. Resumos de conteúdo protegido podem estar no centro de disputas e conter erros.</li>
      <li>Se você cria produtos com IA e usa APIs de busca, vale ler os termos de uso e guardar registro de quais fontes alimentam o seu produto. Risco jurídico de dados é um custo que tende a crescer.</li>
    </ul>

    <p>A principal lição é que a discussão sobre direitos autorais e IA saiu do modelo e chegou à cadeia de dados inteira. Quem constrói, vende ou depende desses serviços precisa acompanhar de perto.</p>

    <p>Os fatos relatados vêm do The Next Web, que cita a Reuters e o MLex; o texto acima é análise própria do Portal da AI.</p>
  `,
};
