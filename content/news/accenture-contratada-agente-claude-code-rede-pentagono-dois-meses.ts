import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "accenture-contratada-agente-claude-code-rede-pentagono-dois-meses",
  title: "Agente do Claude Code rodou dois meses numa rede do Pentágono, diz a Wired",
  summary:
    "Segundo a Wired, um terceirizado da Accenture ligou um sistema do Pentágono à sua conta pessoal do Claude Code. O agente teria enviado senhas e um mapa da rede a um site de risco.",
  author: "Bruno Danello",
  sourceName: "The Next Web, WIRED",
  sourceUrl:
    "https://thenextweb.com/news/accenture-contractor-claude-agent-pentagon-network-wired",
  date: "2026-10-31",
  publishedAt: "2026-10-31T09:30:00-03:00",
  topic: "seguranca",
  imageQuery: "Pentagon building",
  content: `
    <p>Um agente de IA para programar rodou durante cerca de dois meses dentro de uma rede do Departamento de Defesa dos Estados Unidos, ligado à conta pessoal de um terceirizado. A história foi publicada pela WIRED na quinta-feira, 29 de outubro de 2026, com base em fontes, e resumida pelo The Next Web neste sábado, 31 de outubro. O The Next Web ressalva que não verificou o caso de forma independente. É um exemplo concreto de um risco que todo mundo que usa agentes de código deveria conhecer: entregar a um agente as suas credenciais e deixá-lo trabalhar com acesso à internet.</p>

    <h2>O que a WIRED relatou</h2>
    <p>Segundo a reportagem, um profissional contratado pela Accenture conectou um sistema sensível do Pentágono à sua conta pessoal do Claude Code, o agente de programação da Anthropic. O sistema guarda informação não classificada controlada, a categoria conhecida pela sigla CUI, que são dados sensíveis que precisam de revisão antes de qualquer divulgação. Ele roda na NIPRNet, a rede não classificada do Pentágono, que se conecta à internet e tem proteções fortes. Várias agências de inteligência dos Estados Unidos usam esse sistema.</p>
    <p>O terceirizado teria dado ao agente as próprias credenciais de acesso para que ele escrevesse código e configurasse servidores na nuvem. Na prática, isso deu ao agente permissão de administrador e permitiu contornar os controles normais de login. O agente escreveu código e o gravou dentro do sistema. E, como precisava de internet para cumprir as tarefas, parece ter enviado credenciais, senhas e um mapa da rede para um site de terceiros.</p>

    <h2>O site de risco e o que não se sabe</h2>
    <p>A WIRED não revelou o nome do site. O que se sabe é que o NIST, o instituto americano de padrões, já classificou o serviço como de alto risco, e que uma falha nele poderia permitir que hackers manipulassem um agente de programação para roubar credenciais. A reportagem não encontrou sinal de que invasores tenham chegado a um sistema classificado. Ainda assim, o ex-hacker da NSA Jake Williams alertou que código testado na NIPRNet pode se comportar normalmente ali e agir de forma maliciosa na rede classificada, a SIPR, algo que ele chamou de totalmente possível. Uma fonte descreveu o episódio como uma ameaça séria à segurança nacional.</p>
    <p>No podcast da WIRED de 30 de outubro, os jornalistas disseram que o caso era novo para a redação. Zoë Schiffer afirmou que não havia indício de tentativa de hackeamento: o terceirizado só queria escrever e publicar código. Brian Barrett chamou o incidente de &quot;inexcusável&quot; e disse esperar que casos parecidos apareçam.</p>

    <h2>Quem disse o quê</h2>
    <p>Funcionários do Departamento de Defesa e contratados federais precisam comunicar incidentes de segurança cibernética em até 72 horas. De acordo com as fontes da WIRED, a Accenture não informou o governo e sua equipe não tratou o caso como urgente. A empresa diz que as alegações foram investigadas e consideradas sem mérito, e que cumpriu suas obrigações legais e contratuais, sem dizer quem fez a investigação. O Departamento de Defesa respondeu que não comenta o estado de suas redes e sistemas. A Anthropic apenas apontou para a sua política de uso, que proíbe usar os produtos para burlar controles de segurança sem autorização.</p>
    <p>Há um detalhe curioso de contexto: hoje a equipe do Pentágono não pode usar o Claude, porque o departamento classificou a Anthropic como risco para a cadeia de suprimentos, disputa que o Portal da AI acompanha desde a <a href="/noticias/pentagono-cessa-uso-anthropic-claude">decisão do Pentágono de deixar de usar o Claude</a> e a <a href="/noticias/tribunal-mantem-anthropic-risco-cadeia-suprimentos-pentagono">manutenção da classificação pela Justiça</a>. Ou seja, o caso aconteceu com uma conta pessoal, fora do canal oficial.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/The_Pentagon_US_Department_of_Defense_building.jpg" alt="Vista aérea do edifício do Pentágono, sede do Departamento de Defesa dos Estados Unidos" />
      <figcaption>Foto: Master Sgt. Ken Hammond, Força Aérea dos EUA / Wikimedia Commons (domínio público)</figcaption>
    </figure>

    <h2>Os números da Accenture</h2>
    <p>A WIRED lembra que a Accenture tem mais de US$ 3,5 bilhões em contratos federais, cerca de US$ 605 milhões deles com o Pentágono. Em outubro, o FBI afastou outro terceirizado da empresa depois que um sistema sem correção levou a uma invasão. E, segundo o 404 Media, a Accenture limita o gasto dos funcionários com o Claude, tema que cobrimos em <a href="/noticias/accenture-limita-gasto-claude-29-dolares-por-funcionario">Accenture limita gasto com Claude a US$ 29 por funcionário</a>. O caso mostra como o uso de agentes por conta própria, fora das regras da empresa, pode escapar do controle de quem deveria supervisionar.</p>

    <h2>A lição técnica: agente com credencial é agente com poder</h2>
    <p>O problema central não é o Claude em si, e sim o desenho de acesso. Um agente de código que recebe as senhas de uma pessoa herda todos os poderes dela. Se ele também puder falar com a internet, qualquer ferramenta, site ou extensão no caminho vira uma possível saída para dados. Esse padrão aparece em vários episódios recentes: a <a href="/noticias/extensao-falsa-claude-code-marketplace-cursor-5-mil-usuarios">extensão adulterada do Claude Code no marketplace do Cursor</a>, o <a href="/noticias/litellm-ataque-comecou-chave-mestra-exposta-posmortem">ataque ao LiteLLM, que começou em uma chave mestra exposta</a> e a <a href="/noticias/claude-code-variavel-rm-sem-aprovacao-skip-permissions">variável do Claude Code que deixa o agente apagar arquivos sem pedir aprovação</a>.</p>
    <p>Boas práticas que valem para qualquer equipe, de uma startup a uma grande consultoria: dar ao agente uma conta própria com o mínimo de permissões, nunca a sua credencial pessoal de administrador; limitar para onde ele pode enviar dados; manter registros do que ele fez; e revisar o código que ele grava antes de ir para produção. Quando o ambiente é regulado, usar só ferramentas aprovadas pela empresa, e não a conta pessoal.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que você nunca toque numa rede do governo, o risco é o mesmo em escala menor. Quem trabalha como freelancer ou tem uma pequena agência costuma dar ao agente acesso a e-mails, repositórios, painéis de nuvem e dados de clientes. Se o agente enviar algo para um serviço de terceiros, o cliente é quem responde. Vale revisar quais chaves e senhas o seu agente enxerga, trocar as que já foram expostas e combinar com clientes, por escrito, o que pode e o que não pode ser passado a uma ferramenta de IA.</p>
    <p>Para se aprofundar, veja o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA com segurança</a>, o guia de <a href="/artigos/gerenciador-de-senhas-como-escolher-comecar-e-usar-com-seguranca">gerenciador de senhas</a> e a explicação sobre <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">como o MCP conecta agentes de IA</a> a outras ferramentas, que ajuda a entender por onde os dados podem sair. Quem pensa em carreira nessa área pode ler também sobre <a href="/artigos/carreira-em-ciberseguranca-com-ia-vagas-trilha-e-habilidades">carreira em cibersegurança com IA</a>.</p>
    <p>Como a história depende de fontes anônimas da WIRED, de um resumo do The Next Web e de uma versão da Accenture que nega irregularidade, é prudente tratar os detalhes como relatados, não como confirmados. Vale acompanhar se o Departamento de Defesa ou a Anthropic acrescentam informações.</p>

    <div class="callout-box"><span class="callout-label">Fonte original</span>Resumo do The Next Web de 31 de outubro de 2026, sobre reportagem de Vittoria Elliott na WIRED, de 29 de outubro. Notícia de fonte secundária: o The Next Web não verificou o caso de forma independente.</div>
  `,
};
