import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "chats-bloqueados-no-chatgpt-como-proteger-conversas-e-limites",
  title: "Chats bloqueados no ChatGPT: como proteger conversas e limites",
  seoTitle: "Chats bloqueados no ChatGPT: como funcionam",
  excerpt:
    "Veja como funcionam os chats bloqueados do ChatGPT com PIN, Face ID e Touch ID, quem recebe, onde não funcionam, o que o bloqueio não protege e como se organizar.",
  metaDescription:
    "Chats bloqueados no ChatGPT: PIN de 4 dígitos ou biometria, quais planos recebem, o que não pode ser trancado, o risco de redefinir o PIN e o que o recurso não protege.",
  category: "ferramentas",
  date: "2026-10-22",
  readTime: 7,
  imageQuery: "smartphone lock screen privacy padlock",
  seed: 563,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Chats bloqueados guardam conversas sensíveis em uma seção própria do ChatGPT, protegida por PIN de quatro dígitos ou por Face ID e Touch ID nos aparelhos compatíveis.",
    "O recurso esconde a conversa de quem pega o seu aparelho, mas, segundo a OpenAI, não cria criptografia de ponta a ponta nem muda por quanto tempo a conversa é guardada.",
    "Redefinir o PIN apaga de forma permanente os chats bloqueados, então vale cadastrar a biometria e guardar o código com cuidado.",
  ],
  content: `
    <p>Chats bloqueados são um recurso do ChatGPT que permite trancar uma conversa com PIN de quatro dígitos ou, em aparelhos compatíveis, com Face ID ou Touch ID. A conversa sai do histórico comum e vai para uma seção separada. Ele protege contra olhos curiosos no seu aparelho, mas não funciona como um cofre criptografado.</p>

    <p>A novidade começou a ser liberada em 20 de outubro de 2026, segundo a reportagem do <a href="https://techcrunch.com/2026/10/20/chatgpt-now-lets-you-lock-your-chats/" rel="noopener noreferrer" target="_blank">TechCrunch</a>, e pode demorar a aparecer na sua conta. Neste guia você vê como o bloqueio funciona, quais planos recebem, o que não dá para trancar, como ele se relaciona com a memória e o que ele não faz. O texto parte do que a imprensa reportou sobre o anúncio da OpenAI e foi escrito sem teste do recurso na prática.</p>

    <h2>O que são chats bloqueados no ChatGPT</h2>
    <p>Ao bloquear uma conversa, ela passa a ficar na seção Locked Chats (Chats Bloqueados), separada do histórico normal, das conversas fixadas e dos resultados de busca. Quem abrir o ChatGPT no seu celular ou computador não vê o conteúdo sem informar o PIN ou a biometria. A reportagem descreve o objetivo como manter conversas sensíveis privadas quando outras pessoas podem ter acesso à tela ou ao aparelho.</p>
    <p>Pense em situações comuns: você empresta o celular para o filho jogar, divide o computador em casa, projeta a tela numa reunião ou deixa o aparelho em cima da mesa no trabalho. Nesses momentos, um histórico cheio de dúvidas de saúde, finanças ou planos de mudança de emprego pode constranger. O bloqueio resolve exatamente esse risco do dia a dia, e só ele.</p>

    <h2>Como ativar: o que se sabe e o que ainda não foi detalhado</h2>
    <p>A reportagem do TechCrunch explica o que o recurso faz, mas não lista os toques exatos na interface e remete à central de ajuda da OpenAI. Como a liberação é gradual e os menus mudam entre celular e navegador, o caminho certo é procurar a opção de bloquear no menu da própria conversa e seguir as instruções que aparecerem na tela, em vez de confiar em um passo a passo de terceiros. Se a opção não aparecer, a sua conta provavelmente ainda não recebeu o recurso.</p>
    <p>Na primeira vez, você define o PIN de quatro dígitos. Em aparelhos que oferecem biometria, é possível usar Face ID ou Touch ID. Cadastre a biometria desde o início, e o motivo está mais abaixo, na parte sobre o PIN esquecido.</p>

    <h2>Quem recebe e onde o bloqueio não funciona</h2>
    <p>Segundo o TechCrunch, o recurso chega aos planos Free, Go, Plus, Pro, Business, Enterprise e Edu, e não está disponível no ChatGPT para Saúde (Healthcare). Para entender as diferenças entre os planos pagos, veja <a href="/artigos/chatgpt-plus-vale-a-pena-review-2026">ChatGPT Plus: vale a pena em 2026</a> e o texto sobre o <a href="/artigos/chatgpt-gratis-gpt-6-luna-e-intelligent-ui-o-que-muda">ChatGPT gratuito com GPT-6 e Intelligent UI</a>.</p>
    <p>Alguns tipos de conversa não podem ser trancados:</p>
    <ul class="checklist">
      <li>Chats temporários.</li>
      <li>Chats arquivados.</li>
      <li>Chats em grupo.</li>
      <li>Chats criados a partir de um link compartilhado.</li>
      <li>Chats com tarefas agendadas.</li>
      <li>Chats com gravações de reunião.</li>
    </ul>
    <p>Essa lista vale para a liberação inicial e pode mudar. Se você trabalha com tarefas agendadas ou reuniões gravadas, não conte com o bloqueio para esse material.</p>

    <h2>Chat bloqueado, chat temporário e chat comum</h2>
    <table>
      <thead>
        <tr><th>Tipo de chat</th><th>Fica no histórico?</th><th>Dá para voltar depois?</th><th>Melhor uso</th></tr>
      </thead>
      <tbody>
        <tr><td>Comum</td><td>Sim, visível a quem abrir o app</td><td>Sim</td><td>Assuntos do dia a dia</td></tr>
        <tr><td>Bloqueado</td><td>Em seção própria, atrás de PIN ou biometria</td><td>Sim, após desbloquear</td><td>Conversa pessoal que você quer manter</td></tr>
        <tr><td>Temporário</td><td>Não aparece no histórico</td><td>Não</td><td>Consulta que você quer descartar</td></tr>
      </tbody>
    </table>
    <p>A reportagem destaca justamente essa diferença: o chat temporário não fica guardado para você voltar, e o bloqueado continua acessível sempre que você desbloquear. Escolher o tipo certo evita tanto a exposição quanto a perda de uma conversa que você queria manter.</p>

    <h2>Memória própria para os chats bloqueados</h2>
    <p>Quando a memória do ChatGPT está ativada, os chats bloqueados passam a ter uma memória separada, compartilhada só entre eles. Novas mensagens nesses chats podem atualizar essa memória específica, mas não a memória regular. Assim, o que você contou em uma conversa trancada, como um problema de saúde, não deveria aparecer em respostas das conversas comuns.</p>
    <p>Há um ponto de atenção: o que o ChatGPT já tinha memorizado antes de você trancar a conversa continua na memória geral. Se você já falou do assunto em chats comuns, revise o que está salvo. Para entender o que é memória em assistentes de IA e como ela muda a experiência, leia <a href="/artigos/memoria-longa-em-ia-assistente-que-lembra-de-voce">memória longa em IA</a>.</p>

    <h2>O que o bloqueio não faz</h2>
    <p>Este é o trecho mais importante do texto. Segundo a reportagem, a própria OpenAI avisa que bloquear um chat:</p>
    <ul>
      <li>não cria criptografia de ponta a ponta nem um cofre criptografado separado;</li>
      <li>não muda por quanto tempo a conversa é retida;</li>
      <li>não remove o que o ChatGPT já havia memorizado antes do bloqueio;</li>
      <li>não altera a configuração "Melhorar o modelo para todos", que define se suas conversas podem ser usadas para treinar modelos.</li>
    </ul>
    <p>Em outras palavras, o bloqueio é uma tranca na porta da sala, não um cofre blindado. Ele controla quem abre a conversa no seu aparelho, mas não diz como a informação é armazenada e tratada nos servidores. Se o conteúdo é realmente sensível, a regra mais segura é nem colocá-lo na conversa. O texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega à IA sem perceber</a> aprofunda esse ponto.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Atenção</span>
      <p>Redefinir o PIN apaga de forma permanente todos os chats bloqueados, os arquivos e os demais conteúdos protegidos pelo PIN antigo. Sem biometria cadastrada, esquecer o código significa perder as conversas trancadas.</p>
    </div>

    <h2>Exemplo prático: a rotina da Renata</h2>
    <p>A Renata é gerente de loja em Curitiba e usa o ChatGPT no celular, que muitas vezes fica sobre o balcão. Ela tem conversas de trabalho (escalas, textos para clientes), conversas pessoais (planejamento da viagem de aniversário do marido) e uma dúvida sobre uma proposta de emprego em outra empresa. Ela tranca as duas últimas, cadastra a biometria e anota o PIN no gerenciador de senhas. As conversas de trabalho ficam no histórico comum.</p>
    <p>Mas há um limite que ela respeita: nenhum dado de clientes, como CPF ou telefone, vai para o chat, trancado ou não. O artigo sobre <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">colar dados da empresa no ChatGPT</a> explica por que a regra do trabalho vale mais do que qualquer recurso de bloqueio.</p>

    <h2>Prompts para usar com cabeça fria</h2>
    <p>Mesmo com o chat trancado, escreva de modo a expor o mínimo. Dois modelos:</p>
    <pre><code>Preciso conversar sobre uma decisão de carreira. Vou descrever a situação sem citar nomes de pessoas ou empresas. Faça perguntas, uma por vez, para me ajudar a comparar as duas opções.</code></pre>
    <pre><code>Resuma em 5 tópicos tudo o que você tem salvo na sua memória sobre mim, para eu revisar o que quero manter e o que quero apagar.</code></pre>
    <p>O segundo prompt ajuda a auditar a memória antes de trancar uma conversa. Para ir além, o guia de <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> compara como cada assistente trata esses controles.</p>

    <h2>Como outras ferramentas tratam o histórico</h2>
    <p>O bloqueio é uma camada a mais, mas o controle principal da privacidade está nas configurações de dados. No Gemini, o <a href="https://support.google.com/gemini/answer/13594961" rel="noopener noreferrer" target="_blank">Central de Privacidade dos Apps Gemini</a> informa que, com a Atividade ativada, as conversas são salvas e usadas para melhorar serviços do Google, com exclusão automática depois de 18 meses por padrão (opções de 3 ou 36 meses), e que chats temporários ficam com a conta por 72 horas e não são usados para treinar modelos. A regra geral serve para qualquer assistente: leia as opções de histórico e treinamento antes de colocar assunto delicado.</p>
    <p>Se um dia você precisar exercer seus direitos sobre dados pessoais, a <a href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados" rel="noopener noreferrer" target="_blank">ANPD</a> informa que os pedidos são feitos ao controlador (por meio do encarregado) e que, se o direito não for atendido, é possível reclamar à autoridade. Para trabalhar com IA com mais segurança, use o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA com segurança</a>.</p>

    <h2>Erros comuns</h2>
    <ul class="checklist">
      <li>Achar que o chat trancado é criptografado ou que sai dos servidores.</li>
      <li>Redefinir o PIN sem saber que isso apaga as conversas bloqueadas.</li>
      <li>Trancar uma conversa e esquecer a configuração de treinamento do modelo.</li>
      <li>Colar dados de clientes ou da empresa e confiar no bloqueio como proteção.</li>
      <li>Reforçar a segurança só do app e deixar a conta sem proteção: ative também a <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">chave de acesso (passkey)</a>.</li>
    </ul>

    <h2>Vale a pena usar?</h2>
    <p>Vale, principalmente se você divide aparelho ou usa o ChatGPT para assuntos pessoais. É grátis, rápido e resolve o risco de exposição acidental. Só não trate como política de privacidade. Para acompanhar outras novidades do assistente, como a extensão para navegador, leia <a href="/artigos/chatgpt-no-chrome-extensao-oficial-abas-permissoes-e-cuidados">ChatGPT no Chrome</a> e a notícia original sobre os <a href="/noticias/chatgpt-chats-bloqueados-pin-face-id">chats bloqueados com PIN, Face ID e Touch ID</a>. Continue na categoria <a href="/categoria/ferramentas">Ferramentas de IA</a>.</p>
  `,
  faq: [
    {
      question: "O que são chats bloqueados no ChatGPT?",
      answer:
        "É um recurso que permite trancar uma conversa com PIN de quatro dígitos ou, em aparelhos compatíveis, com Face ID ou Touch ID. A conversa vai para uma seção separada do histórico e das buscas, e só abre depois do desbloqueio.",
    },
    {
      question: "Chats bloqueados valem para o plano gratuito?",
      answer:
        "Segundo o TechCrunch, o recurso chega aos planos Free, Go, Plus, Pro, Business, Enterprise e Edu, mas não ao ChatGPT para Saúde. A liberação é gradual, então a opção pode demorar alguns dias a aparecer na sua conta.",
    },
    {
      question: "O chat bloqueado é criptografado?",
      answer:
        "Não. A OpenAI avisa que o bloqueio não cria criptografia de ponta a ponta nem um cofre separado, não muda o tempo de retenção da conversa e não altera a opção de melhorar o modelo. Ele só controla quem abre a conversa no aparelho.",
    },
    {
      question: "O que acontece se eu esquecer o PIN?",
      answer:
        "Redefinir o PIN apaga de forma permanente todos os chats bloqueados, os arquivos e o conteúdo protegido pelo PIN antigo. Por isso, cadastre Face ID ou Touch ID quando possível e guarde o código em um gerenciador de senhas.",
    },
    {
      question: "Qual a diferença entre chat bloqueado e chat temporário?",
      answer:
        "O chat temporário não fica guardado para você voltar depois. O bloqueado continua salvo e acessível sempre que você desbloquear com PIN ou biometria. Use o temporário para consultas descartáveis e o bloqueado para conversas que você quer manter, mas longe de olhares curiosos.",
    },
  ],
};
