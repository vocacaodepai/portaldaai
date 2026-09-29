import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "golpe-voz-ia-banco-italiano-fideuram-95-milhoes",
  title: "Golpe com voz clonada por IA tira 95 milhões de euros de banco italiano",
  author: "Bruno Danello",
  summary:
    "Fraudadores usaram WhatsApp falso e voz clonada por IA de um advogado para convencer banco italiano a transferir 95 milhões de euros. 36 milhões seguem sem rastro.",
  sourceName: "Reuters",
  sourceUrl: "https://www.reuters.com/legal/government/ai-messaging-scam-costs-italys-top-bank-intesa-millions-sources-say-2026-09-25/",
  date: "2026-09-25",
  content: `
    <p>O Fideuram, braço de banco privado do Intesa Sanpaolo, maior banco da Itália, perdeu 95 milhões de euros (cerca de US$ 108 milhões) para uma fraude que combinou mensagem falsa de WhatsApp com voz clonada por inteligência artificial. A informação foi confirmada pela <a href="https://www.reuters.com/legal/government/ai-messaging-scam-costs-italys-top-bank-intesa-millions-sources-say-2026-09-25/" target="_blank" rel="noopener noreferrer nofollow">Reuters</a> por duas fontes ligadas ao caso, depois de o esquema ter sido revelado originalmente pelo jornal Corriere della Sera.</p>

    <p>O golpe começou em fevereiro, quando o então presidente do Fideuram, Paolo Molesini, recebeu uma mensagem de WhatsApp que parecia vir do próprio CEO do Intesa Sanpaolo, Carlo Messina, pedindo ajuda urgente com uma transação internacional. Em seguida veio uma ligação de alguém que se passava por um sócio sênior de um escritório de advocacia conhecido, confirmando a instrução, com os golpistas usando IA para reproduzir a voz real do advogado. Convencido de que o pedido era legítimo, Molesini autorizou o setor financeiro a fazer uma série de transferências para contas no exterior, principalmente na China e em Hong Kong.</p>

    <h2>Como o banco reagiu e quanto foi recuperado</h2>
    <p>O Fideuram percebeu as irregularidades nas transferências rapidamente e acionou bancos e autoridades em vários países. Com a cooperação entre China, Portugal e Itália, cerca de 53 milhões de euros foram recuperados. Os outros 36 milhões de euros seguem sem rastro, depois de passarem por uma rede de contas no exterior e serem convertidos em criptomoedas, o que dificulta bastante o rastreamento.</p>
    <p>Nenhum executivo do Fideuram está sob investigação pelo caso. Já um cidadão estrangeiro que vive fora da Europa foi colocado sob investigação pelo Ministério Público de Milão, suspeito de fraude informática. Molesini renunciou ao cargo de presidente em março, citando motivos pessoais, sem que o banco desse outra explicação na época.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Não é a primeira vez na Itália</span>
      <p>No ano anterior, golpistas já haviam usado IA para imitar a voz de um ministro do governo italiano e convenceram o empresário Massimo Moratti a transferir quase 1 milhão de euros para uma conta no exterior. O dinheiro foi recuperado depois. O padrão se repete: uma autoridade confiável, imitada por voz, pedindo urgência.</p>
    </div>

    <h2>Um golpe simples, sem hackear nada</h2>
    <p>O que chama atenção no caso do Fideuram é a simplicidade do ataque diante do tamanho do prejuízo. Não houve invasão de sistema, e-mail corporativo comprometido ou falha técnica explorada. Os criminosos usaram só três ingredientes: uma mensagem de texto verossímil, uma gravação de voz clonada e documentos falsificados por e-mail com os dados do pagamento. Em 2024, um caso parecido na Arup, empresa de engenharia de Hong Kong, resultou em 15 transferências de cerca de US$ 25,6 milhões depois de uma videochamada com colegas "deepfakados". O prejuízo do Fideuram é cerca de quatro vezes maior e veio de um kit de ferramentas ainda mais simples.</p>
    <p>Autoridades americanas já rastrearam mais de US$ 55 bilhões em perdas expostas por fraudes de comprometimento de e-mail corporativo (o chamado BEC) entre 2013 e 2023, mesmo antes da clonagem de voz por IA virar ferramenta acessível. A lição repetida por especialistas em segurança é sempre a mesma: pedido de pagamento urgente, mesmo vindo de uma voz que parece familiar, precisa ser confirmado por um canal separado e já conhecido, nunca pelo mesmo contato que fez o pedido.</p>

    <h2>Por que isso importa para você</h2>
    <p>Esse caso não é exclusividade de banco grande nem de fraude bilionária: a mesma técnica, com ferramentas de clonagem de voz cada vez mais baratas e acessíveis, já chega a pequenas empresas e famílias brasileiras, geralmente por ligação ou áudio de WhatsApp fingindo ser um filho, um chefe ou um contador pedindo transferência urgente. Se você lida com pagamentos no seu negócio, vale tratar qualquer pedido de transferência urgente por voz ou mensagem com o mesmo ceticismo que trataria um e-mail suspeito: confirme por uma ligação para o número que já está salvo na sua agenda, nunca pelo contato que enviou o pedido.</p>
    <p>Já escrevemos sobre como <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">identificar deepfakes e proteger sua reputação</a>, e o princípio vale igual para voz: hoje é possível clonar uma voz real com poucos segundos de áudio público, o que torna a verificação por segundo canal (ligação de volta, código combinado antecipadamente, confirmação presencial) essencial para qualquer negócio que movimenta dinheiro. Nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança para ferramentas de IA</a> também ajuda a pensar em que tipo de acesso e automação vale a pena liberar dentro da sua empresa.</p>

    <h2>O que muda na prática para quem usa IA para trabalhar</h2>
    <p>Para quem oferece serviço de automação ou atendimento a cliente com apoio de IA, o caso reforça um princípio simples: qualquer fluxo que autoriza pagamento, transferência ou liberação de dado sensível precisa de uma etapa de confirmação humana fora do canal automatizado, sem exceção, por mais legítima que a mensagem pareça. Também é um bom lembrete sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber</a> ao publicar áudios e vídeos seus (ou de executivos da sua empresa) em redes sociais e eventos públicos: é justamente esse tipo de material que alimenta a clonagem de voz usada em golpes como o do Fideuram. Também vale entender <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">a diferença entre agente de IA, chatbot e automação</a> antes de liberar qualquer fluxo automático que mexa com dinheiro no seu negócio.</p>
  `,
  faq: [
    {
      question: "Como os golpistas clonaram a voz do advogado no caso do Fideuram?",
      answer: "A reportagem não detalha a técnica exata, mas casos desse tipo costumam usar gravações públicas da pessoa real (entrevistas, vídeos, ligações anteriores) para treinar um modelo de clonagem de voz, hoje disponível em ferramentas comerciais que precisam de poucos segundos de áudio.",
    },
    {
      question: "O dinheiro roubado foi todo recuperado?",
      answer: "Não. Dos 95 milhões de euros desviados, cerca de 53 milhões foram recuperados com a cooperação entre autoridades da China, Portugal e Itália. Os outros 36 milhões seguem sem rastro, depois de passarem por contas no exterior e serem convertidos em criptomoedas.",
    },
    {
      question: "Como se proteger de golpes com voz clonada por IA?",
      answer: "A recomendação principal é nunca confirmar um pedido de transferência ou pagamento urgente pelo mesmo canal que o recebeu. Ligue de volta para um número já salvo e conhecido, combine um código de verificação com pessoas-chave do seu negócio e trate qualquer urgência incomum como sinal de alerta, mesmo quando a voz parece genuína.",
    },
  ],
};
