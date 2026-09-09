import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "intellibyld.com" }],
        destination: "https://www.bricks-brains.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.intellibyld.com" }],
        destination: "https://www.bricks-brains.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "bricks-brains.com" }],
        destination: "https://www.bricks-brains.com/:path*",
        permanent: true,
      },
      {
        source: "/agentic-ai",
        destination: "/b2-agents",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
