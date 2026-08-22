import type { Metadata } from "next";
import Nav from "@/components/ib/nav";
import Footer from "@/components/ib/footer";
import BackToTop from "@/components/ib/back-to-top";
import GoogleAnalytics from "@/components/ib/google-analytics";
import { JsonLd, ORGANIZATION_ID, SITE_URL, WEBSITE_ID } from "@/components/ib/json-ld";
import "@/components/ib/theme.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "IntelliByld — Decision Intelligence for Construction Supply Chains",
    template: "%s — IntelliByld",
  },
  description:
    "IntelliByld is the decision-intelligence layer for construction material supply chains, connecting procurement, suppliers, logistics, programme risk and embodied carbon to understand what changed, what it affects and what to do next.",
  keywords: ["Construction Supply Chain", "Agentic AI", "Construction Procurement", "Material Logistics", "BIM", "Embodied Carbon", "Singapore Construction Technology"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "IntelliByld",
    title: "IntelliByld — Decision Intelligence for Construction Supply Chains",
    description: "Decision intelligence and agentic execution for construction procurement, material logistics, risk and embodied carbon.",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image", title: "IntelliByld", description: "Decision intelligence and agentic execution for construction supply chains." },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "IntelliByld",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.svg` },
      description: "IntelliByld is a decision-intelligence layer for construction material supply chains, connecting procurement, logistics, programme risk and embodied-carbon data.",
      sameAs: ["https://www.linkedin.com/company/intellibyld"],
      founder: [
        { "@id": `${SITE_URL}/#rajesh-maddineni` },
        { "@id": `${SITE_URL}/#tarun-sai-kalimili` },
        { "@id": `${SITE_URL}/#hari-sagaran` },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "C/O ACE, 67 Ayer Rajah Crescent #04-16 LaunchPad @ One-North",
        addressLocality: "Singapore",
        postalCode: "139950",
        addressCountry: "SG",
      },
      email: "hello@intellibyld.com",
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "IntelliByld",
      description: "Decision intelligence and agentic execution across construction procurement, material logistics, programme risk and embodied carbon.",
      publisher: { "@id": ORGANIZATION_ID },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#rajesh-maddineni`,
      name: "Rajesh Maddineni",
      jobTitle: "CEO & Co-Founder",
      sameAs: ["https://www.linkedin.com/in/rajeshmaddineni/"],
      worksFor: { "@id": ORGANIZATION_ID },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#tarun-sai-kalimili`,
      name: "Tarun Sai Kalimili",
      jobTitle: "CTO & Co-Founder",
      sameAs: ["https://www.linkedin.com/in/kalimili/"],
      worksFor: { "@id": ORGANIZATION_ID },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#hari-sagaran`,
      name: "Hari Sagaran",
      jobTitle: "CGO & Co-Founder",
      sameAs: ["https://www.linkedin.com/in/hari-sagaran/"],
      worksFor: { "@id": ORGANIZATION_ID },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <JsonLd data={siteJsonLd} />
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
