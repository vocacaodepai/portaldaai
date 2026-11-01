import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "cliente-pediu-para-apagar-seus-dados-como-responder-pela-lgpd-no-pequeno-negocio",
  title: "Cliente pediu para apagar seus dados: como responder pela LGPD",
  seoTitle: "Cliente pediu para apagar dados: como responder (LGPD)",
  excerpt:
    "Cliente pediu para apagar os dados? Veja como responder pela LGPD no pequeno negócio: prazo, o que apagar, o que guardar, canal de contato e modelo de resposta com IA.",
  metaDescription:
    "Pedido de exclusão de dados na loja ou no serviço: o que a ANPD orienta, quando apagar, quando guardar, o prazo de 15 dias para declaração completa e um roteiro com modelos de resposta.",
  category: "negocios",
  articleSubcategory: "gestao-e-operacao",
  date: "2026-11-01",
  readTime: 7,
  imageQuery: "shop owner laptop customer data privacy",
  seed: 990,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O pedido de um cliente para apagar dados é direito previsto na LGPD e deve ser feito diretamente ao seu negócio, que precisa responder logo; se não puder atender na hora, deve explicar o motivo.",
    "A eliminação não é automática em todos os casos: a ANPD admite guardar dados quando há obrigação legal ou regulatória, entre outras hipóteses, então registre o que apagou e o que manteve, com a razão.",
    "Tenha um canal de contato visível, um roteiro de cinco passos e um modelo de resposta; a IA ajuda a redigir, mas não deve receber os dados do cliente.",
  ],
  content: `
    <p>Quando um cliente pede para apagar seus dados, a LGPD manda que o pedido seja feito diretamente ao seu negócio, que é o responsável por atender, e que a resposta venha de imediato. Se não for possível apagar na hora, você precisa responder explicando o motivo. Na prática: confirme quem pediu, localize os dados, apague o que puder, guarde o que a lei obriga e registre tudo.</p>

    <p>Este guia traz um roteiro de cinco passos para o dono de loja, clínica, estúdio ou serviço, com base nas respostas oficiais da ANPD. Não é parecer jurídico: para casos de saúde, de menores ou de litígio, converse com um advogado. As páginas citadas foram conferidas em 01/11/2026.</p>

    <h2>O que a ANPD diz sobre o pedido do titular</h2>

    <p>Na <a href="https://www.gov.br/anpd/pt-br/acesso-a-informacao/perguntas-frequentes/perguntas-frequentes" target="_blank" rel="noopener noreferrer">FAQ da ANPD</a>, a Autoridade explica que os direitos do artigo 18 da LGPD são exercidos por requerimento expresso feito diretamente ao agente de tratamento, isto é, ao seu negócio. A lista inclui acesso, correção, portabilidade e a eliminação de dados tratados com consentimento. O titular também pode revogar o consentimento, por procedimento gratuito e facilitado.</p>

    <p>O texto afirma que os requerimentos devem ser atendidos de imediato. Se isso não for possível, o controlador deve responder dizendo que não é o agente de tratamento (e indicar quem é, se puder) ou explicando as razões pelas quais não consegue atender na hora. A ANPD informa que fixará prazos em norma própria para os casos sem atendimento imediato. Já para a declaração completa de confirmação e acesso aos dados, o prazo é de até 15 dias, e a FAQ lembra que a Resolução CD/ANPD nº 2 permite prazo em dobro para agentes de pequeno porte.</p>

    <p>Para o contexto geral de quem usa IA com dados de cliente, vale o <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio que usa IA</a>.</p>

    <h2>Apagar ou guardar: a decisão caso a caso</h2>

    <p>A FAQ diz que, quando não incide nenhuma das hipóteses de conservação, o controlador deve eliminar os dados. A conservação é autorizada, entre outros casos, para cumprimento de obrigação legal ou regulatória, para estudo por órgão de pesquisa (com anonimização sempre que possível), para transferência a terceiros nos termos da lei e para uso exclusivo do controlador com dados anonimizados.</p>

    <p>O caso mais comum no pequeno comércio é a obrigação legal: documentos fiscais e contábeis têm prazos de guarda. Quanto tempo exatamente depende do documento e da legislação aplicável, então peça essa informação ao seu contador antes de responder. O guia sobre <a href="/artigos/de-mei-para-microempresa-quando-migrar-simples-nacional-e-contador">quando ter um contador</a> ajuda a decidir isso.</p>

    <table>
      <thead>
        <tr><th>Tipo de dado</th><th>Em geral</th><th>Cuidado</th></tr>
      </thead>
      <tbody>
        <tr><td>Lista de e-mail e WhatsApp de promoções</td><td>Apagar (consentimento revogado)</td><td>Remover de todas as ferramentas e de planilhas</td></tr>
        <tr><td>Cadastro do cliente sem compra</td><td>Apagar</td><td>Incluir backups no plano de limpeza</td></tr>
        <tr><td>Nota fiscal e dados de compra</td><td>Pode ser obrigatório guardar</td><td>Confirmar prazo com o contador e limitar o acesso</td></tr>
        <tr><td>Conversas de atendimento</td><td>Depende do uso e de eventual disputa</td><td>Guardar o mínimo necessário e anotar o motivo</td></tr>
        <tr><td>Fotos e depoimentos publicados</td><td>Retirar se havia consentimento</td><td>Ver <a href="/artigos/depoimentos-de-clientes-como-pedir-publicar-e-usar-com-ia-sem-risco">depoimentos de clientes</a></td></tr>
      </tbody>
    </table>

    <h2>Roteiro de cinco passos</h2>

    <h3>1. Registrar o pedido</h3>

    <p>Anote data, canal (WhatsApp, e-mail, balcão), nome e o que foi pedido. Mesmo um pedido informal conta. O mesmo caderno de protocolo do <a href="/artigos/sac-com-ia-protocolo-prazo-de-resposta-e-quando-chamar-humano">SAC com protocolo</a> serve aqui.</p>

    <h3>2. Confirmar a identidade</h3>

    <p>Peça só o suficiente para ter certeza de que é o titular, como o e-mail ou o telefone cadastrados. Não exija documento sem necessidade: pedir mais dados para proteger dados é um contrassenso.</p>

    <h3>3. Mapear onde estão os dados</h3>

    <p>Planilha de clientes, sistema de vendas, ferramenta de e-mail, WhatsApp Business, agenda, backup, formulário, ferramenta de IA em que alguém colou o nome. Aqui o inventário vale ouro. Quem já fez a <a href="/artigos/politica-de-uso-de-ia-na-pequena-empresa-regras-simples-para-a-equipe">política de uso de IA</a> sabe onde procurar; quem não fez descobre o problema neste momento.</p>

    <h3>4. Apagar, restringir ou guardar, e registrar</h3>

    <p>Apague o que não precisa ficar. O que ficar por obrigação legal, restrinja o acesso e anote a razão. Cuidado com listas de campanha: retire a pessoa também da audiência do <a href="/artigos/campanha-de-whatsapp-opt-in-lista-e-mensagens-com-ia-sem-risco-de-banimento">WhatsApp</a> e da base de <a href="/artigos/email-marketing-com-ia-para-pequenas-empresas-lista-e-regras">e-mail marketing</a>.</p>

    <h3>5. Responder por escrito</h3>

    <p>Diga o que foi apagado, o que foi mantido e por quê, e como falar com você. Guarde a resposta. Veja o modelo abaixo.</p>

    <h2>Modelo de resposta e como a IA ajuda</h2>

    <p>A IA serve para redigir com tom humano, mas o texto deve ser revisado por você, e o pedido do cliente não deve ser colado com nome, telefone ou e-mail. Troque por "Cliente X". O guia de <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">colar dados da empresa no ChatGPT</a> detalha o limite.</p>

    <pre><code>Escreva uma resposta curta e cordial a um cliente que pediu a exclusão dos dados pessoais.
Dados da resposta:
- Apagamos: cadastro de promoções e contato de WhatsApp.
- Mantivemos: nota fiscal da compra de 12/08, por obrigação legal, com acesso restrito.
- Canal para dúvidas: e-mail contato@minhaloja.com.br.
Tom: respeitoso, sem juridiquês, no máximo 110 palavras. Não prometa prazos que não informei.</code></pre>

    <p>O resultado, revisado, pode ficar assim: "Olá! Recebemos seu pedido e já apagamos seu cadastro de promoções e seu contato de WhatsApp. Mantivemos apenas a nota fiscal da compra de 12/08, porque somos obrigados a guardar esse documento, e o acesso a ela é restrito. Se tiver qualquer dúvida, escreva para contato@minhaloja.com.br."</p>

    <h2>Canal visível e encarregado</h2>

    <p>A FAQ da ANPD diz que o encarregado é o canal de comunicação entre o controlador, os titulares e a Autoridade, e que seus contatos devem ser divulgados publicamente, de preferência no site. Para agentes de tratamento de pequeno porte, a dispensa de indicar encarregado existe, mas é preciso oferecer um canal de comunicação com o titular. Em termos práticos: coloque um e-mail ou um WhatsApp de privacidade no rodapé do site e na bio do Instagram.</p>

    <p>Se o cliente não ficar satisfeito, ele pode peticionar contra você à ANPD. A página da Autoridade sobre <a href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados" target="_blank" rel="noopener noreferrer">direitos do titular</a> explica que, quando o controlador não concede os direitos, o titular pode apresentar reclamação, e a FAQ complementa que a petição deve comprovar que o pedido foi antes feito ao controlador. Por isso, guardar seu registro importa.</p>

    <h2>Pedido de cliente que veio por decisão automática</h2>

    <p>Se o cliente reclama não só de dados guardados, mas de uma decisão tomada por sistema ou IA (limite, recusa, preço), o assunto é outro: o direito de pedir revisão. O guia sobre <a href="/artigos/decisao-automatizada-lgpd-como-pedir-revisao-de-uma-ia">decisão automatizada e revisão</a> explica o lado do consumidor, e vale conhecer para responder bem.</p>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Ignorar o pedido por ser informal.</strong> Mensagem de WhatsApp conta.</li>
      <li><strong>Apagar tudo sem ver o contador.</strong> Pode haver guarda obrigatória de documentos.</li>
      <li><strong>Esquecer os backups e as planilhas soltas.</strong> O dado volta a aparecer.</li>
      <li><strong>Colar o pedido numa IA com nome e telefone.</strong> Você cria outro problema de privacidade.</li>
      <li><strong>Não registrar.</strong> Sem registro, você não prova que atendeu.</li>
    </ul>

    <h2>Próximo passo</h2>

    <p>Reserve 30 minutos esta semana para fazer um inventário simples: onde ficam os dados dos clientes e quem tem acesso. Depois, publique o canal de privacidade e salve o modelo de resposta. Para seguir, veja <a href="/artigos/adequacao-a-lgpd-como-servico-para-pequenos-negocios-com-ia">adequação à LGPD</a> e os outros guias da <a href="/categoria/negocios">categoria Negócios</a>.</p>
  `,
  faq: [
    {
      question: "Qual o prazo para atender um pedido de exclusão de dados?",
      answer:
        "Segundo a FAQ da ANPD, os pedidos do titular devem ser atendidos de imediato. Se não for possível, é preciso responder explicando o motivo, e a Autoridade fixará prazos em norma própria. O prazo de 15 dias vale para a declaração completa de confirmação e acesso, não para a eliminação. Agentes de pequeno porte podem ter prazo em dobro.",
    },
    {
      question: "Sou obrigado a apagar todos os dados do cliente?",
      answer:
        "Nem sempre. A ANPD admite a conservação em hipóteses como cumprimento de obrigação legal ou regulatória, como a guarda de documentos fiscais. Fora disso, os dados devem ser eliminados. Registre o que apagou, o que manteve e a justificativa, e peça ao contador o prazo de guarda de cada documento.",
    },
    {
      question: "O pedido do cliente precisa ser formal?",
      answer:
        "A FAQ da ANPD fala em requerimento expresso feito diretamente ao agente de tratamento, mas não exige formulário. Uma mensagem clara de WhatsApp ou e-mail serve. Registre data, canal e o conteúdo, confirme a identidade de quem pediu com o mínimo de dados e responda por escrito.",
    },
    {
      question: "Pequeno negócio precisa ter encarregado de dados?",
      answer:
        "A ANPD informa que agentes de tratamento de pequeno porte são dispensados de indicar encarregado, conforme a Resolução CD/ANPD nº 2, mas devem oferecer um canal de comunicação com o titular. Divulgue um e-mail ou WhatsApp de privacidade no site e nas redes e responda quem escrever.",
    },
    {
      question: "Posso usar IA para responder ao cliente que pediu exclusão?",
      answer:
        "Pode usar para redigir o texto, mas sem colar nome, telefone, e-mail ou detalhes do cliente. Troque por termos genéricos, revise o resultado e confirme que o que está dito é o que de fato foi feito. A decisão sobre apagar ou guardar é sua, com apoio do contador ou de um advogado.",
    },
  ],
};
