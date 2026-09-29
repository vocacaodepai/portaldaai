import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-escolher-ferramenta-de-ia-com-seguranca-checklist",
  title: "Como escolher ferramenta de IA com segurança: checklist",
  seoTitle: "Como escolher ferramenta de IA com segurança: checklist",
  excerpt:
    "Como escolher ferramenta de IA com segurança: checklist de 10 minutos para checar quem está por trás, o uso dos seus dados, o cancelamento e o preço real.",
  metaDescription:
    "Checklist para escolher ferramenta de IA com segurança antes de assinar: empresa, política de dados, cancelamento e preço, com tabela de riscos e prompts.",
  category: "ferramentas",
  date: "2026-09-22",
  updated: "2026-09-27",
  readTime: 8,
  imageQuery: "security checklist laptop trust",
  seed: 65,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Antes de assinar qualquer ferramenta de IA, responda quatro perguntas: quem está por trás, o que fazem com o que você digita, como cancelar e quanto custa de verdade.",
    "Ferramenta séria deixa claro se usa seu conteúdo para treinar modelos, permite desligar isso e oferece um jeito de apagar a conta, como exigem os direitos do titular na LGPD.",
    "Nunca cole senha, cartão, dado de saúde ou documento de cliente em uma ferramenta que você ainda não checou: depois de enviado, o dado não volta.",
  ],
  content: `
    <p>Como escolher ferramenta de IA com segurança se resume a quatro perguntas antes de assinar: quem está por trás, o que fazem com o que você digita, como cancelar e quanto custa de verdade. Este checklist cobre as quatro em dez minutos e serve para um app de R$ 30 por mês ou para a assinatura da empresa inteira.</p>

    <p>O cuidado vale para todo mundo, mas pesa mais para quem lida com dado de terceiros: contrato de cliente, planilha de folha, prontuário, conversa de WhatsApp. Uma ferramenta que some com seu dinheiro é chato. Uma que vaza dado de cliente é problema jurídico, porque quem coleta o dado continua responsável por ele mesmo quando usa um serviço de terceiros para processar.</p>

    <h2>O que é uma ferramenta de IA segura, na prática</h2>
    <p>Segura não quer dizer famosa. Quer dizer que a empresa existe e responde, que a política de privacidade diz em linguagem clara o que acontece com o conteúdo enviado, que você consegue apagar sua conta e seus dados, e que o pagamento passa por um meio que permite contestação. Ferramenta pequena pode cumprir tudo isso; ferramenta grande pode falhar em um ou dois pontos.</p>
    <p>O ponto mais ignorado é o uso do seu conteúdo para treinar modelos. As grandes deixam a escolha explícita. A <a href="https://support.google.com/gemini/answer/13594961" rel="noopener noreferrer">central de privacidade do Gemini</a> explica que parte das conversas pode ser lida por revisores humanos e que, com a atividade desligada, as conversas futuras não são usadas para treinar os modelos. A <a href="https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training" rel="noopener noreferrer">página de privacidade do Claude</a> diz que as conversas só entram no treinamento se o usuário permitir nas configurações, e que chats anônimos ficam de fora. Se a ferramenta que você avalia não tem uma página equivalente, esse é o primeiro sinal de alerta.</p>
    <p>O artigo sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a> detalha o que cada tipo de app coleta. Aqui o foco é a decisão de assinar ou não.</p>

    <h2>Os 4 blocos do checklist antes de assinar</h2>
    <h3>1. Quem está por trás</h3>
    <p>Procure o nome da empresa fora do site dela: no Reclame Aqui, no LinkedIn, em notícias. Confira se há CNPJ (ou registro equivalente no exterior), endereço e um e-mail de suporte que responde. Site criado há três semanas, sem página "sobre" e com depoimentos genéricos pede mais cautela, não necessariamente recusa. Depoimento em vídeo também pode ser fabricado; o guia sobre <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">como identificar deepfakes</a> mostra os sinais.</p>
    <h3>2. O que fazem com o que você digita</h3>
    <p>Abra a política de privacidade e busque por "treinamento", "training", "melhorar o serviço" e "terceiros". Veja se existe a opção de desligar o uso para treino e se há como pedir exclusão dos dados. Pela LGPD, o titular tem direito a confirmar, acessar, corrigir e eliminar seus dados, e a saber com quem foram compartilhados, sem pagar por isso, como lista a <a href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados/direito-dos-titulares" rel="noopener noreferrer">página de direitos dos titulares da ANPD</a>. Ferramenta que atende brasileiros e não oferece esse canal já começa em desacordo com a lei.</p>
    <h3>3. Como sair</h3>
    <p>Antes de pagar, ache o botão de cancelar. Se ele não existe ou exige e-mail para um endereço que não responde, não assine. Prefira cartão de crédito, que permite contestar a cobrança, a Pix para pessoa física ou cripto direto para uma carteira.</p>
    <h3>4. Quanto custa de verdade</h3>
    <p>Compare com o preço de ferramentas equivalentes e desconfie de "acesso vitalício" muito abaixo do mercado. O guia <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga: o que vale assinar</a> dá a referência de preço das principais categorias.</p>

    <h2>Tabela: sinais de risco baixo e alto</h2>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Risco baixo</th>
          <th>Risco alto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Empresa</td>
          <td>Nome, CNPJ, histórico público, suporte que responde</td>
          <td>Site novo, sem "sobre", sem contato real</td>
        </tr>
        <tr>
          <td>Uso dos dados</td>
          <td>Opção clara de não treinar com seu conteúdo</td>
          <td>Política vaga ou inexistente</td>
        </tr>
        <tr>
          <td>Exclusão</td>
          <td>Botão de apagar conta e dados</td>
          <td>"Entre em contato" sem prazo</td>
        </tr>
        <tr>
          <td>Pagamento</td>
          <td>Cartão com cancelamento na tela</td>
          <td>Só cripto, Pix para pessoa física ou "vitalício"</td>
        </tr>
        <tr>
          <td>Teste</td>
          <td>Plano gratuito ou trial sem cartão</td>
          <td>Pagar para ver</td>
        </tr>
        <tr>
          <td>Permissões</td>
          <td>Pede só o necessário (ex.: leitura de um arquivo)</td>
          <td>Pede acesso total a e-mail, drive e contatos de cara</td>
        </tr>
      </tbody>
    </table>
    <p>A linha de permissões cresceu de importância com os agentes que agem por você. Se a ferramenta se apresenta como agente, leia antes o guia sobre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">a diferença entre agente de IA, chatbot e automação</a>: quanto mais autonomia, mais acesso ela pede, e mais dano um erro pode causar. A notícia sobre <a href="/noticias/agentes-ia-roubam-600-mil-cartoes-credito-skimmers">agentes de IA usados para roubar 600 mil cartões</a> mostra o outro lado: a mesma tecnologia nas mãos erradas.</p>

    <div class="callout-box callout-bad">
      <span class="callout-label">Nunca faça</span>
      <p>Nunca cole senha, número de cartão, dado de saúde, documento de cliente ou informação de menor de idade em uma ferramenta que você ainda não checou. Depois de enviado, você não controla mais para onde aquilo vai, e nenhuma resposta útil compensa isso.</p>
    </div>

    <h2>Exemplo brasileiro: o escritório contábil e a ferramenta de resumo</h2>
    <p>Cenário realista com números de mercado. Um escritório de contabilidade em Belo Horizonte, com 4 funcionários e 60 clientes, quer usar IA para resumir contratos e responder e-mails. Encontra três opções: uma ferramenta nova prometendo "resumo ilimitado, acesso vitalício por R$ 97", o ChatGPT no plano pago e uma ferramenta especializada em documentos jurídicos.</p>
    <p>Aplicando o checklist: a "vitalícia" não tem CNPJ visível, a política de privacidade é um parágrafo e o pagamento é só Pix para pessoa física. Fica de fora, por mais barata que seja. As outras duas têm política clara, opção de não treinar com o conteúdo e cancelamento na tela; os preços em reais estão nas páginas oficiais e o <a href="/artigos/chatgpt-plus-vale-a-pena-review-2026">review do ChatGPT Plus</a> ajuda a decidir se compensa. A conta que importa: se a ferramenta economiza duas horas por semana de um funcionário que custa R$ 25 a hora, são R$ 200 por mês de tempo liberado, o que paga uma assinatura mediana com folga.</p>
    <p>O escritório ainda define uma regra interna: contratos passam pela ferramenta só depois de trocar nome, CPF e valores por marcadores. O guia de <a href="/artigos/ia-para-contratos-revisar-documentos-juridicos-mais-rapido">IA para revisar contratos</a> mostra como fazer isso sem perder o sentido do texto, e o de <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">IA para reuniões e atas</a> aplica o mesmo cuidado a gravações.</p>

    <h2>Prompts para checar a ferramenta antes de assinar</h2>
    <p>Você pode usar uma IA em que já confia para ler a política de privacidade da ferramenta nova. Copie o texto da política e use:</p>
    <pre><code>Leia a política de privacidade abaixo e responda em tópicos curtos: 1) o conteúdo que eu envio é usado para treinar modelos? 2) existe opção de desligar isso? 3) como peço a exclusão dos meus dados e em quanto tempo respondem? 4) com quais terceiros os dados são compartilhados? 5) a empresa cita a LGPD ou alguma lei de proteção de dados? Se algum item não estiver no texto, escreva "não informado".

Política: [cole aqui]</code></pre>
    <pre><code>Estou avaliando a ferramenta [nome] para [uso]. Liste 5 perguntas que eu deveria mandar para o suporte antes de assinar, focadas em segurança de dados, cancelamento e o que acontece com meus arquivos se eu encerrar a conta. Escreva as perguntas em tom educado e direto.</code></pre>
    <p>Mande as perguntas para o suporte de fato. O tempo e a qualidade da resposta dizem mais sobre a empresa do que a página de vendas. Ferramenta de planilha, como as do guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a>, merece o mesmo teste, porque planilha é onde mora o dado financeiro.</p>

    <h2>Erros comuns ao escolher ferramenta de IA</h2>
    <ul>
      <li><strong>Confiar no "sobre nós" da própria ferramenta.</strong> Depoimento e selo no site da empresa não valem como prova. Busque fora.</li>
      <li><strong>Assinar anual para economizar antes de testar.</strong> Pague um mês, use por duas semanas, decida depois.</li>
      <li><strong>Usar o e-mail principal e a mesma senha.</strong> Crie um e-mail secundário para testes e uma senha única por ferramenta.</li>
      <li><strong>Dar acesso total a Drive, e-mail e agenda no primeiro dia.</strong> Comece com um arquivo, veja o que a ferramenta faz e amplie devagar.</li>
      <li><strong>Esquecer de cancelar o teste.</strong> Anote no calendário a data de fim do trial no dia em que assinar.</li>
    </ul>
    <p>Esses tropeços não são só de iniciante, embora apareçam na lista de <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">5 erros comuns de quem está começando com IA</a>. E quem avalia ferramentas para os outros, seja em <a href="/artigos/como-ganhar-dinheiro-testando-e-avaliando-ferramentas-de-ia">testes pagos de ferramentas de IA</a> ou em <a href="/artigos/como-vender-consultoria-de-ia-para-pequenas-empresas">consultoria de IA para pequenas empresas</a>, coloca a própria reputação em cada indicação.</p>

    <div class="callout-box callout-ok">
      <span class="callout-label">Sinal de confiança</span>
      <p>Ferramenta séria deixa claro se usa seus dados para treino e permite desligar, tem botão para apagar conta e dados, oferece teste sem cartão e responde ao suporte em dias úteis. Cumpriu os quatro? Pode testar com dado real, começando pelo menos sensível.</p>
    </div>

    <h2>Checklist rápido antes de assinar</h2>
    <ul class="checklist">
      <li>Pesquisei o nome da empresa fora do site dela (Reclame Aqui, LinkedIn, notícias)</li>
      <li>Achei CNPJ ou registro, endereço e e-mail de suporte que responde</li>
      <li>Li a política de privacidade (ou passei pelo prompt acima) e sei se meu conteúdo treina o modelo</li>
      <li>Sei como desligar o uso para treino e como apagar a conta</li>
      <li>Vi o botão de cancelar antes de pagar e paguei com cartão</li>
      <li>Testei o plano gratuito ou o trial com dado sem sigilo</li>
      <li>Defini o que nunca vai entrar na ferramenta (senha, CPF, dado de cliente)</li>
      <li>Anotei a data de fim do teste no calendário</li>
    </ul>

    <p>Escolher ferramenta de IA com segurança é menos sobre desconfiar de tudo e mais sobre gastar dez minutos com este checklist antes de cada assinatura. Feito isso, sobra tempo para o que interessa: usar. A seção <a href="/categoria/ferramentas">Ferramentas</a> tem os reviews que já passaram por esse filtro, e o guia de <a href="/artigos/7-aplicativos-de-ia-que-toda-pessoa-deveria-conhecer">7 aplicativos de IA que toda pessoa deveria conhecer</a> é um bom ponto de partida.</p>
  `,
  faq: [
    {
      question: "Toda ferramenta de IA nova é golpe?",
      answer:
        "Não. A maioria das ferramentas novas é legítima, só ainda pouco conhecida. O problema é assinar sem checar nada. Os sinais que indicam risco maior são pagamento só por Pix para pessoa física ou cripto, ausência de CNPJ e contato real, política de privacidade vaga e promessa de acesso vitalício muito abaixo do preço de mercado. Sem esses sinais, teste com dado sem sigilo.",
    },
    {
      question: "Como saber se uma ferramenta de IA usa meus dados para treinar modelos?",
      answer:
        "Procure na política de privacidade por termos como treinamento, training, melhorar o serviço e terceiros. Ferramentas sérias têm uma página específica sobre isso e uma opção nas configurações para desligar o uso, como fazem Gemini e Claude. Se a política não menciona o assunto, considere que o conteúdo pode ser usado e não envie nada sigiloso.",
    },
    {
      question: "É seguro usar meu e-mail pessoal para testar uma ferramenta de IA?",
      answer:
        "Para testar, sim, mas um e-mail secundário reduz o dano se a empresa vender a lista ou sofrer um vazamento. Use uma senha única por ferramenta e ative a verificação em duas etapas quando existir. Depois que a ferramenta passar no checklist e virar parte da rotina, migre para a conta principal se fizer sentido.",
    },
    {
      question: "O que fazer se a ferramenta não deixa apagar minha conta?",
      answer:
        "Pela LGPD, o titular tem direito de pedir a eliminação dos dados tratados com base no consentimento e de saber com quem foram compartilhados, sem custo. Peça por escrito ao suporte, guarde o protocolo e, sem resposta, registre a reclamação na ANPD ou nos órgãos de defesa do consumidor. Cancele também a cobrança no cartão.",
    },
    {
      question: "Posso colocar contrato de cliente em uma ferramenta de IA?",
      answer:
        "Só depois de checar a política de dados e, mesmo assim, com cuidado: troque nomes, CPF e valores por marcadores antes de enviar. Quem coleta o dado do cliente continua responsável por ele quando usa um serviço de terceiros. Para uso frequente, prefira planos empresariais que tenham cláusula clara de não treinamento com o seu conteúdo.",
    },
  ],
  quiz: [
    {
      question: "Qual desses é um sinal de alerta ao avaliar uma ferramenta de IA nova?",
      options: [
        "Ter política de privacidade clara",
        "Só aceitar pagamento por Pix para pessoa física ou cripto",
        "Oferecer teste gratuito sem cartão",
        "Ter contato de suporte visível",
      ],
      answer: 1,
      explanation:
        "Exigir pagamento só por meios difíceis de contestar é um padrão comum em golpes disfarçados de ferramenta de IA. Cartão de crédito com cancelamento na tela é o sinal oposto.",
    },
    {
      question: "O que você nunca deve colar em uma ferramenta de IA que ainda não checou?",
      options: [
        "Um texto genérico para revisar",
        "Uma pergunta sobre um tema qualquer",
        "Senha, dado de cartão, documento de cliente ou informação de saúde",
        "Uma ideia de post para redes sociais",
      ],
      answer: 2,
      explanation:
        "Dado sensível ou de terceiros não deve entrar em ferramenta não verificada: depois de enviado, você perde o controle sobre onde ele vai parar, e continua responsável por ele.",
    },
  ],
};
