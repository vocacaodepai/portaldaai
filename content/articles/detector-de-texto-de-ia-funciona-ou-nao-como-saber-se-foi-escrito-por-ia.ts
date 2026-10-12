import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "detector-de-texto-de-ia-funciona-ou-nao-como-saber-se-foi-escrito-por-ia",
  title: "Detector de texto de IA funciona? O que a pesquisa mostra",
  seoTitle: "Detector de texto de IA funciona? O que mostra a pesquisa",
  excerpt:
    "Detector de texto de IA funciona? Pesquisa de Stanford mostra falsos positivos contra quem escreve em língua não nativa. Veja os limites e o que fazer no lugar.",
  metaDescription:
    "Detector de texto de IA funciona? Veja o que a pesquisa de Stanford encontrou, por que os detectores erram e como provar que você mesmo escreveu seu trabalho.",
  category: "iniciantes",
  articleSubcategory: "conceitos",
  date: "2026-10-12",
  readTime: 6,
  imageQuery: "student writing essay laptop library",
  seed: 214,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Detectores de texto de IA dão uma probabilidade, não uma prova, e podem errar para os dois lados: acusar quem escreveu sozinho e deixar passar texto de IA.",
    "Um estudo da Universidade de Stanford classificou como gerados por IA 61,22% de redações de TOEFL escritas por pessoas que não têm o inglês como língua nativa.",
    "Quem é acusado injustamente deve guardar rascunhos e histórico de edição; quem avalia deve usar o detector, no máximo, como um alerta e conversar com o autor.",
  ],
  content: `
    <p>Detector de texto de IA funciona só em parte: ele estima a chance de um texto ter sido gerado por máquina, mas erra o suficiente para nunca servir como prova. Um estudo divulgado pela <a href="https://hai.stanford.edu/news/ai-detectors-biased-against-non-native-english-writers" rel="noopener noreferrer" target="_blank">Stanford HAI</a> (verificado em 12/10/2026) mostrou que 61,22% das redações do TOEFL de estudantes não nativos foram classificadas como feitas por IA.</p>
    <p>Se você é estudante, professor, freelancer ou contratante, esse número muda a conversa. Neste guia você entende como os detectores funcionam, por que erram, o que fazer se for acusado sem ter usado IA e como usar a tecnologia de forma justa, sem transformar um palpite em sentença.</p>

    <h2>Como um detector de texto de IA funciona?</h2>
    <p>Os detectores analisam padrões estatísticos do texto. Segundo a Stanford HAI, vários deles se baseiam em uma métrica chamada perplexidade, que mede o quanto um texto é previsível para um modelo de linguagem. Texto muito previsível parece mais "de máquina"; texto com palavras raras e estruturas variadas parece mais "humano".</p>
    <p>O problema é que previsibilidade não é o mesmo que autoria. Quem escreve com vocabulário simples, frases curtas e estrutura de manual produz texto previsível sem ter usado IA nenhuma. Foi exatamente o que os pesquisadores observaram: o desempenho foi quase perfeito com redações de estudantes nativos americanos do 8º ano, mas caiu muito com falantes não nativos.</p>
    <p>Se quiser entender o que a máquina faz por trás, o guia <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">o que é inteligência artificial</a> dá a base.</p>

    <h2>O que a pesquisa de Stanford encontrou</h2>
    <p>O estudo, publicado no <a href="https://arxiv.org/abs/2304.02819" rel="noopener noreferrer" target="_blank">arXiv</a> com o título "GPT detectors are biased against non-native English writers", testou sete detectores com 91 redações do TOEFL escritas por não nativos. Os números mais citados:</p>
    <table>
      <thead><tr><th>Resultado</th><th>Valor</th></tr></thead>
      <tbody>
        <tr><td>Redações de não nativos classificadas como IA (média)</td><td>61,22%</td></tr>
        <tr><td>Redações marcadas como IA pelos sete detectores ao mesmo tempo</td><td>18 de 91 (19%)</td></tr>
        <tr><td>Redações marcadas por pelo menos um detector</td><td>89 de 91 (97%)</td></tr>
      </tbody>
    </table>
    <p>O estudo é de 2023 e usa textos em inglês, então não dá para transferir os percentuais direto para português ou para os detectores de hoje. Mesmo assim, a lição de método permanece: um detector pode acusar justamente quem tem menos repertório na língua, e os próprios autores pedem cautela no uso em contexto educacional e avaliativo.</p>
    <p>Os pesquisadores também mostraram que os detectores podem ser burlados com instruções simples, como pedir à IA que reescreva o texto com linguagem mais literária. Ou seja, erram para os dois lados.</p>

    <h2>Quatro motivos para não confiar numa nota de detector</h2>
    <ol>
      <li><strong>Probabilidade não é prova.</strong> "87% de chance de IA" não quer dizer que 87% do texto foi escrito por IA.</li>
      <li><strong>Falso positivo.</strong> Textos formais, técnicos ou escritos em segunda língua tendem a ser marcados.</li>
      <li><strong>Falso negativo.</strong> Basta editar ou pedir para a IA mudar o estilo para o texto passar.</li>
      <li><strong>Mudança constante.</strong> Os modelos evoluem, e o detector envelhece rápido.</li>
    </ol>

    <h2>Se você foi acusado de usar IA sem ter usado</h2>
    <p>Mantenha a calma e reúna evidências de processo, que valem mais do que qualquer score. Muito do que prova autoria está no caminho até o texto final, não no resultado.</p>
    <ul class="checklist">
      <li>Histórico de versões do documento (Google Docs e Word guardam datas e alterações).</li>
      <li>Rascunhos, anotações à mão, esquemas e pesquisas que você fez.</li>
      <li>Fontes consultadas, com os links e as datas.</li>
      <li>Disposição para explicar o texto em voz alta: conceitos, escolhas, trechos difíceis.</li>
      <li>Outros textos seus anteriores, que mostram o seu estilo.</li>
    </ul>
    <p>Peça que a análise não seja baseada apenas na ferramenta e cite a pesquisa acima como argumento. Isso é um pedido de justiça, não uma confissão. Para quem estuda, o guia de <a href="/artigos/como-usar-ia-para-estudar-para-provas-e-concursos">IA para estudar para provas e concursos</a> mostra como usar o assistente como professor particular sem terceirizar a escrita, e o plano do <a href="/artigos/enem-2026-com-ia-plano-de-estudos-e-redacao-ate-a-prova">Enem 2026 com IA</a> traz exemplos de redação.</p>

    <h2>Se você precisa avaliar textos de outras pessoas</h2>
    <p>Professor, editor ou contratante: use o detector, se quiser, como alerta para conversar, nunca como único critério de punição. Perguntas melhores costumam revelar mais que um percentual.</p>
    <pre><code>Quero conversar com o autor sobre este trabalho sem acusar ninguém. Sugira 8 perguntas abertas sobre o processo de escrita (fontes, escolhas, dificuldades) e 3 trechos do texto que eu poderia pedir para explicar oralmente: [cole um trecho sem dados pessoais].</code></pre>
    <p>Outras práticas justas: pedir rascunhos intermediários, definir por escrito o que é permitido (por exemplo, usar IA para revisar gramática, mas não para escrever), e avaliar também o conhecimento por meio de apresentação oral. Quem contrata redatores pode combinar regras claras desde o início, como sugere o guia sobre <a href="/artigos/como-ganhar-dinheiro-revisando-textos-com-ia">revisão de textos com IA</a>.</p>

    <h2>Então posso usar IA para escrever?</h2>
    <p>Pode, desde que respeite as regras do lugar onde o texto será entregue e assuma a responsabilidade pelo conteúdo. Faculdade, concurso e empresa têm políticas diferentes. Quando for permitido, o uso saudável é pedir ideias, estrutura e revisão, e escrever com as suas palavras. Comece pelo guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompts que funcionam</a> e confira as respostas com o texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>.</p>
    <p>E há o lado das habilidades: quanto mais a IA escreve, mais vale o seu olhar crítico e o seu estilo. O artigo sobre <a href="/artigos/habilidades-humanas-que-a-ia-nao-substitui-no-trabalho">habilidades humanas que a IA não substitui</a> explica o porquê. Se a insegurança bate, veja <a href="/artigos/sindrome-do-impostor-usar-ia-nao-te-torna-menos-capaz">síndrome do impostor com IA</a>.</p>

    <h2>O futuro: provar a origem em vez de adivinhar</h2>
    <p>Como adivinhar pelo estilo é frágil, a tendência é registrar a origem do conteúdo na fonte, como acontece com imagens no padrão descrito em <a href="/artigos/content-credentials-c2pa-como-saber-se-imagem-foi-feita-por-ia">Content Credentials</a>. Para texto, as soluções ainda são menos maduras, então a combinação de histórico de edição, conversa e regras claras segue sendo o caminho mais seguro.</p>

    <h2>Sinais de texto genérico que não dependem de detector</h2>
    <p>Em vez de depender de um percentual, quem edita textos pode observar sinais de conteúdo genérico, que valem para texto de IA e para texto humano preguiçoso. Nenhum deles prova nada sozinho, mas ajudam a decidir se vale pedir uma revisão.</p>
    <ul class="checklist">
      <li>Afirmações amplas sem exemplo, nome, data ou número.</li>
      <li>Parágrafos que repetem a mesma ideia com palavras diferentes.</li>
      <li>Nenhuma opinião, experiência pessoal ou detalhe de contexto.</li>
      <li>Fontes inexistentes ou links que não abrem.</li>
      <li>Linguagem igual do começo ao fim, sem variação de ritmo.</li>
    </ul>
    <p>O sinal mais verificável é o das fontes: referência inventada é um erro típico de modelos de linguagem e é fácil de verificar. Abra cada link citado e confira se o dado está lá. Isso vale para qualquer texto que chegue até você, venha de onde vier. Se a pessoa não souber explicar de onde tirou um dado, o problema é a falta de checagem, e é isso que deve ser corrigido, com ou sem IA no processo.</p>
    <p>Na dúvida, converse. Pedir ao autor que resuma o texto em voz alta, justifique uma escolha de palavra ou aponte onde encontrou uma informação resolve a maioria das dúvidas em poucos minutos e preserva a relação de confiança.</p>

    <h2>Erros comuns</h2>
    <ul class="checklist">
      <li>Usar o percentual do detector como prova.</li>
      <li>Comparar vários detectores e escolher o que confirma a suspeita.</li>
      <li>Colar texto confidencial em sites de detecção sem ler a política de dados (veja <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade em IA</a>).</li>
      <li>Apagar o histórico de versões antes de entregar.</li>
      <li>Tentar "enganar" o detector em vez de seguir a regra do local.</li>
    </ul>

    <p>Guarde rascunhos e histórico de qualquer trabalho importante, escreva com as suas palavras e use a IA como apoio. Para escolher o assistente certo para cada tarefa, veja <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> e continue na categoria <a href="/categoria/iniciantes">IA para iniciantes</a>.</p>
  `,
  faq: [
    {
      question: "Detector de texto de IA é confiável?",
      answer:
        "Não o suficiente para servir como prova. Eles estimam probabilidades e podem errar nos dois sentidos. Um estudo de Stanford, divulgado em 2023, mostrou que redações de não nativos em inglês foram marcadas como IA em 61,22% dos casos, em média. Use o resultado apenas como alerta.",
    },
    {
      question: "O que fazer se meu texto foi marcado como IA?",
      answer:
        "Reúna o histórico de versões do documento, rascunhos, anotações e fontes, e ofereça-se para explicar o conteúdo em conversa. Peça que a avaliação não dependa só do detector e cite a pesquisa de Stanford. Evidências do processo de escrita pesam mais que um percentual.",
    },
    {
      question: "Qual o melhor detector de IA grátis?",
      answer:
        "Nenhum detector é confiável a ponto de ser chamado de o melhor, porque todos têm falsos positivos e negativos. Se quiser testar, compare mais de um, nunca envie dados sigilosos e lembre que o resultado serve só como pista, não como decisão sobre a autoria.",
    },
    {
      question: "Dá para enganar um detector de IA?",
      answer:
        "Os pesquisadores de Stanford mostraram que instruções simples, como pedir à IA para reescrever com linguagem mais literária, podem burlar detectores. Por isso eles falham também em pegar texto gerado por máquina. Na prática, o ideal é combinar conversa, rascunhos e regras claras.",
    },
    {
      question: "Professor pode punir aluno só pelo detector?",
      answer:
        "Pela evidência disponível, não é uma prática segura nem justa, pois o detector pode errar, principalmente com quem escreve em língua não nativa. As regras variam por instituição. Peça que o processo considere histórico de edição, rascunhos e uma conversa sobre o conteúdo do trabalho.",
    },
  ],
};
