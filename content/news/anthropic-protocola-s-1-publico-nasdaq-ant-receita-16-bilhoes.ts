import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-protocola-s-1-publico-nasdaq-ant-receita-16-bilhoes",
  title: "Anthropic abre S-1: ANT na Nasdaq e US$ 16,3 bi de receita no semestre",
  summary:
    "Prospecto público na SEC mostra receita de US$ 16,3 bilhões no 1º semestre de 2026, mais de 11,9 mil clientes grandes e pedido de listagem na Nasdaq.",
  author: "Bruno Danello",
  sourceName: "SEC (prospecto S-1 da Anthropic, PBC)",
  sourceUrl: "https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm",
  date: "2026-10-26",
  publishedAt: "2026-10-26T12:40:00-03:00",
  topic: "negocios",
  imageQuery: "Dario Amodei portrait",
  content: `
    <p>A Anthropic, empresa dona do Claude, registrou nesta segunda-feira (26) o prospecto público de abertura de capital (formulário S-1) na SEC, a comissão de valores mobiliários dos Estados Unidos. No <a href="https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm" target="_blank" rel="noopener noreferrer nofollow">documento disponível no sistema EDGAR da SEC</a>, a empresa diz que aplicou para listar suas ações Classe A na Nasdaq Global Select Market sob o símbolo "ANT". O preço por ação e a quantidade de papéis ainda estão em branco, como é comum nessa fase.</p>

    <p>O pedido em si não é novidade: a empresa já havia entrado com um pedido confidencial, como mostramos em <a href="/noticias/anthropic-ipo-confidencial-965-bilhoes">Anthropic apresenta pedido confidencial de IPO avaliado em US$ 965 bilhões</a>, e partes do texto vazaram em setembro, tema de <a href="/noticias/anthropic-ipo-prospecto-vazado-2-trilhoes">IPO da Anthropic mira US$ 2 trilhões e revela prejuízo de US$ 42 bi</a>. O que muda agora é que o documento completo é público, com números auditados de 2023 a 2025 e números do primeiro semestre de 2026. A reportagem do <a href="https://www.theverge.com/ai-artificial-intelligence/1018476/anthropic-ipo-details-s1-filed-sec" target="_blank" rel="noopener noreferrer nofollow">The Verge</a> e a do <a href="https://techcrunch.com/2026/10/26/anthropic-officially-files-for-its-public-debut/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a> também deram a notícia, mas os números abaixo foram conferidos no próprio S-1.</p>

    <h2>Os números do S-1: receita multiplicada e prejuízo contábil gigante</h2>
    <p>A receita da Anthropic foi de US$ 41 milhões em 2023, US$ 386 milhões em 2024 e US$ 4,585 bilhões em 2025. No primeiro semestre de 2026, segundo a tabela de resultados do prospecto, chegou a US$ 16,286 bilhões, contra US$ 1,163 bilhão no mesmo período de 2025. Ou seja, só nos seis primeiros meses deste ano a empresa faturou mais de três vezes o que faturou em todo 2025.</p>

    <p>O prejuízo líquido do semestre foi de US$ 80,748 bilhões, e o de 2025, de US$ 41,965 bilhões. O número assusta, mas o próprio documento mostra de onde ele vem: o resultado operacional (receita menos despesas de operação) foi um prejuízo bem menor, de US$ 693 milhões no semestre, contra US$ 8,06 bilhões em todo 2025. A maior parte do rombo contábil vem da linha "variação do valor justo de notas conversíveis, derivativos e SAFEs", que somou uma perda de US$ 72,4 bilhões no semestre. Em termos simples, como o valor da empresa subiu muito, os títulos que dão direito a ações no futuro passaram a valer mais no papel, e isso entra como despesa. Não é dinheiro saindo do caixa.</p>

    <p>Em dinheiro de verdade, o prospecto informa que, até 30 de junho de 2026, a Anthropic tinha levantado US$ 141,1 bilhões em capital, com US$ 112,4 bilhões em caixa e equivalentes e US$ 19,3 bilhões em aplicações de curto prazo. Entre as despesas do semestre, a maior foi computação e infraestrutura (US$ 8,9 bilhões), seguida por vendas, marketing e parcerias (US$ 3,2 bilhões, contra US$ 120 milhões um ano antes) e pessoal (US$ 3,2 bilhões).</p>

    <h2>Quem paga a conta: clientes grandes e uso crescente</h2>
    <p>O S-1 traz também métricas de clientes, medidas em 30 de setembro de 2026. Mais de 11.900 clientes gastaram US$ 100 mil ou mais nos últimos 12 meses (eram mais de 950 um ano antes), mais de 1.900 passaram de US$ 1 milhão e cerca de 250 passaram de US$ 10 milhões. A empresa também cita uma retenção líquida de receita de cerca de 900%, calculada sem contar os assinantes dos planos Claude Pro e Max, o que significa que quem já era cliente passou a gastar, em média, muito mais.</p>

    <p>Outro dado que ajuda a entender a lógica do negócio: segundo o prospecto, o Claude Opus 5.5 reduziu em cerca de 40% o custo por tarefa para os clientes em comparação ao Opus 5, modelo cujo lançamento cobrimos em <a href="/noticias/anthropic-lanca-claude-opus-5-5-mais-barato-rapido">Anthropic lança Claude Opus 5.5</a>. A tese da empresa é que custo menor por tarefa gera mais uso e mais gasto total. O documento descreve o Claude Code, o agente de programação, como a manifestação mais clara dos "Virtual Collaborators" (colaboradores virtuais) que a companhia quer estender a trabalhadores do conhecimento em geral.</p>

    <h2>Contratos de computação: US$ 3,1 bi por mês só com a SpaceXAI</h2>
    <p>O capítulo de compromissos de infraestrutura é um dos mais impressionantes. O S-1 diz que a Anthropic fechou acordos com a SpaceXAI para usar GPUs da Nvidia, com gasto de até US$ 120,5 bilhões ao longo de contratos que se estendem até 2029, algo como US$ 3,1 bilhões por mês quando toda a capacidade estiver entregue, o que a empresa espera para dezembro de 2026. Depois dos períodos iniciais sem cancelamento, que terminam em janeiro e março de 2027, cada contrato pode ser cancelado por qualquer das partes com 90 dias de aviso.</p>

    <p>A lista de dependências inclui ainda a AMD (um primeiro lote de capacidade em 2027) e três grandes nuvens: Amazon, Google e Microsoft, além de fornecedores como a Broadcom. Já mostramos parte dessa corrida por chips em <a href="/noticias/anthropic-financiamento-60-bilhoes-chips-broadcom-google">Wall Street lança dívida de US$ 60 bi para chips da Anthropic</a>. O S-1 reconhece que a empresa depende de poucos fornecedores para esse recurso crítico, o que é, nas palavras do próprio documento, um fator de risco.</p>

    <h2>Governança incomum e riscos escritos sem filtro</h2>
    <p>A Anthropic é uma empresa de benefício público (PBC) em Delaware e diz ter uma estrutura de governança nova. Um fundo de benefício público, o Anthropic Public Benefit Fund, receberá 5% das ações totalmente diluídas, tema de <a href="/noticias/anthropic-destina-5-por-cento-acoes-fundo-beneficio-publico">Anthropic vai destinar 5% das ações a um fundo de benefício público</a>. Há um conselho de fiduciários independente, o Long-Term Benefit Trust, com poder de eleger e remover a maioria dos membros do conselho, e a empresa será considerada "controlled company" pelas regras da Nasdaq. Classes especiais de ações (como a Classe E, para funcionários, sem direitos econômicos) completam o desenho, que se conecta ao que explicamos em <a href="/noticias/anthropic-pede-acionistas-controle-voto-fundadores-ipo">Anthropic pede aval de acionistas para dar aos sete fundadores 50,1% do poder de voto</a>.</p>

    <p>Na seção de riscos, a empresa escreve que sistemas de IA suficientemente avançados poderiam, sem salvaguardas, representar riscos "catastróficos ou existenciais" para a humanidade. Afirma que seus modelos já contribuem para o ritmo da própria pesquisa e que isso aumenta os riscos. Alerta que debates sobre "sentiência" ou "status moral" de sistemas de IA podem levar a regras que limitem como treina e modifica os modelos. E avisa que nenhuma seguradora, e talvez o setor de seguros inteiro, teria capacidade de cobrir um incidente catastrófico de IA. Também admite que sua receita anualizada (run-rate) já incluiu valores de clientes que depois foram identificados como violadores da política de uso.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa Claude no trabalho ou numa pequena empresa, a abertura de capital não muda o produto amanhã. Mas o prospecto ajuda a responder perguntas práticas sobre o fornecedor de quem você pode estar dependendo.</p>

    <ul>
      <li><strong>Estabilidade do fornecedor:</strong> com US$ 112,4 bilhões em caixa e uma receita que cresce em ritmo recorde, o risco de a empresa sumir do mapa é baixo no curto prazo. O risco que o documento destaca é outro: custo de computação e dependência de poucos fornecedores, que pode afetar preço e limites de uso. Para decidir entre ferramentas, veja o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a>.</li>
      <li><strong>Preço por tarefa em queda:</strong> a própria empresa diz que baixar o custo por tarefa é parte da estratégia. Isso favorece quem automatiza rotinas, como explicamos em <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o futuro do trabalho autônomo</a>.</li>
      <li><strong>Investidor brasileiro:</strong> o preço e o número de ações ainda não foram definidos, e o prejuízo contábil de US$ 80,7 bilhões vem em grande parte de efeitos de marcação a mercado. Leia o documento com calma antes de qualquer decisão, e lembre que isto é informação, não recomendação de investimento.</li>
      <li><strong>Mercado de trabalho:</strong> a tese de "colaboradores virtuais" aponta para mais tarefas de conhecimento sendo delegadas a agentes. Quem entende desse tipo de ferramenta sai na frente.</li>
    </ul>

    <div class="callout-box callout-tip">
      <span class="callout-label">Como ler um S-1</span>
      <p>Comece pelo resumo ("Prospectus Summary"), vá direto à tabela de resultados e depois aos fatores de risco. Desconfie de manchetes que só citam o prejuízo líquido: separe o resultado operacional (o negócio em si) dos ajustes contábeis, como fez o próprio documento da Anthropic.</p>
    </div>

    <h2>O que observar a seguir</h2>
    <p>O primeiro ponto é a faixa de preço e o tamanho da oferta, que aparecem em emendas ao S-1 antes da precificação. O segundo é a data da estreia na Nasdaq: reportagens anteriores apontavam para novembro, como em <a href="/noticias/anthropic-ipo-mira-meados-novembro-bloomberg">Anthropic mira IPO antes do Dia de Ação de Graças, diz Bloomberg</a>, mas o prospecto ainda não traz data. O terceiro é a reação da OpenAI, que empurrou seu IPO para 2027, conforme <a href="/noticias/openai-busca-30-bilhoes-adia-ipo-2027">OpenAI busca captar US$ 30 bilhões e empurra IPO para 2027</a>. Por fim, vale acompanhar como a receita do terceiro trimestre se compara à do primeiro semestre, já que o prospecto deixa em branco a receita anualizada de 31 de outubro, a ser preenchida numa versão posterior.</p>

    <p>Como tudo que sai de um prospecto, os números podem ser revisados em emendas até a oferta, e os dados de 2026 são do primeiro semestre, sem auditoria completa de ano fechado. A fonte primária está aberta no site da SEC para quem quiser conferir cada tabela.</p>
  `,
};
