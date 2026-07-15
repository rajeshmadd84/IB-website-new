import type { MetadataRoute } from "next";
import { useCaseSlugs, agentSlugs } from "@/components/ib/detail-data";

const SITE_URL = "https://intellibyld.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["", "/agentic-ai", "/digital-twins", "/sustainability", "/pilot", "/contact-us"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const useCaseRoutes = useCaseSlugs.map((slug) => ({
    url: `${SITE_URL}/use-cases/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const agentRoutes = agentSlugs.map((slug) => ({
    url: `${SITE_URL}/agents/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...useCaseRoutes, ...agentRoutes];
}
