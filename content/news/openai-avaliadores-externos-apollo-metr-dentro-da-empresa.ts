import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "openai-avaliadores-externos-apollo-metr-dentro-da-empresa",
  title: "OpenAI vai colocar avaliadores externos de segurança dentro da empresa",
  summary:
    "OpenAI abre treinamento, checkpoints e dados a Apollo, METR, Transluce e Goodfire, mas mantém poder de editar relatórios e escolher com quem eles falam.",
  author: "Bruno Danello",
  sourceName: "TechCrunch, Apollo Research",
  sourceUrl: "https://techcrunch.com/2026/11/16/openai-will-embed-apollo-researchers-to-investigate-ai-subversion/",
  date: "2026-11-17",
  publishedAt: "2026-11-17T08:12:00-03:00",
  topic: "seguranca",
  imageQuery: "OpenAI logo",
  content: `
    <p>A OpenAI anunciou nesta segunda-feira, 16 de novembro, que vai colocar equipes de quatro organizações independentes de segurança de IA para trabalhar dentro da empresa: Apollo Research, METR, Transluce e Goodfire. Segundo o TechCrunch, que detalhou os acordos, é um projeto piloto em que os avaliadores ganham acesso a partes do treinamento dos modelos, e não só à versão final, pouco antes do lançamento, como costumava acontecer.</p>
    <p>O anúncio dá corpo à promessa que a empresa fez em setembro, quando disse que <a href="/noticias/openai-abre-avaliacoes-seguranca-terceiros-durante-treinamento">deixaria grupos independentes avaliarem seus modelos ainda durante o treinamento</a>. Agora há nomes, escopo e regras por escrito. E as regras mostram que o acesso tem limites claros.</p>

    <h2>O que se sabe</h2>
    <p>Cada organização tem uma tarefa diferente. A <strong>Apollo Research</strong>, que publicou o relato mais detalhado do acordo, vai mandar uma equipe de seis pessoas para trabalhar dentro da OpenAI por quatro meses. O objetivo, nas palavras da própria Apollo, é investigar se os modelos tentam "subverter os próprios mecanismos de alinhamento ou de controle, ou os de seus sucessores". São quatro perguntas: se o treinamento incentiva esse comportamento, se os testes conseguem provocá-lo, se ele aparece no uso interno dos modelos e se o raciocínio por trás dele pode ser detectado.</p>
    <p>Para a primeira pergunta, a OpenAI vai entregar código e dados de treinamento, rodadas de aprendizado por reforço com os traços de raciocínio e as recompensas disponíveis, e a possibilidade de consultar versões intermediárias dos modelos (os chamados checkpoints). O acesso para as outras três perguntas ainda será negociado. O trabalho acontece em máquinas da OpenAI, com canais separados e monitorados, sem acesso padrão ao Slack interno.</p>
    <p>A <strong>METR</strong> fará duas avaliações: uma para procurar comportamento perigoso ou não previsto que os testes da própria OpenAI possam ter deixado passar, com escopo e método definidos em boa parte pela METR, e outra para medir se os sistemas da empresa conseguem flagrar esse comportamento. A <strong>Transluce</strong> vai examinar se as avaliações de segurança feitas depois do treinamento são boas o bastante e planeja estudar, em 2027, como a OpenAI usa esses testes para decidir se um modelo pode ser lançado. A <strong>Goodfire</strong>, especializada em interpretabilidade (entender o que acontece dentro do modelo), vai ajudar a monitorar rodadas de treinamento e corrigir comportamentos indesejados.</p>
    <p>Há diferença também no dinheiro. Apollo e Goodfire são pagas pelo trabalho; a OpenAI diz que o pagamento não depende do resultado. METR e Transluce não cobram, mas podem aceitar créditos de computação ou de API. Os relatórios completos, sem cortes, vão para o Comitê de Segurança e Proteção que supervisiona a área em nome do conselho da OpenAI Foundation, e os avaliadores podem falar com esse comitê em particular.</p>
    <p>A própria OpenAI chama o piloto de "um primeiro passo ambicioso rumo a mais acesso e direitos de divulgação" e diz que os acordos ajudam a cumprir o compromisso assumido no <a href="/noticias/trump-ceos-ia-assinam-acordo-autorregulacao-casa-branca">acordo voluntário firmado com a Casa Branca</a> de recorrer a avaliações independentes dos controles de segurança.</p>

    <h2>Os limites do acordo</h2>
    <p>O ponto mais discutido é o tamanho do acesso. A Apollo escreveu que o acordo fica abaixo do que ela considera uma avaliação embutida completa. O acesso vale só para as perguntas, os modelos e os períodos combinados. A OpenAI escolhe quais funcionários participam, embora a Apollo possa sugerir nomes. Se alguém de fora desse grupo levar informação confidencial aos avaliadores, eles não podem dar sequência por conta própria.</p>
    <p>A empresa também pode reter itens dentro do escopo por inviabilidade técnica, risco de segurança ou proteção de propriedade intelectual, desde que avise que reteve e explique por escrito. Ela se comprometeu a não esconder informação só porque é desfavorável. Na publicação, a OpenAI pode pedir que provas confidenciais sejam cortadas dos relatórios, mas, segundo a Apollo, não pode cortar o veredito da Apollo sobre cada pergunta. A Apollo ainda pode contar publicamente as condições do trabalho, o que foi retido e se sofreu pressão, sem revisão prévia da OpenAI.</p>
    <p>A comparação inevitável é com a Anthropic, que em outubro <a href="/noticias/anthropic-metr-acesso-nivel-funcionario-auditoria-externa">deu à METR acesso de nível de funcionário</a>. Buck Shlegeris, presidente-executivo da Redwood Research, escreveu que os acordos da OpenAI não chegam a esse padrão e chamou isso de "decepcionante, mas não surpreendente". O contexto pesa: a OpenAI <a href="/noticias/openai-demite-tres-pesquisadores-seguranca-vazamento">demitiu três pesquisadores</a> acusados de repassar informação confidencial à própria METR, demissões que eles contestam, e enfrenta processos sobre <a href="/noticias/lasst-processa-openai-agentes-ia-hugging-face">agentes que escaparam do ambiente de teste e invadiram o Hugging Face</a>.</p>

    <h2>O que ainda não está confirmado</h2>
    <p>Não há data para os primeiros relatórios públicos. A Apollo começou nesta semana, mas os outros pilotos começam em momentos diferentes e o escopo da segunda avaliação da METR ainda não foi definido. Também não se sabe quais modelos específicos serão analisados, nem quanto a OpenAI paga a Apollo e Goodfire. E, como as provas completas ficam com o comitê interno, o público vai ver as conclusões, mas talvez não todo o material que as sustenta.</p>

    <h2>Por que isso importa para você</h2>
    <p>Quem usa ChatGPT, API da OpenAI ou os agentes da empresa no trabalho depende de uma promessa difícil de checar: a de que o modelo faz o que diz e não esconde erros. Até agora, quase tudo que se sabia sobre isso vinha da própria OpenAI. Com avaliadores olhando o treinamento por dentro, passa a existir uma segunda opinião técnica, com nome e assinatura, sobre perguntas que interessam diretamente a quem automatiza tarefas com IA, como a de saber se um agente pode tentar driblar os controles que deveriam limitá-lo.</p>
    <p>A análise do Portal da AI é que o anúncio é um avanço real, mas ainda não é auditoria independente no sentido pleno. A empresa avaliada escolhe com quem os avaliadores falam, pode reter dados e pode cortar provas. O que vale acompanhar é o primeiro relatório da Apollo, sobre incentivos do treinamento: se ele sair com veredito claro e com a lista do que foi retido, o modelo funciona. Se sair vago, o piloto vira mais vitrine do que controle.</p>
    <p>Enquanto isso, a regra prática para empresas não muda: trate agente de IA como funcionário novo, com permissões mínimas e revisão humana no que é crítico. O <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramenta de IA com segurança</a> ajuda a fazer isso sem depender só do que o fornecedor promete.</p>
  `,
  faq: [
    {
      question: "Quem são os avaliadores que vão trabalhar dentro da OpenAI?",
      answer:
        "Apollo Research, METR, Transluce e Goodfire. Cada uma tem uma tarefa: a Apollo investiga se os modelos tentam driblar controles, a METR procura comportamento perigoso não detectado, a Transluce avalia a qualidade dos testes de segurança e a Goodfire trabalha com interpretabilidade.",
    },
    {
      question: "Os avaliadores terão acesso total aos sistemas da OpenAI?",
      answer:
        "Não. O acesso vale só para perguntas, modelos e períodos combinados, a OpenAI escolhe quais funcionários participam e pode reter informação por motivos técnicos, de segurança ou de propriedade intelectual, desde que avise e justifique por escrito.",
    },
    {
      question: "Os resultados serão publicados?",
      answer:
        "Sim, segundo a Apollo, que vai publicar dois relatórios. A OpenAI pode pedir que provas confidenciais sejam cortadas, mas não pode cortar o veredito da Apollo sobre cada pergunta. Os relatórios completos vão para o comitê de segurança do conselho.",
    },
  ],
};
