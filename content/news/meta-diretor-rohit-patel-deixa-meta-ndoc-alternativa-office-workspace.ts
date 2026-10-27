import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "meta-diretor-rohit-patel-deixa-meta-ndoc-alternativa-office-workspace",
  title: "Diretor de IA da Meta sai para criar a Ndoc, rival do Office e do Workspace",
  summary:
    "Rohit Patel, que passou oito anos na Meta, fundou a Ndoc, espaço de trabalho com IA que mostra código e fórmulas. Tem 3 pessoas e beta em semanas.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/27/meta-ai-director-rohit-patel-leaves-to-take-on-microsoft-office-and-google-workspace/",
  date: "2026-10-27",
  publishedAt: "2026-10-27T15:30:00-03:00",
  topic: "negocios",
  imageQuery: "Meta Platforms headquarters Menlo Park",
  content: `
    <p>Rohit Patel, diretor de IA que passou oito anos na Meta, deixou a empresa para fundar a Ndoc, uma startup que quer ser uma alternativa nativa de IA ao Microsoft Office e ao Google Workspace. A saída foi noticiada nesta terça-feira (27) pelo TechCrunch. Esta matéria é uma análise própria a partir do que foi relatado; o crédito da fonte está no fim do texto.</p>

    <p>Patel trabalhava no Meta Superintelligence Labs, onde cuidava de aprendizado por reforço e da pergunta de como saber se a resposta de uma IA é confiável. Agora ele aposta que o próximo passo não é pendurar um assistente em cima de planilhas e editores de texto já existentes, e sim criar um espaço de trabalho pensado desde o começo para a IA produzir e para o humano conferir.</p>

    <h2>O que é a Ndoc e como ela funciona</h2>
    <p>A Ndoc (ndoc.ai) quer substituir a mistura de ferramentas que muita gente usa hoje: Excel, Word, PowerPoint, Tableau, ambientes de programação e o velho hábito de copiar e colar resultados do ChatGPT. Em vez de vários programas, a proposta é um único espaço de trabalho, que colegas podem abrir sem precisar criar conta.</p>

    <p>Segundo a reportagem, o produto tem três abas. A primeira, Stage, é para apresentações, painéis, simulações e miniaplicativos. A segunda, Narrative, reúne análises com citações numeradas, figuras e o raciocínio por trás de cada conclusão. A terceira, Model, guarda os conjuntos de dados e os scripts em Python. A ideia central é a transparência: o usuário consegue olhar o código que gerou um documento e as fórmulas que estão dentro dele, em vez de receber um resultado pronto sem saber de onde veio. Patel descreveu isso dizendo que não há nada escondido atrás da cortina.</p>

    <p>A Ndoc também traz conectores para importar dados de ferramentas que a pessoa já usa. E há um detalhe técnico que pode pesar: os documentos são exportados como um único arquivo com a extensão .ndoc.html, que abre em qualquer navegador. Patel afirma que pretende abrir o código desse formato, o que reduziria o receio de ficar preso a uma empresa só.</p>

    <h2>Equipe pequena, sem dinheiro captado e modelos abertos</h2>
    <p>O contraste com os gigantes é grande. A Ndoc tem uma equipe de três pessoas e, até agora, nenhum financiamento. Patel disse que não quer levantar dinheiro antes de provar que os clientes realmente gostam do produto. Hoje há um piloto com uma empresa e uma versão alfa para quem entrou na lista de espera. O cadastro é gratuito, mas o cliente paga pelo uso e pelos tokens consumidos. Uma versão beta deve sair nas próximas semanas, e o lançamento completo está previsto para o ano que vem.</p>

    <p>Outro ponto da estratégia é o custo. A Ndoc é construída e ajustada sobre uma combinação de modelos de código aberto, o que, segundo Patel, a deixa mais barata de operar do que alternativas montadas sobre os modelos de fronteira das grandes empresas. É uma aposta que depende de os modelos abertos continuarem perto do topo em qualidade, algo que a corrida recente tem mostrado ser possível, mas não garantido.</p>

    <h2>A concorrência é pesada</h2>
    <p>A reportagem lembra que OpenAI, Anthropic, Meta, SpaceXAI e Google já oferecem ferramentas de IA para empresas que funcionam dentro do Google Workspace e do Microsoft 365. Em setembro de 2026, a OpenAI lançou o Space, um espaço de trabalho compartilhado dentro do ChatGPT. Patel admite que o Space pode ser uma ameaça, mas argumenta que os laboratórios escolheram o caminho errado ao encaixar a IA em programas que nasceram antes dela.</p>

    <p>A saída de Patel também se soma a uma sequência de baixas na Meta. O TechCrunch cita Joel Kaplan, diretor global de assuntos corporativos, o pesquisador de IA Andrew Tulloch e Emily Dalton Smith, que chefiava o produto de IA para trabalho. Não há, no que foi relatado, uma ligação direta entre as saídas, mas o conjunto mostra que o talento de IA tem circulado rápido entre as big techs e novas startups.</p>

    <p>Já mostramos aqui o movimento no mesmo sentido do lado das grandes empresas, como a <a href="/noticias/apple-assistente-ia-pages-keynote-numbers-mcp">chegada do assistente de IA ao Pages, ao Keynote e ao Numbers</a>, e o avanço do agente da Meta, que <a href="/noticias/meta-muse-10-milhoes-usuarios-compras-balanco">já passa de 10 milhões de usuários</a>. A Ndoc entra nessa disputa pelo lugar onde o trabalho de escritório acontece.</p>

    <h2>Por que isso importa para você</h2>
    <p>Ainda é uma startup de três pessoas em alfa, então ninguém precisa mudar de ferramenta por causa dela. Mas a notícia mostra para onde o mercado de ferramentas de produtividade está olhando:</p>
    <ul>
      <li><strong>Conferir o que a IA fez vira diferencial.</strong> Mostrar fórmulas, scripts e citações ao lado do resultado é o tipo de recurso que quem usa IA para relatório, proposta ou análise deveria exigir de qualquer ferramenta. Vale o hábito de pedir sempre a fonte e o cálculo.</li>
      <li><strong>Formato aberto reduz o risco de ficar preso.</strong> Se o arquivo .ndoc.html realmente for aberto, abrir um documento em qualquer navegador facilita compartilhar com cliente sem exigir conta. Acompanhe se a promessa sai do papel.</li>
      <li><strong>Custo de IA pesa no bolso de quem empreende.</strong> A aposta em modelos abertos para baixar o preço é a mesma lógica que pequenos negócios usam para escolher ferramenta. O guia sobre <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">MCP e a conexão de agentes de IA</a> ajuda a entender como esses espaços de trabalho se ligam a outros programas.</li>
      <li><strong>Cuidado com dados de clientes em ferramenta nova.</strong> Antes de testar qualquer alfa, leia o que a empresa faz com os dados. O texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> e o <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequenos negócios que usam IA</a> trazem o que revisar.</li>
    </ul>

    <div class="callout-box callout-tip">
      <span class="callout-label">Dica prática</span>
      <p>Se entrar na lista de espera para testar a Ndoc ou outra ferramenta em alfa, use dados fictícios ou públicos nos primeiros testes. Só leve informação de clientes depois de entender onde ela é guardada e quem pode vê-la.</p>
    </div>

    <h2>O que observar a seguir</h2>
    <p>O primeiro ponto é a beta, prometida para as próximas semanas, que deve mostrar se o produto funciona fora do piloto. O segundo é o formato .ndoc.html: se for mesmo aberto e outros programas o adotarem, ele pode ganhar vida própria. O terceiro é o preço por uso, que será o teste real da tese de que modelos abertos deixam a conta menor do que a das ferramentas dos grandes laboratórios. E há a questão de disponibilidade e idioma, já que a reportagem não detalha suporte ao português. Até lá, o que está confirmado é pouco e claro: um ex-diretor de IA da Meta saiu para criar uma alternativa de espaço de trabalho com IA, sem dinheiro captado, com piloto em andamento e lançamento completo só em 2027.</p>
  `,
};
