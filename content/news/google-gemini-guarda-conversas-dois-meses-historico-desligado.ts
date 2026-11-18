import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-gemini-guarda-conversas-dois-meses-historico-desligado",
  title: "Gemini vai guardar conversas por 2 meses mesmo com histórico desligado",
  summary:
    "Google separa histórico de treino da IA, mas o chat temporário e o histórico desligado passam de 72 horas para cerca de dois meses de retenção na conta.",
  author: "Bruno Danello",
  sourceName: "Google, Gizmodo",
  sourceUrl: "https://gizmodo.com/google-to-keep-ai-chat-logs-for-two-months-even-with-gemini-history-turned-off-2000841271",
  date: "2026-11-18",
  publishedAt: "2026-11-18T10:12:00-03:00",
  topic: "seguranca",
  imageQuery: "Google Gemini logo",
  content: `
    <p>O Google mudou as regras de privacidade do Gemini e, a partir das próximas semanas, vai guardar as conversas feitas no chat temporário ou com o histórico desligado por cerca de dois meses. Até agora, esse prazo era de 72 horas. A mudança foi anunciada num post do blog oficial da empresa publicado na segunda-feira, 16 de novembro, e aparece na Central de Privacidade dos Apps do Gemini, atualizada na terça, 17. Quem chamou atenção para o tamanho da troca foi o site Gizmodo, que comparou a página nova com a versão arquivada de outubro.</p>
    <p>A notícia vem embrulhada num anúncio que, à primeira vista, é bom para o usuário: o Google passa a separar duas coisas que antes andavam juntas, guardar o histórico de conversas e usar essas conversas para treinar os modelos de IA. Ou seja, agora dá para manter o histórico e, ao mesmo tempo, dizer não ao treino. O custo dessa novidade é que desligar o histórico deixou de significar "o Google apaga em três dias".</p>

    <figure><img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Gemini_language_model_logo.png" alt="Logotipo do Gemini, assistente de inteligência artificial do Google" loading="lazy" /><figcaption>Foto: Google / Wikimedia Commons (domínio público)</figcaption></figure>

    <h2>O que se sabe</h2>
    <p>No post "We're updating controls in the Gemini app" (estamos atualizando os controles no app Gemini), o Google diz que está dando "mais controle sobre quando o histórico de conversas do Gemini é usado para treinar modelos de IA generativa". A peça central é uma nova configuração chamada Histórico. Segundo o texto da empresa, se ela for desligada, as conversas futuras serão salvas "por cerca de dois meses", e servem para responder ao usuário, processar o feedback enviado e proteger o Google, seus usuários e o público. O mesmo post diz que a mudança é "para ajudar a tornar o Gemini mais seguro" e que a novidade chega ao app Gemini no mundo todo nas próximas semanas.</p>
    <p>A Central de Privacidade, na versão de 17 de novembro, detalha o resto. As conversas temporárias e as feitas com o histórico desligado ficam "retidas com a sua conta por cerca de dois meses". As conversas temporárias não são usadas para treinar os modelos do Google. Com o histórico desligado e sem enviar feedback, as conversas futuras também ficam fora do treino. Há uma exceção antiga que continua valendo: conversas lidas por revisores humanos ficam guardadas por até três anos, separadas da conta, mesmo que o usuário apague tudo depois.</p>
    <p>Segundo o Gizmodo, a versão arquivada da mesma página, com data de atualização de 13 de outubro, dizia que as mensagens com o histórico desligado ficavam guardadas por 72 horas, principalmente para que estivessem disponíveis em caso de falha no sistema. Dois meses equivalem a algo perto de 20 vezes esse prazo. O site informa que o Google não quis comentar a mudança nem explicar o motivo e apenas indicou o post do blog.</p>
    <p>O que não muda: quem mantém o histórico ligado continua com o padrão de 18 meses de retenção, com opção de reduzir para 3 meses, aumentar para 36 meses ou guardar sem prazo, e segue podendo apagar conversas manualmente a qualquer momento. Para comparação, o Gizmodo lembra que a OpenAI diz guardar os chats temporários do ChatGPT por até 30 dias e que a Anthropic informa reter as conversas do Claude por 30 dias por padrão, ambas com ressalva de que podem manter certos registros por mais tempo quando necessário. Com a regra nova, o prazo do Google fica em torno do dobro do das duas concorrentes.</p>

    <h2>O que ainda não está confirmado</h2>
    <p>O Google não deu uma data exata de entrada em vigor. A própria tela de configuração do Gemini, segundo o Gizmodo, ainda citava as 72 horas na terça-feira, sinal de que a troca está sendo feita aos poucos. Também não há data específica para o Brasil: o post fala apenas em lançamento global "nas próximas semanas".</p>
    <p>A empresa não explicou o que quer dizer, na prática, com "tornar o Gemini mais seguro", nem por que dois meses e não 30 dias, como as concorrentes. A leitura mais provável, e aqui é análise do Portal da AI, não declaração do Google, é que um prazo maior ajuda a investigar abuso, golpes e tentativas de burlar as proteções do modelo, que muitas vezes só aparecem quando se olha uma sequência de conversas ao longo de semanas.</p>
    <p>Também não está claro se as regras valem do mesmo jeito para contas corporativas e educacionais do Google Workspace, que costumam ter termos próprios, nem se as conversas feitas antes da mudança continuam com o prazo antigo. O post fala em "conversas futuras", o que sugere que a regra nova vale daqui para frente, mas o Google não detalhou esse ponto.</p>

    <h2>Por que isso importa para você</h2>
    <p>Muita gente usa o chat temporário do Gemini justamente para perguntas sensíveis: um exame médico, uma dúvida jurídica, um problema financeiro, um texto com dados de cliente. A lógica era simples: some em três dias. Com a mudança, essas conversas passam a ficar ligadas à sua conta por cerca de dois meses. Elas não vão para o treino da IA, mas existem, ficam com o Google e podem ser lidas por revisores humanos em situações específicas, como já previa a política.</p>
    <p>Na prática, três cuidados resolvem a maior parte do risco. Primeiro, não cole no Gemini, nem no modo temporário, documento com CPF, dados bancários, senha ou informação de saúde de terceiros. Segundo, se o que você quer é só impedir o treino com suas conversas, a novidade ajuda: dá para manter o histórico, que é útil no dia a dia, e desligar o uso para treino. Terceiro, reveja as configurações quando a atualização chegar ao seu app, porque os nomes e a posição das opções vão mudar. O passo a passo atual está no nosso guia <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">Histórico do Gemini: como apagar e usar o chat temporário</a>, que ainda cita o prazo antigo de 72 horas e deve ser lido com essa ressalva.</p>
    <p>Para quem tem pequeno negócio e usa o Gemini com informação de clientes, o ponto é de LGPD: dado pessoal que você manda para uma ferramenta de IA fica guardado pelo prazo do fornecedor, não pelo seu. Vale registrar isso no seu controle interno, como sugerimos no <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio que usa IA</a>, e preferir dados anonimizados sempre que possível.</p>
    <p>A análise do Portal da AI é que o Google acertou ao separar histórico e treino, uma demanda antiga de quem queria praticidade sem virar matéria-prima de modelo. Mas fez a troca mais sensível, a de retenção, sem destaque e sem explicação, num momento em que a empresa já vinha mexendo em como usa dados de Gmail e Fotos, tema que tratamos em <a href="/noticias/google-politica-privacidade-gmail-fotos-anuncios-personal-intelligence">Google muda política: dados do Gmail e Fotos podem influenciar anúncios</a>. Para entender o que cada assistente faz com o que você digita, o texto <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a> ajuda a comparar, e o <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">comparativo entre ChatGPT, Claude e Gemini</a> mostra onde cada um se encaixa no seu trabalho.</p>
  `,
  faq: [
    {
      question: "Por quanto tempo o Gemini vai guardar o chat temporário?",
      answer:
        "Segundo a Central de Privacidade do Gemini atualizada em 17 de novembro de 2026, as conversas temporárias e as feitas com o histórico desligado ficam retidas na conta por cerca de dois meses. Antes, o prazo era de 72 horas.",
    },
    {
      question: "O Google vai usar essas conversas para treinar a IA?",
      answer:
        "Não, segundo o Google. As conversas temporárias não são usadas para treinar os modelos, e com o histórico desligado e sem envio de feedback as conversas futuras também ficam fora do treino. Conversas lidas por revisores humanos podem ficar guardadas por até três anos.",
    },
    {
      question: "Quando a mudança chega ao Brasil?",
      answer:
        "O Google fala em lançamento global no app Gemini nas próximas semanas, sem data específica por país. Vale revisar as configurações de histórico e treino quando a atualização aparecer no seu aplicativo.",
    },
  ],
};
