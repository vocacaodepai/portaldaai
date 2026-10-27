import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "comprar-na-black-friday-comparar-precos-evitar-golpe-e-arrependimento",
  title: "Comprar na Black Friday com IA: preço, golpe e arrependimento",
  seoTitle: "Black Friday: comparar preços e evitar golpe com IA",
  excerpt:
    "Comprar na Black Friday sem cair em armadilha: veja como usar IA para comparar preços, checar sites suspeitos e usar o direito de arrependimento de 7 dias.",
  metaDescription:
    "Guia de Black Friday para o consumidor: como comparar preços com IA, checar loja e mensagem suspeita, guardar provas e usar o direito de arrependimento e o Consumidor.gov.br.",
  category: "iniciantes",
  articleSubcategory: "vida-pratica",
  date: "2026-10-20",
  readTime: 7,
  imageQuery: "online shopping phone credit card checkout",
  seed: 478,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Use a IA para montar a lista, anotar o preço normal de cada item antes da promoção e comparar lojas, mas confira o preço final no site oficial da loja, não na resposta do assistente.",
    "Peça ao assistente para analisar um link ou mensagem suspeita só como apoio: a decisão de pagar deve se basear em CNPJ, endereço do site, forma de pagamento e reputação da loja.",
    "Em compra pela internet, o Código de Defesa do Consumidor prevê 7 dias para desistir após o recebimento, segundo o Procon de Santa Catarina; guarde prints, e-mails e comprovantes.",
  ],
  content: `
    <p>Para comprar na Black Friday com segurança, anote o preço normal dos itens antes da promoção, compare no mínimo três lojas conhecidas, desconfie de oferta que chega por mensagem e guarde todos os comprovantes. A IA ajuda a organizar a lista, calcular a diferença e examinar textos suspeitos, mas quem confere preço, CNPJ e forma de pagamento é você. Em 2026, a data cai na sexta-feira, 27 de novembro.</p>

    <p>Este guia é para o consumidor comum e para quem pretende presentear no Natal. Ele traz um roteiro de preparação, prompts prontos, sinais de golpe e o que fazer se a compra der errado. As regras citadas foram conferidas em 20/10/2026 e não substituem orientação do Procon ou de um advogado.</p>

    <h2>Como se preparar antes da Black Friday</h2>

    <p>A preparação começa bem antes da data. Faça uma lista com o que realmente precisa comprar, o preço normal que você viu nas últimas semanas e o máximo que aceita pagar. Sem esse número, qualquer desconto parece bom.</p>

    <p>Um assistente de IA ajuda a organizar. Cole a lista (sem dados pessoais) e peça uma tabela com item, preço de referência, limite e prioridade. O guia de <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">finanças pessoais com IA</a> mostra como encaixar a compra no orçamento, e o texto sobre <a href="/artigos/como-usar-ia-para-planejar-festa-de-aniversario-com-orcamento">planejamento de festa com orçamento</a> usa a mesma lógica de teto de gasto.</p>

    <pre><code>Tenho uma lista de compras para a Black Friday. Monte uma tabela com colunas: item, preço normal que anotei, preço máximo que aceito pagar, prioridade (alta, média, baixa) e loja onde pretendo comparar. Lista: [cole aqui]. Não invente preços: se um valor estiver vazio, deixe em branco.</code></pre>

    <p>Salve o preço de cada item em uma planilha por duas semanas. Se quiser automatizar, veja o guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a>.</p>

    <h2>Comparar preços com IA sem cair em informação errada</h2>

    <p>Assistentes de IA são úteis para organizar comparações, mas podem errar preços e disponibilidade, porque trabalham com informação que pode estar desatualizada. Use a IA para estruturar, e confirme o valor na página da loja, no carrinho, com frete e parcelas somados.</p>

    <p>O recurso de pesquisa com IA do Google pode ajudar a achar opções, como explica o guia de <a href="/artigos/modo-ia-do-google-como-usar-a-pesquisa-com-ia">Modo IA do Google</a>. Para checar se uma resposta está certa, consulte <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>. Já os agentes que compram por você, tema de <a href="/artigos/agentes-de-ia-comprando-por-voce-comercio">agentes de IA comprando por você</a>, exigem ainda mais cuidado: não entregue o cartão a uma ferramenta que você não conhece.</p>

    <p>Segundo o Procon de Santa Catarina, quando um produto tem duas ofertas de preço, o consumidor pode pagar a menor, e isso vale também para compras online. Tire print das duas telas se encontrar divergência.</p>

    <table>
      <thead>
        <tr><th>O que comparar</th><th>Como conferir</th><th>Erro comum</th></tr>
      </thead>
      <tbody>
        <tr><td>Preço total</td><td>Valor no carrinho com frete e taxas</td><td>Comparar só o preço da vitrine</td></tr>
        <tr><td>Parcelamento</td><td>Valor final somando todas as parcelas</td><td>Achar que parcelado sem juros é igual a desconto</td></tr>
        <tr><td>Prazo de entrega</td><td>Data prevista na finalização da compra</td><td>Confiar em prazo de anúncio</td></tr>
        <tr><td>Política de troca</td><td>Página da loja</td><td>Não ler antes de pagar</td></tr>
        <tr><td>Reputação</td><td>Avaliações recentes e canais de reclamação</td><td>Olhar só a nota geral</td></tr>
      </tbody>
    </table>

    <h2>Sinais de golpe e como checar uma oferta suspeita</h2>

    <p>Golpe de Black Friday costuma ter preço baixo demais, pressa e pedido de pagamento fora do caminho normal. Desconfie de links recebidos por mensagem, de lojas sem CNPJ visível, de site com endereço parecido com marca conhecida e de vendedor que pede Pix para uma conta de pessoa física.</p>

    <p>A IA pode ajudar a examinar o texto de uma mensagem, mas não é um detector perfeito. O passo a passo está em <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">como usar IA para checar mensagem suspeita</a>. Um prompt útil:</p>

    <pre><code>Vou colar uma mensagem que recebi oferecendo produto com desconto na Black Friday. Liste sinais de golpe que você identifica no texto (urgência, link, forma de pagamento, erros) e diga o que eu devo checar por conta própria antes de clicar. Não diga que o link é seguro ou perigoso: eu vou verificar. Mensagem: [cole aqui, sem seus dados pessoais]</code></pre>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Se o preço parece bom demais, abra o site da loja digitando o endereço você mesmo, não pelo link recebido. Nunca informe senha de banco ou código recebido por SMS.</p></div>

    <p>Veja também o que fazer se o pior acontecer, no guia sobre <a href="/artigos/golpe-do-pix-o-que-fazer-nas-primeiras-horas-med-e-uso-de-ia">golpe do Pix e as primeiras horas</a>, e a notícia que mostra como os golpes com IA estão ficando mais convincentes, em <a href="/noticias/golpes-ia-verizon-dbir-2026">golpes com IA no relatório da Verizon</a>.</p>

    <h2>Direito de arrependimento: 7 dias nas compras online</h2>

    <p>A lista de direitos básicos do <a href="https://www.procon.sc.gov.br/veja-10-direitos-basicos-que-todo-consumidor-deve-saber/" target="_blank" rel="noopener noreferrer">Procon de Santa Catarina</a> explica que, em compra feita sem contato direto com o produto, como pela internet, o consumidor pode desistir em até 7 dias após o recebimento, conforme o artigo 49 do Código de Defesa do Consumidor, com algumas exceções. A mesma lista cita o prazo de reclamação por vício: 30 dias para bens não duráveis e 90 dias para duráveis.</p>

    <p>Na prática, ao receber o produto, conte os 7 dias, comunique a loja por escrito (e-mail ou chat com protocolo) e guarde a embalagem. Se a loja negar sem motivo, siga para o canal de reclamação. Quem vende e quer evitar atrito com devolução pode ler a visão do outro lado em <a href="/artigos/troca-e-devolucao-na-loja-online-politica-clara-e-respostas-com-ia">troca e devolução na loja online</a>.</p>

    <h2>Guarde provas e saiba onde reclamar</h2>

    <p>Tire print da oferta, do carrinho, da confirmação do pedido e do anúncio com preço e condições. Guarde e-mails, número do pedido, nota fiscal e protocolos de atendimento. Uma pasta no celular chamada "Black Friday 2026" resolve.</p>

    <p>Se a loja não resolver, o <a href="https://www.consumidor.gov.br/pages/conteudo/publico/1" target="_blank" rel="noopener noreferrer">Consumidor.gov.br</a> é um serviço público e gratuito de reclamação direta. Pela página oficial, a empresa tem 10 dias para responder e o consumidor tem 20 dias para avaliar a resposta, e o registro exige conta gov.br de nível prata ou ouro. A mesma página alerta que o serviço não substitui o SAC, o Procon, a Defensoria Pública nem os Juizados Especiais. O passo a passo com IA para redigir a queixa está em <a href="/artigos/reclamar-de-empresa-com-ia-consumidor-gov-br-passo-a-passo">reclamar de empresa com IA</a>.</p>

    <h2>Exemplo: comprando uma airfryer com teto de R$ 400</h2>

    <p>Marina quer uma airfryer e define: preço normal observado R$ 520, teto R$ 400. Na semana da Black Friday, encontra três ofertas: R$ 389 em uma loja conhecida, R$ 299 em um site que ela nunca ouviu falar e R$ 410 em um marketplace. Com a IA, ela monta a tabela de comparação e lista os sinais de alerta da oferta de R$ 299: preço 42% abaixo do que ela anotou, site sem CNPJ e pagamento só por Pix.</p>

    <p>Ela ignora a oferta suspeita, confere no carrinho da loja conhecida o frete e o prazo, tira print e paga no cartão, o que facilita contestar a cobrança se houver problema. Os valores são ilustrativos, não preços reais do mercado. O ganho vem do método, e não de uma loja específica.</p>

    <h2>Erros comuns de quem compra na Black Friday</h2>

    <ul class="checklist">
      <li>Comprar por impulso, sem lista e sem teto.</li>
      <li>Confiar no preço informado por um chatbot sem abrir a loja.</li>
      <li>Clicar em link de mensagem ou anúncio sem checar o endereço.</li>
      <li>Pagar fora da plataforma, em conta de pessoa física.</li>
      <li>Não guardar prints e protocolos.</li>
      <li>Passar do prazo de 7 dias para desistir da compra online.</li>
    </ul>

    <p>Se você vai comprar e também vender no fim do ano, vale ver o lado do lojista em <a href="/artigos/black-friday-2026-desconto-sem-prejuizo-para-pequeno-negocio">Black Friday 2026: desconto sem prejuízo</a>. Para proteger seus dados enquanto usa assistentes durante as compras, releia <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a>. Comece hoje: faça a lista, anote os preços e, quando a data chegar, compare com calma.</p>
  `,
  faq: [
    {
      question: "Posso desistir de uma compra feita na Black Friday pela internet?",
      answer:
        "Em geral sim: compras feitas fora da loja física, como pela internet, permitem desistir em até 7 dias após o recebimento, segundo o artigo 49 do Código de Defesa do Consumidor, citado pelo Procon de Santa Catarina. Comunique a loja por escrito e guarde o protocolo. Há exceções, então confira o caso.",
    },
    {
      question: "A IA consegue dizer se uma loja online é golpe?",
      answer:
        "Ela ajuda a identificar sinais em textos, como urgência, link estranho e forma de pagamento, mas não garante nada. Confirme CNPJ, endereço do site digitado por você, avaliações recentes e canais de contato. Quando houver dúvida, não pague.",
    },
    {
      question: "Como saber se o desconto da Black Friday é real?",
      answer:
        "Anote o preço dos itens por pelo menos duas semanas antes da data e compare com o preço na promoção, já com frete e parcelas. Se a loja aumentou o preço antes para simular desconto, guarde os prints do histórico e reclame ao Procon ou no Consumidor.gov.br.",
    },
    {
      question: "O que é o Consumidor.gov.br e como usar?",
      answer:
        "É um serviço público e gratuito em que o consumidor registra reclamação diretamente em empresas cadastradas. Pela página oficial, a empresa tem 10 dias para responder, e o consumidor tem 20 dias para avaliar. É preciso ter conta gov.br de nível prata ou ouro.",
    },
    {
      question: "Vale pagar com Pix na Black Friday?",
      answer:
        "Pix é rápido e pode ter desconto, mas é difícil reverter. Em lojas que você não conhece, prefira cartão de crédito, que facilita contestar cobrança. Nunca pague Pix para conta de pessoa física em compra de loja, e desconfie de qualquer pedido para sair da plataforma.",
    },
  ],
};
