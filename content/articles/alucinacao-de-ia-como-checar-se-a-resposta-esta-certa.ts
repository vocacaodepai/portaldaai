import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "alucinacao-de-ia-como-checar-se-a-resposta-esta-certa",
  title: "Alucinação de IA: como checar se a resposta está certa",
  seoTitle: "Alucinação de IA: como checar se a resposta está certa",
  excerpt:
    "Alucinação de IA é quando o chatbot inventa fatos, leis e links com ar de certeza. Veja por que acontece, os sinais de alerta e como checar em 5 passos.",
  metaDescription:
    "Alucinação de IA: entenda por que ChatGPT, Gemini e Claude inventam dados, aprenda 5 passos para checar cada resposta e use prompts que reduzem o erro.",
  category: "iniciantes",
  articleSubcategory: "conceitos",
  date: "2026-10-08",
  readTime: 9,
  imageQuery: "magnifying glass checking document",
  seed: 184,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Alucinação de IA é a resposta que soa certa e está errada: o modelo completa o texto com o que parece plausível, não com o que ele confirmou.",
    "Números, datas, leis, links e citações são os alvos preferidos do erro, e um método de 5 passos com fonte primária resolve a maior parte dos casos.",
    "Em saúde, direito e finanças a IA serve para organizar perguntas, nunca para decidir: a palavra final é do profissional ou do documento oficial.",
  ],
  sources: [
    {
      label: "Anthropic: Reduce hallucinations (documentação oficial)",
      url: "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations",
    },
    {
      label: "Kalai et al.: Why Language Models Hallucinate (arXiv, 2025)",
      url: "https://arxiv.org/abs/2509.04664",
    },
  ],
  content: `
    <p>Alucinação de IA é quando um chatbot como ChatGPT, Gemini ou Claude entrega uma informação falsa com o mesmo tom de segurança que usaria para uma verdadeira. Pode ser uma lei que não existe, um número inventado ou um link que leva a lugar nenhum. A defesa é um hábito simples de checagem, e ele cabe em cinco passos.</p>

    <p>Quem está começando costuma achar que a IA "sabe" as coisas e só às vezes erra. O mais útil é inverter a ideia: ela escreve texto plausível, e a verdade precisa ser conferida por você. Este guia mostra por que o erro acontece, como reconhecer os sinais, o método para checar e os prompts que diminuem o problema.</p>

    <h2>O que é alucinação de IA, em português claro</h2>

    <p>Alucinação é a resposta que parece correta, está bem escrita e é falsa. O nome pegou porque o modelo não mente de propósito: ele não tem intenção. Ele apenas produz a continuação mais provável para a sua pergunta, e às vezes a continuação mais provável é um fato que nunca existiu.</p>

    <p>Existem três versões comuns. A primeira é o fato inventado, como um artigo de lei com número e texto que ninguém aprovou. A segunda é a referência fabricada: livro, estudo ou link com autor e título críveis, mas inexistentes. A terceira é a distorção de algo real, por exemplo trocar o ano de uma decisão ou somar errado uma tabela que você mesmo enviou.</p>

    <p>Se você ainda está montando a base, o guia <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">o que é inteligência artificial</a> explica como esses modelos funcionam por dentro, e isso ajuda a entender por que o erro não é um defeito raro.</p>

    <h2>Por que a IA inventa informação com tanta confiança</h2>

    <p>O modelo foi treinado para prever a próxima palavra, não para consultar um banco de fatos verificados. Quando a pergunta cai numa área em que ele viu pouco material, o caminho mais provável ainda gera uma frase fluente. Fluência não é prova de verdade.</p>

    <p>Há também um incentivo de treino. Um estudo de pesquisadores publicado no <a href="https://arxiv.org/abs/2509.04664" rel="noopener noreferrer">arXiv em setembro de 2025</a> argumenta que os modelos alucinam porque os testes usados para avaliá-los premiam o palpite e raramente premiam o "não sei". Se chutar rende ponto e admitir dúvida não rende, o modelo aprende a chutar.</p>

    <p>Por isso a documentação oficial da Anthropic recomenda, entre as técnicas para <a href="https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations" rel="noopener noreferrer">reduzir alucinações</a>, dar ao modelo permissão explícita para dizer que não sabe e pedir que ele se baseie em trechos do documento que você forneceu. A mesma página lembra que essas técnicas reduzem o problema, mas não o eliminam, e que decisões de peso exigem validação.</p>

    <h2>Sinais de alerta: quando desconfiar da resposta</h2>

    <p>Alguns padrões aparecem toda vez que a IA está improvisando. Aprender a reconhecê-los poupa tempo, porque você sabe onde concentrar a conferência.</p>

    <ul class="checklist">
      <li>Número muito redondo ou muito preciso, sem fonte ao lado (por exemplo "73,4% das empresas").</li>
      <li>Citação entre aspas atribuída a uma pessoa, sem data nem veículo.</li>
      <li>Link com formato bonito, mas que dá página não encontrada quando você clica.</li>
      <li>Lei, artigo ou súmula com número exato que você nunca viu em lugar nenhum.</li>
      <li>Resposta confiante para uma pergunta sobre fato recente, depois da data de corte do modelo.</li>
      <li>Resposta que muda de versão quando você repete a mesma pergunta.</li>
    </ul>

    <p>O último sinal é o mais barato de testar. Pergunte duas vezes, em conversas novas. Se os detalhes divergem, pelo menos um dos lados é invenção, e o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">como escrever comandos que funcionam</a> mostra como deixar a pergunta menos aberta para reduzir essa variação.</p>

    <h2>Método de checagem em 5 passos</h2>

    <p>Use este roteiro sempre que a resposta for entrar num trabalho, numa decisão ou numa mensagem para outra pessoa. Para conversa casual não precisa.</p>

    <ol>
      <li><strong>Separe as afirmações verificáveis.</strong> Sublinhe cada número, data, nome, lei e citação. O restante é opinião ou explicação.</li>
      <li><strong>Pergunte a fonte, depois abra a fonte.</strong> Peça o link e entre nele. Se não abrir ou não disser o que a IA disse, descarte a afirmação.</li>
      <li><strong>Procure na fonte primária.</strong> Lei no site do Planalto, empresa no cadastro da Receita Federal, estudo no site do autor, preço na página oficial da loja.</li>
      <li><strong>Cruze com uma segunda IA ou uma segunda conversa.</strong> Serve para achar divergência, não para provar verdade, porque dois modelos podem errar juntos.</li>
      <li><strong>Registre o que foi confirmado.</strong> Anote a fonte e a data da conferência. Quem for ler depois consegue repetir o caminho.</li>
    </ol>

    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Pedir "tem certeza?" ao chatbot não é checagem. Ele costuma responder que sim ou se corrigir de forma igualmente confiante. A prova está fora do chat.</p></div>

    <h2>Tipos de erro e como checar cada um</h2>

    <p>Nem toda alucinação é igual, e o jeito de conferir muda conforme o tipo. A tabela abaixo serve como colinha para deixar aberta ao lado da conversa.</p>

    <table>
      <thead>
        <tr><th>Tipo de erro</th><th>Como aparece</th><th>Como checar</th></tr>
      </thead>
      <tbody>
        <tr><td>Lei ou norma inexistente</td><td>Número e artigo precisos, texto plausível</td><td>Buscar o número no site oficial do Planalto ou do órgão</td></tr>
        <tr><td>Citação inventada</td><td>Frase entre aspas de pessoa conhecida</td><td>Buscar a frase exata entre aspas e achar a entrevista original</td></tr>
        <tr><td>Link falso</td><td>Endereço bem formatado que não abre</td><td>Clicar; se falhar, buscar o título no próprio site</td></tr>
        <tr><td>Número sem fonte</td><td>Percentual ou valor muito específico</td><td>Procurar o relatório original e conferir ano e metodologia</td></tr>
        <tr><td>Dado de empresa</td><td>CNPJ, sede ou sócios inventados</td><td>Consultar o cadastro da Receita Federal</td></tr>
        <tr><td>Conta errada</td><td>Soma ou porcentagem que não fecha</td><td>Refazer na calculadora ou na planilha</td></tr>
      </tbody>
    </table>

    <p>O caso das contas merece destaque porque engana quem acha que computador nunca erra aritmética. O modelo escreve o resultado como texto. Para conta que importa, peça a fórmula e rode numa planilha.</p>

    <h2>Um exemplo brasileiro: a lei que não existe e o CNPJ que não fecha</h2>

    <p>Imagine uma dona de loja de roupas em Campinas que pergunta ao chatbot qual lei obriga a trocar produto comprado pela internet. A resposta cita um artigo com número e parágrafo, em tom firme. Ela cola o texto num aviso para os clientes. Dias depois, um cliente aponta que o artigo não diz aquilo, e o aviso vira constrangimento.</p>

    <p>O método resolveria em minutos. Passo 1: sublinhar "artigo tal" e o prazo citado. Passo 2: pedir o link. Passo 3: abrir o texto do Código de Defesa do Consumidor no site oficial e comparar. Nesse tipo de situação, o direito de arrependimento em compra online costuma ser buscado direto no código, e o texto oficial é quem manda.</p>

    <p>Outra cena é pedir o CNPJ de um fornecedor. O chatbot devolve catorze dígitos com formato correto, mas o número pertence a outra empresa ou nem existe. A conferência leva dois minutos no cadastro da Receita Federal. Quem faz pagamento com base no número do chat corre risco real de depositar para a pessoa errada. Esse cuidado combina com o checklist de <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">como escolher ferramenta de IA com segurança</a>.</p>

    <h2>Prompts que reduzem o erro</h2>

    <p>Prompt bom não elimina alucinação, mas muda o comportamento do modelo na direção certa: permitir a dúvida, ancorar em texto e separar o que é fato do que é suposição. Copie e adapte.</p>

    <h3>Prompt 1: permissão para não saber</h3>

    <pre><code>Responda apenas com o que você tem confiança de saber.
Se não tiver certeza ou não tiver a informação, escreva exatamente:
"Não tenho certeza". Não invente números, datas, leis nem links.
Pergunta: [sua pergunta]</code></pre>

    <h3>Prompt 2: ancorar em um documento seu</h3>

    <pre><code>Use somente o texto abaixo para responder. Primeiro, copie os
trechos exatos que sustentam a resposta, numerados. Depois responda
citando os números. Se o texto não responder, diga que o texto não cobre.
[cole o texto aqui]
Pergunta: [sua pergunta]</code></pre>

    <h3>Prompt 3: auditar a própria resposta</h3>

    <pre><code>Releia a resposta acima. Liste cada afirmação verificável
(número, data, nome, lei, citação) e classifique em: confirmada pelo
texto que enviei, conhecimento geral, ou suposição. Para cada
suposição, diga como eu poderia conferir em fonte oficial.</code></pre>

    <p>O segundo prompt é o mais forte, porque troca a memória do modelo pelo seu documento. Ele conversa com a prática de <a href="/artigos/como-usar-ia-para-resumir-pdfs-artigos-e-textos-longos">resumir PDFs e textos longos com IA</a>, e ferramentas que respondem com base em fontes, como as do guia de <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">Perplexity e NotebookLM</a>, facilitam o passo de abrir a referência.</p>

    <h2>Quando nunca confiar sem um profissional: saúde, direito e finanças</h2>

    <p>Nessas três áreas o erro custa caro e muitas vezes não dá para desfazer. A IA pode ajudar a entender termos, preparar perguntas e organizar documentos. Ela não deve decidir dose de remédio, estratégia de processo nem onde colocar dinheiro.</p>

    <p>Em saúde, use para montar a lista de perguntas da consulta, nunca para trocar o diagnóstico. Em direito, a revisão de documentos ganha velocidade, como mostra o texto sobre <a href="/artigos/ia-para-contratos-revisar-documentos-juridicos-mais-rapido">IA para contratos</a>, mas a cláusula que vai valer precisa de advogado. Em finanças, o guia sobre <a href="/artigos/como-usar-ia-para-investir-na-bolsa-sem-complicar">investir na bolsa com IA</a> e o de <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">organizar finanças pessoais</a> servem de apoio, com a conferência dos números feita por você.</p>

    <div class="callout-box callout-bad"><span class="callout-label">Nunca faça</span><p>Não cole a resposta de um chatbot em petição, laudo, contrato, declaração de imposto ou receita sem que um profissional da área leia e assine.</p></div>

    <h2>Erros comuns de quem usa IA sem checar</h2>

    <p>Alguns hábitos repetem o problema. O primeiro é tratar a primeira resposta como definitiva, sem nem pedir fonte. O segundo é confiar em link que a IA gerou sem clicar. O terceiro é perguntar sobre fato recente a um modelo sem acesso à internet, o que quase garante palpite.</p>

    <p>O quarto é copiar a resposta inteira para um trabalho, e o professor ou o cliente percebe a referência falsa antes de você. O quinto é usar a IA para validar a própria IA, com perguntas como "você tem certeza?". Quem está começando costuma cair em vários desses ao mesmo tempo, e a lista de <a href="/artigos/5-erros-comuns-de-quem-esta-comecando-a-usar-ia">erros comuns de quem está começando com IA</a> mostra outros que combinam com estes.</p>

    <p>Para estudo, a regra vale em dobro. Quem prepara prova com IA precisa conferir fórmula, data e jurisprudência na fonte, como detalha o guia de <a href="/artigos/como-usar-ia-para-estudar-para-provas-e-concursos">estudo para provas e concursos</a>.</p>

    <p>Antes de começar a usar de verdade, vale também escolher a ferramenta certa para cada tarefa: a comparação de <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude e Gemini</a> ajuda nisso.</p>

    <p>Na próxima vez que uma resposta parecer boa demais, rode os 5 passos antes de usar. Para ver o assunto por outro ângulo, leia sobre <a href="/artigos/deepfakes-ia-identificar-conteudo-falso-proteger-reputacao">como identificar conteúdo falso gerado por IA</a> e continue pelas outras dicas de <a href="/categoria/iniciantes">IA para iniciantes</a>.</p>
  `,
  faq: [
    {
      question: "O que é alucinação de IA?",
      answer:
        "É quando o chatbot entrega uma informação falsa como se fosse verdadeira: uma lei inexistente, um número inventado, um link que não abre ou uma citação que ninguém disse. O modelo gera o texto mais provável para a pergunta, e nem sempre o mais provável coincide com a realidade.",
    },
    {
      question: "Por que o ChatGPT inventa informação?",
      answer:
        "Porque ele foi treinado para prever a próxima palavra, não para consultar uma base de fatos checados. Quando falta material sobre o assunto, ele completa com algo plausível. Pesquisadores também apontam que os testes de avaliação premiam o palpite mais do que a admissão de dúvida.",
    },
    {
      question: "Como saber se a IA inventou uma lei ou uma fonte?",
      answer:
        "Peça o link, abra e compare o texto. Para lei, busque o número no site oficial do Planalto ou do órgão responsável. Se a norma, o artigo ou o link não existir, ou disser outra coisa, a afirmação é invenção. Perguntar de novo ao chatbot se tem certeza não conta como prova.",
    },
    {
      question: "Dá para eliminar a alucinação de IA com um prompt?",
      answer:
        "Não. Prompts que permitem responder 'não sei', que exigem trechos do documento enviado e que separam fato de suposição reduzem bastante o erro, mas não o zeram. A própria documentação da Anthropic diz que essas técnicas diminuem o problema e que decisões importantes pedem validação.",
    },
    {
      question: "Posso confiar na IA para saúde, direito e finanças?",
      answer:
        "Como apoio para entender termos e preparar perguntas, sim. Como decisão, não. Dose de remédio, cláusula de contrato, estratégia de processo e investimento precisam passar por médico, advogado ou profissional certificado, porque um erro nessas áreas custa caro e muitas vezes não tem volta.",
    },
  ],
  quiz: [
    {
      question: "O que é alucinação de IA?",
      options: [
        "Quando o app trava e para de responder",
        "Quando a resposta soa correta, mas contém informação falsa",
        "Quando a IA se recusa a responder",
      ],
      answer: 1,
      explanation:
        "Alucinação é a resposta fluente e confiante que traz fato, número, lei ou link inventado. O erro está no conteúdo, não na velocidade nem na recusa.",
    },
    {
      question: "Qual é a melhor forma de confirmar uma lei citada pelo chatbot?",
      options: [
        "Perguntar ao chatbot se ele tem certeza",
        "Buscar o texto em fonte oficial e comparar",
        "Confiar se o número do artigo for específico",
      ],
      answer: 1,
      explanation:
        "A prova está fora do chat: o texto oficial da lei. Número preciso não garante nada, porque o modelo também inventa detalhes precisos.",
    },
    {
      question: "Qual prompt tende a reduzir mais o erro?",
      options: [
        "Responda rápido e sem rodeios",
        "Use só o texto que enviei, cite os trechos e diga se não cobre",
        "Seja criativo e complete o que faltar",
      ],
      answer: 1,
      explanation:
        "Ancorar a resposta em um texto seu e permitir o 'não cobre' tira o modelo do palpite e deixa a resposta auditável.",
    },
  ],
};
