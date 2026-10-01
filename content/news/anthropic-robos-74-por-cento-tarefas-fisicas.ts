import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-robos-74-por-cento-tarefas-fisicas",
  title: "Anthropic mapeia quais empregos físicos a robótica já consegue fazer",
  summary:
    "Estudo da Anthropic usou Claude para avaliar 19 mil tarefas físicas e achou que robôs já dão conta de 74% delas, mas só 0,3% compensam financeiramente hoje.",
  author: "Bruno Danello",
  sourceName: "Anthropic",
  sourceUrl: "https://www.anthropic.com/research/what-work-can-robots-do",
  date: "2026-09-30",
  content: `
    <p>A Anthropic publicou nesta quarta-feira (30) um estudo que tenta responder a uma pergunta concreta: quais tarefas físicas do mercado de trabalho americano a robótica atual já consegue executar, e quais ainda estão fora de alcance. Segundo a <a href="https://www.anthropic.com/research/what-work-can-robots-do" target="_blank" rel="noopener noreferrer nofollow">pesquisa publicada pela própria Anthropic</a>, robôs disponíveis hoje já são capazes de realizar 74% das tarefas físicas catalogadas, o equivalente a 34% de todas as horas trabalhadas nos Estados Unidos. O detalhe que muda a leitura do número: apenas 0,3% dessas tarefas compensam financeiramente comprar ou alugar um robô em vez de pagar um humano para fazer o trabalho.</p>
    <p>Para chegar a esse resultado, pesquisadores usaram o próprio Claude para analisar a base de dados O*NET, que cataloga cerca de 900 ocupações e 19 mil tarefas de trabalho nos EUA. Cada tarefa física recebeu uma nota em uma escala de quatro níveis, que vai de "robô não consegue fazer" até "ambiente urbano não estruturado", como dirigir em uma rua cheia de imprevistos. Somando tarefas físicas e tarefas cognitivas que já são bem atendidas por modelos de linguagem como o próprio Claude, a Anthropic estima que cerca de 80% de todas as tarefas de trabalho, por tempo gasto, já estão tecnicamente expostas a algum tipo de automação por IA, seja robótica ou puramente digital.</p>

    <h2>Quais profissões aparecem mais e menos expostas</h2>
    <p>O levantamento aponta motoristas de táxi como a ocupação mais exposta à automação física, seguidos por outros operadores de veículos, como motoristas de vans escolares e de entrega. Trabalhadores de armazém também aparecem entre os mais expostos, e é justamente nesse grupo que a Anthropic encontra as poucas funções em que um robô já é mais barato que um funcionário humano hoje. No outro extremo da escala, enfermagem, reparos gerais e cuidados pessoais seguem praticamente intocados, porque exigem destreza manual fina, julgamento em situações não previstas ou contato humano direto, três pontos em que a robótica atual ainda falha.</p>
    <p>O estudo também olhou para trás para validar o método: cruzando dados históricos, os pesquisadores mostraram que ocupações mais expostas à robótica industrial dos anos 1970 de fato sofreram quedas maiores de salário e de emprego nas décadas seguintes. Essa checagem retroativa é o que dá credibilidade à metodologia, já que a Anthropic está usando o mesmo modelo de pontuação para projetar o que pode acontecer agora com a geração atual de robôs, que já aparece em notícias como a da <a href="/noticias/amazon-fabrica-robos-100-milhoes-indiana-greenwood">fábrica de robôs de US$ 100 milhões da Amazon</a> e os avanços da <a href="/noticias/figure-ai-helix-2-5-zero-shot-30-casas">Figure AI em tarefas domésticas</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você trabalha, contrata ou presta serviço em alguma função que envolve dirigir, operar máquina em ambiente controlado ou mover mercadoria em armazém, o estudo da Anthropic é um sinal de que a pressão por automação nessas áreas específicas tende a crescer primeiro, não por falta de capacidade técnica do robô, mas quando o custo de comprar e manter o equipamento cair o suficiente. Já quem atua em áreas que dependem de contato humano direto, julgamento caso a caso ou destreza manual fora de ambiente controlado, como saúde, beleza, manutenção residencial e boa parte dos serviços prestados no Brasil, tem uma margem de segurança bem maior nos próximos anos, segundo a própria Anthropic.</p>
    <p>O número mais importante do estudo, para quem pensa em empreender com IA no Brasil, não é o 74% de tarefas tecnicamente possíveis, e sim o 0,3% de tarefas que já compensam financeiramente hoje. Isso derruba a ideia de que a robótica vai substituir empregos físicos da noite para o dia: o gargalo real é econômico, não técnico. Enquanto isso, o avanço mais imediato continua sendo o das tarefas cognitivas, que já alimenta guias práticos como o de <a href="/artigos/empregos-que-a-ia-vai-transformar-como-se-preparar">empregos que a IA vai transformar e como se preparar</a> e o de <a href="/artigos/como-se-recolocar-no-mercado-depois-de-ser-substituido-por-automacao">como se recolocar depois de ser substituído por automação</a>.</p>

    <h2>O ritmo esperado de queda de preço</h2>
    <p>A Anthropic projeta que, se o preço dos robôs continuar caindo no ritmo histórico de cerca de 3% ao ano, a fatia de tarefas cost-competitive passaria dos atuais 0,3% para 10% em aproximadamente 40 anos, um horizonte de geração, não de poucos anos. Para que 10% das tarefas físicas virem automatizáveis de forma rentável mais rápido que isso, seria necessária uma queda de custo de cerca de 70% em um prazo bem mais curto, algo que depende de avanços em baterias, sensores e, principalmente, em manipulação fina, apontada como o maior gargalo de capacidade da robótica atual.</p>
    <p>Esse ritmo lento explica por que o debate sobre robôs tomando empregos costuma ser mais midiático do que estatístico até aqui. O relatório da <a href="/noticias/mckinsey-11-milhoes-trabalhadores-ia-2035">McKinsey sobre 11 milhões de trabalhadores afetados por IA até 2035</a>, que cobrimos recentemente, foca majoritariamente em automação cognitiva e de escritório, justamente porque é ali que a curva de custo já favorece a adoção em massa, diferente do que acontece com tarefas físicas fora de fábrica e armazém.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Vale acompanhar três sinais nos próximos meses: o preço de robôs humanoides e braços robóticos industriais caindo mais rápido que a média histórica, o número de funções em armazém e logística que migram de "tecnicamente possível" para "financeiramente vantajoso", e novos estudos que cruzem esse tipo de exposição técnica com dados reais de contratação, não apenas projeções. A própria Anthropic reconhece que fatores fora do cálculo de custo, como preferência do consumidor por atendimento humano e regulação trabalhista local, também vão pesar na velocidade real de adoção, algo que tende a variar bastante entre EUA e Brasil.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Fique de olho</span>
      <p>O estudo mede capacidade técnica, não decisão de adoção. Mesmo com robôs tecnicamente capazes de 74% das tarefas físicas, a maioria das empresas só vai trocar funcionário por máquina quando a conta financeira fechar, o que, pelo ritmo atual de queda de preço, ainda está longe para a maior parte dos setores.</p>
    </div>
  `,
  faq: [
    {
      question: "Quantas tarefas físicas os robôs já conseguem fazer, segundo a Anthropic?",
      answer:
        "O estudo encontrou que robôs disponíveis hoje já conseguem executar tecnicamente 74% das tarefas físicas catalogadas na base O*NET dos EUA, o equivalente a 34% de todas as horas trabalhadas no país.",
    },
    {
      question: "Por que os robôs não estão substituindo esses empregos agora?",
      answer:
        "Porque só 0,3% dessas tarefas compensam financeiramente hoje: o custo de comprar e manter um robô ainda é maior do que pagar um trabalhador humano na maioria dos casos, mesmo quando a tarefa é tecnicamente automatizável.",
    },
    {
      question: "Quais profissões aparecem como mais e menos expostas no estudo?",
      answer:
        "Motoristas de táxi, vans e entregas, além de trabalhadores de armazém, aparecem como mais expostos. Enfermagem, reparos gerais e cuidados pessoais aparecem como menos expostos, por exigirem destreza manual fina e contato humano direto.",
    },
  ],
};
