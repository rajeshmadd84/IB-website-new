const LINKEDIN = "https://www.linkedin.com/company/intellibyld";

const cols = [
  {
    h: "Platform",
    links: [
      ["Agentic AI", "/agentic-ai"],
      ["Digital Twins", "/digital-twins"],
      ["Sustainability", "/sustainability"],
      ["Contact Us", "/contact-us"],
    ],
  },
  {
    h: "Use Cases",
    links: [
      ["Supplier Delay Neutralization", "/use-cases/supplier-delay-neutralization"],
      ["Multi-Site Coordination", "/use-cases/multi-site-coordination"],
      ["Embodied Carbon", "/use-cases/embodied-carbon"],
    ],
  },
  {
    h: "Agents",
    links: [
      ["Procurement", "/agents/procurement"],
      ["Logistics", "/agents/logistics"],
      ["Scope 3", "/agents/scope3"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="ib-foot">
      <div className="ib-wrap">
        <div className="ib-foot-top">
          <div className="ib-foot-about">
            <span className="ib-foot-brand">
              Intelli<b>Byld</b>
            </span>
            <p>The execution layer for construction — turning fragmented site and supply-chain data into autonomous, real-time decisions.</p>
            <a href={LINKEDIN} className="ib-btn ib-btn-ghost" style={{ padding: ".6em 1.1em", fontSize: ".85rem" }}>
              LinkedIn ↗
            </a>
          </div>
          {cols.map((c) => (
            <div className="ib-foot-col" key={c.h}>
              <h4>{c.h}</h4>
              {c.links.map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="ib-foot-bottom">
          <span className="ib-foot-copy">© 2026 IntelliByld. All rights reserved.</span>
          <div className="ib-foot-social">
            <a href="/pilot">Join Pilot</a>
            <a href="/contact-us">Contact</a>
            <a href={LINKEDIN}>LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
