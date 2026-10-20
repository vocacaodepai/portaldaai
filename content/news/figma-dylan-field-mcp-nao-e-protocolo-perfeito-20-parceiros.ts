import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "figma-dylan-field-mcp-nao-e-protocolo-perfeito-20-parceiros",
  title: "Cofundador do Figma diz que o MCP não é perfeito e amplia parceiros",
  summary:
    "Na Config, na Índia, o Figma anunciou 20 novos parceiros de MCP, mas Dylan Field afirmou que o protocolo não é perfeito e favorece os laboratórios de ponta.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl:
    "https://techcrunch.com/2026/10/20/figma-co-founder-dylan-field-thinks-mcp-is-not-a-perfect-protocol/",
  date: "2026-10-20",
  publishedAt: "2026-10-20T12:35:00-03:00",
  topic: "negocios",
  imageQuery: "Dylan Field Figma CEO",
  content: `
    <p>O Figma ampliou o suporte ao Model Context Protocol (MCP), o padrão aberto que define como agentes de IA se conectam a dados e ferramentas externas, e ao mesmo tempo ouviu do próprio cofundador e CEO, Dylan Field, que o protocolo está longe de ser perfeito. Segundo o <a href="https://techcrunch.com/2026/10/20/figma-co-founder-dylan-field-thinks-mcp-is-not-a-perfect-protocol/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>, em reportagem de Ivan Mehta publicada em 20 de outubro, a empresa anunciou 20 novos parceiros de MCP durante a primeira edição da sua conferência Config realizada na Índia.</p>

    <p>A combinação chama atenção porque mostra uma empresa de design, usada por milhões de profissionais, abrindo as portas para agentes de IA enquanto admite que a tecnologia que sustenta essa abertura tem falhas e favorece quem a criou. Para quem trabalha com design, produto ou automação, a discussão afeta as ferramentas que vão aparecer nos próximos meses.</p>

    <h2>O que o Figma anunciou na Config</h2>
    <p>De acordo com a reportagem, a empresa passou a integrar mais 20 parceiros ao seu servidor MCP, o que permite que agentes e assistentes de IA leiam e usem dados do Figma. O TechCrunch cita dez nomes: Amp, ClickUp, Dia, Junie, da JetBrains, Linear, Meta Muse, Mistral, Notion, OpenCode e Sarvam Agents. A lista mistura editores de código com agentes, ferramentas de gestão de projetos e modelos de empresas diferentes, o que dá uma ideia de como o Figma quer aparecer em todo fluxo de trabalho em que a IA participa.</p>
    <p>A reportagem não detalha preços, planos nem datas de liberação para cada parceiro, e também não diz quais recursos exatos do Figma ficam disponíveis em cada integração. Esses pontos ficam em aberto e dependem de documentação que a empresa e os parceiros ainda precisam publicar.</p>

    <h2>A troca de farpas com a Anthropic</h2>
    <p>O contexto da fala de Field inclui uma discussão pública. Dias antes do anúncio, um dos criadores do MCP reclamou que o Figma não dava suporte ao Pi, uma ferramenta de código aberto. Em resposta, Field publicou no X, em 30 de setembro de 2026, que achava interessante o fato de a Anthropic, criadora do padrão MCP, não expor artefatos e outros recursos em nuvem. Para ele, o debate costuma ser apresentado como aberto contra fechado, mas ignora o que chamou de questões de compartilhamento assimétrico de contexto.</p>
    <p>Depois, segundo o TechCrunch, Field disse que o Figma pretende dar suporte ao Pi. A troca ajuda a entender o tamanho do assunto: quando um protocolo é aberto, mas quem o criou controla os produtos mais usados, a abertura pode valer mais para um lado do que para o outro.</p>

    <h2>O que Dylan Field disse sobre o protocolo</h2>
    <p>Em um encontro com a imprensa, Field afirmou estar animado em abrir o ecossistema do Figma, mas disse que não considera o MCP um protocolo perfeito. Nas palavras dele, o MCP tem "toneladas de espaço para melhorar" e é mais vantajoso para os laboratórios de ponta, ou seja, as empresas que desenvolvem os modelos de IA mais avançados. Ele também disse querer que quem deseja usar seus dados do Figma por meio de um protocolo consiga fazer isso.</p>
    <p>Field explicou ainda por que o Figma não quer ser totalmente aberto: quanto mais dados são expostos pelo MCP, maior o risco de abuso. Ele reconheceu que a maioria dos usuários não pretende fazer mau uso do protocolo ou dos dados do Figma, mas afirmou que a empresa precisa pesar esses riscos. É uma posição de equilíbrio, e não de rejeição: o Figma participa do padrão, mas escolhe o que libera.</p>

    <h2>Por que o MCP virou assunto de negócio</h2>
    <p>O MCP nasceu como uma forma de evitar que cada empresa de software precise criar uma integração diferente para cada assistente de IA. Em vez disso, a empresa publica um conector e qualquer ferramenta compatível pode usá-lo, desde que o cliente autorize. Isso reduz o trabalho de integração e explica por que o padrão aparece em tantos anúncios, como o da brasileira Qive, que lançou um <a href="/noticias/qive-camada-ia-assistente-conector-mcp-claude-chatgpt">conector MCP para Claude e ChatGPT</a>, ou o <a href="/noticias/google-lanca-home-mcp-acesso-antecipado">acesso antecipado ao Home MCP do Google</a>.</p>
    <p>Quando uma empresa grande como o Figma diz que o padrão favorece os laboratórios de modelos, ela levanta uma questão de poder: quem define as regras de acesso aos dados do cliente? Se os assistentes mais populares ficam com a melhor experiência e as ferramentas menores enfrentam barreiras, o ecossistema pode se concentrar. A inclusão de nomes como OpenCode, Mistral e Sarvam Agents entre os parceiros indica que o Figma tenta mostrar o contrário, com atores de diferentes tamanhos e países.</p>

    <h2>Segurança continua sendo o ponto sensível</h2>
    <p>O alerta de Field sobre abuso conversa com problemas já registrados. O Portal da AI noticiou a <a href="/noticias/mcp-python-sdk-falha-oauth-credenciais">falha de credenciais OAuth no SDK Python do MCP</a>, um exemplo de como um conector mal protegido pode expor acessos. Quanto mais dados de design, código e projetos passam por agentes, mais importante fica saber quem pode ler, quem pode alterar e como esse acesso é registrado.</p>
    <p>Também vale lembrar que o Figma já vinha buscando aproximar design e agentes, como mostra a notícia sobre as <a href="/noticias/figma-specs-agentes-ia-regras-de-design">specs do Figma para agentes de IA seguirem regras de design</a>. A ampliação do MCP é mais um passo na mesma direção: transformar os arquivos de design em uma fonte de contexto que um agente consiga consultar sem que a pessoa precise copiar e colar informações.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Na prática</span>
      <p>Antes de ativar qualquer conector MCP no trabalho, confira quais dados ele enxerga, se o acesso é só de leitura e quem na equipe autorizou. Comece com um projeto de teste, e não com os arquivos mais sensíveis do cliente.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>Se você é designer, freelancer ou toca um pequeno negócio, o recado é duplo. De um lado, ter o Figma conectado a agentes de IA pode encurtar tarefas repetitivas, como transformar um layout em código, manter um sistema de design consistente ou levar tarefas do Linear, do ClickUp e do Notion para dentro do fluxo. De outro, a conversa mostra que o padrão ainda está em evolução, e quem depender dele precisa acompanhar mudanças.</p>
    <p>Quem vive de prestar serviço também pode tirar proveito. Saber conectar ferramentas por meio de protocolos como o MCP é uma habilidade que clientes começam a pedir, e o artigo sobre <a href="/artigos/como-ganhar-dinheiro-vendendo-automacoes-prontas-com-ia">como ganhar dinheiro vendendo automações prontas com IA</a> mostra caminhos para transformar isso em renda. Para as rotinas do dia a dia, o guia de <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">automação com IA para economizar horas de trabalho</a> ajuda a escolher por onde começar.</p>
    <p>Por fim, trate cada conector como uma porta que você abre na empresa. O roteiro de <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher uma ferramenta de IA com segurança</a> serve também para avaliar integrações: onde os dados ficam, quem tem acesso e o que o fornecedor registra. Essa checagem vale mais do que a pressa de ativar a novidade.</p>

    <h2>O que a reportagem não responde</h2>
    <p>O texto do TechCrunch se apoia em declarações de Field e no anúncio da Config, e não traz testes independentes das integrações nem números de adoção. Também não esclarece quais melhorias o Figma gostaria de ver no MCP, nem se a empresa pretende propor mudanças ao padrão. A afirmação de que o protocolo favorece os laboratórios de ponta é uma opinião do executivo, não uma conclusão medida, e a Anthropic não aparece na matéria com uma resposta direta às críticas.</p>
    <p>Por isso, o melhor uso desta notícia é como termômetro. O MCP deixou de ser um detalhe técnico e virou tema de estratégia entre empresas de software, com disputas sobre abertura, controle e risco. Para quem usa IA para trabalhar, a dica é simples: aproveite as integrações que economizam tempo, mas mantenha o controle sobre o que cada agente pode ver e fazer.</p>

    <h2>O que acompanhar daqui para a frente</h2>
    <p>Os próximos sinais a observar são a publicação da lista completa dos 20 parceiros, a chegada do suporte ao Pi prometido por Field e a documentação sobre permissões e limites de cada integração. Também será interessante ver se outras empresas de software fazem críticas semelhantes ao padrão e se isso leva a mudanças no protocolo. Até lá, quem usa o Figma com agentes de IA deve testar em projetos de baixo risco e acompanhar os avisos de segurança da própria empresa.</p>
  `,
};
