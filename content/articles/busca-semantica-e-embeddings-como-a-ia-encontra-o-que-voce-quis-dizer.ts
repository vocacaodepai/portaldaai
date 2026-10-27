import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "busca-semantica-e-embeddings-como-a-ia-encontra-o-que-voce-quis-dizer",
  title: "Busca semântica e embeddings: como a IA entende o sentido",
  seoTitle: "Busca semântica e embeddings: o que são, em português",
  excerpt:
    "Busca semântica e embeddings explicados sem jargão: como a IA transforma textos em números, compara sentidos e acha o que você quis dizer, não só a palavra.",
  metaDescription:
    "Entenda busca semântica e embeddings: como a IA converte texto em vetores, mede a proximidade de sentido e onde isso aparece no dia a dia e nos chatbots.",
  category: "iniciantes",
  articleSubcategory: "conceitos",
  date: "2026-10-27",
  readTime: 7,
  imageQuery: "magnifying glass over document pages",
  seed: 842,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Embedding é uma lista de números que representa o sentido de um texto, de uma imagem ou de outro conteúdo, de modo que coisas parecidas fiquem com números parecidos.",
    "Busca semântica compara esses números em vez de comparar palavras exatas, por isso acha o documento certo mesmo quando você escreve de outro jeito.",
    "Ela não garante verdade: encontra o trecho mais próximo do que você perguntou, e quem decide se o resultado serve ainda é você.",
  ],
  content: `
    <p>Busca semântica é a busca que compara o sentido do que você escreveu com o sentido dos textos disponíveis, em vez de procurar palavras idênticas. Os embeddings são o que torna isso possível: listas de números que representam o significado de um conteúdo, de modo que frases parecidas em ideia fiquem próximas entre si, mesmo com palavras diferentes.</p>

    <p>Você já usou isso sem perceber. Quando digita "como tirar mancha de vinho da roupa" e o resultado traz um texto sobre "remover manchas de bebida em tecido", há uma comparação de sentido por trás. Este guia explica a ideia em linguagem comum, mostra um exemplo com números, indica onde ela aparece nas ferramentas que você usa e lista os limites que evitam surpresa.</p>

    <h2>O que é um embedding, em linguagem comum</h2>

    <p>Computadores trabalham com números, não com ideias. Para que um modelo compare dois textos, alguém precisa transformar cada texto em uma sequência de números. O curso introdutório de aprendizado de máquina do Google, o <a href="https://developers.google.com/machine-learning/crash-course/embeddings" target="_blank" rel="noopener noreferrer">Machine Learning Crash Course</a>, define embeddings como representações densas e de poucas dimensões de dados que, de outra forma, seriam enormes e esparsos. O objetivo é colocar itens parecidos perto uns dos outros.</p>

    <p>O exemplo do próprio curso é um app de recomendação de refeições. Se cada prato fosse representado por uma lista gigante com um único "1" e milhares de zeros, cachorro-quente e shawarma não teriam nenhuma relação entre si, assim como cachorro-quente e salada. Com embeddings, o cachorro-quente fica mais perto do shawarma do que da salada, porque o modelo aprendeu que os dois são lanches com pão e carne.</p>

    <p>Pense em um mapa. Cada texto vira um ponto. Textos sobre o mesmo assunto ficam na mesma vizinhança, e assuntos distantes ficam longe. A diferença é que esse mapa não tem 2 dimensões, como o de papel, e sim centenas ou milhares, o que permite guardar muitos detalhes de sentido ao mesmo tempo. Quem quiser a base de como os modelos chegam até esse ponto pode ler o texto sobre <a href="/artigos/como-uma-ia-aprende-treinamento-ajuste-fino-e-por-que-erra">como uma IA aprende</a>.</p>

    <h2>Como a busca semântica compara sentidos</h2>

    <p>O processo tem três passos. Primeiro, cada documento da base (uma página, um e-mail, uma nota) passa por um modelo de embedding e ganha seu vetor, que fica guardado. Segundo, a sua pergunta passa pelo mesmo modelo e também vira um vetor. Terceiro, o sistema mede a distância entre o vetor da pergunta e os dos documentos e devolve os mais próximos.</p>

    <p>A documentação da <a href="https://ai.google.dev/gemini-api/docs/embeddings" target="_blank" rel="noopener noreferrer">API do Gemini sobre embeddings</a> cita a similaridade de cosseno como medida: ela olha a direção dos vetores, não o tamanho, e vai de -1 (sentidos opostos) a 1 (sentidos muito parecidos). Você não precisa fazer essa conta. Basta saber que a "nota de proximidade" existe e que o sistema ordena os resultados por ela.</p>

    <table>
      <thead>
        <tr><th>Pergunta digitada</th><th>Busca por palavra exata acha</th><th>Busca semântica acha</th></tr>
      </thead>
      <tbody>
        <tr><td>"como cancelar a assinatura"</td><td>Textos com "cancelar" e "assinatura"</td><td>Também "encerrar plano" e "pedir reembolso do mensal"</td></tr>
        <tr><td>"carro não liga de manhã"</td><td>Textos com essas palavras</td><td>Também "bateria descarregada" e "falha na partida"</td></tr>
        <tr><td>"nota para quem não tem CNPJ"</td><td>Poucos resultados</td><td>Também "recibo de pessoa física" e "autônomo"</td></tr>
      </tbody>
    </table>

    <p>Na prática, os sistemas bons misturam as duas coisas: usam a busca por palavra para nomes próprios, códigos e números, e a semântica para ideias. Quem procura "boleto 0034" quer a palavra exata; quem procura "como pedir desconto no atraso" quer o sentido.</p>

    <h2>Onde você já encontra isso no dia a dia</h2>

    <p>A comparação de sentido aparece em várias ferramentas. A documentação do Gemini lista como usos típicos a busca semântica, a reordenação de resultados, a classificação de textos (por exemplo, separar mensagem elogiosa de reclamação), o agrupamento de itens parecidos e a detecção de anomalias. Em linguagem comum, isso explica coisas como:</p>

    <ul>
      <li><strong>Pesquisa com IA.</strong> O <a href="/artigos/modo-ia-do-google-como-usar-a-pesquisa-com-ia">Modo IA do Google</a> e ferramentas parecidas entendem perguntas longas, escritas como conversa.</li>
      <li><strong>Chatbots que respondem com base nos seus arquivos.</strong> O funcionamento está descrito em <a href="/artigos/rag-na-ia-como-chatbot-responde-com-base-nos-seus-documentos">RAG na IA</a>: primeiro a busca semântica acha os trechos, depois o modelo escreve a resposta com eles.</li>
      <li><strong>Cadernos de estudo.</strong> Quando você faz uma pergunta a um caderno de fontes, como no <a href="/artigos/gemini-notebook-no-app-gemini-como-criar-e-consultar-cadernos-por-conversa">Gemini Notebook no app Gemini</a>, a ferramenta precisa localizar o trecho certo entre os documentos que você enviou.</li>
      <li><strong>Memória do assistente.</strong> A <a href="/artigos/memoria-longa-em-ia-assistente-que-lembra-de-voce">memória longa</a> de um assistente costuma funcionar guardando lembranças e recuperando as mais próximas da conversa atual.</li>
      <li><strong>Imagens e áudio.</strong> Modelos <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">multimodais</a> podem colocar foto e texto no mesmo mapa, o que permite buscar uma imagem descrevendo-a em palavras.</li>
    </ul>

    <h2>Um exemplo com números para um pequeno negócio</h2>

    <p>Imagine uma loja de cosméticos com 300 perguntas antigas de clientes guardadas em uma planilha. Uma cliente escreve: "meu pedido ainda não chegou e já passou do prazo". Uma busca por palavras exatas procuraria "pedido", "chegou" e "prazo" e acharia só as respostas que usam esses termos. Uma busca semântica também traria "atraso na entrega", "onde está meu rastreio" e "pacote parado nos Correios", porque o sentido é o mesmo.</p>

    <p>Dos 300 registros, o sistema devolve os 3 mais próximos, e a atendente ou o chatbot usa esses textos como base para responder. Se a loja usa um assistente para escrever a resposta, o cuidado é o do guia de <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">atendimento no WhatsApp com IA</a>: a resposta final precisa cair em informações que a loja confirmou, como prazo e política de troca.</p>

    <p>O ganho está em achar rápido. Em vez de percorrer 300 linhas de planilha, a pessoa lê 3. Não há promessa de que as três estejam certas, e é por isso que a conferência humana continua no processo.</p>

    <h2>Prompts úteis para testar a ideia sem programar</h2>

    <p>Você não precisa de código para sentir a diferença. Qualquer assistente de IA com a opção de anexar arquivos permite um teste simples: anexe um texto longo e pergunte com palavras diferentes das que aparecem nele.</p>

    <pre><code>Leia o arquivo anexo. Vou fazer perguntas usando palavras diferentes das do texto. Para cada pergunta, mostre o trecho exato do arquivo que responde e diga em que parte ele está. Se o arquivo não responder, diga "não encontrei" em vez de inventar.</code></pre>

    <pre><code>Liste 5 maneiras diferentes de uma pessoa perguntar "como faço para pagar com Pix parcelado?" e indique quais delas uma busca por palavra exata não encontraria neste documento.</code></pre>

    <p>O segundo prompt ajuda quem mantém uma página de perguntas frequentes: ele mostra variações que os clientes realmente escrevem e que o seu texto talvez não cubra. Se quiser aprofundar a escrita de comandos, o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a> traz a estrutura básica.</p>

    <h2>Limites e cuidados</h2>

    <p>Achar o trecho mais parecido não é o mesmo que achar a verdade. Se a base tem um documento desatualizado, a busca vai devolvê-lo com a mesma segurança de um documento correto. Se a pergunta for vaga, os resultados serão vagos. E modelos de embedding diferentes produzem mapas diferentes: não dá para misturar vetores de um modelo com os de outro.</p>

    <p>Há ainda o risco de resposta inventada na etapa seguinte, quando um modelo escreve o texto final. O artigo sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> mostra como conferir. Também vale lembrar que dados enviados para gerar embeddings saem do seu computador na maioria dos serviços: antes de mandar contratos, dados de clientes ou documentos internos, leia o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade em IA</a>.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Busca semântica pode trazer um trecho parecido com o que você perguntou, mas fora de contexto. Em assuntos de saúde, dinheiro ou contrato, sempre abra o documento original e confirme.</p></div>

    <h2>Erros comuns de quem está começando</h2>

    <ul>
      <li><strong>Achar que embedding é uma resposta.</strong> Ele só localiza; quem escreve a resposta é outro modelo, ou você.</li>
      <li><strong>Misturar modelos.</strong> Vetores gerados por ferramentas diferentes não são comparáveis entre si.</li>
      <li><strong>Esquecer de atualizar a base.</strong> Se o preço mudou e o documento antigo continua lá, a busca vai achar o antigo.</li>
      <li><strong>Usar só semântica para códigos.</strong> Número de pedido, CPF e nome de produto pedem busca por palavra exata.</li>
      <li><strong>Enviar dado sensível sem pensar.</strong> Confira política de privacidade e remova o que não precisa sair.</li>
    </ul>

    <h2>Por onde continuar</h2>

    <p>Agora que a ideia está clara, o próximo passo é ver onde ela se encaixa na sua rotina: um caderno de estudos, um arquivo de perguntas de clientes ou o seu próprio histórico de documentos. Para consolidar o vocabulário, vale passar pelo <a href="/artigos/dicionario-de-inteligencia-artificial-termos-essenciais">dicionário de inteligência artificial</a> e pelo texto sobre <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto</a>, que explica por que a IA não lê tudo de uma vez.</p>
  `,
  faq: [
    {
      question: "O que é embedding em inteligência artificial?",
      answer:
        "É uma lista de números que representa o sentido de um texto, imagem ou áudio. A ideia é que conteúdos parecidos em significado recebam números próximos, o que permite ao computador comparar ideias em vez de apenas comparar palavras idênticas.",
    },
    {
      question: "Qual a diferença entre busca semântica e busca por palavra-chave?",
      answer:
        "A busca por palavra-chave procura os mesmos termos que você digitou. A busca semântica compara o sentido da pergunta com o sentido dos textos e acha resultados com palavras diferentes. Os melhores sistemas combinam as duas, usando palavra exata para códigos e nomes.",
    },
    {
      question: "Preciso saber programar para usar busca semântica?",
      answer:
        "Não para usar. Assistentes com arquivos anexos, cadernos de estudo e buscadores com IA já aplicam a técnica nos bastidores. Programar só é necessário para montar o seu próprio sistema com uma API de embeddings, o que já é um projeto de desenvolvimento.",
    },
    {
      question: "Busca semântica sempre acerta?",
      answer:
        "Não. Ela devolve o conteúdo mais próximo do que você perguntou, não o mais verdadeiro. Se o documento estiver desatualizado ou a pergunta for vaga, o resultado sai fraco. Em assuntos importantes, abra a fonte original e confirme.",
    },
    {
      question: "Embeddings guardam meus dados?",
      answer:
        "Depende do serviço. Para gerar o vetor, o texto costuma ser enviado a um servidor, e as regras de armazenamento variam por empresa e plano. Leia a política de privacidade e evite enviar dados pessoais ou sigilosos sem necessidade.",
    },
  ],
  quiz: [
    {
      question: "O que um embedding representa?",
      options: ["A velocidade do computador", "O sentido de um conteúdo em números", "O idioma do texto apenas"],
      answer: 1,
      explanation: "Embedding transforma o significado de um texto ou imagem em uma lista de números comparáveis.",
    },
    {
      question: "Qual consulta pede busca por palavra exata?",
      options: ["Como pedir desconto no atraso", "Número do pedido 0034", "Dicas para estudar melhor"],
      answer: 1,
      explanation: "Códigos, números e nomes próprios funcionam melhor com busca por palavra exata.",
    },
  ],
};
