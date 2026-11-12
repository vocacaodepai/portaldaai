import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ligacoes-de-telemarketing-nao-me-perturbe-filtro-de-spam-e-ia",
  title: "Ligações de telemarketing: como bloquear com Não Me Perturbe e IA",
  seoTitle: "Bloquear telemarketing: Não Me Perturbe e filtro de spam",
  excerpt:
    "Veja como bloquear ligações de telemarketing com o Não Me Perturbe, descobrir qual empresa ligou, ativar o filtro de spam do celular e reclamar usando IA.",
  metaDescription:
    "Ligações de telemarketing todo dia? Cadastre o número no Não Me Perturbe, consulte quem ligou, ative o filtro de spam no Android e no iPhone e reclame com IA.",
  category: "iniciantes",
  articleSubcategory: "vida-pratica",
  date: "2026-11-12",
  readTime: 8,
  imageQuery: "woman annoyed phone call",
  seed: 1184,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Não Me Perturbe é o cadastro oficial do setor para não receber telemarketing de operadoras e bancos participantes, e o bloqueio leva até 30 dias para valer.",
    "O site Qual Empresa Me Ligou mostra, de graça e sem cadastro, a empresa dona de um número quando o titular é pessoa jurídica.",
    "O filtro de spam do Android e do iPhone segura boa parte do resto, e a IA ajuda a montar a reclamação com data, hora e número, sem você colar dados pessoais.",
  ],
  content: `
    <p>Para bloquear ligações de telemarketing, o caminho mais eficaz é combinar três coisas: cadastrar seu número no Não Me Perturbe, que vale para operadoras e bancos participantes, ligar o filtro de spam do próprio celular e reclamar formalmente quando a empresa insiste. Nenhuma das três resolve sozinha, mas juntas cortam a maior parte do incômodo.</p>

    <p>Este guia mostra cada passo no Android e no iPhone, explica o que mudou nas regras da Anatel nos últimos anos e traz prompts para a IA escrever a reclamação e explicar o assunto para pais e avós. As páginas citadas foram abertas e conferidas em 12/11/2026.</p>

    <h2>Por que o telefone toca tanto?</h2>

    <p>Segundo a <a href="https://agenciagov.ebc.com.br/noticias/202508/anatel-lanca-campanha-educativa-sobre-chamadas-abusivas" target="_blank" rel="noopener noreferrer">Agência Gov</a>, as chamadas abusivas vêm de três lugares: empresas legítimas fazendo cobrança, oferta ou pesquisa; robôs que ligam só para testar se o número está ativo; e golpistas. Os robôs explicam aquela ligação muda que cai assim que você atende.</p>

    <p>Desde 1º de junho de 2024, a Anatel trata como "chamada curta" toda ligação de até 6 segundos, desligada por quem ligou ou por quem atendeu, e usa esse indicador para punir quem dispara em massa. A mesma reportagem informa que, entre junho de 2022 e julho de 2025, 1.144 empresas foram bloqueadas de fazer chamadas e as multas passaram de R$ 30 milhões.</p>

    <p>Uma mudança confunde muita gente: em agosto de 2025 a Anatel deixou de exigir o prefixo 0303 nas ligações de telemarketing. A agência apostou na autenticação de chamadas, obrigatória para quem faz mais de 500 mil ligações por mês. Então não dá mais para confiar só no 0303 para saber se é oferta. Se você caiu em golpe por telefone, o guia do <a href="/artigos/golpe-do-pix-o-que-fazer-nas-primeiras-horas-med-e-uso-de-ia">golpe do Pix nas primeiras horas</a> mostra o que fazer antes de qualquer reclamação.</p>

    <h2>Passo 1: cadastrar o número no Não Me Perturbe</h2>

    <p>O <a href="https://www.naomeperturbe.com.br/" target="_blank" rel="noopener noreferrer">Não Me Perturbe</a> é a plataforma do setor para quem não quer receber telemarketing. A lista de participantes inclui operadoras como Claro, Vivo, TIM, Oi, Algar e Sky, além de dezenas de bancos e financeiras, com uma categoria própria para crédito consignado, que é campeão de ligação para aposentado.</p>

    <ol>
      <li>Abra naomeperturbe.com.br e toque em <strong>Cadastrar</strong>.</li>
      <li>Crie a conta. O login agora é por CPF e senha, com um código de validação enviado ao seu e-mail.</li>
      <li>Em <strong>Solicitar bloqueio</strong>, informe o número e marque os setores e as empresas que não podem mais ligar.</li>
      <li>Confirme o código que chega por SMS no número que você está bloqueando.</li>
      <li>Anote a data. O site avisa que o bloqueio leva <strong>até 30 dias</strong> para valer.</li>
    </ol>

    <p>O cadastro é feito por você, direto no site, e não há motivo para pagar intermediário. Cada linha precisa do próprio pedido, então quem cuida do celular dos pais faz um cadastro para cada número. Se o problema for cobrança indevida da operadora, e não oferta, o caminho é outro: o guia de <a href="/artigos/fatura-de-celular-e-internet-com-ia-contestar-cobranca-e-reclamar-na-anatel">fatura de celular e reclamação na Anatel</a> explica a sequência.</p>

    <h2>Passo 2: descobrir qual empresa ligou</h2>

    <p>Antes de bloquear um número qualquer, vale saber quem está do outro lado. O site <a href="https://www.qualempresameligou.com.br/" target="_blank" rel="noopener noreferrer">Qual Empresa Me Ligou</a>, mantido pelas operadoras e operado pela ABR Telecom, mostra a razão social e o CNPJ do dono de um número fixo ou móvel. Os termos de uso dizem que a consulta é gratuita e não exige cadastro.</p>

    <p>Há dois limites importantes. Se o número estiver no nome de uma pessoa física, o site responde que não encontrou empresa e não mostra nenhum dado pessoal. E as atualizações podem levar até 30 dias para aparecer. Com o nome da empresa em mãos, você sabe se a ligação era de um banco participante do Não Me Perturbe ou de alguém que nem deveria ter seu contato.</p>

    <p>Ligação de "banco" pedindo senha, código ou transferência não é telemarketing: é tentativa de golpe. Nesse caso, desligue e ligue você para o número do cartão. O texto sobre <a href="/artigos/golpe-da-voz-clonada-como-se-proteger-com-palavra-da-familia-e-checagem">golpe da voz clonada</a> mostra a checagem com palavra da família, útil quando a voz parece de um parente.</p>

    <h2>Passo 3: ligar o filtro de spam do celular</h2>

    <p>O Não Me Perturbe só vale para empresas participantes. Para o resto, o filtro do próprio telefone faz a triagem. Os menus abaixo vêm das páginas de ajuda do Google e da Apple e podem mudar de nome conforme a versão do sistema.</p>

    <h3>Android com o app Telefone do Google</h3>

    <p>Pelo <a href="https://support.google.com/phoneapp/answer/3459196?hl=pt-BR" target="_blank" rel="noopener noreferrer">suporte do Google</a>: abra o app Telefone, toque nos três pontos, vá em <strong>Configurações</strong> e depois em <strong>Identificador de chamadas e spam</strong>. Ative a identificação e, se quiser ir além, <strong>Filtrar ligações spam</strong>. As chamadas filtradas não tocam nem caem na caixa postal, mas continuam no histórico. Para um número específico, toque na ligação e escolha <strong>Bloquear/Denunciar spam</strong>.</p>

    <p>Um detalhe de privacidade: para identificar desconhecidos, o app envia ao Google os números que não estão na sua agenda. O recurso em que o assistente atende por você e pergunta o motivo, o Filtrar chamadas, não aparece na lista de países do Google para o Brasil. Celulares que usam o discador de fábrica de outra marca costumam ter filtro próprio, com outro nome, dentro das configurações de chamadas.</p>

    <h3>iPhone</h3>

    <p>No manual da Apple, o caminho é <strong>Ajustes &gt; Apps &gt; Telefone</strong>. Ali há a filtragem de números desconhecidos, com as opções Nunca, Perguntar Motivo da Ligação e Silenciar, que manda quem não está salvo direto para o correio de voz. Há também a chave Spam, que silencia ligações marcadas pela operadora como fraude em potencial. Em <strong>Ajustes &gt; Apps &gt; Bloqueio e Identificação</strong> fica a identificação de ligação comercial.</p>

    <h3>Qual ferramenta resolve o quê</h3>

    <table>
      <thead>
        <tr><th>Ferramenta</th><th>O que faz</th><th>Limite</th></tr>
      </thead>
      <tbody>
        <tr><td>Não Me Perturbe</td><td>Bloqueia oferta de operadoras e bancos participantes</td><td>Até 30 dias para valer; não pega empresa fora da lista nem golpista</td></tr>
        <tr><td>Qual Empresa Me Ligou</td><td>Mostra razão social e CNPJ do dono do número</td><td>Nada aparece se o titular for pessoa física</td></tr>
        <tr><td>Filtro do Android</td><td>Marca e filtra spam, bloqueia número</td><td>Envia números desconhecidos ao Google</td></tr>
        <tr><td>Filtro do iPhone</td><td>Silencia desconhecidos e spam apontado pela operadora</td><td>Silenciar pode esconder ligação de médico ou entrega</td></tr>
        <tr><td>Reclamação na Anatel</td><td>Registra a insistência e alimenta a fiscalização</td><td>Precisa de data, hora e número para ter efeito</td></tr>
      </tbody>
    </table>

    <h2>Onde a IA ajuda (e onde não entra)</h2>

    <p>A IA não bloqueia ligação nenhuma, mas poupa tempo na parte chata: organizar registros, escrever a reclamação e explicar o assunto para quem tem menos intimidade com celular. O <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">guia para checar mensagem suspeita com IA</a> segue a mesma lógica para SMS e WhatsApp. Antes de colar qualquer coisa num chatbot, leia o que dizemos sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega à IA sem perceber</a>: CPF, senha, código e número de cartão nunca entram.</p>

    <h3>Prompt para a reclamação</h3>

    <pre><code>Escreva uma reclamação curta e educada para a Anatel. Recebi ligações de oferta da empresa [razão social do Qual Empresa Me Ligou] nas datas e horários abaixo, mesmo depois de cadastrar meu número no Não Me Perturbe em [data]. Liste as ligações em tópicos, peça o fim dos contatos e a apuração do caso. Não invente dados nem cite leis que eu não informei.
[cole aqui a lista: data, hora, número que ligou]</code></pre>

    <h3>Prompt para explicar aos pais</h3>

    <pre><code>Explique para uma pessoa de 70 anos, em frases curtas, como agir quando o telefone toca de número desconhecido: quando não atender, por que banco nunca pede senha por telefone e o que fazer se a ligação cair muda. Termine com 3 regras fáceis de lembrar para colar na geladeira.</code></pre>

    <p>Para a lista de ligações, um print do histórico resolve: o ChatGPT e o Gemini leem a imagem e devolvem a tabela com data, hora e número. Confira linha por linha, porque a IA pode errar um dígito, e ajuste o pedido com as dicas do <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">guia de prompts que funcionam</a>. Para montar o restante da rotina de segurança dos pais, o artigo sobre <a href="/artigos/suporte-digital-para-idosos-e-familias-como-servico-celular-golpes-e-ia-pacote-e-preco">suporte digital para idosos</a> traz um roteiro completo.</p>

    <h2>Exemplo: o celular da Dona Lúcia</h2>

    <p>Cenário ilustrativo, montado para mostrar a sequência. Dona Lúcia, 68 anos, aposentada em Ribeirão Preto, recebe de 6 a 8 ligações por dia oferecendo consignado e troca de plano. No dia 12, a filha cadastra o número no Não Me Perturbe marcando todos os bancos e operadoras. No mesmo dia, ativa no Android o filtro de ligações spam e anota os números que insistem.</p>

    <p>Duas semanas depois, as ofertas de consignado já caíram bastante, mas um número segue ligando. A consulta mostra uma correspondente bancária que não está na lista de participantes. A filha bloqueia o número no app Telefone, passa o print do histórico pela IA para montar a lista e registra a reclamação. Passados os 30 dias do cadastro, qualquer ligação de banco participante vira reclamação com prova.</p>

    <ul class="checklist">
      <li>Número cadastrado no Não Me Perturbe, com a data anotada</li>
      <li>Filtro de spam ativo no celular</li>
      <li>Números insistentes consultados no Qual Empresa Me Ligou</li>
      <li>Print do histórico guardado como prova</li>
      <li>Reclamação registrada se a ligação continuar depois de 30 dias</li>
    </ul>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Esperar resultado no dia seguinte.</strong> O bloqueio leva até 30 dias. Reclamar antes disso enfraquece o pedido.</li>
      <li><strong>Achar que o Não Me Perturbe barra golpista.</strong> Ele vale para empresas participantes. Golpe se combate com filtro, desconfiança e o <a href="/artigos/protecao-avancada-do-google-mensagens-contra-golpes-como-ativar-celulares-e-limites">alerta de golpes do Google Mensagens</a>.</li>
      <li><strong>Silenciar todos os desconhecidos sem pensar.</strong> Clínica, entregador e escola ligam de número que não está na agenda.</li>
      <li><strong>Pedir para "tirar da lista" durante a ligação e confirmar dados.</strong> Confirmar nome completo ou CPF para quem ligou só ajuda o golpe.</li>
      <li><strong>Colar documento no chatbot.</strong> A IA precisa só de data, hora e número para montar a reclamação.</li>
    </ul>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Guarde os prints numa pasta do celular chamada "telemarketing". Se precisar reclamar no consumidor.gov.br, o passo a passo de <a href="/artigos/reclamar-de-empresa-com-ia-consumidor-gov-br-passo-a-passo">como reclamar de empresa com IA</a> aproveita esse mesmo material.</p></div>

    <h2>O que esperar daqui para frente</h2>

    <p>A Agência Gov informa que o Origem Verificada, sistema que autentica a chamada e mostra na tela o nome da empresa e o motivo da ligação, começou a ser preparado em 2025, com selos de grandes chamadores previstos a partir de novembro daquele ano. A autenticação de todas as chamadas tem prazo de três anos, contados do novo regulamento. Quando chegar ao seu aparelho, ligação legítima vai aparecer com nome e logo, e o número "pelado" fica ainda mais suspeito.</p>

    <p>Até lá, a combinação de cadastro, filtro e reclamação é o que funciona, junto com contas bem protegidas: a <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">chave de acesso (passkey)</a> dificulta que um código arrancado por telefone abra sua conta. Faça os três passos hoje no seu celular e no de quem você ajuda. Para seguir organizando a vida digital, a <a href="/categoria/iniciantes">categoria Iniciantes</a> e o guia do <a href="/artigos/registrato-do-banco-central-conferir-contas-chaves-pix-e-dividas-no-seu-nome">Registrato do Banco Central</a> são bons próximos passos.</p>
  `,
  faq: [
    {
      question: "O Não Me Perturbe é gratuito?",
      answer:
        "O cadastro é feito pelo próprio consumidor no site naomeperturbe.com.br, com CPF, senha e confirmação por código, sem intermediário. Desconfie de qualquer pessoa ou site que cobre para fazer o bloqueio por você. O pedido vale para operadoras e bancos participantes e leva até 30 dias para começar a valer.",
    },
    {
      question: "Quanto tempo demora para o Não Me Perturbe funcionar?",
      answer:
        "O próprio site informa que o bloqueio é efetivado em até 30 dias da data da solicitação. Anote a data do pedido. Se uma empresa participante continuar ligando depois desse prazo, guarde print com data, hora e número e registre reclamação nos canais da Anatel.",
    },
    {
      question: "Como saber qual empresa me ligou?",
      answer:
        "Digite o número no site Qual Empresa Me Ligou, mantido pelas operadoras e operado pela ABR Telecom. A consulta é gratuita e não pede cadastro. Ele mostra razão social e CNPJ quando o titular é pessoa jurídica. Se o número pertencer a uma pessoa física, nenhum dado aparece.",
    },
    {
      question: "O prefixo 0303 ainda é obrigatório?",
      answer:
        "Não. Em agosto de 2025 a Anatel revogou a obrigação do prefixo 0303 para telemarketing e passou a exigir autenticação de chamadas de quem faz mais de 500 mil ligações por mês. Por isso, a ausência do 0303 não indica que a ligação não é oferta.",
    },
    {
      question: "Como bloquear ligações de spam no iPhone?",
      answer:
        "Em Ajustes, toque em Apps e depois em Telefone. Ali dá para filtrar desconhecidos com Perguntar Motivo da Ligação, silenciar quem não está salvo e ativar a chave Spam, que silencia ligações apontadas pela operadora como fraude. Para um número específico, abra o contato e toque em Bloquear Contato.",
    },
  ],
};
