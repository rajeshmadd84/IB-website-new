import type { Metadata } from "next";
import { Flowchart, FCNode, FCEdge } from "@/components/ib/flowchart";
import { IconBlocks, IconTruck, IconLeaf, IconCheck, IconShield, IconRadar, IconZap, IconLink, IconRoute, IconBot, IconWorkflow, IconUsers, IconShare, IconTrendingUp, IconQuestion } from "@/components/ib/icons";

export const metadata: Metadata = {
  title: "Agentic AI",
  description: "IntelliByld runs construction procurement end-to-end with three coordinated teams of specialist agents — Procurement, Logistics and Scope 3 — sharing one workflow and one audit trail, with humans in the loop on every decision that matters.",
};

const flowNodes: FCNode[] = [
  { id: "req", label: "Requirement", sub: "BoQ · specs", x: 24, y: 44, w: 140, kind: "source" },
  { id: "src", label: "Sourcing", sub: "5 agents", x: 196, y: 44, w: 152, kind: "agent" },
  { id: "award", label: "Award", sub: "human sign-off", x: 380, y: 44, w: 150, h: 58, kind: "twin" },
  { id: "logi", label: "Logistics", sub: "3 agents", x: 562, y: 44, w: 152, kind: "agent" },
  { id: "site", label: "Site Delivery", sub: "GRN", x: 746, y: 44, w: 146, kind: "physical" },
  { id: "sc3", label: "Scope 3", sub: "6 agents · CO₂e", x: 380, y: 172, w: 334, kind: "agent" },
  { id: "disc", label: "Disclosure", sub: "CSRD · CDP", x: 746, y: 172, w: 146 },
];
const flowEdges: FCEdge[] = [
  { from: "req", to: "src" },
  { from: "src", to: "award" },
  { from: "award", to: "logi" },
  { from: "logi", to: "site" },
  { from: "src", to: "sc3", fromSide: "bottom", toSide: "top", pulses: 1 },
  { from: "logi", to: "sc3", fromSide: "bottom", toSide: "top", pulses: 1 },
  { from: "sc3", to: "disc", fromSide: "right", toSide: "left", pulses: 1 },
];

const teams = [
  { icon: <IconBlocks />, h: "Procurement", count: "5 agents · Phase 1", p: "Sourcing, from RFQ to a recommended award. RFQ, bid evaluation, supplier intelligence and negotiation — with an orchestrator conducting and a human signing off the award.", href: "/agents/procurement" },
  { icon: <IconTruck />, h: "Logistics", count: "3 agents · Phase 2", p: "Execution, from PO to goods receipt. Order coordination, disruption forecasting and last-mile site sync — sharing the procurement orchestrator so nothing is dropped at the handoff.", href: "/agents/logistics" },
  { icon: <IconLeaf />, h: "Scope 3", count: "6 agents · Integrated", p: "Carbon, mapped, calculated, disclosed and reduced from the same ledger — so every supplier decision is weighed on price, technical fit and tonnes of CO₂e at once.", href: "/agents/scope3" },
];

const flows = [
  { b: "RFQ → supplier data.", rest: "Emissions data is requested as part of the quotation, not chased afterwards." },
  { b: "Quotations → reduction.", rest: "Low-carbon alternatives are flagged during bid evaluation, while the award is still open." },
  { b: "PO → mapping & calc.", rest: "Emissions are quantified the moment an order is placed — no separate carbon entry." },
  { b: "Shipment → Category 4.", rest: "Logistics tracking feeds accurate upstream-transportation emissions to the same order." },
  { b: "Supplier scorecards → enriched.", rest: "ESG scores from sourcing are upgraded with verified primary emissions data." },
];

const gates = [
  "Final award & PO issuance — always a human decision, never automatic.",
  "Disruption response — high-impact mitigation is surfaced before it runs.",
  "Disclosure sign-off — every regulatory submission is reviewed before release.",
  "Reduction commitments — material targets and supplier switches go to the team.",
];

const outcomes = [
  { icon: <IconZap />, h: "Faster sourcing cycles", p: "RFQs go out the same day and quotations are evaluated the moment they arrive — decisions weigh ESG, financial health and history, not just price." },
  { icon: <IconRadar />, h: "Resilient delivery", p: "Disruptions are forecast before they reach the critical path, and deliveries land in sync with site readiness, manpower and equipment." },
  { icon: <IconShield />, h: "Disclosure-ready carbon", p: "CSRD, GHG Protocol, CDP and ISSB reports generate from one ledger, with every reported tonne tracing back to a transaction and an approver." },
];

const faqs = [
  { q: "What does \u201cthree teams, fourteen agents\u201d actually mean?", a: "Rather than one monolithic AI, IntelliByld uses teams of specialised agents — each with a clear job, clear inputs and clear handoffs. Eight agents run procurement across sourcing and logistics; six run Scope 3 emissions. A supervising orchestrator conducts each team, and the two share data so carbon is a real input to every purchase." },
  { q: "Do I have to adopt all three teams at once?", a: "No. The teams are modular. Most partners start with sourcing or logistics and add Scope 3 once procurement data is flowing — because the carbon agents read the same RFQ, PO and shipment records, switching it on is a configuration step, not a new data project." },
  { q: "How much stays under human control?", a: "Every decision that carries commercial, contractual or regulatory weight sits behind an approval gate — award and PO issuance, high-impact disruption responses, disclosure sign-off, reduction commitments. Outside those gates, the agents handle the busywork autonomously." },
  { q: "Where do pilots begin?", a: "From your BoMs. BIM-native ingestion comes later — sourcing starts from the bill of materials and project specifications you already have." },
];

