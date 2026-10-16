import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "conta-de-luz-com-ia-como-entender-bandeira-tarifaria-e-consumo",
  title: "Conta de luz com IA: entenda a fatura, a bandeira e o consumo",
  seoTitle: "Conta de luz com IA: entenda fatura, bandeira e consumo",
  excerpt:
    "Aprenda a usar IA para entender a conta de luz: o que são TE, TUSD e bandeira tarifária, como calcular o consumo dos aparelhos e achar onde economizar.",
  metaDescription:
    "Conta de luz com IA: veja como pedir a um assistente que explique a fatura, a bandeira tarifária (verde em outubro de 2026) e o consumo dos seus aparelhos.",
  category: "iniciantes",
  articleSubcategory: "vida-pratica",
  date: "2026-10-16",
  readTime: 6,
  imageQuery: "electricity meter bill kitchen table",
  seed: 347,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Você pode enviar a fatura (com dados pessoais cobertos) a um assistente de IA e pedir que ele explique cada item em linguagem simples, mas confira os números na própria conta.",
    "A bandeira tarifária de outubro de 2026 é verde, sem cobrança extra, depois de cinco meses de amarela, que somava R$ 1,885 a cada 100 kWh, segundo a Aneel e o Jornal do Brasil.",
    "O consumo de um aparelho é potência em kW vezes horas de uso: um chuveiro de 5.500 W usado 30 minutos por dia gasta cerca de 82,5 kWh por mês.",
  ],
  content: `
    <p>Para entender a conta de luz com IA, tire uma foto ou um PDF da fatura, cubra CPF, endereço e número da instalação, envie a um assistente como o Gemini ou o ChatGPT e peça: "explique cada linha em linguagem simples e diga o que mudou em relação ao mês anterior". A IA lê os campos, traduz as siglas e aponta o que pesa mais. Os números, porém, você precisa conferir na própria conta.</p>

    <p>O outro ganho é descobrir para onde vai a energia da casa. Com três dados (potência do aparelho, horas de uso e a tarifa da sua distribuidora), a IA monta uma tabela de consumo e mostra onde cortar. Este guia traz o passo a passo, prompts prontos, a explicação da bandeira tarifária de outubro de 2026 e os cuidados para não entregar dados demais. Se é a sua primeira vez com assistentes, o <a href="/artigos/o-que-e-inteligencia-artificial-guia-completo">guia completo de inteligência artificial</a> explica a base.</p>

    <h2>O que aparece na conta de luz</h2>

    <p>A fatura mistura vários itens, e quase todo mundo olha só o total. Os principais são o consumo em kWh no período, as datas de leitura, a tarifa de energia (TE), a tarifa de uso do sistema de distribuição (TUSD), os tributos e, quando existe, o adicional da bandeira tarifária. Segundo o Diário do Nordeste, a TE é o valor da energia consumida e a TUSD cobre o uso da rede (fios, postes e transformadores). As duas aparecem separadas desde outubro de 2021 e não significam cobrança em dobro.</p>

    <p>O <a href="https://idec.org.br/release/idec-lanca-ferramenta-que-explica-e-calcula-conta-de-luz" target="_blank" rel="noopener noreferrer">Idec</a> destaca que encargos e tributos representam mais de 40% do valor mensal e mantém uma ferramenta educativa, o "É da sua conta", que explica a fatura e tem uma calculadora. Essa informação é de 2019, então use como referência de método, não como número atual.</p>

    <h2>Passo a passo: pedir à IA que explique a fatura</h2>

    <ol>
      <li>Baixe o PDF da fatura no aplicativo ou site da sua distribuidora, ou tire uma foto nítida.</li>
      <li>Cubra ou apague CPF, endereço, código de barras e número da instalação.</li>
      <li>Envie o arquivo ao assistente. A <a href="https://support.google.com/gemini/answer/14903178?hl=pt-BR" target="_blank" rel="noopener noreferrer">página de ajuda do Gemini</a> informa que o app aceita documentos e fotos, com até 10 arquivos por comando e, para a maioria dos tipos, 100 MB cada (conferido em 16/10/2026).</li>
      <li>Cole um prompt claro, como os abaixo.</li>
      <li>Confira cada número citado na fatura antes de agir.</li>
    </ol>

    <pre><code>Explique esta fatura de energia em linguagem simples, como se eu nunca tivesse lido uma. Liste cada linha, o que ela significa e quanto pesa no total. Se algum item estiver ilegível, diga que não consegue ler em vez de adivinhar.</code></pre>

    <pre><code>Esta é a fatura deste mês e a do mês passado. Compare consumo em kWh, dias de leitura, valor de energia, tributos e bandeira. Diga o que explica a diferença de valor e o que eu deveria verificar com a distribuidora.</code></pre>

    <p>Se a imagem estiver ruim, o assistente pode errar um dígito. O texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> mostra como checar. E para pedir melhor, o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompts que funcionam</a> ajuda.</p>

    <h2>Bandeira tarifária: o que é e qual vale em outubro de 2026</h2>

    <p>A bandeira tarifária sinaliza o custo da geração de energia no mês. Segundo a <a href="https://www.gov.br/aneel/pt-br/assuntos/tarifas/bandeiras-tarifarias" target="_blank" rel="noopener noreferrer">Aneel</a>, em página atualizada em 08/01/2026, ela é definida mensalmente e tem estes adicionais:</p>

    <table>
      <thead>
        <tr><th>Bandeira</th><th>Adicional por 100 kWh</th></tr>
      </thead>
      <tbody>
        <tr><td>Verde</td><td>sem adicional</td></tr>
        <tr><td>Amarela</td><td>R$ 1,885</td></tr>
        <tr><td>Vermelha, patamar 1</td><td>R$ 4,463</td></tr>
        <tr><td>Vermelha, patamar 2</td><td>R$ 7,877</td></tr>
      </tbody>
    </table>

    <p>A Aneel publica os valores por kWh; os de 100 kWh são uma conversão simples. Segundo o <a href="https://www.jb.com.br/editorias/2026/10/09/bandeira-tarifaria-outubro-2026.html" target="_blank" rel="noopener noreferrer">Jornal do Brasil</a>, outubro de 2026 está na bandeira verde, anunciada em 25 de setembro, e encerrou cinco meses de bandeira amarela (maio a setembro). O motivo foi a transição do período seco para o úmido, com mais chuva no Sul e no Sudeste. A bandeira de novembro será anunciada em 30 de outubro.</p>

    <p>Na prática, numa casa que consome 200 kWh, a amarela somava cerca de R$ 3,77 (2 x R$ 1,885) e a vermelha patamar 2 chegaria a cerca de R$ 15,75. A bandeira mexe pouco no total comparada aos tributos e à tarifa base, que varia por distribuidora.</p>

    <h2>Calcule o consumo de cada aparelho</h2>

    <p>A fórmula é simples: potência em kW x horas por dia x dias do mês. Um chuveiro elétrico de 5.500 W (5,5 kW) usado 30 minutos por dia, durante 30 dias, gasta 5,5 x 0,5 x 30 = 82,5 kWh. Se a sua tarifa fosse R$ 0,90 por kWh (valor hipotético para o exemplo, veja o da sua conta), o chuveiro custaria cerca de R$ 74,25 por mês só na energia.</p>

    <p>Peça à IA que faça a tabela para toda a casa:</p>

    <pre><code>Monte uma tabela de consumo mensal da minha casa. Aparelhos: chuveiro 5.500 W, 30 min por dia; geladeira, ligada o dia todo (me diga que dado preciso da etiqueta); ar-condicionado 9.000 BTU, 6 h por dia; 6 lâmpadas de 9 W, 5 h por dia; máquina de lavar 3 vezes por semana. Use tarifa de R$ [valor da minha fatura] por kWh. Mostre as contas e ordene do que mais gasta ao que menos gasta.</code></pre>

    <p>Atenção: potência de ar-condicionado e geladeira depende do modelo e do ciclo de funcionamento. Use a etiqueta do aparelho ou o manual, e trate a estimativa da IA como aproximação. Se você prefere uma planilha, o guia de <a href="/artigos/ia-para-planilhas-automatizar-relatorios-excel-sheets">IA para planilhas</a> mostra como montar.</p>

    <h2>Onde a IA ajuda a economizar</h2>

    <p>Depois da tabela, peça ideias ordenadas pelo ganho em reais. Normalmente o chuveiro, o ar-condicionado e o ferro de passar aparecem no topo, e trocar hábito vale mais que trocar lâmpada. Uma pessoa que passa de 30 para 20 minutos de banho por dia, no exemplo do chuveiro, cai de 82,5 para 55 kWh, uma redução de 27,5 kWh.</p>

    <p>Vale juntar isso a uma rotina de contas. O guia de <a href="/artigos/como-usar-ia-para-organizar-financas-pessoais">organizar finanças pessoais com IA</a> mostra como acompanhar o gasto mês a mês, e o de <a href="/artigos/como-usar-ia-para-criar-rotina-diaria-produtiva">rotina diária produtiva</a> ajuda a transformar a economia em hábito. Se a conta de energia faz parte de um orçamento maior de supermercado e casa, veja também o texto sobre <a href="/artigos/como-usar-ia-para-planejar-refeicoes-e-economizar-no-mercado">planejar refeições e economizar no mercado</a>.</p>

    <h2>Conta alta ou cobrança estranha: o que fazer</h2>

    <p>Se o valor subiu sem explicação, peça à IA um roteiro de verificação: comparar kWh com os meses anteriores, conferir se os dias de leitura estão normais, ver se há aparelho novo ou com defeito. Se algo parecer errado, o contato é com a distribuidora, com protocolo anotado. Para organizar uma reclamação, o guia de <a href="/artigos/reclamar-de-empresa-com-ia-consumidor-gov-br-passo-a-passo">reclamar de empresa com IA</a> mostra o caminho.</p>

    <p>Cuidado com golpes: mensagens que prometem desconto na conta, pedem pagamento por link ou ameaçam cortar a luz. Antes de pagar qualquer boleto recebido por mensagem, use o texto sobre <a href="/artigos/como-usar-ia-para-checar-mensagem-suspeita-e-evitar-golpes">checar mensagem suspeita com IA</a>.</p>

    <div class="callout-box callout-warn"><span class="callout-label">Privacidade</span><p>A fatura tem dados que identificam você e a sua casa. Cubra CPF, endereço e código de barras antes de enviar, e leia o guia sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a>.</p></div>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Enviar a fatura sem cobrir dados pessoais.</strong> Basta cobrir antes de fotografar.</li>
      <li><strong>Aceitar o número da IA sem conferir.</strong> Foto ruim vira dígito errado.</li>
      <li><strong>Comparar contas de períodos diferentes.</strong> Olhe os dias de leitura, não só o valor.</li>
      <li><strong>Culpar a bandeira por tudo.</strong> Ela pesa menos que a tarifa e os tributos.</li>
      <li><strong>Usar tarifa de outra cidade.</strong> Cada distribuidora tem a sua.</li>
    </ul>

    <p>Entender a conta de luz leva uns 15 minutos e pode mostrar onde estão os maiores gastos da casa. Pegue a fatura deste mês, cubra os dados pessoais e rode o primeiro prompt. Para mais usos práticos da IA no dia a dia, acesse a categoria de <a href="/categoria/iniciantes">IA para iniciantes</a> e veja também o <a href="/artigos/circle-to-search-pesquisar-e-traduzir-o-que-esta-na-tela">Circle to Search</a>, que ajuda a consultar o que está na tela do celular.</p>
  `,
  faq: [
    {
      question: "Posso enviar minha conta de luz para o ChatGPT ou o Gemini?",
      answer:
        "Pode, mas cubra CPF, endereço, código de barras e número da instalação antes de enviar. Peça que o assistente explique cada linha e diga o que não consegue ler. Depois confira os números na própria fatura, porque foto ruim pode gerar dígito errado.",
    },
    {
      question: "Qual é a bandeira tarifária de outubro de 2026?",
      answer:
        "Verde, segundo o Jornal do Brasil: sem cobrança extra, depois de cinco meses de bandeira amarela, de maio a setembro. A Aneel anunciou em 25/09/2026. A bandeira de novembro será divulgada em 30/10/2026. Confirme sempre na página da Aneel ou na sua fatura.",
    },
    {
      question: "O que são TE e TUSD na conta de luz?",
      answer:
        "TE é a tarifa da energia consumida e TUSD é a tarifa de uso da rede de distribuição, que cobre fios, postes e transformadores. Elas aparecem separadas desde outubro de 2021, segundo o Diário do Nordeste, e não significam cobrança em dobro, só o detalhamento de valores já cobrados.",
    },
    {
      question: "Como calcular o consumo de um aparelho em kWh?",
      answer:
        "Multiplique a potência em kW pelas horas de uso por dia e pelos dias do mês. Um chuveiro de 5.500 W usado 30 minutos por dia gasta 5,5 x 0,5 x 30 = 82,5 kWh. Multiplique pelo preço do kWh da sua fatura para estimar o custo em reais.",
    },
    {
      question: "A IA consegue achar erro na minha conta de luz?",
      answer:
        "Ela ajuda a comparar meses, listar itens estranhos e montar um roteiro de verificação, mas não substitui a distribuidora. Se algo parecer errado, anote o protocolo, peça a revisão por escrito e, se não resolver, registre reclamação nos canais de defesa do consumidor.",
    },
  ],
};
