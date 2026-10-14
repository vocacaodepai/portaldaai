import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "pre-venda-e-lista-de-espera-com-ia-lancar-produto-pequeno",
  title: "Pré-venda e lista de espera com IA: como lançar um produto pequeno",
  seoTitle: "Pré-venda e lista de espera com IA: lançar produto",
  excerpt:
    "Pré-venda e lista de espera com IA ajudam a testar um produto antes de produzir. Veja o passo a passo, os prazos, os direitos do consumidor e os erros comuns.",
  metaDescription:
    "Pré-venda e lista de espera com IA: monte a página, escreva as mensagens, defina prazo de entrega e conheça as regras do CDC sobre arrependimento e atraso.",
  category: "negocios",
  articleSubcategory: "lancamento-e-estrategia",
  date: "2026-10-14",
  readTime: 8,
  imageQuery: "small business packages shipping table",
  seed: 302,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A lista de espera mede interesse sem cobrar nada; a pré-venda vai além e mede se a pessoa paga antes de o produto existir, o que reduz o risco de produzir demais.",
    "A IA ajuda a escrever a página, as mensagens e as respostas às dúvidas, mas o prazo de entrega prometido vira obrigação: pelo CDC, atraso é descumprimento de oferta.",
    "Na compra online, o consumidor tem sete dias corridos para desistir, e o prazo informado precisa ser cumprido ou o dinheiro deve ser devolvido.",
  ],
  content: `
    <p>Pré-venda e lista de espera são duas formas de testar um produto antes de gastar com estoque. A lista de espera junta nomes e e-mails de quem tem interesse; a pré-venda cobra de quem já quer comprar, com entrega futura combinada. Com IA, o pequeno negócio escreve a página, as mensagens e as respostas em um dia, mas a promessa de prazo continua sendo responsabilidade de quem vende.</p>

    <p>Este guia mostra como escolher entre as duas, montar uma página simples, usar prompts para preparar os textos e cumprir as regras do consumidor. Se a sua dúvida ainda é saber se a ideia presta, comece pelo texto sobre <a href="/artigos/como-validar-ideia-de-negocio-com-ia-antes-de-investir">validar ideia de negócio com IA antes de investir</a>.</p>

    <h2>Lista de espera ou pré-venda: qual usar</h2>

    <p>A diferença é o compromisso. Na lista de espera, a pessoa deixa o contato e ninguém paga nada: serve para medir interesse e avisar do lançamento. Na pré-venda, há pagamento antecipado, o que prova intenção de compra, mas cria uma obrigação de entrega. Para quem está começando, o caminho mais seguro é combinar as duas: primeiro a lista, depois a pré-venda para quem entrou nela.</p>

    <table>
      <thead>
        <tr><th>Critério</th><th>Lista de espera</th><th>Pré-venda</th></tr>
      </thead>
      <tbody>
        <tr><td>Cobra do cliente</td><td>Não</td><td>Sim, antes da entrega</td></tr>
        <tr><td>Mede</td><td>Interesse</td><td>Disposição de pagar</td></tr>
        <tr><td>Risco para você</td><td>Baixo</td><td>Médio: prazo e devolução</td></tr>
        <tr><td>Quando usar</td><td>Ideia ainda sem protótipo</td><td>Protótipo ou fornecedor definido</td></tr>
        <tr><td>Esforço jurídico</td><td>Aviso de privacidade</td><td>Prazo, política de troca e arrependimento</td></tr>
      </tbody>
    </table>

    <p>Quem já tem um público no WhatsApp ou nas redes pode pular direto para a pré-venda com um grupo pequeno. O guia de <a href="/artigos/como-usar-ia-para-vender-mais-no-seu-negocio-local">vender mais no negócio local com IA</a> mostra como trabalhar essa base próxima.</p>

    <h2>Passo a passo para montar a pré-venda em uma semana</h2>

    <p>Um cronograma enxuto evita que a ideia vire projeto eterno. Ajuste os prazos à realidade do seu fornecedor.</p>

    <ol>
      <li><strong>Dia 1:</strong> defina o produto, a versão mínima e o público. Escreva em uma frase para quem é e que problema resolve.</li>
      <li><strong>Dia 2:</strong> confirme com o fornecedor o prazo real de produção e envio, e some uma folga.</li>
      <li><strong>Dia 3:</strong> calcule preço e margem. O texto sobre <a href="/artigos/como-precificar-produtos-e-servicos-com-ia">precificar produtos e serviços com IA</a> ajuda a não esquecer taxas, frete e imposto.</li>
      <li><strong>Dia 4:</strong> monte a página de captura ou de venda, no modelo do guia de <a href="/artigos/como-criar-landing-pages-e-sites-simples-com-ia">landing pages e sites simples com IA</a>.</li>
      <li><strong>Dia 5:</strong> prepare as mensagens: convite, lembrete e resposta a dúvidas.</li>
      <li><strong>Dia 6:</strong> teste o fluxo de compra como cliente, do clique ao comprovante.</li>
      <li><strong>Dia 7:</strong> abra para um grupo pequeno e acompanhe as perguntas.</li>
    </ol>

    <p>Uma loja já montada, mesmo simples, ajuda a receber o pedido. O guia de <a href="/artigos/como-montar-uma-loja-virtual-em-um-fim-de-semana-usando-ia">montar uma loja virtual em um fim de semana</a> serve de apoio, e as <a href="/artigos/fotos-de-produto-para-vender-online-com-ia">fotos de produto com IA</a> ajudam quando o protótipo ainda não está pronto, desde que a imagem deixe claro que é ilustrativa.</p>

    <h2>Prompts para criar a página e as mensagens</h2>

    <p>A IA é boa em rascunhar variações e organizar objeções. Dê contexto real e peça clareza sobre prazo, porque é aí que nascem as reclamações.</p>

    <pre><code>Sou dono de uma pequena marca de velas aromáticas em Belo Horizonte. Vou abrir uma pré-venda de um kit com 3 velas por R$ 129, com envio previsto para 30 dias úteis após o fechamento da pré-venda. Escreva o texto da página em português simples, com título, 3 benefícios, a explicação de como a pré-venda funciona (pagamento agora, entrega depois), a política de troca e uma pergunta frequente sobre prazo. Não prometa nada que eu não tenha informado.</code></pre>

    <pre><code>Liste as 10 dúvidas e objeções mais prováveis de quem vai pagar antecipado por um produto que ainda não existe (confiança, prazo, devolução, tamanho, cheiro) e escreva uma resposta curta e honesta para cada uma, em tom cordial. Marque com "preciso confirmar" qualquer resposta que dependa de informação que eu não dei.</code></pre>

    <p>Essas respostas viram base para atendimento. Se você já usa o WhatsApp, o texto sobre <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">automatizar atendimento no WhatsApp com IA</a> mostra como organizar respostas prontas sem soar robótico, e o guia de <a href="/artigos/email-marketing-com-ia-para-pequenas-empresas-lista-e-regras">e-mail marketing com IA</a> explica as regras para manter e usar a lista de contatos.</p>

    <h2>Direitos do consumidor: o que você assume ao vender antes de entregar</h2>

    <p>A pré-venda é uma venda como qualquer outra. Pelo Idec, em compras fora da loja física, como sites, aplicativos e telefone, o consumidor tem <a href="https://idec.org.br/card-home/comprou-pela-internet-e-desistiu-reembolso-deve-ser-total" target="_blank" rel="noopener noreferrer">sete dias corridos para desistir da compra</a>, e o reembolso inclui valores como o frete. O Idec sugere contar o prazo a partir do dia seguinte ao recebimento, e lembra que serviços já iniciados com autorização, conteúdos digitais liberados na hora e produtos personalizados podem ter exceções. Confirme o seu caso com um advogado ou contador.</p>

    <p>O segundo ponto é o prazo. Ainda segundo o Idec, <a href="https://idec.org.br/consultas/dicas-e-direitos/atrasos-na-entrega-de-compras-online-direitos-dos-consumidores-devem-ser-assegurados" target="_blank" rel="noopener noreferrer">o atraso na entrega caracteriza descumprimento de oferta</a>, com base no artigo 35 do Código de Defesa do Consumidor. O cliente pode exigir a entrega, aceitar produto equivalente ou desistir e pedir a devolução integral, inclusive do frete. Ou seja: o prazo que você escreve na página é o prazo que vale, e o dia útil ou corrido deve estar explícito.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Este texto é informativo e não substitui orientação jurídica. Se você vende muito, vende a empresas ou vende produtos regulados, consulte um profissional antes de abrir a pré-venda.</p></div>

    <h2>Exemplo prático: kit de velas com meta de 40 pedidos</h2>

    <p>Veja uma conta hipotética, só para ilustrar o raciocínio. A dona da marca de velas define que só produz se tiver 40 pedidos. O kit custa R$ 129, e o custo de produção, embalagem e frete médio soma R$ 78 por unidade, deixando R$ 51 de margem antes de taxas de pagamento e impostos. Ela abre a lista de espera por duas semanas e, quando chega a 120 contatos, abre a pré-venda por sete dias, com prazo de envio de 30 dias úteis.</p>

    <p>Se vender 40 kits, a receita é de R$ 5.160, e o dinheiro pode ser usado para comprar insumos sem tirar capital do bolso. Se vender 12, ela avisa os compradores, devolve o valor integral e aprende que o preço, a foto ou o público precisavam de ajuste. Em ambos os casos, o ganho é informação barata. Esses números não são previsão de resultado: dependem do seu produto, do seu público e das suas taxas. O guia de <a href="/artigos/fluxo-de-caixa-com-ia-guia-pequenos-negocios">fluxo de caixa com IA</a> ajuda a simular o caixa durante os 30 dias de espera.</p>

    <h2>Como medir se a pré-venda deu certo</h2>

    <p>Defina antes de abrir o que é sucesso. Três números bastam: quantas pessoas entraram na lista, quantas dessas compraram e quantas perguntas repetidas apareceram. A taxa entre lista e compra mostra a força da oferta, e as perguntas repetidas mostram o que faltou na página. Depois da entrega, use a <a href="/artigos/pesquisa-de-satisfacao-com-ia-analisar-respostas-de-clientes">pesquisa de satisfação com IA</a> para ler as respostas dos clientes e melhorar a próxima rodada.</p>

    <p>Para manter o interesse durante a espera, mande atualizações curtas: foto da produção, data confirmada, aviso de atraso se houver. O guia de <a href="/artigos/ia-para-redes-sociais-criar-agendar-analisar-posts">IA para redes sociais</a> ajuda a planejar esse conteúdo de bastidores. O planejamento mais amplo de divulgação está no texto sobre <a href="/artigos/como-usar-ia-para-planejar-marketing-de-pequena-empresa">planejar marketing de pequena empresa com IA</a>.</p>

    <h2>Erros comuns de quem faz pré-venda</h2>

    <ul>
      <li><strong>Prometer prazo sem confirmar com o fornecedor.</strong> Atraso vira descumprimento de oferta.</li>
      <li><strong>Esconder a regra de devolução.</strong> Deixe a política visível antes do pagamento.</li>
      <li><strong>Usar imagem de IA como se fosse o produto final.</strong> Marque como ilustração até a foto real existir.</li>
      <li><strong>Misturar o dinheiro da pré-venda com o pessoal.</strong> Ele cobre a produção e pode precisar ser devolvido.</li>
      <li><strong>Não definir meta mínima.</strong> Sem número de pedidos que justifica produzir, você decide no susto.</li>
      <li><strong>Sumir durante a espera.</strong> Comunique a cada etapa, mesmo quando a notícia for atraso.</li>
    </ul>

    <p>Se você precisa estruturar a ideia antes de testar, o guia de <a href="/artigos/plano-de-negocios-com-ia-canvas-passo-a-passo">plano de negócios com IA e Canvas</a> ajuda, e o de <a href="/artigos/como-escrever-pitch-de-negocio-com-ia">pitch de negócio com IA</a> serve para apresentar o lançamento a sócios ou investidores.</p>

    <p>Lançar pequeno é uma forma de errar barato e acertar rápido. Escolha um produto, defina a meta de pedidos, escreva um prazo que você consiga cumprir e abra a lista esta semana. Quando quiser aprofundar a estratégia, volte à <a href="/categoria/negocios">categoria Negócios</a> do Portal da AI.</p>
  `,
  faq: [
    {
      question: "Qual a diferença entre pré-venda e lista de espera?",
      answer:
        "Na lista de espera a pessoa deixa o contato e não paga nada, o que mede interesse. Na pré-venda ela paga antes da entrega, o que prova intenção de compra, mas cria obrigação de prazo, entrega e devolução. Muitos negócios usam as duas em sequência para reduzir risco.",
    },
    {
      question: "Quem compra em pré-venda online pode desistir?",
      answer:
        "Em compras fora da loja física, como sites e aplicativos, o consumidor tem sete dias corridos para desistir, segundo o Idec, com reembolso dos valores pagos, incluindo o frete. Há exceções possíveis para serviços iniciados, conteúdo digital liberado na hora e produto personalizado. Confirme seu caso.",
    },
    {
      question: "O que acontece se eu atrasar a entrega da pré-venda?",
      answer:
        "Segundo o Idec, o atraso caracteriza descumprimento de oferta pelo artigo 35 do CDC. O cliente pode exigir a entrega, aceitar produto equivalente ou desistir e pedir a devolução integral, inclusive do frete. Por isso é melhor prometer um prazo com folga do que um prazo otimista.",
    },
    {
      question: "A IA pode criar a página de pré-venda sozinha?",
      answer:
        "Pode gerar o rascunho de títulos, benefícios, perguntas frequentes e mensagens, mas você precisa informar preço, prazo e política de troca reais e revisar tudo. Texto de IA sem revisão pode prometer o que você não entrega, e a promessa publicada na oferta passa a valer como compromisso.",
    },
    {
      question: "Quantas pessoas preciso na lista de espera para lançar?",
      answer:
        "Não existe número mágico. Defina uma meta de pedidos que cubra seu custo de produção e uma margem mínima, e veja quantos contatos se convertem em compra na primeira rodada. Uma lista pequena e engajada costuma valer mais do que muitos contatos sem interesse real no produto.",
    },
  ],
};
