import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "claude-rastreia-sementes-curvas-nist-ecdsa",
  title: "Claude rastreia em 30 minutos a origem das sementes das curvas do NIST",
  summary:
    "Pesquisadores da Anthropic dizem que o Claude ligou as sementes das curvas ECDSA a um gerador dos anos 1990 e a carimbos de hora, o que enfraquece a tese de backdoor.",
  author: "Bruno Danello",
  sourceName: "Anthropic",
  sourceUrl: "https://anthropic.com/research/ecdsa-curve-origins",
  date: "2026-10-19",
  publishedAt: "2026-10-19T20:27:30-03:00",
  topic: "seguranca",
  imageQuery: "NIST headquarters Gaithersburg",
  content: `
    <p>A equipe Frontier Red Team da Anthropic publicou uma pesquisa em que o Claude teria resolvido, em menos de meia hora, um enigma de criptografia de décadas: de onde vieram as "sementes" das curvas elípticas padronizadas pelo NIST, usadas até hoje em assinaturas digitais ECDSA. Segundo o <a href="https://anthropic.com/research/ecdsa-curve-origins" target="_blank" rel="noopener noreferrer nofollow">relato da própria Anthropic</a>, as sementes não são resultados de uma função de hash de uma frase, como se acreditava, e sim saídas de um gerador de números pseudoaleatórios simples, o lrand48, da biblioteca C, iniciado com um carimbo de hora Unix. A empresa afirma que isso não é uma quebra criptográfica, e sim uma explicação que torna menos plausível a tese de que as curvas foram enfraquecidas de propósito.</p>

    <h2>O enigma das sementes</h2>
    <p>As curvas elípticas P-192, P-224, P-256, P-384 e P-521 aparecem em navegadores, aplicativos de banco, carteiras de criptomoedas e certificados digitais. Cada uma foi definida a partir de uma "semente" fornecida pela NSA, e por anos circulou a suspeita de que um valor escolhido a dedo poderia esconder uma fragilidade conhecida só por quem o criou. Ninguém conseguia explicar como aquelas sementes tinham sido geradas, o que alimentou teorias de backdoor.</p>
    <p>Segundo a Anthropic, funcionários da empresa já haviam tentado rastrear a origem sem sucesso. O Claude, ao ser posto na tarefa, chegou à resposta em menos de meia hora.</p>

    <h2>Como o Claude chegou lá</h2>
    <p>De acordo com o texto, o modelo levantou a hipótese de que a semente vinha de um gerador fraco dos anos 1990 e testou o padrão de saída em 34 combinações de gerador e recorte de bits. Ele reparou que os bits mais altos de várias sementes eram todos zero, uma assinatura do lrand48, que devolve apenas os 31 bits superiores de um estado interno de 48 bits.</p>
    <p>Nas curvas primas, que preservam menos bits por saída, o Claude recuperou o estado oculto usando o algoritmo de redução de reticulado LLL. Cada estado foi então "andado para trás" até o estado que a função srand48 produziria a partir de um carimbo de hora. Os carimbos das curvas primas ficam entre maio de 1997 e abril de 1998. Os das curvas binárias parecem fevereiro de 1984, mas, dobrados, dão 17 de abril de 1998, o que levou os autores a sugerir que o programa pode ter dividido o relógio por dois.</p>
    <p>O Claude também explicou os pontos de base da P-192 e de cinco curvas de exemplo do padrão ANSI X9.62, que vêm do gerador FreeLIP com sementes de números inteiros pequenos, como 20000 no caso da P-192.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">O que continua sem explicação</span>
      <p>A própria pesquisa lista lacunas: a semente da curva B-163, os pontos de base das curvas binárias do NIST e os pontos de base de P-224, P-256, P-384 e P-521 continuam sem origem conhecida. Também não se sabe quantas rodadas de geração foram feitas, e alguns candidatos válidos foram pulados sem critério conhecido, como o de número 876 na P-256.</p>
    </div>

    <h2>O que isso significa e o que não significa</h2>
    <p>O texto da Anthropic é explícito em dizer que o achado não é uma quebra criptográfica, um novo ataque nem uma fraqueza nas curvas ECDSA. O argumento é de plausibilidade: um processo simples e reproduzível, baseado em um carimbo de hora, deixa pouca margem para alguém testar milhões de sementes até achar uma "ruim". Os candidatos ignorados são poucos demais para sugerir que curvas enfraquecidas foram escolhidas. Mesmo assim, os autores reconhecem que os elementos não explicados mantêm alguma dúvida aberta.</p>
    <p>Outro detalhe: a recompensa de US$ 36.864 ligada ao enigma será destinada ao Internet Security Research Group, e o trabalho foi conduzido por John Wood e outros nove pesquisadores da Anthropic. Como a fonte é a própria empresa que vende o modelo, vale ler o resultado como relato do fabricante e esperar verificação independente de criptógrafos antes de tratá-lo como definitivo.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que você nunca vá lidar com curvas elípticas, a notícia mostra duas coisas práticas. A primeira é sobre confiança: a criptografia que protege seu Pix, seu e-mail e o login do banco depende de padrões que, por anos, carregaram uma pergunta sem resposta. Que uma IA tenha ajudado a responder parte dela reforça que o padrão é mais sólido do que se temia, mas não muda nada no que você precisa fazer hoje, que continua sendo usar autenticação em dois fatores e manter aplicativos atualizados.</p>
    <p>A segunda é sobre capacidade de trabalho com IA. Uma tarefa que exigiu hipótese, teste em dezenas de combinações e matemática de reticulados foi resolvida em minutos, o que ilustra por que a segurança digital virou uma das áreas em que a IA mais acelera o trabalho de quem sabe usá-la. Quem atua ou quer atuar na área pode ver o panorama em <a href="/artigos/carreira-em-ciberseguranca-com-ia-vagas-trilha-e-habilidades">carreira em cibersegurança com IA: vagas, trilha e habilidades</a>, e quem usa IA no dia a dia deve conferir o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a>.</p>
    <p>Para comparar o desempenho de modelos em tarefas técnicas como essa, o guia <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a> traz critérios úteis. E, se o tema de agentes que agem sozinhos em sistemas reais te interessa, a discussão de risco aparece também em <a href="/noticias/plugin4shell-falha-agentes-ia-codigo-claude-code-codex-copilot-gemini">falha Plugin4Shell em agentes de programação</a>.</p>

    <h2>O que observar daqui para frente</h2>
    <p>O próximo passo natural é a checagem externa. Se criptógrafos reproduzirem o método com o lrand48 e os carimbos de hora, a explicação ganha peso e a teoria de backdoor perde força. Se alguém apontar falhas na lógica ou nos dados, a pesquisa vira só mais um capítulo da discussão. Também vale ficar de olho nas peças que ficaram sem resposta, como os pontos de base das curvas mais usadas, porque é nelas que uma eventual surpresa ainda poderia surgir.</p>
    <p>Enquanto isso, a lição para quem trabalha com IA é a mesma de sempre: use o modelo como acelerador de hipóteses, mas peça verificação independente antes de tomar uma conclusão como fato, principalmente quando o autor do resultado é também o vendedor da ferramenta.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Pesquisa publicada pela Frontier Red Team da Anthropic: <a href="https://anthropic.com/research/ecdsa-curve-origins" target="_blank" rel="noopener noreferrer nofollow">ecdsa-curve-origins</a>.</p>
    </div>
  `,
};
