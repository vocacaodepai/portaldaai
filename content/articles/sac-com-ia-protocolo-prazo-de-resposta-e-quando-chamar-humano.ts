import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "sac-com-ia-protocolo-prazo-de-resposta-e-quando-chamar-humano",
  title: "SAC com IA: protocolo, prazo de resposta e quando chamar humano",
  seoTitle: "SAC com IA: protocolo, prazo e atendente humano",
  excerpt:
    "Monte um SAC com IA no seu negócio usando como régua o decreto federal: protocolo, resposta em 7 dias, histórico e a hora certa de passar o cliente para uma pessoa.",
  metaDescription:
    "Como montar um SAC com IA para pequeno negócio: protocolo, prazo de resposta, regras de privacidade, modelos de mensagem e o momento de transferir para atendente humano.",
  category: "negocios",
  articleSubcategory: "atendimento",
  date: "2026-10-13",
  readTime: 7,
  imageQuery: "customer support headset desk laptop",
  seed: 280,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O decreto do SAC (11.034/2022) vale para serviços regulados pelo governo federal, mas serve de régua para qualquer negócio: atendimento sem repetir o problema, protocolo, resposta clara em 7 dias corridos e histórico acessível.",
    "A IA resolve bem a triagem, o rascunho de resposta e o registro; a decisão sobre cobrança indevida, cancelamento, reclamação grave ou cliente irritado deve ir para uma pessoa.",
    "Dados do cliente seguem a LGPD: peça só o necessário, não cole documentos em ferramentas sem critério e explique ao cliente quando uma automação responde por você.",
  ],
  content: `
    <p>Um SAC com IA funciona quando a máquina cuida do que é repetitivo (triagem, rascunho de resposta, protocolo e registro) e uma pessoa assume o que exige decisão (cobrança indevida, cancelamento, reclamação grave). A régua mais útil para organizar isso é o decreto federal do SAC, que fixa protocolo, histórico e resposta clara em até sete dias corridos.</p>

    <p>O decreto não obriga uma padaria nem uma loja de bairro, já que trata de serviços regulados pelo Poder Executivo federal. Mesmo assim, ele descreve o que o cliente brasileiro espera de um atendimento decente. Este guia mostra como transformar essas regras em processo, com prompts, modelos de mensagem e um exemplo com números, e onde a IA deve parar e passar a conversa adiante.</p>

    <h2>O que diz o decreto do SAC e a quem ele vale?</h2>

    <p>O <a href="https://www2.camara.leg.br/legin/fed/decret/2022/decreto-11034-5-abril-2022-792480-publicacaooriginal-164911-pe.html" target="_blank" rel="noopener noreferrer">Decreto 11.034, de 5 de abril de 2022</a>, regulamenta o Código de Defesa do Consumidor para o Serviço de Atendimento ao Consumidor no âmbito dos fornecedores de serviços regulados pelo Poder Executivo federal, como telefonia e bancos. O artigo 1º diz isso expressamente. Ou seja: comércio e serviços comuns não estão presos a ele, mas o Código de Defesa do Consumidor continua valendo para todos.</p>

    <p>Vale ler o texto como um manual de boas práticas. O acesso ao SAC é gratuito (art. 3º), o cliente não precisa dar dados antes de falar com o atendente (art. 4º, § 4º) e é proibido pedir que ele repita a demanda depois de registrada no primeiro atendimento (art. 10). A resposta deve sair em sete dias corridos, ser clara, objetiva e conclusiva e abordar todos os pontos da demanda (art. 13). O consumidor também tem direito a acompanhar a demanda por um registro numérico, que é o protocolo (art. 12).</p>

    <p>Em outras palavras, quem adota esses pontos oferece um atendimento acima da média sem ser obrigado a isso. O assunto também aparece no ponto de vista do cliente no guia <a href="/artigos/reclamar-de-empresa-com-ia-consumidor-gov-br-passo-a-passo">como reclamar de empresa com IA e Consumidor.gov.br</a>.</p>

    <h2>Quais regras do decreto viram processo no seu negócio?</h2>

    <table>
      <thead>
        <tr><th>Regra do decreto</th><th>Como aplicar com IA</th></tr>
      </thead>
      <tbody>
        <tr><td>Protocolo numérico (art. 12)</td><td>Planilha ou formulário que gera número a cada pedido; a IA preenche o resumo</td></tr>
        <tr><td>Não repetir a demanda (art. 10)</td><td>Resumo do caso fica no registro; quem assume lê, não pergunta de novo</td></tr>
        <tr><td>Resposta em 7 dias corridos (art. 13)</td><td>Painel com prazo e alerta; a IA monta o rascunho</td></tr>
        <tr><td>Resposta clara, objetiva e conclusiva (art. 13, § 2º)</td><td>Modelo com problema, solução e próximo passo, revisado por você</td></tr>
        <tr><td>Histórico acessível (art. 12)</td><td>Registro por cliente guardado e enviado quando pedido</td></tr>
        <tr><td>Cobrança indevida suspensa de imediato (art. 13, § 3º)</td><td>Sempre atendida por pessoa com poder de decisão</td></tr>
      </tbody>
    </table>

    <p>Observe que a tabela não depende de ferramenta cara. Uma planilha, o aplicativo de mensagens do negócio e um assistente de IA bastam para começar. Se você já usa mensagens no celular, o passo a passo de <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">automatizar o atendimento no WhatsApp com IA</a> ajuda na parte técnica, e o <a href="/artigos/como-criar-chatbot-de-atendimento-para-seu-site-sem-programar">guia de chatbot para o site</a> cobre o canal web.</p>

    <h2>O que a IA faz bem e o que ela não deve decidir</h2>

    <p>Uma boa divisão ajuda a evitar atrito. Entregue à IA a classificação do assunto (dúvida, pedido de segunda via, atraso, reclamação, cancelamento), a leitura do histórico, o rascunho de resposta no tom da marca e o resumo para o protocolo. Mantenha com uma pessoa tudo que envolve dinheiro, direito do cliente ou emoção forte.</p>

    <h3>Quando passar para um humano</h3>

    <ul class="checklist">
      <li>Cobrança indevida, estorno ou cancelamento de contrato.</li>
      <li>Cliente que repete o pedido duas vezes ou escreve em caixa alta e com tom de ameaça.</li>
      <li>Qualquer menção a processo, Procon, Consumidor.gov.br ou imprensa.</li>
      <li>Problema de saúde, segurança ou produto com defeito perigoso.</li>
      <li>Pedido relacionado a dados pessoais (acesso, correção, exclusão).</li>
      <li>Situação que a IA classifica com baixa confiança ou que fuja do roteiro.</li>
    </ul>

    <p>Veja que o decreto exige atendimento por humano, com horário mínimo, apenas na ligação telefônica (art. 5º, I) e, mesmo assim, só para as empresas que ele alcança. Nos canais por texto, quem decide é o seu bom senso, e a recomendação deste guia é sempre oferecer a saída para uma pessoa. Cliente preso num robô sem saída é o jeito mais rápido de perder a venda e ganhar uma reclamação pública. O texto <a href="/artigos/como-ia-esta-mudando-atendimento-ao-cliente">como a IA está mudando o atendimento ao cliente</a> mostra o que o mercado já faz nesse sentido.</p>

    <h2>Como montar o SAC em cinco passos</h2>

    <ol>
      <li><strong>Liste os 10 motivos de contato mais comuns.</strong> Pegue as últimas 50 conversas e agrupe. Normalmente 6 ou 7 assuntos respondem pela maioria.</li>
      <li><strong>Escreva as respostas-base com ajuda da IA.</strong> Revise cada uma contra a sua política real de troca, prazo e pagamento.</li>
      <li><strong>Crie o registro.</strong> Colunas: número do protocolo, data, cliente, canal, assunto, resumo, responsável, prazo, status.</li>
      <li><strong>Defina os gatilhos de transferência</strong> usando a lista acima, e escreva a frase de passagem: "vou chamar uma pessoa da equipe, que já vai ler seu caso, sem você precisar repetir".</li>
      <li><strong>Revise toda semana.</strong> Os casos que a IA errou viram novas regras. Documentar isso em um procedimento é o assunto do guia de <a href="/artigos/procedimento-operacional-padrao-com-ia-como-documentar-processos">procedimento operacional padrão com IA</a>.</li>
    </ol>

    <pre><code>Você faz a triagem do atendimento de uma loja de bicicletas. Leia a mensagem do cliente e responda em JSON com: assunto (duvida, segunda_via, atraso, troca, cobranca, cancelamento, outro), urgencia (baixa, media, alta), resumo_em_uma_frase e precisa_de_humano (sim ou nao). Se houver cobrança indevida, cancelamento, ameaça ou dado pessoal, precisa_de_humano deve ser sim. Mensagem: [cole aqui]</code></pre>

    <pre><code>Escreva uma resposta ao cliente com este formato: 1) reconheça o problema em uma frase, 2) diga o que será feito, 3) informe o prazo em dias corridos, 4) cite o número de protocolo [PROTOCOLO]. Tom educado e direto, sem jargão, no máximo 6 linhas. Use apenas os fatos abaixo e não invente prazo, valor ou política. Fatos: [cole aqui]</code></pre>

    <h2>Exemplo: loja de bicicletas com 60 mensagens por dia</h2>

    <p>Considere a Bike do Léo, em Curitiba, com duas pessoas atendendo cerca de 60 mensagens por dia pelo aplicativo de conversa do negócio. Depois de ler as últimas 100 conversas, o Léo vê que quatro assuntos (horário, prazo de entrega, troca de tamanho e acompanhamento de pedido) somam a maior parte. Ele cria respostas-base para esses quatro e usa a IA para classificar as novas mensagens e sugerir o texto.</p>

    <p>Cada pedido recebe um protocolo no formato LEO-0001, registrado na planilha. A regra interna é responder o primeiro contato no mesmo dia útil e fechar casos em até 7 dias corridos, o mesmo prazo do decreto, como meta e não como obrigação. Reclamações e estornos nunca recebem resposta automática: caem numa aba "humano" que o Léo olha duas vezes ao dia. O ganho esperado é tempo: o que antes era escrever do zero vira revisar e enviar. Qualquer número de economia deve ser medido por você depois de um mês, comparando tempo de resposta e reclamações. Para ver como a mesma lógica vale em outro setor, leia <a href="/artigos/ia-para-clinica-e-consultorio-agenda-confirmacao-e-lgpd">IA para clínica e consultório</a>.</p>

    <h2>Privacidade: o que o cliente tem direito de saber</h2>

    <p>O artigo 9º do decreto manda tratar os dados do consumidor de acordo com a LGPD, e isso vale também para a sua conversa com a IA. Colar nome completo, CPF, endereço e foto de documento num assistente genérico expõe o cliente. Prefira resumos sem identificação, use as configurações de privacidade da ferramenta e leia sobre o que se entrega sem perceber em <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a>.</p>

    <p>A <a href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares" target="_blank" rel="noopener noreferrer">página da ANPD sobre direitos dos titulares</a> lista, entre outros, o direito de pedir revisão de decisões tomadas apenas por tratamento automatizado e de solicitar explicação sobre os critérios usados. Para um SAC, isso significa que o cliente que questionar a resposta de um robô deve poder falar com uma pessoa. Para entender o contexto regulatório mais amplo, o texto sobre a <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei de IA no Brasil</a> ajuda.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Este texto é informativo e não substitui orientação jurídica. Se o seu setor é regulado (saúde, energia, telefonia, bancos), consulte as regras específicas do órgão regulador e um advogado.</p></div>

    <h2>Erros comuns em SAC com IA</h2>

    <ul>
      <li><strong>Deixar o robô responder sobre dinheiro.</strong> Promessa de estorno ou desconto errado vira problema jurídico e financeiro.</li>
      <li><strong>Não oferecer saída para uma pessoa.</strong> O cliente precisa saber como chegar a alguém.</li>
      <li><strong>Esconder que é automático.</strong> Avisar no início ("sou o assistente virtual") evita desconfiança.</li>
      <li><strong>Pedir os mesmos dados toda vez.</strong> O histórico existe para isso, e o decreto proíbe a repetição da demanda.</li>
      <li><strong>Não medir.</strong> Sem tempo de resposta, taxa de resolução e reclamações, você não sabe se melhorou. A <a href="/artigos/pesquisa-de-satisfacao-com-ia-analisar-respostas-de-clientes">pesquisa de satisfação com IA</a> fecha esse ciclo.</li>
      <li><strong>Ignorar o pós-atendimento.</strong> Cliente bem atendido volta, e o texto sobre <a href="/artigos/como-usar-ia-para-reduzir-cancelamento-de-clientes">reduzir cancelamento de clientes</a> mostra como ligar atendimento e retenção.</li>
    </ul>

    <h2>Próximos passos</h2>

    <p>Comece pequeno: escolha o canal de maior volume, crie os quatro ou cinco modelos de resposta e a planilha de protocolos, e rode por duas semanas com revisão humana de tudo. Se o atendimento envolve orçamentos, o guia de <a href="/artigos/ia-para-orcamentos-e-cotacoes-responder-clientes-rapido">IA para orçamentos e cotações</a> encaixa na mesma rotina, e quem recebe muita avaliação pública pode usar o roteiro de <a href="/artigos/como-melhorar-avaliacoes-e-reputacao-online-com-ia">reputação online com IA</a>. A melhor automação é aquela que o cliente nem percebe, porque o problema dele foi resolvido.</p>
  `,
  faq: [
    {
      question: "O decreto do SAC vale para pequenas empresas?",
      answer:
        "O Decreto 11.034/2022 vale para fornecedores de serviços regulados pelo Poder Executivo federal, como telefonia e bancos. Comércio e serviços comuns não estão sujeitos a ele, mas o Código de Defesa do Consumidor vale para todos. Muitos negócios usam o decreto como referência de boas práticas.",
    },
    {
      question: "Qual o prazo para responder o cliente no SAC?",
      answer:
        "Pelo decreto, as demandas do consumidor devem ser respondidas em sete dias corridos a partir do registro, com resposta clara, objetiva e conclusiva. Para negócios fora do alcance do decreto, o prazo não é obrigatório, mas adotá-lo como meta interna é uma boa prática e reduz reclamações.",
    },
    {
      question: "Posso usar chatbot de IA no atendimento?",
      answer:
        "Pode. O decreto exige atendimento por humano, com horário mínimo, no telefone para as empresas que ele alcança. Em canais de texto, o recomendável é avisar que o assistente é virtual e sempre oferecer a opção de falar com uma pessoa, principalmente em cobrança, cancelamento e reclamação.",
    },
    {
      question: "O que é protocolo de atendimento e para que serve?",
      answer:
        "É o número de registro da demanda. Segundo o decreto, o consumidor tem direito a acompanhar suas demandas por registro numérico ou procedimento eletrônico equivalente. Para o negócio, o protocolo evita que o cliente repita o problema e permite medir prazo, volume e taxa de resolução.",
    },
    {
      question: "Posso colar dados do cliente em uma ferramenta de IA?",
      answer:
        "Evite. Dados pessoais devem seguir a LGPD, e o decreto do SAC remete a ela. Prefira resumos sem nome, CPF ou documentos, ative as configurações de privacidade da ferramenta e peça apenas os dados necessários ao atendimento. Na dúvida, consulte um profissional de proteção de dados.",
    },
  ],
};
