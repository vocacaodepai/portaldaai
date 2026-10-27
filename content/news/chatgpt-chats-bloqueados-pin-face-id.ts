import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "chatgpt-chats-bloqueados-pin-face-id",
  title: "ChatGPT ganha chats bloqueados com PIN, Face ID e Touch ID",
  summary:
    "A OpenAI liberou o recurso Chats Bloqueados no ChatGPT, com PIN de quatro dígitos ou biometria, para esconder conversas sensíveis de quem pegar seu aparelho.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/20/chatgpt-now-lets-you-lock-your-chats/",
  date: "2026-10-20",
  publishedAt: "2026-10-20T19:22:23-03:00",
  imageQuery: "OpenAI logo",
  topic: "lancamentos",
  content: `
    <p>A OpenAI começou a liberar nesta terça-feira (20) o recurso de chats bloqueados no ChatGPT, que permite proteger conversas sensíveis com um PIN de quatro dígitos ou, em aparelhos compatíveis, com Face ID ou Touch ID. A novidade foi detalhada em reportagem do <a href="https://techcrunch.com/2026/10/20/chatgpt-now-lets-you-lock-your-chats/" rel="noopener noreferrer nofollow" target="_blank">TechCrunch</a> e vale para todos os planos, inclusive o gratuito.</p>

    <p>A ideia é simples: você escolhe uma conversa, a tranca, e ela sai do histórico comum. Quem pegar o seu celular emprestado, ou olhar para a sua tela no meio de uma reunião, não vai ver o conteúdo sem passar pela senha ou pela biometria. É um recurso pequeno, mas que mexe com algo cada vez mais comum: o uso do ChatGPT para assuntos pessoais.</p>

    <h2>Como funcionam os chats bloqueados</h2>
    <p>Ao bloquear uma conversa, o ChatGPT a move para uma seção própria, chamada Locked Chats (Chats Bloqueados), separada do histórico normal, das conversas fixadas e dos resultados de busca. Isso significa que o chat trancado não aparece quando alguém procura por um termo no histórico, o que reduz o risco de exposição acidental.</p>

    <p>O acesso é protegido por um PIN de quatro dígitos ou por Face ID e Touch ID, nos dispositivos que oferecem esses recursos. Segundo a OpenAI, o recurso serve para situações como conversar sobre algo pessoal, planejar uma surpresa ou entregar o aparelho a amigos e familiares para mostrar algo em outra conversa, sem correr o risco de eles verem o restante.</p>

    <h2>Diferença para o chat temporário</h2>
    <p>O ChatGPT já tinha o chat temporário, uma sessão separada que não aparece no histórico. A diferença é que o chat temporário não fica guardado para você voltar depois, enquanto o chat bloqueado continua acessível a qualquer momento, desde que você desbloqueie. Na prática, o temporário serve para uma consulta que você quer descartar, e o bloqueado, para uma conversa que você quer manter, mas longe de olhares curiosos.</p>

    <h2>Memória própria para os chats trancados</h2>
    <p>Se a função de memória do ChatGPT estiver ativada, a seção de chats bloqueados passa a ter uma memória própria, compartilhada apenas entre as conversas trancadas. Novas mensagens nesses chats podem atualizar essa memória específica, mas não a memória regular. Assim, o que você contou num chat trancado não aparece nas conversas comuns. Já o que o ChatGPT tinha memorizado antes de você trancar o chat continua na memória geral.</p>

    <h2>O que o recurso não faz</h2>
    <p>Aqui está o ponto que merece atenção. A própria OpenAI avisa que bloquear um chat não cria criptografia de ponta a ponta nem um cofre criptografado separado. Também não muda por quanto tempo a conversa é retida, não apaga o que o ChatGPT já havia memorizado antes do bloqueio e não altera a configuração "Melhorar o modelo para todos", que define se suas conversas podem ser usadas no treinamento.</p>

    <p>O TechCrunch resume o limite do recurso: ele restringe quem consegue abrir a conversa no seu aparelho, mas não responde a perguntas sobre como a informação sensível é armazenada e tratada. Em outras palavras, é uma tranca na porta da sala, não um cofre blindado.</p>

    <div class="callout-box">
      <span class="callout-label">Atenção</span>
      <p>Redefinir o PIN apaga de forma permanente todos os chats bloqueados, os arquivos e os demais conteúdos protegidos pelo PIN antigo. Se você esquecer o código e não tiver biometria cadastrada, perde as conversas trancadas.</p>
    </div>

    <h2>Onde não funciona e quem recebe</h2>
    <p>O bloqueio não está disponível para chats temporários, arquivados, em grupo, abertos por link compartilhado, com tarefas agendadas ou com gravações de reunião. O recurso chega aos planos Free, Go, Plus, Pro, Business, Enterprise e Edu, e não está disponível no ChatGPT para Saúde (Healthcare). A liberação começou na terça-feira, então algumas contas podem demorar a receber a opção.</p>

    <p>O TechCrunch lembra ainda que o uso do ChatGPT para conversas pessoais cresce, tendência que já foi tema de reportagem da BBC. É por isso que a OpenAI vem mexendo em recursos de privacidade e de controle do histórico, como mostramos quando a empresa liberou um recurso de finanças pessoais ligado ao Plaid, em <a href="/noticias/chatgpt-finances-gratis-plaid-privacidade">ChatGPT Finances e a privacidade dos dados bancários</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa o ChatGPT para trabalhar, empreender ou conversar sobre a vida, provavelmente já escreveu coisas que não gostaria de ver na tela de outra pessoa: um plano de demissão, uma proposta para um cliente, uma dúvida sobre saúde ou finanças, um rascunho de currículo para outra vaga. Quem divide o computador de casa ou entrega o celular para os filhos jogarem sabe como isso pode dar problema. O bloqueio resolve esse risco do dia a dia, de olhos alheios, sem custo e em poucos toques.</p>

    <p>Mas é importante não confundir conveniência com segurança de dados. O chat trancado continua nos servidores da OpenAI, continua sujeito à mesma política de retenção e, se você deixou ligada a opção de melhorar o modelo, continua podendo entrar no treinamento. Se o conteúdo é realmente sensível, como dados de clientes ou informações da empresa, o caminho certo é não colar esse material na conversa, e não apenas escondê-lo depois. Vale reler o que explicamos em <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">colar dados da empresa no ChatGPT: o que o funcionário pode fazer</a> e em <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a>.</p>

    <h2>Como aproveitar na prática</h2>
    <ul>
      <li>Tranque as conversas pessoais ou de planejamento que você não quer deixar à vista, como surpresas, finanças da família e saúde.</li>
      <li>Cadastre também a biometria, para não depender só do PIN, já que redefini-lo apaga tudo o que estava trancado.</li>
      <li>Revise a configuração de treinamento do modelo nas opções de dados do ChatGPT, porque o bloqueio não mexe nela.</li>
      <li>Para dados de clientes e documentos da empresa, evite colar o conteúdo e siga as regras do seu trabalho sobre ferramentas de IA.</li>
      <li>Se você ainda está decidindo qual assistente usar, compare as opções em <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> e veja o que cada plano entrega em <a href="/artigos/chatgpt-plus-vale-a-pena-review-2026">ChatGPT Plus: vale a pena em 2026</a>.</li>
    </ul>

    <p>Para quem está começando a escolher ferramentas de IA com mais critério, o roteiro de perguntas de <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher uma ferramenta de IA com segurança</a> ajuda a olhar justamente para o que o recurso de bloqueio não cobre: retenção, treinamento e destino dos seus dados.</p>

    <h2>O que acompanhar</h2>
    <p>Como o recurso está em liberação gradual, é possível que ele ainda não apareça na sua conta hoje. A OpenAI não detalhou, até a publicação da reportagem, uma data para chegar a todos os usuários nem planos de adicionar criptografia a esses chats. Quem depende de privacidade forte deve acompanhar se a empresa vai oferecer, mais adiante, proteções além da tranca na tela. A fonte original do caso é a reportagem do TechCrunch, assinada por Aisha Malik, que reúne as explicações da própria OpenAI sobre o que o recurso faz e o que deixa de fazer.</p>
  `,
  faq: [
    {
      question: "Como bloqueio um chat no ChatGPT?",
      answer:
        "O chat trancado vai para a seção Chats Bloqueados e é protegido por PIN de quatro dígitos ou por Face ID e Touch ID, nos aparelhos compatíveis. O recurso está em liberação gradual desde terça-feira (20).",
    },
    {
      question: "Chat bloqueado é o mesmo que chat temporário?",
      answer:
        "Não. O temporário não aparece no histórico e não fica guardado para você voltar. O bloqueado continua acessível a qualquer momento, só que atrás de PIN ou biometria.",
    },
    {
      question: "O bloqueio deixa o chat criptografado?",
      answer:
        "Não. Segundo a OpenAI, o recurso não cria criptografia de ponta a ponta, não muda o tempo de retenção e não altera a opção de melhorar o modelo para todos.",
    },
  ],
};
