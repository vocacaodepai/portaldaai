import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "blackwall-capta-100-milhoes-seguranca-trafego-agentes-ia",
  title: "Blackwall capta US$ 100 milhões para proteger sites contra bots de IA",
  summary:
    "A estoniana Blackwall levantou US$ 100 milhões em rodada Série C, vale US$ 2,2 bilhões e vende a provedores de hospedagem proteção contra tráfego de bots e agentes de IA.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/20/blackwall-quadruples-valuation-to-2-2b-as-websites-wrangle-an-increasingly-crowded-internet/",
  date: "2026-10-20",
  publishedAt: "2026-10-20T06:35:00-03:00",
  imageQuery: "servidor data center",
  topic: "negocios",
  content: `
    <p>A Blackwall, empresa de segurança de tráfego web sediada na Estônia, anunciou nesta terça-feira (20) uma rodada Série C de US$ 100 milhões que a avalia em US$ 2,2 bilhões, segundo reportagem exclusiva do <a href="https://techcrunch.com/2026/10/20/blackwall-quadruples-valuation-to-2-2b-as-websites-wrangle-an-increasingly-crowded-internet/" rel="noopener noreferrer nofollow" target="_blank">TechCrunch</a>. A rodada foi liderada pela AVP, com participação dos investidores que já estavam na empresa: Dawn Capital, MMC Ventures e Tera Ventures. O presidente executivo, Roi Carthy, disse que o valor da empresa quadruplicou desde a captação anterior, feita em 2025.</p>

    <p>A notícia chama atenção porque a Blackwall vende exatamente o que muitos donos de site começam a precisar: uma forma de separar o visitante humano e o agente de IA legítimo do robô malicioso, num momento em que a internet recebe cada vez mais acessos automatizados.</p>

    <h2>O que a Blackwall faz</h2>
    <p>A empresa constrói ferramentas de segurança de tráfego para provedores de hospedagem, com foco em bots, e em especial nos que vêm de agentes de IA. O pacote inclui inteligência de ameaças, gestão de certificados, proteção contra ataques de negação de serviço (DDoS) e roteamento de tráfego. Para distinguir quem é quem, a Blackwall usa uma técnica chamada impressão digital (fingerprinting), que identifica o software por trás de cada requisição, e roda modelos de IA próprios nos pontos de contato com o cliente para analisar a intenção e o comportamento de cada pedido.</p>

    <p>O modelo de negócio é o detalhe mais incomum. Em vez de vender direto ao dono do site, a Blackwall trabalha por canal: fecha parceria com empresas de hospedagem, provedores de serviços gerenciados e de nuvem, que recebem um conjunto de ferramentas personalizável. Esses provedores oferecem a proteção aos seus próprios clientes, sob a própria marca, definem os preços e dividem a receita com a Blackwall. A relação com o cliente final continua com quem hospeda o site. Segundo a reportagem, o cliente começa com um nível gratuito que mostra o tráfego e as ameaças e paga por proteção e ferramentas adicionais.</p>

    <h2>Quem são os concorrentes</h2>
    <p>O TechCrunch cita Cloudflare, Akamai e Imperva como players maiores do setor. A Blackwall diz que não pretende competir de frente com eles. A aposta é outra: permitir que a própria empresa de hospedagem ofereça controles semelhantes aos que a Cloudflare já vende, como o AI Crawl Control, recurso que deixa o dono do site permitir, bloquear ou cobrar de rastreadores de IA. Para um pequeno provedor, montar algo assim do zero seria caro, e é aí que entra o produto da startup.</p>

    <p>O CEO e cofundador, Nikita Rozenberg, vê demanda futura por sistemas que controlem quais agentes de IA podem acessar um site, em que condições e como autorizam pagamentos. A ideia conversa com um movimento que já aparece em outras frentes: lojas e portais que bloqueiam agentes de compra, como mostramos na notícia sobre <a href="/noticias/agentes-ia-bloqueados-sites-comercio">agentes de IA para compras que enfrentam bloqueio de Amazon, Delta e eBay</a>.</p>

    <h2>Para onde vai o dinheiro</h2>
    <p>A Blackwall afirma que usará os recursos para se expandir pela América do Norte, Europa, Ásia-Pacífico e Oriente Médio e para desenvolver mais ferramentas de segurança voltadas a provedores de hospedagem, nuvem e serviços gerenciados. A reportagem não informa receita, número de clientes nem planos de entrar no mercado brasileiro, então não há como dizer, a partir dela, se a solução chegará às hospedagens que brasileiros costumam usar.</p>

    <h2>O pano de fundo: a internet cheia de robôs</h2>
    <p>Por trás da rodada está uma mudança de perfil do tráfego. Durante anos, os bots eram sobretudo rastreadores de buscadores e programas de spam. Agora há também agentes de IA que navegam, comparam preços, preenchem formulários e fazem compras em nome de uma pessoa. Alguns são bem-vindos, porque podem trazer clientes. Outros apenas raspam conteúdo para treinar modelos ou tentam explorar falhas. Já vimos esse risco em outra frente, quando pesquisadores mostraram que <a href="/noticias/agentes-ia-injecao-prompt-cabecalhos-http-sites">agentes de IA podem ser enganados por instruções escondidas em cabeçalhos HTTP</a> de páginas comuns.</p>

    <p>Para o dono do site, o desafio é duplo. Bloquear tudo afasta tráfego que pode virar venda. Liberar tudo pode sobrecarregar o servidor, expor conteúdo e abrir brechas de segurança. Empresas como a Blackwall tentam oferecer um meio-termo: reconhecer o agente, entender o que ele quer e só então decidir se ele passa.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você tem um blog, uma loja virtual ou o site de um cliente, o tráfego de robôs deixou de ser assunto só de grandes empresas. Ele pode derrubar um site em hospedagem barata, distorcer as métricas de visitas e fazer você pagar por consumo de banda que não gerou nenhum cliente. Para quem monetiza com anúncios ou afiliados, números inflados por bots também atrapalham a análise do que de fato funciona.</p>

    <p>Quem presta serviço de criação de sites tem uma oportunidade clara: proteção e monitoramento de tráfego podem entrar como item de manutenção mensal. Se esse é o seu caso, vale reler o guia sobre <a href="/artigos/site-para-negocio-local-com-ia-pacote-prazo-e-como-cobrar">como montar e cobrar um pacote de site para negócio local com IA</a> e pensar em como incluir segurança no escopo.</p>

    <p>Algumas providências simples já ajudam, mesmo sem contratar nada novo:</p>
    <ul>
      <li><strong>Pergunte à sua hospedagem.</strong> Veja se ela oferece proteção contra bots e DDoS e se há um nível gratuito que mostre quem acessa o seu site.</li>
      <li><strong>Olhe os relatórios de acesso.</strong> Picos de visitas sem aumento de vendas ou de leitura de verdade costumam indicar robôs.</li>
      <li><strong>Decida sua política para agentes de IA.</strong> Se você quer ser encontrado por assistentes e agentes de compra, não bloqueie tudo. Se prefere proteger o conteúdo, configure o arquivo robots.txt e as regras de bloqueio com cuidado.</li>
      <li><strong>Revise as ferramentas que você contrata.</strong> O guia <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher uma ferramenta de IA com segurança</a> traz perguntas úteis para fazer a qualquer fornecedor.</li>
    </ul>

    <div class="callout-box">
      <span class="callout-label">Atenção</span>
      <p>A Blackwall vende para provedores de hospedagem, não diretamente para o dono do site. Você não contrata a empresa; o que pode acontecer é a sua hospedagem passar a oferecer esse tipo de proteção. Confira com o seu provedor antes de pagar por qualquer pacote de segurança.</p>
    </div>

    <h2>O que ainda não se sabe</h2>
    <p>A reportagem traz os valores da rodada, os investidores e a descrição do produto, mas não detalha a receita da Blackwall, o preço cobrado dos provedores nem o desempenho das ferramentas em testes independentes. A afirmação de que a técnica separa agentes legítimos de maliciosos é da própria empresa, e ainda não há avaliação externa citada. Também não está claro como o setor vai definir, na prática, quais agentes de IA merecem acesso e como a cobrança por acesso a conteúdo vai funcionar entre sites e empresas de IA.</p>

    <p>O que a rodada mostra, com números, é que investidores enxergam dinheiro na pergunta de quem entra no seu site, e com que propósito. Para quem trabalha com internet, a pergunta deixou de ser apenas quantas pessoas visitam a página e passou a incluir quantos visitantes são máquinas, o que elas querem e quanto custa atendê-las.</p>

    <p>A fonte original da informação é a reportagem exclusiva do TechCrunch assinada por Ram Iyer, que reúne as declarações do presidente executivo Roi Carthy e do CEO Nikita Rozenberg. Se a sua rotina depende de um site no ar, vale acompanhar como as hospedagens que você usa vão responder a essa nova camada de proteção.</p>
  `,
};
