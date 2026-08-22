import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IntelliByld",
    short_name: "IntelliByld",
    description: "Decision intelligence for construction material supply chains.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1e56d6",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
