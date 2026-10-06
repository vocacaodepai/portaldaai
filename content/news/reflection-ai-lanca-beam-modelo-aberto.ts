import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "reflection-ai-lanca-beam-modelo-aberto",
  title: "Reflection AI lança Beam, modelo aberto de 501 bilhões de parâmetros",
  summary:
    "Apoiada pela Nvidia, a Reflection AI lançou o Beam, modelo de pesos abertos que promete rivalizar com modelos chineses gastando bem menos poder de computação.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl:
    "https://techcrunch.com/2026/10/05/reflection-debuts-beam-a-open-weight-ai-model-to-rival-chinese-models-at-lower-compute-cost/",
  date: "2026-10-05",
  publishedAt: "2026-10-06T00:35:00-03:00",
  imageQuery: "Nvidia data center chips",
  topic: "lancamentos",
  content: `
    <p>A startup americana Reflection AI apresentou nesta segunda-feira (5) o Beam, seu primeiro modelo de inteligência artificial de pesos abertos, depois de semanas de especulação sobre o lançamento que o <a href="/noticias/reflection-ai-modelo-aberto-nvidia-deepseek">Portal da AI já tinha adiantado</a>. Segundo reportagem do <a href="https://techcrunch.com/2026/10/05/reflection-debuts-beam-a-open-weight-ai-model-to-rival-chinese-models-at-lower-compute-cost/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>, o Beam é um modelo de 501 bilhões de parâmetros totais, com 23 bilhões ativos por vez (arquitetura de mistura de especialistas), treinado em 23,8 trilhões de tokens e com janela de contexto de 1 milhão de tokens, focado em raciocínio, programação e tarefas de agente.</p>

    <p>A Reflection afirma que o Beam empata em benchmarks avançados de raciocínio com o GLM-5.2, da chinesa Zhipu AI (a mesma empresa por trás do modelo que o <a href="/noticias/anthropic-glm-5-3-zhipu-riscos-ciberseguranca">Portal da AI já cobriu em outro contexto de segurança</a>), mas usando de três a quatro vezes menos poder de computação durante a inferência. Em testes de programação, a empresa divulgou nota 80,9 no SWE-Bench Verified (que mede se um modelo consegue corrigir bugs reais de software) e 80,1 no Terminal-Bench v2.1 (que avalia desempenho operando linha de comando), números que, se confirmados de forma independente, colocam o Beam entre os modelos abertos mais fortes do momento em tarefas de código.</p>

    <figure><img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/NVIDIA_Headquarters.jpg" alt="Sede da Nvidia, empresa que apoia a Reflection AI" /><figcaption>Foto: Coolcaesar / Wikimedia Commons (CC BY-SA 4.0)</figcaption></figure>

    <h2>Quem é a Reflection AI e por que ela interessa à Nvidia</h2>
    <p>Fundada em 2024 no Brooklyn por dois ex-pesquisadores do Google DeepMind, a Reflection AI já captou cerca de US$ 4,7 bilhões de investidores como Nvidia, Sequoia Capital e Lightspeed, numa rodada recente que avaliou a empresa em US$ 25 bilhões antes do aporte. A startup também fechou mais de US$ 7 bilhões em contratos de computação com a SpaceX e a Nebius para acesso a chips Nvidia GB300 até 2029, o que ajuda a explicar o interesse direto da fabricante de chips no sucesso do projeto: quanto mais laboratórios como a Reflection demonstrarem que dá para treinar e rodar modelos competitivos gastando menos poder de computação por tarefa, mais sentido faz continuar comprando GPU Nvidia em escala, em vez de esperar que só os chineses, com DeepSeek e Qwen, dominem a eficiência de inferência.</p>
    <p>O pano de fundo da corrida é o mesmo que motivou lançamentos recentes como o <a href="/noticias/xiaomi-lanca-mimo-v2-6-modelo-aberto-treinado-3-milhoes">MiMo-V2.6 da Xiaomi</a> e o <a href="/noticias/runway-praxis-1-modelo-aberto-robos">Praxis-1 da Runway</a>: times ocidentais tentando responder ao avanço de modelos abertos chineses, que vêm ganhando espaço em benchmarks de programação e raciocínio por um custo de treinamento e inferência bem menor do que os modelos fechados mais conhecidos, como GPT e Claude. A Reflection, porém, tem uma estratégia um pouco diferente da maioria: em vez de só competir por benchmark, a empresa mira governos e empresas que querem treinar o que chama de "fábricas de IA", sistemas locais e personalizados com dados proprietários, uma proposta de soberania de dados que também aparece em discussões recentes sobre infraestrutura de IA no Brasil.</p>

    <h2>Por que isso importa para você</h2>
    <p>Modelo de pesos abertos significa que qualquer desenvolvedor, empresa ou governo pode baixar o Beam, rodar localmente e adaptar para seu próprio uso, sem depender de uma API paga de terceiro nem mandar dados sensíveis para a nuvem de outra empresa, o oposto do modelo fechado do ChatGPT ou do Claude. Pra quem no Brasil avalia usar IA de código aberto em projeto próprio, seja por custo, privacidade de dados ou simplesmente para não depender de um único fornecedor, o Beam entra numa lista cada vez mais concorrida de opções abertas e competitivas, ao lado do próprio DeepSeek, do Qwen chinês e de modelos ocidentais como o Llama. Nosso guia sobre <a href="/artigos/ia-codigo-aberto-o-que-muda-para-quem-usa">o que muda pra quem usa IA de código aberto</a> ajuda a entender essa escolha na prática, e o texto sobre <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA gratuita ou paga, o que vale a pena</a> compara esse tipo de alternativa com assinaturas pagas tradicionais.</p>
    <p>Vale um ponto de cautela, porém: os números de desempenho divulgados até agora são autorreportados pela própria Reflection, sem relatório técnico completo publicado nem avaliação independente de terceiros. A empresa prometeu liberar os pesos completos do modelo sob licença Apache 2.0 ainda em outubro, o que vai permitir que outros laboratórios e pesquisadores testem as alegações de desempenho por conta própria, prática padrão desde que modelos abertos chineses como o DeepSeek passaram a dominar boa parte dessas comparações e tiveram seus números checados (às vezes contestados) por pesquisadores externos.</p>

    <h2>O que observar com o lançamento completo</h2>
    <p>Até a liberação total dos pesos, três perguntas ainda estão abertas: se os benchmarks autorreportados vão se confirmar em testes independentes, se o Beam vai sair com preço de API hospedada pela própria Reflection ou só como peso aberto para quem já tem infraestrutura própria, e qual vai ser a reação de concorrentes diretos como Zhipu (GLM) e DeepSeek, que até aqui lideravam a conversa sobre eficiência de inferência em modelos abertos. Dado o ritmo de lançamentos recentes no setor, inclusive mais de um modelo de ponta na mesma semana, episódio que o Portal da AI já registrou como sinal de "fadiga de modelos" entre desenvolvedores, o Beam provavelmente vai precisar de poucas semanas de uso real para se firmar (ou não) como alternativa séria aos modelos abertos chineses que hoje dominam essa conversa.</p>
    <p>Outro ponto que tende a pesar na recepção do Beam é o tamanho do modelo na prática: com 501 bilhões de parâmetros totais, ele exige bem mais memória de GPU do que a maioria dos modelos abertos usados hoje em laptops ou servidores modestos, mesmo com só 23 bilhões de parâmetros ativos por vez graças à arquitetura de mistura de especialistas. Isso significa que, na prática, rodar o Beam localmente deve continuar sendo algo restrito a empresas com infraestrutura de GPU dedicada ou a quem contratar capacidade de nuvem específica para isso, enquanto a maioria dos desenvolvedores independentes provavelmente vai continuar usando versões menores de modelos abertos, ou simplesmente esperar que provedores terceiros ofereçam o Beam já hospedado, como já acontece hoje com o próprio DeepSeek em diversas plataformas de API.</p>
  `,
  faq: [
    {
      question: "O que é o Beam, da Reflection AI?",
      answer:
        "É o primeiro modelo de inteligência artificial de pesos abertos da Reflection AI, com 501 bilhões de parâmetros totais (23 bilhões ativos por vez), treinado em 23,8 trilhões de tokens, com janela de contexto de 1 milhão de tokens, voltado para raciocínio, programação e tarefas de agente.",
    },
    {
      question: "O Beam é gratuito para usar?",
      answer:
        "A Reflection AI vai liberar os pesos completos do modelo sob licença Apache 2.0 ainda em outubro de 2026, o que permite rodar e adaptar o modelo localmente sem pagar por uma API. Até a publicação desta notícia, a empresa não tinha divulgado preço de uma eventual API hospedada própria.",
    },
    {
      question: "Como o Beam se compara a modelos chineses como DeepSeek e GLM?",
      answer:
        "A Reflection afirma que o Beam empata com o GLM-5.2, da Zhipu AI, em benchmarks avançados de raciocínio, usando de três a quatro vezes menos poder de computação na inferência. Esses números ainda são autorreportados pela empresa, sem relatório técnico completo publicado até o momento.",
    },
  ],
};
