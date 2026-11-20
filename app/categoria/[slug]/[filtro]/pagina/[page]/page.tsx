import type { Metadata } from "next";
import { CategoriaPagedPage, categoriaMetadata } from "@/components/listing/CategoriaPage";
import { extraPageParams, filtroParams, resolveCategoriaView } from "@/components/listing/categoriaViews";
import { parsePage } from "@/components/listing/paginate";

type Params = Promise<{ slug: string; filtro: string; page: string }>;

export function generateStaticParams() {
  return filtroParams().flatMap(({ slug, filtro }) =>
    extraPageParams(resolveCategoriaView(slug, filtro)).map(({ page }) => ({ slug, filtro, page }))
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, filtro, page: raw } = await params;
  const page = parsePage(raw);
  if (!page || page === 1) return {};
  return categoriaMetadata(slug, page, filtro);
}

export default async function Page({ params }: { params: Params }) {
  const { slug, filtro, page } = await params;
  return <CategoriaPagedPage slug={slug} rawPage={page} filtro={filtro} />;
}
