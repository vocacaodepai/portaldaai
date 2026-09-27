#!/usr/bin/env node
/**
 * Guarda-corpo do conteúdo editorial (lib/articles.ts e lib/news.ts).
 *
 * O HTML dos artigos é renderizado com dangerouslySetInnerHTML, então este
 * script garante que nada perigoso entre no site, mesmo vindo das rotinas
 * automáticas de escrita. Roda em `npm run lint`, `npm run check:content` e
 * antes de todo `npm run build` (prebuild). Sai com código 1 se houver erro.
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(new URL("..", import.meta.url).pathname);

const FILES = {
  articles: resolve(ROOT, "lib/articles.ts"),
  news: resolve(ROOT, "lib/news.ts"),
};

// Artigos com data igual ou posterior a esta precisam de >= 10 links internos
// (regra das rotinas de escrita). Os mais antigos só geram aviso.
const MIN_LINKS_FROM_DATE = "2026-09-27";
const MIN_INTERNAL_LINKS = 10;

const FORBIDDEN = [
  { re: /<\s*script\b/i, label: "<script>" },
  { re: /<\s*iframe\b/i, label: "<iframe>" },
  { re: /<\s*object\b/i, label: "<object>" },
  { re: /<\s*embed\b/i, label: "<embed>" },
  { re: /<\s*form\b/i, label: "<form>" },
  { re: /<\s*input\b/i, label: "<input>" },
  { re: /<\s*style\b/i, label: "<style>" },
  { re: /<\s*link\b/i, label: "<link>" },
  { re: /<\s*meta\b/i, label: "<meta>" },
  { re: /<\s*base\b/i, label: "<base>" },
  { re: /<\s*svg\b/i, label: "<svg> inline" },
  { re: /\son[a-z]+\s*=/i, label: "atributo on*= (handler inline)" },
  { re: /javascript\s*:/i, label: "javascript: em URL" },
  { re: /vbscript\s*:/i, label: "vbscript: em URL" },
  { re: /data\s*:\s*text\/html/i, label: "data:text/html" },
  { re: /srcdoc\s*=/i, label: "srcdoc=" },
  { re: /expression\s*\(/i, label: "expression() em CSS" },
  { re: /\bstyle\s*=\s*["'][^"']*(url\(|import)/i, label: "style= com url()/import" },
];

const ALLOWED_TAGS = new Set([
  "p", "h2", "h3", "h4", "ul", "ol", "li", "a", "strong", "em", "b", "i", "u",
  "br", "hr", "blockquote", "code", "pre", "table", "thead", "tbody", "tr",
  "th", "td", "div", "span", "img", "figure", "figcaption", "sup", "sub",
  "small", "mark", "del", "ins", "dl", "dt", "dd",
]);

const errors = [];
const warnings = [];

function extractItems(fullSource, kind) {
  const items = [];
  // Só o array exportado (ignora `categories`, `site`, tipos etc.).
  const start = fullSource.search(/export const (articles|news)\s*:\s*\w+\[\]\s*=\s*\[/);
  if (start < 0) {
    errors.push(`${kind}: não achei o array exportado no arquivo`);
    return items;
  }
  const source = fullSource.slice(start);
  // Cada item começa em `slug: "..."` e o content é um template literal sem crases internas.
  const re = /slug:\s*"([^"]+)"([\s\S]*?)(?=\n\s{2}\{\s*\n\s*slug:|\n\];)/g;
  let m;
  while ((m = re.exec(source))) {
    const slug = m[1];
    const block = m[2];
    const dateM = /date:\s*"([^"]+)"/.exec(block);
    const contentM = /content:\s*`([\s\S]*?)`/.exec(block);
    const titleM = /title:\s*"([^"]*)"/.exec(block);
    items.push({
      kind,
      slug,
      date: dateM ? dateM[1] : "",
      title: titleM ? titleM[1] : "",
      content: contentM ? contentM[1] : "",
    });
  }
  return items;
}

function check() {
  const sources = {};
  for (const [kind, file] of Object.entries(FILES)) {
    try {
      sources[kind] = readFileSync(file, "utf8");
    } catch (e) {
      errors.push(`${kind}: não consegui ler ${file}: ${e.message}`);
    }
  }
  if (errors.length) return;

  const articles = extractItems(sources.articles, "artigos");
  const news = extractItems(sources.news, "noticias");
  const articleSlugs = new Set(articles.map((a) => a.slug));
  const newsSlugs = new Set(news.map((n) => n.slug));

  // Slugs duplicados
  for (const [label, list] of [["artigos", articles], ["noticias", news]]) {
    const seen = new Map();
    for (const it of list) {
      seen.set(it.slug, (seen.get(it.slug) ?? 0) + 1);
    }
    for (const [slug, n] of seen) {
      if (n > 1) errors.push(`${label}/${slug}: slug duplicado (${n}x)`);
    }
  }

  const slugRe = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

  for (const it of [...articles, ...news]) {
    const where = `${it.kind}/${it.slug}`;

    if (!slugRe.test(it.slug)) {
      errors.push(`${where}: slug com caracteres inválidos (use só a-z, 0-9 e hífen, sem acentos)`);
    }
    if (it.kind === "artigos" && !it.content) {
      errors.push(`${where}: artigo sem content`);
      continue;
    }
    if (!it.content) continue;

    for (const { re, label } of FORBIDDEN) {
      if (re.test(it.content)) errors.push(`${where}: HTML proibido (${label})`);
    }

    // Tags fora da lista permitida
    const tagRe = /<\s*\/?\s*([a-zA-Z][a-zA-Z0-9]*)\b/g;
    let t;
    const badTags = new Set();
    while ((t = tagRe.exec(it.content))) {
      const tag = t[1].toLowerCase();
      if (!ALLOWED_TAGS.has(tag)) badTags.add(tag);
    }
    if (badTags.size) errors.push(`${where}: tag(s) não permitida(s): ${[...badTags].join(", ")}`);

    // Links
    const hrefRe = /href\s*=\s*["']([^"']*)["']/g;
    let h;
    let internal = 0;
    while ((h = hrefRe.exec(it.content))) {
      const href = h[1].trim();
      if (href.startsWith("/artigos/")) {
        internal++;
        const target = href.slice("/artigos/".length).split(/[#?]/)[0].replace(/\/$/, "");
        if (!articleSlugs.has(target)) errors.push(`${where}: link interno quebrado -> ${href}`);
      } else if (href.startsWith("/noticias/")) {
        internal++;
        const target = href.slice("/noticias/".length).split(/[#?]/)[0].replace(/\/$/, "");
        if (!newsSlugs.has(target)) errors.push(`${where}: link interno quebrado -> ${href}`);
      } else if (href.startsWith("/")) {
        internal++;
      } else if (/^https:\/\//i.test(href)) {
        // ok: link externo seguro
      } else if (/^http:\/\//i.test(href)) {
        errors.push(`${where}: link externo sem https -> ${href}`);
      } else if (href.startsWith("#") || href.startsWith("mailto:")) {
        // ok
      } else {
        errors.push(`${where}: href suspeito -> ${href}`);
      }
    }

    // Imagens: só https e só de domínios conhecidos
    const srcRe = /<img[^>]*\ssrc\s*=\s*["']([^"']*)["']/gi;
    let s;
    while ((s = srcRe.exec(it.content))) {
      const src = s[1].trim();
      if (!/^(https:\/\/(images\.pexels\.com|pixabay\.com|cdn\.pixabay\.com)\/|\/)/i.test(src)) {
        errors.push(`${where}: <img src> fora dos domínios permitidos -> ${src}`);
      }
    }

    if (it.kind === "artigos") {
      const words = it.content.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
      if (words < 500) warnings.push(`${where}: só ${words} palavras no corpo`);
      if (internal < MIN_INTERNAL_LINKS) {
        const msg = `${where}: ${internal} link(s) interno(s), mínimo esperado é ${MIN_INTERNAL_LINKS}`;
        if (it.date >= MIN_LINKS_FROM_DATE) errors.push(msg);
        else warnings.push(msg);
      }
    }
  }

  return { articles: articles.length, news: news.length };
}

const stats = check();

for (const w of warnings) console.warn(`aviso: ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`ERRO: ${e}`);
  console.error(`\ncheck-content: ${errors.length} erro(s) encontrado(s). Corrija antes de publicar.`);
  process.exit(1);
}
console.log(
  `check-content: ok (${stats?.articles ?? 0} artigos, ${stats?.news ?? 0} notícias, ${warnings.length} aviso(s))`
);
