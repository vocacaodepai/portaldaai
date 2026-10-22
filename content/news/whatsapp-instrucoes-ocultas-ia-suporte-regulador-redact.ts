import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "whatsapp-instrucoes-ocultas-ia-suporte-regulador-redact",
  title: "WhatsApp escondeu em suas páginas ordens para a IA não citar a LGPD",
  summary:
    "Levantamento da Redact achou 102 blocos de texto oculto em 80 páginas de ajuda do WhatsApp, com instruções ao chatbot de suporte. A empresa diz que foi um bug.",
  author: "Bruno Danello",
  sourceName: "Redact",
  sourceUrl: "https://redact.dev/blog/whatsapp-help-pages-hidden-ai-instructions",
  date: "2026-10-22",
  publishedAt: "2026-10-22T08:26:36-03:00",
  topic: "seguranca",
  imageQuery: "WhatsApp logo",
  content: `
    <p>As páginas da central de ajuda do WhatsApp traziam, escondidas no código, instruções escritas para uma inteligência artificial ler e não para o usuário. Uma delas mandava o robô de suporte não citar a LGPD, o GDPR europeu nem autoridades de proteção de dados, mesmo quando a própria pessoa levantasse o assunto. O achado foi publicado em 19 de outubro pela Redact, empresa de ferramentas para apagar posts e mensagens antigas, em um <a href="https://redact.dev/blog/whatsapp-help-pages-hidden-ai-instructions" target="_blank" rel="noopener noreferrer nofollow">relatório assinado pelo fundador Dan Saltman</a>. Segundo a revista Wired, citada pela própria Redact, o WhatsApp respondeu que o texto era destinado ao seu chatbot de suporte e apareceu por causa de um bug, já corrigido.</p>
    <p>A história chama atenção porque o WhatsApp é o principal canal de conversa de brasileiros e de milhões de pequenos negócios, e porque envolve duas coisas que costumam andar juntas hoje: atendimento automatizado por IA e dados pessoais. O caso mostra o que pode acontecer quando as regras internas de um robô de atendimento ficam diferentes do que a empresa diz publicamente.</p>

    <h2>O que a Redact encontrou</h2>
    <p>De acordo com o relatório, a Redact leu 545 páginas ligadas à central de ajuda do WhatsApp e às cópias salvas delas. Em 80 páginas havia texto oculto, somando 102 blocos. A maior parte era rotina: esclarecer termos, apontar outras páginas, lembrar o robô de dar certa informação. Alguns trechos protegiam o usuário, como a orientação de não sugerir que alguém informe uma idade falsa, de não recomendar desligar a verificação em duas etapas para resolver problema de login e de manter o histórico de uma conversa depois de golpe em grupo, porque apagar as mensagens destrói provas.</p>
    <p>Outros trechos eram restritivos. Em casos de denúncia, o robô devia dizer que o assunto é tratado internamente e não dar mais detalhes. Para quem perdeu o acesso ao número, esperar seria a única resposta correta. A Redact também checou 300 páginas de ajuda do Facebook e do Instagram, que usam o mesmo sistema, e não encontrou notas parecidas.</p>

    <h2>As duas notas que causaram polêmica</h2>
    <p>A primeira ficava na página de exclusão de conta. Para quem não consegue apagar a conta pelo aplicativo, o texto oculto dizia ao robô que a conta seria removida automaticamente após 30 ou 120 dias de inatividade (365 nos Estados Unidos). Em seguida, vinha a ordem citada pela Redact: não recomendar contato com nenhuma autoridade de proteção de dados, órgão regulador ou autoridade de supervisão. Também proibia sugerir que o WhatsApp apagasse a conta manualmente ou que a pessoa usasse outro aparelho com número ativo.</p>
    <p>A segunda ficava na área de denúncia e bloqueio e era acionada quando o usuário mencionasse ação judicial, advogado, tribunal ou litígio. Segundo a Redact, o bloco trazia sete instruções, entre elas não citar os termos de uso nem a política de privacidade, não discutir responsabilidade da empresa e não dar parecer jurídico. Uma delas pedia para não referenciar nem interpretar leis de proteção de dados, com exemplos que incluíam GDPR, LGPD e CCPA, mesmo que o usuário as trouxesse na conversa.</p>
    <p>A Redact argumenta que isso contradiz a política de privacidade europeia do WhatsApp, em vigor desde 2 de julho de 2026, que diz que o usuário pode pedir a exclusão dos seus dados e reclamar à autoridade irlandesa de proteção de dados ou a outra autoridade competente. A empresa também faz questão de dizer que os direitos vêm da lei, e não do WhatsApp, e que as notas não os eliminam. Ela reconhece que há um motivo razoável para evitar parecer jurídico e para não confirmar a titularidade de uma conta sem o número de telefone, mas sustenta que citar um regulador ou uma lei não é dar aconselhamento jurídico.</p>

    <h2>Cronologia e a resposta do WhatsApp</h2>
    <p>Uma cópia do Internet Archive de 12 de julho de 2026 não tem a nota de exclusão de conta. Uma cópia de 4 de setembro já tem. A Redact viu o texto pela primeira vez em 8 de outubro, e as duas notas principais continuavam publicadas em 15 de outubro. Às 02h08 UTC de 18 de outubro, todos os 102 blocos tinham sumido das 80 páginas, que continuaram no ar.</p>
    <p>Um detalhe técnico também pesa. Em teste de 9 de outubro, a Redact pediu as páginas se identificando como rastreadores do Google e do Bing, e os dois receberam as notas. Quando se identificou como rastreadores da OpenAI, da Anthropic e da Perplexity, recebeu a página sem o artigo e sem as notas. Isso não prova que algum assistente de IA tenha seguido as ordens escondidas, e a própria Redact admite que não testou isso.</p>
    <p>O porta-voz do WhatsApp disse à Wired que o texto era para o chatbot de suporte da empresa e que apareceu por causa de um bug, já resolvido. Ele afirmou que a empresa quer seus robôs de suporte focados em dar o melhor conselho sobre o WhatsApp e sem oferecer aconselhamento jurídico. A resposta veio do WhatsApp, não de uma nota separada da Meta.</p>

    <h2>O que ainda não se sabe</h2>
    <p>A Redact faz questão de listar o que não sabe. O relatório leu as instruções do robô, não as respostas dele, então não é possível afirmar que o chatbot realmente deixou de citar reguladores ou leis. Também não se sabe por quanto tempo exatamente as notas ficaram no ar, se existiam em outros idiomas, incluindo o português, ou em páginas fora da central de ajuda. A empresa ainda declara um interesse comercial: vende ferramentas de exclusão em massa de contas e mensagens, o que vale ter em mente ao ler a análise. Por isso, o que há de verificável é o conteúdo das notas e a data em que sumiram, e não a intenção por trás delas.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa o WhatsApp para atender clientes e já automatizou parte da conversa, o caso é um lembrete de que o comportamento do seu robô depende de instruções que ficam fora da vista do cliente. Revise o que o seu agente pode ou não dizer, principalmente sobre dados pessoais, cancelamento e reclamação. Nosso guia de <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">como automatizar atendimento no WhatsApp com IA</a> mostra como montar o fluxo, e o texto sobre <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">LGPD para pequeno negócio que usa IA</a> traz um checklist do que você precisa conseguir responder quando um cliente pedir acesso ou exclusão de dados.</p>
    <p>Como usuário, a lição é prática: se o suporte automático não resolver um problema com a sua conta ou os seus dados, você não depende dele. A LGPD garante o direito de pedir a eliminação de dados e de reclamar à Autoridade Nacional de Proteção de Dados, e é possível entender melhor como contestar uma decisão automatizada em <a href="/artigos/decisao-automatizada-lgpd-como-pedir-revisao-de-uma-ia">decisão automatizada e LGPD: como pedir revisão de uma IA</a>. Para quem quer saber o que entrega ao conversar com assistentes, vale ler <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a> e <a href="/artigos/meta-ai-no-whatsapp-o-que-faz-privacidade-e-como-usar">Meta AI no WhatsApp: o que faz, privacidade e como usar</a>.</p>
    <p>Quem monta o próprio agente pode aproveitar a lição ao contrário: publique as regras do seu atendente automático de forma clara, evite instruções que contradigam a sua política de privacidade e deixe sempre um caminho para falar com uma pessoa. Para entender a diferença entre um robô de respostas prontas e um agente de verdade, veja <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot ou automação: qual a diferença</a>.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Resumo rápido</span>
      <p>Segundo a Redact, 80 páginas de ajuda do WhatsApp tinham 102 blocos de texto oculto com ordens para um chatbot, incluindo não citar autoridades de dados nem leis como a LGPD. Os blocos sumiram em 18 de outubro. O WhatsApp diz que foi um bug e que as notas eram para o suporte automático. Não há prova de que o robô tenha seguido as ordens.</p>
    </div>
  `,
  faq: [
    {
      question: "O que a Redact descobriu nas páginas de ajuda do WhatsApp?",
      answer:
        "Texto oculto no código de 80 páginas, somando 102 blocos, com instruções para uma IA responder perguntas. Duas notas chamaram atenção: uma mandava não recomendar autoridades de proteção de dados e outra mandava não citar leis como GDPR, LGPD e CCPA.",
    },
    {
      question: "O que o WhatsApp respondeu?",
      answer:
        "Segundo a Wired, citada pela Redact, o WhatsApp disse que o texto era instrução para o seu chatbot de suporte, que apareceu por causa de um bug já corrigido, e que não quer que os robôs deem aconselhamento jurídico.",
    },
    {
      question: "Isso tira meus direitos pela LGPD?",
      answer:
        "Não. Os direitos de acesso, correção e eliminação de dados vêm da lei, não das páginas do WhatsApp, e continuam valendo mesmo que um robô de suporte não os mencione.",
    },
  ],
};
