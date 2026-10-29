import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "criar-e-editar-arquivos-no-app-gemini-pdf-slides-e-planilhas-como-usar-e-limites",
  title: "Criar e editar arquivos no app Gemini: PDF, slides e planilhas",
  seoTitle: "Criar e editar arquivos no app Gemini: como usar",
  excerpt:
    "O app Gemini agora cria, mostra e edita PDF, slides, planilhas e documentos dentro do chat. Veja como pedir, o que só funciona na web, quem tem e os limites.",
  metaDescription:
    "Criar e editar arquivos no app Gemini: peça PDF, slides, planilha ou documento, edite na tela cheia e abra no Google Slides ou Planilhas. Veja quem tem, limites e cuidados.",
  category: "ferramentas",
  date: "2026-10-29",
  readTime: 7,
  imageQuery: "laptop screen document slides desk",
  seed: 911,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O app Gemini passou a gerar, mostrar uma prévia e permitir a edição de PDFs, documentos, planilhas, apresentações, Markdown, texto e código dentro da própria conversa.",
    "Na web funcionam todos os formatos; no celular, segundo o anúncio do Google, só a prévia e a edição de PDF estão disponíveis, e não há controle de administrador para esse recurso.",
    "Vale pedir o arquivo, revisar cada número e cada frase antes de abrir no Slides, no Planilhas ou baixar, porque o Gemini pode errar e o conteúdo final é sua responsabilidade.",
  ],
  content: `
    <p>Criar e editar arquivos no app Gemini significa pedir ao chatbot um PDF, uma apresentação, uma planilha ou um documento e receber o arquivo já pronto para ver e ajustar na própria conversa, sem copiar e colar em outro programa. O Google anunciou o recurso em 29/10/2026 e ele vale para quem tem acesso ao app, com contas pessoais ou do Workspace.</p>

    <p>Na prática, o chat deixa de ser só um lugar de texto corrido: o resultado aparece como um arquivo, você abre em tela cheia, digita as correções direto no conteúdo e, quando estiver bom, abre no Google Slides ou no Planilhas, baixa ou envia para o Drive. Este guia mostra o que o anúncio oficial diz, como pedir bem, o que só funciona no computador, um exemplo com números para um pequeno negócio e os cuidados antes de usar o arquivo com cliente.</p>

    <h2>O que o app Gemini passou a fazer com arquivos</h2>

    <p>Segundo o <a href="https://workspaceupdates.googleblog.com/2026/10/create-preview-and-edit-files-directly-in-the-Gemini-app.html" target="_blank" rel="noopener noreferrer">anúncio no blog Workspace Updates</a>, consultado em 29/10/2026, o Gemini consegue gerar, mostrar uma prévia e editar arquivos dentro do chat. Você pode expandir para a tela cheia e digitar edições direto no texto, destacar um trecho para fazer uma pergunta sobre ele ou pedir que o Gemini refine o conteúdo.</p>

    <p>Os formatos citados são PDF, documentos, planilhas, apresentações, Markdown, texto simples e código. Em apresentações, o Gemini cria o roteiro ou o conteúdo dos slides, mostra o layout e deixa você ajustar; depois é possível abrir no Google Slides ou baixar em PPTX ou PDF. Em planilhas, ele monta controles, tabelas e modelos de dados a partir do seu pedido e abre no Google Planilhas. Em documentos e PDFs, a edição acontece no chat e o arquivo pode seguir para o Drive.</p>

    <p>É uma evolução natural do que o <a href="/artigos/gemini-canvas-como-criar-documentos-apps-e-slides">Gemini Canvas</a> já fazia com documentos, apps e slides, só que agora com mais tipos de arquivo e com a prévia dentro da conversa.</p>

    <h2>Quem tem acesso e o que só funciona na web</h2>

    <p>De acordo com o mesmo anúncio, o recurso está disponível para clientes do Google Workspace, assinantes do Workspace Individual e usuários com contas pessoais do Google que tenham acesso ao app Gemini. Qualquer pessoa com acesso ao app pode gerar arquivos, independentemente da idade, e o recurso aparece em todos os idiomas em que o app é oferecido, o que inclui o português. Nos domínios de Lançamento Rápido e Lançamento Programado ele já está liberado, e o post não informa outras datas.</p>

    <table>
      <thead>
        <tr><th>Formato</th><th>Prévia e edição na web</th><th>No celular</th></tr>
      </thead>
      <tbody>
        <tr><td>PDF</td><td>Sim</td><td>Sim</td></tr>
        <tr><td>Documentos, planilhas e apresentações</td><td>Sim</td><td>Não, segundo o anúncio</td></tr>
        <tr><td>Markdown, texto e código</td><td>Sim</td><td>Não, segundo o anúncio</td></tr>
      </tbody>
    </table>

    <p>Ou seja: para montar uma apresentação ou uma planilha, use o computador. No celular, o caminho mais seguro é abrir o PDF, ler e fazer ajustes pontuais. Quem usa o Gemini mais pelo aplicativo vai querer conferir também os <a href="/artigos/limites-de-uso-do-gemini-janela-de-5-horas-planos-e-como-economizar">limites de uso do Gemini</a>, porque gerar arquivos longos gasta da mesma cota das conversas.</p>

    <h2>Como pedir um arquivo bom, passo a passo</h2>

    <p>O segredo é dizer o formato, o público, o tamanho e o que não pode entrar. Pedidos vagos geram arquivos vagos. O guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">como escrever comandos que funcionam</a> vale aqui sem mudança.</p>

    <ol>
      <li>Abra o app Gemini no computador e descreva o arquivo desejado com formato, público e objetivo.</li>
      <li>Espere a prévia aparecer e abra em tela cheia para ler tudo, não só o início.</li>
      <li>Corrija direto no texto, ou destaque um trecho e peça uma mudança específica.</li>
      <li>Confira números, nomes, datas e promessas contra a sua fonte original.</li>
      <li>Só então abra no Slides ou no Planilhas, baixe ou envie para o Drive.</li>
    </ol>

    <pre><code>Crie uma apresentação de 8 slides para clientes de um estúdio de pilates em Campinas, explicando o plano trimestral de R$ 420 por mês (duas aulas por semana). Slides: problema, solução, como funciona, horários, preço, política de remarcação, depoimentos (deixe um espaço para eu preencher) e próximo passo. Tom simpático, frases curtas, sem inventar números nem depoimentos.</code></pre>

    <h2>Exemplo com números: orçamento e proposta em uma conversa</h2>

    <p>Imagine a Carla, que tem uma confeitaria e recebe uma encomenda de 120 docinhos para um evento corporativo. Ela pede ao Gemini uma planilha com três abas: ingredientes (nome, quantidade, preço unitário), mão de obra (horas e valor da hora) e preço final com margem de 40%. O Gemini monta o modelo, ela abre a prévia, troca os preços pelos do fornecedor, confere as fórmulas e abre no Google Planilhas.</p>

    <p>Na sequência, ela pede um PDF de uma página com a proposta: itens, prazo de entrega de 5 dias úteis, sinal de 50% e forma de pagamento por Pix. Ela revisa o texto na tela cheia, corrige o CNPJ e baixa o arquivo para enviar pelo WhatsApp. Todo o fluxo cabe em uma conversa só, o que economiza troca de janela, mas não dispensa a conferência: se uma fórmula somar a coluna errada, o orçamento sai errado. Para quem quer ir além, o guia de <a href="/artigos/aprender-planilhas-do-zero-com-ia-formulas-erros-e-exercicios">planilhas do zero com IA</a> ensina a checar fórmulas, e o de <a href="/artigos/fill-with-gemini-no-planilhas-do-google-fontes-por-celula-e-limite-de-3-mil-celulas">Fill with Gemini</a> mostra a outra forma de usar IA dentro da planilha.</p>

    <h2>Como isso se encaixa com outros recursos do Gemini</h2>

    <p>O arquivo criado no chat não substitui os outros caminhos, ele os complementa. Para transformar fontes suas em apresentação com roteiro revisado, o <a href="/artigos/apresentacao-no-gemini-notebook-como-revisar-o-roteiro-antes-de-gerar">Gemini Notebook</a> segue sendo melhor, porque trabalha em cima dos seus documentos. Para publicar um app interativo, o caminho é o de <a href="/artigos/exportar-app-do-gemini-para-o-google-sites-como-publicar-e-cuidados">exportar para o Google Sites</a>. E se você já usa o Gemini dentro de Gmail, Docs e Planilhas, o texto sobre o <a href="/artigos/gemini-entre-apps-do-workspace-criar-pesquisar-e-agendar-sem-trocar-de-app-quem-tem">Gemini entre os apps do Workspace</a> explica o que muda quando a IA atravessa os aplicativos.</p>

    <p>Uma regra simples ajuda a escolher: quer um rascunho rápido a partir de uma instrução? Peça o arquivo no chat. Quer um material baseado em documentos específicos? Use o caderno. Quer dados ligados a uma base grande? Veja a <a href="/artigos/planilha-conectada-ao-bigquery-com-gemini-perguntas-em-linguagem-natural-e-paineis">planilha conectada ao BigQuery</a>.</p>

    <h2>Privacidade e administração</h2>

    <p>O anúncio afirma que não existe controle de administrador para esse recurso: o administrador do Workspace só consegue ligar ou desligar o app Gemini como um todo. Para empresas, isso significa que a decisão é do tipo tudo ou nada, e a política de uso precisa estar clara para a equipe. O texto sobre <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">colar dados da empresa em chatbots</a> traz o raciocínio do que pode e não pode ir para a conversa, e a página sobre <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">apagar o histórico e usar o chat temporário</a> ajuda quando o assunto é sensível.</p>

    <div class="callout-box callout-warn">
      <span class="callout-label">Atenção</span>
      <p>Não coloque no pedido CPF, dados de saúde, contratos fechados ou planilhas de clientes com nome completo. Troque por exemplos fictícios e preencha os dados reais só no arquivo final, já fora do chat.</p>
    </div>

    <h2>Erros comuns ao gerar arquivos com IA</h2>

    <ul class="checklist">
      <li>Aceitar a primeira versão sem abrir em tela cheia e ler todos os slides ou todas as abas.</li>
      <li>Deixar números inventados: pedir "preço médio de mercado" sem fornecer a fonte e usar o valor que o Gemini escolher.</li>
      <li>Esperar que o recurso funcione igual no celular, quando o anúncio só cita o PDF por lá.</li>
      <li>Enviar o PDF ao cliente sem conferir nome, CNPJ, prazo e forma de pagamento.</li>
      <li>Ignorar a cota de uso: arquivos longos e muitos ajustes seguidos podem esgotar o limite do plano antes do fim do trabalho.</li>
      <li>Não guardar a versão final no Drive e perder o arquivo quando o histórico for apagado.</li>
    </ul>

    <p>Se você ainda está decidindo qual plano compensa, o comparativo <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">Google AI Plus, Pro ou Ultra</a> ajuda, e o texto sobre as <a href="/artigos/instrucoes-personalizadas-do-gemini-no-workspace-onde-valem-e-como-gerenciar">instruções personalizadas do Gemini</a> mostra como deixar o tom dos arquivos mais parecido com o seu.</p>

    <h2>Quando vale usar e quando não vale</h2>

    <p>Vale para rascunhos de proposta, planilhas de controle simples, roteiros de apresentação, resumos em PDF e documentos internos de baixo risco. Não vale, sem revisão humana, para contrato, laudo, declaração fiscal, material jurídico ou qualquer documento em que um erro custe dinheiro. Também não é o melhor caminho para arte final de peças de marca, em que o designer ainda resolve melhor.</p>

    <p>Teste hoje com um arquivo pequeno e sem dado sensível: peça uma planilha de 3 colunas, abra a prévia, edite um valor e veja como o fluxo se comporta no seu plano. Para acompanhar as novidades do Google que chegam ao dia a dia, a categoria de <a href="/categoria/ferramentas">ferramentas do Portal da AI</a> reúne os guias mais recentes.</p>
  `,
  faq: [
    {
      question: "O Gemini consegue criar PDF, slides e planilha dentro do chat?",
      answer:
        "Sim. Segundo o anúncio do Google de 29/10/2026, o app Gemini gera, mostra uma prévia e permite editar PDFs, documentos, planilhas, apresentações, Markdown, texto e código. Você pode abrir o resultado em tela cheia, corrigir o texto e depois abrir no Slides ou no Planilhas.",
    },
    {
      question: "Esse recurso do Gemini funciona no celular?",
      answer:
        "Só em parte. O anúncio informa que a prévia e a edição de PDF funcionam na web e no celular, enquanto documentos, planilhas, apresentações, Markdown, texto e código estão disponíveis somente na web. Para montar uma apresentação, o computador é a opção segura.",
    },
    {
      question: "Criar arquivos no Gemini é grátis?",
      answer:
        "O anúncio diz que o recurso está disponível para clientes do Workspace, assinantes do Workspace Individual e contas pessoais com acesso ao app Gemini, e não cita cobrança extra. Os limites de uso do seu plano continuam valendo, então consulte a página oficial do seu plano.",
    },
    {
      question: "O administrador do Workspace pode desligar só a criação de arquivos?",
      answer:
        "Não. O Google afirma que não há controle de administrador para esse recurso. O administrador pode ligar ou desligar o app Gemini inteiro pela Central de Ajuda do Workspace, mas não existe uma chave separada para a geração de arquivos.",
    },
    {
      question: "Posso baixar a apresentação criada no Gemini em PowerPoint?",
      answer:
        "Sim. Para apresentações, o anúncio cita a abertura no Google Slides e o download em PPTX ou em PDF. Revise o layout depois de baixar, porque fontes e espaçamentos podem mudar ao abrir o arquivo em outro programa.",
    },
  ],
};
