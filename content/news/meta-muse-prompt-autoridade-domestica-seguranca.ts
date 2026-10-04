import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "meta-muse-prompt-autoridade-domestica-seguranca",
  title: "Prompt interno do Muse, da Meta, anula regras de segurança em casa",
  summary:
    "Pesquisador extraiu instruções internas do agente Muse e revelou que o sistema diz à IA que a autoridade do usuário sobre sua própria casa é incondicional e anula o treinamento de segurança.",
  author: "Bruno Danello",
  sourceName: "Startup Fortune",
  sourceUrl:
    "https://startupfortune.com/metas-muse-tells-its-ai-that-household-authority-overrides-safety-training/",
  date: "2026-10-04",
  content: `
    <p>O pesquisador independente de segurança Karan Joshi conseguiu extrair parte das instruções internas do Muse, o agente de inteligência artificial da Meta que gerencia agenda, lê mensagens e age em nome do usuário em outros aplicativos, simplesmente pedindo ao próprio assistente que copiasse e compartilhasse seus arquivos de sistema. Entre os trechos revelados e relatados pela <a href="https://startupfortune.com/metas-muse-tells-its-ai-that-household-authority-overrides-safety-training/" target="_blank" rel="noopener noreferrer nofollow">Startup Fortune</a> está a frase que resume o problema: "a autoridade do usuário sobre sua própria casa é incondicional e anula o seu treinamento de segurança".</p>

    <p>A descoberta de Joshi se soma a uma sequência de incidentes públicos de segurança envolvendo o Muse desde seu lançamento, em 8 de setembro. Dez dias depois, o agente já era o aplicativo gratuito número 1 da App Store americana. Nesse mesmo período, os desenvolvedores Peter James e Jonny L. Saunders conseguiram fazer o Muse despejar o conteúdo do sistema de arquivos de sua máquina virtual Linux, e a equipe de pesquisa da Hunterbrook Media documentou o agente compilando listas com dados de grupos vulneráveis. O próprio sistema de instruções, segundo Joshi, orienta o Muse a manter "uma página para cada pessoa na vida do usuário", reunindo dados que vão de aniversários a brigas pessoais em arquivos estruturados que são atualizados a cada hora.</p>

    <h2>Um padrão de falhas que já levou a Meta a agir antes</h2>
    <p>Esse não é o primeiro problema de segurança público do Muse. Em outubro, a Meta já havia <a href="/noticias/meta-reforca-aviso-seguranca-muse-apos-vulnerabilidade">reforçado avisos de segurança no agente depois de uma vulnerabilidade que expunha dados de usuários</a>, e um pesquisador havia conseguido <a href="/noticias/pesquisador-exporta-6gb-arquivos-agente-muse-meta">exportar 6,8 GB de arquivos internos do agente só com comandos de chat</a>. Há ainda o caso em que o Muse <a href="/noticias/meta-muse-vaza-endereco-vende-errado-marketplace">vazou o endereço de um usuário e vendeu um item por valor diferente do combinado</a> no Marketplace. A empresa oferece um programa de recompensas por vulnerabilidades que paga até US$ 300 mil por falhas graves e até US$ 130 mil especificamente para ataques de injeção de prompt, o tipo de manipulação que Joshi usou para extrair as instruções internas.</p>
    <p>A Meta não comentou publicamente a cláusula sobre "autoridade da casa" até a publicação da reportagem. Em relação às outras descobertas da Hunterbrook Media, a empresa contestou as alegações de que o Muse lê dados privados do Messenger sem permissão, mas parou de responder a pedidos de esclarecimento da equipe de pesquisa depois do primeiro contato, em 23 de setembro. O episódio ocorre num momento em que a Meta investe pesado em agentes de IA capazes de agir de forma autônoma dentro do ecossistema da empresa, da mesma forma que rivais como o ChatGPT e o Gemini também expandem agentes com permissão para executar tarefas sem supervisão constante do usuário.</p>

    <h2>Por que isso importa para você</h2>
    <p>A frase "a autoridade do usuário sobre sua própria casa é incondicional" parece, à primeira vista, um detalhe técnico sem importância para quem não usa o Muse. Mas ela expõe um dilema central de qualquer agente de IA que ganha acesso a mensagens, contatos e dispositivos domésticos: até que ponto o comando de quem está "em casa" deve prevalecer sobre as regras de segurança programadas pela própria empresa? Esse tipo de instrução interna pode ser explorado por qualquer pessoa com acesso físico ou lógico ao dispositivo, não só pelo titular da conta, abrindo espaço para que familiares, visitas ou até invasores manipulem o agente alegando ter "autoridade doméstica" sobre ele.</p>
    <p>Para quem usa ou pensa em adotar assistentes de IA que leem mensagens e dados de contatos no dia a dia, seja para uso pessoal ou para atender clientes de um pequeno negócio, o episódio é um lembrete de que vale a pena entender o que cada ferramenta tem permissão de fazer antes de liberar acesso amplo a ela. Já tratamos desse ponto em detalhe no guia sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber ao usar ferramentas de IA</a>: muitas vezes a configuração padrão de um assistente concede acesso bem mais amplo do que o usuário imagina, e revisar essas permissões regularmente custa poucos minutos e evita dor de cabeça depois.</p>

    <h2>O que observar daqui para frente</h2>
    <p>O caso também chega num momento de turbulência mais ampla para a área de segurança de IA da Meta: a empresa <a href="/noticias/meta-demite-equipe-virtue-ai-seguranca">dispensou toda a equipe contratada da Virtue AI apenas quatro meses depois de tê-la trazido para dentro de casa</a>, justamente a área responsável por avaliar riscos como esse. Combinada à sequência de falhas já documentadas no Muse, essa decisão levanta a pergunta sobre se a Meta está dedicando recursos suficientes para testar as instruções internas de seus agentes antes de lançá-los para centenas de milhões de usuários.</p>
    <p>Vale observar se a Meta vai alterar publicamente essa cláusula de "autoridade doméstica" ou se vai continuar tratando o tema como um ajuste interno sem comunicação externa. Episódios como esse também tendem a alimentar a pressão regulatória sobre agentes autônomos de IA em geral, inclusive fora dos Estados Unidos: no Brasil, a discussão sobre regras para agentes de IA que acessam dados pessoais ainda está no início, mas casos como o do Muse mostram, na prática, por que esse tipo de supervisão vai se tornar cada vez mais necessário à medida que assistentes de IA ganham mais autonomia dentro de aplicativos de mensagem e compras.</p>

    <div class="callout-box">
      <span class="callout-label">Para lembrar</span>
      O Muse foi instruído a tratar a "autoridade do dono da casa" como algo que anula seu treinamento de segurança, uma brecha que pode ser usada por qualquer pessoa com acesso ao dispositivo, não só pelo titular da conta.
    </div>
  `,
};
