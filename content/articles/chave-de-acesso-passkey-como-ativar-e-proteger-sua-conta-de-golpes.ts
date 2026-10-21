import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes",
  title: "Chave de acesso (passkey): como ativar e se proteger de golpes",
  seoTitle: "Chave de acesso (passkey): como ativar na conta Google",
  excerpt:
    "Chave de acesso (passkey) troca a senha por digital, rosto ou PIN do aparelho. Veja como criar a sua na conta Google, o que fazer se perder o celular e as dicas do CERT.br.",
  metaDescription:
    "Chave de acesso (passkey): o que é, como criar na conta Google em 3 passos, o que fazer ao perder o aparelho e como somar verificação em duas etapas para barrar golpes.",
  category: "iniciantes",
  articleSubcategory: "vida-pratica",
  date: "2026-10-21",
  readTime: 7,
  imageQuery: "hand holding smartphone fingerprint unlock",
  seed: 524,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Chave de acesso (passkey) é uma alternativa à senha: você entra com digital, rosto ou PIN do aparelho, e a chave não pode ser copiada nem digitada num site falso.",
    "Na conta Google, a criação leva três passos em myaccount.google.com/signinoptions/passkeys, e a chave nova pode levar até 7 dias para ficar disponível no login, segundo o Google.",
    "Mesmo com passkey, vale ligar a verificação em duas etapas, guardar códigos de backup e seguir as dicas do CERT.br: senha longa, sem repetir, e desconfiar de mensagens com urgência.",
  ],
  content: `
    <p>Chave de acesso, também chamada de passkey, é uma forma de entrar na conta sem digitar senha: você confirma com a digital, o rosto ou o PIN de desbloqueio do celular ou do computador. Como ela não pode ser copiada, anotada nem entregue em uma página falsa, é mais difícil de ser roubada por golpe de phishing do que uma senha comum.</p>
    <p>Isso importa agora porque a inteligência artificial deixa mensagens de golpe mais bem escritas, sem os erros de português que antes denunciavam a fraude. Quando o texto convincente chega, a defesa que sobra é técnica: uma conta que não depende de uma senha que você possa ser enganado a digitar. Este guia explica, com base nas páginas oficiais do Google e do CERT.br conferidas em 21/10/2026, como ligar a chave de acesso e o que somar a ela.</p>

    <h2>O que é uma chave de acesso e por que ela protege?</h2>
    <p>Segundo a <a href="https://support.google.com/accounts/answer/13548313" target="_blank" rel="noopener noreferrer">página de ajuda do Google sobre passkeys</a>, a chave de acesso é uma alternativa à senha que usa a digital, o rosto ou o PIN do aparelho. O Google explica que ela não pode ser compartilhada, copiada nem anotada, e por isso é mais difícil de ser roubada por quem faz phishing, aquele golpe em que uma página falsa imita a de um serviço para capturar a senha. Os dados biométricos ficam no aparelho e não são compartilhados com o Google.</p>
    <p>A diferença para a senha é simples. Uma senha é um segredo que você sabe e pode ser induzido a digitar. A chave de acesso fica guardada no aparelho e só funciona no site verdadeiro, então não há o que entregar a um site falso. Isso não elimina todos os riscos (um aparelho desbloqueado nas mãos de outra pessoa continua sendo um problema), mas tira do golpista a ferramenta mais comum.</p>

    <h2>O que você precisa para usar</h2>
    <p>O Google lista os requisitos: Windows 10 ou superior, macOS Ventura ou superior, ChromeOS 109 ou superior, Android 9 ou superior, iOS 16 ou superior, ou uma chave de segurança física com padrão FIDO2. Os navegadores aceitos são Chrome 109 ou superior, Safari 16 ou superior, Edge 109 ou superior e Firefox 122 ou superior.</p>
    <table>
      <thead>
        <tr><th>Item</th><th>O que conferir</th></tr>
      </thead>
      <tbody>
        <tr><td>Bloqueio de tela</td><td>Ligado no celular (digital, rosto ou PIN)</td></tr>
        <tr><td>Bluetooth</td><td>Ligado, se for entrar em outro computador usando o celular</td></tr>
        <tr><td>iPhone, iPad e Mac</td><td>Chaveiro do iCloud ativado</td></tr>
        <tr><td>Aparelho</td><td>Seu, nunca um aparelho compartilhado</td></tr>
        <tr><td>Conta de trabalho ou escola</td><td>Pode não permitir, depende do administrador</td></tr>
      </tbody>
    </table>
    <p>O Google avisa que não se deve criar passkey em um aparelho compartilhado. Em um computador de lan house ou de escritório de uso comum, prefira outra forma de acesso e saia da conta ao terminar.</p>

    <h2>Como criar a chave de acesso na conta Google</h2>
    <p>Os passos oficiais são curtos. Faça no aparelho que você usa todo dia e que tem bloqueio de tela.</p>
    <ol>
      <li>Abra myaccount.google.com/signinoptions/passkeys.</li>
      <li>Toque em "Criar uma chave de acesso" e confirme de novo na tela seguinte.</li>
      <li>Desbloqueie o aparelho quando ele pedir.</li>
    </ol>
    <p>Quem prefere uma chave de segurança física escolhe "Usar outro dispositivo" no segundo passo, conecta a chave e informa o PIN dela. O Google diz que é preciso repetir o processo em cada aparelho em que você queira usar a chave, e que uma chave recém-criada pode levar até 7 dias para ficar disponível na hora do login. Por isso, não apague a senha nem o método de recuperação no mesmo dia.</p>
    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Crie a chave em dois aparelhos, por exemplo o celular e o notebook. Se um deles for perdido, você ainda entra pelo outro sem depender de recuperação de conta.</p></div>

    <h2>Como entrar usando a chave</h2>
    <p>No mesmo aparelho, você abre a página de login do Google, informa o e-mail e, se aparecer a lista de chaves, toca na que quer usar e confirma com o desbloqueio. Em outro computador, o caminho é "Tentar de outra forma" e "Usar sua chave de acesso": o computador mostra um QR code, você o escaneia com o celular, confirma a chave e libera com digital, rosto ou PIN. Mantenha o Bluetooth ligado nesse caso.</p>
    <p>O Google explica ainda que, depois de sair da conta em um aparelho Android, é possível voltar usando a mesma chave por até 6 horas. Passado esse tempo, é preciso outro método. Vale praticar o processo uma vez com calma, em casa, antes de precisar dele com pressa.</p>

    <h2>Verificação em duas etapas: a camada que fica</h2>
    <p>A chave de acesso não substitui a verificação em duas etapas, e sim se junta a ela. A <a href="https://support.google.com/accounts/answer/185839" target="_blank" rel="noopener noreferrer">página do Google sobre verificação em duas etapas</a> ensina a ligar em "Segurança e login", na opção "Ativar verificação em duas etapas". Entre os segundos passos, o Google cita notificações no celular (recomendada), chaves de acesso e de segurança (a proteção mais forte contra phishing), aplicativos autenticadores e códigos por SMS, esta última descrita como a opção menos segura porque ataques ao número de telefone podem visá-la.</p>
    <p>Gere também os códigos de backup, de 8 dígitos, e guarde em lugar seguro, impresso ou em um gerenciador de senhas. Eles servem de segundo passo se você perder o celular. Não os compartilhe com ninguém, nem com quem se diga funcionário do banco ou do Google.</p>

    <h2>O que fazer se perder o aparelho com a chave</h2>
    <p>Segundo o Google, o caminho é entrar na conta por outro aparelho que você ainda tenha, ir em "Segurança e login", abrir "Chaves de acesso e chaves de segurança", escolher a chave do aparelho perdido e tocar em "Remover". Se o aparelho for Android e a chave foi criada automaticamente, vá em "Seus dispositivos", depois "Gerenciar todos os dispositivos", escolha o aparelho e saia da conta nele. Você pode revisar quais aparelhos acessam a conta em google.com/devices.</p>
    <p>Para um golpe que já aconteceu, como transferência feita por engano, o passo a passo é outro e depende de rapidez. O guia sobre <a href="/artigos/golpe-do-pix-o-que-fazer-nas-primeiras-horas-med-e-uso-de-ia">golpe do Pix e o MED</a> traz o que fazer nas primeiras horas.</p>

    <h2>Dicas do CERT.br que continuam valendo</h2>
    <p>As <a href="https://cartilha.cert.br/dicas-rapidas/" target="_blank" rel="noopener noreferrer">Dicas Rápidas da Cartilha de Segurança do CERT.br</a> são curtas e atuais no que importa. Sobre senhas: usar senhas longas, com números aleatórios e tipos variados de caracteres, evitar dados pessoais e sequências de teclado, não repetir senha e trocar de imediato se suspeitar de vazamento. Sobre o segundo fator: ligar a verificação em duas etapas sempre que existir, e nos aplicativos de mensagem nunca repassar códigos de autenticação nem agir sobre código que você não pediu.</p>
    <p>Sobre golpes, o CERT.br pede desconfiança de mensagens que prometem muito dinheiro, exigem segredo ou pressa, usam palavras como "urgente" ou "confidencial", pedem pagamento adiantado ou têm erros de português. Hoje esse último sinal falha mais, porque a IA escreve bem. Por isso o hábito principal é confirmar por outro canal, como explica o guia de <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">como checar mensagem suspeita com IA</a>.</p>

    <h2>Exemplo: Marta, 52 anos, e a conta que vira cadeado</h2>
    <p>Marta tem uma loja de roupas e usa a mesma conta Google para e-mail, Drive e anúncios. Ela recebe um e-mail dizendo que a conta será suspensa em 24 horas, com um link para "confirmar a senha". Antes, a única coisa que a separava do golpe era a atenção dela. Depois de uma tarde de configuração, ela tem uma passkey no celular e no notebook, a verificação em duas etapas ligada e os códigos de backup impressos numa pasta em casa (exemplo hipotético).</p>
    <p>O mesmo e-mail chega de novo. Marta não clica: abre o app do Google direto e vê que não há nenhum aviso. Mesmo que ela clicasse e visse uma página parecida, a chave de acesso não funcionaria em um site falso. Ela ainda lê o guia de <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade e IA</a> para revisar o que compartilha com assistentes, e o de <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection</a> para entender por que não deve dar a uma IA acesso irrestrito à caixa de e-mail.</p>

    <h2>Erros comuns</h2>
    <ul class="checklist">
      <li><strong>Criar passkey em aparelho compartilhado.</strong> O Google recomenda não fazer isso.</li>
      <li><strong>Apagar o método antigo no mesmo dia.</strong> A chave nova pode levar até 7 dias para ficar disponível.</li>
      <li><strong>Ter uma chave só.</strong> Se perder o aparelho, a recuperação fica mais difícil. Crie em dois.</li>
      <li><strong>Passar o código recebido por SMS.</strong> Nenhum banco ou empresa pede esse código por mensagem ou telefone.</li>
      <li><strong>Pedir a uma IA para guardar senhas.</strong> Use um gerenciador próprio, e leia antes o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a>.</li>
      <li><strong>Esquecer o resto das contas.</strong> Comece pela conta Google, onde ficam e-mail e recuperação de outros serviços, depois estenda ao resto.</li>
    </ul>
    <p>A segurança da conta também depende do que você compartilha. Um áudio de WhatsApp pode ser clonado para imitar sua voz, como explica o guia de <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">deepfakes e como proteger a reputação</a>. Assistentes que agem no navegador, como a <a href="/artigos/chatgpt-no-chrome-extensao-oficial-abas-permissoes-e-cuidados">extensão do ChatGPT no Chrome</a>, pedem permissões que merecem leitura atenta. O histórico de conversas também guarda informação: veja como <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">apagar o histórico do Gemini</a>. E, se uma empresa o tratou mal depois de um golpe, o passo a passo de <a href="/artigos/reclamar-de-empresa-com-ia-consumidor-gov-br-passo-a-passo">reclamar pelo consumidor.gov.br</a> ajuda. Quem está começando pode ainda rever os <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">cinco erros comuns de quem começa a usar IA</a>.</p>
    <p>Comece hoje por uma coisa só: crie a chave de acesso no celular e ligue a verificação em duas etapas. Para ver mais cuidados práticos, leia também o guia de <a href="/artigos/comprar-na-black-friday-comparar-precos-evitar-golpe-e-arrependimento">compras na Black Friday sem cair em golpe</a> e a categoria de <a href="/categoria/iniciantes">IA para iniciantes</a>.</p>
  `,
  faq: [
    {
      question: "O que é uma chave de acesso (passkey)?",
      answer:
        "É uma alternativa à senha em que você confirma o login com digital, rosto ou PIN do aparelho. Segundo o Google, a chave não pode ser compartilhada, copiada nem anotada, o que a torna mais difícil de ser roubada por phishing. Os dados biométricos ficam no aparelho e não são enviados ao Google.",
    },
    {
      question: "Como criar uma passkey na conta Google?",
      answer:
        "Acesse myaccount.google.com/signinoptions/passkeys, toque em criar uma chave de acesso, confirme de novo e desbloqueie o aparelho quando ele pedir. Repita em cada aparelho que quiser usar. O Google informa que chaves novas podem levar até 7 dias para ficar disponíveis no login, conforme consulta de 21/10/2026.",
    },
    {
      question: "Passkey substitui a verificação em duas etapas?",
      answer:
        "Em login com passkey, o Google diz que o segundo passo é dispensado, porque a própria chave verifica o aparelho. Mesmo assim, manter a verificação em duas etapas ligada ajuda como proteção extra e como plano B, e os códigos de backup precisam estar guardados em lugar seguro.",
    },
    {
      question: "E se eu perder o celular com a chave de acesso?",
      answer:
        "Entre na conta por outro aparelho, abra Segurança e login, vá em Chaves de acesso e chaves de segurança e remova a chave do aparelho perdido. Em Android, também é possível sair da conta no aparelho em Seus dispositivos. Por isso vale ter a chave criada em dois aparelhos e os códigos de backup guardados.",
    },
    {
      question: "Passkey funciona em qualquer celular?",
      answer:
        "O Google cita Android 9 ou superior e iOS 16 ou superior, além de Windows 10, macOS Ventura, ChromeOS 109 e navegadores como Chrome, Safari, Edge e Firefox em versões recentes. Em aparelhos mais antigos, a alternativa é uma chave de segurança física compatível com FIDO2 ou a verificação em duas etapas por aplicativo autenticador.",
    },
  ],
};
