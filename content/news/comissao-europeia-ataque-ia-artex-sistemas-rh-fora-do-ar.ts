import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "comissao-europeia-ataque-ia-artex-sistemas-rh-fora-do-ar",
  title: "Comissão Europeia confirma ataque com IA que travou sistemas por 10 dias",
  summary:
    "Hackers derrubaram holerites e reembolsos médicos de funcionários da Comissão Europeia com ajuda de IA. Ainda não se sabe se dados foram levados.",
  author: "Bruno Danello",
  sourceName: "Security Affairs, Politico, Notebookcheck",
  sourceUrl: "https://securityaffairs.com/203483/hacking/european-commission-cyberattack-artex-ai-tool-suspected-in-prolonged-disruption.html",
  date: "2026-11-20",
  publishedAt: "2026-11-20T09:40:00-03:00",
  imageQuery: "Berlaymont building European Commission Brussels",
  topic: "seguranca",
  content: `
    <p>A Comissão Europeia, o braço executivo da União Europeia, confirmou que sofreu uma campanha de ataque cibernético em que os invasores usaram inteligência artificial, e que sistemas internos de recursos humanos ficaram fora do ar por mais de dez dias. A informação foi publicada primeiro pelo Politico e detalhada nesta quinta-feira (19) por veículos de segurança como o <a href="https://securityaffairs.com/203483/hacking/european-commission-cyberattack-artex-ai-tool-suspected-in-prolonged-disruption.html" rel="noopener noreferrer nofollow">Security Affairs</a> e o <a href="https://www.notebookcheck.net/European-Commission-hit-by-huge-cyberattack-with-free-AI-tool-staff-data-may-be-exposed.1454697.0.html" rel="noopener noreferrer nofollow">Notebookcheck</a>.</p>

    <p>O caso é o mais alto na hierarquia entre os ataques assistidos por IA que o Portal da AI acompanha nas últimas semanas: não se trata de uma startup ou de um fornecedor de software, mas da instituição que escreve as regras de IA para 27 países. O que se sabe, o que não se sabe e o que isso muda para quem usa ferramentas de IA está abaixo.</p>

    <h2>O que se sabe</h2>
    <p>Segundo o Security Affairs, que cita a reportagem do Politico e funcionários da UE, a Comissão detectou sinais do ataque em 22 de outubro. Desde então, sistemas usados no dia a dia dos servidores europeus ficaram indisponíveis ou instáveis. Entre os afetados estão o Sysper, plataforma de recursos humanos onde o funcionário vê holerite, pede férias e envia folha de ponto, e o MyPMO, sistema de reembolso de despesas médicas. Serviços de tradução também foram atingidos, e a Notebookcheck informa que outras aplicações foram desligadas por precaução.</p>

    <p>O pagamento de salários, segundo funcionários ouvidos pelo Politico, saiu no prazo. O problema foi o resto: gente que não conseguia lançar horas ou solicitar férias, e uma comunicação interna que, de acordo com o Security Affairs, tratou o caso como "problema técnico geral" antes de o ataque vir a público. A Comissão realizou uma reunião urgente do seu comitê interno de gestão, e a comissária de tecnologia, Henna Virkkunen, informou o colegiado de comissários na quarta-feira (18). Um funcionário da UE disse ao Politico que a maior parte do ataque já foi contida.</p>

    <p>O porta-voz Thomas Regnier afirmou que sistemas individuais foram alvo e que as pessoas afetadas foram avisadas, "conforme a prática padrão". Ele se recusou a atribuir o ataque a algum grupo ou país.</p>

    <h2>O papel da ARTEX e o que ainda não está confirmado</h2>
    <p>As reportagens apontam a ARTEX como ferramenta suspeita. Trata-se de uma suíte de testes de invasão com IA, parente da que o Portal da AI já descreveu no <a href="/noticias/workos-invadida-artex-ia-app-de-vendas-clientes-openai-anthropic">caso da WorkOS</a>: o operador dá uma meta em linguagem simples, agentes de IA dividem o trabalho e usam ferramentas reais de hacking para executar. Segundo o Security Affairs, a ARTEX não traz um modelo próprio e se conecta ao modelo externo que o operador escolher. O desenvolvedor retirou o projeto do repositório em outubro depois de relatos de uso indevido, mas cópias independentes continuam circulando.</p>

    <p>A conexão com o ataque vem de uma fonte da UE ouvida pelo Politico: grupos de ameaça usam ferramentas como a ARTEX e já tiveram a Comissão como alvo. A equipe de resposta a incidentes das instituições europeias, a CERT-UE, publicou em 5 de novembro uma nota técnica sobre a ferramenta, segundo o Security Affairs. Mesmo assim, as próprias reportagens ressalvam pontos em aberto:</p>
    <ul>
      <li><strong>Papel exato da ferramenta:</strong> a Notebookcheck diz que não está claro se a ARTEX ajudou os invasores a entrar ou se foi usada só para procurar falhas. O Security Affairs trata a ARTEX como ferramenta suspeita, não como método confirmado.</li>
      <li><strong>Como entraram:</strong> não há informação pública sobre a porta de entrada.</li>
      <li><strong>Dados de funcionários:</strong> não foi confirmado se alguém acessou ou copiou informações. As plataformas atingidas guardam dados sensíveis, como nome, salário e informações de saúde, mas isso é o que poderia estar em jogo, não o que foi comprovado. Colocar os sistemas de volta no ar não prova que nada foi copiado antes.</li>
      <li><strong>Autoria:</strong> a Comissão não atribuiu o ataque a ninguém.</li>
    </ul>

    <h2>Um alvo recorrente</h2>
    <p>O Security Affairs lembra que a Comissão já teve outros incidentes em 2026, sem ligação estabelecida com este: em janeiro, rastros de invasores no sistema de gestão de celulares funcionais, e em março, uma intrusão por meio de uma atualização comprometida de uma ferramenta de segurança, que teria levado cerca de 91,7 GB de dados compactados. Fica o padrão de um alvo que é atacado várias vezes no mesmo ano.</p>

    <p>A ARTEX também não aparece pela primeira vez. Ela foi ligada a ataques contra <a href="/noticias/bancos-coreia-ia-hacker-autonomo-vazamento">bancos na Coreia do Sul</a>, a uma ofensiva de <a href="/noticias/hackers-chineses-artex-ia-connectwise-2250-tenants-microsoft">hackers chineses contra contas do Microsoft 365</a> e ao que a Wiz chamou de <a href="/noticias/wiz-black-october-northflank-llmjacking-plataformas-ia">Black October</a>, a série de plataformas de IA atingidas em outubro. A diferença agora é o alvo: um órgão público do tamanho da Comissão.</p>

    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Berlaymont_EU_Building-Brussels.jpg/1280px-Berlaymont_EU_Building-Brussels.jpg" alt="Edifício Berlaymont, sede da Comissão Europeia, em Bruxelas" loading="lazy" />
      <figcaption>Foto: Acediscovery / Wikimedia Commons (CC BY 4.0)</figcaption>
    </figure>

    <h2>Por que isso importa para você</h2>
    <p>Se a Comissão, com equipe própria de segurança e uma CERT dedicada, ficou mais de dez dias com sistemas de RH fora do ar, uma empresa pequena não está imune. O ponto central é a velocidade e o custo: uma ferramenta que pode ser baixada de graça e conectada a um modelo de IA reduz o conhecimento técnico necessário para um ataque. Para quem tem negócio ou trabalha com dados de clientes, três cuidados são práticos:</p>
    <ul>
      <li><strong>Atualize e reduza o que está exposto na internet:</strong> agentes de IA testam muitas portas em pouco tempo, então painéis de administração abertos e sistemas desatualizados são os primeiros a cair.</li>
      <li><strong>Separe os sistemas de RH e financeiro:</strong> folha de pagamento e dados de saúde de funcionários merecem acesso restrito e cópia de segurança fora da rede principal, para o negócio continuar rodando se o sistema cair.</li>
      <li><strong>Prepare a comunicação:</strong> a reclamação interna na Comissão foi a falta de informação. Ter um plano simples de quem avisa o quê, e quando, evita boato e pânico.</li>
    </ul>
    <p>Para o leitor brasileiro, há ainda um lembrete de regulação: a lei geral de proteção de dados exige comunicar incidentes com dados pessoais, e o caso europeu mostra como isso vira um problema de reputação mesmo antes de se saber se houve vazamento. Para se proteger no dia a dia, o guia de <a href="/artigos/chave-de-acesso-passkey-como-ativar-e-proteger-sua-conta-de-golpes">chave de acesso</a> ajuda a reduzir o risco de contas invadidas. Empresas de segurança também correm atrás desse cenário, como mostrou a <a href="/noticias/crowdstrike-compra-fiddler-dreadnode-ai-kill-switch-agentes-ia">compra de duas startups pela CrowdStrike</a> para vigiar agentes de IA.</p>

    <p>O que acompanhar daqui para frente: se a Comissão confirmar ou descartar vazamento de dados de funcionários, se informar oficialmente a ferramenta usada e se comunicar a autoridade europeia de proteção de dados, caso a violação seja confirmada.</p>
  `,
};
