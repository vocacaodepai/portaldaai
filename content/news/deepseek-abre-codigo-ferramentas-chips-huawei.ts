import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "deepseek-abre-codigo-ferramentas-chips-huawei",
  title: "DeepSeek abre código de ferramentas para chips de IA da Huawei",
  summary:
    "A DeepSeek liberou um kit de software de código aberto para os chips Ascend da Huawei, reduzindo a barreira técnica para empresas chinesas trocarem GPUs da Nvidia por hardware nacional.",
  author: "Bruno Danello",
  sourceName: "Startup Fortune",
  sourceUrl:
    "https://startupfortune.com/deepseek-open-sources-chip-tools-that-could-let-huawei-replace-nvidia-in-china/",
  date: "2026-09-30",
  content: `
    <p>A startup chinesa DeepSeek abriu o código nesta terça-feira (29) de um conjunto de ferramentas de software voltado aos chips Ascend, da Huawei, principal linha de aceleradores de inteligência artificial fabricada na China. Segundo reportagem do <a href="https://startupfortune.com/deepseek-open-sources-chip-tools-that-could-let-huawei-replace-nvidia-in-china/" rel="noopener noreferrer nofollow">Startup Fortune</a>, o pacote inclui seis componentes: TileLang, apresentada como alternativa de mais alto nível ao CUDA, a linguagem de programação proprietária da Nvidia; DeepGEMM, para operações de multiplicação de matrizes; DeepEP, para comunicação entre chips; TileKernels, para computação vetorial; FlashMLA, otimizada para atenção em contextos longos; e DeepSelect, voltada a filtragem de dados.</p>
    <p>O kit espelha um conjunto de ferramentas equivalente que a própria DeepSeek já mantinha para GPUs da Nvidia, agora reescrito para funcionar sobre o silício da Huawei. A liberação em código aberto é o movimento mais direto até aqui de uma empresa de IA chinesa para reduzir o maior obstáculo prático que trava a migração de desenvolvedores para chips nacionais: meses de trabalho reescrevendo código, depurando erros e recuperando desempenho perdido ao trocar de arquitetura, custo que normalmente segura empresas presas ao ecossistema CUDA da Nvidia mesmo quando querem migrar por razões de disponibilidade ou preço.</p>

    <h2>O pano de fundo da corrida por chips na China</h2>
    <p>A liberação do kit de ferramentas acontece num momento em que o governo chinês alterna entre restringir e liberar o acesso de empresas locais a chips da Nvidia, como mostrou a recente decisão de <a href="/noticias/china-libera-bytedance-alibaba-comprar-chips-nvidia">liberar ByteDance e Alibaba para comprar chips da Nvidia</a> depois de um período de restrição. Ao mesmo tempo, Pequim segue pressionando empresas de tecnologia a reduzir a dependência de fornecedores americanos, e a Huawei vem tentando consolidar o Ascend como alternativa viável havia alguns anos, com resultados mistos: o modelo mais recente da linha, o Ascend 910C, entrega hoje cerca de 60% do desempenho de inferência de um H100 da Nvidia, uma diferença que ferramentas de software mais eficientes ajudam a reduzir na prática, mesmo sem mudar o hardware.</p>
    <p>A DeepSeek não chega a esse movimento por acaso. Em abril deste ano, a empresa já havia disponibilizado seu modelo V4 para testes antecipados junto a fabricantes de chips chineses, em vez de priorizar Nvidia ou AMD como fizeram outras empresas de IA, sinalizando uma aposta deliberada em fortalecer o ecossistema de hardware nacional. A DeepSeek também vem <a href="/noticias/deepseek-receita-anualizada-1-bilhao-ipo-xangai">crescendo em receita e se preparando para abrir capital em Xangai</a>, o que torna a movimentação em torno de chips chineses também uma questão de imagem e de independência estratégica diante de investidores locais.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa ferramentas de IA no Brasil, esse tipo de movimento raramente muda o dia a dia imediato, mas ajuda a explicar por que o mercado de modelos abertos chineses, como o próprio DeepSeek e outros como o <a href="/noticias/xiaomi-lanca-mimo-v2-6-modelo-aberto-treinado-3-milhoes">MiMo da Xiaomi</a>, segue lançando modelos competitivos a custo de treinamento muito mais baixo do que os concorrentes ocidentais. Se a China conseguir de fato reduzir a dependência de chips da Nvidia mantendo desempenho competitivo, isso tende a acelerar ainda mais essa disputa de preços, o que no fim beneficia quem usa API de modelos de linguagem no Brasil, já que mais concorrência historicamente pressiona os preços de acesso para baixo, como já se viu quando a própria <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">OpenAI cortou preços do GPT-6 Sol e Luna logo depois do lançamento do Claude Opus 5.5</a>.</p>
    <p>Também é um sinal relevante para quem acompanha o mercado de infraestrutura de IA como investimento ou como parte de uma estratégia de negócio: empresas que hoje dependem exclusivamente de GPUs da Nvidia para treinar ou rodar modelos próprios ganham, com o tempo, mais opções de fornecedor, o que reduz risco de fornecimento em cenários de escassez de chips, algo que já afetou planos de expansão de data centers em diversos países nos últimos meses.</p>

    <h2>Os limites dessa alternativa ainda são reais</h2>
    <p>Vale manter os pés no chão sobre o alcance imediato dessa mudança. Um kit de software de código aberto reduz atrito técnico, mas não elimina de uma hora para outra a diferença de desempenho entre o Ascend 910C e os chips topo de linha da Nvidia, nem resolve questões de escala de produção que ainda favorecem a fabricante americana fora da China. Fora do mercado chinês, restrições de exportação seguem limitando o acesso da Huawei a componentes essenciais de fabricação, o que trava a expansão internacional do Ascend mesmo com ferramentas de software mais maduras.</p>
    <p>Ainda assim, dentro da China, onde empresas enfrentam incerteza regulatória sobre o acesso futuro a chips da Nvidia, ter um caminho de migração mais barato para hardware nacional muda a equação de risco de quem planeja investimento de longo prazo em infraestrutura de IA. É um movimento a acompanhar tanto por quem estuda o mercado chinês de tecnologia quanto por quem simplesmente usa modelos de IA no dia a dia e quer entender por que a disputa por preço e desempenho entre modelos abertos segue tão acirrada.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Vale acompanhar se outras empresas chinesas de IA, além da DeepSeek, vão adotar ou contribuir com esse kit de ferramentas para o Ascend, o que ajudaria a consolidar um ecossistema de software mais amplo em torno do hardware da Huawei. Também é interessante observar se essa aposta se reflete em benchmarks independentes de desempenho nos próximos meses, e se a diferença de 40% em relação ao H100 da Nvidia diminui conforme mais desenvolvedores otimizarem código para a nova arquitetura usando essas ferramentas.</p>
    <div class="callout-box">
      <span class="callout-label">Resumo rápido</span>
      A DeepSeek abriu o código de um kit de seis ferramentas de software para os chips Ascend da Huawei, incluindo o TileLang como alternativa ao CUDA da Nvidia, reduzindo a barreira técnica para empresas chinesas migrarem para hardware nacional de IA.
    </div>
  `,
  faq: [
    {
      question: "O que a DeepSeek abriu em código aberto?",
      answer:
        "Um kit de seis ferramentas de software para os chips Ascend, da Huawei: TileLang (alternativa ao CUDA), DeepGEMM, DeepEP, TileKernels, FlashMLA e DeepSelect, que espelham um conjunto de ferramentas equivalente que a empresa já mantinha para GPUs da Nvidia.",
    },
    {
      question: "Por que isso ajuda empresas chinesas a trocar de fornecedor de chips?",
      answer:
        "Migrar de Nvidia para outro fabricante normalmente exige meses de trabalho reescrevendo código e recuperando desempenho. Um kit de software pronto e otimizado para o Ascend reduz essa barreira técnica, facilitando a troca.",
    },
    {
      question: "Os chips da Huawei já igualam o desempenho da Nvidia?",
      answer:
        "Não totalmente. O Ascend 910C entrega cerca de 60% do desempenho de inferência de um H100 da Nvidia, embora ferramentas de software mais eficientes, como as liberadas agora, ajudem a reduzir essa diferença na prática.",
    },
  ],
};
