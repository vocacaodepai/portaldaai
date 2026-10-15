import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer",
  title: "Dados da empresa no ChatGPT: o que o funcionário pode colar",
  seoTitle: "Dados da empresa no ChatGPT: o que pode colar",
  excerpt:
    "Dados da empresa no ChatGPT e em outras IAs: veja o que pode, o que não pode, como anonimizar planilhas e textos e como pedir autorização ao chefe sem medo.",
  metaDescription:
    "Dados da empresa no ChatGPT: um guia para o funcionário saber o que colar, o que anonimizar e o que nunca enviar, com semáforo, prompts prontos e modelo de pedido ao chefe.",
  category: "carreira",
  articleSubcategory: "mentalidade-e-adaptacao",
  date: "2026-10-15",
  readTime: 8,
  imageQuery: "office worker laptop confidential documents",
  seed: 337,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Antes de colar qualquer coisa numa IA, pergunte se aquele dado é da empresa, de cliente ou pessoal: se for, só use com autorização, em ferramenta aprovada ou depois de anonimizar.",
    "Os serviços de IA podem guardar conversas e, segundo o Google, parte delas é revisada por pessoas, então a regra mais segura é não inserir o que você não quer que seja lido por terceiros.",
    "Quem pergunta antes e propõe regras claras costuma ser visto como alguém responsável, e isso ajuda na carreira mais do que usar a IA escondido.",
  ],
  content: `
    <p>Colar dados da empresa no ChatGPT ou em outra IA só é seguro quando você tem autorização, usa uma ferramenta aprovada pela empresa ou retira antes tudo o que identifica clientes, pessoas e segredos de negócio. Na dúvida, não cole: anonimize, resuma ou pergunte ao responsável de TI, ao jurídico ou ao seu gestor.</p>

    <p>A tentação é enorme. Você tem uma planilha de 200 linhas, um contrato de 30 páginas ou uma ata cheia de nomes, e a IA resolveria em um minuto. O problema é que a ferramenta que você usa de graça, na conta pessoal, não é necessariamente a que a sua empresa contratou, e o que você cola sai do seu controle. Neste guia você vê o que as fontes oficiais dizem sobre revisão e guarda de conversas, um semáforo para decidir em segundos, como anonimizar, um modelo para pedir autorização e os erros que podem custar o emprego. Quem quer o lado empresa da história encontra no texto de <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">LGPD para pequeno negócio que usa IA</a>.</p>

    <h2>Por que o que você cola importa</h2>

    <p>Quando você envia um texto para uma IA, ele passa por um serviço de terceiros. A <a href="https://support.google.com/gemini/answer/13594961?hl=pt-BR" target="_blank" rel="noopener noreferrer">central de privacidade do Gemini</a>, consultada em 15/10/2026, traz um aviso direto: um subconjunto de conversas é analisado por revisores humanos, incluindo prestadores de serviço treinados pelo Google, e a orientação é não inserir informações confidenciais que você não queira que sejam revisadas.</p>

    <p>A mesma página explica que conversas revisadas por humanos e dados relacionados podem ser mantidos por até três anos, mesmo depois de você excluir a atividade, e que, com a opção de manter atividade desligada, as conversas são retidas por 72 horas. Os prazos variam por empresa e por plano, e o Gemini é só um exemplo: ChatGPT, Copilot e outros têm regras próprias, por isso o hábito certo é ler a política da ferramenta que você usa. Para entender o cenário geral, veja <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a>.</p>

    <p>Além do risco técnico, há o risco de contrato e de lei. Dados de clientes e de colegas são dados pessoais, e a Autoridade Nacional de Proteção de Dados (ANPD) lembra, na <a href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados" target="_blank" rel="noopener noreferrer">página sobre titulares de dados</a>, que o controlador, ou seja, quem decide sobre o tratamento, responde pelos direitos que a LGPD dá às pessoas. Quem responde, no fim, costuma ser a empresa, mas quem fez o vazamento pode responder internamente.</p>

    <h2>O semáforo: verde, amarelo e vermelho</h2>

    <p>Use esta tabela como atalho. Ela é um guia geral, e a política da sua empresa sempre vale mais.</p>

    <table>
      <thead>
        <tr><th>Cor</th><th>Tipo de dado</th><th>O que fazer</th></tr>
      </thead>
      <tbody>
        <tr><td>Verde</td><td>Texto público, rascunho sem nomes, ideias genéricas, perguntas de conhecimento</td><td>Pode usar, revisando o resultado</td></tr>
        <tr><td>Amarelo</td><td>Planilhas, atas, e-mails e relatórios internos sem dados pessoais</td><td>Só com autorização ou depois de anonimizar nomes, valores e marcas</td></tr>
        <tr><td>Vermelho</td><td>CPF, endereço, dados de saúde, contratos, senhas, código-fonte, estratégia, folha de pagamento, dados de cliente identificável</td><td>Não cole em IA externa, salvo ferramenta aprovada e regra escrita</td></tr>
      </tbody>
    </table>

    <p>Dado de saúde, financeiro ou de crianças merece cuidado extra. O guia de <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher ferramenta de IA com segurança</a> traz um checklist para avaliar a ferramenta antes de usar.</p>

    <h2>Conta pessoal ou conta da empresa</h2>

    <p>Esse é o ponto que mais gera problema. Muita empresa contrata versões corporativas de assistentes de IA, com contrato próprio e regras de tratamento de dados, e proíbe o uso da conta pessoal para trabalho. Sem contrato corporativo, tudo que você digita fica sob os termos de um serviço de consumidor. A página de privacidade do Google deixa claro que o uso com contas de trabalho ou escola pode estar sujeito a outros termos de tratamento de dados, e isso mostra por que a conta importa.</p>

    <p>Regra simples: se a empresa fornece uma ferramenta, use essa. Se não fornece, pergunte antes de usar uma conta pessoal. E não confie no modo anônimo do navegador, que não muda o que o serviço faz com o texto. O texto sobre <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">apagar histórico do Gemini e usar chat temporário</a> mostra o que o chat temporário muda e o que não muda.</p>

    <h2>Como anonimizar antes de usar a IA</h2>

    <p>Muitas tarefas não precisam do dado real. Para analisar uma planilha, a IA não precisa saber que o cliente se chama Maria. Troque identificadores por rótulos:</p>

    <ul class="checklist">
      <li>Nomes de pessoas e empresas por Cliente A, Cliente B, Fornecedor 1.</li>
      <li>CPF, CNPJ, e-mail, telefone e endereço removidos, não apenas escondidos.</li>
      <li>Valores exatos por faixas ou por números redondos fictícios, se o valor não for o ponto da análise.</li>
      <li>Nomes de produtos ainda não lançados por códigos genéricos.</li>
      <li>Metadados de arquivos (autor, empresa) limpos antes de enviar.</li>
    </ul>

    <p>Atenção: dados combinados podem identificar uma pessoa mesmo sem o nome, como cargo raro mais cidade. Na dúvida, resuma em vez de colar. Exemplo hipotético: uma analista precisa entender por que as vendas de uma loja caíram em setembro. Em vez de colar a base de 200 clientes, ela monta uma tabela com 6 linhas (região, mês, ticket médio e quantidade) e pede a leitura dos padrões. O guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> mostra como fazer esse tipo de análise.</p>

    <h2>Prompts prontos para trabalhar com segurança</h2>

    <h3>1. Peça uma estrutura em vez de analisar o dado real</h3>

    <pre><code>Tenho uma planilha de vendas com as colunas: data, região, produto, quantidade, valor. Não vou enviar os dados. Explique passo a passo como analisar a queda de vendas de um mês para outro no Excel, com fórmulas e uma tabela dinâmica.</code></pre>

    <h3>2. Reescreva sem identificar</h3>

    <pre><code>Reescreva o texto abaixo trocando nomes de pessoas por [Pessoa 1], [Pessoa 2], empresas por [Empresa A], e removendo números de documentos, e-mails e telefones. Mantenha o sentido. Depois liste o que você removeu, para eu conferir.</code></pre>

    <p>Atenção: o prompt 2 só protege se você mesmo conferir a versão limpa antes de colar em uma IA diferente, ou se a ferramenta for aprovada. Fazer a limpeza na própria IA já envia o texto original, então prefira limpar à mão ou com um recurso local do seu computador.</p>

    <h3>3. Pedido de autorização ao gestor</h3>

    <pre><code>Escreva um e-mail curto e profissional para meu gestor pedindo autorização para usar IA em [tarefa], informando que não usarei dados pessoais nem contratos, que revisarei tudo antes de entregar e que posso testar por 30 dias com uma ferramenta que a empresa indicar. Tom cordial, até 120 palavras.</code></pre>

    <p>Esse e-mail é o primeiro passo de uma proposta maior. O modelo de <a href="/artigos/proposta-de-piloto-de-ia-para-o-chefe-modelo-de-uma-pagina">proposta de piloto de IA para o chefe</a> mostra como estruturar o teste de 30 dias.</p>

    <h2>Casos do dia a dia: o que fazer em cada um</h2>

    <h3>Ata de reunião</h3>
    <p>Gravar e resumir reunião com IA é útil, mas há pessoas falando, às vezes de temas sensíveis. Avise os participantes e use ferramenta aprovada. O guia de <a href="/artigos/ia-para-reunioes-transcricao-resumo-ata-automatica">IA para reuniões</a> traz os cuidados.</p>

    <h3>Contratos</h3>
    <p>Contrato quase sempre tem cláusula de confidencialidade. Colar o texto inteiro numa IA externa pode violar isso. Veja o guia de <a href="/artigos/ia-para-contratos-revisar-documentos-juridicos-mais-rapido">IA para contratos</a> e peça orientação do jurídico.</p>

    <h3>E-mails com clientes</h3>
    <p>Cole só o necessário, sem assinatura, telefone e dados do cliente. Peça à IA a estrutura de resposta e preencha os dados você mesmo.</p>

    <h3>Código-fonte e documentos estratégicos</h3>
    <p>Para quem programa ou trabalha com planejamento, o risco é maior. Segredo de negócio e código proprietário só entram em ferramenta aprovada. Atenção também a <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection</a>, quando uma IA lê páginas e e-mails com instruções escondidas.</p>

    <h2>Erros comuns</h2>

    <ul class="checklist">
      <li>Achar que "ninguém vai ver". A página de privacidade do Google fala em revisão humana de parte das conversas.</li>
      <li>Usar conta pessoal para trabalho sem avisar a empresa.</li>
      <li>Colar a base inteira "só para testar".</li>
      <li>Confiar no resultado sem conferir, o que gera outro tipo de problema: <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a>.</li>
      <li>Esconder o uso. Quem avisa e propõe regras tende a ganhar confiança, e isso se reflete na <a href="/artigos/avaliacao-de-desempenho-no-trabalho-como-ia-ajuda-a-se-destacar">avaliação de desempenho</a>.</li>
      <li>Tomar o assunto como bobagem de TI. Vazamento de dados pode ter consequências disciplinares e legais, que dependem do contrato e da política da empresa, então consulte o RH ou o jurídico.</li>
    </ul>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Proponha ao seu time uma regra de uma página com três linhas: o que pode, o que precisa de anonimização e o que é proibido. Quem escreve a regra vira referência, e o caminho está no guia de <a href="/artigos/como-se-tornar-referencia-em-ia-na-empresa-sem-ser-do-ti">como se tornar referência em IA na empresa</a>.</p></div>

    <h2>E se eu já colei algo que não devia?</h2>

    <p>Não esconda. Avise o seu gestor ou a área de segurança o quanto antes, diga o que foi enviado, quando e em qual ferramenta, e siga as orientações. Apagar o histórico da conversa ajuda, mas pode não bastar, já que a página do Google informa que conversas revisadas podem permanecer por até três anos. Empresas costumam tratar quem comunica rápido de forma bem diferente de quem omite. Se o dado for de clientes, a empresa decide se há comunicação à ANPD, que mantém um canal de comunicação de incidentes de segurança.</p>

    <p>Para lidar com a pressão de saber o que fazer com IA no trabalho sem ter todas as respostas, leia <a href="/artigos/como-lidar-pressao-de-ter-que-saber-tudo-de-ia-no-trabalho">como lidar com a pressão de saber tudo de IA</a>. E para ver o que continua valendo ser humano nessa história, <a href="/artigos/habilidades-humanas-que-a-ia-nao-substitui-no-trabalho">habilidades humanas que a IA não substitui</a>.</p>

    <h2>Seu próximo passo</h2>

    <p>Esta semana, procure a política de uso de IA da sua empresa. Se não existir, mande o e-mail do prompt 3 ao seu gestor e pergunte qual ferramenta é aprovada. Enquanto isso, use IA só com texto público e com dados anonimizados. Para mais guias sobre trabalho e IA, acesse a categoria <a href="/categoria/carreira">carreira com IA</a>.</p>
  `,
  faq: [
    {
      question: "Posso colar dados da empresa no ChatGPT?",
      answer:
        "Só com autorização da empresa, em ferramenta aprovada ou depois de anonimizar tudo que identifica clientes, pessoas e segredos de negócio. A conta pessoal gratuita não tem o contrato que uma empresa costuma exigir. Na dúvida, não cole e pergunte ao gestor, ao jurídico ou a TI.",
    },
    {
      question: "A IA lê o que eu escrevo?",
      answer:
        "Pode. A central de privacidade do Gemini informa que um subconjunto de conversas é revisado por pessoas, inclusive prestadores de serviço, e pede para não inserir informações confidenciais. Cada ferramenta tem suas regras de retenção e revisão, então leia a política da que você usa.",
    },
    {
      question: "Anonimizar os dados resolve o problema?",
      answer:
        "Ajuda muito, mas não resolve tudo. Remova nomes, documentos, e-mails e telefones, e cuide de combinações que identificam alguém, como cargo raro e cidade. Se o texto ainda revelar segredo de negócio, não envie a ferramenta externa sem autorização. Resumir costuma ser mais seguro que colar.",
    },
    {
      question: "Posso usar a IA para trabalho se a empresa não tem política?",
      answer:
        "Pergunte antes e proponha regras mínimas: sem dados pessoais, sem contratos, revisão de tudo antes de usar e teste pequeno. Sem política, o risco é seu e da empresa. Registrar a autorização por e-mail protege você e mostra responsabilidade profissional.",
    },
    {
      question: "O que fazer se eu colei algo sensível sem querer?",
      answer:
        "Avise o gestor ou a área de segurança logo, informando o que foi enviado, quando e onde. Apagar o histórico ajuda, mas pode não bastar. Esconder costuma piorar a situação, e avisar rápido permite que a empresa avalie o risco e, se necessário, tome as providências cabíveis.",
    },
  ],
  quiz: [
    {
      question: "Qual atitude é mais segura antes de usar a IA com uma planilha de clientes?",
      options: [
        "Colar a planilha inteira para ganhar tempo",
        "Anonimizar ou resumir os dados e, se possível, usar ferramenta aprovada",
        "Usar o modo anônimo do navegador",
      ],
      answer: 1,
      explanation:
        "Anonimizar ou resumir tira da conversa o que identifica pessoas. O modo anônimo do navegador não muda o que o serviço faz com o texto enviado.",
    },
  ],
};
