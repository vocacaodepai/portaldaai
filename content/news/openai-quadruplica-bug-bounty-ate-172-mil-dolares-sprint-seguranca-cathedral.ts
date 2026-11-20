import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-quadruplica-bug-bounty-ate-172-mil-dolares-sprint-seguranca-cathedral",
  title: "OpenAI quadruplica recompensa por falhas e paga até US$ 172 mil",
  summary:
    "Bug bounty da OpenAI passa a pagar até US$ 100 mil por falha excepcional, com bônus de fidelidade, e a empresa prepara um sprint de segurança com a Cathedral.",
  author: "Bruno Danello",
  sourceName: "The Decoder, OpenAI",
  sourceUrl: "https://the-decoder.com/bug-hunters-can-now-earn-up-to-172000-from-openai-as-company-ramps-up-security/",
  date: "2026-11-04",
  publishedAt: "2026-11-04T01:25:00-03:00",
  imageQuery: "OpenAI logo",
  topic: "seguranca",
  content: `
    <p>A OpenAI reformulou o programa de recompensas que paga pesquisadores de fora para encontrar falhas de segurança nos seus produtos, o chamado bug bounty. Segundo dois textos publicados pela empresa nesta segunda-feira (2) e detalhados nesta terça (3) pelo site The Decoder, os valores foram multiplicados por quatro: uma vulnerabilidade crítica no ChatGPT ou no Codex agora rende até US$ 30 mil, uma descoberta considerada excepcional pode chegar a US$ 100 mil e, somando bônus, o pagamento total de um único relato pode bater cerca de US$ 172 mil. Na mesma leva, a empresa anunciou que prepara um novo "sprint" interno de segurança, desta vez com a participação da Cathedral, startup que ficou conhecida há poucos dias por invadir sistemas de apoio da Anthropic com agentes de IA.</p>

    <p>É uma mudança grande para um programa que nasceu modesto. Quando foi lançado, em abril de 2023, com a plataforma Bugcrowd cuidando dos relatos, o teto era de US$ 20 mil. Agora, o valor máximo de uma falha excepcional sozinho já é cinco vezes isso, e os bônus ampliam a conta.</p>

    <h2>Como ficam os pagamentos</h2>
    <p>Pelo que a OpenAI descreveu, a nova tabela tem três camadas. A primeira é a recompensa-base por gravidade, que vai até US$ 30 mil para falhas críticas nos produtos centrais, como o ChatGPT e o Codex, o agente de programação da empresa. A segunda é a faixa de descobertas excepcionais, que pode chegar a US$ 100 mil. A terceira são os bônus, que juntos levam o total possível a aproximadamente US$ 172 mil:</p>
    <ul>
      <li><strong>Bônus de qualidade:</strong> premia relatos bem documentados e fáceis de reproduzir.</li>
      <li><strong>Programa de fidelidade em cinco níveis:</strong> pesquisadores que reportam com frequência sobem de nível e passam a receber mais.</li>
      <li><strong>Campanhas temporárias:</strong> janelas com pagamento turbinado ligadas ao lançamento de recursos novos, para atrair caçadores de falhas justamente quando o código ainda é recente.</li>
    </ul>
    <p>Há ainda uma regra retroativa: quem reportou uma vulnerabilidade nos 30 dias anteriores ao anúncio recebe a diferença entre a tabela antiga e a nova. A OpenAI não detalhou publicamente, nos trechos citados pelo The Decoder, como os bônus se combinam em cada caso nem quais são as exigências de cada nível de fidelidade. Vale lembrar que os números são tetos: a maioria dos relatos válidos em programas desse tipo costuma pagar bem menos que o máximo anunciado.</p>

    <h2>Onde a OpenAI fica em relação às outras gigantes</h2>
    <p>Com a nova tabela, os pagamentos máximos da OpenAI ficam na mesma faixa do programa geral de recompensas do Google, segundo a comparação feita pelo The Decoder. Continuam abaixo, porém, dos valores mais altos oferecidos por Apple e Microsoft, que pagam fortunas por falhas no nível do sistema operacional, aquelas capazes de dar controle total de um aparelho ou de um computador.</p>

    <p>A comparação ajuda a entender a estratégia. Até pouco tempo atrás, a OpenAI era vista como uma empresa de pesquisa com um aplicativo de sucesso. Hoje ela opera produtos usados por centenas de milhões de pessoas e por empresas que ligam o ChatGPT e o Codex a e-mails, repositórios de código e sistemas internos. Cada falha nesses produtos pode virar porta de entrada para dados de terceiros. Pagar mais é uma forma de garantir que quem encontra um problema prefira entregá-lo para a própria empresa, e não vendê-lo num mercado paralelo.</p>

    <h2>O sprint de segurança com a Cathedral</h2>
    <p>A segunda parte do anúncio é o novo sprint de segurança, um período concentrado em que a empresa coloca gente para atacar os próprios sistemas antes que alguém de fora faça isso. A OpenAI afirma que, na rodada anterior, 25% dos seus engenheiros de produto se dedicaram a caçar vulnerabilidades. Desta vez, a Cathedral vai trabalhar junto com os engenheiros internos para testar os sistemas sob pressão. A empresa não informou datas, duração nem o escopo exato da nova rodada.</p>

    <p>A escolha da parceira chama atenção. A Cathedral é a startup cujos agentes de IA <a href="/noticias/anthropic-invadida-agentes-ia-cathedral-bug-bounty">entraram em sistemas de apoio da Anthropic</a> dentro do programa de recompensas da própria Anthropic, num caso que gerou discordância pública entre as duas empresas sobre o alcance do acesso. Ao trazer exatamente esse tipo de time para dentro de casa, a OpenAI sinaliza que espera ser atacada por agentes automatizados e quer saber, antes dos criminosos, até onde eles conseguem chegar.</p>

    <p>O pano de fundo é um ano cheio de incidentes envolvendo IA na segurança. Pesquisadores já usaram modelos de linguagem para <a href="/noticias/claude-opus-5-ajudou-pesquisadores-invadir-contas-openai">invadir contas da própria OpenAI</a>, e a empresa chegou a <a href="/noticias/openai-notifica-dezenas-organizacoes-agentes-burlaram-seguranca">notificar dezenas de organizações</a> depois que agentes burlaram proteções. Ao mesmo tempo, a facilidade de gerar relatórios com IA inundou programas de recompensa com relatos falsos ou vagos, a ponto de o Google <a href="/noticias/google-pausa-bug-bounty-ia-slop">pausar seu bug bounty de código aberto</a> por excesso de lixo gerado por IA. O bônus de qualidade da OpenAI parece pensado justamente para separar o relato bom do ruído.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem trabalha ou quer trabalhar com segurança digital no Brasil, programas como esse são uma das poucas formas de ganhar em dólar resolvendo problemas reais, sem precisar de vaga em empresa estrangeira. Em geral, programas abertos aceitam pesquisadores de qualquer país, desde que sigam as regras: testar só o que está no escopo, não acessar dados de outros usuários além do mínimo necessário para provar a falha e reportar antes de divulgar. Quem receber valores do exterior precisa declarar a renda à Receita Federal, normalmente pelo carnê-leão, então vale se organizar antes do primeiro pagamento.</p>

    <p>Na prática, o anúncio também mostra para onde o mercado está indo. Saber usar agentes de IA para testar sistemas, escrever relatórios claros e reproduzíveis e entender como ferramentas como o ChatGPT e o Codex se conectam a outros serviços virou habilidade valorizada. Se você está pensando nesse caminho, o nosso guia sobre <a href="/artigos/carreira-em-ciberseguranca-com-ia-vagas-trilha-e-habilidades">carreira em cibersegurança com IA</a> mostra por onde começar e quais competências as empresas procuram.</p>

    <p>Para quem só usa o ChatGPT no dia a dia, a notícia é indiretamente boa: quanto mais a empresa paga para achar falhas, maior a chance de elas serem corrigidas antes de serem exploradas. Isso não dispensa os cuidados básicos, como ativar a verificação em duas etapas, revisar quais aplicativos e conectores têm acesso à sua conta e usar um <a href="/artigos/gerenciador-de-senhas-como-escolher-comecar-e-usar-com-seguranca">gerenciador de senhas</a> para não repetir a mesma senha em vários serviços.</p>

    <h2>O que ainda não se sabe</h2>
    <p>Os valores e as regras vêm dos próprios textos da OpenAI, e o The Decoder não trouxe detalhes sobre a divisão exata dos bônus, os requisitos de cada nível de fidelidade nem a lista completa de produtos no escopo além do ChatGPT e do Codex. Também não há data para o novo sprint com a Cathedral nem promessa de que os resultados serão divulgados. O Portal da AI vai acompanhar a página oficial do programa e atualizar a cobertura se a OpenAI publicar a tabela detalhada.</p>
  `,
};
