import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/ib/detail-page";
import { getDetail, agentSlugs } from "@/components/ib/detail-data";

export function generateStaticParams() {
  return agentSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = getDetail("agents", slug);
  if (!d) return {};
  const url = `/agents/${d.slug}`;
  const title = d.slug === "procurement"
    ? "AI Procurement Agents for Construction | Bricks & Brains"
    : d.slug === "logistics"
      ? "Construction Logistics AI Agents | Bricks & Brains"
      : d.slug === "scope3"
        ? "B2 Carbon Agents | Construction Scope 3 Intelligence | Bricks & Brains"
        : d.title;
  return {
    title: { absolute: title },
    description: d.metaDescription,
    alternates: { canonical: url },
    openGraph: { title, description: d.metaDescription, url },
    twitter: { card: "summary_large_image", title, description: d.metaDescription },
  };
}

export default async function Agent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDetail("agents", slug);
  if (!d) notFound();
  return <DetailPage d={d} />;
}
