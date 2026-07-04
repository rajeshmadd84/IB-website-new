import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/ib/detail-page";
import { getDetail, useCaseSlugs } from "@/components/ib/detail-data";

export function generateStaticParams() {
  return useCaseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = getDetail("use-cases", slug);
  if (!d) return {};
  return { title: d.title, description: d.metaDescription };
}

export default async function UseCase({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDetail("use-cases", slug);
  if (!d) notFound();
  return <DetailPage d={d} />;
}
