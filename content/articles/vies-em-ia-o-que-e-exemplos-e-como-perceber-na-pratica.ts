import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "vies-em-ia-o-que-e-exemplos-e-como-perceber-na-pratica",
  title: "Viés em IA: o que é, exemplos e como perceber na prática",
  seoTitle: "Viés em IA: o que é e como perceber",
  excerpt:
    "Viés em IA é quando o sistema trata grupos ou situações de forma desigual. Veja de onde vem, exemplos, um teste simples para fazer em casa e como reduzir o risco.",
  metaDescription:
    "Entenda o que é viés em inteligência artificial, de onde ele vem (dados, rótulos, uso), exemplos do dia a dia, um teste de troca de nomes e como reduzir o risco ao usar IA.",
  category: "iniciantes",
  articleSubcategory: "conceitos",
  date: "2026-10-20",
  readTime: 8,
  imageQuery: "scale balance diverse people",
  seed: 497,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Viés em IA é uma tendência do sistema a tratar pessoas, grupos ou situações de forma desigual, geralmente porque aprendeu com dados, escolhas ou usos que já eram desiguais.",
    "Ele aparece em quatro pontos: nos dados de treinamento, em como as respostas foram avaliadas, no jeito como a ferramenta é configurada e em como a pessoa a usa.",
    "Você pode testar sozinho: repita o mesmo pedido trocando só um detalhe, como o nome, e compare as respostas antes de confiar em uma decisão.",
  ],
  content: `
    <p>Viés em IA é a tendência de um sistema de inteligência artificial tratar pessoas, grupos ou situações de forma desigual ou distorcida. Isso acontece porque a IA aprende com dados e escolhas feitas por pessoas, e leva junto as lacunas e os preconceitos que já estavam ali. A UNESCO alerta que o desenvolvimento e o uso de IA podem reproduzir e ampliar vieses.</p>

    <p>Entender isso não exige conhecimento técnico. Basta saber que a resposta de uma IA não é neutra por ser feita por máquina. Neste guia você vê de onde o viés vem, exemplos fáceis de reconhecer, um teste simples para fazer em casa, o que órgãos como UNESCO e NIST dizem sobre o tema e o que você pode fazer para reduzir o risco no trabalho e na vida pessoal. Os links oficiais foram conferidos em 20/10/2026.</p>

    <h2>O que é viés em inteligência artificial?</h2>

    <p>Na linguagem comum, viés é uma inclinação. Em IA, é uma inclinação sistemática: o sistema erra mais para um grupo, favorece um tipo de resultado ou repete estereótipos de forma recorrente. Um erro isolado não é necessariamente viés. O que caracteriza o viés é o padrão que se repete.</p>

    <p>Dois exemplos do cotidiano, descritos como ilustração e não como casos medidos: um assistente que, ao ser pedido para descrever um médico, usa sempre o masculino e, para uma enfermeira, o feminino; ou um sistema de reconhecimento de voz que entende melhor alguns sotaques do que outros. Em ambos, o problema não é capricho da máquina, e sim o que ela viu e como foi ajustada. Para entender a base, vale ler <a href="/artigos/como-uma-ia-aprende-treinamento-ajuste-fino-e-por-que-erra">como uma IA aprende e por que erra</a>.</p>

    <h2>De onde o viés vem</h2>

    <p>Costuma-se dividir a origem em quatro etapas. Pensar assim ajuda a saber onde olhar quando algo parece estranho.</p>

    <table>
      <thead><tr><th>Etapa</th><th>O que acontece</th><th>Exemplo simples</th></tr></thead>
      <tbody>
        <tr><td>Dados de treinamento</td><td>Os textos e imagens usados refletem quem produz mais conteúdo online</td><td>Mais material em inglês e de certos países do que em português do interior do Brasil</td></tr>
        <tr><td>Rótulos e avaliação</td><td>Pessoas avaliaram respostas com seus próprios critérios</td><td>Um estilo de resposta é preferido por quem avaliou e vira padrão</td></tr>
        <tr><td>Configuração da ferramenta</td><td>Regras e filtros definidos pela empresa mudam o que aparece</td><td>Um bloqueio excessivo de certos temas atinge só alguns grupos</td></tr>
        <tr><td>Uso</td><td>Quem pergunta influencia a resposta</td><td>Um pedido já carregado de suposição gera resposta alinhada à suposição</td></tr>
      </tbody>
    </table>

    <p>Isso significa que o viés não está só no código. Ele pode surgir em qualquer ponto da cadeia, inclusive no seu pedido. O texto sobre <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto</a> explica por que o que você escreve molda tanto a resposta.</p>

    <h2>Exemplos do dia a dia</h2>

    <h3>Triagem de currículos</h3>

    <p>Empresas usam ferramentas para filtrar candidatos. Se o sistema aprendeu com contratações passadas que favoreciam certo perfil, pode repetir o padrão. O guia sobre <a href="/artigos/curriculo-e-triagem-com-ia-como-recrutadores-filtram-candidatos">como recrutadores filtram candidatos com IA</a> mostra como isso funciona, e o artigo sobre <a href="/artigos/entrevista-gravada-com-ia-recrutadora-como-se-sair-bem-e-seus-direitos">entrevista gravada com IA</a> trata de direitos do candidato.</p>

    <h3>Imagens geradas</h3>

    <p>Peça a uma IA uma imagem de um líder de empresa ou de uma pessoa cuidando de crianças e observe quem aparece. Se a ferramenta repete o mesmo perfil em várias tentativas, há indício de estereótipo. Para melhorar, descreva o que você quer com detalhes, em vez de deixar a escolha para a ferramenta. O passo a passo está em <a href="/artigos/como-criar-imagens-com-ia-guia-passo-a-passo">como criar imagens com IA</a>.</p>

    <h3>Decisões automáticas</h3>

    <p>Análise de crédito, preço dinâmico e moderação de conteúdo podem ser feitos por sistemas automatizados. A LGPD prevê o direito de pedir revisão de decisões tomadas apenas com tratamento automatizado, como detalha o texto sobre <a href="/artigos/decisao-automatizada-lgpd-como-pedir-revisao-de-uma-ia">decisão automatizada e revisão</a>.</p>

    <h3>Respostas de assistentes</h3>

    <p>Ao pedir conselhos, resumos ou textos, a IA pode apresentar uma visão como se fosse a única. Isso é comum em temas sensíveis, como política, religião e saúde. No caso de saúde, leia <a href="/artigos/perguntar-sintomas-e-exames-para-ia-o-que-pode-e-o-que-nao-pode">o que se pode e não se pode perguntar à IA</a>.</p>

    <h2>Teste de troca de nomes: como perceber na prática</h2>

    <p>Você pode fazer uma verificação simples, sem ferramenta especial. A ideia é mudar só um detalhe do pedido e comparar o resultado.</p>

    <ol>
      <li>Escolha uma tarefa em que a identidade da pessoa não deveria mudar a resposta, como avaliar um texto ou sugerir uma carreira.</li>
      <li>Escreva o pedido duas vezes, trocando apenas o nome (por exemplo, Carlos e Carla) ou outro detalhe.</li>
      <li>Abra duas conversas novas para que uma não influencie a outra.</li>
      <li>Compare tom, elogios, sugestões e nível de exigência.</li>
      <li>Repita 3 vezes. Uma diferença que aparece sempre merece atenção; uma que aparece uma vez só pode ser acaso.</li>
    </ol>

    <pre><code>Avalie o parágrafo abaixo como se fosse um professor de redação e dê 3 sugestões de melhoria. Autor: Carlos. Texto: [cole o texto].</code></pre>

    <pre><code>Avalie o parágrafo abaixo como se fosse um professor de redação e dê 3 sugestões de melhoria. Autora: Carla. Texto: [cole o mesmo texto].</code></pre>

    <p>Esse teste não prova nem descarta viés, porque a amostra é pequena e as respostas variam por natureza. Serve como sinal de alerta para você não delegar uma decisão importante sem revisão humana. Se as respostas forem muito diferentes sem motivo aparente, desconfie e peça justificativas.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Em vez de perguntar o que a IA acha, peça os critérios. Por exemplo: liste os critérios que você usou para essa avaliação e diga quais deles dependem de opinião. Critérios expostos são mais fáceis de contestar.</p></div>

    <h2>O que dizem UNESCO e NIST</h2>

    <p>A <a href="https://www.unesco.org/en/artificial-intelligence/recommendation-ethics" rel="noopener noreferrer" target="_blank">Recomendação sobre a Ética da IA da UNESCO</a> foi adotada pelos 193 Estados-membros em novembro de 2021, conforme a página oficial. O texto alerta para o risco de reproduzir e ampliar vieses e traz o princípio de justiça e não discriminação: os atores da IA devem promover justiça social, equidade e não discriminação, com uma abordagem inclusiva.</p>

    <p>Nos Estados Unidos, o <a href="https://www.nist.gov/itl/ai-risk-management-framework" rel="noopener noreferrer" target="_blank">Marco de Gestão de Riscos de IA do NIST</a> foi lançado em 26 de janeiro de 2023, é de uso voluntário e ajuda organizações a incorporar critérios de confiabilidade no projeto, no uso e na avaliação de IA. O NIST também publicou um perfil para IA generativa em 26 de julho de 2024, segundo a página. São referências internacionais, não leis brasileiras. Para o cenário daqui, veja a <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei de IA no Brasil</a> e o <a href="/artigos/plano-brasileiro-de-ia-pbia-o-que-muda-para-voce">Plano Brasileiro de IA</a>.</p>

    <h2>Como reduzir o risco ao usar IA</h2>

    <ul class="checklist">
      <li>Não use IA como única base para decisões sobre pessoas, como contratar, demitir, negar crédito ou avaliar alunos.</li>
      <li>Peça exemplos variados e confira se a resposta muda sem motivo quando você muda um detalhe.</li>
      <li>Descreva o contexto brasileiro: região, idioma, realidade de renda, leis. Sem isso, a IA tende ao padrão mais comum nos dados em inglês.</li>
      <li>Peça mais de um ponto de vista em temas polêmicos e cheque fontes primárias.</li>
      <li>Evite colocar dados pessoais sensíveis nos pedidos. O texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade e IA</a> detalha o que costuma ser coletado.</li>
      <li>Antes de adotar uma ferramenta no trabalho, siga o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a>.</li>
    </ul>

    <p>Um bom hábito é separar erro de fato de viés. Se a IA errou uma data, trata-se de <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação</a>, e a solução é conferir fontes. Se ela repete um padrão desigual, é viés, e a solução passa por mudar o pedido, escolher outra ferramenta ou incluir revisão humana. Os dois problemas podem aparecer juntos.</p>

    <h2>Erros comuns sobre viés em IA</h2>

    <ul>
      <li><strong>Achar que máquina é neutra.</strong> Ela aprende com material produzido por pessoas.</li>
      <li><strong>Achar que viés só existe em sistemas grandes.</strong> Um assistente comum também pode repetir estereótipos.</li>
      <li><strong>Tentar resolver com uma única instrução.</strong> Pedir para ser imparcial ajuda pouco sem checar o resultado.</li>
      <li><strong>Confundir viés com opinião do usuário.</strong> Às vezes a IA só concorda com a premissa embutida no pedido.</li>
      <li><strong>Ignorar o contexto de uso.</strong> O mesmo sistema tem risco baixo para rascunhar um e-mail e alto para filtrar candidatos.</li>
    </ul>

    <p>Quem está começando pode ler o <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de IA</a> e os <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">5 erros comuns de quem está começando</a>. Faça o teste de troca de nomes ainda hoje, com um texto seu, e conte a diferença para alguém. Continue aprendendo na categoria <a href="/categoria/iniciantes">IA para iniciantes</a>.</p>
  `,
  faq: [
    {
      question: "O que é viés em inteligência artificial?",
      answer:
        "É a tendência de um sistema de IA tratar pessoas, grupos ou situações de forma desigual ou distorcida, de maneira repetida. Ele costuma vir dos dados de treinamento, das avaliações humanas, da configuração da ferramenta ou do próprio pedido de quem usa.",
    },
    {
      question: "A IA pode ser preconceituosa?",
      answer:
        "A IA não tem intenção, mas pode reproduzir preconceitos presentes nos dados e nas escolhas que a formaram. A UNESCO alerta que a IA pode reproduzir e ampliar vieses. Por isso, decisões que afetam pessoas pedem revisão humana e critérios claros.",
    },
    {
      question: "Como saber se uma IA tem viés?",
      answer:
        "Um teste simples é repetir o mesmo pedido trocando só um detalhe, como o nome da pessoa, em conversas separadas, e comparar as respostas várias vezes. Diferenças constantes e sem justificativa são um sinal de alerta, embora o teste não prove viés sozinho.",
    },
    {
      question: "Viés e alucinação são a mesma coisa?",
      answer:
        "Não. Alucinação é quando a IA inventa uma informação que parece verdadeira, como uma data ou uma fonte. Viés é um padrão desigual que se repete. Os dois exigem checagem, mas as soluções diferem: conferir fontes no primeiro, mudar pedido, ferramenta ou revisão no segundo.",
    },
    {
      question: "Existe lei sobre viés em IA no Brasil?",
      answer:
        "A LGPD prevê o direito de pedir revisão de decisões tomadas apenas por tratamento automatizado de dados. A regulação específica de IA ainda está em evolução, então confira o texto atualizado nas fontes oficiais.",
    },
  ],
};
