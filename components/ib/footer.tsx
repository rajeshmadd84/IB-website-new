"use client";

import { useState } from "react";

const LINKEDIN = "https://www.linkedin.com/company/intellibyld";

const cols = [
  {
    h: "Platform",
    links: [
      ["Agentic AI", "/agentic-ai"],
      ["Material Data Layer", "/material-data-layer"],
      ["Embodied Carbon", "/sustainability"],
      ["Contact Us", "/contact-us"],
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
  {
    h: "Agents",
    links: [
      ["Procurement Agents", "/agents/procurement"],
      ["Logistics Agents", "/agents/logistics"],
      ["Embodied Carbon Agents", "/agents/scope3"],
    ],
  },
];

export default function Footer() {
  const [showImage, setShowImage] = useState(true);

  return (
    <footer className="ib-foot">
      <div className="ib-wrap">
        <div className="ib-foot-top">
          <div className="ib-foot-about">
            <span className="ib-foot-brand">
              <img
                src="/images/logo.svg"
                alt="IntelliByld"
                className="ib-logo"
                style={{ display: showImage ? undefined : "none" }}
                onError={() => setShowImage(false)}
                onLoad={() => setShowImage(true)}
              />
              {!showImage && (
                <>
                  Intelli<b>Byld</b>
                </>
              )}
            </span>
            <p>Singapore-based AI for construction material supply chains, connecting procurement, logistics and embodied carbon.</p>
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
            <a href="/contact-us">Start Pilot</a>
            
            <a href={LINKEDIN}>LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
