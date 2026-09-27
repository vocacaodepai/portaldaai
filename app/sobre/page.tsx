import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionalPage, institutionalMetadata } from "@/components/InstitutionalPage";
import { categories, site } from "@/lib/articles";
import { author } from "@/lib/author";

const PATH = "/sobre";
const TITLE = "Sobre o Portal da AI";
const DESCRIPTION =
  "O Portal da AI é um site independente, editado por Bruno Danello, que explica inteligência artificial em português claro: o que é, como usar e como ganhar dinheiro com ela.";

export const metadata: Metadata = institutionalMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function SobrePage() {
  return (
    <InstitutionalPage
      label="Institucional"
      title={TITLE}
      lead="Um site independente sobre inteligência artificial, escrito em português do Brasil para quem quer entender, usar e ganhar dinheiro com IA sem precisar de formação técnica."
      path={PATH}
    >
      <h2 id="o-que-e">O que é o Portal da AI</h2>
      <p>
        Meu nome é <Link href={author.url}>{author.name}</Link> e eu edito o {site.name}. O site
        nasceu de uma pergunta que eu mesmo fazia: por que todo conteúdo sobre inteligência artificial
        parece escrito para engenheiro? Aqui a proposta é o oposto. Eu explico como as ferramentas
        funcionam, mostro o que dá para fazer com elas na prática e falo abertamente de dinheiro:
        quanto custa, quanto rende e quando não vale a pena.
      </p>
      <p>
        O conteúdo se divide em três frentes: <Link href="/artigos">artigos</Link> (guias, tutoriais e
        comparativos), <Link href="/noticias">notícias</Link> (o que aconteceu no mercado de IA,
        resumido e contextualizado para o leitor brasileiro) e{" "}
        <Link href="/reviews">reviews de ferramentas</Link>, com critérios públicos e nota de 0 a 10.
      </p>

      <h2 id="para-quem">Para quem eu escrevo</h2>
      <p>
        Para quem trabalha, estuda ou tem um negócio pequeno e quer usar IA sem virar programador.
        Isso inclui o freelancer que quer entregar mais rápido, o dono de loja que precisa responder
        cliente no WhatsApp, quem está procurando emprego e quem só quer entender do que todo mundo
        está falando. As categorias do site refletem isso:
      </p>
      <ul>
        {categories.map((c) => (
          <li key={c.slug}>
            <Link href={`/categoria/${c.slug}`}>{c.label}</Link>: {c.description}
          </li>
        ))}
      </ul>

      <h2 id="como-o-conteudo-e-feito">Como o conteúdo é feito</h2>
      <p>
        Eu uso ferramentas de inteligência artificial na produção do site, as mesmas que ensino a
        usar. Elas ajudam na pesquisa, na organização das ideias e no primeiro rascunho dos textos.
        O que entra e o que fica de fora, a checagem do que é afirmado, os testes de ferramentas, a
        revisão final e a decisão de publicar são meus. Cada artigo e cada notícia sai com a minha
        assinatura porque eu respondo por eles.
      </p>
      <p>
        Quando um texto é corrigido ou ampliado, ele ganha a marcação &quot;Atualizado em&quot; com a
        nova data. Notícias sempre apontam para a fonte original. Reviews dizem se a ferramenta foi
        testada de verdade e por quanto tempo. Os detalhes de tudo isso estão na{" "}
        <Link href="/politica-editorial">política editorial</Link>.
      </p>

      <h2 id="o-que-o-site-nao-faz">O que o site não faz</h2>
      <ul>
        <li>Não vende curso, mentoria, comunidade paga ou &quot;método&quot;.</li>
        <li>
          Não promete renda. Quando um artigo fala de ganhar dinheiro com IA, ele descreve caminhos
          reais e o trabalho que cada um exige, sem garantia de resultado.
        </li>
        <li>Não publica conteúdo pago disfarçado de artigo ou de review.</li>
        <li>
          Não dá aconselhamento financeiro, jurídico ou profissional individual. O conteúdo é
          informativo, e decisões importantes merecem orientação especializada.
        </li>
      </ul>

      <h2 id="como-o-site-se-sustenta">Como o site se sustenta</h2>
      <p>
        O acesso é gratuito. A receita vem (ou virá) de anúncios do Google AdSense e, no futuro, de
        links de afiliado em alguns reviews, sempre sinalizados. Anúncio e afiliado não interferem em
        pauta, nota ou opinião. Eu explico isso com detalhes em{" "}
        <Link href="/publicidade-e-afiliados">publicidade e afiliados</Link>.
      </p>

      <h2 id="como-falar-comigo">Como falar comigo</h2>
      <p>
        Encontrou um erro, tem uma sugestão de pauta ou quer propor uma parceria? Escreva para{" "}
        <a href={`mailto:${author.email}`}>{author.email}</a>. Eu leio tudo e respondo em até 5
        dias úteis. A página de <Link href="/contato">contato</Link> explica o que mandar em cada
        caso, incluindo pedidos relacionados aos seus dados pessoais.
      </p>
    </InstitutionalPage>
  );
}
