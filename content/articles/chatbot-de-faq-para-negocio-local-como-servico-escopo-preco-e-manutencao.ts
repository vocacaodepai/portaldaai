import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "chatbot-de-faq-para-negocio-local-como-servico-escopo-preco-e-manutencao",
  title: "Chatbot de FAQ para negócio local: como vender o serviço",
  seoTitle: "Chatbot de FAQ para negócio local como serviço",
  excerpt:
    "Chatbot de FAQ para negócio local como serviço: veja o que entregar, como definir escopo, montar pacote, cobrar manutenção e proteger dados do cliente.",
  metaDescription:
    "Quer vender chatbot de FAQ para negócio local? Veja escopo, pacote de exemplo, cobrança de manutenção mensal, contrato, LGPD e erros que travam o projeto.",
  category: "monetizacao",
  articleSubcategory: "automacao-e-agentes",
  date: "2026-10-24",
  readTime: 8,
  imageQuery: "shop owner smartphone customer chat",
  seed: 628,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Um chatbot de FAQ responde só às perguntas repetidas de um negócio local (horário, preço, endereço, prazo) e passa o resto para uma pessoa, o que torna o serviço simples de entregar e de explicar.",
    "O serviço se sustenta em três partes: implantação (cobrada uma vez), base de respostas aprovada pelo dono e manutenção mensal para atualizar preços e regras.",
    "O contrato precisa deixar claro que o dono aprova as respostas, que há um caminho para falar com humano e como os dados dos clientes são tratados.",
  ],
  content: `
    <p>Um chatbot de FAQ para negócio local é um assistente que responde sozinho às perguntas que o dono já repete todo dia: horário, endereço, preço, prazo, forma de pagamento. Como serviço, ele funciona bem porque o escopo é pequeno: você organiza as respostas, configura a ferramenta, testa e cobra pela implantação e por uma manutenção mensal.</p>

    <p>O freelancer que domina isso vende algo fácil de entender para quem tem clínica, oficina, loja ou salão: menos tempo respondendo a mesma dúvida no WhatsApp. Este guia mostra como definir o que entra e o que fica de fora, montar um pacote de exemplo, escrever o contrato mínimo e evitar os erros que fazem o cliente desistir. Os valores aparecem como exemplos de raciocínio, não como promessa de ganho: o que você consegue cobrar depende da sua região, do nicho e da sua carteira.</p>

    <h2>O que é um chatbot de FAQ e por que ele cabe em negócio local</h2>

    <p>FAQ vem de "perguntas frequentes". O chatbot lê uma base curta de respostas aprovadas e responde ao cliente com base nela. Quando a pergunta não está na base, ele diz que vai chamar uma pessoa. Essa limitação é a vantagem: o texto sobre <a href="/artigos/rag-na-ia-como-chatbot-responde-com-base-nos-seus-documentos">como o chatbot responde com base nos seus documentos</a> explica por que respostas ancoradas em material do próprio negócio erram menos do que um bot que "improvisa".</p>

    <p>Negócio local tem perguntas muito parecidas entre si. Uma clínica recebe "aceita plano?" e "como chego aí?". Uma oficina ouve "quanto tempo leva a revisão?". Uma loja de roupas ouve "troca com nota?". Cinquenta perguntas bem respondidas resolvem a maior parte do volume, e o dono ganha de volta o tempo que gastava digitando. Quem quer entender a diferença entre bot, agente e automação pode ler <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente, chatbot ou automação</a> antes de vender, para não prometer mais do que entrega.</p>

    <h2>O que entra no escopo e o que fica de fora</h2>

    <p>Escopo mal definido é o que mais destrói projeto pequeno. Escreva o que está incluído e o que não está, e mostre isso na proposta.</p>

    <table>
      <thead>
        <tr><th>Dentro do escopo</th><th>Fora do escopo (cobrado à parte)</th></tr>
      </thead>
      <tbody>
        <tr><td>Levantar até 50 perguntas e respostas com o dono</td><td>Integração com sistema de agenda ou ERP</td></tr>
        <tr><td>Configurar o bot em um canal (site ou WhatsApp)</td><td>Segundo canal ou segundo idioma</td></tr>
        <tr><td>Mensagem de entrada, de ausência e de encaminhamento a humano</td><td>Tirar pedido, cobrar ou fechar venda</td></tr>
        <tr><td>Teste com 30 perguntas reais antes de ligar</td><td>Campanhas e envio ativo de mensagens</td></tr>
        <tr><td>Um treinamento de 1 hora para o dono atualizar respostas</td><td>Atendimento do bot no lugar da equipe 24 horas</td></tr>
      </tbody>
    </table>

    <p>Deixe o bot longe de preço negociado, reclamação, diagnóstico e qualquer coisa que o dono não aprovou por escrito. Para atendimento fora do expediente, existe um caminho mais simples, descrito em <a href="/artigos/atendimento-fora-do-horario-mensagem-de-ausencia-e-retorno-organizado-com-ia">mensagem de ausência e retorno organizado</a>, que pode ser vendido como complemento.</p>

    <h2>Passo a passo da implantação em cerca de uma semana</h2>

    <h3>Dia 1: entrevista de 40 minutos</h3>

    <p>Peça ao dono as conversas dos últimos 30 dias (com autorização e sem dados sensíveis) e liste as perguntas que mais se repetem. Se ele não tiver histórico, pergunte ao atendente o que responde todos os dias. O objetivo é sair com 40 a 50 perguntas reais, não com perguntas que você imaginou.</p>

    <h3>Dias 2 e 3: redigir a base de respostas</h3>

    <p>Use a IA para transformar as anotações em respostas curtas, no tom do negócio. Cada resposta deve caber em três linhas. Veja um prompt que funciona como ponto de partida:</p>

    <pre><code>Você é redator de atendimento de uma [tipo de negócio] em [cidade].
Com base nas anotações abaixo, escreva respostas de até 3 linhas, em português simples e educado.
Não invente preço, prazo ou política que não esteja nas anotações.
Quando faltar informação, escreva: "Vou confirmar com a equipe e retorno em breve."
Anotações: [cole aqui]</code></pre>

    <h3>Dia 4: aprovação do dono</h3>

    <p>Envie a base inteira em uma planilha e peça aprovação linha a linha. Isso protege você e o cliente: se um preço estiver errado, o erro está identificado antes de ir ao ar. Esse cuidado com quem responde pelo quê é o tema de <a href="/artigos/quando-o-agente-de-ia-erra-quem-responde-cdc-contrato-e-o-que-fazer">quando o agente de IA erra, quem responde</a>.</p>

    <h3>Dias 5 e 6: configurar e testar</h3>

    <p>Monte o bot na ferramenta escolhida (a conversa sobre <a href="/artigos/como-criar-chatbot-de-atendimento-para-seu-site-sem-programar">criar chatbot para site sem programar</a> compara opções). Teste com 30 perguntas, incluindo variações de escrita, erros de digitação e perguntas que não estão na base. Anote o que falhou e ajuste.</p>

    <h3>Dia 7: entrega e treinamento</h3>

    <p>Ligue o bot, explique ao dono como editar uma resposta e deixe um documento de uma página com os acessos. No WhatsApp, lembre que a <a href="https://whatsappbusiness.com/policy/" target="_blank" rel="noopener noreferrer">política da WhatsApp Business</a> (atualizada em 23/09/2026, conforme a página consultada em 24/10/2026) permite automação na resposta dentro da janela de 24 horas e pede um caminho para falar com uma pessoa. Seu bot deve respeitar as duas coisas.</p>

    <h2>Quanto cobrar: um exemplo de pacote com contas</h2>

    <p>Não existe tabela oficial, então use um raciocínio de horas. Suponha uma implantação que leva cerca de 12 horas de trabalho entre entrevista, redação, configuração e teste. Se você decide que sua hora vale R$ 60, a implantação sai por R$ 720. Arredonde para um pacote fechado, por exemplo R$ 800, e explique o que está incluído. Esses números são ilustrativos: cobre conforme sua realidade e sua experiência.</p>

    <p>A manutenção mensal cobre o que muda no negócio: novo preço, novo horário, promoção, feriado. Se você reserva 2 horas por mês, uma mensalidade de R$ 120 a R$ 180 cobre o tempo e o suporte, e deixa claro que o bot não é um produto "entregue e esquecido". A lógica de contrato recorrente está detalhada em <a href="/artigos/retainer-de-automacao-mensalidade-suporte-e-contrato-para-freelancer">retainer de automação</a>, e a conta de preço por hora em <a href="/artigos/como-precificar-servicos-usando-ia-no-trabalho">como precificar serviços com IA</a>.</p>

    <p>Custos da ferramenta (assinatura do bot, número do WhatsApp) devem aparecer separados, pagos pelo cliente, com o preço atual conferido na página oficial no dia da proposta. Assim você não absorve reajuste de plano e o dono sabe de onde vem cada cobrança.</p>

    <h2>Contrato mínimo e cuidados com dados dos clientes</h2>

    <p>Um contrato de uma página já protege os dois lados. Inclua: o escopo (dentro e fora), o prazo de entrega, quem aprova as respostas (o dono, por escrito), o valor da implantação e da mensalidade, como cancelar, e a frase de que o bot encaminha a uma pessoa quando não sabe responder. Inclua também quem é dono da base de respostas: o ideal é que seja o cliente, e você fique com o método, não com o conteúdo.</p>

    <p>Sobre dados pessoais, o bot vai receber nome, telefone e, às vezes, informações mais sensíveis que o cliente digita sem pensar. A ANPD publica material para pequenos negócios, como o guia de segurança da informação para agentes de tratamento de pequeno porte, na página de <a href="https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes" target="_blank" rel="noopener noreferrer">materiais educativos da ANPD</a> (consultada em 24/10/2026). Combine com o <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio</a> e oriente o dono a incluir no início do chat um aviso de que o cliente fala com um assistente automático.</p>

    <h2>Como conseguir os primeiros clientes</h2>

    <p>Comece pelo seu círculo próximo: o salão que você frequenta, a oficina do bairro, a clínica do seu dentista. Faça uma demonstração de 10 minutos usando o próprio cardápio, tabela ou lista de serviços do negócio, de forma que o dono veja o bot respondendo às perguntas dele. Isso vende mais do que qualquer apresentação de slides.</p>

    <p>Depois, use uma <a href="/artigos/propostas-comerciais-com-ia-como-fechar-mais-contratos">proposta comercial curta</a> e, se quiser buscar projetos em plataformas, siga o roteiro de <a href="/artigos/conseguir-clientes-no-99freelas-com-ia-perfil-proposta-e-preco">clientes no 99Freelas</a>. Outras ideias de oferta para o mesmo público estão em <a href="/artigos/como-vender-pacotes-de-automacao-de-ia-para-negocios-locais">pacotes de automação para negócios locais</a> e em <a href="/artigos/como-ganhar-dinheiro-criando-e-vendendo-agentes-de-ia-personalizados">criar e vender agentes personalizados</a>. O <a href="/artigos/perfil-da-empresa-no-google-com-ia-respostas-fotos-e-posts">perfil da empresa no Google</a> também é um bom serviço complementar.</p>

    <h2>Erros comuns que travam o projeto</h2>

    <ul class="checklist">
      <li>Prometer que o bot "atende tudo": ele responde ao que está na base, e o resto vai para uma pessoa.</li>
      <li>Escrever respostas sem aprovação do dono, o que depois vira discussão sobre quem errou.</li>
      <li>Esquecer o caminho para o humano, o que irrita o cliente final e pode contrariar a política do canal.</li>
      <li>Não cobrar manutenção e acabar atualizando preço de graça para sempre.</li>
      <li>Usar dados reais de clientes em testes sem autorização ou sem necessidade.</li>
      <li>Entregar sem treinar o dono, que depois liga toda semana para pedir mudança simples.</li>
    </ul>

    <p>Se a ideia é testar o mercado sem grande investimento, escolha um nicho e monte uma base modelo para ele (por exemplo, clínicas odontológicas), que você adapta a cada novo cliente. Para entender como esse atendimento se encaixa no resto do negócio, vale ler também o artigo sobre <a href="/artigos/sac-com-ia-protocolo-prazo-de-resposta-e-quando-chamar-humano">SAC com IA e quando chamar um humano</a>. Quer ver mais ideias de serviços para vender? Explore a categoria de <a href="/categoria/monetizacao">monetização com IA</a>.</p>
  `,
  faq: [
    {
      question: "Quanto cobrar para criar um chatbot de FAQ para um negócio local?",
      answer:
        "Não há tabela oficial. Calcule as horas de entrevista, redação, configuração e teste, multiplique pelo valor da sua hora e arredonde em pacote fechado. Some uma mensalidade pela manutenção das respostas e deixe a assinatura da ferramenta por conta do cliente.",
    },
    {
      question: "Preciso saber programar para vender esse serviço?",
      answer:
        "Não necessariamente. Muitas ferramentas permitem montar o bot sem código, a partir de uma base de perguntas e respostas. O mais importante é saber levantar as perguntas certas, escrever respostas claras, testar bem e explicar limites ao cliente.",
    },
    {
      question: "O chatbot pode responder preço e prazo sozinho?",
      answer:
        "Pode, desde que o preço e o prazo estejam na base aprovada pelo dono e sejam atualizados na manutenção. Para valores negociados, descontos ou exceções, o bot deve chamar uma pessoa, porque a informação dada ao consumidor pode obrigar o negócio.",
    },
    {
      question: "O bot de WhatsApp precisa de algum cuidado especial?",
      answer:
        "Sim. Confira a política atual da WhatsApp Business: ela exige opt-in para mensagens ativas e trata de automação e do encaminhamento a uma pessoa. Use o bot para responder a quem escreveu e evite envio em massa sem permissão.",
    },
    {
      question: "Como mostrar o serviço a um cliente que nunca usou IA?",
      answer:
        "Faça uma demonstração curta com as perguntas reais do próprio negócio, no celular do dono. Ver o bot responder ao que ele costuma digitar todo dia convence mais do que qualquer explicação técnica, e abre espaço para falar do escopo.",
    },
  ],
};
