import type { FCNode, FCEdge } from "@/components/ib/flowchart";

export interface DetailFlow {
  title: string;
  titleCy?: string; // substring of title to accent
  caption: string;
  height: number;
  legend?: boolean;
  nodes: FCNode[];
  edges: FCEdge[];
}

export interface AgentSpec {
  ref: string; // e.g. "00", "01"
  name: string;
  role: string;
  duties: string[];
  tag?: string; // mono tag, e.g. "Orchestrator" / "Phase 1"
}

export interface WorkflowStep {
  n: string;
  title: string;
  desc: string;
  gate?: boolean; // human approval gate
}

export interface Detail {
  slug: string;
  group: "use-cases" | "agents";
  eyebrow: string;
  kicker: string; // mono ref e.g. USE CASE / AGENT-01
  title: string;
  cy: string; // substring of title to accent
  lead: string;
  intro2?: string; // optional second intro paragraph (team pages)
  metaDescription: string;
  flow: DetailFlow;
  // use-case layout (split with checks):
  splitHead?: string;
  splitCy?: string; // substring of splitHead to accent
  splitBody?: string;
  checks?: { b: string; rest: string }[];
  // team layout extras:
  agentsHead?: string;
  agentsCy?: string; // substring of agentsHead to accent
  agents?: AgentSpec[];
  workflowHead?: string;
  workflow?: WorkflowStep[];
  gatesHead?: string;
  gatesNote?: string;
  gates?: string[];
  // shared:
  outcomesHead: string;
  outcomes: { h: string; p: string }[];
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaCy: string;
}

/* ------------------------------------------------------------ USE CASES */

const deliveryRisk: Detail = {
  slug: "critical-material-delay",
  group: "use-cases",
  eyebrow: "Live Use Case",
  kicker: "USE CASE · 01",
  title: "A critical material delivery starts slipping",
  cy: "starts slipping",
  lead: "A structural-steel package is approaching its required-on-site date when the supplier moves a production milestone. IntelliByld connects that change to the order, shipment and programme dependency so the team sees the risk before the material misses site.",
  metaDescription: "See how IntelliByld detects a critical material delay, connects it to project dependencies, evaluates recovery options and routes the decision to the project team.",
  flow: {
    title: "Supplier delay - live scenario",
    caption: "Something changes → the supply-chain twin updates → agents assess impact → the team gets an actionable decision.",
    height: 318,
    legend: true,
    nodes: [
      { id: "sig", label: "Supplier Update", sub: "milestone moved", x: 24, y: 42, w: 168, kind: "physical" },
      { id: "twin", label: "Supply Chain Digital Twin", sub: "PO · shipment · programme", x: 252, y: 42, w: 224, h: 62, kind: "twin" },
      { id: "risk", label: "Risk Analysis", sub: "dependency found", x: 536, y: 42, w: 168, kind: "agent" },
      { id: "opts", label: "Recovery Options", sub: "expedite · alternate · resequence", x: 764, y: 42, w: 212, kind: "agent" },
      { id: "kg", label: "Knowledge Graph", sub: "material ↔ activity ↔ supplier", x: 252, y: 196, w: 224, kind: "source" },
      { id: "human", label: "Project Team", sub: "approve response", x: 650, y: 206, w: 188, h: 58, kind: "physical" },
    ],
    edges: [
      { from: "sig", to: "twin", pulses: 1 },
      { from: "twin", to: "risk", pulses: 2 },
      { from: "risk", to: "opts", pulses: 2 },
      { from: "kg", to: "twin", fromSide: "top", toSide: "bottom", dashed: true, arrow: false, pulses: 1 },
      { from: "opts", to: "human", fromSide: "bottom", toSide: "top", pulses: 1 },
    ],
  },
  splitHead: "From a changed ETA to a decision that protects the programme",
  splitCy: "protects the programme",
  splitBody: "The value is not another red status. IntelliByld explains what changed, what project activity it touches and which response options are available, while the project team keeps authority over commercial or programme-changing actions.",
  checks: [
    { b: "Detect the signal.", rest: "Supplier updates, missed milestones and shipment events update the operational state." },
    { b: "Connect the impact.", rest: "The Knowledge Graph links the affected material to the PO, package, required-on-site date and programme activity." },
    { b: "Surface an action.", rest: "Agents can evaluate expediting, alternative supply and resequencing options before routing a recommendation for approval." },
  ],
  outcomesHead: "What the team sees",
  outcomes: [
    { h: "The affected activity", p: "The material risk is connected to the project dependency instead of sitting as an isolated logistics update." },
    { h: "The available responses", p: "Recovery options are evaluated in context rather than assembled through a manual scramble." },
    { h: "The decision required", p: "The right project or commercial owner receives a clear action with the supporting context." },
  ],
  faqs: [
    { q: "Does IntelliByld automatically change the supplier or programme?", a: "Not by default. Agents can monitor, analyse, prepare options and automate low-risk coordination, while supplier changes, commercial awards and material programme decisions can remain behind human approval gates." },
    { q: "What data does this use case need?", a: "A pilot can start with the relevant material package, supplier commitment, purchase-order or procurement information, required-on-site dates and available programme dependencies. Deeper integrations can be added later." },
  ],
  ctaTitle: "See a material risk before it reaches site",
  ctaCy: "before it reaches site",
};

