import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-lanca-claude-sonnet-5-5",
  title: "Anthropic lança Claude Sonnet 5.5, mais rápido e até 30% mais barato",
  summary:
    "O novo modelo mantém o preço por token do Sonnet 5, mas usa menos tokens e chamadas de ferramenta por tarefa, reduzindo o custo final em até 30%.",
  author: "Bruno Danello",
  sourceName: "Anthropic",
  sourceUrl: "https://www.anthropic.com/claude-sonnet-5-5",
  date: "2026-09-28",
  content: `
    <p>A Anthropic lançou nesta segunda-feira (28) o Claude Sonnet 5.5, posicionado como alternativa mais rápida e barata ao Opus 5.5 para tarefas do dia a dia. Segundo o <a href="https://www.anthropic.com/claude-sonnet-5-5" rel="noopener noreferrer nofollow">anúncio oficial da Anthropic</a>, o modelo é mais de 30% mais rápido que o Sonnet 5 e pode custar até 30% menos por tarefa, mesmo mantendo o preço por token igual (US$ 2 por milhão de tokens de entrada, US$ 10 por milhão de saída), porque usa menos tokens e chamadas de ferramenta pra chegar no resultado.</p>
    <p>Em testes de referência, o salto foi grande: no Terminal-Bench 4.0, a pontuação subiu de 10,3% (Sonnet 5) para 70,6%. É também o primeiro modelo da linha Sonnet capaz de zerar o jogo Pokémon Red só analisando capturas de tela, e ganhou proteções de segurança cibernética antes reservadas ao Opus. A Anthropic confirmou que o Claude Haiku 5.5 chega "nas próximas semanas".</p>

    <h2>Contexto</h2>
    <p>O lançamento dá sequência à renovação rápida da linha Claude: em poucas semanas a Anthropic já tinha lançado o <a href="/noticias/anthropic-lanca-claude-opus-5-5-mais-barato-rapido">Opus 5.5, mais barato e rápido</a>, e entrado numa <a href="/noticias/anthropic-openai-guerra-precos-opus-5-5-gpt-6-sol-luna">guerra de preços com a OpenAI</a>. A cadência acelerada de modelos também aparece em outros laboratórios, como no <a href="/noticias/spacexai-lanca-grok-4-7-mesmo-preco-mais-capaz-codigo">Grok 4.7 da SpaceXAI</a>, lançado pelo mesmo preço do modelo anterior.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa o Claude pra trabalhar (escrever, programar, analisar dados), o Sonnet 5.5 tende a resolver a mesma tarefa gastando menos crédito ou tempo de espera, sem você precisar mudar nada na sua rotina. Para quem paga por uso via API (desenvolvedores, agências que revendem automação), a conta no fim do mês deve cair, já que o custo por tarefa caiu mesmo com o preço por token igual.</p>
    <p>Para quem está decidindo entre ferramentas de IA, vale rever a comparação em <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual escolher</a>, porque o equilíbrio de custo-benefício muda a cada lançamento como esse.</p>
  `,
  faq: [
    {
      question: "O Claude Sonnet 5.5 substitui o Opus 5.5?",
      answer: "Não. O Opus continua sendo o modelo mais avançado da Anthropic para tarefas complexas. O Sonnet 5.5 é a opção intermediária, voltada a um equilíbrio melhor entre velocidade, custo e capacidade para o uso do dia a dia.",
    },
    {
      question: "Preciso pagar mais para usar o novo modelo?",
      answer: "O preço por token é o mesmo do Sonnet 5. Na prática, o custo final por tarefa tende a cair, porque o modelo usa menos tokens e chamadas de ferramenta para chegar no resultado.",
    },
  ],
};
