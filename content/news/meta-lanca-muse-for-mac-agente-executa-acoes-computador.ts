import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "meta-lanca-muse-for-mac-agente-executa-acoes-computador",
  title: "Meta lança o Muse for Mac, agente de IA que executa ações direto no computador",
  author: "Bruno Danello",
  summary:
    "A nova versão para macOS do assistente pessoal da Meta ganha acesso a Arquivos, Mail, Mensagens, Calendário e Notas nativos do sistema, organizando arquivos, respondendo e-mails e agendando compromissos sozinho — mas qualquer ação sensível, como apagar um arquivo ou enviar um e-mail, exige aprovação explícita do usuário.",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/09/18/metas-muse-hits-mac-letting-the-ai-take-actions-on-your-computer/",
  date: "2026-09-18",
  content: `
    <p>A Meta lançou o Muse for Mac, versão para computadores do seu assistente pessoal de IA, expandindo o alcance de um produto que já havia chegado ao topo da App Store dos EUA logo após o lançamento no celular, em 8 de setembro. No Mac, o Muse ganha acesso direto aos aplicativos nativos do sistema — Arquivos, Mail, Mensagens, Calendário e Notas — e passa a executar ações dentro deles em nome do usuário, em vez de apenas responder perguntas.</p>

    <p>Na prática, isso significa que o assistente consegue organizar arquivos, extrair informações de threads de e-mail, adicionar compromissos ao calendário e rascunhar respostas de mensagens, coordenando tarefas entre aplicativos diferentes sem que o usuário precise alternar manualmente entre eles. Segundo a Meta, as ações são executadas por meio de uma VM segura na nuvem da própria empresa — ou seja, a infraestrutura da Meta fica entre as credenciais do usuário e os aplicativos nativos do macOS desde o primeiro momento.</p>

    <div class="callout-box callout-ok">
      <span class="callout-label">Camada de aprovação para ações sensíveis</span>
      <p>A empresa incluiu uma camada de controle chamada Sentinel, que exige aprovação explícita do usuário antes de qualquer ação considerada sensível — como apagar um arquivo, enviar um e-mail ou fazer uma compra —, uma tentativa de equilibrar autonomia do agente com controle humano sobre as consequências mais irreversíveis.</p>
    </div>

    <h2>Mais um assistente de IA ganhando as mãos, não só a voz</h2>
    <p>O lançamento reforça uma tendência que já discutimos por aqui: assistentes de IA deixando de ser apenas interfaces de conversa e passando a executar tarefas diretamente nos aplicativos que já usamos no dia a dia. Para quem está configurando um assistente assim pela primeira vez, vale revisitar nosso guia de <a href="/artigos/como-configurar-primeiro-assistente-de-ia-pessoal">como configurar seu primeiro assistente de IA pessoal</a>.</p>
  `,
};
