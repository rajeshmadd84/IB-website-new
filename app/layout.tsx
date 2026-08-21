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
    default: "IntelliByld — AI for Construction Material Supply Chains",
    template: "%s — IntelliByld",
  },
  description:
    "IntelliByld connects construction material procurement, supplier coordination, logistics and embodied-carbon data in one AI-powered workflow, helping teams make better decisions across cost, schedule and carbon.",
  keywords: ["Construction Supply Chain", "Agentic AI", "Construction Procurement", "Material Logistics", "BIM", "Embodied Carbon", "Singapore Construction Technology"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "IntelliByld",
    title: "IntelliByld — AI for Construction Material Supply Chains",
    description: "AI-powered procurement, material logistics and embodied-carbon intelligence for construction.",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image", title: "IntelliByld", description: "Procurement, material logistics and embodied-carbon intelligence for construction." },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IntelliByld",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.svg`,
  description:
    "IntelliByld is an AI intelligence layer for construction material supply chains, connecting procurement, logistics and embodied-carbon data.",
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
