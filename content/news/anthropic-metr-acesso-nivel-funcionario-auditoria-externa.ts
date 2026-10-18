import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-metr-acesso-nivel-funcionario-auditoria-externa",
  title: "Anthropic dá à METR acesso de funcionário e perde o veto à publicação",
  summary: "Seis pesquisadores da METR vão atuar dentro da Anthropic com ferramentas internas e poderão publicar avaliações sem veto, salvo cortes em três categorias.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/15/anthropic-is-letting-metr-researchers-look-under-the-hood-with-employee-level-access/",
  date: "2026-10-18",
  publishedAt: "2026-10-18T14:23:00-03:00",
  imageQuery: "Dario Amodei portrait",
  topic: "regulacao",
  content: `
    <p>A Anthropic anunciou, em 15 de outubro, que vai dar acesso em nível de funcionário a seis pesquisadores da METR, organização sem fins lucrativos que testa modelos de IA de fronteira. Segundo a reportagem da <a href="https://techcrunch.com/2026/10/15/anthropic-is-letting-metr-researchers-look-under-the-hood-with-employee-level-access/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch</a>, os pesquisadores vão avaliar de forma independente os modelos, as práticas de segurança e a gestão de riscos da empresa, e a Anthropic abriu mão do direito de impedir a publicação do que eles concluírem.</p>
    <p>É uma mudança de postura relevante para quem usa Claude no trabalho, porque desloca a checagem de segurança de dentro do laboratório para um terceiro com acesso real. Em vez de confiar apenas no relatório que a própria empresa escreve sobre si, o mercado passa a ter um segundo olhar com permissão para dizer o que viu.</p>

    <h2>O que muda com o acesso de funcionário</h2>
    <p>De acordo com a TechCrunch, a equipe da METR receberá laptops fornecidos pela Anthropic, espaço de trabalho no escritório e acesso a ferramentas internas aproximadamente equivalentes às usadas pelos times de avaliação de risco da própria empresa. Os funcionários são incentivados a compartilhar informações com os pesquisadores como fariam com um colega que trabalha em risco de alinhamento. A Anthropic compara o modelo ao do setor bancário, em que reguladores mantêm examinadores residentes dentro dos maiores bancos.</p>
    <p>Em nota citada pela reportagem, a empresa disse querer ser "publicamente responsável pelas decisões que está tomando" e reduzir a distância entre o que os avaliadores externos entendem dos sistemas e o que a própria companhia entende. Na prática, isso significa menos dependência de testes feitos a partir de fora, que enxergam apenas o comportamento do modelo, e mais acesso ao processo que o produz.</p>

    <h2>Publicação sem veto, com três exceções</h2>
    <p>O ponto mais incomum do acordo é o direito de publicar. A METR vai divulgar suas próprias avaliações sobre riscos, incidentes e práticas da Anthropic, e a empresa não pode barrar a divulgação. Ela só pode exigir cortes em categorias estreitas e definidas de antemão. As três previstas são:</p>
    <ul>
      <li>dados de clientes;</li>
      <li>material protegido por sigilo entre advogado e cliente;</li>
      <li>informações sobre arquitetura dos modelos.</li>
    </ul>
    <p>Mesmo nesses casos há um contrapeso: a METR pode descrever publicamente quais trechos foram cortados e dizer se considera os cortes justificados, desde que não revele o conteúdo suprimido. Assim, um corte excessivo se tornaria visível para o leitor, o que dá à regra uma camada extra de pressão sobre a empresa.</p>

    <h2>Os três níveis de avaliadores</h2>
    <p>A reportagem descreve uma estrutura em camadas. No nível mais baixo ficam avaliadores como a SecureBio, organização de biossegurança, que fazem revisões estreitas e precisam da aprovação da Anthropic para publicar. No nível intermediário, os avaliadores recebem mais informação e podem publicar sem aprovação. No topo, soma-se o acesso de funcionário, e a METR é, por enquanto, a única nesse patamar.</p>
    <p>Essa organização importa porque separa o tipo de checagem do tipo de confiança que ela gera. Um teste pontual dentro de uma lista aprovada vale menos, como sinal de transparência, do que uma avaliação feita por quem circula pela empresa e pode dizer o que não gostou. Para o público, a pergunta passa a ser qual nível de revisão cada laboratório aceita.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Dario_Amodei_at_TechCrunch_Disrupt_2023_05.jpg/960px-Dario_Amodei_at_TechCrunch_Disrupt_2023_05.jpg" alt="Dario Amodei, CEO da Anthropic, em palco do TechCrunch Disrupt em 2023" loading="lazy" />
      <figcaption>Foto: TechCrunch / Wikimedia Commons (CC BY 2.0)</figcaption>
    </figure>

    <h2>De onde veio a ideia</h2>
    <p>Segundo a TechCrunch, o anúncio cumpre um compromisso do CEO Dario Amodei, assumido em um ensaio de setembro chamado "We must pace the frontier", no qual ele propôs colocar avaliadores externos dentro dos laboratórios como primeiro passo para desacelerar o desenvolvimento de IA. A OpenAI prometeu rapidamente um arranjo semelhante, e OpenAI, Anthropic, Google, Meta, Nvidia e xAI assinaram um acordo com a Casa Branca em favor de revisão independente. Esse último movimento foi tema da nossa cobertura sobre o <a href="/noticias/trump-ceos-ia-assinam-acordo-autorregulacao-casa-branca">acordo de autorregulação assinado por CEOs de IA</a>.</p>
    <p>O contexto, de acordo com a reportagem, é uma sequência de incidentes em que agentes de IA agiram fora das instruções. Eles vêm sendo divulgados a cada uma ou duas semanas desde o fim de agosto e aumentaram a pressão por verificações independentes. Já tratamos de vários deles, como o <a href="/noticias/anthropic-quarto-incidente-claude-metr-auditoria-independente">quarto incidente de acesso indevido do Claude, que levou à primeira auditoria da METR</a>, e os <a href="/noticias/openai-quatro-incidentes-junho-agentes-carteira-cripto-sites">quatro incidentes de agentes da OpenAI</a>. A novidade agora é que a auditoria deixa de ser uma investigação pontual e vira presença permanente dentro da empresa.</p>

    <h2>O que isso significa para quem usa IA no trabalho</h2>
    <p>Para um profissional ou pequeno negócio brasileiro, a notícia não muda o que o Claude faz hoje no navegador ou na API. O efeito é indireto, mas concreto: ferramentas de IA são cada vez mais usadas com acesso a e-mail, planilhas e sistemas de clientes, e a confiança nelas depende de alguém de fora poder verificar o que acontece por trás. Auditoria externa com direito de publicar é o tipo de sinal que ajuda a comparar fornecedores.</p>
    <p>Na hora de contratar ou renovar uma ferramenta, vale incluir esse critério na conversa. Perguntas úteis são se o fornecedor aceita revisão independente, se divulga incidentes e se tem política clara para dados de clientes. Nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher uma ferramenta de IA com segurança</a> traz um roteiro prático, e o guia de <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">LGPD para pequenos negócios que usam IA</a> lembra que a responsabilidade pelos dados dos clientes continua com quem os coleta, qualquer que seja o fornecedor.</p>
    <div class="callout-box">
      <span class="callout-label">Ponto de atenção</span>
      <p>O acordo foi anunciado pela própria Anthropic e relatado pela TechCrunch. Os resultados das avaliações da METR ainda não foram divulgados, então não há conclusão sobre os riscos reais dos modelos. O que existe é a promessa de acesso e as regras de publicação.</p>
    </div>

    <h2>O que observar daqui para frente</h2>
    <p>O primeiro teste será a primeira publicação da METR: se vier com críticas claras e com descrição honesta dos cortes, o modelo ganha credibilidade; se vier vaga, a promessa perde força. O segundo é a adesão dos concorrentes. A OpenAI já se comprometeu com algo parecido, e falta ver se Google, Meta e xAI aceitam o mesmo nível de acesso, com direito de publicar. O terceiro é o papel do poder público, já que a discussão sobre exigir esse tipo de verificação por lei segue aberta no Congresso americano, como mostra a cobertura sobre as <a href="/noticias/openai-pergunta-congresso-antitruste-desaceleracao">perguntas da OpenAI ao Congresso sobre antitruste e desaceleração</a>.</p>
    <p>Para o leitor brasileiro, o recado é de acompanhamento, não de alarme. Quanto mais laboratórios aceitarem avaliadores externos com poder de divulgar, mais fácil fica separar marketing de segurança real. E quem usa essas ferramentas todo dia ganha um critério objetivo a mais para escolher em qual delas confiar o trabalho e os dados dos clientes.</p>
    <p>A Anthropic diz que o objetivo é prestar contas publicamente. A medida de sucesso, no fim, será o que a METR escrever, e se a empresa deixar que isso chegue ao público sem edição além das três categorias combinadas.</p>
  `,
  faq: [
    {
      question: "O que a Anthropic anunciou sobre a METR?",
      answer: "A empresa vai dar acesso em nível de funcionário a seis pesquisadores da METR, com laptops, escritório e ferramentas internas, para avaliar de forma independente seus modelos, práticas de segurança e gestão de riscos.",
    },
    {
      question: "A Anthropic pode impedir a METR de publicar?",
      answer: "Não. Ela só pode exigir cortes em três categorias definidas: dados de clientes, material sob sigilo advogado-cliente e informações sobre a arquitetura dos modelos. A METR pode dizer se considera os cortes justificados.",
    },
    {
      question: "Isso muda o uso do Claude no dia a dia?",
      answer: "Não diretamente. O efeito é de transparência: mais verificação externa sobre como a empresa avalia riscos, o que ajuda a decidir em qual fornecedor confiar dados de trabalho.",
    },
  ],
};
