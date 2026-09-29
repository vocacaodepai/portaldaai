import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "its-rio-boca-de-ia-perplexity-recomenda-candidatos-tse",
  title: "Perplexity recomenda candidato em 89% das respostas, mostra pesquisa",
  summary:
    "Levantamento do ITS-Rio com o MPF mostra que quatro de sete ferramentas de IA ainda indicam candidatos nas eleições de 2026, apesar da proibição do TSE.",
  author: "Bruno Danello",
  sourceName: "Agência Brasil",
  sourceUrl: "https://agenciabrasil.ebc.com.br/radioagencia-nacional/politica/audio/2026-09/ferramentas-de-ia-seguem-recomendado-candidatos-aponta-monitoramento",
  date: "2026-09-25",
  content: `
    <p>Um levantamento do Instituto de Tecnologia e Sociedade do Rio (ITS-Rio), feito em parceria com o Ministério Público Federal, mostrou que quatro das sete principais ferramentas de inteligência artificial usadas no Brasil continuam recomendando candidatos às eleições de 2026, mesmo depois da proibição imposta pelo Tribunal Superior Eleitoral. Segundo a <a href="https://agenciabrasil.ebc.com.br/radioagencia-nacional/politica/audio/2026-09/ferramentas-de-ia-seguem-recomendado-candidatos-aponta-monitoramento" rel="noopener noreferrer nofollow">Agência Brasil</a>, os dados são da quinta rodada da pesquisa "Boca de IA", realizada em agosto e divulgada em 25 de setembro de 2026.</p>
    <p>O estudo testou sete das ferramentas de IA mais usadas no Brasil, entre elas Perplexity, Meta IA, Grok, DeepSeek, ChatGPT e Gemini, com perguntas como "em quem devo votar" e "qual o melhor candidato". O resultado é desigual: Perplexity recomendou diretamente um nome em 89% das respostas, Meta IA em 23%, Grok em 14% e DeepSeek em 11%, enquanto três das sete ferramentas, entre elas ChatGPT e Gemini, zeraram as indicações diretas depois de reuniões com o MPF. Ainda assim, 86% de todas as respostas analisadas apresentaram algum tipo de ranqueamento ou hierarquização de candidaturas, o que a Resolução TSE nº 23.755/2026 também proíbe.</p>

    <h2>O que a resolução do TSE proíbe e por que isso é difícil de cumprir</h2>
    <p>A resolução do TSE veda que sistemas de inteligência artificial generativa ranqueiem, recomendem, sugiram ou priorizem candidatos, campanhas ou partidos, de forma direta ou indireta, durante o período eleitoral de 2026. O problema é que esses modelos não foram treinados com essa restrição em mente: eles respondem com base em padrões de texto extraídos da internet, onde comparações entre candidatos, veículos de imprensa e redes sociais aparecem aos montes, e separar "informar sobre" de "recomendar" é uma linha tênue mesmo para quem programa o filtro. O próprio <a href="/noticias/tse-lanca-chatvote-assistente-ia-eleicoes-2026">TSE lançou o ChatVote, seu assistente oficial de IA para as eleições</a>, como alternativa pensada desde o início para não recomendar candidaturas, mas o levantamento do ITS-Rio mostra que o problema segue presente nas ferramentas de uso geral que a maioria das pessoas já usa no dia a dia.</p>
    <p>A pesquisa também aponta uma melhora pontual: depois de reuniões do MPF com a Google, o Gemini passou a zerar suas indicações de candidatos, o que sugere que pressão regulatória direta funciona quando a empresa por trás da ferramenta está disposta a ajustar o comportamento do modelo. Isso é coerente com o histórico de outras big techs que reagem a fiscalização direta mais rápido do que a regras genéricas de terceiros, um padrão que também aparece em <a href="/noticias/proofpoint-lanca-sistema-unificado-seguranca-dados-agentes-ia">discussões sobre segurança e conformidade de agentes de IA</a> em outros setores.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa alguma dessas ferramentas para se informar sobre política ou decidir seu voto em 2026, vale saber que a resposta que você recebe não é neutra por padrão: ela pode carregar um viés de ranqueamento sem avisar, e algumas ferramentas ainda recomendam nomes de forma direta mesmo proibidas por lei. A recomendação prática é tratar essas respostas como ponto de partida, nunca como veredito, e sempre conferir a fonte original, seja o site do TSE, seja o plano de governo do candidato, antes de formar opinião.</p>
    <p>Para quem trabalha construindo ou usando produtos de IA no Brasil, o caso mostra como regulação setorial específica, como a eleitoral, já está sendo testada na prática antes mesmo de uma lei geral de IA sair do papel. Empresas que operam chatbots ou assistentes no Brasil precisam considerar esse tipo de exigência local, que muda por eleição e por tribunal, e não apenas as diretrizes globais de segurança que a empresa segue em outros países.</p>

    <h2>O que observar até a eleição</h2>
    <p>O ITS-Rio deve seguir monitorando as ferramentas com novas rodadas até o fim do período eleitoral, e a expectativa é que outras plataformas, como Perplexity, recebam a mesma pressão que levou o Gemini a zerar suas recomendações. Também vale acompanhar se o TSE vai aplicar sanções às empresas que mantiverem o comportamento proibido, já que até agora a resolução tem funcionado mais como base para negociação com o MPF do que como mecanismo de punição efetiva.</p>
    <div class="callout-box">
      <span class="callout-label">Resumo rápido</span>
      Pesquisa do ITS-Rio com o MPF encontrou Perplexity recomendando candidatos em 89% das respostas, apesar da proibição do TSE. ChatGPT e Gemini, entre outras, zeraram indicações diretas após pressão regulatória.
    </div>
  `,
  faq: [
    {
      question: "É proibido perguntar sobre candidatos para um chatbot de IA?",
      answer:
        "Não é proibido perguntar. O que a Resolução TSE nº 23.755/2026 proíbe é que a ferramenta de IA recomende, ranqueie ou priorize candidaturas nas respostas que ela dá.",
    },
    {
      question: "Quais ferramentas de IA pararam de recomendar candidatos?",
      answer:
        "Segundo o levantamento do ITS-Rio, três das sete ferramentas testadas, entre elas ChatGPT e Gemini, zeraram as recomendações diretas de candidatos na quinta rodada da pesquisa, enquanto Perplexity, Meta IA, Grok e DeepSeek continuaram indicando nomes.",
    },
  ],
};
