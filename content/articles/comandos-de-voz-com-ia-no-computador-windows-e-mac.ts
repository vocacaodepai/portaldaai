import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "comandos-de-voz-com-ia-no-computador-windows-e-mac",
  title: "Comandos de voz com IA no computador: Windows e Mac",
  seoTitle: "Comandos de voz com IA no Windows e no Mac",
  excerpt:
    "Comandos de voz com IA já abrem o Copilot no Windows e o Siri no Mac sem tocar no teclado. Veja como ativar cada um e o que já dá para pedir por voz.",
  metaDescription:
    "Comandos de voz com IA no computador: como ativar 'Ei, Copilot' no Windows 11 e 'E aí Siri' no Mac, o que cada um já faz e os cuidados de privacidade.",
  category: "iniciantes",
  articleSubcategory: "apps-e-tarefas",
  date: "2026-10-06",
  readTime: 8,
  imageQuery: "person speaking laptop home office",
  seed: 164,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Windows 11 ganhou o comando de voz 'Ei, Copilot' para abrir o assistente de IA sem usar teclado ou mouse, parecido com o 'Ei Siri' do Mac.",
    "Ambos os comandos precisam ser ativados manualmente nas configurações do sistema e só funcionam com o computador desbloqueado.",
    "Comando de voz no computador ajuda em tarefas rápidas como abrir programa, perguntar algo ou ditar texto, mas ainda não substitui o teclado para trabalho mais longo.",
  ],
  content: `
    <p>Comandos de voz com IA no computador deixaram de ser só para celular: o Windows 11 ganhou o "Ei, Copilot" e o Mac já tem o "E aí Siri" havia mais tempo, ambos permitindo abrir o assistente de IA e pedir tarefas sem tocar em teclado ou mouse. A diferença para os comandos de voz antigos é que agora a IA entende pedido em linguagem natural, não só um comando fixo memorizado.</p>

    <p>Este guia mostra como ativar o comando de voz no Windows e no Mac, o que já dá para pedir por voz em cada sistema e os cuidados de privacidade que valem a pena antes de deixar o microfone sempre escutando. Quem já usa assistente de voz no celular encontra contexto complementar no guia <a href="/artigos/assistente-de-voz-com-ia-como-usar-no-dia-a-dia">assistente de voz com IA no dia a dia</a>.</p>

    <h2>Como ativar o "Ei, Copilot" no Windows 11</h2>

    <p>Segundo reportagem do <a href="https://www.mundoconectado.com.br/windows/ia-windows-ler-tela-comando-de-voz-copilot/" rel="noopener noreferrer">Mundo Conectado</a>, o comando de voz "Hey Copilot" (ou "Ei, Copilot") abre o modo de conversa por voz em tempo real do assistente do Windows, funcionando de forma parecida ao "Ei Siri" no Mac. A ativação exige um ajuste manual nas configurações do Copilot, e o reconhecimento usa uma janela de áudio local de apenas 10 segundos, sem gravação contínua, segundo a mesma reportagem.</p>

    <h3>Passo a passo no Windows</h3>

    <ol>
      <li>Abra as Configurações do Windows e procure por "Copilot".</li>
      <li>Ative a opção de ativação por voz "Ei, Copilot".</li>
      <li>Diga "Ei, Copilot" com o computador desbloqueado para abrir o modo de voz.</li>
      <li>Para encerrar, diga "Goodbye", clique no X ou fique em silêncio até o encerramento automático.</li>
    </ol>

    <p>A funcionalidade já começou a ser liberada para usuários em geral do Windows 11, com recursos mais experimentais, como ações automáticas do Copilot, chegando primeiro para quem participa do programa Windows Insider. Quem usa o Copilot para outras tarefas encontra mais detalhes em <a href="/artigos/microsoft-copilot-vale-a-pena-preco-2026">Microsoft Copilot vale a pena</a>.</p>

    <h2>Como ativar o "E aí Siri" no Mac</h2>

    <p>Segundo o <a href="https://support.apple.com/pt-br/guide/mac-help/mchlb66b4ad6/mac" rel="noopener noreferrer">suporte oficial da Apple</a>, o Mac aceita duas frases de ativação por voz: "E aí Siri" ou apenas "Siri". A ativação fica em Ajustes do Sistema &gt; Siri, na opção "Ativar 'E aí Siri' ou 'Siri'". Também é possível acionar a Siri sem usar a voz, mantendo pressionada a tecla de microfone do teclado ou clicando no ícone da Siri na barra de menus.</p>

    <h3>Passo a passo no Mac</h3>

    <ol>
      <li>Abra Ajustes do Sistema e clique em Siri (ou Apple Intelligence e Siri, dependendo da versão do macOS).</li>
      <li>Ative a opção "Ativar 'E aí Siri' ou 'Siri'".</li>
      <li>Diga "E aí Siri" ou "Siri" seguido do pedido.</li>
      <li>Se preferir não usar a voz, escolha o atalho de teclado como alternativa de ativação.</li>
    </ol>

    <p>A disponibilidade dessa ativação por voz depende do idioma e da região configurados no Mac, segundo a própria documentação da Apple, então vale checar as configurações de idioma se o comando não funcionar de primeira.</p>

    <h2>O que já dá para pedir por voz no computador</h2>

    <table>
      <thead>
        <tr><th>Tarefa</th><th>Windows (Copilot)</th><th>Mac (Siri)</th></tr>
      </thead>
      <tbody>
        <tr><td>Abrir programa ou arquivo</td><td>Sim</td><td>Sim</td></tr>
        <tr><td>Responder pergunta geral</td><td>Sim, com IA generativa</td><td>Sim, com busca e IA</td></tr>
        <tr><td>Ditar texto em documento</td><td>Sim, via ditado do Windows</td><td>Sim, via ditado do macOS</td></tr>
        <tr><td>Executar ação na tela (Copilot Vision)</td><td>Em teste, fase inicial</td><td>Limitado</td></tr>
      </tbody>
    </table>

    <p>Para quem usa o computador para estudar ou organizar rotina, ditar perguntas por voz pode ser mais rápido que digitar, especialmente em tarefas curtas. O guia de <a href="/artigos/como-usar-ia-para-criar-rotina-diaria-produtiva">rotina diária produtiva com IA</a> mostra como encaixar esse tipo de atalho no dia a dia sem depender de apps pagos, e quem usa IA para estudar encontra uso parecido em <a href="/artigos/como-usar-ia-para-estudar-para-provas-e-concursos">como usar IA para estudar para provas e concursos</a>.</p>

    <h2>Privacidade: o microfone fica sempre ligado?</h2>

    <p>Tanto o Windows quanto o Mac afirmam não gravar ou armazenar áudio continuamente: o sistema mantém uma janela curta de escuta local só para identificar a frase de ativação, descartando o resto. Ainda assim, vale revisar as permissões de microfone do computador periodicamente, principalmente em notebooks usados em espaço compartilhado, como escritório ou coworking.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Desative a ativação por voz em notebooks usados em ambiente público ou compartilhado, como biblioteca ou cowork, para evitar que o assistente seja acionado por engano com conversas ao redor. Prefira o atalho de teclado nesses casos.</p></div>

    <p>Quem já se preocupa com o que a IA guarda sobre o uso encontra panorama mais completo em <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a>, e em <a href="/artigos/memoria-longa-em-ia-assistente-que-lembra-de-voce">memória longa em IA: o que muda quando o app lembra de você</a>.</p>

    <h2>Exemplo brasileiro: freelancer ditando e-mails entre tarefas</h2>

    <p>Cenário ilustrativo, montado para mostrar o uso prático, não um caso acompanhado. Juliana trabalha como assistente virtual remota em Fortaleza e alterna entre planilhas, e-mail e chamadas de vídeo o dia inteiro no notebook com Windows 11. Ela ativou o "Ei, Copilot" para abrir rapidamente o assistente entre uma tarefa e outra, sem precisar parar de digitar o que já estava fazendo em outra janela.</p>

    <p>Usando o comando de voz para perguntas rápidas, como "resuma esse e-mail em três frases" enquanto ainda lia outro documento, ela reduziu pequenas interrupções no fluxo de trabalho, embora continue usando o teclado para qualquer resposta mais longa, já que ditar texto corrido ainda exige revisão mais cuidadosa do que digitar diretamente. Para organizar a caixa de entrada entre uma chamada e outra, ela também usa as dicas do guia <a href="/artigos/ia-para-email-organizar-caixa-de-entrada-responder-mais-rapido">IA para e-mail: organizar a caixa de entrada e responder rápido</a>.</p>

    <h2>Erros comuns ao usar comando de voz no computador</h2>

    <p>O erro mais comum é esperar que o comando de voz substitua o teclado para qualquer tarefa, quando na prática funciona melhor para pedidos curtos e abertura rápida de programas. O segundo é deixar a ativação por voz ligada em ambiente ruidoso ou compartilhado, gerando acionamentos acidentais. O terceiro é não revisar o texto ditado antes de enviar, já que erro de reconhecimento de fala ainda acontece, principalmente com nomes próprios ou termos técnicos.</p>

    <ul class="checklist">
      <li>Não dependa só da voz para texto que exige revisão cuidadosa, como e-mail formal.</li>
      <li>Desative a ativação por voz em espaço compartilhado ou público.</li>
      <li>Revise sempre o texto ditado antes de enviar ou salvar.</li>
      <li>Confira as configurações de idioma se o comando de voz não reconhecer o português corretamente.</li>
    </ul>

    <p>Quem já usa o celular com comando de voz encontra outro exemplo prático em <a href="/artigos/claude-app-celular-controlar-outros-apps">Claude no celular: como a IA controla outros apps</a>, mostrando que o mesmo princípio de ativação por voz já chegou antes aos smartphones.</p>

    <h2>Vale a pena ativar o comando de voz no seu computador</h2>

    <p>Vale a pena para quem já usa IA no dia a dia e quer ganhar velocidade em tarefas curtas, como abrir um programa, fazer uma pergunta rápida ou ditar uma nota. Não é um recurso essencial para quem prefere o controle do teclado e mouse, e pode ser desativado sem perda nenhuma de funcionalidade principal do sistema.</p>

    <p>Teste o comando de voz do seu sistema por uma semana em tarefas pequenas antes de decidir se vale manter ativado. Quem está começando a usar IA agora encontra o próximo passo em <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">como configurar seu primeiro assistente de IA pessoal</a>, e a categoria <a href="/categoria/iniciantes">Para Iniciantes</a> reúne outros guias para quem está começando com IA.</p>
  `,
  faq: [
    {
      question: "Como ativo o 'Ei, Copilot' no Windows 11?",
      answer:
        "Abra as Configurações do Windows, procure por Copilot e ative a opção de ativação por voz 'Ei, Copilot'. Depois, diga a frase com o computador desbloqueado para abrir o modo de conversa por voz do assistente.",
    },
    {
      question: "Como ativo o Siri por voz no Mac?",
      answer:
        "Vá em Ajustes do Sistema, clique em Siri e ative a opção 'Ativar 'E aí Siri' ou 'Siri''. A partir daí, basta dizer uma dessas frases seguida do pedido. A disponibilidade depende do idioma e da região configurados no Mac.",
    },
    {
      question: "O computador fica gravando tudo que eu falo?",
      answer:
        "Não, segundo a Microsoft e a Apple. Ambos os sistemas usam uma janela curta de escuta local apenas para identificar a frase de ativação, sem gravar ou armazenar continuamente o áudio do ambiente.",
    },
    {
      question: "Comando de voz funciona bem em português?",
      answer:
        "Sim, tanto o Copilot no Windows quanto a Siri no Mac reconhecem português do Brasil, mas erros de reconhecimento ainda acontecem com nomes próprios e termos técnicos, então vale revisar texto ditado antes de enviar.",
    },
    {
      question: "Vale a pena usar comando de voz em vez do teclado?",
      answer:
        "Para tarefas curtas, como abrir um programa ou fazer uma pergunta rápida, sim. Para texto mais longo que exige revisão cuidadosa, o teclado ainda costuma ser mais prático e confiável que ditar por voz.",
    },
  ],
};
