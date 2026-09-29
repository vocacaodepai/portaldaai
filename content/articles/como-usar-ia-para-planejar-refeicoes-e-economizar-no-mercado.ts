import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-usar-ia-para-planejar-refeicoes-e-economizar-no-mercado",
  title: "Planejar refeições com IA: cardápio semanal e economia no mercado",
  seoTitle: "Planejar refeições com IA e economizar no mercado",
  excerpt:
    "Planejar refeições com IA: monte o cardápio da semana, gere a lista de compras por seção do mercado e reaproveite sobras com prompts prontos.",
  metaDescription:
    "Planejar refeições com IA em 15 minutos: cardápio semanal dentro do orçamento, lista de compras por corredor e prompts para usar o que já tem em casa.",
  category: "iniciantes",
  date: "2026-09-25",
  updated: "2026-09-27",
  readTime: 8,
  imageQuery: "meal planning groceries kitchen table",
  seed: 81,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Planejar refeições com IA é uma conversa de 15 minutos: você informa pessoas, orçamento, tempo e o que já tem em casa, e recebe cardápio, lista de compras e modo de preparo.",
    "O ganho vem de duas regras no prompt: receitas que compartilham ingredientes e lista organizada por seção do mercado, o que reduz item esquecido e compra por impulso.",
    "A IA não sabe o preço do mercado perto de você; use a estimativa como teto, confira os valores na loja e ajuste o cardápio na semana seguinte.",
  ],
  content: `
    <p>Planejar refeições com IA resolve dois problemas de uma vez: o "o que vou fazer de janta hoje" e a compra de mercado que estoura o orçamento. Em uma conversa de 15 minutos com ChatGPT, Claude ou Gemini, você sai com o cardápio da semana, a lista de compras por seção do mercado e o modo de preparo de cada prato.</p>

    <p>O dinheiro em jogo é maior do que parece. Uma pesquisa da Embrapa com a FGV, feita com 1.764 famílias, estimou que <a href="https://www.correiobraziliense.com.br/app/noticia/economia/2019/05/30/internas_economia,758805/desperdicio-de-alimentos-chega-a-r-1-mil-por-familia-por-ano-diz-emb.shtml" rel="noopener noreferrer">uma família de três pessoas joga fora cerca de R$ 1.002 em comida por ano</a>, 128 quilos, com arroz, carne, feijão e frango no topo da lista. Planejamento é a forma mais barata de atacar esse desperdício, e a IA tira dele a parte chata.</p>

    <h2>O que a IA precisa saber para montar seu cardápio?</h2>
    <p>Um pedido do tipo "me dê receitas para a semana" devolve lista genérica com ingrediente que você não tem. O cardápio fica bom quando o prompt traz sete informações: quantas pessoas comem, restrições (alergia, vegetariano, criança pequena), orçamento semanal em reais, tempo disponível para cozinhar em cada dia, o que já tem na despensa e na geladeira, quantas refeições por dia você quer cobrir e o que a família gosta ou recusa.</p>

    <p>Duas regras no prompt fazem a diferença no bolso. A primeira: receitas que compartilham ingredientes (o mesmo frango rende dois pratos, o mesmo maço de couve entra em três). A segunda: aproveitar o que já está em casa antes de comprar. Quem quer entender por que esse tipo de instrução muda tanto a resposta encontra a explicação no <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">guia de prompt engineering</a>.</p>

    <p>Qualquer assistente generalista dá conta. O <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">comparativo entre ChatGPT, Claude e Gemini</a> ajuda a escolher, mas para essa tarefa o plano gratuito de qualquer um dos três resolve. A orientação de fundo segue o <a href="https://www.unasus.gov.br/noticia/ministerio-da-saude-lanca-guia-alimentar-para-populacao-brasileira" rel="noopener noreferrer">Guia Alimentar para a População Brasileira</a>, do Ministério da Saúde: comida feita em casa, base de alimentos in natura ou minimamente processados, e planejamento das refeições.</p>

    <h2>Passo a passo: cardápio, lista e preparo em 15 minutos</h2>

    <h3>1. Monte o cardápio (5 minutos)</h3>
    <pre><code>Monte o cardápio de almoço e jantar de segunda a domingo para [3] pessoas, sendo [1 criança de 6 anos].
Orçamento máximo para o mercado da semana: R$ [300].
Tempo para cozinhar: até 30 minutos de segunda a sexta, até 1 hora no fim de semana.
Já tenho em casa: [arroz, feijão, óleo, cebola, alho, 6 ovos, 1 kg de batata, macarrão].
Restrições: [sem frutos do mar]. A família não gosta de [berinjela].
Regras: use cada proteína em pelo menos 2 refeições diferentes; aproveite o que já tenho antes de sugerir compra; prefira alimentos in natura a ultraprocessados; inclua verdura ou legume em toda refeição.
Entregue uma tabela com dia, almoço, jantar e tempo de preparo.</code></pre>

    <h3>2. Gere a lista de compras (3 minutos)</h3>
    <pre><code>A partir do cardápio acima, gere a lista de compras da semana.
Some as quantidades de cada ingrediente usado em mais de uma receita.
Organize por seção do mercado: hortifruti, açougue, laticínios e frios, mercearia, limpeza (se precisar).
Ao lado de cada item, escreva a quantidade e uma estimativa de preço em R$, deixando claro que é estimativa.
Termine com o total estimado e, se passar de R$ [300], sugira 3 trocas para caber no orçamento.</code></pre>

    <h3>3. Peça o preparo do dia (2 minutos por dia)</h3>
    <p>Na hora de cozinhar, pergunte: "modo de preparo do jantar de terça, passo a passo, para quem cozinha pouco". A resposta vem em ordem, com tempos. Salve o cardápio em nota no celular ou fixe a conversa para reabrir nos dias seguintes. Quem tem um <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">assistente de IA pessoal configurado</a> pode guardar as preferências da família nas instruções fixas e nunca mais repetir a lista de restrições.</p>

    <h2>Exemplo: família de 3 em Belo Horizonte com R$ 300 por semana</h2>
    <p>Cenário ilustrativo para mostrar as contas. Um casal com uma criança de 6 anos gastava em média R$ 380 por semana no mercado, mais dois ou três pedidos de delivery, e ainda jogava comida fora. Eles usam o plano gratuito do Gemini com o prompt do passo 1, orçamento de R$ 300, e o que já tinham na despensa. Para calibrar a expectativa: em agosto de 2026, a cesta básica de um adulto custava <a href="https://www.poder360.com.br/poder-economia/preco-da-cesta-basica-cai-em-25-de-27-capitais-em-agosto-de-2026/" rel="noopener noreferrer">R$ 900,59 em São Paulo e R$ 570,98 em Aracaju</a>, segundo o levantamento do Dieese com a Conab, então R$ 300 por semana para três pessoas é apertado, mas viável com planejamento.</p>

    <table>
      <thead>
        <tr>
          <th>Dia</th>
          <th>Almoço</th>
          <th>Jantar</th>
          <th>Ingrediente compartilhado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Segunda</td>
          <td>Frango grelhado, arroz, feijão e salada</td>
          <td>Macarrão com frango desfiado</td>
          <td>Frango (1,5 kg rende 2 dias)</td>
        </tr>
        <tr>
          <td>Terça</td>
          <td>Omelete de legumes com arroz</td>
          <td>Sopa de batata com frango</td>
          <td>Ovos, batata, frango</td>
        </tr>
        <tr>
          <td>Quarta</td>
          <td>Carne moída com batata e couve</td>
          <td>Panqueca de carne moída</td>
          <td>Carne moída (1 kg rende 2 dias)</td>
        </tr>
        <tr>
          <td>Quinta</td>
          <td>Escondidinho de carne moída</td>
          <td>Arroz de forno com legumes</td>
          <td>Batata, legumes da terça</td>
        </tr>
        <tr>
          <td>Sexta</td>
          <td>Peixe assado com batata</td>
          <td>Torta salgada de legumes</td>
          <td>Batata, ovos</td>
        </tr>
      </tbody>
    </table>

    <p>A lista de compras saiu com 23 itens em quatro seções e estimativa de R$ 286. No mercado, o valor real foi R$ 312 porque a carne moída estava mais cara que a estimativa. Na semana seguinte, eles informaram os preços reais no prompt e a IA trocou um dia de carne por ovos e grão-de-bico, fechando em R$ 291. A economia contra os R$ 380 anteriores, somada ao fim do delivery de emergência, entra direto na sobra do mês, e o guia sobre <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">organizar finanças pessoais com IA</a> mostra como acompanhar isso no extrato.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Atenção</span>
      <p>A IA não tem acesso ao preço do mercado perto de você. A estimativa dela serve como teto para decidir o cardápio, não como orçamento fechado. Anote os preços reais na primeira compra e cole no prompt da semana seguinte: a segunda estimativa fica muito mais próxima.</p>
    </div>

    <h2>Reaproveitando sobras com uma foto da geladeira</h2>
    <p>Sexta-feira, restou meio repolho, três cenouras, um pedaço de queijo e arroz de ontem. Tire uma foto da geladeira aberta ou descreva o que tem e peça duas receitas com esses itens, sem comprar nada. Os assistentes atuais leem imagem, e o texto sobre <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA multimodal</a> explica o que muda quando a máquina vê além do texto.</p>

    <pre><code>Esta é a foto da minha geladeira (ou: tenho em casa [lista]).
Sugira 2 receitas para o jantar de hoje usando só o que aparece, mais arroz, óleo, sal, alho e cebola que sempre tenho.
Para cada receita: tempo de preparo, passo a passo curto e o que sobra para amanhã.
Não sugira comprar nada.</code></pre>

    <p>Esse hábito ataca a principal causa do desperdício doméstico, que é comida esquecida até estragar. A própria pesquisa da Embrapa, nos <a href="https://www.embrapa.br/en/noticias-mais-lidas/-/asset_publisher/HA73uEmvroGS/content/id/40838634" rel="noopener noreferrer">dados expandidos do estudo</a>, aponta que as famílias que enxergam o impacto do desperdício no orçamento jogam menos comida fora. Ver o valor em reais toda semana faz exatamente isso.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Dica</span>
      <p>Peça para a IA marcar no cardápio o "dia de sobras": uma refeição por semana montada só com o que restou dos outros dias. Além de economizar, ela deixa a geladeira vazia antes da compra seguinte, o que facilita ver o que realmente falta.</p>
    </div>

    <h2>Vale pagar por app ou plano de IA para isso?</h2>
    <p>Para a maioria das famílias, não. O plano gratuito de ChatGPT, Claude ou Gemini monta cardápio, lista e preparo sem custo; o limite de mensagens do plano grátis costuma ser suficiente para uma conversa semanal de planejamento (consulte a página oficial de cada ferramenta para os limites atuais). O <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">guia sobre IA grátis ou paga</a> mostra em quais casos a assinatura compensa, e o <a href="/artigos/chatgpt-plus-vale-a-pena-review-2026">review do ChatGPT Plus</a> detalha o que muda no plano pago.</p>

    <p>Apps especializados de cardápio fazem sentido quando você quer sincronizar a lista com outra pessoa da casa ou controlar calorias com precisão. Antes de assinar qualquer um, teste um mês só com o assistente gratuito e uma nota compartilhada no celular. Vários dos <a href="/artigos/7-aplicativos-de-ia-que-toda-pessoa-deveria-conhecer">aplicativos de IA que toda pessoa deveria conhecer</a> já têm função de lista e lembrete que resolve a parte de compartilhar.</p>

    <h2>Erros comuns ao planejar refeições com IA</h2>
    <p>O primeiro erro é aceitar cardápio com 15 ingredientes diferentes por dia. Se a lista de compras passou de 30 itens para uma semana, o prompt não pediu ingredientes compartilhados. Volte e peça de novo com essa regra. O segundo é não informar o que já tem em casa: a IA vai mandar comprar arroz e óleo de novo, e o orçamento estoura antes da carne.</p>

    <ul class="checklist">
      <li>Informei pessoas, orçamento em R$, tempo de preparo e o que já tenho</li>
      <li>Pedi receitas que compartilham ingredientes</li>
      <li>Gerei a lista por seção do mercado com quantidades somadas</li>
      <li>Anotei os preços reais e vou colar no prompt da próxima semana</li>
      <li>Reservei um dia da semana para sobras</li>
    </ul>

    <p>O terceiro erro é confiar cegamente em tempo de preparo e em quantidade. A IA às vezes diz "20 minutos" para um prato que leva 45 e calcula 200 g de arroz para três adultos com fome. Trate a primeira semana como teste e corrija no prompt seguinte, o mesmo hábito que o <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">guia dos 5 erros de iniciante em IA</a> recomenda para qualquer uso. O quarto é cardápio bonito que ninguém segue: se a família não come peixe, não adianta a IA insistir. Coloque as recusas no prompt e o plano vira rotina, do mesmo jeito que o guia de <a href="/artigos/como-usar-ia-para-criar-rotina-diaria-produtiva">rotina produtiva com IA</a> sugere para qualquer hábito novo.</p>

    <p>Um cuidado final sobre dados: foto da geladeira não é problema, mas evite mandar foto com correspondência, receita médica ou documento visível na bancada. O texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> mostra o que uma imagem entrega sem você perceber. E se os termos "multimodal" ou "contexto" apareceram aqui pela primeira vez, o <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de IA</a> explica cada um em uma linha.</p>

    <p>Comece neste fim de semana com o prompt do passo 1 e o orçamento que você tem. Se a primeira compra vier abaixo do habitual e a geladeira chegar vazia na sexta, o método funcionou. A mesma lógica de "diga o orçamento e o que já tem" serve para <a href="/artigos/como-usar-ia-para-planejar-viagens-sem-perder-horas-pesquisando">planejar viagens com IA</a> e para o resto dos guias da categoria <a href="/categoria/iniciantes">Para Iniciantes</a>.</p>
  `,
  faq: [
    {
      question: "Preciso pagar por um app de planejamento de refeições?",
      answer:
        "Na maioria dos casos, não. O plano gratuito de ChatGPT, Claude ou Gemini monta cardápio semanal, lista de compras por seção e modo de preparo em uma única conversa. Apps especializados só passam a compensar se você quer sincronizar a lista com outra pessoa ou controlar calorias com precisão. Teste um mês com o assistente gratuito antes de assinar qualquer coisa.",
    },
    {
      question: "A IA sabe o preço do mercado perto de mim?",
      answer:
        "Não. Ela estima com base em valores médios e pode errar bastante, porque preço varia por cidade, bairro e loja. Use a estimativa como teto para escolher o cardápio, anote os preços reais na primeira compra e cole essa lista no prompt da semana seguinte. A partir da segunda semana a estimativa fica bem mais próxima do que você paga.",
    },
    {
      question: "Como fazer a IA montar cardápio dentro do meu orçamento?",
      answer:
        "Diga o valor máximo em reais no prompt, informe o que já tem em casa e peça receitas que compartilham ingredientes. Depois peça a lista de compras com total estimado e, se passar do limite, três trocas para caber. Proteínas mais baratas, como ovos, frango inteiro e grão-de-bico, costumam ser as primeiras sugestões quando o orçamento aperta.",
    },
    {
      question: "Planejar refeições com IA funciona para quem tem restrição alimentar?",
      answer:
        "Funciona, desde que a restrição esteja escrita no prompt: alergia, intolerância, dieta vegetariana, criança pequena, diabetes. A IA respeita a regra na maioria das vezes, mas confira cada receita antes de cozinhar, principalmente em caso de alergia grave. Para dieta prescrita por médico ou nutricionista, use a IA para organizar o cardápio que o profissional definiu, não para criar um.",
    },
    {
      question: "Dá para mandar foto da geladeira para a IA sugerir receita?",
      answer:
        "Dá. ChatGPT, Claude e Gemini leem imagens: tire uma foto da geladeira aberta, peça duas receitas só com o que aparece e diga o que sempre tem na despensa (arroz, óleo, sal, alho). Evite fotos em que apareçam documentos, correspondência ou remédios na bancada, porque a imagem entrega mais informação do que parece.",
    },
  ],
  quiz: [
    {
      question: "Qual regra no prompt mais reduz a lista de compras da semana?",
      options: [
        "Pedir receitas aleatórias sem relação entre si",
        "Pedir receitas que compartilham ingredientes e aproveitam o que já tem em casa",
        "Comprar tudo que aparecer nas sugestões",
        "Pedir só receitas rápidas",
      ],
      answer: 1,
      explanation:
        "Receitas que compartilham proteína, legumes e base reduzem o número de itens diferentes e evitam sobra de ingrediente usado uma única vez. Informar o que já tem em casa evita compra repetida.",
    },
    {
      question: "Por que a IA não consegue fechar o orçamento exato do mercado?",
      options: [
        "Porque ela não sabe nutrição",
        "Porque os preços variam por região e loja, e ela não tem acesso a eles em tempo real",
        "Porque ela não entende português",
        "Porque cardápio não tem relação com preço",
      ],
      answer: 1,
      explanation:
        "A IA estima com base em preços médios, não nos valores da loja onde você compra. Por isso a estimativa é um teto, e anotar os preços reais para a semana seguinte melhora muito a previsão.",
    },
  ],
};
