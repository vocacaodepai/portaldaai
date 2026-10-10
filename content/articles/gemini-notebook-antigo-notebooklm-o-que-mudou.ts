import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "gemini-notebook-antigo-notebooklm-o-que-mudou",
  title: "Gemini Notebook, o antigo NotebookLM: o que mudou e como usar",
  seoTitle: "Gemini Notebook (antigo NotebookLM): o que mudou",
  excerpt:
    "O NotebookLM agora se chama Gemini Notebook. Veja o que mudou, quais fontes aceita, o que o plano grátis limita e como montar seu primeiro caderno de estudo.",
  metaDescription:
    "Gemini Notebook é o novo nome do NotebookLM, do Google. Entenda o que mudou, limites do plano grátis, privacidade e um passo a passo para o primeiro caderno.",
  category: "ferramentas",
  date: "2026-10-10",
  readTime: 7,
  imageQuery: "research notebook laptop sources desk",
  seed: 190,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O NotebookLM foi renomeado para Gemini Notebook em 16/07/2026: é o mesmo produto, com notebooks agora sincronizados com o app do Gemini e um computador na nuvem para análises com código.",
    "No plano gratuito cabem até 50 fontes por caderno, de PDF e Google Docs a vídeos públicos do YouTube, e os planos pagos do Google apenas multiplicam o limite de uso.",
    "O conteúdo do caderno não treina diretamente os modelos do Google, mas o feedback que você envia pode ser lido por equipes treinadas, então evite dados sensíveis.",
  ],
  content: `
    <p>Gemini Notebook é o novo nome do NotebookLM, a ferramenta do Google que responde perguntas usando só os documentos que você mesmo coloca nela. A troca de nome foi anunciada em 16 de julho de 2026, e o Google diz que é o mesmo produto, com seus cadernos, fontes e resumos em áudio preservados.</p>
    <p>Se você já usava o NotebookLM, nada some. Se nunca usou, este guia explica o que a ferramenta faz, o que mudou com o novo nome, quais arquivos ela aceita, onde o plano gratuito aperta e como montar o primeiro caderno em dez minutos. Os dados abaixo foram verificados nas páginas oficiais do Google em 10/10/2026.</p>

    <h2>O que é o Gemini Notebook e o que mudou desde o NotebookLM?</h2>
    <p>A ideia continua a mesma: em vez de perguntar a uma IA que responde com base em tudo o que aprendeu na internet, você sobe suas próprias fontes e as respostas saem ancoradas nelas. Isso reduz o risco de invenção, mas não o elimina, e o texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">como checar se a resposta da IA está certa</a> continua valendo aqui.</p>
    <p>Segundo o <a href="https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/" rel="noopener noreferrer" target="_blank">anúncio do Google</a>, a mudança traz duas novidades principais. A primeira é que cada caderno ganha um computador seguro na nuvem, no qual o Gemini consegue escrever e rodar código para analisar dados das suas fontes. A segunda é a sincronização: cadernos criados dentro do app do Gemini aparecem no site do produto, e o contrário também vale.</p>
    <p>O recurso de código chegou primeiro para assinantes do Google AI Ultra e clientes empresariais do Workspace, e o Google informou que chegaria a todos os assinantes Pro na web nas semanas seguintes. Para quem usa o plano gratuito, o núcleo do produto segue igual. O <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">comparativo entre Perplexity e NotebookLM</a> continua útil para entender onde cada um brilha, bastando trocar o nome na cabeça.</p>

    <h2>Quais fontes o Gemini Notebook aceita</h2>
    <p>A lista oficial de formatos é longa, e isso explica a popularidade da ferramenta entre estudantes e profissionais. A <a href="https://support.google.com/gemininotebook/answer/16215270" rel="noopener noreferrer" target="_blank">página de ajuda sobre fontes</a> cita estes tipos:</p>
    <ul>
      <li>Documentos: PDF, Word, texto, Markdown, ePub e texto colado.</li>
      <li>Google Workspace: Docs, Slides (até 100 slides) e Sheets (limitado a 100 mil tokens).</li>
      <li>Planilhas e apresentações: CSV e PowerPoint.</li>
      <li>Mídia: arquivos de áudio, imagens e vídeos públicos do YouTube.</li>
      <li>Outros: endereços de sites, e-books do Google Play Livros e conversas do próprio Gemini.</li>
    </ul>
    <p>Cada fonte pode ter até 500 mil palavras ou 200 MB, no caso de arquivos enviados. Isso é bastante: um livro inteiro cabe com folga. Quem precisa transformar reunião gravada em texto antes de subir pode começar pelas <a href="/artigos/melhores-ias-para-transcrever-audio-e-video-em-portugues">melhores IAs para transcrever áudio e vídeo em português</a>, embora o próprio caderno já aceite áudio.</p>

    <h2>Limites do plano gratuito e dos planos pagos</h2>
    <p>No plano gratuito, a mesma página de fontes informa que o caderno comporta até 50 fontes. O uso diário é medido por cota: a <a href="https://support.google.com/gemininotebook/answer/17670842" rel="noopener noreferrer" target="_blank">página de limites de uso</a> não traz números absolutos, só múltiplos do limite padrão, que é o do plano grátis.</p>
    <table>
      <thead>
        <tr>
          <th>Plano</th>
          <th>Limite de uso</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Grátis (sem plano)</td><td>Limite padrão</td></tr>
        <tr><td>Google AI Plus</td><td>2 vezes o padrão</td></tr>
        <tr><td>Google AI Pro</td><td>4 vezes o padrão</td></tr>
        <tr><td>Google AI Ultra</td><td>5 ou 20 vezes o do AI Pro, conforme a assinatura</td></tr>
      </tbody>
    </table>
    <p>A cota é renovada a cada 5 horas, até o limite semanal. Na prática, quem estuda um pouco por dia não encosta no teto do grátis. Quem sobe dezenas de PDFs e pergunta o dia inteiro pode sentir. Os preços em reais mudam com frequência, então consulte a página oficial dos planos do Google antes de assinar, e releia o <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">guia sobre IA grátis ou paga</a> para decidir se o upgrade compensa.</p>

    <h2>Passo a passo: seu primeiro caderno em 10 minutos</h2>
    <p>Imagine uma estudante de Administração em Belo Horizonte com 4 PDFs de uma disciplina de finanças e uma prova em duas semanas. O roteiro dela pode ser este:</p>
    <ol>
      <li>Abrir o site do produto com a conta Google e criar um caderno novo, com o nome da disciplina.</li>
      <li>Subir os 4 PDFs e colar o link de uma aula pública do YouTube.</li>
      <li>Pedir um mapa dos temas e só depois fazer perguntas específicas.</li>
      <li>Pedir um quiz de 10 questões, conferindo cada resposta com a página citada.</li>
    </ol>
    <p>Três comandos prontos para testar, que seguem a lógica do guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">comandos que funcionam</a>:</p>
    <pre><code>Liste os 8 conceitos mais importantes destas fontes, cada um em uma frase, indicando em qual fonte aparece.</code></pre>
    <pre><code>Monte 10 questões de múltipla escolha sobre as fontes, com gabarito e a explicação de cada alternativa errada.</code></pre>
    <pre><code>Onde estas fontes se contradizem? Mostre os trechos lado a lado.</code></pre>

    <h2>Para que mais serve: estudo, trabalho e conteúdo</h2>
    <p>Quem prepara prova ou concurso encontra no caderno um tutor que só fala do edital e das apostilas, tema que o guia de <a href="/artigos/como-usar-ia-para-estudar-para-provas-e-concursos">como usar IA para estudar para provas e concursos</a> desenvolve. No trabalho, vale para consolidar contratos, relatórios e atas. A <a href="/artigos/como-usar-ia-para-resumir-pdfs-artigos-e-textos-longos">técnica de resumir PDFs longos</a> ganha rastreabilidade, porque cada afirmação aponta para o trecho de origem.</p>
    <p>Para criadores, o recurso de resumo em áudio, que simula uma conversa entre dois apresentadores, rendeu formatos novos. O artigo sobre <a href="/artigos/podcast-com-ia-como-ganhar-dinheiro-usando-notebooklm">como ganhar dinheiro com podcast usando NotebookLM</a> mostra o caminho comercial, com a ressalva de que é preciso ter direito de uso sobre as fontes. E reuniões gravadas entram bem no fluxo descrito em <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">IA para reuniões</a>.</p>

    <h2>Privacidade: o que acontece com seus arquivos</h2>
    <p>A <a href="https://support.google.com/gemininotebook/answer/17004255" rel="noopener noreferrer" target="_blank">página de privacidade do produto</a> diz que o conteúdo dos cadernos não é usado para treinar diretamente os modelos de base do Google, a menos que você escolha enviar feedback. Quando você manda feedback, equipes treinadas podem revisá-lo, depois de desvinculado da sua conta. Usuários do Google Workspace ficam fora dessa revisão humana.</p>
    <p>Mesmo assim, trate o caderno como qualquer ferramenta de nuvem. Não suba CPF, prontuário, contrato com cláusula de sigilo ou dado de cliente sem autorização. O texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber</a> traz um checklist, e o roteiro de <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">escolha de ferramenta com segurança</a> ajuda a decidir o que pode ir para a nuvem.</p>

    <h2>Erros comuns e quando não usar</h2>
    <ul class="checklist">
      <li>Subir fontes ruins e esperar resposta boa: a ferramenta só é tão confiável quanto o material.</li>
      <li>Não conferir a citação: clique na referência e leia o trecho antes de usar a informação.</li>
      <li>Perguntar sobre algo que não está nas fontes: o ideal é ela dizer que não achou, mas confirme.</li>
      <li>Misturar assuntos num caderno só: um caderno por tema mantém as respostas mais precisas.</li>
      <li>Usar para decisão jurídica, médica ou financeira sem um profissional.</li>
    </ul>
    <p>Se a sua necessidade é pesquisar a internet aberta, outra ferramenta serve melhor, e o <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">comparativo entre ChatGPT, Claude e Gemini</a> ajuda a escolher. Quem quer entender o lado multimídia pode ler sobre <a href="/artigos/ia-multimodal-o-que-muda-quando-maquina-ve-ouve-fala">IA multimodal</a>, e quem acompanha a família de modelos do Google encontra detalhes em <a href="/artigos/gemini-3-vale-a-pena-novidades-precos-comparacao-chatgpt">Gemini 3: novidades, preços e comparação</a>.</p>


    <h2>Um fluxo de trabalho que funciona na prática</h2>
    <p>Quem tira mais proveito da ferramenta costuma seguir uma sequência simples. Primeiro, junta só as fontes confiáveis sobre um tema, em vez de despejar tudo o que encontrou. Segundo, pede um panorama geral antes de perguntar detalhes, porque isso revela lacunas do material. Terceiro, faz perguntas curtas e específicas, uma de cada vez, e abre a citação de cada resposta importante.</p>
    <p>Por exemplo, um analista de uma pequena empresa em Porto Alegre que precisa entender três propostas de fornecedores pode subir os três PDFs e pedir uma tabela com preço, prazo, garantia e condições de cancelamento. A ferramenta organiza a comparação em minutos, mas a decisão e a conferência dos números continuam com ele. Se o trabalho envolver contrato, vale uma leitura humana de um profissional antes de assinar.</p>
    <p>Por fim, guarde os cadernos organizados por projeto e apague os que não usa mais. Isso mantém as respostas focadas e reduz o volume de material pessoal na nuvem. Se você ainda está decidindo entre ferramentas, teste o mesmo conjunto de documentos em duas delas e compare a precisão das citações, não só a fluência do texto.</p>

    <p>Crie hoje um caderno com o material da próxima prova ou reunião e compare o tempo gasto com o método antigo. Para continuar, veja o panorama completo na categoria de <a href="/categoria/ferramentas">ferramentas de IA</a>.</p>
  `,
  faq: [
    {
      question: "Gemini Notebook é o mesmo que NotebookLM?",
      answer:
        "Sim. O Google renomeou o NotebookLM para Gemini Notebook em 16 de julho de 2026 e afirma que é o mesmo produto independente, com integração maior ao Gemini. Cadernos, fontes e resumos em áudio existentes foram mantidos.",
    },
    {
      question: "O Gemini Notebook é grátis?",
      answer:
        "Existe um uso gratuito com limites padrão, incluindo até 50 fontes por caderno. Os planos Google AI Plus, Pro e Ultra aumentam a cota de uso. Confira valores atuais na página oficial do Google, pois mudam com frequência.",
    },
    {
      question: "Quais arquivos posso enviar para o Gemini Notebook?",
      answer:
        "PDF, Word, texto, Markdown, ePub, CSV, PowerPoint, Docs, Slides, Sheets, imagens, áudio, endereços de sites e vídeos públicos do YouTube. Cada fonte aceita até 500 mil palavras ou 200 MB em arquivos enviados.",
    },
    {
      question: "O Google usa meus documentos para treinar a IA?",
      answer:
        "Segundo a página oficial de privacidade, o conteúdo do caderno não é usado para treinar diretamente os modelos de base do Google, salvo se você enviar feedback. Mesmo assim, evite subir dados pessoais ou sigilosos.",
    },
    {
      question: "O Gemini Notebook funciona em português?",
      answer:
        "Sim, você pode subir fontes e conversar em português. Como toda IA, ela pode errar nomes, números e trechos, então confira as citações que a ferramenta mostra antes de usar a resposta em prova ou trabalho.",
    },
  ],
};
