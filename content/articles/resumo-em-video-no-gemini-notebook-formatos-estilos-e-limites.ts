import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "resumo-em-video-no-gemini-notebook-formatos-estilos-e-limites",
  title: "Resumo em Vídeo no Gemini Notebook: formatos, estilos e limites",
  seoTitle: "Resumo em Vídeo no Gemini Notebook: como usar e limites",
  excerpt:
    "Resumo em Vídeo no Gemini Notebook transforma suas fontes em vídeo. Veja formatos, estilos visuais, idioma, limites por plano e o passo a passo.",
  metaDescription:
    "Resumo em Vídeo no Gemini Notebook, antigo NotebookLM: formatos Explicativo, Curto e Cinematográfico, estilos, português, limites por plano e passo a passo.",
  category: "ferramentas",
  date: "2026-10-14",
  readTime: 7,
  imageQuery: "student watching explainer video tablet",
  seed: 303,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Resumo em Vídeo transforma as fontes de um notebook em um vídeo gerado por IA, com formatos Explicativo, Curto (cerca de 60 segundos) e Cinematográfico, este último só em inglês e para maiores de 18 anos.",
    "Explicativo e Curto aceitam dezenas de idiomas, incluindo português do Brasil, e a geração roda em segundo plano e pode passar de 30 minutos.",
    "Os limites diários de vídeos dependem do plano: nas faixas Padrão, Plus e Pro, a página de ajuda do Google lista 3, 6 e 20 por dia, sujeitos a mudança.",
  ],
  content: `
    <p>O Resumo em Vídeo do Gemini Notebook, antigo NotebookLM, transforma as fontes de um caderno (PDFs, textos, links) em um vídeo gerado por IA com imagens, diagramas e narração. Você escolhe o formato, o idioma e o estilo visual, clica em gerar e espera: o vídeo é criado em segundo plano e, segundo o Google, pode levar mais de 30 minutos.</p>

    <p>Este guia reúne o que a página de ajuda oficial informa sobre formatos, estilos, idiomas, compartilhamento e limites, mostra um passo a passo, sugere prompts de direcionamento e aponta quando o recurso não é a melhor escolha. Se você ainda não conhece a mudança de nome, leia antes o texto sobre o <a href="/artigos/gemini-notebook-antigo-notebooklm-o-que-mudou">Gemini Notebook, o antigo NotebookLM</a>.</p>

    <h2>O que é o Resumo em Vídeo</h2>

    <p>É um dos formatos do painel Estúdio, ao lado do Resumo em Áudio, dos relatórios, dos cartões de estudo e dos mapas mentais. A diferença é que o resultado é uma apresentação em vídeo montada a partir apenas das fontes que você enviou. A <a href="https://support.google.com/notebooklm/answer/16454555?hl=pt-BR" target="_blank" rel="noopener noreferrer">página de ajuda do Google</a> (conferida em 14/10/2026) avisa que os vídeos são gerados por IA e podem conter informações incorretas ou falhas de áudio, então a conferência continua sendo sua tarefa.</p>

    <p>Para quem estuda ou trabalha com muito texto, a vantagem é transformar um material denso em algo que se assiste no celular. Quem prefere ouvir pode usar o resumo em áudio, tema do guia de <a href="/artigos/podcast-com-ia-como-ganhar-dinheiro-usando-notebooklm">podcast com IA no NotebookLM</a>. O recurso é um exemplo prático de IA multimodal, conceito explicado no texto sobre <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA que vê, ouve e fala</a>.</p>

    <h2>Formatos disponíveis: Explicativo, Curto e Cinematográfico</h2>

    <table>
      <thead>
        <tr><th>Formato</th><th>O que entrega</th><th>Idioma</th><th>Observação</th></tr>
      </thead>
      <tbody>
        <tr><td>Explicativo</td><td>Visão geral estruturada que relaciona os pontos das fontes</td><td>Dezenas de idiomas, incluindo português do Brasil e de Portugal</td><td>Bom para estudar um tema</td></tr>
        <tr><td>Curto</td><td>Cerca de 60 segundos com os conceitos principais</td><td>Dezenas de idiomas</td><td>Bom para revisão rápida</td></tr>
        <tr><td>Cinematográfico</td><td>Experiência imersiva com storytelling</td><td>Somente inglês</td><td>Só para maiores de 18 anos</td></tr>
      </tbody>
    </table>

    <p>Na prática, o Explicativo é o formato que mais interessa a quem lê em português: ele organiza o conteúdo e conecta as ideias. O Curto serve como cartão de revisão em vídeo, parecido com os <a href="/artigos/flashcards-com-ia-estudar-melhor-notebooklm-e-anki">flashcards com IA</a>, mas visual. O Cinematográfico, por ser só em inglês, serve para quem estuda nesse idioma ou quer um material mais narrativo.</p>

    <h2>Estilos visuais e como direcionar o vídeo</h2>

    <p>A página lista os estilos Clássico, Quadro Branco, Aquarela, Impressão Retrô, Retrô, Dobradura, Kawaii e Anime. Também dá para deixar o aplicativo escolher sozinho ou descrever um estilo personalizado. A seleção de estilo é para maiores de 18 anos, exceto nos formatos Cinematográfico e Curto, conforme a mesma página.</p>

    <p>Além do estilo, existe o comando de direcionamento: um texto curto em que você diz o público, o foco e o que evitar. Ele é a parte que mais melhora o resultado, e o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">engenharia de prompt</a> ajuda a escrevê-lo. Exemplos:</p>

    <pre><code>Explique para um aluno do 2º ano do ensino médio que nunca estudou o assunto. Comece pelo problema que a teoria resolve, use exemplos do dia a dia no Brasil e termine com 3 pontos para lembrar. Evite jargão e não use informações que não estejam nas fontes.</code></pre>

    <pre><code>Resuma para um gestor que tem 2 minutos. Foque em decisões, prazos e riscos citados nos documentos. Ignore a história do tema e destaque o que muda para o time na próxima semana.</code></pre>

    <h2>Passo a passo para criar o primeiro vídeo</h2>

    <ol>
      <li>Abra um notebook ou crie um novo e envie as fontes. É preciso ter acesso de edição.</li>
      <li>No painel Estúdio, selecione Resumo em Vídeo. Sem personalizar, ele usa as configurações padrão.</li>
      <li>Escolha formato, idioma, estilo visual e, se quiser, escreva o comando de direcionamento.</li>
      <li>Selecione Gerar e continue usando o notebook: o vídeo é criado em segundo plano.</li>
      <li>Quando ficar pronto, abra o título no Estúdio e reproduza. Dá para mudar a velocidade, usar tela cheia e avaliar com Vídeo bom ou Vídeo ruim.</li>
      <li>Use Ver comando personalizado para conferir o que foi usado na geração e ajustar na próxima tentativa.</li>
    </ol>

    <p>Dica de qualidade: poucas fontes boas rendem mais que muitas fontes soltas. Se o material for um PDF longo, o guia de <a href="/artigos/como-usar-ia-para-resumir-pdfs-artigos-e-textos-longos">resumir PDFs e textos longos com IA</a> mostra como preparar o conteúdo antes de enviar.</p>

    <h2>Limites por plano: quantos vídeos por dia</h2>

    <p>A <a href="https://support.google.com/notebooklm/answer/16213268?hl=pt-BR" target="_blank" rel="noopener noreferrer">página de limites e upgrade</a> do Gemini Notebook lista as cotas por plano (conferida em 14/10/2026) e avisa que elas estão sujeitas a mudança. Para os resumos em vídeo, os números das faixas Padrão, Plus e Pro são 3, 6 e 20 por dia. A tabela das faixas Ultra aparece confusa na página, então não é possível confirmar os valores dessas faixas. Outros limites listados incluem 100, 200 e 500 notebooks por usuário e 50, 100 e 300 fontes por notebook, também em Padrão, Plus e Pro.</p>

    <p>As cotas diárias reiniciam após 24 horas e as mensais após 30 dias. Para saber quanto cada plano custa e qual faz sentido para você, veja o guia de <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">planos Google AI Plus, Pro e Ultra</a> e o texto sobre <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a>. Para a maioria dos estudantes, três vídeos por dia no plano gratuito já bastam, se cada geração for planejada.</p>

    <h2>Compartilhar e baixar o vídeo</h2>

    <p>Há três caminhos, segundo o Google. O primeiro é o link: o compartilhamento público só está disponível em contas pessoais, não em contas Workspace for Education ou Enterprise, e excluir o vídeo invalida os links anteriores. O segundo é compartilhar o notebook inteiro, e as outras pessoas acessam o vídeo pelo painel Estúdio. O terceiro é baixar o arquivo, embora a editora do conteúdo possa restringir o download em alguns casos.</p>

    <p>Se o material de origem tem direitos autorais de terceiros, pense duas vezes antes de publicar o vídeo. O texto sobre <a href="/artigos/ia-e-direitos-autorais-o-que-criadores-precisam-saber">IA e direitos autorais</a> mostra os cuidados básicos, e o guia de <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade em IA</a> lembra de não enviar documentos sensíveis de clientes, alunos ou da empresa.</p>

    <h2>Quando o Resumo em Vídeo não é a melhor escolha</h2>

    <ul class="checklist">
      <li>Quando você precisa de precisão absoluta: confira cada afirmação com a fonte</li>
      <li>Quando o material é confidencial e a política da sua empresa proíbe enviar a ferramentas externas</li>
      <li>Quando há pressa: a geração pode passar de 30 minutos</li>
      <li>Quando você quer apresentação com sua marca: prefira slides, como mostra o guia de <a href="/artigos/como-criar-apresentacoes-e-slides-profissionais-com-ia">apresentações e slides com IA</a></li>
      <li>Quando o vídeo precisa de avatar e roteiro de marketing: veja o <a href="/artigos/google-vids-com-gemini-avatares-quem-pode-usar-e-limites">Google Vids com Gemini</a></li>
    </ul>

    <p>O risco central é o mesmo de qualquer IA: um vídeo bonito pode conter erro. O texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> traz um método para checar, e vale para este caso: assista, anote as afirmações numéricas e volte à fonte para confirmar.</p>

    <h2>Exemplo: estudando para a prova em uma semana</h2>

    <p>Uma estudante do ensino médio, em Recife, tem uma prova de Biologia na sexta-feira. Na segunda, ela envia ao notebook o capítulo do livro em PDF e suas anotações de aula. Pede um Resumo em Vídeo no formato Explicativo, em português do Brasil, com estilo Quadro Branco e o comando "explique como se eu nunca tivesse visto o tema, com exemplos". Enquanto o vídeo é gerado, ela faz exercícios.</p>

    <p>Na terça, assiste ao vídeo com velocidade 1,25x, anota três dúvidas e confere no livro. Na quarta, gera um vídeo Curto só do tópico em que errou. Na quinta, revisa com os cartões de estudo. O vídeo foi um apoio, não o estudo inteiro, e o plano para a prova segue a lógica do guia de <a href="/artigos/como-usar-ia-para-estudar-para-provas-e-concursos">estudar para provas com IA</a>. Estudantes de vestibular podem combinar com o plano do texto sobre o <a href="/artigos/enem-2026-com-ia-plano-de-estudos-e-redacao-ate-a-prova">Enem 2026 com IA</a>.</p>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Enviar fontes demais e sem foco.</strong> O vídeo fica genérico.</li>
      <li><strong>Não escrever comando de direcionamento.</strong> O padrão serve, mas o público fica indefinido.</li>
      <li><strong>Escolher Cinematográfico esperando português.</strong> Esse formato é só em inglês.</li>
      <li><strong>Publicar sem assistir.</strong> A página avisa que pode haver informações incorretas e falhas de áudio.</li>
      <li><strong>Contar com os limites atuais para sempre.</strong> O Google diz que eles mudam.</li>
    </ul>

    <p>O Resumo em Vídeo é um bom atalho para entender e revisar, desde que você trate o resultado como rascunho. Teste hoje com um material curto, no formato Explicativo, e compare o vídeo com a fonte. Para acompanhar mais novidades e guias de ferramentas, visite a <a href="/categoria/ferramentas">categoria Ferramentas</a>.</p>
  `,
  faq: [
    {
      question: "O Resumo em Vídeo do Gemini Notebook funciona em português?",
      answer:
        "Sim, nos formatos Explicativo e Curto, que oferecem dezenas de idiomas, incluindo português do Brasil e de Portugal, segundo a página de ajuda do Google. O formato Cinematográfico está disponível apenas em inglês e só para maiores de 18 anos. Confira as opções na hora de gerar.",
    },
    {
      question: "Quanto tempo leva para gerar um Resumo em Vídeo?",
      answer:
        "O Google informa que o vídeo é criado em segundo plano e pode levar mais de 30 minutos. Você pode continuar usando o notebook enquanto espera. Se precisar do material com urgência, considere o resumo em áudio ou um relatório de texto, que costumam ser mais rápidos.",
    },
    {
      question: "Quantos vídeos posso gerar por dia?",
      answer:
        "A página de limites do Google, conferida em 14/10/2026, lista 3, 6 e 20 resumos em vídeo por dia nas faixas Padrão, Plus e Pro, sujeitos a mudança. A tabela das faixas Ultra aparece confusa na página, então não dá para confirmar esses valores. Consulte a página oficial.",
    },
    {
      question: "O Gemini Notebook é o mesmo NotebookLM?",
      answer:
        "Sim. O NotebookLM passou a se chamar Gemini Notebook, e os cadernos existentes continuam na conta. O Resumo em Vídeo está no painel Estúdio, ao lado do resumo em áudio, dos relatórios e dos cartões de estudo. O guia sobre a mudança de nome explica o que mudou.",
    },
    {
      question: "Posso compartilhar ou baixar o vídeo gerado?",
      answer:
        "Pode compartilhar por link, só em contas pessoais, ou compartilhar o notebook inteiro, e também baixar o arquivo, embora a editora possa restringir o download em alguns casos. Excluir o vídeo invalida os links antigos. Revise direitos autorais e privacidade das fontes antes de publicar.",
    },
  ],
};
