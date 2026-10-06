import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "etched-propostas-40-50-bilhoes-valuation",
  title: "Etched recebe propostas de até US$ 50 bi, dobro do valor em setembro",
  summary:
    "A fabricante de chips de inferência avalia ofertas entre US$ 40 bi e US$ 50 bi, só um mês depois de ter sido avaliada em US$ 21 bi, segundo o TechCrunch.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl:
    "https://techcrunch.com/2026/10/05/etched-fields-funding-offers-at-40b-valuation-sources-say/",
  date: "2026-10-05",
  publishedAt: "2026-10-06T08:25:00-03:00",
  topic: "negocios",
  imageQuery: "AI inference chip data center silicon wafer",
  content: `
    <p>A Etched, startup americana especializada em chips feitos sob medida para acelerar a inferência de inteligência artificial (a etapa em que um modelo já treinado gera respostas), está avaliando propostas de investimento que avaliam a empresa entre US$ 40 bilhões e US$ 50 bilhões, segundo reportagem publicada em 5 de outubro pelo <a href="https://techcrunch.com/2026/10/05/etched-fields-funding-offers-at-40b-valuation-sources-say/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a> com base em fontes a par das negociações. O valor é o dobro, ou mais, dos US$ 21 bilhões em que a companhia foi avaliada havia pouco mais de um mês.</p>

    <p>Segundo a reportagem, investidores mais tradicionais estariam oferecendo algo próximo a US$ 40 bilhões, enquanto gestoras menos conhecidas no mercado chegaram a propor até US$ 50 bilhões. As negociações ainda estão em estágio inicial, não há rodada fechada, e o TechCrunch não identificou quem está liderando as conversas nem se as ofertas são de ações novas (primárias) ou de participações já existentes (secundárias).</p>

    <h2>Da Série C a US$ 50 bilhões em três meses</h2>
    <p>O salto de valor da Etched é um dos mais rápidos já registrados entre startups de chips de IA. Em julho, a empresa levantou US$ 300 milhões numa rodada liderada pela Sequoia Capital, que a avaliou em US$ 10,3 bilhões. Menos de dois meses depois, em setembro, <a href="/noticias/etched-capta-700-milhoes-valuation-21-bilhoes">uma nova rodada de US$ 700 milhões liderada pela gestora de trading quantitativo Jane Street dobrou essa avaliação para US$ 21 bilhões</a>, com a própria Jane Street se tornando a primeira cliente paga da empresa. Agora, segundo o TechCrunch, a conversa já passou da marca de US$ 40 bilhões.</p>
    <p>A Etched tem hoje cerca de 400 funcionários, dos quais aproximadamente 15% vieram da Nvidia, segundo reportagem do Wall Street Journal citada pelo TechCrunch. Os fundadores, Gavin Uberti e Chris Zhu, são dois universitários que abandonaram Harvard depois de se conhecerem numa disciplina avançada de matemática; o diretor de operações, Robert Wachen, era colega de quarto de Uberti. A empresa opera um data center de 10 megawatts na Califórnia e mantém uma linha de coordenação de produção perto de fábricas da TSMC, em Taiwan, onde fabrica seus chips.</p>

    <h2>Por que isso importa para quem usa e empreende com IA no Brasil</h2>
    <p>A disputa por capital em volta da Etched é um termômetro de um gargalo específico da infraestrutura de IA: a inferência, não o treinamento. Treinar um modelo grande é caro e demorado, mas acontece uma vez; rodar esse mesmo modelo para responder a milhões de pedidos todos os dias, o que empresas como OpenAI, Anthropic e Google fazem o tempo inteiro, consome capacidade computacional de forma contínua e crescente. Startups como a Etched apostam que chips desenhados especificamente para essa etapa, em vez de hardware genérico da Nvidia, podem processar mais pedidos por um custo menor.</p>
    <p>Para quem usa ferramentas de IA no Brasil, pagando em dólar por assinaturas como ChatGPT Plus, Claude Pro ou créditos de API, esse tipo de disputa bilionária por eficiência de inferência é parte do que determina se o preço desses serviços sobe, cai ou se mantém estável nos próximos anos. Já tratamos de como avaliar o custo real de uma ferramenta de IA no texto sobre <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher uma ferramenta de IA com segurança</a>, e o mesmo raciocínio vale para decidir se vale a pena migrar de plano quando o preço de um concorrente muda.</p>

    <h2>Uma corrida de capital que não dá sinais de desacelerar</h2>
    <p>O caso da Etched se encaixa num padrão que o Portal da AI vem acompanhando ao longo de 2026: gigantes de nuvem e startups de hardware de IA captando valores cada vez maiores em intervalos cada vez mais curtos, da <a href="/noticias/xai-colossus-2-dobra-chips-nvidia-memphis">expansão do supercomputador Colossus 2 da xAI, no Tennessee</a>, ao <a href="/noticias/softbank-conclui-investimento-30-bilhoes-openai">investimento de US$ 30 bilhões do SoftBank na OpenAI</a>. O resultado recorde da <a href="/noticias/foxconn-receita-recorde-servidores-ia-terceiro-trimestre">Foxconn no terceiro trimestre, puxado por servidores de IA</a>, mostra que essa demanda por hardware segue batendo recorde atrás de recorde na cadeia de produção inteira, não só nas empresas de capital de risco que financiam startups como a Etched.</p>
    <p>Vale observar se essa avaliação de US$ 40 bilhões a US$ 50 bilhões se confirma numa rodada fechada, e com qual grupo de investidores, já que ofertas preliminares costumam mudar de valor até o fechamento do acordo. Também é um indicador a acompanhar se os concorrentes diretos da Etched no mercado de chips de inferência, como a própria Nvidia e startups rivais, respondem com cortes de preço ou anúncios de produtos equivalentes nos próximos meses.</p>

    <h3>O gargalo que mudou de treinamento para inferência</h3>
    <p>Até pouco tempo atrás, a maior parte da atenção do mercado de chips de IA estava concentrada na etapa de treinamento, o processo caro e demorado de ensinar um modelo do zero com bilhões de parâmetros. A aposta da Etched, e de boa parte do capital que está chegando até ela, é que o verdadeiro gargalo de longo prazo passou a ser a inferência: rodar esse mesmo modelo em produção, respondendo a milhões de pedidos simultâneos de usuários no mundo inteiro, o dia inteiro, todos os dias. Diferente do treinamento, que acontece em lotes e pode ser planejado com antecedência, a demanda por inferência cresce junto com o número de pessoas e empresas usando ferramentas como ChatGPT, Claude e Gemini no dia a dia, o que torna esse tipo de capacidade ainda mais sensível a picos de uso.</p>
    <p>É esse movimento que explica por que uma startup de apenas quatro anos, com cerca de 400 funcionários, consegue atrair ofertas de investimento que a colocam no mesmo patamar de valor de mercado de empresas públicas consolidadas. Caso as negociações avancem e uma rodada com valor próximo de US$ 40 bilhões a US$ 50 bilhões seja realmente fechada, a Etched passaria a figurar entre as startups de hardware de IA mais valiosas fora dos grandes conglomerados de tecnologia, ao lado de nomes como a própria Nvidia na disputa por fatia desse mercado específico de inferência.</p>

    <div class="callout-box">
      <span class="callout-label">O que fica diferente a partir de agora</span>
      <p>Mesmo sem rodada fechada, as propostas recebidas pela Etched mostram que o mercado está disposto a apostar valores cada vez mais altos em quem promete resolver o gargalo de inferência de IA de forma mais barata que a Nvidia. Para quem acompanha o custo de ferramentas de IA no Brasil, esse tipo de disputa de capital é um dos fatores por trás do preço final cobrado pelas assinaturas e APIs mais usadas no dia a dia.</p>
    </div>
  `,
};
