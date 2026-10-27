import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "google-genie-4-modelo-de-mundo-audio-tempo-real",
  title: "Google lança o Genie 4, modelo de mundos com áudio e edição em tempo real",
  summary:
    "O Google DeepMind abriu em prévia o Genie 4, que cria mundos interativos com som, aceita comandos durante a simulação e mantém a cena coerente por até dois minutos.",
  author: "Bruno Danello",
  sourceName: "TechCrunch",
  sourceUrl: "https://techcrunch.com/2026/10/27/googles-genie-4-world-model-adds-audio-more-realistic-worlds-and-real-time-steering/",
  date: "2026-10-27",
  publishedAt: "2026-10-27T13:36:00-03:00",
  topic: "lancamentos",
  imageQuery: "Google DeepMind logo",
  content: `
    <p>O Google DeepMind apresentou nesta terça-feira (27) o Genie 4, a nova versão da sua família de modelos de mundo: sistemas de inteligência artificial que geram ambientes interativos, nos quais é possível se mover e agir, a partir de uma frase ou de uma imagem. A novidade foi relatada pelo TechCrunch e saiu, por enquanto, em prévia de pesquisa para um grupo fechado de testadores. Esta matéria é uma análise própria a partir do que foi divulgado; o crédito do veículo está no fim do texto.</p>

    <p>Se você ainda não acompanha esse tipo de ferramenta, a ideia é parecida com a de um gerador de vídeo, com uma diferença importante: em vez de entregar um clipe pronto, o modelo cria o mundo quadro a quadro enquanto a pessoa interage com ele. É como se o cenário fosse inventado em tempo real a cada movimento.</p>

    <h2>O que o Genie 4 faz de novo</h2>
    <p>De acordo com a reportagem, o Genie 4 traz cinco avanços principais em relação ao Genie 3:</p>
    <ul>
      <li><strong>Áudio em tempo real.</strong> O mundo agora tem som que combina com o que acontece na tela, incluindo música, ruído ambiente e diálogos interativos.</li>
      <li><strong>Edição livre durante a simulação.</strong> Dá para digitar um pedido no meio da cena para mudar o clima, o ângulo da câmera ou acrescentar pessoas e objetos, sem recomeçar do zero.</li>
      <li><strong>Mais consistência.</strong> O modelo mantém uma cena coerente por até dois minutos, o dobro do limite do Genie 3.</li>
      <li><strong>Física e personagens melhores.</strong> O Google diz que o movimento dos objetos é mais plausível e que as pessoas parecem mais humanas.</li>
      <li><strong>Integração com o Gemini.</strong> O Gemini atua como uma espécie de diretor: planeja as etapas e confere os quadros, enquanto o Genie 4 gera as imagens.</li>
    </ul>

    <h2>O teste com robôs</h2>
    <p>Um dos experimentos citados liga o Genie 4 à área de robótica do Google. Nele, o modelo Gemini 4 Argon dividiu uma tarefa em passos e o Genie 4 simulou cada passo em tempo real. A proposta é testar cenários de robôs dentro da simulação antes de colocá-los para operar no mundo físico, o que reduz custo e risco de acidentes. É um uso que se repete no setor: simular primeiro, errar na tela e só depois levar o robô para a fábrica ou para o laboratório.</p>

    <p>O Google também fala em aplicações como jogos, aprendizado interativo e criação de filmes. Entre os exemplos, aparece a ideia de entrar em uma pintura de um evento histórico e conversar com os personagens. Testadores veem potencial para esboçar roteiros e storyboards, e um engenheiro do DeepMind, Diego Rivas, afirmou que o ponto forte é manter o que chamou de estado de fluxo no processo criativo. Ele também disse que o Gemini Omni, modelo que gera vídeo a partir de imagens, áudio e texto, poderia um dia transformar esses protótipos em materiais finais, mas que essa capacidade ainda está distante.</p>

    <h2>Quem pode usar e quando</h2>
    <p>Hoje, só testadores de confiança têm acesso. Nas próximas semanas, segundo a reportagem, o Genie 4 deve chegar aos assinantes do plano Google AI Ultra por meio do Project Genie, ferramenta do Google para gerar mundos interativos a partir de texto ou imagem. Também estão previstos acessos antecipados para parceiros da API do Gemini e do Google AI Studio. A reportagem não traz datas exatas para a liberação mais ampla nem informa preços além do plano Ultra, então qualquer previsão de custo para quem desenvolve ainda é especulação.</p>

    <h2>Limites que o próprio time admite</h2>
    <p>A equipe reconhece problemas. Detalhes e objetos podem se deformar quanto mais tempo a simulação dura, e ainda não está resolvido como garantir a precisão do áudio nem como deixar legível um texto que apareça dentro do mundo, como uma placa ou um letreiro. Rivas resumiu o momento dizendo que ainda são os primeiros dias e que a experiência final do produto não está clara. Dois minutos de coerência são um avanço, mas ainda estão longe de uma fase de jogo ou de uma cena de filme completa.</p>

    <h2>Uma corrida que esquentou</h2>
    <p>O lançamento acontece num setor que anda rápido. A Runway lançou há alguns meses a segunda versão do seu modelo de mundo, o GWM Worlds 2, também jogável e com geração de áudio. Há ainda movimento de compras: a AMD está adquirindo a World Labs, e a Amazon estaria em conversas para comprar a Decart. Já cobrimos aqui a <a href="/noticias/amd-compra-world-labs-fei-fei-li-ia-espacial">compra da World Labs pela AMD</a>, o <a href="/noticias/google-gemini-4-argon-lancamento-preco">lançamento do Gemini 4 Argon</a> e o <a href="/noticias/runway-praxis-1-modelo-aberto-robos">Praxis 1, da Runway, modelo aberto para robôs</a>. O Genie 4 liga essas pontas: mundos simulados servem tanto para entretenimento quanto para treinar máquinas.</p>

    <h2>Por que isso importa para você</h2>
    <p>Mesmo que o Genie 4 ainda não esteja ao alcance do público, ele sinaliza para onde vai a criação de conteúdo com IA, e quem trabalha com isso no Brasil pode se antecipar:</p>
    <ul>
      <li><strong>Criação de conteúdo sai do clipe pronto.</strong> Em vez de pedir um vídeo e torcer, você poderá dirigir a cena enquanto ela acontece. Para criadores, isso muda o processo de ideação. O guia <a href="/artigos/ia-para-criadores-de-conteudo-videos-textos-e-artes">IA para criadores de conteúdo</a> ajuda a organizar o fluxo atual com as ferramentas que já existem.</li>
      <li><strong>Prototipagem barata.</strong> Agências, estúdios pequenos e profissionais de educação poderão testar uma ideia de jogo, de aula interativa ou de cena antes de gastar com produção. Quem vende esse tipo de serviço deve acompanhar o acesso via API.</li>
      <li><strong>Robótica e indústria.</strong> Simular antes de operar tende a baratear a adoção de robôs em armazéns e fábricas, assunto que afeta vagas e investimentos. Veja o que já mostramos em <a href="/noticias/anthropic-robos-74-por-cento-tarefas-fisicas">robôs e tarefas físicas</a>.</li>
      <li><strong>Acesso caro no início.</strong> A primeira porta de entrada é o plano Google AI Ultra, de preço alto para o bolso brasileiro. Vale esperar a abertura para a API antes de assinar só por causa dele.</li>
      <li><strong>Cuidado com direitos e uso de imagem.</strong> Mundos com pessoas e personagens realistas levantam dúvidas sobre direitos autorais e de imagem. Se for usar algo gerado em trabalho de cliente, confira os termos de uso e a licença antes de publicar. Para conhecer ferramentas de vídeo já disponíveis, veja <a href="/artigos/ia-para-video-criar-avatar-digital-que-fala-por-voce">IA para vídeo: criar um avatar digital que fala por você</a>.</li>
    </ul>

    <div class="callout-box callout-tip">
      <span class="callout-label">Dica prática</span>
      <p>Você não precisa esperar o Genie 4 para treinar o olhar. Pratique descrever cenas com detalhes de ambiente, câmera, clima e som nas ferramentas de vídeo que já usa. Quem aprende a dirigir uma cena por texto hoje estará mais preparado quando a edição em tempo real chegar.</p>
    </div>

    <h2>O que observar a seguir</h2>
    <p>O primeiro ponto é a data de chegada ao Project Genie, prometida para as próximas semanas, e se o conteúdo ficará restrito ao plano Ultra. O segundo é a abertura para a API do Gemini e do AI Studio, que decide se desenvolvedores e pequenas empresas poderão criar produtos em cima do modelo. O terceiro é a evolução dos limites: dois minutos de consistência e áudio ainda impreciso mostram que a tecnologia está em estágio inicial. O que dá para afirmar hoje é o essencial: o Google DeepMind colocou um modelo de mundo com som, edição ao vivo e direção do Gemini em prévia fechada, com acesso mais amplo previsto para as próximas semanas e sem preço divulgado.</p>
  `,
};
