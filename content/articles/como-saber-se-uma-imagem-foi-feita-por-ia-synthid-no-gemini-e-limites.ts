import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-saber-se-uma-imagem-foi-feita-por-ia-synthid-no-gemini-e-limites",
  title: "Como saber se uma imagem foi feita por IA: SynthID no Gemini",
  seoTitle: "Como saber se uma imagem foi feita por IA com o Gemini",
  excerpt:
    "Veja como checar no Gemini se uma imagem, vídeo ou áudio foi feito com IA do Google, o que o SynthID detecta, quais são os limites e como não cair em golpe.",
  metaDescription:
    "Veja como checar no Gemini se uma imagem, vídeo ou áudio foi feito com IA do Google, o que o SynthID detecta, quais são os limites e como não cair em golpe.",
  category: "futuro",
  articleSubcategory: "regulacao-e-etica",
  date: "2026-11-23",
  readTime: 7,
  imageQuery: "magnifying glass photo verification",
  seed: 1242,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O app Gemini consegue verificar se uma imagem, vídeo ou áudio foi criado ou editado por IA do Google, procurando a marca invisível SynthID.",
    "O teste só reconhece conteúdo das ferramentas do Google: sem a marca, o arquivo pode ter vindo de outra IA, então a resposta nunca prova que algo é real.",
    "Para decidir se acredita numa imagem, combine a verificação com a checagem da origem, a busca reversa e o bom senso sobre o que está sendo pedido a você.",
  ],
  content: `
    <p>Para saber se uma imagem foi feita por IA, você pode enviá-la ao app Gemini e perguntar se ela foi gerada por IA. O Gemini procura o SynthID, uma marca d'água invisível que as ferramentas de IA do Google colocam no que criam, e responde se encontrou. Mas só reconhece conteúdo do Google: sem a marca, a imagem pode ser de qualquer outra IA.</p>
    <p>Com imagem falsa circulando em grupo de família, eleição e golpe, ter um jeito rápido de checar ajuda, desde que você saiba o que a resposta quer dizer e o que ela não diz. Este guia mostra o passo a passo, os limites oficiais e o que fazer quando o teste não resolve.</p>

    <h2>O que é o SynthID e o que o Gemini consegue verificar?</h2>
    <p>O SynthID é uma tecnologia do Google que insere uma marca d'água imperceptível em imagens, vídeos e áudios gerados pelas suas ferramentas de IA. Você não vê nem ouve a marca, mas um detector consegue encontrá-la. Segundo o <a href="https://blog.google/technology/ai/ai-image-verification-gemini-app/" target="_blank" rel="noopener noreferrer">anúncio do Google</a>, de novembro de 2025, o app Gemini passou a permitir verificar se uma imagem foi gerada ou editada por IA do Google.</p>
    <p>A <a href="https://support.google.com/gemini/answer/16722517?hl=pt-BR" target="_blank" rel="noopener noreferrer">página de ajuda do Gemini</a> hoje descreve a verificação para imagens, vídeos e áudios, usando duas tecnologias:</p>
    <ul>
      <li><strong>SynthID:</strong> a marca d'água invisível, que indica se o arquivo, no todo ou em parte, foi criado ou editado por modelos de IA do Google.</li>
      <li><strong>Content Credentials (padrão C2PA):</strong> informações de procedência embutidas no arquivo, como histórico de edições e uso de IA.</li>
    </ul>
    <p>A mesma página avisa que o Gemini só consegue reconhecer conteúdo criado com as ferramentas de IA do Google. Guarde essa frase, porque ela decide como você deve ler qualquer resposta.</p>

    <h2>Passo a passo para verificar no Gemini</h2>
    <p>Pela página oficial, o caminho no computador é simples:</p>
    <ol>
      <li>Acesse gemini.google.com e entre com sua conta pessoal ou uma conta qualificada do Workspace.</li>
      <li>Clique em "Adicionar arquivos" e envie a imagem, o vídeo ou o áudio.</li>
      <li>Pergunte, por exemplo: "Isso foi gerado com IA?" ou "Isso foi criado com a IA do Google?".</li>
      <li>Leia a resposta, que combina o resultado da busca pelo SynthID com a análise do próprio Gemini.</li>
    </ol>
    <p>No celular, o fluxo é parecido pelo aplicativo, que precisa estar na versão mais recente. Os menus mudam com as atualizações, então se algum botão tiver outro nome, use o envio de arquivo do app e a mesma pergunta.</p>
    <pre><code>Esta imagem foi criada ou editada com a IA do Google? Explique o que você encontrou e o que não consegue afirmar.</code></pre>
    <p>Pedir que ele diga o que não consegue afirmar ajuda a evitar uma resposta mais confiante do que os fatos permitem.</p>

    <h2>Limites de tamanho e de uso</h2>
    <p>A página de ajuda traz limites que importam se você for checar vários arquivos. São os valores informados pelo Google, que podem mudar:</p>
    <table>
      <thead>
        <tr><th>Tipo</th><th>Limite informado</th></tr>
      </thead>
      <tbody>
        <tr><td>Por envio</td><td>Um arquivo de cada vez, até 100 MB</td></tr>
        <tr><td>Vídeo</td><td>Menos de 90 segundos cada</td></tr>
        <tr><td>Áudio</td><td>Menos de 1 hora cada</td></tr>
        <tr><td>Cota em 24 horas</td><td>Cerca de 10 imagens, 10 vídeos e 10 áudios</td></tr>
      </tbody>
    </table>
    <p>Ao chegar na cota, o app avisa. Se você é jornalista, moderador de grupo ou dono de página e precisa checar muita coisa, planeje a fila e comece pelo que mais circula.</p>

    <h2>O que a resposta significa e o que ela não significa</h2>
    <p>Aqui mora o erro mais comum. Existem três cenários possíveis:</p>
    <h3>O Gemini encontrou o SynthID</h3>
    <p>Quer dizer que toda a imagem ou parte dela foi criada ou editada por IA do Google. É um sinal forte. Note o "parte dela": uma foto real pode ter um trecho alterado por IA.</p>
    <h3>O Gemini não encontrou o SynthID</h3>
    <p>Não quer dizer que a imagem é real. Segundo o Google, nesse caso ela pode ter sido gerada por outros sistemas de IA. Uma imagem feita em outro gerador não carrega a marca do Google, e a ausência de marca prova pouco.</p>
    <h3>O Gemini dá uma opinião sobre o conteúdo</h3>
    <p>Além da marca, o app acrescenta uma análise própria. Isso é palpite de modelo de IA: pode ajudar a levantar dúvidas, mas não é prova.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Sobre Content Credentials, a própria página do Google diz que informar se um arquivo foi definitivamente gerado por IA não é função delas: elas mostram a procedência declarada, quando existe. Arquivo sem esses dados não é suspeito por si só, porque muita rede social remove essa informação ao reenviar a imagem.</p></div>

    <h2>Como checar além do Gemini</h2>
    <p>Nenhum detector sozinho resolve. Use o teste como uma etapa de uma checagem maior, a mesma lógica do guia para <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">identificar conteúdo falso</a>:</p>
    <ul class="checklist">
      <li>Quem postou primeiro? Procure o perfil ou veículo de origem, não só o repost.</li>
      <li>A cena aparece em mais de uma fonte confiável, com ângulos diferentes?</li>
      <li>Faça busca reversa de imagem para ver se a foto é antiga ou de outro lugar.</li>
      <li>Procure detalhes típicos de erro de IA: mãos, texto em placas, sombras, reflexos.</li>
      <li>Desconfie de quem pede ação imediata: dinheiro, código, clique.</li>
    </ul>
    <p>Esse último ponto aparece em quase todo golpe. O artigo sobre <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">como checar mensagem suspeita com IA</a> traz um roteiro para mensagens, e o do <a href="/artigos/golpe-da-voz-clonada-como-se-proteger-com-palavra-da-familia-e-checagem">golpe da voz clonada</a> mostra por que áudio falso também precisa de checagem humana, algo que o detector de áudio do Gemini só cobre quando o áudio vem do Google.</p>

    <h2>Quem mais precisa disso</h2>
    <p>A verificação interessa a perfis bem diferentes:</p>
    <ul>
      <li><strong>Famílias:</strong> imagens de "notícia" que chegam no grupo, sobretudo em época de eleição. O guia sobre <a href="/artigos/deepfake-nas-eleicoes-2026-regras-do-tse-rotulagem-e-multas">deepfake nas eleições</a> explica o que a Justiça Eleitoral exige de quem usa IA.</li>
      <li><strong>Pequenos negócios:</strong> avaliações, prints de pagamento e fotos de produto podem ser falsos. Veja também o caso do <a href="/artigos/boleto-falso-de-fornecedor-como-conferir-com-dda-cnpj-e-ia">boleto falso de fornecedor</a>.</li>
      <li><strong>Criadores de conteúdo:</strong> plataformas pedem rótulo para conteúdo de IA, como no caso do <a href="/artigos/pinterest-com-ia-trafego-para-blog-e-afiliados-regras-e-rotulo-de-ia">Pinterest</a>. Quem cria imagens, por exemplo, com o <a href="/artigos/como-criar-imagens-com-ia-guia-passo-a-passo">guia de imagens com IA</a>, deve rotular quando a regra exigir.</li>
      <li><strong>Escolas e redações:</strong> o tema aparece em <a href="/artigos/jornalismo-e-ia-o-que-muda-para-quem-produz-noticia-e-para-quem-publica">jornalismo e IA</a> e na <a href="/artigos/ia-na-escola-diretrizes-do-mec-e-do-cne-o-que-muda-para-professores-pais-e-alunos">discussão sobre IA na escola</a>.</li>
    </ul>
    <p>A marca d'água também é assunto fora das imagens: o texto <a href="/artigos/marca-dagua-em-texto-de-ia-o-que-o-ai-act-exige-e-o-que-muda-para-quem-usa">marca d'água em texto de IA</a> explica o que a União Europeia exige e por que texto é muito mais difícil de marcar do que imagem.</p>

    <h2>Erros comuns ao verificar imagens</h2>
    <ul>
      <li><strong>Tratar "não achei a marca" como "é verdadeira":</strong> o erro mais grave, e o que o golpista conta que você faça.</li>
      <li><strong>Enviar foto íntima ou de documento para checar:</strong> mande só o que você aceitaria que fosse processado por um serviço online. A privacidade importa, como mostra <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">este guia</a>.</li>
      <li><strong>Checar um print em vez do arquivo original:</strong> captura de tela e recompressão podem degradar sinais. Quando possível, use o arquivo recebido, não um print dele.</li>
      <li><strong>Ignorar a edição parcial:</strong> uma foto verdadeira com rosto trocado ainda engana. O resultado "parte da imagem" merece atenção.</li>
      <li><strong>Usar o detector como árbitro final:</strong> ele é uma pista. Quem responde pela decisão, como pagar ou compartilhar, é você.</li>
    </ul>

    <h2>O que esperar daqui para frente</h2>
    <p>A tendência é que mais empresas marquem seu conteúdo e que a procedência vire padrão, mas isso depende de adesão e de a marca sobreviver a cortes e reenvios. Para acompanhar a pesquisa, vale ler a notícia sobre o <a href="/noticias/synthid-bio-deepmind-marca-dagua-proteinas-ia">SynthID aplicado a proteínas de IA</a> e a pesquisa que usa luz para <a href="/noticias/ucla-ia-luz-detecta-deepfakes-elight">detectar deepfakes</a>. Até lá, o hábito mais útil é o mesmo de sempre: desconfiar do que gera pressa e conferir a origem. Para seguir a discussão sobre ética e regras, visite a categoria <a href="/categoria/futuro">Futuro do Trabalho</a>.</p>
  `,
  faq: [
    {
      question: "Como saber se uma imagem foi feita por IA no Gemini?",
      answer:
        "Envie a imagem ao app Gemini, pelo botão de adicionar arquivos, e pergunte se ela foi gerada por IA. O Gemini procura a marca SynthID e dá uma análise. Funciona para conteúdo feito com ferramentas do Google; para outras IAs, a resposta é só uma estimativa.",
    },
    {
      question: "O Gemini detecta imagens do ChatGPT ou de outras IAs?",
      answer:
        "A página de ajuda do Google diz que o Gemini só consegue reconhecer conteúdo criado com as ferramentas de IA do Google. Imagem de outro gerador não tem a marca SynthID, então o Gemini pode apenas dar um palpite. Não use essa resposta como prova de que a imagem é real.",
    },
    {
      question: "Se o Gemini não achar o SynthID, a imagem é verdadeira?",
      answer:
        "Não necessariamente. Segundo o Google, sem a marca a imagem pode ter sido gerada por outros sistemas de IA. A ausência de marca prova pouco. Combine o teste com a checagem da origem, a busca reversa de imagem e a conferência em fontes confiáveis.",
    },
    {
      question: "Dá para verificar vídeo e áudio também?",
      answer:
        "Sim, segundo a página de ajuda atual do Gemini. Os limites informados são vídeos com menos de 90 segundos e áudios com menos de 1 hora, um arquivo por envio, até 100 MB. Há também uma cota diária aproximada de 10 arquivos de cada tipo, sujeita a mudança.",
    },
    {
      question: "É de graça verificar imagens no Gemini?",
      answer:
        "A página de ajuda pede uma conta pessoal ou uma conta qualificada do Workspace e não menciona cobrança específica para a verificação, apenas uma cota por 24 horas. Condições mudam, então confira a página oficial do Gemini antes de depender do recurso em larga escala.",
    },
  ],
};
