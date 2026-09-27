import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-modelo-resolve-100-problemas-matematica-abertos",
  title: "OpenAI diz que modelo interno resolveu mais de 100 problemas matemáticos em aberto e forma grupo de matemáticos para checar os resultados",
  author: "Bruno Danello",
  summary:
    "A empresa afirma que um modelo interno, treinado a partir de 28 de agosto, resolveu mais de 100 problemas matemáticos que permaneciam em aberto havia anos — o mesmo modelo por trás da polêmica solução para o problema de Navier-Stokes. Como a maioria dos resultados ainda não foi divulgada publicamente, a OpenAI recrutou nove matemáticos renomados para formar um grupo consultivo independente.",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/09/21/openai-forms-math-advisory-group-as-its-ai-resolves-more-than-100-open-problems/",
  date: "2026-09-21",
  content: `
    <p>A OpenAI anunciou em 21 de setembro que um modelo interno resolveu mais de 100 problemas matemáticos que permaneciam em aberto havia anos, cobrindo a maior parte das áreas da matemática. O modelo começou a ser treinado em 28 de agosto — ou seja, o feito teria levado apenas 24 dias desde o início do treinamento até o anúncio.</p>

    <h2>O mesmo modelo por trás de outra polêmica recente</h2>
    <p>Segundo a empresa, esse é o mesmo modelo responsável pela solução anunciada há poucos dias para uma versão do problema de Navier-Stokes, um dos sete problemas do milênio do Instituto Clay — anúncio que já havia gerado controvérsia depois que um matemático da NYU acusou a OpenAI de tentar excluir um colaborador da publicação por ele trabalhar na Anthropic.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Uma ressalva importante</span>
      <p>A OpenAI ainda não divulgou publicamente a maior parte dos mais de 100 resultados alegados, o que significa que pesquisadores externos não conseguem, por enquanto, avaliar de forma independente a qualidade ou a originalidade dessas soluções.</p>
    </div>

    <h2>Um grupo de matemáticos de peso para arbitrar os resultados</h2>
    <p>Para lidar com a dificuldade de verificar tantos resultados de uma vez, a OpenAI formou o Advisory Group on Mathematics and Artificial Intelligence, sediado no Institute for Advanced Study de Princeton, com nove matemáticos fundadores — entre eles nomes de peso como Timothy Gowers, Edward Witten e Ravi Vakil.</p>

    <h2>Por que isso importa mesmo para quem não é matemático</h2>
    <p>Independentemente de quantos desses resultados resistirem à checagem independente, o episódio ilustra até onde já se estica o debate sobre a velocidade dos anúncios de capacidades de IA: entre treinar um modelo e alegar avanços que levariam anos de trabalho humano, o intervalo agora se mede em semanas — o que torna ainda mais importante a existência de mecanismos de verificação independente, como o grupo que a própria OpenAI acabou de criar.</p>
  `,
};
