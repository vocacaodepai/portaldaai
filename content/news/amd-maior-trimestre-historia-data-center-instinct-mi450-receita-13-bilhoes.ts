import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "amd-maior-trimestre-historia-data-center-instinct-mi450-receita-13-bilhoes",
  title: "AMD tem o maior trimestre da história com chips de IA para data center",
  summary:
    "AMD fatura recorde de US$ 13,4 bi no trimestre, com data center quase dobrando pelas GPUs Instinct, e prevê US$ 17 bi; games caem 40% com a falta de memória.",
  author: "Bruno Danello",
  sourceName: "AMD, The Verge",
  sourceUrl: "https://www.sec.gov/Archives/edgar/data/0000002488/000000248826000188/q32026991.htm",
  date: "2026-11-04",
  publishedAt: "2026-11-04T00:23:00-03:00",
  imageQuery: "Lisa Su AMD portrait",
  topic: "negocios",
  content: `
    <p>A AMD divulgou nesta terça-feira (3) o resultado do terceiro trimestre de 2026 e a presidente da empresa, Lisa Su, resumiu o período como o maior e mais lucrativo da história da fabricante. A receita chegou a US$ 13,4 bilhões, alta de 45% sobre o mesmo trimestre do ano passado, e ficou acima do topo da faixa que a própria empresa tinha projetado. Quase dois terços desse dinheiro vieram de um único lugar: os data centers, onde a demanda por chips para treinar e rodar modelos de inteligência artificial não para de crescer.</p>

    <p>Os números estão no comunicado oficial de resultados da AMD, entregue também à SEC, a comissão de valores mobiliários dos Estados Unidos. Os comentários feitos na teleconferência com analistas, incluindo as projeções para 2027, foram relatados pelo site americano The Verge.</p>

    <h2>Data center quase dobra e vira o motor da empresa</h2>
    <p>O segmento de data center faturou um recorde de US$ 8,5 bilhões no trimestre, crescimento de 97% em um ano. A AMD atribui o salto a dois produtos: os processadores de servidor EPYC e as GPUs Instinct, a linha que concorre diretamente com as placas de IA da Nvidia. O trimestre marcou o lançamento comercial da série Instinct MI450, a nova geração voltada a grandes modelos de IA.</p>

    <p>Pelas contas do The Verge, cerca de 63% da receita líquida da AMD no trimestre veio do data center. A dependência fica ainda mais clara quando se olha o crescimento: a receita total subiu US$ 1,9 bilhão na comparação anual, e US$ 1,8 bilhão desse avanço saiu do data center. Na teleconferência, a diretora financeira Jean Hu foi além e disse que, olhando para depois de 2027, a empresa espera que o data center represente mais de 80% de toda a receita.</p>

    <p>O lucro acompanhou. O lucro líquido contábil foi de US$ 2,4 bilhões, quase o dobro do ano anterior, e o lucro por ação ajustado (sem efeitos como remuneração em ações e amortização de aquisições) subiu 74%, para US$ 2,09. A margem bruta ajustada ficou em 56%. Para o quarto trimestre, a AMD projeta receita de cerca de US$ 17 bilhões, com margem de 3% para cima ou para baixo. Se confirmada, será uma alta de aproximadamente 66% sobre o fim de 2025 e de 27% sobre o trimestre que acabou de fechar. Segundo o The Verge, Lisa Su disse ainda esperar que a receita cresça mais de 80% em 2027, com o data center como principal contribuinte.</p>

    <h2>Quem já está usando os racks Helios</h2>
    <p>Boa parte da aposta da AMD para os próximos trimestres está no Helios, o sistema em escala de rack que junta as GPUs Instinct MI450 com a sexta geração dos processadores EPYC, de codinome Venice. No comunicado, a empresa diz que Anthropic, Meta, Microsoft, OpenAI e a nuvem da Oracle já rodam modelos e cargas de trabalho nos primeiros racks Helios. A HPE anunciou que a provedora de nuvem Vultr vai instalar os primeiros sistemas Helios montados por ela, e a Oracle confirmou novas instâncias de nuvem com os processadores EPYC de sexta geração.</p>

    <p>Lisa Su afirmou que espera crescimento ainda mais rápido no quarto trimestre justamente porque a produção do Helios e do Venice vai ganhar escala. A relação com a Meta já tinha aparecido no fim de outubro, quando a AMD anunciou um <a href="/noticias/amd-investe-1-bilhao-na-meta-racks-helios">investimento de US$ 1 bilhão na Meta e confirmou racks Helios em operação por lá</a>.</p>

    <p>A empresa também listou movimentos no software e em aquisições. Lançou o ROCm 10, nova versão da sua plataforma de programação para IA, que é o ponto em que a AMD tradicionalmente fica atrás do CUDA da Nvidia. Apresentou o Helion, uma arquitetura de referência aberta para montar sistemas de agentes de IA em rack, misturando CPUs e GPUs conforme a carga. E reforçou dois acordos de compra: a <a href="/noticias/amd-compra-world-labs-fei-fei-li-ia-espacial">World Labs, de Fei-Fei Li</a>, focada em pesquisa de modelos, e a Taalas, especializada em chips dedicados à inferência, a etapa em que o modelo já treinado responde aos usuários.</p>

    <h2>O outro lado: games despencam com a falta de memória</h2>
    <p>Nem todas as linhas foram bem. A receita de games caiu 40% em um ano, para US$ 773 milhões, por causa de vendas menores de chips semipersonalizados (os usados em consoles) e de placas de vídeo. O segmento que reúne PCs e games somou US$ 3,7 bilhões, queda de 8%, apesar de a parte de processadores para computadores ter crescido 7%, para US$ 2,9 bilhões, puxada pelos Ryzen para notebooks.</p>

    <p>O pano de fundo é a escassez de memória RAM e de outros componentes, consumidos em volume pelos data centers de IA, que vem encarecendo PCs, consoles e eletrônicos. Segundo o The Verge, Lisa Su reconheceu o efeito: quando o preço dos componentes sobe, o preço final dos sistemas sobe junto, e o consumidor é mais sensível a isso, o que já desacelerou as vendas no varejo. A executiva disse que a AMD está se planejando para um 2027 de queda nos mercados de consumo. O tema da memória já vinha aparecendo em outras empresas, como mostrou a <a href="/noticias/altman-dram-pcs-locais-ruim-samsung-reuniao-presidentes">declaração de Sam Altman de que rodar IA localmente gasta memória demais</a>.</p>

    <p>Mesmo assim, a AMD continua lançando produtos para quem quer rodar modelos no próprio computador. A plataforma Ryzen AI Halo, com processadores Ryzen AI Max PRO 400, chegou ao mercado com máquinas de HP, Lenovo e Framework, e a empresa mostrou a Threadripper Halo Station, uma estação de trabalho que, segundo a AMD, consegue rodar localmente modelos de um trilhão de parâmetros.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa IA no trabalho ou no negócio, o balanço da AMD diz duas coisas práticas. A primeira é sobre o preço da IA na nuvem. Quanto mais a AMD consegue vender GPUs para Anthropic, OpenAI, Meta, Microsoft e Oracle, menor a dependência desses gigantes de um único fornecedor, a Nvidia. Concorrência real em chips tende a pressionar o custo de cada resposta gerada, o que pode chegar, com o tempo, aos preços das assinaturas e das APIs que pequenas empresas brasileiras pagam em dólar. Vale entender <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">como o consumo de tokens forma essa conta</a> para acompanhar essas mudanças.</p>

    <p>A segunda é sobre hardware. A própria AMD admite que a corrida da IA está encarecendo memória e, por tabela, computadores, placas de vídeo e consoles, e espera um ano fraco para o consumidor em 2027. Se você planeja trocar o notebook da empresa ou montar uma máquina para rodar modelos locais, faz sentido não adiar demais nem contar com queda de preço no curto prazo. E, antes de investir em hardware caro, compare com a opção de pagar pelo uso na nuvem: muitas tarefas do dia a dia funcionam bem com <a href="/artigos/modelo-pequeno-ou-grande-de-ia-velocidade-custo-e-qualidade-para-quem-usa">modelos menores e mais baratos</a>.</p>

    <p>Por fim, o resultado reforça que o dinheiro da IA segue concentrado na infraestrutura. Enquanto o mercado discute se os gastos das grandes empresas de tecnologia vão dar retorno, como na <a href="/noticias/gastos-ia-big-techs-fluxo-caixa-negativo-nasdaq-cai">queda recente da Nasdaq</a>, quem vende os chips continua batendo recordes. A AMD apresenta os próximos números no início de 2027, quando será possível conferir se os US$ 17 bilhões previstos para o quarto trimestre se confirmaram.</p>
  `,
};
