import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "cisco-talos-volta-autodoxer-infostealer-usa-ia-perfilar-vitimas",
  title: "Malware Volta-Autodoxer usa Claude para montar dossiê de suas vítimas",
  summary:
    "Cisco Talos achou um infostealer que manda o que roubou para modelos de IA e pede uma avaliação do alvo, com Claude, Kimi e Gemini como reserva, diz a WIRED.",
  author: "Bruno Danello",
  sourceName: "WIRED, Cisco Talos",
  sourceUrl: "https://www.wired.com/story/kernel-panic-volta-autodoxer-ai-infostealer-malware/",
  date: "2026-11-01",
  publishedAt: "2026-11-01T17:30:00-03:00",
  topic: "seguranca",
  imageQuery: "Cisco logo",
  content: `
    <p>Um tipo de vírus que já roubava senhas e cookies ganhou um novo truque: pedir a um modelo de inteligência artificial que leia tudo o que foi roubado e diga quem vale mais a pena atacar. A descoberta é de pesquisadores da Cisco Talos, divisão de inteligência de ameaças da Cisco, e foi revelada em primeira mão na newsletter Kernel Panic, da <strong>WIRED</strong>, publicada em 31 de outubro. O malware foi batizado de <strong>Volta-Autodoxer</strong>, nome que ele próprio usa para se referir internamente, e é um infostealer, categoria de programa feito para furtar credenciais de computadores infectados.</p>

    <p>&quot;Doxear&quot; é o termo da internet para levantar e expor dados pessoais de alguém. Aqui, o prefixo &quot;auto&quot; indica que o trabalho de montar o perfil da vítima é automático: o programa junta o que encontrou no computador, organiza num pacote de dados e entrega a um assistente de IA para que ele escreva uma avaliação do alvo.</p>

    <h2>O que o Volta rouba antes de chamar a IA</h2>
    <p>Segundo a reportagem, a parte clássica do Volta é madura e abrangente. Ele varre senhas salvas em navegadores, tokens do OAuth da Microsoft, cookies, cartões de pagamento e frases de recuperação de carteiras de criptomoedas. Também captura sessões ativas de Discord, Telegram, Steam e Roblox, o que sugere que o foco são pessoas mais jovens, com vida digital intensa.</p>
    <p>Depois da primeira varredura, o malware faz uma segunda, mais profunda, usando o que achou na primeira. Ao olhar o Gmail ou outra conta central da vítima, ele reconstrói onde a pessoa mora e quais são seus hábitos a partir de recibos e históricos de pedidos de serviços como UberEats e DoorDash. É essa colcha de dados que vira o dossiê.</p>

    <h2>Como a IA entra na história</h2>
    <p>Com tudo reunido, o Volta serializa os achados em um único pacote e o envia, pelo OpenRouter (serviço que encaminha pedidos a vários fornecedores de IA), a um modelo de linguagem. Por padrão, a chamada vai para o <strong>Claude Opus 4.6</strong>, da Anthropic. Se as travas de segurança do modelo recusarem o pedido, o código tem reservas: primeiro o Kimi K2, modelo aberto chinês da Moonshot AI, e, se este também falhar, o Gemini 2.5 Flash, do Google. Segundo a WIRED, usar versões mais antigas e baratas e prever recusas é uma prática comum entre atacantes.</p>
    <p>Os autores incluíram um comando de cerca de 240 palavras, com tópicos e lista numerada. Ele começa com &quot;Você é um analista forense de inteligência redigindo uma avaliação de alvo a partir de um pacote estruturado de evidências&quot; (tradução livre) e pede um resumo executivo da pessoa, o que ela faz, &quot;quanto ela vale&quot; e um resumo de sua segurança operacional. Também manda &quot;ligar os pontos entre os campos&quot;, como conferir se a senha do Wi-Fi coincide com o sobrenome, e termina com a orientação de ir fundo em vez de largo.</p>
    <p>Ryan Fetterman, pesquisador da Talos, explicou à WIRED que o texto foi escrito com cuidado para não parecer abertamente malicioso. Segundo ele, os autores já esperam recusas logo no primeiro pedido e por isso planejaram a cascata de modelos mais permissivos. Ele também observou que o implante continua funcionando sem a IA: as chamadas aos modelos são um extra, e não uma dependência.</p>

    <h2>Ainda não há prova de uso em ataques reais</h2>
    <p>Um ponto importante: a Talos diz que não acompanhou se o Volta já foi usado em ataques de verdade. O programa foi identificado pelo CAIRN, um conjunto de ferramentas criado pela empresa para achar softwares de ataque que incorporam recursos de IA. Fetterman afirma que há indícios de que o Volta tenha sido construído para ser vendido a vários atacantes, e não para uma campanha específica.</p>
    <p>Para o pesquisador, o ganho dos criminosos está na velocidade. Tokens de autenticação expiram e senhas mudam, então quem identifica rápido os alvos mais valiosos tem mais chance de usar as credenciais roubadas antes que percam o efeito. Em suas palavras, capacidades mais avançadas estão chegando a atacantes de menor sofisticação, algo que ele chamou de &quot;interessante e perturbador&quot;.</p>
    <p>A reportagem lembra que infostealers estão por trás de algumas das maiores invasões recentes, como as ligadas ao Snowflake, que atingiram AT&amp;T e Ticketmaster, e o roubo de um terabyte de dados da Disney, e que esse tipo de malware já levou centenas de milhões de credenciais. Também cita a CrowdStrike, que disse à WIRED ter visto quatro grupos distintos, operando em chinês, espanhol e inglês, indonésio e russo, usando ferramentas de IA para comprometer dezenas de alvos, entre governos e empresas de saúde, varejo e viagens.</p>

    <h2>Um padrão que o Portal da AI vem acompanhando</h2>
    <p>O caso se soma a uma sequência de achados sobre IA nas mãos de criminosos. Em setembro, a mesma Talos descreveu o <a href="/noticias/cisco-talos-malware-ia-autonoma-closedquorum-cairn">CLOSEDQUORUM, malware que consulta um comitê de IAs para decidir seus ataques</a>. Há semanas, vimos hackers usarem um agente para atacar milhares de contas Microsoft 365 no episódio dos <a href="/noticias/hackers-chineses-artex-ia-connectwise-2250-tenants-microsoft">hackers chineses com o ARTEX</a>, o <a href="/noticias/worm-testmetest-42-repositorios-github-ganchos-claude-cursor">worm que armou 42 repositórios do GitHub</a> e a invasão da <a href="/noticias/railway-invasao-chaves-api-ia-100-mil-workspaces">Railway atrás de chaves de IA</a>. A diferença do Volta é que a IA entra depois do roubo, como analista, e não como executora do ataque.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você trabalha com IA, empreende ou vende serviços online, sua vida digital é exatamente o tipo de alvo que esse malware prioriza: contas de e-mail, de pagamento, de redes sociais e de ferramentas de IA, muitas vezes todas abertas no mesmo navegador. Um dossiê automático transforma uma senha vazada em um ataque mais bem escolhido, como um golpe de engenharia social feito sob medida ou o sequestro de uma conta que dá acesso ao seu faturamento.</p>
    <p>As medidas práticas são conhecidas, mas valem repetir. Infostealers costumam chegar escondidos em programas falsificados, como versões piratas de software, jogos modificados e extensões de procedência duvidosa, então baixe aplicativos só de fontes oficiais. Evite guardar senhas no navegador e use um gerenciador dedicado, ative a autenticação em dois fatores com chave de acesso sempre que possível e desconfie de pedidos para colar comandos no terminal. Se achar que instalou algo suspeito, troque as senhas a partir de outro aparelho e encerre as sessões ativas, porque cookies roubados permitem entrar sem a senha. Para quem entrega serviços a clientes, vale ainda separar o perfil do navegador de trabalho do pessoal. Sobre credenciais de agentes, veja também o <a href="/noticias/1password-for-agents-senhas-agentes-ia">1Password for Agents</a>. A lição do <a href="/noticias/litellm-ataque-comecou-chave-mestra-exposta-posmortem">pós-mortem do ataque à LiteLLM</a> vale aqui: chaves expostas são a porta de entrada mais comum.</p>
    <p>Outro recado é para as empresas de IA. O Volta mostra atacantes testando as travas de Claude, Kimi e Gemini e planejando alternativas quando uma recusa acontece. Isso reforça que as proteções dos modelos ajudam, mas não substituem a defesa na ponta: o computador do usuário continua sendo o elo mais fraco.</p>
    <p>Vale lembrar que a análise vem de pesquisadores de uma empresa de segurança, divulgada de forma exclusiva por um veículo, e que não há comprovação de infecções reais. Detalhes técnicos adicionais, como indicadores de comprometimento, devem ser buscados nos canais da própria Talos.</p>

    <div class="callout-box"><span class="callout-label">Fonte original</span>Reportagem da newsletter Kernel Panic, da <a href="https://www.wired.com/story/kernel-panic-volta-autodoxer-ai-infostealer-malware/" rel="noopener noreferrer nofollow" target="_blank">WIRED</a>, de 31 de outubro de 2026, com pesquisa da Cisco Talos.</div>
  `,
};
