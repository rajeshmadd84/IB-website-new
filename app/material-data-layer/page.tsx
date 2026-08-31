import type { Metadata } from "next";
import { Flowchart, FCNode, FCEdge } from "@/components/ib/flowchart";
import { IconCheck, IconLayers, IconLink, IconRadar, IconLeaf, IconQuestion } from "@/components/ib/icons";
import { JsonLd, faqPageJsonLd, webPageJsonLd } from "@/components/ib/json-ld";
import { B2Mark } from "@/components/ib/b2-mark";

const TITLE = "Connected Material Data Layer";
const DESCRIPTION = "Bricks & Brains connects BOQs, suppliers, RFQs, purchase orders, shipments, delivery records and embodied-carbon data into one shared operational material layer.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/material-data-layer" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/material-data-layer" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const nodes: FCNode[] = [
  { id: "bim", label: "BIM / BOQ", sub: "design + quantities", x: 20, y: 35, w: 160, kind: "source" },
  { id: "erp", label: "ERP / PM", sub: "commercial data", x: 20, y: 145, w: 160, kind: "source" },
  { id: "supplier", label: "Suppliers", sub: "quotes · status · EPDs", x: 20, y: 255, w: 160, kind: "source" },
  { id: "layer", label: "Construction Supply Chain Digital Twin", sub: "knowledge graph · live material state", x: 250, y: 125, w: 440, h: 76, kind: "twin" },
  { id: "ai", label: "B₂ Agents", sub: "analyse · coordinate · recommend", x: 775, y: 60, w: 190, kind: "agent" },
  { id: "out", label: "Cost · Schedule · Carbon", sub: "project decisions", x: 775, y: 225, w: 190, kind: "physical" },
];
const edges: FCEdge[] = [
  { from: "bim", to: "layer" }, { from: "erp", to: "layer" }, { from: "supplier", to: "layer" },
  { from: "layer", to: "ai" }, { from: "layer", to: "out" },
  { from: "ai", to: "out", fromSide: "bottom", toSide: "top" },
];

const faqs = [
  { q: "Is this a BIM digital twin?", a: "No. Bricks & Brains does not try to recreate the building as a 3D or BIM digital twin. It connects the operational material records around procurement, suppliers, orders, deliveries and embodied carbon." },
  { q: "How does Bricks & Brains work with BIM?", a: "BIM can provide design intent, specifications and quantities. Bricks & Brains then connects those material requirements to procurement, supplier, delivery and carbon data. BIM remains the design environment; Bricks & Brains focuses on the material supply chain." },
  { q: "Do we need a major systems integration first?", a: "No. A pilot can start from BOQs, spreadsheets, RFQs, purchase orders and supplier documents, then add ERP, BIM or project-system integrations where they create value." },
];

export default function MaterialDataLayer() {
  return (
    <main>
      <JsonLd data={webPageJsonLd({ name: TITLE, description: DESCRIPTION, path: "/material-data-layer" })} />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <section className="ib-phero"><div className="ib-grid-bg" /><div className="ib-wrap" style={{ position: "relative" }}>
        <span className="ib-eyebrow"><IconLayers /> Connected Material Data Layer</span>
        <h1>One operational record for every <span className="cy">construction material.</span></h1>
        <p>Bricks & Brains connects material requirements, suppliers, RFQs, purchase orders, shipments, delivery records, EPDs and carbon data without positioning itself as another BIM or 3D digital-twin platform.</p>
      </div></section>

      <section className="ib-sec"><div className="ib-wrap"><div className="ib-head ib-reveal">
        <span className="ib-eyebrow"><IconLink /> How it fits</span>
        <h2>BIM tells you what to build. <span style={{ color: "var(--ib-cyan)" }}>Bricks & Brains follows the materials.</span></h2>
        <p>BIM and project systems remain where they are. Bricks & Brains connects the operational supply-chain information between design requirements, procurement activity, suppliers and site delivery.</p>
      </div><div className="ib-reveal"><Flowchart nodes={nodes} edges={edges} height={340} title="Connected material information" caption="BIM and business systems feed the Construction Supply Chain Digital Twin — a live operational model of materials, not a 3D building model." legend /></div></div></section>

      <section className="ib-sec alt"><div className="ib-wrap"><div className="ib-split"><div className="ib-reveal">
        <span className="ib-eyebrow"><IconRadar /> Material-centric</span>
        <h2>From requirement to <span style={{ color: "var(--ib-cyan)" }}>site and carbon</span></h2>
        <p>Each material package carries the information needed to understand what is required, who is supplying it, where it is, what it costs and what embodied carbon is attached to it.</p>
      </div><ul className="ib-checks ib-reveal" style={{ transitionDelay: "100ms" }}>
        <li><IconCheck /><span><b>Requirement.</b> BOQ quantity, specification and package.</span></li>
        <li><IconCheck /><span><b>Commercial.</b> RFQs, quotations, supplier comparison, award and PO.</span></li>
        <li><IconCheck /><span><b>Physical.</b> Supplier status, shipment milestones, ETA and site readiness.</span></li>
        <li><IconLeaf /><span><b>Carbon.</b> EPDs, emission factors, logistics and material-level CO₂e.</span></li>
      </ul></div></div></section>

      <section className="ib-sec"><div className="ib-wrap"><div className="ib-head ib-reveal"><span className="ib-eyebrow"><IconQuestion /> FAQs</span><h2>How the data layer fits with BIM</h2></div><div className="ib-faq ib-reveal">{faqs.map((f, i) => <details key={i} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></div></section>

      <section className="ib-cta"><div className="ib-cta-bg" /><div className="ib-wrap ib-cta-inner ib-reveal"><h2>Connect one <span className="cy">material workflow</span></h2><p>Start with the BOQs, procurement records and supplier information you already use on a Singapore project.</p><div className="ib-cta-actions"><a href="/b2-agents" className="ib-btn ib-btn-ghost">See <B2Mark /> Agents</a></div></div></section>
    </main>
  );
}
