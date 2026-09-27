import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "engenheiro-cognition-fatora-rsa-260-com-devin",
  title: "Engenheiro da Cognition fatora o RSA-260, recorde histórico de 35 anos, com ajuda do Devin",
  author: "Bruno Danello",
  summary:
    "Eric Lu, engenheiro da Cognition, fatorou o número RSA-260, um desafio criptográfico de 260 dígitos que resistia desde 1991, usando uma nova implementação do algoritmo GNFS rodando em GPUs, preparada e operada com o agente de codificação Devin. O feito bate o recorde anterior (RSA-250, de 2020), mas a empresa reforça que não representa risco para a criptografia RSA-2048 usada hoje.",
  sourceName: "Cognition",
  sourceUrl: "https://cognition.com/blog/factoring-rsa-260",
  date: "2026-09-03",
  content: `
    <p>Um desafio matemático lançado em 1991 e considerado praticamente intratável para computação convencional acaba de cair. Eric Lu, engenheiro da Cognition — empresa por trás do agente de codificação Devin —, conseguiu fatorar o RSA-260, um número de 260 dígitos (862 bits) que fazia parte do RSA Factoring Challenge, criado justamente para testar os limites da criptografia baseada em fatoração de números primos grandes.</p>

    <p>O feito não veio de um avanço teórico isolado, mas de engenharia aplicada em escala: a equipe da Cognition construiu uma nova implementação do algoritmo GNFS (peneira geral do corpo de números) rodando em GPUs, e usou o próprio Devin para preparar, ajustar e operar essa infraestrutura. O resultado, segundo a empresa, é o siever em GPU de maior desempenho já construído para esse tipo de problema — permitindo fatorar números desse tamanho a um custo cerca de dez vezes menor do que o melhor método público anterior.</p>

    <p>O recorde anterior, o RSA-250, havia sido estabelecido em fevereiro de 2020 e ficou de pé por mais de seis anos. O RSA-260 resistiu por 35 anos até agora.</p>

    <p>Apesar do simbolismo, a Cognition faz questão de deixar claro que o feito não representa risco imediato para a segurança digital do dia a dia: a criptografia RSA-2048, usada hoje em conexões seguras, bancos e certificados digitais, continua sendo bilhões de vezes mais difícil de quebrar do que os números já fatorados. Ainda assim, o episódio reacende uma discussão de fundo na área de segurança: à medida que ferramentas de IA aceleram tarefas de engenharia e computação em larga escala, o intervalo de tempo até que certos padrões criptográficos precisem ser substituídos por alternativas mais robustas pode começar a encolher.</p>
  `,
};
