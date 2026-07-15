import { Flowchart, FCNode, FCEdge } from "@/components/ib/flowchart";
import { IconCpu, IconLayers, IconBot, IconRadar, IconShield, IconRoute, IconLeaf, IconClock, IconTruck, IconBlocks, IconCheck, IconLink, IconZap, IconInfo, IconTarget, IconUsers, IconPlug, IconPlay, IconQuestion } from "@/components/ib/icons";
import { JsonLd, faqPageJsonLd } from "@/components/ib/json-ld";

/* ---- hero flowchart: the autonomous execution loop ---- */
const heroNodes: FCNode[] = [
  { id: "bim", label: "BIM Takeoff", sub: "IFC · BOQ", x: 24, y: 34, w: 152, kind: "source" },
  { id: "proc", label: "Procurement", sub: "agent", x: 222, y: 34, w: 156, kind: "agent" },
  { id: "rfq", label: "RFQ · Bids", sub: "ranked vendors", x: 424, y: 34, w: 162 },
  { id: "ship", label: "Shipment", sub: "live ETA", x: 634, y: 34, w: 148, kind: "physical" },
  { id: "site", label: "Site Delivery", sub: "on schedule", x: 830, y: 34, w: 154, kind: "physical" },
  { id: "twin", label: "Digital Twin", sub: "live project mirror", x: 222, y: 212, w: 562, h: 66, kind: "twin" },
];
const heroEdges: FCEdge[] = [
  { from: "bim", to: "proc" },
  { from: "proc", to: "rfq" },
  { from: "rfq", to: "ship" },
  { from: "ship", to: "site" },
  { from: "proc", to: "twin", fromSide: "bottom", toSide: "top", dashed: true, arrow: false, pulses: 1 },
  { from: "rfq", to: "twin", fromSide: "bottom", toSide: "top", dashed: true, arrow: false, pulses: 1 },
  { from: "ship", to: "twin", fromSide: "bottom", toSide: "top", dashed: true, arrow: false, pulses: 1 },
];

/* ---- digital-twin mirror flowchart ---- */
const twinNodes: FCNode[] = [
  { id: "p1", label: "Steel Delivery", sub: "GPS · ETA", x: 22, y: 26, w: 156, h: 56, kind: "physical" },
  { id: "p2", label: "Weather", sub: "site impact", x: 22, y: 118, w: 156, h: 56, kind: "physical" },
  { id: "p3", label: "Crew Status", sub: "ready / idle", x: 22, y: 210, w: 156, h: 56, kind: "physical" },
  { id: "twin", label: "Digital Twin", sub: "live project state", x: 412, y: 96, w: 196, h: 100, kind: "twin" },
  { id: "o1", label: "Schedule Sync", sub: "critical path", x: 812, y: 64, w: 166, h: 56 },
  { id: "o2", label: "Auto RFQ", sub: "re-source", x: 812, y: 172, w: 166, h: 56, kind: "agent" },
];
const twinEdges: FCEdge[] = [
  { from: "p1", to: "twin", pulses: 1 },
  { from: "p2", to: "twin", pulses: 1 },
  { from: "p3", to: "twin", pulses: 1 },
  { from: "twin", to: "o1", pulses: 2 },
  { from: "twin", to: "o2", pulses: 2 },
];

const features = [
  { icon: <IconCpu />, h: "Construction-Trained Intelligence", p: "A Small Language Model fine-tuned on construction data, so it understands the nuances of project logistics and makes high-stakes decisions in context, not guesswork.", tags: ["SLM", "domain-tuned"] },
  { icon: <IconLayers />, h: "Real-Time Digital Twins", p: "A live virtual map of every material's journey. Spot threats and openings before they reach your site, keeping the schedule and the model in sync.", tags: ["live", "BIM linked"] },
  { icon: <IconBot />, h: "Agentic Workflow Automation", p: "Sits on top of BIM, ERP, and PM tools. Agents automate RFQs, shipment tracking, and bid evaluation so your team can focus on building.", tags: ["RFQ", "tracking", "bids"] },
];

const values = [
  { icon: <IconRadar />, h: "Real-time Awareness", p: "Live tracking of every asset, from the factory gate to the site gate." },
  { icon: <IconShield />, h: "Predictive Resilience", p: "Surface supply-chain threats and bottlenecks before they disrupt execution." },
  { icon: <IconRoute />, h: "Autonomous Decisions", p: "Agents don't just flag delays, they reroute shipments and re-issue RFQs." },
  { icon: <IconLeaf />, h: "Carbon Accountability", p: "Embodied-carbon monitoring from actual delivery data, not estimates." },
];

