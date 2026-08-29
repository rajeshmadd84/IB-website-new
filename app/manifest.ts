import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bricks & Brains",
    short_name: "B&B",
    description: "Decision intelligence for construction material supply chains.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1e56d6",
    icons: [{ src: "/images/icon.svg", sizes: "180x180", type: "image/svg+xml" }],
  };
}