const quotationMismatch: Detail = {
  slug: "quotation-mismatch",
  group: "use-cases",
  eyebrow: "Live Use Case",
  kicker: "USE CASE · 02",
  title: "A supplier quotation does not match the RFQ",
  cy: "does not match",
  lead: "Five quotations arrive for a material package. One excludes required items, another uses different units and two contain commercial assumptions buried in attachments. IntelliByld turns the responses into one comparable view before evaluation begins.",
  metaDescription: "See how IntelliByld reads supplier quotations, maps them against BOQ and RFQ requirements, flags exclusions and prepares a comparable bid view for procurement teams.",
  flow: {
    title: "Quotation reconciliation - live scenario",
    caption: "Supplier documents are interpreted, mapped to requirements and converted into a comparable procurement decision.",
    height: 318,
    legend: true,
    nodes: [
      { id: "quotes", label: "Supplier Quotes", sub: "PDF · XLSX · email", x: 24, y: 42, w: 170, kind: "physical" },
      { id: "slm", label: "Construction-trained SLM", sub: "reads scope · terms · exclusions", x: 246, y: 42, w: 218, kind: "agent" },
      { id: "kg", label: "Knowledge Graph", sub: "maps quote ↔ RFQ ↔ BOQ", x: 516, y: 42, w: 208, kind: "twin" },
      { id: "compare", label: "Bid Comparison", sub: "normalised view", x: 776, y: 42, w: 190, kind: "agent" },
      { id: "exceptions", label: "Exceptions", sub: "missing · excluded · inconsistent", x: 286, y: 202, w: 214 },
      { id: "clarify", label: "Clarifications", sub: "drafted for supplier", x: 616, y: 202, w: 198, kind: "physical" },
    ],
    edges: [
      { from: "quotes", to: "slm", pulses: 1 },
      { from: "slm", to: "kg", pulses: 2 },
      { from: "kg", to: "compare", pulses: 2 },
      { from: "slm", to: "exceptions", fromSide: "bottom", toSide: "top", pulses: 1 },
      { from: "exceptions", to: "clarify", pulses: 1 },
      { from: "clarify", to: "compare", fromSide: "top", toSide: "bottom", dashed: true, pulses: 1 },
    ],
  },
  splitHead: "From five different quotations to one decision-ready comparison",
  splitCy: "decision-ready comparison",
  splitBody: "Procurement teams should not spend their time reconstructing what suppliers meant. IntelliByld uses construction context to extract commercial and technical details, relate them back to the requirement and make exceptions visible before a recommendation is prepared.",
  checks: [
    { b: "Read construction documents.", rest: "The construction-trained SLM interprets quotation text, schedules, exclusions, units and commercial terms." },
    { b: "Map back to the requirement.", rest: "The Knowledge Graph connects quoted line items to the relevant BOQ, specification and RFQ scope." },
    { b: "Keep procurement in control.", rest: "Agents can draft clarifications and comparisons; supplier selection and award remain a procurement decision." },
  ],
  outcomesHead: "What procurement receives",
  outcomes: [
    { h: "Comparable scope", p: "Different supplier formats are translated into a common view tied to the original requirement." },
    { h: "Visible exceptions", p: "Missing items, exclusions and inconsistent assumptions are surfaced before they distort the evaluation." },
    { h: "Faster clarification", p: "Supplier questions can be prepared from the identified gaps instead of manually rebuilt line by line." },
  ],
  faqs: [
    { q: "Can IntelliByld understand supplier PDFs and spreadsheets?", a: "The architecture is designed to interpret common procurement documents and connect extracted information to structured project records. Document quality and project-specific terminology can still require review during implementation." },
    { q: "Does the AI choose the winning bidder?", a: "It can prepare a ranked or normalised comparison using agreed criteria, but the commercial award can remain a human approval decision with a recorded audit trail." },
  ],
  ctaTitle: "Turn supplier responses into a comparable decision",
  ctaCy: "comparable decision",
};

