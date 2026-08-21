import type { Metadata } from "next";
import PilotForm from "@/components/ib/pilot-form";
import { JsonLd, webPageJsonLd } from "@/components/ib/json-ld";

const TITLE = "Contact";
const DESCRIPTION = "Talk to IntelliByld about a pilot, a partnership, or the platform. Headquartered in Singapore.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact-us" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/contact-us" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ name: TITLE, description: DESCRIPTION, path: "/contact-us" })} />
      <PilotForm
        eyebrow="Contact Us"
        heading={
          <>
            Talk to the team building the <span className="cy">control tower</span>
          </>
        }
        lead="Pilot, partnership, or platform question? IntelliByld is a Singapore-based construction technology company working with the local construction ecosystem."
      />
      <section className="ib-sec alt" aria-labelledby="company-details">
        <div className="ib-wrap">
          <div style={{ maxWidth: "760px" }}>
            <span className="ib-eyebrow">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Singapore
            </span>
            <h3 id="company-details" style={{ fontSize: "clamp(1.9rem,4.4vw,3rem)", letterSpacing: "-.025em", margin: "1rem 0 1.1rem" }}>
              IntelliByld Pte. Ltd.
              <br />
              <span style={{ fontSize: "0.5em", letterSpacing: "normal", fontWeight: 400 }}>(To be Registered)</span>
            </h3>
            <p style={{ fontSize: "1.04rem", marginBottom: "1rem", color: "var(--ib-text-body)" }}>
              Built in Singapore for construction material procurement, supply-chain coordination and embodied-carbon intelligence.
            </p>
            <p style={{ fontSize: "1.04rem", marginBottom: "1rem", color: "var(--ib-text-body)" }}>
              <strong>Address:</strong><br />
              C/O ACE, 67 Ayer Rajah Crescent #04-16 LaunchPad @ One-North<br />
              Singapore 139950
            </p>
            <p style={{ fontSize: "1.04rem", marginBottom: "1rem", color: "var(--ib-text-body)" }}>
              <strong>Email:</strong> hello@intellibyld.com<br />
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/intellibyld" style={{ color: "var(--ib-cyan)" }} target="_blank" rel="noopener noreferrer">@intellibyld</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
