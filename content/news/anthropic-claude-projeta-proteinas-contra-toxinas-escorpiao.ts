import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-claude-projeta-proteinas-contra-toxinas-escorpiao",
  title: "Anthropic usa Claude para projetar proteínas contra toxinas de escorpião",
  summary:
    "Em 64 horas, o Claude gerou 318 mil projetos de proteínas; 17 dos 211 testados em laboratório se ligaram às toxinas, mas ainda não há antiveneno pronto.",
  author: "Bruno Danello",
  sourceName: "Anthropic",
  sourceUrl: "https://www.anthropic.com/research/claude-scorpion-toxin-binder-design",
  date: "2026-10-21",
  publishedAt: "2026-10-21T16:45:00-03:00",
  topic: "lancamentos",
  imageQuery: "scorpion",
  content: `
    <p>A Anthropic publicou nesta terça-feira (20) um estudo em que um modelo de pesquisa interno, rodando dentro do Claude Science, projetou pequenas proteínas capazes de se ligar com força a toxinas de escorpião. O trabalho foi feito em parceria com a Citrini Research e descrito pela equipe de ciência da empresa no <a href="https://www.anthropic.com/research/claude-scorpion-toxin-binder-design" target="_blank" rel="noopener noreferrer nofollow">artigo original da Anthropic</a>. O objetivo declarado é apoiar pesquisas futuras de antivenenos, e não entregar um medicamento pronto.</p>

    <p>O caso chama atenção menos pelo resultado biológico em si e mais pela forma como foi obtido: o Claude trabalhou de maneira autônoma durante as primeiras 24 horas de um projeto que, ao todo, durou 64 horas, a partir de um comando inicial e de quatro orientações de acompanhamento dadas por pesquisadores. É um exemplo concreto do que se chama de agente de IA aplicado à ciência, tema que o Portal da AI explica em <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e o futuro do trabalho autônomo</a>.</p>

    <h2>O que a Anthropic fez, passo a passo</h2>
    <p>Segundo a empresa, a tarefa foi desenhar minibinders, que são proteínas pequenas feitas para grudar com firmeza em um alvo. Os alvos foram cinco toxinas de escorpião, vindas de quatro espécies diferentes: Cn2, do México, Ts1, do Brasil, AaH I e AaH II, do norte da África, e LqhIII, do Oriente Médio. A empresa lembra que as picadas de escorpião causam mais de 1,2 milhão de casos e mais de 3.250 mortes por ano, a maioria entre crianças.</p>
    <p>O Claude escolheu as estruturas das toxinas, definiu os pontos de ligação mais promissores, estabeleceu critérios mínimos de qualidade e criou estratégias para projetos que mirassem mais de uma toxina ao mesmo tempo. Para isso, usou 12 ferramentas de design de proteínas e gerou 318.484 projetos. Depois, simulou o encaixe de 553.052 pares entre projeto e toxina. A campanha consumiu cerca de 10 mil horas de GPU.</p>
    <p>Dos projetos gerados, o Claude escolheu 180 para teste, e a equipe humana acrescentou outros 31, chegando a 211 proteínas levadas ao laboratório. A empresa diz que filtrou projetos parecidos com toxinas ou com proteínas conhecidas e que o trabalho teve supervisão humana, mas não detalha outras salvaguardas no texto.</p>

    <h2>O que os testes de laboratório mostraram</h2>
    <p>Dois laboratórios independentes avaliaram a ligação das proteínas: a Adaptyv Bio, usando expressão sem células, e a Twist Bioscience, com expressão em células de rim humano. Para contar como binder, o projeto precisava aparecer como acerto nos dois laboratórios, com constante de dissociação de 1 micromolar ou melhor e sem sinal contra uma proteína de controle sem relação, a CLEC12A. A LqhIII foi testada apenas na Adaptyv Bio.</p>
    <p>Pelos critérios, 17 projetos passaram: 7 contra a Cn2, 4 contra a AaH II, 4 contra a AaH I e 2 contra a LqhIII. Entre os 60 projetos pensados para uma única toxina, 18% viraram binders. Os dois melhores, chamados Cn2-B1 e Cn2-B2, alcançaram afinidade na casa de um dígito em nanomolar, o que indica uma ligação muito firme. Experimentos de competição sugerem que eles atuam no mesmo local, ou perto dele, de um anticorpo conhecido que neutraliza a Cn2 em camundongos.</p>
    <p>Houve uma falha clara: nenhum projeto multitoxina, aquele que tentava ligar mais de uma toxina com a mesma proteína, atendeu aos critérios. A Anthropic levanta algumas hipóteses para isso, sem cravar uma causa.</p>

    <h2>O que ainda não foi provado</h2>
    <p>A própria empresa é cuidadosa nos limites. Os testes usaram toxinas recombinantes, e não toxina purificada de veneno real. Nenhum projeto foi avaliado quanto à capacidade de neutralizar a toxina em células ou em animais vivos. A Anthropic afirma que não produziu um antiveneno e que transformar um binder em remédio seguro e acessível continua sendo um desafio grande. Os especialistas Susana Vázquez Torres, do CNIO, em Madri, e Timothy P. Jenkins, da Universidade Técnica da Dinamarca, descreveram o trabalho como um primeiro passo promissor.</p>
    <p>Os 211 projetos e os dados do experimento foram liberados no Hugging Face, junto com um relatório técnico, o que permite que outros grupos tentem reproduzir ou ir além do resultado.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Na prática</span>
      <p>Ao ler notícias de IA na ciência, separe três coisas: o que foi gerado, o que foi medido em laboratório e o que foi provado em organismos vivos. Aqui, só as duas primeiras aconteceram, e a terceira ainda está por fazer.</p>
    </div>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo longe da biologia, o episódio mostra como agentes de IA estão sendo usados em tarefas longas, com muitas etapas e ferramentas, e não só para responder perguntas. O padrão é o mesmo que aparece em outras pesquisas recentes cobertas pelo Portal da AI, como o <a href="/noticias/claude-descobre-sistema-enzimatico-parecido-crispr">sistema enzimático parecido com o CRISPR achado pelo Claude</a> e o <a href="/noticias/claude-rastreia-sementes-curvas-nist-ecdsa">rastreio das sementes das curvas do NIST</a>: um humano define o objetivo, e o agente executa e filtra milhares de tentativas.</p>
    <p>Para quem empreende ou trabalha com tecnologia, a lição prática é que o valor está em saber formular bem o problema, definir critérios de qualidade e checar os resultados com testes independentes. Foi exatamente isso que fez a diferença aqui: o modelo gerou em massa, mas a validação veio de laboratórios externos com regras rígidas. Quem quer aplicar o mesmo raciocínio em um negócio pode começar pelo básico em <a href="/artigos/automacao-com-ia-economize-horas-de-trabalho">automação com IA para economizar horas de trabalho</a>.</p>
    <p>Há também o lado da segurança. Projetar proteínas que se ligam a toxinas é um tipo de capacidade que exige cuidado, e o debate sobre uso duplo da IA em biologia tende a crescer. O Portal da AI mostrou, por exemplo, a iniciativa da <a href="/noticias/synthid-bio-deepmind-marca-dagua-proteinas-ia">DeepMind de criar marca d'água para proteínas desenhadas por IA</a>, um caminho para rastrear a origem desse tipo de material.</p>

    <h2>O que acompanhar daqui para a frente</h2>
    <p>Os próximos passos a observar são os testes de neutralização em células e em animais, a repetição do resultado por grupos independentes com os dados públicos e a eventual extensão do método a outras toxinas e a outros venenos. Também vale ver se projetos multitoxina, que falharam desta vez, conseguem avançar com ajustes. Até lá, o resultado é uma prova de conceito: mostra que um agente de IA pode conduzir uma campanha longa de design de proteínas e entregar candidatos reais, mas ainda não um tratamento.</p>
  `,
};
