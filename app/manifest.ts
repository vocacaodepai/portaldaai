import type { MetadataRoute } from "next";
import { site } from "@/lib/articles";

export const dynamic = "force-static";

/** Web App Manifest: cores da marca (fundo escuro e azul de destaque) e o ícone SVG. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name}: ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f17",
    theme_color: "#2457ff",
    lang: "pt-BR",
    icons: [{ src: "/logo-icon-dark.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
