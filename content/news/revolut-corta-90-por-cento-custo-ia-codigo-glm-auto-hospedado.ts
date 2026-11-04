import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "revolut-corta-90-por-cento-custo-ia-codigo-glm-auto-hospedado",
  title: "Revolut corta 90% do custo de IA em código ao trocar Claude por GLM",
  summary:
    "O banco digital Revolut passou a rodar o modelo aberto GLM-5.3 nos próprios servidores para 2 mil engenheiros e gasta um décimo do que pagava no Claude Code.",
  author: "Bruno Danello",
  sourceName: "The Register",
  sourceUrl:
    "https://www.theregister.com/ai-and-ml/2026/11/03/british-fintech-revolut-slashes-ai-coding-costs-10x-by-cutting-out-claude-and-going-self-hosted/5307345",
  date: "2026-11-03",
  publishedAt: "2026-11-03T21:25:00-03:00",
  imageQuery: "Revolut fintech office",
  topic: "negocios",
  content: `
    <p>O Revolut, banco digital britânico que também opera no Brasil, contou como reduziu em cerca de 90% o gasto com inteligência artificial para programação em menos de um ano. A receita não foi negociar desconto com um fornecedor: a empresa deixou de usar serviços comerciais como o Claude Code, da Anthropic, como padrão e passou a rodar um modelo de pesos abertos nos próprios servidores. O caso foi apresentado por David Abitbol, líder de operações e infraestrutura do Revolut, na conferência AI Engineer, em Nova York, e relatado nesta terça-feira (3) pelo site britânico The Register.</p>

    <p>O relato chega no mesmo dia em que a Gartner divulgou a previsão de que <a href="/noticias/gartner-modelos-abertos-90-por-cento-etapas-agentes-custo">modelos abertos vão fazer 90% das etapas dos agentes de IA nas empresas</a>. O Revolut é um exemplo concreto, com números, de uma grande empresa que já fez essa troca na área de desenvolvimento de software.</p>

    <h2>Do Claude Code ao GLM-5.3</h2>
    <p>Segundo Abitbol, o Revolut começou a testar IA para programação com o Gemini, do Google, no início de 2025, e adotou o Claude Code no início de 2026. A empresa entrou desconfiada da conta. "Víamos engenheiros gastando US$ 1.000, US$ 10.000 por mês sem tanto retorno", disse ele, em tradução livre. Por isso, a ferramenta foi liberada com limites rígidos de orçamento: cada engenheiro tinha uma cota de tokens, a unidade em que os modelos de IA cobram pelo texto que leem e escrevem.</p>

    <p>Essa limitação levou a equipe a testar a hospedagem de um modelo próprio. A escolha foi o GLM, da chinesa Z.ai (antiga Zhipu). Primeiro o GLM-5.1 e, depois, o GLM-5.3, versão que hoje atende cerca de 2 mil engenheiros. Pelas contas apresentadas, rodar o GLM nos próprios servidores sai por cerca de US$ 0,30 por milhão de tokens, algo como um décimo do custo de usar o Codex, da OpenAI, ou o Claude Code.</p>

    <p>O modelo não é pequeno. O GLM-5.1 tem cerca de 754 bilhões de parâmetros no total, dos quais 40 bilhões trabalham em cada token gerado, e precisa de uns 380 GB de memória de placa de vídeo só para carregar os pesos. Para servir o GLM-5.3 a toda a equipe, o Revolut montou um conjunto de 56 GPUs Nvidia B200, o equivalente a sete servidores DGX B200 de oito placas cada.</p>

    <h2>Token barato muda o jeito de trabalhar</h2>
    <p>O dado mais curioso do relato não é o desconto, e sim o efeito dele no comportamento dos programadores. Com a ferramenta de IA, o Revolut mediu uma melhora de 60% no tempo de codificação e de 70% no tempo total de entrega (o chamado lead time). Mas, segundo Abitbol, o maior ganho não veio de escrever código mais rápido. Veio de usar a IA para o trabalho em volta do código: depurar erros e cuidar de tíquetes e páginas no Jira e no Confluence, as ferramentas de gestão de projetos e documentação usadas pela equipe.</p>

    <p>"Quando você tem tokens ilimitados, fica livre para fazer isso", disse ele. "Não precisa mais guardar tokens para o fim do trimestre ou para a tarefa mais difícil." Em outras palavras, a cota apertada fazia os engenheiros economizarem a IA justamente nas tarefas chatas, que são as que mais tomam tempo. Com o custo fixo, a empresa passou a ter uma cobrança previsível. "A conta é fixa, não levamos susto no fim do mês, e a fronteira virou exceção", resumiu.</p>

    <h2>Os ajustes que fizeram diferença</h2>
    <p>Abitbol contou que o maior salto de desempenho não veio de comprar mais placas, e sim de ajustes técnicos: afinar os parâmetros do modelo, usar a quantização NVFP4 (um formato que reduz o tamanho dos números com que o modelo calcula), separar em máquinas diferentes a leitura do pedido e a geração da resposta e limitar o tamanho do contexto.</p>

    <p>Sobre esse último ponto, ele foi direto: "Contexto longo é uma enganação". Mesmo que o sistema aguente 1 milhão de tokens de contexto, a equipe concluiu que 256 mil tokens bastam no dia a dia. Com esse limite, o Revolut chega a menos de 3 segundos até o primeiro trecho da resposta e cerca de 200 tokens por segundo de velocidade, o ponto que os engenheiros consideram confortável. Passou de 5 segundos de espera, diz Abitbol, a caixa de mensagens dele no Slack enche de reclamações. Fora do horário de pico, depois das 17h, a velocidade chega perto de 800 tokens por segundo.</p>

    <p>O GLM não substituiu tudo. Como o modelo só trabalha com texto, ele não serve bem para tarefas visuais, como interface de aplicativo. Para isso, o Revolut usa um roteador que manda os pedidos com imagem para modelos como o Gemini ou o GPT Luna, e deixa a geração de código no GLM.</p>

    <h2>E o risco de usar um modelo chinês?</h2>
    <p>Abitbol reconheceu que modelos abertos chineses podem levantar dúvidas de privacidade e segurança, mas argumentou que o problema maior está em acessá-los por APIs hospedadas na China. Rodando o modelo nos próprios servidores ou em nuvem regional, os dados não saem do perímetro da empresa. Vale lembrar que o próprio GLM-5.3 já apareceu no noticiário por outros motivos: a Cloudflare admitiu que <a href="/noticias/cloudflare-workers-ai-glm-5-3-vazamento-cache-kv-155-respostas">uma falha no serviço que hospedava o GLM-5.3 misturou dados entre clientes</a>, e pesquisadores mostraram que o modelo <a href="/noticias/glm-5-3-exploits-firefox-epoch-ai-brecha-de-patch">consegue montar ataques ao Firefox sozinho</a>. Ou seja, o risco não está só na origem do modelo, mas também em como ele é hospedado e configurado.</p>

    <h2>Por que isso importa para você</h2>
    <p>O caso do Revolut é de uma empresa com 2 mil engenheiros e dinheiro para comprar 56 GPUs de ponta, o que está longe da realidade de uma pequena empresa brasileira. Mas a lição vale em qualquer escala. A primeira é que a conta de IA para programação pode crescer rápido: não é por acaso que outras empresas já começaram a pôr limites, como a <a href="/noticias/accenture-limita-gasto-claude-29-dolares-por-funcionario">Accenture, que limitou o gasto com Claude por funcionário</a>, e a Amazon, que avisou que <a href="/noticias/amazon-alerta-engenheiros-tokenmaxxing-metricas-uso-ia">usar mais IA não prova que alguém trabalha mais</a>.</p>

    <p>A segunda é que nem toda tarefa precisa do modelo mais caro. Depurar erro, resumir tíquete e atualizar documentação são trabalhos que modelos abertos já fazem bem. Para quem não tem servidor próprio, dá para contratar esses modelos em provedores que cobram bem menos por token. O guia sobre <a href="/artigos/modelo-pequeno-ou-grande-de-ia-velocidade-custo-e-qualidade-para-quem-usa">quando usar modelo pequeno ou grande de IA</a> ajuda a separar o que é rotina do que exige raciocínio de ponta.</p>

    <p>A terceira é sobre dados. Se você trabalha com código ou informação de clientes, saber para onde cada pedido à IA está indo é parte do trabalho, ainda mais com a LGPD. Antes de trocar de modelo para economizar, vale revisar o <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio que usa IA</a> e conferir onde o modelo roda e quem tem acesso ao que você envia.</p>
  `,
};
