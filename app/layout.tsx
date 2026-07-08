import type { Metadata } from "next";
import Nav from "@/components/ib/nav";
import Footer from "@/components/ib/footer";
import BackToTop from "@/components/ib/back-to-top";
import "@/components/ib/theme.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://intellibyld.com"),
  title: {
    default: "IntelliByld — Agentic AI for Construction Supply Chains",
    template: "%s — IntelliByld",
  },
  description:
    "IntelliByld is the Agentic AI for construction supply chains. A construction-trained SLM and live Digital Twin turn fragmented logistics into Autonomous Execution, keeping projects on schedule and carbon on target.",
  keywords: ["Construction Supply Chain", "Agentic AI", "Digital Twin", "BIM", "Autonomous Logistics", "Embodied Carbon"],
  openGraph: {
    type: "website",
    siteName: "IntelliByld",
    title: "IntelliByld — Agentic AI for Construction Supply Chains",
    description: "Transforming fragmented construction data into real-time execution insights.",
    url: "https://intellibyld.com",
  },
  twitter: { card: "summary_large_image", title: "IntelliByld", description: "Agentic AI for Autonomous Construction Supply Chains." },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="ib-root">
          <Nav />
          {children}
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