const lowerCarbonOption: Detail = {
  slug: "lower-carbon-procurement",
  group: "use-cases",
  eyebrow: "Live Use Case",
  kicker: "USE CASE · 03",
  title: "A lower-carbon material option appears during procurement",
  cy: "lower-carbon material option",
  lead: "Two compliant suppliers can meet the specification, but they differ on price, lead time, product carbon data and transport. IntelliByld brings those dimensions into the same procurement view before the award is approved.",
  metaDescription: "See how IntelliByld combines supplier quotations, EPDs, material quantities and logistics data so construction teams can compare cost, schedule and embodied carbon during procurement.",
  flow: {
    title: "Cost + schedule + carbon - live scenario",
    caption: "Carbon is evaluated at the point of procurement, using the same connected material record as price and delivery.",
    height: 318,
    legend: true,
    nodes: [
      { id: "a", label: "Supplier A", sub: "price · lead time · EPD", x: 24, y: 40, w: 180, kind: "physical" },
      { id: "b", label: "Supplier B", sub: "price · lead time · EPD", x: 24, y: 174, w: 180, kind: "physical" },
      { id: "twin", label: "Supply Chain Digital Twin", sub: "quantity · supplier · route · carbon", x: 300, y: 100, w: 240, h: 76, kind: "twin" },
      { id: "carbon", label: "Carbon Agent", sub: "A1-A4 comparison", x: 626, y: 52, w: 178, kind: "agent" },
      { id: "decision", label: "Award View", sub: "cost · schedule · carbon", x: 626, y: 188, w: 178, kind: "agent" },
      { id: "human", label: "Procurement Team", sub: "approve award", x: 844, y: 120, w: 150, h: 58, kind: "physical" },
    ],
    edges: [
      { from: "a", to: "twin", pulses: 1 },
      { from: "b", to: "twin", pulses: 1 },
      { from: "twin", to: "carbon", pulses: 2 },
      { from: "twin", to: "decision", pulses: 2 },
      { from: "carbon", to: "decision", fromSide: "bottom", toSide: "top", dashed: true, pulses: 1 },
      { from: "decision", to: "human", pulses: 1 },
    ],
  },
  splitHead: "Move embodied carbon into the award decision",
  splitCy: "award decision",
  splitBody: "Instead of calculating carbon after procurement is complete, IntelliByld connects product-specific carbon information to the supplier and material records already being evaluated. That lets teams see trade-offs while there is still time to choose differently.",
  checks: [
    { b: "Use the same quantities.", rest: "Carbon calculations are tied to the material quantities and suppliers involved in procurement." },
    { b: "Prefer product-specific data.", rest: "Where available, EPDs can replace generic assumptions and remain linked to the selected product." },
    { b: "Compare the whole decision.", rest: "Price, lead time, supplier context and embodied carbon can be reviewed together rather than in separate processes." },
  ],
  outcomesHead: "What changes at award",
  outcomes: [
    { h: "Carbon before commitment", p: "Teams can understand embodied-carbon implications while supplier choice is still open." },
    { h: "Traceable assumptions", p: "The quantity, factor or EPD and supplier behind the carbon figure stay connected to the material record." },
    { h: "Visible trade-offs", p: "Procurement can discuss cost, schedule and carbon from one decision context rather than separate spreadsheets." },
  ],
  faqs: [
    { q: "Does IntelliByld claim to directly measure emissions?", a: "No. Embodied carbon is calculated from material quantities combined with product-specific EPDs or approved emission factors, with logistics information incorporated where appropriate. The value is the connection to actual procurement and delivery records." },
    { q: "What happens when a supplier has no EPD?", a: "The workflow can use an approved fallback factor and record the data-quality level, while the supplier or sustainability team is prompted to improve the record when better product-specific data becomes available." },
  ],
  ctaTitle: "Put carbon into the procurement decision",
  ctaCy: "procurement decision",
};

