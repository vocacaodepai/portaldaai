import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "elevenlabs-lanca-eleven-realtime-agentes-de-voz",
  title: "ElevenLabs lança Eleven Realtime, modelos de voz para agentes em 90 idiomas",
  summary:
    "Os modelos Mini e Max ouvem e falam direto, sem etapa de texto, respondem em cerca de 0,6 segundo e têm API no padrão Realtime da OpenAI, via WebSocket.",
  author: "Bruno Danello",
  sourceName: "ElevenLabs",
  sourceUrl: "https://elevenlabs.io/blog/realtime",
  date: "2026-10-21",
  publishedAt: "2026-10-21T16:46:00-03:00",
  topic: "negocios",
  imageQuery: "ElevenLabs logo",
  content: `
    <p>A ElevenLabs lançou na terça-feira (20) o Eleven Realtime, uma família de modelos de fala para fala pensada para agentes de voz. Em vez de transcrever o áudio, mandar o texto para um modelo de linguagem e depois sintetizar a resposta, o modelo recebe voz e devolve voz diretamente. Os detalhes constam no <a href="https://elevenlabs.io/blog/realtime" target="_blank" rel="noopener noreferrer nofollow">anúncio oficial da ElevenLabs</a>.</p>

    <p>A família tem duas versões. A v1 Mini é voltada a conversas naturais de baixo custo, como assistentes, aulas e personagens interativos. A v1 Max é indicada para trabalhos mais complexos e de várias etapas, como atendimento ao cliente, qualificação de leads e fluxos que exigem raciocínio e uso de ferramentas. Segundo a empresa, os dois suportam mais de 90 idiomas e qualquer uma das mais de 17 mil vozes da biblioteca da ElevenLabs.</p>

    <h2>O que muda em relação a um agente de voz comum</h2>
    <p>Agentes de voz tradicionais funcionam em cadeia: reconhecimento de fala, modelo de linguagem e síntese de voz, cada um com seu atraso. Cada etapa soma tempo e pode perder detalhes, como entonação e interrupções. Um modelo de fala para fala tenta resolver isso processando o áudio de ponta a ponta, o que tende a deixar a conversa mais fluida, com pausas e interrupções mais naturais.</p>
    <p>Esse tema já aparecia em outras notícias recentes, como a de que <a href="/noticias/voz-ia-sem-momento-chatgpt-polyai-otter-humanx">a voz com IA ainda não teve seu momento ChatGPT</a>, segundo executivos da PolyAI e da Otter, e a <a href="/noticias/microsoft-lanca-voz-ia-tempo-real-transcricao">voz em tempo real lançada pela Microsoft</a>. O Eleven Realtime entra nessa disputa com foco em quem quer montar agentes prontos para produção.</p>

    <h2>Latência e benchmarks informados</h2>
    <p>A ElevenLabs cita avaliações da Artificial Analysis. Na latência até o primeiro áudio, o Max tem média de 0,57 segundo e o Mini, de 0,62 segundo. No teste de raciocínio por fala, o Big Bench Audio, o Max marca 98,8% e o Mini, 75,9%. Em dinâmica de conversa, medida pelo Full-Duplex-Bench, o Mini aparece à frente, com 95,8% contra 94,1% do Max. No Speech Agent Arena, o Max chega a 998 pontos e o Mini, a 988.</p>
    <p>Em uso de ferramentas, a diferença é grande: o Max chega a 87,1% e o Mini, a 60,3%. Por isso a empresa recomenda o Max para agentes que precisam chamar muitas funções, como consultar um sistema, agendar ou registrar um pedido. Vale lembrar que esses números são divulgados pela própria empresa, com base em uma avaliação de terceiros, e podem variar conforme o idioma e o tipo de tarefa.</p>

    <h2>Como usar: ElevenAgents ou API direta</h2>
    <p>Há dois caminhos. O recomendado é o ElevenAgents, onde basta escolher um modelo Realtime em uma lista. A plataforma inclui canais como telefone, web, WhatsApp e centrais de atendimento em nuvem, além de fluxos de trabalho, base de conhecimento, regras de proteção, testes e monitoramento.</p>
    <p>O segundo caminho é a Realtime API, que funciona apenas por WebSocket e segue as especificações Realtime da OpenAI. Na prática, quem já tem uma integração nesse formato precisa, em boa parte dos casos, só trocar o endereço e o nome do modelo. Integrações que usam WebRTC precisam migrar para WebSocket primeiro. A API roda separada do ElevenAgents. O anúncio não traz tabela de preços.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Na prática</span>
      <p>Antes de trocar o agente de voz de um cliente, faça um teste lado a lado com ligações reais em português: meça o tempo de resposta, a taxa de interrupções mal tratadas e o custo por minuto. Número de benchmark em inglês não garante o mesmo resultado no sotaque e no ruído do seu público.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>Quem presta serviço de atendimento, vendas ou suporte tem aqui uma ferramenta a mais para montar agentes de voz que atendem telefone e WhatsApp. O Portal da AI já explicou como <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">automatizar o atendimento no WhatsApp com IA</a> e como <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">ganhar dinheiro criando e vendendo agentes de IA personalizados</a>; um modelo de voz mais rápido e com suporte a 90 idiomas amplia o que dá para vender, inclusive para clientes que atendem em mais de uma língua.</p>
    <p>Para quem apenas usa voz no dia a dia, o efeito é indireto: assistentes mais naturais tendem a aparecer em apps e serviços. Se você quer entender a base, o guia <a href="/artigos/assistente-de-voz-com-ia-como-usar-no-dia-a-dia">assistente de voz com IA no dia a dia</a> ajuda, e a análise <a href="/artigos/elevenlabs-vale-a-pena-vozes-em-portugues-precos">ElevenLabs vale a pena? Vozes em português e preços</a> mostra como a empresa se comporta em nosso idioma.</p>

    <h2>Limites e cuidados</h2>
    <p>O lançamento chega de forma gradual: o acesso pelo ElevenAgents está sendo liberado por área de trabalho. Segundo o resumo de um agregador que acompanhou o anúncio, o Mini não está disponível no Modo de Retenção Zero nem em ambientes com HIPAA, e o Max não está disponível na Índia e em Singapura. Esses pontos devem ser confirmados na documentação oficial antes de qualquer contrato.</p>
    <p>Agentes de voz também levantam questões de privacidade e consentimento: avisar o cliente de que ele fala com uma IA, gravar apenas com autorização e tratar os dados conforme a LGPD. Voz sintética convincente é útil para atendimento, mas também alimenta golpes, algo que o Portal da AI já mostrou em casos de voz clonada.</p>

    <h2>O que acompanhar daqui para a frente</h2>
    <p>Os próximos passos são a divulgação de preços por minuto, a liberação ampla no ElevenAgents e testes independentes em português do Brasil. Também vale observar como concorrentes respondem, já que a compatibilidade com o padrão Realtime da OpenAI facilita trocar de fornecedor. Quem constrói agentes de voz deve acompanhar esses três pontos antes de decidir onde apostar.</p>
  `,
};
