import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "gemini-no-chrome-o-que-faz-requisitos-e-como-ativar",
  title: "Gemini no Chrome: o que faz, requisitos e como ativar",
  seoTitle: "Gemini no Chrome: o que faz e como ativar",
  excerpt:
    "Gemini no Chrome é o assistente do Google dentro do navegador: veja o que ele faz, os requisitos, como ativar, os controles de privacidade e quando vale usar.",
  metaDescription:
    "Entenda o Gemini no Chrome: o que ele faz com as abas abertas, requisitos de idade e conta, passo a passo para ativar e os cuidados de privacidade antes de usar.",
  category: "ferramentas",
  date: "2026-10-12",
  readTime: 6,
  imageQuery: "web browser address bar laptop",
  seed: 210,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Gemini no Chrome lê a aba que você está vendo (e até 10 abas escolhidas por você) para resumir, explicar e ajudar a concluir tarefas sem sair da página.",
    "O recurso é liberado aos poucos e exige Chrome atualizado, login na conta Google, fora do modo anônimo, em região e idioma compatíveis.",
    "Antes de usar, revise as permissões de aba, microfone, localização e navegação automática, porque elas decidem o que o assistente enxerga e faz.",
  ],
  content: `
    <p>Gemini no Chrome é o assistente de inteligência artificial do Google embutido no navegador: você abre um chat ao lado da página e pede resumo, explicação ou ajuda com o que está na tela, sem copiar e colar nada em outro app. Segundo a <a href="https://support.google.com/chrome/answer/16283624" rel="noopener noreferrer" target="_blank">Central de Ajuda do Google Chrome</a> (verificado em 12/10/2026), ele usa o conteúdo da aba atual e pode considerar até 10 abas abertas.</p>
    <p>A diferença para abrir o site do Gemini em outra aba é o contexto: o assistente já sabe qual página você está lendo. Neste guia você vê o que ele faz de verdade, quais são os requisitos, como ativar, como se compara a outros navegadores com IA e quais cuidados de privacidade tomar antes de deixar ele trabalhar.</p>

    <h2>O que é o Gemini no Chrome e o que ele faz?</h2>
    <p>É um botão dentro do Chrome, chamado "Ask Gemini" na página de ajuda do Google, que abre um painel de conversa. Ali você pergunta sobre a página aberta ou sobre outras abas que marcar com o símbolo @. Em vez de pedir a um chatbot genérico que adivinhe o assunto, você já entrega o material de trabalho.</p>
    <p>A página oficial lista estes usos: resumir os pontos principais de um texto, esclarecer conceitos, encontrar respostas dentro do conteúdo, conversar por voz no modo Live enquanto navega, perguntar sobre áudio e vídeo que já estão tocando, fazer ações em várias etapas, escrever rascunhos no Gmail e consultar fotos. Também é possível trocar o modelo usado no chat.</p>
    <p>Quem já usa o Gemini no celular ou no computador reconhece o estilo das respostas. O ganho está em economizar o vaivém: o <a href="/artigos/gemini-no-gmail-escrever-e-responder-emails-mais-rapido">Gemini no Gmail</a> ajuda dentro do e-mail, e o do Chrome ajuda em qualquer site.</p>

    <h2>Requisitos para usar</h2>
    <p>Aqui está o ponto que mais frustra: o Google diz na própria página que o recurso não está disponível para todos os usuários no momento, ou seja, a liberação é gradual. Se o botão não aparece, pode ser só fila de liberação. Confira esta lista antes de procurar defeito.</p>
    <ul class="checklist">
      <li>Idade mínima de 13 anos, ou a idade aplicável no seu país.</li>
      <li>Região compatível com o recurso.</li>
      <li>Computador com Windows, Mac ou Chromebook Plus.</li>
      <li>Chrome na versão mais recente.</li>
      <li>Login no Chrome com a conta Google (o modo anônimo não funciona).</li>
      <li>Idioma do dispositivo compatível.</li>
    </ul>
    <p>Usuários menores de 18 anos têm restrições em alguns recursos. Se algo falhar, a própria página sugere reiniciar o navegador, desativar VPN e atualizar o Chrome.</p>

    <h2>Como ativar e usar, passo a passo</h2>
    <ol>
      <li>Atualize o Chrome em Configurações, Sobre o Google Chrome.</li>
      <li>Entre com sua conta Google no canto superior do navegador.</li>
      <li>Procure o botão do Gemini na barra de ferramentas do Chrome. Se não aparecer, espere alguns dias e atualize de novo.</li>
      <li>Abra uma página longa, como uma notícia ou um contrato, e clique no botão.</li>
      <li>Digite o pedido. Para incluir outra aba, escreva @ e escolha o nome dela.</li>
    </ol>
    <p>Um bom primeiro teste é abrir uma matéria de 3.000 palavras e pedir um resumo em cinco linhas. Compare com o texto original: se o resumo omitiu algo importante, você já aprendeu o tamanho do cuidado necessário. O guia de <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">alucinação de IA</a> mostra como conferir respostas.</p>
    <pre><code>Resuma esta página em 5 tópicos curtos para quem não conhece o assunto. Depois liste 3 pontos que você não conseguiu confirmar no texto.</code></pre>
    <pre><code>Compare @aba1 e @aba2 em uma tabela: preço, prazo e condições. Marque o que for diferente.</code></pre>

    <h2>Controles de privacidade que você precisa conhecer</h2>
    <p>Na área de configurações do assistente, a página oficial menciona controles para ocultar ou mostrar o ícone e gerenciar permissões como localização precisa, microfone, compartilhamento da aba atual por padrão e navegação automática. Cada um muda o que o Gemini enxerga ou faz por você.</p>
    <p>Minha recomendação prática: deixe o compartilhamento automático da aba desligado se você costuma abrir banco, plano de saúde ou e-mail corporativo, e ligue só quando for pedir ajuda com uma página comum. Antes de colar ou mostrar qualquer dado pessoal, leia o artigo sobre <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber ao usar IA</a> e, se quiser apagar conversas, o de <a href="/artigos/apagar-historico-do-gemini-e-usar-chat-temporario">histórico e chat temporário do Gemini</a>.</p>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Se uma ação em várias etapas envolver compra, pagamento ou envio de mensagem, confira cada passo antes de confirmar. O assistente pode errar a interpretação do pedido.</p></div>

    <h2>Gemini no Chrome, ChatGPT Atlas ou Comet: qual a diferença?</h2>
    <p>O Gemini é um recurso dentro do Chrome que você já usa. Os rivais são navegadores inteiros com IA no centro. Uma <a href="https://canaltech.com.br/software/chatgpt-atlas-vs-chrome-com-gemini-veja-o-que-muda-entre-os-navegadores-de-ia/" rel="noopener noreferrer" target="_blank">comparação do Canaltech</a> descreve o Atlas, da OpenAI, com barra lateral, memória baseada no histórico e agente que executa tarefas em planos pagos, enquanto o Chrome com Gemini é mais discreto, com janela flutuante, voz e integração com o Google Workspace. A matéria é da época do lançamento do Atlas, então confira na página de cada produto o que mudou.</p>
    <table>
      <thead><tr><th>Critério</th><th>Gemini no Chrome</th><th>Navegador com IA próprio</th></tr></thead>
      <tbody>
        <tr><td>Instalação</td><td>Nada novo: atualizar o Chrome</td><td>Baixar outro navegador e migrar dados</td></tr>
        <tr><td>Abordagem</td><td>IA como recurso do navegador</td><td>IA no centro da experiência</td></tr>
        <tr><td>Ideal para</td><td>Quem quer ajuda pontual</td><td>Quem quer delegar tarefas longas</td></tr>
        <tr><td>Risco</td><td>Liberação gradual</td><td>Mais dados no histórico e na memória</td></tr>
      </tbody>
    </table>
    <p>Para escolher o assistente em si, o comparativo <a href="/artigos/chatgpt-claude-gemini-qual-ia-escolher">ChatGPT, Claude ou Gemini</a> ajuda, e a diferença entre assistente e agente está em <a href="/artigos/agente-de-ia-chatbot-ou-automacao-qual-a-diferenca">agente, chatbot ou automação</a>.</p>

    <h2>Quanto custa?</h2>
    <p>A página de ajuda do Gemini no Chrome não fala em preço. Recursos mais avançados do Gemini costumam ficar em planos pagos do Google, e as regras mudam. Em vez de decorar valores, veja o comparativo dos <a href="/artigos/google-ai-plus-pro-ou-ultra-qual-plano-do-gemini-escolher">planos Google AI Plus, Pro e Ultra</a> e a página oficial do plano antes de pagar. Para o dia a dia de resumos e perguntas, comece pela versão que você já tem e só assine se bater em limite.</p>

    <h2>Exemplo: quem mais se beneficia</h2>
    <p>Pense em uma contadora em Belo Horizonte que lê, por semana, uns 15 documentos de órgãos públicos para atualizar clientes. Se o assistente resumir cada um em 3 minutos em vez de 10, ela recupera cerca de 1 hora e 45 minutos por semana. Esse número é uma conta ilustrativa, não promessa: o tempo real depende da qualidade do resumo e da sua revisão. Quem estuda também ganha, como mostra o texto sobre <a href="/artigos/como-usar-ia-para-resumir-pdfs-artigos-e-textos-longos">resumir PDFs e artigos longos</a>.</p>

    <h2>Quando vale usar e quando é melhor não usar</h2>
    <p>Vale usar para textos longos, páginas de ajuda, comparações de produtos em várias abas e dúvidas de vocabulário durante a leitura. Em todos esses casos o erro tem custo baixo e você consegue conferir a fonte rapidamente. O assistente também ajuda quem está estudando e precisa de uma explicação mais simples de um parágrafo difícil.</p>
    <p>É melhor não usar, ou pelo menos desligar o compartilhamento de abas, em páginas de banco, prontuário, folha de pagamento ou qualquer conteúdo com dados de terceiros. Também evite delegar sem revisão decisões com consequência financeira, como escolher um plano de saúde ou contratar um serviço. Nesses casos, use o resumo como mapa e leia as cláusulas importantes por conta própria.</p>
    <p>Uma regra simples ajuda: se um erro do assistente custaria mais de uma hora do seu dia ou mais de R$ 100, confirme na fonte original antes de agir.</p>

    <h2>Erros comuns</h2>
    <ul class="checklist">
      <li>Confiar no resumo sem abrir a fonte quando a decisão envolve dinheiro, saúde ou prazo legal.</li>
      <li>Pedir algo vago. Diga formato, tamanho e público, como ensina o guia de <a href="/artigos/prompt-engineering-como-escrever-comandos-que-funcionam">prompts que funcionam</a>.</li>
      <li>Deixar o compartilhamento de abas ligado em sites sensíveis.</li>
      <li>Achar que o recurso está quebrado quando é só liberação gradual.</li>
      <li>Usar sem seguir um <a href="/artigos/como-escolher-ferramenta-de-ia-com-seguranca-checklist">checklist de segurança para ferramentas de IA</a>.</li>
    </ul>

    <p>Teste hoje com uma página longa que você precisaria ler de qualquer jeito e compare o resumo com o original. Para outras opções de pesquisa assistida, veja <a href="/artigos/perplexity-notebooklm-ia-de-pesquisa-estudar-mais-rapido">Perplexity e NotebookLM</a> ou volte à categoria <a href="/categoria/ferramentas">Ferramentas de IA</a>.</p>
  `,
  faq: [
    {
      question: "O Gemini no Chrome é gratuito?",
      answer:
        "A página de ajuda do Google consultada em 12/10/2026 não cita preço para o assistente no Chrome. Alguns recursos do Gemini ficam em planos pagos do Google, e as condições mudam, então confirme nas páginas oficiais do Chrome e dos planos antes de pagar por qualquer coisa.",
    },
    {
      question: "Por que o botão do Gemini não aparece no meu Chrome?",
      answer:
        "O Google informa que o recurso é liberado gradualmente. Confira se o Chrome está atualizado, se você está logado na conta Google fora do modo anônimo, se o idioma do aparelho é compatível e se não há VPN ativa. Se tudo estiver certo, pode ser só questão de tempo.",
    },
    {
      question: "O Gemini no Chrome funciona no celular?",
      answer:
        "A página de ajuda consultada descreve o uso no computador, com Windows, Mac ou Chromebook Plus. Para celular, a disponibilidade pode ser diferente e muda com o tempo, então verifique a ajuda oficial do Chrome para Android e iPhone na sua conta.",
    },
    {
      question: "O Gemini lê todas as minhas abas?",
      answer:
        "Segundo a ajuda do Google, ele usa o conteúdo da aba atual e você pode compartilhar até 10 abas abertas. Há configurações de permissão, incluindo o compartilhamento da aba atual por padrão, que você pode ajustar conforme sua preferência de privacidade.",
    },
    {
      question: "Gemini no Chrome ou ChatGPT Atlas: qual é melhor?",
      answer:
        "Depende do uso. O Gemini no Chrome serve a quem quer ajuda pontual sem trocar de navegador. Navegadores com IA própria, como o Atlas, apostam em memória e agentes que executam tarefas. Teste a versão gratuita de cada um com uma tarefa real antes de decidir.",
    },
  ],
};
