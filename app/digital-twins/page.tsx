import type { Metadata } from "next";
import { Flowchart, FCNode, FCEdge } from "@/components/ib/flowchart";
import { IconCheck, IconRadar, IconLayers, IconClock, IconLeaf } from "@/components/ib/icons";

export const metadata: Metadata = {
  title: "Digital Twins",
  description: "A living, real-time replica of your construction supply chain. IntelliByld links every material movement to your master schedule, closing the Integration Trap so the digital model mirrors physical site reality.",
};

const twinNodes: FCNode[] = [
  { id: "phys", label: "Physical Site", sub: "deliveries · weather · crew", x: 360, y: 22, w: 280, h: 64, kind: "physical" },
  { id: "twin", label: "Digital Twin", sub: "live project state", x: 360, y: 150, w: 280, h: 72, kind: "twin" },
  { id: "sch", label: "Schedule", sub: "critical path", x: 120, y: 280, w: 170, h: 56 },
  { id: "rfq", label: "Auto RFQ", sub: "re-source", x: 415, y: 280, w: 170, h: 56, kind: "agent" },
  { id: "carb", label: "Carbon Ledger", sub: "kgCO₂e", x: 710, y: 280, w: 170, h: 56 },
];
const twinEdges: FCEdge[] = [
  { from: "phys", to: "twin", fromSide: "bottom", toSide: "top", pulses: 2 },
  { from: "twin", to: "sch", fromSide: "bottom", toSide: "top", pulses: 1 },
  { from: "twin", to: "rfq", fromSide: "bottom", toSide: "top", pulses: 2 },
  { from: "twin", to: "carb", fromSide: "bottom", toSide: "top", pulses: 1 },
];

const tracks = [
  { icon: <IconRadar />, h: "Every movement, live", p: "Factory dispatch, GPS in transit, gate arrival — each material's journey is on the map in real time." },
  { icon: <IconClock />, h: "Tied to the schedule", p: "Every delivery is linked to the schedule task it unblocks, so a slip shows up as a critical-path risk, not a buried email." },
  { icon: <IconLayers />, h: "Mirrors the BIM model", p: "The twin speaks IFC. What's modelled, ordered, shipped, and installed stays reconciled in one place." },
  { icon: <IconLeaf />, h: "Carbon as a first-class field", p: "Each movement carries its embodied-carbon weight, so sustainability isn't a separate spreadsheet." },
];

const faqs = [
  { q: "What is the \"Integration Trap\"?", a: "It's the gap that opens when your BIM model, ERP, and site reality drift apart — the model says one thing, the PO system another, and the foreman a third. The twin closes that gap by linking live material movements directly to the master schedule, so one picture stays true." },
  { q: "How is this different from a BIM model?", a: "A BIM model describes what should be built. The Digital Twin describes what is actually happening to the materials that build it — in real time — and links that back to the schedule. It's the live operational layer on top of the design model." },
  { q: "Where does the live data come from?", a: "Shipment tracking, supplier updates, and site signals flow in through the channels already in use. Pilots start from your BOMs; no rip-and-replace integration is needed to stand up a working twin." },
];

export default function DigitalTwins() {
  return (
    <main>
      <section className="ib-phero">
        <div className="ib-grid-bg" />
        <div className="ib-wrap" style={{ position: "relative" }}>
          <span className="ib-eyebrow">Digital Twins</span>
          <h1>
            A living twin of your <span className="cy">project</span> supply chain
          </h1>
          <p>
            IntelliByld's Digital Twin is a living, real-time replica of your construction supply chain. It links every material movement to your master schedule — closing the Integration Trap so your digital model mirrors physical site reality.
          </p>
        </div>
      </section>

      <section className="ib-sec">
        <div className="ib-wrap">
          <div className="ib-split">
            <div className="ib-reveal">
              <span className="ib-eyebrow">Physical ↔ digital</span>
              <h2>One model, continuously reconciled</h2>
              <p>The site feeds the twin; the twin drives the next decision. Deliveries, weather, and crew status stream into a single live state that schedule, procurement, and carbon all read from.</p>
              <ul className="ib-checks">
                <li>
                  <IconCheck />
                  <span>
                    <b>No more reconciliation meetings.</b> The model and the site agree because they share one source of truth.
                  </span>
                </li>
                <li>
                  <IconCheck />
                  <span>
                    <b>Risks surface early.</b> A drift between plan and reality becomes a flagged threat, not a week-three surprise.
                  </span>
                </li>
                <li>
                  <IconCheck />
                  <span>
                    <b>Decisions write back.</b> Every re-source or schedule change updates the twin instantly.
                  </span>
                </li>
              </ul>
            </div>
            <div className="ib-reveal" style={{ transitionDelay: "100ms" }}>
              <Flowchart nodes={twinNodes} edges={twinEdges} height={350} title="Twin Mirror — live" caption="Site reality flows up; schedule, sourcing, and carbon flow down." legend />
            </div>
          </div>
        </div>
      </section>

      <section className="ib-sec alt">
        <div className="ib-wrap">
          <div className="ib-head center ib-reveal">
            <span className="ib-eyebrow">What the twin tracks</span>
            <h2>Four live layers, one picture</h2>
          </div>
          <div className="ib-cards c4">
            {tracks.map((t, i) => (
              <div className="ib-card ib-reveal" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="ib-ic">{t.icon}</div>
                <h3>{t.h}</h3>
                <p>{t.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ib-sec">
        <div className="ib-wrap">
          <div className="ib-head ib-reveal">
            <span className="ib-eyebrow">FAQs</span>
            <h2>Digital Twins, answered</h2>
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
            See your project <span className="cy">mirrored</span> in real time
          </h2>
          <p>Connect one site and watch the twin come alive from your own data within three weeks.</p>
          <div className="ib-cta-actions">
            <a href="/pilot" className="ib-btn ib-btn-primary">
              Join Pilot <span className="arw">→</span>
            </a>
            <a href="/agentic-ai" className="ib-btn ib-btn-ghost">
              See the Agents
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