const agents = [
  { icon: <IconBlocks />, h: "Procurement", p: "Five sourcing agents turn a requirement into a recommended award - RFQ, bid evaluation, supplier intelligence and negotiation, with an orchestrator conducting.", href: "/agents/procurement", count: "5 agents · Sourcing" },
  { icon: <IconTruck />, h: "Logistics", p: "Three execution agents take a confirmed order to goods receipt i.e coordinating suppliers, forecasting disruption, and syncing the last mile with site readiness.", href: "/agents/logistics", count: "3 agents · Execution" },
  { icon: <IconLeaf />, h: "Scope 3", p: "Six emissions agents map, calculate, disclose and reduce carbon from the same ledger so every award is weighed on cost and CO₂e at once.", href: "/agents/scope3", count: "6 agents · Carbon" },
];

const noRip = [
  { icon: <IconShield />, h: "No Integration Required", p: "Phase 1 is pure observation and action. No IT tickets, no procurement battles, no architecture reviews. We don't touch your ERP, PM software, or BIM model to start." },
  { icon: <IconLink />, h: "No Change Management", p: "Foremen stay on WhatsApp. Suppliers keep emailing. Procurement keeps the PO system. Our agents listen and act in the channels your people already use." },
  { icon: <IconZap />, h: "Results in 14 Days", p: "First live coordination dashboard in 7 days. First disruption caught and acted on within 14. No six-month rollout. No consulting bill." },
];

const team = [
  { mono: "RM", name: "Rajesh Maddineni", role: "CEO & Co-Founder", href: "https://www.linkedin.com/in/rajeshmaddineni/" },
  { mono: "TK", name: "Tarun Sai Kalimili", role: "CTO & Co-Founder", href: "https://www.linkedin.com/in/kalimili/" },
  { mono: "HS", name: "Hari Sagaran", role: "CGO & Co-Founder", href: "https://www.linkedin.com/in/hari-sagaran/" },
  { mono: "JK", name: "Jidesh Kambil", role: "Founding Advisor", href: "https://www.linkedin.com/in/jidesh-kambil-6a43a254/" },
];

const faqs = [
  { q: "What is IntelliByld?", a: "IntelliByld is an AI-powered supply-chain platform built specifically for construction. It works as an operating system that automates material tracking, procurement, and logistics, keeping projects on time and reducing carbon footprints." },
  { q: "How does IntelliByld work?", a: "It creates a dynamic Digital Twin of your supply chain, linking live material movements directly to your master project schedule. AI agents then manage RFQs, evaluate bids, and track shipments in real time." },
  { q: "What software does IntelliByld integrate with?", a: "It works with BIM tools (IFC, Revit, Navisworks) and ERP platforms (SAP, Oracle, Procore), acting as an intelligent coordination layer across them. Pilots begin from your BOMs so no manual data entry required to start." },
  { q: "Is IntelliByld relevant outside Singapore?", a: "Yes. It's aligned with Singapore's BCA Site Management Data Standards and IDD framework, which makes it a natural fit for Singapore GCs and developers. But the core capabilities (digital twin, agentic AI, supply-chain orchestration) apply to any large-scale project globally. The compliance layer is configurable per jurisdiction." },
  { q: "What does Autonomous Execution mean in construction logistics?", a: "It means the supply chain takes corrective action without human instruction. If a steel shipment slips three days, the agents assess the schedule impact, contact alternative suppliers, generate and send RFQs, evaluate bids, and update the twin automatically. Your team is notified of the outcome, not asked to start the process." },
  { q: "How does IntelliByld handle carbon tracking?", a: "It tracks embodied-carbon emissions from material deliveries in real time, based on actual delivery data rather than estimates. Each movement is logged with its footprint and reports generate automatically, supporting sustainability reporting and green-building requirements." },
];

