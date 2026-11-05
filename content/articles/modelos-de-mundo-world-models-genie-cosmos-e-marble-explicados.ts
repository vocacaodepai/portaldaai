import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "modelos-de-mundo-world-models-genie-cosmos-e-marble-explicados",
  title: "Modelos de mundo (world models): o que são e o que já existe",
  seoTitle: "Modelos de mundo: o que são Genie, Cosmos e Marble",
  excerpt:
    "Modelos de mundo são IAs que simulam ambientes e preveem o efeito de cada ação. Veja como Genie, Cosmos e Marble funcionam, para que servem e seus limites.",
  metaDescription:
    "Entenda os modelos de mundo (world models): como simulam ambientes, o que fazem Genie, Cosmos e Marble, uso em robôs e carros, limites e impacto no trabalho.",
  category: "futuro",
  articleSubcategory: "tecnologia-emergente",
  date: "2026-11-05",
  readTime: 8,
  imageQuery: "robot arm virtual simulation screen",
  seed: 1135,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Modelos de mundo são sistemas de IA que simulam um ambiente e preveem o que acontece depois de cada ação, em vez de só gerar texto ou um vídeo fechado.",
    "Hoje os principais exemplos são o Genie, do Google DeepMind, a plataforma aberta Cosmos, da Nvidia, e o Marble, da World Labs, cada um com um foco diferente.",
    "O uso mais forte no curto prazo é treinar robôs e carros autônomos em simulação; jogos, cinema e educação vêm depois, ainda com limites de duração e de física.",
  ],
  content: `
    <p>Modelos de mundo (world models) são sistemas de inteligência artificial que simulam um ambiente e preveem como ele muda depois de cada ação. Em vez de responder com texto ou entregar um vídeo pronto, eles geram um mundo em que dá para andar, mexer em objetos e testar cenários. Genie, Cosmos e Marble são os exemplos mais conhecidos.</p>

    <p>O assunto saiu do laboratório nos últimos meses. O Google mostrou o Genie 4, a AMD fechou a compra da World Labs e a Nvidia trata a simulação como base da próxima fase da robótica. Este guia explica o que essa tecnologia faz, como cada projeto funciona, onde ela já está sendo usada e o que ela ainda não consegue entregar.</p>

    <h2>O que são modelos de mundo?</h2>

    <p>A definição mais clara vem do próprio Google DeepMind. No <a href="https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/" target="_blank" rel="noopener noreferrer">anúncio do Genie 3</a>, de agosto de 2025, o laboratório descreve um modelo de mundo como um sistema que usa o que aprendeu sobre o mundo para simular partes dele. Isso permite que um agente preveja como o ambiente vai mudar e como as próprias ações vão afetá-lo.</p>

    <p>Pense num simulador de direção. Um jogo comum segue regras que um programador escreveu à mão: a gravidade, o atrito, o jeito como a porta abre. Num modelo de mundo, ninguém escreve essas regras. A IA aprende o comportamento das coisas assistindo a enormes quantidades de vídeo e de dados de sensores, e passa a gerar o próximo instante a partir do que acabou de acontecer.</p>

    <p>A ideia é antiga na pesquisa, mas ganhou força porque os modelos de linguagem, sozinhos, não entendem bem o espaço físico. Um chatbot sabe descrever como se dobra uma toalha; um robô precisa prever o que acontece com o tecido a cada movimento da mão. Essa é a lacuna que os modelos de mundo tentam cobrir.</p>

    <h2>Como funcionam, sem jargão</h2>

    <p>O funcionamento lembra o de um gerador de vídeo, com uma diferença importante: o vídeo é criado quadro a quadro enquanto você interage. Você aperta para a esquerda, e o modelo inventa o que existe à esquerda. Você pede chuva, e a cena muda sem recomeçar. Para isso, o modelo precisa lembrar do que já mostrou, ou o mundo vira uma colagem incoerente.</p>

    <table>
      <thead>
        <tr><th>Tipo de IA</th><th>O que recebe</th><th>O que entrega</th><th>Interação</th></tr>
      </thead>
      <tbody>
        <tr><td>Modelo de linguagem</td><td>Texto, imagem</td><td>Texto</td><td>Pergunta e resposta</td></tr>
        <tr><td>Gerador de vídeo</td><td>Texto, imagem</td><td>Clipe fechado de segundos</td><td>Nenhuma depois de gerado</td></tr>
        <tr><td>Modelo de mundo</td><td>Texto, imagem, ações</td><td>Ambiente que reage em tempo real</td><td>Contínua, a cada movimento</td></tr>
      </tbody>
    </table>

    <p>Essa memória é o ponto fraco atual. O Genie 3 roda a 24 quadros por segundo em 720p e mantém o ambiente consistente por alguns minutos, com memória visual de cerca de um minuto, segundo o DeepMind. Quem quer entender como a IA passou a combinar visão, som e texto encontra o pano de fundo no guia de <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA multimodal</a>.</p>

    <h2>Quem está construindo: Genie, Cosmos e Marble</h2>

    <h3>Genie, do Google DeepMind</h3>

    <p>O Genie cria mundos navegáveis a partir de uma frase. O Genie 3 trouxe pela primeira vez a interação em tempo real e os chamados eventos de mundo, em que um comando de texto muda o clima ou acrescenta objetos. A versão seguinte, descrita na notícia sobre o <a href="/noticias/google-genie-4-modelo-de-mundo-audio-tempo-real">Genie 4 com áudio e edição em tempo real</a>, adicionou som e manteve a cena coerente por até dois minutos. As duas saíram como prévia de pesquisa para um grupo fechado.</p>

    <h3>Cosmos, da Nvidia</h3>

    <p>O foco da Nvidia é outro: a chamada IA física. A <a href="https://www.nvidia.com/en-us/ai/cosmos/" target="_blank" rel="noopener noreferrer">plataforma Cosmos</a> reúne modelos de mundo abertos, sob a licença OpenMDW 1.1 da Linux Foundation, em três tamanhos (Super, Nano e Edge). A empresa os apresenta para gerar dados sintéticos, como o mesmo trajeto sob chuva, neblina ou à noite, para treinar robôs e sistemas de direção autônoma. Por serem abertos, entram no mesmo debate do guia sobre <a href="/artigos/ia-codigo-aberto-o-que-muda-para-quem-usa">IA de código aberto</a>.</p>

    <h3>Marble, da World Labs</h3>

    <p>A World Labs, fundada pela pesquisadora Fei-Fei Li, lançou o Marble para o público em novembro de 2025. Segundo o <a href="https://www.worldlabs.ai/blog/marble-world-model" target="_blank" rel="noopener noreferrer">anúncio da empresa</a>, ele gera mundos 3D a partir de texto, fotos, vídeos curtos ou um esboço feito com formas simples, e exporta o resultado em formatos usados por estúdios de jogos e animação. A startup está sendo comprada pela AMD, como mostra a notícia da <a href="/noticias/amd-compra-world-labs-fei-fei-li-ia-espacial">compra da World Labs por US$ 8,2 bilhões</a>.</p>

    <h2>Para que servem na prática</h2>

    <p>O uso mais maduro é a robótica. Treinar um robô no mundo real é caro e lento: cada queda quebra peça, cada teste leva horas. Na simulação, o mesmo robô tenta milhares de vezes em uma noite. É por isso que fabricantes como a Figure apostam em pré-treino amplo; a notícia sobre o <a href="/noticias/figure-ai-helix-2-5-zero-shot-30-casas">robô da Figure em 30 casas nunca vistas</a> mostra até onde isso já chegou. O contexto maior está no guia sobre <a href="/artigos/robos-humanoides-com-ia-quando-chegam-ao-mercado-de-trabalho">robôs humanoides no mercado de trabalho</a>.</p>

    <p>Carros autônomos seguem a mesma lógica. Situações raras, como uma criança atravessando entre carros parados na chuva, são difíceis de filmar, mas fáceis de simular. O panorama de quando essa tecnologia chega às ruas daqui está no guia sobre <a href="/artigos/robotaxi-no-brasil-quando-carros-autonomos-chegam-e-o-que-ja-existe">robotáxi no Brasil</a>.</p>

    <p>Há também usos criativos e educativos: protótipos de jogos, storyboards de filmes e aulas em que o aluno entra numa cena histórica. E há um parentesco com a ciência do clima, que também simula o mundo para prever o próximo estado, como mostra o guia de <a href="/artigos/ia-na-previsao-do-tempo-tupann-do-impa-monan-do-inpe-e-o-que-muda-para-voce">IA na previsão do tempo</a>.</p>

    <h2>Um exemplo brasileiro: protótipo de jogo em duas semanas</h2>

    <p>Imagine um estúdio independente de Recife, com quatro pessoas, que quer apresentar um jogo ambientado no Recife Antigo para um edital de fomento. Antes, o cenário de demonstração exigia um artista 3D por cerca de dois meses. Com um gerador de mundos como o Marble, o fluxo pode mudar assim:</p>

    <ol>
      <li><strong>Dias 1 a 3:</strong> a equipe fotografa ruas e fachadas e gera três versões do bairro a partir das fotos.</li>
      <li><strong>Dias 4 a 8:</strong> escolhe a melhor, exporta a malha 3D e leva para o motor do jogo, onde ajusta colisões e iluminação.</li>
      <li><strong>Dias 9 a 14:</strong> o artista corrige fachadas que saíram erradas, acrescenta detalhes históricos e grava o vídeo de demonstração.</li>
    </ol>

    <p>O ganho está em chegar a um protótipo apresentável em duas semanas, não em dispensar o artista: ele continua necessário para corrigir o que a IA inventou e para garantir fidelidade histórica. Antes de usar, a equipe precisa conferir os termos de uso e o plano da ferramenta na página oficial, porque limites e licença comercial mudam.</p>

    <h2>Limites e riscos que ainda pesam</h2>

    <p>O próprio DeepMind lista as limitações do Genie 3: o leque de ações do agente é restrito, várias personagens independentes interagindo ainda é um problema aberto, lugares reais não saem com precisão geográfica e a interação dura minutos, não horas. Na prática, o mundo gerado parece plausível, mas não é fiel.</p>

    <ul>
      <li><strong>Física errada.</strong> Um robô treinado numa simulação com atrito irreal pode falhar no mundo real. Por isso o teste físico final continua obrigatório.</li>
      <li><strong>Custo e energia.</strong> Gerar mundos em tempo real exige muita computação, o que aumenta a pressão sobre data centers, tema do guia de <a href="/artigos/data-centers-de-ia-e-energia-no-brasil-redata-conta-de-luz-e-o-que-esperar">data centers de IA e energia no Brasil</a>.</li>
      <li><strong>Conteúdo falso mais convincente.</strong> Um ambiente que reage em tempo real torna mais fácil criar cenas que nunca existiram. Saber checar a origem de imagens, como mostra o guia de <a href="/artigos/content-credentials-c2pa-como-saber-se-imagem-foi-feita-por-ia">Content Credentials (C2PA)</a>, ganha peso.</li>
      <li><strong>Acesso restrito.</strong> Parte dessas ferramentas segue em prévia fechada, então muito do que se vê são demonstrações escolhidas pelas empresas.</li>
    </ul>

    <h2>O que muda para quem trabalha e como acompanhar</h2>

    <p>No curto prazo, quem sente primeiro são as áreas de simulação: engenharia de robótica, automação industrial, jogos, efeitos visuais e arquitetura. A IA não tira o trabalho de quem modela cenários, mas muda a tarefa: menos construir do zero e mais dirigir, corrigir e validar. Um estudo sobre <a href="/noticias/anthropic-robos-74-por-cento-tarefas-fisicas">quais tarefas físicas os robôs já conseguem fazer</a> aponta que dar conta da tarefa e compensar financeiramente são coisas diferentes, o que segura a velocidade dessa mudança. Para quem pensa em carreira, o guia de <a href="/artigos/profissoes-que-vao-surgir-por-causa-da-ia">profissões que vão surgir por causa da IA</a> ajuda a mapear o caminho.</p>

    <p>Para acompanhar sem cair em promessa exagerada, use um chatbot como tutor e peça sempre a fonte:</p>

    <pre><code>Explique o que é um modelo de mundo em IA para alguém sem formação técnica.
Compare com um gerador de vídeo e com um simulador de jogo tradicional.
Dê dois exemplos reais de uso em robótica e diga quais limitações
as próprias empresas reconhecem. Cite as fontes oficiais.</code></pre>

    <pre><code>Trabalho como [sua função] em [setor]. Liste três formas realistas
de modelos de mundo afetarem meu trabalho nos próximos três anos,
separando o que já existe hoje do que ainda é demonstração de laboratório.</code></pre>

    <p>Modelos de mundo são a aposta das grandes empresas para tirar a IA da tela e levá-la ao espaço físico. Vale acompanhar com curiosidade e ceticismo na mesma medida: o avanço é real, os limites também. Para seguir nesse tema, veja como os <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA</a> devem usar essas simulações e acompanhe as novidades na categoria Futuro.</p>
  `,
  faq: [
    {
      question: "O que é world model em inteligência artificial?",
      answer:
        "World model, ou modelo de mundo, é um sistema de IA que simula um ambiente e prevê como ele muda depois de cada ação. Em vez de entregar só texto ou um vídeo fechado, gera um mundo interativo, em que um agente ou uma pessoa pode se mover e testar cenários. Genie, Cosmos e Marble são exemplos.",
    },
    {
      question: "Qual a diferença entre modelo de mundo e gerador de vídeo?",
      answer:
        "O gerador de vídeo entrega um clipe pronto, de poucos segundos, sem interação depois de gerado. O modelo de mundo cria a cena quadro a quadro enquanto você age: se você vira para um lado, ele inventa o que está ali, e se você pede uma mudança, a cena se ajusta sem recomeçar.",
    },
    {
      question: "Dá para usar o Genie 3 ou o Genie 4?",
      answer:
        "Até o anúncio do Google, as duas versões saíram como prévia de pesquisa para um grupo fechado de testadores, sem acesso aberto ao público. O DeepMind disse que estuda ampliar o acesso. Para acompanhar, vale consultar o blog oficial do Google DeepMind, onde os lançamentos e as condições de uso são publicados.",
    },
    {
      question: "O Nvidia Cosmos é gratuito?",
      answer:
        "Os modelos do Cosmos são abertos, distribuídos pela Nvidia sob a licença OpenMDW 1.1 da Linux Foundation, o que permite baixar e adaptar. Rodar esses modelos, porém, exige hardware potente ou computação em nuvem, que tem custo. Antes de usar em projeto comercial, leia a licença na página oficial da plataforma.",
    },
    {
      question: "Modelos de mundo vão substituir artistas 3D e desenvolvedores de jogos?",
      answer:
        "No estágio atual, não. As ferramentas aceleram protótipos e cenários, mas erram detalhes, física e fidelidade a lugares reais, e a própria indústria reconhece esses limites. O trabalho tende a mudar de construir tudo do zero para dirigir, corrigir e validar o que a IA gera.",
    },
  ],
};
