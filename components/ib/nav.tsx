"use client";

import { useEffect, useState } from "react";

const useCases = [
  { href: "/use-cases/supplier-delay-neutralization", label: "Supplier Delay Neutralization", sub: "Reroute before delays hit site" },
  { href: "/use-cases/multi-site-coordination", label: "Multi-Site Coordination", sub: "One control tower, many sites" },
  { href: "/use-cases/embodied-carbon", label: "Embodied Carbon", sub: "Carbon from real delivery data" },
];

function Mark() {
  return (
    <svg className="mark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" stroke="var(--ib-cyan)" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 12l9-5M12 12v10M12 12L3 7" stroke="var(--ib-cyan)" strokeWidth="1.6" strokeLinejoin="round" opacity="0.85" />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

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
          <Mark />
          Intelli<b>Byld</b>
        </a>
        <nav className={`ib-nav-links${open ? " open" : ""}`}>
          <a href="/" onClick={close}>
            Home
          </a>
          <a href="/agentic-ai" onClick={close}>
            Agentic AI
          </a>
          <a href="/digital-twins" onClick={close}>
            Digital Twins
          </a>
          <a href="/sustainability" onClick={close}>
            Sustainability
          </a>
          <div className="ib-nav-drop">
            <span tabIndex={0}>Use Cases</span>
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
          <a href="/contact-us" className="ib-btn ib-btn-ghost">
            Talk to us
          </a>
          <a href="/pilot" className="ib-btn ib-btn-primary">
            Join Pilot <span className="arw">→</span>
          </a>
          <button className="ib-menu-toggle" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Toggle menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
