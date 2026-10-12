import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes",
  title: "Mensagem suspeita: como usar IA para checar e evitar golpes",
  seoTitle: "Mensagem suspeita: usar IA para checar golpes",
  excerpt:
    "Recebeu mensagem suspeita? Veja como usar IA para analisar sinais de golpe sem expor seus dados, quais limites ela tem e as regras do CERT.br que valem mais.",
  metaDescription:
    "Aprenda a usar IA para checar mensagem suspeita: o que colar e o que nunca colar, sinais de golpe, limites da ferramenta e as dicas oficiais do CERT.br para se proteger.",
  category: "iniciantes",
  articleSubcategory: "vida-pratica",
  date: "2026-10-12",
  readTime: 7,
  imageQuery: "person reading suspicious text smartphone",
  seed: 224,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA pode apontar sinais de golpe numa mensagem, como urgência, pedido de pagamento antecipado e links estranhos, mas ela não prova se algo é verdadeiro ou falso.",
    "Antes de colar qualquer coisa num assistente, apague nomes, números de documento, códigos e dados bancários, porque a Cartilha do CERT.br recomenda tirar informações sensíveis do comando.",
    "A regra de ouro continua sendo confirmar por outro canal oficial e digitar o endereço do site no navegador, em vez de clicar no link recebido.",
  ],
  content: `
    <p>Para checar uma mensagem suspeita com IA, cole o texto sem dados pessoais num assistente e peça que ele liste os sinais de golpe, como urgência, pedido de dinheiro adiantado e link estranho. A IA ajuda a organizar a dúvida, mas não é juiz: quem decide é você, depois de confirmar por um canal oficial. As dicas do <a href="https://cartilha.cert.br/dicas-rapidas/" rel="noopener noreferrer" target="_blank">CERT.br</a> (verificado em 12/10/2026) continuam valendo mais do que qualquer resposta de chatbot.</p>
    <p>Golpe por mensagem é quase sempre um jogo de pressa: o criminoso quer que você aja antes de pensar. Um assistente de IA pode servir como uma segunda opinião calma nesse momento, desde que você saiba o que enviar, o que ignorar e onde a ferramenta falha. Neste guia você aprende um método de quatro passos, com prompts prontos e uma lista de limites.</p>

    <h2>O que a IA consegue (e não consegue) fazer contra golpes</h2>
    <p>A IA é boa em reconhecer padrões de texto. Se você colar uma mensagem que diz "seu CPF será bloqueado hoje, clique para regularizar", ela costuma identificar a urgência, a ameaça e o pedido de clique, três marcas clássicas de golpe. Também explica termos que você não conhece e sugere perguntas para fazer ao suposto remetente.</p>
    <p>O que ela não faz é saber se aquele link está ativo, se aquela conta bancária pertence a um criminoso ou se o seu primo realmente mudou de número. Assistentes comuns não acessam bancos de dados de fraudes em tempo real e podem errar com muita confiança. O guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> explica por que a resposta pode soar certa e estar errada.</p>
    <table>
      <thead><tr><th>A IA ajuda a</th><th>A IA não consegue</th></tr></thead>
      <tbody>
        <tr><td>Apontar urgência, ameaça e promessa exagerada no texto</td><td>Garantir que um link é seguro ou perigoso</td></tr>
        <tr><td>Explicar como funciona um tipo de golpe</td><td>Confirmar quem enviou a mensagem</td></tr>
        <tr><td>Sugerir perguntas para verificar a pessoa</td><td>Substituir ligar para o banco ou para o familiar</td></tr>
        <tr><td>Redigir uma resposta educada de recusa</td><td>Bloquear ou denunciar o número por você</td></tr>
      </tbody>
    </table>

    <h2>Os sinais de golpe que o CERT.br recomenda observar</h2>
    <p>Antes de qualquer ferramenta, conheça os sinais oficiais. Nas dicas rápidas da Cartilha de Segurança para Internet, o CERT.br orienta a desconfiar de mensagens recebidas mesmo de conhecidos, porque podem vir de perfis falsos ou invadidos. Também manda desconsiderar mensagens de instituições bancárias com as quais você não tem relação e desconfiar de promessas de dinheiro em quantias exageradas, pedidos de sigilo, urgência e erros de ortografia. Outro alerta: pedir pagamento antecipado para você receber um valor maior depois.</p>
    <ul class="checklist">
      <li>Urgência: "hoje", "agora", "última chance".</li>
      <li>Pedido de sigilo: "não conte a ninguém".</li>
      <li>Dinheiro fácil ou prêmio que você não pediu.</li>
      <li>Pagamento adiantado para liberar um valor maior.</li>
      <li>Link ou código que você não solicitou.</li>
      <li>Erros de ortografia e tom diferente do habitual da pessoa.</li>
    </ul>
    <p>O texto sobre <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">deepfakes e conteúdo falso</a> cobre outro lado do problema, o de áudios e vídeos fabricados. A notícia sobre o <a href="/noticias/golpe-voz-ia-clonada-pix-compra-veiculo-familiar">golpe com voz clonada por IA mirando compra de carro e Pix</a> mostra por que ouvir uma voz conhecida não basta para confirmar um pedido de dinheiro.</p>

    <h2>Método de 4 passos para checar uma mensagem com IA</h2>
    <h3>Passo 1: pare antes de clicar ou responder</h3>
    <p>Não responda, não clique e não ligue para o número da mensagem. O CERT.br recomenda não responder mensagens com tentativas de golpe. Dar tempo a si mesmo já derrota metade dos golpes, que dependem da pressa.</p>
    <h3>Passo 2: limpe os dados pessoais antes de colar</h3>
    <p>A Cartilha traz uma seção sobre inteligência artificial com a frase "IA é assistente, o responsável é você" e perguntas úteis, como "Tirou as informações sensíveis do prompt?" e "Checou a resposta?" (conforme a <a href="https://cartilha.cert.br/fasciculos/" rel="noopener noreferrer" target="_blank">página de fascículos</a>). Troque nomes por "[nome]", apague CPF, número de cartão, códigos recebidos por SMS e o endereço completo. Mantenha o texto da mensagem e a forma como o link aparece, sem clicar nele.</p>
    <h3>Passo 3: peça uma análise estruturada</h3>
    <pre><code>Vou colar uma mensagem que recebi por [WhatsApp/SMS/e-mail]. Não sei se é golpe. Analise e responda: 1) quais sinais de golpe aparecem; 2) quais sinais indicam que pode ser legítima; 3) o que eu devo verificar por conta própria, por um canal oficial; 4) o que eu NÃO devo fazer. Não afirme que é golpe com certeza e lembre que não consegue abrir links.

Mensagem: [cole aqui, sem dados pessoais]</code></pre>
    <h3>Passo 4: confirme por outro canal</h3>
    <p>Use o resultado como lista de verificação. Para acessar o banco, digite o endereço no navegador ou use o aplicativo oficial, como recomenda o CERT.br. Se a mensagem diz ser de um familiar, ligue para o número que você já tinha. Se diz ser de uma empresa, procure o canal no site oficial, digitado por você.</p>

    <h2>Exemplo prático: o falso aviso de pendência</h2>
    <p>Imagine que Marina, professora em Recife, recebe um SMS: "Sua conta tem pendência de R$ 349,90. Regularize hoje para evitar bloqueio: [link]". Ela não clica. Cola o texto na IA, trocando o valor por "[valor]", e usa o prompt acima. A resposta aponta urgência, ameaça de bloqueio, ausência do nome dela e link encurtado. Também sugere abrir o aplicativo do banco direto e olhar se existe alguma pendência real.</p>
    <p>Marina abre o app, não vê nada e apaga o SMS. O ganho aqui não foi a IA "detectar" o golpe com certeza, e sim organizar o raciocínio e lembrá-la do caminho seguro. Se a pendência fosse verdadeira, ela a resolveria dentro do aplicativo, nunca pelo link recebido. Para cuidar do dinheiro de forma geral, veja <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">como usar IA para organizar finanças pessoais</a>.</p>

    <h2>O que nunca colar num assistente de IA</h2>
    <p>Quem tenta checar um golpe pode, sem querer, entregar o que o golpista queria. Não cole senhas, códigos de verificação, número completo de cartão ou de documento, fotos de documentos, chaves Pix completas nem prints com dados de conta. Se o assistente for gratuito, lembre que a política de uso dos dados varia, assunto que o artigo <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> detalha. Na dúvida, descreva a situação em palavras em vez de colar o conteúdo.</p>
    <p>Atenção também a golpes que usam a própria IA como isca. Um exemplo é a notícia do Portal da AI sobre a <a href="/noticias/sec-golpe-ia-trading-bots-whatsapp-15-milhoes">acusação da SEC contra um golpe de robôs de negociação por IA</a>. Antes de instalar qualquer ferramenta que prometa lucro automático, aplique o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança para ferramentas de IA</a>.</p>

    <h2>Erros comuns ao usar IA para checar golpes</h2>
    <ul>
      <li>Tratar a resposta da IA como veredito final e ignorar a confirmação oficial.</li>
      <li>Colar dados sensíveis no prompt.</li>
      <li>Clicar no link "só para ver" antes de analisar.</li>
      <li>Acreditar que uma mensagem bem escrita é legítima: golpistas também usam IA para escrever sem erros.</li>
      <li>Repassar o alerta em cadeia sem checar a fonte, o que o próprio CERT.br desaconselha ao orientar a verificar a fonte original antes de repassar uma notícia.</li>
    </ul>
    <p>Esse último ponto é importante porque o texto de golpe deixou de ter erros de português. Ortografia perfeita não prova nada, e por isso a regra de confirmar por canal oficial pesa mais do que a análise do texto. Se você está começando com IA no dia a dia, leia também os <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">5 erros comuns de quem está começando</a>.</p>

    <h2>Hábitos que protegem mais do que qualquer ferramenta</h2>
    <p>Ative a verificação em duas etapas nas contas importantes e nunca repasse códigos de autenticação, outra recomendação do CERT.br. Combine com a família uma palavra de segurança para pedidos de dinheiro por mensagem ou áudio. Desconfie de contatos que mudam de número e pedem Pix urgente. E mantenha o hábito de digitar o endereço do banco em vez de seguir links.</p>
    <p>Se a sua dúvida é mais ampla e você ainda está entendendo como a IA funciona, o <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">guia completo de inteligência artificial</a> e o texto sobre <a href="/artigos/meta-ai-no-whatsapp-o-que-faz-privacidade-e-como-usar">Meta AI no WhatsApp</a> mostram o que o assistente do aplicativo acessa. Para mais conteúdo do nível iniciante, visite a categoria <a href="/categoria/iniciantes">IA para Iniciantes</a>.</p>
  `,
  faq: [
    {
      question: "A IA consegue dizer se uma mensagem é golpe?",
      answer:
        "Ela consegue apontar sinais comuns, como urgência, ameaça, pedido de pagamento antecipado e link suspeito. Mas não verifica o remetente nem testa links e pode errar. Use a análise como ajuda para pensar e sempre confirme por um canal oficial, como o aplicativo do banco ou um telefone que você já conhecia.",
    },
    {
      question: "É seguro colar uma mensagem suspeita no ChatGPT ou em outro assistente?",
      answer:
        "É mais seguro se você apagar dados pessoais antes. A Cartilha do CERT.br pergunta se você tirou as informações sensíveis do prompt. Nunca cole senhas, códigos de verificação, números de cartão ou documentos, e confira a política de dados da ferramenta que você usa.",
    },
    {
      question: "Devo clicar no link para ver se é golpe?",
      answer:
        "Não. O CERT.br orienta ter cuidado com links em e-mails e mensagens, mesmo de conhecidos, e acessar sites digitando o endereço no navegador. Para o banco, digite a URL ou use o aplicativo oficial. Se quiser entender o link, mostre-o à IA como texto, sem abrir.",
    },
    {
      question: "O que fazer se eu cair em um golpe por mensagem?",
      answer:
        "Aja rápido: contate o banco pelo canal oficial para bloquear contas e cartões, troque senhas, ative a verificação em duas etapas e registre um boletim de ocorrência. Se sua conta de mensagens foi clonada, fale com a empresa do aplicativo. Para orientações jurídicas ou de ressarcimento, procure um profissional.",
    },
    {
      question: "Golpistas usam IA para criar mensagens mais convincentes?",
      answer:
        "Sim, a própria Cartilha do CERT.br alerta que a IA pode ser usada para aplicar golpes. Textos sem erros, vozes clonadas e vídeos falsos exigem mais atenção: em vez de julgar pela aparência, confirme o pedido por outro canal e desconfie de qualquer pressa para pagar ou informar um código.",
    },
  ],
};
