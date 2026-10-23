import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "deepseek-levanta-15-bilhoes-dias-apos-restricao-eua",
  title: "DeepSeek levanta cerca de US$ 15 bilhões dias após veto dos EUA",
  summary:
    "A Bloomberg informa que a DeepSeek fechou uma rodada de cerca de US$ 15 bilhões, dois dias depois de os EUA mandarem agências federais retirarem a IA chinesa de seus sistemas.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/22/deepseek-reportedly-raises-15b-days-after-us-restrictions/",
  date: "2026-10-22",
  publishedAt: "2026-10-22T22:23:00-03:00",
  imageQuery: "DeepSeek logo",
  topic: "negocios",
  content: `
    <p>A DeepSeek, startup chinesa de inteligência artificial sediada em Hangzhou, levantou cerca de US$ 15 bilhões (aproximadamente 100 bilhões de yuans) numa nova rodada de financiamento, segundo reportagem da Bloomberg repercutida pelo <a href="https://techcrunch.com/2026/10/22/deepseek-reportedly-raises-15b-days-after-us-restrictions/" rel="noopener noreferrer nofollow">TechCrunch</a> nesta quinta-feira (22). O valor colocaria a captação entre as maiores já feitas por uma empresa chinesa de tecnologia. A DeepSeek não respondeu de imediato ao pedido de comentário do veículo e, até aqui, não há anúncio oficial da companhia.</p>

    <p>O momento chama atenção. A rodada foi noticiada dois dias depois de o governo americano ordenar que agências federais civis removam a tecnologia da DeepSeek de seus sistemas por motivos de segurança, decisão que detalhamos em <a href="/noticias/dhs-proibe-deepseek-orgaos-federais-civis-eua">DHS proíbe a DeepSeek em órgãos federais civis dos EUA</a>. Ou seja, a restrição em Washington não impediu que investidores seguissem apostando na empresa.</p>

    <h2>O que a reportagem diz sobre a rodada</h2>
    <p>De acordo com a cobertura, entre os possíveis investidores estão a fabricante de baterias CATL e a gigante de tecnologia Tencent, entre outros. Os dois nomes já apareciam nas reportagens anteriores sobre a negociação, que contamos em <a href="/noticias/deepseek-capta-12-bilhoes-tencent-catl-ipo-2027">DeepSeek vai captar ao menos US$ 12 bi com Tencent e CATL antes do IPO</a>. Na época, o fechamento ainda era uma expectativa; agora, a Bloomberg fala em dinheiro levantado.</p>
    <p>O histórico recente de captações ajuda a entender o salto. Em junho, a DeepSeek teria levantado mais de US$ 7 bilhões com avaliação de US$ 50 bilhões. Em julho, segundo relatos, buscou mais US$ 1,5 bilhão com avaliação de cerca de US$ 71 bilhões, e a empresa já considerou uma abertura de capital na China a partir do próximo ano. Em poucos meses, portanto, a startup passou de uma única rodada grande para uma sequência de aportes sucessivos.</p>

    <h2>Para que servirá o dinheiro</h2>
    <p>Segundo a reportagem, a empresa amplia os gastos com infraestrutura de IA e com modelos abertos, voltados tanto ao mercado chinês quanto ao internacional. Isso inclui a busca por independência de chips da Nvidia, tema que já tinha aparecido quando a DeepSeek <a href="/noticias/deepseek-abre-codigo-ferramentas-chips-huawei">abriu o código de ferramentas para chips de IA da Huawei</a>. Treinar e servir modelos em hardware alternativo exige capital pesado, e uma rodada dessa escala dá fôlego para isso.</p>
    <p>No produto, a DeepSeek vem acelerando. O <a href="/noticias/deepseek-v4-1-flash-mantem-v4-pro">V4.1 Flash</a> manteve o V4 Pro em linha, a empresa abriu <a href="/noticias/deepseek-search-fetch-api-preco-por-busca">APIs de busca e leitura de páginas cobradas por consulta</a> e já reportou <a href="/noticias/deepseek-receita-1-bilhao-alta-precos-api-ipo-xangai">receita anualizada de US$ 1 bilhão depois de reajustar os preços da API</a>. Com mais caixa, a tendência é de mais lançamentos e de pressão sobre o preço dos concorrentes ocidentais.</p>

    <h2>O mapa dos rivais chineses</h2>
    <p>A reportagem coloca a rodada no contexto do setor. A Moonshot AI levantou US$ 2 bilhões com avaliação de US$ 20 bilhões em maio, e a Manus AI captou mais de US$ 500 milhões no início deste mês. Já a Zhipu AI e a MiniMax, que abriram capital em Hong Kong em janeiro, valem em bolsa cerca de US$ 29 bilhões e US$ 7,2 bilhões, respectivamente. A DeepSeek, fundada em 2023 por Liang Wenfeng, também cofundador do fundo quantitativo High-Flyer, segue como a mais capitalizada do grupo. Liang teria, segundo análise da WireScreen citada pelo TechCrunch, participação estimada de 81,6% na operação chinesa.</p>

    <table>
      <thead>
        <tr><th>Empresa</th><th>Captação ou valor de mercado reportado</th></tr>
      </thead>
      <tbody>
        <tr><td>DeepSeek</td><td>Cerca de US$ 15 bilhões em nova rodada (Bloomberg)</td></tr>
        <tr><td>DeepSeek (junho)</td><td>Mais de US$ 7 bilhões, avaliação de US$ 50 bilhões</td></tr>
        <tr><td>Moonshot AI (maio)</td><td>US$ 2 bilhões, avaliação de US$ 20 bilhões</td></tr>
        <tr><td>Manus AI (outubro)</td><td>Mais de US$ 500 milhões</td></tr>
        <tr><td>Zhipu AI e MiniMax</td><td>Valor de mercado de cerca de US$ 29 bi e US$ 7,2 bi em Hong Kong</td></tr>
      </tbody>
    </table>

    <div class="callout-box callout-warning">
      <span class="callout-label">Ainda sem confirmação oficial</span>
      <p>Os números vêm da Bloomberg e do TechCrunch, que atribui a informação à agência. A DeepSeek não confirmou valor, investidores nem avaliação, e a lista de aportantes é descrita como possível.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa IA para trabalhar ou empreender no Brasil, a notícia tem consequências práticas. A primeira é o preço: uma DeepSeek capitalizada tende a manter modelos abertos e APIs baratas, o que obriga OpenAI, Anthropic e Google a segurar tarifas. Quem monta automações, atendimento ou agentes pode se beneficiar dessa guerra de preços.</p>
    <p>A segunda é o risco regulatório. Se os Estados Unidos restringem o uso em órgãos federais, empresas brasileiras que vendem para clientes americanos ou que tratam dados pessoais sob a LGPD devem avaliar com cuidado onde os dados passam. Usar o modelo aberto em servidor próprio ou em nuvem de confiança costuma ser mais seguro do que enviar informações à API hospedada na China.</p>
    <p>A terceira é a escolha de ferramenta: não vale depender de um único fornecedor. Manter o fluxo de trabalho portátil entre modelos, com prompts e integrações que funcionem em mais de um provedor, protege seu negócio de mudanças de preço, de política ou de disponibilidade. Para começar sem gastar muito, veja nossos guias de <a href="/categoria/iniciantes">IA para iniciantes</a>.</p>

    <h2>O que observar nas próximas semanas</h2>
    <ul>
      <li>Se a DeepSeek confirma oficialmente o valor da rodada e quem são os investidores.</li>
      <li>Se o pedido de abertura de capital na China é protocolado, como a empresa já cogitou.</li>
      <li>Se o dinheiro se traduz em um novo modelo de ponta com preço de API abaixo dos rivais ocidentais.</li>
      <li>Se outras agências e governos além dos EUA seguem o veto à tecnologia da empresa.</li>
    </ul>

    <p>O resumo acima se baseia na reportagem do TechCrunch, que por sua vez cita a Bloomberg. Atualizaremos esta página se a empresa se manifestar.</p>
  `,
};
