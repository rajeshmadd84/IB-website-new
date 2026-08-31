"use client";

import { useEffect, useState } from "react";

const useCases = [
  { href: "/use-cases/critical-material-delay", label: "Critical Material Delay", sub: "See the programme impact early" },
  { href: "/use-cases/quotation-mismatch", label: "Quotation Mismatch", sub: "Turn supplier bids into a comparable view" },
  { href: "/use-cases/lower-carbon-procurement", label: "Lower-Carbon Procurement", sub: "Compare cost, schedule and carbon" },
  { href: "/use-cases/material-substitution", label: "Material Substitution", sub: "See downstream impact before approval" },
];

function Chevron() {
  return (
    <svg className="ib-drop-caret" width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
      <path d="M2.5 4L5.5 7L8.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const close = () => {
    setOpen(false);
    setUseCasesOpen(false);
  };

  useEffect(() => {
    const els = document.querySelectorAll(".ib-reveal");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="ib-nav">
      <div className="ib-wrap ib-nav-inner">
        <a href="/" className="ib-brand" onClick={close}>
          <span className="ib-logo-crop">
            <img src="/images/bb-logo.svg" alt="Bricks &amp; Brains" className="ib-logo" />
          </span>
        </a>
        <nav className={`ib-nav-links${open ? " open" : ""}`}>
         
          <a href="/b2-intelligence" onClick={close}>
            <span className="ib-b2">B<sub>2</sub></span> Intelligence
          </a>
          <a href="/b2-agents" onClick={close}>
            <span className="ib-b2">B<sub>2</sub></span> Agents
          </a>
          <a href="/b2-carbon" onClick={close}>
            <span className="ib-b2">B<sub>2</sub></span> Carbon
          </a>
          <div className={`ib-nav-drop${useCasesOpen ? " open" : ""}`}>
            <span
              tabIndex={0}
              role="button"
              aria-expanded={useCasesOpen}
              onClick={() => setUseCasesOpen((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setUseCasesOpen((v) => !v);
                }
              }}
            >
              Use Cases
              <Chevron />
            </span>
            <div className="ib-drop-menu">
              {useCases.map((u) => (
                <a key={u.href} href={u.href} onClick={close}>
                  {u.label}
                  <span>{u.sub}</span>
                </a>
              ))}
            </div>
          </div>
          <a href="/contact-us" onClick={close}>
            Contact
          </a>
        </nav>
        <div className="ib-nav-cta">
          <button className="ib-menu-toggle" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Toggle menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
