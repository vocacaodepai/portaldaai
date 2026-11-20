import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "apresentacao-no-gemini-notebook-como-revisar-o-roteiro-antes-de-gerar",
  title: "Slides no Gemini Notebook: revisar o roteiro antes de gerar",
  seoTitle: "Slides no Gemini Notebook: revisar roteiro e gerar",
  excerpt:
    "Veja como criar Slide Decks no Gemini Notebook com o passo a passo novo, revisar o roteiro antes de gerar, ajustar slides e baixar em PDF ou PowerPoint.",
  metaDescription:
    "Slides no Gemini Notebook: como usar o fluxo passo a passo, revisar o roteiro antes de gerar, revisar slides, exportar em PDF ou PPTX e quais são os limites.",
  category: "ferramentas",
  date: "2026-10-23",
  readTime: 7,
  imageQuery: "presentation slides laptop meeting",
  seed: 571,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Gemini Notebook agora guia a criação de Slide Decks e Video Overviews por etapas: foco, formato e estilo visual, com opção de revisar o roteiro antes de gerar.",
    "A página de ajuda do Google diz que a revisão de roteiro (outline) é para Google AI Ultra, enquanto o aviso do Workspace fala em liberação geral: confira no seu Studio o que aparece.",
    "O deck sai em PDF ou PowerPoint, mas é gerado por IA e pode errar texto e visual: revise antes de mostrar a qualquer pessoa.",
  ],
  content: `
    <p>Os slides no Gemini Notebook (o antigo NotebookLM) agora podem ser criados por um fluxo passo a passo: você escolhe foco, formato e estilo visual, e, se o recurso de revisão estiver ativo na sua conta, confere o roteiro antes de a apresentação ser gerada. Isso evita o velho ciclo de gerar, não gostar e gerar de novo.</p>

    <p>O Google anunciou a mudança no <a href="https://workspaceupdates.googleblog.com/2026/10/gain-more-creative-control-over-slide-Decks-and-Video-Overviews-in-Gemini-Notebook.html" target="_blank" rel="noopener noreferrer">blog de atualizações do Workspace</a> em 21 de outubro de 2026. Neste guia você vê como usar, o que a documentação diz sobre quem tem a revisão de roteiro, como ajustar slide por slide, como exportar e quando não vale a pena confiar no resultado.</p>

    <h2>O que mudou nos Slide Decks do Gemini Notebook</h2>

    <p>Antes, você pedia uma apresentação e recebia o resultado pronto, com pouco controle. O aviso do Google descreve um fluxo de criação em etapas, em que o Notebook sugere temas de foco, formatos e estilos visuais com base nas suas fontes. Se o seu pedido já trouxer instruções específicas, as escolhas vêm preenchidas.</p>

    <p>Existe também um atalho de primeira passada: você pode pular a revisão e gerar direto. Segundo o blog, a liberação gradual começou em 16 de outubro de 2026 para domínios Rapid Release e Scheduled Release, e a função pode levar até 15 dias para aparecer. Ela vale para clientes do Workspace, assinantes individuais e contas pessoais.</p>

    <p>Se você ainda não conhece a ferramenta, o texto sobre <a href="/artigos/gemini-notebook-antigo-notebooklm-o-que-mudou">o que mudou do NotebookLM para o Gemini Notebook</a> explica a mudança de nome e o básico. O mesmo fluxo vale para vídeo, tema do guia de <a href="/artigos/resumo-em-video-no-gemini-notebook-formatos-estilos-e-limites">resumo em vídeo no Gemini Notebook</a>.</p>

    <h2>Como criar uma apresentação, passo a passo</h2>

    <ol>
      <li>Crie ou abra um notebook e adicione as fontes: PDFs, links, textos, anotações. Quanto melhores as fontes, melhor o deck.</li>
      <li>No painel Studio, toque em Slide Deck, ou peça a apresentação direto no chat.</li>
      <li>Escolha formato, idioma de saída, tamanho e quais fontes entram. A página de ajuda do Google lista essas opções.</li>
      <li>Descreva o público e o tom, por exemplo: reunião de 10 minutos com a diretoria, sem jargão.</li>
      <li>Escolha Gerar agora ou Gerar depois. A geração pode levar vários minutos e você continua trabalhando no notebook.</li>
    </ol>

    <p>A <a href="https://support.google.com/notebooklm/answer/16757456?hl=en" target="_blank" rel="noopener noreferrer">página de ajuda do Slide Deck</a> informa que só quem tem permissão de edição no notebook pode gerar ou apagar um deck, e que o recurso é para maiores de 18 anos. Pode haver diferenças no app de celular.</p>

    <h3>Dois formatos, duas finalidades</h3>

    <p>Pela documentação pública do recurso, o Notebook trabalha com um deck detalhado, mais denso em texto, bom para ser lido ou enviado por e-mail, e com slides de apresentação, mais visuais e com tópicos de fala. O primeiro serve para leitura, o segundo para falar em público. Escolher errado é a causa mais comum de slide que parece estranho.</p>

    <h2>Revisar o roteiro antes de gerar: o que é e quem tem</h2>

    <p>A novidade principal é a revisão do roteiro. Com a chave de revisão ligada, o Notebook mostra primeiro o esboço dos slides no painel Studio. Você escreve o seu feedback, tudo de uma vez, e só então manda seguir. No caso do vídeo, o equivalente é a revisão das notas de produtor.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>O blog do Workspace não cita restrição de plano para a revisão, mas a página de ajuda do Slide Deck diz que a revisão de roteiro é para Google AI Ultra. Na consulta de 23/10/2026, o texto de ajuda era mais restritivo. Se a chave não aparecer para você, o motivo pode ser o plano ou a liberação gradual.</p></div>

    <p>Um detalhe importante da ajuda: depois de tocar em Prosseguir, você não consegue refinar o esboço de novo. Por isso, junte todas as correções antes. Se quiser entender as diferenças de plano, o comparativo <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">Google AI Plus, Pro ou Ultra</a> ajuda a decidir sem pagar à toa.</p>

    <h2>Um exemplo brasileiro: apresentação para o cliente</h2>

    <p>Imagine a Camila, que tem uma agência de social media com dois funcionários e vai apresentar o resultado de três meses a um cliente. Ela coloca no notebook o relatório em PDF, a planilha de métricas e as anotações das reuniões. Pede um deck de 10 slides, para a dona da loja, linguagem simples.</p>

    <p>No esboço, ela vê que o Notebook colocou um slide sobre concorrência que nem estava nas fontes. Corrige no feedback: tirar esse slide, abrir com o resultado de vendas e fechar com três próximos passos. O tempo que ela gastaria refazendo 10 slides vira alguns minutos de revisão do esboço. Para ganhar dinheiro com isso, o guia de <a href="/artigos/freelancer-de-slides-inteligencia-artificial-pacotes-e-preco">freelancer de slides com IA</a> mostra pacotes e preços.</p>

    <h2>Prompts para guiar o roteiro</h2>

    <p>Use estes modelos no chat do notebook. Troque o que está entre colchetes.</p>

<pre><code>Crie um Slide Deck de [número] slides para [público], com o objetivo de [decisão que o público deve tomar]. Use só as fontes do notebook. Abra com o dado mais forte e feche com próximos passos.</code></pre>

<pre><code>Antes de gerar, liste o esboço dos slides com um título-afirmação por slide e a fonte de onde vem cada dado. Marque o que não está nas fontes.</code></pre>

    <p>O segundo prompt é um bom antídoto contra invenção. Para escrever comandos melhores, vale o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompt engineering</a>.</p>

    <h2>Ajustar slides depois de gerado</h2>

    <p>Pronto o deck, a opção Revisar permite alterar slides individuais: texto, layout ou visual. As alterações ficam agrupadas como pendentes e, segundo a ajuda, as fontes não entram nessa etapa de revisão. Gerar a versão revisada cria um deck totalmente novo, então junte as edições antes de gerar. Também dá para apagar, restaurar e arrastar slides para reordenar antes de regenerar.</p>

    <p>Há cotas de revisão por quantidade de decks, mas, pelo texto de ajuda, não há limite para revisões de slides individuais dentro de um mesmo deck. Os valores e planos mudam, por isso confira a página oficial no momento de usar.</p>

    <h2>Exportar e compartilhar</h2>

    <table>
      <thead><tr><th>Ação</th><th>Como funciona</th><th>Cuidado</th></tr></thead>
      <tbody>
        <tr><td>Baixar</td><td>PDF ou PowerPoint (.pptx)</td><td>Fontes de livros do Play Books podem bloquear o download</td></tr>
        <tr><td>Compartilhar link</td><td>O notebook precisa estar compartilhado, com acesso de leitura ao notebook inteiro</td><td>O link para de funcionar se o deck for apagado</td></tr>
        <tr><td>Compartilhar o arquivo</td><td>Você baixa e envia por e-mail ou mensageiro</td><td>Revise antes: o arquivo sai com o que foi gerado</td></tr>
        <tr><td>Link público</td><td>Disponível em contas pessoais</td><td>Indisponível em contas Workspace Enterprise e Education</td></tr>
      </tbody>
    </table>

    <p>Compartilhar o link do deck significa dar acesso ao notebook, com todas as fontes. Se há material confidencial nele, mande o arquivo baixado. O artigo sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade em IA</a> detalha esse tipo de risco.</p>

    <h2>Erros comuns e quando não usar</h2>

    <ul class="checklist">
      <li>Gerar com fontes fracas: sem material bom, o deck repete generalidades.</li>
      <li>Confiar sem conferir: a própria ajuda do Google avisa que pode haver erros visuais e factuais. Veja como checar no guia sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>.</li>
      <li>Pedir 30 slides para uma conversa de 5 minutos: defina tamanho e público antes.</li>
      <li>Revisar slide por slide logo após cada geração: cada nova geração cria outro deck.</li>
      <li>Usar para pitch final de cliente grande sem acabamento humano: nesses casos, ferramentas de design como as do comparativo <a href="/artigos/gamma-ou-canva-qual-ia-cria-apresentacao-melhor">Gamma ou Canva</a> dão mais controle visual.</li>
    </ul>

    <p>Para outras formas de estudar a partir das mesmas fontes, veja o <a href="/artigos/mapa-mental-com-ia-resumir-materia-e-estudar-com-o-gemini-notebook">mapa mental no Gemini Notebook</a>, os <a href="/artigos/flashcards-com-ia-estudar-melhor-notebooklm-e-anki">flashcards com IA</a> e o guia de <a href="/artigos/como-criar-apresentacoes-e-slides-profissionais-com-ia">slides profissionais com IA</a>.</p>

    <h2>Gemini Notebook ou outra ferramenta de slides?</h2>

    <p>O Gemini Notebook brilha quando o conteúdo já existe em documentos e você quer um deck fiel a eles. Se a ideia é criar visual de marca do zero, com identidade própria, uma ferramenta de design resolve melhor. Quem quer um assistente de pesquisa mais amplo pode comparar com o texto <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">Perplexity e NotebookLM</a>.</p>

    <p>Teste hoje com um material seu: pegue um relatório de duas páginas, peça 6 slides, leia o esboço e corrija antes de gerar. Depois, volte ao guia de <a href="/artigos/gravar-aula-e-virar-resumo-com-ia-transcricao-revisao-e-etica">gravar aula e virar resumo</a> para transformar também as suas gravações em fonte do notebook.</p>
  `,
  faq: [
    {
      question: "Gemini Notebook cria slides de graça?",
      answer:
        "O Google informa que o recurso está disponível para contas pessoais, assinantes individuais e clientes Workspace, mas limites de uso e planos mudam. Pela página de ajuda, a revisão de roteiro é citada como exclusiva do Google AI Ultra. Confira a página oficial antes de contar com ela.",
    },
    {
      question: "Dá para baixar o Slide Deck em PowerPoint?",
      answer:
        "Sim. Segundo a ajuda do Google, o deck pode ser baixado em PDF ou PowerPoint (.pptx). Algumas fontes, como livros do Play Books, podem bloquear o download. Depois de baixar, abra no PowerPoint e revise textos, imagens e dados antes de apresentar.",
    },
    {
      question: "Posso editar um slide depois de gerado?",
      answer:
        "Pode, pela opção Revisar, que altera texto, layout ou visual de slides individuais. As mudanças ficam como pendentes e, ao gerar, o Notebook cria um deck novo. Por isso vale juntar todas as edições antes de pedir a nova versão.",
    },
    {
      question: "O Gemini Notebook erra nos slides?",
      answer:
        "Pode errar. A ajuda do Google avisa que os decks são gerados por IA e podem ter erros visuais ou factuais. Confira números, nomes e datas nas fontes e peça ao chat para indicar o que não consta nos documentos antes de compartilhar.",
    },
    {
      question: "Quem pode gerar um deck em um notebook compartilhado?",
      answer:
        "Só quem tem acesso de edição ao notebook pode gerar ou apagar um Slide Deck, segundo a página de ajuda. O recurso também é limitado a maiores de 18 anos. Quem só visualiza consegue abrir o deck, mas não criá-lo.",
    },
  ],
};
