import type { Metadata } from "next";
import { Flowchart, FCNode, FCEdge } from "@/components/ib/flowchart";
import { IconCheck, IconLeaf, IconRadar, IconLayers, IconGear, IconQuestion } from "@/components/ib/icons";

export const metadata: Metadata = {
  title: "Sustainability",
  description: "IntelliByld tracks embodied-carbon emissions from material deliveries in real time, based on actual delivery data rather than estimates supporting sustainability reporting and green-building requirements.",
};

const carbonNodes: FCNode[] = [
  { id: "del", label: "Material Delivery", sub: "actual quantity", x: 24, y: 56, w: 178, kind: "physical" },
  { id: "eng", label: "Carbon Engine", sub: "EC per item", x: 262, y: 56, w: 168, kind: "agent" },
  { id: "ledger", label: "Carbon Ledger", sub: "kgCO₂e logged", x: 492, y: 56, w: 170 },
  { id: "report", label: "BCA Report", sub: "auto-generated", x: 724, y: 56, w: 168 },
  { id: "epd", label: "EPD / EC3 Data", sub: "factors", x: 262, y: 214, w: 168, kind: "source" },
];
const carbonEdges: FCEdge[] = [
  { from: "del", to: "eng" },
  { from: "eng", to: "ledger" },
  { from: "ledger", to: "report" },
  { from: "epd", to: "eng", fromSide: "top", toSide: "bottom", dashed: true, arrow: false, pulses: 1 },
];

const points = [
  { icon: <IconRadar />, h: "Measured, not estimated", p: "Carbon is computed from the quantities that actually arrived on site not an early-stage approximation that drifts from reality." },
  { icon: <IconLayers />, h: "Per-material granularity", p: "Each movement is logged with its embodied-carbon weight, so you can see exactly where the footprint comes from." },
  { icon: <IconLeaf />, h: "Reporting on autopilot", p: "Reports generate automatically and align with Singapore's green-building requirements, no end-of-quarter spreadsheet scramble." },
];

const faqs = [
  { q: "How does IntelliByld calculate embodied carbon?", a: "Each material delivery is matched to its emission factor (from EPD / EC3-style datasets) and multiplied by the actual delivered quantity. Because it's driven by real delivery data rather than estimates, the ledger reflects what was truly built and updates as the project moves." },
  { q: "Does carbon tracking require extra work from my team?", a: "No. Carbon is a field on the same material movements the platform already tracks for logistics. Once deliveries flow through the twin, the carbon ledger and reports populate automatically." },
  { q: "Is this aligned with Singapore's requirements?", a: "Yes. The reporting is built to support Singapore's green-building requirements and BCA expectations, and the factor sources are configurable so the same engine works across jurisdictions." },
];

export default function Sustainability() {
  return (
    <main>
      <section className="ib-phero">
        <div className="ib-grid-bg" />
        <div className="ib-wrap" style={{ position: "relative" }}>
          <span className="ib-eyebrow">
            <IconLeaf /> Carbon Accountability
          </span>
          <h1>
            Embodied carbon, from <span className="cy">real</span> delivery data
          </h1>
          <p>
            IntelliByld tracks embodied-carbon emissions from material deliveries in real time, based on actual delivery data rather than estimates. Every movement is logged with its footprint, and reports generate automatically.
          </p>
        </div>
      </section>

      <section className="ib-sec">
        <div className="ib-wrap">
          <div className="ib-head ib-reveal">
            <span className="ib-eyebrow">
              <IconGear /> How it works
            </span>
            <h2>From delivery to ledger to report</h2>
            <p>Carbon rides along the same data the platform already moves for logistics so accountability is a by-product of running the project, not a separate project of its own.</p>
          </div>
          <div className="ib-reveal">
            <Flowchart nodes={carbonNodes} edges={carbonEdges} height={300} title="Carbon Ledger - live" caption="Each delivery is weighed against emission factors and logged automatically." legend />
          </div>
        </div>
      </section>

      <section className="ib-sec alt">
        <div className="ib-wrap">
          <div className="ib-split">
            <div className="ib-reveal">
              <span className="ib-eyebrow">
                <IconCheck /> Why actual-data carbon wins
              </span>
              <h2>The footprint you can defend</h2>
              <p>Estimate-based carbon falls apart under scrutiny because it never reflects substitutions, reorders, or what really showed up. A ledger built from delivery data holds up to auditors, to clients, and to your own targets.</p>
              <ul className="ib-checks">
                <li>
                  <IconCheck />
                  <span>
                    <b>Audit-ready.</b> Every kilogram of CO₂e traces back to a logged delivery.
                  </span>
                </li>
                <li>
                  <IconCheck />
                  <span>
                    <b>Live, not annual.</b> Watch the footprint accumulate as the project builds, with time to course-correct.
                  </span>
                </li>
                <li>
                  <IconCheck />
                  <span>
                    <b>One dataset.</b> The same delivery record drives logistics, schedule, and carbon with no double entry.
                  </span>
                </li>
              </ul>
            </div>
            <div className="ib-cards c2 ib-reveal" style={{ transitionDelay: "100ms", alignContent: "start" }}>
              {points.map((p, i) => (
                <div className="ib-card" key={i} style={i === 2 ? { gridColumn: "1 / -1" } : undefined}>
                  <div className="ib-ic">{p.icon}</div>
                  <h3>{p.h}</h3>
                  <p>{p.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ib-sec">
        <div className="ib-wrap">
          <div className="ib-head ib-reveal">
            <span className="ib-eyebrow">
              <IconQuestion /> FAQs
            </span>
            <h2>Carbon tracking, answered</h2>
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
            Make carbon a <span className="cy">measurement</span>, not a guess
          </h2>
          <p>See an actual-data carbon ledger build from your own deliveries during a pilot.</p>
          <div className="ib-cta-actions">
            <a href="/contact-us" className="ib-btn ib-btn-primary">
              Join Pilot <span className="arw">→</span>
            </a>
            <a href="/use-cases/embodied-carbon" className="ib-btn ib-btn-ghost">
              Read the use case
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
