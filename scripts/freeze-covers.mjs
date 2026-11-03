#!/usr/bin/env node
/**
 * Grava no próprio arquivo de conteúdo a capa que cada artigo/notícia mostra
 * hoje no site, em vez de buscar de novo no Wikimedia/Pexels/Pixabay a cada
 * build (busca que falha por limite de acesso e faz a capa sumir da home).
 *
 * Para cada item sem `coverImage` (notícia só quando tem `imageQuery`):
 *   1. abre a página publicada e lê a foto de capa e o crédito exibidos;
 *   2. baixa a foto, reduz para no máximo 1280 px de largura em WebP
 *      (fotos muito largas ou estreitas, como logos, vão centralizadas num
 *      quadro 16:9 com a cor de fundo da própria foto, sem cortar nada);
 *   3. salva em public/images/covers/<slug>.webp e escreve `coverImage` no
 *      arquivo, logo abaixo de `imageQuery`.
 * Página que mostra só o gradiente (nenhuma foto achada) fica como está.
 *
 *   node scripts/freeze-covers.mjs [--limit N] [--only artigos|noticias] [--dry]
 */
import sharp from "sharp";
import { readFile, writeFile, readdir, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const SITE = "https://www.portaldaai.com.br";
const OUT_DIR = "public/images/covers";
const MAX_W = 1280;

const args = process.argv.slice(2);
const limit = args.includes("--limit") ? Number(args[args.indexOf("--limit") + 1]) : Infinity;
const only = args.includes("--only") ? args[args.indexOf("--only") + 1] : null;
const dry = args.includes("--dry");

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

/** Foto de capa e crédito exibidos na página publicada (ou null se for o gradiente). */
function parseCover(html) {
  const m = html.match(
    /<figure[^>]*><div class="relative aspect-\[16\/9\][^"]*"><img src="([^"]+)"[^>]*><\/div><figcaption><a href="([^"]+)"[^>]*>Foto: ([^<]+)<\/a><\/figcaption><\/figure>/
  );
  if (!m) return null;
  return { src: decode(m[1]), creditUrl: decode(m[2]), credit: decode(m[3]).trim() };
}

async function edgeColor(buf) {
  const { data, info } = await sharp(buf).resize(32, 32, { fit: "fill" }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const rs = [], gs = [], bs = [];
  for (let y = 0; y < height; y++)
    for (let x = 0; x < width; x++) {
      if (x > 0 && y > 0 && x < width - 1 && y < height - 1) continue;
      const i = (y * width + x) * channels;
      rs.push(data[i]); gs.push(data[i + 1]); bs.push(data[i + 2]);
    }
  const med = (a) => a.sort((p, q) => p - q)[Math.floor(a.length / 2)];
  return { r: med(rs), g: med(gs), b: med(bs) };
}

async function toWebp(buf) {
  const meta = await sharp(buf).metadata();
  const ratio = meta.width / meta.height;
  if (ratio < 1.2 || ratio > 2.4) {
    const W = MAX_W, H = Math.round(MAX_W * 9 / 16);
    const background = await edgeColor(buf);
    const out = await sharp(buf)
      .flatten({ background })
      .resize(Math.round(W * 0.86), Math.round(H * 0.86), { fit: "inside", withoutEnlargement: false })
      .toBuffer();
    const img = await sharp({ create: { width: W, height: H, channels: 3, background } })
      .composite([{ input: out, gravity: "center" }])
      .webp({ quality: 72 })
      .toBuffer();
    return { img, width: W, height: H };
  }
  const img = await sharp(buf).flatten({ background: "#ffffff" }).resize({ width: MAX_W, withoutEnlargement: true }).webp({ quality: 72 }).toBuffer();
  const m2 = await sharp(img).metadata();
  return { img, width: m2.width, height: m2.height };
}

function insertCover(src, cover) {
  const lit = (s) => JSON.stringify(s);
  const block =
    `  coverImage: {\n    url: ${lit(cover.url)},\n    width: ${cover.width},\n    height: ${cover.height},\n` +
    `    credit: ${lit(cover.credit)},\n    creditUrl: ${lit(cover.creditUrl)},\n  },\n`;
  const re = /^(\s*imageQuery:\s*"[^"\n]*",\n)/m;
  if (!re.test(src)) return null;
  return src.replace(re, `$1${block}`);
}

async function main() {
  if (!dry) await mkdir(OUT_DIR, { recursive: true });
  const jobs = [];
  for (const [dir, route] of [["content/articles", "artigos"], ["content/news", "noticias"]]) {
    if (only && only !== route) continue;
    for (const f of (await readdir(dir)).sort()) {
      if (!f.endsWith(".ts") || f === "index.ts") continue;
      const path = join(dir, f);
      const src = await readFile(path, "utf8");
      if (/\bcoverImage\s*:/.test(src) || !/^\s*imageQuery:\s*"/m.test(src)) continue;
      jobs.push({ path, src, slug: f.slice(0, -3), route });
    }
  }
  const todo = jobs.slice(0, limit);
  const stats = { ok: 0, gradient: 0, fail: 0 };
  let next = 0;
  async function worker() {
    while (next < todo.length) {
      const j = todo[next++];
      try {
        const res = await fetch(`${SITE}/${j.route}/${j.slug}`);
        if (!res.ok) throw new Error(`página ${res.status}`);
        const cover = parseCover(await res.text());
        if (!cover) { stats.gradient++; continue; }
        const r = await fetch(cover.src);
        if (!r.ok) throw new Error(`foto ${r.status}`);
        const buf = Buffer.from(await r.arrayBuffer());
        if (buf.length < 4000) throw new Error(`foto pequena demais (${buf.length} bytes)`);
        const { img, width, height } = await toWebp(buf);
        const url = `/images/covers/${j.slug}.webp`;
        const updated = insertCover(j.src, { url, width, height, credit: cover.credit, creditUrl: cover.creditUrl });
        if (!updated) throw new Error("imageQuery não encontrado no arquivo");
        if (!dry) {
          await writeFile(join(OUT_DIR, `${j.slug}.webp`), img);
          await writeFile(j.path, updated);
        }
        stats.ok++;
      } catch (e) {
        stats.fail++;
        console.log(`falhou ${j.route}/${j.slug}: ${e.message}`);
      }
    }
  }
  await Promise.all(Array.from({ length: 6 }, worker));
  console.log(`capas gravadas: ${stats.ok}, ainda no gradiente: ${stats.gradient}, falhas: ${stats.fail} (de ${todo.length})`);
}

if (!existsSync("content/articles")) {
  console.error("rode na raiz do repositório");
  process.exit(1);
}
main();
