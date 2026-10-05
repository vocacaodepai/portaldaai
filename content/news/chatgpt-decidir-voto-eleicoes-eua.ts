import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "chatgpt-decidir-voto-eleicoes-eua",
  title: "Eleitores dos EUA usam ChatGPT e Gemini para decidir o voto",
  summary:
    "Pesquisa da Pew mostra que metade dos adultos dos EUA usa chatbots de IA, e parte já pede ajuda para escolher candidato nas eleições de meio de mandato.",
  author: "Bruno Danello",
  sourceName: "NPR",
  sourceUrl: "https://www.npr.org/2026/10/05/nx-s1-5977852/ai-chatbots-midterm-election",
  date: "2026-10-05",
  content: `
    <p>Eleitores americanos estão recorrendo a chatbots de inteligência artificial como ChatGPT, Gemini e Claude para pesquisar candidatos e até ajudar a decidir o próprio voto nas eleições de meio de mandato deste ano nos Estados Unidos. Segundo reportagem da <a href="https://www.npr.org/2026/10/05/nx-s1-5977852/ai-chatbots-midterm-election" target="_blank" rel="noopener noreferrer nofollow">NPR</a> publicada nesta segunda-feira (5), é a primeira eleição de meio de mandato depois que o uso de IA generativa se popularizou em massa no país, e isso já aparece no comportamento de quem vota.</p>

    <p>O designer gráfico Adam Johnson, de 40 anos, da Virgínia Ocidental, passou horas conversando com o ChatGPT sobre em quem votar. A ex-funcionária pública Lisa Veldran, de Wisconsin, usou o Gemini para comparar propostas de candidatos ao governo local. Já a autora Lakshmi Iyer, da Pensilvânia, foi além e usou o Claude para criar um site próprio, batizado de Ballot Lookup, que ajuda outros eleitores a pesquisar quem está na urna na região deles. O padrão comum entre os relatos: disputas locais, pouco cobertas pela imprensa tradicional, viraram o principal motivo para recorrer a um chatbot em busca de informação rápida.</p>

    <h2>Quanto esse uso já cresceu e o que os dados mostram</h2>
    <p>De acordo com o Pew Research Center, citado pela reportagem, cerca de 50% dos adultos americanos já usam chatbots de IA, e 42% dos usuários afirmam recorrer a eles especificamente para buscar informação. Uma pesquisa de setembro da American Association of Political Consultants Foundation encontrou um número ainda mais específico: um em cada cinco eleitores já consultou um chatbot de IA para se informar sobre a eleição, com uso equilibrado entre eleitores democratas e republicanos, o que indica que o hábito não está concentrado num único lado do espectro político.</p>
    <p>O uso varia de pesquisa superficial a dependência real na hora de decidir o voto. O executivo de software Tyler Black, de Nashville, disse à NPR que usa chatbots sobretudo para entender propostas de candidatos a cargos locais, que raramente têm cobertura jornalística detalhada. Já outros eleitores relataram montar tabelas comparativas inteiras com a ajuda da IA, cruzando posição de cada candidato em temas como impostos, educação e segurança pública antes de decidir o voto.</p>

    <h2>Por que especialistas estão preocupados</h2>
    <p>Rafael Batista, pesquisador de pós-doutorado da Universidade Johns Hopkins especializado em impactos comportamentais da inteligência artificial, alertou que chatbots "podem selecionar coisas que reforçariam ainda mais a opinião que a pessoa já tinha antes de perguntar", um efeito de câmara de eco que fica mais difícil de perceber quando a resposta parece neutra e bem escrita. O próprio Johnson reconheceu o problema na prática: segundo ele, o ChatGPT é "meio um agradador de pessoas", numa referência à tendência bem documentada de modelos de linguagem de preferir concordar com quem pergunta em vez de confrontar a opinião do usuário, mesmo quando isso significa reforçar um raciocínio equivocado.</p>
    <p>Há ainda o risco, mais básico, de alucinação: chatbots de uso geral ocasionalmente geram informações falsas ou fabricadas sobre candidatos, datas de votação ou propostas, sem sinalizar incerteza. Como não existe transparência pública sobre os dados exatos usados para treinar cada modelo, Batista aponta que "é difícil saber quais preconceitos moldam as respostas" que o usuário recebe, problema que fica ainda mais sensível quando a resposta errada pode influenciar como alguém vota.</p>

    <h2>O que as empresas de IA dizem sobre uso político</h2>
    <p>Procurada pela NPR, a OpenAI direcionou a reportagem para sua página de salvaguardas eleitorais, afirmando que monitora viés nos modelos para manter respostas "politicamente neutras". Anthropic e Google, por outro lado, não responderam aos pedidos de comentário sobre o uso político de Claude e Gemini, silêncio que chama atenção justamente num momento em que as próprias empresas vêm sendo cobradas publicamente sobre segurança e responsabilidade, como mostrou a <a href="/noticias/nyc-council-audiencia-ia-coxon-reckless">audiência da Câmara de Nova York</a> com executivos de OpenAI, Anthropic, Google e Meta na semana passada.</p>

    <h2>Por que isso importa para quem está no Brasil</h2>
    <p>O Brasil já enfrenta a mesma tensão de perto, só que por um caminho regulatório diferente. Em vez de deixar o uso eleitoral da IA sem regras, o Tribunal Superior Eleitoral proibiu que ferramentas de IA generativa recomendem ou ranqueiem candidatos durante o período eleitoral de 2026, como o Portal da AI mostrou na <a href="/noticias/tse-restricao-ia-reta-final-eleicoes-2026">cobertura da restrição imposta pelo TSE</a>. Ainda assim, um levantamento do ITS-Rio com o Ministério Público Federal, que o Portal da AI também cobriu, encontrou que <a href="/noticias/its-rio-boca-de-ia-perplexity-recomenda-candidatos-tse">quatro das sete principais ferramentas de IA usadas no Brasil continuavam recomendando candidatos</a> mesmo depois da proibição, o que mostra que a regra existe, mas sua aplicação prática segue incompleta.</p>
    <p>O caso americano reforça um ponto que vale tanto para quem usa IA para decidir o voto quanto para quem usa IA para decidir qualquer coisa que impacte dinheiro ou carreira: perguntar a um chatbot "em quem eu devo votar" é estruturalmente parecido com perguntar "em que eu devo investir" ou "qual fornecedor eu devo contratar", porque a resposta tende a refletir de volta o que o usuário já demonstrou pensar, em vez de confrontar a pergunta com uma segunda fonte independente. Pesquisas como a que mostrou que <a href="/noticias/pesquisa-reuters-ipsos-73-por-cento-desconfia-ia">73% dos americanos acham que as empresas de IA não fazem o suficiente para evitar desastres</a> sugerem que essa desconfiança generalizada já é compartilhada por boa parte do público, mesmo entre quem usa essas ferramentas no dia a dia.</p>

    <h2>Como usar IA para se informar sem cair na armadilha do eco</h2>
    <p>A recomendação prática que surge do próprio relato dos eleitores entrevistados pela NPR é simples: usar o chatbot para organizar informação pública (propostas, histórico de votos, declarações) em formato de tabela comparativa, em vez de pedir diretamente uma recomendação de voto, e sempre cruzar a resposta com pelo menos uma fonte jornalística ou oficial antes de decidir qualquer coisa importante. É a mesma lógica que já vale para quem usa IA para pesquisar investimentos, currículo ou qualquer decisão que tenha peso real na vida financeira ou cívica da pessoa: a IA ajuda a organizar e resumir informação dispersa, mas a decisão final precisa continuar sendo cruzada com uma fonte independente do próprio histórico de conversa do usuário.</p>

    <div class="callout-box"><span class="callout-label">Para lembrar</span>Segundo o Pew Research Center, cerca de 50% dos adultos americanos já usam chatbots de IA, e uma pesquisa de setembro mostrou que um em cada cinco eleitores consultou IA para se informar sobre as eleições de meio de mandato nos EUA. Especialistas alertam para o risco de câmara de eco e alucinação, e apenas a OpenAI respondeu publicamente sobre suas salvaguardas eleitorais. No Brasil, o TSE proíbe que IA recomende candidatos nas eleições de 2026, mas levantamentos mostram que a regra ainda é descumprida por parte das ferramentas mais usadas.</div>
  `,
  faq: [
    {
      question: "Quantos eleitores nos EUA já usam IA para decidir o voto?",
      answer:
        "Segundo pesquisa de setembro de 2026 da American Association of Political Consultants Foundation, um em cada cinco eleitores americanos já consultou um chatbot de IA para se informar sobre a eleição de meio de mandato, com uso equilibrado entre democratas e republicanos.",
    },
    {
      question: "Qual o principal risco de usar chatbot para decidir o voto?",
      answer:
        "Especialistas como o pesquisador Rafael Batista, da Universidade Johns Hopkins, apontam o risco de câmara de eco: o chatbot pode reforçar uma opinião que o eleitor já tinha antes de perguntar, além do risco comum de alucinação, quando a IA gera informação falsa sem avisar.",
    },
    {
      question: "O Brasil tem alguma regra sobre IA e eleições parecida com a dos EUA?",
      answer:
        "Sim. O TSE proíbe que ferramentas de IA generativa recomendem ou ranqueiem candidatos durante o período eleitoral de 2026 no Brasil, mas um levantamento do ITS-Rio com o Ministério Público Federal mostrou que parte das ferramentas mais usadas no país ainda descumpre essa regra.",
    },
  ],
};
