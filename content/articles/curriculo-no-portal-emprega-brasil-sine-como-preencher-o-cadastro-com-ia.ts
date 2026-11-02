import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "curriculo-no-portal-emprega-brasil-sine-como-preencher-o-cadastro-com-ia",
  title: "Currículo no Portal Emprega Brasil (Sine): como preencher com IA",
  seoTitle: "Currículo no Emprega Brasil (Sine): preencher com IA",
  excerpt:
    "Veja como cadastrar o currículo no Portal Emprega Brasil, do Sine, quais dados pedir à IA para organizar e como manter o perfil atualizado para receber vagas.",
  metaDescription:
    "Currículo no Portal Emprega Brasil (Sine): passo a passo do cadastro gratuito no gov.br, o que preencher, como usar IA para organizar experiências e cuidados com golpes.",
  category: "carreira",
  articleSubcategory: "curriculo-e-portfolio",
  date: "2026-11-02",
  readTime: 8,
  imageQuery: "job seeker laptop resume desk",
  seed: 1036,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Portal Emprega Brasil é o canal online do Sine para cadastrar o currículo e ser cruzado com vagas, e o serviço é gratuito para o cidadão, segundo o gov.br.",
    "O cadastro pede dados pessoais, escolaridade, experiência, áreas de interesse e regiões onde você aceita trabalhar, e as vagas compatíveis aparecem no seu perfil.",
    "A IA ajuda a organizar e escrever as experiências com clareza, mas você revisa tudo, não inventa cargo nem data e nunca cola documentos ou senhas na conversa.",
  ],
  content: `
    <p>O currículo no Portal Emprega Brasil é o cadastro profissional que você faz no Sistema Nacional de Emprego, o Sine, para ser cruzado com vagas de empresas da sua região. O serviço é gratuito para o cidadão, exige conta gov.br e pode ser acessado pelo portal, pelo aplicativo Carteira de Trabalho Digital ou em um posto do Sine.</p>

    <p>Muita gente preenche esse cadastro com pressa, deixa campos vazios e depois reclama que não aparece vaga. O motivo é que o cruzamento depende do que está escrito: ocupação desejada, experiência, região. A IA pode ajudar a transformar uma trajetória bagunçada em frases claras. Este guia mostra o passo a passo, os dados que vale preparar antes, prompts prontos e os cuidados com golpes. Informações conferidas nas páginas do gov.br em 02/11/2026.</p>

    <h2>O que é o Portal Emprega Brasil</h2>

    <p>Segundo a página do <a href="https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/sistema-nacional-de-emprego-sine/portal-emprega-brasil" target="_blank" rel="noopener noreferrer">Ministério do Trabalho e Emprego</a>, o Portal Emprega Brasil é um serviço online do Sine para aproximar trabalhadores e empregadores, que também pode ser feito presencialmente nos postos. O trabalhador cadastra dados pessoais, escolaridade e experiência, e as vagas compatíveis com o perfil aparecem no próprio cadastro. Empresas publicam vagas e perfis desejados no portal do empregador.</p>

    <p>O Sine não substitui outros canais. Ele é mais um caminho, gratuito, que funciona bem junto com o seu currículo em PDF, o LinkedIn e a candidatura direta em empresas. Para entender como as empresas filtram candidatos em geral, leia sobre <a href="/artigos/curriculo-e-triagem-com-ia-como-recrutadores-filtram-candidatos">currículo e triagem com IA</a>.</p>

    <h2>Antes de começar: o que separar</h2>

    <p>A <a href="https://www.gov.br/pt-br/servicos/buscar-emprego-no-sistema-nacional-de-emprego-sine" target="_blank" rel="noopener noreferrer">página do serviço no gov.br</a> informa que, para o acesso online, é preciso uma conta gov.br de nível bronze, prata ou ouro, além dos documentos de identificação. A mesma página dá a média de cerca de 15 minutos para a etapa de cadastro. Separe antes:</p>

    <ul class="checklist">
      <li>Dados pessoais e de contato atualizados (telefone e e-mail que você realmente consulta).</li>
      <li>Escolaridade e cursos, com nome da instituição e ano.</li>
      <li>Experiências: cargo, empresa, mês e ano de entrada e saída, e o que você fazia.</li>
      <li>Ocupações que você aceita exercer, e não só a última.</li>
      <li>Cidades ou regiões onde você pode trabalhar, considerando o custo e o tempo de deslocamento.</li>
    </ul>

    <p>Quem está sem emprego e precisa organizar o básico pode ler também o guia sobre o que fazer nas primeiras semanas depois de uma <a href="/artigos/demitido-o-que-fazer-nas-primeiras-semanas-rescisao-seguro-desemprego-e-ia">demissão: rescisão, seguro-desemprego e IA</a>.</p>

    <h2>Passo a passo do cadastro</h2>

    <ol>
      <li>Acesse o Portal Emprega Brasil pelo link da página oficial do serviço, ou abra o aplicativo Carteira de Trabalho Digital.</li>
      <li>Entre com a conta gov.br. Se não tiver o nível exigido, aumente a confiabilidade da conta primeiro.</li>
      <li>Preencha dados pessoais, escolaridade e experiência profissional.</li>
      <li>Informe as áreas e ocupações de interesse e as regiões onde aceita trabalhar.</li>
      <li>Revise tudo, salve e volte periodicamente para consultar as vagas compatíveis e atualizar o perfil.</li>
    </ol>

    <p>Os nomes de telas podem mudar. Se algo divergir, siga as instruções do próprio portal. Quem preferir atendimento presencial pode ir a um posto do Sine, e a página do gov.br informa que, no atendimento presencial, a espera pode chegar a cerca de 30 minutos.</p>

    <h2>Como a IA ajuda a escrever as experiências</h2>

    <p>O campo de experiência costuma ficar fraco: "auxiliar de serviços gerais, 2019 a 2022". A IA ajuda a transformar o que você lembra em frases objetivas, sem inventar. Dê o contexto e peça o rascunho. Use os prompts abaixo trocando o que está entre colchetes e sem colocar CPF, endereço completo ou senhas.</p>

    <pre><code>Quero descrever minha experiência para um cadastro de emprego.
Cargo: [cargo]. Local: [tipo de empresa e cidade]. Período: [mês/ano a mês/ano].
O que eu fazia no dia a dia: [liste do seu jeito, sem se preocupar com o texto].
Escreva 3 frases curtas começando com verbo no passado, sem inventar nada
que eu não tenha dito. Se faltar número ou resultado, faça perguntas.</code></pre>

    <pre><code>Tenho estas experiências: [cole as descrições]. Quero me candidatar a
vagas de [área]. Sugira 5 ocupações parecidas que posso marcar como
interesse, explicando em uma linha por que cada uma combina com meu histórico.</code></pre>

    <p>Para escolher bem o nome da ocupação, o texto sobre <a href="/artigos/mudar-de-area-com-ia-mapa-de-habilidades-cbo-e-primeiros-passos">mudar de área com IA e CBO</a> explica como a classificação brasileira de ocupações organiza os cargos. E, se você precisa de um modelo de currículo em arquivo, veja as <a href="/artigos/melhores-ias-para-criar-curriculo-e-carta-de-apresentacao">melhores IAs para criar currículo e carta de apresentação</a>.</p>

    <h2>Um exemplo com antes e depois</h2>

    <p>Cenário ilustrativo: Josiane trabalhou 3 anos como atendente numa padaria em Campinas e quer vagas de atendimento e caixa. Antes, o campo dizia apenas "atendente, 2021 a 2024". Depois de contar à IA o que fazia, o texto ficou assim, revisado por ela:</p>

    <blockquote><p>Atendi clientes no balcão e no caixa, conferi pedidos antes da entrega, fechei o caixa no fim do turno e ajudei a repor produtos nas prateleiras.</p></blockquote>

    <p>Nada foi inventado: só ficou mais claro. Se ela tiver um número real, como "atendia em torno de 150 clientes por turno", pode incluir. Se não tiver, não deve chutar. Compare com o método de <a href="/artigos/adaptar-curriculo-para-cada-vaga-com-ia-palavras-da-vaga-sem-inventar">adaptar o currículo para cada vaga sem inventar</a>, que usa a mesma regra de ouro.</p>

    <h2>Quem tem pouca experiência ou lacunas</h2>

    <p>Se esta é a primeira vez no mercado, descreva estudos, cursos, trabalhos voluntários e atividades informais com o mesmo cuidado, e leia o guia de <a href="/artigos/primeiro-emprego-com-ia-curriculo-sem-experiencia-e-jovem-aprendiz">primeiro emprego com IA e jovem aprendiz</a>. Quem ficou um tempo afastado deve registrar as datas corretamente e preparar uma explicação curta para a entrevista, como mostra o texto sobre <a href="/artigos/lacuna-no-curriculo-como-explicar-na-entrevista-com-ajuda-de-ia">lacunas no currículo</a>. Quem trabalha por conta própria encontra modelos em <a href="/artigos/curriculo-de-autonomo-e-mei-transformar-trabalhos-por-conta-propria-em-experiencia">currículo de autônomo e MEI</a>.</p>

    <h2>Cuidados e golpes de falsa vaga</h2>

    <p>Vaga de verdade não cobra para você participar do processo. Desconfie de mensagens que pedem pagamento de taxa, depósito para "reservar" a vaga ou código recebido por SMS. A IA pode ajudar a analisar um texto suspeito, como mostra o guia para <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">checar mensagem suspeita com IA</a>, mas o principal é não passar senha, token ou foto de documento a quem entrou em contato sem você procurar.</p>

    <p>Sobre o uso da IA em si, não cole na conversa documentos, números de documentos nem a senha do gov.br. O texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> explica o que costuma ser compartilhado sem perceber.</p>

    <h2>Erros comuns</h2>

    <p>O primeiro é marcar uma única ocupação, a última que você teve, e perder vagas parecidas. O segundo é limitar demais a região, quando uma cidade vizinha seria viável. O terceiro é nunca voltar ao portal: a própria página orienta manter dados e preferências atualizados, porque o cruzamento depende deles. O quarto é exagerar na descrição: cargo ou data inventados aparecem na checagem de referências e queimam sua candidatura.</p>

    <p>Por fim, evite confiar só no Sine. Candidate-se diretamente, avise sua rede e prepare a conversa seguinte com o guia de <a href="/artigos/como-se-preparar-para-entrevistas-de-emprego-usando-ia">como se preparar para entrevistas usando IA</a>. Se quiser saber quanto o mercado paga pela sua função, a <a href="/artigos/pesquisa-salarial-com-ia-quanto-pagam-pela-sua-funcao-caged-vagas-e-faixa-realista">pesquisa salarial com IA</a> mostra o caminho.</p>

    <p>Reserve 30 minutos hoje: junte os dados, peça o rascunho das experiências à IA, revise cada frase e faça o cadastro. Daqui a uma semana, volte ao portal e confira as vagas que apareceram.</p>
  `,
  faq: [
    {
      question: "O Portal Emprega Brasil é gratuito?",
      answer:
        "Sim para o trabalhador. A página do serviço no gov.br informa que ele é gratuito para o cidadão. O acesso online exige conta gov.br de nível bronze, prata ou ouro. Desconfie de qualquer cobrança para se candidatar ou para reservar uma vaga, porque isso é sinal de golpe.",
    },
    {
      question: "Como cadastrar currículo no Sine pela internet?",
      answer:
        "Acesse o Portal Emprega Brasil pelo link do serviço no gov.br ou use o aplicativo Carteira de Trabalho Digital, entre com a conta gov.br e preencha dados pessoais, escolaridade, experiência, áreas de interesse e regiões. Depois, volte para ver as vagas compatíveis com o perfil.",
    },
    {
      question: "Posso usar IA para escrever meu currículo do Sine?",
      answer:
        "Pode, como apoio para organizar e deixar as frases claras. Conte à IA o que você fazia de verdade, peça frases curtas sem invenção e revise cada linha. Não cole documentos, senhas ou dados desnecessários na conversa, e não aceite cargo, data ou número que você não possa comprovar.",
    },
    {
      question: "Preciso ir a um posto do Sine ou dá para fazer tudo online?",
      answer:
        "Dá para fazer online, pelo portal ou pelo aplicativo Carteira de Trabalho Digital, desde que você tenha conta gov.br no nível exigido. O atendimento presencial nos postos do Sine segue disponível para quem prefere ou tem dificuldade com o acesso digital.",
    },
    {
      question: "Com que frequência devo atualizar o cadastro?",
      answer:
        "Sempre que mudar algo importante, como telefone, escolaridade, curso novo, experiência ou região de interesse. O Ministério orienta manter dados e preferências em dia, porque o cruzamento com as vagas depende deles. Uma revisão rápida a cada poucas semanas é um bom hábito.",
    },
  ],
  quiz: [
    {
      question: "O que o serviço do Sine exige para acesso online?",
      options: [
        "Pagamento de uma taxa de inscrição",
        "Conta gov.br de nível bronze, prata ou ouro",
        "Indicação de uma empresa",
      ],
      answer: 1,
      explanation:
        "A página oficial informa que o serviço é gratuito para o cidadão e exige conta gov.br em um dos três níveis.",
    },
    {
      question: "Qual é a regra ao usar IA para descrever suas experiências?",
      options: [
        "Deixar a IA completar números e cargos que faltam",
        "Contar o que fez de verdade e revisar cada frase",
        "Colar o RG para a IA conferir",
      ],
      answer: 1,
      explanation:
        "A IA organiza o que você informa. Cargo, data ou número inventado prejudica a candidatura.",
    },
  ],
};
