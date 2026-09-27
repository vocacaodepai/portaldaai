import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "figure-ai-helix-2-5-zero-shot-30-casas",
  title: "Robô da Figure AI realiza tarefas domésticas em 30 casas nunca vistas antes, sem treinamento prévio no local",
  author: "Bruno Danello",
  summary:
    "O Helix 2.5, rede neural humanoide da Figure AI pré-treinada com dados de comportamento humano, conseguiu arrumar salas, dobrar toalhas e fazer camas em 30 residências da Bay Area sem nenhuma coleta de dados ou ajuste fino prévio nesses ambientes — a taxa de sucesso saltou de 9% para 56% em comparação com uma versão treinada do zero.",
  sourceName: "Figure AI",
  sourceUrl: "https://www.figure.ai/news/helix-2-5-zero-shot-30-home-generalization",
  date: "2026-09-17",
  content: `
    <p>A Figure AI apresentou o Helix 2.5, sua mais nova rede neural para robôs humanoides, com um teste incomum: em vez de treinar o robô especificamente em cada ambiente onde ele atuaria, a empresa pré-treinou o modelo com um grande conjunto de dados de comportamento humano — chamado Index — e depois o testou "zero-shot" (sem nenhum treinamento adicional) em 30 casas da região da Baía de São Francisco que o robô nunca havia visto antes.</p>

    <p>O robô realizou três tarefas domésticas de longa duração em cada residência: arrumar a sala de estar, dobrar toalhas e fazer a cama — sem coleta de dados, ajuste fino ou qualquer tipo de adaptação prévia nesses ambientes específicos ou nos objetos manipulados. Segundo a Figure AI, o pré-treinamento com o Index elevou a taxa de sucesso "zero-shot" de 9% para 56%, numa comparação controlada contra uma política idêntica treinada do zero, sem o mesmo pré-treinamento.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Uma "lei de escala" para robôs humanoides</span>
      <p>A empresa descreve o resultado como, segundo seu conhecimento, a primeira lei de escala de transferência humano-para-robô já medida num humanoide — ainda que a Figure AI ressalte que a medição cobre apenas a escala de dados, não necessariamente outros fatores que também influenciam a capacidade de generalização do robô.</p>
    </div>

    <p>O experimento é relevante porque ataca um dos principais gargalos da robótica humanoide: a dificuldade de fazer um robô funcionar bem em ambientes que ele nunca viu, sem depender de treinamento específico para cada novo local — um requisito essencial para que humanoides consigam operar de forma prática em casas e ambientes de trabalho variados, em vez de ficarem restritos a fábricas ou depósitos com layout controlado.</p>
  `,
};
