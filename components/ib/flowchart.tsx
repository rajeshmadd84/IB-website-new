/* ============================================================
   <Flowchart> — reusable animated diagram (pure SVG + CSS).
   No hooks, no client JS — renders as a server component.
   Pulses flow along edges via CSS offset-path; reduced-motion
   hides them. Feed it nodes + edges; positions are in viewBox
   units (default canvas width 1000).
   ============================================================ */

export type NodeKind = "default" | "source" | "agent" | "twin" | "physical";
export type Side = "left" | "right" | "top" | "bottom";

function svgB2(text: string) {
  const parts = text.split("B₂");
  return parts.map((part, index) => (
    <tspan key={`${part}-${index}`}>
      {index > 0 && <>B<tspan baselineShift="sub" fontSize="62%">2</tspan></>}
      {part}
    </tspan>
  ));
}

export interface FCNode {
  id: string;
  label: string;
  sub?: string | string[];
  x: number;
  y: number;
  w?: number;
  h?: number;
  kind?: NodeKind;
  glow?: boolean;
}

export interface FCEdge {
  from: string;
  to: string;
  fromSide?: Side;
  toSide?: Side;
  dashed?: boolean;
  arrow?: boolean; // default true
  pulses?: number;
}

interface FlowchartProps {
  nodes: FCNode[];
  edges: FCEdge[];
  width?: number; // viewBox width
  height: number; // viewBox height
  title?: string;
  titleCy?: string; // substring of title to accent
  caption?: string;
  legend?: boolean;
}

function highlightTitle(title: string, cy?: string) {
  if (!cy) return title;
  const i = title.indexOf(cy);
  if (i < 0) return title;
  return (
    <>
      {title.slice(0, i)}
      <span style={{ color: "var(--ib-cyan)" }}>{cy}</span>
      {title.slice(i + cy.length)}
    </>
  );
}

const NODE_W = 170;
const NODE_H = 62;

function anchor(n: FCNode, side: Side): [number, number] {
  const w = n.w ?? NODE_W;
  const h = n.h ?? NODE_H;
  switch (side) {
    case "left":
      return [n.x, n.y + h / 2];
    case "right":
      return [n.x + w, n.y + h / 2];
    case "top":
      return [n.x + w / 2, n.y];
    case "bottom":
      return [n.x + w / 2, n.y + h];
  }
}

export function Flowchart({ nodes, edges, width = 1000, height, title, titleCy, caption, legend }: FlowchartProps) {
  const byId = new Map(nodes.map((n) => [n.id, n]));

  return (
    <div className="ib-fc">
      {title && (
        <div className="ib-fc-bar">
          <span>{highlightTitle(title, titleCy)}</span>
          <span className="live">
            <i />
            LIVE
          </span>
        </div>
      )}
      <div className="ib-fc-canvas">
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={title || caption || "Process flow diagram"}>
          <defs>
            <marker id="ib-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M1 1 L8 4.5 L1 8 Z" fill="var(--ib-line-2)" />
            </marker>
          </defs>

          {/* edges + pulses */}
          {edges.map((e, i) => {
            const a = byId.get(e.from);
            const b = byId.get(e.to);
            if (!a || !b) return null;
            const [x1, y1] = anchor(a, e.fromSide ?? "right");
            const [x2, y2] = anchor(b, e.toSide ?? "left");
            const dx = x2 - x1;
            const dy = y2 - y1;
            const len = Math.hypot(dx, dy) || 1;
            const ux = dx / len;
            const uy = dy / len;
            const sx = x1 + ux * 6;
            const sy = y1 + uy * 6;
            const ex = x2 - ux * 13;
            const ey = y2 - uy * 13;
            const d = `M ${sx.toFixed(1)} ${sy.toFixed(1)} L ${ex.toFixed(1)} ${ey.toFixed(1)}`;
            const dur = Math.min(3.4, Math.max(1.1, len / 130));
            const count = e.pulses ?? 2;
            const pathStr = `path('${d}')`;
            return (
              <g key={`e${i}`}>
                <path className={`ib-fc-edge${e.dashed ? " dash" : ""}`} d={d} markerEnd={e.arrow === false ? undefined : "url(#ib-arrow)"} />
                {Array.from({ length: count }).map((_, p) => (
                  <circle
                    key={p}
                    className="ib-fc-pulse"
                    r={3.6}
                    fill="var(--ib-cyan)"
                    style={{ offsetPath: pathStr, animationDuration: `${dur}s`, animationDelay: `${((dur / count) * p).toFixed(2)}s` }}
                  />
                ))}
              </g>
            );
          })}

          {/* nodes */}
          {nodes.map((n) => {
            const w = n.w ?? NODE_W;
            const h = n.h ?? NODE_H;
            const kind = n.kind ?? "default";
            const glow = n.glow || kind === "twin";
            const subLines = Array.isArray(n.sub) ? n.sub : n.sub ? [n.sub] : [];
            const twoLine = subLines.length > 0;
            return (
              <g key={n.id} className={`ib-fc-node ib-fc-${kind}${glow ? " ib-fc-glow" : ""}`} transform={`translate(${n.x} ${n.y})`}>
                <rect width={w} height={h} rx={11} />
                <text className="lbl" x={w / 2} y={twoLine ? h / 2 - 4 : h / 2 + 6} textAnchor="middle">
                  {svgB2(n.label)}
                </text>
                {subLines.length > 0 && (
                  <text className="sub" x={w / 2} y={h / 2 + 14} textAnchor="middle">
                    {subLines.map((line, index) => (
                      <tspan key={line} x={w / 2} dy={index === 0 ? 0 : 13}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {legend && (
        <div className="ib-fc-legend">
          <span>
            <i className="ag" />
            AI agent
          </span>
          <span>
            <i className="ph" />
            Physical / site
          </span>
          <span>
            <i className="tw" />
            Shared operational state
          </span>
        </div>
      )}
      {caption && <div className="ib-fc-cap">{caption}</div>}
    </div>
  );
}
