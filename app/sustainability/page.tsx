import type { Metadata } from "next";
import { Flowchart, FCNode, FCEdge } from "@/components/ib/flowchart";
import { IconCheck, IconLeaf, IconRadar, IconLayers, IconGear, IconQuestion } from "@/components/ib/icons";
import { JsonLd, faqPageJsonLd, webPageJsonLd } from "@/components/ib/json-ld";
import { B2Mark } from "@/components/ib/b2-mark";

const TITLE = "B₂ ESG";
const DESCRIPTION = "Connect BOQs, supplier data, EPDs, purchase orders and delivered quantities to build a living embodied-carbon ledger for construction projects.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/sustainability" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/sustainability" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const carbonNodes: FCNode[] = [
  { id: "boq", label: "BOQ / Material", sub: "planned quantity", x: 18, y: 40, w: 162, kind: "source" },
  { id: "epd", label: "Supplier / EPD", sub: "product factor", x: 18, y: 178, w: 162, kind: "source" },
  { id: "twin", label: "Supply Chain Digital Twin", sub: "supplier · PO · delivery · material", x: 255, y: 98, w: 280, h: 78, kind: "twin" },
  { id: "engine", label: "Carbon Engine", sub: "quantity × factor", x: 610, y: 40, w: 168, kind: "agent" },
  { id: "ledger", label: "Carbon Ledger", sub: "kgCO₂e by material", x: 610, y: 178, w: 180 },
  { id: "actual", label: "PO / Delivery", sub: "procured & actual", x: 255, y: 232, w: 280, kind: "physical" },
];
const carbonEdges: FCEdge[] = [
  { from: "boq", to: "twin" },
  { from: "epd", to: "twin" },
  { from: "actual", to: "twin", fromSide: "top", toSide: "bottom", dashed: true, arrow: false, pulses: 1 },
  { from: "twin", to: "engine" },
  { from: "twin", to: "ledger" },
  { from: "engine", to: "ledger", fromSide: "bottom", toSide: "top", pulses: 1 },
];

const points = [
  { icon: <IconRadar />, h: "From assumptions to actuals", p: "Start with design quantities, then progressively replace assumptions with awarded suppliers, product EPDs, committed quantities and delivery records." },
  { icon: <IconLayers />, h: "Material-level traceability", p: "Keep quantity, supplier, factor source and carbon result connected so each calculation has a clear data trail." },
  { icon: <IconLeaf />, h: "Carbon inside procurement", p: "Bring embodied carbon into supplier evaluation rather than calculating it only after commercial decisions are complete." },
];

const faqs = [
  { q: "How does Bricks & Brains calculate embodied carbon?", a: "Bricks & Brains links material quantities to product-specific EPDs or approved emission factors. The calculation can evolve from design or BOQ quantities to awarded, procured and delivered quantities as better project data becomes available." },
  { q: "Is this direct measurement of CO₂ emissions?", a: "No. Embodied carbon is calculated from material quantities and appropriate emissions data such as EPDs or approved factors. Bricks & Brains's advantage is keeping those calculations connected to the procurement and delivery records that represent what the project is actually buying and building." },
  { q: "Can it compare suppliers on carbon before award?", a: "Yes. Where comparable EPD or emissions data is available, Bricks & Brains can surface carbon alongside price, lead time and supplier risk to support procurement decisions before award." },
  { q: "Is this intended to replace an LCA tool?", a: "Not necessarily. Bricks & Brains is focused on the construction material supply chain and on making procurement and delivery data usable for embodied-carbon intelligence. It can complement broader LCA, certification and reporting workflows." },
];

