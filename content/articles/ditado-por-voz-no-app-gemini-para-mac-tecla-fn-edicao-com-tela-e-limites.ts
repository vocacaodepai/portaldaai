import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ditado-por-voz-no-app-gemini-para-mac-tecla-fn-edicao-com-tela-e-limites",
  title: "Ditado por voz no app Gemini para Mac: como usar e limites",
  seoTitle: "Ditado por voz no Gemini para Mac: como usar",
  excerpt:
    "Veja como funciona o ditado por voz no app Gemini para Mac: segurar a tecla Fn, editar texto com contexto da tela, requisitos do Mac e limites de idioma.",
  metaDescription:
    "Ditado por voz no app Gemini para Mac: segure a tecla Fn, dite em qualquer app e reescreva texto com contexto da tela. Veja requisitos, privacidade e limites.",
  category: "ferramentas",
  date: "2026-10-30",
  readTime: 7,
  imageQuery: "microphone laptop desk",
  seed: 938,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "No app Gemini para Mac, segurar a tecla Fn transforma a fala em texto limpo no ponto em que o cursor está, em qualquer aplicativo.",
    "Com o raciocínio do Gemini ligado nas configurações, o recurso também usa o contexto da tela para reescrever ou reformatar o texto selecionado.",
    "O anúncio do Google falava em liberação em inglês, e o app exige Mac com chip Apple Silicon e macOS Sequoia (15.0) ou mais novo: confira antes de contar com o recurso.",
  ],
  content: `
    <p>O ditado por voz no app Gemini para Mac funciona assim: você segura a tecla Fn, fala, e o Gemini escreve o texto limpo no ponto em que o cursor está, em qualquer aplicativo aberto. O recurso foi anunciado nas notas de versão do Gemini em 29 de julho de 2026, junto com a edição de texto que leva em conta o que aparece na tela.</p>

    <p>Na prática, isso substitui o ritual de abrir uma conversa, ditar, copiar e colar no e-mail ou no documento. A ideia é escrever onde você já está. Este guia explica como ativar, o que o recurso faz além de transcrever, quais são os requisitos do Mac, o que ainda limita o uso no Brasil e quais cuidados de privacidade merecem atenção.</p>

    <h2>O que é o ditado do app Gemini para Mac</h2>

    <p>Segundo as <a href="https://gemini.google/release-notes/" target="_blank" rel="noopener noreferrer">notas de versão do Gemini</a>, a entrada de 29/07/2026 descreve duas coisas. A primeira é o ditado por voz: ao manter a tecla Fn pressionada, a fala vai para a janela ativa, e o Gemini a transcreve como texto "limpo e polido" na posição do cursor, em qualquer app. A segunda é a edição com consciência de tela, que só funciona se você ativar o raciocínio do Gemini nas configurações do aplicativo.</p>

    <p>"Limpo" aqui quer dizer algo além da transcrição literal. O objetivo é entregar um texto pronto para uso, e não uma cópia fiel de cada "é", "hum" e frase refeita. Mesmo assim, texto ditado e polido por IA continua precisando de leitura final, especialmente em nomes próprios, valores e datas, como qualquer conteúdo gerado por modelo (veja como <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">checar se a resposta está certa</a>).</p>

    <p>Este recurso é diferente de outros do mesmo aplicativo. O <a href="/artigos/antigravity-no-app-gemini-para-mac-o-que-e-quem-pode-usar-e-limites">Antigravity no app Gemini para Mac</a>, por exemplo, serve para iniciar um agente de código a partir da conversa. Já o ditado cuida só de escrita.</p>

    <h2>Requisitos: Mac, chip e sistema</h2>

    <p>A <a href="https://gemini.google/desktop" target="_blank" rel="noopener noreferrer">página do app para computador</a> informa que a versão para macOS pede um MacBook com chip Apple Silicon e macOS Sequoia (15.0) ou mais recente. Isso deixa de fora Macs com processador Intel. O Windows tem versão própria, com atalho Alt + Space, e o Google afirma que alguns recursos do Mac ainda não chegaram lá. Para essa versão, leia o artigo sobre o <a href="/artigos/app-do-gemini-para-windows-como-baixar-atalho-e-limites">app do Gemini para Windows</a>.</p>

    <p>A mesma página diz que o app pode ser usado nos países e idiomas em que o app Gemini é aceito, mas ressalva que a disponibilidade de recursos varia e que alguns exigem assinatura do Google AI, para maiores de 18 anos. Para comparar os planos, veja <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">Google AI Plus, Pro ou Ultra</a>. E, como o uso intenso pode esbarrar em cotas, o texto sobre os <a href="/artigos/limites-de-uso-do-gemini-janela-de-5-horas-planos-e-como-economizar">limites de uso do Gemini</a> explica como a janela de consumo funciona.</p>

    <h2>Como ditar com a tecla Fn, passo a passo</h2>

    <ol>
      <li><strong>Instale o app.</strong> Baixe o Gemini para Mac na página oficial indicada acima e entre com sua conta Google pessoal.</li>
      <li><strong>Conceda as permissões.</strong> Ao primeiro uso, o sistema costuma pedir autorização para microfone e para o app interagir com outras janelas. Leia cada pedido e libere só o que o recurso precisa.</li>
      <li><strong>Posicione o cursor.</strong> Clique no campo onde quer escrever: e-mail, documento, planilha, mensagem.</li>
      <li><strong>Segure a Fn e fale.</strong> Solte a tecla ao terminar. O texto aparece no cursor.</li>
      <li><strong>Revise antes de enviar.</strong> Leia com calma, principalmente números e nomes.</li>
    </ol>

    <p>Se a tecla Fn também aciona outra função no seu teclado (como o seletor de emojis do macOS), pode ser necessário ajustar essa configuração do sistema para evitar conflito. Procure nas preferências do teclado do Mac.</p>

    <h2>Edição com contexto da tela</h2>

    <p>Com o raciocínio ligado nas configurações do app, o Gemini passa a usar o que está na tela como contexto. De acordo com as notas de versão, isso permite reescrever ou reformatar um texto destacado, extrair informações de arquivos locais que você selecionar e gerar imagens no lugar em que você está trabalhando.</p>

    <p>Um exemplo realista: você escreveu um e-mail de cobrança educado, mas ficou longo. Selecione o parágrafo, segure a Fn e diga "deixe mais curto e mais firme, sem perder a cordialidade". O Gemini devolve a versão ajustada no próprio campo. O mesmo vale para trechos de um documento que precisam virar lista. Quem escreve e-mails difíceis encontra ideias de tom no artigo sobre <a href="/artigos/email-profissional-dificil-com-ia-feedback-prazo-e-recusa-sem-climao">e-mail profissional difícil com IA</a>, e o guia do <a href="/artigos/gemini-no-gmail-escrever-e-responder-emails-mais-rapido">Gemini no Gmail</a> mostra a alternativa dentro do próprio navegador.</p>

    <h3>Prompts de voz que funcionam</h3>

    <pre><code>Reescreva o texto selecionado em tom profissional e com no máximo 80 palavras.</code></pre>
    <pre><code>Transforme o parágrafo selecionado em uma lista com marcadores, mantendo todos os números.</code></pre>
    <pre><code>Corrija a ortografia e a pontuação do trecho selecionado sem mudar o sentido.</code></pre>

    <p>Peça sempre "sem mudar o sentido" ou "mantendo os números" quando o texto tiver valores. Esse pedido reduz o risco de a IA trocar dado por aproximação.</p>

    <h2>O limite de idioma: o que o anúncio diz</h2>

    <p>Aqui está o ponto que mais importa para quem fala português. A entrada das notas de versão afirma que o recurso estava sendo liberado em inglês para todos os usuários do app para Mac. Ela não diz que o português ainda não funciona, e a página do app fala em países e idiomas compatíveis com o Gemini de forma geral, mas a única informação datada e específica sobre o ditado é a de inglês.</p>

    <p>A recomendação prática é testar antes de depender do recurso. Dite uma frase curta em português, com números e nomes próprios, e confira o resultado. Se não funcionar bem, o <a href="/artigos/docs-live-criar-documento-por-voz-no-celular-planos-e-limites">Docs Live</a> e as opções de <a href="/artigos/comandos-de-voz-com-ia-no-computador-windows-e-mac">comandos de voz no computador</a> são alternativas, e o ditado nativo do macOS continua disponível. Para um panorama de assistentes de voz fora do computador, veja o texto sobre <a href="/artigos/assistente-de-voz-com-ia-como-usar-no-dia-a-dia">assistente de voz com IA no dia a dia</a>.</p>

    <h2>Privacidade: o que o app enxerga e guarda</h2>

    <p>Ditar em qualquer app significa que o Gemini pode ouvir a fala e, com a edição por tela ligada, ver o conteúdo exibido. A página do app informa que o histórico de conversas e a memória sincronizam entre computador, web e celular quando se usa a mesma conta. Para dados sensíveis, como contratos, documentos de clientes ou informações de saúde, desligue o raciocínio com contexto de tela e prefira não ditar.</p>

    <p>Vale rever o que fica guardado: o guia sobre <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">como apagar o histórico do Gemini e usar o chat temporário</a> mostra como limitar o rastro, e o texto sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade</a> ajuda a decidir o que não ditar de jeito nenhum.</p>

    <table>
      <thead>
        <tr><th>Situação</th><th>Use o ditado do Gemini?</th></tr>
      </thead>
      <tbody>
        <tr><td>Rascunho de e-mail comum</td><td>Sim, com revisão</td></tr>
        <tr><td>Anotações pessoais e ideias soltas</td><td>Sim</td></tr>
        <tr><td>Contrato, dado de cliente, prontuário</td><td>Não, ou só com contexto de tela desligado e regra da empresa</td></tr>
        <tr><td>Senhas, códigos, dados de cartão</td><td>Nunca</td></tr>
        <tr><td>Texto em português que precisa de precisão</td><td>Teste antes; revise sempre</td></tr>
      </tbody>
    </table>

    <h2>Erros comuns</h2>

    <ul>
      <li><strong>Enviar sem reler.</strong> Texto polido pela IA parece certo mesmo quando troca um número.</li>
      <li><strong>Ditar em ambiente barulhento.</strong> Ruído de fundo piora qualquer transcrição.</li>
      <li><strong>Deixar o contexto de tela ligado em documento sigiloso.</strong> Desligue quando a janela mostrar dado de terceiros.</li>
      <li><strong>Contar com o recurso sem checar o idioma.</strong> Teste em português antes de adotar na rotina.</li>
      <li><strong>Esquecer o plano.</strong> Alguns recursos dependem de assinatura e de idade mínima.</li>
    </ul>

    <h2>Vale a pena configurar?</h2>

    <p>Se você escreve muito no Mac e já usa o Gemini, o ditado com Fn economiza etapas, desde que passe no seu teste de português e que você mantenha o hábito de revisar. Se escreve pouco ou lida com dados sensíveis, o benefício é menor que o cuidado necessário. Para ver tudo o que o Gemini consegue fazer com arquivos, passe pelo guia de <a href="/artigos/criar-e-editar-arquivos-no-app-gemini-pdf-slides-e-planilhas-como-usar-e-limites">criar e editar arquivos no app Gemini</a> e pelo <a href="/artigos/menu-personalizar-do-gemini-skills-apps-e-controle-para-admins">menu Personalizar</a>.</p>
  `,
  faq: [
    {
      question: "Como ativar o ditado por voz no app Gemini para Mac?",
      answer:
        "Instale o app para Mac, entre com sua conta Google, conceda as permissões pedidas pelo sistema, clique no campo onde quer escrever e segure a tecla Fn enquanto fala. Ao soltar, o Gemini coloca o texto limpo no cursor. A edição com contexto de tela exige ativar o raciocínio do Gemini nas configurações.",
    },
    {
      question: "O ditado do Gemini para Mac funciona em português?",
      answer:
        "O anúncio do Google nas notas de versão fala em liberação em inglês para todos os usuários do app para Mac, e não detalha o português. Como a disponibilidade varia, teste uma frase curta em português antes de depender do recurso e confira nomes e números.",
    },
    {
      question: "Quais Macs têm o app Gemini?",
      answer:
        "Segundo a página oficial do app para computador, a versão para macOS exige um MacBook com chip Apple Silicon e macOS Sequoia (15.0) ou mais recente. Macs com processador Intel ficam de fora. Confira a página oficial, porque os requisitos podem mudar com novas versões.",
    },
    {
      question: "O Gemini para Mac ouve tudo o que eu falo?",
      answer:
        "O ditado é acionado ao segurar a tecla Fn. Já a edição com contexto de tela usa o conteúdo exibido e depende do raciocínio ligado nas configurações. Para dados sensíveis, desligue esse contexto, evite ditar e revise as opções de histórico e memória da sua conta Google.",
    },
    {
      question: "O ditado do Gemini é gratuito?",
      answer:
        "A página oficial diz que a disponibilidade de recursos varia e que alguns exigem assinatura do Google AI, para maiores de 18 anos. As notas de versão do ditado falam em liberação para todos os usuários do app para Mac, mas confira na sua conta o que está ativo antes de planejar o uso.",
    },
  ],
};
