import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "agentes-ia-por-mensagem-de-texto-guia-techcrunch-precos",
  title: "TechCrunch lista mais de 20 agentes de IA que você controla por mensagem",
  summary:
    "Guia da TechCrunch reúne agentes que funcionam por iMessage, SMS, WhatsApp e Telegram, com planos grátis e pagos de US$ 1 por dia a US$ 30 por mês.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/24/all-the-ai-agents-that-can-live-in-your-text-messages/",
  date: "2026-10-24",
  publishedAt: "2026-10-24T21:35:00-03:00",
  topic: "lancamentos",
  imageQuery: "smartphone mensagens assistente de IA",
  content: `
    <p>Em vez de baixar mais um aplicativo, uma nova leva de assistentes de IA aparece onde você já conversa todos os dias: no iMessage, no SMS, no WhatsApp ou no Telegram. Segundo o <a href="https://techcrunch.com/2026/10/24/all-the-ai-agents-that-can-live-in-your-text-messages/" rel="noopener noreferrer nofollow">guia publicado pela TechCrunch</a> neste sábado (24), assinado por Lauren Forristal, esses agentes lembram do contexto, se conectam a e-mail e agenda e executam tarefas como marcar compromissos, pesquisar viagens, fazer reservas, comprar itens e mandar lembretes dias depois. A reportagem separa as opções em assistentes gerais, agentes para família, viagem, trabalho, criadores de conteúdo e negócios.</p>
    <p>O texto destaca o Instinct como o mais comentado do grupo. A startup levantou US$ 350 milhões com avaliação de US$ 2,5 bilhões em agosto e, em setembro, mais US$ 1 bilhão com avaliação de US$ 10 bilhões, <a href="/noticias/instinct-capta-1-bilhao-serie-c-10-bilhoes">como o Portal da AI já mostrou</a>. Ele aceita texto ou voz, conecta e-mail, calendário e Google Workspace, e consegue planejar viagens, comprar mercado, reservar ingressos e cancelar assinaturas. Segue em beta fechado, e a própria matéria menciona preocupações de privacidade e segurança.</p>

    <h2>Quanto custam e onde funcionam</h2>
    <p>A tabela de preços da reportagem mostra que o mercado já tem de tudo, de planos gratuitos a assinaturas de dezenas de dólares. Os valores citados, todos em dólares e sem conversão para reais, são:</p>
    <ul>
      <li><strong>Ask Proxy:</strong> funciona por SMS e custa US$ 1 por dia na versão pessoal. A versão de trabalho sai por US$ 15 por funcionário ao mês para empresas grandes e US$ 23 para equipes com menos de 49 pessoas.</li>
      <li><strong>Folk:</strong> atua no iMessage, WhatsApp e Telegram, roda em um computador privado na nuvem e executa código. É gratuito, com plano Pro de US$ 8,33 por mês para tarefas de fundo ilimitadas.</li>
      <li><strong>Comma:</strong> gratuito para começar e de código aberto, acessível por Signal, Telegram e WeChat, com resumos diários e de chamadas.</li>
      <li><strong>Martin:</strong> opera por SMS, telefone, WhatsApp, e-mail, Slack e app para iOS, com planos a partir de US$ 21 por mês.</li>
      <li><strong>Tomo:</strong> funciona no iMessage e entra em conversas em grupo, com plano básico a partir de US$ 19,99 por mês.</li>
      <li><strong>Maverick:</strong> gratuito durante o beta no iMessage, pede permissão antes de agir e cobra cerca de US$ 30 por mês no Pro, com 500 tarefas mensais e 20 apps conectados.</li>
      <li><strong>Pally:</strong> iMessage, RCS e Telegram, conecta WhatsApp, Gmail, agenda e Google Drive, e tem plano gratuito.</li>
      <li><strong>Wajo (agente Fo):</strong> lançado ao público em setembro, tem e-mail, número de telefone e cartão de pagamento próprios, liga para empresas e faz compras. Há plano gratuito e um Pro pago.</li>
    </ul>
    <p>Entre os agentes de família, o Ohai começa em US$ 9,99 por mês, o Ollie cobra de US$ 25 a US$ 100 por mês conforme o volume de mensagens e foi apontado como um dos primeiros assistentes do tipo com certificação SOC 2, e o Fambot segue gratuito no beta. Para criadores, o Stanley liga ao Instagram, transforma notas de voz em roteiros e legendas e agenda posts. Já o Szn, voltado a negócios, diz ter atendido mais de 7.500 empresas em 16 países.</p>

    <h2>O que mudou nos últimos meses</h2>
    <p>A reportagem lembra marcos que ajudam a entender a velocidade desse mercado. O Poke, lançado em março, foi aprovado em junho pela Apple como o primeiro agente de IA no Apple Messages for Business, e sua empresa foi comprada pela Cognition em julho em um negócio avaliado na casa de baixos nove dígitos. O Town, que entrega um assistente chamado Townie para tarefas recorrentes em e-mail, agenda, documentos e Slack, captou US$ 55 milhões em uma Série A em junho, e depois <a href="/noticias/town-startup-assistentes-ia-funcionarios-unicornio-108-milhoes">levantou US$ 108 milhões e virou unicórnio</a>. O Tab saiu do modo furtivo no início de outubro com avaliação de US$ 300 milhões, e o Underdog abriu um beta por convite de um assistente que roda o modelo no próprio dispositivo, com a promessa de nunca exibir anúncios.</p>
    <p>Também há movimentos de gigantes na mesma direção. A Anthropic apresentou o <a href="/noticias/anthropic-lanca-claude-duet-agente-pessoal-proativo">Claude Duet, um agente pessoal proativo</a>, e a Manus lançou o <a href="/noticias/manus-lanca-cue-agente-pessoal-telefone-carteira">Cue, com telefone e carteira próprios</a>. O ponto em comum é o canal: a conversa por mensagem virou a interface preferida para entregar agentes ao consumidor comum, porque não exige instalar nada e funciona no aparelho que a pessoa já usa o dia inteiro.</p>

    <h2>Riscos que o próprio guia aponta</h2>
    <p>Quando um agente recebe acesso a e-mail, agenda, arquivos e até pagamentos, o tamanho do estrago em caso de erro ou vazamento cresce junto. A TechCrunch registra preocupações de privacidade e segurança, e a diferença entre produtos fica justamente nos controles: o Maverick, por exemplo, pergunta antes de agir, e o Underdog tenta reduzir a exposição de dados rodando localmente. Vários itens da lista ainda estão em beta, em convite ou sem preço divulgado, o que significa que condições e funções podem mudar sem aviso. A matéria também não informa disponibilidade em português nem cobrança em reais, então quem está no Brasil deve testar cada serviço antes de depender dele.</p>
    <p>Outro ponto prático: a maior parte dos agentes depende de iMessage, que só existe em aparelhos da Apple. Quem usa Android ou prefere WhatsApp tem menos opções, embora Folk, Pally, Rene e Tab já listem WhatsApp ou Telegram entre os canais.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você quer testar um assistente de IA sem aprender uma ferramenta nova, essa lista mostra que já existem opções gratuitas ou baratas que vivem dentro do aplicativo de mensagens. Comece por um plano grátis, conecte só o que for necessário (por exemplo, a agenda, e não o e-mail inteiro) e veja se a tarefa realmente sai mais rápida do que fazer sozinho. O passo a passo está no <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">guia de como configurar seu primeiro assistente de IA pessoal</a>.</p>
    <p>Para quem empreende ou trabalha por conta própria, agentes que respondem por mensagem, ligam para fornecedores e agendam compromissos podem tirar horas da semana. Vale entender antes <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">a diferença entre agente, chatbot e automação</a> e pensar em como <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">criar e vender agentes de IA personalizados</a>, já que a demanda por esse tipo de serviço está claramente em alta. Se o seu negócio já atende clientes pelo app de mensagens, o guia sobre <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">como automatizar o atendimento no WhatsApp com IA</a> é o ponto de partida natural.</p>
    <p>E, antes de liberar qualquer pagamento ou cancelamento automático, defina limites de gasto e peça confirmação para ações sensíveis. Preços, planos e disponibilidade citados acima vêm da reportagem de 24 de outubro e podem mudar, então confira no site de cada serviço antes de assinar.</p>

    <div class="callout-box"><span class="callout-label">Fonte original</span>Reportagem de Lauren Forristal na TechCrunch, publicada em 24 de outubro de 2026.</div>
  `,
};
