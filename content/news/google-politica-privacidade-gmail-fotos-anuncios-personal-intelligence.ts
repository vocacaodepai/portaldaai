import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-politica-privacidade-gmail-fotos-anuncios-personal-intelligence",
  title: "Google muda política: dados do Gmail e Fotos podem influenciar anúncios",
  summary:
    "A política de privacidade do Google, em vigor desde 16/10, abriu exceção: se você ligar o Personal Intelligence, dados do Gmail, Drive e Fotos podem alimentar anúncios.",
  author: "Bruno Danello",
  sourceName: "Política de Privacidade do Google",
  sourceUrl: "https://policies.google.com/privacy",
  date: "2026-10-25",
  publishedAt: "2026-10-25T16:23:00-03:00",
  topic: "regulacao",
  imageQuery: "Google headquarters Googleplex",
  content: `
    <p>A política de privacidade do Google, atualizada com vigência a partir de 16 de outubro de 2026, ganhou uma ressalva importante sobre anúncios personalizados. A página oficial, disponível em <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer nofollow">policies.google.com/privacy</a>, diz agora que a empresa não mostra anúncios personalizados com base no seu conteúdo do Drive, do Gmail ou do Google Fotos, "a menos que você opte por disponibilizar dados desses serviços para outros serviços do Google que ofereçam suporte a anúncios personalizados". A mudança foi destacada na sexta-feira (23) pela reportagem do <a href="https://arstechnica.com/gadgets/2026/10/updated-google-privacy-policy-says-your-gmail-might-be-used-for-advertising/" target="_blank" rel="noopener noreferrer nofollow">Ars Technica</a>, que a atribui a uma descoberta inicial do Android Authority.</p>

    <h2>O que mudou no texto da política</h2>
    <p>Segundo o Ars Technica, a seção de personalização de anúncios dizia, na versão anterior, de forma direta: "não mostramos anúncios personalizados com base no seu conteúdo do Drive, Gmail ou Fotos". A versão atual mantém a promessa, mas acrescenta a condição de que você não tenha escolhido compartilhar esses dados com outros serviços do Google que aceitem anúncios personalizados. Na prática, a frase deixou de ser uma barreira absoluta e passou a depender de uma escolha sua.</p>
    <p>O texto vigente da política também reforça que a empresa não exibe anúncios personalizados com base em categorias sensíveis, como raça, religião, orientação sexual ou saúde, e que não compartilha com anunciantes informações que identifiquem você, como nome ou e-mail, a menos que você peça. Esses trechos continuam como antes e podem ser conferidos na própria página.</p>

    <h2>O elo com o Personal Intelligence</h2>
    <p>O mecanismo que torna a ressalva relevante é o Personal Intelligence, recurso lançado no início de 2026 que permite entregar dados de vários aplicativos do Google a produtos de IA. A própria política dá o exemplo: se você perguntar algo à Busca sobre uma reserva de hotel recente, ela pode usar os detalhes da reserva que estão no seu e-mail para sugerir o que fazer perto do hotel. O recurso conecta o app Gemini e também funcionalidades como o Modo IA da Busca. Em outubro, o Portal da AI noticiou que o <a href="/noticias/gemini-android-auto-personal-intelligence">Gemini ganhou Personal Intelligence no Android Auto</a>, sempre com opt-in.</p>
    <p>O raciocínio do Ars Technica é que o Gemini, por ora, não exibe anúncios, mas ferramentas de busca com IA podem exibir conteúdo patrocinado. Se resumos e insights tirados dos seus e-mails e fotos entram na resposta do Modo IA, esses mesmos dados passam a fazer parte do contexto que influencia os anúncios exibidos ali. A política atualizada, na leitura da reportagem, deixa isso explícito.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">O que o Google diz</span>
      <p>Em nota citada pelo Ars Technica, o Google afirma que conectar os aplicativos é totalmente opcional, que os anúncios continuam relevantes para a consulta, o contexto da resposta e os interesses do usuário, e que eles "não serão baseados diretamente" na caixa de entrada do Gmail ou na biblioteca do Fotos. A empresa também diz que informações sensíveis não são usadas para personalizar anúncios. Um porta-voz acrescentou que a clarificação não muda a forma como os dados são tratados com parceiros de publicidade, que a empresa não varre toda a caixa de entrada para montar perfil de anúncios e que nada disso é entregue a terceiros.</p>
    </div>

    <h2>Onde está a controvérsia</h2>
    <p>As duas versões convivem sem contradição formal: o Google não lê seu Gmail para escolher anúncios, mas, se você ligar o Personal Intelligence e usar a Busca com IA, o contexto extraído dos seus dados pode moldar a resposta e, por tabela, o anúncio ao lado dela. O Ars Technica critica que o recurso é oferecido por meio de avisos e pop-ups que incentivam a ativação sem explicar todas as consequências, e que muita gente pode tê-lo ligado sem perceber. Essa é uma avaliação da reportagem, não uma conclusão da empresa.</p>
    <p>A reportagem lembra ainda um paralelo com o treinamento de modelos: o Google diz que não usa dados pessoais para treinar IA, mas usa as entradas e saídas dos modelos para esse fim, e há possibilidade de trechos pessoais aparecerem nessas saídas. A empresa afirma que tenta filtrar esse conteúdo dos controles de atividade, sem prometer que sempre consegue.</p>

    <h2>Como conferir e desligar</h2>
    <p>A decisão fica nas suas mãos, e conferir leva poucos minutos. O caminho geral é abrir as configurações da sua Conta Google, verificar se o Personal Intelligence e os apps conectados ao Gemini estão ativos e desligar o que você não usa. A política também aponta o My Ad Center como o lugar para controlar quais informações a empresa usa para personalizar anúncios. Os nomes exatos dos menus podem variar por versão do app e por país, então vale confirmar na própria conta em vez de seguir um roteiro de memória.</p>
    <ul>
      <li><strong>Revise os apps conectados.</strong> Veja quais serviços o Gemini pode acessar. O guia <a href="/artigos/apps-conectados-do-gemini-agenda-maps-e-youtube-como-usar">apps conectados do Gemini</a> explica o que cada conexão libera.</li>
      <li><strong>Ajuste o My Ad Center.</strong> Desative a personalização de anúncios se não quiser que atividade e interesses alimentem o que você vê.</li>
      <li><strong>Limpe o histórico.</strong> Se você já conversou com a IA sobre assuntos pessoais, veja como <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">apagar o histórico do Gemini e usar o chat temporário</a>.</li>
    </ul>

    <h2>O que a política não diz</h2>
    <p>Vale separar o que está confirmado do que é interpretação. Está confirmado, pela página oficial, o texto novo e a data de vigência de 16 de outubro. Está confirmada, pela nota do Google reproduzida no Ars Technica, a posição da empresa de que os anúncios não se baseiam diretamente no conteúdo da caixa de entrada. Não há, nas fontes consultadas, informação sobre mudança específica para usuários no Brasil, sobre a LGPD ou sobre qualquer sanção de reguladores. A política global se aplica a quem usa a Conta Google, mas o alcance prático do Personal Intelligence pode variar por país e por idioma, e o Portal da AI não encontrou confirmação de disponibilidade para todos os mercados.</p>
    <p>Também não há números sobre quantas pessoas ativaram o recurso nem sobre quanto da receita publicitária dependeria dele. Qualquer afirmação nesse sentido seria especulação. O que a mudança revela é uma tendência: quanto mais as assistentes de IA recebem acesso a e-mail, agenda e fotos, mais difícil é manter paredes nítidas entre dados pessoais e publicidade, e mais as políticas passam a descrever exceções condicionadas a escolhas do usuário.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa o Gmail para falar com clientes, receber propostas, contratos e notas fiscais, o conteúdo da sua caixa de entrada é informação do seu negócio e, muitas vezes, de terceiros. Ligar um recurso de IA que consome esses dados é uma decisão de privacidade, não só de produtividade. Para empreendedores e freelancers brasileiros, isso se conecta à responsabilidade com dados de clientes prevista na LGPD.</p>
    <ul>
      <li><strong>Entenda o que você entrega.</strong> O guia <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a> mostra os pontos de atenção.</li>
      <li><strong>Cuide dos dados de clientes.</strong> Veja o <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">checklist de LGPD para pequeno negócio que usa IA</a>.</li>
      <li><strong>Separe conta pessoal e profissional.</strong> Quem trabalha com dados de terceiros deve decidir conscientemente em qual conta liga recursos de IA conectados.</li>
      <li><strong>Caso parecido.</strong> A notícia sobre as <a href="/noticias/whatsapp-instrucoes-ocultas-ia-suporte-regulador-redact">instruções ocultas da IA do WhatsApp</a> trata de transparência de IA com dados de usuários.</li>
    </ul>
    <p>Na prática, três passos valem agora: abrir a configuração da Conta Google e ver se o Personal Intelligence está ativo, decidir se a comodidade compensa o risco para o seu uso, e rever a personalização de anúncios no My Ad Center. Se nada disso fizer sentido para o seu caso, a opção de manter o recurso desligado continua disponível e, segundo o próprio Google, é o que garante que seus dados não entrem nesse circuito.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Política de Privacidade do Google (vigência em 16/10/2026) e reportagem do Ars Technica de 23/10/2026. As citações acima foram traduzidas livremente.</p>
    </div>
  `,
};
