import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { AdSenseLoader } from "@/components/AdSenseLoader";
import { site } from "@/lib/articles";
import { author } from "@/lib/author";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

// Aplica o tema salvo antes da primeira pintura (evita "flash" ao trocar de tema).
const THEME_INIT = `(function(){try{var t=localStorage.getItem("pdai-theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: author.name, url: `${site.url}${author.url}` }],
  creator: author.name,
  publisher: site.name,
  category: "technology",
  keywords: [
    "inteligência artificial",
    "IA",
    "ganhar dinheiro com IA",
    "monetizar inteligência artificial",
    "negócios com IA",
    "ferramentas de IA",
    "ChatGPT",
    "Claude",
    "Gemini",
    "automação",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: `${site.name}: ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}: ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    types: { "application/rss+xml": `${site.url}/feed.xml` },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f17" },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: {
    "@type": "ImageObject",
    url: `${site.url}/logo-icon-dark.svg`,
    width: 512,
    height: 512,
  },
  founder: { "@type": "Person", name: author.name, url: `${site.url}${author.url}` },
  foundingDate: String(site.foundingYear),
  email: author.email,
  inLanguage: "pt-BR",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  description: site.description,
  inLanguage: "pt-BR",
  publisher: { "@id": `${site.url}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${site.url}/busca?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        {ADSENSE_CLIENT && <meta name="google-adsense-account" content={ADSENSE_CLIENT} />}
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent enabled={Boolean(ADSENSE_CLIENT)} />
        <AdSenseLoader client={ADSENSE_CLIENT} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationJsonLd, websiteJsonLd]) }}
        />
      </body>
    </html>
  );
}
