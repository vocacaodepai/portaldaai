import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "busca-com-ia-e-menos-cliques-o-que-reddit-e-google-mostram-para-quem-vive-de-trafego",
  title: "Busca com IA e menos cliques: o que muda para quem vive de site",
  seoTitle: "Busca com IA e menos cliques: o que muda para sites",
  excerpt:
    "Busca com IA reduz cliques para sites: veja o caso do Reddit, o que o Google diz sobre Modo IA e um plano em cinco passos para não depender só do Google.",
  metaDescription:
    "Busca com IA reduz cliques? Veja o alerta do Reddit, as regras do Google para o Modo IA e um plano de cinco passos para blogs, lojas e negócios locais.",
  category: "futuro",
  date: "2026-10-30",
  readTime: 7,
  imageQuery: "laptop search results analytics",
  seed: 942,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Em 29/10/2026 o Reddit informou que as visitas vindas de buscadores caíram mais de 1 milhão por semana, em média, em outubro, e ligou o movimento à busca com IA.",
    "O Google diz que não há requisito extra para aparecer nos resumos de IA e no Modo IA: a página precisa estar indexada e elegível a snippet, e o tráfego entra no relatório normal do Search Console.",
    "Quem vive de visitas deve diversificar canais (lista própria, perfil local, comunidade) e medir conversão, não só cliques.",
  ],
  content: `
    <p>Busca com IA significa que o Google, em vez de só listar links, monta uma resposta com resumos e cita algumas páginas, e isso tende a reduzir os cliques para sites. Em 29 de outubro de 2026, o Reddit disse que as visitas vindas de buscadores caíram em média mais de 1 milhão por semana em outubro, um sinal que blogs, lojas e negócios locais também precisam ler.</p>

    <p>Não é o fim do tráfego de busca, e o Google afirma que cliques vindos de recursos de IA seguem sendo contados. Mas o jogo muda: quem depende de uma única fonte de visitas fica exposto. Este texto separa o que os dois lados disseram, o que ainda é incerto, e propõe um plano prático de cinco passos para quem tem site, loja ou perfil de serviço.</p>

    <h2>O que o Reddit disse e o que não disse</h2>

    <p>De acordo com a cobertura do <a href="https://techcrunch.com/2026/10/29/as-search-traffic-dries-up-reddit-announces-its-shifting-to-a-logged-in-experience/" target="_blank" rel="noopener noreferrer">TechCrunch sobre o balanço do terceiro trimestre</a>, o Reddit registrou queda média de mais de 1 milhão de visitas por semana vindas de buscas ao longo de outubro. A empresa anunciou que vai migrar, aos poucos, para uma experiência principalmente com login, com testes no quarto trimestre em mercados fora dos Estados Unidos e sem prazo para o resto do mundo.</p>

    <p>O ponto de cuidado: a reportagem liga a queda à busca movida por IA, em que resumos reduzem o clique, e não atribui o número a um único recurso do Google. Os motivos declarados para o login são proteger o conteúdo contra coleta por empresas de IA e abrir espaço para acordos de licenciamento. Nosso <a href="/noticias/reddit-perde-1-milhao-visitas-google-por-semana-modo-ia-login">resumo da notícia</a> traz os números do trimestre, e a <a href="/noticias/google-anuncios-modo-ia-busca-expandem-mundo-alphabet-terceiro-trimestre">cobertura do balanço da Alphabet</a> mostra o outro lado, o do Google.</p>

    <h2>O que o Google diz para donos de site</h2>

    <p>A <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer">documentação do Google Search Central sobre recursos de IA</a> traz regras diretas. Não há requisito adicional para aparecer nos resumos de IA e no Modo IA: a página precisa estar indexada e ser elegível a snippet na busca comum. A própria documentação avisa que indexar e exibir não é garantido.</p>

    <ul>
      <li><strong>Como a resposta é montada:</strong> o Google usa uma técnica que chama de query fan-out, que dispara várias buscas relacionadas para reunir links variados.</li>
      <li><strong>Controles:</strong> o robots.txt vale para o rastreamento; para limitar o que aparece, existem nosnippet, data-nosnippet, max-snippet e noindex; Google-Extended trata do uso em outros sistemas.</li>
      <li><strong>Medição:</strong> o tráfego dos recursos de IA entra no relatório de Desempenho do Search Console, no tipo de busca Web, junto com o resto.</li>
      <li><strong>Qualidade do clique:</strong> o Google afirma que cliques desses recursos tendem a ser mais qualificados, e sugere acompanhar conversões e engajamento no Google Analytics.</li>
    </ul>

    <p>Quem quiser entender o produto do lado do leitor pode ver o guia <a href="/artigos/modo-ia-do-google-como-usar-a-pesquisa-com-ia">Modo IA do Google: como usar a pesquisa com IA</a>.</p>

    <h2>Quem sente mais e quem sente menos</h2>

    <p>O efeito não é igual para todo mundo. Perguntas simples, que o resumo responde inteiras, tendem a gerar menos clique. Já decisões que exigem ver produto, preço, endereço ou prova social ainda levam a pessoa até o site, o perfil ou o WhatsApp.</p>

    <table>
      <thead>
        <tr><th>Tipo de negócio</th><th>Risco maior</th><th>Onde apostar</th></tr>
      </thead>
      <tbody>
        <tr><td>Blog de dicas e definições</td><td>Resumo responde sem clique</td><td>Lista de e-mail, conteúdo com experiência própria</td></tr>
        <tr><td>Loja virtual</td><td>Comparação feita fora do site</td><td>Feed de produtos, avaliações, recompra</td></tr>
        <tr><td>Negócio local</td><td>Resposta direta no resultado</td><td>Perfil da empresa, avaliações, WhatsApp</td></tr>
        <tr><td>Criador de conteúdo</td><td>Dependência de um canal</td><td>Comunidade própria, newsletter, vídeo</td></tr>
      </tbody>
    </table>

    <h2>Exemplo brasileiro com números ilustrativos</h2>

    <p>Imagine um blog de receitas com 10.000 visitas por mês vindas do Google, que ganha com anúncios e uma lista de e-mail com 800 pessoas. Os números são inventados para a conta, não são de um site real. Se as visitas de busca caírem 20%, sobram 8.000, ou 2.000 a menos por mês.</p>

    <p>Se esse blog converter 2% das visitas em novos inscritos, a perda equivale a 40 inscritos por mês que não entram na lista. A resposta não é apenas produzir mais texto: é capturar melhor quem chega. Um formulário simples, um ebook de cardápio semanal e um e-mail por semana mudam a conta, porque cada pessoa na lista pode voltar sem passar pelo Google. O texto sobre <a href="/artigos/como-ganhar-dinheiro-com-newsletter-usando-ia">como ganhar dinheiro com newsletter usando IA</a> detalha o caminho.</p>

    <h2>Plano de cinco passos</h2>

    <ol>
      <li><strong>Meça antes de reagir.</strong> No Search Console, compare cliques e impressões das suas páginas principais nos últimos 90 dias contra os 90 anteriores.</li>
      <li><strong>Separe as páginas.</strong> Marque quais respondem pergunta curta (mais exposta ao resumo) e quais levam a uma decisão (menos exposta).</li>
      <li><strong>Acrescente o que o resumo não tem.</strong> Experiência própria, fotos reais, tabelas, preços com data, passo a passo testado por você.</li>
      <li><strong>Crie um canal próprio.</strong> Lista de e-mail, grupo de WhatsApp com opt-in ou comunidade, para não depender de uma única porta.</li>
      <li><strong>Cuide dos pontos de contato locais.</strong> Se você atende na sua cidade, o <a href="/artigos/perfil-da-empresa-no-google-com-ia-respostas-fotos-e-posts">perfil da empresa no Google</a> pesa mais do que um post de blog.</li>
    </ol>

    <h2>Usando IA para auditar suas páginas</h2>

    <p>Você pode pedir a um assistente que ajude na triagem, desde que não cole dados de clientes. Cole apenas texto público das suas páginas e peça uma análise.</p>

    <pre><code>Abaixo está o texto de uma página do meu site. Responda em tabela:
1) qual pergunta do leitor ela responde;
2) se um resumo de duas frases já resolveria tudo;
3) que informação própria (experiência, preço, foto, tabela) eu poderia acrescentar para o leitor querer clicar.
Texto: [cole aqui]</code></pre>

    <pre><code>Liste 10 perguntas que um cliente do meu tipo de negócio faz antes de comprar e que um resumo de IA não consegue responder sozinho, como disponibilidade, prazo, endereço, condição de pagamento e garantia.</code></pre>

    <p>Lembre que respostas de IA precisam de conferência. O guia sobre <a href="/artigos/ia-com-busca-na-web-como-funciona-citacoes-e-quando-desconfiar">IA com busca na web e citações</a> mostra como checar o que ela afirma.</p>

    <h2>Perguntas para fazer antes de mudar a estratégia</h2>

    <p>Antes de reagir a manchetes, responda quatro perguntas sobre o seu caso. Qual parte do meu faturamento depende de visitas do Google? Quais páginas trazem clientes de verdade, e não só leitores? Eu tenho um jeito de falar de novo com quem me visitou uma vez? Se o tráfego de busca caísse 30% amanhã, o que eu cortaria primeiro?</p>

    <p>Anote as respostas e compare com os números do Search Console. Quem descobre que 80% das vendas vêm de um único canal já tem a prioridade do trimestre. Quem tem renda espalhada em lista, indicação e busca pode manter o rumo e apenas acompanhar os indicadores de perto.</p>

    <h2>Erros comuns nessa fase</h2>

    <ul class="checklist">
      <li>Bloquear tudo no robots.txt por medo e sumir também da busca comum.</li>
      <li>Encher o site de texto genérico feito em série; o <a href="/artigos/blog-com-ia-e-adsense-o-que-o-google-permite-e-proibe">guia sobre blog com IA e AdSense</a> mostra os limites do que o Google aceita.</li>
      <li>Olhar só cliques e ignorar conversões, vendas e contatos.</li>
      <li>Apostar tudo numa rede social só para trocar uma dependência por outra.</li>
      <li>Concluir que a queda é da IA sem checar mudanças no próprio site, como lentidão ou páginas fora do índice.</li>
    </ul>

    <h2>O que olhar daqui para frente</h2>

    <p>Dois sinais merecem acompanhamento. O primeiro é se os dados do Search Console de pequenos sites confirmam o padrão visto no Reddit, que é uma plataforma grande e tem situação própria. O segundo é como os acordos de licenciamento evoluem, já que o Reddit citou esse caminho. O debate editorial aparece também no texto sobre <a href="/artigos/jornalismo-e-ia-o-que-muda-para-quem-produz-noticia-e-para-quem-publica">jornalismo e IA</a>, e o hábito do leitor, em <a href="/artigos/noticias-pelo-chatbot-de-ia-o-que-o-reuters-institute-mostra-e-como-checar-a-fonte">notícias pelo chatbot</a>.</p>

    <p>Quem presta serviço pode transformar a mudança em oferta: o <a href="/artigos/blog-para-negocio-local-como-servico-pacote-preco-e-o-que-o-google-aceita-de-ia">blog para negócio local como serviço</a> e o <a href="/artigos/site-para-negocio-local-com-ia-pacote-prazo-e-como-cobrar">site para negócio local</a> são pontos de partida.</p>

    <h2>Próximo passo</h2>

    <p>Hoje, abra o Search Console, anote os cliques dos últimos 90 dias e escolha uma ação de diversificação para começar esta semana: um formulário de e-mail, um perfil local completo ou uma comunidade. Para acompanhar o que vem pela frente, siga a <a href="/categoria/futuro">categoria Futuro</a> do Portal da AI.</p>
  `,
  faq: [
    {
      question: "A busca com IA vai acabar com o tráfego dos sites?",
      answer:
        "Não há evidência de fim do tráfego, mas há sinais de queda em alguns casos. O Reddit relatou perda média de mais de 1 milhão de visitas semanais de buscadores em outubro de 2026, e o Google afirma que o tráfego dos recursos de IA continua contando no Search Console. O efeito varia por tipo de site.",
    },
    {
      question: "Preciso fazer algo especial para aparecer no Modo IA do Google?",
      answer:
        "Segundo a documentação do Google, não há requisitos adicionais: a página precisa estar indexada e elegível a snippet. Isso significa manter o básico em dia, como rastreamento liberado, links internos, boa experiência de página e texto útil. A inclusão, porém, não é garantida.",
    },
    {
      question: "Como ver o tráfego vindo dos resumos de IA?",
      answer:
        "O Google informa que o tráfego desses recursos aparece no relatório de Desempenho do Search Console, no tipo de busca Web, somado ao resto. Não existe filtro separado só para IA no que a documentação descreve, então compare períodos e acompanhe conversões no Google Analytics.",
    },
    {
      question: "Devo bloquear o Google de usar meu conteúdo na IA?",
      answer:
        "Dá para limitar a exibição com nosnippet, data-nosnippet, max-snippet ou noindex, mas isso também reduz a presença na busca comum. O Google-Extended trata do uso em outros sistemas de IA. Avalie o custo: sumir da busca costuma doer mais do que aparecer num resumo.",
    },
    {
      question: "O que um pequeno negócio local deve fazer primeiro?",
      answer:
        "Complete o perfil da empresa no Google, peça avaliações reais, mantenha horário e telefone corretos e ofereça um canal direto, como o WhatsApp Business. Em busca local, esses pontos de contato costumam pesar mais do que artigos de blog, e não dependem de cliques para o site.",
    },
  ],
};
