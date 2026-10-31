import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-treinara-modelos-com-dados-do-daybreak-blue-antes-protegidos",
  title: "OpenAI vai treinar modelos com sessões do Daybreak Blue, antes vetadas",
  summary:
    "A partir de 29 de novembro, sessões de cibersegurança do Trusted Access passam a treinar modelos da OpenAI. Após a reação, prometeu um opt-out à parte.",
  author: "Bruno Danello",
  sourceName: "The Decoder",
  sourceUrl: "https://the-decoder.com/openai-plans-to-train-models-on-daybreak-blue-cybersecurity-session-data-that-was-previously-off-limits/",
  date: "2026-10-31",
  publishedAt: "2026-10-31T17:35:00-03:00",
  topic: "seguranca",
  imageQuery: "OpenAI logo",
  content: `
    <p>A OpenAI avisou os participantes do programa Trusted Access que, a partir de 29 de novembro de 2026, vai usar para treinar seus modelos os dados das sessões do Daybreak Blue, a faixa de acesso a ferramentas de cibersegurança da empresa. Até agora, esse material ficava fora do treinamento, mesmo para quem tinha desligado a opção de melhorar o modelo para todos. A mudança foi revelada neste sábado, 31 de outubro de 2026, pelo site The Decoder, que cita um e-mail enviado aos membros do programa e compartilhado publicamente pelo pesquisador de segurança Yoav Alon.</p>

    <p>Este texto é análise nossa, feita a partir da reportagem do The Decoder. Não encontramos, até a publicação, um comunicado da OpenAI sobre o tema, e o veículo não reproduz o e-mail por inteiro. Por isso tratamos aqui apenas do que a reportagem descreve e deixamos claro o que ainda não se sabe.</p>

    <h2>O que mudou nas regras de dados</h2>
    <p>Segundo a reportagem, as sessões do Daybreak Blue eram tratadas como um caso à parte. Mesmo quem mantinha desativado o ajuste que permite à OpenAI usar conversas para melhorar os modelos tinha, na prática, uma garantia adicional de que o conteúdo dessas sessões não entraria no treinamento. Com a nova política, essa exceção deixa de existir na data indicada. As interações que forem sinalizadas em revisões de segurança continuam podendo ser usadas para fins de segurança, algo que já valia antes.</p>

    <p>A reação foi rápida. De acordo com o The Decoder, a empresa enviou um segundo e-mail prometendo um opt-out separado para esses dados. A reportagem não explica como esse mecanismo vai funcionar, nem se ele será ativado por padrão ou exigirá que cada participante peça a exclusão. É um detalhe que decide, na prática, quem fica protegido, e por isso vale acompanhar.</p>

    <h2>O que é o Daybreak e quem usa</h2>
    <p>O Daybreak é a forma como a OpenAI organiza o acesso confiável a recursos de segurança digital, o chamado Trusted Access. Nele há níveis: o Daybreak Red, mais restrito, dá acesso antecipado a modelos dedicados à área, e o Daybreak Blue é o nível mais amplo. Já registramos essa estrutura quando tratamos do <a href="/noticias/openai-prepara-gpt-6-cyber-modelo-ciberseguranca">GPT-6 Cyber, modelo de cibersegurança da OpenAI</a>, e quando o Codex ganhou ferramentas para varrer repositórios, em <a href="/noticias/openai-codex-ambientes-nuvem-revisao-codigo-devday">ambientes de nuvem e revisão de código no Codex</a>, com acesso aos modelos da linha Daybreak Blue.</p>

    <p>Quem entra nesse tipo de programa costuma ser pesquisador de vulnerabilidades, equipe de resposta a incidentes ou consultoria de segurança. O que essas pessoas colocam numa sessão pode incluir trechos de código de clientes, descrições de falhas ainda não corrigidas e indícios de ataques em andamento. É material sensível por natureza, e é justamente por isso que a garantia de não treinamento importava.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Para guardar</span>
      <p>Nem toda a informação do programa chegou por canal oficial: o que se sabe vem de um e-mail repassado por um participante e da cobertura do The Decoder. Se você participa do Trusted Access, confira a política atual diretamente com a OpenAI antes do dia 29.</p>
    </div>

    <h2>O fantasma do caso Navier-Stokes</h2>
    <p>O The Decoder liga a polêmica a uma discussão recente entre pesquisadores. Os matemáticos Tristan Buckmaster e Levent Alpöge enviaram rascunhos sobre as equações de Navier-Stokes ao Codex, ferramenta de programação da OpenAI. Pouco depois, a empresa apresentou uma prova própria para o problema e negou ter usado o que eles enviaram para treinar o modelo. A reportagem não cita nenhuma evidência de que o treinamento tenha ocorrido. Ainda assim, a simples suspeita bastou para deixar claro o que pode dar errado quando um laboratório de IA tem acesso a material inédito de quem trabalha na fronteira de uma área.</p>

    <p>É a mesma tensão que aparece em outras decisões recentes do setor. Neste mês, as maiores empresas de IA aceitaram um sinal único para que sites possam recusar o uso de seu conteúdo no treino, como contamos em <a href="/noticias/anthropic-openai-google-microsoft-sinal-unico-robots-txt-bloquear-treino">o sinal único no robots.txt para bloquear o treinamento</a>. A diferença é que, aqui, o dado em disputa não é um texto público da web, e sim o que o usuário digitou dentro de uma ferramenta paga ou restrita.</p>

    <h2>Contexto: a corrida por dados e por caixa</h2>
    <p>A mudança chega num momento em que a OpenAI busca dinheiro e dados de qualidade. Em paralelo, a empresa enfrenta dificuldade para fechar a rodada que planejava, como mostramos em <a href="/noticias/openai-capta-11-bilhoes-de-30-meta-investidores-recuam">a captação de apenas US$ 11 bi dos US$ 30 bi buscados</a>. Dados de sessões de cibersegurança, que trazem exemplos reais de como especialistas procuram falhas e consertam sistemas, são valiosos para melhorar modelos justamente nessa área. É razoável supor, mas não está confirmado, que esse seja o motivo da mudança. A reportagem não traz uma justificativa da OpenAI.</p>

    <p>Também vale lembrar que a segurança dos próprios modelos é tema aberto. O Claude, por exemplo, foi usado em experimentos que mostram como dados aparentemente inofensivos podem ensinar comportamentos indesejados, assunto de <a href="/noticias/anthropic-claude-gera-dados-aparentemente-inofensivos-que-ensinam-ia-a-sabotar">dados que ensinam IA a sabotar</a>. Quanto mais o treinamento depende de dados de uso real, mais pesa a pergunta de quem controla o que entra.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que você nunca tenha ouvido falar do Daybreak, o episódio é um bom lembrete de como as políticas de dados das ferramentas de IA mudam com aviso curto e nem sempre vêm acompanhadas de um comunicado público. Quem usa IA para trabalhar, atender clientes ou prestar serviço no Brasil lida com informações de terceiros, e a LGPD cobra responsabilidade de quem as trata.</p>
    <ul>
      <li>Revise as configurações de dados de cada ferramenta que você usa, em especial as que ficaram "fora do treino" por uma regra específica do plano ou do programa. Elas podem mudar.</li>
      <li>Se você é consultor ou freelancer de segurança, avalie se o contrato com seus clientes permite colar código ou dados deles numa ferramenta cujo treinamento pode mudar.</li>
      <li>Prefira planos com garantia contratual de não treinamento quando o trabalho envolve dados sigilosos, e guarde a versão da política vigente na data do uso.</li>
      <li>Anonimize trechos antes de enviar: troque nomes, chaves e endereços por marcadores, porque o que foi digitado não volta.</li>
      <li>Acompanhe o opt-out prometido. Se você participa do programa, peça a exclusão assim que ela estiver disponível.</li>
    </ul>

    <p>Atualizaremos esta notícia se a OpenAI publicar a política oficial, detalhar o opt-out ou esclarecer quais dados exatamente entram no treinamento e por quanto tempo.</p>
  `,
};
