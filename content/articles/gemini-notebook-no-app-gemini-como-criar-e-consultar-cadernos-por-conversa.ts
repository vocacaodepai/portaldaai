import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "gemini-notebook-no-app-gemini-como-criar-e-consultar-cadernos-por-conversa",
  title: "Gemini Notebook no app Gemini: criar e consultar cadernos",
  seoTitle: "Gemini Notebook no app Gemini: como usar @",
  excerpt:
    "O Gemini Notebook virou app conectado no Gemini: veja como usar o @, o que dá para pedir, quem tem acesso, como desligar e quais cuidados tomar com seus dados.",
  metaDescription:
    "Gemini Notebook como app conectado: digite @Gemini Notebook no chat para criar cadernos, adicionar fontes e fazer perguntas. Veja acesso, controles e limites.",
  category: "ferramentas",
  date: "2026-10-24",
  readTime: 7,
  imageQuery: "student notebook laptop study desk",
  seed: 630,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Desde 23/10/2026 o Gemini Notebook pode ser usado direto do chat do Gemini como app conectado: basta digitar @Gemini Notebook e pedir para criar, editar ou consultar cadernos.",
    "Segundo o Google, o recurso vale para clientes do Workspace, assinantes individuais e contas pessoais, vem ligado por padrão e começa desligado no Espaço Econômico Europeu.",
    "Dá para desligar em Configurações, Apps conectados, e administradores controlam o acesso pelas configurações do Gemini e do Gemini Notebook.",
  ],
  content: `
    <p>O Gemini Notebook agora funciona como app conectado dentro do próprio Gemini: você digita @Gemini Notebook no chat e pede, em linguagem natural, para criar um caderno, adicionar fontes, salvar anotações ou responder perguntas com base no que já está guardado. O anúncio saiu no blog de novidades do Google Workspace em 23/10/2026.</p>

    <p>Na prática, isso poupa um passo para quem estuda ou pesquisa. Em vez de abrir o Gemini Notebook em outra aba para montar o caderno e voltar ao chat para conversar, as duas coisas acontecem na mesma conversa. Este guia explica o que o recurso faz, quem tem acesso, como ligar e desligar, exemplos de pedido e os cuidados que valem antes de colocar material pessoal ou de trabalho. Os dados aqui vêm de páginas oficiais do Google; o texto não alega teste próprio.</p>

    <h2>O que é o Gemini Notebook e o que muda com o app conectado</h2>

    <p>O Gemini Notebook, que muita gente conheceu como NotebookLM, é um espaço onde você reúne fontes (documentos, páginas, vídeos) sobre um assunto e conversa só com esse material. A mudança de nome e de lugar do produto está explicada em <a href="/artigos/gemini-notebook-antigo-notebooklm-o-que-mudou">Gemini Notebook, o antigo NotebookLM</a>. Segundo a <a href="https://support.google.com/notebooklm/answer/16206563" target="_blank" rel="noopener noreferrer">página de ajuda do Google sobre cadernos</a>, consultada em 24/10/2026, cada caderno é uma coleção independente de fontes para um projeto e não acessa outros cadernos.</p>

    <p>O que a novidade acrescenta é a porta de entrada. Um app conectado é um serviço que o Gemini pode usar a seu pedido, como já acontece com agenda, mapas e YouTube, assunto de <a href="/artigos/apps-conectados-do-gemini-agenda-maps-e-youtube-como-usar">apps conectados do Gemini</a>. Agora o Gemini Notebook entra nessa lista. A <a href="https://workspaceupdates.googleblog.com/2026/10/take-actions-on-your-notebooks-from-Gemini-Notebook-directly-in-the-Gemini-app.html" target="_blank" rel="noopener noreferrer">postagem do blog do Workspace</a> descreve o objetivo como gerenciar e consultar cadernos dentro dos chats por linguagem natural.</p>

    <h2>Como usar: o @ e os pedidos que funcionam</h2>

    <p>O caminho é simples. Em uma conversa no app do Gemini, digite @Gemini Notebook e escreva o que quer. Segundo o Google, o Gemini também pode perceber quando o pedido tem a ver com seus cadernos e usar o app automaticamente. Os exemplos da própria postagem mostram quatro tipos de ação:</p>

    <ul>
      <li><strong>Criar, editar ou apagar um caderno:</strong> "Crie um Gemini Notebook sobre tendências do mercado de energia solar".</li>
      <li><strong>Adicionar, atualizar ou remover fontes:</strong> "Adicione uma cópia desta conversa ao meu caderno do curso de Biologia".</li>
      <li><strong>Listar cadernos e fontes:</strong> "Mostre a lista de fontes do meu caderno sobre parques nacionais".</li>
      <li><strong>Responder usando o contexto do caderno:</strong> "O que meus cadernos dizem sobre a migração das borboletas?".</li>
    </ul>

    <p>Para o dia a dia de um estudante brasileiro, os pedidos ficam assim:</p>

    <pre><code>@Gemini Notebook crie um caderno chamado "Direito do Consumidor - prova de novembro".
@Gemini Notebook adicione esta conversa como fonte no caderno "Direito do Consumidor - prova de novembro".
@Gemini Notebook, com base só nos meus cadernos, quais são os 5 pontos que mais se repetem sobre prazo de garantia?
@Gemini Notebook liste as fontes do caderno "Direito do Consumidor - prova de novembro".</code></pre>

    <p>Repare no detalhe "com base só nos meus cadernos". Quando você quer que a resposta venha do material guardado, e não do conhecimento geral do modelo, diga isso no pedido. Assim fica mais fácil conferir de onde veio cada informação.</p>

    <h2>Quem tem acesso e como ligar ou desligar</h2>

    <p>De acordo com o Google, o recurso está disponível para todos os clientes do Google Workspace, assinantes do Workspace Individual e usuários com contas pessoais do Google, e estava liberado para os domínios de lançamento rápido e agendado no dia do anúncio. A postagem não cita edições específicas nem idiomas, então confira no seu app se o @ aparece.</p>

    <table>
      <thead>
        <tr><th>Quem</th><th>Como funciona</th></tr>
      </thead>
      <tbody>
        <tr><td>Usuário comum</td><td>Vem ligado por padrão; para ajustar, abra Configurações, Apps conectados, no app do Gemini</td></tr>
        <tr><td>Usuário no Espaço Econômico Europeu</td><td>Começa desligado; precisa ativar por conta própria</td></tr>
        <tr><td>Administrador do Workspace</td><td>O app vem ligado por padrão; o acesso depende das configurações do Gemini e do Gemini Notebook</td></tr>
        <tr><td>Grupo ou unidade organizacional</td><td>Só quem tem o Gemini e o Gemini Notebook ligados pode usar o app</td></tr>
      </tbody>
    </table>

    <p>Na conta pessoal, a <a href="https://support.google.com/gemini/answer/13695044" target="_blank" rel="noopener noreferrer">página de ajuda sobre apps conectados</a> (consultada em 24/10/2026) diz que é preciso estar logado, que a disponibilidade varia por local, idioma e dispositivo, e que, no computador, a lista fica em Personalizar, Conectores. Se você já mexeu no menu de personalização, vale rever <a href="/artigos/menu-personalizar-do-gemini-skills-apps-e-controle-para-admins">o menu Personalizar do Gemini</a>, onde skills e apps convivem.</p>

    <h2>Exemplo: preparar uma prova em 3 sessões de estudo</h2>

    <p>Imagine uma estudante de administração em Recife com prova de contabilidade em duas semanas. Ela tem três PDFs de aula, um vídeo de revisão e um resumo feito por ela. Eis uma rotina possível, usando o app conectado:</p>

    <ol>
      <li><strong>Sessão 1 (30 minutos):</strong> cria o caderno pelo chat, adiciona as fontes e pede a lista do que ficou guardado, para conferir se nada ficou de fora.</li>
      <li><strong>Sessão 2 (40 minutos):</strong> faz perguntas ao caderno sobre os pontos que não entendeu e salva as explicações boas como anotações.</li>
      <li><strong>Sessão 3 (30 minutos):</strong> usa o caderno para gerar material de revisão, como <a href="/artigos/mapa-mental-com-ia-resumir-materia-e-estudar-com-o-gemini-notebook">mapa mental</a> e <a href="/artigos/flashcards-com-ia-estudar-melhor-notebooklm-e-anki">flashcards</a>.</li>
    </ol>

    <p>A página de ajuda do Gemini Notebook lista saídas como notas, resumos em áudio e vídeo, mapas mentais, relatórios, tabelas, flashcards, questionários, apresentações e infográficos. O resumo em vídeo tem texto próprio em <a href="/artigos/resumo-em-video-no-gemini-notebook-formatos-estilos-e-limites">formatos, estilos e limites do resumo em vídeo</a>, e as apresentações em <a href="/artigos/apresentacao-no-gemini-notebook-como-revisar-o-roteiro-antes-de-gerar">como revisar o roteiro antes de gerar</a>. Quem quiser expandir a pesquisa antes de montar o caderno pode combinar com o <a href="/artigos/gemini-deep-research-como-usar-limites-e-planos">Deep Research do Gemini</a>.</p>

    <h2>Cuidados com privacidade e com o que a IA devolve</h2>

    <p>Ligar um app conectado significa dar ao Gemini permissão para mexer em algo seu. A página de ajuda dos apps conectados traz uma frase importante: o Gemini não acessa informações pessoais ou conteúdo desses serviços sem a sua permissão. Ainda assim, o app pode criar, editar e apagar cadernos a pedido, então confira o que foi feito antes de seguir. Um erro de digitação em "apague o caderno" pode custar material de semanas.</p>

    <p>Outros cuidados práticos:</p>

    <ul class="checklist">
      <li>Não coloque no caderno documentos com dados de clientes, senhas ou informações que a empresa não autorizou, e releia as regras da <a href="/artigos/politica-de-uso-de-ia-na-pequena-empresa-regras-simples-para-a-equipe">política de uso de IA</a> do seu trabalho.</li>
      <li>Lembre que o compartilhamento tem regras próprias: a ajuda do Google avisa que visualizadores podem alcançar fontes e artefatos mesmo no modo de chat, e que links públicos abrem para quem tiver o endereço.</li>
      <li>Trate as respostas como rascunho. A mesma página alerta que as saídas são geradas por IA e que não devem ser usadas como conselho médico, jurídico ou financeiro.</li>
      <li>Revise o histórico e as atividades salvas, como ensina o texto sobre <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">apagar histórico e usar chat temporário</a>.</li>
      <li>Entenda o básico de <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade em IA</a> antes de subir material sensível.</li>
    </ul>

    <h2>Quando vale usar o app e quando abrir o caderno direto</h2>

    <p>O chat é ótimo para tarefas rápidas: criar um caderno, jogar nele uma conversa útil, perguntar algo pontual. Para trabalho mais pesado, como organizar dezenas de fontes, escolher estilos de apresentação ou revisar saídas longas, a tela própria do Gemini Notebook continua mais confortável, porque mostra fontes e resultados lado a lado. O app conectado soma uma entrada nova, não substitui o resto.</p>

    <p>Também vale comparar com o resumo de textos soltos. Se você só precisa de um resumo único, <a href="/artigos/como-usar-ia-para-resumir-pdfs-artigos-e-textos-longos">resumir PDFs e textos longos</a> é mais direto. Se o plano é transformar o conteúdo em áudio para vender ou publicar, veja <a href="/artigos/podcast-com-ia-como-ganhar-dinheiro-usando-notebooklm">podcast com IA usando NotebookLM</a>. E se a dúvida é sobre limites de uso, a escolha entre planos está em <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">qual plano do Gemini escolher</a>. Para quem cuida de conectar ferramentas, o <a href="/artigos/mcp-model-context-protocol-o-que-e-e-como-conecta-agentes-de-ia">protocolo MCP</a> explica a ideia por trás dos apps conectados.</p>

    <h2>Limites e o que ainda não se sabe</h2>

    <p>A postagem do Google não informa limites de uso, de armazenamento ou de número de fontes para o app conectado, e a página de ajuda dos cadernos manda os limites de uso para outro artigo. Também não há menção a idiomas. Por isso, evite tratar o recurso como infinito e confira a página oficial antes de planejar um projeto grande. Como o lançamento é recente, é provável que o nome dos menus mude nas próximas semanas.</p>

    <p>Se quiser testar sem risco, crie um caderno de prova só com material seu e peça três ações: criar, listar fontes e fazer uma pergunta. Veja o resultado, ajuste os pedidos e só depois leve fontes mais importantes. Para acompanhar as novidades das ferramentas do Google e de outras plataformas, visite a <a href="/categoria/ferramentas">categoria de ferramentas</a>.</p>
  `,
  faq: [
    {
      question: "Como usar o Gemini Notebook dentro do app Gemini?",
      answer:
        "Em uma conversa do Gemini, digite @Gemini Notebook e escreva o pedido em linguagem natural, como criar um caderno, adicionar uma fonte ou perguntar algo sobre o conteúdo guardado. Segundo o Google, o Gemini também pode acionar o app sozinho quando o pedido tiver relação com seus cadernos.",
    },
    {
      question: "O app conectado do Gemini Notebook é gratuito?",
      answer:
        "O anúncio do Google diz que está disponível para clientes do Workspace, assinantes individuais e contas pessoais, mas não detalha limites por plano. Os limites de uso dos cadernos ficam em outra página de ajuda, então consulte a documentação oficial antes de depender do recurso em um projeto grande.",
    },
    {
      question: "Como desligar o Gemini Notebook como app conectado?",
      answer:
        "Na conta pessoal, abra Configurações e depois Apps conectados no app do Gemini e ajuste o Gemini Notebook. Em contas de trabalho ou escola, o administrador controla o acesso pelas configurações do Gemini e do Gemini Notebook, e a opção pode estar fora do seu alcance.",
    },
    {
      question: "O Gemini pode apagar meus cadernos por engano?",
      answer:
        "O app pode criar, editar e apagar cadernos a pedido, então um comando mal escrito pode ter efeito real. Escreva pedidos claros, com o nome exato do caderno, confira o resultado depois de cada ação e mantenha uma cópia dos arquivos originais fora do caderno.",
    },
    {
      question: "O recurso funciona na Europa?",
      answer:
        "Segundo o Google, no Espaço Econômico Europeu o app começa desligado por padrão para os usuários, enquanto no resto do mundo vem ligado. Disponibilidade, idioma e dispositivo podem variar, por isso vale confirmar no seu aplicativo se o @Gemini Notebook aparece.",
    },
  ],
};
