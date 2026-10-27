import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "google-vault-exporta-conversas-do-gemini-no-workspace-o-que-o-admin-ve",
  title: "Google Vault e Gemini no Workspace: o que o admin pode exportar",
  seoTitle: "Google Vault exporta conversas do Gemini: o que muda",
  excerpt:
    "O Google Vault passou a filtrar e exportar conversas do Gemini no Workspace. Veja quem tem, como o admin usa, o que sai no arquivo e o que o funcionário deve saber.",
  metaDescription:
    "Google Vault com Gemini no Workspace: exportação filtrada por usuário e data, edições com acesso, limites ainda pendentes e o que a equipe deve saber sobre privacidade.",
  category: "ferramentas",
  date: "2026-10-27",
  readTime: 6,
  imageQuery: "server room data archive lock",
  seed: 830,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Desde 22/10/2026, administradores do Google Workspace podem filtrar e exportar pelo Google Vault as conversas dos usuários com o Gemini no Workspace, por usuário, unidade organizacional e período.",
    "A exportação sai em JSON e inclui os pedidos do usuário, as respostas da IA, anexos gerados e links para os arquivos do Workspace citados, mas só vale para conversas feitas com o histórico ligado.",
    "Não há configuração para o usuário comum: quem usa o Gemini no trabalho deve assumir que o administrador pode ter acesso a esse histórico e evitar colar dados que não deveria.",
  ],
  content: `
    <p>O Google Vault passou a permitir que administradores do Google Workspace filtrem e exportem as conversas dos usuários com o Gemini no Workspace. O anúncio saiu em 22/10/2026 e vale para conversas feitas nos apps Gmail, Drive, Docs, Planilhas, Apresentações e Meet com o histórico ligado. Para quem usa o Gemini no trabalho, a consequência é direta: o que você pede à IA pode ser exportado pela empresa.</p>

    <p>Este guia explica o que o Vault é, quem tem acesso, como o administrador faz a exportação, o que vai no arquivo, quais limites o Google ainda lista e o que um dono de pequena empresa ou um funcionário deve fazer a partir disso. A novidade é de governança e não de produtividade, e não muda como o Gemini responde.</p>

    <h2>O que é o Google Vault</h2>

    <p>Segundo a <a href="https://knowledge.workspace.google.com/vault/getting-started/vault-overview?hl=pt-BR" target="_blank" rel="noopener noreferrer">visão geral do Vault</a>, consultada em 27/10/2026, ele é uma ferramenta de governança de informação e descoberta eletrônica do Workspace. Permite criar regras de retenção e bloqueios legais, pesquisar dados e exportá-los. A lista de serviços cobre Gmail, Drive, Agenda, Chat, gravações do Meet, Grupos, Sites e as conversas do app Gemini e do Gemini no Workspace.</p>

    <p>O Vault não é um arquivo morto: guarda dados mesmo depois que o usuário os apaga e esvazia a lixeira, mas só quando há regras de retenção configuradas. Ele também mantém um registro de auditoria das ações dos administradores, que não pode ser editado. Esse tipo de ferramenta é comum em empresas que precisam atender exigências jurídicas, auditorias ou investigações internas.</p>

    <h2>O que mudou em 22 de outubro</h2>

    <p>A <a href="https://workspaceupdates.googleblog.com/2026/10/google-vault-now-supports-filtered-exports-for-Gemini-in-Workspace.html" target="_blank" rel="noopener noreferrer">publicação do blog Workspace Updates</a> descreve a novidade como exportação filtrada para o Gemini no Workspace. O administrador pode restringir por contas de usuários ou unidades organizacionais (até 5.000 usuários) e por intervalo de datas, com escolha de fuso horário. O resultado vem em JSON.</p>

    <table>
      <thead>
        <tr><th>Item</th><th>O que o Google informa</th></tr>
      </thead>
      <tbody>
        <tr><td>Quem usa</td><td>Administradores; não há configuração para o usuário final</td></tr>
        <tr><td>O que entra</td><td>Pedidos do usuário, respostas da IA, anexos gerados (como imagens) e links para arquivos e citações</td></tr>
        <tr><td>Quando entra</td><td>Conversas criadas com o histórico de conversas ligado</td></tr>
        <tr><td>Onde</td><td>Gmail, Drive, Docs, Planilhas, Apresentações e Meet</td></tr>
        <tr><td>Liberação</td><td>Disponível para domínios de Lançamento Rápido e Programado</td></tr>
      </tbody>
    </table>

    <h2>Quem tem acesso e o que ainda falta</h2>

    <p>O Google lista como edições com acesso: Business Plus, Frontline Standard e Plus, Enterprise Essentials Plus, Enterprise Standard e Plus, Education Fundamentals, Standard e Plus, além do Vault como complemento. A página geral do Vault também lembra que, a partir de 1º de novembro de 2025, administradores precisam de licença do Vault para continuar usando o serviço, e que usuários cujos dados são pesquisados ou retidos precisam de licença que inclua o Vault. Confira a sua edição antes de contar com isso.</p>

    <p>O próprio anúncio aponta limites. O suporte por API ainda não está disponível e foi prometido em até 14 dias depois da liberação da interface. Regras de retenção e bloqueios legais para o Gemini no Workspace não estão incluídos ainda e são esperados em lançamentos futuros. Isso significa que, por ora, é uma exportação sob demanda e não uma política automática de guarda.</p>

    <h2>Como o administrador faz a exportação</h2>

    <ol>
      <li>Entrar no Vault e abrir a aba Pesquisa.</li>
      <li>Escolher "Gemini no Workspace" na lista de serviços.</li>
      <li>Definir os filtros: usuários ou unidade organizacional, período e fuso horário.</li>
      <li>Clicar em Exportar e baixar o arquivo.</li>
    </ol>

    <p>A visão geral do Vault informa que as exportações ficam disponíveis por 15 dias e depois são excluídas, e que incluem metadados ligando os dados a usuários específicos. Como o Vault registra pesquisas e exportações no log de auditoria, a empresa também consegue saber quem consultou o quê. O administrador pode ainda controlar, por unidade organizacional, o histórico de conversas no console: bloquear exclusão manual ou definir exclusão automática após inatividade.</p>

    <h2>O que isso muda para quem usa o Gemini no trabalho</h2>

    <p>Se a sua empresa usa Workspace, o que você digita no Gemini dentro do Gmail, Docs ou Planilhas pode ficar guardado no histórico e ser exportado pela administração. Isso não é novidade de existência do histórico, mas é novidade de facilidade para recuperar. Trate o assistente como uma ferramenta da empresa: nada pessoal, nada que você não colocaria num e-mail corporativo.</p>

    <p>Quem usa a conta pessoal do Gemini tem outras regras de privacidade, descritas em <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">como apagar o histórico do Gemini e usar o chat temporário</a>. Já o texto sobre <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">colar dados da empresa no ChatGPT</a> serve de régua: o que é confidencial continua confidencial, em qualquer ferramenta. Para um panorama, veja <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber</a>.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Se a sua empresa é pequena e quem administra o Workspace é o próprio dono ou um terceiro, avise a equipe do que ele pode acessar. Transparência evita desconfiança e problemas de LGPD.</p></div>

    <h2>O que o dono de pequena empresa deve fazer</h2>

    <p>Primeiro, descubra se sua edição inclui o Vault. Muitos pequenos negócios usam planos básicos e não têm acesso. Se tiver, defina com o contador ou advogado se há necessidade real de guardar e exportar conversas, e por quanto tempo. Depois, escreva uma regra simples de uso de IA. O modelo de <a href="/artigos/politica-de-uso-de-ia-na-pequena-empresa-regras-simples-para-a-equipe">política de uso de IA na pequena empresa</a> serve de ponto de partida. O <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD</a> ajuda a revisar dados de clientes.</p>

    <p>Um aviso curto para a equipe pode ser gerado com IA e revisado por você:</p>

    <pre><code>Escreva um aviso de 6 linhas, em tom claro e sem ameaça, para a equipe de uma loja com 8 pessoas. Diga que as conversas com o Gemini no Google Workspace podem ser acessadas pela administração para fins de segurança e obrigações legais. Liste 4 coisas que não devem ser coladas na IA: senha, dados completos de clientes, documentos pessoais e informações financeiras sigilosas.</code></pre>

    <p>Quem administra também deve conhecer os controles de IA no console. Dois textos relacionados: o <a href="/artigos/menu-personalizar-do-gemini-skills-apps-e-controle-para-admins">menu Personalizar do Gemini</a> e as <a href="/artigos/instrucoes-personalizadas-do-gemini-no-workspace-onde-valem-e-como-gerenciar">instruções personalizadas no Workspace</a>.</p>

    <h2>Exemplo: escritório de contabilidade com 12 pessoas</h2>

    <p>Um escritório com 12 pessoas usa o Gemini no Gmail e no Docs para rascunhar e-mails e resumir documentos. A sócia, que administra o Workspace, descobre que a edição contratada inclui o Vault. Ela decide: não exportar nada sem motivo; documentar por escrito quando e por que fará uma exportação; avisar a equipe; e proibir a colagem de documentos completos de clientes no assistente. Para o dia a dia, a equipe continua usando o Gemini em rascunhos, como no <a href="/artigos/gemini-no-gmail-escrever-e-responder-emails-mais-rapido">Gemini no Gmail</a>, mas sem dado sensível. Os números do exemplo são ilustrativos.</p>

    <h2>Erros comuns</h2>

    <ul class="checklist">
      <li>Achar que apagar a conversa na tela garante que ela sumiu para a administração.</li>
      <li>Usar o Gemini do trabalho para assuntos pessoais, como saúde ou família.</li>
      <li>Colar dados de clientes sem anonimizar, mesmo sabendo que o histórico fica ligado.</li>
      <li>Administrar sem avisar a equipe, o que cria desconfiança e risco jurídico.</li>
      <li>Supor que a exportação cobre retenção e bloqueios legais: o Google diz que isso ainda não está incluído.</li>
      <li>Confundir o Gemini do Workspace com o app pessoal: as regras mudam.</li>
    </ul>

    <h2>Para acompanhar</h2>

    <p>O Google afirma que a API e as regras de retenção viriam depois, então vale acompanhar o blog Workspace Updates. Se você usa outros recursos de IA do Chat, leia <a href="/artigos/resumo-de-reuniao-no-google-chat-quem-tem-como-funciona-e-limites">resumo de reunião no Google Chat</a> e <a href="/artigos/ask-gemini-no-google-chat-o-que-faz-quem-tem-e-limites">Ask Gemini no Google Chat</a>. Para escolher ferramentas com segurança, o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de escolha de ferramenta de IA</a> ajuda. Mais novidades na <a href="/categoria/ferramentas">categoria Ferramentas</a>.</p>
  `,
  faq: [
    {
      question: "O administrador pode ler minhas conversas com o Gemini no trabalho?",
      answer:
        "Com a novidade do Google Vault de 22/10/2026, administradores com acesso ao Vault podem filtrar e exportar conversas do Gemini no Workspace, quando o histórico estava ligado. O Google informa que não há configuração para o usuário final. Trate o assistente de trabalho como ferramenta da empresa.",
    },
    {
      question: "Quais planos do Workspace têm o Vault?",
      answer:
        "O anúncio lista Business Plus, Frontline Standard e Plus, Enterprise Essentials Plus, Enterprise Standard e Plus, Education Fundamentals, Standard e Plus, e o Vault como complemento. Confira a sua edição na página oficial do Google antes de contar com o recurso.",
    },
    {
      question: "O que vai no arquivo exportado?",
      answer:
        "Segundo o Google, o JSON traz os pedidos do usuário, as respostas da IA, anexos gerados, como imagens, e links para arquivos do Workspace e citações referenciadas. Vale para conversas criadas com o histórico ligado, nos apps Gmail, Drive, Docs, Planilhas, Apresentações e Meet.",
    },
    {
      question: "O Vault já define quanto tempo guardar as conversas do Gemini?",
      answer:
        "Ainda não. O anúncio diz que regras de retenção e bloqueios legais para o Gemini no Workspace não estão incluídos e são esperados em lançamentos futuros. O administrador pode, porém, gerenciar o histórico por unidade organizacional no console, como bloquear a exclusão manual ou definir exclusão automática.",
    },
    {
      question: "Isso vale para o Gemini da minha conta pessoal?",
      answer:
        "Não. A novidade trata do Gemini no Workspace, de contas gerenciadas por uma organização. A conta pessoal segue regras próprias de histórico e privacidade, como a atividade do Gemini, que você mesmo controla. Se usar os dois, separe o que é do trabalho do que é pessoal.",
    },
  ],
};
