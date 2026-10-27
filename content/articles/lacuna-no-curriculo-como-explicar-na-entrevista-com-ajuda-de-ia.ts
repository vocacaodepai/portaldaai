import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "lacuna-no-curriculo-como-explicar-na-entrevista-com-ajuda-de-ia",
  title: "Lacuna no currículo: como explicar na entrevista com ajuda de IA",
  seoTitle: "Lacuna no currículo: como explicar na entrevista",
  excerpt:
    "Aprenda a explicar lacuna no currículo na entrevista: resposta curta e honesta, exemplos por motivo, prompts de IA para ensaiar e erros que derrubam candidatos.",
  metaDescription:
    "Lacuna no currículo: como explicar o período sem trabalhar na entrevista, com respostas por motivo, prompts de IA para ensaio e o que nunca dizer ao recrutador.",
  category: "carreira",
  articleSubcategory: "entrevistas-e-recolocacao",
  date: "2026-10-23",
  readTime: 7,
  imageQuery: "job interview handshake office",
  seed: 575,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A resposta certa para a lacuna é curta, verdadeira e termina apontando para a vaga: motivo em uma frase, o que você fez no período e por que está pronto agora.",
    "A IA serve para ensaiar a resposta e achar o que você fez no período, mas nunca para inventar cargo, curso ou datas, porque a incoerência aparece na checagem.",
    "Não existe número de meses que elimine currículo: o que pesa é a consistência entre datas, cargos e o que você diz na entrevista.",
  ],
  content: `
    <p>Para explicar uma lacuna no currículo na entrevista, responda em até três frases: diga o motivo sem justificar demais, cite o que você fez ou aprendeu no período e conecte com a vaga. A honestidade e a coerência com o currículo pesam mais do que o tamanho da pausa. A IA ajuda a ensaiar a resposta, não a inventá-la.</p>

    <p>Quem já ficou meses sem emprego sabe como a pergunta "e o que você fez nesse período?" dá frio na barriga. Ela é comum e tem resposta simples. Neste guia você encontra um modelo de resposta, exemplos por motivo, prompts para treinar com IA e uma lista do que evitar.</p>

    <h2>Por que o recrutador pergunta sobre a lacuna</h2>

    <p>Segundo o guia da <a href="https://www.serasaexperian.com.br/carreiras/blog-carreiras/como-explicar-um-gap-no-curriculo/" target="_blank" rel="noopener noreferrer">Serasa Experian Carreiras</a>, o recrutador quer entender a sua maturidade, o seu preparo e como cada fase contribuiu para o seu crescimento, e não julgar você. Um gap é qualquer período sem vínculo formal de trabalho, curto ou longo, por estudos, projetos pessoais, viagem, transição de carreira, família ou saúde.</p>

    <p>O portal <a href="https://napratica.org.br/noticias/como-explicar-um-periodo-sem-trabalhar-no-curriculo-em-entrevista-de-emprego" target="_blank" rel="noopener noreferrer">Na Prática</a> lembra que uma pausa entre dois empregos costuma ser entendida pelas datas e que não é obrigatório criar um bloco no currículo para um período de busca por emprego ou de cuidado com um familiar. Também afirma que não há regra de número de meses que faça um currículo ser eliminado pela triagem por IA, o que reduz muita ansiedade. Para entender como a triagem funciona, veja <a href="/artigos/curriculo-e-triagem-com-ia-como-recrutadores-filtram-candidatos">como recrutadores filtram candidatos</a>.</p>

    <h2>A fórmula da resposta em três frases</h2>

    <ol>
      <li>Motivo, em uma frase, sem pedir desculpas: "Fiquei fora do mercado por oito meses depois que a empresa encerrou a unidade."</li>
      <li>O que você fez: "Nesse tempo, concluí um curso de análise de dados e atendi dois clientes como freelancer."</li>
      <li>Ponte para a vaga: "Agora quero aplicar isso em uma função como esta, em que preciso organizar relatórios."</li>
    </ol>

    <p>Depois, pare. Quem fala demais soa defensivo. O Na Prática sugere encerrar sem se alongar e manter um tom positivo, com frases como "essa fase ficou para trás e hoje estou focado na próxima oportunidade". Se o recrutador quiser mais detalhes, ele pergunta.</p>

    <h2>Respostas por tipo de motivo</h2>

    <table>
      <thead><tr><th>Motivo</th><th>Como dizer</th><th>O que destacar</th></tr></thead>
      <tbody>
        <tr><td>Desligamento</td><td>"A empresa reduziu a equipe e meu contrato terminou."</td><td>Busca ativa, cursos, freelas no período</td></tr>
        <tr><td>Estudos</td><td>"Me afastei para fazer um curso intensivo de [área]."</td><td>Ligação do curso com a vaga</td></tr>
        <tr><td>Transição de carreira</td><td>"Decidi mudar de [área] para [área] e me preparei."</td><td>Projetos e certificações da nova área</td></tr>
        <tr><td>Família</td><td>"Precisei cuidar de um familiar; a situação foi resolvida."</td><td>Organização e maturidade, sem detalhes íntimos</td></tr>
        <tr><td>Saúde</td><td>"Passei por um tratamento e hoje estou apto a voltar."</td><td>Só o que você quiser compartilhar</td></tr>
        <tr><td>Pausa planejada</td><td>"Fiz uma pausa planejada por questões pessoais."</td><td>Disposição para retomar</td></tr>
      </tbody>
    </table>

    <p>Sobre saúde e família, a orientação dos dois guias é compartilhar só o que for relevante e confortável, sem entrar em detalhes pessoais. Você não deve explicações médicas ao entrevistador.</p>

    <h2>Como a IA ajuda a se preparar</h2>

    <p>A IA é um bom parceiro de ensaio porque não se cansa e não julga. Use-a em três momentos: achar o que você fez, escrever a resposta e treinar a pergunta. Comece fazendo um inventário honesto do período:</p>

<pre><code>Vou descrever o que fiz entre [mês/ano] e [mês/ano], quando estive sem emprego formal. Me faça perguntas, uma por vez, para eu lembrar de cursos, freelas, trabalho voluntário, projetos pessoais e responsabilidades que eu assumi. No fim, liste só o que eu confirmei, sem acrescentar nada.</code></pre>

    <p>Depois, peça a resposta curta, travando a invenção:</p>

<pre><code>Com base apenas nos fatos abaixo, escreva uma resposta de até 60 palavras para a pergunta "o que você fez nesse período?", em primeira pessoa, tom calmo e sem pedir desculpas. Termine ligando com a vaga de [cargo]. Fatos: [seus fatos]. Não invente cursos, cargos ou resultados.</code></pre>

    <p>Por fim, treine como se fosse a entrevista real:</p>

<pre><code>Aja como recrutador de uma empresa de [setor]. Faça a pergunta sobre a minha lacuna de [tempo] e, depois da minha resposta, dê uma nota de 1 a 5 em clareza, honestidade e conexão com a vaga, e uma sugestão de melhoria. Repita três vezes com variações da pergunta.</code></pre>

    <p>Para ensaiar o restante, o guia sobre <a href="/artigos/como-se-preparar-para-entrevistas-de-emprego-usando-ia">como se preparar para entrevistas usando IA</a> traz outras perguntas, e se a seleção for por vídeo com robô, veja a <a href="/artigos/entrevista-gravada-com-ia-recrutadora-como-se-sair-bem-e-seus-direitos">entrevista gravada com IA recrutadora</a>.</p>

    <h2>Exemplo: dez meses fora do mercado</h2>

    <p>Rafael trabalhava em logística, foi desligado e ficou dez meses sem vínculo. Nesse tempo, fez um curso de planilhas, ajudou a loja de um tio com estoque e estudou para uma certificação. Na entrevista para analista de operações, respondeu: "A empresa encerrou meu setor e eu aproveitei para me preparar. Fiz um curso de planilhas, organizei o estoque da loja de um familiar e estudei para a certificação. Agora quero aplicar isso em operações, que é onde sou mais forte."</p>

    <p>Foram três frases e nenhuma fala sobre injustiça ou crítica à empresa anterior. A resposta é verdadeira, curta e termina na vaga. A ajuda da IA foi lembrar o que ele fez e cortar excessos, não criar fatos.</p>

    <h2>O que colocar no currículo</h2>

    <p>Se a pausa for curta, as datas já explicam. Em pausas longas, vale uma linha no próprio currículo: "2025 a 2026: curso de análise de dados e projetos freelancer". O Na Prática lembra que estudos, trabalhos freelancer, projetos pessoais e voluntariado podem aparecer quando fazem parte da trajetória. Para escrever isso com apoio de IA, veja <a href="/artigos/melhores-ias-para-criar-curriculo-e-carta-de-apresentacao">as melhores IAs para criar currículo e carta</a> e <a href="/artigos/como-colocar-habilidades-de-ia-no-curriculo">como colocar habilidades de IA no currículo</a>.</p>

    <p>Se você precisa reconstruir a rede de contatos depois da pausa, o roteiro de <a href="/artigos/networking-com-ia-mensagens-para-recrutadores-e-indicacoes">networking com IA</a> traz mensagens prontas. E se a lacuna veio de uma demissão por automação, leia <a href="/artigos/como-se-recolocar-no-mercado-depois-de-ser-substituido-por-automacao">como se recolocar</a>.</p>

    <h2>Erros que derrubam candidatos</h2>

    <ul class="checklist">
      <li>Inventar cargo, projeto ou curso, ou alterar datas para esconder a pausa: a checagem de referências expõe.</li>
      <li>Apresentar curso curto como experiência longa.</li>
      <li>Criticar o empregador anterior.</li>
      <li>Dar detalhes pessoais, de família ou de saúde que a vaga não pede.</li>
      <li>Responder com desculpas ou postura defensiva.</li>
      <li>Decorar um texto da IA e recitar: soa robótico. Use como roteiro e fale com suas palavras.</li>
      <li>Colar dados sensíveis na IA: leia sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">privacidade e IA</a> antes de enviar informações de saúde ou de família.</li>
    </ul>

    <h2>Depois da resposta: salário e próximos passos</h2>

    <p>Superada a pergunta, venha preparado para as seguintes. A conversa sobre pretensão salarial costuma vir logo em seguida, e o guia de <a href="/artigos/como-negociar-salario-melhor-sabendo-usar-ia">como negociar salário com IA</a> ajuda a não aceitar menos por causa da pausa. Para organizar a volta, monte um <a href="/artigos/plano-de-carreira-com-ia-metas-de-90-dias">plano de carreira de 90 dias</a> e use o texto sobre <a href="/artigos/como-usar-ia-para-identificar-fechar-lacunas-de-habilidades">fechar lacunas de habilidades</a> para atualizar o que mudou enquanto você esteve fora.</p>

    <p>Hoje, escreva em cinco linhas o que fez durante a sua pausa, peça à IA a resposta de 60 palavras e grave você mesmo falando em voz alta. Duas ou três repetições bastam para a pergunta deixar de assustar.</p>
  `,
  faq: [
    {
      question: "Como explicar lacuna no currículo na entrevista?",
      answer:
        "Responda em até três frases: o motivo, o que você fez ou aprendeu no período e a conexão com a vaga. Seja breve e verdadeiro, sem pedir desculpas ou criticar o antigo empregador. Se o recrutador quiser mais, ele pergunta.",
    },
    {
      question: "Lacuna no currículo elimina o candidato?",
      answer:
        "Não existe regra de número de meses que elimine um currículo, segundo o portal Na Prática. O que pesa é a consistência entre datas, cargos e formação e o que você explica na seleção. Mantenha tudo coerente e verdadeiro.",
    },
    {
      question: "Preciso contar o motivo da lacuna se foi saúde?",
      answer:
        "Não precisa dar detalhes. Os guias consultados orientam compartilhar apenas o que for relevante e confortável, destacando que você está apto a retomar o trabalho. Você pode dizer que passou por um tratamento e que hoje está bem.",
    },
    {
      question: "Posso usar IA para escrever a resposta da lacuna?",
      answer:
        "Pode, para organizar fatos e ensaiar. Dê à IA somente informações verdadeiras e proíba invenção de cursos ou cargos. Depois, adapte o texto à sua voz, porque decorar uma resposta pronta soa artificial e pode gerar contradições.",
    },
    {
      question: "Devo colocar a lacuna no currículo?",
      answer:
        "Em pausas curtas, as datas costumam bastar. Em pausas mais longas, uma linha explicando o período, como curso, freelas ou projetos, ajuda. Nunca altere datas de emprego para esconder a pausa, pois isso pode ser descoberto em uma checagem.",
    },
  ],
};
