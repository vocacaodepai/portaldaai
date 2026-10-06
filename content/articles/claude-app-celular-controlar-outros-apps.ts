import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "claude-app-celular-controlar-outros-apps",
  title: "Claude no celular: como a IA controla outros apps do Android e iPhone",
  seoTitle: "Claude no celular: como ele controla outros apps",
  excerpt:
    "O app do Claude no celular já redige mensagem, cria evento e acha endereço dentro de outros apps. Veja como habilitar, o que ele faz e os limites reais em 2026.",
  metaDescription:
    "Claude no celular controla WhatsApp, Gmail, Calendário e mapas direto da conversa. Veja como funciona no Android e no iPhone, quais dados ele acessa e os limites de 2026.",
  category: "iniciantes",
  articleSubcategory: "apps-e-tarefas",
  date: "2026-10-03",
  readTime: 8,
  imageQuery: "smartphone chat assistant app screen",
  seed: 135,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O app do Claude para Android e iPhone já redige mensagem, cria evento de calendário, define alarme e sugere endereço próximo direto da conversa, sem copiar e colar.",
    "Cada ação pede permissão na hora, pelo sistema do próprio celular, e dá para revisar ou revogar depois em Configurações, igual a qualquer outro app.",
    "Localização não funciona em conta Team ou Enterprise, lembretes só existem no iPhone e o acesso a dados de saúde ainda é beta, restrito a Pro ou Max.",
  ],
  content: `
    <p>O app do Claude no celular deixou de ser só um chat: hoje ele redige e envia mensagem pelo WhatsApp, cria evento no calendário, acha endereço próximo e define alarme sem você precisar copiar nada de uma tela para outra. A conversa pede a ação e o próprio sistema do Android ou do iPhone libera o acesso, na hora, exatamente como qualquer outro aplicativo pede permissão de câmera ou localização.</p>

    <p>Este guia mostra o que o Claude consegue fazer dentro de outros apps no Android e no iPhone, como habilitar cada recurso, o que muda entre os dois sistemas e os limites que ainda existem em 2026, como a falta de acesso a contatos e a restrição de localização para contas de empresa. Quem ainda não decidiu qual assistente usar encontra o comparativo em <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a>.</p>

    <h2>O que é esse recurso do Claude no celular</h2>
    <p>Até pouco tempo, usar um assistente de IA no celular significava abrir o app, copiar a resposta e colar em outro aplicativo para agir. O recurso atual do Claude muda essa mecânica: ele se conecta diretamente aos apps nativos do telefone e executa a ação a partir do que você pediu na conversa, segundo a <a href="https://support.claude.com/en/articles/11869629-use-claude-with-android-apps" rel="noopener noreferrer">própria central de ajuda do Claude para Android</a>.</p>
    <p>Na prática, você escreve algo como "manda mensagem para o João confirmando o horário de amanhã às 15h" e o Claude abre o WhatsApp (ou o app de mensagens padrão), já com o texto pronto, pedindo apenas a confirmação de envio. O mesmo vale para e-mail, agenda e localização. Isso aproxima o Claude do que o guia <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">como configurar seu primeiro assistente de IA pessoal</a> descreve como o próximo passo depois do chat simples.</p>

    <h2>O que o Claude consegue fazer no Android</h2>
    <p>Quem está no começo da jornada com IA e nem sabe bem por onde entrar encontra o essencial em <a href="/artigos/7-aplicativos-de-ia-que-toda-pessoa-deveria-conhecer">7 aplicativos de IA que toda pessoa deveria conhecer</a> e no <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de inteligência artificial</a>, que explica termos como "agente" e "permissão de acesso".</p>
    <p>No Android, o recurso cobre cinco frentes principais, de acordo com a central de ajuda oficial.</p>
    <ul class="checklist">
      <li>Redigir e enviar mensagens e e-mails por WhatsApp, Slack ou Gmail.</li>
      <li>Verificar horário livre e criar evento direto no app de Calendário.</li>
      <li>Acessar a localização para sugerir lugares próximos e mostrar no mapa.</li>
      <li>Criar alarme e timer no app Relógio do sistema.</li>
      <li>Ler dados de saúde e fitness via Health Connect (recurso em beta).</li>
    </ul>
    <p>A leitura de dados de saúde é a mais restrita: segundo o suporte oficial, só funciona em planos Pro ou Max, exige Android 14 ou mais recente e, por enquanto, está disponível apenas para usuários nos Estados Unidos. Quem já usa o Claude para organizar a rotina encontra ideias complementares em <a href="/artigos/como-usar-ia-para-criar-rotina-diaria-produtiva">como usar IA para criar uma rotina diária produtiva</a>.</p>

    <h2>O que muda no iPhone</h2>
    <p>No iOS, a lógica é parecida, mas com duas diferenças que valem anotar: o iPhone ganha gerenciamento de lembretes (o Android não tem esse recurso ainda) e o acesso a mensagens e e-mail funciona pelo sistema de compartilhamento nativo da Apple, sem pedir permissão prévia para cada app, conforme a <a href="https://support.claude.com/en/articles/11869619-use-claude-with-ios-apps" rel="noopener noreferrer">central de ajuda do Claude para iOS</a>.</p>
    <table>
      <thead>
        <tr><th>Recurso</th><th>Android</th><th>iPhone</th></tr>
      </thead>
      <tbody>
        <tr><td>Mensagens e e-mail</td><td>Sim, com permissão por app</td><td>Sim, via compartilhamento do sistema</td></tr>
        <tr><td>Calendário</td><td>Sim</td><td>Sim, editar depende de quem é o dono do evento</td></tr>
        <tr><td>Localização</td><td>Sim (exceto Team/Enterprise)</td><td>Sim (exceto Team/Enterprise)</td></tr>
        <tr><td>Alarmes e timers</td><td>Sim</td><td>Não listado</td></tr>
        <tr><td>Lembretes</td><td>Não disponível</td><td>Sim, só adiciona item em lista já existente</td></tr>
        <tr><td>Dados de saúde</td><td>Beta, Pro/Max, Android 14+, EUA</td><td>Beta, Pro/Max, só leitura</td></tr>
      </tbody>
    </table>

    <h2>Como habilitar e revisar as permissões</h2>
    <p>Não existe um botão único de "ativar". O Claude pede acesso no momento em que a conversa exige, com três opções: permitir uma vez, sempre permitir ou não permitir. Depois de qualquer decisão, dá para revisar tudo manualmente.</p>
    <h3>No Android</h3>
    <ol>
      <li>Abra Configurações do celular.</li>
      <li>Vá em Apps, depois Claude.</li>
      <li>Toque em Permissões para ver e alterar cada acesso concedido.</li>
    </ol>
    <h3>No iPhone</h3>
    <ol>
      <li>Abra Configurações e procure Claude na lista de apps.</li>
      <li>Para dados de saúde, vá em Configurações, depois Saúde, depois Acesso a Dados e Dispositivos.</li>
      <li>Revise cada permissão separadamente: mensagens e e-mail não pedem autorização prévia, mas calendário, localização e lembretes sim.</li>
    </ol>
    <p>Quem se preocupa com o que cada ferramenta de IA enxerga do próprio celular encontra uma checagem mais ampla em <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a> e no <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança para escolher ferramenta de IA</a>.</p>

    <h2>Exemplo brasileiro: organizando a semana em três comandos</h2>
    <p>Cenário ilustrativo, para mostrar o uso real, não um teste que fizemos. Marcos trabalha como autônomo em Porto Alegre e usa o Claude no plano Pro, que custa US$ 20 por mês na assinatura internacional (consulte a página oficial do Claude para o valor atual e a conversão em reais). Toda segunda-feira, ele abre o app e escreve três pedidos em sequência.</p>
    <p>Primeiro: "cria um evento de 1 hora na quinta às 14h chamado reunião com cliente X". O Claude abre o Calendário já preenchido, só pedindo confirmação. Segundo: "manda mensagem para a cliente Y perguntando se o horário de quinta ainda está bom". O app de mensagens abre com o texto pronto. Terceiro: "que restaurante tem perto daqui para almoçar com cliente depois da reunião?", usando a localização para sugerir três opções no mapa. O que antes levava alguns minutos trocando de app virou menos de um minuto de conversa, sem copiar nada manualmente.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Localização não funciona em contas corporativas Team ou Enterprise, segundo a documentação oficial. Se o app parecer "sem acesso" ao mapa, confira primeiro qual tipo de conta você está usando antes de reportar erro.</p></div>

    <h2>Prompts prontos para começar</h2>
    <p>Três exemplos de comando para testar o recurso sem precisar descobrir sintaxe nenhuma.</p>
    <pre><code>Veja meus horários livres na quinta e na sexta desta semana e crie um evento de 45 minutos chamado "Revisão de projeto" no primeiro horário livre que encontrar.</code></pre>
    <pre><code>Redija uma mensagem pedindo para remarcar a reunião de hoje às 16h para amanhã no mesmo horário, em tom educado e direto, e abra no app de mensagens para eu revisar antes de enviar.</code></pre>
    <pre><code>Sugira dois restaurantes a até 1 km de onde estou agora para um almoço de trabalho rápido, com nome e distância.</code></pre>

    <h2>Erros comuns ao usar o Claude dentro de outros apps</h2>
    <p>O primeiro erro é marcar "sempre permitir" para localização sem pensar, achando que é mais prático. Isso funciona, mas vale revisar depois de um mês se o acesso constante ainda faz sentido. O segundo é esperar que o Claude leia contatos salvos: ele não acessa a agenda de contatos, então é preciso digitar nome e número ou deixar o próprio app de mensagens completar.</p>
    <p>O terceiro erro é confundir o recurso de calendário com edição irrestrita: segundo a central de ajuda do iOS, editar um evento depende de quem é o dono dele, então reuniões criadas por outra pessoa podem não aceitar alteração pelo Claude. O quarto erro é tentar usar lembretes no Android esperando o mesmo comportamento do iPhone, recurso que, por ora, só existe no sistema da Apple.</p>

    <h2>Quando vale usar e quando não vale</h2>
    <p>Vale a pena para quem já usa o celular como central de trabalho e troca de app o dia inteiro: profissional autônomo, quem atende cliente pelo WhatsApp (veja também <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">como automatizar atendimento no WhatsApp com IA</a>), quem vive marcando reunião e usa <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">IA para reuniões</a> no dia a dia. Não compensa tanto para quem usa o celular só para consultas rápidas e prefere digitar direto no app de destino, caso em que a camada extra de permissão só adiciona passos. Para entender o espectro mais amplo de assistentes de voz e texto, o guia <a href="/artigos/assistente-de-voz-com-ia-como-usar-no-dia-a-dia">assistente de voz com IA: como usar no dia a dia</a> compara outras opções, e quem organiza a rotina com IA pode gostar também de <a href="/artigos/como-usar-ia-para-planejar-viagens-sem-perder-horas-pesquisando">como usar IA para planejar viagens sem perder horas pesquisando</a>.</p>
    <p>Quem ainda está decidindo se vale pagar por um plano Pro para ter acesso a mais desses recursos encontra o comparativo de preço em <a href="/artigos/microsoft-copilot-vale-a-pena-preco-2026">Microsoft Copilot vale a pena? Preço e o que faz em 2026</a>, que ajuda a colocar o valor do Claude em perspectiva com outra ferramenta similar.</p>

    <p>Comece testando um comando simples, como criar um evento de calendário ou pedir uma sugestão de restaurante próximo, e revise as permissões depois de uma semana de uso real. Se quiser entender o que esse tipo de assistente muda na rotina de quem está começando agora, o guia <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">o que é inteligência artificial: guia completo para iniciantes</a> é o ponto de partida.</p>
  `,
  faq: [
    {
      question: "O Claude no celular lê meus contatos salvos?",
      answer:
        "Não. Segundo a central de ajuda oficial, o Claude não acessa a lista de contatos do celular. Para mandar mensagem, é preciso informar o nome ou número na própria conversa, e o app de mensagens completa o destinatário usando os dados que já tem salvos.",
    },
    {
      question: "Esse recurso funciona no plano gratuito do Claude?",
      answer:
        "A integração com apps do sistema (mensagens, calendário, localização, alarmes) funciona em todos os planos. A exceção é o acesso a dados de saúde, que está restrito aos planos Pro ou Max e, no Android, exige também versão 14 do sistema ou mais recente.",
    },
    {
      question: "Por que a localização não funciona na minha conta do Claude?",
      answer:
        "Contas corporativas Team ou Enterprise não têm acesso à localização, por decisão da própria Anthropic nesses planos. Se você usa uma conta pessoal e o recurso não aparece, confira em Configurações se a permissão de localização foi concedida ao app.",
    },
    {
      question: "O Claude funciona do mesmo jeito no Android e no iPhone?",
      answer:
        "Quase. As principais diferenças são os lembretes, disponíveis só no iPhone, e os alarmes e timers, listados apenas para o Android na documentação oficial. O restante (mensagens, e-mail, calendário, localização, saúde em beta) funciona nos dois sistemas, com pequenas variações na forma de pedir permissão.",
    },
    {
      question: "É seguro deixar o Claude acessar meus apps de mensagem?",
      answer:
        "O acesso segue os mecanismos nativos de segurança do Android e do iOS, os mesmos usados por qualquer outro aplicativo. Ainda assim, vale revisar periodicamente em Configurações quais permissões estão em 'sempre permitir' e revogar o que não usa mais, principalmente localização e acesso a dados de saúde.",
    },
  ],
};
