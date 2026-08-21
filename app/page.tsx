import { SupplyChainTwinAnimation } from "@/components/ib/supply-chain-twin-animation";
import { IconBot, IconLayers, IconRadar, IconShield, IconRoute, IconLeaf, IconBlocks, IconCheck, IconLink, IconZap, IconInfo, IconTarget, IconUsers, IconPlug, IconPlay, IconQuestion, IconTruck } from "@/components/ib/icons";
import { JsonLd, faqPageJsonLd } from "@/components/ib/json-ld";

const features = [
  { icon: <IconBlocks />, h: "Procurement Intelligence", p: "Turn material requirements into RFQs, compare supplier responses, surface commercial and delivery risk, and prepare award recommendations with human approval.", tags: ["RFQ", "supplier", "award"] },
  { icon: <IconTruck />, h: "Material Logistics", p: "Connect purchase orders, supplier updates, shipments and site readiness so teams see what is moving, what is late and what threatens the programme.", tags: ["PO", "ETA", "site"] },
  { icon: <IconLeaf />, h: "Embodied Carbon Intelligence", p: "Connect quantities, suppliers, EPDs and logistics data to calculate project embodied carbon from the same material records used to run procurement.", tags: ["EPD", "CO₂e", "materials"] },
];

const liveUseCases = [
  { status: "DELIVERY RISK", title: "A critical material delivery starts slipping", p: "A supplier milestone moves. IntelliByld connects the change to the PO, shipment and programme dependency, then evaluates recovery options.", href: "/use-cases/critical-material-delay", out: "See the programme impact early" },
  { status: "PROCUREMENT", title: "A supplier quotation does not match the RFQ", p: "Supplier bids arrive with exclusions, different units and inconsistent assumptions. IntelliByld maps them back to the BOQ and RFQ before evaluation.", href: "/use-cases/quotation-mismatch", out: "Get to a comparable bid view" },
  { status: "CARBON", title: "A lower-carbon option appears during procurement", p: "Two compliant suppliers differ on price, lead time, EPD and transport. IntelliByld puts cost, schedule and carbon into the same award view.", href: "/use-cases/lower-carbon-procurement", out: "Make carbon part of the award" },
  { status: "SUBSTITUTION", title: "A supplier proposes a material substitution", p: "An awarded product becomes unavailable. IntelliByld connects the substitute to specification, PO, delivery and carbon before the team approves the change.", href: "/use-cases/material-substitution", out: "See the ripple effect before approval" },
];

const values = [
  { icon: <IconRadar />, h: "One material view", p: "Connect requirements, suppliers, orders, shipments and carbon data around each material package." },
  { icon: <IconShield />, h: "Earlier risk signals", p: "Surface procurement and delivery risks before they become site delays or emergency sourcing decisions." },
  { icon: <IconRoute />, h: "Agentic execution", p: "AI agents draft, chase, compare, monitor and recommend while commercial authority stays with your team." },
  { icon: <IconLeaf />, h: "Carbon in the decision", p: "Compare cost, lead time, supplier risk and embodied carbon before an award is approved." },
];

const noRip = [
  { icon: <IconShield />, h: "Start from the data you already have", p: "Begin with BOQs, spreadsheets, RFQs, purchase orders and project documents. Deep ERP or BIM integration is not required for the first pilot." },
  { icon: <IconLink />, h: "Fit around existing workflows", p: "Keep your current procurement, email and project systems. IntelliByld adds an intelligence layer rather than forcing a rip-and-replace programme." },
  { icon: <IconZap />, h: "Pilot before platform rollout", p: "Prove value on one project or material package first, then connect deeper into ERP, BIM and project systems as the use case expands." },
];

const team = [
  { mono: "RM", name: "Rajesh Maddineni", role: "CEO & Co-Founder", href: "https://www.linkedin.com/in/rajeshmaddineni/" },
  { mono: "TK", name: "Tarun Sai Kalimili", role: "CTO & Co-Founder", href: "https://www.linkedin.com/in/kalimili/" },
  { mono: "HS", name: "Hari Sagaran", role: "CGO & Co-Founder", href: "https://www.linkedin.com/in/hari-sagaran/" },
  { mono: "JK", name: "Jidesh Kambil", role: "Founding Advisor", href: "https://www.linkedin.com/in/jidesh-kambil-6a43a254/" },
];

