import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "contratos-recibos-e-certificados-automaticos-como-servico-modelo-no-docs-e-planilha",
  title: "Contratos, recibos e certificados automáticos como serviço",
  seoTitle: "Documentos automáticos como serviço: modelo e planilha",
  excerpt:
    "Venda geração automática de contratos, recibos e certificados: modelo no Google Docs, planilha, PDF com Apps Script, limites do Google, assinatura e preço.",
  metaDescription:
    "Documentos automáticos como serviço: monte o modelo no Docs, ligue à planilha, gere PDFs com Apps Script e IA, respeite os limites do Google e saiba cobrar.",
  category: "monetizacao",
  articleSubcategory: "automacao-e-agentes",
  date: "2026-11-19",
  readTime: 9,
  imageQuery: "office desk printed contract documents",
  seed: 1230,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Documentos automáticos são um modelo no Google Docs com campos marcados, uma planilha com os dados de cada cliente e um script que gera um PDF por linha, sem copiar e colar.",
    "O Google limita quantos documentos e e-mails um script cria por dia, e esses limites mudam entre conta pessoal e Google Workspace, então o volume do cliente define o desenho do serviço.",
    "Você vende a automação e a manutenção, nunca o texto jurídico: cláusula de contrato é responsabilidade do cliente e do advogado dele, e a assinatura segue as regras da assinatura eletrônica no Brasil.",
  ],
  content: `
    <p>Documentos automáticos como serviço é montar, para um pequeno negócio, um sistema que gera contratos, recibos e certificados sozinho: um modelo no Google Docs com campos marcados, uma planilha com os dados de cada cliente e um script que cria um PDF por linha. O dono para de abrir o arquivo antigo, apagar o nome do cliente anterior e torcer para não esquecer nenhum campo.</p>

    <p>É um serviço de automação com dor fácil de explicar, porque todo mundo já mandou um documento com o nome errado. Este guia mostra para quem vender, como montar o modelo e a planilha, o script com ajuda de IA, os limites do Google, o cuidado com assinatura e dados pessoais, um exemplo com números e como cobrar. Dados das páginas oficiais conferidos em 19/11/2026.</p>

    <h2>Quem compra documentos automáticos</h2>

    <p>O cliente ideal emite o mesmo tipo de documento muitas vezes por mês, mudando só alguns dados. Alguns perfis comuns:</p>

    <ul>
      <li><strong>Escolas de idiomas, música e cursos livres:</strong> certificado de conclusão, declaração de matrícula e recibo de mensalidade.</li>
      <li><strong>Prestadores de serviço recorrente:</strong> contrato de prestação com nome, valor e prazo trocados a cada cliente.</li>
      <li><strong>Pequenas imobiliárias e administradoras:</strong> recibo de aluguel e termo de vistoria a partir da mesma base.</li>
      <li><strong>Organizadores de eventos e palestras:</strong> certificado de participação para dezenas de pessoas de uma vez.</li>
    </ul>

    <p>Se o negócio emite dois documentos por mês, não há o que vender: um modelo bem feito resolve. E se o volume é de milhares por dia, o caso pede um sistema próprio, fora deste escopo. O meio do caminho, de 20 a algumas centenas por mês, é onde o serviço se paga. Quem já oferece <a href="/artigos/formulario-de-pedido-e-orcamento-como-servico-google-forms-planilha-e-aviso-com-ia">formulário de pedido e orçamento com planilha</a> tem aqui um próximo passo natural para o mesmo cliente.</p>

    <h2>Como montar o modelo e a planilha</h2>

    <p>Tudo começa com duas peças no Google Drive do cliente. A primeira é o modelo no Google Docs: o documento final, com logotipo e texto aprovados, em que cada dado variável vira um marcador como CAMPO_NOME ou CAMPO_VALOR. Use letras, números e sublinhado nos marcadores, sem chaves nem colchetes, porque a função de troca de texto do Google lê o padrão como expressão regular, conforme a documentação do Apps Script.</p>

    <p>A segunda é a planilha, com uma linha por documento e uma coluna por marcador. Para um recibo de mensalidade, a estrutura fica assim:</p>

    <table>
      <thead>
        <tr><th>Coluna</th><th>Marcador no modelo</th><th>Exemplo</th></tr>
      </thead>
      <tbody>
        <tr><td>A: Nome</td><td>CAMPO_NOME</td><td>Mariana Souza</td></tr>
        <tr><td>B: CPF</td><td>CAMPO_CPF</td><td>000.000.000-00</td></tr>
        <tr><td>C: Valor</td><td>CAMPO_VALOR</td><td>R$ 420,00</td></tr>
        <tr><td>D: Referência</td><td>CAMPO_SERVICO</td><td>Mensalidade de novembro</td></tr>
        <tr><td>E: Data</td><td>CAMPO_DATA</td><td>19/11/2026</td></tr>
        <tr><td>F: Link do PDF</td><td>(preenchido pelo script)</td><td>link gerado</td></tr>
      </tbody>
    </table>

    <p>Formate valor e data como texto já no padrão brasileiro, para o PDF não sair com ponto no lugar de vírgula. Se a base do cliente chega bagunçada, com nomes em caixa alta e CPF sem pontuação, cobre a arrumação à parte: o serviço de <a href="/artigos/limpeza-e-padronizacao-de-planilhas-como-servico-pacote-preco-e-lgpd-com-ia">limpeza e padronização de planilhas</a> mostra como orçar essa etapa.</p>

    <h2>O script que gera os PDFs, com ajuda de IA</h2>

    <p>O Apps Script fica em Extensões, no Google Planilhas. A função abaixo copia o modelo para uma pasta, troca os marcadores, salva o PDF e grava o link na coluna F. Linhas que já têm link são puladas, então rodar de novo não duplica nada.</p>

    <pre><code>function gerarDocumentos() {
  var aba = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Clientes");
  var linhas = aba.getDataRange().getDisplayValues();
  var modelo = DriveApp.getFileById("ID_DO_MODELO");
  var pasta = DriveApp.getFolderById("ID_DA_PASTA");
  for (var i = 1; i &lt; linhas.length; i++) {
    if (linhas[i][5] !== "") continue;
    var copia = modelo.makeCopy("Recibo - " + linhas[i][0], pasta);
    var doc = DocumentApp.openById(copia.getId());
    var corpo = doc.getBody();
    corpo.replaceText("CAMPO_NOME", linhas[i][0]);
    corpo.replaceText("CAMPO_CPF", linhas[i][1]);
    corpo.replaceText("CAMPO_VALOR", linhas[i][2]);
    corpo.replaceText("CAMPO_SERVICO", linhas[i][3]);
    corpo.replaceText("CAMPO_DATA", linhas[i][4]);
    doc.saveAndClose();
    var pdf = pasta.createFile(copia.getAs("application/pdf"));
    aba.getRange(i + 1, 6).setValue(pdf.getUrl());
  }
}</code></pre>

    <p>Você não precisa escrever isso do zero. Um assistente de IA adapta o código às colunas do cliente e explica cada linha, desde que você teste sempre numa cópia da planilha. O guia de <a href="/artigos/google-apps-script-com-ia-servico-de-automacao-para-sheets-e-gmail">Apps Script com IA como serviço</a> mostra o fluxo completo de autorização e gatilhos. Um pedido que funciona bem:</p>

    <pre><code>Tenho uma planilha do Google com a aba "Clientes" e estas colunas: [liste as colunas].
Tenho um modelo no Google Docs com os marcadores [liste os marcadores].
Escreva uma função do Apps Script que, para cada linha sem link na última coluna,
copie o modelo para a pasta de ID [ID], troque os marcadores, salve em PDF e grave o link.
Explique cada linha em português simples e diga quais permissões o script vai pedir.</code></pre>

    <p>Para testar sem expor dados reais, peça também uma base fictícia:</p>

    <pre><code>Crie 10 linhas de dados fictícios para testar um gerador de recibos, com nomes
brasileiros inventados, CPF no formato 000.000.000-00 com zeros, valores em reais
e datas de novembro de 2026. Inclua 2 linhas com problema (campo vazio e nome
muito longo) para eu ver como o documento se comporta.</code></pre>

    <h2>Os limites do Google que mudam o desenho do serviço</h2>

    <p>A <a href="https://developers.google.com/apps-script/guides/services/quotas" target="_blank" rel="noopener noreferrer">página de cotas do Apps Script</a> indica, na consulta de 19/11/2026, 250 documentos criados por dia em contas pessoais (como gmail.com) e 1.500 em contas Google Workspace, além de 6 minutos por execução nos dois casos. Para envio por e-mail com o MailApp, o limite é de 100 destinatários por dia na conta pessoal e 1.500 no Workspace. O Google avisa que esses números podem mudar, então confira antes de fechar o projeto.</p>

    <p>Na prática, cada documento gerado conta como uma criação, e o PDF ocupa espaço no Drive do cliente. Uma escola com 45 recibos por mês cabe com folga numa conta pessoal. Um evento com 600 certificados no mesmo dia não cabe: divida em lotes ou use uma conta Workspace. Se a execução passar de 6 minutos, o script para no meio, por isso a coluna de link é importante, porque permite rodar de novo de onde parou.</p>

    <p>Para mandar o documento por e-mail sem script, a <a href="https://support.google.com/mail/answer/12921167?hl=pt-BR" target="_blank" rel="noopener noreferrer">mala direta do Gmail</a> personaliza mensagens a partir de uma planilha, mas só em planos qualificados (Workspace Individual, Business Standard e Plus, entre outros) e com limite de 1.500 envios de mala direta por dia dentro do total da conta. Quem prefere ferramentas visuais pode comparar caminhos no artigo <a href="/artigos/make-ou-zapier-qual-automacao-com-ia-vale-mais-a-pena">Make ou Zapier</a>.</p>

    <h2>Assinatura eletrônica, contrato e dados pessoais</h2>

    <p>Gerar o documento é a parte técnica. Assinar é outra camada. O Google Docs tem assinatura eletrônica nativa, que aceita até 10 signatários e 200 campos por documento, mas, segundo a <a href="https://support.google.com/docs/answer/12315692?hl=pt-BR" target="_blank" rel="noopener noreferrer">Central de Ajuda do Google Docs</a>, está disponível para Workspace Individual e para planos como Business Standard e Plus quando o administrador ativa o recurso. Conta gratuita não tem.</p>

    <p>No Brasil, a <a href="https://www.gov.br/governodigital/pt-br/identidade/assinatura-eletronica/saiba-mais-sobre-a-assinatura-eletronica" target="_blank" rel="noopener noreferrer">página do Governo Digital sobre assinatura eletrônica</a> explica que a Lei 14.063/2020 trata das assinaturas nas relações com o poder público e que a MP 2.200-2/2001 rege os demais casos, com três níveis: simples, avançada (como a assinatura gov.br, com conta prata ou ouro) e qualificada (com certificado ICP-Brasil). Qual nível o contrato do cliente exige é decisão dele e do advogado dele, não sua.</p>

    <p>Essa é a regra de ouro do serviço: você automatiza o modelo que o cliente aprovou e não escreve cláusula jurídica. A IA pode ajudar a <a href="/artigos/ia-para-contratos-revisar-documentos-juridicos-mais-rapido">revisar contratos mais rápido</a>, mas não substitui o advogado. E recibo não é nota fiscal: quem é MEI e presta serviço continua obrigado a emitir a <a href="/artigos/nota-fiscal-de-servico-para-mei-nfs-e-nacional-com-ajuda-de-ia">NFS-e nacional</a> quando a regra pede.</p>

    <p>Nome, CPF e endereço são dados pessoais. Deixe a planilha e a pasta na conta do cliente, entre como editor só durante o projeto e combine quem apaga os PDFs antigos. O <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio</a> ajuda a fechar essa conversa. Nunca cole a base real de clientes num chatbot para testar o código: use os dados fictícios do prompt acima.</p>

    <h2>Exemplo: escola de idiomas com 45 alunos</h2>

    <p>Imagine uma escola de inglês em Ribeirão Preto com 45 alunos. Todo mês, a secretária abre o recibo do mês anterior, troca nome, valor e referência e exporta o PDF, e no fim do semestre repete o processo com os certificados. Ela calcula gastar cerca de 3 horas por mês nisso, com erro de nome de vez em quando.</p>

    <p>O pacote proposto tem dois modelos (recibo e certificado), uma planilha ligada à lista de alunos, o script com botão no menu, uma pasta por mês no Drive e um vídeo curto de uso. Como raciocínio de preço, e não como tabela de mercado: se a implantação toma 8 horas e você valoriza sua hora em R$ 70, o piso fica em R$ 560. Uma mensalidade de R$ 90 cobre ajuste de modelo, aluno novo com campo diferente e dúvida da secretária. Faça a sua conta com os seus números e compare com as horas que o cliente economiza.</p>

    <p>Para não virar projeto sem fim, escreva o escopo antes de começar. O guia de <a href="/artigos/briefing-e-escopo-para-freelancer-com-ia-evite-retrabalho-e-cliente-que-pede-mais">briefing e escopo para freelancer</a> tem um roteiro, e a <a href="/artigos/propostas-comerciais-com-ia-como-fechar-mais-contratos">proposta comercial com IA</a> ajuda a apresentar o pacote. Se o cliente quiser suporte contínuo, o modelo de <a href="/artigos/retainer-de-automacao-mensalidade-suporte-e-contrato-para-freelancer">retainer de automação</a> organiza a mensalidade.</p>

    <h3>Checklist de entrega</h3>

    <ul class="checklist">
      <li>Modelo aprovado por escrito pelo cliente, com todos os marcadores listados.</li>
      <li>Planilha com valor e data em formato de texto brasileiro.</li>
      <li>Script testado com dados fictícios, incluindo linha com campo vazio.</li>
      <li>Coluna de link preenchida, para rodar de novo sem duplicar.</li>
      <li>Pasta de saída organizada por mês, seguindo a lógica de <a href="/artigos/organizacao-de-arquivos-no-drive-como-servico-pacote-e-preco-com-ia">organização de arquivos no Drive</a>.</li>
      <li>Vídeo de uso e documento curto explicando os limites diários do Google.</li>
      <li>Acesso de editor retirado ao fim do projeto, se não houver mensalidade.</li>
    </ul>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Marcador com caractere especial:</strong> chaves, colchetes e pontos têm significado na busca por expressão regular, e a troca falha sem aviso claro.</li>
      <li><strong>Prometer validade jurídica:</strong> você entrega a automação, não o parecer. Nível de assinatura e texto do contrato ficam com o cliente.</li>
      <li><strong>Ignorar o limite diário:</strong> gerar centenas de certificados de uma vez numa conta pessoal trava no meio do evento.</li>
      <li><strong>Script na sua conta:</strong> se o gatilho e os arquivos ficam com você, o cliente perde tudo quando o contrato acaba.</li>
      <li><strong>Vender para quem emite pouco:</strong> dois documentos por mês não justificam implantação nem mensalidade.</li>
    </ul>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Comece pelo certificado de curso ou evento: é o documento com menor risco jurídico, volume alto num dia só e resultado fácil de mostrar no portfólio. Quem vende cursos, como no guia de <a href="/artigos/como-criar-e-vender-curso-online-usando-ia">criar e vender curso online com IA</a>, costuma precisar dele.</p></div>

    <p>Documentos automáticos são um serviço pequeno, de entrega rápida e fácil de demonstrar com um antes e depois. Monte um exemplo com dados fictícios, grave a tela gerando 10 PDFs em segundos e use isso na conversa com o primeiro cliente. Para juntar esse serviço a outros num pacote maior, veja <a href="/artigos/como-vender-pacotes-de-automacao-de-ia-para-negocios-locais">como vender pacotes de automação para negócios locais</a>. Nada aqui garante clientes ou renda: o resultado depende de achar quem tenha essa dor e de entregar o que foi combinado.</p>
  `,
  faq: [
    {
      question: "Precisa saber programar para vender documentos automáticos?",
      answer:
        "Não é preciso ser programador, mas é preciso entender o que o script faz. Um assistente de IA escreve e explica o código do Apps Script a partir das colunas da planilha e dos marcadores do modelo. Sua parte é testar com dados fictícios, ajustar erros e documentar o uso para o cliente antes de cobrar pela entrega.",
    },
    {
      question: "Dá para gerar documentos automáticos com conta gratuita do Google?",
      answer:
        "Dá. O Apps Script funciona em contas pessoais, com limite de 250 documentos criados por dia e 100 destinatários de e-mail por dia, segundo a página de cotas do Google consultada em 19/11/2026. Para volumes maiores, ou para usar a mala direta do Gmail e a assinatura eletrônica do Docs, o cliente precisa de um plano Google Workspace qualificado.",
    },
    {
      question: "Contrato gerado automaticamente tem validade jurídica?",
      answer:
        "A automação só preenche o modelo, então a validade depende do texto do contrato e da forma de assinatura. No Brasil, a MP 2.200-2/2001 e a Lei 14.063/2020 tratam das assinaturas eletrônicas simples, avançada e qualificada. Quem define o texto e o nível de assinatura é o cliente com o advogado dele, não quem monta a automação.",
    },
    {
      question: "Recibo gerado pela planilha substitui nota fiscal?",
      answer:
        "Não. Recibo comprova um pagamento entre as partes, mas não substitui a nota fiscal quando a legislação exige a emissão. Quem é MEI e presta serviço deve seguir as regras da NFS-e nacional. O gerador de recibos é útil para organizar e enviar comprovantes, sem mudar as obrigações fiscais do negócio.",
    },
    {
      question: "Quanto cobrar por um serviço de documentos automáticos?",
      answer:
        "Não existe tabela oficial. Calcule as horas de implantação (modelo, planilha, script, testes e vídeo) e multiplique pelo valor da sua hora, somando uma mensalidade se houver suporte. Compare com as horas que o cliente economiza por mês. Comece com um pacote fechado de um ou dois modelos e deixe novos modelos como serviço extra.",
    },
  ],
};
