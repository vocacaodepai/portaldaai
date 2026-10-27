import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "pedir-promocao-ou-aumento-com-ia-dossie-de-resultados-e-roteiro-da-conversa",
  title: "Pedir promoção ou aumento com IA: dossiê e roteiro da conversa",
  seoTitle: "Pedir aumento ou promoção com IA: dossiê e roteiro",
  excerpt:
    "Pedir promoção ou aumento com IA exige preparo: monte um dossiê de resultados, treine a conversa com o chefe e leve números reais, sem expor dados da empresa.",
  metaDescription:
    "Como pedir promoção ou aumento com IA: monte o dossiê de resultados, escolha o momento, ensaie a conversa com prompts prontos e proteja dados sigilosos da empresa.",
  category: "carreira",
  articleSubcategory: "trabalho-e-remuneracao",
  date: "2026-10-21",
  readTime: 7,
  imageQuery: "employee meeting manager desk notebook",
  seed: 532,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Pedir promoção ou aumento funciona melhor com um dossiê curto de resultados: o que você entregou, qual foi o efeito e o que mudou na sua responsabilidade desde o último ajuste.",
    "A IA ajuda a organizar as evidências, transformar tarefas em resultados e ensaiar objeções do chefe, mas os números e os fatos vêm de você, e dados sigilosos da empresa não devem ser colados na ferramenta.",
    "Chegar com um pedido claro, um cenário de mercado realista e uma alternativa (prazo, bônus, plano de desenvolvimento) aumenta a chance de uma resposta útil, mesmo quando a resposta imediata é não.",
  ],
  content: `
    <p>Pedir promoção ou aumento com IA significa usar o assistente para preparar o pedido, não para decidir por você. Você reúne o que entregou no período, a IA ajuda a transformar tarefas em resultados e a ensaiar a conversa, e você leva à reunião um dossiê curto, com fatos conferidos, um pedido claro e uma proposta de próximo passo.</p>

    <p>A maioria das pessoas só pede quando está insatisfeita, sem evidências organizadas, e a conversa vira desabafo. Este guia traz um método em cinco etapas, prompts prontos, uma tabela para transformar tarefa em resultado, um exemplo com números hipotéticos e os cuidados para não expor informações da empresa. Nada aqui garante um sim: a decisão depende do orçamento, da política interna e do momento.</p>

    <h2>Antes de pedir: você tem argumento ou só vontade?</h2>

    <p>Vontade de ganhar mais é legítima, mas o chefe precisa de motivos que ele consiga defender para quem aprova o orçamento. Faça um diagnóstico honesto. Responda por escrito: o que mudou na sua função desde o último reajuste? Você assumiu tarefas de um nível acima? Entregou algo que gerou receita, economizou tempo ou evitou um problema? Alguém pediu sua ajuda por ser referência no assunto?</p>

    <p>Se a maioria das respostas for "nada mudou", talvez o melhor pedido seja um plano de desenvolvimento, e não um aumento imediato. O guia de <a href="/artigos/plano-de-carreira-com-ia-metas-de-90-dias">plano de carreira com IA e metas de 90 dias</a> ajuda a montar esse caminho. Já quem sente que está entregando mais do que o cargo prevê tem material para a conversa, e o resto do texto mostra como organizá-lo.</p>

    <h2>Etapa 1: monte o dossiê de resultados</h2>

    <p>O dossiê é um documento de uma página, com 5 a 8 itens, cada um no formato "ação, resultado, evidência". O erro típico é listar tarefas ("atendi clientes, fiz relatórios"). O chefe lembra do resultado, não da lista. Veja como converter:</p>

    <table>
      <thead>
        <tr><th>Tarefa (fraca)</th><th>Resultado (forte)</th><th>Evidência</th></tr>
      </thead>
      <tbody>
        <tr><td>Fiz o relatório semanal</td><td>Reduzi o fechamento semanal de 4 horas para 2 com planilha e modelo padrão</td><td>Modelo compartilhado, histórico de datas</td></tr>
        <tr><td>Atendi clientes</td><td>Assumi a carteira de 12 clientes após a saída de um colega, sem queda de renovação</td><td>Lista da carteira, e-mail de agradecimento</td></tr>
        <tr><td>Ajudei o time novo</td><td>Treinei duas pessoas, que passaram a operar sozinhas em 3 semanas</td><td>Checklist de onboarding</td></tr>
        <tr><td>Usei IA no trabalho</td><td>Criei um roteiro de respostas que o time adotou</td><td>Documento e data de adoção</td></tr>
      </tbody>
    </table>

    <p>Os números do exemplo são hipotéticos. Use apenas os seus, e só os que você consegue provar. Se não tiver o número, escreva a melhoria de forma qualitativa e diga como você a percebeu. Sobre o uso de IA como parte do dossiê, o guia <a href="/artigos/como-se-tornar-referencia-em-ia-na-empresa-sem-ser-do-ti">como se tornar referência em IA na empresa sem ser do TI</a> mostra como transformar o que você aprendeu em valor visível.</p>

    <h2>Etapa 2: use a IA com cuidado para organizar</h2>

    <p>A IA é boa para reescrever, estruturar e perguntar o que você esqueceu. O risco é colar dado que não pode sair da empresa. Antes de qualquer prompt, leia o texto sobre <a href="/artigos/colar-dados-da-empresa-no-chatgpt-o-que-o-funcionario-pode-fazer">colar dados da empresa no ChatGPT</a> e confira a política interna. Troque nomes de clientes por "cliente A", omita valores de contratos e não envie documentos confidenciais.</p>

    <p>Prompt para converter tarefas em resultados:</p>

    <pre><code>Vou listar tarefas que fiz nos últimos 12 meses. Para cada uma, faça perguntas curtas para descobrir o resultado (tempo economizado, erro evitado, receita, qualidade, volume) e depois reescreva no formato: ação + resultado + evidência. Não invente números: se eu não souber, escreva "a confirmar".
Tarefas: [liste, sem nomes de clientes nem valores sigilosos]</code></pre>

    <p>Prompt para enxugar o dossiê:</p>

    <pre><code>Reduza este dossiê para uma página, com no máximo 6 itens, em ordem de impacto. Mantenha tom profissional e factual, sem adjetivos elogiosos sobre mim. Aponte quais itens estão sem evidência.
[cole o dossiê]</code></pre>

    <p>Para a avaliação formal do período, o texto sobre <a href="/artigos/avaliacao-de-desempenho-no-trabalho-como-ia-ajuda-a-se-destacar">avaliação de desempenho e IA</a> complementa o método, e o guia sobre <a href="/artigos/como-colocar-habilidades-de-ia-no-curriculo">habilidades de IA no currículo</a> serve para atualizar seu perfil enquanto você está nisso.</p>

    <h2>Etapa 3: entenda o contexto e defina o pedido</h2>

    <p>Peça algo específico. "Quero ganhar mais" é vago; "quero conversar sobre promoção para analista pleno com reajuste correspondente até o próximo ciclo" é claro. Para saber o que é razoável, pesquise faixas de salário em mais de uma fonte, como vagas abertas semelhantes, conversas com colegas de profissão e pesquisas salariais de consultorias, e trate cada número como referência, não como verdade.</p>

    <p>O contexto do mercado também pesa. O Ministério do Trabalho e Emprego publica mensalmente o <a href="https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/novo-caged" target="_blank" rel="noopener noreferrer">Novo Caged</a>, com admissões, desligamentos e saldo de empregos formais. A página da edição consultada (agosto de 2026) não detalha salário por ocupação, então use-a para entender o ritmo geral do emprego, não para fixar um valor. A <a href="https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho" target="_blank" rel="noopener noreferrer">página de estatísticas do ministério</a> reúne o Novo Caged, a RAIS e outras ferramentas, e cita relatórios de transparência salarial, mas sem descrever o conteúdo de cada um, então vale abrir e conferir.</p>

    <p>Se a proposta for mudar de regime ou comparar ofertas, veja <a href="/artigos/clt-ou-pj-como-comparar-proposta-com-ia-e-planilha">CLT ou PJ: como comparar proposta com IA e planilha</a>. E o guia de <a href="/artigos/como-negociar-salario-melhor-sabendo-usar-ia">negociação de salário com IA</a> traz técnicas para o momento da contratação.</p>

    <h2>Etapa 4: escolha o momento e ensaie a conversa</h2>

    <p>Momento importa. Prefira o período em que o chefe está planejando orçamento, após uma entrega bem recebida ou na conversa de avaliação. Evite semanas de crise, fechamento ou cortes. Peça um horário dedicado, em vez de abordar o assunto no corredor: "Podemos marcar 30 minutos para falar sobre meu desenvolvimento e minha remuneração?".</p>

    <p>Use a IA como parceiro de ensaio, pedindo que ela interprete um chefe cético. Prompt:</p>

    <pre><code>Faça o papel de um gestor ocupado que gosta de mim, mas tem orçamento limitado. Vou apresentar meu pedido de promoção em 5 minutos. Faça objeções realistas, uma de cada vez (orçamento, timing, falta de vaga, "preciso ver mais resultados"), e depois de cada resposta minha dê uma nota de 1 a 5 para clareza e um conselho curto.
Meu pedido: [pedido em uma frase]. Meus três melhores resultados: [resultados sem dados sigilosos].</code></pre>

    <p>Roteiro de abertura que funciona: "Quero conversar sobre minha evolução. Nos últimos 12 meses, entreguei X, Y e Z, e assumi a responsabilidade por W. Gostaria de discutir uma promoção para o cargo K com o reajuste correspondente. Trouxe um resumo de uma página para facilitar." Depois, escute. Se a conversa esquentar, o guia de <a href="/artigos/email-profissional-dificil-com-ia-feedback-prazo-e-recusa-sem-climao">e-mail profissional difícil com IA</a> ajuda a registrar o combinado por escrito.</p>

    <h2>Etapa 5: se a resposta for não, ainda há o que negociar</h2>

    <p>Um não imediato raramente é definitivo. Pergunte: "O que eu precisaria entregar para esse pedido ser aprovado e em que prazo reavaliamos?". Registre a resposta por e-mail, de forma cordial. Alternativas que podem fazer sentido conforme a empresa: bônus por meta, plano de desenvolvimento com datas, curso pago pela empresa, mais autonomia, flexibilidade de horário. O texto sobre <a href="/artigos/como-usar-ia-para-trabalhar-menos-horas-sem-perder-renda">trabalhar menos horas sem perder renda</a> explora essa linha.</p>

    <p>Também vale um olhar para si. Se a conversa mostrou que não há espaço de crescimento na empresa, é hora de olhar o mercado. O <a href="/artigos/mentor-de-carreira-com-ia-prompts-para-decidir-seu-proximo-passo">mentor de carreira com IA</a> e o guia sobre <a href="/artigos/case-de-portfolio-com-ia-como-transformar-um-projeto-em-historia">case de portfólio</a> ajudam a transformar o dossiê em material de candidatura.</p>

    <h2>Erros comuns ao pedir aumento</h2>

    <ul>
      <li><strong>Comparar-se com colegas:</strong> o argumento vira disputa. Fale das suas entregas.</li>
      <li><strong>Ameaçar sair sem querer sair:</strong> pode custar a confiança.</li>
      <li><strong>Colar dados sigilosos na IA:</strong> proteja nomes, valores e contratos.</li>
      <li><strong>Levar número inventado ou inflado:</strong> um dado errado derruba o dossiê inteiro.</li>
      <li><strong>Pedir sem prazo:</strong> termine a conversa com uma data de retorno.</li>
      <li><strong>Deixar a insegurança falar:</strong> se o medo trava, leia sobre a <a href="/artigos/sindrome-do-impostor-usar-ia-nao-te-torna-menos-capaz">síndrome do impostor</a> e sobre a <a href="/artigos/habilidades-humanas-que-a-ia-nao-substitui-no-trabalho">valorização das habilidades humanas</a>.</li>
    </ul>

    <p>Reserve uma hora esta semana para montar o dossiê com cinco resultados, depois ensaie a abertura em voz alta. O preparo, mais do que a ferramenta, é o que muda a conversa. Para continuar, explore a categoria <a href="/categoria/carreira">Carreira</a>.</p>
  `,
  faq: [
    {
      question: "Como pedir aumento de salário ao chefe?",
      answer:
        "Marque uma conversa dedicada, leve um dossiê de uma página com resultados e evidências, faça um pedido específico e escute a resposta. Termine combinando um prazo de retorno. A IA ajuda a organizar o dossiê e a ensaiar objeções, mas os números precisam ser seus e verdadeiros.",
    },
    {
      question: "Posso usar o ChatGPT para preparar o pedido de promoção?",
      answer:
        "Pode, com cuidado. Use a ferramenta para estruturar resultados e ensaiar a conversa, sem colar nomes de clientes, valores de contratos ou documentos confidenciais. Confira a política de IA da sua empresa antes. Se não houver regra, troque dados sensíveis por termos genéricos.",
    },
    {
      question: "Quanto pedir de aumento?",
      answer:
        "Não existe percentual universal. Pesquise faixas em vagas semelhantes, com colegas de profissão e em pesquisas salariais, trate os números como referência e considere o orçamento da empresa. Peça algo específico, como o cargo e o reajuste correspondente, e esteja aberto a alternativas como bônus ou plano de desenvolvimento.",
    },
    {
      question: "O que fazer se o chefe disser que não?",
      answer:
        "Pergunte o que precisa ser entregue para o pedido ser aprovado e quando será reavaliado, e registre por e-mail. Considere alternativas, como bônus por metas, curso, mais autonomia ou flexibilidade. Se não houver caminho de crescimento, vale olhar oportunidades externas com calma.",
    },
    {
      question: "Quando é o melhor momento para pedir promoção?",
      answer:
        "Em geral, perto do planejamento de orçamento, depois de uma entrega bem recebida ou na conversa de avaliação de desempenho. Evite semanas de crise, fechamento ou corte de custos. Peça um horário dedicado em vez de tocar no assunto de passagem.",
    },
  ],
  quiz: [
    {
      question: "O que um bom dossiê de resultados deve conter?",
      options: ["Lista de todas as tarefas do ano", "Ação, resultado e evidência em cada item", "Comparação com colegas"],
      answer: 1,
      explanation: "O chefe precisa de resultados que consiga defender para quem aprova o orçamento. Tarefas soltas e comparações enfraquecem o pedido.",
    },
    {
      question: "O que NÃO colar em uma ferramenta de IA ao preparar o pedido?",
      options: ["Suas próprias conquistas gerais", "Nomes de clientes e valores de contratos", "Um roteiro de abertura"],
      answer: 1,
      explanation: "Dados sigilosos da empresa não devem sair do ambiente autorizado. Use termos genéricos e confira a política interna.",
    },
  ],
};
