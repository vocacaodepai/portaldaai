import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "anthropic-mythos-vulnerabilidade-rejetto-hfs-exploracao",
  title: "IA da Anthropic acha falha crítica, hackers exploram em 24 horas",
  summary:
    "Modelo Mythos, restrito ao programa Glasswing, achou falha no Rejetto HFS que vira acesso total de administrador em servidores.",
  author: "Bruno Danello",
  sourceName: "The Register",
  sourceUrl:
    "https://www.theregister.com/security/2026/10/03/anthropics-super-bug-hunting-model-mythos-is-hardcore-good-at-math-as-latest-vuln-under-attack-shows/5300933",
  date: "2026-10-04",
  content: `
    <p>O pesquisador Zach Hanley, da empresa de segurança ofensiva Horizon3, usou o Mythos, modelo de caça a vulnerabilidades da Anthropic, para encontrar uma falha crítica no Rejetto HTTP File Server (HFS), programa de código aberto usado para compartilhar arquivos por rede. Segundo reportagem do <a href="https://www.theregister.com/security/2026/10/03/anthropics-super-bug-hunting-model-mythos-is-hardcore-good-at-math-as-latest-vuln-under-attack-shows/5300933" target="_blank" rel="noopener noreferrer nofollow">The Register</a> publicada no sábado (3), Hanley achou a brecha na quarta-feira (2) dentro do Project Glasswing, programa pelo qual a Anthropic libera o Mythos só para parceiros selecionados, por considerar o modelo "poderoso demais" para acesso público.</p>
    <p>A falha, catalogada como CVE-2026-61500, deixa qualquer atacante remoto forjar um cookie de sessão de administrador no HFS e, a partir daí, executar código arbitrário no servidor, ou seja, assumir controle total da máquina sem precisar de senha. Em menos de 24 horas depois da divulgação pública, pesquisadores da VulnCheck já tinham flagrado exploração ativa da brecha partindo de um endereço de IP ligado à China contra servidores nos Estados Unidos e no Japão, e, até a sexta-feira (4), mais quatro ataques chegaram por IPs americanos que pareciam estar atuando como proxy, técnica comum entre grupos chineses para disfarçar origem.</p>

    <h2>Como o Mythos encontrou algo que levaria dias de trabalho humano</h2>
    <p>A raiz do problema está em como o HFS gera a chave que assina os cookies de sessão: em vez de usar um gerador de números aleatórios criptográfico, o programa usa o <code>Math.random()</code> do JavaScript, que no motor V8 roda o algoritmo xorshift128+, conhecido por ser reversível quando se tem amostras suficientes de sua saída. Isso já seria perigoso por si só, mas o Mythos foi além: identificou, numa parte separada do código, que o próprio HFS vaza valores brutos gerados por esse mesmo <code>Math.random()</code> para qualquer cliente não autenticado durante o processo de login.</p>
    <p>O modelo então conectou as duas descobertas como uma cadeia de ataque só, determinou que o vazamento produzia exatamente as observações necessárias para reconstruir o estado interno do gerador usando o Z3, resolvedor de restrições matemáticas da Microsoft, e a partir daí recuperar a chave de assinatura original usada na inicialização do processo. Com a chave em mãos, basta forjar um cookie de administrador válido, autenticar com ele e usar uma função já embutida no próprio HFS para rodar comandos no servidor. Hanley publicou detalhes técnicos e um vídeo da exploração no mesmo dia em que fez a descoberta, o que ajuda a explicar a velocidade com que atacantes reais passaram a usar a falha depois.</p>
    <p>Esse tipo de encadeamento de observações aparentemente desconectadas em um exploit funcional costuma levar dias de análise criptográfica manual por um pesquisador humano experiente. É o mesmo tipo de capacidade que já havia chamado atenção quando a Anthropic <a href="/noticias/anthropic-lanca-claude-fable-5-1-mythos-5-1">lançou as versões 5.1 do Fable e do Mythos</a>, e que reforça por que o Pentágono, segundo reportagens anteriores do próprio The Register, segue dividido sobre como lidar com um modelo de IA capaz de achar e explorar vulnerabilidades de dia zero por conta própria.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você administra qualquer servidor exposto à internet, seja um HFS, seja outro serviço que gere sessões ou tokens a partir de geradores de números "pseudoaleatórios" não criptográficos, o caso mostra que esse tipo de falha deixou de ser uma curiosidade acadêmica: IA de ponta já consegue identificar e automatizar esse tipo de ataque em escala, e grupos mal-intencionados monitoram divulgações de vulnerabilidades para agir em horas, não semanas. Quem usa IA para trabalhar com segurança ofensiva (pentest, bug bounty) também tem um sinal concreto de para onde a profissão está indo: ferramentas como o Mythos reduzem parte do trabalho manual mais especializado, mas também elevam a régua de quem compete por essas vagas.</p>
    <p>Para quem só usa servidores de arquivos ou outras ferramentas internas em pequenas e médias empresas no Brasil, muitas vezes mantidas por quem não é especialista em segurança, o episódio reforça um ponto prático: software como o Rejetto HFS é popular justamente por ser simples de configurar, mas "simples" não significa "seguro por padrão", e versões desatualizadas expostas na internet são alvo certo. A <a href="/noticias/microsoft-relatorio-ia-ciberataques-vantagem-atacantes">Microsoft já havia alertado que a IA deu vantagem a atacantes</a> ao reduzir a janela de tempo entre a descoberta de uma falha e sua exploração em massa, e este caso é um exemplo direto disso acontecendo na prática, com um intervalo de menos de um dia entre divulgação e ataque confirmado.</p>

    <h2>O que fazer se você usa HFS, e o que observar a seguir</h2>
    <p>A recomendação direta da divulgação é atualizar qualquer instalação do Rejetto HFS nas versões 3.0.0 a 3.2.0 para a versão 3.2.1 ou mais recente, que já corrige essa falha e outros problemas de segurança identificados na mesma revisão. Quem não pode atualizar imediatamente deve, no mínimo, restringir o acesso ao painel administrativo por firewall ou VPN, já que o ataque depende de alcançar o endpoint de login publicamente.</p>
    <p>No plano mais amplo, vale acompanhar se mais participantes do Project Glasswing, hoje restrito a parceiros como a própria Horizon3 (que entrou no programa em julho), vão publicar achados parecidos nas próximas semanas, o que ajudaria a mapear com que frequência esse tipo de descoberta assistida por IA está, de fato, chegando antes em mãos de pesquisadores de boa-fé do que em mãos de atacantes. Também é um caso a comparar com a <a href="/noticias/plugin4shell-falha-agentes-ia-codigo-claude-code-codex-copilot-gemini">falha batizada de "Plugin4Shell"</a>, que expôs os principais agentes de IA para programação a invasão remota: em ambos os episódios, a mesma tecnologia que ajuda a encontrar falhas críticas também é o tipo de alvo que, se comprometido, dá a um atacante acesso a ferramentas de IA usadas para programar ou administrar sistemas em produção.</p>

    <div class="callout-box callout-tip">
      <span class="callout-label">Resumo rápido</span>
      <p>O modelo Mythos, da Anthropic, achou uma falha crítica (CVE-2026-61500) no servidor de arquivos Rejetto HFS que permite forjar sessão de administrador e executar código remoto. Em menos de 24 horas depois da divulgação, em 2 de outubro, atacantes ligados à China já exploravam a brecha contra servidores nos EUA e no Japão. A correção está na versão 3.2.1 do HFS.</p>
    </div>
  `,
  faq: [
    {
      question: "O que é o Mythos, da Anthropic?",
      answer:
        "É um modelo de IA especializado em caça a vulnerabilidades de software, com forte desempenho em matemática e tarefas de longo horizonte. A Anthropic libera o acesso só a parceiros selecionados dentro do Project Glasswing, por considerá-lo poderoso demais para disponibilizar ao público em geral.",
    },
    {
      question: "O que é a falha CVE-2026-61500?",
      answer:
        "É uma vulnerabilidade no Rejetto HTTP File Server (versões 3.0.0 a 3.2.0) que permite a um atacante remoto forjar um cookie de sessão de administrador, porque o programa gera a chave de assinatura das sessões com o Math.random() do JavaScript e vaza valores desse mesmo gerador para clientes não autenticados. Com a sessão forjada, o atacante consegue executar código no servidor.",
    },
    {
      question: "Como se proteger dessa falha?",
      answer:
        "A recomendação é atualizar o Rejetto HFS para a versão 3.2.1 ou mais recente. Quem não pode atualizar imediatamente deve restringir o acesso ao painel administrativo por firewall ou VPN, já que o ataque depende de alcançar publicamente o endpoint de login do servidor.",
    },
  ],
};
