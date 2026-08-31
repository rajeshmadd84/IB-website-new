import { formatB2 } from "./b2-mark";

const LINKEDIN = "https://www.linkedin.com/company/bricksandbrains";

const cols = [
  {
    h: "Platform",
    links: [
      ["B₂ Intelligence", "/b2-intelligence"],
      ["B₂ Agents", "/b2-agents"],
      ["Material Data Layer", "/material-data-layer"],
      ["B₂ Carbon", "/b2-carbon"],
      ["Contact Us", "/contact-us"],
    ],
  },
  {
    h: "B₂ Agents",
    links: [
      ["B₂ Procurement Agents", "/agents/procurement"],
      ["B₂ Logistics Agents", "/agents/logistics"],
      ["B₂ Carbon", "/agents/scope3"],
    ],
  },
  {
    h: "Use Cases",
    links: [
      ["Critical Material Delay", "/use-cases/critical-material-delay"],
      ["Quotation Mismatch", "/use-cases/quotation-mismatch"],
      ["Lower-Carbon Procurement", "/use-cases/lower-carbon-procurement"],
      ["Material Substitution", "/use-cases/material-substitution"],
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
              <span className="ib-logo-crop ib-logo-crop-footer">
                <img src="/images/bb-logo.svg" alt="Bricks &amp; Brains" className="ib-logo" />
              </span>
            </span>
            <p>Singapore-based AI for construction material supply chains, connecting procurement, logistics and embodied carbon.</p>
            <a href={LINKEDIN} className="ib-btn ib-btn-ghost" style={{ padding: ".6em 1.1em", fontSize: ".85rem" }} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </div>
          {cols.map((c) => (
            <div className="ib-foot-col" key={c.h}>
              <h4>{formatB2(c.h)}</h4>
              {c.links.map(([label, href]) => (
                <a key={href} href={href}>
                  {formatB2(label)}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="ib-foot-bottom">
          <span className="ib-foot-copy">© 2026 Bricks &amp; Brains. All rights reserved.</span>
          <div className="ib-foot-social">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
