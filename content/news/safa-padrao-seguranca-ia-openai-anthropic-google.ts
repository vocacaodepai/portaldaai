import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "safa-padrao-seguranca-ia-openai-anthropic-google",
  title: "OpenAI, Anthropic e Google negociam órgão próprio de segurança para IA",
  summary:
    "As três empresas negociam criar a SAFA, entidade autorregulatória nos moldes da Finra, para testar modelos avançados e definir regras de auditoria sem supervisão do governo dos EUA.",
  author: "Bruno Danello",
  sourceName: "PYMNTS",
  sourceUrl:
    "https://www.pymnts.com/news/artificial-intelligence/2026/openai-google-and-anthropic-join-forces-to-set-ai-safety-standards/",
  date: "2026-10-01",
  content: `
    <p>OpenAI, Google e Anthropic estão avançando na criação de um órgão próprio de padrões de segurança para inteligência artificial, batizado provisoriamente de Standards Authority for Frontier AI (SAFA). Segundo reportagem da <a href="https://www.pymnts.com/news/artificial-intelligence/2026/openai-google-and-anthropic-join-forces-to-set-ai-safety-standards/" target="_blank" rel="noopener noreferrer nofollow">PYMNTS</a>, a entidade seria autorregulatória, sem supervisão do governo americano, e teria como meta de lançamento o fim de 2026 ou o início de 2027.</p>

    <p>A ideia nasceu de uma proposta de Demis Hassabis, cofundador e cientista-chefe do Google DeepMind, que em julho defendeu publicamente a criação de uma organização encarregada de testar os sistemas de IA mais poderosos antes de chegarem ao público. O modelo de referência é a Finra (Financial Industry Regulatory Authority), autarquia que regula corretoras e operadores do mercado financeiro americano sem ser um órgão estatal. Entre as funções propostas para a SAFA estão testes de risco pré-lançamento, protocolos de notificação de incidentes de segurança, padrões para qualificação de auditores independentes e, possivelmente, avaliações próprias de capacidade dos modelos mais avançados.</p>

    <h2>De proposta isolada a negociação entre concorrentes</h2>
    <p>A proposta de Hassabis ganhou corpo depois que as conversas sobre um modelo de supervisão público-privada, com participação do governo dos Estados Unidos, travaram dentro da administração Trump: uma minuta de decreto executivo nesse sentido não conseguiu apoio suficiente. Sem o caminho federal, as três empresas passaram a negociar diretamente entre si uma versão exclusivamente privada do órgão, o que já gerou críticas de outros participantes do setor. Segundo o mesmo tipo de reportagem, o CEO da Cohere, Aidan Gomez, chegou a classificar a iniciativa de "cartel" disfarçado de preocupação com segurança, enquanto Meta, xAI e Nvidia se posicionaram contra a formação da SAFA em evento do setor.</p>
    <p>A SAFA seria, na prática, uma evolução do <strong>Frontier Model Forum</strong>, consórcio fundado em 2023 por Anthropic, Google, OpenAI e Microsoft para discutir segurança de modelos de fronteira, mas com um escopo mais formal: em vez de apenas trocar boas práticas entre si, a nova entidade teria autoridade para credenciar auditores externos e, potencialmente, testar sistemas antes do lançamento comercial. Entre os nomes já sondados para liderar a organização estão Sriram Krishnan, ex-assessor de política de IA da Casa Branca, além de Arati Prabhakar, ex-funcionária de tecnologia do governo Biden, a ex-secretária de Estado Condoleezza Rice e o investidor de risco David Friedberg.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem usa, revende ou constrói produtos em cima de ferramentas de IA no Brasil, a notícia confirma uma tendência que já vínhamos acompanhando: o principal mercado regulatório de referência do setor, os Estados Unidos, segue resolvendo a questão da segurança por meio de acordos entre as próprias fabricantes, não por lei federal. Isso ficou claro poucos dias antes, quando executivos de Meta, Anthropic, Google, Nvidia, Palantir, Amazon e OpenAI assinaram, na Casa Branca, o <a href="/noticias/trump-ceos-ia-assinam-acordo-autorregulacao-casa-branca">White House Accord on Superintelligence</a>, descrito pelo próprio governo americano como "moralmente" vinculante, mas sem força legal.</p>
    <p>Na prática, isso significa que quem depende de ChatGPT, Claude, Gemini ou qualquer outro modelo dessas empresas no dia a dia do trabalho não deve esperar, no curto prazo, uma fiscalização externa e independente com poder de multa ou suspensão. A existência de uma SAFA funcionando normalmente serviria como selo voluntário de "testamos antes de lançar", mas sem o mesmo peso de uma agência reguladora estatal. Vale revisar o nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de como escolher ferramenta de IA com segurança</a> antes de colocar qualquer modelo novo em processos críticos do seu negócio, justamente porque esse tipo de selo autodeclarado ainda não substitui uma auditoria externa de verdade.</p>

    <h2>O contexto da corrida regulatória nos EUA</h2>
    <p>A movimentação pela SAFA acontece em um momento de pressão crescente sobre o setor nos Estados Unidos. Dias antes, a FTC abriu uma <a href="/noticias/ftc-investiga-openai-anthropic-agentes-ia">investigação formal contra OpenAI e Anthropic</a> por possíveis riscos de agentes de IA a consumidores, e uma ação coletiva acusou as próprias empresas por trás da SAFA, junto com xAI, de combinação ilegal entre concorrentes ao coordenarem publicamente uma proposta de desaceleração da IA, como mostramos no <a href="/noticias/processo-antitruste-anthropic-openai-google-xai-desaceleracao">processo antitruste movido na Califórnia</a>. Esse pano de fundo ajuda a explicar por que a SAFA é um tema sensível: ao mesmo tempo em que o setor se move para parecer mais responsável diante da opinião pública e de parlamentares, cresce o risco jurídico de que qualquer coordenação entre concorrentes diretos, mesmo com intenção declarada de segurança, seja interpretada como prática anticompetitiva.</p>
    <p>Também ajuda a entender o timing o fato de Anthropic estar, segundo reportagens recentes, <a href="/noticias/anthropic-ipo-mira-meados-novembro-bloomberg">preparando uma oferta pública inicial de ações</a> para novembro. Empresas em processo de IPO costumam reforçar publicamente seus compromissos de governança e segurança, o que torna a participação ativa da Anthropic nas negociações da SAFA também um gesto relevante para investidores que vão avaliar o risco regulatório do negócio antes de comprar ações.</p>

    <h2>O que observar daqui para frente</h2>
    <p>Ainda não há um texto final sobre quem vai financiar a SAFA, como os auditores credenciados seriam remunerados e se empresas fora do trio fundador (como Meta, xAI, Microsoft ou a Mistral) vão aderir à entidade ou criar uma alternativa concorrente. A escolha do primeiro presidente da organização, entre nomes como Krishnan e Prabhakar, também vai sinalizar se a SAFA vai pender mais para o lado político de Washington ou para um perfil mais técnico e independente. Até lá, o mais prudente para empresas brasileiras que dependem desses modelos é tratar qualquer anúncio de "autorregulação" como um sinal de boas intenções, não como uma garantia equivalente à de um órgão público com poder de fiscalização e punição.</p>
  `,
  faq: [
    {
      question: "O que é a SAFA?",
      answer:
        "SAFA é a sigla provisória para Standards Authority for Frontier AI, um órgão autorregulatório que OpenAI, Anthropic e Google negociam criar para testar modelos avançados de IA e definir padrões de auditoria, inspirado na Finra, reguladora do mercado financeiro americano.",
    },
    {
      question: "A SAFA tem apoio do governo dos Estados Unidos?",
      answer:
        "Não diretamente. A proposta original previa um modelo público-privado com supervisão federal, mas essa ideia travou na administração Trump, e as três empresas passaram a negociar uma versão exclusivamente privada da entidade.",
    },
    {
      question: "Quem critica a criação da SAFA?",
      answer:
        "O CEO da Cohere, Aidan Gomez, chamou a iniciativa de um 'cartel' disfarçado de preocupação com segurança, e empresas como Meta, xAI e Nvidia se posicionaram publicamente contra a formação do órgão.",
    },
  ],
};
