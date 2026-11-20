import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { ArtigosPage, artigosMetadata, artigosTotalPages } from "@/components/listing/ArtigosPage";
import { pageParams, parsePage } from "@/components/listing/paginate";

type Params = Promise<{ page: string }>;

export function generateStaticParams() {
  return pageParams(artigosTotalPages());
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const page = parsePage((await params).page);
  if (!page || page === 1 || page > artigosTotalPages()) return {};
  return artigosMetadata(page);
}

export default async function Page({ params }: { params: Params }) {
  const page = parsePage((await params).page);
  if (!page) notFound();
  // Página 1 é /artigos; página além do fim (ex.: link antigo) volta para /artigos.
  if (page === 1 || page > artigosTotalPages()) permanentRedirect("/artigos");
  return <ArtigosPage page={page} />;
}
