import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "power-bank-no-aviao-e-como-escolher",
  title: "Power bank: como escolher, cuidar e levar no avião",
  seoTitle: "Power bank: como escolher, cuidar e levar no avião",
  excerpt:
    "Power bank: veja como escolher a capacidade, calcular quantas cargas ele rende, cuidar da bateria e levar o carregador no avião pelas regras da Anac.",
  metaDescription:
    "Como escolher power bank: conta em Wh, cargas que ele rende, cuidados com a bateria, sinais de defeito e o limite da Anac para levar no avião em 2026.",
  category: "guias-e-dicas",
  articleSubcategory: "uso-e-cuidados",
  date: "2026-11-27",
  readTime: 8,
  imageQuery: "power bank charging smartphone",
  seed: 2612,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Um power bank de 10.000 mAh guarda cerca de 37 Wh, mas entrega menos que isso ao celular: na conta publicada pela Anker, sobram perto de 6.000 mAh na saída de 5 V.",
    "A Anac permite até dois power banks por passageiro, só na bagagem de mão: até 100 Wh sem autorização, de 100 a 160 Wh com aval da companhia e nada acima disso.",
    "Cheiro estranho, estufamento, mudança de cor, vazamento, ruído ou calor excessivo são sinais para parar de usar a bateria e dar a ela o descarte correto.",
  ],
  content: `
    <p>Para escolher um power bank, comece pela capacidade em Wh e por quantas cargas você precisa longe da tomada. Um modelo de 10.000 mAh costuma render perto de uma carga e meia em um celular grande, e um de 20.000 mAh, cerca de três, em contas teóricas que variam conforme o aparelho.</p>
    <p>Este guia mostra essa conta, o que olhar antes de comprar, como cuidar da bateria e o que a Anac exige para embarcar. Não testamos nenhum carregador aqui: os números vêm das fontes indicadas e das fichas citadas nas nossas análises.</p>

    <h2>Quanto um power bank de 10.000 mAh entrega de verdade?</h2>
    <p>O número em mAh impresso em destaque se refere à bateria interna, que trabalha em cerca de 3,7 V. A saída USB comum é de 5 V, e ainda há perda no circuito e no cabo. O <a href="https://service.anker.com/article-description/Why-Is-the-Rated-Capacity-Marked-on-a-Power-Bank-Lower-Than-Expected" target="_blank" rel="noopener noreferrer">suporte da Anker sobre capacidade nominal</a> faz a conta com 82% de eficiência: 10.000 mAh viram cerca de 6.000 mAh na saída (página consultada em 27/11/2026).</p>
    <p>Para comparar modelos, converta para watt-hora (Wh): multiplique os mAh pela tensão e divida por 1.000. Se o corpo do produto já mostrar o valor em Wh, use o que está impresso. A tabela aplica a mesma eficiência a quatro tamanhos e supõe um celular de 5.000 mAh com bateria de 3,85 V (cerca de 19 Wh).</p>
    <table>
      <thead>
        <tr><th>Capacidade na caixa</th><th>Energia a 3,7 V</th><th>Saída estimada a 5 V</th><th>Cargas teóricas</th></tr>
      </thead>
      <tbody>
        <tr><td>5.000 mAh</td><td>18,5 Wh</td><td>cerca de 3.000 mAh</td><td>menos de 1</td></tr>
        <tr><td>10.000 mAh</td><td>37 Wh</td><td>cerca de 6.000 mAh</td><td>cerca de 1,5</td></tr>
        <tr><td>20.000 mAh</td><td>74 Wh</td><td>cerca de 12.100 mAh</td><td>cerca de 3</td></tr>
        <tr><td>30.000 mAh</td><td>111 Wh</td><td>cerca de 18.200 mAh</td><td>cerca de 4,5</td></tr>
      </tbody>
    </table>
    <p>Leia a última coluna como teto aproximado. O celular também perde energia enquanto carrega, e usar a tela durante a carga reduz o resultado. Se a embalagem informar uma "capacidade nominal" menor, ela provavelmente já desconta parte dessas perdas, então não aplique o desconto outra vez.</p>

    <h2>Como escolher o power bank pela sua rotina</h2>
    <p>Pense primeiro no peso que você aceita carregar. Para chegar ao fim de um dia comum, um modelo menor costuma bastar, enquanto fim de semana sem tomada ou dois aparelhos pedem mais folga. No nosso <a href="/artigos/melhor-power-bank-carregador-portatil-comparativo-2026">comparativo de power bank</a>, o modelo de 20.000 mAh com fio aparece com 412 g, e o magnético de 10.000 mAh ganha em praticidade para quem usa encaixe do tipo MagSafe.</p>
    <p>Depois olhe a potência, medida em watts. Ela só aparece na prática se o carregador, o cabo e o celular aceitarem o mesmo padrão, como USB Power Delivery. Carga por indução dispensa o cabo, mas costuma ser mais lenta que a ligação com fio.</p>
    <ul class="checklist">
      <li>Capacidade em Wh ou, no mínimo, mAh com a tensão informada no rótulo.</li>
      <li>Potência de saída compatível com o seu celular, tablet ou notebook leve.</li>
      <li>Quantidade e tipo de portas (USB-C, USB-A) e se há entrada USB-C para recarregar.</li>
      <li>Marca identificada, manual, garantia e selo de homologação da Anatel.</li>
      <li>Peso e tamanho que caibam na bolsa que você já usa.</li>
    </ul>
    <p>A Anatel, nas orientações de uso seguro de celulares e acessórios, pede carregadores e baterias homologados. Desconfie de anúncio com capacidade enorme em corpo minúsculo, sem marca e sem ficha técnica. Em compras pela internet, o guia para <a href="/artigos/comprar-na-black-friday-comparar-precos-evitar-golpe-e-arrependimento">comparar preços e evitar golpe</a> ajuda a checar vendedor e histórico, e a regra de <a href="/artigos/devolucao-por-arrependimento-na-compra-online-7-dias-frete-e-estorno">devolução por arrependimento</a> vale conhecer antes de pagar.</p>

    <h2>Carregador, cabo e uso no dia a dia</h2>
    <p>O power bank precisa ser recarregado, e uma fonte fraca pode deixar esse processo bem demorado. Confira no manual a potência de entrada aceita antes de comprar outra fonte. Um modelo compacto como o <a href="/artigos/baseus-enerfill-fn22-45w-carregador-usb-c-shopee-vale-a-pena">Baseus EnerFill FN22</a> oferece versões de até 45 W, e o <a href="/artigos/melhor-carregador-gan-usb-c-comparativo-2026">comparativo de carregadores GaN</a> mostra uma opção com mais portas.</p>
    <p>O cabo também limita a velocidade e pode ser o ponto fraco do conjunto. Troque o que estiver com fio exposto, ponta torta ou mau contato. Quem quer um só para celular e notebook pode comparar os <a href="/artigos/cabo-usb-c-240w-anker-zolo-ou-anker-nano-comparativo">cabos USB-C de 240 W da Anker</a>.</p>
    <p>Em alguns lugares, outro acessório resolve melhor. No carro, um <a href="/artigos/anker-323-ou-anker-30w-carregador-veicular-comparativo">carregador veicular com USB-C</a> poupa a reserva da mochila para quando você descer. Na mesa de cabeceira, um <a href="/artigos/carregador-qi2-anker-maggo-pad-ou-ugreen-2-em-1-dobravel-comparativo">carregador Qi2 de tomada</a> faz o encaixe magnético sem gastar bateria portátil.</p>
    <p>Para a carga render mais, reduza o brilho da tela e ative a economia de energia do celular. Em viagem, baixar o idioma no <a href="/artigos/google-tradutor-no-celular-camera-conversa-e-modo-offline">Google Tradutor em modo offline</a> ajuda quando o sinal é ruim, e vale fazer isso ainda ligado na tomada de casa.</p>

    <h2>Cuidados com a bateria e sinais de defeito</h2>
    <p>A agência americana de incêndios, a USFA, publica <a href="https://www.usfa.fema.gov/prevention/home-fires/prevent-fires/batteries/" target="_blank" rel="noopener noreferrer">orientações sobre segurança de baterias</a> que servem de base para a rotina em casa. Ela recomenda parar de usar a bateria que apresentar cheiro, mudança de cor ou de formato, calor excessivo, vazamento ou ruídos estranhos. Também orienta não carregar abaixo de 0 °C nem acima de 40 °C e, quando possível, guardar em temperatura ambiente.</p>
    <p>Sol direto, carro quente e materiais inflamáveis por perto ficam fora da lista de bons lugares. A orientação da Anatel segue a mesma linha: não recarregar em ambiente confinado, como bolsa, mala ou gaveta, e não guardar a bateria junto de objetos metálicos. Queda forte e perfuração podem causar fogo ou explosão.</p>
    <div class="callout-box callout-bad"><span class="callout-label">Nunca faça</span><p>Não fure, não abra e não tente consertar uma bateria estufada. Interrompa a carga se isso puder ser feito sem risco, afaste o que pegue fogo e, havendo fumaça ou chama, saia de perto e ligue para o Corpo de Bombeiros (193).</p></div>
    <p>Para descartar, não use o lixo comum. Procure um ponto de coleta de baterias ou eletrônicos na sua cidade e confirme antes se ele recebe power bank. A loja ou o fabricante também podem indicar o destino.</p>

    <h2>Pode levar power bank no avião?</h2>
    <p>Pode, com limites. A notícia oficial da Anac sobre as <a href="https://www.gov.br/anac/pt-br/noticias/2026/transporte-aereo-de-power-banks-tem-novas-regras" target="_blank" rel="noopener noreferrer">novas regras para power banks</a>, publicada em abril de 2026 e consultada em 27/11/2026, permite no máximo dois por passageiro, exclusivamente na bagagem de mão. Os terminais precisam estar protegidos contra curto-circuito, isolados ou na embalagem original.</p>
    <table>
      <thead>
        <tr><th>Capacidade</th><th>Pode embarcar?</th></tr>
      </thead>
      <tbody>
        <tr><td>Até 100 Wh</td><td>Sim, respeitado o limite de duas unidades</td></tr>
        <tr><td>Acima de 100 até 160 Wh</td><td>Só com autorização prévia da companhia aérea</td></tr>
        <tr><td>Acima de 160 Wh</td><td>Não, deve ser descartado antes de entrar na aeronave</td></tr>
      </tbody>
    </table>
    <p>A mesma norma proíbe recarregar o power bank a bordo e sugere não usá-lo para carregar outros eletrônicos durante o voo. O <a href="https://www.gov.br/portos-e-aeroportos/pt-br/assuntos/noticias/2026/05/passageiros-devem-ficar-atentos-as-novas-regras-para-transporte-de-power-banks-em-voos" target="_blank" rel="noopener noreferrer">Ministério de Portos e Aeroportos</a> acrescenta que ele deve ficar sob o assento à frente ou no bolsão, nunca no compartimento superior, e não deve ser ligado às entradas USB do avião. Companhias podem ser mais rígidas, então confirme com a sua antes de sair, sobretudo em voo internacional.</p>
    <p>Se a mala de mão for recolhida no portão para viajar no porão, tire o power bank antes de entregar. Isso pesa na escolha da bagagem, assunto do <a href="/artigos/mala-de-bordo-american-tourister-starvibe-p-ou-eagle-ac32-comparativo">comparativo de malas de bordo</a>.</p>

    <h2>Exemplo: um fim de semana entre São Paulo e Recife</h2>
    <p>Imagine uma viagem de dois dias, com mapa, fotos e cartão de embarque no mesmo celular de 5.000 mAh. Pela estimativa desta pessoa, falta uma carga completa extra por dia, ou cerca de 38 Wh no total. Um modelo de 10.000 mAh entregaria perto de 30 Wh pela conta anterior e ficaria curto se não houvesse tomada à noite.</p>
    <p>Um de 20.000 mAh teria cerca de 60 Wh aproveitáveis, com margem, e seus 74 Wh ficam abaixo do limite de 100 Wh. Se o hotel tiver tomada livre, o menor volta a fazer sentido e pesa menos o dia todo. Ao montar o <a href="/artigos/como-usar-ia-para-planejar-viagens-sem-perder-horas-pesquisando">roteiro com ajuda da IA</a>, anote onde haverá intervalo para recarregar.</p>
    <p>Um assistente de IA também pode fazer a conta a partir do rótulo. Envie só os dados do equipamento, sem bilhete nem documento:</p>
    <pre><code>Meu power bank informa [mAh] e [tensão em V]. Calcule a energia em Wh (mAh x V / 1000), mostre a conta e diga em qual destas faixas ele cai: até 100 Wh; acima de 100 até 160 Wh; acima de 160 Wh. Se faltar a tensão, pergunte em vez de supor. Não afirme regras de companhia aérea: liste o que devo confirmar com ela.</code></pre>
    <p>Refaça a multiplicação na calculadora antes de confiar. O texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">como checar respostas de IA</a> explica por que um chatbot pode errar com segurança aparente.</p>

    <h2>Erros comuns com power bank</h2>
    <ul>
      <li><strong>Comparar só os mAh da caixa:</strong> confira Wh, potência e a capacidade nominal informada.</li>
      <li><strong>Despachar o carregador na mala:</strong> ele só pode viajar com você, na bagagem de mão.</li>
      <li><strong>Levar três ou mais:</strong> o limite é de dois por passageiro, mesmo que todos sejam pequenos.</li>
      <li><strong>Embarcar sem rótulo legível:</strong> sem a capacidade à vista, fica difícil comprovar a faixa; confirme com a companhia.</li>
      <li><strong>Esquecer a entrada de recarga:</strong> veja no manual qual porta e qual potência recarregam o aparelho, para não descobrir isso na véspera da viagem.</li>
      <li><strong>Carregar dentro da mochila ou da gaveta:</strong> deixe em local ventilado, firme e visível.</li>
      <li><strong>Insistir em bateria estufada ou muito quente:</strong> pare de usar e descarte do jeito certo.</li>
    </ul>

    <p>Antes da próxima viagem, leia o rótulo do seu carregador, faça a conta em Wh e separe um estojo que proteja os contatos. Se concluir que precisa trocar de modelo, veja as análises de <a href="/categoria/ai-indica/informatica/power-bank">power bank na AI Indica</a> e compare capacidade, peso e potência antes de decidir.</p>
  `,
  faq: [
    {
      question: "Quantos power banks posso levar no avião?",
      answer:
        "Pela regra da Anac publicada em abril de 2026, no máximo dois por passageiro, somente na bagagem de mão. Até 100 Wh não exigem autorização. Entre 100 e 160 Wh dependem do aval prévio da companhia, e acima de 160 Wh o transporte é proibido. A empresa aérea pode adotar regras mais rígidas.",
    },
    {
      question: "Power bank de 20.000 mAh pode ir na bagagem de mão?",
      answer:
        "Com bateria de 3,7 V, 20.000 mAh equivalem a 74 Wh, abaixo do limite de 100 Wh que dispensa autorização. Ele deve ir com você, protegido contra curto-circuito, e conta entre as duas unidades permitidas. Confira o valor impresso no seu modelo, porque a tensão informada pelo fabricante pode mudar a conta.",
    },
    {
      question: "Como converter mAh em Wh?",
      answer:
        "Multiplique a capacidade em mAh pela tensão da bateria em volts e divida o resultado por 1.000. Um modelo de 10.000 mAh a 3,7 V tem 37 Wh. Não use os 5 V da saída USB se a capacidade foi informada para a bateria interna, e dê preferência ao número em Wh impresso no produto.",
    },
    {
      question: "Por que o power bank não carrega o celular tantas vezes quanto parece?",
      answer:
        "Porque a energia passa de cerca de 3,7 V na bateria interna para 5 V ou mais na saída, e parte se perde em calor no circuito e no cabo. O celular também tem perdas ao carregar. Em um exemplo da Anker, 10.000 mAh resultam em perto de 6.000 mAh na saída de 5 V.",
    },
    {
      question: "Posso usar o power bank para carregar o celular durante o voo?",
      answer:
        "A Anac proíbe recarregar o próprio power bank a bordo e sugere não usá-lo para carregar outros aparelhos. O Ministério de Portos e Aeroportos orienta não ligá-lo às entradas USB da aeronave. Como a companhia pode vetar o uso, siga o aviso da tripulação e embarque com o celular carregado.",
    },
  ],
};
