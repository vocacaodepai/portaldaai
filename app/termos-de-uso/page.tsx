import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: `Termos de uso do ${site.name}.`,
};

export default function TermosDeUsoPage() {
  return (
    <Container className="py-16">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">Termos de Uso</h1>
      <div className="prose-article mt-8 max-w-2xl">
        <p>Última atualização: setembro de 2026.</p>
        <p>
          Ao acessar e utilizar o {site.name} ({site.url}), você concorda com
          os termos descritos abaixo.
        </p>

        <h2>1. Uso do conteúdo</h2>
        <p>
          O conteúdo publicado neste site tem finalidade informativa e
          educacional. Não constitui aconselhamento financeiro, jurídico ou
          profissional. Decisões de negócio ou investimento devem considerar
          orientação especializada adequada à sua situação.
        </p>

        <h2>2. Propriedade intelectual</h2>
        <p>
          Os textos, marca e identidade visual do {site.name} são protegidos
          por direitos autorais. A reprodução total ou parcial do conteúdo
          sem autorização prévia e citação da fonte não é permitida.
        </p>

        <h2>3. Links externos</h2>
        <p>
          Podemos incluir links para ferramentas e sites de terceiros para
          fins informativos. Não nos responsabilizamos pelo conteúdo ou pelas
          práticas desses sites externos.
        </p>

        <h2>4. Publicidade</h2>
        <p>
          Este site pode exibir anúncios de terceiros, incluindo o Google
          AdSense, como forma de sustentar a produção de conteúdo gratuito.
        </p>

        <h2>5. Limitação de responsabilidade</h2>
        <p>
          O {site.name} não garante resultados financeiros específicos a
          partir da aplicação do conteúdo publicado. Resultados variam
          conforme esforço individual, mercado e outros fatores fora do
          nosso controle.
        </p>

        <h2>6. Alterações</h2>
        <p>
          Estes termos podem ser atualizados periodicamente sem aviso prévio.
          O uso contínuo do site após alterações representa aceitação dos
          novos termos.
        </p>

        <h2>7. Contato</h2>
        <p>
          Dúvidas sobre estes termos podem ser enviadas para{" "}
          <a href="mailto:contato@portaldaai.com.br">contato@portaldaai.com.br</a>.
        </p>
      </div>
    </Container>
  );
}