export default function Sustainability() {
  return (
    <main>
      <JsonLd data={webPageJsonLd({ name: TITLE, description: DESCRIPTION, path: "/sustainability" })} />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <section className="ib-phero"><div className="ib-grid-bg" /><div className="ib-wrap" style={{ position: "relative" }}><span className="ib-eyebrow"><IconLeaf /> <B2Mark /> ESG</span><h1>Know the carbon of <span className="cy">what you procure.</span></h1><p>Bricks & Brains connects BOQs, supplier quotations, purchase orders, EPDs and delivery records to build a living embodied-carbon ledger for construction projects.</p><div className="ib-hero-actions" style={{ marginTop: "1.6rem" }}><a href="/pilot" className="ib-btn ib-btn-primary">Pilot <B2Mark /> ESG <span className="arw">→</span></a><a href="/contact-us" className="ib-btn ib-btn-ghost">Talk to us</a></div></div></section>

      <section className="ib-sec"><div className="ib-wrap"><div className="ib-head ib-reveal"><span className="ib-eyebrow"><IconGear /> How it works</span><h2>From material data to a living carbon ledger</h2><p>Carbon is calculated from quantities and emissions data, then updated as the project moves from design assumptions to real procurement and delivery records.</p></div><div className="ib-reveal"><Flowchart nodes={carbonNodes} edges={carbonEdges} height={300} title="Embodied Carbon Ledger" caption="The live supply-chain twin connects quantities, supplier/product factors and procurement actuals so the carbon ledger stays traceable as the project evolves." legend /></div></div></section>

      <section className="ib-sec alt"><div className="ib-wrap"><div className="ib-head ib-reveal"><span className="ib-eyebrow"><IconLayers /> Carbon states</span><h2>Track carbon from <span style={{ color: "var(--ib-cyan)" }}>design to as-built</span></h2><p>The key is not pretending early estimates are final. Bricks & Brains keeps the carbon view tied to the maturity of the supply-chain data.</p></div><div className="ib-cards c3"><div className="ib-card ib-reveal"><h3>01 · Baseline</h3><p>BOQ or design quantity × available EPD or approved generic factor.</p></div><div className="ib-card ib-reveal" style={{ transitionDelay: "80ms" }}><h3>02 · Procured</h3><p>Awarded supplier + product-specific factor + committed order quantity.</p></div><div className="ib-card ib-reveal" style={{ transitionDelay: "160ms" }}><h3>03 · Delivered / As-built</h3><p>Actual delivered quantities, substitutions and relevant logistics information.</p></div></div></div></section>

      <section className="ib-sec"><div className="ib-wrap"><div className="ib-split"><div className="ib-reveal"><span className="ib-eyebrow"><IconCheck /> Procurement decision support</span><h2>Put <span style={{ color: "var(--ib-cyan)" }}>carbon beside cost and lead time</span></h2><p>Where comparable data exists, Bricks & Brains can help procurement teams understand the trade-offs between commercial price, delivery performance and embodied carbon before an award is approved.</p><ul className="ib-checks"><li><IconCheck /><span><b>Price.</b> Commercial comparison from supplier bids.</span></li><li><IconCheck /><span><b>Lead time.</b> Delivery commitment and schedule exposure.</span></li><li><IconCheck /><span><b>Risk.</b> Supplier and logistics signals.</span></li><li><IconCheck /><span><b>Carbon.</b> Product EPD or approved factor × relevant quantity.</span></li></ul></div><div className="ib-cards c2 ib-reveal" style={{ transitionDelay: "100ms", alignContent: "start" }}>{points.map((p, i) => <div className="ib-card" key={i} style={i === 2 ? { gridColumn: "1 / -1" } : undefined}><div className="ib-ic">{p.icon}</div><h3>{p.h}</h3><p>{p.p}</p></div>)}</div></div></div></section>

      <section className="ib-sec alt"><div className="ib-wrap"><div className="ib-head ib-reveal"><span className="ib-eyebrow"><IconQuestion /> FAQs</span><h2>Embodied carbon, answered</h2></div><div className="ib-faq ib-reveal">{faqs.map((f, i) => <details key={i} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></div></section>

      <section className="ib-cta"><div className="ib-cta-bg" /><div className="ib-wrap ib-cta-inner ib-reveal"><h2>Connect carbon to the <span className="cy">materials you actually buy</span></h2><p>Start with one project or material package and build the carbon ledger from your existing procurement data.</p><div className="ib-cta-actions"><a href="/pilot" className="ib-btn ib-btn-primary">Start a Pilot <span className="arw">→</span></a><a href="/contact-us" className="ib-btn ib-btn-ghost">Contact us</a></div></div></section>
    </main>
  );
}
