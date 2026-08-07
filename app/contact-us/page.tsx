import type { Metadata } from "next";
import PilotForm from "@/components/ib/pilot-form";

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
      <PilotForm
        eyebrow="Contact Us"
        heading={
          <>
            Talk to the team building the <span className="cy">control tower</span>
          </>
        }
        lead="Pilot, partnership, or platform question, IntelliByld is headquartered in Singapore with a UK & EU entity supporting partners across Europe."
      />
      <section className="ib-sec alt" aria-labelledby="company-details">
        <div className="ib-wrap">
          <div className="ib-split" style={{ gap: "clamp(2rem,5vw,4rem)" }}>
            <div>
              <span className="ib-eyebrow">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Singapore Entity
              </span>
              <h3 id="company-details" style={{ fontSize: "clamp(1.9rem,4.4vw,3rem)", letterSpacing: "-.025em", margin: "1rem 0 1.1rem" }}>
                IntelliByld Pte. Ltd.
                <br />
                <span style={{ fontSize: "0.5em", letterSpacing: "normal", fontWeight: 400 }}>(To be Registered)</span>
              </h3>
              <p style={{ fontSize: "1.04rem", marginBottom: "1rem", color: "var(--ib-text-body)" }}>
                Headquartered in Singapore, operating globally with construction and infrastructure partners.
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
            <div>
              <span className="ib-eyebrow">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                UK & EU Entity
              </span>
              <h3 style={{ fontSize: "clamp(1.9rem,4.4vw,3rem)", letterSpacing: "-.025em", margin: "1rem 0 1.1rem" }}>
                Logpilot Limited
              </h3>
              <p style={{ fontSize: "1.04rem", marginBottom: "1rem", color: "var(--ib-text-body)" }}>
                United Kingdom entity, supporting construction and infrastructure partners across Europe.
              </p>
              <p style={{ fontSize: "1.04rem", marginBottom: "1rem", color: "var(--ib-text-body)" }}>
                <strong>Registered Address:</strong><br />
                Flat 4 51 Millennium House, Feltham<br />
                United Kingdom, TW13 4AB<br />
              
              </p>
              <p style={{ fontSize: "1.04rem", marginBottom: "1rem", color: "var(--ib-text-body)" }}>
                <strong>Company Number</strong> 16362130<br />
                
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
