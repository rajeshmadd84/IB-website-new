import type { Metadata } from "next";
import PilotForm from "@/components/ib/pilot-form";
import { JsonLd, webPageJsonLd } from "@/components/ib/json-ld";

const TITLE = "Contact";
const DESCRIPTION = "Talk to Bricks & Brains about a pilot, a partnership, or the platform. Headquartered in Singapore.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Bricks & Brains` },
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
        asideContent={
          <>
            <h1>Talk to us about your <span className="cy">construction supply chain</span></h1>
            <p className="ib-lead">Bricks & Brains helps construction teams detect material risks earlier, connect fragmented project information, and act before disruptions reach the site.</p>
            <p className="ib-lead">Start with a focused workflow in <strong>site logistics, procurement, or embodied carbon</strong>, then expand as Bricks & Brains learns your projects, materials, suppliers, and operating context.</p>
            <h2>Start small. Prove value. Expand.</h2>
            <ul className="ib-steps">
              <li><span className="n">01</span><div><h4>Begin with one project or workflow</h4><p>Connect the information already used by your team, including schedules, material requirements, supplier updates, spreadsheets, emails, and project systems.</p></div></li>
              <li><span className="n">02</span><div><h4>Focus on an operational problem</h4><p>Start with material delivery coordination, supplier follow-ups, required-on-site visibility, procurement comparison, or carbon tracking.</p></div></li>
              <li><span className="n">03</span><div><h4>Build intelligence over time</h4><p>B₂ Intelligence creates context across projects, materials, suppliers, decisions, and outcomes, while B₂ Agents help teams execute repeatable workflows with human oversight.</p></div></li>
            </ul>
            <h2>See Bricks &amp; Brains on your project</h2>
            <p className="ib-lead">Tell us where coordination is breaking today. We’ll show you how Bricks &amp; Brains can bring the relevant information together and help your team make faster, better-informed decisions.</p>
            <p className="ib-reassure"><b>Talk to Bricks &amp; Brains</b></p>
          </>
        }
      />
      <section className="ib-sec alt" aria-labelledby="company-details">
        <div className="ib-wrap">
          <div style={{ maxWidth: "760px" }}>
            <span className="ib-eyebrow">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Singapore
            </span>
            <h3 id="company-details" style={{ fontSize: "clamp(1.9rem,4.4vw,3rem)", letterSpacing: "-.025em", margin: "1rem 0 1.1rem" }}>
              Bricks & Brains Pte. Ltd.
            </h3>
            <p style={{ fontSize: "1.04rem", marginBottom: "1rem", color: "var(--ib-text-body)" }}>
              <strong>UEN:</strong> 202647854C
            </p>
            <p style={{ fontSize: "1.04rem", marginBottom: "1rem", color: "var(--ib-text-body)" }}>
              Built in Singapore for construction material procurement, supply-chain coordination and embodied-carbon intelligence.
            </p>
            <p style={{ fontSize: "1.04rem", marginBottom: "1rem", color: "var(--ib-text-body)" }}>
              <strong>Address:</strong><br />
              C/O ACE, 67 Ayer Rajah Crescent #04-16 LaunchPad @ One-North<br />
              Singapore 139950
            </p>
            <p style={{ fontSize: "1.04rem", marginBottom: "1rem", color: "var(--ib-text-body)" }}>
              <strong>Email:</strong> hello@bricks-brains.com<br />
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/bricksandbrains" style={{ color: "var(--ib-cyan)" }} target="_blank" rel="noopener noreferrer">@Bricks&Brains</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
