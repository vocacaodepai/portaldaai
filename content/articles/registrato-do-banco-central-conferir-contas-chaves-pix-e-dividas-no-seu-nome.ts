import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "registrato-do-banco-central-conferir-contas-chaves-pix-e-dividas-no-seu-nome",
  title: "Registrato: conferir contas, chaves Pix e dívidas no seu nome",
  seoTitle: "Registrato: conferir contas, chaves Pix e dívidas",
  excerpt:
    "Registrato é o serviço gratuito do Banco Central para ver em quais bancos você tem conta, quais chaves Pix existem e quais dívidas estão no seu CPF. Veja como.",
  metaDescription:
    "Registrato do Banco Central mostra contas, chaves Pix e dívidas no seu nome, de graça, pelo Meu BC. Veja requisitos, como ler cada relatório e usar IA com cuidado.",
  category: "iniciantes",
  articleSubcategory: "vida-pratica",
  date: "2026-11-01",
  readTime: 7,
  imageQuery: "person phone banking app security",
  seed: 1031,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Registrato, do Banco Central, é gratuito e reúne relatórios que mostram em quais bancos você tem relacionamento, quais chaves Pix estão no seu CPF e quais dívidas existem com bancos e financeiras.",
    "Para emitir os relatórios é preciso uma conta gov.br de nível prata ou ouro com verificação em duas etapas, e o acesso é feito pelo Meu BC.",
    "A IA pode ajudar a entender os termos do relatório, mas não é preciso mandar o arquivo inteiro para ela: apague CPF e nomes antes de colar qualquer trecho num chatbot.",
  ],
  content: `
    <p>O Registrato é o serviço do Banco Central que mostra, de graça, os registros financeiros ligados ao seu CPF: em quais bancos você tem ou teve conta, quais chaves Pix estão cadastradas e quais dívidas existem com bancos e financeiras. É a forma oficial de descobrir se alguém abriu algo em seu nome.</p>

    <p>Muita gente só pensa nisso depois do susto: uma cobrança que não reconhece, um golpe do Pix, um nome negativado sem explicação. Conferir de vez em quando é um hábito simples de segurança financeira. Este guia explica o que cada relatório mostra, quem pode emitir, como ler o resultado e como usar a IA para entender o conteúdo sem entregar seus dados. Se você caiu em golpe, comece pelo guia de <a href="/artigos/golpe-do-pix-o-que-fazer-nas-primeiras-horas-med-e-uso-de-ia">golpe do Pix: o que fazer nas primeiras horas</a>.</p>

    <h2>O que é o Registrato e para que serve</h2>

    <p>O Registrato reúne relatórios que o Banco Central mantém sobre cada cidadão. Os três mais úteis para o dia a dia são o de contas e relacionamentos em bancos, o de chaves Pix e o de empréstimos e financiamentos. Cada um responde a uma pergunta diferente: onde eu tenho conta, que chaves existem no meu nome e quanto eu devo a instituições financeiras.</p>

    <p>Os serviços são gratuitos para o cidadão, segundo as páginas oficiais no portal gov.br. Os relatórios são confidenciais e só podem ser pedidos por você ou por alguém que você autorize. O Banco Central não faz atendimento presencial para isso. Se você precisa guardar documentos e comprovantes de forma organizada, o guia de <a href="/artigos/escanear-documentos-no-celular-recibos-garantias-e-contas-com-ia">escanear documentos no celular</a> ajuda.</p>

    <h2>O que você precisa antes de começar</h2>

    <p>Para emitir os relatórios, as páginas oficiais exigem uma conta gov.br de nível prata ou ouro, com verificação em duas etapas ativada. O acesso é feito pelo Meu BC, o portal do cidadão do Banco Central, com login pela conta gov.br. Empresas precisam de certificado digital vinculado a uma conta gov.br de nível prata ou ouro.</p>

    <ul class="checklist">
      <li>Conta gov.br no nível prata ou ouro (o nível básico não basta).</li>
      <li>Verificação em duas etapas ligada na conta.</li>
      <li>Celular em mãos para confirmar o acesso.</li>
      <li>Um lugar seguro para guardar o arquivo depois, sem mandar por mensagem.</li>
    </ul>

    <p>Proteger a conta gov.br é parte do processo. O texto sobre <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">chave de acesso passkey</a> e o guia do <a href="/artigos/gerenciador-de-senhas-como-escolher-comecar-e-usar-com-seguranca">gerenciador de senhas</a> mostram como deixar o login mais difícil de roubar.</p>

    <h2>Relatório de contas e relacionamentos em bancos</h2>

    <p>Segundo a <a href="https://www.gov.br/pt-br/servicos/gerar-relatorio-de-contas-e-investimentos-ccs" target="_blank" rel="noopener noreferrer">página oficial do relatório de contas e relacionamentos em bancos</a>, ele mostra as instituições em que você tem ou teve conta, investimento ou outro relacionamento, com a data de início e, se houver, de fim. Ele não mostra número de conta ou agência, dados cadastrais, saldos nem movimentações.</p>

    <p>A página cita como usos conferir em quais bancos você está e verificar se o seu CPF foi usado para abrir conta sem o seu consentimento. O relatório cobre relacionamentos iniciados a partir de 01/01/2001. Na prática, é o primeiro que vale pedir: se aparecer um banco que você nunca usou, há um sinal de alerta.</p>

    <h2>Relatório de chaves Pix</h2>

    <p>A <a href="https://www.gov.br/pt-br/servicos/emitir-relatorio-de-chaves-pix" target="_blank" rel="noopener noreferrer">página do relatório de chaves Pix</a> informa que há dois tipos. O atual mostra as chaves ativas, as bloqueadas por ordem judicial e as em reivindicação de posse ou portabilidade. O completo soma o histórico de chaves excluídas.</p>

    <p>O atual sai na hora pelo Meu BC; o completo é entregue no sistema em até dois dias úteis. A finalidade, segundo a página, inclui conferir se há chave registrada em seu nome sem autorização. Se encontrar uma chave que não reconhece, a página indica o Fale Conosco do Banco Central e a Ouvidoria, em falabr.cgu.gov.br, e não descreve um passo para remover a chave por conta própria. Para quem teve a conta invadida, o guia sobre <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">checar mensagem suspeita e evitar golpes</a> também vale a leitura.</p>

    <h2>Relatório de empréstimos e financiamentos</h2>

    <p>A <a href="https://www.gov.br/pt-br/servicos/obter-relatorio-do-sistema-de-informacoes-de-credito-scr" target="_blank" rel="noopener noreferrer">página do relatório do SCR</a> explica que ele mostra todas as suas dívidas com bancos e instituições financeiras, com saldo devedor, tipo de operação e se os pagamentos estão em dia ou atrasados. O serviço é imediato pelo Meu BC e gratuito.</p>

    <p>Os usos citados na página incluem verificar se você está superendividado antes de tomar novo crédito, confirmar que não há dívida que você não contratou e rever dívidas para renegociar ou levar para outro banco. A própria página informa que a data de última modificação, 27/01/2026, é a da página e não dos dados do relatório, então a atualização das informações depende de cada instituição. Se a fatura do cartão é o problema, o texto sobre <a href="/artigos/fatura-do-cartao-com-ia-assinaturas-esquecidas-rotativo-e-o-que-nao-enviar">fatura do cartão com IA, assinaturas esquecidas e rotativo</a> ajuda a organizar.</p>

    <h2>Passo a passo para emitir</h2>

    <ol>
      <li>Entre no Meu BC (meubc.bcb.gov.br) com a sua conta gov.br prata ou ouro.</li>
      <li>Escolha o relatório: contas e relacionamentos, chaves Pix ou empréstimos e financiamentos.</li>
      <li>Emita e salve o arquivo num lugar seguro, de preferência só no seu celular ou computador.</li>
      <li>Leia linha por linha e marque o que você não reconhece.</li>
      <li>Procure a instituição ou o órgão responsável por cada item estranho e registre o protocolo.</li>
    </ol>

    <p>Se algo não for resolvido com a empresa, o caminho de reclamação é descrito em <a href="/artigos/reclamar-de-empresa-com-ia-consumidor-gov-br-passo-a-passo">reclamar de empresa com IA no Consumidor.gov.br</a>.</p>

    <h2>Como usar a IA sem expor seus dados</h2>

    <p>O relatório traz informações sensíveis: seu CPF, nomes de instituições e valores. Mandar o arquivo inteiro para um chatbot é o erro mais comum. Prefira copiar só o trecho que você não entendeu e trocar nomes e números por marcações. Antes de colar qualquer coisa, confira como desligar o uso das suas conversas para treino no guia de <a href="/artigos/treino-de-ia-com-suas-conversas-como-desligar-no-gemini-e-no-claude">treino de IA com suas conversas</a>, e saiba que o <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">chat temporário do Gemini</a> evita guardar a conversa.</p>

    <pre><code>Vou colar um trecho de um relatório de dívidas com os nomes trocados por [BANCO A] e [BANCO B].
Explique em linguagem simples o que significam os termos "saldo devedor", "a vencer" e "vencido".
Não peça meus dados pessoais e não invente números.</code></pre>

    <pre><code>Tenho uma chave Pix que não reconheço no meu relatório.
Liste os passos para investigar, em ordem, sem pedir senha ou código.
Lembre que só o banco e o Banco Central podem confirmar.</code></pre>

    <div class="callout-box callout-warn"><span class="callout-label">Cuidado</span><p>Nenhum banco, nenhum órgão e nenhuma IA legítima pede senha, token ou código por mensagem para "liberar" o relatório. Quem pede isso é golpista.</p></div>

    <p>Também vale ficar atento a ferramentas que prometem ligar a IA diretamente à sua conta bancária; a notícia sobre o <a href="/noticias/grok-bot-conecta-conta-bancaria-cartao-investimentos">Grok Bot e as contas bancárias</a> mostra por que o cuidado importa, e o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> dá critérios de decisão.</p>

    <h2>Quem pode ver seus relatórios: a Central de Autorizações</h2>

    <p>Segundo a <a href="https://www.gov.br/pt-br/servicos/gerenciar-acessos-aos-relatorios-do-registrato-na-central-de-autorizacoes" target="_blank" rel="noopener noreferrer">página da Central de Autorizações</a>, você pode autorizar até cinco pessoas a acessar seus relatórios, todos ou só alguns, por prazo definido ou indefinido, e cancelar a qualquer momento. É útil para pedir ajuda a um familiar de confiança sem entregar a sua senha, algo que o guia de <a href="/artigos/suporte-digital-para-idosos-e-familias-como-servico-celular-golpes-e-ia-pacote-e-preco">suporte digital para idosos e famílias</a> também recomenda como prática segura.</p>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Pedir o relatório em site que não é oficial.</strong> Use só o Meu BC e o portal gov.br.</li>
      <li><strong>Mandar o arquivo por mensagem.</strong> Ele contém dados sensíveis; guarde com cuidado.</li>
      <li><strong>Achar que o relatório mostra saldo.</strong> O de contas não mostra saldo nem movimentação.</li>
      <li><strong>Ignorar um item estranho.</strong> Uma chave Pix ou dívida desconhecida merece contato com a instituição.</li>
      <li><strong>Colar tudo na IA.</strong> Troque nomes e números antes de pedir ajuda.</li>
    </ul>

    <h2>Próximo passo</h2>

    <p>Reserve dez minutos neste mês, entre no Meu BC e emita os três relatórios. Anote o que reconheceu e o que não. Se quiser reforçar a segurança da família, conheça também a <a href="/artigos/golpe-da-voz-clonada-como-se-proteger-com-palavra-da-familia-e-checagem">proteção contra o golpe da voz clonada</a>. Mais dicas de vida prática com IA ficam na categoria de iniciantes do Portal da AI.</p>
  `,
  faq: [
    {
      question: "O Registrato é gratuito?",
      answer:
        "Sim. As páginas oficiais dos relatórios no portal gov.br informam que o serviço é gratuito para o cidadão. É preciso apenas ter uma conta gov.br de nível prata ou ouro, com verificação em duas etapas. Desconfie de sites ou mensagens que cobram para emitir o relatório: o canal oficial é o Meu BC.",
    },
    {
      question: "Como acessar o Registrato?",
      answer:
        "Pelo Meu BC, o portal do cidadão do Banco Central, no endereço meubc.bcb.gov.br, com login pela conta gov.br de nível prata ou ouro e verificação em duas etapas. Lá você escolhe o relatório de contas, de chaves Pix ou de empréstimos e financiamentos. Alguns saem na hora, e o relatório Pix completo leva até dois dias úteis.",
    },
    {
      question: "O Registrato mostra o saldo da minha conta?",
      answer:
        "Não. O relatório de contas e relacionamentos em bancos mostra em quais instituições você tem ou teve relacionamento e as datas de início e fim, mas não traz número de conta ou agência, dados cadastrais, saldos nem movimentações. Para saldo e extrato, use o aplicativo do seu banco.",
    },
    {
      question: "O que fazer se aparecer uma chave Pix que não é minha?",
      answer:
        "A página oficial diz que o relatório serve para conferir chaves registradas sem autorização, mas não descreve um passo para removê-las por conta própria. Ela indica o Fale Conosco do Banco Central e a Ouvidoria, em falabr.cgu.gov.br. Procure também o banco e, se houve golpe, registre um boletim de ocorrência.",
    },
    {
      question: "Posso mandar o relatório do Registrato para uma IA analisar?",
      answer:
        "Evite enviar o arquivo inteiro. Ele traz dados sensíveis, como CPF e informações de dívidas. Copie só o trecho que você não entendeu, troque nomes e números por marcações e desligue o uso das suas conversas para treino. Para decisões sobre dívida, confirme sempre com a instituição.",
    },
  ],
};
