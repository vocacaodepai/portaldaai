import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "claude-for-legal-artifacts-galeria-cite-check-advogados",
  title: "Claude for Legal ganha galeria de ferramentas prontas para advogados",
  summary:
    "A Anthropic lançou artefatos prontos no Claude for Legal: checagem de citações, quadro de contratos e mapa de leis, com mais de 60 conectores.",
  author: "Bruno Danello",
  sourceName: "Anthropic, The Decoder",
  sourceUrl: "https://claude.com/resources/articles/introducing-artifacts-for-legal-work",
  date: "2026-10-28",
  publishedAt: "2026-10-28T20:40:00-03:00",
  topic: "lancamentos",
  imageQuery: "gavel and law books courtroom",
  content: `
    <p>A Anthropic anunciou nesta quarta-feira, 28 de outubro de 2026, uma galeria de artefatos prontos para o Claude for Legal, a versão do Claude voltada a equipes jurídicas, lançada em maio. Artefatos são ferramentas interativas, como painéis, tabelas e quadros de acompanhamento, que a equipe abre dentro do Claude, adapta aos seus próprios dados e compartilha com colegas. A novidade foi publicada pela própria Anthropic e comentada pelo site The Decoder.</p>

    <p>A ideia é simples: em vez de cada escritório ou departamento jurídico montar do zero uma planilha ou um fluxo para tarefas repetidas, ele parte de um modelo que já abre com um exemplo, para ver como o trabalho fica pronto, e só depois troca pelos documentos e fontes reais.</p>

    <h2>O que vem na galeria</h2>
    <p>Segundo a Anthropic, os primeiros modelos cobrem as tarefas que as equipes jurídicas mais pediram desde o lançamento em maio. A lista inclui seis itens do próprio catálogo da empresa:</p>
    <ul>
      <li><strong>Cite check:</strong> compara um documento jurídico com as fontes citadas e aponta trechos que não batem, páginas erradas e fontes que não sustentam a afirmação.</li>
      <li><strong>Matriz de comparação entre jurisdições:</strong> reúne em uma tabela como um tema, por exemplo as regras de aviso de vazamento de dados, é tratado em diferentes estados ou países, com links para a lei de origem.</li>
      <li><strong>Quadro de casos:</strong> transforma cartas de contratação, e-mails ou planilhas em um quadro de casos abertos, com responsável, próximo passo e próximo prazo.</li>
      <li><strong>Quadro de desvios do padrão:</strong> compara contratos com os termos padrão da empresa, marca cada cláusula diferente e encaminha para quem aprova exceções.</li>
      <li><strong>Radar regulatório:</strong> mostra em uma linha do tempo as regulações que se aproximam, de acordo com o negócio e os locais onde a empresa atua, ordenadas por impacto.</li>
      <li><strong>Revisão tabular:</strong> monta uma tabela a partir de vários contratos com os termos que você pergunta, como multa rescisória ou cláusula de não concorrência, com links para o texto exato.</li>
    </ul>
    <p>A Anthropic diz que cada resposta ou resultado traz um link para a fonte. O fluxo descrito é o mesmo em todos: a pessoa leva seus documentos, o Claude faz a primeira passada e o advogado aplica o julgamento sobre o resultado.</p>

    <h2>Conectores e compartilhamento</h2>
    <p>Para evitar o envio manual de arquivos, as equipes podem ligar o Claude às bases que já usam. A Anthropic afirma que, desde o lançamento, o Claude for Legal ganhou mais de 60 conectores jurídicos, entre eles Bloomberg Law, Filevine, Ivo, Legora e Patlytics. Os artefatos também podem ser compartilhados com colegas de outras áreas, com clientes e com parceiros, e as configurações de compartilhamento preservam a privacidade e as barreiras éticas entre equipes, algo que escritórios exigem quando atendem clientes com interesses opostos.</p>

    <h2>Escritórios e empresas já entram na galeria</h2>
    <p>A galeria não é só da Anthropic. A empresa diz que fez parcerias com empresas de tecnologia jurídica e escritórios, que construíram os próprios artefatos:</p>
    <ul>
      <li><strong>Goodwin:</strong> o AI Governance Benchmark compara a abordagem de governança de IA de uma empresa para achar lacunas.</li>
      <li><strong>Harvey:</strong> o Harvey Intake dá ao pessoal de negócios um só lugar no Claude para enviar dúvidas e pedidos ao jurídico. As perguntas de rotina são respondidas com as orientações do próprio jurídico e o resto vai para um advogado.</li>
      <li><strong>Foley e Lardner:</strong> o Obligations Checker revisa contratos para listar as obrigações de cada parte e acompanhar o que foi combinado antes e depois do fechamento.</li>
      <li><strong>PwC:</strong> o Subpoena Response Tool usa precedentes, objeções padrão e modelos da equipe para gerar primeiros rascunhos de respostas a intimações, prontos para auditoria.</li>
    </ul>
    <p>A Anthropic acrescenta que há mais artefatos a caminho de Legora e Orrick. A empresa também financia grupos de interesse público que criam artefatos para acesso à justiça e apoia programas de ensino para futuros advogados aprenderem a construir com o Claude. Também criou um Programa de Embaixadores Jurídicos para que profissionais troquem experiências. A empresa publicou ainda um depoimento do Spellbook, que diz estar perto de 500 mil contratos por mês passando pela ferramenta.</p>

    <h2>O ponto mais importante: a verificação</h2>
    <p>O recurso que mais chama atenção é o de checagem de citações. Casos de IA que inventam jurisprudência já viraram problema real nos tribunais, e já cobrimos uma ferramenta pensada para isso em <a href="/noticias/citeproof-ferramenta-verifica-citacoes-falsas-ia-advogados">CiteProof verifica citações falsas de IA em petições de advogados</a>. O artefato da Anthropic ataca o mesmo risco por dentro do Claude: confronta o texto com as fontes e mostra o que não confere.</p>

    <p>Vale a cautela de sempre. A promessa de verificação vem da própria Anthropic. A reportagem do The Decoder não traz dados de taxa de acerto, nem número de clientes, nem preço, nem regiões onde o produto está disponível. O desenho em si deixa claro que o resultado é um primeiro filtro, e a conferência final continua sendo do advogado.</p>

    <h2>Uma corrida cada vez mais cheia</h2>
    <p>A área jurídica virou um dos terrenos mais disputados da IA para empresas. Startups especializadas levantaram valores altos, como mostramos em <a href="/noticias/harvey-capta-550-milhoes-15-6-bilhoes-ia-juridica">Harvey capta US$ 550 milhões e vale US$ 15,6 bilhões</a> e em <a href="/noticias/legora-serie-e-550-milhoes-8-8-bilhoes-ia-juridica">Legora levanta US$ 550 milhões em rodada Série E</a>. O movimento da Anthropic chama atenção porque o Claude aparece, ao mesmo tempo, como plataforma que conecta essas empresas (Legora e Harvey estão entre os parceiros citados) e como concorrente direto delas em tarefas básicas. É o mesmo desenho que vimos em outros setores, como em <a href="/noticias/invesco-conector-claude-assessores-financeiros-carteiras-modelo">Invesco leva carteiras modelo para dentro do Claude</a>.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo quem não é advogado se beneficia dessa linha de produtos. Contratos, cláusulas e prazos estão na vida de qualquer pessoa que presta serviço, vende online ou abre uma empresa, e a tendência é que ferramentas assim cheguem a planos mais baratos. Para o profissional jurídico, o recado é de que a conferência de fontes está virando parte padrão do fluxo de trabalho, e não um extra.</p>

    <p>Se você quer entender o que a IA já faz bem com contratos hoje, e onde ela ainda exige revisão humana, leia <a href="/artigos/ia-para-contratos-revisar-documentos-juridicos-mais-rapido">IA para contratos: revisar documentos jurídicos mais rápido</a> e <a href="/artigos/advogados-e-ia-o-que-a-oab-recomenda-e-o-que-muda-na-advocacia">Advogados e IA: o que a OAB recomenda e o que muda na advocacia</a>. Para comparar as principais assistentes antes de escolher uma, veja <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini: qual IA escolher</a>.</p>

    <p>A regra prática continua a mesma: use a IA para a primeira passada, peça sempre a fonte de cada afirmação e confira os pontos que mudam o resultado antes de assinar ou protocolar qualquer coisa.</p>

    <p>A notícia veio do comunicado da Anthropic, com o The Decoder como segunda fonte. O texto é nosso, com análise própria.</p>
  `,
};