const materialSubstitution: Detail = {
  slug: "material-substitution",
  group: "use-cases",
  eyebrow: "Live Use Case",
  kicker: "USE CASE · 04",
  title: "A supplier proposes a material substitution after award",
  cy: "material substitution",
  lead: "An awarded product becomes unavailable and the supplier proposes an alternative. IntelliByld connects the proposed substitute to the specification, order, delivery milestone and embodied-carbon record so the team can see the downstream implications before approving the change.",
  metaDescription: "See how IntelliByld evaluates a proposed construction material substitution across specification, procurement, delivery and embodied carbon before human approval.",
  flow: {
    title: "Material substitution - live scenario",
    caption: "One proposed change is propagated across the connected supply-chain state before approval.",
    height: 330,
    legend: true,
    nodes: [
      { id: "sub", label: "Substitution Request", sub: "supplier proposes alternative", x: 24, y: 46, w: 196, kind: "physical" },
      { id: "kg", label: "Knowledge Graph", sub: "spec ↔ PO ↔ schedule ↔ EPD", x: 274, y: 46, w: 220, kind: "twin" },
      { id: "impact", label: "Impact Analysis", sub: "commercial · programme · carbon", x: 548, y: 46, w: 218, kind: "agent" },
      { id: "gate", label: "Human Approval", sub: "accept · reject · clarify", x: 820, y: 46, w: 172, kind: "physical" },
      { id: "spec", label: "Specification", sub: "compliance context", x: 274, y: 214, w: 180, kind: "source" },
      { id: "state", label: "Updated Twin", sub: "approved state propagates", x: 630, y: 214, w: 194, kind: "twin" },
    ],
    edges: [
      { from: "sub", to: "kg", pulses: 1 },
      { from: "kg", to: "impact", pulses: 2 },
      { from: "impact", to: "gate", pulses: 1 },
      { from: "spec", to: "kg", fromSide: "top", toSide: "bottom", dashed: true, arrow: false, pulses: 1 },
      { from: "gate", to: "state", fromSide: "bottom", toSide: "top", pulses: 1 },
    ],
  },
  splitHead: "Understand the ripple effect before approving the change",
  splitCy: "ripple effect",
  splitBody: "A substitution is not just a document revision. It can change technical compliance, price, delivery timing and carbon. IntelliByld keeps those relationships connected so a proposed alternative is assessed against the project context before the new state is accepted.",
  checks: [
    { b: "Connect affected records.", rest: "The proposed product is related to specification, supplier, PO, delivery and carbon information." },
    { b: "Assess multiple impacts.", rest: "Agents can identify commercial, schedule and embodied-carbon differences rather than reviewing each in isolation." },
    { b: "Propagate only after approval.", rest: "Once the authorised team accepts the substitution, the connected material state can update across downstream workflows." },
  ],
  outcomesHead: "What the approver receives",
  outcomes: [
    { h: "Technical context", p: "The substitute is assessed against the connected specification and material requirement rather than treated as a standalone email." },
    { h: "Downstream impact", p: "Delivery, commercial and embodied-carbon consequences are visible before approval." },
    { h: "Controlled state change", p: "The operational record changes only after the appropriate human decision, preserving traceability." },
  ],
  faqs: [
    { q: "Does IntelliByld approve technical substitutions?", a: "No. It can organise the information, identify affected records and prepare impact analysis. Technical or contractual approval remains with the authorised project stakeholders." },
    { q: "Why is the Knowledge Graph important here?", a: "Because the substitute can touch several records at once. The graph preserves the relationships between material, specification, supplier, order, schedule and carbon data so the system can identify the relevant downstream context." },
  ],
  ctaTitle: "See every consequence before approving a substitution",
  ctaCy: "before approving a substitution",
};

/* ------------------------------------------------------------ AGENTS (teams) */

