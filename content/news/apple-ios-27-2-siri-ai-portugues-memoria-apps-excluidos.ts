import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "apple-ios-27-2-siri-ai-portugues-memoria-apps-excluidos",
  title: "iOS 27.2 chega com Siri AI em português e memória de conversas",
  summary:
    "A Apple liberou o iOS 27.2: a Siri AI ganha português e outros quatro idiomas, passa a lembrar conversas passadas e permite excluir apps do acesso da assistente.",
  author: "Bruno Danello",
  sourceName: "Ars Technica",
  sourceUrl: "https://arstechnica.com/apple/2026/10/apple-releases-ios-and-macos-27-2-with-new-siri-ai-features-new-music-logo/",
  date: "2026-10-26",
  publishedAt: "2026-10-26T18:45:00-03:00",
  topic: "lancamentos",
  imageQuery: "Apple Park Cupertino",
  content: `
    <p>A Apple liberou nesta segunda-feira (26) o iOS 27.2 e as versões equivalentes para iPad, Mac, Apple Watch, Apple TV e Apple Vision Pro. A <a href="https://developer.apple.com/news/releases/" target="_blank" rel="noopener noreferrer nofollow">página de lançamentos da Apple para desenvolvedores</a> lista as atualizações com data de 26 de outubro. Segundo a <a href="https://arstechnica.com/apple/2026/10/apple-releases-ios-and-macos-27-2-with-new-siri-ai-features-new-music-logo/" target="_blank" rel="noopener noreferrer nofollow">cobertura da Ars Technica</a>, que reproduz as notas de versão da empresa, o foco da atualização é a Siri AI, a nova camada de inteligência artificial da assistente. Para quem usa iPhone no Brasil, a novidade de maior alcance é a chegada do português.</p>

    <h2>Siri AI ganha mais cinco idiomas</h2>
    <p>De acordo com a Ars Technica, a Siri AI passa a funcionar em francês, japonês, coreano, português e espanhol, além do inglês. A expansão já havia sido anunciada anteriormente pela Apple e aparecia nas versões beta do sistema desde setembro. O mesmo texto ressalta uma limitação: a Siri AI continua indisponível na Europa e na China continental. Ou seja, o português chega para quem está fora desses mercados, o que inclui o Brasil, mas deixa de fora, por exemplo, usuários em Portugal.</p>

    <p>As notas de versão citadas pela reportagem indicam que o recurso é restrito a aparelhos mais recentes: todos os modelos do iPhone 16 em diante, além do iPhone 15 Pro e do iPhone 15 Pro Max. Quem tem um iPhone mais antigo recebe a atualização do sistema, que está disponível a partir do iPhone 11 segundo a lista da Apple, mas não ganha a Siri AI.</p>

    <h2>Memória: a Siri passa a lembrar conversas anteriores</h2>
    <p>A principal mudança funcional é um recurso de memória. Conforme a reportagem, a Siri agora consegue "recordar suas conversas passadas" e usar esse histórico quando responde. Na prática, isso reduz a necessidade de repetir contexto a cada pedido, algo que quem usa assistentes como ChatGPT, Claude ou Gemini já conhece bem. O sistema também amplia as fontes de dados que a assistente pode consultar para responder, incluindo recados de voz, anexos de mensagens e outros itens do aparelho.</p>

    <p>Segundo a descrição da Apple reproduzida na matéria, a atualização permite que a Siri AI "retenha contexto útil de interações anteriores" e use "uma gama mais ampla de contexto pessoal". Há ainda sugestões dentro do app Mensagens, que ajudam a executar ações rápidas em apps como Calendário e Lembretes com base na conversa, por exemplo transformar um convite recebido em um evento na agenda.</p>

    <h2>Controle de privacidade: a opção Apps Excluídos</h2>
    <p>Do outro lado da equação, o iOS 27.2 traz uma opção chamada "Excluded Apps" (apps excluídos, em tradução livre). Ela permite que o usuário escolha quais aplicativos a Siri, a busca e as sugestões podem acessar. É um contrapeso direto à ampliação do acesso a dados pessoais: se a assistente passa a olhar mais coisas, o usuário ganha uma forma de tirar da vista dela aplicativos sensíveis, como bancos, saúde ou mensagens profissionais.</p>

    <p>A Ars Technica não detalha, no trecho disponível, se o controle vale também para o histórico de memória já armazenado nem como a Apple trata esses dados. Esses são pontos que valem ser verificados nas configurações do aparelho e na documentação da empresa antes de ativar tudo.</p>

    <h2>Outras mudanças na atualização</h2>
    <p>A lista inclui suporte à marca d'água SynthID no app Fotos, que ajuda a identificar imagens geradas por IA, perfis de usuário no app Apple TV, a nova identidade visual do Apple Music e o suporte ao Apple Pencil no iPhone Duo, o dobrável da empresa. No macOS Golden Gate 27.2, no Apple Watch e no visionOS, o pacote repete em grande parte as novidades da Siri, com memória contextual e os novos idiomas.</p>

    <p>A reportagem menciona ainda que versões de teste do macOS 27.2 traziam referências a reconhecimento de gestos em apps como Fotos, Notas e Safari, mas isso não faz parte das notas oficiais e a Ars Technica trata o tema como não confirmado.</p>

    <h2>Contexto: a promessa antiga da Siri</h2>
    <p>A Siri AI chega depois de um período de críticas pelo atraso nos recursos de IA da assistente. O Portal da AI já noticiou o <a href="/noticias/apple-acordo-250-milhoes-processo-siri-ia-atrasada">acordo de US$ 250 milhões da Apple em processo por esse atraso</a> e a fala do CEO sobre a <a href="/noticias/apple-ternus-crise-memoria-chips-siri-gemini">crise de chips de memória</a>. Também mostramos como a empresa <a href="/noticias/apple-macos-full-disk-access-agentes-ia">reforçou o acesso total a disco no Mac por risco de agentes de IA</a>, um sinal de que privacidade e permissões viraram o centro da disputa por assistentes pessoais.</p>

    <h2>Por que isso importa para você</h2>
    <p>Para o usuário brasileiro de iPhone, o iOS 27.2 muda a Siri de comandos soltos para uma assistente que lembra o que foi dito. Isso tem usos práticos e riscos que merecem atenção:</p>
    <ul>
      <li><strong>Mais produtividade no dia a dia.</strong> Com memória e acesso a mensagens e recados de voz, a assistente pode ajudar a organizar compromissos e lembretes. O guia <a href="/artigos/assistente-de-voz-com-ia-como-usar-no-dia-a-dia">assistente de voz com IA: como usar no dia a dia</a> traz ideias de uso que valem para a Siri também.</li>
      <li><strong>Memória exige escolha.</strong> Quanto mais a assistente lembra, mais ela sabe sobre você. Entender o que fica guardado é parte do uso consciente, como explica <a href="/artigos/memoria-longa-em-ia-assistente-que-lembra-de-voce">memória longa em IA: o assistente que lembra de você</a>.</li>
      <li><strong>Revise os apps excluídos.</strong> Se você usa o celular para trabalho, finanças ou conversas com clientes, vale decidir logo quais apps ficam fora do alcance da Siri. O texto <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">IA e privacidade: o que você entrega sem perceber</a> ajuda a fazer essa revisão.</li>
      <li><strong>Confira o seu aparelho.</strong> Só iPhone 16 em diante, iPhone 15 Pro e 15 Pro Max entram na Siri AI. Quem tem um modelo mais antigo atualiza o sistema, mas não recebe esse recurso.</li>
      <li><strong>Cuidado com instruções escondidas.</strong> Assistentes que leem mensagens e anexos ficam expostos a conteúdo malicioso, tema do artigo <a href="/artigos/prompt-injection-risco-de-ia-que-le-paginas-e-emails">prompt injection: o risco de IA que lê páginas e e-mails</a>.</li>
    </ul>

    <div class="callout-box callout-tip">
      <span class="callout-label">Antes de atualizar</span>
      <p>Faça um backup do aparelho, abra os ajustes da Siri depois da atualização e confira a lista de apps excluídos antes de começar a usar a memória. A disponibilidade do português e do recurso no seu aparelho aparece nas configurações do sistema, e a Apple pode liberar os recursos de forma gradual.</p>
    </div>

    <h2>O que observar a seguir</h2>
    <p>O primeiro ponto é a qualidade da Siri AI em português: o idioma costuma chegar com menos recursos do que o inglês, e só o uso mostrará se a assistente entende bem o português brasileiro, com sotaques e gírias. O segundo é como a Apple vai explicar o tratamento dos dados de memória, principalmente para quem usa o iPhone para trabalhar. O terceiro é se a empresa vai levar a Siri AI à Europa, hoje fora do mapa por questões regulatórias. Até lá, o que está confirmado pela cobertura é o conjunto de novidades acima, com liberação em 26 de outubro.</p>
  `,
};
