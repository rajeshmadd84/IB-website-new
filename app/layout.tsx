import type { Metadata } from "next";
import Nav from "@/components/ib/nav";
import Footer from "@/components/ib/footer";
import BackToTop from "@/components/ib/back-to-top";
import { JsonLd } from "@/components/ib/json-ld";
import "@/components/ib/theme.css";

const SITE_URL = "https://intellibyld.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "IntelliByld — Agentic AI for Construction Supply Chains",
    template: "%s — IntelliByld",
  },
  description:
    "IntelliByld is the Agentic AI for construction supply chains. A construction-trained SLM and live Digital Twin turn fragmented logistics into Autonomous Execution, keeping projects on schedule and carbon on target.",
  keywords: ["Construction Supply Chain", "Agentic AI", "Digital Twin", "BIM", "Autonomous Logistics", "Embodied Carbon"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "IntelliByld",
    title: "IntelliByld — Agentic AI for Construction Supply Chains",
    description: "Transforming fragmented construction data into real-time execution insights.",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image", title: "IntelliByld", description: "Agentic AI for Autonomous Construction Supply Chains." },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IntelliByld",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.svg`,
  description:
    "IntelliByld is the Agentic AI for construction supply chains. A construction-trained SLM and live Digital Twin turn fragmented logistics into Autonomous Execution.",
  sameAs: ["https://www.linkedin.com/company/intellibyld"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "C/O ACE, 67 Ayer Rajah Crescent #04-16 LaunchPad @ One-North",
    addressLocality: "Singapore",
    postalCode: "139950",
    addressCountry: "SG",
  },
  email: "hello@intellibyld.com",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationJsonLd} />
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
