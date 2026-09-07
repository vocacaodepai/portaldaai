import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de privacidade do ${site.name}.`,
};

export default function PoliticaPrivacidadePage() {
  return (
    <Container className="py-16">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">
        Política de Privacidade
      </h1>
      <div className="prose-article mt-8 max-w-2xl">
        <p>Última atualização: setembro de 2026.</p>
        <p>
          Esta Política de Privacidade descreve como o {site.name} ({site.url})
          coleta, usa e protege as informações dos visitantes deste site.
        </p>

        <h2>1. Informações que coletamos</h2>
        <p>
          Podemos coletar informações não identificáveis pessoalmente, como
          tipo de navegador, páginas visitadas, tempo de permanência no site
          e dados de dispositivo, com o objetivo de melhorar a experiência do
          usuário e o conteúdo oferecido.
        </p>

        <h2>2. Cookies</h2>
        <p>
          Este site pode utilizar cookies próprios e de terceiros para
          melhorar a navegação, lembrar preferências e exibir publicidade
          relevante. Você pode desativar os cookies nas configurações do seu
          navegador a qualquer momento.
        </p>

        <h2>3. Publicidade e Google AdSense</h2>
        <p>
          Este site pode exibir anúncios fornecidos por redes de publicidade
          de terceiros, como o Google AdSense. O Google, como fornecedor
          terceiro, utiliza cookies para veicular anúncios com base em
          visitas anteriores do usuário a este e a outros sites. O uso de
          cookies de publicidade permite que o Google e seus parceiros
          exibam anúncios com base na sua visita a este site e/ou a outros
          sites na internet.
        </p>
        <p>
          Você pode desativar a publicidade personalizada acessando as{" "}
          <a
            href="https://adssettings.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Configurações de Anúncios do Google
          </a>
          .
        </p>

        <h2>4. Compartilhamento de dados</h2>
        <p>
          Não vendemos nem compartilhamos dados pessoais identificáveis com
          terceiros, exceto quando exigido por lei ou necessário para o
          funcionamento de serviços essenciais do site (como provedores de
          hospedagem e análise de audiência).
        </p>

        <h2>5. Links para outros sites</h2>
        <p>
          Nosso site pode conter links para sites de terceiros. Não nos
          responsabilizamos pelas práticas de privacidade desses sites.
        </p>

        <h2>6. Seus direitos</h2>
        <p>
          Você pode solicitar informações sobre os dados que possuímos, bem
          como pedir a correção ou exclusão de dados pessoais, entrando em
          contato pelo e-mail{" "}
          <a href="mailto:contato@portaldaai.com.br">contato@portaldaai.com.br</a>.
        </p>

        <h2>7. Alterações nesta política</h2>
        <p>
          Esta política pode ser atualizada periodicamente. Recomendamos que
          você a revise regularmente.
        </p>
      </div>
    </Container>
  );
}
