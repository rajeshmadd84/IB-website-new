import type { Metadata } from "next";
import { Flowchart, FCNode, FCEdge } from "@/components/ib/flowchart";
import { IconBlocks, IconTruck, IconLeaf, IconCheck, IconShield, IconBot, IconWorkflow, IconQuestion } from "@/components/ib/icons";
import { JsonLd, faqPageJsonLd, webPageJsonLd } from "@/components/ib/json-ld";
import { B2Mark, formatB2 } from "@/components/ib/b2-mark";

const TITLE = "B₂ Agents";
const DESCRIPTION = "Bricks & Brains uses specialised AI agents to draft, analyse, monitor and coordinate construction procurement, material logistics and embodied-carbon workflows while keeping commercial authority with project teams.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/b2-agents" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/b2-agents" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const nodes: FCNode[] = [
  { id: "req", label: "Material Need", sub: "BOQ · specs", x: 20, y: 46, w: 150, kind: "source" },
  { id: "ai", label: "AI Agents", sub: "draft · analyse · monitor", x: 220, y: 46, w: 190, kind: "agent" },
  { id: "approve", label: "Human Approval", sub: "commercial authority", x: 460, y: 46, w: 190, kind: "twin" },
  { id: "execute", label: "Execution", sub: "supplier · logistics", x: 700, y: 46, w: 170, kind: "physical" },
  { id: "twin", label: "Construction Supply Chain Digital Twin", sub: "knowledge graph · live operational state", x: 220, y: 190, w: 650, h: 62, kind: "twin" },
];
const edges: FCEdge[] = [
  { from: "req", to: "ai" }, { from: "ai", to: "approve" }, { from: "approve", to: "execute" },
  { from: "ai", to: "twin", fromSide: "bottom", toSide: "top", dashed: true, arrow: false, pulses: 1 },
  { from: "execute", to: "twin", fromSide: "bottom", toSide: "top", dashed: true, arrow: false, pulses: 1 },
];

const agentTeams = [
  { number: "01", icon: <IconBlocks />, h: "Procurement Agents", p: "Draft RFQs, chase supplier responses, structure quotations, compare bids and prepare award recommendations.", href: "/agents/procurement", link: "Explore procurement agents" },
  { number: "02", icon: <IconTruck />, h: "Logistics Agents", p: "Monitor supplier commitments and delivery milestones, surface disruption risk and coordinate exceptions around site needs.", href: "/agents/logistics", link: "Explore logistics agents" },
  { number: "03", icon: <IconLeaf />, h: "B₂ Carbon", p: "Match materials to EPDs or approved factors, calculate carbon and bring lower-carbon alternatives into procurement decisions.", href: "/agents/scope3", link: "Explore carbon agents" },
];

const faqs = [
  { q: "What are B₂ Agents?", a: "It means specialised AI agents can carry out multi-step work such as gathering information, drafting communications, comparing supplier data, monitoring status and preparing recommendations rather than only answering questions." },
  { q: "Does the AI autonomously award suppliers or issue purchase orders?", a: "No. Bricks & Brains can automate analysis and coordination around those decisions, but commercial, contractual and regulatory actions remain behind human approval gates." },
  { q: "Why use specialised agents instead of one chatbot?", a: "Construction supply-chain workflows contain different responsibilities, data sources and approval rules. Specialised agents make those responsibilities explicit while sharing a common project state through the Bricks & Brains Construction Supply Chain Digital Twin, backed by a knowledge graph and construction-trained SLM." },
  { q: "Can we start with only one workflow?", a: "Yes. A pilot can begin with a focused workflow or material package, then expand into logistics or embodied-carbon intelligence as useful data becomes available." },
];

