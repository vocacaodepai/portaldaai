import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "cognition-devin-corta-preco-70-por-cento",
  title: "Cognition corta preço do Devin em até 70% e mantém desempenho do agente",
  summary:
    "A empresa por trás do agente de codificação Devin anunciou cortes de até 70% em modos de uso, resultado de novos modelos e otimização do sistema que roteia as tarefas.",
  author: "Bruno Danello",
  sourceName: "Devin (Cognition)",
  sourceUrl: "https://devin.ai/blog/more-efficient-devin",
  date: "2026-09-28",
  content: `
    <p>A Cognition, empresa por trás do agente de codificação autônomo Devin, anunciou em 28 de setembro uma rodada de cortes de preço em praticamente todos os modos de uso da ferramenta. Segundo o <a href="https://devin.ai/blog/more-efficient-devin" target="_blank" rel="noopener noreferrer nofollow">comunicado oficial publicado no blog do Devin</a>, o modo Fusion e o modo Normal ficaram de 30% a 40% mais baratos, o modo Ultra caiu de 15% a 20%, e o Devin Review, usado para revisão automática de código, teve corte de até 70%.</p>

    <p>A empresa afirma que a redução não veio de um desconto simples, mas de duas mudanças técnicas: a adoção do que chama de "independência de modelo", combinando modelos como o próprio SWE-2 (lançado pela Cognition dias antes), o Opus 5.5 e variantes do GPT-6 conforme a tarefa, e uma otimização do jeito como o Devin agrupa chamadas de ferramenta, reduzindo o número de "turnos" e o uso de token por tarefa. Mesmo com o corte, a empresa diz que o desempenho se manteve ou melhorou: o modo Fusion pontuou 68,8 no benchmark FrontierCode 1.1 Extended, a um custo médio de US$ 0,60 por tarefa.</p>

    <h2>O contexto por trás do anúncio</h2>
    <p>O corte de preço não surgiu isolado. Em 10 de setembro a Cognition lançou o SWE-2, seu novo modelo de codificação, alegando desempenho próximo ao de modelos de ponta da concorrência a um custo bem menor de operação. No dia seguinte, lançou o Fusion no CLI do Devin, um sistema híbrido que usa um modelo mais caro e potente para planejar a tarefa e um modelo mais barato (o próprio SWE-2) para executar, o que já havia reduzido o custo de tarefas de codificação em cerca de 39%. Essa sequência de anúncios acontece poucas semanas depois de a <a href="/noticias/cognition-capta-2-bilhoes-avaliacao-48-bilhoes-devin">Cognition fechar uma rodada Série E de mais de US$ 2 bilhões, avaliada em US$ 48 bilhões</a>, com a receita recorrente anual da empresa batendo a marca de US$ 1 bilhão pouco depois.</p>

    <p>O movimento de baratear agentes de codificação não é exclusividade da Cognition. Segue uma tendência do setor em que os provedores brigam tanto por desempenho em benchmark quanto por custo por tarefa executada, já que empresas que adotam esses agentes em escala (a própria Cognition cita clientes como Nubank, Itaú e Santander no Brasil) monitoram de perto quanto cada tarefa automatizada custa comparada ao trabalho equivalente feito por um engenheiro humano.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você trabalha com desenvolvimento de software ou dirige uma equipe técnica, esse tipo de corte de preço muda a conta de quando vale a pena delegar uma tarefa a um agente autônomo em vez de fazer manualmente ou usar um assistente de código tradicional. Um agente como o Devin, que executa uma tarefa completa do início ao fim, incluindo testes e revisão, se torna mais competitivo financeiramente à medida que o custo por tarefa cai, o que pode acelerar a adoção em empresas que antes hesitavam pelo preço.</p>

    <p>Para quem já discute a diferença entre <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente de IA, chatbot e automação</a>, esse anúncio é um exemplo prático de como a categoria de agentes autônomos está amadurecendo: não é só sobre fazer mais coisas sozinho, é sobre fazer isso a um custo que compensa financeiramente em escala. Isso também reforça um ponto que vale para qualquer ferramenta de IA usada no trabalho: preço por tarefa muda com frequência nesse mercado, então vale revisar periodicamente se a ferramenta que você usa ainda é a opção mais econômica disponível, sem trocar de fornecedor só por hábito.</p>

    <h2>O que observar daqui para frente</h2>
    <p>A Cognition já colocou o Devin Review, o modo de revisão automática de código, como a maior aposta de corte de custo, o que sugere que a empresa está mirando equipes que usam IA não só para escrever código, mas também para revisar pull requests antes de irem para produção, uma etapa que hoje consome bastante tempo de desenvolvedores sênior. Vale acompanhar se a concorrência, incluindo ferramentas como GitHub Copilot e Cursor, vai responder com cortes semelhantes nos próximos meses, o que tende a beneficiar diretamente quem paga por essas assinaturas.</p>

    <p>Para quem está começando a explorar esse tipo de ferramenta e ainda não sabe por onde entrar, vale revisar nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de como escolher ferramenta de IA com segurança</a> antes de dar acesso de um agente autônomo ao seu código ou aos sistemas da sua empresa, já que preço competitivo não substitui a avaliação de quais permissões cada ferramenta realmente precisa.</p>
  `,
  faq: [
    {
      question: "Quanto ficou mais barato usar o Devin?",
      answer:
        "Os modos Fusion e Normal ficaram de 30% a 40% mais baratos, o modo Ultra caiu de 15% a 20%, e o Devin Review, usado para revisão automática de código, teve corte de até 70%, segundo a Cognition.",
    },
    {
      question: "O corte de preço reduziu a qualidade do Devin?",
      answer:
        "A Cognition afirma que não. Segundo a empresa, o desempenho se manteve ou melhorou nos testes internos, com o modo Fusion pontuando 68,8 no benchmark FrontierCode 1.1 Extended a um custo médio de US$ 0,60 por tarefa.",
    },
    {
      question: "Por que a Cognition conseguiu baratear o Devin agora?",
      answer:
        "A empresa credita a mudança a dois fatores: o uso combinado de diferentes modelos de IA conforme a tarefa (incluindo o SWE-2, lançado pela própria Cognition) e a otimização técnica de como o Devin agrupa chamadas de ferramenta, reduzindo o número de etapas e o consumo de token por tarefa.",
    },
  ],
};
