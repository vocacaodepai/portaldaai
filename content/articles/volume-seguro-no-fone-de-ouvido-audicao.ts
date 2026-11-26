import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "volume-seguro-no-fone-de-ouvido-audicao",
  title: "Volume seguro no fone de ouvido: como proteger a audição",
  seoTitle: "Volume seguro no fone de ouvido: como proteger a audição",
  excerpt:
    "Volume seguro no fone de ouvido: veja os limites da OMS, como ativar alertas no celular, que tipo de fone ajuda e os sinais de que a audição pede atenção.",
  metaDescription:
    "Qual é o volume seguro no fone de ouvido? Limites da OMS por semana, ajustes no iPhone e no Android, escolha do modelo, cuidados e sinais de alerta.",
  category: "guias-e-dicas",
  articleSubcategory: "saude-e-conforto",
  date: "2026-11-26",
  readTime: 9,
  imageQuery: "person wearing headphones commute",
  seed: 2333,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A OMS indica que 80 dB podem ser ouvidos com segurança por até 40 horas por semana, e esse tempo cai para 4 horas quando o som chega a 90 dB.",
    "No iPhone dá para ver o nível do som nos fones e definir um limite de volume; no Android, o alerta de exposição depende do fabricante e do país.",
    "Um fone bem encaixado e com cancelamento de ruído ajuda a não subir o volume na rua, mas o hábito de pausar e conferir o nível continua com você.",
  ],
  content: `
    <p>O volume seguro no fone de ouvido depende de duas coisas juntas: o nível do som e o tempo de uso na semana. Como referência para o dia a dia, a OMS sugere não passar de 60% do volume máximo do aparelho, usar um fone bem ajustado e fazer pausas para o ouvido descansar.</p>
    <p>Este guia mostra os números por trás dessa orientação, onde achar os alertas no celular, que tipo de fone ajuda em cada rotina e como cuidar do aparelho. Não é consulta médica nem teste de produto: são orientações de fontes oficiais, com a conta explicada.</p>

    <h2>Qual é o volume seguro no fone de ouvido?</h2>
    <p>A página de perguntas e respostas da <a href="https://www.who.int/news-room/questions-and-answers/item/deafness-and-hearing-loss-safe-listening" target="_blank" rel="noopener noreferrer">OMS sobre escuta segura</a>, datada de março de 2026, afirma que um som de 80 dB pode ser ouvido com segurança por até 40 horas por semana. Cada degrau para cima encurta muito esse tempo. A tabela abaixo repete os valores da organização.</p>
    <table>
      <thead>
        <tr><th>Nível do som</th><th>Tempo seguro por semana</th></tr>
      </thead>
      <tbody>
        <tr><td>80 dB</td><td>40 horas</td></tr>
        <tr><td>85 dB</td><td>12 horas e 30 minutos</td></tr>
        <tr><td>90 dB</td><td>4 horas</td></tr>
        <tr><td>95 dB</td><td>1 hora e 15 minutos</td></tr>
        <tr><td>100 dB</td><td>20 minutos</td></tr>
      </tbody>
    </table>
    <p>O instituto americano de surdez e outros distúrbios da comunicação, o <a href="https://www.nidcd.nih.gov/health/noise-induced-hearing-loss" target="_blank" rel="noopener noreferrer">NIDCD</a>, usa outra escala de medição (dBA) e chega a um recado parecido. Sons de até 70 dBA dificilmente causam perda, mesmo por muito tempo, enquanto a exposição longa ou repetida a 85 dBA ou mais pode causar. Segundo o mesmo texto, música no fone em volume máximo fica entre 94 e 110 dBA.</p>
    <p>A porcentagem do controle de volume não é a mesma coisa que decibel. O mesmo ponto da barra pode soar diferente de um celular para outro e de um fone para outro. Por isso vale usar os 60% como ponto de partida e conferir a medição do aparelho quando ela existir.</p>

    <h2>Faça a conta da sua semana</h2>
    <p>Veja um exemplo hipotético de quem mora em uma capital como São Paulo. A pessoa ouve música no transporte uma hora por dia, de segunda a sexta (5 horas), treina com fone três vezes por semana (3 horas) e assiste a uma série no domingo (2 horas). Os níveis em decibéis abaixo são inventados para a conta: os seus dependem do aparelho, do fone e do barulho ao redor.</p>
    <p>O cálculo soma quanto cada atividade consome do tempo permitido na tabela da OMS. É uma aproximação da ideia de dose acumulada em sete dias que a <a href="https://source.android.com/docs/core/audio/sound-dose?hl=pt-br" target="_blank" rel="noopener noreferrer">documentação do Android sobre dose sonora</a> descreve para os próprios celulares.</p>
    <table>
      <thead>
        <tr><th>Atividade</th><th>Cenário alto</th><th>Cenário ajustado</th></tr>
      </thead>
      <tbody>
        <tr><td>Transporte, 5 horas</td><td>90 dB: 125% do limite</td><td>80 dB: cerca de 13%</td></tr>
        <tr><td>Treino, 3 horas</td><td>85 dB: 24%</td><td>80 dB: cerca de 8%</td></tr>
        <tr><td>Série, 2 horas</td><td>80 dB: 5%</td><td>80 dB: 5%</td></tr>
        <tr><td><strong>Total na semana</strong></td><td><strong>cerca de 154%</strong></td><td><strong>cerca de 25%</strong></td></tr>
      </tbody>
    </table>
    <p>No cenário alto, só o transporte já estoura a semana. Baixar o nível no ônibus e no metrô é o que mais muda o resultado, e isso costuma depender de diminuir o barulho externo que chega ao ouvido. Se quiser repetir a conta com os seus horários, peça ajuda a um assistente de IA com este comando:</p>
    <pre><code>Vou informar quantas horas por semana uso fone em cada atividade e o nível em dB que meu celular mostrou. Use somente esta tabela de tempo seguro por semana: 80 dB = 40 h; 85 dB = 12,5 h; 90 dB = 4 h; 95 dB = 1,25 h; 100 dB = 20 min. Para cada atividade, calcule horas usadas divididas pelo tempo seguro, some as frações e mostre o total em porcentagem. Se faltar um nível, pergunte em vez de estimar. Minhas atividades: [liste aqui].</code></pre>
    <p>Refaça pelo menos uma divisão na calculadora, porque modelos de linguagem erram contas, como mostra o texto sobre <a href="/artigos/alucinacao-de-ia-como-checar-se-a-resposta-esta-certa">como checar se a resposta da IA está certa</a>. E não precisa enviar laudo nem histórico de saúde para fazer isso: veja <a href="/artigos/ia-e-privacidade-o-que-voce-entrega-sem-perceber">o que você entrega sem perceber</a> ao conversar com um chatbot.</p>

    <h2>Alertas e limite de volume no celular</h2>
    <p>No iPhone, o <a href="https://support.apple.com/pt-br/108968" target="_blank" rel="noopener noreferrer">suporte da Apple sobre notificações de fone</a> indica o caminho: Ajustes, Som e Tato, Segurança de Fone de Ouvido. Ali ficam as notificações, que avisam quando você atinge o limite recomendado de exposição em 7 dias, e a opção Limite de Volume, que reduz o som quando ele passa do nível em decibéis que você definir.</p>
    <p>A mesma página ensina a ver o nível na hora: deslize o dedo do canto superior direito para baixo e toque no ícone de Audição. O histórico de avisos aparece no app Saúde, na aba Explorar, em Audição. O limite de 7 dias vale para áudio de mídia, sem contar ligações, e o texto não informa a precisão com fones de outras marcas, então use o número como referência.</p>
    <p>No Android, o suporte a essa medição existe desde a versão 14, mas a documentação para desenvolvedores mostra que a ativação depende do fabricante e das regras de cada país. Abra as configurações de som e busque por "volume", "audição" ou "fone". Se não houver nada, o ajuste que sobra é manual: deixe a barra em até 60% e perceba quando você está aumentando por causa do barulho.</p>
    <ul class="checklist">
      <li>Conferir se o celular tem aviso ou limite de volume e ativar.</li>
      <li>Ajustar o volume em um lugar silencioso antes de sair de casa.</li>
      <li>Fazer pausas em períodos longos de uso, de preferência em silêncio.</li>
      <li>Em aparelho de criança, ensinar a ficar abaixo de 60% do máximo, como orienta a OMS.</li>
    </ul>

    <h2>Que tipo de fone ajuda em cada rotina</h2>
    <p>Um bom fone traz conforto, menos necessidade de aumentar o som em lugar barulhento e voz mais clara em aula ou reunião, quando o encaixe é bom. A OMS recomenda fones bem ajustados e com cancelamento de ruído, além de aparelhos que já tragam recursos de monitoramento e limite de volume. Cancelamento de ruído não impede ninguém de ouvir alto: ele só tira um dos motivos para isso.</p>
    <table>
      <thead>
        <tr><th>Sua rotina</th><th>O que procurar</th><th>Indicação do blog para comparar</th></tr>
      </thead>
      <tbody>
        <tr><td>Ônibus, avião, escritório com ruído constante</td><td>Cancelamento de ruído ativo (ANC)</td><td><a href="/artigos/soundcore-life-q30-vale-a-pena">Soundcore Life Q30, modelo over-ear</a></td></tr>
        <tr><td>Quem usa celular Samsung</td><td>ANC com modo de som ambiente</td><td><a href="/artigos/galaxy-buds-core-ou-galaxy-buds3-fe-comparativo">Galaxy Buds Core ou Buds3 FE</a></td></tr>
        <tr><td>Fone sem fio compacto com ANC</td><td>Pontas que vedem bem a orelha</td><td><a href="/artigos/fone-tws-shopee-qcy-melobuds-pro-ht08-ou-melobuds-n70-ht18-comparativo">dois modelos QCY com ANC</a></td></tr>
        <tr><td>Orçamento curto</td><td>Encaixe confortável e boa avaliação</td><td><a href="/artigos/melhor-fone-bluetooth-barato-comparativo-2026">fones bluetooth baratos</a></td></tr>
        <tr><td>Sem querer carregar bateria</td><td>Fone com fio com microfone</td><td><a href="/artigos/fone-com-fio-philips-taue101bk-ou-jbl-tune-110-comparativo">Philips TAUE101BK ou JBL Tune 110</a></td></tr>
        <tr><td>Dormir de lado com bloqueio de ruído</td><td>Corpo pequeno e macio</td><td><a href="/artigos/soundcore-sleep-a20-fone-para-dormir-vale-a-pena">soundcore Sleep A20, que não tem ANC</a></td></tr>
      </tbody>
    </table>
    <p>Antes de pagar, leia a ficha oficial e não só o título do anúncio. ENC é redução de ruído do microfone nas chamadas, e não do que você escuta, diferença que aparece na análise do <a href="/artigos/havit-tw982-fone-tws-shopee-vale-a-pena">Havit TW982</a>. No caso do Sleep A20, a nossa review registra que o título do anúncio citava ANC, mas a ficha do fabricante informa que o recurso não existe.</p>
    <div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Se a compra for na Black Friday, em 27 de novembro, confira o modelo exato, o vendedor e o histórico de preço. O guia para <a href="/artigos/comprar-na-black-friday-comparar-precos-evitar-golpe-e-arrependimento">comparar preços e evitar golpe</a> mostra como, e o texto sobre <a href="/artigos/devolucao-por-arrependimento-na-compra-online-7-dias-frete-e-estorno">devolução por arrependimento</a> explica o que fazer se o fone comprado pela internet não servir.</p></div>

    <h2>Cuidados com o fone e com o ouvido no dia a dia</h2>
    <p>Siga o manual do fabricante para limpeza e carga. Em geral, vale limpar as pontas com pano macio e seco, guardar o fone no estojo e não molhar um modelo sem resistência à água declarada. Fone intra-auricular é item pessoal: evite emprestar, e troque as pontas quando estiverem gastas ou deixarem de vedar.</p>
    <p>Na rua, o isolamento tem um lado ruim, porque você deixa de ouvir buzina, bicicleta e aviso de estação. Use o modo ambiente, se o fone tiver, ou tire um dos lados ao atravessar. Ao dirigir ou pedalar, a atenção ao trânsito vem antes da música.</p>
    <p>O celular também pode ajudar quem já tem dificuldade para ouvir. O guia de <a href="/artigos/acessibilidade-com-ia-no-celular-lookout-legenda-ao-vivo-e-be-my-eyes">acessibilidade com IA no celular</a> explica a legenda ao vivo, que transforma fala em texto na tela e reduz a tentação de aumentar o som para entender um vídeo.</p>

    <h2>Sinais de que a audição pede atenção</h2>
    <p>A OMS lista como sinais de alerta o zumbido persistente, a dificuldade para ouvir sons agudos (como campainha, telefone e canto de pássaros), para entender a fala, principalmente ao telefone, e para acompanhar conversas em lugar barulhento. Se um deles aparecer, procure um otorrinolaringologista ou um fonoaudiólogo para avaliar. Mudança repentina na audição pede atendimento sem esperar.</p>
    <p>O NIDCD explica que a perda temporária depois de um som alto pode sumir em 16 a 48 horas, mas ainda deixar dano de longo prazo. Na maioria dos casos de perda por ruído, as células do ouvido interno são danificadas e morrem, e em humanos elas não voltam a crescer. O instituto também trata essa perda como o tipo que dá para prevenir por completo.</p>
    <p>Para descrever o que você sente na consulta, um assistente de IA pode ajudar a organizar anotações, sem fazer diagnóstico:</p>
    <pre><code>Organize em tópicos curtos o que vou contar a um médico sobre minha audição: quando o sintoma começou, em qual ouvido, o que piora, quantas horas por semana uso fone e em que volume. Não dê diagnóstico nem sugira remédio. Liste apenas perguntas que ainda preciso responder antes da consulta.</code></pre>

    <h2>Erros comuns com fone de ouvido</h2>
    <ul>
      <li><strong>Aumentar o volume para vencer o barulho:</strong> em lugar barulhento, melhore a vedação, use o cancelamento de ruído ou faça uma pausa.</li>
      <li><strong>Olhar só o nível e esquecer o tempo:</strong> um volume moderado por muitas horas também entra na conta da semana.</li>
      <li><strong>Tratar o ANC como proteção automática:</strong> ele reduz ruído de fora, mas quem define o volume da música é você.</li>
      <li><strong>Dispensar o aviso do celular sem ler:</strong> se ele apareceu, abaixe o som e reveja os dias anteriores.</li>
      <li><strong>Confundir ENC com ANC na compra:</strong> um cuida da sua voz na ligação, o outro do ruído que chega até você.</li>
      <li><strong>Ignorar zumbido que não passa:</strong> não resolva com aplicativo nem com receita de internet, procure avaliação.</li>
    </ul>
    <div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Os valores em dB deste guia servem de orientação geral. Quem já tem perda auditiva, zumbido ou trabalha em ambiente ruidoso precisa de avaliação profissional e das regras de proteção do próprio trabalho.</p></div>

    <p>Comece hoje pelo mais simples: ative o aviso do celular, deixe o volume em até 60% e anote quantas horas usa fone nesta semana. Se a conclusão for que o seu modelo obriga você a aumentar o som, compare as opções de <a href="/categoria/ai-indica/audio-video/fone-bluetooth">fone bluetooth na AI Indica</a> antes de trocar.</p>
  `,
  faq: [
    {
      question: "Qual volume do fone de ouvido é seguro?",
      answer:
        "Depende do nível e do tempo. A OMS indica que 80 dB podem ser ouvidos por até 40 horas por semana e que, a 90 dB, o tempo cai para 4 horas. Como regra prática, a organização sugere não passar de 60% do volume máximo do aparelho e fazer pausas durante o uso.",
    },
    {
      question: "Fone com cancelamento de ruído protege a audição?",
      answer:
        "Ele ajuda, porque diminui o barulho de fora e reduz a vontade de aumentar o volume. A OMS recomenda fones bem ajustados e com cancelamento de ruído. Mas o recurso não limita o som da sua música: continue conferindo o volume, o tempo de uso e os avisos do celular.",
    },
    {
      question: "Como ver quantos decibéis o fone está tocando no iPhone?",
      answer:
        "Segundo o suporte da Apple, deslize o dedo do canto superior direito da tela para baixo e toque no ícone de Audição. Para receber avisos ou definir um limite, abra Ajustes, Som e Tato e Segurança de Fone de Ouvido. O histórico dos avisos fica no app Saúde.",
    },
    {
      question: "O Android avisa quando o volume está alto demais?",
      answer:
        "Pode avisar. O sistema tem suporte à medição de dose sonora desde o Android 14, mas a ativação depende do fabricante e das regras do país. Procure nas configurações de som por volume, audição ou fone. Sem o recurso, controle manualmente e mantenha a barra em até 60%.",
    },
    {
      question: "Zumbido depois de usar fone é normal?",
      answer:
        "Não trate como normal. A OMS lista o zumbido persistente entre os sinais de alerta, e o NIDCD explica que ele pode diminuir com o tempo ou continuar. Baixe o volume, dê descanso ao ouvido e, se o sintoma continuar ou se repetir, procure um otorrinolaringologista.",
    },
  ],
};
