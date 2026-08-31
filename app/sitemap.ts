import type { MetadataRoute } from "next";
import { useCaseSlugs, agentSlugs } from "@/components/ib/detail-data";

const SITE_URL = "https://www.intellibyld.com";
const LAST_SIGNIFICANT_UPDATE = new Date("2026-08-21");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/b2-intelligence", "/b2-agents", "/material-data-layer", "/b2-carbon", "/pilot", "/contact-us"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_SIGNIFICANT_UPDATE,
  }));

  const useCaseRoutes = useCaseSlugs.map((slug) => ({
    url: `${SITE_URL}/use-cases/${slug}`,
    lastModified: LAST_SIGNIFICANT_UPDATE,
  }));

  const agentRoutes = agentSlugs.map((slug) => ({
    url: `${SITE_URL}/agents/${slug}`,
    lastModified: LAST_SIGNIFICANT_UPDATE,
  }));

  return [...staticRoutes, ...useCaseRoutes, ...agentRoutes];
}
