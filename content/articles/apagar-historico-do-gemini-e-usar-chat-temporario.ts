import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "apagar-historico-do-gemini-e-usar-chat-temporario",
  title: "Histórico do Gemini: como apagar e usar o chat temporário",
  seoTitle: "Histórico do Gemini: apagar conversas e chat temporário",
  excerpt:
    "Veja como apagar o histórico do Gemini, desligar o Keep Activity e usar o chat temporário para proteger sua privacidade, com passo a passo e o que não muda.",
  metaDescription:
    "Histórico do Gemini passo a passo: onde ficam as conversas, como desligar a atividade, mudar o prazo de exclusão e usar o chat temporário com segurança.",
  category: "iniciantes",
  articleSubcategory: "vida-pratica",
  date: "2026-10-11",
  readTime: 7,
  imageQuery: "smartphone privacy lock screen",
  seed: 195,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Com o Keep Activity ligado, suas conversas ficam salvas na atividade do Gemini e podem ser usadas para melhorar os serviços do Google, inclusive modelos de IA.",
    "Você pode desligar a atividade, escolher exclusão automática em 3, 18 ou 36 meses, ou usar o chat temporário para conversas sensíveis.",
    "Desligar o histórico não apaga tudo na hora: as conversas ainda ficam guardadas por 72 horas, e o que já foi revisado por pessoas pode ficar até 3 anos.",
  ],
  content: `
    <p>O histórico do Gemini guarda as conversas que você tem com o assistente do Google, e você pode controlar isso: apagar conversas antigas, desligar o salvamento da atividade ou abrir um chat temporário que não alimenta essa lista. Os controles ficam na página Gemini Apps Activity, no endereço myactivity.google.com/product/gemini.</p>
    <p>Este guia é para quem usa o Gemini no dia a dia e nunca olhou essas configurações. Você vai entender o que é salvo, como mudar o prazo de exclusão, quando vale a pena usar o chat temporário e quais limites continuam valendo mesmo depois de desligar tudo. As regras descritas aqui foram conferidas na página oficial de ajuda do Google em 11/10/2026.</p>

    <h2>O que o Gemini guarda das suas conversas?</h2>
    <p>Segundo a <a href="https://support.google.com/gemini/answer/13594961" rel="noopener noreferrer" target="_blank">página de privacidade do Gemini</a>, quando a configuração Keep Activity está ligada, suas conversas e o que você compartilha com o assistente ficam salvos na sua atividade. O Google usa esse material para melhorar seus serviços, o que inclui o treinamento de modelos de IA generativa.</p>
    <p>A mesma página afirma que o Google não vende suas informações pessoais e que suas conversas não são usadas para mostrar anúncios. Também explica que uma parte das conversas passa por revisores humanos, desconectada da sua conta antes da revisão. Conversas revisadas ficam guardadas por até três anos. Por isso, vale tratar o Gemini como um lugar onde você não escreve tudo, assim como já mostra o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber ao usar IA</a>.</p>

    <h2>Como ver e apagar o histórico do Gemini</h2>
    <p>O caminho é simples e muda pouco entre celular e computador. Entre na página de atividade do Gemini com a mesma conta Google que você usa no aplicativo. Lá aparece a lista do que foi salvo, com data e hora, e opções para excluir itens específicos ou períodos inteiros.</p>
    <ol>
      <li>Acesse myactivity.google.com/product/gemini e entre na sua conta.</li>
      <li>Localize a conversa ou o período que você quer remover.</li>
      <li>Use a opção de excluir ao lado do item, ou a exclusão por intervalo de tempo.</li>
      <li>Confirme e atualize a página para conferir que o item sumiu.</li>
    </ol>
    <p>Um detalhe que muita gente ignora: a página de ajuda avisa que apagar sua atividade não remove as conversas que revisores humanos já processaram. Elas seguem guardadas pelo prazo de até três anos. Excluir é útil para limpar o que está visível e reduzir o que fica salvo daqui para frente, mas não é uma borracha retroativa de tudo.</p>

    <h2>Como desligar o Keep Activity</h2>
    <p>Se você não quer que as conversas fiquem na atividade nem sirvam para treinar modelos, desligue o Keep Activity na mesma página. Depois disso, de acordo com a ajuda oficial, as próximas conversas não aparecem na sua atividade e não são usadas para treinar modelos de IA, a não ser que você envie um feedback sobre uma resposta.</p>
    <p>Existem custos para essa escolha, e vale conhecê-los antes de mexer:</p>
    <ul>
      <li>As conversas ainda ficam armazenadas por 72 horas, para o Gemini conseguir responder a você e para proteger o Google e seus usuários.</li>
      <li>Alguns aplicativos conectados, como o Google Workspace, deixam de estar disponíveis.</li>
      <li>Desligar não apaga dados de outros serviços do Google, como a atividade na Web e em aplicativos.</li>
    </ul>
    <p>Quem usa o assistente junto do e-mail, por exemplo, pode sentir falta da integração. O texto sobre o <a href="/artigos/gemini-no-gmail-escrever-e-responder-emails-mais-rapido">Gemini no Gmail</a> mostra o que depende dessa conexão.</p>

    <h2>Exclusão automática: 3, 18 ou 36 meses</h2>
    <p>Quem prefere manter o histórico, mas sem acumular conversas para sempre, pode usar a exclusão automática. Pela página oficial, o padrão é apagar a atividade depois de 18 meses. Você pode trocar para 3 meses, para 36 meses, ou escolher não excluir automaticamente.</p>
    <table>
      <thead>
        <tr><th>Escolha</th><th>Para quem faz sentido</th><th>Ponto de atenção</th></tr>
      </thead>
      <tbody>
        <tr><td>3 meses</td><td>Quem usa para dúvidas rápidas e não precisa voltar a conversas antigas</td><td>Perde o contexto de projetos longos</td></tr>
        <tr><td>18 meses (padrão)</td><td>Quem quer equilíbrio e não pretende mexer em nada</td><td>Quase um ano e meio de conversas guardadas</td></tr>
        <tr><td>36 meses</td><td>Quem consulta o histórico como arquivo de trabalho</td><td>Mais conteúdo acumulado para proteger</td></tr>
        <tr><td>Nunca excluir</td><td>Quem organiza tudo por conta própria</td><td>Exige faxina manual periódica</td></tr>
      </tbody>
    </table>
    <p>Se você trabalha com tarefas longas que dependem de contexto anterior, pense também em como o assistente guarda informação. O texto sobre <a href="/artigos/memoria-longa-em-ia-assistente-que-lembra-de-voce">memória longa em IA</a> explica essa diferença entre histórico e memória.</p>

    <h2>Chat temporário: quando usar</h2>
    <p>O chat temporário é a saída para conversas pontuais que você não quer ver registradas. A ajuda do Google informa que essas conversas não são usadas para melhorar a IA do Google com revisores humanos. É uma opção prática para uma dúvida de saúde, uma pergunta sobre dinheiro ou um rascunho de mensagem delicada.</p>
    <p>Mesmo assim, ele não transforma o Gemini em cofre. Evite colar senha, número de documento, dado bancário e contrato inteiro de terceiros. O checklist do artigo sobre <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher uma ferramenta de IA com segurança</a> ajuda a decidir o que pode e o que não pode entrar em qualquer chat.</p>
    <h3>Exemplo: três situações do dia a dia</h3>
    <p>Pense em uma professora de Campinas que usa o Gemini para três coisas. Planos de aula: histórico ligado, porque ela retoma o trabalho de uma semana para outra. Dúvida sobre um exame médico da mãe: chat temporário. Mensagem difícil para um colega de escola: chat temporário e, depois, leitura atenta antes de enviar. É uma cena para ilustrar a lógica, não um caso medido: o critério é sempre se você aceitaria ver aquele texto salvo daqui a um ano.</p>

    <h2>Um roteiro de 5 minutos para ajustar sua conta</h2>
    <p>Reserve cinco minutos hoje e faça esta sequência. Não exige conhecimento técnico, só atenção para o que cada opção faz.</p>
    <ul class="checklist">
      <li>Abra a página de atividade do Gemini e leia as últimas conversas salvas.</li>
      <li>Apague o que tiver dado pessoal, de saúde ou de trabalho que não precisa ficar guardado.</li>
      <li>Escolha o prazo de exclusão automática que combina com seu uso.</li>
      <li>Decida se vai manter o Keep Activity ligado ou desligar de vez.</li>
      <li>Combine consigo mesmo: assunto sensível vai para o chat temporário.</li>
    </ul>
    <p>Se você ainda está montando sua rotina com assistentes, o roteiro de <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">como configurar o primeiro assistente de IA pessoal</a> encaixa bem com este passo de privacidade.</p>

    <h2>Erros comuns ao mexer no histórico</h2>
    <ul class="checklist">
      <li>Achar que apagar a conversa na tela apaga tudo: a ajuda oficial diz que o que revisores já processaram segue guardado.</li>
      <li>Desligar o histórico sem saber que integrações com apps conectados podem parar de funcionar.</li>
      <li>Usar o chat temporário e depois colar dado sensível mesmo assim.</li>
      <li>Confiar cegamente na resposta por ter ligado a privacidade: o risco de erro da IA continua, e o guia de <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> mostra como checar.</li>
      <li>Esquecer que cada assistente tem regras próprias. O Gemini, o ChatGPT e o Claude se comportam de formas diferentes, e o comparativo de <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude e Gemini</a> ajuda a escolher.</li>
    </ul>
    <p>Outro erro frequente é pagar um plano achando que ele muda as regras de privacidade. Planos mudam limites e recursos, não necessariamente o tratamento das conversas, então leia a página oficial da sua conta antes de decidir. O texto <a href="/artigos/ia-gratis-ou-paga-o-que-vale-a-pena">IA grátis ou paga</a> trata dessa escolha, e a análise do <a href="/artigos/gemini-3-vale-a-pena-novidades-precos-comparacao-chatgpt">Gemini 3</a> mostra o que cada plano entrega.</p>

    <h2>E a lei? O que a LGPD tem a ver com isso</h2>
    <p>No Brasil, a Lei Geral de Proteção de Dados dá a você direitos sobre seus dados pessoais, e a <a href="https://www.gov.br/anpd/pt-br" rel="noopener noreferrer" target="_blank">ANPD</a> é o órgão que cuida do tema, com canal para o cidadão registrar denúncia de descumprimento. As regras de cada serviço, porém, aparecem nos termos e nas páginas de ajuda de cada empresa. Para entender o cenário regulatório mais amplo, leia sobre a <a href="/artigos/lei-de-ia-no-brasil-o-que-muda-para-quem-usa">lei de IA no Brasil</a>.</p>
    <p>Na prática, o melhor controle é o seu: decidir o que escrever. Um bom hábito é perguntar antes de enviar se aquele texto poderia ser lido por um estranho sem causar problema. Se a resposta for não, ele não pertence a um chat com histórico ligado.</p>

    <p>Faça o ajuste agora e volte aqui se as telas mudarem, porque o Google atualiza menus com frequência. Para mais guias de uso seguro e simples, visite a categoria <a href="/categoria/iniciantes">IA para iniciantes</a> e comece pelos <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">5 erros comuns de quem está começando</a>.</p>
  `,
  faq: [
    {
      question: "Como apagar o histórico do Gemini?",
      answer:
        "Entre em myactivity.google.com/product/gemini com a sua conta, localize a conversa ou o período e use a opção de excluir. A página de ajuda do Google avisa que isso não remove conversas já processadas por revisores humanos, que podem ficar até três anos.",
    },
    {
      question: "O Gemini usa minhas conversas para treinar a IA?",
      answer:
        "Com o Keep Activity ligado, a ajuda oficial diz que o Google pode usar suas conversas para melhorar os serviços, incluindo modelos de IA generativa. Desligando a configuração, as próximas conversas deixam de ser usadas, salvo se você enviar um feedback.",
    },
    {
      question: "Quanto tempo o Gemini guarda minhas conversas?",
      answer:
        "O padrão é excluir a atividade depois de 18 meses, e você pode mudar para 3 ou 36 meses, ou não excluir automaticamente. Com o histórico desligado, as conversas ainda ficam armazenadas por 72 horas para o serviço funcionar.",
    },
    {
      question: "O que é o chat temporário do Gemini?",
      answer:
        "É um tipo de conversa pensado para assuntos pontuais. Segundo o Google, esses chats não são usados para melhorar a IA com revisores humanos. Ainda assim, evite senhas, documentos e dados bancários em qualquer assistente.",
    },
    {
      question: "Desligar o histórico faz o Gemini parar de funcionar?",
      answer:
        "O assistente continua respondendo, mas a ajuda oficial avisa que alguns aplicativos conectados, como o Google Workspace, ficam indisponíveis com a atividade desligada. Teste com calma e reative se perder algo de que você depende.",
    },
  ],
};
