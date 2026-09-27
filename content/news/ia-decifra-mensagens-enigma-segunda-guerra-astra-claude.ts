import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "ia-decifra-mensagens-enigma-segunda-guerra-astra-claude",
  title: "IA decifra duas mensagens da Enigma sem solução desde a Segunda Guerra",
  summary:
    "Dois pesquisadores usaram o Astra, da OpenAI, e o Claude Opus, da Anthropic, para quebrar mensagens nazistas que estavam sem solução há décadas, segundo o TechCrunch.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/09/25/astra-and-opus-just-passed-turings-other-test/",
  date: "2026-09-25",
  content: `
    <p>Dois criptoanalistas amadores afirmam ter decifrado duas mensagens codificadas por máquinas Enigma, usadas pela Alemanha nazista na Segunda Guerra Mundial, com ajuda de modelos de IA da OpenAI e da Anthropic. Segundo <a href="https://techcrunch.com/2026/09/25/astra-and-opus-just-passed-turings-other-test/" rel="noopener noreferrer nofollow">reportagem do TechCrunch</a> publicada nesta quinta-feira (25), o desenvolvedor Carter Leffen quebrou uma mensagem que "intrigava pesquisadores desde 2005" e o executivo de cibersegurança Jack Willis decifrou a chamada mensagem FMNGI, em trabalho datado de 21 de setembro. As soluções foram validadas por Frode Weierud, engenheiro elétrico aposentado e referência na comunidade que estuda a Enigma.</p>
    <p>Os caminhos foram diferentes. Leffen apenas pediu ao Astra, modelo mais recente da OpenAI, que pesquisasse uma base de dados e decodificasse uma mensagem não resolvida; o modelo fez a própria pesquisa em arquivos, achou pistas de contexto, construiu um simulador da máquina Enigma e chegou ao texto. Willis, por sua vez, deu "orientação significativamente maior" ao Claude Opus, da Anthropic, que acabou usando a assinatura conhecida de um oficial alemão para abrir a mensagem. Weierud fez uma ressalva: não está claro de onde o Astra tirou os dados, se de mensagens arquivadas na internet ou de arquivos públicos do governo alemão.</p>

    <h2>Contexto</h2>
    <p>A Enigma é o símbolo da criptografia do século 20. Quebrá-la em Bletchley Park, na Inglaterra, com Alan Turing no time, encurtou a guerra, e o próprio Turing depois propôs o teste que leva seu nome para medir se uma máquina pensa. Daí o título do TechCrunch: os modelos "passaram no outro teste de Turing". Algumas mensagens sobreviventes nunca foram lidas porque faltam as configurações do dia e há erros de transmissão, e projetos com voluntários e computação distribuída vêm tentando fechá-las há 20 anos. O feito chega na mesma semana em que <a href="/noticias/quatro-modelos-topo-lancados-mesma-semana-fadiga">quatro modelos de ponta foram lançados</a>, e mostra na prática o que muda com agentes que pesquisam, programam e testam sozinhos, tema do nosso guia sobre <a href="/artigos/agentes-de-ia-o-futuro-do-trabalho-autonomo-explicado">agentes de IA e trabalho autônomo</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>O detalhe mais útil da história não é a Enigma, é o método. No caso do Astra, um pedido curto virou uma cadeia de trabalho: buscar fontes, entender o contexto, escrever um simulador, testar hipóteses até acertar. É o mesmo tipo de tarefa longa e chata que trava pequenos negócios: conciliar planilhas, cruzar dados de fornecedores, achar o erro numa base antiga. Quem aprende a pedir esse tipo de trabalho, com objetivo claro e critério de sucesso verificável, tira mais das ferramentas do que quem só pede texto.</p>
    <p>A ressalva de Weierud vale para o seu uso também: quando o modelo "acha" uma resposta, confira de onde ela veio. A mensagem decifrada foi validada por um especialista humano, e é assim que deve ser com qualquer resultado importante. Se você ainda está montando o vocabulário, o <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de termos de IA</a> explica o que é agente, contexto e simulação sem enrolação.</p>
  `,
  faq: [
    {
      question: "A IA quebrou a criptografia da Enigma sozinha?",
      answer: "Não exatamente. No caso do Astra, o modelo fez pesquisa, construiu um simulador e testou hipóteses a partir de um pedido humano; no caso do Claude Opus, o pesquisador guiou o processo de perto. As duas soluções foram validadas por um especialista humano.",
    },
    {
      question: "Isso significa que a IA quebra criptografia moderna?",
      answer: "Não. A Enigma é uma cifra mecânica dos anos 1940, com fraquezas conhecidas há décadas. A criptografia atual, como a que protege bancos e mensageiros, é de outra natureza e não foi afetada por esse feito.",
    },
    {
      question: "O que eu levo disso para o trabalho?",
      answer: "Que tarefas longas de investigação, com objetivo claro e forma de verificar a resposta, são o ponto forte dos modelos atuais. Descreva o problema, dê acesso aos dados e defina como saber se deu certo.",
    },
  ],
};