const faqs = [
  { q: "What is IntelliByld?", a: "IntelliByld is an AI intelligence layer for construction material supply chains. It connects procurement, material logistics and embodied-carbon data so project teams can make better decisions across cost, schedule and carbon." },
  { q: "Where does IntelliByld start?", a: "Pilots can begin from the material and procurement data teams already have, such as BOQs, spreadsheets, RFQs, purchase orders and supplier documents. Deeper BIM and ERP integrations can be added as the pilot expands." },
  { q: "Does IntelliByld make procurement decisions automatically?", a: "AI agents can draft RFQs, chase responses, compare suppliers, monitor logistics and prepare recommendations. Commercial, contractual and regulatory decisions remain behind human approval gates." },
  { q: "How does IntelliByld calculate embodied carbon?", a: "IntelliByld links material quantities to product-specific EPDs or approved emission factors and can incorporate supplier and logistics information. This creates a live carbon ledger that can move from design assumptions toward procured and delivered quantities." },
  { q: "Where is IntelliByld focused today?", a: "IntelliByld is a Singapore-based construction technology company focused on working with developers, main contractors, EPC teams and sustainability stakeholders in Singapore." },
];

export default function Home() {
  return (
    <main>
      <JsonLd data={faqPageJsonLd(faqs)} />

      <section className="ib-hero">
        <div className="ib-grid-bg" />
        <div className="ib-wrap ib-hero-inner">
          <span className="ib-eyebrow"><IconBot /> AI for Construction Supply Chains</span>
          <h1>
            Construction Supply Chain <span className="cy">Visibility</span>
          </h1>
          <p className="ib-hero-sub">
            See <strong>what’s ordered</strong>, <strong>what’s moving</strong>, what’s at risk, and what carbon it carries — from material requirement to site delivery.
          </p>
          <div className="ib-hero-actions">
            <a href="/pilot" className="ib-btn ib-btn-primary">Run IntelliByld on a Project <span className="arw">→</span></a>
            <a href="/agentic-ai" className="ib-btn ib-btn-ghost">See How It Works</a>
            <span className="ib-hero-note">Built in Singapore · pilots open</span>
          </div>
          <div style={{ marginTop: "clamp(2.2rem,5vw,3.4rem)" }}>
            <SupplyChainTwinAnimation />
          </div>
        </div>
      </section>

      <div className="ib-strip">
        <div className="ib-wrap ib-strip-inner">
          <span className="ib-strip-label">Designed to sit across your existing stack</span>
          <div className="ib-strip-items">
            <span>BIM <b>IFC · Revit · Navisworks</b></span>
            <span>ERP / PM <b>SAP · Oracle · Procore</b></span>
            <span>Project data <b>BOQ · RFQ · PO · EPD</b></span>
          </div>
        </div>
      </div>

      <section className="ib-sec">
        <div className="ib-wrap">
          <div className="ib-head ib-reveal">
            <span className="ib-eyebrow"><IconInfo /> The platform</span>
            <h2>The intelligence layer for <span style={{ color: "var(--ib-cyan)" }}>construction materials</span></h2>
            <p><b>IntelliByld connects the commercial, physical and carbon life of a material.</b> Instead of treating procurement, logistics and sustainability as separate data projects, teams work from one connected material record.</p>
          </div>
          <div className="ib-cards c3">
            {features.map((f, i) => (
              <div className="ib-card ib-reveal" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="ib-ic">{f.icon}</div><h3>{f.h}</h3><p>{f.p}</p>
                <div className="tags">{f.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ib-sec alt">
        <div className="ib-wrap">
          <div className="ib-head ib-reveal">
            <span className="ib-eyebrow"><IconRadar /> IntelliByld in action</span>
            <h2>See what changed. <span style={{ color: "var(--ib-cyan)" }}>Know what it affects.</span></h2>
            <p>Real construction supply-chain scenarios showing how IntelliByld connects a signal to project context, agent action and a human decision.</p>
          </div>
          <div className="ib-cards c2">
            {liveUseCases.map((useCase, i) => (
              <a key={useCase.href} href={useCase.href} className="ib-card ib-reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="ib-eyebrow" style={{ marginBottom: ".9rem" }}>{useCase.status}</span>
                <h3>{useCase.title}</h3>
                <p>{useCase.p}</p>
                <div style={{ marginTop: "1.25rem", paddingTop: "1rem", borderTop: "1px solid var(--ib-line)", color: "var(--ib-cyan)", fontWeight: 600, fontSize: ".86rem" }}>→ {useCase.out}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="ib-sec alt">
        <div className="ib-wrap">
          <div className="ib-split">
            <div className="ib-reveal">
              <span className="ib-eyebrow"><IconLayers /> Construction Supply Chain Digital Twin</span>
              <h2>One connected record from <span style={{ color: "var(--ib-cyan)" }}>requirement to site</span></h2>
              <p>IntelliByld maintains a shared operational data layer across Project → Package → Material → Supplier → PO → Shipment → Site, with cost, schedule and carbon attached to the same material records.</p>
              <ul className="ib-checks">
                <li><IconCheck /><span><b>Commercial state.</b> RFQs, supplier responses, awards and purchase orders.</span></li>
                <li><IconCheck /><span><b>Physical state.</b> Supplier status, shipment milestones, ETA and site readiness.</span></li>
                <li><IconCheck /><span><b>Carbon state.</b> Quantities, EPDs, emission factors and material-level CO₂e.</span></li>
              </ul>
              <a href="/material-data-layer" className="ib-btn ib-btn-ghost" style={{ marginTop: "1.8rem" }}>Explore the Data Layer <span className="arw">→</span></a>
            </div>
            <div className="ib-card ib-reveal" style={{ transitionDelay: "100ms" }}>
              <span className="ib-eyebrow">Material record</span>
              <h3 style={{ marginTop: ".9rem" }}>Structural Steel Package</h3>
              <ul className="ib-checks" style={{ marginTop: "1.2rem" }}>
                <li><IconCheck /><span><b>Requirement</b> — BOQ quantity + specification</span></li>
                <li><IconCheck /><span><b>Supplier</b> — bid + lead time + risk</span></li>
                <li><IconCheck /><span><b>Order</b> — PO + committed quantity</span></li>
                <li><IconCheck /><span><b>Delivery</b> — ETA + site dependency</span></li>
                <li><IconCheck /><span><b>Carbon</b> — EPD + kgCO₂e + transport</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ib-sec">
        <div className="ib-wrap">
          <div className="ib-head center ib-reveal"><span className="ib-eyebrow"><IconTarget /> Why it matters</span><h2>Make <span style={{ color: "var(--ib-cyan)" }}>cost, schedule and carbon</span> one decision</h2></div>
          <div className="ib-cards c4">
            {values.map((v, i) => <div className="ib-card ib-reveal" key={i} style={{ transitionDelay: `${i * 70}ms` }}><div className="ib-ic">{v.icon}</div><h3>{v.h}</h3><p>{v.p}</p></div>)}
          </div>
        </div>
      </section>

      <section className="ib-sec alt">
        <div className="ib-wrap">
          <div className="ib-head ib-reveal">
            <span className="ib-eyebrow"><IconLeaf /> Embodied Carbon</span>
            <h2>Carbon intelligence from the <span style={{ color: "var(--ib-cyan)" }}>supply chain itself</span></h2>
            <p>IntelliByld links BOQs, supplier quotations, purchase orders, EPDs and delivery records to create a living embodied-carbon ledger — instead of treating carbon reporting as a disconnected spreadsheet exercise.</p>
          </div>
          <div className="ib-cards c3">
            <div className="ib-card ib-reveal"><h3>Design / Baseline</h3><p>Use BOQ quantities and available product or generic factors to establish an early embodied-carbon view.</p></div>
            <div className="ib-card ib-reveal" style={{ transitionDelay: "80ms" }}><h3>Procured</h3><p>Replace assumptions with selected suppliers, product-specific EPDs and committed quantities as awards are made.</p></div>
            <div className="ib-card ib-reveal" style={{ transitionDelay: "160ms" }}><h3>Delivered / As-built</h3><p>Reconcile substitutions and actual material quantities so the carbon ledger moves closer to what was truly built.</p></div>
          </div>
          <div style={{ marginTop: "1.8rem" }}><a href="/sustainability" className="ib-btn ib-btn-primary">Explore Embodied Carbon <span className="arw">→</span></a></div>
        </div>
      </section>

      <section className="ib-sec">
        <div className="ib-wrap">
          <div className="ib-head ib-reveal"><span className="ib-eyebrow"><IconUsers /> Agentic AI</span><h2><span style={{ color: "var(--ib-cyan)" }}>Agents do the work.</span> Humans hold the authority.</h2><p>IntelliByld uses specialised agents to perform repetitive coordination and analysis while keeping commercial, contractual and regulatory decisions behind approval gates.</p></div>
          <div className="ib-cards c3">
            <div className="ib-card ib-reveal"><div className="ib-ic"><IconBlocks /></div><h3>Procurement agents</h3><p>Draft RFQs, chase quotations, compare bids, enrich supplier intelligence and prepare award recommendations.</p></div>
            <div className="ib-card ib-reveal" style={{ transitionDelay: "80ms" }}><div className="ib-ic"><IconTruck /></div><h3>Logistics agents</h3><p>Monitor supplier commitments and delivery milestones, identify disruption risk and coordinate exceptions.</p></div>
            <div className="ib-card ib-reveal" style={{ transitionDelay: "160ms" }}><div className="ib-ic"><IconLeaf /></div><h3>Carbon agents</h3><p>Match material records to EPDs or approved factors, calculate embodied carbon and surface lower-carbon options.</p></div>
          </div>
          <div style={{ marginTop: "1.8rem" }}><a href="/agentic-ai" className="ib-btn ib-btn-ghost">See How Agentic AI Works <span className="arw">→</span></a></div>
        </div>
      </section>

      <section className="ib-sec alt">
        <div className="ib-wrap">
          <div className="ib-head ib-reveal"><span className="ib-eyebrow"><IconPlug /> Start focused</span><h2>Start without a <span style={{ color: "var(--ib-cyan)" }}>rip-and-replace</span></h2><p>Prove the use case with one project or material package first. Integrate deeper only where it creates value.</p></div>
          <div className="ib-cards c3">{noRip.map((n, i) => <div className="ib-card ib-reveal" key={i} style={{ transitionDelay: `${i * 80}ms` }}><div className="ib-ic">{n.icon}</div><h3>{n.h}</h3><p>{n.p}</p></div>)}</div>
        </div>
      </section>

      <section className="ib-sec">
        <div className="ib-wrap">
          <div className="ib-split">
            <div className="ib-reveal"><span className="ib-eyebrow"><IconPlay /> Pilot</span><h2>Run IntelliByld on <span style={{ color: "var(--ib-cyan)" }}>one live project</span></h2><p>Start with a defined procurement package and evaluate the workflow using your own material, supplier and delivery data.</p><div className="ib-hero-actions" style={{ marginTop: "1.8rem" }}><a href="/pilot" className="ib-btn ib-btn-primary">Apply for Pilot <span className="arw">→</span></a><a href="/contact-us" className="ib-btn ib-btn-ghost">Contact us</a></div></div>
            <ul className="ib-steps ib-reveal" style={{ transitionDelay: "100ms" }}>
              <li><span className="n">01</span><div><h4>Define the package</h4><p>Select a live project, material package and outcome to measure.</p></div></li>
              <li><span className="n">02</span><div><h4>Connect project data</h4><p>Bring in relevant BOQ, supplier, RFQ, PO, logistics and EPD information.</p></div></li>
              <li><span className="n">03</span><div><h4>Measure the value</h4><p>Track procurement effort, risk visibility, data coverage and carbon intelligence during the pilot.</p></div></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="ib-sec alt">
        <div className="ib-wrap">
          <div className="ib-head center ib-reveal"><span className="ib-eyebrow"><IconUsers /> Core team</span><h2>The <span style={{ color: "var(--ib-cyan)" }}>people building</span> IntelliByld</h2></div>
          <div className="ib-cards c4">{team.map((m, i) => <a className="ib-card ib-reveal" href={m.href} key={m.name} target="_blank" rel="noreferrer" style={{ transitionDelay: `${i * 70}ms` }}><div className="ib-ic" style={{ fontFamily: "var(--ib-mono)", fontSize: ".78rem" }}>{m.mono}</div><h3>{m.name}</h3><p>{m.role}</p></a>)}</div>
        </div>
      </section>

      <section className="ib-sec">
        <div className="ib-wrap"><div className="ib-head ib-reveal"><span className="ib-eyebrow"><IconQuestion /> FAQs</span><h2>IntelliByld, answered</h2></div><div className="ib-faq ib-reveal">{faqs.map((f, i) => <details key={i} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></div>
      </section>

      <section className="ib-cta"><div className="ib-cta-bg" /><div className="ib-wrap ib-cta-inner ib-reveal"><h2>Make the material supply chain <span className="cy">intelligent</span></h2><p>Bring procurement, delivery and embodied-carbon data together on a real construction project.</p><div className="ib-cta-actions"><a href="/pilot" className="ib-btn ib-btn-primary">Start a Pilot <span className="arw">→</span></a><a href="/contact-us" className="ib-btn ib-btn-ghost">Talk to IntelliByld</a></div></div></section>
    </main>
  );
}
