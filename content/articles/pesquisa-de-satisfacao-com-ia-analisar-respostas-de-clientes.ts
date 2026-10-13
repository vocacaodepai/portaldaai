import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "pesquisa-de-satisfacao-com-ia-analisar-respostas-de-clientes",
  title: "Pesquisa de satisfação com IA: perguntas e análise das respostas",
  seoTitle: "Pesquisa de satisfação com IA para pequenos negócios",
  excerpt:
    "Pesquisa de satisfação com IA ajuda a escrever perguntas, resumir comentários e achar o que irrita o cliente. Veja o passo a passo com Google Forms e prompts.",
  metaDescription:
    "Pesquisa de satisfação com IA para pequeno negócio: monte as perguntas, use o Google Forms e peça à IA para agrupar comentários e sugerir ações.",
  category: "negocios",
  articleSubcategory: "retencao-e-experiencia",
  date: "2026-10-13",
  readTime: 7,
  imageQuery: "small shop customer feedback tablet",
  seed: 232,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A IA escreve perguntas curtas, resume dezenas de comentários e agrupa os temas que mais se repetem, mas quem decide a ação é o dono do negócio.",
    "Uma pesquisa boa tem poucas perguntas, é enviada logo depois da compra ou do atendimento e usa uma ferramenta gratuita, como o Google Forms.",
    "Antes de colar respostas num chat de IA, remova nome, telefone e e-mail dos clientes, em respeito à LGPD e à privacidade deles.",
  ],
  content: `
    <p>Pesquisa de satisfação com IA é usar um assistente para criar as perguntas, tabular as respostas e transformar comentários soltos em temas e ações. Para um pequeno negócio, isso significa descobrir em uma hora o que antes exigia uma tarde de leitura, desde que as perguntas sejam boas e os dados dos clientes sejam protegidos.</p>

    <p>Muita loja, clínica ou restaurante já recebe feedback, mas ele fica espalhado em mensagens de WhatsApp, avaliações públicas e conversas de balcão. Este guia mostra como montar a pesquisa, quando enviar, como pedir à IA uma análise útil e como transformar o resultado em três melhorias concretas, sem gastar com software caro.</p>

    <h2>Para que serve uma pesquisa de satisfação</h2>

    <p>Segundo a <a href="https://sp.agenciasebrae.com.br/cultura-empreendedora/melhore-os-resultados-de-marketing-do-seu-negocio-com-esta-simples-ferramenta/" target="_blank" rel="noopener noreferrer">Agência Sebrae</a>, a pesquisa de satisfação é uma ferramenta de relacionamento: mostra ao cliente que a opinião dele importa e ajuda a identificar oportunidades e pontos de melhoria. O texto lembra que só vale fazer se houver disposição real de ouvir, agradecer e responder.</p>

    <p>Na prática, ela responde a perguntas simples: o cliente voltaria? o prazo de entrega foi o prometido? o atendimento foi claro? Descobrir isso cedo evita perda de cliente. Quem quer aprofundar o assunto pode ler o guia de <a href="/artigos/como-usar-ia-para-reduzir-cancelamento-de-clientes">como reduzir cancelamento de clientes com IA</a>, que parte dos mesmos sinais.</p>

    <h2>Como montar as perguntas (com ajuda da IA)</h2>

    <p>Menos é mais. Cinco perguntas costumam bastar: uma nota geral, uma sobre o ponto mais importante do seu negócio (entrega, atendimento, qualidade), uma de múltipla escolha sobre o que melhorar, uma aberta e, se fizer sentido, uma sobre recomendação. O Sebrae também sugere perguntar sobre a jornada de compra: prazo de entrega, experiência no site e clareza das informações. Uma escala numérica simples facilita contar depois.</p>

    <pre><code>Você é especialista em experiência do cliente de pequenos negócios no Brasil. Meu negócio: [TIPO, ex.: pizzaria de bairro com delivery]. Crie uma pesquisa de satisfação com 5 perguntas, em linguagem simples e sem juridiquês: 1 nota de 0 a 10, 2 de múltipla escolha e 2 abertas. Evite perguntas que induzam a resposta. Entregue em lista numerada.</code></pre>

    <p>Revise cada pergunta com um olhar crítico. "Você ficou satisfeito com nosso excelente atendimento?" induz a resposta, enquanto "Como foi o atendimento hoje?" não induz. A IA erra nisso com frequência, então peça que ela marque qualquer pergunta tendenciosa.</p>

    <h2>Onde criar e quando enviar</h2>

    <p>O <a href="https://support.google.com/docs/answer/6281888" target="_blank" rel="noopener noreferrer">Google Forms</a> permite criar o formulário em forms.google.com, enviar o link e ver gráficos das respostas, que também podem ser salvas numa planilha do Google Sheets. Para a maioria dos negócios locais, isso é suficiente e não tem custo de assinatura. O mesmo vale para a planilha: o guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> ensina a montar resumos automáticos.</p>

    <p>O momento do envio importa. Como regra prática, ofereça o formulário ao fim da experiência de consumo, enquanto ela ainda está fresca na memória. Em um delivery, isso quer dizer até duas horas depois da entrega. Em uma clínica, no mesmo dia da consulta. Em serviço de assinatura, depois do primeiro mês. Para enviar por WhatsApp, o guia de <a href="/artigos/como-automatizar-atendimento-no-whatsapp-com-ia">atendimento no WhatsApp com IA</a> traz cuidados com mensagens automáticas.</p>

    <h2>Como a IA analisa as respostas</h2>

    <p>Com 30 ou 40 comentários, já dá para pedir uma análise. Exporte as respostas abertas, apague nomes, telefones e e-mails e cole no assistente. O objetivo é agrupar por tema, contar quantas vezes cada tema aparece e separar o que é elogio, reclamação e sugestão.</p>

    <pre><code>Abaixo estão comentários de clientes de [NEGÓCIO], sem dados pessoais. 1) Agrupe em no máximo 6 temas. 2) Para cada tema, diga quantos comentários o citam e traga 2 trechos literais. 3) Classifique cada tema como elogio, reclamação ou sugestão. 4) Não invente comentários e não conclua nada que não esteja no texto.

[COLE OS COMENTÁRIOS]</code></pre>

    <p>Depois peça o plano de ação, mas com cuidado: a IA sugere, você decide. A conferência de números é obrigatória, porque modelos às vezes erram contagens. Se o volume for maior, use a planilha para contar de verdade, como em <a href="/artigos/como-usar-ia-para-monitorar-concorrencia-tomar-decisoes-melhores">monitorar concorrência e decidir melhor com IA</a>.</p>

    <h2>Exemplo prático: pizzaria com 60 respostas</h2>

    <p>Imagine uma pizzaria que envia a pesquisa a cada cliente do delivery e recebe 60 respostas em um mês. A nota média fica em 8,1. A IA agrupa os comentários e aponta que 18 falam de atraso, 12 elogiam a massa, 9 reclamam de pizza fria e o restante se divide em temas menores. Conclusão: o problema não é o produto, é a logística. A ação é testar caixas térmicas e um aviso de prazo no pedido, e medir de novo no mês seguinte.</p>

    <table>
      <thead>
        <tr><th>Tema (exemplo ilustrativo)</th><th>Comentários</th><th>Ação possível</th></tr>
      </thead>
      <tbody>
        <tr><td>Atraso na entrega</td><td>18</td><td>Revisar rota e avisar prazo real</td></tr>
        <tr><td>Elogio à massa</td><td>12</td><td>Usar o elogio no cardápio (com autorização)</td></tr>
        <tr><td>Pizza fria</td><td>9</td><td>Testar embalagem térmica</td></tr>
        <tr><td>Outros</td><td>21</td><td>Ler um a um uma vez por mês</td></tr>
      </tbody>
    </table>

    <p>Setores como o de alimentação ganham muito com esse ciclo; o texto sobre <a href="/artigos/ia-para-restaurante-e-delivery-cardapio-pedidos-e-avaliacoes">IA para restaurante e delivery</a> aprofunda. Já clínicas precisam de mais cuidado com dados, como detalha o guia de <a href="/artigos/ia-para-clinica-e-consultorio-agenda-confirmacao-e-lgpd">IA para clínica e consultório com LGPD</a>.</p>

    <h2>Transforme a análise em um plano de ação</h2>

    <p>A análise só vale se virar tarefa. Depois de agrupar os temas, escolha no máximo três melhorias para o mês e dê a cada uma um responsável e uma data. Peça à IA para transformar os temas em ações pequenas e testáveis, por exemplo: "avisar o prazo real no momento do pedido" ou "ligar para clientes que deram nota baixa". Marque também como você vai medir o efeito, como a nota média ou o número de comentários sobre o mesmo problema no mês seguinte.</p>

    <p>Compartilhe o resultado com a equipe, mesmo que ela seja de duas pessoas. Quem atende o cliente costuma ter boas ideias para resolver o que aparece nos comentários. Se a pesquisa mostrar que o problema está na venda, o guia de <a href="/artigos/como-usar-ia-para-vender-mais-no-seu-negocio-local">vender mais no negócio local com IA</a> traz caminhos para ajustar a oferta.</p>

    <h2>Privacidade: o que nunca enviar ao chat</h2>

    <p>Comentário de cliente pode conter nome, telefone, endereço e até dado de saúde. Antes de colar no assistente, remova tudo que identifica a pessoa. Prefira ferramentas com opção de desativar o treinamento com seus dados, e veja <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber</a>. Informe também no formulário para que os dados serão usados e que a resposta é voluntária.</p>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Se o cliente pediu resposta, responda. Agradecer e agir rápido, como lembra o Sebrae, faz o cliente sentir que a pesquisa serviu para alguma coisa.</p></div>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Pesquisa longa:</strong> mais de 5 a 7 perguntas derruba a taxa de resposta.</li>
      <li><strong>Perguntas que induzem:</strong> geram nota alta e nenhuma informação útil.</li>
      <li><strong>Pedir sem agir:</strong> o cliente percebe quando nada muda.</li>
      <li><strong>Confiar cegamente na contagem da IA:</strong> confirme os números na planilha.</li>
      <li><strong>Misturar dado pessoal no prompt:</strong> anonimize sempre.</li>
      <li><strong>Pesquisar só quem comprou:</strong> quem desistiu também sabe o que está errado.</li>
    </ul>

    <p>Quando a pesquisa funcionar, use os melhores comentários na sua reputação, seguindo o guia de <a href="/artigos/como-melhorar-avaliacoes-e-reputacao-online-com-ia">avaliações e reputação online com IA</a>, e transforme clientes satisfeitos em indicações com o <a href="/artigos/programa-de-indicacao-de-clientes-com-ia-pequeno-negocio">programa de indicação de clientes</a>. Para mais ideias de rotina, veja <a href="/artigos/ia-para-mei-tarefas-que-voce-pode-automatizar">tarefas que o MEI pode automatizar</a> e o texto sobre <a href="/artigos/como-usar-ia-para-melhorar-onboarding-de-clientes">onboarding de clientes</a>. Comece esta semana: cinco perguntas, um formulário e uma ação por mês.</p>
  `,
  faq: [
    {
      question: "Como fazer uma pesquisa de satisfação com IA?",
      answer:
        "Peça à IA 5 perguntas simples sobre o seu tipo de negócio, revise as que induzem resposta, monte o formulário no Google Forms e envie logo após a compra ou o atendimento. Depois, anonimize os comentários e peça agrupamento por temas.",
    },
    {
      question: "Google Forms é gratuito para pesquisa de satisfação?",
      answer:
        "O Google Forms é citado pela Agência Sebrae entre as ferramentas gratuitas e pagas para criar pesquisas, e as respostas podem ir para o Google Sheets. Confira na página do Google os limites do seu tipo de conta antes de começar.",
    },
    {
      question: "Quantas perguntas devo colocar na pesquisa?",
      answer:
        "Para pequenos negócios, cerca de cinco perguntas costumam bastar: uma nota geral, uma sobre o ponto mais importante, uma de escolha do que melhorar e uma ou duas abertas. Quanto menor o formulário, maior a chance de resposta.",
    },
    {
      question: "Posso colar comentários de clientes no ChatGPT?",
      answer:
        "Só depois de remover nome, telefone, e-mail, endereço e qualquer dado sensível. Informe no formulário a finalidade do uso dos dados e prefira configurações que desativem o treinamento com suas conversas. Em saúde, o cuidado é maior.",
    },
    {
      question: "Quando enviar a pesquisa ao cliente?",
      answer:
        "Ao final da experiência de consumo, enquanto ela está fresca. Em delivery, pouco depois da entrega; em clínica, no mesmo dia; em serviço recorrente, após o primeiro ciclo. Evite enviar semanas depois, quando o cliente já esqueceu.",
    },
  ],
};