export default function AgenticAI() {
  return (
    <main>
      <section className="ib-phero">
        <div className="ib-grid-bg" />
        <div className="ib-wrap" style={{ position: "relative" }}>
          <span className="ib-eyebrow">
            <IconBot /> Agentic AI · A Digital Workforce
          </span>
          <h1>
            Three teams. <span className="cy">Fourteen agents.</span> One supply chain.
          </h1>
          <p>
            IntelliByld runs construction procurement end-to-end — from the first Request for Quotation to the moment material arrives on site — and quantifies the carbon of every transaction along the way. It is delivered by three coordinated teams of specialist agents that share data, decisions and a single audit trail.
          </p>
          <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap", marginTop: "1.6rem" }}>
            {["Autonomous Sourcing", "End-to-End Logistics", "Carbon by Design"].map((t) => (
              <span key={t} style={{ fontFamily: "var(--ib-mono)", fontSize: ".7rem", letterSpacing: ".04em", color: "var(--ib-cyan)", border: "1px solid rgba(30,86,214,.35)", borderRadius: "20px", padding: ".4em .9em" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="ib-sec">
        <div className="ib-wrap">
          <div className="ib-head ib-reveal">
            <span className="ib-eyebrow">
              <IconWorkflow /> One workflow
            </span>
            <h2>From requirement to delivery — with carbon in view</h2>
            <p>Sourcing confirms a supplier, logistics gets it to site, and the Scope 3 team reads the same RFQ, PO and shipment data to calculate and disclose emissions in the same flow.</p>
          </div>
          <div className="ib-reveal">
            <Flowchart nodes={flowNodes} edges={flowEdges} height={270} title="Procurement & carbon — end to end" caption="Two procurement phases plus an integrated Scope 3 team, on one ledger." legend />
          </div>
        </div>
      </section>

      <section className="ib-sec alt">
        <div className="ib-wrap">
          <div className="ib-head ib-reveal">
            <span className="ib-eyebrow">
              <IconUsers /> Meet the teams
            </span>
            <h2>Three teams of specialists, not one monolith</h2>
            <p>Each team owns a distinct slice of the supply chain. A supervising orchestrator conducts each one, and the procurement and carbon teams share a single data flow.</p>
          </div>
          <div className="ib-cards c3">
            {teams.map((t, i) => (
              <a className="ib-card team ib-reveal" key={i} href={t.href} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="ib-ic">{t.icon}</div>
                <h3>{t.h}</h3>
                <p>{t.p}</p>
                <div className="acount">{t.count}</div>
                <div className="tags">
                  <span>Explore the team →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="ib-sec">
        <div className="ib-wrap">
          <div className="ib-split">
            <div className="ib-reveal">
              <span className="ib-eyebrow">
                <IconShare /> Shared data flows
              </span>
              <h2>Carbon shares the procurement bloodstream</h2>
              <p>The Scope 3 agents are not a module bolted on after the fact — they share data and decisions with the procurement team, so every award can be weighed on price, technical fit and tonnes of CO₂e in the same workflow.</p>
              <a href="/agents/scope3" className="ib-btn ib-btn-primary" style={{ marginTop: "1.6rem" }}>
                See the Scope 3 team <span className="arw">→</span>
              </a>
            </div>
            <ul className="ib-checks ib-reveal" style={{ transitionDelay: "100ms" }}>
              {flows.map((f, i) => (
                <li key={i}>
                  <IconLink />
                  <span>
                    <b>{f.b}</b> {f.rest}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="ib-sec alt">
        <div className="ib-wrap">
          <div className="ib-head ib-reveal">
            <span className="ib-eyebrow">
              <IconShield /> Authority stays human
            </span>
            <h2>Agents do the work; humans hold the decisions</h2>
            <p>Autonomy without accountability is risky in procurement. The agents draft, analyse, compare and track autonomously — but the decisions that carry commercial or regulatory weight sit behind approval gates.</p>
          </div>
          <div className="ib-gates ib-reveal">
            {gates.map((g, i) => (
              <div className="ib-gate" key={i}>
                <IconCheck width={18} height={18} />
                <span>{g}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ib-sec">
        <div className="ib-wrap">
          <div className="ib-head center ib-reveal">
            <span className="ib-eyebrow">
              <IconTrendingUp /> Outcomes
            </span>
            <h2>What a coordinated workforce delivers</h2>
          </div>
          <div className="ib-cards c3">
            {outcomes.map((o, i) => (
              <div className="ib-card ib-reveal" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="ib-ic">{o.icon}</div>
                <h3>{o.h}</h3>
                <p>{o.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ib-sec alt">
        <div className="ib-wrap">
          <div className="ib-head ib-reveal">
            <span className="ib-eyebrow">
              <IconQuestion /> FAQs
            </span>
            <h2>The agent architecture, answered</h2>
          </div>
          <div className="ib-faq ib-reveal">
            {faqs.map((f, i) => (
              <details key={i} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="ib-cta">
        <div className="ib-cta-bg" />
        <div className="ib-wrap ib-cta-inner ib-reveal">
          <h2>
            Put the <span className="cy">workforce</span> to work
          </h2>
          <p>Connect one site and see sourcing, logistics and carbon run in your own data within three weeks.</p>
          <div className="ib-cta-actions">
            <a href="/pilot" className="ib-btn ib-btn-primary">
              Join Pilot <span className="arw">→</span>
            </a>
            <a href="/digital-twins" className="ib-btn ib-btn-ghost">
              See the Digital Twin
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
