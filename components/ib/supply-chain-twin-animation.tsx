export function SupplyChainTwinAnimation() {
  const inputs = [
    { x: 42, label: "BIM / BOQ", sub: "design demand" },
    { x: 218, label: "ERP / PM", sub: "commercial data" },
    { x: 394, label: "Email / Docs", sub: "project context" },
    { x: 570, label: "Suppliers", sub: "quotes · updates" },
    { x: 746, label: "EPDs", sub: "carbon data" },
  ];

  const outputs = [
    { x: 166, label: "Procurement", sub: "RFQ · bid · award" },
    { x: 414, label: "Logistics", sub: "PO · ETA · site" },
    { x: 662, label: "Embodied Carbon", sub: "EPD · kgCO₂e" },
  ];

  return (
    <div className="ib-twinviz" role="img" aria-label="Animated IntelliByld construction supply chain digital twin. BIM, ERP, documents, suppliers and EPDs feed a live operational twin powered by a knowledge graph and construction-trained SLM. Agentic AI turns that shared state into procurement, logistics and embodied-carbon workflows.">
      <div className="ib-twinviz-bar">
        <span>Live Construction Supply Chain</span>
        <span className="ib-twinviz-live"><i /> REAL-TIME VISIBILITY</span>
      </div>

      <div className="ib-twinviz-canvas">
        <svg viewBox="0 0 960 570" aria-hidden="true">
          <defs>
            <marker id="twin-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M0 0 L8 4 L0 8 Z" fill="var(--ib-line-2)" />
            </marker>
          </defs>

          <text x="30" y="28" className="tv-section-label">SOURCE SYSTEMS + PROJECT DATA</text>
          {inputs.map((n, i) => (
            <g key={n.label} className="tv-input" transform={`translate(${n.x} 48)`} style={{ animationDelay: `${i * 0.16}s` }}>
              <rect width="150" height="58" rx="10" />
              <text x="75" y="25" textAnchor="middle" className="tv-label">{n.label}</text>
              <text x="75" y="43" textAnchor="middle" className="tv-sub">{n.sub}</text>
            </g>
          ))}

          {inputs.map((n, i) => {
            const sx = n.x + 75;
            const tx = 480;
            const d = `M ${sx} 108 C ${sx} 145, ${tx} 142, ${tx} 180`;
            return (
              <g key={`in-${n.label}`}>
                <path d={d} className="tv-edge tv-edge-in" />
                <circle r="3.8" className="tv-pulse tv-pulse-in" style={{ offsetPath: `path('${d}')`, animationDelay: `${i * 0.42}s` }} />
              </g>
            );
          })}

          <g className="tv-twin-core">
            <rect x="102" y="176" width="756" height="194" rx="22" className="tv-core-shell" />
            <rect x="114" y="188" width="732" height="170" rx="17" className="tv-core-inner" />
            <text x="480" y="218" textAnchor="middle" className="tv-core-kicker">INTELLIBYLD CORE</text>
            <text x="480" y="250" textAnchor="middle" className="tv-core-title">Construction Supply Chain Digital Twin</text>
            <text x="480" y="272" textAnchor="middle" className="tv-core-sub">live state of materials · suppliers · orders · shipments · carbon</text>

            <g className="tv-engine tv-engine-kg" transform="translate(178 294)">
              <rect width="270" height="46" rx="10" />
              <circle cx="36" cy="23" r="5" />
              <circle cx="56" cy="13" r="4" />
              <circle cx="61" cy="31" r="4" />
              <path d="M40 20 L52 15 M40 25 L57 29 M57 17 L60 27" />
              <text x="86" y="20" className="tv-engine-title">Knowledge Graph</text>
              <text x="86" y="34" className="tv-engine-sub">entities + relationships</text>
            </g>

            <g className="tv-engine tv-engine-slm" transform="translate(512 294)">
              <rect width="270" height="46" rx="10" />
              <path d="M36 13 h24 a5 5 0 0 1 5 5 v10 a5 5 0 0 1 -5 5 h-24 a5 5 0 0 1 -5 -5 v-10 a5 5 0 0 1 5 -5 z" />
              <path d="M48 13 V9 M44 9 h8 M40 22 h3 M53 22 h3 M40 28 c4 3 12 3 16 0" />
              <text x="86" y="20" className="tv-engine-title">Construction-trained SLM</text>
              <text x="86" y="34" className="tv-engine-sub">domain understanding</text>
            </g>

            <path d="M448 317 L512 317" className="tv-core-link" />
            <circle r="3.5" className="tv-pulse tv-pulse-core" style={{ offsetPath: "path('M448 317 L512 317')" }} />
          </g>

          <path d="M480 370 L480 408" className="tv-edge tv-edge-agent" markerEnd="url(#twin-arrow)" />
          <circle r="4" className="tv-pulse tv-pulse-agent" style={{ offsetPath: "path('M480 370 L480 405')" }} />

          <g className="tv-agent" transform="translate(342 410)">
            <rect width="276" height="54" rx="14" />
            <circle cx="30" cy="27" r="9" />
            <path d="M26 27 h8 M30 23 v8" />
            <text x="54" y="24" className="tv-agent-title">Agentic AI</text>
            <text x="54" y="40" className="tv-agent-sub">monitor · reason · coordinate · recommend</text>
          </g>

          {outputs.map((n, i) => {
            const tx = n.x + 66;
            const sx = 480;
            const d = `M ${sx} 464 C ${sx} 487, ${tx} 480, ${tx} 504`;
            return (
              <g key={n.label}>
                <path d={d} className="tv-edge tv-edge-out" markerEnd="url(#twin-arrow)" />
                <circle r="3.8" className="tv-pulse tv-pulse-out" style={{ offsetPath: `path('${d}')`, animationDelay: `${i * 0.55}s` }} />
                <g className="tv-output" transform={`translate(${n.x} 508)`} style={{ animationDelay: `${i * 0.22}s` }}>
                  <rect width="132" height="48" rx="10" />
                  <text x="66" y="21" textAnchor="middle" className="tv-output-title">{n.label}</text>
                  <text x="66" y="36" textAnchor="middle" className="tv-output-sub">{n.sub}</text>
                </g>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="ib-twinviz-foot">
        <span><b>BIM</b> models what is designed.</span>
        <span className="ib-twinviz-sep">→</span>
        <span><b>IntelliByld</b> models the operational material supply chain.</span>
        <span className="ib-twinviz-badge">NOT A 3D / BIM TWIN</span>
      </div>
    </div>
  );
}
