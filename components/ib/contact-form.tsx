"use client";

import { useState } from "react";
import { IconCheck, IconMail } from "@/components/ib/icons";

const TOPICS = ["Book a pilot", "Partnership", "Investor / BD", "Press", "Something else"];

export default function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", company: "", topic: "", message: "" });
  const [err, setErr] = useState("");
  const [done, setDone] = useState(false);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  const submit = () => {
    if (!f.name.trim()) return setErr("Please add your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) return setErr("Please enter a valid email.");
    if (!f.message.trim()) return setErr("Please add a short message.");
    setErr("");
    // TODO: wire to your backend — POST to /api/contact (email / CRM).
    setDone(true);
  };

  if (done) {
    return (
      <main>
        <section className="ib-sec">
          <div className="ib-wrap">
            <div className="ib-success">
              <div className="tick">
                <IconCheck width={30} height={30} />
              </div>
              <h2>Message sent</h2>
              <p>Thanks, {f.name.split(" ")[0]}. We'll get back to you shortly — usually within two business days.</p>
              <a href="/" className="ib-btn ib-btn-ghost">
                Back to home
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="ib-sec" style={{ paddingTop: "clamp(2.5rem,6vh,4rem)", position: "relative" }}>
        <div className="ib-grid-bg" />
        <div className="ib-wrap" style={{ position: "relative" }}>
          <div className="ib-form-grid">
            <aside className="ib-aside">
              <span className="ib-eyebrow">
                <IconMail /> Contact
              </span>
              <h1>
                Let's talk about your <span className="cy">supply chain</span>
              </h1>
              <p className="ib-lead">Whether you're scoping a pilot, exploring a partnership, or just want to understand the platform — tell us what you're working on.</p>
              <ul className="ib-steps">
                <li>
                  <span className="n">↗</span>
                  <div>
                    <h4>Building in construction?</h4>
                    <p>
                      The fastest path is the{" "}
                      <a href="/pilot" style={{ color: "var(--ib-cyan)" }}>
                        pilot
                      </a>{" "}
                      — one live site, results in three weeks.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="n">in</span>
                  <div>
                    <h4>Prefer LinkedIn?</h4>
                    <p>
                      Reach the team{" "}
                      <a href="https://www.linkedin.com/company/intellibyld" style={{ color: "var(--ib-cyan)" }}>
                        @intellibyld
                      </a>
                      .
                    </p>
                  </div>
                </li>
              </ul>
              <p className="ib-reassure">
                <b>Headquartered in Singapore.</b> Aligned with BCA Site Management Data Standards and the IDD framework.
              </p>
            </aside>

            <div className="ib-card-form">
              <span className="ce">Get in touch</span>
              <h2>Send us a note</h2>
              <div className="ib-field-row">
                <div className="ib-field">
                  <label>
                    Name <span className="req">*</span>
                  </label>
                  <input value={f.name} onChange={set("name")} placeholder="Your name" />
                </div>
                <div className="ib-field">
                  <label>
                    Email <span className="req">*</span>
                  </label>
                  <input value={f.email} onChange={set("email")} placeholder="you@company.com" type="email" />
                </div>
              </div>
              <div className="ib-field-row">
                <div className="ib-field">
                  <label>Company</label>
                  <input value={f.company} onChange={set("company")} placeholder="Company name" />
                </div>
                <div className="ib-field">
                  <label>Topic</label>
                  <select value={f.topic} onChange={set("topic")}>
                    <option value="" disabled>
                      Select…
                    </option>
                    {TOPICS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="ib-field">
                <label>
                  Message <span className="req">*</span>
                </label>
                <textarea value={f.message} onChange={set("message")} placeholder="What are you working on?" style={{ minHeight: 120 }} />
              </div>
              {err && (
                <div className="ib-form-error">
                  <span>⚠</span> {err}
                </div>
              )}
              <div className="ib-form-foot">
                <button className="ib-btn ib-btn-primary" onClick={submit}>
                  Send message <span className="arw">→</span>
                </button>
                <p className="ib-form-note">We reply within 2 business days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
