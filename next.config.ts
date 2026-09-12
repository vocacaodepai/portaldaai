import type { NextConfig } from "next";

// Ativado só no build do GitHub Pages (ver .github/workflows/deploy-gh-pages.yml).
// O deploy normal (Vercel ou outro host com servidor) continua funcionando
// exatamente como antes, sem export estático nem basePath.
const isStaticExport = process.env.STATIC_EXPORT === "true";
const repoName = "portaldaai";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  ...(isStaticExport && {
    output: "export",
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
};

export default nextConfig;
