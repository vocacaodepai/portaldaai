import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "copilot-no-outlook-organizar-a-caixa-de-entrada-por-comando-regras-e-limites",
  title: "Copilot no Outlook: organizar a caixa de entrada por comando",
  seoTitle: "Copilot no Outlook: organize e-mails por comando",
  excerpt:
    "O Copilot no Outlook agora arquiva, move, apaga e cria pastas e regras a partir de um pedido em texto. Veja o que faz, onde funciona e quais são os limites.",
  metaDescription:
    "Copilot no Outlook arquiva, move, apaga e cria pastas e regras por pedido em texto. Veja o que ele faz, a confirmação acima de 5 e-mails e os limites atuais.",
  category: "ferramentas",
  date: "2026-11-01",
  readTime: 6,
  imageQuery: "laptop email inbox desk",
  seed: 1027,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Copilot no Outlook agora executa ações na caixa de entrada a partir de um pedido em texto: arquiva, apaga, move, copia, marca, categoriza e cria pastas e regras.",
    "Quando uma ação atinge mais de cinco e-mails, o Copilot mostra um cartão com Confirmar e Cancelar antes de mexer; até cinco, ele executa direto. Regras valem só para e-mails futuros.",
    "A página de suporte da Microsoft diz que os recursos funcionam por ora só em inglês e traz o rótulo Frontier, o programa de acesso antecipado, então confira na sua conta se já apareceu.",
  ],
  content: `
    <p>O Copilot no Outlook agora faz mais do que resumir e redigir: ele organiza a caixa de entrada a partir de um pedido em texto. Segundo a página de suporte da Microsoft, consultada em 01/11/2026, ele consegue arquivar, apagar, mover e copiar e-mails, aplicar categorias, criar pastas e montar regras de caixa de entrada.</p>

    <p>Para quem recebe dezenas de mensagens por dia, a mudança troca cliques repetidos por uma frase. Este guia mostra o que o recurso faz de verdade, quando ele pede confirmação, onde funciona e o que ainda limita. Se a sua dor é a bagunça em geral, o guia de <a href="/artigos/ia-para-email-organizar-caixa-de-entrada-responder-mais-rapido">IA para e-mail: organizar a caixa de entrada e responder mais rápido</a> traz a rotina que serve para qualquer programa.</p>

    <h2>O que mudou: do resumo para a ação</h2>

    <p>Até pouco tempo, o Copilot no Outlook lia e-mails, resumia conversas e sugeria respostas. A novidade é que ele passa a agir sobre a caixa. A <a href="https://support.microsoft.com/en-us/outlook/use-microsoft-365-copilot-in-outlook-to-manage-your-inbox-frontier" target="_blank" rel="noopener noreferrer">página de suporte da Microsoft sobre gerenciar a caixa de entrada com o Copilot</a> lista as ações disponíveis, e o resumo mensal de novidades do Copilot de outubro de 2026, publicado na <a href="https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/what%E2%80%99s-new-in-microsoft-copilot--october-2026/4568528" target="_blank" rel="noopener noreferrer">Microsoft Tech Community</a>, é o registro oficial do mês em que o recurso apareceu.</p>

    <p>Na prática, em vez de selecionar mensagens uma a uma, você escreve algo como "arquive os e-mails de newsletter da semana passada" e o Copilot faz o trabalho. É a mesma ideia dos agentes de IA que executam tarefas, só que limitada a um programa de e-mail. Quem acompanha o tema pode ler sobre <a href="/artigos/permissoes-de-agentes-de-ia-o-que-liberar-o-que-travar-e-quando-pedir-aprovacao">permissões de agentes de IA</a> para entender por que a confirmação importa.</p>

    <h2>O que o Copilot consegue fazer na caixa</h2>

    <p>A lista oficial é mais ampla do que parece à primeira vista. Ela cobre desde marcações simples até a criação de estruturas novas na caixa.</p>

    <table>
      <thead>
        <tr><th>Tipo de ação</th><th>O que o Copilot faz</th></tr>
      </thead>
      <tbody>
        <tr><td>Destacar</td><td>Fixar e desafixar e-mails; sinalizar, definir lembrete com datas e marcar como concluído</td></tr>
        <tr><td>Ler e limpar</td><td>Marcar como lido ou não lido; arquivar, apagar, mover ou copiar</td></tr>
        <tr><td>Triar</td><td>Marcar como lixo eletrônico ou como legítimo; aplicar ou remover categorias</td></tr>
        <tr><td>Estruturar</td><td>Criar e listar pastas; criar e gerenciar regras de caixa de entrada</td></tr>
      </tbody>
    </table>

    <p>Repare no que não está na lista: o Copilot não envia respostas sozinho por esse caminho nem faz compras ou pagamentos. O foco é arrumar a caixa. Para escrever respostas, o <a href="/artigos/email-profissional-dificil-com-ia-feedback-prazo-e-recusa-sem-climao">guia de e-mail profissional difícil com IA</a> mostra como pedir rascunhos sem perder o tom.</p>

    <h2>Confirmação acima de cinco e-mails</h2>

    <p>A trava de segurança é simples. Segundo a Microsoft, se uma ação afetar mais de cinco e-mails, o Copilot mostra um cartão de confirmação com os botões Confirmar e Cancelar. Ações que afetam cinco ou menos não exigem confirmação e são executadas direto.</p>

    <p>Isso tem uma consequência prática: pedidos pequenos e específicos passam sem aviso. Se você pedir para apagar "os e-mails do João", e forem três mensagens importantes, nada vai impedir. A regra de ouro é reler o pedido antes de enviar e preferir verbos reversíveis, como mover e arquivar, em vez de apagar.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Apagar até cinco e-mails não pede confirmação. Prefira arquivar ou mover para uma pasta de revisão; só apague depois de olhar o que o Copilot pegou.</p></div>

    <h2>Regras por pedido em texto</h2>

    <p>Criar regras de caixa de entrada sempre foi um recurso escondido em menus. Agora dá para descrever o que você quer. A <a href="https://support.microsoft.com/en-US/Outlook/create-and-view-outlook-rules-with-microsoft-365-copilot" target="_blank" rel="noopener noreferrer">página da Microsoft sobre criar e ver regras com o Copilot</a> dá o exemplo "mova os e-mails com Invoice no assunto para a pasta Invoices".</p>

    <p>Antes de aplicar, o Copilot mostra um resumo com a condição, a ação (mover, categorizar ou apagar) e o aviso de que a regra vale para e-mails futuros. Se a pasta ou a categoria não existir, ele pede uma confirmação para criar tudo junto. Nada muda até você aceitar.</p>

    <h3>Um exemplo de rotina para uma loja pequena</h3>

    <p>Imagine uma loja online que recebe, por semana, uns 150 e-mails: pedidos de fornecedor, notas, newsletters e avisos de pagamento. Uma regra por assunto para "Nota fiscal" leva tudo a uma pasta Notas, e outra categoriza avisos de pagamento como "Pagar". São duas frases e uns dois minutos, contra a montagem manual em menus. Quem trabalha por conta própria também pode ver como <a href="/artigos/ia-para-mei-tarefas-que-voce-pode-automatizar">o MEI automatiza tarefas com IA</a>.</p>

    <pre><code>Crie uma regra: e-mails com "Nota fiscal" ou "NF-e" no assunto vão para a pasta Notas.
Crie a pasta se ela não existir.</code></pre>

    <pre><code>Arquive os e-mails de newsletter que recebi nos últimos 7 dias.
Liste antes o que você vai arquivar.</code></pre>

    <h2>Onde funciona e o que ainda limita</h2>

    <p>A Microsoft lista o Copilot em tela cheia e o painel lateral. Dá para usar pelo Microsoft Copilot Chat sem abrir o Outlook; dentro do Outlook, a página cita o clássico e o novo Outlook para Windows, o Outlook na web, o Outlook para Mac e os aplicativos de Android e iOS. Comandos de voz valem só nos apps de Android e iOS.</p>

    <ul class="checklist">
      <li>Os recursos funcionam, por ora, apenas em inglês, segundo a página de suporte.</li>
      <li>A página tem o rótulo Frontier no título, o programa de acesso antecipado da Microsoft: pode não estar na sua conta ainda.</li>
      <li>Regras criadas pelo Copilot valem só para e-mails que chegam depois; nada do que já está na caixa é alterado.</li>
      <li>Nos aplicativos de iOS e Android, o link para as configurações de regras do Outlook não aparece; use a web ou o programa de computador.</li>
      <li>A página de regras não informa licença ou assinatura exigida.</li>
    </ul>

    <p>Sobre custo, a documentação consultada não cita preço. O artigo <a href="/artigos/microsoft-copilot-vale-a-pena-preco-2026">Microsoft Copilot vale a pena? Preços em 2026</a> e o texto sobre o <a href="/artigos/microsoft-copilot-superapp-o-que-muda-e-como-usar-de-graca">superapp do Copilot e o uso gratuito</a> ajudam a decidir antes de pagar.</p>

    <h2>Cuidados antes de liberar na sua caixa</h2>

    <p>Mexer em e-mail é mexer em dados de clientes, contratos e senhas de recuperação. Quatro cuidados evitam surpresas. Primeiro, comece por uma pasta de teste com poucas mensagens. Segundo, prefira pedir a lista do que será afetado antes de executar. Terceiro, mantenha a pasta de itens excluídos intacta por alguns dias. Quarto, desconfie de mensagens que tentam dar ordens ao assistente: o risco de <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection em páginas e e-mails</a> existe quando uma IA lê o que outras pessoas escrevem.</p>

    <p>Para negócios, vale lembrar que e-mails guardam dados pessoais. O <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para quem usa IA no pequeno negócio</a> explica o que checar antes de entregar a caixa de entrada a qualquer assistente.</p>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Pedir "limpe minha caixa" sem critério.</strong> Pedidos vagos geram ações amplas. Diga o remetente, o assunto e o período.</li>
      <li><strong>Apagar em vez de arquivar.</strong> Até cinco e-mails, o Copilot não pergunta.</li>
      <li><strong>Esperar que a regra arrume o passado.</strong> Ela só atua nas mensagens futuras; para o que já está lá, peça uma ação separada.</li>
      <li><strong>Escrever em português e estranhar.</strong> A documentação fala em suporte apenas em inglês por enquanto.</li>
      <li><strong>Confiar sem conferir.</strong> A IA pode errar o que entendeu; vale o cuidado do guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA e como checar a resposta</a>.</li>
    </ul>

    <h2>Para quem vale testar agora</h2>

    <p>Vale para quem já usa Outlook e recebe volume alto de mensagens repetitivas, como notas, avisos e newsletters. Se você usa o Gmail, a conversa é parecida: veja o que o <a href="/artigos/gmail-ai-inbox-e-gmail-live-quem-tem-o-que-fazem-e-alternativas">Gmail AI Inbox e o Gmail Live</a> oferecem e como o <a href="/artigos/gemini-no-gmail-escrever-e-responder-emails-mais-rapido">Gemini no Gmail</a> ajuda. Para equipes que já usam o Copilot em outras frentes, o <a href="/artigos/recap-inteligente-do-teams-sem-transcricao-quem-tem-como-ligar-e-limites">recap inteligente do Teams</a> e o <a href="/artigos/copilot-para-financas-no-excel-conciliacao-lancamentos-e-quem-tem-acesso">Copilot para finanças no Excel</a> completam o conjunto. Mais novidades como essa ficam na categoria de ferramentas do Portal da AI.</p>
  `,
  faq: [
    {
      question: "O que o Copilot no Outlook consegue fazer na caixa de entrada?",
      answer:
        "Segundo a página de suporte da Microsoft, ele fixa, sinaliza, marca como lido, arquiva, apaga, move e copia e-mails, marca como lixo eletrônico, aplica categorias, cria e lista pastas e cria regras de caixa de entrada. Tudo a partir de um pedido em texto, no painel lateral ou na tela cheia do Copilot.",
    },
    {
      question: "O Copilot pede confirmação antes de apagar e-mails?",
      answer:
        "Só quando a ação afeta mais de cinco e-mails: aparece um cartão com os botões Confirmar e Cancelar. Ações que atingem cinco mensagens ou menos são executadas direto, sem aviso. Por isso, prefira arquivar ou mover, que são reversíveis, e peça a lista do que será afetado antes de executar.",
    },
    {
      question: "A regra criada pelo Copilot arruma os e-mails que já estão na caixa?",
      answer:
        "Não. Segundo a Microsoft, as regras são regras comuns de caixa de entrada e valem só para as mensagens que chegarem depois de criadas. Nenhum e-mail existente é alterado quando a regra nasce. Para organizar o que já está lá, faça um pedido de ação separado e confira o resultado.",
    },
    {
      question: "O Copilot no Outlook funciona em português?",
      answer:
        "A página de suporte da Microsoft consultada em 01/11/2026 diz que os recursos de gerenciar a caixa de entrada estão disponíveis, por enquanto, apenas em inglês. Isso pode mudar com o tempo. Vale conferir a página oficial antes de montar uma rotina que dependa do idioma e testar com poucas mensagens.",
    },
    {
      question: "Preciso de licença paga para usar o Copilot no Outlook?",
      answer:
        "A documentação consultada não informa o tipo de licença exigido para gerenciar a caixa nem para criar regras. A página de suporte leva o rótulo Frontier, programa de acesso antecipado da Microsoft. Consulte o administrador do seu Microsoft 365 ou a página oficial para saber se o recurso já está liberado para você.",
    },
  ],
};
