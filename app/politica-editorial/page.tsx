import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionalPage, institutionalMetadata } from "@/components/InstitutionalPage";
import { site } from "@/lib/articles";
import { author } from "@/lib/author";

const PATH = "/politica-editorial";
const TITLE = "Política editorial e uso de IA";
const DESCRIPTION =
  "Como o Portal da AI escolhe pautas, usa inteligência artificial na produção, revisa cada texto, faz reviews com nota de 0 a 10, corrige erros e lida com fontes e imagens.";

export const metadata: Metadata = institutionalMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function PoliticaEditorialPage() {
  return (
    <InstitutionalPage
      label="Institucional"
      title={TITLE}
      lead="O Portal da AI usa inteligência artificial para produzir conteúdo sobre inteligência artificial. Esta página explica exatamente como isso funciona, o que é sempre feito por uma pessoa e o padrão que cada artigo, notícia e review precisa cumprir antes de ir ao ar."
      path={PATH}
    >
      <h2 id="quem-responde">1. Quem responde pelo conteúdo</h2>
      <p>
        Todo o conteúdo do {site.name} é editado e assinado por{" "}
        <Link href={author.url}>{author.name}</Link>. Não existe equipe, redação terceirizada nem
        autor convidado. Quando isso mudar, esta página muda junto e cada texto passa a indicar quem
        o escreveu.
      </p>

      <h2 id="pautas">2. Como as pautas são escolhidas</h2>
      <p>Uma pauta entra no site quando responde a pelo menos uma destas perguntas:</p>
      <ul>
        <li>É uma dúvida real de quem está começando com IA e ainda não tem resposta clara em português?</li>
        <li>Muda alguma coisa prática para quem trabalha, estuda ou tem um negócio pequeno no Brasil?</li>
        <li>É uma ferramenta que as pessoas estão pagando ou pensando em pagar, e que merece um teste honesto?</li>
        <li>É uma notícia relevante do mercado de IA que precisa de contexto para o leitor brasileiro?</li>
      </ul>
      <p>
        Sugestões de leitores contam, e muito: mande pela página de{" "}
        <Link href="/contato">contato</Link>. Não entram pautas compradas, textos enviados por
        empresas para publicação como se fossem do site nem conteúdo feito só para ranquear uma
        palavra-chave sem entregar nada a quem lê.
      </p>

      <h2 id="uso-de-ia">3. Como a IA é usada na produção</h2>
      <p>
        Ferramentas de inteligência artificial (modelos de linguagem como os que o site ensina a
        usar) participam da produção em três momentos:
      </p>
      <ul>
        <li>
          <strong>Pesquisa</strong>: levantar o que já existe sobre o tema, organizar fontes e
          resumir documentação oficial.
        </li>
        <li>
          <strong>Rascunho</strong>: escrever uma primeira versão a partir de um roteiro e de
          instruções definidas pelo editor.
        </li>
        <li>
          <strong>Revisão de forma</strong>: apontar erros de gramática, frases confusas e trechos
          repetidos.
        </li>
      </ul>
      <p>
        Parte da publicação é automatizada: rotinas rodam todos os dias para preparar rascunhos de
        artigos e resumos de notícias a partir de fontes definidas. Toda rotina passa por uma
        verificação automática antes de publicar (tamanho mínimo, links internos, ausência de
        código perigoso, data válida) e o resultado fica registrado no histórico público do
        projeto. O que a verificação automática não faz é julgar se o texto está certo. Isso é
        trabalho de gente.
      </p>

      <h2 id="revisao-humana">4. O que é sempre feito por uma pessoa</h2>
      <ul>
        <li>Escolher a pauta e decidir o que entra e o que fica de fora.</li>
        <li>Definir a posição do texto: o que recomendar, o que desaconselhar, para quem serve.</li>
        <li>Checar afirmações factuais, preços, nomes de produtos e números contra a fonte.</li>
        <li>Testar as ferramentas avaliadas em reviews.</li>
        <li>Aprovar a publicação e responder por ela.</li>
        <li>Corrigir erros apontados por leitores.</li>
      </ul>
      <p>
        Se um texto sair errado, a responsabilidade é do editor, não da ferramenta. É por isso que
        cada artigo leva uma assinatura e um e-mail de contato.
      </p>

      <h2 id="padrao-minimo">5. Padrão mínimo de cada artigo</h2>
      <p>Um artigo novo só é publicado se cumprir estes requisitos:</p>
      <ul>
        <li>
          <strong>Resposta direta no começo</strong>: a pergunta que motivou o artigo é respondida nos
          primeiros parágrafos, e os três pontos principais aparecem em destaque logo após a capa.
        </li>
        <li>
          <strong>Fontes</strong>: afirmações verificáveis apontam para a fonte primária
          (documentação oficial, página de preços, estudo, órgão público), listada ao fim do texto em
          &quot;Fontes consultadas&quot;.
        </li>
        <li>
          <strong>Exemplos reais</strong>: pelo menos um caso concreto e aplicável no Brasil, com
          valores em reais quando envolve dinheiro.
        </li>
        <li>
          <strong>Profundidade</strong>: tamanho suficiente para esgotar a dúvida (a regra interna é
          900 palavras ou mais para guias), com subtítulos, tabelas ou listas quando ajudam a
          comparar.
        </li>
        <li>
          <strong>Links internos</strong>: caminhos para artigos relacionados, para quem quer ir além.
        </li>
        <li>
          <strong>Sem promessas</strong>: nada de renda garantida, resultado em X dias ou
          &quot;método infalível&quot;.
        </li>
      </ul>
      <p>
        Artigos antigos que não atendem a esse padrão estão sendo reescritos aos poucos. Quando um
        deles é reformado, recebe a data de atualização.
      </p>

      <h2 id="reviews">6. Como os reviews são feitos</h2>
      <p>
        Um review de ferramenta segue critérios públicos, cada um com nota de 0 a 10: facilidade de
        uso, recursos, preço em reais para o usuário brasileiro, qualidade em português e
        privacidade dos dados. A nota final é a média ponderada desses critérios, exibida na página
        do review junto com prós, contras, preço, para quem serve e o link oficial da ferramenta.
      </p>
      <p>
        Quando houve teste prático, o review diz por quantos dias a ferramenta foi usada. Quando a
        avaliação se baseia só em documentação, planos e relatos de terceiros, isso também é dito,
        sem disfarce. Nenhuma nota é vendida, negociada ou influenciada por anunciante, programa de
        afiliado ou pedido da empresa avaliada. Se a ferramenta mudar de forma relevante, o review é
        revisado e a nota pode mudar.
      </p>

      <h2 id="noticias">7. Notícias</h2>
      <p>
        Cada notícia é escrita a partir de uma fonte identificada, com link para a matéria original
        no topo e no fim do texto. O site não copia matérias: resume o fato, explica o contexto e o
        que aquilo muda para quem está no Brasil. Notícias nunca são apagadas; se um fato for
        corrigido pela fonte, a notícia é atualizada com a correção indicada.
      </p>

      <h2 id="correcoes">8. Correções</h2>
      <p>
        Erros acontecem. Quem encontrar um pode escrever para{" "}
        <a href={`mailto:${author.email}`}>{author.email}</a> com o link da página e o trecho.
        Erros confirmados são corrigidos em até 5 dias úteis. Correções de fato (um número errado, um
        preço desatualizado, uma afirmação incorreta) recebem a marcação &quot;Atualizado em&quot;
        com a nova data. Ajustes de forma (erro de digitação, link quebrado) são feitos sem
        marcação. Um texto que se mostre errado no todo é reescrito ou retirado, e a URL passa a
        explicar o motivo em vez de sumir.
      </p>

      <h2 id="independencia">9. Independência editorial</h2>
      <p>
        O site se sustenta com anúncios do Google AdSense e, futuramente, com links de afiliado.
        Anunciante não escolhe pauta, não lê texto antes da publicação e não recebe nota ou menção
        em troca de investimento. Os anúncios são servidos pelo Google, identificados como
        publicidade e mantidos fora do corpo do texto sempre que possível. As regras completas estão
        em <Link href="/publicidade-e-afiliados">publicidade e afiliados</Link>.
      </p>

      <h2 id="imagens">10. Uso de imagens</h2>
      <p>
        As fotos de capa vêm dos bancos Pexels e Pixabay, dentro das licenças deles, e cada uma traz
        o crédito do fotógrafo com link. O site não usa imagens geradas por IA como se fossem fotos
        reais e não usa capturas de tela de terceiros sem indicar a origem. A imagem de
        compartilhamento (a que aparece em redes sociais e mensageiros) é gerada pelo próprio site,
        com o título do texto e a marca.
      </p>

      <h2 id="datas">11. Datas de publicação e atualização</h2>
      <p>
        Toda página mostra a data de publicação. Quando há revisão de conteúdo, mostra também a data
        de atualização, e essa data é a que vai para os mecanismos de busca. Datas seguem o horário
        de Brasília; um texto nunca é publicado com data futura.
      </p>

      <h2 id="conflitos">12. Conflitos de interesse</h2>
      <p>
        O editor não tem participação, emprego ou contrato com nenhuma das empresas de IA cobertas
        pelo site. Se isso mudar, o conflito é declarado nesta página e nos textos afetados.
      </p>

      <p>
        Versão desta política: 27 de setembro de 2026. Veja também{" "}
        <Link href="/sobre">sobre o site</Link> e a{" "}
        <Link href="/politica-de-privacidade">política de privacidade</Link>.
      </p>
    </InstitutionalPage>
  );
}
