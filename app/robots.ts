import type { MetadataRoute } from "next";
import { site } from "@/lib/articles";
import { NEWS_SITEMAP_PATH } from "@/lib/sitemap";

export const dynamic = "force-static";

/**
 * Tudo liberado para todos os robôs (inclusive o Mediapartners-Google, do
 * AdSense). Só as rotas de API ficam de fora. A busca interna (/busca) fica
 * liberada de propósito: ela é noindex no metadata, e o robô precisa poder
 * abrir a página para ver esse noindex. Sitemap e host sempre no domínio
 * canônico com www: /sitemap.xml é o índice (artigos, notícias, páginas) e o
 * sitemap do Google News vai à parte.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: [`${site.url}/sitemap.xml`, `${site.url}${NEWS_SITEMAP_PATH}`],
    host: site.url,
  };
}