const procurement: Detail = {
  slug: "procurement",
  group: "agents",
  eyebrow: "Agentic AI · Team",
  kicker: "TEAM · SOURCING",
  title: "The Procurement team",
  cy: "Procurement",
  lead: "Five agents that turn a material requirement into a confirmed supplier drafting RFQs, evaluating bids, scoring supplier risk, and negotiating terms. The sourcing team runs end-to-end and surfaces a recommended award for your sign-off.",
  intro2: "Rather than one monolithic AI, a supervising orchestrator coordinates the team and owns every human-in-the-loop checkpoint, so the agents do the analytical heavy lifting while procurement managers keep authority over each commercial decision.",
  metaDescription: "IntelliByld's Procurement team (Orchestrator, RFQ, Bid Evaluation, Supplier Intelligence and Negotiation agents) runs construction sourcing end-to-end, from BoQ to a recommended award, with humans in the loop.",
  flow: {
    title: "Sourcing - RFQ to award",
    titleCy: "RFQ to award",
    caption: "The orchestrator routes work; the award is always a human sign-off.",
    height: 318,
    legend: true,
    nodes: [
      { id: "req", label: "Requirement", sub: "BoQ · specs", x: 24, y: 46, w: 150, kind: "source" },
      { id: "rfq", label: "RFQ Agent", sub: "dispatch", x: 210, y: 46, w: 158, kind: "agent" },
      { id: "bid", label: "Bid Evaluation", sub: "normalise · score", x: 404, y: 46, w: 172, kind: "agent" },
      { id: "neg", label: "Negotiation", sub: "price · terms", x: 612, y: 46, w: 152, kind: "agent" },
      { id: "award", label: "Award", sub: "human sign-off", x: 800, y: 46, w: 176, h: 60, kind: "twin" },
      { id: "intel", label: "Supplier Intelligence", sub: "ESG · finance · history", x: 404, y: 158, w: 210, kind: "agent" },
      { id: "orch", label: "Procurement Orchestrator", sub: "routes work · approval gates · audit trail", x: 24, y: 250, w: 952, h: 56, kind: "twin" },
    ],
    edges: [
      { from: "req", to: "rfq" },
      { from: "rfq", to: "bid" },
      { from: "bid", to: "neg" },
      { from: "neg", to: "award" },
      { from: "intel", to: "bid", fromSide: "top", toSide: "bottom", pulses: 1 },
      { from: "orch", to: "req", fromSide: "top", toSide: "bottom", dashed: true, arrow: false, pulses: 1 },
      { from: "orch", to: "award", fromSide: "top", toSide: "bottom", dashed: true, arrow: false, pulses: 1 },
    ],
  },
  agentsHead: "Five agents, one sourcing team",
  agentsCy: "Five agents",
  agents: [
    { ref: "00", name: "Procurement Orchestrator", tag: "Orchestrator · both phases", role: "The conductor of the team: owns workflow state, routes tasks, and manages every approval gate.", duties: ["Maintains the master state of each procurement case", "Routes tasks to the right specialist at each step", "Surfaces decisions to managers at defined gates", "Keeps a full audit trail of actions and approvals"] },
    { ref: "01", name: "RFQ Agent", tag: "Phase 1", role: "Owns the outbound RFQ process, from bill of materials to structured quotations.", duties: ["Drafts RFQs from the BoQ and project specifications", "Shortlists suppliers by category, geography and history", "Dispatches RFQs and handles clarifications inline", "Parses inbound quotations for evaluation"] },
    { ref: "02", name: "Bid Evaluation Agent", tag: "Phase 1", role: "Compares quotations head-to-head on a common baseline.", duties: ["Normalises bids for currency, units and scope", "Scores landed price, technical compliance, lead time, warranty", "Flags non-conformities and unusual variances", "Combines with the supplier score for a final ranking"] },
    { ref: "03", name: "Supplier Intelligence Agent", tag: "Phase 1", role: "Builds a 360° view of each bidder beyond the quotation.", duties: ["Analyses ESG and sustainability disclosures", "Reviews financial health and credit signals", "Mines historical performance from past projects", "Checks compliance, certifications and sanction flags"] },
    { ref: "04", name: "Negotiation Agent", tag: "Phase 1", role: "Runs the commercial negotiation within boundaries the team sets.", duties: ["Engages suppliers on price, terms, lead time and warranty", "Operates strictly within negotiation guardrails", "Logs every offer and counter-offer", "Drafts revised terms for human approval"] },
  ],
  workflowHead: "From requirement to recommended award",
  workflow: [
    { n: "01", title: "Requirement intake", desc: "The orchestrator opens a procurement case from a new material requirement and hands it to the RFQ Agent." },
    { n: "02", title: "RFQ generation & dispatch", desc: "RFQs are drafted from the BoQ, suppliers shortlisted, and once the shortlist is confirmed, dispatched.", gate: true },
    { n: "03", title: "Quotation intake", desc: "Incoming quotations are parsed and structured; bid normalisation begins in parallel." },
    { n: "04", title: "Evaluation & scoring", desc: "Commercial and technical scores combine with the ESG, financial and performance scorecard into one ranking." },
    { n: "05", title: "Team review", desc: "The team reviews the ranked recommendation and, if worth pushing, sets a negotiation mandate.", gate: true },
    { n: "06", title: "Award recommendation", desc: "Negotiated terms come back for the final award decision, always a human sign-off.", gate: true },
  ],
  gatesHead: "Human in the loop",
  gatesNote: "Outside these gates the agents work autonomously, drafting, parsing, scoring and clarifying. Inside them, authority stays with your team.",
  gates: [
    "RFQ dispatch: the supplier shortlist is confirmed before RFQs go out.",
    "Bid award recommendation: the team reviews the ranking before any award.",
    "Negotiation mandate: the team sets the boundaries; the agent works within them.",
    "Final award & PO issuance: always a human decision, never automatic.",
  ],
  outcomesHead: "What the sourcing team delivers",
  outcomes: [
    { h: "Faster sourcing cycles", p: "RFQs go out the same day; quotations are evaluated the moment they arrive." },
    { h: "Better awards", p: "Decisions weigh ESG, financial health and execution history, not just price." },
    { h: "Full traceability", p: "Every recommendation and negotiation move is logged and auditable." },
  ],
  faqs: [
    { q: "Does it replace my procurement team?", a: "No. It removes the busywork. Buyers set strategy, mandates and approvals; the agents handle RFQ drafting, parsing, scoring and negotiation logistics, so the team spends time on judgement, not data entry." },
    { q: "How are suppliers scored?", a: "On a configurable blend of commercial terms (price, lead time, warranty) and a supplier scorecard covering ESG, financial health and past performance. You control the weighting, and every score is explainable." },
    { q: "Where do pilots begin?", a: "From your BoMs. BIM-native ingestion comes later; sourcing starts from the bill of materials and project specs you already have." },
  ],
  ctaTitle: "Turn requirements into confirmed suppliers",
  ctaCy: "confirmed suppliers",
};

