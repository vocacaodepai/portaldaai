import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "prompt-engineering-como-escrever-comandos-que-funcionam",
  title: "Prompt Engineering: Como Escrever Comandos que Realmente Funcionam",
  excerpt:
    "A diferença entre uma resposta genérica e uma resposta excelente da IA está em como você pergunta. Aprenda a estrutura de um bom prompt.",
  category: "ferramentas",
  date: "2026-09-03",
  readTime: 7,
  imageQuery: "typing keyboard writing text",
  seed: 5,
  content: `
    <p>"Prompt engineering" é só um nome bonito para uma habilidade simples: saber pedir as coisas de um jeito que a IA entenda exatamente o que você precisa. É, hoje, uma das habilidades mais valiosas do mercado.</p>

    <h2>A estrutura de um bom prompt</h2>
    <ul>
      <li><strong>Contexto:</strong> quem você é e qual é a situação.</li>
      <li><strong>Tarefa:</strong> o que exatamente você quer que a IA faça.</li>
      <li><strong>Formato:</strong> como você quer receber a resposta (lista, tabela, texto corrido, tamanho).</li>
      <li><strong>Restrições:</strong> o que evitar (tom, palavras, tamanho máximo).</li>
    </ul>

    <h2>Exemplo de prompt fraco</h2>
    <p><em>"Escreva um post sobre marketing."</em></p>
    <p>Resposta: genérica, sem direção, provavelmente inútil.</p>

    <h2>Exemplo de prompt forte</h2>
    <p><em>"Você é um especialista em marketing para pequenos negócios locais. Escreva um post de Instagram (máximo 5 linhas, tom leve e direto) para uma padaria de bairro anunciar um novo pão artesanal, com uma chamada para ação no final."</em></p>
    <p>Resposta: específica, pronta para usar, alinhada ao objetivo real.</p>

    <h2>Técnicas que fazem diferença</h2>
    <ol>
      <li><strong>Peça exemplos:</strong> "me dê 3 versões diferentes" gera opções melhores que uma única resposta.</li>
      <li><strong>Peça para a IA fazer perguntas:</strong> "antes de responder, me pergunte o que faltar entender" melhora muito a precisão.</li>
      <li><strong>Refine em etapas:</strong> peça uma primeira versão, depois ajuste o que não gostou, em vez de tentar acertar tudo de uma vez.</li>
      <li><strong>Dê exemplos do seu estilo:</strong> cole um texto seu como referência de tom de voz.</li>
    </ol>

    <h2>Por que isso vale dinheiro</h2>
    <p>Quem domina prompt engineering entrega mais qualidade em menos tempo — e isso é literalmente vendável como serviço, além de tornar qualquer profissional mais produtivo no próprio trabalho.</p>
  `,
};
