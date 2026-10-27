import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "apps-conectados-do-gemini-agenda-maps-e-youtube-como-usar",
  title: "Apps conectados do Gemini: Agenda, Maps e YouTube, como usar",
  seoTitle: "Apps conectados do Gemini: como ativar e usar",
  excerpt:
    "Apps conectados do Gemini: veja como ligar a Agenda e outros serviços, o que o assistente faz com isso, o que muda no celular e como cuidar da privacidade.",
  metaDescription:
    "Apps conectados do Gemini: aprenda a ativar em Personalizar e Conectores, pedir para criar eventos na Agenda, usar Maps e YouTube e controlar privacidade e histórico.",
  category: "iniciantes",
  articleSubcategory: "apps-e-tarefas",
  date: "2026-10-18",
  readTime: 7,
  imageQuery: "smartphone calendar map assistant hands",
  seed: 433,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Apps conectados deixam o Gemini agir em outros serviços, como criar um evento na Google Agenda, em vez de só responder com texto.",
    "No computador, o caminho é Personalizar e depois Conectores; a disponibilidade varia por país, idioma, dispositivo e tipo de conta.",
    "Antes de conectar, entenda a Atividade do Gemini: com ela ligada, as conversas podem ser usadas para melhorar os serviços do Google, e há opção de desligar e apagar.",
  ],
  content: `
    <p>Apps conectados do Gemini são ligações entre o assistente do Google e outros serviços, como a Google Agenda, para que ele execute tarefas em vez de só conversar. Você conecta uma vez, pede em português algo como marcar um compromisso e o Gemini cria o evento. A opção só funciona com a sua conta logada e pode ser desligada a qualquer momento.</p>

    <p>Para quem está começando com IA, esse é o passo que transforma o assistente em ajudante do dia a dia: menos copiar e colar, mais coisa resolvida. Este guia explica como ativar no computador, o que dá para pedir, o que muda no celular, onde a privacidade entra e quais erros evitar. As informações vêm da página oficial de ajuda do Google e da central de privacidade do Gemini, consultadas em 18/10/2026. Se você ainda está montando o seu primeiro assistente, o guia de <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">como configurar o primeiro assistente de IA pessoal</a> é um bom começo.</p>

    <h2>O que são apps conectados e para que servem</h2>
    <p>Segundo a <a href="https://support.google.com/gemini/answer/13695044" target="_blank" rel="noopener noreferrer">página de ajuda do Gemini</a>, os apps conectados permitem, por exemplo, criar eventos na Google Agenda ou em aplicativos de terceiros. Sem a conexão, o Gemini só escreveria um lembrete em texto para você copiar. Com ela, a ação acontece direto no serviço.</p>
    <p>A mesma página separa dois tipos de informação. O primeiro é a informação pública de serviços como Google Voos, Google Hotéis, Google Maps e YouTube, que o Gemini usa para responder perguntas sobre lugares, trajetos e vídeos. O segundo é o conteúdo pessoal dentro dos seus serviços, que o Gemini só acessa com a sua permissão. Entender essa diferença evita sustos: perguntar o horário de funcionamento de uma loja é uma coisa, deixar o assistente mexer na sua agenda é outra.</p>
    <p>Vale lembrar que o recurso é descrito para contas pessoais. Contas de trabalho e de escola têm uma página própria e podem ter regras definidas pelo administrador. Se o Gemini do seu trabalho não mostra a opção, provavelmente a política da empresa controla isso.</p>

    <h2>Como ativar no computador, passo a passo</h2>
    <p>A página de ajuda descreve o caminho no computador. Os nomes de menu podem mudar de lugar com atualizações.</p>
    <ol>
      <li>Entre em gemini.google.com com a sua conta Google.</li>
      <li>Na barra lateral, clique em Personalizar (ou em Mais e depois em Personalizar).</li>
      <li>Abra a área de Conectores.</li>
      <li>Para conectar um serviço, clique em Adicionar e autorize.</li>
      <li>Para desconectar, clique em Mais opções ao lado do serviço e escolha Desconectar.</li>
    </ol>
    <p>Você precisa estar logado, e a ajuda informa que a disponibilidade varia por país, idioma, dispositivo e app do Gemini. Se a opção não aparece, o motivo mais comum é conta, região ou idioma sem suporte, e não erro seu. No celular, a tela pode ser diferente: procure o mesmo nome em Configurações do Gemini.</p>
    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Conecte um serviço por vez e teste com um pedido simples e sem risco, como criar um evento de teste, antes de passar tarefas importantes para o assistente.</p></div>

    <h2>Exemplos de pedidos que funcionam no dia a dia</h2>
    <p>Quando o Gemini tem acesso ao serviço certo, os pedidos ficam mais curtos. Os exemplos abaixo são sugestões; o resultado depende do que estiver disponível na sua conta e no seu país.</p>
    <table>
      <thead>
        <tr><th>Situação</th><th>Pedido sugerido</th><th>Serviço envolvido</th></tr>
      </thead>
      <tbody>
        <tr><td>Marcar compromisso</td><td>Crie um evento na quinta às 15h: consulta no dentista, com lembrete 1 hora antes</td><td>Google Agenda</td></tr>
        <tr><td>Planejar saída</td><td>Qual o melhor horário para ir ao mercado perto de mim amanhã?</td><td>Informação pública do Maps</td></tr>
        <tr><td>Aprender algo rápido</td><td>Resuma o que este vídeo ensina e liste os passos</td><td>YouTube</td></tr>
        <tr><td>Viagem curta</td><td>Compare opções de hotel para o fim de semana em Gramado</td><td>Informação pública de Hotéis</td></tr>
      </tbody>
    </table>
    <p>Para uso mais amplo no celular, o guia do <a href="/artigos/gemini-live-com-camera-e-tela-como-usar-no-celular">Gemini Live com câmera e tela</a> mostra a conversa por voz, e o texto sobre <a href="/artigos/assistente-de-voz-com-ia-como-usar-no-dia-a-dia">assistente de voz com IA</a> traz ideias de rotina. Para quem planeja deslocamentos, o artigo de <a href="/artigos/como-usar-ia-para-planejar-viagens-sem-perder-horas-pesquisando">planejar viagens com IA</a> complementa.</p>

    <h2>Como montar uma rotina com a Agenda</h2>
    <p>O melhor uso para iniciantes é transformar bagunça em compromisso. Um exemplo: você recebe uma mensagem com os horários da reunião de pais da escola, cola o texto no Gemini e pede para criar os eventos. O assistente identifica datas e horários e cria os eventos na agenda. Antes de confirmar, confira três coisas: o dia, o horário e o fuso.</p>
    <h3>Prompt para organizar a semana</h3>
    <pre><code>Estou colando abaixo as mensagens com os meus compromissos da semana.
Liste cada compromisso com dia, horário e local. Aponte conflitos de
horário e pergunte antes de criar qualquer evento na minha agenda.
Não crie nada sem eu confirmar.</code></pre>
    <h3>Prompt para planejar o dia</h3>
    <pre><code>Tenho 4 tarefas hoje: pagar a conta de luz, levar a encomenda aos
Correios, consulta às 16h e mercado. Sugira uma ordem que reduza o
deslocamento e deixe 30 minutos de folga antes da consulta.</code></pre>
    <p>A frase "não crie nada sem eu confirmar" é uma boa prática: ela evita eventos duplicados e erros de horário. O guia de <a href="/artigos/como-usar-ia-para-criar-rotina-diaria-produtiva">rotina diária produtiva com IA</a> aprofunda a organização, e o de <a href="/artigos/gemini-no-gmail-escrever-e-responder-emails-mais-rapido">Gemini no Gmail</a> mostra o mesmo raciocínio para e-mails.</p>

    <h2>No celular, a Atividade do Gemini muda o que funciona</h2>
    <p>Aqui está o ponto que mais confunde. A página de ajuda explica que, se a Atividade do Gemini (Keep Activity, no texto original) estiver desligada, os apps conectados não ficam disponíveis em gemini.google.com, no iOS e em relógios inteligentes. No Android, ficam disponíveis apenas Assistência do dispositivo, Telefone, Mensagens e WhatsApp. Ainda segundo a ajuda, o Gemini não consegue usar os apps conectados dentro do Google Mensagens.</p>
    <p>Também há uma regra para informação pública: os dados públicos de Voos, Hotéis, Maps e YouTube exigem a Atividade ligada, enquanto a informação pública da Pesquisa Google continua disponível mesmo com ela desligada. Em resumo prático, quem desliga a Atividade por privacidade perde parte dos recursos. É uma troca, e você escolhe o lado dela. Para quem prefere usar o Gemini sem deixar rastro, o guia de <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">apagar o histórico e usar chat temporário</a> explica as alternativas.</p>

    <h2>Privacidade: o que acontece com as suas conversas</h2>
    <p>Segundo a <a href="https://support.google.com/gemini/answer/13594961" target="_blank" rel="noopener noreferrer">central de privacidade do Gemini</a>, com a Atividade ligada as conversas são salvas e usadas para melhorar os serviços do Google, inclusive o treinamento de modelos. Com ela desligada, as próximas conversas não aparecem na Atividade e não são usadas para treinamento (salvo se você enviar feedback), mas ficam guardadas por 72 horas para o Gemini responder e tratar feedback.</p>
    <p>A central informa ainda que parte das conversas é revisada por pessoas, que as conversas revisadas ficam retidas por até três anos e que são desvinculadas da conta antes de seguir para prestadores. A exclusão automática padrão é de 18 meses, com opção de 3 ou 36 meses ou sem exclusão, e apagar a atividade não remove conversas já revisadas. Chats temporários ficam fora do uso para melhoria.</p>
    <p>Na prática: não escreva senha, número de documento, dado de saúde ou informação de terceiros em conversas com o assistente. O texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber</a> traz um checklist, e o de <a href="/artigos/memoria-longa-em-ia-assistente-que-lembra-de-voce">memória longa em IA</a> explica por que o assistente que lembra de você pede mais cuidado.</p>

    <h2>Erros comuns e riscos de dar acesso demais</h2>
    <ul>
      <li>Conectar tudo de uma vez. Comece por um serviço e amplie quando se sentir seguro.</li>
      <li>Confirmar sem ler. Evento criado errado vira falta numa consulta.</li>
      <li>Esquecer que desligar a Atividade tira recursos, principalmente no iOS e no navegador.</li>
      <li>Usar conta de trabalho sem checar a política da empresa.</li>
      <li>Deixar o assistente agir com base em texto de origem duvidosa. Páginas e e-mails podem conter instruções escondidas, risco explicado em <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection</a>.</li>
      <li>Esperar que ele faça tudo. Para tarefas maiores, o <a href="/artigos/agente-de-ia-pessoal-gemini-spark-o-que-delegar-e-o-que-nao">agente pessoal Gemini Spark</a> e a ideia de <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">conectar agentes via MCP</a> mostram para onde isso caminha.</li>
    </ul>

    <h2>Vale a pena ativar?</h2>
    <p>Para quem já usa Google Agenda e Gmail, sim: o ganho é pequeno em cada pedido e grande ao longo da semana. Comece conectando a Agenda, peça três coisas simples e confira os eventos criados. Se algo parecer invasivo, desconecte pelo mesmo menu. Para entender que plano libera quais recursos, veja o comparativo <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">Google AI Plus, Pro ou Ultra</a>, e para usar fotos no mesmo assistente, o texto sobre o <a href="/artigos/nano-banana-no-gemini-editar-fotos-criar-imagens-limites-e-planos">Nano Banana</a>.</p>
  `,
  faq: [
    {
      question: "O que são os apps conectados do Gemini?",
      answer:
        "São ligações entre o Gemini e outros serviços, como a Google Agenda, que permitem ao assistente executar ações, por exemplo criar um evento, em vez de apenas responder com texto. Funcionam com conta logada e podem ser desconectados a qualquer momento.",
    },
    {
      question: "Como ativar os apps conectados no Gemini?",
      answer:
        "No computador, entre em gemini.google.com, abra Personalizar na barra lateral, vá em Conectores e clique em Adicionar no serviço desejado. Para desconectar, use Mais opções e Desconectar. A disponibilidade varia por país, idioma e dispositivo, e os menus podem mudar com atualizações.",
    },
    {
      question: "O Gemini acessa minha agenda sem eu saber?",
      answer:
        "Segundo a ajuda oficial, o Gemini não acessa informações pessoais nem conteúdo dos seus serviços do Google sem a sua permissão. Você autoriza ao conectar e pode desconectar depois. Por segurança, peça que ele confirme com você antes de criar ou alterar eventos.",
    },
    {
      question: "Por que o recurso não aparece no meu Gemini?",
      answer:
        "A disponibilidade depende de país, idioma, dispositivo e tipo de conta. Contas de trabalho ou escola seguem outra página de ajuda e regras do administrador. Desligar a Atividade do Gemini também retira os apps conectados no navegador e no iOS.",
    },
    {
      question: "Desligar a Atividade do Gemini apaga meus dados?",
      answer:
        "Desligar impede que as próximas conversas apareçam na Atividade e sejam usadas para treinamento, mas elas ficam por 72 horas. Apagar a atividade remove o histórico associado à conta, porém não elimina conversas que já foram revisadas por pessoas, mantidas por até três anos sem vínculo com a conta.",
    },
  ],
};
