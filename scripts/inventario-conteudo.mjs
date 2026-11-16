#!/usr/bin/env node
/**
 * Inventário de conteúdo para o plano de recuperação do Search Console
 * (docs/rotinas/manutencao.md).
 *
 * Lê content/articles e content/news e gera docs/inventario/inventario.csv com
 * uma linha por URL: tipo, slug, categoria, kind, data, updated, palavras,
 * links internos recebidos e um sinal de fraqueza.
 *
 * Se existir docs/inventario/gsc-*.csv (export de Desempenho > Páginas do
 * Search Console), usa o mais recente para preencher cliques e impressões.
 * O script só lê e escreve o CSV: não muda nenhuma página.
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const outDir = path.join(root, "docs", "inventario");
const SITE = "https://www.portaldaai.com.br";

function read(dir, type) {
  const full = path.join(root, "content", dir);
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".ts") && f !== "index.ts")
    .map((f) => {
      const src = fs.readFileSync(path.join(full, f), "utf8");
      const field = (name) => (src.match(new RegExp(`\\b${name}:\\s*"([^"]*)"`)) || [])[1] ?? "";
      const body = (src.match(/content:\s*`([\s\S]*?)`/) || [])[1] ?? "";
      const words = body.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
      const slug = f.replace(/\.ts$/, "");
      return {
        type,
        slug,
        url: `${SITE}/${type === "artigo" ? "artigos" : "noticias"}/${slug}`,
        category: field("category") || field("topic"),
        kind: field("kind"),
        date: field("date"),
        updated: field("updated"),
        title: field("title"),
        words,
        body,
      };
    });
}

const items = [...read("articles", "artigo"), ...read("news", "noticia")];

// Links internos recebidos: quantas OUTRAS páginas apontam para cada URL.
const inbound = new Map(items.map((i) => [i.url, 0]));
for (const page of items) {
  const targets = new Set(
    [...page.body.matchAll(/href="\/(artigos|noticias)\/([a-z0-9-]+)"/g)].map(
      (m) => `${SITE}/${m[1]}/${m[2]}`
    )
  );
  targets.delete(page.url);
  for (const t of targets) if (inbound.has(t)) inbound.set(t, inbound.get(t) + 1);
}

// Search Console (opcional): CSV com colunas de página, cliques e impressões.
const gsc = new Map();
const gscFiles = fs.existsSync(outDir)
  ? fs.readdirSync(outDir).filter((f) => /^gsc-.*\.csv$/.test(f)).sort()
  : [];
if (gscFiles.length) {
  const lines = fs.readFileSync(path.join(outDir, gscFiles.at(-1)), "utf8").trim().split(/\r?\n/);
  const header = lines.shift().toLowerCase().split(",");
  const col = (re) => header.findIndex((h) => re.test(h));
  const iPage = col(/p[aá]gina|page|url/);
  const iClicks = col(/cliques|clicks/);
  const iImpr = col(/impress/);
  for (const l of lines) {
    const c = l.split(",");
    const url = (c[iPage] || "").replace(/"/g, "").replace(/\/$/, "");
    gsc.set(url, { clicks: Number(c[iClicks]) || 0, impressions: Number(c[iImpr]) || 0 });
  }
}

const OFF_TOPIC = /^(cozinha|bebe|esporte|viagem|escritorio|saude-bem-estar|pet|beleza|ferramentas-casa|casa-utilidades|jardim-quintal|automotivo)$/;
const thirtyDaysAgo = new Date(Date.now() - 30 * 864e5).toISOString().slice(0, 10);

const rows = items.map((i) => {
  const g = gsc.get(i.url);
  const flags = [];
  if (i.type === "noticia" && i.words < 400) flags.push("noticia-curta");
  if (i.type === "noticia" && i.date < thirtyDaysAgo && g && g.clicks === 0) flags.push("noticia-antiga-sem-clique");
  if ((inbound.get(i.url) ?? 0) === 0) flags.push("sem-link-de-entrada");
  return {
    tipo: i.type,
    url: i.url,
    categoria: i.category,
    kind: i.kind,
    data: i.date,
    updated: i.updated,
    palavras: i.words,
    links_recebidos: inbound.get(i.url) ?? 0,
    cliques: g ? g.clicks : "",
    impressoes: g ? g.impressions : "",
    sinais: flags.join(" "),
    titulo: i.title,
  };
});

// productCategory fica fora do corpo; lê direto do arquivo para marcar fora do tema.
for (const r of rows) {
  if (r.categoria !== "ai-indica") continue;
  const src = fs.readFileSync(path.join(root, "content", "articles", r.url.split("/").pop() + ".ts"), "utf8");
  const pc = (src.match(/productCategory:\s*"([^"]+)"/) || [])[1] ?? "";
  r.categoria = `ai-indica/${pc}`;
  if (OFF_TOPIC.test(pc)) r.sinais = (r.sinais + " ai-indica-fora-do-tema").trim();
}

const cols = Object.keys(rows[0]);
const esc = (v) => (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, "inventario.csv"),
  [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n") + "\n"
);

const count = (flag) => rows.filter((r) => r.sinais.includes(flag)).length;
console.log(`inventario.csv: ${rows.length} URLs${gscFiles.length ? ` (Search Console: ${gscFiles.at(-1)})` : ""}`);
for (const f of ["noticia-curta", "noticia-antiga-sem-clique", "sem-link-de-entrada", "ai-indica-fora-do-tema"])
  console.log(`  ${f}: ${count(f)}`);