export default function Home() {
  return (
    <main>
      <JsonLd data={faqPageJsonLd(faqs)} />
      {/* HERO */}
      <section className="ib-hero">
        <div className="ib-grid-bg" />
        <div className="ib-wrap ib-hero-inner">
          <span className="ib-eyebrow">
            <IconBot /> Agentic AI · Construction Supply Chains
          </span>
          <h1>
            Agentic AI for <span className="cy">construction</span> supply chains
          </h1>
          <p className="ib-hero-sub">
            IntelliByld orchestrates fragmented logistics into Autonomous Execution. A construction-trained SLM keeps your project on schedule and your carbon footprint on target.
          </p>
          <div className="ib-hero-actions">
            <a href="/contact-us" className="ib-btn ib-btn-primary">
              Join Pilot <span className="arw">→</span>
            </a>
            <a href="/agentic-ai" className="ib-btn ib-btn-ghost">
              See how it works
            </a>
            <span className="ib-hero-note">MVP live · pilots from your BOMs</span>
          </div>
          <div style={{ marginTop: "clamp(2.2rem,5vw,3.4rem)" }}>
            <Flowchart
              nodes={heroNodes}
              edges={heroEdges}
              height={300}
              title="Autonomous Execution"
              caption="One continuous loop: takeoff → sourcing → shipment → delivery, mirrored live in the twin."
              legend
            />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="ib-strip">
        <div className="ib-wrap ib-strip-inner">
          <span className="ib-strip-label">Sits on top of your stack</span>
          <div className="ib-strip-items">
            <span>
              BIM <b>IFC · Revit · Navisworks</b>
            </span>
            <span>
              ERP <b>SAP · Oracle · Procore</b>
            </span>
            <span>
              Channels <b>Email · WhatsApp · PO</b>
            </span>
          </div>
        </div>
      </div>

      {/* WHAT IS */}
      <section className="ib-sec">
        <div className="ib-wrap">
          <div className="ib-head ib-reveal">
            <span className="ib-eyebrow">
              <IconInfo /> What is IntelliByld?
            </span>
            <h2><span style={{ color: "var(--ib-cyan)" }}>Autonomous Execution</span> for construction supply chains</h2>
            <p>
              <b>IntelliByld is the OS that turns supply chain data into Autonomous Execution.</b> It helps teams coordinate procurement, shipping, and bid evaluation so execution stays on schedule.
            </p>
          </div>
          <div className="ib-cards c3">
            {features.map((f, i) => (
              <div className="ib-card ib-reveal" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="ib-ic">{f.icon}</div>
                <h3>{f.h}</h3>
                <p>{f.p}</p>
                <div className="tags">
                  {f.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL TWIN */}
      <section className="ib-sec alt">
        <div className="ib-wrap">
          <div className="ib-split">
            <div className="ib-reveal">
              <span className="ib-eyebrow">
                <IconLayers /> Digital Twins
              </span>
              <h2>A <span style={{ color: "var(--ib-cyan)" }}>living twin</span> of your entire supply chain</h2>
              <p>
                IntelliByld's Digital Twin is a living, real-time replica of your construction supply chain. It links every material movement to your master schedule closing the "Integration Trap" so your model mirrors physical site reality.
              </p>
              <ul className="ib-checks">
                <li>
                  <IconCheck />
                  <span>
                    <b>Physical → digital, continuously.</b> GPS, ETAs, weather, and crew status stream into one live state.
                  </span>
                </li>
                <li>
                  <IconCheck />
                  <span>
                    <b>Linked to the critical path.</b> Every delivery is tied to the schedule task it unblocks.
                  </span>
                </li>
                <li>
                  <IconCheck />
                  <span>
                    <b>Drives action.</b> When reality drifts, the twin triggers a re-source or a schedule sync.
                  </span>
                </li>
              </ul>
              <a href="/digital-twins" className="ib-btn ib-btn-ghost" style={{ marginTop: "1.8rem" }}>
                Explore Digital Twins <span className="arw">→</span>
              </a>
            </div>
            <div className="ib-reveal" style={{ transitionDelay: "100ms" }}>
              <Flowchart nodes={twinNodes} edges={twinEdges} height={292} title="Twin Sync - live" caption="Site reality feeds the twin; the twin drives the next decision." />
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="ib-sec">
        <div className="ib-wrap">
          <div className="ib-head center ib-reveal">
            <span className="ib-eyebrow">
              <IconTarget /> Why it matters
            </span>
            <h2>From <span style={{ color: "var(--ib-cyan)" }}>visibility</span> to action</h2>
          </div>
          <div className="ib-cards c4">
            {values.map((v, i) => (
              <div className="ib-card ib-reveal" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="ib-ic">{v.icon}</div>
                <h3>{v.h}</h3>
                <p>{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENTS */}
      <section className="ib-sec alt">
        <div className="ib-wrap">
          <div className="ib-head ib-reveal">
            <span className="ib-eyebrow">
              <IconUsers /> The Teams
            </span>
            <h2>Meet your <span style={{ color: "var(--ib-cyan)" }}>digital workforce</span></h2>
            <p>Three teams of specialised agents working in concert sourcing, logistics and carbon coordinated by supervising orchestrators and a single shared data flow.</p>
          </div>
          <div className="ib-cards c3">
            {agents.map((a, i) => (
              <a className="ib-card team ib-reveal" key={i} href={a.href} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="ib-ic">{a.icon}</div>
                <h3>{a.h}</h3>
                <p>{a.p}</p>
                <div className="acount">{a.count}</div>
                <div className="tags">
                  <span>Explore the team →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NO RIP AND REPLACE */}
      <section className="ib-sec">
        <div className="ib-wrap">
          <div className="ib-head ib-reveal">
            <span className="ib-eyebrow">
              <IconPlug /> No Rip and Replace
            </span>
            <h2>Zero integration. <span style={{ color: "var(--ib-cyan)" }}>Zero disruption.</span> Live in 7 days.</h2>
            <p>We sit on top of your existing tools. Your team changes nothing. The only thing that changes is that your supply chain becomes visible.</p>
          </div>
          <div className="ib-cards c3">
            {noRip.map((n, i) => (
              <div className="ib-card ib-reveal" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="ib-ic">{n.icon}</div>
                <h3>{n.h}</h3>
                <p>{n.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILOT BAND */}
      <section className="ib-sec alt">
        <div className="ib-wrap">
          <div className="ib-split">
            <div className="ib-reveal">
              <span className="ib-eyebrow">
                <IconPlay /> Run it on a live project
              </span>
              <h2>See <span style={{ color: "var(--ib-cyan)" }}>autonomous coordination</span> in your own data</h2>
              <p>Free pilot for select developers, GCs, and EPC teams. Connect one site and watch the twin come alive within three weeks.</p>
              <div className="ib-hero-actions" style={{ marginTop: "1.8rem" }}>
                <a href="/pilot" className="ib-btn ib-btn-primary">
                  Apply for Pilot <span className="arw">→</span>
                </a>
                <a href="/contact-us" className="ib-btn ib-btn-ghost">
                  Contact us
                </a>
              </div>
            </div>
            <ul className="ib-steps ib-reveal" style={{ transitionDelay: "100ms" }}>
              <li>
                <span className="n">01</span>
                <div>
                  <h4>Connect one site</h4>
                  <p>Share a BOM and point us at your existing email / PO channels. No integration work.</p>
                </div>
              </li>
              <li>
                <span className="n">02</span>
                <div>
                  <h4>Live dashboard in 7 days</h4>
                  <p>Your first real-time coordination view, built from your own project data.</p>
                </div>
              </li>
              <li>
                <span className="n">03</span>
                <div>
                  <h4>First save in 14 days</h4>
                  <p>A real disruption detected and acted on before it reached the site.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="ib-sec">
        <div className="ib-wrap">
          <div className="ib-head center ib-reveal">
            <span className="ib-eyebrow">
              <IconUsers /> Core team
            </span>
            <h2>The <span style={{ color: "var(--ib-cyan)" }}>people building</span> the digital workforce</h2>
          </div>
          <div className="ib-cards c4">
            {team.map((m, i) => (
              <div className="ib-card ib-reveal" key={i} style={{ transitionDelay: `${i * 70}ms`, alignItems: "flex-start" }}>
                <div className="ib-ic" style={{ width: 52, height: 52, fontFamily: "var(--ib-display)", fontWeight: 700, color: "var(--ib-cyan)", fontSize: "1.05rem" }}>
                  {m.mono}
                </div>
                <h3 style={{ marginBottom: ".15rem" }}>{m.name}</h3>
                <p style={{ flex: "unset", color: "var(--ib-text-muted)", fontFamily: "var(--ib-mono)", fontSize: ".74rem", letterSpacing: ".04em" }}>{m.role}</p>
                <div className="tags">
                  <a href={m.href} style={{ fontFamily: "var(--ib-mono)", fontSize: ".66rem", color: "var(--ib-text-body)", border: "1px solid var(--ib-line)", borderRadius: 20, padding: ".25em .7em" }}>
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ib-sec alt">
        <div className="ib-wrap">
          <div className="ib-head ib-reveal">
            <span className="ib-eyebrow">
              <IconQuestion /> FAQs
            </span>
            <h2>Know more about IntelliByld</h2>
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

      {/* FINAL CTA */}
      <section className="ib-cta">
        <div className="ib-cta-bg" />
        <div className="ib-wrap ib-cta-inner ib-reveal">
          <span className="ib-eyebrow" style={{ justifyContent: "center" }}>
            <IconZap /> Build the execution layer
          </span>
          <h2>
            Make your <span className="cy">supply chain visible</span> and <span className="cy">autonomous</span>
          </h2>
          <p>Connect one site, see autonomous coordination in your own data within three weeks.</p>
          <div className="ib-cta-actions">
            <a href="/contact-us" className="ib-btn ib-btn-primary">
              Join Pilot <span className="arw">→</span>
            </a>
            <a href="/contact-us" className="ib-btn ib-btn-ghost">
              Talk to us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
