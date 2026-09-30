import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-chatgpt-plugins-extensoes-app-devday",
  title: "OpenAI transforma plugins do ChatGPT em apps completos na DevDay 2026",
  summary:
    "OpenAI lançou extensões de plugin com painéis interativos e barra lateral própria no ChatGPT, além de automações via MCP Events, mirando o modelo de app store.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/09/29/openai-expands-chatgpts-plugins-with-app-like-interfaces-and-automations/",
  date: "2026-09-29",
  content: `
    <p>A OpenAI anunciou nesta terça-feira (29), durante a DevDay 2026 em San Francisco, uma expansão profunda dos plugins do ChatGPT, que agora podem virar experiências parecidas com aplicativos completos dentro do próprio chat. Segundo reportagem da <a href="https://techcrunch.com/2026/09/29/openai-expands-chatgpts-plugins-with-app-like-interfaces-and-automations/" rel="noopener noreferrer nofollow">TechCrunch</a>, a novidade se chama "extensões de plugin" e dá a cada aplicativo conectado um espaço fixo na barra lateral do ChatGPT, com painéis interativos onde o usuário mexe nas ferramentas do plugin sem sair da conversa.</p>
    <p>A empresa também lançou um novo Plugin Creator para desenvolvedores construírem essas extensões, um fluxo de submissão redesenhado ao diretório de plugins com feedback mais claro sobre o que precisa ser corrigido, e passou a dar suporte à especificação MCP Events, que deixa plugins disparar automações a partir de eventos em aplicativos conectados. Os visualizadores de arquivo dentro dos painéis também foram ampliados para reconhecer os formatos usados por cada produto integrado, e o usuário passa a aprovar o acesso de cada plugin de forma individual, em vez de dar permissão geral de uma vez.</p>

    <h2>Parte de um plano maior contra o modelo de app store</h2>
    <p>O anúncio dos plugins não veio sozinho. Na mesma DevDay, a OpenAI revelou o <a href="/noticias/openai-lanca-dots-agentes-sempre-ativos-gpt-6-1-sol">agente sempre ativo dots e o modelo GPT-6.1 Sol</a>, além do <a href="/noticias/openai-chatgpt-space-pages-office">ChatGPT Space, sua versão do Google Docs dentro do chat</a>. Juntas, as peças mostram uma estratégia clara: transformar o ChatGPT, que a empresa diz ter 1,2 bilhão de usuários semanais, no lugar onde softwares são descobertos, abertos e usados por pessoas e por agentes de IA, sem precisar instalar nada à parte.</p>
    <p>A OpenAI também lançou o recurso "Entrar com ChatGPT", que permite ao usuário levar sua identidade e sua cota de uso de IA para dentro de aplicativos de terceiros, com 16 parceiros de lançamento como Devin (da Cognition), Notion e Vercel. Além disso, criou um novo marketplace corporativo de aplicativos com mais de 30 parceiros, entre eles Adobe, Figma, Salesforce, HubSpot e ServiceNow, em que clientes elegíveis podem usar parte do orçamento já contratado com a OpenAI para pagar por esses aplicativos parceiros. É uma tentativa direta de recriar, dentro do ChatGPT, o tipo de camada de descoberta e distribuição que hoje pertence às lojas de aplicativos da Apple e do Google, embora a empresa não tenha detalhado ainda um sistema de cobrança ou de divisão de receita comparável ao das lojas tradicionais.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa ChatGPT no trabalho para organizar tarefas, atender clientes ou gerenciar projetos, essa mudança reduz a necessidade de alternar entre vários aplicativos abertos ao mesmo tempo. Um plugin de agenda, de planilhas ou de design passa a funcionar dentro da própria conversa, com painel próprio, o que pode economizar tempo em tarefas que hoje exigem copiar e colar informação entre ferramentas diferentes. Isso se soma ao que já vinha acontecendo com o <a href="/noticias/chatgpt-voice-ganha-gpt-6-plugins-chatgpt-work">modo de voz do ChatGPT, que já ganhou plugins de e-mail e calendário</a> antes desta DevDay.</p>
    <p>Para quem desenvolve produtos ou vende serviços de automação com IA, o recado é direto: a OpenAI está construindo uma vitrine própria dentro do ChatGPT, e aparecer bem ranqueado nessa vitrine pode virar um canal de distribuição relevante, parecido com otimizar um app para as lojas da Apple e do Google hoje. Quem já vende <a href="/artigos/como-ganhar-dinheiro-vendendo-automacoes-prontas-com-ia">automações prontas com IA</a> ou presta <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">consultoria em agentes de IA personalizados</a> deveria acompanhar de perto como funciona o novo processo de submissão de plugins, já que ele determina quem aparece nas recomendações dentro das conversas.</p>

    <h2>O que muda para o desenvolvedor</h2>
    <p>Antes, um plugin do ChatGPT era essencialmente uma conexão que permitia ao modelo buscar dados ou executar ações em um serviço externo, sem interface própria visível para o usuário. Agora, com as extensões, o desenvolvedor ganha um espaço fixo na barra lateral e pode desenhar uma experiência visual dedicada, incluindo painéis interativos e visualizadores de arquivo personalizados. O processo de revisão também mudou: passa a funcionar de forma mais parecida com a revisão de apps da Apple, em que o desenvolvedor acompanha o status da submissão, vê exatamente o que precisa corrigir, pode pedir revisão humana e atualizar as ferramentas do plugin sem reiniciar o processo de submissão inteiro do zero.</p>
    <p>O suporte à especificação MCP Events também é um passo técnico relevante, porque conecta o ecossistema de plugins do ChatGPT ao protocolo aberto MCP (Model Context Protocol), usado por outras empresas de IA para padronizar como agentes se conectam a ferramentas externas. Na prática, isso significa que um plugin pode reagir sozinho a um evento, como a chegada de um novo lead em um CRM ou uma tarefa concluída em outro sistema, e disparar uma automação sem que o usuário precise pedir isso manualmente a cada vez.</p>

    <h2>O que observar daqui para frente</h2>
    <p>A OpenAI ainda não anunciou nenhum modelo de cobrança ou divisão de receita para esse novo ecossistema de plugins e do marketplace corporativo, o que deixa em aberto como desenvolvedores vão monetizar as extensões no longo prazo. Também vale acompanhar se as permissões individuais por plugin, que a empresa promete deixar o usuário aprovar caso a caso, seguram na prática, especialmente depois da sequência recente de <a href="/noticias/openai-divulga-seis-incidentes-agentes-desalinhados">incidentes de agentes com comportamento desalinhado</a> que a própria OpenAI relatou neste mês.</p>
    <p>Para negócios brasileiros que já usam o ChatGPT como ferramenta central de trabalho, o movimento reforça a importância de manter um checklist básico de segurança antes de conectar qualquer plugin novo a sistemas internos, sobretudo os que lidam com dados financeiros ou de clientes, seguindo o mesmo cuidado recomendado ao <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">escolher qualquer ferramenta de IA com segurança</a>. Como o recurso ainda está em fase inicial e as permissões concedidas a cada plugin variam, revisar periodicamente quais extensões estão ativas e o que elas podem acessar deve virar rotina, não exceção.</p>
    <div class="callout-box">
      <span class="callout-label">Resumo rápido</span>
      Plugins do ChatGPT ganharam barra lateral própria, painéis interativos e suporte a automações via MCP Events. A OpenAI também lançou marketplace corporativo e login com ChatGPT em apps de terceiros, mirando o modelo das lojas de aplicativos.
    </div>
  `,
  faq: [
    {
      question: "O que muda na prática para quem usa ChatGPT?",
      answer:
        "Plugins conectados, como agenda, e-mail ou ferramentas de design, passam a ter um espaço fixo na barra lateral do ChatGPT com painel próprio, permitindo trabalhar com essas ferramentas sem sair da conversa.",
    },
    {
      question: "A OpenAI vai cobrar por esse novo sistema de plugins?",
      answer:
        "A empresa não anunciou nenhum modelo de cobrança ou divisão de receita para desenvolvedores até o momento, apenas as peças de descoberta, distribuição e identidade do novo ecossistema.",
    },
    {
      question: "Isso é o mesmo recurso que o dots ou o ChatGPT Space?",
      answer:
        "Não. O dots é o agente autônomo sempre ativo e o ChatGPT Space é a área de documentos colaborativos; as extensões de plugin são a camada que permite a outros aplicativos ganhar interface própria dentro do chat, e os três recursos foram lançados juntos na mesma DevDay.",
    },
  ],
};
