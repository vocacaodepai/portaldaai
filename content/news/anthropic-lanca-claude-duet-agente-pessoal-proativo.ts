import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-lanca-claude-duet-agente-pessoal-proativo",
  title: "Anthropic lança prévia do Claude Duet, agente de IA que age sozinho",
  summary:
    "Agente baseado no Opus 5.5 manda resumo diário, monitora apps e pede aprovação antes de agir. Prévia só para Pro e Max nos EUA, em lista de espera, sem custo extra.",
  author: "Bruno Danello",
  sourceName: "VentureBeat",
  sourceUrl: "https://venturebeat.com/technology/anthropics-answer-to-muse-is-here-claude-duet-a-mobile-and-desktop-ai-agent-that-takes-actions-proactively",
  date: "2026-10-21",
  publishedAt: "2026-10-21T21:21:00-03:00",
  topic: "lancamentos",
  imageQuery: "Dario Amodei portrait",
  content: `
    <p>A Anthropic anunciou nesta quarta-feira (21) a prévia de pesquisa do Claude Duet, um agente pessoal de inteligência artificial pensado principalmente para profissionais e donos de pequenos negócios. Segundo a <a href="https://venturebeat.com/technology/anthropics-answer-to-muse-is-here-claude-duet-a-mobile-and-desktop-ai-agent-that-takes-actions-proactively" target="_blank" rel="noopener noreferrer nofollow">VentureBeat</a>, o produto é a resposta da empresa ao Muse, da Meta, e ao Dots, da OpenAI, e chega como aplicativo separado para iOS e Android, além de funcionar dentro do Claude na web.</p>

    <h2>O que é o Claude Duet</h2>

    <p>A diferença central em relação a um chatbot comum é que o Duet não espera a pergunta. Segundo a VentureBeat, ele monitora os aplicativos conectados e age em segundo plano: todo dia envia um resumo curto com os itens mais importantes e, depois disso, volta a verificar as contas a cada poucas horas, avisando você apenas quando aparece algo que exige atenção. O usuário escolhe quais assuntos quer acompanhar e com que frequência quer receber atualizações. Não se trata de supervisão em tempo real, e sim de checagens periódicas.</p>

    <p>O agente é construído sobre o modelo Opus 5.5 e roda em uma máquina virtual própria, com navegador, em um ambiente remoto. Na prática, isso significa que ele continua trabalhando mesmo com o notebook fechado ou o celular desligado. As tarefas podem ser passadas por texto ou por voz, em uma conversa contínua que aproveita a memória, as habilidades e as conexões que você já configurou na sua conta do Claude.</p>

    <p>Entre os exemplos citados pela empresa estão agendar reuniões, montar painéis de controle, elaborar projeções financeiras, cobrar faturas em ferramentas como QuickBooks e Stripe, contatar clientes pelo HubSpot, tratar contratos pelo Docusign, acompanhar a folha de pagamento no Gusto, cuidar de campanhas no Canva e configurar uma loja na Shopify. O Duet também tem acesso a mais de 6 mil conectores e plugins do Claude Marketplace. Compras podem ser feitas pela carteira Link, da Stripe, e pelo Shop Pay, da Shopify, com cartão virtual que protege o número real. A integração com o 1Password está prevista, mas ainda não existe.</p>

    <h2>Quem pode usar e quanto custa</h2>

    <p>A prévia é restrita. Por enquanto, apenas assinantes dos planos Pro e Max, e somente nos Estados Unidos, podem entrar em uma lista de espera. Os planos Team e Enterprise ficaram de fora, não há API do Duet e a Anthropic não divulgou cronograma de expansão para empresas nem para outros países. Ou seja, quem está no Brasil ainda não consegue testar.</p>

    <p>Sobre preço, não existe cobrança separada anunciada durante a prévia. O Duet está incluído nas assinaturas, que custam US$ 20 por mês (ou US$ 200 por ano) no Pro e a partir de US$ 100 por mês no Max, e consome a mesma cota de uso da conta. As verificações automáticas gastam parte dessa cota, e tarefas pesadas, como montar modelos financeiros, gastam mais. A Anthropic não informou estimativa de custo por tarefa nem ganhos de produtividade.</p>

    <h2>Aprovação humana e salvaguardas</h2>

    <p>O ponto mais sensível de qualquer agente que age sozinho é o que ele pode fazer sem perguntar. De acordo com a reportagem, o Duet pode analisar dados e preparar rascunhos por conta própria, mas, antes de enviar mensagens, pagar, assinar contratos ou excluir algo, apresenta a ação e pede aprovação. Operações com valores mobiliários e transferências entre contas financeiras são proibidas, mesmo que o usuário autorize. Qualquer conexão de aplicativo pode ser revogada.</p>

    <p>A empresa também descreve uma camada de proteção: um classificador de informações sensíveis que bloqueia o compartilhamento de números de cartão e documentos oficiais, isolamento de credenciais para que senhas e tokens fiquem fora do alcance direto do modelo, um classificador que avalia as ações antes de aprová-las e defesas contra injeção de prompt. Dados como saúde e finanças pessoais só são divulgados com instrução explícita. Houve testes internos e com uma empresa externa, além de um programa público de recompensa por falhas. Mesmo assim, a Anthropic não garante que nenhuma ação não autorizada ou vazamento vá ocorrer.</p>

    <p>A própria empresa admite limitações. O agente pode interpretar mal uma conversa e atribuir urgência errada a um problema, e ainda não mostra ao usuário o navegador que está operando. Tarefas pessoais, como reservar ingressos, também não são o ponto forte. Os depoimentos divulgados, como o de um dono de restaurante que diz não precisar mais abrir 100 abas, partem da própria Anthropic e não foram verificados de forma independente.</p>

    <h2>A disputa dos agentes pessoais</h2>

    <p>O lançamento acontece em um momento de corrida. A Meta lançou o Muse no mês passado, e a empresa disse que mais de 10 milhões de pessoas nos EUA e no Canadá já configuraram agentes, com foco no público geral e porta de entrada gratuita. Já o Dots, da OpenAI, foi apresentado na conferência anual de desenvolvedores como um conjunto de agentes sempre ativos, mas fica nos planos mais caros. O Duet se posiciona no meio do caminho, mirando quem trabalha: o foco é a rotina profissional e não a vida pessoal.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Fonte original</span>
      <p>Os detalhes de funcionamento, preços e salvaguardas acima foram relatados pela <a href="https://venturebeat.com/technology/anthropics-answer-to-muse-is-here-claude-duet-a-mobile-and-desktop-ai-agent-that-takes-actions-proactively" target="_blank" rel="noopener noreferrer nofollow">VentureBeat</a>, com base no anúncio da Anthropic.</p>
    </div>

    <h2>Por que isso importa para você</h2>

    <p>Se você trabalha por conta própria ou toca um negócio pequeno, o Duet mostra para onde vão os assistentes de IA: em vez de você abrir o chat e pedir, o agente acompanha e-mails, cobranças e agenda, e te chama quando precisa. Para quem já usa IA para economizar tempo, vale entender a diferença entre uma <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">automação, um chatbot e um agente de verdade</a> e saber <a href="/artigos/agente-de-ia-pessoal-gemini-spark-o-que-delegar-e-o-que-nao">o que delegar e o que não delegar a um agente pessoal</a>.</p>

    <p>Também fica o alerta de segurança. Quanto mais acesso você dá a um agente, maior o estrago possível se algo der errado, e a injeção de prompt é um risco real, como explicamos em <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection: o risco de uma IA que lê páginas e e-mails</a>. Comece com poucas conexões, exija aprovação para pagamentos e mensagens e revise o que o agente fez.</p>

    <p>Para quem pensa em empreender, a onda de agentes abre espaço para quem sabe configurar e vender esse tipo de serviço, tema do guia sobre <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">como ganhar dinheiro criando e vendendo agentes de IA personalizados</a>. E, se a ideia é entender como a concorrência se comporta, a nossa cobertura do <a href="/noticias/meta-lanca-muse-for-small-business-pequenas-empresas">Muse for Small Business</a> e do <a href="/noticias/amazon-bloqueia-agente-ia-muse-meta-compras">bloqueio do Muse pela Amazon</a> mostra os limites que esses agentes enfrentam no mundo real. Como o acesso ainda é restrito aos Estados Unidos, o mais prudente por ora é acompanhar, comparar e esperar a expansão antes de contar com ele no seu trabalho.</p>
  `,
};