const logistics: Detail = {
  slug: "logistics",
  group: "agents",
  eyebrow: "Agentic AI · Team",
  kicker: "TEAM · LOGISTICS",
  title: "The Logistics team",
  cy: "Logistics",
  lead: "Three agents that turn a confirmed supplier into a received delivery by confirming POs, watching for disruption, tracking shipments, and aligning arrivals with site readiness. Phase 2 picks up where sourcing ends and runs to goods receipt.",
  intro2: "The Logistics team shares the Procurement Orchestrator, so the handoff from award to execution carries full context, with no dropped balls between sourcing and the site.",
  metaDescription: "IntelliByld's Logistics team (Order Coordination, Disruption & Risk and Logistics & Site Sync agents) runs construction order execution from PO confirmation to goods receipt, syncing deliveries with site readiness.",
  flow: {
    title: "Execution - PO to goods receipt",
    caption: "Coordinate, watch for disruption, then sync the last mile.",
    height: 318,
    legend: true,
    nodes: [
      { id: "po", label: "Confirmed PO", sub: "from sourcing", x: 24, y: 46, w: 152, kind: "source" },
      { id: "oca", label: "Order Coordination", sub: "status ledger", x: 212, y: 46, w: 182, kind: "agent" },
      { id: "log", label: "Logistics & Site Sync", sub: "track · align", x: 430, y: 46, w: 192, kind: "agent" },
      { id: "site", label: "Site Delivery", sub: "in sync", x: 658, y: 46, w: 148, kind: "physical" },
      { id: "grn", label: "Goods Receipt", sub: "closed", x: 842, y: 46, w: 134, kind: "physical" },
      { id: "disr", label: "Disruption & Risk", sub: "monitors · forecasts", x: 300, y: 158, w: 196, kind: "agent" },
      { id: "orch", label: "Procurement Orchestrator", sub: "shared with sourcing · approval gates", x: 24, y: 250, w: 952, h: 56, kind: "twin" },
    ],
    edges: [
      { from: "po", to: "oca" },
      { from: "oca", to: "log" },
      { from: "log", to: "site" },
      { from: "site", to: "grn" },
      { from: "oca", to: "disr", fromSide: "bottom", toSide: "top", pulses: 1 },
      { from: "disr", to: "log", fromSide: "right", toSide: "bottom", pulses: 1 },
      { from: "orch", to: "po", fromSide: "top", toSide: "bottom", dashed: true, arrow: false, pulses: 1 },
      { from: "orch", to: "grn", fromSide: "top", toSide: "bottom", dashed: true, arrow: false, pulses: 1 },
    ],
  },
  agentsHead: "Three agents for execution & site logistics",
  agents: [
    { ref: "05", name: "Order Coordination Agent", tag: "Phase 2", role: "The day-to-day point of contact for every confirmed order.", duties: ["Confirms POs and validates delivery schedules", "Runs scheduled status check-ins with suppliers", "Captures milestones: production, inspection, dispatch", "Maintains a live order ledger and raises early warnings"] },
    { ref: "06", name: "Disruption & Risk Agent", tag: "Phase 2", role: "The early-warning system for the supply chain.", duties: ["Monitors weather, port congestion, geopolitics, strikes", "Detects missed milestones, quality issues, supplier silence", "Predicts downstream impact on critical-path activities", "Recommends mitigation and escalates high-impact events"] },
    { ref: "07", name: "Logistics & Site Sync Agent", tag: "Phase 2", role: "The last-mile agent that lands materials when the site is ready.", duties: ["Coordinates carriers for pickup, in-transit and ETA", "Tracks shipments across road, sea, rail and air", "Aligns deliveries with manpower and equipment", "Closes the loop with goods-receipt confirmation"] },
  ],
  workflowHead: "From PO to goods receipt",
  workflow: [
    { n: "01", title: "Award & PO issuance", desc: "On approval, the Order Coordination Agent confirms the PO, aligns the schedule, and begins supplier check-ins." },
    { n: "02", title: "Order tracking & risk monitoring", desc: "Through production and dispatch, the order ledger stays live while the Disruption Agent watches for adverse signals." },
    { n: "03", title: "Disruption response", desc: "High-impact events are forecast against the critical path and surfaced with a proposed mitigation plan.", gate: true },
    { n: "04", title: "Shipment & site sync", desc: "On dispatch, shipments are tracked across modes and arrivals are aligned with site readiness." },
    { n: "05", title: "Receipt & closure", desc: "On arrival, receipt is confirmed against the PO, the case is closed, and the experience feeds supplier history." },
  ],
  gatesHead: "Human in the loop",
  gatesNote: "Routine follow-ups, tracking and exception handling run autonomously. The decisions that carry schedule or commercial weight are surfaced for approval.",
  gates: [
    "Disruption response: high-impact mitigation actions are surfaced before they run.",
    "Schedule re-sequencing: material changes to the delivery plan are confirmed.",
    "Goods receipt & exceptions: discrepancies are escalated, not silently absorbed.",
  ],
  outcomesHead: "What the logistics team delivers",
  outcomes: [
    { h: "Early warning", p: "Disruptions are detected and forecast before they hit the critical path." },
    { h: "Site efficiency", p: "Deliveries arrive in sync with manpower and equipment, cutting idle time." },
    { h: "Closed-loop receipt", p: "Goods receipt is confirmed against the PO, with exceptions handled, not lost." },
  ],
  faqs: [
    { q: "How does it catch disruptions early?", a: "It watches both external signals (weather, port congestion, strikes) and internal ones (missed milestones, supplier silence), then forecasts the impact on your critical path before the delay reaches the gate." },
    { q: "Does it share context with sourcing?", a: "Yes. It runs on the same Procurement Orchestrator, so award terms, supplier commitments and schedule context carry straight into execution without re-keying." },
  ],
  ctaTitle: "Turn confirmed orders into on-time deliveries",
  ctaCy: "on-time deliveries",
};

