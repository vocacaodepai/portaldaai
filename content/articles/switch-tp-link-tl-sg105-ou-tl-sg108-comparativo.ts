import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "switch-tp-link-tl-sg105-ou-tl-sg108-comparativo",
  title: "Faltou porta de rede: switch TP-Link de 5 ou 8 portas?",
  seoTitle: "Switch gigabit TP-Link TL-SG105 ou TL-SG108: qual comprar?",
  excerpt:
    "Comparamos os switches gigabit TP-Link TL-SG105 (5 portas) e TL-SG108 (8 portas) vendidos na Amazon Brasil: velocidade, tamanho, consumo e para qual casa cada um serve.",
  metaDescription:
    "TP-Link TL-SG105 ou TL-SG108: comparativo de switch gigabit com portas, tabela MAC, consumo, tamanho e quando 5 ou 8 portas compensam em casa ou no home office.",
  category: "ai-indica",
  productCategory: "informatica",
  productSubcategory: "switch-rede",
  productScore: 8.4,
  date: "2026-10-23",
  readTime: 8,
  imageQuery: "ethernet network switch cables desk",
  seed: 577,
  coverImage: {
    url: "/images/products/comparativo-switch-tp-link-sg105-sg108.jpg",
    width: 1600,
    height: 900,
    credit: "Fotos oficiais TP-Link (composição)",
    creditUrl: "https://www.tp-link.com/br/home-networking/soho-switch/tl-sg105/",
  },
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Os dois são switches não gerenciáveis, plug and play, com portas gigabit (10/100/1000 Mbps), gabinete de metal e sem ventoinha: ligou e funciona, sem configurar nada.",
    "A diferença é o número de portas (5 contra 8), o tamanho (99,8 mm contra 158 mm de largura) e a tabela de endereços MAC (2K contra 4K).",
    "Para a maioria das casas, o TL-SG105 basta; o TL-SG108 vale a pena quando já existem mais de 4 aparelhos por cabo ou o plano é crescer.",
  ],
  content: `
    <div class="callout-box">
      <span class="callout-label">Transparência Amazon</span>
      <p>Como Associado da Amazon, o Portal da AI ganha com compras qualificadas feitas pelos links deste comparativo, sem custo adicional para você. O preço do dia aparece na página do produto: confira o valor atual antes de comprar.</p>
    </div>

    <p>O roteador que a operadora entrega costuma ter só quatro portas de rede, e elas acabam rápido: o computador, a TV, o videogame, o TV box. Um switch resolve isso por um custo baixo, multiplicando as portas sem trocar nada do que já funciona. Comparamos dois modelos da TP-Link vendidos na <a href="https://www.amazon.com.br/dp/B00A128S24?tag=portaldaai-20" rel="sponsored noopener noreferrer">Amazon Brasil</a>, o TL-SG105 e o TL-SG108, com base na ficha oficial do fabricante e nas avaliações de quem já comprou, sem teste físico nosso.</p>

    <h2>O que um switch faz (e o que não faz)</h2>
    <p>O switch recebe um único cabo do roteador e distribui a conexão para vários aparelhos por cabo. Ele não aumenta a velocidade do plano de internet e não cria Wi-Fi: se a operadora entrega 300 Mbps, o conjunto inteiro divide esses 300 Mbps. O ganho está em ligar mais aparelhos por cabo, que é mais estável do que o Wi-Fi, e em fazer a rede local (backup em HD externo, TV puxando filme do computador) rodar a até 1 Gbps entre os aparelhos.</p>
    <p>Os dois modelos são não gerenciáveis: não têm tela de configuração nem Wi-Fi, e também não têm PoE, ou seja, não alimentam câmeras ou pontos de acesso pelo cabo. É o tipo de aparelho que a gente liga na tomada, encaixa os cabos e esquece.</p>

    <h2>Os 2 switches lado a lado</h2>
    <table>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Portas</th>
          <th>Desempenho (ficha oficial)</th>
          <th>Tamanho</th>
          <th>Nota de compradores</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>TP-Link TL-SG105</td>
          <td>5 portas 10/100/1000 Mbps</td>
          <td>7,4 Mpps, tabela MAC 2K, jumbo frame 15 KB</td>
          <td>99,8 x 98 x 25 mm</td>
          <td>4,8 de 5 (mais de 127 mil avaliações)</td>
        </tr>
        <tr>
          <td>TP-Link TL-SG108</td>
          <td>8 portas 10/100/1000 Mbps</td>
          <td>11,9 Mpps, tabela MAC 4K, jumbo frame 16 KB</td>
          <td>158 x 101 x 25 mm</td>
          <td>4,8 de 5 (mais de 42 mil avaliações)</td>
        </tr>
      </tbody>
    </table>
    <p>Mpps significa milhões de pacotes por segundo, a taxa que o chip consegue encaminhar. Os dois usam o método store and forward e a mesma tecnologia Green Ethernet, que reduz o consumo conforme o uso. Na prática, em casa, nenhum dos dois chega perto de ser o gargalo da rede.</p>

    <h2>TP-Link TL-SG105: o de 5 portas, pequeno e eficiente</h2>
    <figure>
      <img src="/images/products/tplink-tl-sg105.jpg" alt="Switch TP-Link TL-SG105 de metal azul-acinzentado com cinco portas de rede na frente" />
      <figcaption>Foto oficial: TP-Link</figcaption>
    </figure>
    <div class="buy-btn">
      <a href="https://www.amazon.com.br/dp/B00A128S24?tag=portaldaai-20" rel="sponsored noopener noreferrer" target="_blank">Comprar TP-Link TL-SG105 na Amazon agora ↗</a>
    </div>
    <p>O <a href="https://www.amazon.com.br/dp/B00A128S24?tag=portaldaai-20" rel="sponsored noopener noreferrer">TL-SG105</a> mede 99,8 x 98 x 25 mm, cabe em cima de um móvel ou atrás da TV e pode ser fixado na parede. Tem 5 portas RJ45 com autonegociação e Auto MDI/MDIX, o que dispensa cabo cruzado. A ficha oficial informa consumo máximo de 2,3 W, sem ventoinha (silencioso), fonte externa de 5 V e funções como QoS 802.1p e DSCP, IGMP Snooping e controle de fluxo 802.3x.</p>
    <p>Uma porta é usada para ligar o switch ao roteador, e sobram 4 para aparelhos. Para a maioria das casas (computador, TV, videogame e TV box), isso basta. É também o modelo com mais avaliações dos dois, com nota de 4,8 e mais de 127 mil compradores na página da Amazon.</p>

    <h2>TP-Link TL-SG108: o de 8 portas, para quem tem mais cabo</h2>
    <figure>
      <img src="/images/products/tplink-tl-sg108.jpg" alt="Switch TP-Link TL-SG108 de metal com oito portas de rede alinhadas na frente" />
      <figcaption>Foto oficial: TP-Link</figcaption>
    </figure>
    <div class="buy-btn">
      <a href="https://www.amazon.com.br/dp/B00A121WN6?tag=portaldaai-20" rel="sponsored noopener noreferrer" target="_blank">Comprar TP-Link TL-SG108 na Amazon agora ↗</a>
    </div>
    <p>O <a href="https://www.amazon.com.br/dp/B00A121WN6?tag=portaldaai-20" rel="sponsored noopener noreferrer">TL-SG108</a> é a versão grande: 158 x 101 x 25 mm, 8 portas gigabit, tabela MAC de 4K endereços e taxa de encaminhamento de 11,9 Mpps. O consumo máximo é de 2,77 W, também sem ventoinha, com gabinete de metal e instalação de mesa ou na parede. Na embalagem vêm o switch, a fonte e o guia de instalação.</p>
    <p>Com 7 portas livres depois de ligar ao roteador, ele atende um escritório pequeno, um quarto de equipamentos ou uma casa com ponto de rede em vários cômodos. A tabela de 4K endereços MAC dá folga para muitos aparelhos, embora em casa isso raramente seja um limite. Tem 42 mil avaliações com nota 4,8 na Amazon.</p>
    <div class="buy-btn">
      <a href="https://www.amazon.com.br/dp/B00A128S24?tag=portaldaai-20" rel="sponsored noopener noreferrer" target="_blank">Comprar TP-Link TL-SG105 na Amazon agora ↗</a>
    </div>

    <h2>Como escolher e o que olhar antes de comprar</h2>
    <p>Conte os aparelhos que vão por cabo hoje, some um ou dois para o futuro e lembre de reservar uma porta para o roteador. Se o total passa de 4, vá de 8 portas: trocar depois custa mais do que pagar um pouco a mais agora. Se o plano de internet é de 500 Mbps ou mais, vale usar cabos Cat5e ou Cat6, porque um cabo velho pode limitar a conexão a 100 Mbps.</p>
    <p>Nos anúncios que consultamos, os dois modelos aparecem como enviados e vendidos pela Amazon Global, ou seja, importados, com impostos de importação já incluídos no preço, o que pode mudar o prazo de entrega. Confira essa informação na página antes de fechar a compra.</p>
    <p>Em casa conectada, o switch combina com <a href="/artigos/melhor-camera-seguranca-wifi-comparativo-2026">câmeras de segurança</a> e com <a href="/artigos/seagate-expansion-ou-wd-elements-hd-externo-2tb-comparativo">HD externo</a> para backup, e protege-se bem atrás de um <a href="/artigos/intelbras-xnb-600-nobreak-vale-a-pena">nobreak</a>, para a rede não cair junto com a luz. Se o sinal do Wi-Fi é o problema e não a falta de porta, vale olhar antes o <a href="/artigos/repetidor-wifi-tp-link-comparativo-re200-re305-wa850re">comparativo de repetidores TP-Link</a> ou os <a href="/artigos/melhor-roteador-wifi-6-comparativo-2026">roteadores Wi-Fi 6</a>.</p>

    <h2>Quando o switch resolve o seu problema</h2>
    <p>Quem trabalha de casa e participa de videochamadas por horas ganha com cabo: a conexão por fio é mais estável. Se o seu <a href="/artigos/melhor-monitor-24-polegadas-comparativo-2026">monitor</a> e o notebook ficam na mesma mesa, um switch pequeno ao lado reduz o número de cabos longos até o roteador. Para jogar online com um <a href="/artigos/melhor-headset-gamer-barato-comparativo-2026">headset gamer</a>, o cabo também corta variações de latência que o Wi-Fi tem.</p>
    <p>Já para a TV, o cabo evita travadas no streaming. Se você usa um <a href="/artigos/intelbras-izy-play-full-hd-smart-tv-box-vale-a-pena">TV box</a>, ligar por cabo costuma ser a melhor decisão quando há ponto de rede perto. E para <a href="/artigos/positivo-smart-plug-wifi-vale-a-pena">tomadas inteligentes</a> e outros itens de casa conectada, nada muda: esses continuam no Wi-Fi, assim como a <a href="/artigos/melhor-lampada-inteligente-wifi-comparativo-2026">lâmpada inteligente</a> e o <a href="/artigos/ugreen-revodok-pro-hub-usb-c-vale-a-pena">hub USB-C</a> do notebook, que não depende de switch.</p>
    <div class="buy-btn">
      <a href="https://www.amazon.com.br/dp/B00A121WN6?tag=portaldaai-20" rel="sponsored noopener noreferrer" target="_blank">Comprar TP-Link TL-SG108 na Amazon agora ↗</a>
    </div>

    <h2>Variação de preço</h2>
    <p>O TL-SG105 costuma variar de R$ 120 a R$ 165, e o TL-SG108 costuma variar de R$ 140 a R$ 190, faixas aproximadas de mercado que mudam com loja, forma de pagamento e promoção. A faixa é o preço consultado na internet como um todo (lojas, comparadores de preço e site do fabricante), não apenas na Amazon. Como os dois também aparecem em anúncios de vendedores terceiros, vale desconfiar de preço muito acima ou muito abaixo dessas faixas.</p>
    <table>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Faixa de mercado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>TP-Link TL-SG105</td>
          <td>R$ 120 a R$ 165</td>
        </tr>
        <tr>
          <td>TP-Link TL-SG108</td>
          <td>R$ 140 a R$ 190</td>
        </tr>
      </tbody>
    </table>
    <p>O TL-SG105 costuma sair mais em conta, mas o TL-SG108 tem o melhor custo por porta: três portas a mais por uma diferença pequena. O preço do dia aparece ao clicar no botão de compra.</p>
    <div class="buy-btn">
      <a href="https://www.amazon.com.br/dp/B00A128S24?tag=portaldaai-20" rel="sponsored noopener noreferrer" target="_blank">Comprar TP-Link TL-SG105 na Amazon agora ↗</a>
    </div>
    <div class="buy-btn">
      <a href="https://www.amazon.com.br/dp/B00A121WN6?tag=portaldaai-20" rel="sponsored noopener noreferrer" target="_blank">Comprar TP-Link TL-SG108 na Amazon agora ↗</a>
    </div>

    <h2>Qual comprar</h2>
    <p>Para a maioria das casas, a nossa indicação é o TL-SG105: pequeno, silencioso, de consumo baixo e com nota 4,8 em mais de 127 mil avaliações. Ele atende bem quem precisa ligar de 3 a 4 aparelhos por cabo e não quer ocupar espaço.</p>
    <p>O TL-SG108 é a escolha de quem já tem mais de 4 aparelhos, de quem monta um pequeno escritório ou de quem prefere ter portas de sobra. Nos dois casos, vale lembrar que o switch não acelera a internet: se o problema é o plano ou o Wi-Fi, a solução é outra.</p>
    <div class="buy-btn">
      <a href="https://www.amazon.com.br/dp/B00A128S24?tag=portaldaai-20" rel="sponsored noopener noreferrer" target="_blank">Comprar TP-Link TL-SG105 na Amazon agora ↗</a>
    </div>
  `,
  faq: [
    {
      question: "Switch aumenta a velocidade da internet?",
      answer:
        "Não. O switch só divide a conexão que chega do roteador entre mais aparelhos por cabo. A velocidade total continua sendo a do plano contratado. O ganho é de estabilidade e de velocidade dentro da rede local, entre os aparelhos da casa.",
    },
    {
      question: "Qual a diferença entre switch e roteador?",
      answer:
        "O roteador conecta a casa à internet, distribui endereços e cria o Wi-Fi. O switch só multiplica portas de rede e não tem Wi-Fi nem configuração. Os dois trabalham juntos: o switch se liga a uma porta do roteador por um cabo.",
    },
    {
      question: "Preciso configurar o TL-SG105 ou o TL-SG108?",
      answer:
        "Não. Os dois são não gerenciáveis e plug and play: ligue na tomada, encaixe os cabos e eles funcionam, com autonegociação de velocidade e Auto MDI/MDIX. Quem precisa de VLAN ou controle por tela deve olhar modelos gerenciáveis.",
    },
    {
      question: "Esses switches alimentam câmeras pelo cabo (PoE)?",
      answer:
        "Não. Nenhum dos dois tem PoE, então câmeras e pontos de acesso que dependem de alimentação pelo cabo precisam de fonte própria ou de um switch PoE. Para ligar computador, TV, videogame e TV box, isso não faz diferença.",
    },
    {
      question: "Qual cabo usar com um switch gigabit?",
      answer:
        "Cabos Cat5e ou Cat6 trabalham a 1 Gbps. Cabos mais antigos ou danificados podem cair para 100 Mbps. Se a conexão por cabo ficar abaixo do esperado, trocar o cabo é a primeira coisa a testar.",
    },
  ],
};
