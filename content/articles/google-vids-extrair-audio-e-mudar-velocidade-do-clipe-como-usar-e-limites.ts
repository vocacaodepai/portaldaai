import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "google-vids-extrair-audio-e-mudar-velocidade-do-clipe-como-usar-e-limites",
  title: "Google Vids: extrair áudio e mudar a velocidade do clipe",
  seoTitle: "Google Vids: extrair áudio e velocidade do clipe",
  excerpt:
    "O Google Vids ganhou duas ferramentas de edição: separar o áudio de um clipe e acelerar ou desacelerar cenas. Veja como usar, quem tem acesso e os limites.",
  metaDescription:
    "Google Vids agora extrai o áudio de um clipe em faixa própria e muda a velocidade de 0,25x a 2x. Veja para que serve, como testar, quem pode usar e os limites.",
  category: "ferramentas",
  date: "2026-10-25",
  readTime: 7,
  imageQuery: "video editing timeline laptop audio waveform",
  seed: 637,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Google Vids passou a separar o áudio de um clipe em uma faixa própria na linha do tempo, o que permite cortar, mover ou apagar o som sem mexer na imagem.",
    "Cada clipe também pode ser acelerado até 2x ou desacelerado até 0,25x dentro do próprio Vids, sem programa de edição externo.",
    "Segundo o anúncio do Google, não há controle de administrador nem configuração do usuário para as duas funções, e a liberação é gradual, com até 15 dias para aparecer.",
  ],
  content: `
    <p>O Google Vids agora permite extrair o áudio de um clipe e transformá-lo em uma faixa independente na linha do tempo, além de mudar a velocidade de cada clipe de 0,25x até 2x. Em português simples: dá para trocar o som de uma cena, tirar um ruído ou deixar uma demonstração mais rápida sem sair do Vids. O Google anunciou as duas novidades em 23/10/2026.</p>

    <p>Quem edita vídeo curto para o trabalho, para a loja ou para uma aula sabe que o som costuma dar mais trabalho do que a imagem. Este guia explica o que mudou, mostra um passo a passo de teste, dá exemplos de uso no dia a dia de um pequeno negócio, lista os limites que o anúncio confirma e aponta o que ainda não está documentado.</p>

    <h2>O que é o Google Vids e o que mudou</h2>

    <p>O Vids é o editor de vídeo do Google Workspace, pensado para apresentações em vídeo, tutoriais e comunicados internos. Ele aparece no texto sobre <a href="/artigos/google-vids-com-gemini-avatares-quem-pode-usar-e-limites">Google Vids com Gemini e avatares</a>, que cobre a parte de geração de cena e narração. As duas novidades de agora são de edição manual, o tipo de ajuste que antes pedia outro programa.</p>

    <p>Antes, o áudio de um clipe só podia ser silenciado ou ligado, e ficava preso à cena. Segundo o <a href="https://workspaceupdates.googleblog.com/2026/10/extract-audio-tracks-in-google-vids.html" target="_blank" rel="noopener noreferrer">anúncio do Google sobre extração de faixas de áudio</a>, o som agora pode ser separado com um clique e vira um clipe próprio na linha do tempo. Ele pode tocar por baixo de outras cenas, atravessar várias cenas ou ser apagado sem alterar o tempo do vídeo.</p>

    <p>A segunda novidade está no <a href="https://workspaceupdates.googleblog.com/2026/10/adjust-video-clip-playback-speed-directly-in-Google-Vids.html" target="_blank" rel="noopener noreferrer">anúncio sobre velocidade de reprodução</a>: cada clipe pode ir de 0,25x (câmera lenta) até 2x (dobro da velocidade). Os dois recursos complementam o que o Vids já fazia com voz e música.</p>

    <h2>Como extrair o áudio de um clipe</h2>

    <p>O Google informa que a extração é feita com um clique, mas o anúncio não descreve os menus exatos. Como a interface muda com frequência, o caminho mais seguro é conferir a página de ajuda <a href="https://support.google.com/docs/answer/15001100" target="_blank" rel="noopener noreferrer">Adicionar áudio a um vídeo no Google Vids</a>. Nela o Google explica como inserir arquivos de áudio do Drive ou do computador e que cada vídeo aceita até 50 objetos de áudio, entre música, efeitos e narrações, com a ressalva de que o limite pode mudar.</p>

    <p>Um roteiro de teste que você pode seguir hoje:</p>

    <ol>
      <li>Abra um vídeo no Vids e escolha um clipe que tenha fala ou ruído de fundo.</li>
      <li>Procure a opção de extrair o áudio no menu do clipe (se ela ainda não aparecer, a liberação gradual pode não ter chegado à sua conta).</li>
      <li>Confira se surgiu uma faixa de áudio separada na linha do tempo.</li>
      <li>Apague, apare ou arraste a faixa e escute como o vídeo ficou.</li>
      <li>Se quiser trocar a fala, grave ou envie outra narração e posicione sobre a cena.</li>
    </ol>

    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Antes de mexer, duplique o vídeo no Drive. Assim você testa a extração sem risco de perder a versão que já estava aprovada.</p></div>

    <h2>Como mudar a velocidade de um clipe</h2>

    <p>A faixa de velocidade vai de 0,25x a 2x. O anúncio não detalha o passo a passo, então procure o controle de velocidade nas opções do clipe selecionado. Alguns usos práticos:</p>

    <ul>
      <li><strong>2x em tarefas longas:</strong> uma gravação de tela de 4 minutos mostrando um cadastro no sistema cai para 2 minutos, sem cortes bruscos.</li>
      <li><strong>0,5x em detalhes:</strong> o movimento de uma mão encaixando uma peça ou clicando em um botão fica claro para quem assiste pela primeira vez.</li>
      <li><strong>0,25x em destaque:</strong> um instante de impacto, como o momento em que o produto sai da caixa, ganha ênfase.</li>
    </ul>

    <p>Atenção ao som: ao acelerar ou desacelerar, a fala do clipe pode ficar estranha. Por isso a combinação das duas novidades faz sentido: extraia o áudio, mude a velocidade só da imagem e coloque uma narração nova por cima. O anúncio não diz como o áudio se comporta quando a velocidade muda, então teste cada caso antes de publicar.</p>

    <h2>Exemplo: vídeo de treinamento para a equipe de uma loja</h2>

    <p>Imagine uma loja de 6 funcionários que grava, com o celular, um vídeo de 5 minutos mostrando como fazer a abertura do caixa. A gravação tem fala corrida, barulho de rua e pausas longas. Com as novas funções, o dono pode:</p>

    <ul>
      <li>Extrair o áudio e apagar o trecho com o barulho da rua.</li>
      <li>Acelerar para 2x as partes em que só se digita ou se conta dinheiro, o que pode economizar cerca de 1 minuto no total.</li>
      <li>Reduzir para 0,5x o trecho em que se confere o valor na tela.</li>
      <li>Gravar uma narração limpa por cima e usar a legenda automática do Vids.</li>
    </ul>

    <p>O resultado deixa de ser uma gravação bruta e passa a ser um material de treinamento que o novo funcionário revê quando precisar. A lógica de montar a rotina de integração está no guia sobre <a href="/artigos/treinar-funcionario-novo-com-ia-roteiro-da-primeira-semana-no-pequeno-negocio">treinar funcionário novo com IA</a>, e o Vids resolve a parte do vídeo.</p>

    <h2>Quem pode usar e quando chega</h2>

    <p>Segundo os dois anúncios, as funções estão disponíveis para todos os clientes do Google Workspace, assinantes do Workspace Individual e usuários com conta Google pessoal. Não há lista de planos excluídos nem controle de administrador, e também não existe uma configuração para o usuário ligar ou desligar.</p>

    <table>
      <thead>
        <tr><th>Função</th><th>Liberação gradual a partir de</th><th>Limite informado</th></tr>
      </thead>
      <tbody>
        <tr><td>Velocidade do clipe</td><td>16/10/2026</td><td>0,25x a 2x</td></tr>
        <tr><td>Extrair áudio</td><td>19/10/2026</td><td>Não informado no anúncio</td></tr>
      </tbody>
    </table>

    <p>A liberação vale para domínios Rapid Release e Scheduled Release e pode levar até 15 dias para ficar visível. Se a opção não aparece na sua conta, a explicação mais provável é o ritmo da liberação, e não um plano insuficiente. Dados verificados nos anúncios do Google em 25/10/2026.</p>

    <h2>Para que serve na prática, por área</h2>

    <h3>Pequeno negócio e vendas</h3>

    <p>Vídeos de produto curtos ganham ritmo com trechos acelerados, e a voz pode ser refeita sem regravar a imagem. Quem faz isso como serviço para lojistas pode usar as funções no pacote descrito em <a href="/artigos/videos-de-produto-com-ia-servico-para-lojistas-pacote-e-preco">vídeos de produto com IA como serviço</a>.</p>

    <h3>Criadores e redes sociais</h3>

    <p>Para quem produz conteúdo, o Vids não substitui um editor completo, mas resolve ajustes rápidos. Vale comparar com o que apps como o <a href="/artigos/canva-capcut-e-ia-artes-e-videos-sem-saber-design">Canva e o CapCut</a> oferecem, e com os cortes automáticos de <a href="/artigos/opus-clip-ou-vizard-qual-ia-corta-videos-em-clipes-virais">Opus Clip e Vizard</a>. Para planejar a distribuição, o texto sobre <a href="/artigos/ia-para-redes-sociais-criar-agendar-analisar-posts">IA para redes sociais</a> ajuda.</p>

    <h3>Estudo, trabalho e narração</h3>

    <p>Quem grava uma aula ou reunião pode extrair o áudio para transcrever. As opções estão em <a href="/artigos/melhores-ias-para-transcrever-audio-e-video-em-portugues">melhores IAs para transcrever áudio e vídeo em português</a>. Para trocar a voz da gravação, veja <a href="/artigos/ganhar-dinheiro-dublando-videos-com-ia-vozes-sinteticas">dublagem com vozes sintéticas</a> e a <a href="/artigos/dublagem-automatica-do-youtube-ativar-revisar-e-oferecer-como-servico">dublagem automática do YouTube</a>.</p>

    <h2>Limites e cuidados</h2>

    <ul class="checklist">
      <li>O anúncio não informa limite de duração do clipe, de número de faixas extraídas ou de tamanho de arquivo. Faça um teste com o seu material antes de prometer prazo a cliente.</li>
      <li>Extrair o som não dá direito de uso: música, voz de terceiros e trechos de vídeos de outras pessoas continuam protegidos. Use só o que for seu ou licenciado.</li>
      <li>Se a gravação tiver clientes ou funcionários falando, avise e peça autorização antes de compartilhar o vídeo.</li>
      <li>Em vídeos de treinamento e comunicados, mantenha o original salvo no Drive para poder voltar atrás.</li>
      <li>Revise a velocidade em quem fala: acelerar demais prejudica a compreensão, principalmente para quem ouve em segunda língua.</li>
    </ul>

    <h2>Erros comuns ao testar</h2>

    <p>O primeiro erro é concluir que a função não existe porque ela não apareceu: a liberação é gradual. O segundo é acelerar o clipe inteiro por hábito, quando só as partes sem fala pedem velocidade. O terceiro é apagar a faixa de áudio original antes de ter certeza de que a narração nova ficou boa. Por fim, muita gente esquece de ouvir o vídeo com fones e no alto-falante do celular, onde ruídos e cortes mais incomodam.</p>

    <p>Quer acompanhar o que muda nas outras ferramentas do Google? A seção de <a href="/categoria/ferramentas">ferramentas de IA</a> reúne os guias mais recentes, e o texto sobre os <a href="/artigos/resumo-em-video-no-gemini-notebook-formatos-estilos-e-limites">resumos em vídeo do Gemini Notebook</a> mostra outra forma de gerar vídeo a partir de documentos.</p>
  `,
  faq: [
    {
      question: "O Google Vids é gratuito?",
      answer:
        "O anúncio do Google diz que as duas funções estão disponíveis para clientes do Workspace, assinantes do Workspace Individual e usuários com conta Google pessoal, mas não trata de preço. Recursos de geração com Gemini podem ter regras próprias. Confira a página oficial do Vids para saber o que a sua conta inclui.",
    },
    {
      question: "Como extrair o áudio de um clipe no Google Vids?",
      answer:
        "Segundo o Google, a extração é feita com um clique, e o som vira uma faixa separada na linha do tempo. O anúncio não descreve os menus, então procure a opção nas configurações do clipe selecionado. Se ela não aparecer, a liberação gradual pode não ter chegado à sua conta.",
    },
    {
      question: "Qual a velocidade máxima e mínima de um clipe no Vids?",
      answer:
        "A faixa informada pelo Google vai de 0,25x, que é câmera lenta, até 2x, o dobro da velocidade normal. A mudança é feita por clipe, dentro do próprio editor, sem programa externo. O anúncio não detalha como o áudio se comporta quando a velocidade muda, então teste antes.",
    },
    {
      question: "Meu administrador pode bloquear essas funções?",
      answer:
        "Não, de acordo com o anúncio: o Google informa que não há controle de administrador nem configuração do usuário para extrair áudio ou mudar a velocidade. Outras funções do Vids, como as de geração com Gemini, podem ter controles próprios, então a regra vale só para essas duas.",
    },
    {
      question: "Por que a opção ainda não apareceu na minha conta?",
      answer:
        "A liberação é gradual e, segundo o Google, pode levar até 15 dias para ficar visível. A velocidade do clipe começou a ser liberada em 16/10/2026 e a extração de áudio em 19/10/2026. Atualize a página, confira se está no Vids e tente de novo nos próximos dias.",
    },
  ],
};
