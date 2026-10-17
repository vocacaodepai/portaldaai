import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "replit-openai-padrao-agent-anthropic-disrupt",
  title: "Replit coloca modelos da OpenAI como padrão no lugar da Anthropic",
  summary:
    "O CEO da Replit, Amjad Masad, disse no TechCrunch Disrupt que a OpenAI virou o parceiro preferencial do Replit Agent, por custo, desempenho e parceria.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/",
  date: "2026-10-17",
  publishedAt: "2026-10-17T20:30:00-03:00",
  imageQuery: "Replit logo",
  topic: "negocios",
  content: `
    <p>A Replit, plataforma de programação com IA muito usada por fundadores e desenvolvedores, trocou de parceiro principal. Segundo o <a href="https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/" rel="noopener noreferrer nofollow">TechCrunch</a>, o CEO e cofundador Amjad Masad disse no palco do TechCrunch Disrupt que a empresa deixou de trabalhar com a Anthropic como antes, por motivos que incluem custo, e que os modelos da OpenAI agora são a escolha padrão da plataforma.</p>

    <p>Depois do evento, Masad esclareceu que os clientes ainda podem usar os modelos da Anthropic dentro da Replit, mas que o ChatGPT passou a ser o padrão. Ele afirmou que a Replit continua agnóstica em relação a modelos e que a OpenAI é agora o parceiro preferencial para alimentar o Replit Agent, com base em desempenho, economia e força da parceria. A própria reportagem foi atualizada depois da publicação original, e o título mudou de "não trabalha mais com a Anthropic" para "torna a OpenAI padrão".</p>

    <h2>O que Masad disse e o que ficou em disputa</h2>
    <p>No palco, Masad justificou a decisão com um argumento de desempenho. Segundo ele, a Replit usa um benchmark interno e também publica um benchmark público, e nos dois os modelos Sol e Astra, da OpenAI, vão melhor na tarefa de construir aplicativos do zero com vibe coding. A decisão, nas palavras dele, foi baseada em custo, parceria e desempenho. A Replit havia anunciado uma parceria com a OpenAI em agosto, mas até agora não havia sinal público de que a relação com a Anthropic tivesse mudado.</p>
    <p>A história, porém, não é unânime. O TechCrunch relata que pessoas ligadas à parceria entre Anthropic e Replit contestaram a versão do CEO, e uma delas, que pediu anonimato, disse que a parceria continua de pé. Há também sinais de que a relação era recente e ativa: um post do blog da Replit, do fim de setembro, cita modelos Claude rodando em produção no Replit Agent, e um funcionário da empresa promovia o modelo principal da Anthropic nas redes poucas semanas antes.</p>

    <table>
      <thead>
        <tr><th>Ponto</th><th>O que se sabe</th></tr>
      </thead>
      <tbody>
        <tr><td>Modelo padrão</td><td>OpenAI, segundo Masad, para o Replit Agent</td></tr>
        <tr><td>Modelos da Anthropic</td><td>Continuam disponíveis para quem escolher manualmente</td></tr>
        <tr><td>Motivos citados</td><td>Custo, desempenho e força da parceria</td></tr>
        <tr><td>Posição da Anthropic</td><td>Fontes próximas dizem que a parceria segue em vigor</td></tr>
        <tr><td>Receita enterprise</td><td>De cerca de 2% no ano passado para cerca de 15% neste ano</td></tr>
      </tbody>
    </table>

    <h2>Contexto: a briga por preço e desempenho entre os dois laboratórios</h2>
    <p>A troca acontece num momento de guerra aberta de preços entre os dois laboratórios. Nas últimas semanas, a OpenAI <a href="/noticias/openai-lanca-gpt-6-sol-luna-corta-precos-pela-metade">cortou pela metade os preços</a> com a linha GPT-6 Sol e Luna, e a Anthropic respondeu com o <a href="/noticias/anthropic-lanca-claude-opus-5-5-mais-barato-rapido">Claude Opus 5.5, mais barato e rápido</a>. Esse embate, que já analisamos em <a href="/noticias/anthropic-openai-guerra-precos-opus-5-5-gpt-6-sol-luna">outra matéria sobre a guerra de preços</a>, empurra as plataformas intermediárias a recalcular com frequência qual modelo entrega mais por real gasto.</p>
    <p>Para uma plataforma como a Replit, o modelo padrão é uma decisão econômica enorme. A reportagem observa que a maior parte dos clientes não escolhe modelo manualmente e fica com o padrão. Por isso, mudar o padrão pode reduzir bastante o gasto com um fornecedor, mesmo que ele continue disponível no menu. Masad disse que a Replit foi, até pouco tempo atrás, um dos cinco maiores clientes da Anthropic.</p>

    <h3>Os números de negócio que ele revelou</h3>
    <p>Masad não divulgou a receita recorrente anual, mas deu uma ideia do crescimento. Segundo ele, a receita de contratos corporativos era de cerca de 2% no ano passado e chegou a cerca de 15% neste ano, e mais de metade da receita agora vem de clientes B2B. Nos bastidores, ele afirmou ao TechCrunch esperar que mais da metade da receita de 2027 venha de empresas e governos. É uma mudança de perfil: de ferramenta de hobby e de fundador solo para plataforma vendida a organizações.</p>

    <h2>Por que isso importa para você</h2>
    <p>Se você usa a Replit para montar aplicativos, automações ou protótipos para clientes, a mudança de padrão pode alterar na prática o comportamento do agente: o estilo do código, o custo por tarefa e até os erros típicos. Vale testar o mesmo projeto com os dois modelos antes de assumir que o novo padrão é o melhor para o seu caso, porque benchmarks de fornecedor medem o que o fornecedor escolheu medir. A informação útil aqui é que a escolha existe e que você pode trocar.</p>
    <p>Para quem vende serviços de criação de apps e sites com IA, como o que descrevemos em <a href="/artigos/vibe-coding-para-nao-programadores-carreira-e-riscos">vibe coding para quem não programa</a>, a lição de negócio é não amarrar o seu fluxo a um único modelo. Se o seu processo só funciona com um fornecedor, uma mudança de preço ou de parceria vira um risco direto para a sua margem. Documente o que cada etapa precisa e mantenha a possibilidade de rodar em outro modelo.</p>
    <p>Para o leitor que acompanha o mercado de agentes, a fala de Masad sobre o "habitat" dos agentes também é um recado prático. Ele disse que agentes precisam de orquestração, recuperação de erros, segurança, isolamento (sandbox), rede e identidade com autorização bem resolvidos antes de serem implantados com segurança. É a mesma linha de preocupação que vimos em <a href="/noticias/restate-capta-20-milhoes-infraestrutura-agentes-ia">infraestrutura durável para agentes</a>: o modelo é só uma peça, e o ambiente em volta decide se a automação é confiável.</p>

    <div class="callout-box">
      <span class="callout-label">Como usar isso na prática</span>
      <p>Antes de migrar um projeto, rode a mesma tarefa de teste nos dois modelos, compare custo e resultado, e só então defina o padrão do seu fluxo. Guarde o prompt e os critérios usados, para repetir o teste na próxima mudança de preços.</p>
    </div>

    <h2>O que observar daqui para a frente</h2>
    <p>Há três pontos em aberto. O primeiro é se a Anthropic vai confirmar ou desmentir publicamente a versão da Replit, já que fontes próximas a contradizem. O segundo é se outras plataformas de desenvolvimento seguirão o mesmo caminho e trocarão o modelo padrão por critério de custo, o que mostraria um mercado em que o fornecedor de modelo é cada vez mais intercambiável. O terceiro é como a Replit vai sustentar o crescimento corporativo que prometeu, justamente num segmento em que governança, segurança e previsibilidade de custo pesam mais do que a última pontuação de benchmark.</p>
    <p>Para o Brasil, o efeito é indireto, mas real. Muitos freelancers e pequenas agências brasileiras entregam sites, painéis e automações montados em plataformas assim, e cobram em reais por um custo que depende de dólar e de preço de API. Quando o modelo padrão muda, a conta muda, e quem acompanha esse movimento consegue renegociar prazo e valor com mais segurança. Quem ignora, descobre só quando o resultado do projeto ou a margem já mudou.</p>
    <p>Também vale lembrar o cuidado com a fonte. Parte do que circula sobre essa troca vem de uma fala em palco e de um esclarecimento posterior, e o próprio veículo precisou corrigir o título depois. Trate a informação como um posicionamento da Replit, não como um rompimento confirmado entre as duas empresas, e acompanhe os comunicados oficiais de cada lado antes de tomar qualquer decisão que dependa dessa relação.</p>
  `,
  faq: [
    {
      question: "A Replit deixou de oferecer os modelos da Anthropic?",
      answer: "Não. Segundo o esclarecimento de Amjad Masad ao TechCrunch, os clientes ainda podem escolher os modelos da Anthropic. A mudança é que os modelos da OpenAI viraram o padrão do Replit Agent.",
    },
    {
      question: "A Anthropic confirmou o fim da parceria?",
      answer: "Não. De acordo com a reportagem, uma pessoa próxima à parceria, sem se identificar, disse que ela continua em vigor, contrariando a fala do CEO no palco.",
    },
  ],
};
