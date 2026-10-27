import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "terra-security-correcoes-seguranca-falham-ia-atacantes",
  title: "Correções de segurança falham 10 vezes mais em 2026, aponta Terra",
  summary:
    "Estudo da Terra Security diz que 2,3% das correções no GitHub tiveram falha reportada em 90 dias em 2026, contra 0,2% de 2019 a 2025, com IA ajudando atacantes.",
  author: "Bruno Danello",
  sourceName: "The Register",
  sourceUrl: "https://www.theregister.com/patches/2026/10/19/security-patches-need-patches-now-that-attackers-have-ai/5303927",
  date: "2026-10-19",
  publishedAt: "2026-10-19T16:25:00-03:00",
  topic: "seguranca",
  imageQuery: "Windows 11 logo",
  content: `
    <p>Uma startup de testes de invasão com IA chamada Terra Security afirma que as correções de segurança estão falhando muito mais em 2026 do que nos anos anteriores. Segundo reportagem de Jessica Lyons, publicada nesta segunda-feira (19) pela <a href="https://www.theregister.com/patches/2026/10/19/security-patches-need-patches-now-that-attackers-have-ai/5303927" target="_blank" rel="noopener noreferrer nofollow">The Register</a>, a parcela de correções no GitHub que precisaram de um novo aviso por falha em até 90 dias saltou de cerca de 0,2%, entre 2019 e 2025, para 2,3% em 2026. A empresa liga a alta ao fato de que atacantes agora também usam IA para estudar cada correção publicada e procurar um jeito de contorná-la.</p>

    <h2>O que a Terra Security encontrou</h2>
    <p>A Terra revisou todos os registros de CVE publicados e todos os avisos de segurança revisados pelo GitHub atrás de um padrão específico: uma correção sai, e pouco depois outro aviso admite que ela estava incompleta ou podia ser burlada. Por anos isso aconteceu em ritmo baixo e estável. Em 2026, entre as correções de código aberto no GitHub, a taxa foi de 0,2% para 2,3%, algo como oito a dez vezes mais, dependendo de como se arredonda. O registro de CVEs mostra o mesmo salto, embora a empresa avise que esse método subestima o problema, porque o novo CVE muitas vezes parece um defeito sem relação com o anterior.</p>
    <p>Outro número que chama atenção envolve a lista de vulnerabilidades exploradas da agência americana CISA. Correções que acabaram contornadas têm cerca de quatro vezes mais chance de aparecer nessa lista do que outros defeitos dos mesmos fornecedores. A leitura dos autores é que falhas já exploradas atraem mais pesquisadores, e todos eles examinam o patch em busca de uma brecha ao redor.</p>

    <h2>Por que tantas correções quebram</h2>
    <p>Segundo a Terra, o problema se concentra em dois tipos de falha. A contaminação de protótipos, comum em código JavaScript, aparece cerca de 11 vezes mais entre os CVEs de correção quebrada do que entre todos os CVEs. A falsificação de requisição do lado do servidor, conhecida pela sigla SSRF, aparece cerca de 4,6 vezes mais. Em ambos os casos, muitos desenvolvedores corrigem com listas de bloqueio, que barram nomes de servidores, caminhos ou chaves de objeto específicos.</p>
    <p>O defeito dessa abordagem é conhecido: se a lista não prevê todas as formas de escrever uma entrada maliciosa, o atacante só precisa achar uma. A empresa cita como exemplo o webmail Roundcube, que em março de 2026 corrigiu uma falha de SSRF bloqueando apenas o endereço 127.0.0.1. A correção não cobria outros formatos de endereço IP nem nomes de domínio que apontam para o mesmo lugar, e outros três CVEs surgiram entre maio e agosto.</p>

    <h2>O caso do Windows e o do kernel do Linux</h2>
    <p>O exemplo mais pesado envolve a Microsoft. Espiões ligados ao governo russo exploraram uma falha de desvio de segurança no Windows Shell, a CVE-2026-21510, pelo menos um mês antes de a empresa corrigi-la, em fevereiro. A correção ficou incompleta e deixou aberta uma segunda falha, a CVE-2026-32202, que permite coagir a autenticação sem nenhum clique da vítima. Ela também foi explorada antes de a Microsoft consertá-la, em abril, e hoje consta na lista da CISA. O aviso novo nem mencionava o antigo, o que torna difícil ligar os dois casos apenas lendo texto.</p>
    <p>No Linux, os números vêm dos registros do próprio kernel até 8 de outubro: 3,2% dos CVEs do kernel foram introduzidos pela correção de outro CVE. Em subsistemas movimentados, como o de arquivos SMB e o de agendamento de rede, a taxa chega a cerca de 10%. Um caso citado: uma mudança de 2023 gerou a CVE-2024-26676, a correção travou o sistema e virou a CVE-2024-26780, e a correção desse travamento criou ainda outro defeito, a CVE-2024-26750.</p>

    <h2>O que a Terra recomenda</h2>
    <p>Para fornecedores, a empresa propõe três perguntas antes de lançar qualquer correção: ela resolve a causa raiz, cobre a classe inteira do defeito e não quebra outra coisa? Isso inclui testar variantes que o aviso não menciona, conferir outros caminhos até o mesmo código e outros pontos que chamam a mesma função. Para quem aplica correções, o conselho é o mesmo: se um fornecedor consertou um defeito já explorado, é prudente presumir que alguém está lendo o patch atrás de um jeito de contorná-lo. A empresa resume o ciclo assim: uma correção sai, um desvio aparece e outra correção sai.</p>
    <p>Vale a ressalva de que o estudo vem de uma empresa que vende testes de invasão com IA, e que a ligação direta entre o aumento e o uso de IA por atacantes é uma interpretação da Terra, não um fato medido. A The Register lembra ainda que o volume de correções cresceu neste ano porque fornecedores também passaram a usar IA para achar bugs, o que por si só aumenta a chance de erros de patch.</p>

    <h2>Por que isso importa para você</h2>
    <p>Quem trabalha ou empreende com IA no Brasil costuma ter, sem perceber, uma pequena superfície de ataque: o computador com Windows, o site em WordPress, o servidor de automação, as bibliotecas que o agente de código instala. A primeira lição é que atualizar continua sendo necessário, mas não basta. Depois de aplicar uma correção, vale acompanhar os avisos do fornecedor por algumas semanas, porque pode vir um segundo patch para o mesmo problema. Para montar uma rotina simples, veja nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a>.</p>
    <p>A segunda lição é sobre quem usa agentes que leem páginas, e-mails e documentos. Defesas feitas com lista de bloqueio são frágeis, e isso vale também para os filtros que protegem agentes contra comandos escondidos, como explicamos em <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection, o risco de IA que lê páginas e e-mails</a>. Quem entrega automação a clientes deve combinar acesso mínimo, isolamento e monitoramento, em vez de confiar em uma única barreira.</p>
    <p>A terceira lição é de mercado. A IA acelera tanto quem ataca quanto quem defende, e a vantagem tende a ficar com quem corrige mais rápido e melhor. Já publicamos o <a href="/noticias/microsoft-relatorio-ia-ciberataques-vantagem-atacantes">relatório da Microsoft sobre IA e a vantagem dos atacantes</a> e o caso em que a <a href="/noticias/anthropic-mythos-vulnerabilidade-rejetto-hfs-exploracao">IA da Anthropic achou uma falha crítica e hackers a exploraram em 24 horas</a>. Para quem pensa em carreira, a demanda por gente que entende de segurança e de IA continua em alta, conforme o guia sobre <a href="/artigos/carreira-em-ciberseguranca-com-ia-vagas-trilha-e-habilidades">carreira em cibersegurança com IA</a>. Por fim, vale rever o que você entrega às ferramentas no dia a dia, tema do texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a>.</p>

    <h2>O que observar daqui para frente</h2>
    <p>O ponto a acompanhar é se outros pesquisadores, sem interesse comercial em vender testes, confirmam a alta de correções quebradas. Também importa ver se os grandes fornecedores mudam o processo de revisão de patches, por exemplo com testes automáticos de variantes, e se a taxa de 2,3% continua subindo no fim do ano. Enquanto isso, a recomendação prática é simples: aplique as atualizações, mas não trate um sistema como seguro só porque o scanner marcou o problema como corrigido.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Reportagem da <a href="https://www.theregister.com/patches/2026/10/19/security-patches-need-patches-now-that-attackers-have-ai/5303927" target="_blank" rel="noopener noreferrer nofollow">The Register</a>, com dados do estudo publicado no <a href="https://www.terra.security/blog/how-security-patches-became-maps-for-attackers" target="_blank" rel="noopener noreferrer nofollow">blog da Terra Security</a>. Os números são da própria empresa e não foram verificados de forma independente.</p>
    </div>
  `,
};
