import type { FCNode, FCEdge } from "@/components/ib/flowchart";

export interface DetailFlow {
  title: string;
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
  splitBody?: string;
  checks?: { b: string; rest: string }[];
  // team layout extras:
  agentsHead?: string;
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

const supplierDelay: Detail = {
  slug: "supplier-delay-neutralization",
  group: "use-cases",
  eyebrow: "Use Case",
  kicker: "USE CASE · 01",
  title: "Neutralize supplier delays before they hit the site",
  cy: "delays",
  lead: "A late shipment used to mean a scramble of phone calls and a slipped pour. IntelliByld catches the slip the moment it appears, models the schedule impact, and re-sources — often before anyone on site would have noticed.",
  metaDescription: "IntelliByld detects supplier delays the moment they appear, models the schedule impact, and autonomously re-sources from ranked vendors — neutralizing slips before they reach the site.",
  flow: {
    title: "Delay Neutralization — live",
    caption: "Detected, analyzed, re-sourced, rerouted — without waiting for a status call.",
    height: 290,
    legend: true,
    nodes: [
      { id: "sig", label: "Delay Signal", sub: "ETA slip", x: 24, y: 44, w: 156, kind: "physical" },
      { id: "imp", label: "Impact Analysis", sub: "critical path", x: 232, y: 44, w: 172, kind: "agent" },
      { id: "alt", label: "Alt Vendors", sub: "ranked", x: 436, y: 44, w: 150 },
      { id: "rfq", label: "RFQ Sent", sub: "auto-dispatch", x: 618, y: 44, w: 158, kind: "agent" },
      { id: "fix", label: "Rerouted", sub: "back on schedule", x: 808, y: 44, w: 168, kind: "physical" },
      { id: "twin", label: "Digital Twin", sub: "updated", x: 300, y: 206, w: 420, h: 60, kind: "twin" },
    ],
    edges: [
      { from: "sig", to: "imp" },
      { from: "imp", to: "alt" },
      { from: "alt", to: "rfq" },
      { from: "rfq", to: "fix" },
      { from: "imp", to: "twin", fromSide: "bottom", toSide: "top", dashed: true, arrow: false, pulses: 1 },
      { from: "rfq", to: "twin", fromSide: "bottom", toSide: "top", dashed: true, arrow: false, pulses: 1 },
    ],
  },
  splitHead: "From three-day fire-drill to three-minute reroute",
  splitBody: "The cost of a delay isn't the delay — it's the hours lost discovering it, the idle crew, and the panic-priced replacement order. IntelliByld compresses all of that into an automatic loop that runs the moment an ETA moves.",
  checks: [
    { b: "Caught at the source.", rest: "A supplier's own ETA update is enough to trigger analysis — no waiting for the missed delivery." },
    { b: "Priced with leverage.", rest: "RFQs go to ranked alternatives in parallel, so you're not negotiating from a position of desperation." },
    { b: "Crew stays productive.", rest: "Because the schedule re-plans around the slip, the next ready task surfaces instead of an idle day." },
  ],
  outcomesHead: "What changes on site",
  outcomes: [
    { h: "Hours, not days", p: "Detection-to-reroute collapses from a multi-day scramble to an automated loop measured in minutes." },
    { h: "Fewer idle crews", p: "Re-planning around the delay keeps people working on what's actually unblocked." },
    { h: "Better replacement pricing", p: "Parallel RFQs to ranked vendors mean you're choosing, not begging." },
  ],
  faqs: [
    { q: "How early can a delay be detected?", a: "As soon as a signal exists — a supplier ETA change, a tracking update, or a missed milestone. The earlier the signal, the more room the agents have to neutralize it before it reaches the critical path." },
    { q: "Does it reorder without my approval?", a: "You set the guardrails. Within them, the agents can dispatch RFQs and surface ranked options automatically; awarding can require a human approval where you want one. Every step is logged." },
  ],
  ctaTitle: "Stop discovering delays on site",
  ctaCy: "delays",
};

const multiSite: Detail = {
  slug: "multi-site-coordination",
  group: "use-cases",
  eyebrow: "Use Case",
  kicker: "USE CASE · 02",
  title: "One control tower for every site",
  cy: "control tower",
  lead: "Running five projects means five supply chains, five sets of fires, and no single view. IntelliByld puts every site into one live control tower — so materials, risk, and capacity can be balanced across the portfolio, not just within one job.",
  metaDescription: "IntelliByld coordinates multi-site construction supply chains from a single live control tower — balancing materials, risk, and capacity across the whole portfolio in real time.",
  flow: {
    title: "Multi-Site Control Tower — live",
    caption: "Every site reports to one twin; the tower rebalances across the portfolio.",
    height: 320,
    legend: true,
    nodes: [
      { id: "s1", label: "Site A", sub: "tower block", x: 26, y: 26, w: 150, h: 56, kind: "physical" },
      { id: "s2", label: "Site B", sub: "podium", x: 26, y: 132, w: 150, h: 56, kind: "physical" },
      { id: "s3", label: "Site C", sub: "infra", x: 26, y: 238, w: 150, h: 56, kind: "physical" },
      { id: "twin", label: "Control Tower", sub: "portfolio twin", x: 410, y: 110, w: 200, h: 96, kind: "twin" },
      { id: "bal", label: "Rebalance", sub: "shift stock / crews", x: 812, y: 86, w: 166, h: 56, kind: "agent" },
      { id: "rep", label: "Portfolio View", sub: "one dashboard", x: 812, y: 192, w: 166, h: 56 },
    ],
    edges: [
      { from: "s1", to: "twin", pulses: 1 },
      { from: "s2", to: "twin", pulses: 1 },
      { from: "s3", to: "twin", pulses: 1 },
      { from: "twin", to: "bal", pulses: 2 },
      { from: "twin", to: "rep", pulses: 1 },
    ],
  },
  splitHead: "Balance the portfolio, not just the project",
  splitBody: "When one site is short on rebar and another is sitting on a surplus, the answer is obvious — but only if someone can see both at once. A shared twin makes cross-site moves visible and actionable instead of accidental.",
  checks: [
    { b: "One source of truth.", rest: "Every site's materials, schedule, and risk live in the same model, at the same freshness." },
    { b: "Cross-site moves.", rest: "Surplus on one job can cover a shortfall on another before either becomes an emergency order." },
    { b: "Portfolio-level risk.", rest: "A supplier wobble that touches three sites is seen as one risk, not three disconnected surprises." },
  ],
  outcomesHead: "What changes across the portfolio",
  outcomes: [
    { h: "Less duplicate buying", p: "Shared visibility means surplus gets used, not re-ordered site by site." },
    { h: "One pane of glass", p: "Executives see every project's supply-chain health in a single live view." },
    { h: "Coordinated response", p: "A shared-supplier risk triggers one coordinated plan across all affected sites." },
  ],
  faqs: [
    { q: "Do all sites need to be on the same systems?", a: "No. The control tower sits above whatever each site already runs and normalizes the picture. New sites are added by connecting their BOMs and channels — the same lightweight pilot path." },
    { q: "Can teams still operate independently?", a: "Yes. Each site keeps its own workflow; the tower adds a portfolio layer on top for visibility and cross-site moves, without forcing every project into one process." },
  ],
  ctaTitle: "Give every site one control tower",
  ctaCy: "control tower",
};

const embodiedCarbon: Detail = {
  slug: "embodied-carbon",
  group: "use-cases",
  eyebrow: "Use Case",
  kicker: "USE CASE · 03",
  title: "Embodied carbon from real delivery data",
  cy: "real delivery data",
  lead: "Estimate-based carbon never survives an audit, because it never reflects what actually arrived. IntelliByld builds the embodied-carbon ledger from real deliveries — every movement logged with its footprint, every report generated automatically.",
  metaDescription: "IntelliByld tracks embodied carbon from actual material deliveries — not estimates — logging each movement's footprint and generating audit-ready reports automatically.",
  flow: {
    title: "Carbon Ledger — live",
    caption: "Each delivery is weighed against emission factors and logged automatically.",
    height: 290,
    legend: true,
    nodes: [
      { id: "del", label: "Material Delivery", sub: "actual quantity", x: 24, y: 52, w: 178, kind: "physical" },
      { id: "eng", label: "Carbon Engine", sub: "EC per item", x: 262, y: 52, w: 168, kind: "agent" },
      { id: "led", label: "Carbon Ledger", sub: "kgCO₂e", x: 492, y: 52, w: 168 },
      { id: "rep", label: "Report", sub: "auto-generated", x: 722, y: 52, w: 168 },
      { id: "epd", label: "EPD / EC3 Data", sub: "factors", x: 262, y: 206, w: 168, kind: "source" },
    ],
    edges: [
      { from: "del", to: "eng" },
      { from: "eng", to: "led" },
      { from: "led", to: "rep" },
      { from: "epd", to: "eng", fromSide: "top", toSide: "bottom", dashed: true, arrow: false, pulses: 1 },
    ],
  },
  splitHead: "A footprint you can actually defend",
  splitBody: "Because the ledger is built from delivery data, it reflects substitutions, reorders, and what truly showed up. That's the difference between a number you present nervously and one that holds up to an auditor or a client.",
  checks: [
    { b: "Audit-ready.", rest: "Every kilogram of CO₂e traces back to a specific logged delivery." },
    { b: "Live, not annual.", rest: "Watch the footprint accumulate as you build, with time to course-correct." },
    { b: "Zero double entry.", rest: "The same delivery record drives logistics, schedule, and carbon at once." },
  ],
  outcomesHead: "What changes for reporting",
  outcomes: [
    { h: "Defensible numbers", p: "Actual-delivery data stands up to scrutiny in a way estimates never do." },
    { h: "Effortless reports", p: "Reporting aligned to green-building requirements generates on its own." },
    { h: "In-flight visibility", p: "See the carbon impact of a substitution at decision time, not year-end." },
  ],
  faqs: [
    { q: "Where do the emission factors come from?", a: "From EPD / EC3-style datasets, matched to each delivered material and multiplied by actual quantity. The factor sources are configurable, so the same engine works across jurisdictions and standards." },
    { q: "Is this extra work for the team?", a: "No — carbon is a field on the deliveries the platform already tracks for logistics. Once deliveries flow through the twin, the ledger and reports populate themselves." },
  ],
  ctaTitle: "Make carbon a measurement, not a guess",
  ctaCy: "measurement",
};

/* ------------------------------------------------------------ AGENTS (teams) */

const procurement: Detail = {
  slug: "procurement",
  group: "agents",
  eyebrow: "Agentic AI · Team",
  kicker: "TEAM · SOURCING",
  title: "The Procurement team",
  cy: "Procurement",
  lead: "Five agents that turn a material requirement into a confirmed supplier — drafting RFQs, evaluating bids, scoring supplier risk, and negotiating terms. The sourcing team runs end-to-end and surfaces a recommended award for your sign-off.",
  intro2: "Rather than one monolithic AI, a supervising orchestrator coordinates the team and owns every human-in-the-loop checkpoint — so the agents do the analytical heavy lifting while procurement managers keep authority over each commercial decision.",
  metaDescription: "IntelliByld's Procurement team — Orchestrator, RFQ, Bid Evaluation, Supplier Intelligence and Negotiation agents — runs construction sourcing end-to-end, from BoQ to a recommended award, with humans in the loop.",
  flow: {
    title: "Sourcing — RFQ to award",
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
  agents: [
    { ref: "00", name: "Procurement Orchestrator", tag: "Orchestrator · both phases", role: "The conductor of the team — owns workflow state, routes tasks, and manages every approval gate.", duties: ["Maintains the master state of each procurement case", "Routes tasks to the right specialist at each step", "Surfaces decisions to managers at defined gates", "Keeps a full audit trail of actions and approvals"] },
    { ref: "01", name: "RFQ Agent", tag: "Phase 1", role: "Owns the outbound RFQ process, from bill of materials to structured quotations.", duties: ["Drafts RFQs from the BoQ and project specifications", "Shortlists suppliers by category, geography and history", "Dispatches RFQs and handles clarifications inline", "Parses inbound quotations for evaluation"] },
    { ref: "02", name: "Bid Evaluation Agent", tag: "Phase 1", role: "Compares quotations head-to-head on a common baseline.", duties: ["Normalises bids for currency, units and scope", "Scores landed price, technical compliance, lead time, warranty", "Flags non-conformities and unusual variances", "Combines with the supplier score for a final ranking"] },
    { ref: "03", name: "Supplier Intelligence Agent", tag: "Phase 1", role: "Builds a 360° view of each bidder beyond the quotation.", duties: ["Analyses ESG and sustainability disclosures", "Reviews financial health and credit signals", "Mines historical performance from past projects", "Checks compliance, certifications and sanction flags"] },
    { ref: "04", name: "Negotiation Agent", tag: "Phase 1", role: "Runs the commercial negotiation within boundaries the team sets.", duties: ["Engages suppliers on price, terms, lead time and warranty", "Operates strictly within negotiation guardrails", "Logs every offer and counter-offer", "Drafts revised terms for human approval"] },
  ],
  workflowHead: "From requirement to recommended award",
  workflow: [
    { n: "01", title: "Requirement intake", desc: "The orchestrator opens a procurement case from a new material requirement and hands it to the RFQ Agent." },
    { n: "02", title: "RFQ generation & dispatch", desc: "RFQs are drafted from the BoQ, suppliers shortlisted, and — once the shortlist is confirmed — dispatched.", gate: true },
    { n: "03", title: "Quotation intake", desc: "Incoming quotations are parsed and structured; bid normalisation begins in parallel." },
    { n: "04", title: "Evaluation & scoring", desc: "Commercial and technical scores combine with the ESG, financial and performance scorecard into one ranking." },
    { n: "05", title: "Team review", desc: "The team reviews the ranked recommendation and, if worth pushing, sets a negotiation mandate.", gate: true },
    { n: "06", title: "Award recommendation", desc: "Negotiated terms come back for the final award decision — always a human sign-off.", gate: true },
  ],
  gatesHead: "Human in the loop",
  gatesNote: "Outside these gates the agents work autonomously — drafting, parsing, scoring and clarifying. Inside them, authority stays with your team.",
  gates: [
    "RFQ dispatch — the supplier shortlist is confirmed before RFQs go out.",
    "Bid award recommendation — the team reviews the ranking before any award.",
    "Negotiation mandate — the team sets the boundaries; the agent works within them.",
    "Final award & PO issuance — always a human decision, never automatic.",
  ],
  outcomesHead: "What the sourcing team delivers",
  outcomes: [
    { h: "Faster sourcing cycles", p: "RFQs go out the same day; quotations are evaluated the moment they arrive." },
    { h: "Better awards", p: "Decisions weigh ESG, financial health and execution history — not just price." },
    { h: "Full traceability", p: "Every recommendation and negotiation move is logged and auditable." },
  ],
  faqs: [
    { q: "Does it replace my procurement team?", a: "No — it removes the busywork. Buyers set strategy, mandates and approvals; the agents handle RFQ drafting, parsing, scoring and negotiation logistics, so the team spends time on judgement, not data entry." },
    { q: "How are suppliers scored?", a: "On a configurable blend of commercial terms (price, lead time, warranty) and a supplier scorecard covering ESG, financial health and past performance. You control the weighting, and every score is explainable." },
    { q: "Where do pilots begin?", a: "From your BoMs. BIM-native ingestion comes later — sourcing starts from the bill of materials and project specs you already have." },
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
  lead: "Three agents that turn a confirmed supplier into a received delivery — confirming POs, watching for disruption, tracking shipments, and aligning arrivals with site readiness. Phase 2 picks up where sourcing ends and runs to goods receipt.",
  intro2: "The Logistics team shares the Procurement Orchestrator, so the handoff from award to execution carries full context — no dropped balls between sourcing and the site.",
  metaDescription: "IntelliByld's Logistics team — Order Coordination, Disruption & Risk and Logistics & Site Sync agents — runs construction order execution from PO confirmation to goods receipt, syncing deliveries with site readiness.",
  flow: {
    title: "Execution — PO to goods receipt",
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
    "Disruption response — high-impact mitigation actions are surfaced before they run.",
    "Schedule re-sequencing — material changes to the delivery plan are confirmed.",
    "Goods receipt & exceptions — discrepancies are escalated, not silently absorbed.",
  ],
  outcomesHead: "What the logistics team delivers",
  outcomes: [
    { h: "Early warning", p: "Disruptions are detected and forecast before they hit the critical path." },
    { h: "Site efficiency", p: "Deliveries arrive in sync with manpower and equipment, cutting idle time." },
    { h: "Closed-loop receipt", p: "Goods receipt is confirmed against the PO, with exceptions handled, not lost." },
  ],
  faqs: [
    { q: "How does it catch disruptions early?", a: "It watches both external signals (weather, port congestion, strikes) and internal ones (missed milestones, supplier silence), then forecasts the impact on your critical path before the delay reaches the gate." },
    { q: "Does it share context with sourcing?", a: "Yes — it runs on the same Procurement Orchestrator, so award terms, supplier commitments and schedule context carry straight into execution without re-keying." },
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
  lead: "Six agents that quantify, disclose and reduce value-chain emissions — mapping every transaction to a GHG Protocol category, calculating CO₂e at the right data-quality tier, engaging suppliers for primary data, and generating audit-ready disclosures. Carbon becomes a real input to procurement, not a number reported six months late.",
  intro2: "The Scope 3 agents share data with the procurement team, drawing on the same RFQ, supplier and shipment records — so emissions are calculated the moment an order is placed, with no separate carbon data entry.",
  metaDescription: "IntelliByld's Scope 3 team — Orchestrator, Category Mapping, Emissions Calculation, Supplier Data Engagement, Disclosure & Reporting and Reduction Strategy agents — quantifies, discloses and reduces construction value-chain emissions, integrated with procurement.",
  flow: {
    title: "Carbon — PO to disclosure",
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
    { n: "02", title: "Category mapping", desc: "The order is classified — e.g. Scope 3 Category 1, purchased goods — and passed to calculation." },
    { n: "03", title: "Initial calculation", desc: "A regional average factor produces an initial CO₂e value, tagged tier 3 (industry average)." },
    { n: "04", title: "Supplier engagement & refinement", desc: "The supplier's EPD replaces the average factor, upgrading the figure to tier 1; the variance is logged." },
    { n: "05", title: "Transport & reduction", desc: "Shipment data adds Category 4 transport emissions; a low-carbon alternative is surfaced for the next RFQ." },
    { n: "06", title: "Disclosure & audit", desc: "At reporting time the ledger flows into CSRD, CDP or ISSB templates — every figure tracing back to source.", gate: true },
  ],
  gatesHead: "Human in the loop",
  gatesNote: "The agents ingest, calculate, chase data and draft disclosures autonomously. The decisions that carry regulatory weight stay with the sustainability and finance teams.",
  gates: [
    "Categorisation exceptions — ambiguous mappings are escalated, not guessed.",
    "Emission-factor changes — material updates to the factor library need approval.",
    "Disclosure sign-off — every regulatory submission is reviewed before release.",
    "Reduction commitments — material targets and supplier switches go to the team.",
  ],
  outcomesHead: "What the Scope 3 team delivers",
  outcomes: [
    { h: "Disclosure-ready by default", p: "CSRD, GHG Protocol, CDP and ISSB reports generate from one ledger." },
    { h: "Carbon at the point of decision", p: "Procurement sees CO₂e during bid evaluation, not after the award." },
    { h: "Audit-ready traceability", p: "Every reported tonne traces back to a transaction, a factor and an approver." },
  ],
  faqs: [
    { q: "Does carbon tracking mean extra data entry?", a: "No. The Scope 3 agents draw on the same RFQ, PO and shipment records the procurement agents already produce, so emissions are quantified automatically the moment an order is placed." },
    { q: "Which frameworks are supported?", a: "CSRD ESRS E1, the GHG Protocol, CDP and ISSB IFRS S2 — all generated from the same underlying ledger, so there's no recalculation between frameworks." },
    { q: "How does data quality improve over time?", a: "Spend-based and average factors are systematically replaced with primary supplier data — EPDs and verified product carbon footprints — moving figures from tier 3 toward tier 1, with every change logged." },
  ],
  ctaTitle: "Know your footprint at line-item resolution",
  ctaCy: "line-item resolution",
};

export const DETAILS: Detail[] = [supplierDelay, multiSite, embodiedCarbon, procurement, logistics, scope3];

export const useCaseSlugs = DETAILS.filter((d) => d.group === "use-cases").map((d) => d.slug);
export const agentSlugs = DETAILS.filter((d) => d.group === "agents").map((d) => d.slug);

export function getDetail(group: "use-cases" | "agents", slug: string): Detail | undefined {
  return DETAILS.find((d) => d.group === group && d.slug === slug);
}
