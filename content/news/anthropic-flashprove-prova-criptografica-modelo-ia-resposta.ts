import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-flashprove-prova-criptografica-modelo-ia-resposta",
  title: "Anthropic cria prova criptográfica de qual modelo de IA respondeu",
  summary:
    "O FlashProve, protótipo aberto da Anthropic, gera um certificado de que a resposta veio do modelo prometido, sem revelar os pesos. Ainda não há uso comercial.",
  author: "Bruno Danello",
  sourceName: "Anthropic, TechCrunch",
  sourceUrl: "https://www.anthropic.com/research/provable-inference",
  date: "2026-11-03",
  publishedAt: "2026-11-03T20:25:00-03:00",
  imageQuery: "Anthropic logo",
  topic: "seguranca",
  content: `
    <p>Quem usa um modelo de inteligência artificial pela internet hoje confia, sem ter como conferir, que a resposta veio mesmo do modelo escolhido. A Anthropic, dona do Claude, publicou uma pesquisa que tenta resolver esse ponto cego. O sistema se chama FlashProve e gera, junto com cada resposta, uma espécie de certificado matemático de que aquele texto foi produzido por um modelo específico, sem revelar os pesos, que são os números internos que definem o comportamento do modelo e que as empresas guardam como segredo comercial.</p>

    <p>O trabalho foi publicado no <a href="https://www.anthropic.com/research/provable-inference" rel="noopener noreferrer nofollow">site de pesquisa da Anthropic</a> e repercutido nesta terça-feira (3) pelo TechCrunch. A própria empresa deixa claro que se trata de um protótipo de pesquisa, um relato de progresso intermediário, e que não há plano de colocar o sistema em produção no Claude nem em outro laboratório por enquanto. O código, a especificação do protocolo e as provas formais foram liberados sob licença aberta Apache 2.0, justamente para que outros grupos testem e melhorem.</p>

    <h2>O problema que o FlashProve tenta resolver</h2>
    <p>A Anthropic descreve quatro situações em que saber qual modelo respondeu deixa de ser detalhe técnico. A primeira é a troca silenciosa: um serviço intermediário, como um roteador que distribui pedidos entre vários provedores, pode servir um modelo mais barato no lugar do que o cliente pagou. A qualidade da resposta, sozinha, não denuncia a troca, porque um modelo menor pode escrever bem o suficiente para enganar.</p>

    <p>A segunda é a adulteração. Um invasor que tome conta de um servidor de inferência pode entregar respostas maliciosas, por exemplo com links para malware, misturadas às respostas normais. A empresa cita ainda um cenário mais à frente: um modelo mais avançado rodando no lugar do autorizado e se passando pelo mais fraco para escapar dos filtros de segurança. É o mesmo tipo de preocupação que aparece no alerta da Anthropic sobre <a href="/noticias/anthropic-s-1-alerta-autoaperfeicoamento-recursivo-ia-rsi">IA que se aperfeiçoa sozinha</a>, registrado no documento do IPO.</p>

    <p>A terceira é a origem do texto. Hoje uma empresa pode dizer que o código dela foi revisado por um modelo de ponta de cibersegurança, ou que um plano de negócios passou pelo crivo de um modelo avançado, e ninguém consegue conferir. Mesmo publicar o histórico da conversa não prova nada, porque ele pode ser gerado com um modelo mais barato. A quarta é regulatória: se uma lei exigir que só modelos aprovados sejam servidos ao público, o regulador precisa de um jeito leve de verificar isso sem refazer cada pedido.</p>

    <h2>Como funciona, sem matemática</h2>
    <p>O sistema usa uma técnica de criptografia chamada prova de conhecimento zero, a mesma família de ferramentas usada em algumas redes de blockchain. A ideia geral tem duas etapas. Primeiro, o provedor publica uma "impressão digital" do modelo, um compromisso curto que fixa exatamente quais pesos estão em uso sem mostrar nenhum deles. Depois, para cada pedido, o provedor gera um arquivo de prova dizendo, em termos matemáticos, que aqueles pesos, rodando sobre aquela pergunta, produzem exatamente aquela resposta.</p>

    <p>Qualquer pessoa com a impressão digital, a pergunta e a resposta pode checar a prova. Se o provedor tiver trocado o modelo, a verificação falha, e forjar uma prova válida exigiria quebrar problemas matemáticos considerados impossíveis de resolver na prática. Ao mesmo tempo, quem confere não aprende nada sobre os pesos.</p>

    <p>Os números do teste dão a dimensão do avanço. A Anthropic rodou o FlashProve sobre o Llama 4 Maverick, modelo aberto da Meta com 400 bilhões de parâmetros, numa versão de 4 bits. Uma única GPU H100 gerou provas a cerca de 110 tokens por segundo, com arquivos de prova de uns 19 MB por pedido de 1.024 tokens. A verificação roda num processador comum, sem placa de vídeo, e leva perto de 17 segundos. Segundo a empresa, um trabalho anterior que provou o mesmo modelo levou 14,3 horas para 1.000 tokens e gerou uma prova de 93,6 GB, que demorou quase um dia para ser conferida.</p>

    <p>O custo ainda é alto: provar um lote de pedidos consome de 70 a 95 vezes o tempo de GPU que o vLLM, motor de inferência popular, gasta para simplesmente responder aos mesmos pedidos. Por isso o desenho prevê provas feitas depois, por amostragem, e não em tempo real para cada palavra gerada.</p>

    <h2>O papel do próprio Claude</h2>
    <p>Um detalhe chama atenção no texto da empresa: as melhorias no sistema de provas foram produzidas pelo Claude. Como código de criptografia é conhecido por ser frágil e cheio de armadilhas, e como as decisões do modelo nem sempre são fáceis de auditar, a equipe escreveu as garantias de segurança na linguagem Lean, usada para verificação formal, de modo que um computador confira que as propriedades prometidas valem. A Anthropic já tinha usado essa abordagem quando o Claude <a href="/noticias/anthropic-claude-prova-seguranca-123-bibliotecas-verificacao-formal">provou a segurança de 123 bibliotecas abertas</a>.</p>

    <p>O pacote liberado inclui o relatório técnico, a especificação do protocolo escrita pelo Claude, um programa que gera as provas, dois verificadores (um rápido em C++ e um formalmente correto em Lean) e um visualizador dos teoremas para ajudar na auditoria. A pesquisa tem coautores da EPFL, na Suíça, e do MIT.</p>

    <h2>Os limites admitidos pela empresa</h2>
    <p>A própria Anthropic lista as restrições do protótipo. O sistema só cobre contextos de até 1.024 tokens, muito pouco perto das conversas longas de hoje, que chegam a centenas de milhares de tokens. A prova vale para uma versão em números inteiros do modelo com a escolha sempre da palavra mais provável, enquanto os serviços reais costumam sortear entre as opções e usar outro tipo de conta, o que pode gerar pequenas diferenças. O desenho também depende da arquitetura de "mistura de especialistas" e não esconde a arquitetura do modelo, só os pesos. Ataques que medem o tempo de geração da prova para deduzir informação ficaram de fora do escopo.</p>

    <p>Na prática, nenhum assistente que você usa hoje entrega esse tipo de certificado. Para virar padrão, os laboratórios teriam de publicar a impressão digital de cada modelo lançado, e os serviços intermediários teriam de aceitar a verificação. A ideia conversa com outra frente recente da empresa, a <a href="/noticias/anthropic-marca-dagua-texto-claude-brecha-temperatura">marca d'água no texto do Claude</a>, que tenta identificar a origem do conteúdo por outro caminho.</p>

    <h2>Por que isso importa para você</h2>
    <p>Muita gente no Brasil acessa modelos de IA por intermediários: plataformas que revendem acesso a vários modelos num só painel, roteadores de API, ferramentas de automação e aplicativos que dizem usar "o modelo mais avançado" por trás. Em quase todos esses casos, você confia na palavra de quem está no meio. O FlashProve mostra que dá para trocar confiança por verificação, e que o custo dessa verificação caiu muito em poucos anos.</p>

    <p>Enquanto isso não chega ao mercado, vale aplicar o bom senso que o próprio estudo sugere. Desconfie de revendedores de acesso a modelos de ponta com preço muito abaixo do oficial, porque a troca por um modelo mais barato é justamente o problema descrito. Prefira contratar direto do provedor quando o resultado importa, como em revisão de contratos ou de código. E lembre que incidentes de infraestrutura acontecem, como no caso em que <a href="/noticias/cloudflare-workers-ai-glm-5-3-vazamento-cache-kv-155-respostas">um modelo na Cloudflare vazou dados entre clientes</a>. O nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> ajuda a fazer essas perguntas antes de assinar.</p>

    <p>Para quem trabalha com tecnologia, a pesquisa abre uma área nova, que mistura criptografia, auditoria e IA, e tende a ganhar peso se regras como as discutidas nos Estados Unidos e na Europa passarem a exigir comprovação de qual modelo está em uso. A nossa trilha de <a href="/artigos/carreira-em-ciberseguranca-com-ia-vagas-trilha-e-habilidades">carreira em cibersegurança com IA</a> mostra por onde começar nesse campo.</p>
  `,
};
