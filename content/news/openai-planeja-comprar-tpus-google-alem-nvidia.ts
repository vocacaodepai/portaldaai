import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-planeja-comprar-tpus-google-alem-nvidia",
  title: "OpenAI planeja comprar os chips TPU do Google além dos da Nvidia",
  summary:
    "Segundo o The Information, a OpenAI quer comprar TPUs do Google para rodar seus modelos ao lado dos chips da Nvidia. Termos não foram revelados.",
  author: "Bruno Danello",
  sourceName: "The Next Web, The Information, Reuters",
  sourceUrl: "https://thenextweb.com/news/openai-google-tpu-chips",
  date: "2026-10-28",
  publishedAt: "2026-10-28T06:40:00-03:00",
  topic: "negocios",
  imageQuery: "Sundar Pichai Google",
  content: `
    <p>A OpenAI planeja comprar chips de IA do Google, as chamadas TPUs (Tensor Processing Units), para usar ao lado das placas da Nvidia que já formam a base da sua infraestrutura. A informação foi publicada na terça-feira, 27 de outubro de 2026, pelo site The Information, que cita uma pessoa a par do assunto, e repercutida pela agência Reuters e pelo The Next Web. Nenhuma das duas empresas confirmou. A OpenAI recusou comentar e o Google não respondeu de imediato aos pedidos da Reuters.</p>

    <p>Este texto é análise nossa a partir do que o The Next Web resumiu da apuração do The Information e do complemento da Reuters. Como a fonte é única e anônima, vale tratar a notícia como um sinal de direção do mercado, e não como acordo fechado.</p>

    <h2>O que foi reportado</h2>
    <p>O núcleo da notícia é simples: a OpenAI, uma das maiores compradoras de processadores gráficos da Nvidia no mundo, pretende adquirir TPUs, os chips que o Google desenhou para treinar e rodar modelos de IA. Os termos financeiros, a quantidade de chips e o calendário de entrega não foram divulgados. Também não está claro se os chips ficariam em data centers da OpenAI, em instalações de parceiros ou dentro da nuvem do próprio Google.</p>

    <p>O que se sabe é o contexto. Em abril, o Google disse que passaria a vender hardware de TPU diretamente a um grupo pequeno de clientes, que poderiam operar os chips nos próprios data centers. A procura cresceu, em parte por causa de acordos com clientes como a Anthropic, e a demanda foi tão alta que os pesquisadores do próprio Google chegaram a esperar para ter acesso. A diretora financeira da Alphabet, Anat Ashkenazi, afirmou que a empresa espera registrar uma pequena parcela da receita de vendas de TPU até o fim de 2026, com a maior parte chegando em 2027.</p>

    <h2>Um histórico de idas e vindas</h2>
    <p>A relação entre OpenAI e Google em chips não é nova, mas sempre foi cautelosa. Em junho de 2025, a Reuters informou que a OpenAI começara a alugar chips do Google. Pouco depois, a própria OpenAI disse que não tinha planos ativos de usá-los em seus produtos. Agora, mais de um ano depois, a notícia é de compra, e não de aluguel, o que muda a natureza do vínculo: comprar hardware significa um compromisso de longo prazo, com equipes de engenharia adaptando software para uma arquitetura diferente.</p>

    <p>Os laços entre as duas rivais vêm se estreitando por outros caminhos. Na semana passada, a OpenAI disse que seus modelos de fronteira passariam a ficar disponíveis no Google Cloud, movimento parecido com o que já havia feito com a Amazon Web Services, como mostramos em <a href="/noticias/openai-modelos-google-cloud-model-garden-codex">OpenAI vai vender seus modelos e o Codex no Google Cloud</a>. Em junho, a empresa também apresentou seu primeiro chip próprio de IA, projetado com a Broadcom, que ela pretende pôr em operação até o fim de 2026. Ou seja, a estratégia que aparece é a de não depender de um único fornecedor: Nvidia, chip próprio e agora, possivelmente, Google.</p>

    <h2>Por que a OpenAI faria isso</h2>
    <p>Há pelo menos três razões plausíveis, e é importante separar o que a reportagem diz do que é interpretação nossa. A reportagem diz apenas que seria uma mudança relevante para uma empresa tão associada à Nvidia. O resto é leitura de mercado:</p>
    <ul>
      <li><strong>Custo de inferência.</strong> Rodar um modelo para milhões de usuários é a parte mais cara do negócio. Chips desenhados especificamente para essa tarefa podem sair mais baratos por resposta gerada, e a OpenAI vem buscando maneiras de financiar o gasto, como mostra a notícia sobre sua <a href="/noticias/openai-busca-30-bilhoes-adia-ipo-2027">busca por capital bilionário</a>.</li>
      <li><strong>Poder de negociação.</strong> Quem compra de dois ou três fornecedores negocia preço e prazo com mais força. A Nvidia continua sendo a referência, mas ter alternativas reais tira dela parte da vantagem na mesa.</li>
      <li><strong>Disponibilidade.</strong> A fila por chips avançados é longa. Somar uma segunda fonte pode acelerar a entrada de capacidade nova, algo decisivo quando os rivais lançam modelos em ritmo acelerado.</li>
    </ul>

    <h2>O tamanho da corrida por infraestrutura</h2>
    <p>Segundo a Reuters, Amazon, Microsoft e Alphabet planejam gastar, juntas, até US$ 600 bilhões em infraestrutura de IA neste ano. É uma cifra difícil de visualizar, e ela explica por que cada acordo de chips vira assunto: quem controla a capacidade de computação controla quanto da demanda consegue atender. A própria Alphabet divulgaria seus resultados trimestrais no mesmo dia da reportagem, o que costuma trazer atualizações sobre a receita de nuvem.</p>

    <p>O movimento do Google também reforça uma mudança de papel. Até pouco tempo, as TPUs eram quase um diferencial exclusivo da nuvem do Google. Agora a empresa vende o hardware, e outras nuvens seguem o mesmo caminho: na terça-feira, a Oracle anunciou que levará as TPUs à sua nuvem em 2027, conforme contamos em <a href="/noticias/oracle-ai-world-tpus-google-openai-ai-workspace">Oracle levará os chips TPU do Google à nuvem</a>. A Anthropic, por sua vez, já tem grandes compromissos de chips com Google e Broadcom, como vimos em <a href="/noticias/anthropic-financiamento-60-bilhoes-chips-broadcom-google">financiamento de US$ 60 bilhões para chips</a>. Se a OpenAI de fato entrar, os dois maiores laboratórios independentes passariam a usar a mesma família de chips, ainda que cada um para seus fins.</p>

    <h2>O que ainda não sabemos</h2>
    <p>Faltam informações importantes. Não há valor do contrato, volume, local de instalação, nem se a compra envolve as TPUs mais potentes, que no passado o Google poderia relutar em entregar a um concorrente direto. Também não se sabe se haverá impacto no preço dos produtos da OpenAI, como o ChatGPT e a API. A empresa não comentou, e o Google não respondeu. Se a informação for confirmada, os próximos balanços e comunicados de parceiros tendem a trazer números mais precisos.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Para guardar</span>
      <p>Disputa por chips parece assunto distante, mas determina quanto custa e quão rápido responde o modelo que você usa. Mais fornecedores de chip costumam significar mais pressão de preço nas APIs e nos planos pagos.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>Você não vai comprar uma TPU, mas paga, direta ou indiretamente, pelo custo de computação embutido em cada assinatura e em cada chamada de API. Quando os maiores laboratórios diversificam fornecedores, a tendência de médio prazo é de mais oferta de capacidade e mais concorrência em preço, ainda que isso não se traduza em desconto imediato para o usuário final. Alguns pontos práticos:</p>
    <ul>
      <li>Se você vende automações ou agentes para clientes, evite prender o produto a um único modelo ou fornecedor. Os próprios gigantes estão fazendo o contrário, e a troca de provedor fica mais fácil quando o código é modular.</li>
      <li>Se o seu custo principal é API de modelo, acompanhe as tabelas de preço a cada trimestre. Mudanças de infraestrutura costumam aparecer primeiro em novos modelos menores e mais baratos.</li>
      <li>Se você investe ou aconselha clientes sobre o setor, lembre que notícias de fonte única e anônima podem não se confirmar. Espere o comunicado oficial antes de agir.</li>
    </ul>

    <p>Para entender como o custo de modelos afeta o seu bolso, vale ler também o guia sobre <a href="/artigos/creditos-de-api-do-claude-nos-planos-max-e-team-como-resgatar-o-que-cobrem-e-limites">créditos de API do Claude nos planos Max e Team</a> e a nossa cobertura da <a href="/noticias/oracle-cerebras-nuvem-2027-inferencia-ia">Oracle com os computadores da Cerebras</a>, outro caso de nuvem diversificando chips.</p>

    <p>Por fim, uma observação de método: a apuração original é do The Information, que não identifica a fonte, e as informações complementares sobre o contexto vêm do resumo do The Next Web e da Reuters. É uma notícia de fonte única, que atualizaremos quando houver confirmação das empresas ou números do contrato.</p>
  `,
};