export default function AgenticAI() {
  return (
    <main>
      <JsonLd data={webPageJsonLd({ name: TITLE, description: DESCRIPTION, path: "/b2-agents" })} />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <section className="ib-phero"><div className="ib-grid-bg" /><div className="ib-wrap" style={{ position: "relative" }}><span className="ib-eyebrow"><IconBot /> <B2Mark /> Agents</span><h1>Agents do the work. <span className="cy">Humans hold the authority.</span></h1><p>Bricks & Brains uses specialised AI agents to handle repetitive procurement, logistics and carbon work — drafting, analysing, chasing, monitoring and recommending — while your team keeps control of the decisions that matter.</p></div></section>

      <section className="ib-sec"><div className="ib-wrap"><div className="ib-head ib-reveal"><span className="ib-eyebrow"><IconWorkflow /> How it works</span><h2>AI execution with <span style={{ color: "var(--ib-cyan)" }}>clear approval gates</span></h2><p>The goal is not autonomy for its own sake. The goal is faster, better-informed construction supply-chain decisions with a clear audit trail.</p></div><div className="ib-reveal"><Flowchart nodes={nodes} edges={edges} height={280} title="Agentic workflow" caption="Agents act on the live Construction Supply Chain Digital Twin; humans approve decisions with commercial or regulatory consequence." legend /></div></div></section>

      <section className="ib-sec alt"><div className="ib-wrap"><div className="ib-head ib-reveal"><span className="ib-eyebrow"><IconBot /> The digital workforce</span><h2>Meet the specialised <span style={{ color: "var(--ib-cyan)" }}>agent teams</span></h2><p>Each team reads and writes to the same material-centric project state, so procurement, delivery and carbon do not become separate data silos.</p></div><div className="ib-cards c3">{agentTeams.map((team, i) => <a className="ib-card ib-reveal" href={team.href} key={team.h} style={{ transitionDelay: `${i * 80}ms` }}><div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><div className="ib-ic">{team.icon}</div><span className="knum">{team.number}</span></div><h3>{formatB2(team.h)}</h3><p>{team.p}</p><span style={{ marginTop: "1.25rem", color: "var(--ib-cyan)", fontSize: ".85rem", fontWeight: 600 }}>{team.link} →</span></a>)}</div></div></section>

      <section className="ib-sec"><div className="ib-wrap"><div className="ib-head ib-reveal"><span className="ib-eyebrow"><IconShield /> Human authority</span><h2>Automate the busywork, <span style={{ color: "var(--ib-cyan)" }}>not accountability</span></h2><p>Bricks & Brains can move quickly around a decision without silently taking ownership of the decision itself.</p></div><div className="ib-gates ib-reveal"><div className="ib-gate"><IconCheck width={18} height={18} /><span>Supplier award and purchase-order issuance remain human decisions.</span></div><div className="ib-gate"><IconCheck width={18} height={18} /><span>Material substitutions and high-impact mitigation can be routed for approval.</span></div><div className="ib-gate"><IconCheck width={18} height={18} /><span>Carbon factors and exceptions can be reviewed where confidence or data quality is insufficient.</span></div><div className="ib-gate"><IconCheck width={18} height={18} /><span>Formal disclosures and commitments remain subject to the organisation's sign-off process.</span></div></div></div></section>

      <section className="ib-sec alt"><div className="ib-wrap"><div className="ib-head ib-reveal"><span className="ib-eyebrow"><IconQuestion /> FAQs</span><h2><B2Mark /> Agents, answered</h2></div><div className="ib-faq ib-reveal">{faqs.map((f, i) => <details key={i} open={i === 0}><summary>{formatB2(f.q)}</summary><p>{formatB2(f.a)}</p></details>)}</div></div></section>

      <section className="ib-cta"><div className="ib-cta-bg" /><div className="ib-wrap ib-cta-inner ib-reveal"><h2>Put AI to work on a <span className="cy">real material workflow</span></h2><p>Start with one project or package and prove the workflow using your own procurement and delivery data.</p><div className="ib-cta-actions"><a href="/contact-us" className="ib-btn ib-btn-ghost">Talk to Bricks &amp; Brains</a></div></div></section>
    </main>
  );
}
