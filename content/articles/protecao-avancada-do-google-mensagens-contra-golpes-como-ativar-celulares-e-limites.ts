import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "protecao-avancada-do-google-mensagens-contra-golpes-como-ativar-celulares-e-limites",
  title: "Proteção avançada do Google Mensagens: como ativar contra golpes",
  seoTitle: "Proteção avançada do Google Mensagens: como ativar",
  excerpt:
    "O Google Mensagens ganhou um modo opcional que usa o Gemini para avaliar conversas de desconhecidos e checar links. Veja celulares, privacidade e limites.",
  metaDescription:
    "Proteção avançada do Google Mensagens: o que o Gemini analisa em mensagens de desconhecidos, quais celulares recebem, como ativar e o que muda no Brasil.",
  category: "ferramentas",
  date: "2026-11-03",
  readTime: 7,
  imageQuery: "android phone text message warning",
  seed: 1106,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O modo de proteção avançada do Google Mensagens é opcional e usa modelos Gemini na nuvem, dentro do Private AI Compute, para avaliar conversas com remetentes desconhecidos.",
    "A checagem de links com Gemini Nano roda no próprio aparelho e, por enquanto, fica restrita a celulares recentes, como Pixel 10 e Galaxy S26; os avisos extras para links chegam ao Android 6 ou superior.",
    "No Brasil, o Android já confere com o app do banco se uma ligação do Banco do Brasil ou do Itaú é verdadeira, mas nenhum filtro substitui desligar e ligar você mesmo para o número oficial.",
  ],
  content: `
    <p>A proteção avançada do Google Mensagens é um modo opcional, anunciado pelo Google em 14/10/2026, que usa modelos Gemini na nuvem para avaliar o contexto de conversas com números desconhecidos e alertar sobre golpe. Ele se ativa nas configurações do app, em proteção e segurança, e chega aos poucos aos celulares Android compatíveis.</p>

    <p>A novidade faz parte de um pacote maior de defesas do Android contra golpes por mensagem e por ligação, com um item específico para o Brasil. Este guia explica o que cada recurso faz, quais aparelhos recebem, como ativar, o que acontece com o texto das suas conversas e onde o filtro não ajuda. As informações vêm do <a href="https://blog.google/security/new-android-scam-protections/" target="_blank" rel="noopener noreferrer">anúncio oficial do Google</a> e da reportagem do <a href="https://9to5google.com/2026/10/23/google-messages-enhanced-protection/" target="_blank" rel="noopener noreferrer">9to5Google</a> que encontrou o recurso na versão beta do app, ambos abertos em 03/11/2026.</p>

    <h2>O que muda no Google Mensagens</h2>

    <p>Até agora, o app tinha uma proteção padrão que bloqueia spam e links suspeitos já conhecidos, com detecção de golpe feita no próprio aparelho. O modo avançado acrescenta três camadas, segundo o Google.</p>

    <ul>
      <li><strong>Detecção de golpe com Private AI Compute:</strong> modelos Gemini na nuvem leem o contexto da conversa com um remetente desconhecido e tentam identificar a intenção de golpe, como a falsa entrega retida ou o falso gerente pedindo atualização de cadastro.</li>
      <li><strong>Checagem de links com Gemini Nano:</strong> antes de você tocar num link desconhecido, o modelo que roda no próprio celular cruza o endereço com sinais da web em tempo real para avaliar se é confiável.</li>
      <li><strong>Pontos de checagem para links:</strong> avisos redesenhados dão mais contexto e mais tempo antes de abrir links enviados por números que não estão nos seus contatos.</li>
    </ul>

    <p>O Google diz que sua detecção de golpes por IA, no app de telefone e no Mensagens, já sinaliza mais de 5 milhões de ligações e textos suspeitos por mês. O modo avançado tenta pegar os golpes novos, que ainda não estão em nenhuma lista. Se você já usa IA para conferir mensagens à mão, o passo a passo de <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">como checar mensagem suspeita com IA</a> continua útil para o que chega por WhatsApp ou e-mail, que o filtro do Mensagens não vê.</p>

    <h2>Quais celulares recebem cada parte</h2>

    <p>Os recursos não chegam juntos a todo aparelho. A tabela resume o que o Google publicou.</p>

    <table>
      <thead>
        <tr><th>Recurso</th><th>Aparelhos citados pelo Google</th><th>Onde roda</th></tr>
      </thead>
      <tbody>
        <tr><td>Detecção de golpe com Gemini</td><td>Pixel 6 ou mais novo, Galaxy S24 ou mais novo, Galaxy Z Flip6 e Z Fold6 ou mais novos e outros aparelhos com AICore</td><td>Nuvem, no Private AI Compute</td></tr>
        <tr><td>Checagem de links com Gemini Nano</td><td>Pixel 10 ou mais novo, Galaxy S26, Galaxy Z Flip8 e Z Fold8 e outros selecionados</td><td>No aparelho</td></tr>
        <tr><td>Avisos extras antes de abrir links</td><td>Android 6 ou superior</td><td>No aparelho</td></tr>
        <tr><td>Alerta de golpe na notificação</td><td>Pixel primeiro; Motorola, Xiaomi, OPPO, OnePlus, realme, vivo e outras marcas até o fim do ano</td><td>Varia por fabricante</td></tr>
      </tbody>
    </table>

    <p>O anúncio fala em liberação "nas próximas semanas" para o modo avançado. Em 23/10, o 9to5Google relatou ter visto a opção na versão beta 20261020_00_RC00 do app. Nenhuma das duas fontes lista países ou idiomas, então a disponibilidade no seu celular, em português, pode demorar. A checagem no aparelho usa o mesmo tipo de modelo explicado em <a href="/artigos/ia-no-celular-sem-internet-gemini-nano-e-privacidade">IA no celular sem internet com Gemini Nano</a>.</p>

    <h2>Como ativar, passo a passo</h2>

    <p>Segundo o 9to5Google, o modo não aparece como um botão de liga e desliga, e sim como uma escolha entre três níveis.</p>

    <ol>
      <li>Atualize o Google Mensagens pela Play Store.</li>
      <li>Abra o app, toque na sua foto ou no menu e entre nas configurações.</li>
      <li>Procure a seção de proteção e segurança.</li>
      <li>Escolha entre proteção avançada, proteção padrão ou nenhuma proteção (esta última o próprio app desaconselha).</li>
      <li>Leia a explicação sobre o envio das conversas de desconhecidos para análise e confirme.</li>
    </ol>

    <p>Os nomes acima seguem a descrição em inglês da reportagem e podem aparecer com outra tradução no seu aparelho. Se a opção ainda não existir, o recurso não chegou ao seu celular. Não instale versões do app baixadas fora da Play Store para tentar antecipar, porque APK de fonte desconhecida é justamente uma das portas de entrada de golpe.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Para quem cuida de pais e avós</span><p>Vale ativar o modo avançado no celular de quem recebe mais mensagens de golpe, junto com o bloqueio de apps desconhecidos e uma conversa sobre a regra de nunca clicar em link de cobrança. Quem faz isso por profissão encontra um roteiro no guia de <a href="/artigos/suporte-digital-para-idosos-e-familias-como-servico-celular-golpes-e-ia-pacote-e-preco">suporte digital para idosos e famílias</a>.</p></div>

    <h2>O que acontece com o texto das suas conversas</h2>

    <p>Essa é a pergunta mais importante, porque o modo avançado manda conteúdo para a nuvem. O Google afirma que a análise roda no Private AI Compute, um ambiente em que as mensagens ficam criptografadas e, nas palavras da empresa, inacessíveis a qualquer outra pessoa, incluindo o próprio Google. A empresa também diz que denunciar uma mensagem como spam é opcional e é a única forma de o texto ser enviado ao Google para análise.</p>

    <p>Há duas observações honestas. A primeira é que a afirmação de privacidade é da própria empresa, sem auditoria independente citada no anúncio. A segunda é que a análise vale para conversas com remetentes desconhecidos, o que significa que mensagens de contatos salvos ficam fora. Se você prefere não mandar nada para a nuvem, a proteção padrão continua disponível. Para pensar no que você entrega a ferramentas de IA de forma geral, veja <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a>.</p>

    <h2>As defesas contra golpe por ligação, e o item do Brasil</h2>

    <p>O mesmo anúncio traz três defesas no lado do telefone.</p>

    <ul>
      <li><strong>Privacidade ao compartilhar a tela:</strong> durante um compartilhamento de tela ao vivo, campos de login e pagamento no Chrome e em páginas dentro de apps ficam em branco. A liberação começou em outubro de 2026 para Android 15 ou superior.</li>
      <li><strong>Proteção contra desvio de chamadas:</strong> a partir do início de dezembro, apps não poderão ativar o desvio de chamadas em segundo plano, e o celular vai avisar antes de um código de desvio digitado à mão entrar em vigor. Vale para Pixel e outros aparelhos selecionados.</li>
      <li><strong>Ligações de banco verificadas, no Brasil:</strong> o Android consulta em tempo real o app oficial do banco para saber se a ligação partiu mesmo dele. Se a verificação falha, o sistema encerra a chamada e avisa você. Banco do Brasil e Itaú Unibanco estão entre os parceiros.</li>
    </ul>

    <p>Segundo o Google, desde o lançamento em junho, mais de 3 milhões de ligações falsas que imitavam Banco do Brasil e Itaú foram bloqueadas. A empresa cita ainda dado da Febraban segundo o qual golpes de falsa central de banco subiram 195,7% em 12 meses. O golpe do compartilhamento de tela e o do desvio de chamadas costumam vir juntos: o criminoso liga se passando pelo banco, pede para você abrir um app de acesso remoto e depois desvia suas chamadas para receber o código de confirmação. Se algo assim já aconteceu, siga o roteiro de <a href="/artigos/golpe-do-pix-o-que-fazer-nas-primeiras-horas-med-e-uso-de-ia">golpe do Pix nas primeiras horas</a>.</p>

    <h2>Onde o filtro não ajuda</h2>

    <p>A proteção avançada é uma camada a mais, não uma garantia. Ela olha apenas o Google Mensagens, então golpes por WhatsApp, Instagram, e-mail e ligação de número que não imita banco parceiro passam por fora. Também não resolve golpes em que a vítima é convencida a fazer o Pix por conta própria, como o do falso parente com voz clonada, que exige combinar uma palavra de segurança, explicada em <a href="/artigos/golpe-da-voz-clonada-como-se-proteger-com-palavra-da-familia-e-checagem">golpe da voz clonada</a>.</p>

    <p>Filtros de IA também erram para os dois lados: podem deixar passar um golpe bem escrito e podem marcar como suspeita a mensagem legítima de uma loja. Por isso, a regra de ouro continua sendo não clicar em link de cobrança e não passar código recebido por SMS a ninguém. Guarde o reforço nas contas com <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">chave de acesso (passkey)</a> e um <a href="/artigos/gerenciador-de-senhas-como-escolher-comecar-e-usar-com-seguranca">gerenciador de senhas</a>, que reduzem o estrago se alguém cair numa página falsa.</p>

    <h3>Exemplo prático</h3>

    <p>Imagine que chega por SMS: "Sua encomenda está retida. Pague a taxa de R$ 12,90 em até 24 horas neste link". Com o modo avançado, o app pode marcar a conversa como possível golpe e mostrar um aviso antes de abrir o link. Mesmo sem aviso, o caminho certo é abrir você mesmo o site ou app oficial da transportadora e conferir o código de rastreio. Se a mensagem disser que há dinheiro esquecido no seu nome, o único canal oficial é o descrito em <a href="/artigos/valores-a-receber-do-banco-central-consultar-por-cpf-pedir-pix-e-fugir-de-golpe">Valores a Receber do Banco Central</a>.</p>

    <h2>Erros comuns</h2>

    <ul>
      <li>Achar que o modo avançado já está ativo só porque o celular é novo. É preciso escolher a opção nas configurações.</li>
      <li>Desativar toda a proteção para parar avisos sobre mensagens de lojas. Melhor salvar o número da loja nos contatos.</li>
      <li>Confiar no aviso como prova de que uma mensagem é segura. A ausência de alerta não significa que o link é confiável.</li>
      <li>Atender uma "central do banco" e seguir instruções para instalar app ou compartilhar a tela. Desligue e ligue para o número do cartão.</li>
      <li>Esquecer o resto da família. Quem mais cai em golpe costuma ser quem tem menos tempo para mexer em configurações.</li>
    </ul>

    <p>Para conferir depois se alguém abriu conta ou cadastrou chave Pix no seu nome, use o <a href="/artigos/registrato-do-banco-central-conferir-contas-chaves-pix-e-dividas-no-seu-nome">Registrato do Banco Central</a>. E para ver como criminosos usam IA nos golpes, leia a notícia sobre o <a href="/noticias/golpes-ia-verizon-dbir-2026">relatório de golpes com IA da Verizon</a>.</p>

    <h2>Próximo passo</h2>

    <p>Hoje, atualize o Google Mensagens, abra proteção e segurança e veja se a opção avançada já aparece. Se aparecer, ative no seu celular e no de quem mais recebe mensagens suspeitas na família. Se ainda não chegou, deixe ao menos a proteção padrão ligada e combine a regra de desligar e ligar para o banco. Para outras novidades de ferramentas de IA explicadas sem jargão, veja a <a href="/categoria/ferramentas">categoria ferramentas</a>.</p>
  `,
  faq: [
    {
      question: "O que é a proteção avançada do Google Mensagens?",
      answer:
        "É um modo opcional, anunciado pelo Google em 14/10/2026, que usa modelos Gemini na nuvem para avaliar conversas com remetentes desconhecidos, checa links com o Gemini Nano no aparelho e mostra avisos extras antes de abrir links de números fora dos contatos.",
    },
    {
      question: "Meu celular vai receber o recurso?",
      answer:
        "Segundo o Google, a detecção de golpe na nuvem vale para Pixel 6 ou mais novo, Galaxy S24 ou mais novo, Z Flip6 e Z Fold6 ou mais novos e outros aparelhos com AICore. A checagem de links no aparelho fica, por enquanto, com Pixel 10, Galaxy S26, Z Flip8 e Z Fold8. A liberação é gradual.",
    },
    {
      question: "O Google lê as minhas mensagens?",
      answer:
        "O Google afirma que a análise roda no Private AI Compute, com mensagens criptografadas e inacessíveis até para a empresa, e que só recebe o texto se você denunciar a mensagem como spam. A análise vale para conversas com desconhecidos. Quem não quiser enviar nada para a nuvem pode manter a proteção padrão.",
    },
    {
      question: "O recurso funciona no WhatsApp?",
      answer:
        "Não. A proteção avançada vale para o Google Mensagens. Golpes por WhatsApp, redes sociais e e-mail continuam exigindo checagem manual.",
    },
    {
      question: "O que são as ligações de banco verificadas no Brasil?",
      answer:
        "O Android consulta o app oficial do banco para saber se uma ligação partiu mesmo dele e encerra a chamada quando a verificação falha. Banco do Brasil e Itaú Unibanco estão entre os parceiros, e o Google diz que mais de 3 milhões de ligações falsas foram bloqueadas desde junho.",
    },
  ],
};
