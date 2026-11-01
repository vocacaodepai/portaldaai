import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "treino-de-ia-com-suas-conversas-como-desligar-no-gemini-e-no-claude",
  title: "Treino de IA com suas conversas: desligar no Gemini e no Claude",
  seoTitle: "Treino de IA com suas conversas: Gemini e Claude",
  excerpt:
    "Suas conversas podem treinar a IA? Veja como desligar no Gemini (Manter atividade) e no Claude (Model Improvement), o que muda com chat temporário e o que continua guardado.",
  metaDescription:
    "Como impedir que o Gemini e o Claude usem suas conversas para treinar a IA: configuração, chat temporário e anônimo, prazos de 72 horas e 18 meses, avaliação humana e o que não colar.",
  category: "iniciantes",
  articleSubcategory: "apps-e-tarefas",
  date: "2026-11-01",
  readTime: 7,
  imageQuery: "smartphone privacy settings toggle hand",
  seed: 991,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "No Gemini, desligar a opção Manter atividade faz com que as conversas futuras não apareçam na atividade nem sejam usadas para treinar a IA, exceto se você enviar feedback; mesmo assim, elas ficam guardadas por 72 horas.",
    "No Claude (planos Free, Pro e Max), o treino com suas conversas depende da opção Model Improvement, de revisão por segurança ou de programas em que você entra; chats anônimos (Incognito) não são usados para melhorar o Claude.",
    "Desligar o treino não é apagar: histórico, feedback e conversas revisadas por pessoas têm regras próprias, então o mais seguro continua sendo não colar dados sensíveis.",
  ],
  content: `
    <p>Para impedir que o Gemini use suas conversas no treino da IA, desligue a opção Manter atividade (em Atividade nos apps do Gemini); no Claude, desligue a opção Model Improvement nas configurações de privacidade. Em ambos os casos, as regras têm exceções e prazos, e desligar o treino não significa apagar tudo. Este guia mostra o passo a passo, o que cada empresa diz e o que fazer na prática.</p>

    <p>Muita gente descobre essa configuração só depois de colar um contrato, um exame ou uma planilha de clientes num chat. Antes de ajustar, vale entender a diferença entre três coisas: guardar o histórico, usar a conversa para treinar o modelo e permitir que uma pessoa leia parte dela. As informações abaixo vêm das páginas oficiais do Google e da Anthropic, conferidas em 01/11/2026. Os nomes dos menus podem mudar, então procure pela opção equivalente se o seu app estiver diferente.</p>

    <h2>O que significa "treinar a IA com a minha conversa"</h2>

    <p>Treinar é usar exemplos reais para melhorar o modelo no futuro. Se a sua conversa entra nesse conjunto, trechos dela podem influenciar versões novas. O guia <a href="/artigos/como-uma-ia-aprende-treinamento-ajuste-fino-e-por-que-erra">como uma IA aprende</a> explica o processo de forma simples. É diferente de a IA lembrar de você: a <a href="/artigos/memoria-longa-em-ia-assistente-que-lembra-de-voce">memória longa</a> é um recurso do seu próprio chat, e a <a href="/artigos/perfil-de-preferencias-na-ia-como-configurar-tom-formato-e-contexto-uma-unica-vez">configuração de preferências</a> também.</p>

    <p>Por isso, o ajuste de privacidade tem três botões separados na prática: o do treino, o do histórico e o da memória. Mexer em um não muda os outros. Quem só quer evitar que o conteúdo apareça no celular compartilhado deve apagar o histórico, como mostra o guia de <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">apagar histórico do Gemini e usar chat temporário</a>.</p>

    <h2>Gemini: Manter atividade, 72 horas e revisão humana</h2>

    <p>Segundo a <a href="https://support.google.com/gemini/answer/13594961" target="_blank" rel="noopener noreferrer">página de ajuda da Atividade nos apps do Gemini</a>, quando a opção Keep Activity (Manter atividade) está ligada, o Google usa a sua atividade para melhorar seus serviços, inclusive para treinar modelos de IA generativa. Áudio e vídeos do Gemini Live, por padrão, não entram nesse uso, e dá para mudar isso numa configuração de áudio.</p>

    <p>Quando você desliga Manter atividade, as conversas futuras não aparecem na atividade e não são usadas para treinar modelos, a menos que você envie feedback. Há uma ressalva importante: as conversas ainda ficam salvas por 72 horas, para o Gemini responder e processar feedback, e o Gemini usa as últimas 24 horas de uma conversa como contexto. Chats temporários seguem a mesma regra de 72 horas.</p>

    <ul class="checklist">
      <li>Abra a página de atividade do Gemini e desligue Manter atividade.</li>
      <li>Escolha o período de exclusão automática: o padrão é 18 meses, com opções de 3 meses, 36 meses ou sem exclusão.</li>
      <li>Revise o que ficou salvo e apague o que não precisa.</li>
      <li>Use chat temporário para assuntos delicados.</li>
    </ul>

    <p>Os pontos de atenção, ainda segundo o Google: um subconjunto das conversas é revisado por pessoas, inclusive prestadores de serviço treinados, com os chats desvinculados da conta; as conversas revisadas são guardadas por até três anos; e apagar a atividade não remove o que já foi revisado. O feedback e o contexto da conversa enviado ficam por até três anos, também desvinculados da conta. Desligar a atividade não apaga dados guardados em outros serviços do Google.</p>

    <h2>Claude: Model Improvement e conversas anônimas</h2>

    <p>A <a href="https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training" target="_blank" rel="noopener noreferrer">página de privacidade da Anthropic</a> diz que as conversas dos planos de consumo (Free, Pro, Max e o Claude Code nesses planos) podem ser usadas no treino, mas só em casos limitados. O primeiro é quando você escolhe permitir: a opção chama-se Model Improvement, fica nas configurações de privacidade (claude.ai/settings/data-privacy-controls) e, se estiver desligada, o seu uso por essa via não ocorre.</p>

    <p>O segundo caso é a revisão por segurança: conversas sinalizadas podem ser usadas para melhorar a detecção de abuso, inclusive com treino de modelos da equipe de segurança. O terceiro é a adesão explícita a programas como o de testadores. As exceções listadas: chats anônimos (Incognito) não são usados para melhorar o Claude, mesmo com Model Improvement ligado, e o conteúdo de conectores, como Google Drive ou servidores MCP, fica de fora, a menos que você copie para o chat.</p>

    <p>Quanto ao feedback (positivo ou negativo), ele é guardado em sistemas protegidos por até cinco anos, com o vínculo à sua conta removido antes do uso, e pode ser usado no treino sem se misturar com as outras conversas. Se você usa projetos para organizar arquivos, veja também <a href="/artigos/projetos-no-claude-como-usar-limites-e-memoria-por-projeto">projetos no Claude</a>, e para o agente proativo da Anthropic, <a href="/artigos/claude-duet-o-que-faz-quem-tem-acesso-e-como-se-preparar-com-seguranca">Claude Duet com segurança</a>.</p>

    <h2>Quadro comparativo</h2>

    <table>
      <thead>
        <tr><th>Ponto</th><th>Gemini</th><th>Claude (planos de consumo)</th></tr>
      </thead>
      <tbody>
        <tr><td>Opção que controla o treino</td><td>Manter atividade</td><td>Model Improvement</td></tr>
        <tr><td>Chat sem treino</td><td>Chat temporário ou atividade desligada (guarda de 72 horas)</td><td>Chat anônimo (Incognito)</td></tr>
        <tr><td>Revisão humana</td><td>Subconjunto das conversas, retido até 3 anos</td><td>Conversas sinalizadas por segurança podem ser usadas</td></tr>
        <tr><td>Feedback</td><td>Guardado até 3 anos, desvinculado da conta</td><td>Guardado até 5 anos, desvinculado do e-mail</td></tr>
        <tr><td>Exclusão automática</td><td>18 meses por padrão (3, 36 ou nunca)</td><td>A página consultada não informa</td></tr>
      </tbody>
    </table>

    <p>A comparação não vale para planos empresariais nem para contas de trabalho ou escola, que têm regras próprias definidas por contrato ou pelo administrador. Se for o seu caso, pergunte ao TI.</p>

    <h2>Quando usar chat temporário ou anônimo</h2>

    <p>Reserve esse modo para assuntos em que você prefere que a conversa não fique na sua conta: uma dúvida de saúde, uma questão familiar, um rascunho de pedido de demissão. Ele não transforma o chat em cofre. Pense no modo temporário como uma conversa que some da sua tela, não como garantia de sigilo absoluto. O guia de <a href="/artigos/perguntar-sintomas-e-exames-para-ia-o-que-pode-e-o-que-nao-pode">perguntar sintomas e exames para a IA</a> mostra o que evitar de qualquer forma.</p>

    <h2>O que nunca colar, com ou sem treino desligado</h2>

    <ul>
      <li>Senhas, códigos de verificação e chaves de acesso. Prefira um <a href="/artigos/gerenciador-de-senhas-como-escolher-comecar-e-usar-com-seguranca">gerenciador de senhas</a> e a <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">chave de acesso</a>.</li>
      <li>CPF, RG, número de cartão e dados bancários completos.</li>
      <li>Documentos de terceiros: clientes, pacientes, alunos, colegas. O texto sobre <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">colar dados da empresa no ChatGPT</a> serve para qualquer IA.</li>
      <li>Fotos de documentos e de crianças.</li>
    </ul>

    <p>Para ver o quadro geral do que você entrega a um assistente, leia <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a>, e para escolher uma ferramenta nova, o <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança</a>. Também vale acompanhar a notícia sobre a <a href="/noticias/google-politica-privacidade-gmail-fotos-anuncios-personal-intelligence">política de privacidade do Google com Gmail e Fotos</a>.</p>

    <h2>Passo a passo de 10 minutos</h2>

    <ol>
      <li>No Gemini, abra a atividade e confira se Manter atividade está ligada ou desligada.</li>
      <li>Defina a exclusão automática (3 meses é um bom começo para quem usa pouco).</li>
      <li>No Claude, abra as configurações de privacidade e veja o estado de Model Improvement.</li>
      <li>Apague conversas antigas com dados sensíveis.</li>
      <li>Combine uma regra para a casa ou a equipe: o que não se cola.</li>
    </ol>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Achar que desligar o treino apaga o histórico.</strong> São botões diferentes.</li>
      <li><strong>Esquecer o feedback.</strong> Clicar em joinha ou enviar feedback pode levar a conversa para análise.</li>
      <li><strong>Confiar em chat temporário para dados sensíveis.</strong> Ele ainda pode ficar guardado por um período.</li>
      <li><strong>Ignorar a conta de trabalho.</strong> As regras da empresa mandam mais que as suas.</li>
      <li><strong>Configurar uma vez e nunca mais olhar.</strong> Termos e menus mudam; revise de vez em quando.</li>
    </ul>

    <h2>Próximo passo</h2>

    <p>Abra agora o Gemini e o Claude e confira as duas opções. Se usa ChatGPT ou outra IA, procure o equivalente em Controles de dados ou Privacidade e leia a política atual, porque este texto não cobre essas ferramentas. Para seguir aprendendo, veja a <a href="/categoria/iniciantes">categoria Iniciantes</a> do Portal da AI.</p>
  `,
  faq: [
    {
      question: "O Gemini usa minhas conversas para treinar a IA?",
      answer:
        "Com Manter atividade ligada, o Google diz que usa a sua atividade para melhorar serviços, inclusive treinar modelos de IA generativa. Com a opção desligada, as conversas futuras não são usadas para treino, a menos que você envie feedback, mas ficam salvas por 72 horas. Uma parte das conversas pode ser revisada por pessoas.",
    },
    {
      question: "Como impedir que o Claude use meus chats para treino?",
      answer:
        "Nos planos Free, Pro e Max, o treino com suas conversas depende da opção Model Improvement, nas configurações de privacidade. Se não estiver autorizada, o uso por essa via não acontece. Conversas sinalizadas por segurança e programas em que você entra por conta própria são exceções. Chats anônimos não são usados para melhorar o Claude.",
    },
    {
      question: "Chat temporário é o mesmo que chat anônimo?",
      answer:
        "São recursos parecidos, de empresas diferentes. No Gemini, chats temporários ficam retidos por 72 horas. No Claude, chats anônimos (Incognito) não são usados para melhorar o modelo. Os detalhes de guarda variam, então leia a página de ajuda de cada app antes de confiar neles para assuntos sensíveis.",
    },
    {
      question: "Apagar o histórico remove a conversa do treino?",
      answer:
        "Nem sempre. No Gemini, apagar a atividade não remove conversas que já foram revisadas por prestadores de serviço, que podem ficar até três anos. Desligar o treino vale para as conversas futuras. Para dados sensíveis, a única medida segura é não colocá-los no chat.",
    },
    {
      question: "As regras valem para conta de trabalho ou de escola?",
      answer:
        "Não necessariamente. Planos empresariais, de equipe e de educação costumam ter termos próprios, definidos por contrato ou pelo administrador. As páginas consultadas descrevem contas pessoais ou planos de consumo. Pergunte ao responsável de TI da sua empresa ou escola antes de supor qual regra vale.",
    },
  ],
};
