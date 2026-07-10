import type { Metadata } from "next";
import ContactForm from "@/components/ib/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to IntelliByld about a pilot, a partnership, or the platform. Headquartered in Singapore.",
};

export default function ContactPage() {
  return (
    <>
      <ContactForm />
      <section className="ib-sec alt" aria-labelledby="company-details">
        <div className="ib-wrap">
          <div className="ib-split" style={{ gap: "clamp(2rem,5vw,4rem)" }}>
            <div>
              <span className="ib-eyebrow">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Company Details
              </span>
              <h2 id="company-details" style={{ fontSize: "clamp(1.9rem,4.4vw,3rem)", letterSpacing: "-.025em", margin: "1rem 0 1.1rem" }}>
                IntelliByld Pte. Ltd.
              </h2>
              <p style={{ fontSize: "1.04rem", marginBottom: "1rem", color: "var(--ib-text-body)" }}>
                Headquartered in Singapore, operating globally with construction and infrastructure partners.
              </p>
              <p style={{ fontSize: "1.04rem", marginBottom: "1rem", color: "var(--ib-text-body)" }}>
                <strong>Registered Address:</strong><br />
                80 Robinson Road, #02-00<br />
                Singapore 068898
              </p>
              <p style={{ fontSize: "1.04rem", marginBottom: "1rem", color: "var(--ib-text-body)" }}>
                <strong>Email:</strong> hello@intellibyld.com<br />
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/intellibyld" style={{ color: "var(--ib-cyan)" }} target="_blank" rel="noopener noreferrer">@intellibyld</a>
              </p>
            </div>
            <div>
              <span className="ib-eyebrow">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Company Details
              </span>
              <h2 style={{ fontSize: "clamp(1.9rem,4.4vw,3rem)", letterSpacing: "-.025em", margin: "1rem 0 1.1rem" }}>
                Logpilot Limited
              </h2>
              <p style={{ fontSize: "1.04rem", marginBottom: "1rem", color: "var(--ib-text-body)" }}>
                United Kingdom entity, supporting construction and infrastructure partners across Europe.
              </p>
              <p style={{ fontSize: "1.04rem", marginBottom: "1rem", color: "var(--ib-text-body)" }}>
                <strong>Registered Address:</strong><br />
                71-75 Shelton Street<br />
                Covent Garden, London WC2H 9JQ<br />
                United Kingdom
              </p>
              <p style={{ fontSize: "1.04rem", marginBottom: "1rem", color: "var(--ib-text-body)" }}>
                <strong>Email:</strong> hello@logpilot.co.uk<br />
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/logpilot" style={{ color: "var(--ib-cyan)" }} target="_blank" rel="noopener noreferrer">@logpilot</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
