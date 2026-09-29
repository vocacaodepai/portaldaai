#!/usr/bin/env node
/**
 * Gera uma capa 1600x900 a partir de uma foto de produto vertical (ou que não
 * seja 16:9), preenchendo as laterais com um fundo borrado da própria foto em
 * vez de deixar espaço vazio. Usado nos reviews de produto da AI Indica.
 *
 *   node scripts/build-product-cover.mjs <foto-de-entrada> <arquivo-de-saida>
 *
 * Nunca usar gerador de imagem por IA (ElevenLabs ou qualquer outro) para
 * compor capa de produto: já testamos e o resultado errava marca/logo dos
 * produtos reais (ver CLAUDE.md). Esta técnica (fundo borrado da própria
 * foto + produto nítido centralizado) é 100% local, gratuita e não inventa
 * nenhum pixel do produto.
 */
import sharp from "sharp";
import { resolve } from "node:path";

const [, , input, output] = process.argv;
if (!input || !output) {
  console.error("uso: node scripts/build-product-cover.mjs <foto-de-entrada> <arquivo-de-saida>");
  process.exit(1);
}

const W = 1600;
const H = 900;
const SRC = resolve(input);
const OUT = resolve(output);

const backdrop = await sharp(SRC)
  .resize(W, H, { fit: "cover" })
  .blur(60)
  .modulate({ brightness: 1.35, saturation: 0.5 })
  .toBuffer();

// Véu claro forte por cima do borrão: fundo pastel suave que combina com o
// branco de fundo típico das fotos oficiais de produto, sem seam visível.
const veil = await sharp({
  create: { width: W, height: H, channels: 4, background: { r: 247, g: 248, b: 251, alpha: 0.72 } },
})
  .png()
  .toBuffer();

const productH = H - 80;
const product = await sharp(SRC)
  .resize(null, productH, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();
const productMeta = await sharp(product).metadata();
const left = Math.round((W - productMeta.width) / 2);
const top = Math.round((H - productMeta.height) / 2);

await sharp(backdrop)
  .composite([
    { input: veil, left: 0, top: 0 },
    { input: product, left, top },
  ])
  .jpeg({ quality: 92 })
  .toFile(OUT);

console.log(`build-product-cover: gerado ${output} (${W}x${H})`);