const scope3: Detail = {
  slug: "scope3",
  group: "agents",
  eyebrow: "Agentic AI · Team",
  kicker: "TEAM · SCOPE 3",
  title: "The Scope 3 team",
  cy: "Scope 3",
  lead: "Six agents that quantify, disclose and reduce value-chain emissions by mapping every transaction to a GHG Protocol category, calculating CO₂e at the right data-quality tier, engaging suppliers for primary data, and generating audit-ready disclosures. Carbon becomes a real input to procurement, not a number reported six months late.",
  intro2: "The Scope 3 agents share data with the procurement team, drawing on the same RFQ, supplier and shipment records, so emissions are calculated the moment an order is placed, with no separate carbon data entry.",
  metaDescription: "IntelliByld's Scope 3 team (Orchestrator, Category Mapping, Emissions Calculation, Supplier Data Engagement, Disclosure & Reporting and Reduction Strategy agents) quantifies, discloses and reduces construction value-chain emissions, integrated with procurement.",
  flow: {
    title: "Carbon - PO to disclosure",
    caption: "Map, calculate, collect primary data, then disclose.",
    height: 318,
    legend: true,
    nodes: [
      { id: "po", label: "Confirmed PO", sub: "from procurement", x: 24, y: 46, w: 158, kind: "source" },
      { id: "cat", label: "Category Mapping", sub: "GHG cat 1–15", x: 218, y: 46, w: 176, kind: "agent" },
      { id: "calc", label: "Emissions Calc", sub: "CO₂e · tier", x: 430, y: 46, w: 166, kind: "agent" },
      { id: "led", label: "Carbon Ledger", sub: "by line", x: 632, y: 46, w: 150 },
      { id: "disc", label: "Disclosure", sub: "CSRD · CDP · ISSB", x: 818, y: 46, w: 158, kind: "agent" },
      { id: "sup", label: "Supplier Data", sub: "EPDs · primary", x: 430, y: 158, w: 166, kind: "agent" },
      { id: "red", label: "Reduction Strategy", sub: "hotspots · alternatives", x: 618, y: 158, w: 182, kind: "agent" },
      { id: "orch", label: "Scope 3 Orchestrator", sub: "carbon budgets · disclosure sign-off", x: 24, y: 250, w: 952, h: 56, kind: "twin" },
    ],
    edges: [
      { from: "po", to: "cat" },
      { from: "cat", to: "calc" },
      { from: "calc", to: "led" },
      { from: "led", to: "disc" },
      { from: "sup", to: "calc", fromSide: "top", toSide: "bottom", pulses: 1 },
      { from: "led", to: "red", fromSide: "bottom", toSide: "top", pulses: 1 },
      { from: "orch", to: "sup", fromSide: "top", toSide: "bottom", dashed: true, arrow: false, pulses: 1 },
      { from: "orch", to: "red", fromSide: "top", toSide: "bottom", dashed: true, arrow: false, pulses: 1 },
    ],
  },
  agentsHead: "Six agents across the Scope 3 lifecycle",
  agents: [
    { ref: "00", name: "Scope 3 Orchestrator", tag: "Orchestrator", role: "Manages the lifecycle of every emissions case and routes work between specialists.", duties: ["Maintains state across the emissions lifecycle", "Tracks emissions against project and corporate budgets", "Manages approvals for disclosures and reductions", "Keeps one audit trail of every factor and figure"] },
    { ref: "01", name: "Category Mapping Agent", tag: "Map", role: "Classifies every transaction into the correct GHG Protocol category.", duties: ["Maps line items to the 15 Scope 3 categories", "Handles leased assets, mixed-scope, capex vs opex", "Aligns with CSRD, SEC and ISSB requirements", "Flags ambiguous items for review, never guesses"] },
    { ref: "02", name: "Emissions Calculation Agent", tag: "Calculate", role: "Applies the right emission factor at the right data-quality tier.", duties: ["Uses the GHG hierarchy: supplier-specific → average → spend", "Sources factors from DEFRA, EPA, ecoinvent, EXIOBASE", "Adjusts for geography, material grade and process", "Records the data-quality tier and uncertainty range"] },
    { ref: "03", name: "Supplier Data Engagement Agent", tag: "Collect", role: "Collects primary data from suppliers and upgrades quality over time.", duties: ["Requests emissions data alongside RFQs and POs", "Collects EPDs, product carbon footprints, ISO 14067", "Validates supplier data against benchmarks", "Tracks each supplier's data maturity"] },
    { ref: "04", name: "Disclosure & Reporting Agent", tag: "Report", role: "Turns line-by-line data into the reports you actually file.", duties: ["Produces CSRD ESRS E1 disclosures by category", "Generates GHG Protocol inventory reports", "Prepares CDP and ISSB IFRS S2 submissions", "Builds audit packs with full lineage to source"] },
    { ref: "05", name: "Reduction Strategy Agent", tag: "Reduce", role: "Surfaces the biggest reductions at the moment of decision.", duties: ["Identifies hotspot materials, suppliers and routes", "Models material, supplier and transport switches", "Recommends low-carbon alternatives during RFQ evaluation", "Tracks commitments against science-based targets"] },
  ],
  workflowHead: "From purchase order to disclosure",
  workflow: [
    { n: "01", title: "Transaction capture", desc: "A confirmed PO opens an emissions case; the order is handed to category mapping." },
    { n: "02", title: "Category mapping", desc: "The order is classified (e.g. Scope 3 Category 1, purchased goods) and passed to calculation." },
    { n: "03", title: "Initial calculation", desc: "A regional average factor produces an initial CO₂e value, tagged tier 3 (industry average)." },
    { n: "04", title: "Supplier engagement & refinement", desc: "The supplier's EPD replaces the average factor, upgrading the figure to tier 1; the variance is logged." },
    { n: "05", title: "Transport & reduction", desc: "Shipment data adds Category 4 transport emissions; a low-carbon alternative is surfaced for the next RFQ." },
    { n: "06", title: "Disclosure & audit", desc: "At reporting time the ledger flows into CSRD, CDP or ISSB templates, with every figure tracing back to source.", gate: true },
  ],
  gatesHead: "Human in the loop",
  gatesNote: "The agents ingest, calculate, chase data and draft disclosures autonomously. The decisions that carry regulatory weight stay with the sustainability and finance teams.",
  gates: [
    "Categorisation exceptions: ambiguous mappings are escalated, not guessed.",
    "Emission-factor changes: material updates to the factor library need approval.",
    "Disclosure sign-off: every regulatory submission is reviewed before release.",
    "Reduction commitments: material targets and supplier switches go to the team.",
  ],
  outcomesHead: "What the Scope 3 team delivers",
  outcomes: [
    { h: "Disclosure-ready by default", p: "CSRD, GHG Protocol, CDP and ISSB reports generate from one ledger." },
    { h: "Carbon at the point of decision", p: "Procurement sees CO₂e during bid evaluation, not after the award." },
    { h: "Audit-ready traceability", p: "Every reported tonne traces back to a transaction, a factor and an approver." },
  ],
  faqs: [
    { q: "Does carbon tracking mean extra data entry?", a: "No. The Scope 3 agents draw on the same RFQ, PO and shipment records the procurement agents already produce, so emissions are quantified automatically the moment an order is placed." },
    { q: "Which frameworks are supported?", a: "CSRD ESRS E1, the GHG Protocol, CDP and ISSB IFRS S2, all generated from the same underlying ledger, so there's no recalculation between frameworks." },
    { q: "How does data quality improve over time?", a: "Spend-based and average factors are systematically replaced with primary supplier data (EPDs and verified product carbon footprints), moving figures from tier 3 toward tier 1, with every change logged." },
  ],
  ctaTitle: "Know your footprint at line-item resolution",
  ctaCy: "line-item resolution",
};

export const DETAILS: Detail[] = [deliveryRisk, quotationMismatch, lowerCarbonOption, materialSubstitution, procurement, logistics, scope3];

export const useCaseSlugs = DETAILS.filter((d) => d.group === "use-cases").map((d) => d.slug);
export const agentSlugs = DETAILS.filter((d) => d.group === "agents").map((d) => d.slug);

export function getDetail(group: "use-cases" | "agents", slug: string): Detail | undefined {
  return DETAILS.find((d) => d.group === group && d.slug === slug);
}
