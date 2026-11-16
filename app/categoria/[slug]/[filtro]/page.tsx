import type { Metadata } from "next";
import { CategoriaPage, categoriaMetadata } from "@/components/listing/CategoriaPage";
import { filtroParams } from "@/components/listing/categoriaViews";

// Rota de filtro: /categoria/ai-indica/<categoria-de-produto> e
// /categoria/<geral>/<subtipo>. Só existem as combinações com artigo.
export const dynamicParams = false;

type Params = Promise<{ slug: string; filtro: string }>;

export function generateStaticParams() {
  return filtroParams();
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, filtro } = await params;
  return categoriaMetadata(slug, 1, filtro);
}

export default async function Page({ params }: { params: Params }) {
  const { slug, filtro } = await params;
  return <CategoriaPage slug={slug} page={1} filtro={filtro} />;
}
