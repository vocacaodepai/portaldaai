import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "theo-browne-ts-rust-compilador-typescript-agentes-ia",
  title: "Dev porta o compilador do TypeScript para Rust com IA por US$ 24 mil",
  summary:
    "Theo Browne usou o Claude Opus 5.5 para portar o compilador do TypeScript em Rust, sem ler o código, após queimar US$ 400 mil em tokens antes.",
  author: "Bruno Danello",
  sourceName: "The Register",
  sourceUrl: "https://www.theregister.com/devops/2026/10/15/24000-ai-experiment-ports-typescript-compiler-to-rust/5303409",
  date: "2026-10-19",
  publishedAt: "2026-10-19T10:30:00-03:00",
  topic: "lancamentos",
  imageQuery: "Rust programming language logo",
  content: `
    <p>O desenvolvedor e youtuber Theo Browne usou agentes de IA para portar o compilador do TypeScript, hoje escrito em Go pela Microsoft, para a linguagem Rust. O projeto se chama TS_Rust e está aberto no GitHub, sob licença MIT. Segundo reportagem de Joab Jackson publicada pela <a href="https://www.theregister.com/devops/2026/10/15/24000-ai-experiment-ports-typescript-compiler-to-rust/5303409" target="_blank" rel="noopener noreferrer nofollow">The Register</a> na quinta-feira (15), a segunda tentativa custou cerca de US$ 24 mil em tokens, medidos pelo preço de API, e o autor diz que nunca leu o código gerado.</p>

    <h2>O que foi feito e quanto custou</h2>
    <p>O port cobre o compilador, o verificador de tipos e o servidor de linguagem, a parte que alimenta o autocompletar e os alertas dentro do editor. A primeira tentativa usou modelos da OpenAI, o GPT-5.6 Sol e o GPT-6 Astra, e queimou mais de US$ 400 mil em tokens equivalentes de API. Mesmo assim, chegou a cerca de 84% de compatibilidade e travou.</p>
    <p>A segunda rodada trocou de fornecedor e usou o Claude Opus 5.5, da Anthropic, consumindo cerca de US$ 24 mil em tokens de API equivalentes, bancados pelas assinaturas pessoais de Browne. A diferença de custo entre as duas tentativas, de quase vinte vezes, é a parte mais citada do episódio, e mostra como o preço de um projeto desse tipo depende mais da estratégia do que do tamanho do código.</p>
    <p>A estratégia, aliás, foi o que mudou o resultado. Em vez de traduzir o JavaScript original diretamente para Rust, o modelo partiu da implementação em Go, que a Microsoft já havia escrito ao migrar o TypeScript. Na prática, é a mesma lógica que a equipe da Microsoft seguiu ao sair do JavaScript para o Go: portar de uma linguagem compilada para outra, com um conjunto de testes enorme servindo de régua.</p>

    <h2>Os números e as ressalvas</h2>
    <p>O README do repositório afirma que todos os 184.773 testes portados do código em Go passam. Em 120 repositórios de código aberto, a saída da linha de comando só difere da versão em Go em problemas conhecidos e listados pelo autor. Entre eles estão erros do tipo TS6059 em alguns monorepos, resultados que dependem de tempo em builds incrementais e um crescimento lento de memória no editor em sessões longas. O próprio projeto se descreve como uma versão inicial.</p>
    <p>Nos testes de velocidade, feitos pelo próprio autor, o resultado depende do cenário. Em um projeto grande, a versão em Rust com a opção de modo rápido levou 9,77 segundos, contra 42,55 segundos do compilador oficial na versão 7, cerca de 4,3 vezes mais rápido. Em seis aplicações reais, a média geométrica ficou em 2,1 vezes mais rápido que o oficial, e 2,9 vezes no modo rápido. A The Register resume a comparação dizendo que a versão roda cerca de duas vezes mais rápido que o TypeScript 7, em Go, e 12,5 vezes mais rápido que o TypeScript 6.</p>
    <p>As ressalvas são do próprio Browne. Como o modelo copiou o comportamento do código em Go, acabou copiando também alguns bugs da implementação original, algo que o autor só descobriu depois que outra pessoa apontou. O README traz um aviso direto: "Be warned, I have no idea if this will actually work", ou seja, ele mesmo diz que não sabe se vai funcionar em todos os casos. Sobre a viabilidade do experimento, Browne afirmou que esse tipo de projeto "no improviso" não deveria ser viável.</p>

    <h2>Por que Rust, e o que isso tem a ver com agentes</h2>
    <p>A motivação técnica vai além da velocidade. Segundo a reportagem, um compilador em Rust poderia permitir que certas cargas de trabalho de agentes de IA rodassem dentro do motor V8, do Google, em vez de exigir uma máquina virtual completa ou um contêiner Docker. A Cloudflare já usa os chamados V8 isolates como base de sua plataforma, o que dá precedente à ideia.</p>
    <p>O coletor de lixo do Go precisa ser embutido quando o código vira WebAssembly, o que não é simples. O Rust não tem coletor de lixo e gera WebAssembly de forma mais enxuta. A reportagem cita ainda o Just Bash, da Vercel, como possível shell em memória para esse tipo de ambiente, onde um agente poderia compilar e checar código sem tocar em um servidor inteiro.</p>

    <h2>Um padrão que se repete</h2>
    <p>O caso de Browne não é isolado. A própria The Register lembra que a Microsoft teria reescrito o runtime do Copilot em Rust por cerca de US$ 120 mil em custos de IA, e que o Google estaria usando o Gemini 4 Argon para portar bibliotecas como RE2 e libgav1, além de partes do kernel Zircon, do Fuchsia, também para Rust. Sobre o modelo do Google, já publicamos <a href="/noticias/google-gemini-4-argon-lancamento-preco">o lançamento e o preço do Gemini 4 Argon</a>.</p>
    <p>O custo de reescrever grandes bases de código em outra linguagem, que por décadas era motivo para nunca fazer a migração, está caindo para a casa das dezenas de milhares de dólares. Isso muda a conta de empresas que mantêm sistemas antigos, mas também levanta a pergunta incômoda de quem vai responder por código que ninguém leu.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para quem programa, presta serviço de desenvolvimento ou administra uma equipe técnica no Brasil, o episódio traz três lições práticas. A primeira é que o modelo e a estratégia pesam tanto quanto o orçamento: duas tentativas do mesmo projeto custaram valores muito diferentes, e a mais barata foi a que partiu de uma referência pronta e de testes automatizados. Entender como os tokens são cobrados ajuda a prever esse tipo de gasto, e explicamos o conceito em nosso guia sobre <a href="/artigos/tokens-e-janela-de-contexto-em-ia-o-que-sao-e-por-que-importam">tokens e janela de contexto em IA</a>.</p>
    <p>A segunda lição é que testes são o que transforma "o agente escreveu" em "o agente acertou". O projeto só é levado a sério porque tem uma bateria de mais de 184 mil testes passando. Sem isso, código gerado e nunca lido é aposta. Quem vende automação ou desenvolvimento com IA a clientes deve tratar a suíte de testes como parte do entregável, e não como detalhe.</p>
    <p>A terceira é sobre carreira. Se portar um compilador inteiro cabe em uma assinatura e algumas semanas, tarefas de migração e manutenção de código tendem a ficar mais baratas, e o valor do profissional se desloca para especificar, revisar e responsabilizar-se pelo resultado. Para entender esse movimento, vale ler <a href="/artigos/ia-vai-substituir-programadores-o-que-muda-ate-2030">o que muda para programadores até 2030</a> e o texto sobre <a href="/artigos/vibe-coding-para-nao-programadores-carreira-e-riscos">vibe coding, carreira e riscos</a>. Quem acompanha a briga de preços entre laboratórios também deve olhar <a href="/noticias/anthropic-lanca-claude-opus-5-5-mais-barato-rapido">o lançamento do Claude Opus 5.5, mais barato e rápido</a> e o <a href="/noticias/openai-lanca-gpt-6-sol-luna-corta-precos-pela-metade">corte de preços do GPT-6 Sol e Luna</a>, que explicam por que experimentos assim estão ficando acessíveis.</p>

    <h2>O que observar daqui para frente</h2>
    <p>O ponto a acompanhar é se o TS_Rust sai da fase de experimento. Os benchmarks são do autor e foram rodados em máquinas de integração contínua, não em ambientes independentes, e o projeto está preso a uma única revisão do código original da Microsoft. Se a comunidade adotar a ferramenta e os bugs herdados forem corrigidos, ela pode virar peça de infraestrutura para agentes que verificam código em ambientes leves. Se não, fica como prova de conceito do que o dinheiro e os testes certos compram hoje.</p>

    <div class="callout-box">
      <span class="callout-label">Fonte original</span>
      <p>Reportagem da <a href="https://www.theregister.com/devops/2026/10/15/24000-ai-experiment-ports-typescript-compiler-to-rust/5303409" target="_blank" rel="noopener noreferrer nofollow">The Register</a>, com dados do repositório <a href="https://github.com/pingdotgg/ts-rust" target="_blank" rel="noopener noreferrer nofollow">pingdotgg/ts-rust</a>. Os números de custo e desempenho são declarados pelo autor e não foram verificados de forma independente.</p>
    </div>
  `,
};
