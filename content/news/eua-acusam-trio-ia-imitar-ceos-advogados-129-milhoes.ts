import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "eua-acusam-trio-ia-imitar-ceos-advogados-129-milhoes",
  title: "EUA acusam trio de usar IA para imitar CEOs e desviar US$ 129 milhões",
  summary:
    "Promotoria de Nova York diz que três pessoas clonaram voz e imagem de CEOs com IA, fingiram ser advogados e levaram US$ 129 milhões de empresas pelo mundo.",
  author: "Bruno Danello",
  sourceName: "Associated Press, SecurityWeek",
  sourceUrl: "https://www.securityweek.com/3-charged-in-scheme-to-use-ai-to-impersonate-ceos-and-attorneys-to-steal-129-million/",
  date: "2026-11-09",
  publishedAt: "2026-11-09T09:31:00-03:00",
  topic: "seguranca",
  imageQuery: "Daniel Patrick Moynihan United States Courthouse",
  content: `
    <p>A Procuradoria federal do Distrito Sul de Nova York, nos Estados Unidos, acusou formalmente três pessoas de montar um esquema que usava inteligência artificial para se passar por presidentes de empresas e por advogados de grandes escritórios. Segundo a acusação, apresentada num tribunal federal de Nova York e divulgada pela Associated Press em 5 de novembro, o grupo tirou cerca de US$ 129 milhões de companhias espalhadas pelo mundo, convencendo funcionários do financeiro a fazer transferências que pareciam autorizadas pelo próprio chefe.</p>

    <p>Os acusados são Jacob Soall, de 41 anos, Sharon Hazan, de 54, e Guy Sheetrit, de 42. Eles respondem por fraude eletrônica (wire fraud), roubo de identidade qualificado e lavagem de dinheiro, num total de sete acusações. Os três foram presos entre junho e setembro, e o processo ainda estava sob sigilo na data da reportagem, por isso os nomes dos advogados de defesa não tinham sido divulgados. Até aqui são acusações: ninguém foi condenado neste caso.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Daniel_Patrick_Moynihan_U.S._Courthouse%2C_Manhattan%2C_New_York_%287237347688%29.jpg" alt="Fachada do tribunal federal Daniel Patrick Moynihan, em Manhattan, Nova York" loading="lazy" />
      <figcaption>Tribunal federal Daniel Patrick Moynihan, em Manhattan, sede da Justiça federal do Distrito Sul de Nova York. Foto: Ken Lund / Wikimedia Commons (CC BY-SA 2.0)</figcaption>
    </figure>

    <h2>Como funcionava o golpe, passo a passo</h2>
    <p>O roteiro descrito pela promotoria é conhecido de quem acompanha fraudes corporativas, mas ganhou uma camada nova com a IA. O alvo quase sempre era o departamento de contabilidade. Primeiro chegava um e-mail que parecia vir do CEO da empresa, pedindo ajuda com uma transação financeira confidencial. Em seguida, o grupo marcava uma ligação ou videochamada em que a IA imitava a voz do executivo e, em alguns casos, também a imagem dele na tela.</p>
    <p>Com a confiança conquistada, o funcionário era orientado a procurar um advogado de um escritório grande, que supostamente cuidava da operação. Esse advogado também era falso, interpretado pelo próprio grupo. Segundo a acusação, Soall se especializou em fingir ser advogado britânico e usava um roteiro escrito à mão, intitulado "Lawyer Call" (algo como "ligação do advogado"), para soar convincente. O falso advogado então passava as instruções para transferir valores altos para contas bancárias em vários países.</p>
    <p>Depois de cair nas contas, o dinheiro era convertido em criptomoeda para esconder a origem e dividido entre os três e outras pessoas envolvidas. Ainda segundo a promotoria, o grupo mirou milhares de empresas ao longo de mais de um ano e meio. Entre as vítimas citadas estão sistemas de hospitais no Missouri e na Califórnia, um banco em Rhode Island, uma fintech no Reino Unido, uma gestora de fundos em Massachusetts e uma fabricante de ração para animais na Flórida.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">O que diz a acusação</span>
      <p>Cada acusação de fraude eletrônica e de lavagem de dinheiro pode render até 20 anos de prisão. O roubo de identidade qualificado tem pena de até 2 anos. Os réus vêm de Espanha, Reino Unido, Israel e Emirados Árabes Unidos, e Hazan já tinha sido condenado em 2008, num tribunal de Nova York, por conspiração para fraude bancária.</p>
    </div>

    <h2>Por que o caso chama atenção</h2>
    <p>O golpe do "falso CEO" existe há anos e costumava depender só de e-mail. O que muda aqui é a escala e a etapa de confirmação. Antes, um funcionário desconfiado podia pedir para falar com o chefe e desmontar a fraude. Com voz e rosto gerados por IA, a própria ligação de checagem virou parte do golpe. É o mesmo padrão de outros casos que já noticiamos, como o do <a href="/noticias/golpe-voz-ia-banco-italiano-fideuram-95-milhoes">banco italiano Fideuram, que perdeu 95 milhões de euros com voz clonada</a>.</p>
    <p>O FBI, que participou do caso, disse por meio do diretor-assistente James C. Barnacle Jr. que a investigação mostra como tecnologia avançada pode ser usada para fraudes em grande escala, e que a polícia federal americana está adaptando as próprias capacidades para ir atrás de quem transforma essas ferramentas em arma. Os apelidos usados pelo grupo, segundo a acusação, incluíam "Rocky Balboa", "Superman Cash" e "Fat Boy".</p>
    <p>Outro detalhe relevante é que a IA não foi usada para invadir nenhum sistema. Não há relato de senha roubada nem de servidor comprometido. O ataque foi todo em cima de pessoas: um e-mail bem escrito, uma voz familiar, um advogado de prestígio e um pedido de sigilo. A tecnologia serviu para tornar a mentira mais crível, não para quebrar uma barreira técnica.</p>

    <h2>Por que isso importa para você</h2>
    <p>Quem tem empresa no Brasil, mesmo pequena, está exposto à mesma lógica. Aqui o golpe costuma chegar por áudio ou chamada de WhatsApp, com alguém que soa como o dono, o sócio ou o contador pedindo um Pix urgente e "sem comentar com ninguém". As ferramentas de clonagem de voz ficaram baratas e precisam de pouca gravação, e um vídeo de palestra ou um story no Instagram já pode servir de matéria-prima.</p>
    <p>A defesa mais eficaz continua sendo de processo, não de tecnologia. Três regras simples cortam boa parte do risco:</p>
    <ul>
      <li><strong>Confirme por outro canal.</strong> Pedido de transferência fora do normal se confirma ligando de volta para o número que já está salvo, nunca pelo contato que fez o pedido.</li>
      <li><strong>Desconfie de sigilo e urgência juntos.</strong> "É confidencial" somado a "precisa sair hoje" é o sinal mais comum desse tipo de fraude.</li>
      <li><strong>Exija duas aprovações.</strong> Pagamentos acima de um valor combinado devem passar por duas pessoas, e nenhuma ordem por voz ou vídeo dispensa essa etapa.</li>
    </ul>
    <p>Na família vale a mesma lógica. Nosso guia sobre o <a href="/artigos/golpe-da-voz-clonada-como-se-proteger-com-palavra-da-familia-e-checagem">golpe da voz clonada e a palavra-chave da família</a> mostra como combinar uma senha simples para confirmar pedidos de dinheiro. Também explicamos como <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">identificar deepfakes e proteger sua reputação</a> e como <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">usar a própria IA para checar uma mensagem suspeita</a> antes de agir.</p>

    <h2>O que fazer se o dinheiro já saiu</h2>
    <p>No caso americano, o dinheiro foi rapidamente convertido em criptomoeda, o que dificulta a recuperação. Por isso o tempo é decisivo. No Brasil, se a transferência foi por Pix, o primeiro passo é avisar o banco imediatamente e pedir a abertura do Mecanismo Especial de Devolução (MED), além de registrar boletim de ocorrência. Detalhamos esse roteiro no texto sobre <a href="/artigos/golpe-do-pix-o-que-fazer-nas-primeiras-horas-med-e-uso-de-ia">o que fazer nas primeiras horas depois de um golpe do Pix</a>.</p>
    <p>Para empresas, também vale revisar quem tem poder de mover dinheiro e quanto material público existe com a voz e o rosto dos sócios. Não é preciso sumir das redes, mas é bom que todo o time saiba que ver e ouvir o chefe numa chamada não prova mais que é ele. O caso de Nova York, com milhares de empresas na mira e US$ 129 milhões perdidos, mostra que esse tipo de fraude deixou de ser exceção e virou modelo de negócio do crime organizado.</p>
  `,
  faq: [
    {
      question: "Quem são os acusados no esquema de US$ 129 milhões?",
      answer: "Jacob Soall, de 41 anos, Sharon Hazan, de 54, e Guy Sheetrit, de 42. Eles foram acusados pela Procuradoria federal do Distrito Sul de Nova York de fraude eletrônica, roubo de identidade qualificado e lavagem de dinheiro. São acusações, sem condenação até agora.",
    },
    {
      question: "Como a IA foi usada no golpe?",
      answer: "Depois de um e-mail falso em nome do CEO, o grupo marcava ligações ou videochamadas em que a IA imitava a voz e, às vezes, a imagem do executivo. Em seguida, um falso advogado orientava o funcionário a transferir o dinheiro para contas no exterior, e o valor depois era convertido em criptomoeda.",
    },
    {
      question: "Como proteger minha empresa desse tipo de fraude?",
      answer: "Confirme qualquer pedido de pagamento fora do comum ligando para um número já conhecido, desconfie quando sigilo e urgência aparecem juntos e exija a aprovação de duas pessoas para transferências acima de um valor definido. Nenhuma ordem por voz ou vídeo deve dispensar essas etapas.",
    },
  ],
};
