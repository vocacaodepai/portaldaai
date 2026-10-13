import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "n8n-para-iniciantes-como-vender-automacoes-com-ia",
  title: "n8n para iniciantes: como vender automações com IA",
  seoTitle: "n8n para iniciantes: automações com IA para vender",
  excerpt:
    "n8n para iniciantes: veja o que a ferramenta faz, quanto custa, como montar a primeira automação com IA e como cobrar por esse serviço de pequenos negócios.",
  metaDescription:
    "n8n para iniciantes: entenda planos, nuvem ou instalação própria, monte um fluxo simples com IA e saiba como cobrar setup e manutenção de clientes locais.",
  category: "monetizacao",
  articleSubcategory: "automacao-e-agentes",
  date: "2026-10-13",
  readTime: 7,
  imageQuery: "workflow diagram nodes laptop screen office",
  seed: 274,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O n8n é uma plataforma de automação visual que liga aplicativos e IA em fluxos, com versão gratuita para instalar por conta própria e planos na nuvem pagos em euros.",
    "Quem vende automação ganha por resolver uma tarefa repetida de um negócio específico, não por conhecer a ferramenta: o serviço é o fluxo funcionando e a manutenção.",
    "Antes de cobrar de clientes, confira a licença e os custos do n8n, proteja os dados do cliente e combine por escrito o que está incluído na manutenção.",
  ],
  content: `
    <p>O n8n é uma plataforma de automação em que você monta fluxos arrastando blocos, conectando aplicativos como planilhas, e-mail, WhatsApp e assistentes de IA, para que tarefas repetidas rodem sozinhas. Para quem quer ganhar dinheiro com isso, o n8n para iniciantes serve como ferramenta de trabalho: você aprende a montar fluxos simples e vende o resultado a pequenos negócios que perdem horas com tarefas manuais.</p>

    <p>Este guia mostra o que o n8n faz, quanto custa nas versões de nuvem e na instalação própria, como construir uma primeira automação com IA, como transformar isso em serviço, quanto cobrar de forma realista e quais cuidados evitam dor de cabeça. Não há promessa de renda: o valor depende de clientes, tempo e qualidade.</p>

    <h2>O que é o n8n e quando ele faz sentido?</h2>

    <p>Pense em um fluxo como uma receita: quando algo acontece (um formulário é preenchido), a plataforma executa passos (salvar na planilha, pedir à IA um resumo, enviar uma mensagem). Cada passo é um bloco, chamado de nó. Quem já conhece o <a href="/artigos/make-ou-zapier-qual-automacao-com-ia-vale-mais-a-pena">Make e o Zapier</a> vai reconhecer a lógica; o n8n costuma atrair quem quer mais controle e a opção de rodar no próprio servidor.</p>

    <p>Ele faz sentido quando a tarefa tem várias etapas, usa dados de mais de um aplicativo e se repete todo dia. Para uma regra única e simples, uma ferramenta mais enxuta pode bastar. Se você ainda mistura os conceitos, o texto sobre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente, chatbot e automação</a> explica quando cada um é a escolha certa. Um fluxo de automação segue passos fixos; um agente decide o que fazer, e o n8n permite misturar os dois com cuidado.</p>

    <h2>Quanto custa: nuvem, plano gratuito e instalação própria</h2>

    <p>Segundo a <a href="https://n8n.io/pricing/" target="_blank" rel="noopener noreferrer">página de preços do n8n</a>, verificada em 13/10/2026, os planos de nuvem são cobrados em euros e por execução completa de fluxo, não por passo. O Starter aparece a €20 por mês (cobrança anual), com 2.500 execuções mensais; o Pro, a €50 por mês, com 10.000 execuções; o Business e o Enterprise são para empresas maiores. A mesma página indica uma versão Community gratuita, que se instala por conta própria, e um teste grátis na nuvem. A página tem algumas inconsistências de números, então confirme os valores antes de contratar.</p>

    <p>A <a href="https://docs.n8n.io/hosting/community-edition-features/" target="_blank" rel="noopener noreferrer">documentação sobre as edições</a> descreve a Community como a versão gratuita, que roda sem chave de licença, e a Community registrada, também gratuita, que libera recursos extras mediante cadastro de e-mail. O custo real de instalar por conta própria é o do servidor e do seu tempo de manutenção. Se você pretende hospedar fluxos para clientes, leia os termos de licença do n8n antes, porque as regras de uso comercial variam entre as edições.</p>

    <table>
      <thead>
        <tr><th>Opção</th><th>Custo visível</th><th>Quando escolher</th></tr>
      </thead>
      <tbody>
        <tr><td>Teste na nuvem</td><td>Gratuito por tempo limitado</td><td>Para aprender sem instalar nada</td></tr>
        <tr><td>Nuvem Starter ou Pro</td><td>Em euros, por mês</td><td>Para fluxos que precisam ficar no ar sem você cuidar do servidor</td></tr>
        <tr><td>Community em servidor próprio</td><td>Gratuita, mais o servidor</td><td>Para quem tem noção técnica e quer controle</td></tr>
      </tbody>
    </table>

    <h2>Sua primeira automação com IA, passo a passo</h2>

    <p>Um exemplo útil para qualquer negócio local: quando um cliente preenche um formulário de pedido de orçamento, o fluxo guarda os dados em uma planilha, pede a um modelo de IA um resumo do pedido com os itens e a urgência, e envia ao dono uma mensagem pronta. Isso economiza o tempo de ler, copiar e organizar.</p>

    <ol>
      <li><strong>Gatilho:</strong> escolha o nó que recebe o formulário (um webhook ou o aplicativo de formulários que o cliente usa).</li>
      <li><strong>Planilha:</strong> adicione uma linha com nome, telefone e pedido.</li>
      <li><strong>IA:</strong> conecte um nó de modelo de linguagem com sua chave de API e envie o texto do pedido com a instrução abaixo.</li>
      <li><strong>Aviso:</strong> envie o resumo por e-mail ou mensagem ao responsável.</li>
      <li><strong>Teste:</strong> rode com 5 pedidos reais de exemplo e corrija o que falhar antes de ligar o fluxo.</li>
    </ol>

    <pre><code>Você recebe o pedido de orçamento de um cliente. Resuma em no máximo 3 linhas: o que ele quer, a quantidade e o prazo. Classifique a urgência como baixa, média ou alta. Se faltar informação importante, liste o que perguntar. Não invente dados que não estejam no texto.

PEDIDO: {{texto do formulário}}</code></pre>

    <p>Quem atende muita gente no WhatsApp pode partir de ideias do guia de <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">atendimento no WhatsApp com IA</a>. Já para o dono de orçamentos, o texto sobre <a href="/artigos/ia-para-orcamentos-e-cotacoes-responder-clientes-rapido">orçamentos e cotações com IA</a> mostra a parte da resposta ao cliente.</p>

    <h2>Que automações pequenos negócios compram</h2>

    <p>Os clientes mais fáceis são os que já sofrem com uma tarefa repetida e conseguem dizer quanto tempo perdem nela. Lojas, clínicas, escritórios contábeis, oficinas e MEIs aparecem muito. O guia <a href="/artigos/ia-para-mei-tarefas-que-voce-pode-automatizar">tarefas do MEI que dá para automatizar</a> lista ideias, e o de <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">automação para economizar horas</a> ajuda a priorizar.</p>

    <ul class="checklist">
      <li>Receber pedidos de orçamento e organizar em planilha.</li>
      <li>Enviar lembrete de agendamento e pedir confirmação.</li>
      <li>Resumir e-mails ou mensagens recebidas e avisar o responsável.</li>
      <li>Registrar avaliações de clientes e alertar sobre as negativas.</li>
      <li>Gerar relatório semanal de vendas a partir de uma planilha.</li>
    </ul>

    <p>Comece por uma automação só, de resultado visível. Quem tenta vender "automação de tudo" assusta o dono do negócio e se perde em escopo.</p>

    <h2>Como transformar isso em serviço e quanto cobrar</h2>

    <p>O produto é o fluxo funcionando e alguém responsável por ele. Uma estrutura comum é cobrar um valor de implantação, pelo trabalho de montar e testar, e uma mensalidade pela manutenção. Como exemplo ilustrativo, e não como promessa: uma automação simples de orçamento poderia ter implantação de R$ 600 a R$ 1.200 e mensalidade de R$ 100 a R$ 250, incluindo ajustes pequenos. Esses números dependem da sua região, da complexidade e do quanto o cliente economiza.</p>

    <p>Para definir o preço, calcule o tempo que o cliente perde: se uma pessoa gasta 5 horas por semana copiando pedidos e a hora dela custa R$ 25, são cerca de R$ 500 por mês. O guia de <a href="/artigos/como-precificar-servicos-usando-ia-no-trabalho">precificação de serviços com IA</a> detalha esse raciocínio, e o de <a href="/artigos/propostas-comerciais-com-ia-como-fechar-mais-contratos">propostas comerciais com IA</a> ajuda a apresentar o valor. Para ampliar a oferta, veja <a href="/artigos/como-vender-pacotes-de-automacao-de-ia-para-negocios-locais">pacotes de automação para negócios locais</a> e <a href="/artigos/como-ganhar-dinheiro-vendendo-automacoes-prontas-com-ia">automações prontas</a>.</p>

    <h2>Cuidados: dados, chaves de API e limites</h2>

    <p>Automação mexe com dados de clientes, então o cuidado é parte do serviço. Guarde chaves de API em campos de credenciais da plataforma, nunca dentro do texto do fluxo. Peça ao cliente acesso mínimo às contas dele. Evite mandar dados sensíveis, como documentos ou informações de saúde, a modelos de IA sem entender onde eles são processados; o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade em IA</a> ajuda nessa avaliação.</p>

    <p>Outro risco são os fluxos que leem conteúdo externo, como e-mails de desconhecidos, porque um texto malicioso pode tentar dar ordens ao modelo. Isso tem nome e está explicado em <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection</a>. Mantenha uma pessoa aprovando ações sensíveis, como enviar dinheiro ou apagar dados. Por fim, acompanhe o consumo: nos planos de nuvem, passar do limite de execuções pode gerar custo extra ou parar fluxos, conforme o plano.</p>

    <p>Um detalhe que diferencia quem cobra bem de quem trabalha de graça é o relatório mensal. Mande ao cliente, em poucas linhas, quantas vezes o fluxo rodou, quantas tarefas foram feitas sem ninguém digitar e quanto tempo isso representa. Esse número, simples e honesto, justifica a mensalidade e facilita a renovação. Se o fluxo falhar, avise antes que o cliente perceba e explique o que foi corrigido.</p>

    <h2>Erros comuns de quem começa</h2>

    <ul>
      <li><strong>Vender antes de testar:</strong> rode o fluxo com dados reais por alguns dias antes de entregar.</li>
      <li><strong>Não documentar:</strong> deixe um passo a passo curto para o cliente e para você mesmo.</li>
      <li><strong>Prometer demais:</strong> a IA erra, e o fluxo precisa de revisão humana nos pontos críticos.</li>
      <li><strong>Esquecer de combinar a manutenção:</strong> sem contrato claro, o cliente espera suporte infinito.</li>
      <li><strong>Pagar a ferramenta com a conta errada:</strong> deixe claro quem paga o servidor, a nuvem e a API de IA.</li>
    </ul>

    <p>Se quiser ir além dos fluxos fixos, o <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">protocolo MCP</a> mostra como agentes se conectam a ferramentas, e a consultoria é um caminho natural, descrito em <a href="/artigos/como-vender-consultoria-de-ia-para-pequenas-empresas">vender consultoria de IA para pequenas empresas</a>. O próximo passo é prático: monte o fluxo de orçamento para você mesmo, teste com 5 pedidos e, só então, ofereça a um primeiro cliente conhecido.</p>
  `,
  faq: [
    {
      question: "O n8n é gratuito?",
      answer:
        "Existe uma versão Community gratuita para instalar por conta própria, segundo a documentação. Os planos de nuvem são pagos, cobrados em euros, e há teste grátis. Instalar sozinho também tem custo de servidor e de manutenção, então some tudo antes de decidir.",
    },
    {
      question: "Preciso saber programar para usar o n8n?",
      answer:
        "Para fluxos simples, não: você conecta blocos visuais. Conhecer um pouco de lógica ajuda, e alguns casos pedem pequenos trechos de código ou chamadas de API. Comece por automações curtas e vá aumentando a complexidade aos poucos.",
    },
    {
      question: "O n8n é melhor que o Zapier ou o Make?",
      answer:
        "Depende do caso. O n8n costuma atrair quem quer mais controle e a opção de instalar no próprio servidor; as outras plataformas podem ser mais simples para começar. Teste a tarefa do seu cliente nas opções antes de escolher.",
    },
    {
      question: "Quanto cobrar por uma automação?",
      answer:
        "Não existe tabela única. Uma estrutura comum é cobrar implantação mais mensalidade de manutenção, com o valor ligado ao tempo que o cliente economiza. Calcule as horas perdidas por mês e proponha um preço menor que esse custo.",
    },
    {
      question: "Posso usar IA dentro do n8n?",
      answer:
        "Sim, é possível conectar modelos de linguagem por meio de chaves de API e usar a resposta nos próximos passos do fluxo. Lembre que a IA pode errar, que a chamada tem custo próprio e que dados sensíveis exigem cuidado.",
    },
  ],
};
