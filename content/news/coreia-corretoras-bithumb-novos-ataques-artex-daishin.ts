import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "coreia-corretoras-bithumb-novos-ataques-artex-daishin",
  title: "Nova onda de ataques atinge corretoras e a Bithumb na Coreia do Sul",
  summary:
    "Daishin Securities expôs dados de 38.490 clientes, e Mirae Asset e Bithumb reportaram incidentes. Um mês antes, o ataque foi ligado à ferramenta de IA Artex.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl:
    "https://techcrunch.com/2026/10/28/south-koreas-financial-industry-hit-by-fresh-wave-of-cyberattacks/",
  date: "2026-10-28",
  publishedAt: "2026-10-28T21:30:00-03:00",
  topic: "seguranca",
  imageQuery: "Bithumb cryptocurrency exchange Seoul",
  content: `
    <p>O setor financeiro da Coreia do Sul voltou a ser alvo de ataques cibernéticos pouco mais de um mês depois da primeira onda de invasões, que pesquisadores ligaram ao uso de uma ferramenta de teste de invasão movida a inteligência artificial. Segundo a reportagem do TechCrunch publicada em 28 de outubro de 2026, a corretora Daishin Securities confirmou que um ataque expôs dados pessoais de 38.490 clientes, enquanto a gestora Mirae Asset Global Investments e a corretora de criptomoedas Bithumb comunicaram, no mesmo dia, incidentes de segurança próprios.</p>

    <p>Os números e os nomes importam, mas o ponto mais relevante para quem acompanha o assunto é outro: ainda não se sabe se a mesma ferramenta de IA esteve por trás dos novos casos. A própria reportagem deixa claro que não há essa confirmação. O que existe é um histórico recente, e ele ajuda a entender por que o episódio chama atenção fora da Coreia.</p>

    <h2>O que aconteceu em cada empresa</h2>
    <p>A Daishin Securities é o caso mais detalhado até agora. A empresa informou que o ataque expôs nomes, endereços de e-mail e números de celular de 38.490 clientes. Ela já avisou as pessoas afetadas, disse que coopera com as autoridades e afirmou que vai compensar perdas nos termos exigidos pela lei. Não há, na reportagem, menção a senhas, saldos ou dados de operações vazados, e esse tipo de detalhe costuma ser esclarecido só depois, conforme as investigações avançam.</p>
    <p>A Mirae Asset Global Investments reportou um incidente de cibersegurança na quarta-feira, 28 de outubro, mas ainda não confirmou se dados de clientes foram levados. A Bithumb, uma das exchanges de criptomoedas do país, também reportou um incidente no mesmo dia e igualmente não confirmou se houve coleta de dados de usuários. Segundo o TechCrunch, a Comissão de Serviços Financeiros, a Daishin, a Bithumb e a Mirae não responderam aos pedidos de comentário.</p>
    <p>As autoridades ainda não determinaram a causa raiz das novas invasões e os investigadores não estabeleceram uma ligação entre os incidentes. Ou seja, três empresas relataram problemas no mesmo dia, mas nada indica por enquanto que foram um único ataque coordenado. Vale tratar essa informação com cautela, sem tirar conclusões que os fatos ainda não sustentam.</p>

    <h2>O elo com a ferramenta Artex</h2>
    <p>O contexto vem da onda anterior. De acordo com a reportagem, pesquisadores da CrowdStrike associaram os ataques de setembro a um suspeito hacker baseado na China que teria usado o Artex, uma ferramenta de teste de invasão com inteligência artificial. Uma reportagem da Reuters, citada pelo TechCrunch, fala em 16 empresas financeiras atingidas naquela primeira rodada. Já cobrimos aqui o <a href="/noticias/bancos-coreia-ia-hacker-autonomo-vazamento">caso dos bancos sul-coreanos suspeitos de terem sido invadidos por uma IA autônoma</a> e também o <a href="/noticias/hackers-chineses-artex-ia-connectwise-2250-tenants-microsoft">uso do Artex contra mais de 2.250 ambientes Microsoft 365</a>.</p>
    <p>Ferramentas desse tipo existem para que equipes de segurança simulem ataques e encontrem falhas antes dos criminosos. O problema aparece quando a mesma automação é usada para o lado ofensivo: o que antes exigia um time experiente e dias de trabalho passa a ser feito em escala, testando muitos sistemas ao mesmo tempo. Nos novos incidentes, o TechCrunch não afirma que o Artex foi usado, e a reportagem também não descreve os métodos dos atacantes. Por isso, a conexão com IA aqui é de contexto, e não de causa comprovada.</p>

    <h2>A resposta do governo sul-coreano</h2>
    <p>O regulador financeiro do país pediu medidas de cibersegurança mais fortes depois dos ataques a empresas financeiras e a órgãos do governo. O governo também planeja fazer verificações de segurança em dezenas de sistemas de TI do setor privado. A reportagem menciona ainda que, no dia anterior, 27 de outubro, o Japão reportou um incidente de cibersegurança envolvendo a GMO Internet, depois de ataques a instituições financeiras japonesas, e que hackers teriam publicado dados roubados de clientes. Os dois países, portanto, enfrentam um período de pressão sobre o setor financeiro, embora a reportagem não afirme que os episódios estejam ligados.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para o leitor brasileiro, o caso não é distante. Corretoras, exchanges de criptomoedas e fintechs guardam o mesmo tipo de dado que vazou na Coreia: nome, e-mail e telefone. Esses dados parecem pouco sensíveis, mas são a matéria-prima de golpes de engenharia social, como mensagens falsas em nome da corretora ou ligações pedindo uma confirmação de segurança. Quem investe ou opera cripto deve desconfiar de qualquer contato inesperado que cite um incidente recente, mesmo que o remetente conheça seu nome e seu telefone.</p>
    <p>Para quem tem um negócio, a lição é de rotina. Ativar autenticação em dois fatores em todas as contas importantes, limitar quem tem acesso a cadastros de clientes e revisar com frequência quais sistemas estão expostos à internet reduz muito a superfície de ataque, inclusive contra ferramentas automatizadas. Se você usa agentes de IA conectados a sistemas internos, vale tratá-los como um funcionário novo: acesso mínimo, registro de tudo o que fazem e revisão periódica. Nosso <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist para escolher ferramentas de IA com segurança</a> e o guia de <a href="/artigos/lgpd-para-pequeno-negocio-que-usa-ia-checklist-de-dados-de-clientes">LGPD para pequenos negócios que usam IA</a> trazem passos práticos para começar hoje.</p>
    <p>Também vale acompanhar o desfecho. Se os investigadores confirmarem que uma ferramenta de IA conduziu os novos ataques, será mais um sinal de que a automação ofensiva deixou de ser teoria e passou a fazer parte do dia a dia das equipes de defesa, o que muda o padrão mínimo de proteção exigido de qualquer empresa que guarda dados de clientes. Se a causa for outra, o episódio continua servindo de lembrete de que o setor financeiro é um alvo constante e de que o tempo de resposta e a transparência com os clientes pesam tanto quanto a prevenção. Como a Daishin avisou os afetados e prometeu compensação, esse é o tipo de conduta que se espera de qualquer empresa depois de um vazamento.</p>
    <p>Outro ponto prático é o que fazer se você receber um aviso de vazamento de uma empresa da qual é cliente. Troque a senha da conta e de qualquer outro serviço onde use a mesma combinação, ative o segundo fator, confira se há movimentações estranhas e guarde o comunicado oficial para eventuais reclamações. No Brasil, a LGPD garante ao titular o direito de saber quais dados foram expostos e de cobrar providências da empresa responsável, e o aviso do incidente é justamente o primeiro passo desse processo. Quanto mais cedo o cliente age, menor a chance de o dado vazado ser usado em fraude.</p>
    <p>Por fim, a notícia mostra como o ciclo de ataque e defesa se acelerou. Há um mês, a discussão era se uma IA autônoma realmente poderia invadir bancos. Hoje, o debate passou a ser quantas empresas conseguem se preparar a tempo para ataques que se repetem em ondas, em países diferentes e contra setores inteiros ao mesmo tempo. Para o pequeno empreendedor, isso significa que segurança deixou de ser um assunto só de grandes bancos e passou a ser parte do básico de qualquer operação digital, do cadastro de clientes à loja virtual.</p>

    <div class="callout-box">
      <span class="callout-label">O que ainda não se sabe</span>
      <p>Nenhuma fonte confirmou até agora que o Artex ou qualquer outra IA esteve por trás dos ataques a Daishin, Mirae Asset e Bithumb. A causa raiz e a ligação entre os incidentes seguem em investigação.</p>
    </div>
  `,
};
