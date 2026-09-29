import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-lanca-claude-marketplace-2000-plugins",
  title: "Anthropic lança Claude Marketplace com mais de 2 mil plugins",
  summary:
    "Nova loja reúne plugins e agentes prontos de parceiros como Google, Microsoft e Salesforce, e deixa qualquer desenvolvedor publicar produtos para o Claude.",
  author: "Bruno Danello",
  sourceName: "BleepingComputer",
  sourceUrl: "https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-turns-claude-into-an-ai-marketplace-with-2-000-plus-plugins-and-connectors/",
  date: "2026-09-27",
  content: `
    <p>A Anthropic lançou o Claude Marketplace, uma loja que reúne em um único lugar plugins, conectores, agentes e produtos prontos para uso com o Claude. Segundo reportagem do <a href="https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-turns-claude-into-an-ai-marketplace-with-2-000-plus-plugins-and-connectors/" target="_blank" rel="noopener noreferrer nofollow">BleepingComputer</a>, o marketplace já está no ar publicamente e reúne mais de 2 mil conectores e plugins logo na estreia.</p>

    <p>Entre os parceiros que já oferecem integrações estão Atlassian, Google, Microsoft, Notion e Salesforce, o que mostra que a Anthropic não fechou o espaço apenas para produtos próprios. A empresa também está permitindo que companhias vendam agentes prontos construídos sobre o Claude, com nomes como CrowdStrike, Cursor, Harvey, Legora, Lovable e Snowflake já disponíveis na loja, além de parceiros de consultoria e implementação como Accenture, Boston Consulting Group e Deloitte, voltados a empresas que querem ajuda para colocar o Claude em produção internamente.</p>

    <h2>Uma "loja de aplicativos" para IA</h2>
    <p>Segundo a Anthropic, qualquer desenvolvedor pode criar conectores e plugins usando o Model Context Protocol (MCP) e Agent Skills, tecnologias abertas que a própria empresa ajudou a popularizar no mercado. Empresas que vendem software com Claude embutido também podem se candidatar para aparecer na loja. A ideia declarada é facilitar que times encontrem produtos que já funcionam com o Claude, e dar a desenvolvedores e parceiros um canal direto para alcançar quem já usa a ferramenta no dia a dia.</p>
    <p>A comparação mais direta é com lojas de aplicativos como a Play Store, mas aplicada a ferramentas de IA. Não é a primeira tentativa do tipo: a própria OpenAI lançou uma loja de aplicativos para o ChatGPT que não emplacou como esperado, e a aposta da Anthropic é justamente não repetir esse erro, abrindo o marketplace para qualquer desenvolvedor publicar em vez de restringir a poucos parceiros selecionados.</p>

    <div class="callout-box callout-info">
      <span class="callout-label">O que já existia antes do marketplace</span>
      <p>O Claude já permitia conectar aplicativos usados no dia a dia através de integrações individuais, mas de forma mais limitada e sem um catálogo centralizado. O lançamento do marketplace consolida essas integrações num só lugar e amplia o alcance para agentes prontos de terceiros, não só conectores simples de dados.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>Se você já usa o Claude para trabalhar, empreender ou automatizar tarefas do seu negócio, o marketplace muda a forma como você encontra ferramentas prontas em vez de precisar configurar tudo do zero. Em vez de contratar um agente personalizado ou pedir a um desenvolvedor para integrar sistemas manualmente, agora é possível instalar plugins e conectores já testados por empresas como Notion e Salesforce direto na sua conta, o que reduz a barreira técnica para quem quer <a href="/artigos/como-criar-chatbot-de-atendimento-para-seu-site-sem-programar">automatizar atendimento sem programar</a> ou centralizar ferramentas de trabalho num só assistente.</p>
    <p>Para quem cria produtos ou presta serviço com IA, o marketplace também abre uma porta de distribuição nova: publicar um agente ou plugin ali pode significar alcançar diretamente a base de clientes do Claude, algo parecido com o que já discutimos em como <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">ganhar dinheiro criando e vendendo agentes de IA personalizados</a>. Vale ficar de olho em como a Anthropic vai cobrar por essas listagens e que tipo de curadoria vai aplicar, já que isso determina se o espaço vira mesmo uma vitrine confiável ou só mais um catálogo saturado de opções parecidas.</p>

    <h2>O risco de decidir rápido demais</h2>
    <p>Com mais de 2 mil opções disponíveis já no lançamento, a tendência é de que boa parte dos plugins tenha qualidade e suporte bem desiguais entre si, um problema comum em lojas de aplicativos recém-abertas. Antes de conectar qualquer plugin de terceiro à sua conta do Claude, especialmente um que tenha acesso a dados sensíveis como e-mail, planilhas financeiras ou sistemas de clientes, vale aplicar o mesmo cuidado que recomendamos no nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de como escolher ferramenta de IA com segurança</a>, verificando quem é o desenvolvedor por trás do plugin e que permissões ele está pedindo antes de aprovar o acesso.</p>
  `,
  faq: [
    {
      question: "O que é o Claude Marketplace?",
      answer: "É uma loja lançada pela Anthropic que reúne plugins, conectores, agentes prontos e serviços de parceiros para uso com o Claude, com mais de 2 mil opções disponíveis já no lançamento, incluindo integrações de Google, Microsoft, Notion e Salesforce.",
    },
    {
      question: "Qualquer desenvolvedor pode publicar um plugin no Claude Marketplace?",
      answer: "Sim. A Anthropic afirma que qualquer desenvolvedor pode criar conectores e plugins usando o Model Context Protocol (MCP) e Agent Skills, e empresas que vendem software com Claude embutido também podem se candidatar para aparecer na loja.",
    },
    {
      question: "O Claude Marketplace é parecido com a loja de apps que a OpenAI lançou para o ChatGPT?",
      answer: "A comparação é direta, mas a Anthropic diz querer evitar o mesmo problema enfrentado pela loja de aplicativos do ChatGPT, que não teve a adesão esperada, abrindo o marketplace de forma mais ampla para desenvolvedores publicarem seus próprios produtos.",
    },
  ],
};
